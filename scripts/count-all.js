const fs = require('fs');
const path = require('path');
const vm = require('vm');
const dir = path.join(__dirname, '..', 'js');
const s = {};
vm.createContext(s);
function load(f) {
  let c = fs.readFileSync(path.join(dir, f), 'utf8');
  c = c.replace(/\bconst GRANDS_TEXTES\b/g, 'var GRANDS_TEXTES');
  c = c.replace(/\bconst GRANDS_TEXTES_EXTRA(\d+)\b/g, 'var GRANDS_TEXTES_EXTRA$1');
  vm.runInContext(c, s, { filename: f });
}
const gtFiles = ['data-gtextes.js', 'data-gtextes-extra.js'];
for (let i = 2; i <= 21; i++) gtFiles.push(`data-gtextes-extra${i}.js`);
gtFiles.forEach(f => { if (fs.existsSync(path.join(dir, f))) load(f); });
load('data-bac-passages.js');
for (let i = 1; i <= 20; i++) {
  const f = `data-bac-passages-${String(i).padStart(2, '0')}.js`;
  if (fs.existsSync(path.join(dir, f))) load(f);
}
load('data-auteurs.js'.replace('auteurs','intro-simulator'));
s.getAllGtexts = () => s.GRANDS_TEXTES || [];
const bac = s.getAllBacPassages();
const named = bac.filter(p => !/^(Acte \d|Chapitre \d|Poème \d|Passage \d|Extrait bac type)/.test(p.titre));
console.log('GT:', s.GRANDS_TEXTES.length);
console.log('BAC:', bac.length);
console.log('BAC nommés:', named.length);
console.log('IntroSim count:', s.introSimCount());
