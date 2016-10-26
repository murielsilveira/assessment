self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open('number-to-phrase-v1').then(function(cache){
      return cache.addAll([
        '/assessment/',
        '/assessment/?homescreen=1',
        '/assessment/number-to-phrase.js',
        '/assessment/main.js',
        '/assessment/main.css',
      ]).then(function(){
        self.skipWaiting()
      })
    })
  )
})

self.addEventListener('activate', function(event){
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request)
    })
  )
})
