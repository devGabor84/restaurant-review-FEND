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
          "../img/10.jpg",
          "/restaurant-review-FEND/",
          "/restaurant-review-FEND/index.html",
          "/restaurant-review-FEND/restaurant.html",
          "/restaurant-review-FEND/restaurant.html?id=1",
          "/restaurant-review-FEND/restaurant.html?id=2",
          "/restaurant-review-FEND/restaurant.html?id=3",
          "/restaurant-review-FEND/restaurant.html?id=4",
          "/restaurant-review-FEND/restaurant.html?id=5",
          "/restaurant-review-FEND/restaurant.html?id=6",
          "/restaurant-review-FEND/restaurant.html?id=7",
          "/restaurant-review-FEND/restaurant.html?id=8",
          "/restaurant-review-FEND/restaurant.html?id=9",
          "/restaurant-review-FEND/restaurant.html?id=10",
          "/restaurant-review-FEND/js/main.js",
          "/restaurant-review-FEND/js/restaurant_info.js",
          "/restaurant-review-FEND/js/dbhelper.js",
          "/restaurant-review-FEND/css/styles.css",
          "/restaurant-review-FEND/data/restaurants.json"
        ])
        .catch(error => console.log(error));
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response) return response;
      return fetch(e.request);
    })
  );
});
