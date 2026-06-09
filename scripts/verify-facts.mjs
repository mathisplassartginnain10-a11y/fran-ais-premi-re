/**
 * Vérification factuelle : dates, auteurs, œuvres, alias, incohérences.
 * Usage: node scripts/verify-facts.mjs
 */
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';
import { BAC_OEUVRES } from './bac-catalog.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const JS = path.join(__dirname, '..', 'js');
const sandbox = { console };
vm.createContext(sandbox);

function load(file) {
  const p = path.join(JS, file);
  if (!fs.existsSync(p)) return;
  let code = fs.readFileSync(p, 'utf8');
  code = code.replace(/\bconst (GRANDS_TEXTES|EXERCICES|AUTEURS_DATA|PROC_DATA)\b/g, 'var $1');
  code = code.replace(/\bconst GRANDS_TEXTES_EXTRA(\d+)\b/g, 'var GRANDS_TEXTES_EXTRA$1');
  vm.runInContext(code, sandbox, { filename: file });
}

['data-gtextes.js', 'data-gtextes-extra.js', 'data-auteurs.js', 'data-exercices.js', 'data-intro-simulator.js', 'data-gtextes-oeuvre-by-id.js'].forEach(load);
for (let i = 2; i <= 21; i++) load(`data-gtextes-extra${i}.js`);
load('data-bac-passages.js');
for (let i = 1; i <= 25; i++) {
  const f = `data-bac-passages-${String(i).padStart(2, '0')}.js`;
  if (!fs.existsSync(path.join(JS, f))) break;
  load(f);
}

sandbox.getAllGtexts = () => {
  const out = [];
  if (sandbox.GRANDS_TEXTES) out.push(...sandbox.GRANDS_TEXTES);
  return out;
};

const {
  introSimParseOeuvreRef, introSimSearch, introSimBuildFromText,
  introSimExtractYear, introSimNorm,
} = sandbox;
const EXERCICES = sandbox.EXERCICES || [];
const AUTEURS = sandbox.AUTEURS_DATA || [];
const gtAll = sandbox.getAllGtexts();
const gtById = new Map(gtAll.map(t => [t.id, t]));
const bac = sandbox.getAllBacPassages?.() || [];

const issues = [];
const ok = [];
function fail(cat, msg, detail) { issues.push({ cat, msg, detail }); }
function pass(msg) { ok.push(msg); }

// ── Référentiel bac (dates de première parution / publication majeure) ──
const REF = [
  { auteur: /verlaine/i, oeuvre: /poèmes saturniens/i, year: 1866, note: 'Premier recueil Verlaine' },
  { auteur: /verlaine/i, oeuvre: /romances sans paroles/i, year: 1874 },
  { auteur: /verlaine/i, oeuvre: /jadis et naguère/i, year: 1884, poeme: /art poétique/i },
  { auteur: /verlaine/i, oeuvre: /chanson d'automne/i, recueil: /poèmes saturniens/i, year: 1866 },
  { auteur: /baudelaire/i, oeuvre: /les fleurs du mal/i, year: 1857 },
  { auteur: /hugo/i, oeuvre: /les contemplations/i, year: 1856, poeme: /demain/i },
  { auteur: /hugo/i, oeuvre: /les misérables/i, year: 1862 },
  { auteur: /hugo/i, oeuvre: /la légende des siècles/i, year: 1859 },
  { auteur: /racine/i, oeuvre: /phèdre/i, year: 1677 },
  { auteur: /racine/i, oeuvre: /andromaque/i, year: 1667 },
  { auteur: /corneille/i, oeuvre: /le cid/i, year: 1637 },
  { auteur: /molière/i, oeuvre: /tartuffe/i, year: 1664 },
  { auteur: /molière/i, oeuvre: /dom juan/i, year: 1665 },
  { auteur: /rimbaud/i, poeme: /bateau ivre/i, year: 1871, note: 'Composition 1871' },
  { auteur: /rimbaud/i, poeme: /dormeur du val/i, recueil: /poésies|1870/i, note: 'Poème de 1870, pas dans Poèmes saturniens' },
  { auteur: /flaubert/i, oeuvre: /madame bovary/i, year: 1857 },
  { auteur: /zola/i, oeuvre: /germinal/i, year: 1885 },
  { auteur: /camus/i, oeuvre: /l'étranger/i, year: 1942 },
  { auteur: /voltaire/i, oeuvre: /candide/i, year: 1759 },
  { auteur: /mallarmé/i, oeuvre: /après-midi d'un faune/i, year: 1876 },
  { auteur: /proust/i, oeuvre: /du côté de chez swann|recherche du temps perdu/i, year: 1913 },
  { auteur: /lamartine/i, oeuvre: /méditations|le lac/i, year: 1820 },
  { auteur: /la fontaine/i, oeuvre: /fables/i, yearMin: 1668, yearMax: 1694, note: 'Fables I 1668, dernières 1694' },
];

function yearIn(s) {
  const m = String(s || '').match(/\((\d{4})\)/);
  return m ? parseInt(m[1], 10) : null;
}

function auteurMatch(a, pat) {
  return pat.test(String(a || ''));
}

// ── 1. GT de référence (fiches manuelles GT-001 à ~260) ──
const KEY_GT = [
  ['GT-001', /poèmes saturniens/i, 1866, /chanson d'automne/i],
  ['GT-021', /jadis et naguère/i, 1884, /art poétique/i],
  ['GT-035', /romances sans paroles/i, 1874, /pleure dans mon/i],
  ['GT-004', /contemplations/i, 1856, /demain/i],
  ['GT-006', /fleurs du mal/i, 1857, /correspondances/i],
  ['GT-196', /bateau ivre|1871/i, 1871, /bateau ivre/i],
  ['GT-045', /poésies|1870|dormeur/i, null, /dormeur du val/i],
];
KEY_GT.forEach(([id, oePat, expYear, titrePat]) => {
  const t = gtById.get(id);
  if (!t) { fail('GT clé', `${id} introuvable`, ''); return; }
  if (!oePat.test(t.oeuvre || '')) fail('GT clé', `${id} mauvaise œuvre`, `${t.oeuvre}`);
  else if (expYear && yearIn(t.oeuvre) !== expYear) fail('GT clé', `${id} mauvaise date œuvre`, `${t.oeuvre} (attendu ${expYear})`);
  else if (!titrePat.test(t.titre || '')) fail('GT clé', `${id} mauvais titre`, t.titre);
  else pass(`${id} · ${t.titre} · ${t.oeuvre}`);
});

// ── 2. Exercices — dates dans oeuvre ──
const EXO_REF = [
  [1, 1866], [2, 1637], [4, 1667], [5, 1857], [11, 1677], [12, 1874], [19, 1665],
  [21, 1942], [36, 1856], [38, 1857], [40, 1884],
];
EXO_REF.forEach(([id, year]) => {
  const e = EXERCICES.find(x => x.id === id);
  if (!e) return;
  const y = yearIn(e.oeuvre);
  if (y !== year) fail('Exercice', `#${id} date ${y}`, e.oeuvre);
  else pass(`Exo #${id} · ${year}`);
});

// ── 3. Alias simulateur ──
const ALIAS = [
  ['Rimbaud', 'Le Bateau ivre', false],
  ['Rimbaud', 'Le Dormeur du val', false],
  ['Verlaine', 'Art poétique', false],
  ['Verlaine', 'Chanson d\'automne', false],
  ['Hugo', 'Demain dès l\'aube', false],
  ['Baudelaire', 'Recueillement', true], // doit être Baudelaire Fleurs du mal, PAS Hugo
];
ALIAS.forEach(([a, t, shouldFail]) => {
  const p = introSimParseOeuvreRef(`${a}, ${t}`);
  const m = p ? introSimSearch(p.auteur, p.oeuvre, p.passage) : [];
  const fb = m[0]?.entry?.fallback;
  const aut = m[0]?.entry?.auteurNom || m[0]?.entry?.auteur || '';
  if (shouldFail && !fb && /hugo/i.test(aut)) fail('Alias', `Recueillement → Hugo`, aut);
  else if (!shouldFail && (fb || !m.length)) fail('Alias', `${a}, ${t}`, fb ? 'fallback' : 'aucun');
  else if (!shouldFail) pass(`Alias ${a} · ${t}`);
});

// Recueillement → Baudelaire
{
  const m = introSimSearch('Baudelaire', 'Les Fleurs du mal', 'Recueillement');
  const oe = m[0]?.entry?.oeuvre || '';
  if (!/fleurs du mal/i.test(oe)) fail('Alias', 'Recueillement Baudelaire', oe);
  else pass('Recueillement → Les Fleurs du mal (Baudelaire)');
}

// ── 4. Phrases intro — dates extraites vs œuvre ──
gtAll.filter(t => parseInt(t.id?.slice(3), 10) <= 260).slice(0, 80).forEach(t => {
  const built = introSimBuildFromText(t, t.auteur, t.oeuvre);
  const phrase = built.temps?.auteur || '';
  const oeYear = yearIn(t.oeuvre);
  const phraseYear = phrase.match(/(?:publie en|compose en|écrit en|paraît en)\s+(\d{4})/i)?.[1];
  if (oeYear && phraseYear && parseInt(phraseYear, 10) !== oeYear) {
    fail('Intro date', `${t.id} phrase ${phraseYear} ≠ œuvre ${oeYear}`, phrase.slice(0, 100));
  }
});

// ── 5. Auteurs — dates de vie vs œuvres ──
AUTEURS.forEach(a => {
  const birthDeath = a.dates?.match(/(\d{4})\s*[–-]\s*(\d{4})/);
  if (!birthDeath) return;
  const [, b, d] = birthDeath.map(Number);
  (a.oeuvres || '').match(/\(\d{4}\)/g)?.forEach(y => {
    const yr = parseInt(y.slice(1, 5), 10);
    if (yr < b - 5 || yr > d + 5) {
      fail('Auteur', `${a.nom} : œuvre ${yr} hors vie`, a.dates);
    }
  });
});

// ── 6. Catalogue BAC — auteur fictif / incohérences ──
BAC_OEUVRES.forEach(o => {
  if (/négritude/i.test(o.auteur)) {
    fail('Catalogue', `Auteur « ${o.auteur} » n'est pas un auteur`, o.oeuvre);
  }
  if (/gustave flaubert|émile zola|honoré de balzac/i.test(o.auteur)) {
    fail('Catalogue', `Prénom en trop : ${o.auteur}`, o.oeuvre);
  }
  const yCat = o.year;
  const yOe = yearIn(o.oeuvre);
  if (yOe && yCat && yOe !== yCat) {
    fail('Catalogue', `${o.auteur} · ${o.oeuvre}`, `year ${yCat} ≠ parenthèse ${yOe}`);
  }
});

// ── 7. Passages BAC — prénoms (homogénéité, pas erreur factuelle) ──
const styleNotes = [];
const badAut = new Map();
bac.forEach(p => {
  if (/^(Gustave|Émile|Honoré|Victor|Alphonse|Charles)\s+/i.test(p.auteur)) {
    badAut.set(p.auteur, (badAut.get(p.auteur) || 0) + 1);
  }
});
if (badAut.size) {
  styleNotes.push(`${badAut.size} formes « Prénom Nom » dans BAC (ex. Charles Baudelaire) — correct factuellement, différent du reste (Baudelaire, Hugo…)`);
}

// ── 8. Doublons GT ──
const ids = new Map();
gtAll.forEach(t => {
  if (!t.id) return;
  ids.set(t.id, (ids.get(t.id) || 0) + 1);
});
[...ids.entries()].filter(([, n]) => n > 1).forEach(([id, n]) => fail('Doublon', id, `${n} fiches`));

// ── 9. gtextId BAC invalides ──
bac.filter(p => p.gtextId && !gtById.has(p.gtextId)).slice(0, 5).forEach(p => {
  fail('BAC lien', `${p.id} → ${p.gtextId}`, p.titre);
});

// ── 10. Mouvements discutables (avertissements pédagogiques) ──
const WARN = [];
['GT-001', 'GT-196'].forEach(id => {
  const t = gtById.get(id);
  if (!t) return;
  const b = introSimBuildFromText(t, t.auteur, t.oeuvre);
  const phrase = b.temps?.auteur || '';
  if (/symbolisme/i.test(phrase) && id === 'GT-001') {
    WARN.push(`${id} : mouvement « symbolisme » pour 1866 — corrigé si phrase contient encore symbolisme`);
  }
  if (/symbolisme/i.test(phrase) && /rimbaud/i.test(t.auteur)) {
    WARN.push(`${id} : Rimbaud + « symbolisme » dans la phrase générée`);
  }
});

// ── Rapport ──
console.log('═══════════════════════════════════════════');
console.log(' VÉRIFICATION FACTUELLE · Bac Français Première');
console.log('═══════════════════════════════════════════\n');

console.log(`✓ Contrôles OK : ${ok.length}`);
ok.slice(0, 12).forEach(m => console.log('  ·', m));
if (ok.length > 12) console.log(`  … et ${ok.length - 12} autres\n`);

if (issues.length) {
  console.log(`\n⚠ Problèmes détectés : ${issues.length}\n`);
  const byCat = {};
  issues.forEach(i => { (byCat[i.cat] = byCat[i.cat] || []).push(i); });
  Object.entries(byCat).forEach(([cat, list]) => {
    console.log(`── ${cat} (${list.length}) ──`);
    list.slice(0, 8).forEach(i => console.log(`  • ${i.msg}${i.detail ? ' — ' + i.detail : ''}`));
    if (list.length > 8) console.log(`  … +${list.length - 8}`);
  });
} else {
  console.log('\n✓ Aucun problème bloquant détecté.');
}

if (WARN.length) {
  console.log(`\nℹ Avertissements pédagogiques (${WARN.length}) :`);
  WARN.forEach(w => console.log('  ·', w));
}
if (styleNotes.length) {
  console.log(`\nℹ Notes de style (${styleNotes.length}) :`);
  styleNotes.forEach(w => console.log('  ·', w));
}

console.log('\n── Comptes ──');
console.log('GT:', gtAll.length, '· BAC:', bac.length, '· Exercices:', EXERCICES.length, '· Auteurs:', AUTEURS.length);
process.exit(issues.length ? 1 : 0);
