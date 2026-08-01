(() => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }

  let deferredPrompt = null;
  const installBar = document.createElement('div');
  installBar.className = 'install-bar hidden';
  installBar.innerHTML = '<span>Install the game for offline use.</span><button type="button" id="installBtn">Install</button><button type="button" id="dismissBtn" class="ghost">Dismiss</button>';
  document.addEventListener('DOMContentLoaded', () => document.body.appendChild(installBar));

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installBar.classList.remove('hidden');
  });

  document.addEventListener('click', async (event) => {
    if (event.target && event.target.id === 'installBtn') {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      await deferredPrompt.userChoice.catch(() => {});
      deferredPrompt = null;
      installBar.classList.add('hidden');
    }
    if (event.target && event.target.id === 'dismissBtn') {
      installBar.classList.add('hidden');
    }
  });
})();
