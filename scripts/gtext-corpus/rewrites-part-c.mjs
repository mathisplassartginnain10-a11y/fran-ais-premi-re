/**
 * Réécritures manuelles — lot C (GT-539 à GT-578, sélection 27 entrées).
 */
import { att } from '../gtext-enrichment-lib.mjs';

export const REWRITES_PART_C = {

  'GT-539': {
    texte: `C'était une de ces jolies et charmantes filles, nées, comme par une erreur du destin, dans une famille d'employés. Elle n'avait pas de dot, pas d'espérances, aucun moyen d'être connue, comprise, aimée, épousée par un homme riche et distingué ; et elle se laissa marier avec un petit commis du ministère de l'Instruction publique.
Elle fut simple, ne pouvant être parée, mais malheureuse comme une déclassée ; car les femmes n'ont point de caste ni de race, leur beauté, leur grâce et leur charme leur servant de naissance et de famille. Leur finesse native, leur instinct d'élégance, leur souplesse d'esprit sont leur seule hiérarchie, et font des filles du peuple les égales des grandes dames.`,
    contexte: "Nouvelle réaliste — l'incipit de Maupassant présente Mathilde Loisel comme victime d'un destin social injuste ; l'ironie s'installe dès les premières lignes.",
    attendus: [
      att('Ironie', '« nées, comme par une erreur du destin »', "L'incise ironique désigne la naissance dans un milieu modeste comme une injustice arbitraire — Maupassant conteste dès l'incipit l'ordre social qui condamne Mathilde à la frustration permanente.", ['ironie', 'destin', 'naissance', 'social', 'injustice', 'maupassant']),
      att('Énumération', '« connue, comprise, aimée, épousée »', "L'énumération en gradation révèle les aspirations de Mathilde et les réduit à un seul programme matrimonial — unique voie d'ascension pour une femme du XIXe siècle.", ['énumération', 'gradation', 'mariage', 'aspiration', 'femme', 'condition']),
      att('Registre réaliste', '« malheureuse comme une déclassée »', "La comparaison réaliste ancre le portrait dans une sociologie précise : Mathilde souffre d'un écart entre désir et condition, non d'un manque objectif — ressort de toute la nouvelle.", ['réaliste', 'déclassée', 'condition', 'sociologie', 'désir', 'frustration']),
      att('Métaphore', '« leur beauté, leur grâce et leur charme leur servant de naissance et de famille »', "La beauté est métaphoriquement présentée comme un capital héréditaire : Maupassant dénonce la dépendance des femmes à leur seule apparence physique comme substitut de statut social.", ['métaphore', 'beauté', 'capital', 'hérédité', 'apparence', 'statut']),
    ],
  },

  'GT-540': {
    texte: `Lorsque j'avais six ans j'ai vu, une fois, une magnifique image, dans un livre sur la Forêt Vierge qui s'appelait « Histoires Vécues ». Ça représentait un serpent boa qui avalait un fauve. Voilà la copie du dessin.
Il était écrit dans le livre : « Les serpents boas avalent leur proie tout entière, sans la mâcher. Ensuite ils ne peuvent plus bouger et ils dorment pendant les six mois de leur digestion. »
J'ai alors beaucoup réfléchi sur les aventures de la jungle et, à mon tour, j'ai réussi, avec un crayon de couleur, à tracer mon premier dessin. Mon dessin numéro 1.
J'ai montré mon chef-d'œuvre aux grandes personnes et je leur ai demandé si mon dessin leur faisait peur. Elles m'ont répondu : « Pourquoi un chapeau ferait-il peur ? »`,
    contexte: "Conte philosophique — l'incipit pose l'opposition entre regard enfantin (imagination) et regard adulte (rationalisme) comme thème fondateur de l'œuvre.",
    attendus: [
      att('Ironie', '« Pourquoi un chapeau ferait-il peur ? »', "La réplique des grandes personnes est ironique : elles ne voient qu'un chapeau là où l'enfant perçoit un boa — Saint-Exupéry critique l'imagination éteinte des adultes dès le seuil du récit.", ['ironie', 'chapeau', 'boa', 'adulte', 'enfant', 'imagination']),
      att('Focalisation interne', '« J\'ai alors beaucoup réfléchi sur les aventures de la jungle »', "La focalisation sur le narrateur-enfant instaure une complicité immédiate : le lecteur adopte le point de vue de l'enfant et perçoit l'incapacité des adultes à voir le monde poétiquement.", ['focalisation', 'interne', 'narrateur', 'enfant', 'complicité', 'regard']),
      att('Antithèse', '« mon chef-d\'œuvre »', "L'antithèse implicite entre l'enthousiasme de l'enfant (chef-d'œuvre) et l'indifférence adulte (chapeau ordinaire) pose la philosophie centrale du conte : les adultes ont perdu le sens de l'essentiel.", ['antithèse', 'chef-oeuvre', 'adultes', 'essentiel', 'philosophie', 'regard']),
      att('Registre lyrique', '« une magnifique image »', "Le superlatif enthousiaste traduit l'émerveillement du narrateur-enfant : Saint-Exupéry inaugure dès l'incipit le regard poétique comme valeur supérieure au raisonnement adulte.", ['lyrique', 'magnifique', 'émerveillement', 'poétique', 'valeur', 'incipit']),
    ],
  },

  'GT-541': {
    texte: `PHÈDRE
Ce n'est plus une ardeur dans mes veines cachée :
C'est Vénus tout entière à sa proie attachée.
J'ai conçu pour mon crime une juste terreur ;
J'ai pris la vie en haine, et ma flamme en horreur.
Je voulais en mourant prendre soin de ma gloire,
Et dérober au jour une flamme si noire :
Je n'ai pu soutenir tes larmes, tes combats ;
Je t'ai tout avoué ; je ne m'en repens pas,
Pourvu que de ma mort respectant les approches,
Tu ne m'affliges plus par d'injustes reproches,
Et que tes vains secours cessent de rappeler
Un reste de chaleur tout prêt à s'exhaler.
ŒNONE
Madame, au nom des pleurs que pour vous j'ai versés,
Par vos faibles genoux que j'embrasse en tremblant,
Délivrez mon esprit de ce funeste doute.`,
    contexte: "Phèdre avoue sa passion à Oenone et prépare sa mort — registre tragique, fatalité divine et déchirement entre honneur et désir.",
    attendus: [
      att('Métaphore', '« C\'est Vénus tout entière à sa proie attachée »', "La métaphore de la proie divine exprime la fatalité : Phèdre n'est pas coupable mais victime d'une déesse — la passion transcende la volonté humaine et exonère partiellement l'héroïne.", ['métaphore', 'vénus', 'proie', 'fatalité', 'divine', 'passion']),
      att('Antithèse', '« J\'ai pris la vie en haine, et ma flamme en horreur »', "L'antithèse vie/flamme condense le déchirement de Phèdre : elle souffre d'une passion qu'elle ne peut ni assumer ni éteindre — le tragique naît de cette double impossibilité.", ['antithèse', 'vie', 'haine', 'flamme', 'horreur', 'déchirement']),
      att('Registre tragique', '« Je voulais en mourant prendre soin de ma gloire »', "La mort comme préservation de l'honneur est l'enjeu tragique central : Phèdre choisit la disparition pour éviter le scandale — la fatalité dépasse le désir individuel.", ['tragique', 'mourant', 'gloire', 'honneur', 'scandale', 'fatalité']),
      att('Gradation', '« Je n\'ai pu soutenir tes larmes, tes combats »', "La gradation (larmes → combats) décrit la résistance progressive d'Oenone qui brise la volonté de Phèdre : l'aveu est arraché, non librement consenti — la confidente est déjà impliquée dans la catastrophe.", ['gradation', 'larmes', 'combats', 'résistance', 'aveu', 'confidente']),
    ],
  },

  'GT-542': {
    texte: `PHÈDRE
Oui, Prince, je languis, je brûle pour Thésée.
Je l'aime, non point tel que l'ont vu les enfers,
Volage adorateur de mille objets divers,
Qui va du Dieu des morts déshonorer la couche ;
Mais fidèle, mais fier, et même un peu farouche,
Charmant, jeune, traînant tous les cœurs après soi,
Tel qu'on dépeint nos dieux, ou tel que je vous voi.
Il avait votre port, vos yeux, votre langage,
Cette noble pudeur colorait son visage,
Lorsque de notre Crète il traversa les flots,
Digne sujet des vœux des filles de Minos.
Que faisiez-vous alors ? Pourquoi, sans Hippolyte,
Des héros de la Grèce assembla-t-il l'élite ?
Pourquoi, trop jeune encor, ne pûtes-vous alors
Entrer dans le vaisseau qui le mit sur nos bords ?`,
    contexte: "Phèdre déclare sa passion à Hippolyte en substituant son image à celle de Thésée — l'aveu incestueux s'accomplit dans le glissement fatal du père au fils.",
    attendus: [
      att('Apostrophe', '« Que faisiez-vous alors ? Pourquoi, sans Hippolyte »', "Phèdre interpelle Hippolyte en imaginant sa jeunesse : le glissement du père au fils marque l'instant exact où l'aveu incestueux s'accomplit malgré la volonté de la reine.", ['apostrophe', 'hippolyte', 'aveu', 'glissement', 'inceste', 'passion']),
      att('Comparaison', '« Tel qu\'on dépeint nos dieux, ou tel que je vous voi »', "Hippolyte comparé aux dieux révèle la nature sacrée et transgressive du désir de Phèdre : l'amour prend la forme d'une vénération idolâtre qui dépasse le simple sentiment humain.", ['comparaison', 'dieux', 'transgression', 'vénération', 'désir', 'sacré']),
      att('Antithèse', '« Volage adorateur de mille objets divers »', "Phèdre oppose Thésée (volage) à Hippolyte (farouche et fidèle) pour justifier le transfert de son désir : l'antithèse construit rhétoriquement la légitimité d'un amour interdit.", ['antithèse', 'volage', 'farouche', 'transfert', 'désir', 'rhétorique']),
      att('Registre tragique', '« je languis, je brûle pour Thésée »', "Le double verbe (languir, brûler) traduit la passion dévorante dans son ambiguïté calculée : Phèdre nomme Thésée mais vise Hippolyte — la fatalité s'accomplit dans le lapsus révélateur.", ['tragique', 'languis', 'brûle', 'ambiguïté', 'lapsus', 'fatalité']),
    ],
  },

  'GT-544': {
    texte: `PHÈDRE
Ils s'aiment ! Par quel charme ont-ils trompé mes yeux ?
Comment se sont-ils vus ? Depuis quand ? Dans quels lieux ?
Tu le savais. Pourquoi me laissais-tu séduire ?
De leur furtive ardeur ne pouvais-tu m'instruire ?
Les a-t-on vus souvent se parler, se chercher ?
Dans le fond des forêts allaient-ils se cacher ?
Hélas ! ils se voyaient avec pleine licence.
Le ciel de leurs soupirs approuvait l'innocence ;
Ils suivaient sans remords leur penchant amoureux ;
Tous les jours se levaient clairs et sereins pour eux.
Et moi, triste rebut de la nature entière,
Je me cachais au jour, je fuyais la lumière.
La mort est le seul Dieu que j'osais implorer.
J'attendais le moment de rendre l'âme ; et l'être
Nourri de fiel et de larmes, c'était moi.`,
    contexte: "Phèdre découvre l'amour d'Hippolyte pour Aricie — la jalousie décompose la reine et accentue son sentiment d'exclusion et de malédiction divine.",
    attendus: [
      att('Anaphore', '« Comment se sont-ils vus ? Depuis quand ? Dans quels lieux ? »', "L'anaphore interrogative traduit la jalousie frénétique de Phèdre : les questions en rafale révèlent son obsession et son effroi devant une réalité qui l'exclut totalement.", ['anaphore', 'questions', 'jalousie', 'obsession', 'effroi', 'exclusion']),
      att('Antithèse', '« Tous les jours se levaient clairs et sereins pour eux »', "L'antithèse entre la lumière des amants innocents et les ténèbres de Phèdre souligne l'injustice tragique : l'innocence est éclairée, la culpabilité reléguée dans l'ombre.", ['antithèse', 'clairs', 'sereins', 'ténèbres', 'innocence', 'culpabilité']),
      att('Champ lexical', '« triste rebut de la nature entière »', "Le champ lexical de l'exclusion peint Phèdre comme une proscrite du monde vivant : sa culpabilité intérieure l'exile de la lumière et du bonheur des êtres innocents.", ['champ', 'lexical', 'rebut', 'proscrite', 'exclusion', 'culpabilité']),
      att('Registre lyrique', '« Nourri de fiel et de larmes, c\'était moi »', "L'expression lyrique concentre la souffrance de Phèdre — fiel, larmes — dans une formule d'aveu sobre et dévastateur : la reine se désigne comme seule victime de sa passion.", ['lyrique', 'fiel', 'larmes', 'souffrance', 'victime', 'aveu']),
    ],
  },

  'GT-545': {
    texte: `PHÈDRE
Non. Thésée, il faut rompre un injuste silence ;
Il faut à votre fils rendre son innocence.
Il n'était point coupable.
THÉSÉE
Ah, père infortuné !
Et c'est sur votre foi que je l'ai condamné !
Cruelle, pensez-vous être assez excusée ?
PHÈDRE
Les moments me sont chers, écoutez-moi, Thésée.
C'est moi qui sur ce fils chaste et respectueux
Osai jeter un œil profane, incestueux.
Le ciel mit dans mon sein une flamme funeste ;
La détestable Œnone a conduit tout le reste.
Elle a craint qu'Hippolyte, instruit de ma fureur,
Ne découvrît un feu qui lui faisait horreur.
La perfide, abusant de ma faiblesse extrême,
S'est hâtée à vos yeux de l'accuser lui-même.
Elle en est punie, et fuyant mon courroux,
A cherché dans les flots un supplice trop doux.`,
    contexte: "Aveu final de Phèdre à Thésée — réhabilitation d'Hippolyte, désignation d'Oenone comme complice et mort prochaine de la reine par le poison.",
    attendus: [
      att('Antithèse', '« ce fils chaste et respectueux »', "L'antithèse entre la chasteté d'Hippolyte et l'aveu qui suit (œil profane, incestueux) condense la faute tragique : l'innocent a péri pour une passion coupable — la culpabilité de Phèdre éclate dans la confession.", ['antithèse', 'chaste', 'profane', 'incestueux', 'faute', 'innocence']),
      att('Registre pathétique', '« Les moments me sont chers, écoutez-moi, Thésée »', "L'urgence de Phèdre mourante suscite la compassion : elle se hâte de rétablir la vérité avant que le poison ne l'emporte — l'aveu devient un acte de rédemption finale.", ['pathétique', 'urgence', 'mourante', 'compassion', 'poison', 'rédemption']),
      att('Apostrophe', '« écoutez-moi, Thésée »', "Phèdre interpelle son époux dans un ultime sursaut de dignité : l'apostrophe scelle la réhabilitation morale d'Hippolyte et le rachat partiel de la reine devant l'histoire.", ['apostrophe', 'thésée', 'dignité', 'réhabilitation', 'hippolyte', 'rachat']),
      att('Litote', '« A cherché dans les flots un supplice trop doux »', "La litote désigne la mort d'Oenone comme châtiment insuffisant : la nourrice s'échappe trop facilement d'une faute qui a coûté la vie d'Hippolyte — la justice immanente reste incomplète.", ['litote', 'supplice', 'doux', 'châtiment', 'oenone', 'insuffisant']),
    ],
  },

  'GT-546': {
    texte: `ANDROMAQUE
Je passais jusqu'aux lieux où l'on garde mon fils.
Puisqu'une fois le jour vous souffrez que je voie
Le seul bien qui me reste et d'Hector et de Troie,
J'allais, Seigneur, pleurer un moment avec lui :
Je ne l'ai point encore embrassé d'aujourd'hui.
PYRRHUS
Ah, Madame ! les Grecs, si j'en crois leurs alarmes,
Vous donneront bientôt d'autres sujets de larmes.
Cet enfant si cher à toute votre tendresse,
Il faut qu'il périsse ou que Troie renaisse.
Je ne puis que pour lui fléchir la Grèce entière
Qu'en adoptant ses droits devant sa propre mère.
ANDROMAQUE
Seigneur, c'est un exil que votre cœur m'impose.
Eh ! sans craindre les Grecs, ni même leur courroux,
Ne puis-je pas, au moins, mourir après lui, Pyrrhus ?
Lui laisser pour prison tout l'univers sans père,
Et lui conserver, du moins, le nom de sa mère ?`,
    contexte: "Andromaque se rend auprès d'Astyanax et affronte l'ultimatum de Pyrrhus — devoir maternel, mémoire d'Hector et résistance à la contrainte amoureuse.",
    attendus: [
      att('Registre pathétique', '« Je ne l\'ai point encore embrassé d\'aujourd\'hui »', "Le détail affectif de l'embrassade quotidienne suscite une compassion immédiate pour Andromaque : la mère captive n'a plus que ce geste pour maintenir le lien avec son enfant et l'héritage troyen.", ['pathétique', 'embrassé', 'mère', 'enfant', 'captive', 'troie']),
      att('Antithèse', '« qu\'il périsse ou que Troie renaisse »', "L'alternative tragique posée par Pyrrhus condense le dilemme d'Andromaque : la mort d'Astyanax ou la trahison de la mémoire d'Hector — aucun choix n'est innocent.", ['antithèse', 'périsse', 'renaisse', 'dilemme', 'hector', 'mémoire']),
      att('Apostrophe', '« mourir après lui, Pyrrhus ? »', "Andromaque interpelle Pyrrhus en proposant sa propre mort comme seule issue : l'apostrophe souligne la dignité de la captive qui choisit l'anéantissement plutôt que la soumission à un tyran amoureux.", ['apostrophe', 'pyrrhus', 'mourir', 'dignité', 'résistance', 'captive']),
      att('Gradation', '« le seul bien qui me reste et d\'Hector et de Troie »', "La gradation (enfant → Hector → Troie) montre qu'Astyanax est le dernier condensé d'une civilisation détruite : protéger le fils, c'est préserver une mémoire collective irremplaçable.", ['gradation', 'hector', 'troie', 'mémoire', 'civilisation', 'héritage']),
    ],
  },

  'GT-547': {
    texte: `PYRRHUS
Je vous cherchais, Madame. Un espoir me console ;
Je viens vous annoncer ce que peut-être on vous tait :
Hermione demain doit partir avec moi.
Préparez-vous, Madame, à quitter cette terre.
Les Grecs vous ont rendu ce que je n'avais pu.
Votre liberté va vous être rendue.
ANDROMAQUE
Hélas ! qu'est-il besoin que vous me le disiez ?
Mon fils et moi, Seigneur, sommes libres ; qu'est-ce ?
HERMIONE
Que vois-je ? Ô ciel ! je me trompais, Seigneur !
Ne vous souvient-il plus, Seigneur, de nos amours ?
Avez-vous pu briser des nœuds si bien formés ?
PYRRHUS
Je vous aimais, Madame ; et quand j'aurais pu
Tenir ma promesse, il est trop tard. Mon cœur
À des objets plus doux s'est rendu volontaire.
HERMIONE
Je me suis défendue en vous aimant toujours.
Hélas ! pour conserver une flamme si chère,
Je me flattais d'un amour qui n'était que chimère.`,
    contexte: "Pyrrhus annonce à Andromaque sa liberté puis affronte Hermione abandonnée — jalousie, revirement et premier signal de la vengeance d'Hermione.",
    attendus: [
      att('Antithèse', '« Votre liberté va vous être rendue »', "L'annonce de la liberté d'Andromaque par Pyrrhus cache un abandon simultané d'Hermione : la liberté d'une femme coïncide avec l'emprisonnement affectif de l'autre — Racine construit l'ironie tragique sur ce double mouvement.", ['antithèse', 'liberté', 'abandon', 'hermione', 'ironie', 'tragique']),
      att('Apostrophe', '« Ne vous souvient-il plus, Seigneur, de nos amours ? »', "Hermione interpelle Pyrrhus avec une question indignée qui rappelle sa légitimité : l'apostrophe trahit la blessure de l'orgueil autant que la douleur amoureuse — elle annonce la vengeance à venir.", ['apostrophe', 'hermione', 'amours', 'indignée', 'orgueil', 'vengeance']),
      att('Registre pathétique', '« Je me suis défendue en vous aimant toujours »', "Hermione avoue sa fidélité paradoxale : l'amour qu'elle n'a pu éteindre aggrave son humiliation — le registre pathétique sollicite la pitié pour une femme trahie malgré elle.", ['pathétique', 'fidélité', 'amour', 'humiliation', 'trahison', 'pitié']),
      att('Métaphore', '« des nœuds si bien formés »', "La métaphore des nœuds symbolise les liens du mariage et de l'honneur : Pyrrhus les brise avec légèreté — l'image condense la faute de l'infidèle face à la gravité de l'engagement contracté.", ['métaphore', 'nœuds', 'mariage', 'engagement', 'trahison', 'légèreté']),
    ],
  },

  'GT-550': {
    texte: `RODRIGUE
Percé jusques au fond du cœur
D'une atteinte imprévue aussi bien que mortelle,
Misérable vengeur d'une juste querelle,
Et malheureux objet d'une injuste rigueur,
Je demeure immobile, et mon âme abattue
Cède au coup qui me tue.
Si près de voir mon feu récompensé,
Ô Dieu, l'étrange peine !
En cet affront mon père est l'offensé,
Et l'offenseur le père de Chimène.
Que je sens de rudes combats !
Contre mon propre honneur mon amour s'intéresse :
Il faut venger un père, et perdre une maîtresse.
L'un m'anime le cœur, l'autre retient mon bras.
Réduit au triste choix ou de trahir ma flamme,
Ou de vivre en infâme,
Des deux côtés mon mal est infini.`,
    contexte: "Stances de Rodrigue après l'affront du Comte — le héros affronte le dilemme cornélien entre honneur paternel et amour pour Chimène.",
    attendus: [
      att('Antithèse', '« Il faut venger un père, et perdre une maîtresse »', "L'antithèse condense le dilemme cornélien fondamental : honneur et amour s'excluent mutuellement — le héros est condamné à souffrir quel que soit son choix.", ['antithèse', 'père', 'maîtresse', 'honneur', 'amour', 'dilemme']),
      att('Métaphore', '« Percé jusques au fond du cœur »', "La métaphore de la blessure mortelle ouvre les stances : Rodrigue est symboliquement tué par la nouvelle avant le duel — la souffrance morale précède et dépasse l'action physique.", ['métaphore', 'percé', 'cœur', 'blessure', 'symbolique', 'souffrance']),
      att('Registre pathétique', '« Ô Dieu, l\'étrange peine ! »', "L'exclamation pathétique traduit la stupeur de Rodrigue : l'affront frappe au moment où il espérait être récompensé de son amour — le tragique naît de ce renversement brutal.", ['pathétique', 'dieu', 'peine', 'stupeur', 'renversement', 'tragique']),
      att('Gradation', '« Réduit au triste choix ou de trahir ma flamme, / Ou de vivre en infâme »', "La gradation des alternatives — trahison ou déshonneur — conduit Rodrigue à l'impasse et impose logiquement le duel comme seule issue honorable.", ['gradation', 'trahir', 'infâme', 'impasse', 'duel', 'honneur']),
    ],
  },

  'GT-551': {
    texte: `RODRIGUE
Je ne viens point ici demander ma grâce :
Je viens vous offrir ma tête, et c'est là ma justice.
CHIMÈNE
Ô Rodrigue, il est vrai, quoique ton ennemie,
Je ne puis te voir mort sans souffrir à la fois.
Mon âme sur ce point ne peut être indécise :
Je mourrai, Rodrigue, si je te perds encor.
RODRIGUE
Si j'offre à votre haine une si chère vie,
Faites que votre main en soit remerciée.
CHIMÈNE
Va, je ne te hais point, tu penses que je te hais ?
Mes blessures ont un cœur qui n'est pas endurci.
À qui venge mon père il s'attache et se donne ;
Et moins il m'offense, plus je le pardonne.
RODRIGUE
Chimène, qui l'eût cru ? — Chimène, qui l'eût dit ?
Que si peu de distance entre ma gloire et toi
Me coûte de douleur et cependant de foi !`,
    contexte: "Rodrigue s'offre à Chimène après avoir tué son père — entre devoir de vengeance et amour inavouable, le couple cornélien atteint le point de rupture le plus pathétique.",
    attendus: [
      att('Litote', '« Va, je ne te hais point »', "La litote de Chimène dit l'amour en niant la haine : l'atténuation révèle ce que l'honneur interdit d'avouer — la passion se manifeste dans le refus même de la nier.", ['litote', 'hais', 'amour', 'honneur', 'refus', 'aveu']),
      att('Antithèse', '« moins il m\'offense, plus je le pardonne »', "L'antithèse paradoxale inverse la logique vengeresse : plus Rodrigue aggrave l'offense en venant, plus Chimène pardonne — Corneille montre la défaite de l'honneur devant la passion.", ['antithèse', 'offense', 'pardonne', 'vengeance', 'passion', 'défaite']),
      att('Apostrophe', '« Chimène, qui l\'eût cru ? »', "Rodrigue interpelle Chimène en citant son propre prénom : le dédoublement oratoire exprime la stupeur devant un amour que les circonstances rendent impossible et que le destin aggrave.", ['apostrophe', 'chimène', 'dédoublement', 'stupeur', 'impossible', 'amour']),
      att('Registre pathétique', '« Je mourrai, Rodrigue, si je te perds encor »', "L'aveu incontrôlé de Chimène suscite la pitié : l'honneur ne résiste pas à l'expression de la mort symbolique — le pathétique naît du conflit entre ce que Chimène doit dire et ce qu'elle ressent.", ['pathétique', 'mourrai', 'aveu', 'pitié', 'honneur', 'conflit']),
    ],
  },

  'GT-555': {
    texte: `ALCESTE
Je veux, en homme d'honneur, qu'on ne lâche aucun mot
Qui ne parte du cœur, et je tiens pour flatteurs
Tous ceux qui de leurs vers prodiguent les douceurs
Sans jamais rien blâmer dans ce qu'on leur présente.
Je veux qu'on soit sincère, et qu'en toute occurrence
Le fond de notre cœur dans nos discours se lise.
ORONTE
Mais lorsque quelqu'un vient vous lire une pièce,
L'amitié ne veut-elle pas qu'on applaudisse ?
ALCESTE
Non point. Votre sonnet est mauvais, et je le dis.
L'ami sincère dit les vérités qu'on tait ;
La flatterie est un piège où le sot est pris.
PHILINTE
L'honnêteté, Monsieur, n'est pas de faire semblant.
ALCESTE
Voilà ce que je crois.
ORONTE
Monsieur, pensez-vous que dans la cour on plaise
En traitant les gens d'une humeur si sévère ?
ALCESTE
Je ne sais rien de la cour, et j'en suis fort aise.`,
    contexte: "La dispute du sonnet entre Alceste et Oronte — la sincérité brutale d'Alceste s'oppose à la politesse mondaine ; Molière interroge les limites de l'honnêteté sociale.",
    attendus: [
      att('Antithèse', '« L\'honnêteté, Monsieur, n\'est pas de faire semblant »', "L'antithèse entre honnêteté véritable et simulation polie pose le conflit central du Misanthrope : Alceste refuse l'hypocrisie sociale au nom d'un idéal moral inflexible.", ['antithèse', 'honnêteté', 'semblant', 'hypocrisie', 'idéal', 'social']),
      att('Apostrophe', '« Monsieur, pensez-vous que dans la cour on plaise »', "Oronte interpelle Alceste sur le terrain de la courtoisie mondaine : l'apostrophe signale un choc de valeurs — la cour exige le compromis que le misanthrope refuse absolument.", ['apostrophe', 'cour', 'courtoisie', 'valeurs', 'misanthrope', 'compromis']),
      att('Registre comique', '« Votre sonnet est mauvais, et je le dis »', "La brutalité comique de la formule d'Alceste déclenche le rire tout en posant un vrai problème moral : dire la vérité est-il une vertu ou une impolitesse ? — Molière laisse la question ouverte.", ['comique', 'sonnet', 'mauvais', 'brutalité', 'vérité', 'vertu']),
      att('Énumération', '« qu\'on ne lâche aucun mot / Qui ne parte du cœur »', "Le programme moral d'Alceste s'exprime dans un idéal de sincérité absolue : les mots doivent naître du cœur — exigence incompatible avec les codes de la sociabilité classique.", ['énumération', 'cœur', 'sincérité', 'utopique', 'incompatible', 'sociabilité']),
    ],
  },

  'GT-556': {
    texte: `ALCESTE
Madame, voulez-vous que je vous parle net ?
De vos façons d'agir je suis mal satisfait ;
Contre elles dans mon cœur trop de bile s'assemble,
Et je sens qu'il faudra que nous rompions ensemble.
Oui, je vous tromperais de parler autrement ;
Tôt ou tard nous romprons indubitablement,
Et je vous promettrais mille fois le contraire
Que je ne serais pas en pouvoir de le faire.
CÉLIMÈNE
C'est pour me quereller donc que vous avez voulu
Me ramener ici ?
ALCESTE
Je ne querelle point.
Mais votre humeur, Madame, évite trop souvent
Mes pénibles avis, dont elle a l'éclairement.
Je veux bien à vos pieds vous donner tout mon cœur ;
Mais à ce cœur, Madame, il faut quelque retour.`,
    contexte: "Alceste confronte Célimène sur son inconstance — l'amoureux misanthrope oscille entre rupture et déclaration, révélant la contradiction tragique de son caractère.",
    attendus: [
      att('Antithèse', '« je vous promettrais mille fois le contraire / Que je ne serais pas en pouvoir de le faire »', "L'antithèse entre la promesse et l'impuissance révèle le paradoxe d'Alceste : il aime ce qu'il condamne et ne peut se libérer de Célimène malgré son idéal de cohérence morale.", ['antithèse', 'promesse', 'impuissance', 'paradoxe', 'amour', 'cohérence']),
      att('Apostrophe', '« Madame, voulez-vous que je vous parle net ? »', "Alceste interpelle Célimène avec une question rhétorique qui impose la franchise : l'apostrophe directe est une mise en demeure mondaine — Molière montre la violence sociale de la sincérité absolue.", ['apostrophe', 'madame', 'franchise', 'violence', 'sincérité', 'sociale']),
      att('Registre comique', '« Tôt ou tard nous romprons indubitablement »', "Le pédantisme du futur certain (indubitablement) rend comique la déclaration de rupture : Alceste est plus logicien qu'amant — Molière rit du misanthrope incapable d'agir selon ses propres principes.", ['comique', 'rupture', 'pédantisme', 'logicien', 'incapable', 'principes']),
      att('Antithèse', '« Je veux bien à vos pieds vous donner tout mon cœur ; / Mais à ce cœur, Madame, il faut quelque retour »', "La condition posée par Alceste révèle l'antithèse entre le don absolu (tout mon cœur) et l'exigence de réciprocité — Molière montre qu'Alceste lui-même ne peut aimer sans calculer.", ['antithèse', 'cœur', 'retour', 'réciprocité', 'don', 'paradoxe']),
    ],
  },

  'GT-557': {
    texte: `ORGON
Ah ! si vous aviez vu comme j'ai rencontré
Sur le chemin, un homme... un homme... c'est Tartuffe !
Un homme tout couvert de modestie et d'ardeur,
Qui devant tout le monde et se mettant à genoux,
Priait Dieu d'une voix douce et posée et forte,
Attirant à soi tous les yeux du couvent entier.
Je lui faisais la charité, mais lui, avec décence,
En prenait la moitié qu'il rendait aux pauvres.
CLÉANTE
Hé bien, mon frère ?
ORGON
Mon frère, c'est un homme du ciel.
L'amour qu'il a pour Dieu le fait haïr la terre.
Tout lui paraît péché. La moindre chose l'offense.
DORINE
Et Madame a eu la fièvre toute une nuit.
ORGON
Ah ! pauvre homme !
DORINE
Et la fièvre l'a fort tourmentée.
ORGON
Tartuffe ?
DORINE
Non, Madame, Monsieur. La nuit a été rude.
ORGON
Ah ! pauvre homme !`,
    contexte: "Orgon raconte sa rencontre avec Tartuffe et manifeste son aveuglement absolu — la scène installe l'hypocrisie religieuse et sa réception naïve comme moteur comique de la pièce.",
    attendus: [
      att('Ironie', '« Ah ! pauvre homme ! »', "La réplique d'Orgon destinée à Tartuffe alors que Dorine parle de Madame crée un décalage comique irrésistible : l'ironie dramatique révèle l'aveuglement total d'Orgon au spectateur.", ['ironie', 'orgon', 'tartuffe', 'aveuglement', 'décalage', 'comique']),
      att('Hyperbole', '« c\'est un homme du ciel. L\'amour qu\'il a pour Dieu le fait haïr la terre »', "L'hyperbole dévotieuse d'Orgon élève Tartuffe au-dessus de la condition humaine : en l'opposant au monde, il abdique son jugement et se rend entièrement manipulable.", ['hyperbole', 'ciel', 'terre', 'mystique', 'jugement', 'manipulable']),
      att('Registre comique', '« Non, Madame, Monsieur »', "La correction de Dorine produit le quiproquo comique central : Orgon et la servante parlent de personnes différentes — le rire expose par contraste la monomanie d'Orgon.", ['comique', 'quiproquo', 'dorine', 'monomanie', 'rire', 'exposition']),
      att('Antithèse', '« priait Dieu d\'une voix douce et posée et forte »', "La description d'une voix simultanément douce et forte révèle la maîtrise rhétorique de Tartuffe : l'antithèse implicite signale au spectateur l'artificialité de cette dévotion calculée.", ['antithèse', 'voix', 'douce', 'forte', 'artificialité', 'dévotion']),
    ],
  },

  'GT-558': {
    texte: `DORINE
Un homme qui se met à genoux pour vous faire hommage,
Et qui de vos beautés va partout se vanter ;
Un homme de bien, un homme de mérite,
Que verrait-on partout par ses pieuses œuvres ;
Et si vous l'épousez, de quoi vous plaignez-vous ?
MARIANE
Mais Tartuffe est un homme... Ciel ! puis-je le dire ?
DORINE
Quoi donc ?
MARIANE
C'est un homme dont j'ai horreur.
DORINE
Et vous épouserez, s'il le faut, cet homme-là ?
MARIANE
Que puis-je faire ? Mon père y consent.
DORINE
Votre père est un sot, et vous l'êtes aussi
De recevoir de lui cette loi tyrannique.
MARIANE
Ma Dorine, des droits que mon père possède
Sur moi...
DORINE
Non, non. On vous mariera contre votre gré ;
Parce qu'un sot s'en mêle, il faudra l'endurer.`,
    contexte: "Dorine exhorte Mariane à résister au mariage forcé avec Tartuffe — la servante incarne le bon sens face à la faiblesse de Mariane et à l'autorité dévoyée d'Orgon.",
    attendus: [
      att('Ironie', '« Un homme de bien, un homme de mérite »', "L'ironie de Dorine retourne contre Tartuffe ses propres attributs mondains : en les répétant trop, elle révèle leur vacuité et expose la fausse réputation de l'imposteur.", ['ironie', 'dorine', 'mérite', 'fausse', 'réputation', 'imposteur']),
      att('Antithèse', '« Mon père y consent »', "La soumission de Mariane (mon père y consent) opposée au franc-parler de Dorine (Votre père est un sot) souligne l'opposition des perspectives : le comique tient à la liberté de parole de la servante face à l'autorité aveuglée.", ['antithèse', 'père', 'soumission', 'franc-parler', 'dorine', 'autorité']),
      att('Registre comique', '« Votre père est un sot, et vous l\'êtes aussi »', "La brutalité comique de Dorine produit un effet libérateur : la servante dit ce que le spectateur pense — Molière délègue à elle la lucidité que ni Orgon ni Mariane ne possèdent.", ['comique', 'sot', 'dorine', 'libérateur', 'lucidité', 'molière']),
      att('Gradation', '« C\'est un homme dont j\'ai horreur »', "La gradation de l'aveu de Mariane — de la réticence (puis-je le dire ?) à l'horreur déclarée — révèle la profondeur de son refus et l'oppression que lui impose ce mariage arrangé.", ['gradation', 'horreur', 'réticence', 'refus', 'oppression', 'mariage']),
    ],
  },

  'GT-559': {
    texte: `ELMIRE
C'est assez. Je vais vous demander un aveu.
TARTUFFE
Madame, le bonheur de vous voir ici
Trouble un peu mes sens, et je dois avouer
Que mon cœur ne résiste point à vos appas.
Le ciel n'a pas fait mes yeux pour regarder
Les charmes que le vôtre expose à découvert.
ELMIRE
Et votre amour… il ne s'arrête pas là ?
TARTUFFE
Non, Madame. Il me faut vous avouer encor
Que l'amour que j'ai pour vos célestes charmes
N'est rien moins qu'un amour qui soit purement humain.
J'aime la sainte ardeur que les dieux ont mis en vous.
ELMIRE
La dévotion que vous prêchez aux autres
Vous sert donc ici, Monsieur, à séduire les femmes ?
TARTUFFE
Si la dévotion peut nuire aux intérêts du cœur,
Ce sont là de ces vœux qui ne coûtent pas cher.`,
    contexte: "Elmire tend le piège à Tartuffe en l'incitant à se dévoiler — l'hypocrite mêle langage religieux et déclaration amoureuse, révélant la duplicité au fondement de sa personnalité.",
    attendus: [
      att('Ironie', '« l\'amour que j\'ai pour vos célestes charmes / N\'est rien moins qu\'un amour qui soit purement humain »', "L'ironie de Tartuffe est involontairement révélatrice : en habillant le désir charnel de vocabulaire mystique, il expose le mécanisme de toute son hypocrisie.", ['ironie', 'célestes', 'charmes', 'humain', 'hypocrisie', 'désir']),
      att('Antithèse', '« La dévotion que vous prêchez aux autres / Vous sert donc ici, Monsieur, à séduire les femmes »', "L'antithèse entre prédication publique et séduction privée formulée par Elmire démasque Tartuffe : la religion est un instrument de domination, non une conviction sincère.", ['antithèse', 'dévotion', 'séduire', 'religion', 'instrument', 'domination']),
      att('Registre comique', '« Ce sont là de ces vœux qui ne coûtent pas cher »', "La formule cynique de Tartuffe provoque le rire tout en révélant sa lucidité sur lui-même : le comique de caractère atteint son sommet quand le personnage se trahit lui-même.", ['comique', 'vœux', 'cynique', 'lucidité', 'trahison', 'caractère']),
      att('Apostrophe', '« Madame, le bonheur de vous voir ici »', "Tartuffe commence par l'apostrophe respectueuse pour mieux masquer ses intentions : la politesse excessive signale la manipulation — le spectateur perçoit l'écart entre les mots et les actes.", ['apostrophe', 'madame', 'politesse', 'manipulation', 'intention', 'masque']),
    ],
  },

  'GT-560': {
    texte: `DOM JUAN
Quoi ? tu veux qu'on se lie à demeurer au premier objet qui nous prend, qu'on renonce au monde pour lui, et qu'on n'ait plus d'yeux pour personne ? La belle chose que de vouloir se piquer d'un faux honneur d'être fidèle, de s'ensevelir pour toujours dans une passion, et d'être mort dès sa jeunesse à toutes les autres beautés qui nous peuvent frapper les yeux ! Non, non : la constance n'est bonne que pour des ridicules ; toutes les belles ont droit de nous charmer, et l'avantage d'être rencontrée la première ne doit point dérober aux autres les justes prétentions qu'elles ont toutes sur nos cœurs. Pour moi, la beauté me ravit partout où je la trouve, et je cède facilement à cette douce violence dont elle nous entraîne.
SGANARELLE
Morbleu ! c'est parler ; il n'y a pas moyen de répondre à cela.`,
    contexte: "Dom Juan expose sa philosophie libertine à Sganarelle — l'inconstance érigée en système s'oppose à la fidélité comme « faux honneur » ; Molière montre le vertige de la liberté radicale.",
    attendus: [
      att('Antithèse', '« La belle chose que de vouloir se piquer d\'un faux honneur d\'être fidèle »', "L'antithèse entre fidélité (présentée comme faux honneur) et liberté libertine déstabilise la morale conventionnelle : Dom Juan retourne les valeurs et fait de l'inconstance une vertu philosophique.", ['antithèse', 'fidèle', 'faux', 'honneur', 'liberté', 'libertine']),
      att('Énumération', '« toutes les belles ont droit de nous charmer »', "L'énumération indéfinie (toutes) traduit l'universalisme du désir de Dom Juan : chaque femme est légitime dans ses prétentions — la logique libertine se fonde paradoxalement sur une forme d'égalitarisme amoureux.", ['énumération', 'toutes', 'belles', 'désir', 'universalisme', 'égalitarisme']),
      att('Métaphore', '« cette douce violence dont elle nous entraîne »', "La beauté métaphorisée en violence douce condense la conception libertine du désir : l'attraction est irrésistible et absout Dom Juan de toute responsabilité morale dans ses conquêtes.", ['métaphore', 'douce', 'violence', 'irrésistible', 'libertin', 'responsabilité']),
      att('Registre comique', '« Morbleu ! c\'est parler ; il n\'y a pas moyen de répondre à cela »', "La capitulation rhétorique de Sganarelle produit l'effet comique : le valet du bon sens est désarmé par la sophistique de son maître — Molière montre la puissance séductrice du discours libertin.", ['comique', 'sganarelle', 'capitulation', 'sophistique', 'discours', 'libertin']),
    ],
  },

  'GT-562': {
    texte: `LA FLÈCHE
Voilà qui est fort impertinent. C'est ainsi qu'il faut traiter les gens.
HARPAGON
La Flèche, sortez d'ici tout à l'heure, et qu'on ne réplique pas. Allons, que l'on détale.
LA FLÈCHE
(à part)
Je ne vis jamais rien de si méchant que ce maudit vieillard, et je pense, sauf correction, qu'il a le diable au corps.
HARPAGON
Qu'est-ce que tu marmotes là ?
LA FLÈCHE
Pourquoi me chassez-vous ?
HARPAGON
C'est bien à toi, pendard, à me demander des raisons ! Sors vite, que je ne t'assomme.
LA FLÈCHE
(à part)
Quel chien de maître !
HARPAGON
Tu m'as volé.
LA FLÈCHE
Que vous aurais-je volé ?
HARPAGON
Va-t'en, te dis-je ; et garde que tu ne remportes rien.`,
    contexte: "Harpagon chasse La Flèche avec une méfiance paranoïaque — la scène d'exposition installe l'avarice comme obsession tyrannique qui détruit toute relation humaine.",
    attendus: [
      att('Registre comique', '« Je ne vis jamais rien de si méchant que ce maudit vieillard »', "La tirade de La Flèche en aparté produit la complicité comique avec le spectateur : le valet dit tout haut ce que le public pense — la méchanceté d'Harpagon est ainsi jugée à chaud.", ['comique', 'aparté', 'vieillard', 'complicité', 'jugement', 'méchanceté']),
      att('Hyperbole', '« je pense, sauf correction, qu\'il a le diable au corps »', "L'hyperbole diabolique de La Flèche amplifie comiquement l'avarice d'Harpagon : la comparaison avec le diable signale que l'obsession de l'argent dénature l'humanité même.", ['hyperbole', 'diable', 'avarice', 'obsession', 'humanité', 'dénature']),
      att('Antithèse', '« Tu m\'as volé » / « Que vous aurais-je volé ? »', "L'antithèse entre l'accusation d'Harpagon et la défense de La Flèche révèle la paranoïa du vieillard : il voit le vol partout — l'argent déforme toute perception du réel.", ['antithèse', 'volé', 'accusation', 'paranoïa', 'argent', 'perception']),
      att('Gradation', '« Sors vite, que je ne t\'assomme »', "La gradation des menaces d'Harpagon (chasser → frapper) illustre la violence latente de l'avarice : la peur du vol transforme le maître en tyran domestique potentiellement dangereux.", ['gradation', 'sors', 'assomme', 'violence', 'avarice', 'tyran']),
    ],
  },

  'GT-563': {
    texte: `Je fais souvent ce rêve étrange et pénétrant
D'une femme inconnue, et que j'aime, et qui m'aime,
Et qui n'est, chaque fois, ni tout à fait la même
Ni tout à fait une autre, et m'aime et me comprend.
Car elle me comprend, et mon cœur, transparent
Pour elle seule, hélas ! cesse d'être un problème
Pour elle seule, et les moiteurs de mon front blême,
Elle seule les sait rafraîchir, en pleurant.
Est-elle brune, blonde ou rousse ? — Je l'ignore.
Son nom ? Je me souviens qu'il est doux et sonore
Comme ceux des aimés que la Vie exila.
Son regard est pareil au regard des statues,
Et, pour sa voix, lointaine, et calme, et grave, elle a
L'inflexion des voix chères qui se sont tues.`,
    contexte: "« Mon rêve familier » (Poèmes saturniens, 1866) — Verlaine évoque l'idéal féminin insaisissable dans un sonnet fondateur du lyrisme mélancolique de l'œuvre.",
    attendus: [
      att('Anaphore', '« Pour elle seule »', "L'anaphore de « Pour elle seule » en tête de deux hémistiches consécutifs crée un effet d'exclusive absolue : la femme rêvée est la seule à comprendre le moi poétique — l'insistance traduit la solitude essentielle du sujet verlainien.", ['anaphore', 'elle', 'seule', 'solitude', 'compréhension', 'moi']),
      att('Antithèse', '« ni tout à fait la même / Ni tout à fait une autre »', "L'antithèse entre identité et altérité capture l'insaisissabilité de la femme rêvée : elle est à la fois familière et étrangère — Verlaine formule poétiquement l'impossible fusion de l'idéal et du réel.", ['antithèse', 'même', 'autre', 'insaisissable', 'idéal', 'fusion']),
      att('Registre lyrique', '« L\'inflexion des voix chères qui se sont tues »', "Le vers final concentre la mélancolie verlainienne : la voix aimée est celle des morts — le lyrisme du souvenir et du deuil donne à ce rêve une dimension funèbre et universelle.", ['lyrique', 'voix', 'tues', 'mélancolie', 'deuil', 'souvenir']),
      att('Métaphore', '« Son regard est pareil au regard des statues »', "La comparaison filée en métaphore — le regard de la femme assimilé à celui des statues — traduit la distance irréductible entre l'idéal et la réalité : l'aimée est belle et froide, présente et absente à la fois.", ['métaphore', 'regard', 'statues', 'froideur', 'distance', 'idéal']),
    ],
  },

  'GT-564': {
    texte: `Il pleure dans mon cœur
Comme il pleut sur la ville.
Quelle est cette langueur
Qui pénètre mon cœur ?
Ô bruit doux de la pluie
Par terre et sur les toits !
Pour un cœur qui s'ennuie,
Ô le chant de la pluie !
Il pleure sans raison
Dans ce cœur qui s'écœure.
Quoi ! nulle trahison ?
Ce deuil est sans raison.
C'est bien la pire peine
De ne savoir pourquoi,
Sans amour et sans haine,
Mon cœur a tant de peine.`,
    contexte: "« Ariettes oubliées III » (Romances sans paroles, 1874) — Verlaine traduit une tristesse sans cause en une musique impressionniste qui dissout le sens dans la sensation.",
    attendus: [
      att('Anaphore', '« Il pleure dans mon cœur / Comme il pleut sur la ville »', "L'anaphore du verbe pleurer/pleuvoir fusionne l'état intérieur et le paysage extérieur : la pluie n'est pas une simple métaphore mais une correspondance sensorielle qui dissout la frontière entre le moi et le monde.", ['anaphore', 'pleure', 'pleut', 'correspondance', 'intérieur', 'extérieur']),
      att('Antithèse', '« Sans amour et sans haine »', "L'antithèse privative (sans amour / sans haine) définit la peine verlainienne en creux : ni la passion ni le ressentiment ne justifient cette tristesse — son absence de cause la rend plus profonde et plus universelle.", ['antithèse', 'amour', 'haine', 'cause', 'tristesse', 'universelle']),
      att('Registre lyrique', '« C\'est bien la pire peine / De ne savoir pourquoi »', "L'aveu lyrique du « je » verlainien identifie la souffrance indicible comme la plus grande : l'impossibilité de nommer la peine est elle-même une forme de deuil poétique.", ['lyrique', 'peine', 'savoir', 'indicible', 'deuil', 'poétique']),
      att('Métaphore', '« Ô bruit doux de la pluie »', "La pluie devient métaphore musicale — « chant de la pluie » — qui transforme la mélancolie en expérience esthétique : Verlaine inaugure le poème comme musique impressionniste qui agit sur les sens avant d'agir sur l'intellect.", ['métaphore', 'pluie', 'chant', 'musique', 'impressionniste', 'mélancolie']),
    ],
  },

  'GT-566': {
    texte: `Demain, dès l'aube, à l'heure où blanchit la campagne,
Je partirai. Vois-tu, je sais que tu m'attends.
J'irai par la forêt, j'irai par la montagne.
Je ne puis demeurer loin de toi plus longtemps.
Je marcherai les yeux fixés sur mes pensées,
Sans rien voir au dehors, sans entendre aucun bruit,
Seul, inconnu, le dos courbé, les mains croisées,
Triste, et le jour pour moi sera comme la nuit.
Je ne regarderai ni l'or de soir qui tombe,
Ni les voiles au loin descendant vers Harfleur,
Et quand j'arriverai, je mettrai sur ta tombe
Un bouquet de houx vert et de bruyère en fleur.`,
    contexte: "« Demain, dès l'aube » (Les Contemplations, IV, 14, 1856) — Hugo compose un poème de deuil pour Léopoldine, dévoilant seulement au dernier vers que la destination est une tombe.",
    attendus: [
      att('Chute', '« je mettrai sur ta tombe / Un bouquet de houx vert et de bruyère en fleur »', "La chute du poème révèle que le voyage est un pèlerinage funèbre : le lecteur réinterprète rétrospectivement toutes les images — la structure de dévoilement tardif est le procédé maître de Hugo.", ['chute', 'tombe', 'houx', 'bruyère', 'deuil', 'révélation']),
      att('Anaphore', '« J\'irai par la forêt, j\'irai par la montagne »', "L'anaphore de « j'irai » traduit la détermination du père en deuil : la répétition du verbe de mouvement donne un rythme de marche irrésistible qui mime la résolution douloureuse du pèlerinage.", ['anaphore', 'irai', 'détermination', 'mouvement', 'rythme', 'pèlerinage']),
      att('Registre pathétique', '« Seul, inconnu, le dos courbé, les mains croisées »', "La litanie des épithètes du marcheur solitaire traduit la dépossession du père endeuillé : chaque mot ajoute une couche d'abandon — la posture dit le deuil que les mots n'osent pas encore nommer.", ['pathétique', 'seul', 'inconnu', 'dépossession', 'abandon', 'deuil']),
      att('Antithèse', '« le jour pour moi sera comme la nuit »', "L'antithèse jour/nuit traduit l'insensibilité du père à tout ce qui n'est pas son deuil : la nature lumineuse n'existe plus pour un cœur replié sur sa perte — Hugo inscrit la douleur dans le cosmos entier.", ['antithèse', 'jour', 'nuit', 'insensibilité', 'nature', 'cosmos']),
    ],
  },

  'GT-568': {
    texte: `Il vit, il réfléchit. Depuis longtemps il avait renoncé à la femme et au monde. Il avait pris Esmeralda en haine, en pitié ; et depuis longtemps il ne regardait à ses pieds ce bel être pleurant et tremblant sous sa puissance que comme quelque chose de brisé et de perdu, comme un oiseau tombé du nid. Toute sa pensée avait abouti à ce résultat : qu'il était malheureux et qu'elle était malheureuse. Les deux malédictions se touchaient.
Il se dit que c'était là deux misères qui pouvaient peut-être se réchauffer l'une l'autre. Il sourit amèrement. Cette idée lui fit honte. Elle était si belle ! Il ferma les yeux pour ne plus la voir. Puis, comme pour se punir, il regarda fixement, en silence, la jeune fille enchaînée sous ses pieds.`,
    contexte: "Monologue intérieur de Claude Frollo face à Esmeralda captive — la fascination morbide du prêtre révèle la destruction de l'âme par la passion réprimée.",
    attendus: [
      att('Antithèse', '« qu\'il était malheureux et qu\'elle était malheureuse »', "L'antithèse symétrique des deux malheurs — Frollo et Esmeralda — révèle la perversité tragique de leur lien : la passion du prêtre, au lieu d'unir, crée deux victimes d'une même malédiction.", ['antithèse', 'malheureux', 'malheureuse', 'perversité', 'passion', 'malédiction']),
      att('Métaphore', '« comme un oiseau tombé du nid »', "La métaphore de l'oiseau blessé traduit la fragilité d'Esmeralda vue par Frollo : mais elle révèle aussi qu'il est lui-même son prédateur — la pitié cache une culpabilité inavouée.", ['métaphore', 'oiseau', 'nid', 'fragilité', 'prédateur', 'culpabilité']),
      att('Registre pathétique', '« ce bel être pleurant et tremblant sous sa puissance »', "Le registre pathétique souligne l'asymétrie du pouvoir entre Frollo et Esmeralda : la beauté soumise à la puissance est une image de tyrannie qui sollicite la compassion du lecteur.", ['pathétique', 'pleurant', 'tremblant', 'puissance', 'tyrannie', 'asymétrie']),
      att('Gradation', '« Il sourit amèrement. Cette idée lui fit honte. Elle était si belle ! Il ferma les yeux »', "La gradation des réactions de Frollo — sourire amer, honte, beauté fulgurative, fermeture des yeux — mime les convulsions d'une conscience qui lutte contre son propre désir sans pouvoir le vaincre.", ['gradation', 'sourire', 'honte', 'conscience', 'lutte', 'désir']),
    ],
  },

  'GT-570': {
    texte: `Comme je descendais des Fleuves impassibles,
Je ne me sentis plus guidé par les haleurs :
Des Peaux-Rouges criards les avaient pris pour cibles,
Les ayant cloués nus aux poteaux de couleurs.
J'étais insoucieux de tous les équipages,
Porteur de blés flamands ou de cotons anglais.
Quand avec mes haleurs ont fini ces tapages,
Les Fleuves m'ont laissé descendre où je voulais.
Dans les clapotements furieux des marées,
Moi, l'autre hiver, plus sourd que les cerveaux d'enfants,
Je courus ! Et les Péninsules démarrées
N'ont pas subi tohu-bohus plus triomphants.`,
    contexte: "Ouverture du « Bateau ivre » (1871) — Rimbaud crée une voix poétique radicalement libre, affranchie de toute tutelle humaine, pour explorer les limites du langage et de l'expérience poétique.",
    attendus: [
      att('Métaphore', '« Je ne me sentis plus guidé par les haleurs »', "L'affranchissement des haleurs est la métaphore centrale du poème : le bateau (alias le poète) rompt avec toutes les tutelles — sociales, morales, poétiques — pour s'abandonner au courant de l'inspiration libre.", ['métaphore', 'haleurs', 'affranchissement', 'tutelle', 'poète', 'inspiration']),
      att('Registre épique', '« N\'ont pas subi tohu-bohus plus triomphants »', "Le registre épique de la comparaison avec les péninsules à la dérive amplifie le voyage du bateau à l'échelle géologique : Rimbaud inscrit la traversée poétique dans une cosmogonie démesurée.", ['épique', 'péninsules', 'triomphants', 'voyage', 'cosmogonie', 'démesure']),
      att('Antithèse', '« Comme je descendais des Fleuves impassibles »', "L'antithèse entre la majuscule solennelle des Fleuves (impassibles, éternels) et la fragilité du bateau pose l'enjeu du texte : l'individu face à l'immensité — Rimbaud ouvre la poésie moderne sur le vertige du sujet.", ['antithèse', 'fleuves', 'impassibles', 'fragilité', 'individu', 'moderne']),
      att('Champ lexical', '« clapotements furieux des marées »', "Le champ lexical du mouvement violent (clapotements furieux) traduit l'exaltation de la liberté retrouvée : Rimbaud crée une langue nouvelle pour dire l'expérience inouïe de l'ivresse poétique.", ['champ', 'lexical', 'furieux', 'clapotements', 'liberté', 'ivresse']),
    ],
  },

  'GT-573': {
    texte: `Ainsi, toujours poussés vers de nouveaux rivages,
Dans la nuit éternelle emportés sans retour,
Ne pourrons-nous jamais sur l'océan des âges
Jeter l'ancre un seul jour ?
Ô lac ! l'année à peine a fini sa carrière,
Et près des flots chéris qu'elle devait revoir,
Regarde ! je viens seul m'asseoir sur cette pierre
Où tu la vis s'asseoir !
Ainsi tu te brisais sur les rochers sonores ;
Ainsi le vent jetait l'écume de tes flots ;
Sur ses pieds adorés tombaient tes dernières aurores :
Elle était là ; j'entendais ses pas.
Ô temps ! suspends ton vol ; et vous, heures propices,
Suspendez votre cours ;
Laissez-nous savourer les rapides délices
Des plus beaux de nos jours !`,
    contexte: "« Le Lac » (Méditations poétiques, 1820) — Lamartine invoque le souvenir d'une femme aimée disparue et interpelle le temps qui emporte tout, fondant le lyrisme romantique du « je » mélancolique.",
    attendus: [
      att('Apostrophe', '« Ô lac ! l\'année à peine a fini sa carrière »', "Lamartine interpelle le lac comme témoin muet et fidèle : l'apostrophe personnifie la nature en confident — elle reçoit la plainte du poète et garde la mémoire de la femme aimée.", ['apostrophe', 'lac', 'témoin', 'nature', 'mémoire', 'aimée']),
      att('Anaphore', '« Ainsi tu te brisais sur les rochers sonores »', "L'anaphore de « Ainsi » relie la continuité des éléments naturels à la discontinuité du souvenir humain : la nature est éternelle, l'amour est mortel — la répétition mime la cadence mélancolique du temps.", ['anaphore', 'ainsi', 'nature', 'souvenir', 'mortel', 'mélancolie']),
      att('Apostrophe', '« Ô temps ! suspends ton vol »', "La deuxième apostrophe, au temps lui-même, est l'un des vers les plus célèbres du romantisme : Lamartine formule l'impossible désir de fixer le bonheur — le lyrisme atteint ici sa tension maximale.", ['apostrophe', 'temps', 'vol', 'bonheur', 'romantisme', 'lyrisme']),
      att('Métaphore', '« sur l\'océan des âges / Jeter l\'ancre un seul jour »', "La métaphore marine de l'existence comme traversée océanique condense la philosophie temporelle de Lamartine : l'être humain est un voyageur sans ancrage face à l'éternité des flots.", ['métaphore', 'océan', 'âges', 'ancre', 'voyageur', 'éternité']),
    ],
  },

  'GT-575': {
    texte: `Pangloss enseignait la métaphysico-théologo-cosmolonigologie. Il prouvait admirablement qu'il n'y a point d'effet sans cause, et que, dans ce meilleur des mondes possibles, le château de monseigneur le baron était le plus beau des châteaux, et madame la meilleure des baronnes possibles.
— Il est démontré, disait-il, que les choses ne peuvent être autrement : car tout étant fait pour une fin, tout est nécessairement pour la meilleure fin. Remarquez bien que les nez ont été faits pour porter des lunettes ; aussi avons-nous des lunettes. Les jambes sont visiblement instituées pour être chaussées, et nous avons des chausses.
Candide, qui avait beaucoup d'attention, croyait innocemment tout ce que son maître lui enseignait.`,
    contexte: "Voltaire présente Pangloss et sa philosophie optimiste par l'ironie et l'absurde — l'anti-philosophe accumule les syllogismes boiteux sur le « meilleur des mondes ».",
    attendus: [
      att('Ironie', '« la métaphysico-théologo-cosmolonigologie »', "Le néologisme grotesque de Voltaire tourne en dérision la philosophie leibnizienne : l'assemblage de préfixes savants se termine par « nigologie » (niaiserie) — l'ironie désintègre le sérieux académique.", ['ironie', 'néologisme', 'philosophie', 'leibniz', 'dérision', 'absurde']),
      att('Registre satirique', '« les nez ont été faits pour porter des lunettes »', "Le syllogisme absurde de Pangloss parodie le raisonnement téléologique : Voltaire ridiculise l'argument du dessein divin en le poussant à l'absurde — la satire philosophique atteint son comble.", ['satirique', 'syllogisme', 'nez', 'lunettes', 'téléologique', 'parodie']),
      att('Antithèse', '« ce meilleur des mondes possibles »', "La formule leibnizienne répétée constitue l'antithèse permanente entre la théorie optimiste et la réalité catastrophique — Voltaire la vide progressivement de son sens au fil du conte.", ['antithèse', 'meilleur', 'mondes', 'optimisme', 'réalité', 'catastrophe']),
      att('Registre comique', '« Candide, qui avait beaucoup d\'attention, croyait innocemment tout ce que son maître lui enseignait »', "L'innocence de Candide est le ressort comique fondamental du conte : sa crédulité naïve permet à Voltaire de mettre en scène l'écart entre théories consolantes et brutalité du monde réel.", ['comique', 'candide', 'innocence', 'crédulité', 'naïve', 'monde']),
    ],
  },

  'GT-576': {
    texte: `Rodolphe, le soir, pensait à Mme Bovary.
— Il faut que je l'aie, dit-il en souriant de pitié.
Et aussitôt, il raisonna les obstacles :
— Deux yeux qui supplient, une main qu'on serrait dans un bal, l'enfant dont on voit la robe. C'est trop bête ! Elle s'ennuie, elle coquette, elle a besoin d'air ; une femme de province qui se croit faite pour les grandeurs. Voilà tout. Elle a quelque tendresse pour moi, j'en suis sûr. Mais comment la prendre ?
Il revit Emma dans la salle, habillée comme il l'avait vue, et il la déshabilla.
— Comment la prendre ? reprit-il.
Il compta les obstacles : sa timidité, son ennui, son manque d'argent. Puis il pensa à sa maison, à ses champs, à ses mœurs de chasseur, à ses domestiques. Mais, d'un autre côté, il y a toujours moyen de faire tomber une femme dans ses bras.`,
    contexte: "Rodolphe calcule sa stratégie de séduction après avoir rencontré Emma — Flaubert utilise le style indirect libre pour exposer le cynisme masculin et l'aveuglement romantique d'Emma.",
    attendus: [
      att('Ironie', '« Il faut que je l\'aie, dit-il en souriant de pitié »', "L'ironie flaubertienne est mordante : Rodolphe « sourit de pitié » pour Emma alors qu'il la méprise — le style indirect libre expose le cynisme que la jeune femme ne voit pas.", ['ironie', 'pitié', 'mépris', 'cynisme', 'flaubert', 'indirect']),
      att('Registre réaliste', '« Elle s\'ennuie, elle coquette, elle a besoin d\'air »', "L'énumération réaliste de Rodolphe réduit Emma à des stéréotypes de la femme de province : Flaubert montre que la séductrice rêvée d'Emma n'est pour lui qu'un objet à conquérir.", ['réaliste', 'ennui', 'coquette', 'province', 'stéréotype', 'objet']),
      att('Style indirect libre', '« Comment la prendre ? reprit-il »', "La question rhétorique répétée en style indirect libre mime le raisonnement froid du séducteur : Flaubert pénètre dans la pensée du personnage sans médiation narrative — le lecteur entend la voix intérieure du calculateur.", ['indirect', 'libre', 'question', 'séducteur', 'calcul', 'pensée']),
      att('Antithèse', '« sa timidité, son ennui, son manque d\'argent »', "La liste des obstacles que présente Emma est aussitôt balayée par Rodolphe : l'antithèse entre les obstacles et la certitude finale révèle l'arrogance du séducteur habitué à la conquête facile.", ['antithèse', 'obstacles', 'timidité', 'ennui', 'arrogance', 'conquête']),
    ],
  },

  'GT-577': {
    texte: `Emma était devant lui, penchée sur l'autre bord, les yeux perdus dans la campagne. Elle regardait les arbres. Le vent soufflait fort. Elle tourna la tête et aperçut Charles qui s'essuyait les mains. Elle le regarda d'un air ennuyé. Elle avait voulu voyager, elle avait voulu mourir. Elle était maintenant à la fenêtre, à regarder les corneilles dans les arbres.
Elle pensait quelquefois que c'étaient là pourtant les plus beaux jours de sa vie, la lune de miel, comme on disait. Pour en goûter la douceur, il eût fallu, sans doute, s'en aller vers ces pays à noms sonores où les lendemains de mariage ont de plus suaves paresses. Dans des chaises de poste, sous des stores de soie bleue, on monte au pas des routes escarpées, écoutant la chanson du postillon qui se répète dans la montagne avec les clochettes des chèvres et le bruit sourd de la cascade.`,
    contexte: "Emma en voyage de noces prend conscience de la déception du mariage — Flaubert expose le bovarysme par le contraste entre les rêves d'Emma et la réalité terne de sa vie conjugale.",
    attendus: [
      att('Style indirect libre', '« Elle avait voulu voyager, elle avait voulu mourir »', "Le style indirect libre fusionne la voix du narrateur et celle d'Emma : la juxtaposition de désirs contradictoires (voyager/mourir) révèle le vide existentiel du bovarysme dès la lune de miel.", ['indirect', 'libre', 'voyager', 'mourir', 'bovarysme', 'vide']),
      att('Antithèse', '« les plus beaux jours de sa vie »', "L'ironie flaubertienne est cinglante : Emma nomme la lune de miel « les plus beaux jours » tout en regardant des corneilles d'un air ennuyé — l'antithèse entre le discours convenu et la réalité intérieure est le moteur du roman.", ['antithèse', 'beaux', 'ennui', 'ironie', 'convention', 'réalité']),
      att('Registre lyrique', '« Dans des chaises de poste, sous des stores de soie bleue »', "Le registre lyrique du rêve d'Emma contraste avec la platitude du présent : la prose flaubertienne adopte la couleur romanesque des fantasmes d'Emma pour mieux en montrer l'inaccessibilité.", ['lyrique', 'chaises', 'soie', 'rêve', 'romanesque', 'inaccessible']),
      att('Champ lexical', '« pays à noms sonores »', "Le champ lexical de l'exotisme idéal (sonores, suaves) construit le voyage fantasmé d'Emma : Flaubert emprunte le style du roman sentimental pour en montrer le pouvoir d'illusion et de déréalisation.", ['champ', 'lexical', 'sonores', 'exotisme', 'fantasme', 'illusion']),
    ],
  },

  'GT-578': {
    texte: `Maheu, sans parler, ramassa la chandelle et examina les roches. Il tâta le toit, sentit les parois. Étienne regardait, cherchait aussi, tâchait de comprendre.
— C'est trop serré par ici, dit Maheu. Faut creuser encore.
— Mais si ça s'effondre ? demanda Étienne.
Maheu haussa les épaules.
— Ça s'effondre tout de même.
Il y avait dans le tailleur un bruit sourd, continu, le craquement du bois, l'égouttement de l'eau, les souffles lointains de la mine. La veine de charbon brillait devant eux, noire et grasse, sur la paroi grise du rocher. Tout au fond, on entendait le galop des chevaux et les cris des galibot. Et la chaleur montait, étouffante, avec une odeur de sueur et de vieux bois. Étienne se demanda comment les hommes pouvaient travailler là-dedans sans mourir.`,
    contexte: "Descente d'Étienne dans la mine et découverte des conditions de travail — Zola installe le naturalisme par l'accumulation de détails sensoriels qui rendent la misère ouvrière palpable.",
    attendus: [
      att('Registre réaliste', '« Ça s\'effondre tout de même »', "La réponse laconique de Maheu traduit la résignation des mineurs face au danger quotidien : Zola montre par le réalisme du dialogue que la mort est banalisée — la misère ouvrière se dit dans l'ellipse.", ['réaliste', 'résignation', 'danger', 'banalisé', 'ouvrier', 'ellipse']),
      att('Champ lexical', '« le craquement du bois, l\'égouttement de l\'eau, les souffles lointains de la mine »', "Le champ lexical des sons de la mine crée une atmosphère oppressive : Zola fait entendre la menace constante par l'accumulation de bruits sourds — le naturalisme transforme le décor en personnage hostile.", ['champ', 'lexical', 'craquement', 'égouttement', 'souffles', 'oppression']),
      att('Gradation', '« La veine de charbon brillait devant eux, noire et grasse, sur la paroi grise du rocher »', "La gradation descriptive oppose la richesse du charbon (brillait) et la laideur du milieu (grise) : Zola dénonce l'exploitation — les hommes extraient la richesse d'un monde qui les consume.", ['gradation', 'charbon', 'brillait', 'noire', 'exploitation', 'richesse']),
      att('Registre pathétique', '« Étienne se demanda comment les hommes pouvaient travailler là-dedans sans mourir »', "Le regard d'Étienne-observateur suscite la compassion du lecteur : sa stupéfaction traduit celle du lecteur bourgeois face aux conditions inhumaines — Zola fait de la sympathie un outil politique et social.", ['pathétique', 'étienne', 'mourir', 'inhumain', 'compassion', 'politique']),
    ],
  },

};
