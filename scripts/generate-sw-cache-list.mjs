/**
 * Scanne js/ et met à jour le tableau CACHE_FILES dans sw.js.
 * Usage: node scripts/generate-sw-cache-list.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function walkJs(dir, relBase) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = `${relBase}/${ent.name}`.replace(/\\/g, '/');
    if (ent.isDirectory()) out.push(...walkJs(path.join(dir, ent.name), rel));
    else if (ent.name.endsWith('.js')) out.push('/' + rel);
  }
  return out;
}

const staticExtras = [
  '/index.html',
  '/css/styles.css',
  '/manifest.json',
  '/assets/favicon.svg',
  '/assets/logo.svg',
  '/assets/icon-192.svg',
  '/assets/icon-512.svg',
  '/js/bac-countdown.js',
];

const jsFiles = walkJs(path.join(root, 'js'), 'js');
const files = [...new Set([...staticExtras, ...jsFiles])].sort();

const swPath = path.join(root, 'sw.js');
const header = `/* Service worker — CACHE_FILES généré par scripts/generate-sw-cache-list.mjs */
const CACHE_NAME = 'bac-fr-v1';
const CACHE_FILES = [
`;

const footer = `
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

  const pathname = url.pathname.replace(/\\/$/, '') || '/index.html';
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
`;

const body = files.map(f => `  '${f}',`).join('\n');
fs.writeFileSync(swPath, header + body + footer, 'utf8');
console.log('sw.js mis à jour —', files.length, 'fichiers');
