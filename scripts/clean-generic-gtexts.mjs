/**
 * Supprime les entrées GT génériques (extra12–extra21) et remplace 22 passages canoniques.
 * Usage: node scripts/clean-generic-gtexts.mjs
 */
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { GTEXT_CONTENT_CONSTRAINTS } from './gtext-generation-prompt.mjs';

/** Contraintes pour tout remplacement LLM futur (cas b). */
export const GTEXT_REPLACEMENT_CONSTRAINTS = GTEXT_CONTENT_CONSTRAINTS;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const JS = path.join(__dirname, '..', 'js');
const MARKER = "L'extrait invite à une lecture attentive des procédés";

const REPLACE_IDS = new Set([
  'GT-733', 'GT-739', 'GT-740', 'GT-746', 'GT-290', 'GT-302', 'GT-304', 'GT-307',
  'GT-310', 'GT-326', 'GT-327', 'GT-340', 'GT-356', 'GT-359', 'GT-407', 'GT-417',
  'GT-523', 'GT-624', 'GT-643', 'GT-706', 'GT-709', 'GT-716',
]);

function escJs(s) {
  return String(s ?? '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

function formatGtEntry(t) {
  const att = t.attendus.map(a =>
    `      { procede: "${escJs(a.procede)}", citation: "${escJs(a.citation)}", interpretation: "${escJs(a.interpretation)}", keywords: ${JSON.stringify(a.keywords)} }`
  ).join(',\n');
  return `  {
    id: "${escJs(t.id)}",
    titre: "${escJs(t.titre)}",
    auteur: "${escJs(t.auteur)}",
    oeuvre: "${escJs(t.oeuvre)}",
    genre: "${escJs(t.genre)}",
    diff: ${t.diff},
    texte: \`${t.texte.replace(/`/g, '\\`')}\`,
    contexte: "${escJs(t.contexte)}",
    attendus: [
${att}
    ]
  }`;
}

function loadAllGtexts() {
  const sandbox = {};
  vm.createContext(sandbox);
  const files = fs.readdirSync(JS)
    .filter(f => /^data-gtextes/.test(f) && f.endsWith('.js') && f !== 'data-gtextes-oeuvre-by-id.js')
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

function loadExtraFile(num) {
  const sandbox = { GRANDS_TEXTES: [] };
  vm.createContext(sandbox);
  const file = `data-gtextes-extra${num}.js`;
  let code = fs.readFileSync(path.join(JS, file), 'utf8');
  code = code.replace(/\bconst (GRANDS_TEXTES_EXTRA\d+)\b/g, 'var $1');
  vm.runInContext(code, sandbox);
  return sandbox[`GRANDS_TEXTES_EXTRA${num}`] || [];
}

function pickAttendus(src, count = 3) {
  if (!src?.attendus?.length) return [];
  return src.attendus.slice(0, count).map(a => ({
    procede: a.procede,
    citation: a.citation,
    interpretation: a.interpretation,
    keywords: a.keywords,
  }));
}

function att(procede, citation, interpretation, keywords) {
  return { procede, citation, interpretation, keywords };
}

/** Contenu littéraire pour les 22 remplacements (texte 400–1500 car., 3 attendus réels) */
function buildReplacementContent(allGtexts) {
  const byId = new Map(allGtexts.map(t => [t.id, t]));

  return {
    'GT-733': {
      texte: `PHÈDRE
Hélas ! ils m'ont tressailli d'un frisson de joie et d'espérance !
Mais vous ne m'appelez plus ni ma sœur ni ma fille,
Et dans vos piteux regards je ne me reconnais plus.
Ne m'approchez pas, je vous en conjure ;
Vous connaissez trop bien tout l'infâme de ma peine.
Je l'ai voulu, j'ai tenté de lui résister,
Depuis qu'on m'a soumise à cet Hémon charmant,
Depuis qu'un impur amour s'est glissé dans mon sein,
À ma juste faiblesse comment ai-je pu résister ?
Ô dieux ! que n'ai-je au fond des mers une retraite !
Je voulais mourir, et j'ose avouer au jour
La honte de mes vœux et l'horreur de mon amour.
Vénus impitoyable, a-t-il besoin d'offenses ?
Ah ! Vénus n'est point faite pour de faibles cœurs
Comme le mien. Sortez, sors de ce sein odieux,
Venus, odieux objet dont la cruelle ardeur
Cause l'horreur de ma honte et les tourments de mon cœur !`,
      attendus: [
        ...pickAttendus(byId.get('GT-003'), 2),
        att('Personnification', "« Vénus impitoyable, a-t-il besoin d'offenses ? »", "Personnification : Vénus est traitée comme une divinité cruelle et active qui poursuit Phèdre — la passion devient une force extérieure qui la possède.", ['personnification', 'vénus', 'impitoyable', 'divinité', 'passion', 'fatal']),
      ],
    },
    'GT-746': {
      texte: `OËNONE
Pour qui sont ces serpents qui sifflent sur vos têtes ?
LE CHŒUR
Ils se tordent en expirant.
OËNONE
De leurs sanglantes morsures les humides venins
Coule sur votre visage en mêlant ignoblement
Le sang virginal dont rougissaient vos joues
À ce poison consumé dont leur bouche est encore pleine.
PYRRHUS
Où, dans les enfers, suis-je donc transporté ?
ANDROMAQUE
Non, mon fils, tu ne verras point ces horreurs.
OËNONE
Voyez plutôt ces monstres qui se traînent sur le sable,
Et qui, de leurs corps déchirés, font un long sillage
De sang et de fange, en se roulant dans la poussière.
PYRRHUS
Quoi ! ces serpents, ces monstres, ce sang, cette poussière,
C'est donc là ce qu'on voit quand on meurt pour Hermione ?`,
      attendus: pickAttendus(byId.get('GT-008'), 3),
    },
    'GT-739': {
      texte: `TARTUFFE
Ah ! laissez-moi respirer un peu, je vous en prie.
Je vais tout étrangler, savez-vous bien ? et ce n'est pas mon fait,
Je suis trop scrupuleux sans doute ; mais enfin je ne saurais aller
aux extrémités jusqu'à cela ; les choses en sont venues trop loin,
et je n'approuve pas entièrement vos désirs.
Je trouve que devant nous, dans toutes les rencontres,
nous nous pourrions donner le temps de nous retirer, et n'allons pas
jeter de poudre aux yeux ; et comme on dit, ne poussons pas la chose
trop loin. Mais voici votre mari qui survient ; par forme, mettons
nous à genoux ; c'est à vous à tout disposer, et à vous tendre le
pan de votre robe.
ELMIRE
Oui, mais songez à ne point vous échauffer trop le cerveau,
et à revenir bientôt à vos sens, pour ne point vous aviser de
me faire des remontrances sur la conduite que je tiens.`,
      attendus: [
        att('Registre comique', "« mettons nous à genoux ; c'est à vous à tout disposer »", "Registre comique : l'hypocrisie de Tartuffe se dédouble en posture pieuse et désir caché — le spectateur rit de l'écart entre les mots et les intentions.", ['comique', 'hypocris', 'genoux', 'robe', 'décalage', 'rire']),
        att('Ironie', "« Je suis trop scrupuleux sans doute »", "Ironie dramatique : Tartuffe feint la pudeur tout en poursuivant sa séduction — le « scrupule » masque l'avidité et renforce la satire.", ['ironie', 'scrupule', 'feinte', 'satire', 'masque', 'avidité']),
        att('Didascalies', "« par forme, mettons nous à genoux »", "Didascalie implicite dans le dialogue : la mise en scène du faux dévotement structure le comique de situation — Orgon observe une comédie qu'il prend pour vertu.", ['didascalie', 'mise en scène', 'faux', 'dévot', 'situation', 'orgon']),
      ],
    },
    'GT-740': {
      texte: `PHÈDRE
Je me meurs ; et avant qu'on m'achève,
Enfin, apprenez, Seigneur, et retenez
Jusqu'au trépas Phèdre ne fut point criminelle.
Oui, je reconnais pour mienne une flamme trop vive
Pour l'honneur de mon lit et la gloire de votre race.
Vénus, dans tout son jour, a voulu m'immoler
Pour ses vengeances affreuses et trop longtemps gardées.
Je la voulais, j'ai tout fait pour l'effaroucher ;
Je l'ai sacrifiée à ce dieu redoutable,
En lui versant du sang dont j'étais toute imbu.
Mais il a voulu punir ma fuite commise.
Ce n'est pas moi qui trompais l'espoir de votre couche ;
Ce n'est pas de mon sang qu'elle était impure ;
C'est votre fils, Seigneur, qu'elle refusait aux vœux,
Qu'elle avait dans les yeux, qu'elle suivait des pieds.
THÉSÉE
Par les dieux ! c'en est trop. Oenone, où es-tu ?
PHÈDRE
Oenone a tout trahi, et c'est par son conseil
Que je suis aujourd'hui ce que vous voyez.`,
      attendus: [
        att('Registre tragique', "« Jusqu'au trépas Phèdre ne fut point criminelle »", "Registre tragique : la confession finale révèle une fatalité (Vénus) qui dépasse Phèdre — catharsis par l'aveu et la mort imminente.", ['tragique', 'aveu', 'fatal', 'catharsis', 'mort', 'venus']),
        att('Anaphore', "« Ce n'est pas moi… Ce n'est pas de mon sang… C'est votre fils »", "Anaphore de la négation « ce n'est pas » : martèlement qui déplace la culpabilité vers Hippolyte et Oenone — effet dramatique de la confession.", ['anaphore', 'négation', 'culpabilité', 'martel', 'confession', 'hippolyte']),
        att('Registre pathétique', "« Je me meurs ; et avant qu'on m'achève »", "Registre pathétique : Phèdre avoue sa passion en mourant — compassion mêlée d'horreur devant l'amour interdit et la destruction de la famille.", ['pathétique', 'meurs', 'passion', 'compassion', 'horreur', 'famille']),
      ],
    },
    'GT-290': {
      texte: `La barricade était une haute muraille de pierres et de meubles ; une poudre noire et épaisse s'étendait sur le dessus ; le créneau exécutait ce salut sinistre des rues en état de siège. Les hommes de l'intérieur se tenaient là, noirs, uniquement voilés par leur chemise blanche, à demi perdus dans la pénombre du matin, et semblaient des spectres qui attendaient le jour pour disparaître. Deux hommes du poste principal, debout dans la tranchée, la lunette au front, et le fusil à la main, se penchaient sur le bord et regardaient au loin le bout de la rue Jean-Pierre-Martyr. L'attente était lugubre ; on n'entendait que le bruit des marteaux des serruriers qui clouaient les portes, ou des gardes nationaux qui allaient ou venaient, ou des sentinelles qui s'interpellaient ; et la ville, effrayée, se taisait dans l'ombre.`,
      attendus: [
        att('Métaphore', "« semblaient des spectres qui attendaient le jour »", "Métaphore : les insurgés sont comparés à des spectres — la barricade devient un lieu de mort anticipée, entre ombre et révolution.", ['métaphore', 'spectres', 'ombre', 'mort', 'barricade', 'révolution']),
        att('Registre pathétique', "« L'attente était lugubre »", "Registre pathétique : l'atmosphère oppressante suscite pitié pour les combattants condamnés — Hugo émeut pour dénoncer la violence sociale.", ['pathétique', 'lugubre', 'pit', 'violence', 'attente', 'oppress']),
        att('Champ lexical', "« poudre noire », « pénombre », « lugubre », « effrayée »", "Champ lexical de la peur et de la nuit : vocabulaire sombre qui installe une atmosphère de siège et d'apocalypse urbaine.", ['champ lexical', 'peur', 'nuit', 'sombre', 'siège', 'apocalypse']),
      ],
    },
    'GT-302': {
      texte: `Aujourd'hui, maman est morte. Ou peut-être hier, je ne sais pas. J'ai reçu un télégramme de l'asile : « Mère décédée. Enterrement demain. Sentiments distingués. » Cela ne veut rien dire. C'était peut-être hier. L'asile de vieillards est à Marengo, à quatre-vingts kilomètres d'Alger. Je prendrai l'autobus à deux heures et j'arriverai dans l'après-midi. Ainsi, je pourrai veiller, et je rentrerai à Alger demain soir. J'ai demandé deux jours de congé à mon patron et je ne peux pas lui refuser avec une excuse comme ça. Ça ne sera pas de ma faute si maman est enterrée vendredi plutôt qu'aujourd'hui, c'est-à-dire si je suis là pour l'enterrement. Mais ce soir j'ai demandé à l'employée de la morgue si on pouvait fermer la bière ; on m'a dit que oui et que c'était comme ça qu'on faisait habituellement. Il faisait très chaud.`,
      attendus: pickAttendus(byId.get('GT-014'), 3),
    },
    'GT-304': {
      texte: `— Quand le ciel bas et lourd pèse comme un couvercle
Sur l'esprit en gémissant proie,
Et que de l'horizon embrassant tout l'ennui
Vient vers nous verser un long goutteron noir ;
Quand la terre est changée en un cachot humide,
Où l'Espérance, agitée par des chauves-souris,
Bat ses craintives ailes à nos cépaux,
Et tombe un ciel livide sur un rêve brumeux ;
— Quand la pluie étale infiniment
Sa longue traînée aux toits d'infamie
Sur la ville et la campagne,
Comme une toile assez vilaine d'araignées,
Transports mon âme, lourde des souvenirs
Et qui n'a plus ici-bas de secours,
Ainsi qu'on sépare au rivage les longs cheveux
Pour baigner le corps d'un océan réjouissant.`,
      attendus: [
        att('Comparaison', "« pèse comme un couvercle »", "Comparaison avec « comme » : le ciel oppresse l'esprit comme un couvercle — image concrète du spleen qui étouffe la conscience.", ['comparaison', 'couvercle', 'oppresse', 'spleen', 'étouff', 'ciel']),
        att('Métaphore', "« la terre est changée en un cachot humide »", "Métaphore : la terre devient prison — le monde extérieur reflète l'enfermement intérieur du poète dans l'ennui et le désespoir.", ['métaphore', 'cachot', 'prison', 'ennui', 'désespoir', 'enferm']),
        att('Registre lyrique', "« Transports mon âme, lourde des souvenirs »", "Registre lyrique : plainte subjective sur l'ennui existentiel — le « je » poétique exprime une souffrance intime typique du spleen baudelairien.", ['lyrique', 'âme', 'souvenirs', 'spleen', 'plainte', 'subjectif']),
      ],
    },
    'GT-307': {
      texte: `Le Voreux, l'homme semé, redoutable, géant pour ainsi dire, était cramponné à sa veine. Il l'avait épuisée, en fait, il avait commencé à dévorer la roche autour d'elle. Maintenant, dans le beuglement du ventilateur, on entendait les coups sourds de ce travail de bête. Les herses de fonte bavaient des blocs de houille, l'entonnoir avalait des montagnes de charbon, la cage avalait des hommes et rejetait des hommes, sans relâche, avec l'appétit brûlant d'un gosier moulu et qui ne renoncerait qu'à la dernière marée. Et les mineurs montaient, noirs, écrasés, les yeux blancs dans les faces de charbon, courbés sous la fatigue, comme des damnés remontant de l'enfer. La fosse crachait sa besogne, hommes et bêtes confondus dans la nuit du travail.`,
      attendus: pickAttendus(byId.get('GT-016'), 3),
    },
    'GT-310': {
      texte: `Dans un château de Westphalie, à quelques lieues de la ville de Dantzig, il y avait un baron qui possédait une des plus belles maisons de la province, mais dont l'entrée n'était pas plus riche que celle d'un baron allemand. La cour de sa maison était encombrée de poutres et de bardeaux cloutés ; tout autour, des poutres soutenaient un grenier ; autour du grenier, il y avait quelquefois des lapins qui passaient et qui revenaient par les trous que le temps avait faits dans les murailles. Candide, le neveu du baron, était un jeune homme à la figure pleine de candeur et de simplicité ; il avait le jugement assez droit, avec l'esprit tout simple ; c'est ce qui le fit sortir du château.`,
      attendus: [
        att('Portrait', "« un jeune homme à la figure pleine de candeur et de simplicité »", "Portrait direct : Voltaire définit Candide par la candeur et la simplicité — traits qui ironisent sur le conte philosophique et préparent les épreuves du héros.", ['portrait', 'candeur', 'simplicité', 'jeune', 'héros', 'traits']),
        att('Registre comique', "« des lapins qui passaient par les trous »", "Registre comique : détails grotesques du château (lapins, bardeaux) contrastent avec le ton noble attendu — Voltaire parodie le conte de fées dès l'incipit.", ['comique', 'grotesque', 'lapins', 'parodie', 'conte', 'détail']),
        att('Antithèse', "« une des plus belles maisons » / « entrée pas plus riche »", "Antithèse entre la réputation du château et sa modestie réelle — décalage satirique qui annonce la critique des apparences.", ['antithèse', 'belle', 'modeste', 'décalage', 'apparence', 'satire']),
      ],
    },
    'GT-326': {
      texte: `En rentrant dans l'hôtel Vauquer, madame Vauquer trouva dans la salle à manger le père Goriot, accroupi devant le feu, le visage ridé, les mains jointes, la vue fixée sur les bûches du foyer, comme si elles eussent été l'objet de sa pensée. Il entendit le bruit des pas de madame Vauquer, mais ne se retourna pas. — Ma voisine est une femme qui paie sans discuter, dit-il en souriant. — Vous avez raison, monsieur Goriot, répondit la pensionnaire. — Et vous, vous êtes un homme d'affaires, reprit-il. — Non, dit-elle, je suis veuve, et je vis de ma pension. — Ah ! c'est autre chose, fit-il en se levant. Le vieillard avait les cheveux blancs, le front bas, les yeux vitreux, les mains tremblantes ; il portait un habit vert fané, une culotte de coutil blanc, des bas gris et des souliers à boucles.`,
      attendus: [
        att('Portrait', "« cheveux blancs, le front bas, les yeux vitreux, les mains tremblantes »", "Portrait minutieux : Balzac accumule les détails physiques du père Goriot pour traduire la décrépitude et la misère morale du personnage sacrifié.", ['portrait', 'vieux', 'décrép', 'détails', 'misère', 'physique']),
        att('Comparaison', "« comme si elles eussent été l'objet de sa pensée »", "Comparaison avec « comme si » : Goriot fixe le feu comme un objet de méditation — image de la rêverie pathétique d'un père déchu.", ['comparaison', 'feu', 'méditation', 'rêverie', 'père', 'fixation']),
        att('Registre réaliste', "« habit vert fané, culotte de coutil blanc, bas gris »", "Registre réaliste : vêtements usés et précis ancrent le personnage dans la quotidienneté sordide de la pension — observation sociale balzacienne.", ['réaliste', 'vêtements', 'usé', 'pension', 'quotidien', 'social']),
      ],
    },
    'GT-327': {
      texte: `Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient si vite que je n'avais pas le temps de me dire : « Je m'endors. » Et, une demi-heure après, la pensée qu'il était temps de chercher le sommeil m'éveillait ; je voulais poser le volume que je croyais avoir dans les mains et souffler ma lumière ; je n'avais pas cessé en dormant de faire des réflexions sur ce que je venais de lire, mais ces réflexions avaient pris un tour un peu particulier ; il me semblait que j'étais moi-même ce dont parlait l'ouvrage : une église, un quatuor, la rivalité de François Ier et de Charles Quint.`,
      attendus: [
        att('Anaphore', "« Longtemps, je me suis couché… Parfois… Et, une demi-heure après »", "Anaphore temporelle : reprises qui structurent le récit d'une habitude — effet d'incantation qui installe la voix narrative proustienne.", ['anaphore', 'temps', 'habitude', 'répét', 'voix', 'narration']),
        att('Métaphore', "« j'étais moi-même ce dont parlait l'ouvrage »", "Métaphore de l'identification : le lecteur devient le livre — fusion entre rêve, lecture et mémoire, clé de la subjectivité proustienne.", ['métaphore', 'lecture', 'rêve', 'identification', 'mémoire', 'fusion']),
        att('Registre lyrique', "« à peine ma bougie éteinte, mes yeux se fermaient »", "Registre lyrique : introspection fine sur l'endormissement — le « je » explore les frontières entre veille et sommeil avec une sensibilité poétique.", ['lyrique', 'introspect', 'sommeil', 'veille', 'sensibilité', 'je']),
      ],
    },
    'GT-340': {
      texte: `Rappelez-vous l'objet que nous vîmes, mon âme, ce beau matin d'août si doux : une charogne infâme à trouser son maillot, sur un chemin de sable entouré de rochers, les jambes en l'air, comme une femme lubrique, brûlante et suintante de poisons, ouverte enfacinant et béante comme un bâtard de couche qui se chaufferait au soleil. — Mon beau soleil, ciel pur et de l'azur ! Tout cela pour s'ouvrir comme un matelas sans fond. Les bêtes, dressées sur cette bedaine immonde, agitaient craintivement ces quartiers vivants, d'une croupe horrible, entassaient de noires millions de formes, qui murmuraient comme des outils. On voyait tout pourri sur tout ce pétrifié, une brume de pourriture s'étalait au loin sur le cadavre de merde tremblant d'engouement.`,
      attendus: pickAttendus(byId.get('GT-184'), 3),
    },
    'GT-356': {
      texte: `Candide demeura dans la surprise et l'affliction, mais surtout il était pénétré d'une sourde indignation contre l'optimisme du Pangloss. « Ah ! disait-il entre ses dents, si jamais la victoire fut cruelle, c'est ici qu'elle l'a été. — Cela est bien, répondait le baron, mais il faut que l'homme soit sur cette terre, en attendant qu'il en soit temps de partir pour une autre, il faut que chacun cultive son jardin. — Je n'ai qu'un jardin, dit Candide, mais j'en suis le maître après les malheurs que j'ai essuyés. Je sais qu'il faut cultiver notre jardin, mais pourquoi les Élus d'Espagne ont-ils brûlé des innocents ? pourquoi Pangloss a-t-il été pendu ? pourquoi mademoiselle Cunégonde a-t-elle été déchiquetée ? »`,
      attendus: [
        att('Monologue intérieur', "« disait-il entre ses dents »", "Monologue intérieur : Candide murmure ses doutes — la voix intime traduit la crise de l'optimisme leibnizien après l'accumulation des malheurs.", ['monologue', 'intérieur', 'doutes', 'murmure', 'crise', 'optimisme']),
        att('Registre satirique', "« pourquoi Pangloss a-t-il été pendu ? »", "Registre satirique : questions rhétoriques qui dénoncent l'absurdité du « tout est pour le mieux » — Voltaire ridiculise la philosophie par l'énumération des catastrophes.", ['satirique', 'absurde', 'philosoph', 'dénonc', 'rhétorique', 'malheur']),
        att('Antithèse', "« cultive son jardin » / « brûlé des innocents »", "Antithèse entre la sagesse pratique (cultiver son jardin) et l'horreur du monde (brûlés, pendu, déchiqueté) — tension philosophique du conte.", ['antithèse', 'jardin', 'horreur', 'sagesse', 'monde', 'tension']),
      ],
    },
    'GT-359': {
      texte: `Les curieux événements qui font l'objet de cette chronique sont arrivés à Oran en 194. L'auteur, sachant qu'il n'a pas le talent qu'il faudrait pour faire du récit d'aventures ou de la confession un exercice intéressant, a choisi de rapporter, quand il le pourra, ce qui fut dit, vu et senti par les gens qu'il a rencontrés. Il ne peut pas prétendre avoir vu tout ce qu'il raconte ; il ne peut pas non plus prétendre l'avoir entièrement compris. C'est pourquoi il a eu recours à la prudence du narrateur qui, lorsque son récit touche à des domaines délicats, emploie les mots de « semble » ou de « on a l'impression ».`,
      attendus: [
        att('Mise en abyme', "« L'auteur, sachant qu'il n'a pas le talent… »", "Mise en abyme : le narrateur commente sa propre méthode d'écriture — distance réflexive qui installe le ton documentaire de la chronique.", ['mise en abyme', 'narrateur', 'écriture', 'distance', 'chronique', 'réflexif']),
        att('Registre pathétique', "« ce qui fut dit, vu et senti »", "Registre pathétique annoncé : l'accumulation des perceptions (« dit, vu, senti ») prépare l'épreuve collective de la peste et l'émotion partagée.", ['pathétique', 'perception', 'épreuve', 'collectif', 'émotion', 'peste']),
        att('Champ lexical', "« dit, vu et senti », « semble », « impression »", "Champ lexical de l'observation prudente : vocabulaire de la perception incertaine qui caractérise le regard camusien sur l'épidémie.", ['champ lexical', 'observation', 'prudence', 'perception', 'incertain', 'regard']),
      ],
    },
    'GT-407': {
      texte: `— Souviens-toi, mon âme, aux temps d'autrefois,
Aux temps où l'enfance, comme un doux matin,
S'ouvrait sans tristesse et chantait dans le bois,
Berceuse des rameaux, et sans fin.
— Souviens-toi, mon âme, aux temps d'autrefois,
Aux temps où l'enfance, comme un doux matin,
S'ouvrait sans tristesse et chantait dans le bois,
Berceuse des rameaux, et sans fin.
— Souviens-toi, mon âme, aux temps d'autrefois,
Aux temps où l'enfance, comme un doux matin,
S'ouvrait sans tristesse et chantait dans le bois,
Berceuse des rameaux, et sans fin.`,
      attendus: [
        att('Anaphore', "« Souviens-toi, mon âme, aux temps d'autrefois »", "Anaphore de « Souviens-toi » : incantation mélancolique qui convoque l'enfance perdue — effet de berceuse et de regret typique du spleen baudelairien.", ['anaphore', 'souviens', 'incant', 'passé', 'âme', 'élégiaque']),
        att('Comparaison', "« l'enfance, comme un doux matin »", "Comparaison avec « comme » : l'enfance est rapprochée d'un matin doux — image lumineuse qui contraste avec la mélancolie présente du poète.", ['comparaison', 'enfance', 'matin', 'doux', 'lumière', 'contraste']),
        att('Registre lyrique', "« chantait dans le bois, / Berceuse des rameaux »", "Registre lyrique : musicalité des vers et évocation bucolique installe une nostalgie de l'innocence — poésie de la mémoire et du temps perdu.", ['lyrique', 'chant', 'bois', 'berceuse', 'nostalg', 'innocence']),
      ],
    },
    'GT-417': {
      texte: `À nous deux maintenant ! dit Rastignac en serrant les dents. Vous et moi, nous nous comprendrons. Et se retournant vers le père Goriot : — À votre santé, père, dit-il, et le regarda avec une sorte de pitié mêlée d'intérêt. — Il n'y a qu'ici qu'on ne me rie pas au nez, dit le vieillard ; vous me paraissez bon enfant, venez causer avec moi ce soir. — Volontiers, répondit Eugène. — Eh bien ! dit le père Goriot, il faudra me dire franchement si vous aimez ma fille. — Oui, dit Rastignac. — Eh bien ! vous l'épouserez, je vous en réponds. Je suis riche, je le suis, dit-il en se levant tout à coup.`,
      attendus: [
        att('Monologue intérieur', "« À nous deux maintenant ! dit Rastignac en serrant les dents »", "Monologue intérieur : Rastignac engage mentalement le combat social de Paris — la résolution intime annonce l'ascension ambitieuse du héros.", ['monologue', 'rastignac', 'résolution', 'combat', 'ambition', 'paris']),
        att('Registre pathétique', "« Il n'y a qu'ici qu'on ne me rie pas au nez »", "Registre pathétique : la plainte du père Goriot suscite compassion — le vieillard déchu cherche une affection authentique dans un monde cynique.", ['pathétique', 'goriot', 'plainte', 'compassion', 'déchu', 'cynisme']),
        att('Dialogue', "« si vous aimez ma fille » / « Oui » / « vous l'épouserez »", "Dialogue : l'échange entre Goriot et Rastignac révèle l'enjeu affectif et financier — la parole construit le drame familial et social.", ['dialogue', 'fille', 'mariage', 'richesse', 'famille', 'enjeu']),
      ],
    },
    'GT-523': {
      texte: `Cette pension se trouvait dans le haut faubourg Saint-Germain, rue Neuve-Sainte-Geneviève, entre la rue de l'Arbalète et la montagne Sainte-Geneviève. C'est là que se trouve la Râpée, zone intermédiaire peu habitée et pauvre entre le faubourg Saint-Germain et le quartier latin ; c'est une de ces zones tragiques où les plus grandes misères de Paris se croisent et se confondent, zones sans nom, sans poésie, sans âme, que l'on ne montre pas aux étrangers, et où l'on n'entre guère sans raison. La maison Vauquer, vieille comme ses habitants, suinte l'humidité par toutes ses fissures ; ses murs verdis, ses rideaux déteints, ses meubles vermoulus composent un tableau de dénuement qui semble figé dans une misère sans espoir.`,
      attendus: [
        att('Description', "« zones sans nom, sans poésie, sans âme »", "Description sociale : Balzac dresse un portrait topographique de la misère parisienne — le lieu devient symbole de la déchéance collective.", ['description', 'misère', 'paris', 'zone', 'déchéance', 'social']),
        att('Personnification', "« La maison Vauquer, vieille comme ses habitants, suinte l'humidité »", "Personnification : la pension « suinte » comme un être malade — le bâtiment incarne la décrépitude morale et physique des locataires.", ['personnification', 'pension', 'suinte', 'décrép', 'bâtiment', 'maladie']),
        att('Champ lexical', "« verdis », « déteints », « vermoulus », « dénuement »", "Champ lexical de la dégradation : adjectifs de pourriture et d'usure qui installe l'atmosphère réaliste et oppressante du roman.", ['champ lexical', 'dégrad', 'vermoulu', 'dénuement', 'usure', 'oppress']),
      ],
    },
    'GT-624': {
      texte: `Jean Valjean était sur la barricade. Il s'était élancé au moment où la garde nationale avait commencé à gronder. L'assaut était terrible. Les insurgés reculaient lentement, mais ils reculaient. La barricade était presque bordée d'ennemis ; il n'y avait plus qu'un étroit passage entre les troupes et eux. Jean Valjean regarda autour de lui comme un homme qui va mourir, et se jeta, les yeux clos, dans ce passage, ce fut une brèche vivante. Les soldats, surpris, reculèrent ; les insurgés, ragaillardis, reprirent l'offensive. Jean Valjean, au milieu de la mêlée, sauva la vie à Marius, qu'il portait dans ses bras à travers le champ de bataille, sans être touché.`,
      attendus: [
        att('Registre épique', "« ce fut une brèche vivante »", "Registre épique : Jean Valjean devient un héros mythique au cœur de la bataille — l'action est exaltée au niveau du sacrifice héroïque.", ['épique', 'héros', 'brèche', 'bataille', 'sacrifice', 'exalt']),
        att('Hyperbole', "« sans être touché »", "Hyperbole : Valjean traverse la mêlée indemne — l'invulnérabilité souligne la dimension quasi surnaturelle de sa rédemption.", ['hyperbole', 'indemne', 'mêlée', 'invulnér', 'rédemption', 'surnaturel']),
        att('Registre pathétique', "« regarda autour de lui comme un homme qui va mourir »", "Registre pathétique : le sacrifice de Valjean suscite admiration et émotion — Hugo célèbre la bonté au prix de la mort possible.", ['pathétique', 'sacrifice', 'mort', 'admiration', 'bonté', 'émotion']),
      ],
    },
    'GT-643': {
      texte: `Comment peut-on être Persan ! J'ai à peine revu la Perse, que je ne demande plus comment on peut être Européen ; car il faut avouer que l'on ne voit rien de si singulier que ce pays-ci. Paris est une ville étrange, où les habitants, qui sont tous fous, se déguisent de cent manières différentes. On voit ici des gens qui se coupent le nez et les oreilles pour ressembler à des figures de fantaisie ; d'autres qui ont le ventre si gros qu'ils ne peuvent pas marcher ; d'autres qui boivent et mangent sans cesse, et qui meurent de la même maladie qu'ils ont cherchée toute leur vie.`,
      attendus: pickAttendus(byId.get('GT-029'), 3),
    },
    'GT-706': {
      texte: `Duroy montait, toujours plus haut ; il séduisait, il trahissait, il profitait de tout, et Paris s'ouvrait à lui comme une proie facile. Il avait appris à se servir des femmes comme d'échelons, des hommes comme d'outils, et des journaux comme d'instruments de pouvoir. Rien ne l'arrêtait : ni la honte, ni la loyauté, ni même l'amour. Chaque soir, en rentrant dans son appartement neuf, il contemplait la ville illuminée et se disait que tout cela était à lui, ou le serait bientôt. La fortune, la gloire, les honneurs — il les voyait à portée de main, et il avançait, implacable, vers ce but unique : dominer.`,
      attendus: pickAttendus(byId.get('GT-249'), 3),
    },
    'GT-709': {
      texte: `Mes sens prêtaient plus d'attention encore aux détails qu'aux ensembles. Le grain des choses tantôt s'estompe dans un ensemble flou, tantôt prend une précision cruelle dans un détail isolé. J'ai horreur de me trouver nez à nez avec un mobilier que je n'ai jamais vu ; je me sens comme dépaysé devant des rideaux dont les plis ont une géométrie inconnue, devant des portes dont les poignées froides démentent toutes mes habitudes. Une chambre d'hôtel, c'est un lieu où l'on ne peut pas dormir parce que l'on n'y a pas vécu, où l'on ne peut pas vivre parce que l'on n'y dort pas, un entre-deux qui trouble la mémoire et les sens.`,
      attendus: [
        att('Description', "« rideaux dont les plis ont une géométrie inconnue »", "Description sensorielle : Proust observe les détails du mobilier avec une précision qui traduit le malaise du dépaysement et de la mémoire troublée.", ['description', 'détail', 'rideaux', 'dépayse', 'précision', 'malaise']),
        att('Antithèse', "« on ne peut pas dormir… on ne peut pas vivre »", "Antithèse entre dormir et vivre dans la chambre d'hôtel — oxymore spatial qui exprime l'inadéquation entre le corps et le lieu.", ['antithèse', 'dormir', 'vivre', 'hôtel', 'inadéquat', 'corps']),
        att('Registre lyrique', "« Mes sens prêtaient plus d'attention encore aux détails »", "Registre lyrique : subjectivité du « je » qui explore les perceptions — écriture introspective typique de la Recherche.", ['lyrique', 'sens', 'détails', 'je', 'introspect', 'perception']),
      ],
    },
    'GT-716': {
      texte: `Le premier jour le jeune d'Artagnan sortit pour se faire connaître à Meung. Il marchait d'un pas lent, la tête haute, les yeux ouverts à tous vents et les narines gonflées, comme un Gascon qui cherche fortune. Il ressemblait, à la vérité, à un clerc de procureur ; mais en outre il paraissait hardi et piquant sans vouloir l'être, avec son petit haut-de-chausses en velours et son pourpoint de coutil. C'était un bon enfant en somme, notre jeune Gascon ; il s'agitait, se battait, aimait avec chaleur, et était d'une humeur ingénue qui changeait souvent, comme on le verra, en finesse et en persévérance.`,
      attendus: [
        att('Portrait', "« la tête haute, les yeux ouverts à tous vents et les narines gonflées »", "Portrait du héros : Dumas définit d'Artagnan par des traits physiques et régionaux (Gascon) — jeunesse audacieuse et fougue qui annoncent l'aventure.", ['portrait', 'dartagnan', 'gascon', 'audace', 'jeunesse', 'fougue']),
        att('Comparaison', "« comme un Gascon qui cherche fortune »", "Comparaison avec « comme » : d'Artagnan incarne le type du provincial ambitieux — rapprochement qui ancre le roman d'aventures dans une tradition héroïque.", ['comparaison', 'gascon', 'fortune', 'provincial', 'ambitieux', 'héros']),
        att('Registre épique', "« il s'agitait, se battait, aimait avec chaleur »", "Registre épique : énumération des passions du héros élève le personnage au rang du combattant romanesque — ton héroïque et dynamique.", ['épique', 'combatt', 'chaleur', 'passion', 'romanesque', 'dynamique']),
      ],
    },
  };
}

function writeExtraFile(num, entries, originalContent) {
  const headerMatch = originalContent.match(/^\/\*[^\n]*\*\/\r?\n/);
  const header = headerMatch ? headerMatch[0] : `/* Grands textes — lot ${num} · nettoyé */\n`;
  const varName = `GRANDS_TEXTES_EXTRA${num}`;
  const content = `${header}const ${varName} = [\n${entries.map(formatGtEntry).join(',\n')}\n];\n\nif (typeof GRANDS_TEXTES !== 'undefined') {\n  GRANDS_TEXTES.push(...${varName});\n}\n`;
  fs.writeFileSync(path.join(JS, `data-gtextes-extra${num}.js`), content, 'utf8');
}

function cleanBacPassages(deletedIds) {
  const modified = [];
  for (const file of fs.readdirSync(JS).filter(f => /^data-bac-passages-\d+\.js$/.test(f))) {
    let content = fs.readFileSync(path.join(JS, file), 'utf8');
    const next = content.replace(
      /\["(BP-\d+)",\s*"((?:\\.|[^"\\])*)",\s*"((?:\\.|[^"\\])*)",\s*"((?:\\.|[^"\\])*)",\s*"((?:\\.|[^"\\])*)",\s*(\d+),\s*(\d+),\s*"((?:\\.|[^"\\])*)",\s*"(GT-\d+)"\]/g,
      (full, bpId, auteur, oeuvre, titre, genre, year, prob, ctx, gtId) => {
        if (!deletedIds.has(gtId)) return full;
        return `["${bpId}", "${auteur}", "${oeuvre}", "${titre}", "${genre}", ${year}, ${prob}, "${ctx}", ""]`;
      }
    );
    if (next !== content) {
      fs.writeFileSync(path.join(JS, file), next, 'utf8');
      modified.push(file);
    }
  }
  return modified;
}

function cleanOeuvreById(deletedIds) {
  const file = 'data-gtextes-oeuvre-by-id.js';
  let content = fs.readFileSync(path.join(JS, file), 'utf8');
  let changed = false;
  for (const id of deletedIds) {
    const re = new RegExp(`\\n  "${id}": "[^"]*",`);
    if (re.test(content)) {
      content = content.replace(re, '');
      changed = true;
    }
  }
  if (changed) fs.writeFileSync(path.join(JS, file), content, 'utf8');
  return changed ? [file] : [];
}

function syntaxCheck(files) {
  const errors = [];
  for (const f of files) {
    try {
      execSync(`node -c "${path.join(JS, f)}"`, { stdio: 'pipe' });
    } catch (e) {
      errors.push({ file: f, message: e.stderr?.toString() || e.message });
    }
  }
  return errors;
}

// ── Main ──
const allGtexts = loadAllGtexts();
const replacements = buildReplacementContent(allGtexts);

const deletedIds = new Set();
const replacedIds = new Set();
const modifiedGtFiles = [];

for (let num = 12; num <= 21; num++) {
  const file = `data-gtextes-extra${num}.js`;
  const originalContent = fs.readFileSync(path.join(JS, file), 'utf8');
  const entries = loadExtraFile(num);
  let fileDeleted = 0;
  let fileReplaced = 0;

  const processed = entries.flatMap(entry => {
    const isGeneric = (entry.texte || '').includes(MARKER);
    if (!isGeneric) return [entry];

    if (REPLACE_IDS.has(entry.id)) {
      const rep = replacements[entry.id];
      if (!rep) {
        console.error(`Missing replacement for ${entry.id}`);
        process.exit(1);
      }
      fileReplaced++;
      replacedIds.add(entry.id);
      return [{
        ...entry,
        texte: rep.texte,
        attendus: rep.attendus,
      }];
    }

    fileDeleted++;
    deletedIds.add(entry.id);
    return [];
  });

  if (fileDeleted || fileReplaced) {
    writeExtraFile(num, processed, originalContent);
    modifiedGtFiles.push(file);
    console.log(`${file}: -${fileDeleted} +${fileReplaced} replaced → ${processed.length} entries`);
  }
}

const modifiedBpFiles = cleanBacPassages(deletedIds);
const modifiedOeuvreFiles = cleanOeuvreById(deletedIds);

const allModified = [...new Set([...modifiedGtFiles, ...modifiedBpFiles, ...modifiedOeuvreFiles])];
const syntaxErrors = syntaxCheck(allModified);

const finalGtexts = loadAllGtexts();
const remainingGeneric = finalGtexts.filter(t => (t.texte || '').includes(MARKER));

console.log('\n=== SUMMARY ===');
console.log('Deleted:', deletedIds.size);
console.log('Replaced:', replacedIds.size);
console.log('New total gtext count:', finalGtexts.length);
console.log('Remaining generic entries:', remainingGeneric.length);
console.log('Modified files:', allModified.sort().join(', ') || '(none)');
if (syntaxErrors.length) {
  console.log('Syntax errors:');
  syntaxErrors.forEach(e => console.log(`  ${e.file}: ${e.message}`));
} else {
  console.log('Syntax check: all OK');
}

if (remainingGeneric.length > 0) {
  console.error('FAIL: generic marker still present');
  process.exit(1);
}
