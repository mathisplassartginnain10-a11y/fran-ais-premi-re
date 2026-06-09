/* Audit : QCM dont la bonne réponse n'est pas dans le cours */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const ctx = vm.createContext({ console, window: {}, globalThis: {}, setTimeout, clearTimeout });
ctx.window = ctx.globalThis;

function load(rel) {
  let code = fs.readFileSync(path.join(root, rel), 'utf8');
  code = code.replace(
    /^const (PROC_QCM|GRAM_QCM|VOCAB_QCM|PROC_DATA|GRAM_COURS|VOCAB_COURS|EXERCICES|PROC_QCM_CATS|GRAM_QCM_CATS|VOCAB_QCM_CATS|PROC_QCM_EXTRA|GRAM_QCM_EXTRA)\b/gm,
    'var $1'
  );
  vm.runInContext(code, ctx, { filename: rel });
}

[
  'js/data-procedes.js',
  'js/data-grammaire.js',
  'js/data-vocabulaire.js',
  'js/data-vocabulaire-extra.js',
  'js/data-qcm-extra.js',
  'js/data-qcm-phrases.js',
  'js/data-qcm-generated.js',
  'js/qcm-filter.js',
].forEach(load);

console.log('Après filtre cours :');
console.log('  PROC', ctx.PROC_QCM.length, '(retirés', ctx.window.BAC_QCM_FILTERED || '?', ')');
console.log('  GRAM', (ctx.GRAM_QCM || []).length, '(retirés', ctx.window.BAC_QCM_GRAM_FILTERED || '?', ')');
console.log('  VOCAB', (ctx.VOCAB_QCM || []).length, '(retirés', ctx.window.BAC_QCM_VOCAB_FILTERED || '?', ')');

function norm(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const KEEP = ['Méthode commentaire', 'Dissertation', 'Connecteurs & Style'];
const PROC_CATS = [
  'Figures de style', 'Procédés narratifs', 'Procédés poétiques',
  'Registres & tonalités', 'Syntaxe & lexique', 'Analyse de phrase',
];

const procBlob = norm(
  ctx.PROC_DATA.map(d => [d.name, d.def, d.ex, d.effet, d.cat, d.sub].join(' ')).join(' ')
);
const procNames = new Set(ctx.PROC_DATA.map(d => d.name));
const procNormNames = ctx.PROC_DATA.map(d => norm(d.name));

const gramBlob = norm(
  ctx.GRAM_COURS.map(d => [d.name, d.def, d.cours, d.cat, d.content].join(' ')).join(' ')
);

const vocabBlob = norm(
  ctx.VOCAB_COURS.map(d => [d.name, d.def, d.content].join(' ')).join(' ')
);

function inBlob(text, blob) {
  const t = norm(text);
  if (!t || t.length < 3) return false;
  if (blob.includes(t)) return true;
  if (t.length > 12) {
    const words = t.split(' ').filter(w => w.length > 3);
    if (words.length >= 2 && words.every(w => blob.includes(w))) return true;
  }
  return false;
}

function okProc(q) {
  const c = q.opts[q.ans];
  if (!c) return false;
  if (KEEP.includes(q.cat)) return true;
  if (procNames.has(c.trim())) return true;
  const nc = norm(c);
  if (procNormNames.some(n => nc === n || nc.includes(n) || n.includes(nc))) return true;
  return inBlob(c, procBlob);
}

function okGram(q) {
  const c = q.opts[q.ans];
  if (!c) return false;
  if (procNames.has(c.trim())) return false;
  return inBlob(c, gramBlob) || ctx.GRAM_COURS.some(d => norm(c) === norm(d.name));
}

function okVocab(q) {
  const c = q.opts[q.ans];
  if (!c) return false;
  return inBlob(c, vocabBlob) || ctx.VOCAB_COURS.some(d => norm(c) === norm(d.name));
}

const procBad = ctx.PROC_QCM.filter(q => PROC_CATS.includes(q.cat) && !okProc(q));
const gramBad = ctx.GRAM_QCM.filter(q => !okGram(q));
const vocabBad = (ctx.VOCAB_QCM || []).filter(q => !okVocab(q));

console.log('PROC', ctx.PROC_QCM.length, 'hors cours (proc cats)', procBad.length);
procBad.slice(0, 20).forEach(q => {
  console.log(' ', q.cat, '|', q.q.slice(0, 72));
  console.log('   =>', (q.opts[q.ans] || '').slice(0, 60));
});
console.log('GRAM', ctx.GRAM_QCM.length, 'hors cours', gramBad.length);
gramBad.slice(0, 10).forEach(q => console.log(' ', q.q.slice(0, 65), '=>', q.opts[q.ans].slice(0, 40)));
console.log('VOCAB', (ctx.VOCAB_QCM || []).length, 'hors cours', vocabBad.length);
vocabBad.slice(0, 10).forEach(q => console.log(' ', q.q.slice(0, 65), '=>', q.opts[q.ans].slice(0, 40)));
