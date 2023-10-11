self.addEventListener('install', (event) => {
    console.info('[SW] Install...');
});
self.addEventListener('Activate', (event) => {
    console.info('[SW] Activate...');
});
self.addEventListener('fetch', (event) => {
    console.info('[SW] fetch...');
});

