const CACHE_NAME_CORE = 'cache-v1';
const CACHE_FILES_CORE = [
    'src/images/icons/icon-144x144.png',
    '/manifest.webmanifest.json',
    '/src/images/computer.jpg',
    '/favicon.ico',
    'src/css/app.css',
    'src/js/app.js',
    'index.html',
    './'
];

const CACHE_NAME_INMUTABLE = 'inmutable-v1';
const CACHE_FILES_INMUTABLE = [
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://code.getmdl.io/1.3.0/material.brown-orange.min.css',
    'https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
    'https://code.getmdl.io/1.3.0/material.min.js',
    'https://unpkg.com/pwacompat',
];


self.addEventListener('install', (event) => {
    const guardandoCache = caches.open(CACHE_NAME_CORE)
    .then(cache => {
       return cache.addAll(CACHE_FILES_CORE);
    });
    const guardandoCache_core = caches.open(CACHE_NAME_INMUTABLE)
    .then(cache => {
       return cache.addAll(CACHE_FILES_INMUTABLE);
    });
    self.skipWaiting();
    event.waitUntil(guardandoCache_core);
});

self.addEventListener('activate', (event) => {
    // La documentación nos indica eliminar todos las caches anteriores
    console.info('[SW]: Archivo exitosamente guardado...');
   // event.waitUntil(clients.claim());
});

// fech insertesa todo los eventos post url, ects
self.addEventListener('fetch', (event) => {
    if(!(event.request.url.indexOf('http') === 0)){
        return;
      }

    // Solo cache
    const soloCache = caches.match(event.request);
    event.respondWith(soloCache);
});


// Evento Sync

self.addEventListener('sync', (event) => {
    console.log('------------------------------');
    console.log(event);
    console.log('-------------------------------');
})

self.addEventListener('push', (event) => {
    console.error(event);
} );
