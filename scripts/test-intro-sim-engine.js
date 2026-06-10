/**
 * Tests headless du simulateur (alias, recherche GT, index).
 * Usage: node scripts/test-intro-sim-engine.js
 *
 * Note: après chargement séquentiel des data-gtextes*.js, toutes les entrées
 * sont fusionnées dans GRANDS_TEXTES (push des EXTRA*). Ne pas re-concaténer
 * les tableaux GRANDS_TEXTES_EXTRA* — cela double le décompte (1652 vs 848).
 */
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const JS = path.join(__dirname, '..', 'js');
const GT_EXPECTED = 848;
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

/** Banque GT canonique : GRANDS_TEXTES après fusion de tous les fichiers extra. */
sandbox.getAllGtexts = function () {
  return Array.isArray(sandbox.GRANDS_TEXTES) ? sandbox.GRANDS_TEXTES.slice() : [];
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
assert(gts.length === GT_EXPECTED, `banque GT = ${GT_EXPECTED} (${gts.length})`);

const idx = introSimBuildIndex();
assert(idx.length === GT_EXPECTED, `index simulateur (1 entrée/GT) = ${GT_EXPECTED} (${idx.length})`);

const p = introSimParseOeuvreRef('Verlaine, Chanson d\'automne');
assert(p && p.auteur && p.oeuvre, 'parse oeuvre Verlaine');

const m = introSimSearch(p.auteur, p.oeuvre, p.passage);
assert(m.length > 0 && m[0].entry.id === 'GT-001', 'match GT-001 pour Chanson d\'automne');

const demo = idx.find(e => e.id === 'GT-001');
assert(demo && demo.temps && demo.temps.auteur, 'GT-001 a métadonnées auteur');

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
