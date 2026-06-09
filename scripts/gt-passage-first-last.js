/**
 * Convertit les texte des GT modèles commentaire au format bac :
 * première phrase (ou vers) … dernière phrase.
 * Usage: node scripts/gt-passage-first-last.js [--dry] [--all]
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DRY = process.argv.includes('--dry');
const ALL = process.argv.includes('--all');
const ROOT = path.join(__dirname, '..');
const JS = path.join(ROOT, 'js');

function load(file) {
  let code = fs.readFileSync(path.join(JS, file), 'utf8');
  code = code.replace(/\bconst GRANDS_TEXTES\b/g, 'var GRANDS_TEXTES');
  code = code.replace(/\bconst GRANDS_TEXTES_EXTRA(\d+)\b/g, 'var GRANDS_TEXTES_EXTRA$1');
  vm.runInContext(code, sandbox, { filename: file });
}

const sandbox = {};
vm.createContext(sandbox);
['data-gtextes.js', 'data-gtextes-extra.js'].forEach(f => load(f));
for (let i = 2; i <= 21; i++) {
  const f = `data-gtextes-extra${i}.js`;
  if (fs.existsSync(path.join(JS, f))) load(f);
}
load('data-intro-simulator.js');

const intro = fs.readFileSync(path.join(JS, 'pages', 'intro-sim.js'), 'utf8');
const demoIds = new Set([...intro.match(/INTRO_SIM_GT_DEMOS = \[([\s\S]*?)\];/)[1].matchAll(/'(GT-\d+)'/g)].map(m => m[1]));

const byId = new Map();
(sandbox.GRANDS_TEXTES || []).forEach(t => { if (t?.id) byId.set(t.id, t); });

const targets = [...byId.values()].filter(t => ALL || demoIds.has(t.id));
let changed = 0;

function patchTexteInFile(filePath, id, newTexte) {
  let src = fs.readFileSync(filePath, 'utf8');
  const re = new RegExp(
    `(id:\\s*"${id}"[\\s\\S]*?texte:\\s*\`)([\\s\\S]*?)(\`,\\s*\\n\\s*contexte:)`,
    'm'
  );
  const m = src.match(re);
  if (!m) return false;
  const esc = newTexte.replace(/\\/g, '\\\\').replace(/`/g, '\\`');
  src = src.replace(re, `$1${esc}$3`);
  if (!DRY) fs.writeFileSync(filePath, src, 'utf8');
  return true;
}

function findFileForId(id) {
  const files = ['data-gtextes.js', 'data-gtextes-extra.js'];
  for (let i = 2; i <= 21; i++) files.push(`data-gtextes-extra${i}.js`);
  for (const f of files) {
    const p = path.join(JS, f);
    if (!fs.existsSync(p)) continue;
    const src = fs.readFileSync(p, 'utf8');
    if (src.includes(`id: "${id}"`)) return p;
  }
  return null;
}

targets.forEach(t => {
  if (!t.texte || t.texte.length < 12) return;
  const next = sandbox.introSimPassageFirstLast(t.texte);
  if (!next || next === t.texte.trim()) return;
  const fp = findFileForId(t.id);
  if (!fp) {
    console.warn('Fichier introuvable pour', t.id);
    return;
  }
  if (patchTexteInFile(fp, t.id, next)) {
    changed++;
    console.log('OK', t.id, '→', next.slice(0, 72) + (next.length > 72 ? '…' : ''));
  }
});

console.log('Convertis:', changed, '/', targets.length, DRY ? '(dry)' : '');
