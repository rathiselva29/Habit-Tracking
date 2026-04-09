const CACHE_NAME = 'habit-tracker-cache-v2';
const OFFLINE_URL = 'offline.html';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './login.html',
  './habit-categories.html',
  './daily-tracker.html',
  './progress.html',
  './customize.html',
  './offline.html',
  './app.js',
  './habits-data.js',
  './chatbot.js',
  './confetti.js',
  './style.css',
  './manifest.json',
  './img_192.png',
  './image/train img.png',
  './assets/icons/default.svg',
  './assets/icons/water.svg',
  './assets/icons/custom.svg',
  './assets/icons/exercise.svg',
  './assets/icons/reading.svg',
  './assets/illustrations/train img.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then(networkResponse => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          return networkResponse;
        })
        .catch(() => caches.match(OFFLINE_URL));
    })
  );
});

self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {
    title: 'HabitFlow Reminder',
    body: 'Open HabitFlow to continue building your streaks!',
    icon: 'assets/icons/default.svg'
  };

  const options = {
    body: data.body,
    icon: data.icon,
    badge: 'img_192.png',
    vibrate: [200, 100, 200],
    data: {
      url: './index.html'
    }
  };

  event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(clientList => {
      for (const client of clientList) {
        if (client.url.includes('index.html') && 'focus' in client) {
          return client.focus();
        }
      }
      return clients.openWindow('./index.html');
    })
  );
});

self.addEventListener('periodicsync', event => {
  if (event.tag === 'habit-sync') {
    event.waitUntil(fetchAndCacheLatestData());
  }
});

async function fetchAndCacheLatestData() {
  try {
    const cache = await caches.open(CACHE_NAME);
    const response = await fetch('./habits-data.js');
    if (response && response.ok) {
      await cache.put('./habits-data.js', response.clone());
    }
    return response;
  } catch (error) {
    return caches.match('./habits-data.js');
  }
}
