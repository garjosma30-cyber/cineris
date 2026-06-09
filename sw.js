/* ============================================================================
   SECTOR CINERIS — Service Worker (modo offline)
   Sube el número de versión cuando cambies archivos para forzar actualización.
   ========================================================================== */
var VERSION = "cineris-v1";
var CORE = [
  "./",
  "index.html",
  "css/styles.css",
  "js/app.js",
  "js/data.js",
  "assets/favicon.svg",
  "manifest.webmanifest"
];

self.addEventListener("install", function (ev) {
  ev.waitUntil(
    caches.open(VERSION).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (ev) {
  ev.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) { if (k !== VERSION) return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (ev) {
  var req = ev.request;
  if (req.method !== "GET") return;

  /* navegación: red primero, si no hay conexión sirve el index cacheado */
  if (req.mode === "navigate") {
    ev.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(VERSION).then(function (c) { c.put(req, copy); });
        return res;
      }).catch(function () {
        return caches.match(req).then(function (hit) { return hit || caches.match("index.html"); });
      })
    );
    return;
  }

  /* resto (css/js/imágenes/fuentes): caché primero, actualizando en segundo plano */
  ev.respondWith(
    caches.match(req).then(function (hit) {
      var update = fetch(req).then(function (res) {
        if (res && (res.status === 200 || res.type === "opaque")) {
          var copy = res.clone();
          caches.open(VERSION).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () { return hit; });
      return hit || update;
    })
  );
});
