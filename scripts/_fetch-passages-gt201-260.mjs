/**
 * Récupération de passages Wikisource pour enrichir GT-201→260 (réutilisable).
 * Données produites : scripts/_passages-gt201-260.json
 * Usage: node scripts/_fetch-passages-gt201-260.mjs
 */
import { writeFileSync } from 'fs';

/** GT ID → page Wikisource (chapitre / poème, pas index) + indice de recherche */
const CHAPTERS = {
  'GT-201': { page: 'Le_Feu/2', hint: 'tranchée' },
  'GT-202': { page: 'Aventures_prodigieuses_de_Tartarin_de_Tarascon/1/VIII', hint: 'lion de l\u2019Atlas' },
  'GT-203': { page: 'Pêcheur_d\u2019Islande,_1886/V', hint: 'haute falaise de Pors-Even' },
  'GT-204': { page: 'Vingt_mille_lieues_sous_les_mers/XI', hint: 'Nautilus' },
  'GT-205': { page: 'Dominique/I', hint: 'manoir' },
  'GT-208': { page: 'Épître_au_Roi_(Marot)', hint: 'Sire' },
  'GT-209': { page: 'Le_Verre_d\u2019eau/I', hint: 'verre' },
  'GT-210': { page: 'Le_Paysan_parvenu/I', hint: 'Jacob' },
  'GT-211': { page: 'Adolphe/I', hint: 'Ellénore' },
  'GT-212': { page: 'Obermann/Lettre_I', hint: 'nature' },
  'GT-213': { page: 'Julie_ou_la_Nouvelle_Héloïse/Lettre_I', hint: 'Julie' },
  'GT-214': { page: 'Les_Trois_Mousquetaires/I/1', hint: 'Meung' },
  'GT-215': { page: 'Ruy_Blas/I/1', hint: 'Ruy Blas' },
  'GT-216': { page: 'Lorenzaccio/I/1', hint: 'Florence' },
  'GT-217': { page: 'L\u2019Ensorcelée', hint: 'Elle' },
  'GT-218': { page: 'Thaïs/I', hint: 'Paphnuce' },
  'GT-219': { page: 'Poil_de_carotte/I', hint: 'père' },
  'GT-220': { page: 'La_Torture_par_l\u2019espérance', hint: 'espoir' },
  'GT-221': { page: 'Germinie_Lacerteux/I', hint: 'Germinie' },
  'GT-222': { page: 'Nadja/I', hint: 'Nadja' },
  'GT-223': { page: 'De_l\u2019Angélus_de_l\u2019aube_à_l\u2019Angélus_du_soir/Le_village', hint: 'Angélus' },
  'GT-224': { page: 'Électre/I/1', hint: 'Électre' },
  'GT-225': { page: 'Le_Diable_au_corps/I', hint: 'seize ans' },
  'GT-226': { page: 'L\u2019Écume_des_jours/XXIII', hint: 'Chloé' },
  'GT-229': { page: 'Mateo_Falcone', hint: 'Fortunato' },
  'GT-230': { page: 'La_Petite_Fadette/I', hint: 'Landry' },
  'GT-231': { page: 'Bouvard_et_Pécuchet/I', hint: 'Bouvard' },
  'GT-232': { page: 'Armance/I', hint: 'Octave' },
  'GT-233': { page: 'Les_Amours_jaunes/Rennes', hint: 'Rennes' },
  'GT-234': { page: 'Moralités_légendaires/Hamlet', hint: 'Hamlet' },
  'GT-235': { page: 'Poèmes_barbares/Midi', hint: 'Midi' },
  'GT-236': { page: 'Les_Trophées/Les_Conquérants/Héraclès', hint: 'arc' },
  'GT-237': { page: 'Bruges-la-Morte/I', hint: 'Bruges' },
  'GT-238': { page: 'Vies_imaginaires/Pétrone', hint: 'Pétrone' },
  'GT-239': { page: 'Une_saison_en_enfer/Mauvais_sang', hint: 'bêtise' },
  'GT-240': { page: 'Le_Passant/I/1', hint: 'masque' },
  'GT-241': { page: 'Delphine/I', hint: 'Delphine' },
  'GT-242': { page: 'La_Nuit_de_mai', hint: 'Poète' },
  'GT-243': { page: 'Le_Capitaine_Fracasse/I', hint: 'Fracasse' },
  'GT-244': { page: 'La_Vénus_d\u2019Ille', hint: 'statue' },
  'GT-245': { page: 'La_Cousine_Bette/I', hint: 'Bette' },
  'GT-246': { page: 'La_Tentation_de_saint_Antoine/I', hint: 'Antoine' },
  'GT-247': { page: 'La_Terre/I', hint: 'labour' },
  'GT-248': { page: 'Là-bas/I', hint: 'Durtal' },
  'GT-249': { page: 'Bel-Ami/I', hint: 'Duroy' },
  'GT-250': { page: 'Claudine_à_l\u2019école/I', hint: 'Claudine' },
  'GT-252': { page: 'La_Jeune_Parque', hint: 'Parque' },
  'GT-253': { page: 'Les_Fenêtres_(Apollinaire)', hint: 'fenêtres' },
  'GT-254': { page: 'Le_Crevecœur/La_rose_et_le_réséda', hint: 'rose' },
  'GT-255': { page: 'Les_Fleurs_du_mal/Harmonie_du_soir', hint: 'Harmonie' },
  'GT-256': { page: 'Les_Déracinés/I', hint: 'racines' },
  'GT-259': { page: 'La_Mare_au_diable/I', hint: 'Germain' },
  'GT-260': { page: 'Les_Médailles_d\u2019argent', hint: 'médailles' },
};

const UA = 'GtextCorpus/1.0 (francais-cours; educational; mail:none)';

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/\r/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function cleanWsText(raw) {
  let t = raw;
  // drop nav/metadata blocks
  t = t.replace(/^[\s\S]*?(?=(?:###|Sire,|Voici|Le |La |Les |Il |Elle |Un |Une |D |J |C |N |M |G |P |—|«))/m, '');
  t = t.replace(/Récupérée de[\s\S]*$/m, '');
  t = t.replace(/◄[\s\S]*?►/g, '');
  t = t.replace(/book[\s\S]*?djvu\/\d+/gi, '');
  t = t.replace(/Wikipédia[\s\S]*$/m, '');
  t = t.replace(/Rechercher[\s\S]*$/m, '');
  t = t.replace(/###[^\n]*/g, '');
  t = t.replace(/⁂/g, '');
  return t.replace(/\s+/g, ' ').trim();
}

function extractPassage(text, hint, min = 400, max = 1200) {
  const flat = cleanWsText(text);
  if (flat.length < min) return { passage: flat, ok: flat.length >= 200 };
  let idx = 0;
  if (hint) {
    const pos = flat.toLowerCase().indexOf(hint.toLowerCase());
    if (pos >= 0) idx = Math.max(0, pos - 100);
  }
  let start = idx;
  let end = Math.min(flat.length, start + max);
  let chunk = flat.slice(start, end);
  // start at sentence boundary
  const m = chunk.match(/[.!?…]\s+/);
  if (m && m.index > 0 && m.index < 120) {
    chunk = chunk.slice(m.index + m[0].length);
    start += m.index + m[0].length;
  }
  while (chunk.length > max) {
    const cut = chunk.lastIndexOf('. ', max);
    chunk = cut >= min ? chunk.slice(0, cut + 1) : chunk.slice(0, max);
    break;
  }
  while (chunk.length < min && end < flat.length) {
    end = Math.min(flat.length, end + 300);
    chunk = flat.slice(start, end);
    const cut = chunk.lastIndexOf('. ');
    if (cut >= min) chunk = chunk.slice(0, cut + 1);
  }
  return { passage: chunk.trim(), ok: chunk.length >= min && chunk.length <= max };
}

async function fetchPage(page) {
  const url = 'https://fr.wikisource.org/w/api.php?action=parse&page='
    + encodeURIComponent(page) + '&prop=text&format=json&redirects=1';
  const r = await fetch(url, { headers: { 'User-Agent': UA } });
  const txt = await r.text();
  let j;
  try { j = JSON.parse(txt); } catch { return { error: txt.slice(0, 80) }; }
  if (j.error) return { error: j.error.info };
  return { text: stripHtml(j.parse.text['*']), page };
}

async function searchAlt(query) {
  const url = 'https://fr.wikisource.org/w/api.php?action=query&list=search&srsearch='
    + encodeURIComponent(query) + '&format=json&srlimit=5';
  const r = await fetch(url, { headers: { 'User-Agent': UA } });
  const j = await r.json();
  return (j.query?.search || []).map((s) => s.title);
}

const results = {};
const errors = {};
const ids = Object.keys(CHAPTERS);

for (let i = 0; i < ids.length; i++) {
  const id = ids[i];
  const cfg = CHAPTERS[id];
  process.stdout.write(`[${i + 1}/${ids.length}] ${id} `);
  try {
    let res = await fetchPage(cfg.page);
    if (res.error) {
      const alts = await searchAlt(cfg.page.replace(/_/g, ' ').split('/')[0]);
      for (const alt of alts) {
        res = await fetchPage(alt);
        if (!res.error && res.text.length > 500) { cfg.page = alt; break; }
      }
    }
    if (res.error) {
      errors[id] = res.error;
      console.log('ERR', res.error.slice(0, 60));
    } else {
      const { passage, ok } = extractPassage(res.text, cfg.hint);
      results[id] = { len: passage.length, ok, page: cfg.page, passage };
      console.log(ok ? 'OK' : 'SHORT', passage.length, cfg.page);
    }
  } catch (e) {
    errors[id] = e.message;
    console.log('EXC', e.message);
  }
  await new Promise((r) => setTimeout(r, 2500));
}

writeFileSync('scripts/_passages-gt201-260.json', JSON.stringify({ results, errors }, null, 2));
console.log('\nDone:', Object.keys(results).length, 'ok-ish,', Object.keys(errors).length, 'errors');
