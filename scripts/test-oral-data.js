/**
 * Validation des 16 lectures linéaires (data-oral.js).
 * Usage: node scripts/test-oral-data.js
 */
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const JS = path.join(__dirname, '..', 'js');
const sandbox = { console, PROC_QCM: undefined, PROC_QCM_CATS: undefined };
vm.createContext(sandbox);

const code = fs.readFileSync(path.join(JS, 'data-oral.js'), 'utf8')
  .replace(/\bconst ORAL_TEXTS\b/g, 'var ORAL_TEXTS')
  .replace(/\bconst ORAL_QCM\b/g, 'var ORAL_QCM')
  .replace(/\bconst ORAL_QCM_CATS\b/g, 'var ORAL_QCM_CATS')
  .replace(/\bconst ORAL_EXO_TIMER_SEC\b/g, 'var ORAL_EXO_TIMER_SEC')
  .replace(/if \(typeof PROC_QCM[\s\S]*$/, '');
vm.runInContext(code, sandbox, { filename: 'data-oral.js' });

const { ORAL_TEXTS, ORAL_QCM, ORAL_EXO_TIMER_SEC, getOralTextById } = sandbox;

let passed = 0;
let failed = 0;

function assert(cond, msg) {
  if (cond) { passed++; console.log('  ✓', msg); }
  else { failed++; console.error('  ✗', msg); }
}

console.log('=== test-oral-data ===');

assert(Array.isArray(ORAL_TEXTS) && ORAL_TEXTS.length === 16, 'ORAL_TEXTS = 16');
assert(Array.isArray(ORAL_QCM) && ORAL_QCM.length >= 60, `ORAL_QCM >= 60 (${ORAL_QCM?.length})`);
assert(ORAL_EXO_TIMER_SEC === 1800, 'timer 30 min (1800 s)');

const nums = new Set();
ORAL_TEXTS.forEach(t => {
  nums.add(t.num);
  assert(t.id && t.auteur && t.titre && t.problematique, `LL-${String(t.num).padStart(2, '0')} métadonnées`);
  assert(t.texte && t.texte.length > 40, `LL-${String(t.num).padStart(2, '0')} passage texte`);
  assert(Array.isArray(t.attendus) && t.attendus.length >= 10, `LL-${String(t.num).padStart(2, '0')} attendus (${t.attendus?.length})`);
  assert(Array.isArray(t.attendusByMouvement) && t.attendusByMouvement.length >= 1, `LL-${String(t.num).padStart(2, '0')} mouvements`);
  const movTotal = t.attendusByMouvement.reduce((s, g) => s + g.items.length, 0);
  assert(movTotal === t.attendus.length, `LL-${String(t.num).padStart(2, '0')} cohérence mouvements (${movTotal}/${t.attendus.length})`);
  assert(getOralTextById(t.id)?.id === t.id, `getOralTextById ${t.id}`);
});

assert(nums.size === 16, '16 numéros uniques');

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
