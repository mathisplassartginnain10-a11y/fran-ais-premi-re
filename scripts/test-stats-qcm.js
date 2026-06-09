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

ctx.loadSt = (k) => JSON.parse(ctx.localStorage.getItem(k) || '{"sessions":[],"qdata":{}}');
ctx.localStorage.store['bac_proc_stats'] = JSON.stringify({
  sessions: [{ date: '06/06/2026', ok: 8, tot: 10, cat: 'Toutes', ts: Date.now() }],
  qdata: { 'test': { ok: 1, total: 2, q: 'test' } },
});

const agg = ctx.computeSessionAggregate('proc');
console.log('agg ok/tot:', agg.ok, agg.tot);
const r = ctx.computeReadiness('proc');
console.log('readiness score:', r.score, 'prob:', r.prob.pct);
