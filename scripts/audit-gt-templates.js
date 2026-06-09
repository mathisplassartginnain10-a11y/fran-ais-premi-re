/** Compte les GT avec texte/titre générique (template généré). */
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
const demoSet = new Set(demos);

function isTemplate(t) {
  const tit = (t.titre || '').trim();
  const tx = (t.texte || '').trim();
  if (/^Passage \d/i.test(tit)) return 'passage';
  if (/^Po[eè]me \d/i.test(tit)) return 'poeme';
  if (/Ouverture \/ incipit/i.test(tit)) return 'incipit';
  if (/Portrait du personnage/i.test(tit)) return 'portrait';
  if (/Sc[eè]ne cl[eé]/i.test(tit)) return 'scene';
  if (/extrait invite à une lecture attentive des procédés/i.test(tx)) return 'phrase-template';
  if (/^Dans ce passage de .+, .+ Le lecteur perçoit une écriture marquée/i.test(tx)) return 'phrase-template';
  if (/^«\s*(Passage|Po[eè]me|Ouverture|Portrait|Sc[eè]ne)/i.test(tx)) return 'citation-template';
  if (/Les mots choisis par l'auteur construisent un effet/i.test(tx) && tx.length < 130) return 'phrase-template';
  return null;
}

const all = sandbox.GRANDS_TEXTES || [];
const byKind = {};
all.forEach(t => {
  const k = isTemplate(t);
  if (!k) return;
  byKind[k] = (byKind[k] || 0) + 1;
});

const demoBad = demos.filter(id => isTemplate(all.find(t => t.id === id)));

const goodAdd = all.filter(t =>
  !demoSet.has(t.id)
  && !isTemplate(t)
  && (t.attendus || []).length >= 3
  && (t.texte || '').length > 100
).sort((a, b) => parseInt(a.id.slice(3), 10) - parseInt(b.id.slice(3), 10));

console.log('GT total:', all.length);
console.log('Templates par type:', Object.entries(byKind).map(([k, v]) => `${k}: ${v}`).join(' · ') || 'aucun');
console.log('Total templates:', Object.values(byKind).reduce((a, b) => a + b, 0));
console.log('Modèles commentaire avec template:', demoBad.length, demoBad.slice(0, 12).join(', '), demoBad.length > 12 ? '…' : '');

if (process.argv.includes('--candidates')) {
  console.log('\nCandidats démo (texte réel, hors modèles):');
  goodAdd.slice(0, 24).forEach(t => console.log(`  ${t.id} · ${t.auteur} · ${t.titre.slice(0, 42)}`));
  console.log('Total candidats:', goodAdd.length);
}
