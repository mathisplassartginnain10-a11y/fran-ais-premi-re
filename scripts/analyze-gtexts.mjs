import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const JS = path.join(__dirname, '..', 'js');

const BAD = [
  "L'extrait invite",
  'Le lecteur perçoit une écriture marquée',
  'Les mots choisis par l\'auteur',
  'Dans ce passage de',
  'Manipulation et conseil criminel — registre tragique. Les mots',
  'mobilise ce procédé pour structurer',
  'repéré dans «',
];

function loadAll() {
  const sandbox = {};
  vm.createContext(sandbox);
  const files = ['data-gtextes.js', 'data-gtextes-extra.js'];
  for (let i = 2; i <= 21; i++) files.push(`data-gtextes-extra${i}.js`);
  for (const f of files) {
    const p = path.join(JS, f);
    if (!fs.existsSync(p)) continue;
    let code = fs.readFileSync(p, 'utf8').replace(/\bconst (GRANDS_TEXTES\w*)\b/g, 'var $1');
    vm.runInContext(code, sandbox, { filename: f });
  }
  const all = [...(sandbox.GRANDS_TEXTES || [])];
  for (let i = 2; i <= 21; i++) {
    const k = `GRANDS_TEXTES_EXTRA${i}`;
    if (sandbox[k]) all.push(...sandbox[k]);
  }
  return all;
}

function loadExtra(num) {
  const sandbox = {};
  vm.createContext(sandbox);
  const f = `data-gtextes-extra${num}.js`;
  let code = fs.readFileSync(path.join(JS, f), 'utf8').replace(/\bconst (GRANDS_TEXTES_EXTRA\d+)\b/g, 'var $1');
  vm.runInContext(code, sandbox);
  return sandbox[`GRANDS_TEXTES_EXTRA${num}`] || [];
}

function isBad(t) {
  const tx = t.texte || '';
  const att = (t.attendus || []).map(a => a.interpretation || '').join(' ');
  if (tx.length < 400) return true;
  if (BAD.some(m => tx.includes(m) || att.includes(m))) return true;
  return false;
}

const all = loadAll();
const nums = all.map(t => parseInt(t.id.slice(3), 10)).filter(Boolean);
console.log('Total:', all.length, 'MaxId:', Math.max(...nums));
console.log('Bad/thin:', all.filter(isBad).length);
console.log('Avg len:', Math.round(all.reduce((s, t) => s + (t.texte || '').length, 0) / all.length));

for (let n = 12; n <= 21; n++) {
  const entries = loadExtra(n);
  const bad = entries.filter(isBad);
  console.log(`extra${n}: ${entries.length} entries, ${bad.length} bad → ${bad.map(t => t.id).join(', ')}`);
}

const authors = {};
all.forEach(t => { authors[t.auteur] = (authors[t.auteur] || 0) + 1; });
console.log('\nUnder-represented (<3):');
Object.entries(authors).filter(([, c]) => c < 3).sort((a, b) => a[1] - b[1]).slice(0, 25)
  .forEach(([a, c]) => console.log(`  ${c} ${a}`));
