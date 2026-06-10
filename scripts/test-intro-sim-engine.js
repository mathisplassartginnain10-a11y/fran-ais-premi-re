/**
 * Tests headless du simulateur (alias, recherche GT, index).
 * Usage: node scripts/test-intro-sim-engine.mjs
 */
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const JS = path.join(__dirname, '..', 'js');
const sandbox = { console, window: {} };
vm.createContext(sandbox);

function load(file) {
  let code = fs.readFileSync(path.join(JS, file), 'utf8');
  code = code.replace(/\bconst GRANDS_TEXTES\b/g, 'var GRANDS_TEXTES');
  code = code.replace(/\bconst GRANDS_TEXTES_EXTRA(\d+)\b/g, 'var GRANDS_TEXTES_EXTRA$1');
  code = code.replace(/\bconst (EXERCICES|AUTEURS_DATA|GTEXT_OEUVRE_BY_ID)\b/g, 'var $1');
  vm.runInContext(code, sandbox, { filename: file });
}

const gtFiles = ['data-gtextes.js', 'data-gtextes-extra.js'];
for (let i = 2; i <= 21; i++) gtFiles.push(`data-gtextes-extra${i}.js`);
gtFiles.forEach(f => { if (fs.existsSync(path.join(JS, f))) load(f); });
['data-gtextes-oeuvre-by-id.js', 'data-auteurs.js', 'data-exercices.js', 'data-intro-simulator.js'].forEach(load);

sandbox.getAllGtexts = function () {
  const out = [];
  if (Array.isArray(sandbox.GRANDS_TEXTES)) out.push(...sandbox.GRANDS_TEXTES);
  for (const k of Object.keys(sandbox)) {
    if (/^GRANDS_TEXTES_EXTRA/.test(k) && Array.isArray(sandbox[k])) out.push(...sandbox[k]);
  }
  return out;
};

const { introSimParseOeuvreRef, introSimSearch, introSimBuildIndex } = sandbox;

let passed = 0;
let failed = 0;

function assert(cond, msg) {
  if (cond) { passed++; console.log('  ✓', msg); }
  else { failed++; console.error('  ✗', msg); }
}

console.log('=== test-intro-sim-engine ===');

const gts = sandbox.getAllGtexts();
assert(gts.length >= 800, 'banque GT ≥ 800 (' + gts.length + ')');

const idx = introSimBuildIndex();
assert(idx.length >= 800, 'index simulateur ≥ 800 (' + idx.length + ')');

const p = introSimParseOeuvreRef('Verlaine, Chanson d\'automne');
assert(p && p.auteur && p.oeuvre, 'parse oeuvre Verlaine');

const m = introSimSearch(p.auteur, p.oeuvre, p.passage);
assert(m.length > 0 && m[0].entry.id === 'GT-001', 'match GT-001 pour Chanson d\'automne');

const demo = idx.find(e => e.id === 'GT-001');
assert(demo && demo.temps && demo.temps.auteur, 'GT-001 a métadonnées auteur');

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
