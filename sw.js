/* Service worker — CACHE_FILES généré par scripts/generate-sw-cache-list.mjs */
const CACHE_NAME = 'bac-fr-v1';
const CACHE_FILES = [
  '/assets/favicon.svg',
  '/assets/icon-192.svg',
  '/assets/icon-512.svg',
  '/assets/logo.svg',
  '/css/styles.css',
  '/index.html',
  '/js/bac-countdown.js',
  '/js/boot.js',
  '/js/built/data-gtextes-chunk1.js',
  '/js/built/data-gtextes-chunk2.js',
  '/js/built/data-gtextes-chunk3.js',
  '/js/data-auteurs.js',
  '/js/data-bac-passages-01.js',
  '/js/data-bac-passages-02.js',
  '/js/data-bac-passages-03.js',
  '/js/data-bac-passages-04.js',
  '/js/data-bac-passages-05.js',
  '/js/data-bac-passages-06.js',
  '/js/data-bac-passages-07.js',
  '/js/data-bac-passages-08.js',
  '/js/data-bac-passages-09.js',
  '/js/data-bac-passages-10.js',
  '/js/data-bac-passages-11.js',
  '/js/data-bac-passages-12.js',
  '/js/data-bac-passages-13.js',
  '/js/data-bac-passages-14.js',
  '/js/data-bac-passages-15.js',
  '/js/data-bac-passages-16.js',
  '/js/data-bac-passages-17.js',
  '/js/data-bac-passages-18.js',
  '/js/data-bac-passages-19.js',
  '/js/data-bac-passages-20.js',
  '/js/data-bac-passages.js',
  '/js/data-corpus.js',
  '/js/data-exercices.js',
  '/js/data-grammaire.js',
  '/js/data-gtextes-extra.js',
  '/js/data-gtextes-extra10.js',
  '/js/data-gtextes-extra11.js',
  '/js/data-gtextes-extra12.js',
  '/js/data-gtextes-extra13.js',
  '/js/data-gtextes-extra14.js',
  '/js/data-gtextes-extra15.js',
  '/js/data-gtextes-extra16.js',
  '/js/data-gtextes-extra17.js',
  '/js/data-gtextes-extra18.js',
  '/js/data-gtextes-extra19.js',
  '/js/data-gtextes-extra2.js',
  '/js/data-gtextes-extra20.js',
  '/js/data-gtextes-extra21.js',
  '/js/data-gtextes-extra3.js',
  '/js/data-gtextes-extra4.js',
  '/js/data-gtextes-extra5.js',
  '/js/data-gtextes-extra6.js',
  '/js/data-gtextes-extra7.js',
  '/js/data-gtextes-extra8.js',
  '/js/data-gtextes-extra9.js',
  '/js/data-gtextes-loader.js',
  '/js/data-gtextes-oeuvre-by-id.js',
  '/js/data-gtextes.js',
  '/js/data-intro-simulator.js',
  '/js/data-lazy.js',
  '/js/data-periodes.js',
  '/js/data-proc-howto.js',
  '/js/data-procedes.js',
  '/js/data-qcm-extra.js',
  '/js/data-qcm-generated.js',
  '/js/data-qcm-phrases.js',
  '/js/data-vocabulaire-extra.js',
  '/js/data-vocabulaire.js',
  '/js/ollama-comment.js',
  '/js/pages-loader.js',
  '/js/pages/auteurs.js',
  '/js/pages/boot-app.js',
  '/js/pages/cartes.js',
  '/js/pages/challenge.js',
  '/js/pages/core.js',
  '/js/pages/corpus.js',
  '/js/pages/daily-review.js',
  '/js/pages/exam.js',
  '/js/pages/exercices.js',
  '/js/pages/favoris.js',
  '/js/pages/gram.js',
  '/js/pages/gtextes.js',
  '/js/pages/intro-sim.js',
  '/js/pages/keyboard.js',
  '/js/pages/periodes.js',
  '/js/pages/proc.js',
  '/js/pages/qcm.js',
  '/js/pages/revision-print.js',
  '/js/pages/score-compare.js',
  '/js/pages/stats-ui.js',
  '/js/pages/vocab.js',
  '/js/qcm-filter.js',
  '/js/screen-fit.js',
  '/js/script-loader.js',
  '/js/sounds.js',
  '/js/stats-engine.js',
  '/js/time-tracker.js',
  '/manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CACHE_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const pathname = url.pathname.replace(/\/$/, '') || '/index.html';
  const isIndex = pathname === '/index.html' || pathname === '/';

  if (isIndex) {
    event.respondWith(networkFirst(req));
    return;
  }
  event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
  const cached = await caches.match(req);
  if (cached) return cached;
  try {
    const res = await fetch(req);
    if (res.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(req, res.clone());
    }
    return res;
  } catch (err) {
    return cached || Response.error();
  }
}

async function networkFirst(req) {
  try {
    const res = await fetch(req);
    if (res.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(req, res.clone());
    }
    return res;
  } catch (err) {
    const cached = await caches.match(req) || await caches.match('/index.html');
    if (cached) return cached;
    throw err;
  }
}
