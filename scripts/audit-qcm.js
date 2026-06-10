/* Audit QCM — options dupliquées, index réponse, énoncés dupliqués inter-banques */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const ctx = { console, window: {}, globalThis: {}, setTimeout, clearTimeout };
ctx.window = ctx.globalThis;
vm.createContext(ctx);

function load(rel) {
  let code = fs.readFileSync(path.join(root, rel), 'utf8');
  code = code.replace(/^const (PROC_QCM|GRAM_QCM|VOCAB_QCM|PROC_DATA|GRAM_COURS|EXERCICES|PROC_QCM_CATS|GRAM_QCM_CATS|VOCAB_QCM_CATS|PROC_QCM_EXTRA|GRAM_QCM_EXTRA)\b/gm, 'var $1');
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
].forEach(load);

function norm(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function audit(arr, label) {
  const dups = [];
  const shortOpts = [];
  const badIdx = [];
  (arr || []).forEach((q, i) => {
    const opts = q.opts || [];
    if (opts.length !== 4) shortOpts.push({ label, i, n: opts.length, q: q.q.slice(0, 55) });
    const seen = new Map();
    opts.forEach((o, oi) => {
      const k = norm(o);
      if (seen.has(k)) dups.push({ label, i, q: q.q.slice(0, 65), text: o.slice(0, 50), a: seen.get(k), b: oi });
      else seen.set(k, oi);
    });
    const correctText = opts[q.ans];
    if (correctText === undefined) return;
    const idx = opts.findIndex(o => norm(o) === norm(correctText));
    if (idx >= 0 && idx !== q.ans) badIdx.push({ label, i, q: q.q.slice(0, 55), ans: q.ans, should: idx });
  });
  return { dups, shortOpts, badIdx };
}

function auditDupQuestions(banks) {
  const seen = new Map();
  const dups = [];
  banks.forEach(({ arr, label }) => {
    (arr || []).forEach((q, i) => {
      const k = norm(q.q);
      if (!k || k.length < 12) return;
      if (seen.has(k)) {
        const prev = seen.get(k);
        dups.push({ label, i, prevLabel: prev.label, prevI: prev.i, q: q.q.slice(0, 70) });
      } else {
        seen.set(k, { label, i });
      }
    });
  });
  return dups;
}

const PROC_QCM = ctx.PROC_QCM;
const GRAM_QCM = ctx.GRAM_QCM;
const VOCAB_QCM = ctx.VOCAB_QCM;

if (!PROC_QCM) {
  console.error('PROC_QCM not loaded');
  process.exit(1);
}

const proc = audit(PROC_QCM, 'PROC');
const gram = audit(GRAM_QCM || [], 'GRAM');
const vocab = audit(VOCAB_QCM || [], 'VOCAB');
const qDups = auditDupQuestions([
  { arr: PROC_QCM, label: 'PROC' },
  { arr: GRAM_QCM || [], label: 'GRAM' },
  { arr: VOCAB_QCM || [], label: 'VOCAB' },
]);

console.log('PROC', PROC_QCM.length, 'GRAM', (GRAM_QCM || []).length, 'VOCAB', (VOCAB_QCM || []).length);
console.log('PROC dups', proc.dups.length, 'short', proc.shortOpts.length, 'badIdx', proc.badIdx.length);
console.log('GRAM dups', gram.dups.length, 'short', gram.shortOpts.length, 'badIdx', gram.badIdx.length);
console.log('VOCAB dups', vocab.dups.length, 'short', vocab.shortOpts.length, 'badIdx', vocab.badIdx.length);
console.log('Question text dups (inter-banques)', qDups.length);

const optDups = [...proc.dups, ...gram.dups, ...vocab.dups];
const badIdxAll = [...proc.badIdx, ...gram.badIdx, ...vocab.badIdx];
const shortAll = [...proc.shortOpts, ...gram.shortOpts, ...vocab.shortOpts];

if (optDups.length) {
  console.log('\n--- Options dupliquées (first 20) ---');
  optDups.slice(0, 20).forEach(d => console.log(`${d.label}[${d.i}] opts[${d.a}]≈opts[${d.b}] | ${d.q}`));
}
if (badIdxAll.length) {
  console.log('\n--- Index ans incohérent (first 20) ---');
  badIdxAll.slice(0, 20).forEach(d => console.log(`${d.label}[${d.i}] ans=${d.ans} should=${d.should} | ${d.q}`));
}
if (qDups.length) {
  console.log('\n--- Énoncés dupliqués (first 20) ---');
  qDups.slice(0, 20).forEach(d => console.log(`${d.label}[${d.i}] ≈ ${d.prevLabel}[${d.prevI}] | ${d.q}`));
}
if (shortAll.length) {
  console.log('\n--- Options ≠ 4 (first 10) ---');
  shortAll.slice(0, 10).forEach(d => console.log(`${d.label}[${d.i}] n=${d.n} | ${d.q}`));
}

const fail = optDups.length + badIdxAll.length + shortAll.length;
process.exit(fail ? 1 : 0);
