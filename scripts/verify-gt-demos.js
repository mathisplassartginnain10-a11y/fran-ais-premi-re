/** Vérifie INTRO_SIM_GT_DEMOS (lu depuis intro-sim.js) et la détection par extrait collé */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const JS = path.join(ROOT, 'js');
const sandbox = { console, window: {} };
vm.createContext(sandbox);

function load(file) {
  let code = fs.readFileSync(path.join(JS, file), 'utf8');
  code = code.replace(/\bconst GRANDS_TEXTES\b/g, 'var GRANDS_TEXTES');
  code = code.replace(/\bconst GRANDS_TEXTES_EXTRA(\d+)\b/g, 'var GRANDS_TEXTES_EXTRA$1');
  code = code.replace(/\bconst (EXERCICES|AUTEURS_DATA|GTEXT_OEUVRE_BY_ID)\b/g, 'var $1');
  vm.runInContext(code, sandbox, { filename: file });
}

const gtFiles = ['data-gtextes.js', 'data-gtextes-extra.js'];
for (let i = 2; i <= 21; i++) gtFiles.push(`data-gtextes-extra${i}.js`);
gtFiles.forEach(f => { if (fs.existsSync(path.join(JS, f))) load(f); });
load('data-gtextes-oeuvre-by-id.js');
load('data-auteurs.js');
load('data-intro-simulator.js');

sandbox.getAllGtexts = () => sandbox.GRANDS_TEXTES || [];

const introSimSrc = fs.readFileSync(path.join(JS, 'pages', 'intro-sim.js'), 'utf8');
const block = introSimSrc.match(/const INTRO_SIM_GT_DEMOS = \[([\s\S]*?)\];/);
const INTRO_SIM_GT_DEMOS = block
  ? [...block[1].matchAll(/'(GT-\d+)'/g)].map(m => m[1])
  : [];

const { introSimFindGtextByExcerpt, introSimSearch } = sandbox;

console.log('=== INTRO_SIM_GT_DEMOS (' + INTRO_SIM_GT_DEMOS.length + ' ids) ===');
let ok = 0;
INTRO_SIM_GT_DEMOS.forEach(id => {
  const t = sandbox.GRANDS_TEXTES.find(x => x.id === id);
  const att = t?.attendus?.length || 0;
  const hasText = !!(t?.texte && t.texte.length > 22);
  const good = t && att >= 3 && hasText;
  if (good) ok++;
  if (!good) console.log(`${good ? '✓' : '✗'} ${id} ${t ? t.auteur + ' · ' + t.titre : 'MANQUANT'} (${att} attendus)`);
});
console.log(`=> ${ok}/${INTRO_SIM_GT_DEMOS.length} valides\n`);

console.log('=== Détection extrait collé ===');
['GT-001', 'GT-006', 'GT-017', 'GT-196'].forEach(id => {
  const t = sandbox.GRANDS_TEXTES.find(x => x.id === id);
  if (!t) return;
  const found = introSimFindGtextByExcerpt(t.texte);
  console.log(`${found?.id === id ? '✓' : '✗'} ${id} => ${found?.id || 'aucun'}`);
  const m = introSimSearch(t.auteur, t.oeuvre, t.texte, { fullCommentary: true });
  const e = m[0]?.entry;
  console.log(`   search: ${e?.gtextId || e?.id} · commentaire ${e?.fullComment ? e.fullComment.length + ' car.' : 'non'} · corpus ${e?.commentaire?.fromCorpus ? 'oui' : 'non'}`);
});
