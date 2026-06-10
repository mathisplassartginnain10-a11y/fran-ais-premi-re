/* data-lazy.js — chargement différé des banques lourdes par onglet */
var _bacLazyPromises = Object.create(null);

var BAC_LAZY_SCRIPTS = {
  exercices: [
    { src: 'js/data-exercices.js', id: 'data-exercices' },
  ],
  introSim: [
    { src: 'js/data-intro-simulator.js?v=20260613', id: 'data-intro-simulator' },
    { src: 'js/ollama-comment.js?v=20260612', id: 'ollama-comment' },
  ],
  corpus: [
    { src: 'js/data-corpus.js', id: 'data-corpus' },
  ],
  auteurs: [
    { src: 'js/data-auteurs.js?v=20260617', id: 'data-auteurs' },
  ],
  periodes: [
    { src: 'js/data-periodes.js?v=20260610c', id: 'data-periodes' },
  ],
};

function ensureLazyBundle(key) {
  if (_bacLazyPromises[key]) return _bacLazyPromises[key];
  var list = BAC_LAZY_SCRIPTS[key];
  if (!list) return Promise.reject(new Error('Bundle lazy inconnu: ' + key));
  _bacLazyPromises[key] = bacLoadScripts(list).then(function () {
    if (typeof updateDynamicCounts === 'function') updateDynamicCounts();
  });
  return _bacLazyPromises[key];
}

function ensureExercicesLoaded() {
  return ensureLazyBundle('exercices');
}

function ensureIntroSimLoaded() {
  return Promise.all([
    ensureGtextesLoaded(),
    ensureLazyBundle('introSim'),
  ]);
}

function ensureCorpusLoaded() {
  return ensureLazyBundle('corpus');
}

function ensureAuteursLoaded() {
  return ensureLazyBundle('auteurs');
}

function ensurePeriodesLoaded() {
  return ensureLazyBundle('periodes');
}

function ensureExamDataLoaded() {
  return Promise.all([
    typeof ensureBacPassagesLoaded === 'function' ? ensureBacPassagesLoaded() : Promise.resolve(),
    ensureGtextesLoaded(),
  ]);
}
