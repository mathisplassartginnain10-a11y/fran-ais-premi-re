/**
 * Corrige articles et tournures dans les interprétations grands textes.
 */
const fs = require('fs');
const path = require('path');

const JS_DIR = path.join(__dirname, '..', 'js');
const FILES = fs.readdirSync(JS_DIR).filter(f => /^data-gtextes/.test(f) && f.endsWith('.js') && !f.includes('oeuvre'));

function prepDe(phrase) {
  let p = (phrase || '').trim();
  if (!p) return 'du passage';
  if (/^de (le |la |l'|les |du |des )/.test(p)) return p;
  if (/^(le |la |l'|les )/.test(p)) {
    if (/^l'/.test(p)) return "de l'" + p.slice(2);
    if (/^la /.test(p)) return 'de la ' + p.slice(3);
    if (/^les /.test(p)) return 'des ' + p.slice(4);
    return 'du ' + p.slice(3);
  }
  if (/^[aeiouéèêàâh]/i.test(p)) return "de l'" + p;
  if (/tion$|té$|esse$|ie$|ade$|ance$|ence$|eur$|euse$|ière$|oire$|isme$/.test(p)) return 'de la ' + p;
  return 'du ' + p;
}

function withArticle(phrase) {
  const d = prepDe(phrase);
  if (d.startsWith('de l\'')) return "l'" + d.slice(4);
  if (d.startsWith('de la ')) return 'la ' + d.slice(6);
  if (d.startsWith('des ')) return 'les ' + d.slice(4);
  if (d.startsWith('du ')) return 'le ' + d.slice(3);
  return phrase;
}

function fixInterp(text) {
  let t = text;

  t = t.replace(/au cœur de ([a-zàâäéèêëïîôùûüœæç' -]+?)([.;,]|$)/gi, (_, p, end) => `au cœur ${prepDe(p)}${end}`);
  t = t.replace(/structure ([a-zàâäéèêëïîôùûüœæç' -]+?)([.;,]|$)/gi, (_, p, end) => {
    if (/^(le |la |l'|les |du |de )/.test(p)) return `structure ${p}${end}`;
    return `éclaire ${prepDe(p)}${end}`;
  });
  t = t.replace(/suggère ainsi ([a-zàâäéèêëïîôùûüœæç' -]+?)([.;,]|$)/gi, (_, p, end) => `suggère ainsi ${withArticle(p)}${end}`);
  t = t.replace(/dans ([a-zàâäéèêëïîôùûüœæç' -]+?)([.;,]|$)/gi, (_, p, end) => {
    if (/^(le |la |l'|les |un |une |des |du |de )/.test(p)) return `dans ${p}${end}`;
    if (/^[A-ZÉÀ]/.test(p)) return `dans ${p}${end}`;
    return `dans ${withArticle(p)}${end}`;
  });
  t = t.replace(/organise la ([a-zàâäéèêëïîôùûüœæç' -]+?) et permet/gi, (_, p) => `organise ${prepDe(p)} et permet`);
  t = t.replace(/concentre cette coloration dans ([a-zàâäéèêëïîôùûüœæç' -]+?)([.;,]|$)/gi, (_, p, end) => `concentre cette coloration ${prepDe(p)}${end}`);
  t = t.replace(/: « ([^»]+) » juxtapose plusieurs/g, ': l\'accumulation de $1 juxtapose plusieurs');
  t = t.replace(/oblige le lecteur à arbitrer entre deux pôles\./g, 'oblige le lecteur à arbitrer entre deux pôles opposés.');
  t = t.replace(/\s+/g, ' ').trim();
  return t;
}

let total = 0;
for (const file of FILES) {
  const fp = path.join(JS_DIR, file);
  let content = fs.readFileSync(fp, 'utf8');
  let n = 0;
  content = content.replace(/interpretation:\s*"((?:\\.|[^"\\])*)"/g, (full, inner) => {
    const decoded = inner.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    const fixed = fixInterp(decoded);
    if (fixed === decoded) return full;
    n++;
    const encoded = fixed.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return `interpretation: "${encoded}"`;
  });
  if (n) {
    fs.writeFileSync(fp, content);
    console.log(file, n);
    total += n;
  }
}
console.log('Total fixes:', total);
