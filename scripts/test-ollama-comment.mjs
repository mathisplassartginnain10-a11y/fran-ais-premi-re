/**
 * Audit pipeline commentaire Ollama (avant/après refonte).
 * Usage: node scripts/test-ollama-comment.mjs [--live]
 *
 * Sans Ollama : tests unitaires validation + sanitize sur échantillons.
 * Avec Ollama (--live ou si /api/tags répond) : 3 générations GT réelles.
 */
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const JS = path.join(__dirname, '..', 'js');
const LIVE = process.argv.includes('--live');

const TEST_GT_IDS = ['GT-003', 'GT-014', 'GT-733', 'GT-007', 'GT-024'];

function loadSandbox() {
  const sandbox = {
    console,
    setTimeout,
    clearTimeout,
    fetch,
    localStorage: { getItem: () => null, setItem: () => {} },
  };
  vm.createContext(sandbox);
  const files = [
    'data-intro-simulator.js',
    'data-gtextes.js',
    'data-gtextes-extra.js',
    'ollama-comment.js',
  ];
  for (let i = 2; i <= 21; i++) files.push(`data-gtextes-extra${i}.js`);
  for (const f of files) {
    const p = path.join(JS, f);
    if (!fs.existsSync(p)) continue;
    let code = fs.readFileSync(p, 'utf8');
    code = code.replace(/\bconst (GRANDS_TEXTES\w*|INTRO_SIM_\w+)\b/g, 'var $1');
    vm.runInContext(code, sandbox, { filename: f });
  }
  return sandbox;
}

function getAllGtexts(sandbox) {
  const all = [...(sandbox.GRANDS_TEXTES || [])];
  for (let i = 2; i <= 21; i++) {
    const k = `GRANDS_TEXTES_EXTRA${i}`;
    if (sandbox[k]) all.push(...sandbox[k]);
  }
  return all;
}

async function ollamaUp(base = 'http://127.0.0.1:11434') {
  try {
    const r = await fetch(`${base}/api/tags`, { signal: AbortSignal.timeout(4000) });
    return r.ok;
  } catch {
    return false;
  }
}

function runUnitTests(sandbox) {
  const results = [];
  const { ollamaCommentValidateOutput, ollamaCommentSanitizeFrench, ollamaCommentCheckTexte } = sandbox;

  const sampleTexte = 'Les sanglots longs des violons de l\'automne blessent mon cœur d\'une langueur monotone.';
  const good = `### Partie I — La mélancolie automnale
Le poème ouvre sur une assonance en « o » (« sanglots longs », v. 1) qui imite la plainte du violon.

### Partie II — Le temps qui passe
La répétition des sons prolonge l'effet de langueur.

### Partie III — Subjectivité lyrique
Le « cœur » (v. 2) personnifie la souffrance du poète.

### Conclusion
Verlaine construit une mélancolie musicale ; on retrouve ce registre chez Lamartine.`;

  const vGood = ollamaCommentValidateOutput(good, { texte: sampleTexte });
  results.push({ test: 'validation format OK', pass: vGood.ok, detail: vGood.blocking });

  const bad = `Voici le développement demandé :\n### Introduction\nIntro parasite.\n### Partie I — Test\nTexte.`;
  const vBad = ollamaCommentValidateOutput(bad, { texte: sampleTexte });
  results.push({ test: 'validation bloque format', pass: !vBad.ok, detail: vBad.blocking });

  const invented = `### Partie I — A
« mon âme est un labyrinthe infini » montre l'angoisse. « sanglots longs » confirme la mélancolie. « ciel de plomb » suggère l'oppression.

### Partie II — B
« sanglots longs » reviennent.

### Partie III — C
Texte avec « autre citation inventée ».

### Conclusion
Fin.`;
  const vInv = ollamaCommentValidateOutput(invented, { texte: sampleTexte });
  results.push({
    test: 'alerte citation inventée',
    pass: vInv.warnings.some(w => /citations/i.test(w)),
    detail: vInv.warnings,
  });

  const hollow = 'Il convient de noter que l\'auteur met en lumière une dimension existentielle. Par ailleurs, par ailleurs, par ailleurs, en outre, en outre, en outre.';
  const cleaned = ollamaCommentSanitizeFrench(hollow);
  results.push({
    test: 'sanitize creux + répétitions',
    pass: !/convient de noter|dimension existentielle|par ailleurs.*par ailleurs.*par ailleurs/i.test(cleaned),
    detail: cleaned.slice(0, 120),
  });

  const blocked = ollamaCommentCheckTexte({ texte: 'court' });
  results.push({ test: 'bloque passage court', pass: blocked.ok === false, detail: blocked.message });

  return results;
}

async function runLiveGenerations(sandbox, gtexts) {
  const { ollamaCommentGenerate, ollamaCommentGatherContext } = sandbox;
  const reports = [];

  for (const id of TEST_GT_IDS) {
    const gt = gtexts.find(t => t.id === id);
    if (!gt) {
      reports.push({ id, skip: 'GT introuvable' });
      continue;
    }
    const entry = {
      id: `TEST-${id}`,
      auteurNom: gt.auteur,
      oeuvre: gt.oeuvre,
      titre: gt.titre,
      genre: gt.genre,
      gtextId: gt.id,
      temps: {
        amorce: 'Amorce test.',
        auteur: 'Auteur test.',
        extrait: 'Extrait test.',
        problematique: 'Problématique test ?',
        plan: 'Plan test.',
      },
    };
    const t0 = Date.now();
    try {
      const comm = await ollamaCommentGenerate(entry, {
        passageRaw: gt.texte,
        polish: true,
        keepLoaded: true,
        stopOllama: false,
        onStatus: (m) => process.stdout.write(`  [${id}] ${String(m).slice(0, 60)}\n`),
      });
      reports.push({
        id,
        ms: Date.now() - t0,
        parts: comm.parts?.length,
        validationOk: comm.validation?.ok,
        warnings: comm.validation?.warnings,
        citeRatio: comm.validation?.citeStats?.ratio,
        words: comm.validation?.wordCount,
        sample: comm.parts?.[0]?.text?.slice(0, 180),
      });
    } catch (e) {
      reports.push({ id, error: e.message });
    }
  }
  return reports;
}

async function main() {
  console.log('=== Test pipeline ollama-comment ===\n');
  const sandbox = loadSandbox();
  const gtexts = getAllGtexts(sandbox);

  console.log('--- Tests unitaires (sans LLM) ---');
  const unit = runUnitTests(sandbox);
  unit.forEach(u => console.log(`${u.pass ? '✓' : '✗'} ${u.test}`, u.detail ? JSON.stringify(u.detail).slice(0, 100) : ''));

  const live = LIVE || (await ollamaUp());
  if (!live) {
    console.log('\n--- Génération live : Ollama indisponible ---');
    console.log('Relance avec Ollama actif : node scripts/test-ollama-comment.mjs --live');
    console.log(`GT cibles pour comparaison : ${TEST_GT_IDS.join(', ')}`);
    return;
  }

  console.log('\n--- Génération live (3-5 GT) ---');
  const reports = await runLiveGenerations(sandbox, gtexts);
  console.log(JSON.stringify(reports, null, 2));
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
