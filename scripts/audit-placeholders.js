/** Compte les GT avec placeholders « Passage N » */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const JS = path.join(__dirname, '..', 'js');
const sandbox = {};
vm.createContext(sandbox);

function load(file) {
  let code = fs.readFileSync(path.join(JS, file), 'utf8');
  code = code.replace(/\bconst GRANDS_TEXTES\b/g, 'var GRANDS_TEXTES');
  code = code.replace(/\bconst GRANDS_TEXTES_EXTRA(\d+)\b/g, 'var GRANDS_TEXTES_EXTRA$1');
  vm.runInContext(code, sandbox, { filename: file });
}

const gtFiles = ['data-gtextes.js', 'data-gtextes-extra.js'];
for (let i = 2; i <= 21; i++) gtFiles.push(`data-gtextes-extra${i}.js`);
gtFiles.forEach(f => { if (fs.existsSync(path.join(JS, f))) load(f); });

const intro = fs.readFileSync(path.join(JS, 'pages', 'intro-sim.js'), 'utf8');
const demos = [...intro.match(/INTRO_SIM_GT_DEMOS = \[([\s\S]*?)\];/)[1].matchAll(/'(GT-\d+)'/g)].map(m => m[1]);

const all = sandbox.GRANDS_TEXTES || [];
const isPlaceholder = t =>
  /^Passage \d/i.test(t.titre || '')
  || /Passage \d/i.test(t.texte || '')
  || (t.attendus || []).some(a => /Passage \d/i.test(a.citation || ''));

const badAll = all.filter(isPlaceholder);
const badDemos = demos.filter(id => isPlaceholder(all.find(t => t.id === id)));

console.log('GT total:', all.length);
console.log('GT avec placeholder Passage N:', badAll.length);
console.log('Modèles commentaire touchés:', badDemos.length, badDemos.join(', ') || 'aucun');
if (badAll.length) {
  console.log('\nListe placeholder:');
  badAll.forEach(t => console.log(`  ${t.id} · ${t.auteur} · ${t.titre}`));
}
