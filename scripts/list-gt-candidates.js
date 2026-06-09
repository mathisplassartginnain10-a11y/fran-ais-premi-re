/** Liste les GT éligibles pour démo intro-sim (hors ids déjà retenus) */
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

const skip = new Set(process.argv.slice(2));
const all = sandbox.GRANDS_TEXTES || [];
const good = all.filter(t =>
  t?.id && /^GT-\d+$/.test(t.id)
  && t.attendus?.length >= 3
  && t.texte?.length > 60
  && !skip.has(t.id)
);

console.log('Total GT:', all.length);
console.log('Candidats (>=3 attendus):', good.length);
console.log('\n--- Manuel (id <= 260) ---');
good.filter(t => parseInt(t.id.slice(3), 10) <= 260)
  .sort((a, b) => parseInt(a.id.slice(3), 10) - parseInt(b.id.slice(3), 10))
  .forEach(t => console.log(`${t.id}\t${t.auteur}\t${t.titre.slice(0, 42)}\t${t.attendus.length}`));

console.log('\n--- Générés (id > 260, top qualité) ---');
good.filter(t => parseInt(t.id.slice(3), 10) > 260)
  .sort((a, b) => b.attendus.length - a.attendus.length || parseInt(a.id.slice(3), 10) - parseInt(b.id.slice(3), 10))
  .slice(0, 25)
  .forEach(t => console.log(`${t.id}\t${t.auteur}\t${t.titre.slice(0, 42)}\t${t.attendus.length}`));
