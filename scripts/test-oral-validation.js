/**
 * Tests validation IPCI oral (procédé + citation croisés).
 * Usage: node scripts/test-oral-validation.js
 */
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const JS = path.join(__dirname, '..', 'js');
const sandbox = {
  console,
  localStorage: { getItem: () => null, setItem: () => {} },
  getSetting: (k) => (k === 'gtextMinInterpChars' ? 15 : k === 'gtextInterpThreshold' ? 28 : undefined),
  PROC_DATA: undefined,
};
vm.createContext(sandbox);

function load(file) {
  vm.runInContext(fs.readFileSync(path.join(JS, file), 'utf8'), sandbox, { filename: file });
}

load('pages/gtextes.js');

const code = fs.readFileSync(path.join(JS, 'data-oral.js'), 'utf8')
  .replace(/\bconst ORAL_TEXTS\b/g, 'var ORAL_TEXTS')
  .replace(/if \(typeof PROC_QCM[\s\S]*$/, '');
vm.runInContext(code, sandbox, { filename: 'data-oral.js' });

const gtextValidateUserEntries = sandbox.gtextValidateUserEntries;
const gtextCitationScore = sandbox.gtextCitationScore;
const gtextProcedeScore = sandbox.gtextProcedeScore;
const ORAL_TEXTS = sandbox.ORAL_TEXTS;
const cfg = sandbox.GTEXT_GRADE_CFG || { maxEntries: 32, weights: { procede: 0.5, citation: 0.25, interpretation: 0.25 }, repMaxNote: 16 };
if (sandbox.GTEXT_GRADE_CFG) sandbox.GTEXT_GRADE_CFG.maxEntries = 32;
else sandbox.GTEXT_GRADE_CFG = cfg;

let passed = 0;
let failed = 0;

function assert(cond, msg) {
  if (cond) { passed++; console.log('  ✓', msg); }
  else { failed++; console.error('  ✗', msg); }
}

console.log('=== test-oral-validation ===');

const t = ORAL_TEXTS[0];
const att = t.attendus[0];
const lineCite = 'Il semble pendant la nuit que tout soit en repos';

assert(gtextCitationScore(lineCite, t.texte, att) >= 0.55, 'Citation ligne 1 reconnue dans le passage');
assert(gtextProcedeScore('comparatif', att.procede) >= 0.85, 'Comparatif ≈ comparatif de supériorité');

sandbox.GTEXT_GRADE_CFG.maxEntries = 32;
const good = gtextValidateUserEntries([{
  procede: 'Comparatif de supériorité',
  citation: lineCite,
  interpretation: 'Fontenelle établit une comparaison entre le jour et la nuit pour valoriser la nuit et susciter la curiosité du lecteur par un effet poétique.',
}], t.attendus, t.texte)[0];

assert(good?.procOk && good?.citeOk && good?.interpOk, 'Entrée complète — P+C+I validés');
assert(good?.points >= 0.75, `Entrée complète — points ${good?.points}`);

const citeOnly = gtextValidateUserEntries([{
  procede: 'figure inconnue',
  citation: lineCite,
  interpretation: 'La nuit permet au narrateur de rêver et d observer les étoiles avec plaisir pour le lecteur.',
}], t.attendus, t.texte)[0];

assert(citeOnly?.citeOk, 'Citation seule reconnue');
assert(citeOnly?.procOk === false, 'Mauvais procédé rejeté sans citation croisée forte');

const bad = gtextValidateUserEntries([{
  procede: 'xyz inventé',
  citation: 'mot totalement absent du corpus',
  interpretation: 'Court.',
}], t.attendus, t.texte)[0];

assert(!bad?.procOk && !bad?.citeOk, 'Entrée hors corrigé rejetée');

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
