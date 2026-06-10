/**
 * Enrichit les fichiers GT d'origine (data-gtextes.js, extra.js, extra2–11.js).
 * Usage: node scripts/enrich-gtexts-early.mjs [main|extra|2-11]
 *        node scripts/enrich-gtexts-early.mjs all
 */
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';
import {
  loadAllGtexts, isBadEntry, writeGtextFile, validateEntry,
  buildGoodDonorIndex, oeuvreKey, JS,
} from './gtext-enrichment-lib.mjs';
import { REWRITES_EARLY } from './gtext-corpus/rewrites-early.mjs';
import { CANONICAL_BY_WORK } from './gtext-corpus/canonical-passages.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const FILE_MAP = {
  main: { file: 'data-gtextes.js', varName: 'GRANDS_TEXTES' },
  extra: { file: 'data-gtextes-extra.js', varName: 'GRANDS_TEXTES_EXTRA' },
};
for (let n = 2; n <= 11; n++) {
  FILE_MAP[String(n)] = { file: `data-gtextes-extra${n}.js`, varName: `GRANDS_TEXTES_EXTRA${n}` };
}

function loadGtextFile(key) {
  const { file, varName } = FILE_MAP[key];
  const sandbox = {};
  vm.createContext(sandbox);
  let code = fs.readFileSync(path.join(JS, file), 'utf8');
  code = code.replace(/\bconst (GRANDS_TEXTES\w*)\b/g, 'var $1');
  vm.runInContext(code, sandbox);
  return {
    file,
    varName,
    entries: sandbox[varName] || [],
    original: fs.readFileSync(path.join(JS, file), 'utf8'),
  };
}

const all = loadAllGtexts();
const donors = buildGoodDonorIndex(all);
const usedTextes = new Set(all.filter(t => !isBadEntry(t)).map(t => t.texte.trim()));
const usedCanon = new Map();

function pickCanonical(entry) {
  const k = oeuvreKey(entry.auteur, entry.oeuvre);
  const list = CANONICAL_BY_WORK[k] || [];
  const used = usedCanon.get(k) || 0;
  const pick = list[used];
  if (!pick) return null;
  usedCanon.set(k, used + 1);
  return pick;
}

function pickDonor(entry) {
  const k = oeuvreKey(entry.auteur, entry.oeuvre);
  const list = donors.get(k) || [];
  return list.find(d => d.texte.trim() !== entry.texte.trim() && !usedTextes.has(d.texte.trim()));
}

function applyRewrite(entry) {
  if (REWRITES_EARLY[entry.id]) {
    const r = REWRITES_EARLY[entry.id];
    usedTextes.add(r.texte.trim());
    return {
      ...entry,
      ...(r.titre ? { titre: r.titre } : {}),
      ...(r.auteur ? { auteur: r.auteur } : {}),
      ...(r.oeuvre ? { oeuvre: r.oeuvre } : {}),
      ...(r.genre ? { genre: r.genre } : {}),
      ...(r.diff != null ? { diff: r.diff } : {}),
      texte: r.texte,
      contexte: r.contexte || entry.contexte,
      attendus: r.attendus,
    };
  }
  const canon = pickCanonical(entry);
  if (canon) {
    usedTextes.add(canon.texte.trim());
    return {
      ...entry,
      ...(canon.titre ? { titre: canon.titre } : {}),
      texte: canon.texte,
      contexte: canon.contexte || entry.contexte,
      attendus: canon.attendus,
    };
  }
  const donor = pickDonor(entry);
  if (donor) {
    usedTextes.add(donor.texte.trim());
    return {
      ...entry,
      texte: donor.texte,
      contexte: donor.contexte || entry.contexte,
      attendus: donor.attendus.map(a => ({ ...a })),
    };
  }
  return entry;
}

function processKey(key) {
  const { file, entries, original } = loadGtextFile(key);
  let rewritten = 0;
  let stillBad = 0;
  const processed = entries.map(entry => {
    if (!isBadEntry(entry)) return entry;
    const next = applyRewrite(entry);
    if (next !== entry) rewritten++;
    const issues = validateEntry(next);
    if (issues.length) {
      stillBad++;
      console.warn(`⚠ ${next.id}: ${issues.join(', ')}`);
    }
    return next;
  });
  writeGtextFile(file, processed, original);
  execSync(`node --check ${path.join(JS, file)}`, { stdio: 'inherit' });
  console.log(`${file}: ${rewritten} réécrit(s), ${stillBad} encore bad`);
  return { rewritten, stillBad };
}

const arg = process.argv[2] || 'all';
const keys = arg === 'all' ? ['main', 'extra', ...Array.from({ length: 10 }, (_, i) => String(i + 2))] : [arg];
let totalR = 0;
let totalB = 0;
for (const k of keys) {
  if (!FILE_MAP[k]) {
    console.error('Clé inconnue:', k, '— utiliser main|extra|2-11|all');
    process.exit(1);
  }
  const { rewritten, stillBad } = processKey(k);
  totalR += rewritten;
  totalB += stillBad;
}
console.log(`Total: ${totalR} réécrit(s), ${totalB} encore bad`);
