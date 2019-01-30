self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("v1.2").then(cache => {
      return cache
        .addAll([
          "../index.html",
          "../restaurant.html",
          "../css/styles.css",
          "./dbhelper.js",
          "./main.js",
          "./restaurant_info.js",
          "../data/restaurants.json",
          "../img/1.jpg",
          "../img/2.jpg",
          "../img/3.jpg",
          "../img/4.jpg",
          "../img/5.jpg",
          "../img/6.jpg",
          "../img/7.jpg",
          "../img/8.jpg",
          "../img/9.jpg",
          "../img/10.jpg"
        ])
        .catch(error => console.log(error));
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      if (response) {
        return response;
      } else {
        return fetch(e.request).then(response => {
          caches.open("v1.2").then(cache => {
            cache.put(e.request, repsonse.clone());
          });
          return response;
        });
      }
    })
  );
});
