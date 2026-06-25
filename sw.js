const CACHE_NAME = 'wenji-supermap-v2.2.1';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            // 如果快取裡有就回傳，沒有就去網路抓
            return response || fetch(event.request);
        })
    );
});
