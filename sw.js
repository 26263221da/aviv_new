// sw.js
self.addEventListener("install",e=>{
  e.waitUntil(caches.open("news-cache").then(c=>c.addAll([
    "/","/index.html","/manifest.json","/icon.svg"
  ])));
});
self.addEventListener("fetch",e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
