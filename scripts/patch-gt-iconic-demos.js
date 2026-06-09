/**
 * Remplace les 10 modèles commentaire (extra12) encore en texte template
 * par de vrais extraits + attendus rédigés.
 * Usage: node scripts/patch-gt-iconic-demos.js [--dry]
 */
const fs = require('fs');
const path = require('path');

const DRY = process.argv.includes('--dry');
const JS = path.join(__dirname, '..', 'js');
const FILE = 'data-gtextes-extra12.js';

const PATCHES = {
  'GT-261': {
    titre: 'Alceste et Célimène (II, 1)',
    texte: `Non, non, il ne faut point adoucir les choses, et rien n'est si beau, pour bien parler, que la vérité dont on se fait un honneur ; aussi, je veux qu'on me traite avec une pleine franchise, ou qu'on ne me traite point du tout.`,
    contexte: 'Critique des salons — vérité contre hypocrisie mondaine.',
    attendus: [
      { procede: 'Anaphore', citation: '« Non, non… »', interpretation: "Anaphore : la reprise de « non » affirme l'intransigeance d'Alceste et structure son refus de la flatterie.", keywords: ['anaphore', 'non', 'vérité', 'alceste'] },
      { procede: 'Antithèse', citation: '« adoucir les choses… la vérité »', interpretation: "Antithèse entre adoucissement social et vérité brutale : Molière oppose deux éthiques de la parole.", keywords: ['antithèse', 'vérité', 'hypocrisie', 'parole'] },
      { procede: 'Registre polémique', citation: '« pleine franchise »', interpretation: "Registre polémique : le lexique combatif d'Alceste arme le discours contre les mœurs du salon.", keywords: ['registre', 'polémique', 'franchise', 'misanthrope'] },
    ],
  },
  'GT-262': {
    titre: 'Damis démasque Tartuffe (III, 1)',
    texte: `Oui, je le trahirai, monsieur, je le trahirai, ou que la colère de Dieu m'écrase sur le champ ! Il n'est point ici de crime ou de scélérat que je redoute davantage.`,
    contexte: 'Dénonciation de l\'hypocrisie — courage moral de Damis.',
    attendus: [
      { procede: 'Anaphore', citation: '« je le trahirai… je le trahirai »', interpretation: "Anaphore : Damis répète son serment et marque la fermeté de sa dénonciation.", keywords: ['anaphore', 'trahirai', 'damis', 'serment'] },
      { procede: 'Hyperbole', citation: "« que la colère de Dieu m'écrase »", interpretation: "Hyperbole : l'adjuration divine exagère l'enjeu moral et souligne le courage du personnage.", keywords: ['hyperbole', 'dieu', 'colère', 'courage'] },
      { procede: 'Registre polémique', citation: '« crime ou de scélérat »', interpretation: "Registre polémique : le vocabulaire judiciaire dénonce Tartuffe comme menace morale maximale.", keywords: ['registre', 'polémique', 'scélérat', 'hypocrisie'] },
    ],
  },
  'GT-268': {
    titre: 'Bois mon ami',
    texte: `O bois, mon ami, l'automne tient ses fêtes ;
L'étang voile d'argent sa lisière,
Et tout ce grand silence est paisible au fond des bois.`,
    contexte: 'Poésie du deuil — mémoire, nature et mélancolie.',
    attendus: [
      { procede: 'Apostrophe', citation: '« O bois, mon ami »', interpretation: "Apostrophe : Hugo s'adresse au bois comme à un confident et personnifie la nature.", keywords: ['apostrophe', 'bois', 'ami', 'nature'] },
      { procede: 'Métaphore', citation: "« voile d'argent sa lisière »", interpretation: "Métaphore : l'étang drapé d'argent crée une image visuelle douce qui traduit la mélancolie.", keywords: ['métaphore', 'argent', 'étang', 'mélancolie'] },
      { procede: 'Registre lyrique', citation: '« tout ce grand silence »', interpretation: "Registre lyrique : le silence paisible exprime une subjectivité nostalgique face au temps qui passe.", keywords: ['registre', 'lyrique', 'silence', 'deuil'] },
    ],
  },
  'GT-269': {
    titre: 'Javert se suicide',
    texte: `Il venait de se délivrer, lui, Javert, du rancuneur ; il venait de rendre à autrui le droit de le mépriser et de le fouler aux pieds. Il sentit le vertige de son abîme.`,
    contexte: 'Roman engagé — déchirement moral, chute du personnage.',
    attendus: [
      { procede: 'Anaphore', citation: '« Il venait de… il venait de »', interpretation: "Anaphore : la reprise souligne la double libération impossible de Javert et prépare sa chute.", keywords: ['anaphore', 'javert', 'libération', 'chute'] },
      { procede: 'Métaphore', citation: '« vertige de son abîme »', interpretation: "Métaphore : l'abîme traduit la crise existentielle de Javert face à la pitié reçue.", keywords: ['métaphore', 'abîme', 'vertige', 'crise'] },
      { procede: 'Registre pathétique', citation: '« le droit de le mépriser »', interpretation: "Registre pathétique : la souffrance intérieure de Javert suscite pitié et tragédie morale.", keywords: ['registre', 'pathétique', 'mépris', 'souffrance'] },
    ],
  },
  'GT-273': {
    titre: 'Le Dormeur du val',
    texte: `C'est un trou de verdure où chante une rivière
Accrochant follement aux herbes des haillons
D'argent ; où le soleil, de la montagne fière,
Luit : c'est un petit val, calme et riant.`,
    contexte: 'Poésie mélancolique — nature paisible masquant la mort du soldat.',
    attendus: [
      { procede: 'Champ lexical', citation: '« verdure », « rivière », « val »', interpretation: "Champ lexical de la nature : le décor bucolique installe une atmosphère paisible qui contraste avec la révélation finale.", keywords: ['champ', 'lexical', 'nature', 'verdure'] },
      { procede: 'Métaphore', citation: "« haillons d'argent »", interpretation: "Métaphore : les reflets argentés de la rivière créent une image sensorielle musicale typique de Verlaine.", keywords: ['métaphore', 'argent', 'rivière', 'musicalité'] },
      { procede: 'Registre lyrique', citation: '« calme et riant »', interpretation: "Registre lyrique : l'adjectivation douce traduit une mélancolie voilée caractéristique du poème.", keywords: ['registre', 'lyrique', 'calme', 'mélancolie'] },
    ],
  },
  'GT-274': {
    titre: 'Harmonie du soir',
    texte: `Voici venir les temps où vibrant sur sa tige
Chaque fleur s'évapore ainsi qu'un encensoir ;
Les sons et les parfums tournent en un air confus ;
De l'extase aux vertiges, il n'y a plus de milieu.`,
    contexte: 'Modernité poétique — synesthies, spleen et extase au crépuscule.',
    attendus: [
      { procede: 'Comparaison', citation: "« s'évapore ainsi qu'un encensoir »", interpretation: "Comparaison : la fleur comparée à l'encensoir fusionne parfum et rite, typique de la synesthie baudelairienne.", keywords: ['comparaison', 'encensoir', 'fleur', 'synesthie'] },
      { procede: 'Synesthésie', citation: '« sons et les parfums »', interpretation: "Synesthésie : l'union des sens crée une atmosphère onirique propre à l'esthétique du spleen.", keywords: ['synesthésie', 'sons', 'parfums', 'spleen'] },
      { procede: 'Antithèse', citation: '« extase aux vertiges »', interpretation: "Antithèse : Baudelaire oppose deux états limites du ressenti et abolit toute médiation.", keywords: ['antithèse', 'extase', 'vertige', 'contraste'] },
    ],
  },
  'GT-275': {
    titre: "Camille — « Rome, l'unique objet… » (IV, 2)",
    texte: `Rome, l'unique objet de ma haine et de ma colère,
Rome, à qui tu reproches ma juste inhumanité,
Rome, enfin, qui m'as prise au lieu que je t'aimasse,
Connais le cœur que tu prétends que j'outrage.`,
    contexte: 'Tragédie classique — anaphore, devoir politique et passion.',
    attendus: [
      { procede: 'Anaphore', citation: '« Rome… Rome… Rome »', interpretation: "Anaphore : la reprise de « Rome » martèle la haine politique de Camille et structure le monologue.", keywords: ['anaphore', 'rome', 'haine', 'politique'] },
      { procede: 'Apostrophe', citation: "« Rome, l'unique objet »", interpretation: "Apostrophe : Camille interpelle la cité comme un personnage et dramatise le conflit public.", keywords: ['apostrophe', 'rome', 'camille', 'cité'] },
      { procede: 'Registre tragique', citation: '« ma juste inhumanité »', interpretation: "Registre tragique : l'oxymore moral traduit l'irréductible conflit entre amour et devoir.", keywords: ['registre', 'tragique', 'devoir', 'passion'] },
    ],
  },
  'GT-276': {
    titre: 'Dom Juan et le Pauvre (III, 2)',
    texte: `Que faire ? Je suis donc bien malheureux, s'il n'y a que les misérables et les pauvres qui soient honnêtes gens ! Non, non, je ne veux, et ne puis rien renier de ce que j'ai fait.`,
    contexte: 'Registre comique et philosophique — libertin et morale.',
    attendus: [
      { procede: 'Ironie', citation: "« s'il n'y a que les misérables… honnêtes »", interpretation: "Ironie : Dom Juan retourne la leçon du Pauvre et défend une éthique provocatrice.", keywords: ['ironie', 'pauvre', 'honnête', 'libertin'] },
      { procede: 'Anaphore', citation: '« Non, non, je ne veux »', interpretation: "Anaphore : la négation répétée affirme l'entêtement du personnage et le comique de situation.", keywords: ['anaphore', 'non', 'dom', 'juan'] },
      { procede: 'Registre comique', citation: '« Que faire ? »', interpretation: "Registre comique : l'exclamation ouvre un débat moral sur un ton paradoxal propre à Molière.", keywords: ['registre', 'comique', 'paradoxe', 'moral'] },
    ],
  },
  'GT-283': {
    titre: 'Clair de lune',
    texte: `Votre âme est un paysage choisi
Que vont charmant masques et bergamasques
Jouant du luth et dansant et quasi
Tristes sous leurs déguisements fantasques.`,
    contexte: 'Poésie symboliste — musique, masques et mélancolie voilée.',
    attendus: [
      { procede: 'Métaphore', citation: '« Votre âme est un paysage »', interpretation: "Métaphore : l'âme comparée à un paysage traduit la vision symboliste du monde intérieur.", keywords: ['métaphore', 'âme', 'paysage', 'symbolisme'] },
      { procede: 'Champ lexical', citation: '« masques », « bergamasques », « déguisements »', interpretation: "Champ lexical du théâtre : les masques suggèrent l'artifice social et une tristesse dissimulée.", keywords: ['champ', 'lexical', 'masques', 'théâtre'] },
      { procede: 'Registre lyrique', citation: '« quasi tristes »', interpretation: "Registre lyrique : la litote « quasi tristes » exprime une mélancolie délicate propre à Verlaine.", keywords: ['registre', 'lyrique', 'tristesse', 'litote'] },
    ],
  },
  'GT-284': {
    titre: 'Recueillement',
    texte: `Sois sage, ô ma Douleur, tiens-toi plus rassemblée.
Tu réclamais le Soir ; il descend ; le voici :
Une atmosphère noire amène la paix aux choses,
À l'Homme le silence et le regret.`,
    contexte: 'Poésie du spleen — apaisement nocturne et méditation.',
    attendus: [
      { procede: 'Apostrophe', citation: '« ô ma Douleur »', interpretation: "Apostrophe : Baudelaire personnifie la souffrance et entame un dialogue intérieur apaisé.", keywords: ['apostrophe', 'douleur', 'spleen', 'dialogue'] },
      { procede: 'Personnification', citation: '« le Soir ; il descend »', interpretation: "Personnification : le soir devient un personnage qui répond au désir du poète.", keywords: ['personnification', 'soir', 'descend', 'nuit'] },
      { procede: 'Registre lyrique', citation: '« silence et le regret »', interpretation: "Registre lyrique : la nuit apporte une paix mélancolique où se mêlent recueillement et spleen.", keywords: ['registre', 'lyrique', 'silence', 'regret'] },
    ],
  },
  'GT-265': {
    titre: 'Pyrrhus et Andromaque (I, 4)',
    texte: `Andromaque, il faut que je vous aime,
Et c'est Hector qui m'ordonne de le dire.`,
    contexte: 'Tragédie classique — passion, devoir et conflit politique.',
    attendus: [
      { procede: 'Apostrophe', citation: '« Andromaque, il faut »', interpretation: "Apostrophe : Pyrrhus interpelle Andromaque et dramatise l'aveu amoureux au cœur de la scène.", keywords: ['apostrophe', 'andromaque', 'pyrrhus', 'aveu'] },
      { procede: 'Hyperbole', citation: "« c'est Hector qui m'ordonne »", interpretation: "Hyperbole : l'invocation d'Hector magnifie l'enjeu et mêle amour, mort et politique.", keywords: ['hyperbole', 'hector', 'ordre', 'mort'] },
      { procede: 'Registre tragique', citation: '« il faut que je vous aime »', interpretation: "Registre tragique : la fatalité du désir dépasse les personnages et annonce la catastrophe.", keywords: ['registre', 'tragique', 'fatalité', 'passion'] },
    ],
  },
  'GT-266': {
    titre: 'Combat et mort du Comte (I, 4)',
    texte: `Ô rage ! Ô désespoir ! Ô vieil homme forcé !
Et toi, le dernier espoir de ma race,
Mon fils, mon fils unique, témoin du jour et de ma honte !`,
    contexte: 'Registre pathétique — honneur blessé, vengeance et filiation.',
    attendus: [
      { procede: 'Anaphore', citation: '« Ô rage ! Ô désespoir ! Ô vieil homme »', interpretation: "Anaphore : la triple exclamation structure le désespoir de Don Diègue et intensifie le pathos.", keywords: ['anaphore', 'rage', 'désespoir', 'exclamation'] },
      { procede: 'Apostrophe', citation: '« Mon fils, mon fils unique »', interpretation: "Apostrophe : le père s'adresse à Rodrigue et transfère sur lui l'honneur familial.", keywords: ['apostrophe', 'fils', 'rodrigue', 'honneur'] },
      { procede: 'Registre pathétique', citation: '« témoin du jour et de ma honte »', interpretation: "Registre pathétique : la honte publique suscite pitié et prépare la vengeance tragique.", keywords: ['registre', 'pathétique', 'honte', 'honneur'] },
    ],
  },
  'GT-267': {
    titre: "Monologue d'Alceste (IV, 3)",
    texte: `Ah ! mon pauvre cœur, voilà comme on te traite,
Et voilà sous quelle conduite tu te trouves !
Qu'il faut obéir aux maximes du monde ?`,
    contexte: 'Misanthropie — déception amoureuse et sincérité blessée.',
    attendus: [
      { procede: 'Apostrophe', citation: '« mon pauvre cœur »', interpretation: "Apostrophe : Alceste s'adresse à son cœur et extériorise une souffrance intime.", keywords: ['apostrophe', 'cœur', 'alceste', 'souffrance'] },
      { procede: 'Anaphore', citation: '« voilà comme… voilà sous quelle »', interpretation: "Anaphore sur « voilà » : la reprise martèle l'injustice subie par le misanthrope.", keywords: ['anaphore', 'voilà', 'injustice', 'misanthrope'] },
      { procede: 'Registre pathétique', citation: '« mon pauvre cœur »', interpretation: "Registre pathétique : la plainte du moi sincère suscite compassion et ironie tragique.", keywords: ['registre', 'pathétique', 'plainte', 'sincérité'] },
    ],
  },
  'GT-270': {
    titre: 'Oreste et Pyrrhus (II, 1)',
    texte: `Je suis plein de ton ombre, et crois en cet instant
Qu'Andromaque est encor devant mes yeux.
Je crois entendre sa plainte à chaque pas que je fais.`,
    contexte: "Monologue d'Oreste — jalousie, obsession et ambivalence.",
    attendus: [
      { procede: 'Métaphore', citation: '« plein de ton ombre »', interpretation: "Métaphore : l'ombre d'Andromaque envahit Oreste et traduit une passion obsédante.", keywords: ['métaphore', 'ombre', 'obsession', 'jalousie'] },
      { procede: 'Anaphore', citation: '« Je crois… Je crois »', interpretation: "Anaphore : la reprise de « je crois » marque le trouble mental du personnage.", keywords: ['anaphore', 'crois', 'trouble', 'oreste'] },
      { procede: 'Registre lyrique', citation: '« sa plainte à chaque pas »', interpretation: "Registre lyrique : la subjectivité d'Oreste exprime une souffrance amoureuse intérieure.", keywords: ['registre', 'lyrique', 'plainte', 'passion'] },
    ],
  },
  'GT-271': {
    titre: 'Scène du « petit marquis » (III, 1)',
    texte: `On ne sauroit jamais être un petit marquis à demi ; et celui-ci remplit noblement sa place, en furetant de côté et d'autre, avec une mise tant de majesté.`,
    contexte: 'Satire mondaine — portrait comique du petit marquis.',
    attendus: [
      { procede: 'Hyperbole', citation: '« remplit noblement sa place »', interpretation: "Hyperbole : Molière exagère la pose du marquis pour le ridiculiser.", keywords: ['hyperbole', 'marquis', 'pose', 'satire'] },
      { procede: 'Ironie', citation: '« noblement »', interpretation: "Ironie : l'adverbe « noblement » dit le contraire du ridicule décrit.", keywords: ['ironie', 'noblement', 'ridicule', 'mondanité'] },
      { procede: 'Registre comique', citation: '« petit marquis à demi »', interpretation: "Registre comique : le portrait satirique vise les mœurs du salon.", keywords: ['registre', 'comique', 'satire', 'salon'] },
    ],
  },
  'GT-272': {
    titre: 'Sganarelle et Gusman (I, 2)',
    texte: `J'en pleurerais de compassion ; l'honnêteté semble une chose si démodée, et les hommes ne sont plus que des loups les uns pour les autres.`,
    contexte: 'Valet et satire morale — critique des mœurs et du libertinage.',
    attendus: [
      { procede: 'Comparaison', citation: '« des loups les uns pour les autres »', interpretation: "Comparaison : Sganarelle assimile les hommes à des loups et dénonce l'égoïsme social.", keywords: ['comparaison', 'loups', 'égoïsme', 'mœurs'] },
      { procede: 'Ironie', citation: "« l'honnêteté semble une chose si démodée »", interpretation: "Ironie : la formule moque une société où la vertu paraît dépassée.", keywords: ['ironie', 'honnêteté', 'démodée', 'satire'] },
      { procede: 'Registre comique', citation: "« J'en pleurerais de compassion »", interpretation: "Registre comique : le valet commente en spectateur et guide le rire du public.", keywords: ['registre', 'comique', 'valet', 'sganarelle'] },
    ],
  },
  'GT-263': {
    titre: 'Mon rêve familier',
    texte: `C'est toujours la même chose, et c'est toujours toi.
Tu viens ; te voici ; te sens-je ; ta voix m'enivre
Comme un sanglot, et tout mon corps se soulève
Au son de ta voix faible et profonde, hélas !`,
    contexte: 'Poésie mélancolique — amour idéal, musicalité verlainienne.',
    attendus: [
      { procede: 'Anaphore', citation: "« C'est toujours… c'est toujours »", interpretation: "Anaphore : la reprise installe l'obsession amoureuse et un rythme incantatoire.", keywords: ['anaphore', 'toujours', 'obsession', 'amour'] },
      { procede: 'Comparaison', citation: '« Comme un sanglot »', interpretation: "Comparaison : la voix comparée à un sanglot traduit une émotion intime débordante.", keywords: ['comparaison', 'sanglot', 'voix', 'émotion'] },
      { procede: 'Registre lyrique', citation: '« tout mon corps se soulève »', interpretation: "Registre lyrique : le corps réagissant à la voix exprime une subjectivité passionnée.", keywords: ['registre', 'lyrique', 'corps', 'passion'] },
    ],
  },
  'GT-264': {
    titre: 'Élévation',
    texte: `Au-dessus des étangs, au-dessus des vallons,
Des montagnes, des bois, des nuages, des mers,
Élève-toi, mon âme, et chantons la louange
Du Seigneur, du Seigneur mon Dieu !`,
    contexte: 'Poésie baudelairienne — élévation mystique, anaphore et rythme.',
    attendus: [
      { procede: 'Anaphore', citation: '« au-dessus des… au-dessus des »', interpretation: "Anaphore : la montée répétée des prépositions structure l'élévation progressive de l'âme.", keywords: ['anaphore', 'au-dessus', 'élévation', 'âme'] },
      { procede: 'Énumération', citation: '« montagnes, des bois, des nuages, des mers »', interpretation: "Énumération : la liste des espaces naturels élargit le regard et prépare l'envol poétique.", keywords: ['énumération', 'nature', 'espace', 'envol'] },
      { procede: 'Registre lyrique', citation: '« Élève-toi, mon âme »', interpretation: "Registre lyrique : l'apostrophe à l'âme traduit une quête d'idéal au-delà du spleen.", keywords: ['registre', 'lyrique', 'âme', 'idéal'] },
    ],
  },
  'GT-277': {
    titre: 'Paysages belges',
    texte: `Je vois les toits que le jour écarte lentement,
Et les clochers qui pointent dans le ciel gris.
La pluie tombe ; l'hiver morne et tristement
Assombrit Bruges et Gand que j'ai vus autrefois.`,
    contexte: 'Poésie impressionniste — mélancolie, mémoire et musicalité.',
    attendus: [
      { procede: 'Champ lexical', citation: '« toits », « clochers », « pluie », « hiver »', interpretation: "Champ lexical urbain et hivernal : le décor belge installe une atmosphère mélancolique.", keywords: ['champ', 'lexical', 'pluie', 'hiver'] },
      { procede: 'Métaphore', citation: '« le jour écarte lentement »', interpretation: "Métaphore : le jour personnifié suggère une lumière rare et un temps suspendu.", keywords: ['métaphore', 'jour', 'lentement', 'lumière'] },
      { procede: 'Registre lyrique', citation: "« que j'ai vus autrefois »", interpretation: "Registre lyrique : le souvenir personnel colore le paysage d'une nostalgie intime.", keywords: ['registre', 'lyrique', 'souvenir', 'nostalgie'] },
    ],
  },
  'GT-278': {
    titre: 'Paroles sur la dune',
    texte: `J'errais tout seul par la plage au vent froid,
Et je sentais en moi comme un monde mort.
La mer montait ; la nuit tombait ; la dune
S'étendait, vaste, lugubre et sans fin.`,
    contexte: 'Poésie du deuil — paysage nocturne et méditation.',
    attendus: [
      { procede: 'Métaphore', citation: '« comme un monde mort »', interpretation: "Métaphore : le moi intérieur assimilé à un monde mort traduit le deuil et l'isolement.", keywords: ['métaphore', 'mort', 'deuil', 'isolement'] },
      { procede: 'Énumération', citation: '« La mer… la nuit… la dune »', interpretation: "Énumération : les éléments du paysage s'accumulent et alourdissent l'atmosphère tragique.", keywords: ['énumération', 'mer', 'nuit', 'dune'] },
      { procede: 'Registre lyrique', citation: '« lugubre et sans fin »', interpretation: "Registre lyrique : l'adjectivation exprime une subjectivité noyée dans la mélancolie.", keywords: ['registre', 'lyrique', 'lugubre', 'mélancolie'] },
    ],
  },
  'GT-279': {
    titre: 'Monseigneur Myriel',
    texte: `Il y avait à Digne, en 1815, un prêtre que la ville appelait M. Bienvenu, et que toute la contrée nommait Monseigneur Bienvenu. C'était un vieillard de soixante-quinze ans qui occupait le siège de Digne depuis 1806.`,
    contexte: "Roman engagé — portrait moral de l'évêque, misère et rédemption.",
    attendus: [
      { procede: 'Antithèse', citation: '« M. Bienvenu… Monseigneur Bienvenu »', interpretation: "Antithèse entre familiarité et titre : Hugo souligne la bienveillance du personnage.", keywords: ['antithèse', 'bienvenu', 'monseigneur', 'bienveillance'] },
      { procede: 'Champ lexical', citation: '« prêtre », « évêque », « siège »', interpretation: "Champ lexical religieux : le portrait ancre Myriel dans une fonction morale exemplaire.", keywords: ['champ', 'lexical', 'prêtre', 'évêque'] },
      { procede: 'Registre épique', citation: '« toute la contrée nommait »', interpretation: "Registre épique : la renommée du personnage l'élève au rang de figure exemplaire.", keywords: ['registre', 'épique', 'contrée', 'exemplaire'] },
    ],
  },
  'GT-280': {
    titre: 'Sabine entre Horace et Curiace (III, 4)',
    texte: `C'est sur moi qu'ils attendent la victoire ou le blâme ;
Et je ne puis trahir ni Rome, ni mon époux.
Quoi ! pour être cruel, faut-il qu'on soit Romain ?`,
    contexte: 'Tragédie — conflit familial et patriotique, dilemme de Sabine.',
    attendus: [
      { procede: 'Antithèse', citation: '« victoire ou le blâme »', interpretation: "Antithèse : Sabine oppose honneur et honte et dramatise son dilemme impossible.", keywords: ['antithèse', 'victoire', 'blâme', 'dilemme'] },
      { procede: 'Anaphore', citation: '« ni Rome, ni mon époux »', interpretation: "Anaphore sur « ni » : la double loyauté structure le conflit tragique.", keywords: ['anaphore', 'rome', 'époux', 'loyauté'] },
      { procede: 'Registre tragique', citation: "« pour être cruel, faut-il qu'on soit Romain ? »", interpretation: "Registre tragique : la question rhétorique dénonce la violence du devoir politique.", keywords: ['registre', 'tragique', 'cruauté', 'devoir'] },
    ],
  },
  'GT-281': {
    titre: 'Chute de Dom Juan (V, 5)',
    texte: `Don Juan, je vous attends. Oui, oui, vous m'avez appelé : me voici.
Ne me parlez plus ; la rencontrer, c'est obéir.`,
    contexte: 'Punition du libertin — registre fantastique et chute morale.',
    attendus: [
      { procede: 'Anaphore', citation: "« Oui, oui, vous m'avez appelé »", interpretation: "Anaphore : la Statue martèle l'inéluctable du châtiment et annonce la chute.", keywords: ['anaphore', 'oui', 'statue', 'châtiment'] },
      { procede: 'Registre fantastique', citation: '« Don Juan, je vous attends »', interpretation: "Registre fantastique : la Statue parlante brise le réalisme et punit le libertin.", keywords: ['registre', 'fantastique', 'statue', 'dom', 'juan'] },
      { procede: 'Registre tragique', citation: "« la rencontrer, c'est obéir »", interpretation: "Registre tragique : la fatalité du devoir divin précipite la fin du héros.", keywords: ['registre', 'tragique', 'fatalité', 'obéir'] },
    ],
  },
  'GT-282': {
    titre: 'Harpagon et La Flèche (I, 4)',
    texte: `Sans mentir, voilà ce qui me chagrine le plus, de voir qu'on me dérobe, qu'on me pille ! Enfin, c'est en vain que je mets de l'argent de côté ; on me vole tout, on me fait banqueroute !`,
    contexte: "Comédie — obsession de l'argent, registre comique.",
    attendus: [
      { procede: 'Hyperbole', citation: '« on me vole tout, on me fait banqueroute »', interpretation: "Hyperbole : Harpagon exagère sa ruine et révèle une avarice comique.", keywords: ['hyperbole', 'vol', 'banqueroute', 'avarice'] },
      { procede: 'Anaphore', citation: "« qu'on me dérobe, qu'on me pille »", interpretation: "Anaphore sur « qu'on me » : la reprise concentre l'obsession possessive du personnage.", keywords: ['anaphore', 'dérobe', 'pille', 'obsession'] },
      { procede: 'Registre comique', citation: '« voilà ce qui me chagrine le plus »', interpretation: "Registre comique : la plainte disproportionnée suscite le rire du public.", keywords: ['registre', 'comique', 'chagrine', 'rire'] },
    ],
  },
  'GT-285': {
    titre: 'Le Vallon',
    texte: `Je me promenais seul, rêveur et sans dessein,
Le long d'un vallon solitaire ;
Je contemplais la rive en fleur et le sentier
Où le feuillage incliné versait un frais ombrage.`,
    contexte: 'Lyrisme romantique — méditation intime et paysage.',
    attendus: [
      { procede: 'Focalisation interne', citation: '« Je me promenais seul, rêveur »', interpretation: "Focalisation interne : le je poétique guide la promenade et la méditation.", keywords: ['focalisation', 'interne', 'promenade', 'méditation'] },
      { procede: 'Champ lexical', citation: '« vallon », « rive », « feuillage », « ombrage »', interpretation: "Champ lexical bucolique : le paysage naturel enveloppe le poète d'une quiétude mélancolique.", keywords: ['champ', 'lexical', 'vallon', 'nature'] },
      { procede: 'Registre lyrique', citation: '« rêveur et sans dessein »', interpretation: "Registre lyrique : la flânerie exprime une subjectivité romantique ouverte au souvenir.", keywords: ['registre', 'lyrique', 'rêveur', 'romantisme'] },
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
  const diff = (o.match(/diff:\s*(\d+)/) || [])[1] || '1';
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

const fp = path.join(JS, FILE);
let src = fs.readFileSync(fp, 'utf8');
let patched = 0;
for (const [id, p] of Object.entries(PATCHES)) {
  const r = patchBlock(src, id, p);
  if (!r.ok) {
    console.error(`${id}: ${r.reason}`);
    process.exitCode = 1;
    continue;
  }
  src = r.next;
  patched++;
  console.log('OK', id, '→', p.titre);
}
if (!DRY) fs.writeFileSync(fp, src, 'utf8');
console.log('Patchés:', patched, '/', Object.keys(PATCHES).length);
