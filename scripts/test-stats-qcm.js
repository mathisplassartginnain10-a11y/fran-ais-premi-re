const fs = require('fs');
const vm = require('vm');

const root = require('path').join(__dirname, '..');
const ctx = {
  console,
  localStorage: {
    store: {},
    getItem(k) { return this.store[k] || null; },
    setItem(k, v) { this.store[k] = v; },
  },
  window: {},
  document: { getElementById: () => ({ innerHTML: '' }) },
  Date, Math, JSON, parseInt, setTimeout, clearTimeout,
};
vm.createContext(ctx);

function load(rel) {
  vm.runInContext(fs.readFileSync(require('path').join(root, rel), 'utf8'), ctx, { filename: rel });
}

[
  'js/data-procedes.js', 'js/data-grammaire.js', 'js/data-vocabulaire.js',
  'js/data-qcm-extra.js', 'js/data-qcm-phrases.js', 'js/data-qcm-generated.js',
  'js/qcm-filter.js', 'js/pages/qcm.js', 'js/pages/stats-ui.js', 'js/stats-engine.js',
].forEach(load);

vm.runInContext(`
function loadSt(k) { return JSON.parse(localStorage.getItem(k) || '{"sessions":[],"qdata":{}}'); }

localStorage.setItem('bac_proc_stats', JSON.stringify({
  sessions: [{ date: '06/06/2026', ok: 8, tot: 10, cat: 'Toutes', ts: Date.now() }],
  qdata: { 'test': { ok: 1, total: 2, q: 'test' } },
}));

const agg = computeSessionAggregate('proc');
console.log('agg ok/tot:', agg.ok, agg.tot);
if (agg.ok !== 8 || agg.tot !== 10) throw new Error('aggregate mismatch');

const sampleQ = PROC_QCM[0];
const qk = typeof qKey === 'function' ? qKey(sampleQ) : (sampleQ.q || '').slice(0, 60);
localStorage.setItem('bac_proc_stats', JSON.stringify({
  sessions: [],
  qdata: { [qk]: { ok: 8, total: 8, q: sampleQ.q } },
}));

const mi = computeMasteryIndex('proc');
console.log('mastery index:', mi.index, 'raw:', mi.rawWeighted, 'cov:', mi.catCoverage);
if (mi.rawWeighted !== 100) throw new Error('expected 100% raw on tested cat');
if (mi.catCoverage.tested !== 1) throw new Error('expected 1 tested category');
if (mi.index >= mi.rawWeighted) throw new Error('index should be below raw when coverage partial');
if (mi.coverageFactor < 0.5) throw new Error('coverage factor min 0.5');

const r = computeReadiness('proc');
console.log('readiness score:', r.score, 'label:', r.mastery.label);
if (r.score !== mi.index) throw new Error('readiness score should match mastery index');
if (!r.masteryByCat) throw new Error('missing masteryByCat');

const g = computeGlobalReadiness();
console.log('global score:', g.globalScore, 'coverage:', g.mastery.catCoverage);
if (typeof g.globalScore !== 'number') throw new Error('global score missing');
if (!g.masteryCatalog?.lines?.length) throw new Error('missing mastery catalog');

console.log('test-stats-qcm OK');
`, ctx);
