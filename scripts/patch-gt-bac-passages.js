/**
 * Remplace les 8 GT « Passage N » par de vrais extraits + attendus rédigés.
 * Usage: node scripts/patch-gt-bac-passages.js [--dry]
 */
const fs = require('fs');
const path = require('path');

const DRY = process.argv.includes('--dry');
const JS = path.join(__dirname, '..', 'js');

const PATCHES = {
  'GT-531': {
    file: 'data-gtextes-extra17.js',
    titre: 'Le vol du ruban',
    texte: `Le premier objet qui m'intéressa, ce fut un ruban de satin couleur pourpre avec des agraffes de bord. Je le crus sur la table de Mlle Merceret, sa bonne ; j'en pris l'idée, et comme je ne songeais point à le voler, je ne trouvai pas de mal à le prendre.`,
    contexte: 'Autobiographie — culpabilité du moi, aveu et subjectivité.',
    attendus: [
      { procede: 'Focalisation interne', citation: '« je ne songeais point à le voler »', interpretation: 'Focalisation interne : Rousseau restitue la logique intime du jeune voleur naïf ; le lecteur accède à la genèse d\'une faute que le narrateur adulte assume.', keywords: ['focalisation', 'interne', 'vol', 'coupable', 'moi'] },
      { procede: 'Registre pathétique', citation: '« ruban de satin couleur pourpre »', interpretation: 'Registre pathétique : l\'objet frivole condense une humiliation sociale future ; le détail sensoriel prépare l\'aveu et suscite la pitié.', keywords: ['registre', 'pathétique', 'ruban', 'humiliation', 'aveu'] },
      { procede: 'Anaphore', citation: '« je ne… je ne »', interpretation: 'L\'anaphore sur « je ne » martèle la naïveté du moi enfantin et structure le récit de la faute inaugurale des Confessions.', keywords: ['anaphore', 'je', 'enfant', 'faute', 'aveu'] },
    ],
  },
  'GT-587': {
    file: 'data-gtextes-extra18.js',
    titre: 'Rencontre avec Mme de Warens',
    texte: `J'étais près de seize ans, et je ne connaissais pas encore une créature de mon sexe ni même ce que c'était qu'une femme. J'eus enfin le bonheur de rencontrer mademoiselle de Warens. La tour d'Aïre, où elle demeurait, m'abordait sans effroi.`,
    contexte: 'Autobiographie — éveil affectif, mémoire sensorielle et conversion.',
    attendus: [
      { procede: 'Hyperbole', citation: '« le bonheur de rencontrer »', interpretation: 'Hyperbole : Rousseau magnifie la rencontre en événement existentiel ; le lexique du bonheur annonce la place centrale de Mme de Warens dans le récit.', keywords: ['hyperbole', 'bonheur', 'rencontre', 'conversion'] },
      { procede: 'Antithèse', citation: '« ne connaissais pas… rencontrer »', interpretation: 'Antithèse entre ignorance et révélation : le avant/après structure la biographie comme passage initiatique.', keywords: ['antithèse', 'ignorance', 'révélation', 'initiation'] },
      { procede: 'Registre lyrique', citation: "« m'abordait sans effroi »", interpretation: 'Registre lyrique : le lieu prend une charge émotionnelle ; la mémoire sensorielle traduit l\'émotion naissante du je autobiographe.', keywords: ['registre', 'lyrique', 'lieu', 'émotion', 'mémoire'] },
    ],
  },
  'GT-595': {
    file: 'data-gtextes-extra19.js',
    titre: "Ouverture du pamphlet — J'accuse",
    texte: `J'accuse ! J'accuse le lieutenant-colonel Picquart d'avoir suborné son enquête et acquis la singulière notion d'un crime quand il convient de célébrer une innocence.`,
    contexte: "Pamphlet d'engagement — anaphore accusatoire et courage civique (affaire Dreyfus).",
    attendus: [
      { procede: 'Anaphore', citation: "« J'accuse ! J'accuse »", interpretation: 'Anaphore : la reprise martèle l\'accusation publique et transforme le pamphlet en acte d\'engagement civique.', keywords: ['anaphore', 'accuse', 'engagement', 'dreyfus'] },
      { procede: 'Antithèse', citation: '« crime… innocence »', interpretation: 'Antithèse crime/innocence : Zola oppose deux visions de la justice et expose la perversion de l\'institution.', keywords: ['antithèse', 'crime', 'innocence', 'justice'] },
      { procede: 'Registre polémique', citation: '« suborné son enquête »', interpretation: 'Registre polémique : le vocabulaire de la dénonciation arme l\'argumentation d\'une violence rhétorique visant les responsables.', keywords: ['registre', 'polémique', 'dénonciation', 'enquête'] },
    ],
  },
  'GT-644': {
    file: 'data-gtextes-extra20.js',
    titre: "Portrait de l'homme — aveu",
    texte: `Voici le seul portrait d'homme, peint exactement d'après la nature et dans toute sa vérité, qui existe peut-être. Je sens mon cœur, et je connais les hommes ; je ne suis fait comme aucun de ceux que j'ai vus ; j'ose croire n'être comme aucun de ceux qui existent.`,
    contexte: 'Autobiographie — singularité du moi et prétention à la sincérité absolue.',
    attendus: [
      { procede: 'Hyperbole', citation: '« seul portrait… dans toute sa vérité »', interpretation: 'Hyperbole : Rousseau présente son autobiographie comme modèle unique de transparence, renforçant l\'enjeu du manifeste.', keywords: ['hyperbole', 'vérité', 'portrait', 'unique'] },
      { procede: 'Anaphore', citation: "« je ne suis… j'ose croire »", interpretation: 'Anaphore sur « je » : le moi écrivant affirme sa différence et structure le discours autobiographique.', keywords: ['anaphore', 'je', 'différence', 'moi'] },
      { procede: 'Registre lyrique', citation: '« Je sens mon cœur »', interpretation: 'Registre lyrique : l\'introspection cardiaque exprime une subjectivité intime au service de la connaissance des hommes.', keywords: ['registre', 'lyrique', 'cœur', 'subjectivité'] },
    ],
  },
  'GT-657': {
    file: 'data-gtextes-extra20.js',
    titre: 'Les experts condamnés',
    texte: `J'accuse les trois experts en écritures du procès-verbal d'avoir fait rapport mensongère et scélératesse, à moins qu'une maladie de corps et d'esprit ne les ait mis hors d'état d'exercer leur profession.`,
    contexte: "Pamphlet — dénonciation des fausses preuves (affaire Dreyfus).",
    attendus: [
      { procede: 'Énumération', citation: '« les trois experts »', interpretation: 'Énumération implicite : Zola cible plusieurs responsables de la forgerie judiciaire et multiplie les coupables.', keywords: ['énumération', 'experts', 'responsables', 'forgerie'] },
      { procede: 'Ironie', citation: "« maladie de corps et d'esprit »", interpretation: 'Ironie : la formule polie masque une accusation brutale et dénonce l\'incompétence ou la mauvaise foi des experts.', keywords: ['ironie', 'maladie', 'experts', 'mensonge'] },
      { procede: 'Registre polémique', citation: '« rapport mensongère et scélératesse »', interpretation: 'Registre polémique : le lexique judiciaire violent transforme le pamphlet en combat pour la vérité.', keywords: ['registre', 'polémique', 'mensonge', 'scélératesse'] },
    ],
  },
  'GT-715': {
    file: 'data-gtextes-extra21.js',
    titre: 'Enfance à Genève',
    texte: `Je suis né à Genève, au milieu d'une famille de citoyens, à qui l'État dut la plus considérable des magistratures de cette petite république. Myconius dit de mon aïeul qu'il fut petit avec les grands, grand avec les petits.`,
    contexte: 'Autobiographie — origines sociales et modestie civique.',
    attendus: [
      { procede: 'Antithèse', citation: '« petit avec les grands, grand avec les petits »', interpretation: 'Antithèse : la formule de Myconius condense une éthique civique que Rousseau revendique comme héritage familial.', keywords: ['antithèse', 'modestie', 'civique', 'aïeul'] },
      { procede: 'Champ lexical', citation: '« citoyens », « magistratures », « république »', interpretation: 'Champ lexical politique : Rousseau ancre son identité dans une république de citoyens, préfigurant sa pensée sociale.', keywords: ['champ', 'lexical', 'citoyen', 'république'] },
      { procede: 'Registre épique', citation: '« la plus considérable des magistratures »', interpretation: 'Registre épique : l\'éloge des origines élève la famille au rang d\'exemple moral sans orgueil ostentatoire.', keywords: ['registre', 'épique', 'origines', 'honneur'] },
    ],
  },
  'GT-721': {
    file: 'data-gtextes-extra21.js',
    titre: 'Incipit — mémoire collective',
    texte: `Toutes les images vont disparaître. Ces images où nous sommes devenus grandeurs ou simples adjuvants de l'histoire, victimes ou consentants de la paix civile et de la prospérité.`,
    contexte: 'Autobiographie collective — mémoire socialisée et effacement du vécu individuel.',
    attendus: [
      { procede: 'Anaphore', citation: '« Toutes les images… Ces images »', interpretation: 'Anaphore : la reprise sur « images » installe le rythme incantatoire d\'une mémoire qui s\'efface collectivement.', keywords: ['anaphore', 'images', 'mémoire', 'effacement'] },
      { procede: 'Antithèse', citation: '« victimes ou consentants »', interpretation: 'Antithèse : Ernaux oppose deux postures face à l\'Histoire et refuse une autobiographie narcissique.', keywords: ['antithèse', 'victimes', 'consentants', 'histoire'] },
      { procede: 'Focalisation interne', citation: '« nous sommes devenus »', interpretation: 'Focalisation interne : le « nous » autobiographique fond le je individuel dans une expérience générationnelle partagée.', keywords: ['focalisation', 'nous', 'génération', 'collectif'] },
    ],
  },
  'GT-729': {
    file: 'data-gtextes-extra21.js',
    titre: 'La vérité en marche',
    texte: `Il ne m'est pas possible, dans ma solitude, de faire le plongeon de Dreyfus sur l'île du Diable, là-bas, devant Paris inconnu ; mais ce que je puis faire, c'est crier encore à la France : « La vérité, je la dégagerai ! »`,
    contexte: "Engagement — devoir moral de l'écrivain, appel à la nation (affaire Dreyfus).",
    attendus: [
      { procede: 'Antithèse', citation: "« Il ne m'est pas possible… mais ce que je puis faire »", interpretation: 'Antithèse : Zola oppose impuissance physique et pouvoir de la parole publique pour affirmer son rôle d\'écrivain engagé.', keywords: ['antithèse', 'impuissance', 'parole', 'engagement'] },
      { procede: 'Hyperbole', citation: "« plongeon de Dreyfus sur l'île du Diable »", interpretation: 'Hyperbole : l\'image dramatique du déporté relance l\'émotion pathétique et mobilise le lecteur.', keywords: ['hyperbole', 'dreyfus', 'souffrance', 'émotion'] },
      { procede: 'Registre polémique', citation: '« La vérité, je la dégagerai ! »', interpretation: 'Registre polémique : l\'apostrophe finale transforme le pamphlet en serment moral adressé à la nation.', keywords: ['registre', 'polémique', 'vérité', 'serment'] },
    ],
  },
};

function escInterp(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function fmtAttendus(arr) {
  return arr.map(a =>
    `      { procede: "${a.procede}", citation: "${escInterp(a.citation)}", interpretation: "${escInterp(a.interpretation)}", keywords: [${a.keywords.map(k => `"${k}"`).join(',')}] }`
  ).join(',\n');
}

function patchBlock(src, id, p) {
  const re = new RegExp(
    `\\{\\s*\\n\\s*id:\\s*"${id}"[\\s\\S]*?\\n\\s*\\}(?=\\s*,\\s*\\n\\s*\\{|\\s*\\n\\s*\\];)`,
    'm'
  );
  const orig = src.match(re);
  if (!orig) return { ok: false, reason: 'block not found' };
  const o = orig[0];
  const auteur = (o.match(/auteur:\s*"([^"]+)"/) || [])[1] || '';
  const oeuvre = (o.match(/oeuvre:\s*"([^"]+)"/) || [])[1] || '';
  const genre = (o.match(/genre:\s*"([^"]+)"/) || [])[1] || '';
  const diff = (o.match(/diff:\s*(\d+)/) || [])[1] || '2';
  const fixed = `{
    id: "${id}",
    titre: "${escInterp(p.titre)}",
    auteur: "${auteur}",
    oeuvre: "${oeuvre}",
    genre: "${genre}",
    diff: ${diff},
    texte: \`${p.texte.replace(/\\/g, '\\\\').replace(/`/g, '\\`')}\`,
    contexte: "${escInterp(p.contexte)}",
    attendus: [
${fmtAttendus(p.attendus)}
    ]
  }`;
  return { ok: true, next: src.replace(re, fixed) };
}

const byFile = new Map();
for (const [id, p] of Object.entries(PATCHES)) {
  if (!byFile.has(p.file)) byFile.set(p.file, []);
  byFile.get(p.file).push(id);
}

let patched = 0;
for (const [file, ids] of byFile) {
  const fp = path.join(JS, file);
  let src = fs.readFileSync(fp, 'utf8');
  for (const id of ids) {
    const r = patchBlock(src, id, PATCHES[id]);
    if (!r.ok) {
      console.error(`${id} dans ${file}: ${r.reason}`);
      process.exitCode = 1;
      continue;
    }
    src = r.next;
    patched++;
    console.log('OK', id, '→', PATCHES[id].titre);
  }
  if (!DRY) fs.writeFileSync(fp, src, 'utf8');
  else console.log('[dry]', file, ids.length, 'patch(es)');
}

console.log('Patchés:', patched, '/', Object.keys(PATCHES).length);
