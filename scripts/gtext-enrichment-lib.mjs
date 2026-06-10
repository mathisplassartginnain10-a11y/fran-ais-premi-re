/**
 * Bibliothèque partagée pour l'enrichissement des grands textes.
 */
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const JS = path.join(__dirname, '..', 'js');

export const BAD_MARKERS = [
  "L'extrait invite",
  'Le lecteur perçoit une écriture marquée',
  'Les mots choisis par l\'auteur',
  'Dans ce passage de',
  'mobilise ce procédé pour structurer',
  'repéré dans «',
  'Manipulation et conseil criminel — registre tragique. Les mots',
];

export function escJs(s) {
  return String(s ?? '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

export function att(procede, citation, interpretation, keywords) {
  return { procede, citation, interpretation, keywords };
}

export function isBadEntry(t) {
  const tx = t.texte || '';
  const attTxt = (t.attendus || []).map(a => `${a.interpretation || ''} ${a.citation || ''}`).join(' ');
  if (tx.length < 400) return true;
  if (BAD_MARKERS.some(m => tx.includes(m) || attTxt.includes(m))) return true;
  return false;
}

export function loadAllGtexts() {
  const sandbox = {};
  vm.createContext(sandbox);
  const files = fs.readdirSync(JS)
    .filter(f => /^data-gtextes/.test(f) && f.endsWith('.js') && !f.includes('oeuvre'))
    .sort((a, b) => {
      if (a === 'data-gtextes.js') return -1;
      if (b === 'data-gtextes.js') return 1;
      return a.localeCompare(b, undefined, { numeric: true });
    });
  for (const f of files) {
    let code = fs.readFileSync(path.join(JS, f), 'utf8');
    code = code.replace(/\bconst (GRANDS_TEXTES\w*)\b/g, 'var $1');
    vm.runInContext(code, sandbox, { filename: f });
  }
  return sandbox.GRANDS_TEXTES || [];
}

export function loadExtraFile(num) {
  const sandbox = {};
  vm.createContext(sandbox);
  const file = `data-gtextes-extra${num}.js`;
  let code = fs.readFileSync(path.join(JS, file), 'utf8');
  code = code.replace(/\bconst (GRANDS_TEXTES_EXTRA\d+)\b/g, 'var $1');
  vm.runInContext(code, sandbox);
  return {
    file,
    varName: `GRANDS_TEXTES_EXTRA${num}`,
    entries: sandbox[`GRANDS_TEXTES_EXTRA${num}`] || [],
    original: fs.readFileSync(path.join(JS, file), 'utf8'),
  };
}

export function formatGtEntry(t) {
  const attLines = (t.attendus || []).map(a =>
    `      { procede: "${escJs(a.procede)}", citation: "${escJs(a.citation)}", interpretation: "${escJs(a.interpretation)}", keywords: ${JSON.stringify(a.keywords)} }`
  ).join(',\n');
  return `  {
    id: "${escJs(t.id)}",
    titre: "${escJs(t.titre)}",
    auteur: "${escJs(t.auteur)}",
    oeuvre: "${escJs(t.oeuvre)}",
    genre: "${escJs(t.genre)}",
    diff: ${t.diff},
    texte: \`${String(t.texte).replace(/\\/g, '\\\\').replace(/`/g, '\\`')}\`,
    contexte: "${escJs(t.contexte)}",
    attendus: [
${attLines}
    ]
  }`;
}

export function oeuvreKey(auteur, oeuvre) {
  return `${auteur}|${(oeuvre || '').replace(/\(\d{4}\)/, '').trim()}`.toLowerCase();
}

export function citationInText(citation, texte) {
  const norm = s => String(s ?? '')
    .normalize('NFD').replace(/\p{M}/gu, '')
    .replace(/[«»""''„]/g, '')
    .replace(/\.\.\.|…/g, ' ')
    .replace(/[^\p{L}\p{N}\s'-]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
  const strip = c => String(c ?? '').replace(/^[«\s]+|[»\s]+$/g, '').trim();
  const segments = strip(citation).split(/\s*[\/→]\s*|\s*…\s*|\s*\.\.\.\s*/).map(s => s.trim()).filter(s => s.replace(/[^\p{L}]/gu, '').length >= 4);
  const test = seg => {
    const a = norm(seg);
    const b = norm(texte);
    return a.length >= 4 && b.includes(a);
  };
  if (!segments.length) return test(strip(citation));
  return segments.every(test);
}

export function validateEntry(t) {
  const issues = [];
  if ((t.texte || '').length < 400) issues.push('texte court');
  if (BAD_MARKERS.some(m => (t.texte || '').includes(m))) issues.push('marqueur générique');
  (t.attendus || []).forEach((a, i) => {
    if (!citationInText(a.citation, t.texte)) issues.push(`attendu ${i + 1} citation hors texte`);
  });
  return issues;
}

export function buildGoodDonorIndex(all) {
  const byWork = new Map();
  all.filter(t => !isBadEntry(t)).forEach(t => {
    const k = oeuvreKey(t.auteur, t.oeuvre);
    if (!byWork.has(k)) byWork.set(k, []);
    byWork.get(k).push(t);
  });
  return byWork;
}

export function writeExtraFile(num, entries, originalContent) {
  writeGtextFile(`data-gtextes-extra${num}.js`, entries, originalContent);
}

export function writeGtextFile(filename, entries, originalContent) {
  const varName = originalContent.match(/\b(?:const|var)\s+(GRANDS_TEXTES\w*)\s*=/)?.[1] || 'GRANDS_TEXTES';
  const headerMatch = originalContent.match(/^[\s\S]*?(?=const GRANDS_TEXTES|var GRANDS_TEXTES)/);
  const header = headerMatch ? headerMatch[0] : `/* ${filename} */\n`;
  const footerMatch = originalContent.match(/\];\s*([\s\S]*)$/);
  const footer = footerMatch ? footerMatch[1] : '';
  const content = `${header}const ${varName} = [\n${entries.map(formatGtEntry).join(',\n')}\n];\n${footer}`;
  fs.writeFileSync(path.join(JS, filename), content, 'utf8');
}

export function mergeOeuvreById(entries, oeuvreDescFn) {
  const p = path.join(JS, 'data-gtextes-oeuvre-by-id.js');
  let content = fs.readFileSync(p, 'utf8');
  for (const t of entries) {
    const desc = oeuvreDescFn(t);
    const line = `  "${t.id}": "${escJs(desc)}",\n`;
    const re = new RegExp(`  "${t.id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}": "[^"]*",\\n`);
    if (re.test(content)) content = content.replace(re, line);
    else {
      content = content.replace(/\n};\s*$/, `\n${line}};\n`);
    }
  }
  fs.writeFileSync(p, content, 'utf8');
}
