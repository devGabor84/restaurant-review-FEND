self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("v2.4").then(cache => {
      return cache
        .addAll([
          "./index.html",
          "./restaurant.html",
          "./css/styles.css",
          "./js/dbhelper.js",
          "./js/main.js",
          "./js/restaurant_info.js",
          "./data/restaurants.json",
          "./img/1.jpg",
          "./img/2.jpg",
          "./img/3.jpg",
          "./img/4.jpg",
          "./img/5.jpg",
          "./img/6.jpg",
          "./img/7.jpg",
          "./img/8.jpg",
          "./img/9.jpg",
          "./img/10.jpg",
          "./restaurant.html?id=1",
          "./restaurant.html?id=2",
          "./restaurant.html?id=3",
          "./restaurant.html?id=4",
          "./restaurant.html?id=5",
          "./restaurant.html?id=6",
          "./restaurant.html?id=7",
          "./restaurant.html?id=8",
          "./restaurant.html?id=9",
          "./restaurant.html?id=10"
        ])
        .catch(error => console.log(error));
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response) return response;
      return fetch(e.request).then(response => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        const responseToCache = response.clone();

        caches.open("v2.4").then(cache => {
          cache.put(e.request, responseToCache);
        });
        return response;
      });
    })
  );
});
