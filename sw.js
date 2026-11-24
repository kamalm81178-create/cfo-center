const V = 'cfo-center-v2.2';
const FILES = ['./', 'index.html', 'app1.js', 'app2.js', 'app3.js', 'manifest.webmanifest',
  'content/core.js', 'content/pack-fnd.js', 'content/pack-cma.js', 'content/pack-cma1a.js', 'content/pack-cma1b.js', 'content/pack-cpa.js', 'content/pack-cfa.js', 'content/pack-lib.js',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
// stale-while-revalidate for same-origin GETs: instant offline load, silent refresh when online
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  e.respondWith(caches.open(V).then(c => c.match(r, {ignoreSearch: true}).then(hit => {
    const net = fetch(r).then(res => { if (res && res.ok) c.put(r, res.clone()); return res; }).catch(() => hit);
    return hit || net;
  })));
});
