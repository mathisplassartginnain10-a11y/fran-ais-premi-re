/**
 * Tests headless du moteur examen (score, mélange options).
 * Usage: node scripts/test-exam-engine.mjs
 */
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const root = path.join(__dirname, '..');
const ctx = {
  console,
  Math, JSON, Date, parseInt, setTimeout, clearTimeout,
  localStorage: {
    store: {},
    getItem(k) { return this.store[k] || null; },
    setItem(k, v) { this.store[k] = v; },
  },
  window: {},
  document: { getElementById: () => null, querySelector: () => null },
};
vm.createContext(ctx);

function load(rel) {
  let code = fs.readFileSync(path.join(root, rel), 'utf8');
  code = code.replace(/^const (PROC_QCM|GRAM_QCM|VOCAB_QCM|PROC_DATA)\b/gm, 'var $1');
  vm.runInContext(code, ctx, { filename: rel });
}

[
  'js/data-procedes.js',
  'js/data-grammaire.js',
  'js/data-vocabulaire.js',
  'js/data-qcm-extra.js',
  'js/data-qcm-phrases.js',
  'js/data-qcm-generated.js',
  'js/qcm-filter.js',
  'js/pages/core.js',
].forEach(load);

function computeExamScore(questions, answers) {
  const tot = questions.length;
  const ok = Object.entries(answers).filter(([qi, oi]) => oi === questions[qi].ans).length;
  return { ok, tot, pct: tot ? Math.round(ok / tot * 100) : 0 };
}

let passed = 0;
let failed = 0;

function assert(cond, msg) {
  if (cond) { passed++; console.log('  ✓', msg); }
  else { failed++; console.error('  ✗', msg); }
}

console.log('=== test-exam-engine ===');

const pool = ctx.PROC_QCM.slice(0, 20).map(q => ctx.shuffleQcmOptions(q, 42));
assert(pool.length === 20, 'pool 20 questions');
assert(pool.every(q => q.opts.length === 4), '4 options par question');
assert(pool.every(q => q.opts[q.ans] != null), 'ans valide après shuffle');

const answers = {};
pool.forEach((q, i) => { answers[i] = q.ans; });
const perfect = computeExamScore(pool, answers);
assert(perfect.ok === 20 && perfect.pct === 100, 'score parfait si toutes bonnes réponses');

const wrong = { 0: (pool[0].ans + 1) % 4, 1: pool[1].ans };
const partial = computeExamScore(pool, wrong);
assert(partial.ok === 1 && partial.tot === 20, 'score partiel (1/20)');

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
