/* Banque de 10000 passages probables au bac — chunks chargés à la demande */
var BAC_PASSAGES = [];
var BAC_PASSAGES_TOTAL_CHUNKS = 20;
var _BAC_LOADED_CHUNKS = 0;
var _BAC_LOAD_PROMISE = null;
var _BAC_PASSAGES_EXPANDED = null;

function bacPassageExpand(row) {
  return {
    id: row[0], auteur: row[1], oeuvre: row[2], titre: row[3], genre: row[4],
    year: row[5], prob: row[6], contexte: row[7], gtextId: row[8] || null,
  };
}

function getAllBacPassages() {
  if (!_BAC_PASSAGES_EXPANDED) {
    _BAC_PASSAGES_EXPANDED = BAC_PASSAGES.map(bacPassageExpand);
  }
  return _BAC_PASSAGES_EXPANDED;
}

function bacPassagesResetCache() {
  _BAC_PASSAGES_EXPANDED = null;
  if (typeof _introSimIndex !== 'undefined') _introSimIndex = null;
}

function loadBacPassagesChunk(num) {
  return new Promise((resolve, reject) => {
    const id = 'bac-chunk-' + num;
    if (document.getElementById(id)) { resolve(); return; }
    const s = document.createElement('script');
    s.id = id;
    s.src = 'js/data-bac-passages-' + String(num).padStart(2, '0') + '.js?v=20260625';
    s.onload = () => { _BAC_LOADED_CHUNKS = Math.max(_BAC_LOADED_CHUNKS, num); bacPassagesResetCache(); resolve(); };
    s.onerror = () => reject(new Error('bac chunk ' + num));
    document.head.appendChild(s);
  });
}

function ensureBacPassagesLoaded(onProgress) {
  if (_BAC_LOADED_CHUNKS >= BAC_PASSAGES_TOTAL_CHUNKS) {
    return Promise.resolve(getAllBacPassages());
  }
  if (!_BAC_LOAD_PROMISE) {
    _BAC_LOAD_PROMISE = (async () => {
      for (let i = 1; i <= BAC_PASSAGES_TOTAL_CHUNKS; i++) {
        if (_BAC_LOADED_CHUNKS < i) await loadBacPassagesChunk(i);
        if (typeof onProgress === 'function') onProgress(i, BAC_PASSAGES_TOTAL_CHUNKS);
      }
      return getAllBacPassages();
    })().catch(err => {
      _BAC_LOAD_PROMISE = null;
      throw err;
    });
  }
  return _BAC_LOAD_PROMISE;
}

function bacPassagesLoadStatus() {
  return { loaded: _BAC_LOADED_CHUNKS, total: BAC_PASSAGES_TOTAL_CHUNKS, count: BAC_PASSAGES.length };
}

function preloadBacPassagesInBackground() {
  if (_BAC_LOADED_CHUNKS >= BAC_PASSAGES_TOTAL_CHUNKS || _BAC_LOAD_PROMISE) return;
  const run = () => {
    ensureBacPassagesLoaded().then(() => {
      if (typeof introSimResetIndex === 'function') introSimResetIndex();
      if (typeof introSimUpdateMeta === 'function') introSimUpdateMeta();
      if (typeof introSimRenderTopBac === 'function') introSimRenderTopBac();
    }).catch(() => {});
  };
  if (typeof requestIdleCallback === 'function') requestIdleCallback(run, { timeout: 10000 });
  else setTimeout(run, 3000);
}
