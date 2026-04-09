self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app-cache").then(cache => {
      return cache.addAll([
        "/Habit-Tracking/",
        "/Habit-Tracking/index.html",
        "/Habit-Tracking/style.css",
        "/Habit-Tracking/script.js"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});