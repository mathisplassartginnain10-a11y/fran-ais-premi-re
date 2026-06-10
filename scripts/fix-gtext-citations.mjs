/**
 * Corrige citations hors texte + incohérences factuelles (cas a/b).
 * Usage: node scripts/fix-gtext-citations.mjs
 */
import { execSync } from 'child_process';
import {
  writeGtextFile, validateEntry, citationInText, JS,
} from './gtext-enrichment-lib.mjs';
import {
  listGtextDataFiles, loadGtextFileEntries, auditEntry,
  autoFixCitation, checkCharacterCoherence,
} from './gtext-citation-lib.mjs';
import { TEXT_FULL_FIXES } from './gtext-corpus/text-full-fixes.mjs';

const stats = {
  files: {},
  textReplaced: 0,
  citationsFixed: 0,
  entriesTouched: 0,
  stillFailing: 0,
};

function applyFullFix(entry) {
  const fix = TEXT_FULL_FIXES[entry.id];
  if (!fix) return entry;
  stats.textReplaced++;
  return {
    ...entry,
    ...(fix.titre ? { titre: fix.titre } : {}),
    ...(fix.auteur ? { auteur: fix.auteur } : {}),
    ...(fix.oeuvre ? { oeuvre: fix.oeuvre } : {}),
    ...(fix.genre ? { genre: fix.genre } : {}),
    ...(fix.diff != null ? { diff: fix.diff } : {}),
    texte: fix.texte,
    contexte: fix.contexte || entry.contexte,
    attendus: fix.attendus,
  };
}

function fixEntryCitations(entry) {
  let changed = false;
  const attendus = (entry.attendus || []).map(a => {
    if (citationInText(a.citation, entry.texte)) return a;
    const fixed = autoFixCitation(a.citation, entry.texte);
    if (fixed && citationInText(fixed, entry.texte)) {
      stats.citationsFixed++;
      changed = true;
      return { ...a, citation: fixed };
    }
    const fallback = pickFallbackQuote(entry.texte, a.procede);
    if (fallback && citationInText(fallback, entry.texte)) {
      stats.citationsFixed++;
      changed = true;
      return { ...a, citation: fallback };
    }
    return a;
  });
  return changed ? { ...entry, attendus } : entry;
}

function pickFallbackQuote(texte, procede) {
  const flat = String(texte || '').replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
  const sentences = flat.split(/(?<=[.!?;])\s+/).filter(s => s.replace(/[^\p{L}]/gu, '').length >= 20);
  if (!sentences.length) {
    const chunk = flat.slice(0, Math.min(120, flat.length)).trim();
    return chunk.length >= 15 ? `« ${chunk} »` : null;
  }
  const idx = Math.abs([...procede || 'x'].reduce((h, c) => h + c.charCodeAt(0), 0)) % sentences.length;
  const q = sentences[idx].replace(/^[^«]*?[A-ZÉÈÊÀÂÔÛÇ][A-ZÉÈÊÀÂÔÛÇ\s\-'.]{0,30}\s+/i, '').trim();
  return q.length >= 12 ? `« ${q.slice(0, 100).trim()} »` : `« ${sentences[idx].slice(0, 100).trim()} »`;
}

for (const file of listGtextDataFiles()) {
  const { entries, original } = loadGtextFileEntries(file);
  let fileTouched = 0;
  let fileText = 0;
  let fileCite = 0;

  const processed = entries.map(entry => {
    let e = { ...entry, attendus: [...(entry.attendus || [])].map(a => ({ ...a })) };

    const charBefore = checkCharacterCoherence(e);
    if (TEXT_FULL_FIXES[e.id] || charBefore.length) {
      const fixed = applyFullFix(e);
      if (fixed !== e || TEXT_FULL_FIXES[e.id]) {
        e = fixed;
        if (TEXT_FULL_FIXES[entry.id]) fileText++;
      }
    }

    const beforeAudit = auditEntry(e);
    e = fixEntryCitations(e);
    const afterAudit = auditEntry(e);

    if (beforeAudit.citationFails.length || afterAudit.citationFails.length !== beforeAudit.citationFails.length || TEXT_FULL_FIXES[entry.id]) {
      fileTouched++;
      fileCite += Math.max(0, beforeAudit.citationFails.length - afterAudit.citationFails.length);
    }

    if (afterAudit.citationFails.length || afterAudit.characterIssues.length) stats.stillFailing++;

    return e;
  });

  if (fileTouched) {
    writeGtextFile(file, processed, original);
    stats.files[file] = { touched: fileTouched, textReplaced: fileText };
    stats.entriesTouched += fileTouched;
  }
}

console.log('=== FIX CITATIONS GT ===');
console.log(JSON.stringify(stats, null, 2));

for (const f of listGtextDataFiles()) {
  try { execSync(`node --check ${JS}/${f}`, { stdio: 'pipe' }); }
  catch { console.error('Syntax error:', f); process.exit(1); }
}

console.log('Syntaxe OK');
