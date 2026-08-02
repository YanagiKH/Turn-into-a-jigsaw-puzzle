package com.yanagikh.jigsaw

import android.net.Uri
import android.os.Bundle
import android.webkit.JavascriptInterface
import android.webkit.ValueCallback
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.OnBackPressedCallback
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.webkit.WebViewAssetLoader
import org.json.JSONObject
import java.nio.charset.StandardCharsets

class MainActivity : AppCompatActivity() {
    private lateinit var webView: WebView
    private var webFileCallback: ValueCallback<Array<Uri>>? = null
    private var pendingLoadRequestId: String? = null
    private var pendingSave: PendingSave? = null

    private data class PendingSave(
        val requestId: String,
        val fileName: String,
        val content: String
    )

    private val fileChooserLauncher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        val uris = WebChromeClient.FileChooserParams.parseResult(result.resultCode, result.data)
        webFileCallback?.onReceiveValue(uris)
        webFileCallback = null
    }

    private val projectOpenLauncher = registerForActivityResult(
        ActivityResultContracts.OpenDocument()
    ) { uri ->
        val requestId = pendingLoadRequestId ?: return@registerForActivityResult
        pendingLoadRequestId = null
        if (uri == null) {
            completeBridge(requestId, JSONObject().put("canceled", true))
            return@registerForActivityResult
        }

        runCatching {
            contentResolver.openInputStream(uri)?.bufferedReader(StandardCharsets.UTF_8)?.use { it.readText() }
                ?: error("Unable to open selected project file")
        }.onSuccess { content ->
            completeBridge(
                requestId,
                JSONObject()
                    .put("canceled", false)
                    .put("content", content)
                    .put("filePath", uri.toString())
            )
        }.onFailure { error ->
            completeBridge(requestId, JSONObject().put("error", error.message ?: "Unable to load project"))
        }
    }

    private val projectSaveLauncher = registerForActivityResult(
        ActivityResultContracts.CreateDocument("application/json")
    ) { uri ->
        val request = pendingSave ?: return@registerForActivityResult
        pendingSave = null
        if (uri == null) {
            completeBridge(request.requestId, JSONObject().put("canceled", true))
            return@registerForActivityResult
        }

        runCatching {
            contentResolver.openOutputStream(uri, "wt")?.bufferedWriter(StandardCharsets.UTF_8)?.use {
                it.write(request.content)
                it.flush()
            } ?: error("Unable to create project file")
        }.onSuccess {
            completeBridge(
                request.requestId,
                JSONObject()
                    .put("canceled", false)
                    .put("filePath", uri.toString())
            )
        }.onFailure { error ->
            completeBridge(request.requestId, JSONObject().put("error", error.message ?: "Unable to save project"))
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webView)
        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()

        webView.webViewClient = object : WebViewClient() {
            override fun shouldInterceptRequest(
                view: WebView?,
                request: WebResourceRequest
            ): WebResourceResponse? = assetLoader.shouldInterceptRequest(request.url)
        }

        webView.webChromeClient = object : WebChromeClient() {
            override fun onShowFileChooser(
                webView: WebView?,
                filePathCallback: ValueCallback<Array<Uri>>,
                fileChooserParams: FileChooserParams
            ): Boolean {
                webFileCallback?.onReceiveValue(null)
                webFileCallback = filePathCallback
                return runCatching {
                    fileChooserLauncher.launch(fileChooserParams.createIntent())
                    true
                }.getOrElse {
                    webFileCallback = null
                    false
                }
            }
        }

        webView.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            databaseEnabled = true
            allowFileAccess = false
            allowContentAccess = true
            cacheMode = WebSettings.LOAD_DEFAULT
            mediaPlaybackRequiresUserGesture = false
            useWideViewPort = true
            loadWithOverviewMode = true
            builtInZoomControls = false
            displayZoomControls = false
        }
        WebView.setWebContentsDebuggingEnabled(BuildConfig.DEBUG)
        webView.addJavascriptInterface(AndroidBridge(), "AndroidBridge")
        webView.setBackgroundColor(0xFF0E1117.toInt())

        if (savedInstanceState == null) {
            webView.loadUrl("https://appassets.androidplatform.net/assets/index.html")
        } else {
            webView.restoreState(savedInstanceState)
        }

        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                if (webView.canGoBack()) webView.goBack() else finish()
            }
        })
    }

    override fun onSaveInstanceState(outState: Bundle) {
        webView.saveState(outState)
        super.onSaveInstanceState(outState)
    }

    override fun onDestroy() {
        webFileCallback?.onReceiveValue(null)
        webFileCallback = null
        webView.removeJavascriptInterface("AndroidBridge")
        webView.destroy()
        super.onDestroy()
    }

    private fun completeBridge(requestId: String, result: JSONObject) {
        val script = "window.__androidBridgeComplete(" +
            JSONObject.quote(requestId) + "," +
            JSONObject.quote(result.toString()) +
            ");"
        webView.post { webView.evaluateJavascript(script, null) }
    }

    private fun sanitizeFileName(value: String): String {
        val safe = value.replace(Regex("[\\\\/:*?\"<>|]"), "_").trim()
        return if (safe.endsWith(".json", ignoreCase = true)) safe else "$safe.json"
    }

    private inner class AndroidBridge {
        @JavascriptInterface
        fun saveProject(requestId: String, suggestedName: String, content: String) {
            runOnUiThread {
                val fileName = sanitizeFileName(suggestedName.ifBlank { "puzzle-project.json" })
                pendingSave = PendingSave(requestId, fileName, content)
                projectSaveLauncher.launch(fileName)
            }
        }

        @JavascriptInterface
        fun loadProject(requestId: String) {
            runOnUiThread {
                pendingLoadRequestId = requestId
                projectOpenLauncher.launch(
                    arrayOf("application/json", "text/json", "text/plain", "application/octet-stream")
                )
            }
        }
    }
}
