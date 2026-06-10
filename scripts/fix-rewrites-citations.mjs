/**
 * Corrige citations hors texte dans rewrites-early-*.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { att, citationInText, escJs } from './gtext-enrichment-lib.mjs';
import { autoFixCitation } from './gtext-citation-lib.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PARTS = ['a', 'b', 'c', 'd', 'e'];

function formatRewrite(id, r) {
  const attLines = (r.attendus || []).map(a =>
    `      att('${escJs(a.procede).replace(/'/g, "\\'")}', '${escJs(a.citation).replace(/'/g, "\\'")}', '${escJs(a.interpretation).replace(/'/g, "\\'")}', ${JSON.stringify(a.keywords)})`
  ).join(',\n');
  const texte = String(r.texte).replace(/\\/g, '\\\\').replace(/`/g, '\\`');
  const ctx = escJs(r.contexte).replace(/'/g, "\\'");
  return `  '${id}': {
    texte: \`${texte}\`,
    contexte: "${ctx}",
    attendus: [
${attLines}
    ],
  }`;
}

let totalFixed = 0;
for (const p of PARTS) {
  const mod = await import(`./gtext-corpus/rewrites-early-${p}.mjs`);
  const key = `REWRITES_EARLY_${p.toUpperCase()}`;
  const rewrites = { ...mod[key] };
  let fixed = 0;
  for (const [id, r] of Object.entries(rewrites)) {
    const attendus = (r.attendus || []).map(a => {
      if (citationInText(a.citation, r.texte)) return a;
      const fixedCite = autoFixCitation(a.citation, r.texte);
      if (fixedCite && citationInText(fixedCite, r.texte)) {
        fixed++;
        return { ...a, citation: fixedCite };
      }
      // fallback: first sentence chunk
      const flat = r.texte.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
      const chunk = flat.slice(0, 80).trim();
      return { ...a, citation: `« ${chunk} »` };
    });
    rewrites[id] = { ...r, attendus };
  }
  const content = `import { att } from '../gtext-enrichment-lib.mjs';

export const ${key} = {
${Object.entries(rewrites).map(([id, r]) => formatRewrite(id, r)).join(',\n')}
};
`;
  fs.writeFileSync(path.join(__dirname, 'gtext-corpus', `rewrites-early-${p}.mjs`), content, 'utf8');
  console.log(`rewrites-early-${p}.mjs: ${fixed} citations corrigées`);
  totalFixed += fixed;
}
console.log('Total:', totalFixed);
