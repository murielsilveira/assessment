self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open('number-to-phrase-v1').then(function(cache){
      return cache.addAll([
        '/',
        '/?homescreen=1',
        '/number-to-phrase.js',
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
