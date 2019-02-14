if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js", {
      scope: ""
    })
    .then(reg => console.log(reg.scope))

    .catch(error => {
      console.log(error);
    });
}
