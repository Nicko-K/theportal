var APP_VERSION = 4;

var CACHE_NAME = `the_portal_v${APP_VERSION}`;

var PREV_CACHE_NAME = `the_portal_v${APP_VERSION - 1}`;

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.delete(PREV_CACHE_NAME).then(function() {
            caches.open(CACHE_NAME).then(function(cache){
                cache.addAll([
                    './manifest.json',
                    './favicon.ico',
                    './assets/header.jpeg',
                ]);
            });
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(
            function(response) {
                if (response) {
                    return response;
                }
                var requestToCache = event.request.clone();

                return fetch(event.request).then(
                    function(response) {
                        if (!response || response.status !== 200) {
                            return response;
                        }
                        var responseToCache = response.clone();
                        caches.open(CACHE_NAME).then(
                            function(cache) {
                                cache.put(requestToCache, responseToCache);
                            }
                        );
                        return response;
                    }
                );
            }
        )
    );
});
