/* data-gtextes-loader.js — grands textes : base immédiate + chunks à la demande */
var GTEXT_TOTAL_EXPECTED = 848;
var GTEXT_CHUNKS_TOTAL = 3;
var GTEXT_OEUVRE_LOADED = false;
var _GTEXT_LOADED_CHUNKS = 0;
var _GTEXT_LOAD_PROMISE = null;
var GTEXT_BUNDLE_V = '20260625';

function gtextIsFullyLoaded() {
  return _GTEXT_LOADED_CHUNKS >= GTEXT_CHUNKS_TOTAL && GTEXT_OEUVRE_LOADED;
}

function gtextExpectedTotal() {
  return GTEXT_TOTAL_EXPECTED;
}

function gtextLoadChunk(num) {
  return bacLoadScript(
    'js/built/data-gtextes-chunk' + num + '.js?v=' + GTEXT_BUNDLE_V,
    'gtext-chunk-' + num
  ).then(function () {
    _GTEXT_LOADED_CHUNKS = Math.max(_GTEXT_LOADED_CHUNKS, num);
    if (typeof gtextInvalidateListCache === 'function') gtextInvalidateListCache();
  });
}

function gtextLoadOeuvreById() {
  if (GTEXT_OEUVRE_LOADED) return Promise.resolve();
  return bacLoadScript(
    'js/data-gtextes-oeuvre-by-id.js?v=' + GTEXT_BUNDLE_V,
    'gtext-oeuvre-by-id'
  ).then(function () {
    GTEXT_OEUVRE_LOADED = true;
  });
}

function ensureGtextesLoaded(onProgress) {
  if (gtextIsFullyLoaded()) {
    return Promise.resolve(typeof getAllGtexts === 'function' ? getAllGtexts() : GRANDS_TEXTES);
  }
  if (!_GTEXT_LOAD_PROMISE) {
    _GTEXT_LOAD_PROMISE = (async function () {
      for (var i = 1; i <= GTEXT_CHUNKS_TOTAL; i++) {
        if (_GTEXT_LOADED_CHUNKS < i) await gtextLoadChunk(i);
        if (typeof onProgress === 'function') onProgress(i, GTEXT_CHUNKS_TOTAL);
      }
      await gtextLoadOeuvreById();
      if (typeof updateDynamicCounts === 'function') updateDynamicCounts();
      return typeof getAllGtexts === 'function' ? getAllGtexts() : GRANDS_TEXTES;
    })().catch(function (err) {
      _GTEXT_LOAD_PROMISE = null;
      throw err;
    });
  }
  return _GTEXT_LOAD_PROMISE;
}

function gtextLoadStatus() {
  return {
    chunks: _GTEXT_LOADED_CHUNKS,
    chunksTotal: GTEXT_CHUNKS_TOTAL,
    oeuvre: GTEXT_OEUVRE_LOADED,
    count: typeof GRANDS_TEXTES !== 'undefined' ? GRANDS_TEXTES.length : 0,
    expected: GTEXT_TOTAL_EXPECTED,
    ready: gtextIsFullyLoaded(),
  };
}

function preloadGtextesInBackground() {
  if (gtextIsFullyLoaded() || _GTEXT_LOAD_PROMISE) return;
  var run = function () {
    ensureGtextesLoaded().catch(function () {});
  };
  if (typeof requestIdleCallback === 'function') requestIdleCallback(run, { timeout: 15000 });
  else setTimeout(run, 5000);
}
