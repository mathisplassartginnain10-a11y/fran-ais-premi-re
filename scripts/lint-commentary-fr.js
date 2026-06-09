/**
 * Détecte tournures incorrectes dans les commentaires auto-générés.
 * Usage: node scripts/lint-commentary-fr.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const JS = path.join(__dirname, '..', 'js');
const sandbox = { console, window: {} };
vm.createContext(sandbox);

function load(file) {
  let code = fs.readFileSync(path.join(JS, file), 'utf8');
  code = code.replace(/\bconst GRANDS_TEXTES\b/g, 'var GRANDS_TEXTES');
  code = code.replace(/\bconst GRANDS_TEXTES_EXTRA(\d+)\b/g, 'var GRANDS_TEXTES_EXTRA$1');
  code = code.replace(/\bconst (AUTEURS_DATA|GTEXT_OEUVRE_BY_ID)\b/g, 'var $1');
  vm.runInContext(code, sandbox, { filename: file });
}

const gtFiles = ['data-gtextes.js', 'data-gtextes-extra.js'];
for (let i = 2; i <= 21; i++) gtFiles.push(`data-gtextes-extra${i}.js`);
gtFiles.forEach(f => { if (fs.existsSync(path.join(JS, f))) load(f); });
load('data-gtextes-oeuvre-by-id.js');
load('data-auteurs.js');
load('data-intro-simulator.js');

sandbox.getAllGtexts = () => sandbox.GRANDS_TEXTES || [];
sandbox.gtextGetById = id => sandbox.GRANDS_TEXTES.find(t => t.id === id);

const introSimSrc = fs.readFileSync(path.join(JS, 'pages', 'intro-sim.js'), 'utf8');
vm.runInContext(introSimSrc, sandbox, { filename: 'intro-sim.js' });

const { introSimBuildFromText, introSimBuildFullCommentary, introSimBuildIpciParagraph } = sandbox;
const block = introSimSrc.match(/const INTRO_SIM_GT_DEMOS = \[([\s\S]*?)\];/);
const demos = block ? [...block[1].matchAll(/'(GT-\d+)'/g)].map(m => m[1]) : [];

const BAD_PATTERNS = [
  { re: /ce qui (anaphore|comparaison|métaphore|personnification|assonance|enjambement|registre|champ lexical|versification|hyperbole|allitération)/i, msg: '« ce qui » + nom de procédé' },
  { re: /ce qui [a-zàâéèêëîïôùûü]+ :/i, msg: '« ce qui » + label avec deux-points' },
  { re: /mobilise le le |mobilise la la /i, msg: 'double article' },
  { re: /mobilise le métaphore|mobilise le personnification|mobilise le assonance/i, msg: 'article masculin incorrect' },
  { re: /,\s*,/g, msg: 'double virgule' },
  { re: /nous nous demanderons comment comment/i, msg: '« comment comment »' },
];

const interpIssues = [];
sandbox.GRANDS_TEXTES.forEach(t => {
  (t.attendus || []).forEach(a => {
    const i = (a.interpretation || '').trim();
    if (/^(Anaphore|Comparaison|Assonance|Enjambement|Registre|Personnification|Champ lexical|Métaphore|Hyperbole|Allitération)\s*:/i.test(i)) {
      interpIssues.push(`${t.id} · ${a.procede}: interprétation commence par label`);
    }
    if (/^Citation\s*:/i.test(i)) {
      interpIssues.push(`${t.id}: interprétation « Citation : »`);
    }
    if (/Passage \d/i.test(i)) {
      interpIssues.push(`${t.id} · ${a.procede}: placeholder « Passage N »`);
    }
  });
});

const commIssues = [];
demos.forEach(id => {
  const t = sandbox.gtextGetById(id);
  if (!t?.texte) return;
  const built = introSimBuildFromText(t, t.auteur, t.oeuvre, { userExcerpt: t.texte });
  const comm = introSimBuildFullCommentary(built, { userExcerpt: t.texte });
  if (!comm?.full) return;
  BAD_PATTERNS.forEach(({ re, msg }) => {
    if (re.test(comm.full)) commIssues.push({ id, msg });
  });
});

console.log('=== Interprétations GT (corpus) ===');
console.log(interpIssues.length ? interpIssues.slice(0, 40).join('\n') + (interpIssues.length > 40 ? `\n… +${interpIssues.length - 40}` : '') : 'Aucun motif suspect');

console.log('\n=== Commentaires auto (' + demos.length + ' modèles) ===');
if (!commIssues.length) {
  console.log('Aucun motif suspect détecté');
} else {
  const byMsg = {};
  commIssues.forEach(x => { byMsg[x.msg] = (byMsg[x.msg] || 0) + 1; });
  Object.entries(byMsg).forEach(([msg, n]) => console.log(`- ${msg}: ${n} texte(s)`));
  console.log('\nExemples:');
  commIssues.slice(0, 8).forEach(x => console.log(`  ${x.id} · ${x.msg}`));
}

// Test paragraphe IPCI sur interprétation type GT
const sample = sandbox.GRANDS_TEXTES.find(t => t.id === 'GT-006');
if (sample && introSimBuildIpciParagraph) {
  const para = introSimBuildIpciParagraph(sample.attendus[0], 'Baudelaire');
  console.log('\n=== Exemple paragraphe IPCI (GT-006) ===');
  console.log(para.slice(0, 280) + (para.length > 280 ? '…' : ''));
}
