// Service Worker básico para permitir instalação PWA offline e cache do FrevAI
const CACHE_NAME = 'frevai-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/config.js',
  './js/aws.js',
  './js/app.js',
  './manifest.json',
  './assets/icons/icon.svg',
  './assets/icons/icon-192x192.png',
  './assets/icons/icon-512x512.png',
  './assets/icons/apple-touch-icon.png',
  './assets/icons/favicon-32x32.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).catch(err => {
      console.log('[ServiceWorker] Cache parcial:', err);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Estratégia Network First com Fallback para Cache
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});

// Push Notifications Event
self.addEventListener('push', (event) => {
  let data = {
    title: 'FrevAI — Notificação Cultural',
    body: 'Novidades no acervo do Frevo!',
    icon: './assets/icons/icon-192x192.png',
    badge: './assets/icons/icon-192x192.png',
    data: { url: './#feed' }
  };

  if (event.data) {
    try {
      const payload = event.data.json();
      data = { ...data, ...payload };
    } catch {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: data.icon || './assets/icons/icon-192x192.png',
    badge: data.badge || './assets/icons/icon-192x192.png',
    vibrate: [100, 50, 100],
    data: data.data || { url: './#feed' }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Clique na Notificação Push: Abre o app e direciona para a partitura ou post específico
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) ? event.notification.data.url : './#feed';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url && 'focus' in client) {
          client.navigate(targetUrl);
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
