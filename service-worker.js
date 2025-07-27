const CACHE_NAME = 'rifal-ucapan-cache-v1';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Great+Vibes&family=Pacifico&family=Poppins:wght@300;600&display=swap',
  'https://i.ibb.co/TvF7Bt6/clouds.png',
  'https://i.ibb.co/D5rKhNv/leaves.gif',
  'https://i.ibb.co/mFGmM1n/icon-192.png',
  'https://i.ibb.co/yRxqJDd/icon-512.png',
  'https://notificationsounds.com/storage/sounds/file-sounds-1150-light.mp3',
  'https://www.bensound.com/bensound-music/bensound-sunny.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});