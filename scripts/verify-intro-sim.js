/**
 * Vérifie alias, parse EXERCICES et cohérence auteur/œuvre GT.
 * Usage: node scripts/verify-intro-sim.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const JS = path.join(__dirname, '..', 'js');
const sandbox = { console, window: {} };
vm.createContext(sandbox);

function load(file) {
  let code = fs.readFileSync(path.join(JS, file), 'utf8');
  code = code.replace(/\bconst (GRANDS_TEXTES|EXERCICES|AUTEURS_DATA)\b/g, 'var $1');
  vm.runInContext(code, sandbox, { filename: file });
}

[
  'data-gtextes.js', 'data-gtextes-extra.js', 'data-gtextes-extra2.js',
  'data-gtextes-extra3.js', 'data-gtextes-extra4.js', 'data-gtextes-extra5.js',
  'data-gtextes-extra6.js', 'data-gtextes-extra7.js', 'data-gtextes-extra8.js',
  'data-auteurs.js', 'data-gtextes-oeuvre-by-id.js', 'data-exercices.js',
  'data-intro-simulator.js',
].forEach(load);

sandbox.getAllGtexts = function () {
  const out = [];
  for (const k of Object.keys(sandbox)) {
    if (/^GRANDS_TEXTES/.test(k) && Array.isArray(sandbox[k])) out.push(...sandbox[k]);
  }
  return out;
};

const { introSimParseOeuvreRef, introSimSearch, introSimBuildIndex } = sandbox;
const EXERCICES = sandbox.EXERCICES;

console.log('=== ALIAS corrigés ===');
const aliasTests = [
  ['Rimbaud', 'Le Bateau ivre', 'GT-196'],
  ['Rimbaud', 'Le Dormeur du val', 'GT-045'],
  ['Verlaine', 'Il pleure dans mon cœur', 'GT-035'],
  ['Verlaine', 'Art poétique', 'GT-021'],
  ['Verlaine', 'Chanson d\'automne', 'GT-001'],
  ['Baudelaire', 'Correspondances — Les Fleurs du Mal', 'GT-006'],
  ['Hugo', 'Demain dès l\'aube', 'GT avec Contemplations'],
];
aliasTests.forEach(([auteur, titre, expect]) => {
  const p = introSimParseOeuvreRef(`${auteur}, ${titre}`);
  const m = p ? introSimSearch(p.auteur, p.oeuvre, p.passage) : [];
  const id = m[0]?.entry?.id || 'FALLBACK';
  const ok = id.includes('GT') && !m[0]?.entry?.fallback;
  console.log(`${ok ? '✓' : '⚠'} ${auteur}, ${titre}`);
  console.log(`   => ${p?.auteur} / ${p?.oeuvre} / ${p?.passage || '—'} | ${id} (attendu ~${expect})`);
});

console.log('\n=== EXO sans match GT solide (score < 40 ou fallback) ===');
const skip = /formule|exemple|schéma|poésie classique|hemingway|homère|années 1920/i;
const weak = [];
EXERCICES.filter(e => e.oeuvre && !skip.test(e.oeuvre)).forEach(e => {
  const p = introSimParseOeuvreRef(e.oeuvre);
  if (!p) { weak.push({ id: e.id, oeuvre: e.oeuvre, why: 'non parseable' }); return; }
  const m = introSimSearch(p.auteur, p.oeuvre, p.passage);
  const top = m[0];
  if (!top || top.entry.fallback || top.score < 40) {
    weak.push({ id: e.id, oeuvre: e.oeuvre, why: top ? `score ${top.score} / ${top.entry.id}` : 'aucun' });
  }
});
console.log(weak.length ? weak.map(w => `#${w.id} ${w.oeuvre} (${w.why})`).join('\n') : 'Aucun');

console.log('\n=== Phrases auteur (échantillon GT) ===');
introSimBuildIndex().filter(e => ['GT-001', 'GT-021', 'GT-035', 'GT-196'].includes(e.id))
  .forEach(e => console.log(e.id, '|', e.temps.auteur));
