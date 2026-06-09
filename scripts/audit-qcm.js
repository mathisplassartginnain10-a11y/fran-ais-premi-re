/* Audit QCM — options dupliquées, longueur, index réponse */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const ctx = { console, window: {}, globalThis: {}, setTimeout, clearTimeout };
ctx.window = ctx.globalThis;
vm.createContext(ctx);

function load(rel) {
  let code = fs.readFileSync(path.join(root, rel), 'utf8');
  code = code.replace(/^const (PROC_QCM|GRAM_QCM|PROC_DATA|GRAM_COURS|EXERCICES|PROC_QCM_CATS|GRAM_QCM_CATS|PROC_QCM_EXTRA|GRAM_QCM_EXTRA)\b/gm, 'var $1');
  vm.runInContext(code, ctx, { filename: rel });
}

[
  'js/data-procedes.js',
  'js/data-grammaire.js',
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

const PROC_QCM = ctx.PROC_QCM;
const GRAM_QCM = ctx.GRAM_QCM;

if (!PROC_QCM) {
  console.error('PROC_QCM not loaded');
  process.exit(1);
}

const proc = audit(PROC_QCM, 'PROC');
const gram = audit(GRAM_QCM || [], 'GRAM');

console.log('PROC', PROC_QCM.length, 'GRAM', (GRAM_QCM || []).length);
console.log('PROC dups', proc.dups.length, 'short', proc.shortOpts.length, 'badIdx', proc.badIdx.length);
console.log('GRAM dups', gram.dups.length, 'short', gram.shortOpts.length, 'badIdx', gram.badIdx.length);

const all = [...proc.dups, ...gram.dups];
if (all.length) {
  console.log('\n--- Duplicates (first 40) ---');
  all.slice(0, 40).forEach(d => console.log(`${d.label}[${d.i}] opts[${d.a}]≈opts[${d.b}] | ${d.q}`));
}

process.exit(all.length ? 1 : 0);
