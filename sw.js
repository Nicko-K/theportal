var APP_VERSION = 2;

var CACHE_NAME = `the_portal_v${APP_VERSION}`;

var PREV_CACHE_NAME = `the_portal_v${APP_VERSION - 1}`;

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.delete(PREV_CACHE_NAME).then(function() {
            caches.open(CACHE_NAME).then(function(cache){
                cache.addAll([
                    './manifest.json',
                    './favicon.ico',
                    './449.2a3b8f91e9927a7e957b.js',
                    './main.2a3b8f91e9927a7e957b.js',
                    './runtime.2a3b8f91e9927a7e957b.js',
                    './assets/header.jpeg',
                    './fonts/Mulish-Black.eot',
                    './fonts/Mulish-Black.ttf',
                    './fonts/Mulish-Black.woff',
                    './fonts/Mulish-Black.woff2',
                    './fonts/Mulish-Bold.eot',
                    './fonts/Mulish-Bold.ttf',
                    './fonts/Mulish-Bold.woff',
                    './fonts/Mulish-Bold.woff2',
                    './fonts/Mulish-ExtraBold.eot',
                    './fonts/Mulish-ExtraBold.ttf',
                    './fonts/Mulish-ExtraBold.woff',
                    './fonts/Mulish-ExtraBold.woff2',
                    './fonts/Mulish-ExtraLight.eot',
                    './fonts/Mulish-ExtraLight.ttf',
                    './fonts/Mulish-ExtraLight.woff',
                    './fonts/Mulish-ExtraLight.woff2',
                    './fonts/Mulish-Light.eot',
                    './fonts/Mulish-Light.ttf',
                    './fonts/Mulish-Light.woff',
                    './fonts/Mulish-Light.woff2',
                    './fonts/Mulish-Medium.eot',
                    './fonts/Mulish-Medium.ttf',
                    './fonts/Mulish-Medium.woff',
                    './fonts/Mulish-Medium.woff2',
                    './fonts/Mulish-Regular.eot',
                    './fonts/Mulish-Regular.ttf',
                    './fonts/Mulish-Regular.woff',
                    './fonts/Mulish-Regular.woff2',
                    './fonts/Mulish-SemiBold.eot',
                    './fonts/Mulish-SemiBold.ttf',
                    './fonts/Mulish-SemiBold.woff',
                    './fonts/Mulish-SemiBold.woff2',
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
