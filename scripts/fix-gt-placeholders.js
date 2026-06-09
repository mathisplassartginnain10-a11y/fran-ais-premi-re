/**
 * Retire de INTRO_SIM_GT_DEMOS les ids à placeholder et signale les GT à réparer.
 * Enrichit les interprétations générées (--enrich lance enrich-interps.js).
 * Usage: node scripts/fix-gt-placeholders.js [--enrich] [--dry]
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DRY = process.argv.includes('--dry');
const ENRICH = process.argv.includes('--enrich');
const ROOT = path.join(__dirname, '..');
const JS = path.join(ROOT, 'js');

function isPlaceholderText(texte, titre) {
  if (/^Passage \d/i.test(titre || '')) return true;
  const t = (texte || '').trim();
  if (!t) return true;
  if (/^«\s*Passage \d/i.test(t)) return true;
  if (/extrait invite à une lecture attentive des procédés/i.test(t) && t.length < 120) return true;
  return false;
}

function loadGtIdsWithPlaceholders() {
  const vm = require('vm');
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
  return (sandbox.GRANDS_TEXTES || [])
    .filter(t => isPlaceholderText(t.texte, t.titre))
    .map(t => t.id);
}

if (ENRICH && !DRY) {
  console.log('Enrichissement interprétations (extra12–21)…');
  execSync('node scripts/enrich-interps.js --generated --force', { cwd: ROOT, stdio: 'inherit' });
}

const badIds = new Set(loadGtIdsWithPlaceholders());
console.log('GT placeholder détectés:', badIds.size);

const introPath = path.join(JS, 'pages', 'intro-sim.js');
let intro = fs.readFileSync(introPath, 'utf8');
const m = intro.match(/(const INTRO_SIM_GT_DEMOS = \[)([\s\S]*?)(\];)/);
if (!m) {
  console.error('INTRO_SIM_GT_DEMOS introuvable');
  process.exit(1);
}

const ids = [...m[2].matchAll(/'(GT-\d+)'/g)].map(x => x[1]);
const kept = ids.filter(id => !badIds.has(id));
const removed = ids.filter(id => badIds.has(id));

console.log('Modèles avant:', ids.length);
console.log('Retirés (placeholder):', removed.length, removed.slice(0, 10).join(', '), removed.length > 10 ? '…' : '');
console.log('Modèles après:', kept.length);

if (removed.length && !DRY) {
  const lines = [];
  for (let i = 0; i < kept.length; i += 8) {
    const chunk = kept.slice(i, i + 8);
    lines.push("  '" + chunk.join("', '") + "'" + (i + 8 < kept.length ? ',' : ''));
  }
  const newBlock = (kept.length ? lines.join('\n') + ',\n' : '\n');
  intro = intro.replace(m[0], m[1] + newBlock + m[3]);
  fs.writeFileSync(introPath, intro, 'utf8');
  console.log('intro-sim.js mis à jour.');
} else if (!removed.length) {
  console.log('Aucun modèle commentaire à retirer.');
}
