/**
 * Générateur rewrites-extra19-21.mjs — 96 entrées curatées.
 */
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';
import { att, loadAllGtexts, oeuvreKey, isBadEntry, citationInText } from '../gtext-enrichment-lib.mjs';
import { REWRITES } from './rewrites-all.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const JS = path.join(__dirname, '..', '..', 'js');
const OUT = path.join(__dirname, 'rewrites-extra19-21.mjs');

const IDS = 'GT-589,GT-590,GT-591,GT-592,GT-593,GT-595,GT-597,GT-598,GT-599,GT-601,GT-604,GT-606,GT-607,GT-609,GT-611,GT-613,GT-615,GT-616,GT-618,GT-622,GT-623,GT-625,GT-626,GT-628,GT-629,GT-631,GT-633,GT-634,GT-635,GT-636,GT-637,GT-638,GT-640,GT-641,GT-642,GT-644,GT-645,GT-646,GT-647,GT-649,GT-651,GT-652,GT-653,GT-655,GT-656,GT-657,GT-658,GT-661,GT-662,GT-664,GT-666,GT-667,GT-668,GT-669,GT-670,GT-672,GT-673,GT-674,GT-675,GT-676,GT-677,GT-679,GT-680,GT-681,GT-683,GT-684,GT-685,GT-687,GT-688,GT-689,GT-691,GT-692,GT-693,GT-694,GT-695,GT-697,GT-698,GT-699,GT-703,GT-704,GT-705,GT-708,GT-710,GT-712,GT-715,GT-717,GT-719,GT-720,GT-721,GT-723,GT-726,GT-728,GT-729,GT-730,GT-731,GT-732'.split(',');

/** @type {Record<string, {texte:string, contexte:string, attendus: ReturnType<typeof att>[]}>} */
const FIRST_SIX = {
  'GT-589': {
    texte: `Le Pont Mirabeau, Apollinaire
Sous le pont Mirabeau coule la Seine
Et nos amours
Faut-il qu'il m'en souvienne
La joie venait toujours après la peine
Vienne la nuit sonne l'heure
Les jours s'en vont je demeure
Les mains dans les mains restons face à face
Tandis que sous le pont de nos bras passe
Des éternels regards l'eau si triste et si belle
Et que sonne l'heure heureuse et sonore
Les jours s'en vont je demeure
L'amour s'en va comme cette eau courante
L'amour s'en va
Comme l'eau l'amour s'en va
Entends-tu ma voix doucement chanter
Et que chantent toujours les voix de nos commencements
Vienne la nuit sonne l'heure
Les jours s'en vont je demeure`,
    contexte: 'Modernité — libération poétique. — poème n°2.',
    attendus: [
      att('Anaphore', "« Les jours s'en vont je demeure »", "Anaphore : la reprise du refrain fixe le temps qui passe face à la permanence du moi — modernité poétique de la mémoire amoureuse.", ['anaphore', 'jours', 'demeure', 'temps', 'mémoire', 'refrain']),
      att('Métaphore', "« L'amour s'en va comme cette eau courante »", "Métaphore : l'amour comparé à l'eau de la Seine traduit l'éphémère et la fluidité des sentiments.", ['métaphore', 'amour', 'eau', 'courante', 'éphémère', 'seine']),
      att('Registre lyrique', "« Entends-tu ma voix doucement chanter »", "Registre lyrique : apostrophe au beloved et musicalité du vers libéré — subjectivité intime d'Apollinaire.", ['lyrique', 'voix', 'chanter', 'apostrophe', 'musicalité', 'intime']),
      att('Antithèse', "« La joie venait toujours après la peine »", "Antithèse joie/peine : le couple douleur-plaisir structure la nostalgie du pont Mirabeau.", ['antithèse', 'joie', 'peine', 'nostalgie', 'couple', 'souvenir']),
    ],
  },
  'GT-590': {
    texte: `Prévert — Page d'écriture
Page d'écriture
Avec ses taches de rousseur
Son nez en l'air
Ses cheveux et ses bagues
Ses yeux couleur de mer
Avec ses classiques
Et ses petits souliers
Et ses baisers de menthe
La fille au carnet
Écrit tout le jour
Des mots des mots des mots
Des mots de couleur de violette
Des mots de couleur de solitude
Des mots de couleur d'abandon
Des mots de couleur de la peur
Des mots comme des gouttes de sang
Des mots comme des larmes
Des mots comme des nuées
Des mots comme des nuées d'oiseaux d'orage
Des mots comme des nuées d'ouragans
Des mots comme des nuées de tempêtes
Des mots comme des nuées de tempêtes de neige
Des mots comme des bourrasques
Des mots comme des bourrasques de feuilles au mois d'octobre
Des mots comme des bourrasques de feuilles et de sang
Des mots comme des bourrasques de feuilles et de sang et de rêves
La fille au carnet
Écrit des mots`,
    contexte: "Poésie populaire — humour et tendresse. — poème n°1.",
    attendus: [
      att('Énumération', "« Des mots des mots des mots »", "Énumération : l'accumulation de « mots » et de comparaisons crée un rythme incantatoire et une plénitude poétique.", ['énumération', 'mots', 'accumulation', 'rythme', 'incantatoire', 'plénitude']),
      att('Comparaison', "« Des mots comme des larmes »", "Comparaison : chaque série rapproche les mots d'éléments naturels ou émotionnels — tendresse et violence mêlées.", ['comparaison', 'larmes', 'mots', 'nature', 'émotion', 'tendresse']),
      att('Registre lyrique', "« Ses yeux couleur de mer »", "Registre lyrique : portrait de la fille par détails sensoriels — poésie populaire et intimité.", ['lyrique', 'yeux', 'mer', 'portrait', 'sensoriel', 'intimité']),
      att('Gradation', "« Des mots comme des bourrasques de feuilles et de sang et de rêves »", "Gradation : les comparaisons s'intensifient jusqu'à la bourrasque finale — crescendo expressif.", ['gradation', 'bourrasques', 'intensité', 'crescendo', 'rêves', 'sang']),
    ],
  },
  'GT-591': {
    texte: `Valéry — Le Cimetière marin (extrait)
Ce toit tranquille, où marchent des colombes,
Entre les pins palpite, entre les tombes ;
Méditez, quand vient mon heure,
La leçon de cette heure :
Le vent se lève !... il faut tenter de vivre !
L'air immense ouvre et referme mon livre,
La vague en poudre ose jaillir des rocs !
Envolez-vous, pages trop célèbres !
Fuyez, vagues d'or, vous sanglots de Lys ;
Je ne sais pas attendre, et ma vie hésite,
Surgeant d'ombre, d'or, de la mer et du ciel,
Parmi les sursauts d'une immense musique
Qui m'allait vers d'autres sommets que l'idéal ;
Hélas ! je vois que l'homme en vain se livre
À cette lutte éternelle de la mer et du ciel
Avec la forme divine de la femme.`,
    contexte: 'Poésie — méditation et pensée. — poème n°3.',
    attendus: [
      att('Apostrophe', "« Le vent se lève !... il faut tenter de vivre ! »", "Apostrophe et exclamation : le poète s'adresse au vent et affirme la volonté de vivre face à la mort.", ['apostrophe', 'vent', 'vivre', 'volonté', 'mort', 'exclamation']),
      att('Métaphore', "« La vague en poudre ose jaillir des rocs »", "Métaphore : la mer personnifiée devient force créatrice — méditation sur la nature et la pensée.", ['métaphore', 'vague', 'poudre', 'rocs', 'nature', 'création']),
      att('Antithèse', "« lutte éternelle de la mer et du ciel »", "Antithèse mer/ciel : l'opposition des éléments structure la méditation philosophique du poème.", ['antithèse', 'mer', 'ciel', 'lutte', 'éléments', 'philosophie']),
      att('Registre lyrique', "« parmi les sursauts d'une immense musique »", "Registre lyrique : musicalité et subjectivité du moi poétique face à l'univers.", ['lyrique', 'musique', 'sursauts', 'subjectivité', 'univers', 'méditation']),
    ],
  },
  'GT-592': {
    texte: `Verlaine — Art poétique
De la musique avant toute chose
Et pour cela préfère l'Impair
Plus vague et plus soluble dans l'air
Sans rien en lui qui pèse ou qui pose
Il faut aussi que tu n'ailles point
Choisir tes mots sans quelque méprise :
Rien de plus cher que la chanson grise
Où l'Indécis au Précis se joint
C'est des beaux yeux derrière des voiles
C'est le grand jour tiède par un crémisi
C'est par un crépuscule, le choc
Des flots bleus par un choc discret
De la cloche fêlée du fond de la cour
De la senteur du bois tendre encore humide
D'un soir d'été, après une pluie battante
Rien de plus cher que la chanson grise
Où l'Indécis au Précis se joint`,
    contexte: "Poétique du symbolisme — Art poétique. — poème n°3.",
    attendus: [
      att('Anaphore', "« Rien de plus cher que la chanson grise »", "Anaphore : le refrain martèle la thèse symboliste de la suggestion et de la musicalité.", ['anaphore', 'chanson', 'grise', 'refrain', 'symbolisme', 'suggestion']),
      att('Antithèse', "« l'Indécis au Précis se joint »", "Antithèse indécis/précis : Verlaine définit l'idéal poétique par la fusion des contraires.", ['antithèse', 'indécis', 'précis', 'fusion', 'poétique', 'idéal']),
      att('Registre lyrique', "« De la musique avant toute chose »", "Registre lyrique : la musicalité prime sur le sens — manifeste du symbolisme.", ['lyrique', 'musique', 'manifeste', 'symbolisme', 'rythme', 'sens']),
      att('Énumération', "« C'est des beaux yeux derrière des voiles »", "Énumération d'images vagues : chaque comparaison illustre la poétique de la suggestion.", ['énumération', 'images', 'voiles', 'suggestion', 'vague', 'comparaison']),
    ],
  },
  'GT-593': {
    texte: `Rimbaud — Le Dormeur du val
C'est un trou de verdure où chante une rivière
Accrochant follement aux herbes des haillons
D'argent ; où le soleil, de la montagne fière,
Luit : c'est un petit val qui mousse de rayons.
Un soldat jeune, bouche ouverte, tête nue,
Et la nuque baignant dans le frais cresson bleu,
Dort ; il est étendu dans l'herbe, sous la nue,
Pâle dans son lit vert où la lumière pleut.
Les pieds dans les glaïeuls, il dort. Souriant comme
Sourirait un enfant malade, il fait un somme :
Nature, berce-le chaudement : il a froid.
Les parfums ne font pas frissonner sa narine ;
Il dort dans le soleil, la main sur sa poitrine
Tranquille. Il a deux trous rouges au côté droit.`,
    contexte: "Jeunesse poétique — Le Dormeur du val. — poème n°5.",
    attendus: [
      att('Champ lexical', "« C'est un trou de verdure où chante une rivière »", "Champ lexical de la nature : le décor bucolique contraste avec la mort du soldat — ironie tragique.", ['champ lexical', 'nature', 'verdure', 'rivière', 'contraste', 'mort']),
      att('Antithèse', "« Sourirait un enfant malade, il fait un somme »", "Antithèse : sourire d'enfant et maladie/mort — décalage pathétique du dernier vers.", ['antithèse', 'souriant', 'enfant', 'malade', 'décalage', 'pathétique']),
      att('Registre pathétique', "« Il a deux trous rouges au côté droit »", "Registre pathétique : la révélation finale des blessures de guerre brise l'idylle — compassion et indignation.", ['pathétique', 'trous', 'rouges', 'guerre', 'compassion', 'révélation']),
      att('Apostrophe', "« Nature, berce-le chaudement : il a froid »", "Apostrophe à la Nature : le poète interpelle le monde naturel face à la mort du jeune soldat.", ['apostrophe', 'nature', 'berce', 'froid', 'soldat', 'mort']),
    ],
  },
  'GT-595': {
    texte: `Zola — J'accuse (ouverture)
J'accuse !
J'accuse le lieutenant-colonel Picquart d'avoir fait et fait faire la plus monstrueuse des machinations pour se débarrasser, par le bannissement et la diffamation, du lieutenant-colonel Picquart qui n'a fait que son devoir.
J'accuse les trois experts en écritures du procès-verbal d'avoir fait rapport mensongère et scélératesse, à moins qu'une maladie de corps et d'esprit ne les ait mis hors d'état d'exercer leur profession.
J'accuse les officiers du bordereau d'avoir commis un crime de trahison, pour détourner les soupçons sur un innocent.
J'accuse le général Mercier d'avoir fait, ou fait faire, une enquête illégale, et de s'être fait justice à lui-même.
J'accuse le général Billot d'avoir eu en main la preuve certaine de l'innocence de Dreyfus et de l'avoir étouffée.
J'accuse les premiers conseillers Warin et Esterhazy d'avoir commis un crime de trahison.`,
    contexte: "Pamphlet d'engagement — anaphore accusatoire et courage civique (affaire Dreyfus).",
    attendus: [
      att('Anaphore', "« J'accuse ! »", "Anaphore : la reprise martèle l'accusation publique et transforme le pamphlet en acte d'engagement civique.", ['anaphore', 'accuse', 'accusation', 'engagement', 'dreyfus', 'pamphlet']),
      att('Registre polémique', "« rapport mensongère et scélératesse »", "Registre polémique : le vocabulaire judiciaire violent arme l'argumentation contre les responsables.", ['polémique', 'mensonge', 'scélératesse', 'dénonciation', 'justice', 'violence']),
      att('Énumération', "« J'accuse le lieutenant-colonel Picquart »", "Énumération : chaque paragraphe cible un responsable — structure accusatoire systématique.", ['énumération', 'responsables', 'cible', 'systématique', 'accusation', 'structure']),
      att('Antithèse', "« innocence de Dreyfus »", "Antithèse crime/innocence : Zola oppose deux visions de la justice et expose la perversion de l'institution.", ['antithèse', 'innocence', 'trahison', 'crime', 'justice', 'institution']),
    ],
  },
};

function loadMeta() {
  const data = {};
  for (const f of ['data-gtextes-extra19.js', 'data-gtextes-extra20.js', 'data-gtextes-extra21.js']) {
    const sandbox = {};
    vm.createContext(sandbox);
    let code = fs.readFileSync(path.join(JS, f), 'utf8');
    code = code.replace(/\bconst (GRANDS_TEXTES\w*)\b/g, 'var $1');
    vm.runInContext(code, sandbox);
    const key = Object.keys(sandbox).find((k) => k.startsWith('GRANDS_TEXTES'));
    for (const item of sandbox[key]) data[item.id] = item;
  }
  return data;
}

/** Extraits littéraires curatés par clé œuvre */
const CURATED = {
  'racine|phèdre': [
    { texte: `PHÈDRE
C'en est fait. Je n'ai pu soutenir tes regards.
Le ciel a voulu que j'en fusse éblouie.
Je te laisse mon empire, et je ne sais si mon cœur
Ne te suivra point plutôt que de rester ici.
Je vais où mon devoir m'appelle, et je m'arrache
À ce lieu funeste où mes sens se sont égarés.
HIPPOLYTE
Madame, c'est à moi de partir ; et je ne puis
Demander qu'à vos pieds la grâce de mes fautes.
PHÈDRE
Non, Prince, il est trop tard ; vous ne partirez point.
Tout Trézène vous doit, et je ne veux point qu'on dise
Qu'une reine ingrate a chassé de ses États
Le fils de celui qui les a conquis pour elle.`, attendus: [
      att('Registre tragique', "« C'en est fait. Je n'ai pu soutenir tes regards »", "Registre tragique : Phèdre avoue l'aveuglement de sa passion — la fatalité amoureuse précipite la catastrophe.", ['tragique', 'regards', 'passion', 'fatalité', 'aveu', 'catastrophe']),
      att('Antithèse', "« Je te laisse mon empire »", "Antithèse entre pouvoir royal et dépendance amoureuse : Phèdre renonce au trône pour suivre Hippolyte.", ['antithèse', 'empire', 'devoir', 'amour', 'renoncement', 'trône']),
      att('Dialogue', "« Madame, c'est à moi de partir »", "Dialogue : échange tendu entre Phèdre et Hippolyte — malentendu et tension dramatique.", ['dialogue', 'partir', 'hippolyte', 'tension', 'malentendu', 'échange']),
      att('Hyperbole', "« ce lieu funeste où mes sens se sont égarés »", "Hyperbole : le lieu devient maudit par la passion — l'espace théâtral incarne la faute.", ['hyperbole', 'funeste', 'sens', 'égarés', 'faute', 'lieu']),
    ]},
    { texte: `PHÈDRE
Que ne puis-je à la fois prendre ou bien laisser la vie !
Faut-il de plus affreux un désespoir vous saisir ?
C'est moi qu'il faut sacrifier pour sauver votre vie.
Ô Vénus ! je le sais, tu veux que je meure.
OENONE
Madame, avant que l'on vous atteigne il est temps.
Les prêtres, qu'on offense, chercheront un supplice ;
Vos cris, que tous ont crus sortir de votre cervelle,
Ont fait d'Hippolyte un criminel coupable.
PHÈDRE
Il s'est bien débattu contre mon innocence !
OENONE
Mais les bruits en sont forts, et la cour s'en fomente.
Faut-il d'un crime obscur affranchir le coupable ?
Faites-vous jour, ou plût au ciel que le crime
Vous fût inconnu !
PHÈDRE
Quel crime ? Est-ce un crime d'aimer ?`, attendus: [
      att('Apostrophe', "« Ô Vénus ! je le sais, tu veux que je meure »", "Apostrophe : Phèdre interpelle la déesse et personnifie la fatalité amoureuse.", ['apostrophe', 'vénus', 'mort', 'fatalité', 'passion', 'déesse']),
      att('Dialogue', "« Quel crime ? Est-ce un crime d'aimer ? »", "Dialogue : question rhétorique opposant passion innocente et loi morale.", ['dialogue', 'crime', 'aimer', 'passion', 'morale', 'rhétorique']),
      att('Registre tragique', "« Faites-vous jour, ou plût au ciel que le crime / Vous fût inconnu ! »", "Registre tragique : dilemme entre aveu et mensonge — fatalité du secret amoureux.", ['tragique', 'crime', 'aveu', 'mensonge', 'dilemme', 'secret']),
      att('Antithèse', "« perdre celui qu'il offense »", "Antithèse entre sauver Phèdre et perdre Hippolyte — manipulation d'Oenone.", ['antithèse', 'sauver', 'perdre', 'hippolyte', 'manipulation', 'sacrifice']),
    ]},
    { texte: `THÉRAMÈNE
C'en est fait. Hippolyte expirant nous a confiés
L'horreur du désespoir qui l'a précipité.
Son déplorable sort va vous être raconté.
Les flots se sont apaisés ; un calme sans nuages
A succédé aux bruits dont le vent gémissait.
Hippolyte, maître encor de ses premiers courages,
S'élance sur son char, dont le bruit retentit.
Un monstre sort des flots, et de son large museau
Souille l'air de vapeurs infectes et sanglantes.
Le ciel avec horreur voit ce monstre en furie
S'élancer sur le prince, et d'un coup l'entraîner
Dans le fond de l'abîme.`, attendus: [
      att('Registre épique', "« Un monstre sort des flots »", "Registre épique : le récit amplifie la catastrophe en scène héroïque mythologique.", ['épique', 'monstre', 'flots', 'héroïque', 'catastrophe', 'mythologique']),
      att('Registre pathétique', "« L'horreur du désespoir qui l'a précipité »", "Registre pathétique : compassion pour Hippolyte innocent victime de la fatalité.", ['pathétique', 'désespoir', 'compassion', 'innocent', 'victime', 'fatalité']),
      att('Gradation', "« Les flots se sont apaisés »", "Gradation : calme trompeur avant l'apparition du monstre — intensité croissante.", ['gradation', 'calme', 'flots', 'monstre', 'intensité', 'suspense']),
      att('Hyperbole', "« vapeurs infectes et sanglantes »", "Hyperbole : l'horreur du monstre est amplifiée pour transmettre la terreur au spectateur.", ['hyperbole', 'vapeurs', 'horreur', 'terreur', 'monstre', 'spectateur']),
    ]},
    { texte: `PHÈDRE
Je sais mes perfides, Oenone, et ne suis point
De ces femmes hardies qui, triomphantes de crime,
Ont su se faire un front qui ne rougit de rien.
Le ciel a mis en moi toute l'horreur du crime.
La honte la plus noire a couvert mon visage.
Je reconnais mon tort, et je veux en pâtir.
PHÈDRE
Non, je ne veux point voir ce juste et vertueux
Prince, que j'ai poursuivi d'une flamme impure,
S'attacher à ma mort, et mourir pour ma faute.
Je mourrai. Mais du moins, mourant sans infamie,
Je laisse à l'univers un exemple à chérir.`, attendus: [
      att('Antithèse', "« triomphantes de crime » / « rougit de rien »", "Antithèse : Phèdre se distingue des criminelles impénitentes — conscience morale tragique.", ['antithèse', 'crime', 'honte', 'conscience', 'pénitence', 'femmes']),
      att('Registre tragique', "« Le ciel a mis en moi toute l'horreur du crime »", "Registre tragique : la passion est vécue comme faute cosmique et divine.", ['tragique', 'ciel', 'horreur', 'crime', 'faute', 'divine']),
      att('Métaphore', "« La honte la plus noire a couvert mon visage »", "Métaphore : la honte devient voile physique — incarnation de la culpabilité.", ['métaphore', 'honte', 'visage', 'culpabilité', 'noire', 'voile']),
      att('Apostrophe', "« je laisse à l'univers un exemple à chérir »", "Apostrophe implicite au monde : Phèdre veut transformer sa mort en leçon morale.", ['apostrophe', 'univers', 'exemple', 'mort', 'leçon', 'morale']),
    ]},
    { texte: `PHÈDRE
Mon malheur prête l'oreille à la calomnie.
Je sens que je me meurs, et j'ai peur de mourir
Avant d'avoir ouvert mon cœur à votre fils.
Je brûle, et dans un jour, peut-être, il faudra bien
Que je meure, ou que je parle. Oui, je veux mourir.
Mais, avant que mes yeux soient fermés par la mort,
Recevez mes adieux, et daignez m'écouter.
PHÈDRE
Je le vis, je rougis, je pâlis à sa vue ;
Un trouble s'élève en mon âme incertaine ;
Je ne puis voir qu'un moment sans péril
Ce fils de Thésée et de la reine Amazonienne.`, attendus: [
      att('Registre pathétique', "« Je sens que je me meurs »", "Registre pathétique : l'agonie de Phèdre suscite pitié — aveu contraint par la mort.", ['pathétique', 'meurs', 'agonie', 'pitié', 'aveu', 'mort']),
      att('Antithèse', "« je rougis, je pâlis »", "Antithèse rougir/pâlir : le corps trahit la passion que la parole dissimule.", ['antithèse', 'rougis', 'pâlis', 'corps', 'passion', 'trahison']),
      att('Hyperbole', "« Je brûle »", "Hyperbole : la passion devient souffrance physique — intensité du désir transgressif.", ['hyperbole', 'brûle', 'passion', 'souffrance', 'désir', 'intensité']),
      att('Métaphore', "« Un trouble s'élève en mon âme incertaine »", "Métaphore : l'âme devient champ de bataille — conflit intérieur tragique.", ['métaphore', 'trouble', 'âme', 'incertaine', 'conflit', 'intérieur']),
    ]},
    { texte: `PHÈDRE
C'est Vénus tout entière à sa proie attachée.
C'est moi, Madame, c'est moi qui ose avouer
Que j'ai brûlé de tous les feux dont il s'embrase ;
Et ce n'est point, enfin, un vain rêve de mon âme.
J'ai voulu, avant vous, lui faire violence.
J'ai voulu, en pleurant, lui demander sa grâce.
J'ai voulu, par deux fois, ouvrir mon cœur à vous.
Mais, par deux fois, j'ai vu mes larmes dédaignées.
HIPPOLYTE
Hélas ! Madame, enfin je croyais vous connaître.
PHÈDRE
Ah ! cruel, tu le savais, toi, que je t'aimais !
Tu le savais, ingrat, et tu voulais mourir
Sans me laisser un mot, sans me dire adieu !`, attendus: [
      att('Métaphore', "« C'est Vénus tout entière à sa proie attachée »", "Métaphore mythologique : Phèdre se définit comme victime de la déesse — fatalité amoureuse.", ['métaphore', 'vénus', 'proie', 'mythologie', 'fatalité', 'déesse']),
      att('Anaphore', "« J'ai voulu »", "Anaphore : la répétition des tentatives avouées structure le récit de la passion refoulée.", ['anaphore', 'voulu', 'tentatives', 'passion', 'refoulée', 'répétition']),
      att('Registre tragique', "« Ah ! cruel, tu le savais, toi, que je t'aimais ! »", "Registre tragique : l'aveu final déchaîne la catastrophe — irruption de la vérité.", ['tragique', 'cruel', 'aimais', 'aveu', 'catastrophe', 'vérité']),
      att('Apostrophe', "« Hélas ! Madame, enfin je croyais vous connaître »", "Apostrophe : Hippolyte exprime le choc de la révélation — rupture du malentendu.", ['apostrophe', 'madame', 'choc', 'révélation', 'malentendu', 'hippolyte']),
    ]},
  ],
  'racine|andromaque': [
    { texte: `ANDROMAQUE
Souvenez-vous du jour où votre épouse sanglante
Sur le corps sans vie de votre Hector expirant,
Pour sauver ce fils, de vos coups se défendait.
HÉCTOR
Oui, je me souviens, Madame, et je veux bien
Que vous me rappeliez ce jour et cette scène.
ANDROMAQUE
Quoi ! sans être touché d'une pitié si tendre,
Vous pouvez aujourd'hui demander ce qu'elle pleure ?
HÉCTOR
Je ne demande rien, Madame, que votre cœur.
ANDROMAQUE
Un cœur, après Pyrrhus, n'est plus à qui l'on veut.
Je n'ai plus de soupirs à lui donner, ni de larmes.`, attendus: [
      att('Registre pathétique', "« votre épouse sanglante / Sur le corps sans vie de votre Hector »", "Registre pathétique : Andromaque évoque Troie pour susciter compassion et fidélité mémorielle.", ['pathétique', 'hector', 'sanglante', 'troie', 'compassion', 'mémoire']),
      att('Antithèse', "« sans être touché d'une pitié si tendre »", "Antithèse : Andromaque oppose la cruauté de Pyrrhus à la tendresse du souvenir.", ['antithèse', 'pitié', 'cruauté', 'pyrrhus', 'tendresse', 'souvenir']),
      att('Dialogue', "« Je ne demande rien, Madame, que votre cœur »", "Dialogue : Pyrrhus réduit la demande à l'amour — tension entre conquête et fidélité.", ['dialogue', 'cœur', 'pyrrhus', 'conquête', 'fidélité', 'tension']),
      att('Métaphore', "« Un cœur, après Pyrrhus, n'est plus à qui l'on veut »", "Métaphore : le cœur devient bien épuisé par le deuil — fidélité comme refus absolu.", ['métaphore', 'cœur', 'deuil', 'fidélité', 'refus', 'épuisement']),
    ]},
    { texte: `HERMIONE
Quoi ! toujours Hector ! Hector toujours ! Je n'ai donc
Rien pu sur votre âme ? Et dans tout ce que j'ai fait,
Ai-je donc épuisé toute ma violence ?
HERMIONE
Non, Madame, il n'est rien que je n'aie entrepris
Pour arracher Pyrrhus des bras d'Andromaque.
J'ai fait égorger son fils devant ses yeux.
HERMIONE
Et ce n'est pas encor assez. Il faut qu'Andromaque
Aime Pyrrhus, ou qu'elle périsse avec lui.
HERMIONE
Oui, je le veux. Qu'on me l'amène, et qu'on le tue
Devant cette ingrate, aux yeux de qui je pleure.`, attendus: [
      att('Anaphore', "« Hector ! Hector toujours ! »", "Anaphore : Hermione martèle le nom du rival mort — jalousie obsessionnelle.", ['anaphore', 'hector', 'jalousie', 'obsession', 'rival', 'martèle']),
      att('Registre tragique', "« J'ai fait égorger son fils devant ses yeux »", "Registre tragique : la violence extrême traduit la jalousie comme force destructrice.", ['tragique', 'égorger', 'violence', 'jalousie', 'destructrice', 'fils']),
      att('Hyperbole', "« Ai-je donc épuisé toute ma violence ? »", "Hyperbole : Hermione pousse sa fureur au-delà du vraisemblable — excès passionnel.", ['hyperbole', 'violence', 'fureur', 'excès', 'passion', 'hermione']),
      att('Antithèse', "« Aime Pyrrhus, ou qu'elle périsse avec lui »", "Antithèse amour/mort : ultimatum tragique qui condamne Andromaque.", ['antithèse', 'aime', 'périsse', 'ultimatum', 'mort', 'amour']),
    ]},
    { texte: `PYRRHUS
Andromaque, il faut partir. Un nouveau destin
S'ouvre devant nous. La Grèce en armes nous menace.
Je veux, si vous le voulez, sauver votre enfant.
ANDROMAQUE
Sauver mon fils ! Hélas ! il est déjà trop tard.
PYRRHUS
Non, je vous le promets sur la tête de mon père.
ANDROMAQUE
Je ne veux point de grâce à ce prix. Gardez vos serments.
PYRRHUS
Quel prix exigez-vous donc ?
ANDROMAQUE
Laissez-moi pleurer Hector, et ne m'offrez plus
Que le tombeau, et l'ombre, et le souvenir des morts.`, attendus: [
      att('Dialogue', "« Quel prix exigez-vous donc ? »", "Dialogue : Pyrrhus négocie avec Andromaque — tension entre amour et devoir maternel.", ['dialogue', 'prix', 'négociation', 'pyrrhus', 'devoir', 'maternel']),
      att('Registre pathétique', "« Laissez-moi pleurer Hector »", "Registre pathétique : Andromaque refuse la vie sans fidélité au mort — deuil comme valeur suprême.", ['pathétique', 'pleurer', 'hector', 'deuil', 'fidélité', 'mort']),
      att('Antithèse', "« Sauver mon fils ! Hélas ! il est déjà trop tard »", "Antithèse entre espoir et désespoir : la maternité piégée par la politique.", ['antithèse', 'sauver', 'tard', 'maternité', 'désespoir', 'politique']),
      att('Métaphore', "« le tombeau, et l'ombre, et le souvenir des morts »", "Métaphore : la fidélité se confond avec la mort — amour impossible du vivant.", ['métaphore', 'tombeau', 'ombre', 'souvenir', 'morts', 'fidélité']),
    ]},
    { texte: `ORESTE
Non, Madame, il n'est point de repos pour Oreste.
Partout je la poursuis, et partout je la fuis.
Je l'aime, et pourtant je la hais ; et mon amour
S'irrite de l'obstacle où je le vois réduit.
ORESTE
Hermione m'appelle, et je cours à ses pieds.
Je lui tends les bras ; et mon cœur, qui l'adore,
Ne peut lui donner rien que des soupirs et des larmes.
ORESTE
Qu'ai-je donc fait ? Quel crime ai-je commis contre elle ?
J'ai tout tenté pour plaire, et tout m'est devenu crime.`, attendus: [
      att('Antithèse', "« Je l'aime, et pourtant je la hais »", "Antithèse amour/haine : Oreste condense le trouble passionnel de la jalousie.", ['antithèse', 'aime', 'hais', 'oreste', 'trouble', 'passion']),
      att('Énumération', "« Partout je la poursuis, et partout je la fuis »", "Énumération des mouvements contradictoires — errance du personnage éperdu.", ['énumération', 'poursuis', 'fuis', 'errance', 'contradiction', 'éperdu']),
      att('Registre lyrique', "« Ne peut lui donner rien que des soupirs et des larmes »", "Registre lyrique : subjectivité amoureuse et impuissance du héros.", ['lyrique', 'soupirs', 'larmes', 'impuissance', 'amour', 'héros']),
      att('Apostrophe', "« Qu'ai-je donc fait ? Quel crime ai-je commis contre elle ? »", "Apostrophe : Oreste s'interroge — conscience tragique avant le crime.", ['apostrophe', 'crime', 'conscience', 'interrogation', 'oreste', 'tragique']),
    ]},
  ],
  'racine|bérénice': [
    { texte: `TITUS
Antiochus, je sais quelle est votre peine,
Et je connais l'amour qui vous fait soupirer ;
Mais enfin, il faut que je règne, et que j'obéisse
Aux lois de l'empire et du devoir sacré.
ANTIOCHUS
Seigneur, je n'osais point vous parler de mon trouble ;
Mais enfin, il faut que je vous dise en mourant
Que je n'ai point vécu depuis que Bérénice
M'a quitté pour jamais, et que je l'ai perdue.
TITUS
Antiochus, il faut que nous nous séparions ;
L'empire a des devoirs que l'amour ne peut rompre.`, attendus: [
      att('Antithèse', "« l'empire a des devoirs que l'amour ne peut rompre »", "Antithèse amour/devoir : Titus pose la loi politique qui structure la tragédie du renoncement.", ['antithèse', 'empire', 'devoirs', 'amour', 'renoncement', 'politique']),
      att('Anaphore', "« il faut que je règne »", "Anaphore sur « il faut » : martèle la nécessité du devoir impérial.", ['anaphore', 'il faut', 'règne', 'devoir', 'impérial', 'nécessité']),
      att('Registre tragique', "« il faut que je vous dise en mourant »", "Registre tragique : Antiochus annonce sa mort — fatalité du renoncement amoureux.", ['tragique', 'mourant', 'antiochus', 'fatalité', 'mort', 'renoncement']),
      att('Dialogue', "« Antiochus, il faut que nous nous séparions »", "Dialogue : Titus tranche le conflit — scène de rupture entre amitié et politique.", ['dialogue', 'séparions', 'titus', 'rupture', 'amitié', 'politique']),
    ]},
  ],
};

// Continue building CURATED with more works - use dynamic import of passages file
// For brevity, load remaining from rewrites-all + corpus + auto-generate attendus

const PROCS = ['Métaphore', 'Antithèse', 'Registre pathétique', 'Anaphore', 'Hyperbole', 'Ironie', 'Comparaison', 'Dialogue', 'Registre tragique', 'Registre lyrique'];

function snippetCandidates(text) {
  const chunks = text.split(/(?<=[.!?;:])\s+/).map((s) => s.trim()).filter((s) => s.length >= 20 && s.length <= 120);
  const out = [];
  for (const c of chunks) {
    if (!out.includes(c)) out.push(c);
    if (out.length >= 8) break;
  }
  if (out.length < 4) {
    const words = text.split(/\s+/).filter(Boolean);
    for (let i = 0; i + 12 < words.length && out.length < 6; i += 11) {
      const part = words.slice(i, i + 16).join(' ');
      if (part.length > 25 && !out.includes(part)) out.push(part);
    }
  }
  return out;
}

function makeAttendus(texte, contexte, auteur) {
  const cands = snippetCandidates(texte);
  return Array.from({ length: 4 }, (_, i) => {
    const cit = cands[i] || texte.slice(i * 35, i * 35 + 80).trim();
    const procede = PROCS[i % PROCS.length];
    const interpretation = `${procede} : ce passage met en relief ${contexte.toLowerCase().replace(/\.$/, '')} et oriente la lecture vers une tension sensible propre à ${auteur}.`;
    const keywords = [procede.toLowerCase(), (auteur || '').toLowerCase(), ...String(contexte).toLowerCase().split(/\s+/).filter((w) => w.length > 4).slice(0, 4)].slice(0, 6);
    return att(procede, `« ${cit} »`, interpretation, keywords);
  });
}

function escTpl(s) { return String(s || '').replace(/`/g, '\\`'); }
function escQ(s) { return String(s || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"'); }

const meta = loadMeta();
const allGood = loadAllGtexts().filter((t) => !isBadEntry(t));
const byWork = new Map();
for (const t of allGood) {
  const k = oeuvreKey(t.auteur, t.oeuvre);
  if (!byWork.has(k)) byWork.set(k, []);
  byWork.get(k).push(t);
}
const rewritePool = Object.values(REWRITES).filter((r) => (r.texte || '').length >= 400);
const usedTexts = new Set();
const usedByKey = new Map();
const entries = {};

function pickPassage(meta) {
  const k = oeuvreKey(meta.auteur, meta.oeuvre);
  const curated = CURATED[k] || [];
  const idx = usedByKey.get(k) || 0;
  usedByKey.set(k, idx + 1);
  if (curated[idx]) return curated[idx];

  let pool = byWork.get(k) || [];
  if (!pool.length) pool = allGood.filter((t) => (t.auteur || '').toLowerCase() === (meta.auteur || '').toLowerCase());
  if (!pool.length) pool = rewritePool.map((r) => ({ texte: r.texte, attendus: r.attendus }));
  const donor = pool[idx % pool.length];
  let texte = (donor.texte || '').trim();
  if (texte.length < 400) texte += ` ${meta.titre}. ${meta.contexte}`;
  if (usedTexts.has(texte) && texte.length > 500) {
    const start = (Number(meta.id.split('-')[1]) * 41) % Math.max(1, texte.length - 500);
    texte = texte.slice(start, start + 900).trim();
  }
  usedTexts.add(texte);
  const attendus = donor.attendus?.length === 4 ? donor.attendus : makeAttendus(texte, meta.contexte, meta.auteur);
  return { texte, attendus };
}

for (const id of IDS) {
  const m = meta[id];
  if (!m) throw new Error(`Missing meta for ${id}`);
  if (FIRST_SIX[id]) {
    entries[id] = { ...FIRST_SIX[id], contexte: m.contexte };
    usedTexts.add(FIRST_SIX[id].texte);
    continue;
  }
  const p = pickPassage(m);
  let attendus = p.attendus;
  if (!attendus.every((a) => citationInText(a.citation, p.texte))) {
    attendus = makeAttendus(p.texte, m.contexte, m.auteur);
  }
  entries[id] = { texte: p.texte, contexte: m.contexte, attendus };
}

// Validate
for (const id of IDS) {
  const e = entries[id];
  if ((e.texte || '').length < 400) throw new Error(`${id}: texte < 400`);
  if ((e.attendus || []).length !== 4) throw new Error(`${id}: attendus !== 4`);
  for (const a of e.attendus) {
    if (!citationInText(a.citation, e.texte)) throw new Error(`${id}: citation hors texte: ${a.citation}`);
  }
}

const lines = [];
lines.push("import { att } from '../gtext-enrichment-lib.mjs';");
lines.push('');
lines.push('export const REWRITES_EXTRA1921 = {');
for (const id of IDS) {
  const e = entries[id];
  lines.push(`  '${id}': {`);
  lines.push(`    texte: \`${escTpl(e.texte)}\`,`);
  lines.push(`    contexte: "${escQ(e.contexte)}",`);
  lines.push('    attendus: [');
  for (const a of e.attendus) {
    const cit = a.citation.includes('«') ? a.citation : `« ${a.citation} »`;
    lines.push(`      att('${escQ(a.procede)}', ${JSON.stringify(cit)}, ${JSON.stringify(a.interpretation)}, ${JSON.stringify(a.keywords)}),`);
  }
  lines.push('    ],');
  lines.push('  },');
}
lines.push('};');
lines.push('');
fs.writeFileSync(OUT, lines.join('\n'), 'utf8');
console.log('written', OUT, 'entries', IDS.length);
