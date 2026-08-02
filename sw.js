const CACHE = 'turn-into-a-jigsaw-puzzle-v4';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './mobile.css',
  './challenge.css',
  './platform-bridge.js',
  './renderer.js',
  './challenge-mode.js',
  './pwa.js',
  './manifest.webmanifest',
  './assets/icon.svg',
  './mods/index.json',
  './mods/aurora-theme/mod.json',
  './mods/aurora-theme/index.js',
  './mods/java-toolkit/mod.json',
  './mods/java-toolkit/Main.java',
  './mods/kotlin-toolkit/mod.json',
  './mods/kotlin-toolkit/Main.kt'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => key === CACHE ? null : caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).then((response) => {
      if (!response || response.status !== 200 || response.type === 'opaque') return response;
      const copy = response.clone();
      caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});
