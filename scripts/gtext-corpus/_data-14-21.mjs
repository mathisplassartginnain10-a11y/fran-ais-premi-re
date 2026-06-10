const makeEntry = (id, titre, auteur, oeuvre, genre, diff, texte, contexte, attendus) => [
  id,
  titre,
  auteur,
  oeuvre,
  genre,
  diff,
  texte,
  contexte,
  attendus
];

const FRENCH_BASE = [
  {
    titre: 'Prière pour la tolérance',
    auteur: 'Voltaire',
    oeuvre: 'Traité sur la tolérance',
    genre: 'Idées',
    diff: 2,
    texte: `Ce n'est donc plus aux hommes que je m'adresse; c'est à toi, Dieu de tous les êtres, de tous les mondes et de tous les temps: s'il est permis à de faibles créatures, perdues dans l'immensité et imperceptibles au reste de l'univers, d'oser te demander quelque chose, à toi qui as tout donné, à toi dont les décrets sont immuables comme éternels, daigne regarder en pitié les erreurs attachées à notre nature; que ces erreurs ne fassent point nos calamités. Tu ne nous as point donné un cœur pour nous haïr, et des mains pour nous égorger; fais que nous nous aidions mutuellement à supporter le fardeau d'une vie pénible et passagère.`,
    contexte: "Prière philosophique contre l'intolérance religieuse.",
    attendus: [
      ['Apostrophe', '« c\'est à toi, Dieu de tous les êtres »', 'L\'adresse solennelle universalise la demande morale.', ['apostrophe', 'universel', 'tolérance', 'voltaire']],
      ['Antithèse', '« nous haïr » / « nous aidions mutuellement »', 'Le texte oppose la violence à la fraternité.', ['antithèse', 'haine', 'fraternité', 'lumières']],
      ['Registre oratoire', '« daigne regarder en pitié »', 'Le ton de supplication renforce la portée civique.', ['oratoire', 'prière', 'argumentation', 'idées']]
    ]
  },
  {
    titre: 'Aveu de Phèdre',
    auteur: 'Racine',
    oeuvre: 'Phèdre',
    genre: 'Théâtre',
    diff: 3,
    texte: `Je le vis, je rougis, je pâlis à sa vue; un trouble s'éleva dans mon âme éperdue; mes yeux ne voyaient plus, je ne pouvais parler; je sentis tout mon corps et transir et brûler. Je reconnus Vénus et ses feux redoutables, d'un sang qu'elle poursuit tourments inévitables. Par des vœux assidus je crus les détourner: je lui bâtis un temple, et pris soin de l'orner; de victimes moi-même à toute heure entourée, je cherchais dans leurs flancs ma raison égarée. Ainsi, la passion se fait faute, et la faute se fait destin.`,
    contexte: "Aveu tragique d'une passion impossible.",
    attendus: [
      ['Parallélisme', '« Je le vis, je rougis, je pâlis »', 'Le rythme ternaire dramatise le choc amoureux.', ['parallélisme', 'aveu', 'tragédie', 'racine']],
      ['Antithèse', '« transir et brûler »', 'Le désir se dit dans une contradiction corporelle.', ['antithèse', 'désir', 'douleur', 'pathétique']],
      ['Mythologie', '« Je reconnus Vénus »', 'La référence divine inscrit la passion dans la fatalité.', ['mythologie', 'fatalité', 'vénus', 'tragique']]
    ]
  },
  {
    titre: 'Dilemme de Rodrigue',
    auteur: 'Corneille',
    oeuvre: 'Le Cid',
    genre: 'Théâtre',
    diff: 2,
    texte: `Percé jusques au fond du cœur d'une atteinte imprévue aussi bien que mortelle, misérable vengeur d'une juste querelle, et malheureux objet d'une injuste rigueur, je demeure immobile, et mon âme abattue cède au coup qui me tue. En cet affront mon père est l'offensé, et l'offenseur le père de Chimène. Que je sens de rudes combats! contre mon propre honneur mon amour s'intéresse. Faut-il perdre Chimène, ou trahir mon lignage? le héros naît dans cette hésitation.`,
    contexte: 'Conflit classique entre honneur et amour.',
    attendus: [
      ['Antithèse', '« l\'offensé ... l\'offenseur »', 'La symétrie formule l\'impasse morale.', ['antithèse', 'honneur', 'amour', 'corneille']],
      ['Registre tragique', '« Percé jusques au fond du cœur »', 'La douleur morale prend la forme d\'une blessure.', ['tragique', 'souffrance', 'dilemme', 'théâtre']],
      ['Exclamation', '« Que je sens de rudes combats! »', 'L\'exclamation rend sensible l\'urgence intérieure.', ['exclamation', 'combat', 'pathétique', 'classicisme']]
    ]
  },
  {
    titre: 'Aveuglement d’Orgon',
    auteur: 'Molière',
    oeuvre: 'Tartuffe',
    genre: 'Théâtre',
    diff: 2,
    texte: `Ha! si vous aviez vu comme j'en fis rencontre, vous auriez pris pour lui l'amitié que je montre. Chaque jour à l'église il venait, d'un air doux, tout vis-à-vis de moi se mettre à deux genoux. Il attirait les yeux de l'assemblée entière par l'ardeur dont au Ciel il poussait sa prière; il faisait des soupirs, de grands élancements, et baisait humblement la terre à tous moments. Et lorsque je sortais, il me devançait vite pour m'aller à la porte offrir de l'eau bénite. Et Tartuffe? Le pauvre homme!`,
    contexte: "Portrait comique d'un faux dévot.",
    attendus: [
      ['Comique de caractère', '« Le pauvre homme! »', 'Le refrain signale l\'aveuglement d\'Orgon.', ['comique', 'orgon', 'imposture', 'molière']],
      ['Accumulation', '« soupirs, de grands élancements »', 'La surenchère gestuelle dénonce l\'hypocrisie.', ['accumulation', 'hypocrisie', 'satire', 'dévotion']],
      ['Ironie dramatique', '« Et Tartuffe? »', 'Le spectateur comprend ce qu\'Orgon refuse de voir.', ['ironie dramatique', 'spectateur', 'théâtre', 'classicisme']]
    ]
  },
  {
    titre: 'Morale du plus fort',
    auteur: 'La Fontaine',
    oeuvre: 'Fables',
    genre: 'Poésie',
    diff: 1,
    texte: `La raison du plus fort est toujours la meilleure: nous l'allons montrer tout à l'heure. Un Agneau se désaltérait dans le courant d'une onde pure. Un Loup survient à jeun, qui cherchait aventure, et que la faim en ces lieux attirait. Qui te rend si hardi de troubler mon breuvage? dit cet animal plein de rage: tu seras châtié de ta témérité. Sire, répond l'Agneau, que Votre Majesté ne se mette pas en colère; mais plutôt qu'elle considère que je me vas désaltérant plus de vingt pas au-dessous d'Elle.`,
    contexte: "Fable sur l'arbitraire de la force.",
    attendus: [
      ['Morale', '« La raison du plus fort est toujours la meilleure »', 'La moralité initiale donne la clé de lecture politique.', ['morale', 'force', 'justice', 'fable']],
      ['Dialogue', '« Qui te rend si hardi »', "Le discours direct met en scène un procès biaisé.", ['dialogue', 'procès', 'injustice', 'allégorie']],
      ['Ironie', '« Votre Majesté »', "La politesse de l'agneau souligne la brutalité du loup.", ['ironie', 'domination', 'la fontaine', 'pouvoir']]
    ]
  },
  {
    titre: 'Le soldat endormi',
    auteur: 'Rimbaud',
    oeuvre: 'Le Dormeur du val',
    genre: 'Poésie',
    diff: 1,
    texte: `C'est un trou de verdure où chante une rivière accrochant follement aux herbes des haillons d'argent; où le soleil, de la montagne fière, luit: c'est un petit val qui mousse de rayons. Un soldat jeune, bouche ouverte, tête nue, et la nuque baignant dans le frais cresson bleu, dort; il est étendu dans l'herbe, sous la nue, pâle dans son lit vert où la lumière pleut. Les parfums ne font pas frissonner sa narine; il dort dans le soleil, la main sur sa poitrine, tranquille. Il a deux trous rouges au côté droit.`,
    contexte: 'Poème de guerre à chute brutale.',
    attendus: [
      ['Chute', '« Il a deux trous rouges au côté droit »', 'Le dernier vers renverse la lecture bucolique.', ['chute', 'guerre', 'mort', 'rimbaud']],
      ['Personnification', '« Nature, berce-le »', 'La nature maternelle reste impuissante face à la guerre.', ['personnification', 'nature', 'pathétique', 'poésie']],
      ['Contraste', '« trou de verdure »', 'Le cadre lumineux contraste avec la mort du soldat.', ['contraste', 'couleurs', 'violence', 'lyrique']]
    ]
  },
  {
    titre: 'Mélancolie d’automne',
    auteur: 'Verlaine',
    oeuvre: 'Chanson d’automne',
    genre: 'Poésie',
    diff: 1,
    texte: `Les sanglots longs des violons de l'automne blessent mon cœur d'une langueur monotone. Tout suffocant et blême, quand sonne l'heure, je me souviens des jours anciens et je pleure; et je m'en vais au vent mauvais qui m'emporte deçà, delà, pareil à la feuille morte. Le soir s'allonge et la cloche descend dans l'air humide; la ville s'efface; mon pas hésite comme une voix qui s'éteint dans le froid, et ma mémoire revient avec ses battements sourds.`,
    contexte: 'Poème bref et musical de la nostalgie.',
    attendus: [
      ['Allitération', '« sanglots longs des violons »', 'Les sonorités prolongent la plainte.', ['allitération', 'musicalité', 'verlaine', 'mélancolie']],
      ['Comparaison', '« Pareil à la feuille morte »', 'Le sujet se dit emporté par le temps.', ['comparaison', 'automne', 'temps', 'destin']],
      ['Registre lyrique', '« je me souviens ... je pleure »', "L'expression du moi structure le poème.", ['lyrique', 'souvenir', 'tristesse', 'poésie']]
    ]
  },
  {
    titre: 'Modernité de Zone',
    auteur: 'Apollinaire',
    oeuvre: 'Alcools',
    genre: 'Poésie',
    diff: 2,
    texte: `A la fin tu es las de ce monde ancien. Bergère ô tour Eiffel le troupeau des ponts bêle ce matin. Tu en as assez de vivre dans l'antiquité grecque et romaine. Ici même les automobiles ont l'air d'être anciennes. La religion seule est restée toute neuve, la religion est restée simple comme les hangars de Port-Aviation. Seul en Europe tu n'es pas antique ô Christianisme. Et toi que les fenêtres observent, la honte te retient d'entrer dans une église et de t'y confesser ce matin.`,
    contexte: 'Poétique de la modernité urbaine.',
    attendus: [
      ['Apostrophe', '« Bergère ô tour Eiffel »', 'L\'image mêle tradition pastorale et ville moderne.', ['apostrophe', 'tour eiffel', 'modernité', 'apollinaire']],
      ['Antithèse', '« monde ancien » / « moderne »', 'Le poème se construit sur une tension temporelle.', ['antithèse', 'ancien', 'moderne', 'avant-garde']],
      ['Vers libre', '« A la fin tu es las de ce monde ancien »', 'L\'absence de cadre métrique accompagne la mobilité du regard.', ['vers libre', 'rythme', 'montage', 'alcools']]
    ]
  },
  {
    titre: 'Incipit provincial',
    auteur: 'Stendhal',
    oeuvre: 'Le Rouge et le Noir',
    genre: 'Roman',
    diff: 2,
    texte: `La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure.`,
    contexte: "Ouverture réaliste et ironique de la province.",
    attendus: [
      ['Cadre', '« La petite ville de Verrières »', "L'incipit pose un espace social précis.", ['cadre', 'province', 'stendhal', 'réalisme']],
      ['Lexique mélioratif', '« jolies », « blanches », « propreté »', 'Le positif prépare une lecture critique.', ['lexique', 'ironie', 'bourgeoisie', 'roman']],
      ['Attente', '« semble promettre le bonheur »', 'La promesse initiale sera démentie par le récit.', ['attente', 'promesse', 'narrateur', 'destin']]
    ]
  },
  {
    titre: 'Entrée de Charles',
    auteur: 'Flaubert',
    oeuvre: 'Madame Bovary',
    genre: 'Roman',
    diff: 2,
    texte: `Nous étions à l'étude, quand le proviseur entra, suivi d'un nouveau habillé en bourgeois et d'un garçon de classe qui portait un grand pupitre. Ceux qui dormaient se réveillèrent, et chacun se leva comme surpris dans son travail. Le proviseur nous fit signe de nous rasseoir; puis, se tournant vers le maître d'études: « Monsieur Roger, lui dit-il, voici un élève que je vous recommande. » Resté dans l'angle, derrière la porte, si bien qu'on l'apercevait à peine, le nouveau était un gars de la campagne, embarrassé par les regards.`,
    contexte: "Scène d'entrée et de maladresse sociale.",
    attendus: [
      ['Focalisation', '« Nous étions à l\'étude »', 'Le point de vue collectif installe la scène.', ['focalisation', 'collectif', 'flaubert', 'classe']],
      ['Réalisme social', '« habillé en bourgeois »', 'Le vêtement marque immédiatement la position sociale.', ['réalisme', 'social', 'école', 'roman']],
      ['Caractérisation', '« le nouveau était un gars de la campagne »', "L'origine rurale prépare l'inadaptation.", ['caractérisation', 'charles', 'inadaptation', 'bovary']]
    ]
  },
  {
    titre: 'Nuit de Germinal',
    auteur: 'Zola',
    oeuvre: 'Germinal',
    genre: 'Roman',
    diff: 3,
    texte: `Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucune ombre d'arbre ne tachait le ciel; le pavé se déroulait avec la rectitude d'une jetée, au milieu des ténèbres.`,
    contexte: "Incipit naturaliste d'une marche vers la mine.",
    attendus: [
      ['Métaphore', '« rafales larges comme sur une mer »', 'La plaine devient un espace hostile et océanique.', ['métaphore', 'paysage', 'zola', 'naturalisme']],
      ['Champ lexical', '« obscurité », « encre », « ténèbres »', 'La noirceur annonce la violence sociale.', ['champ lexical', 'noir', 'mine', 'drame']],
      ['Focalisation externe', '« un homme suivait seul »', "L'anonymat initial universalise la condition ouvrière.", ['focalisation', 'anonymat', 'ouvrier', 'roman']]
    ]
  },
  {
    titre: 'Armée en déroute',
    auteur: 'Maupassant',
    oeuvre: 'Boule de suif',
    genre: 'Roman',
    diff: 2,
    texte: `Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes, noirs, barbus, sales, harassés, marchaient d'un air abattu, sans drapeau, sans régiment. Tous semblaient accablés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude, et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait des mobilisés paisibles, des francs-tireurs de parade, et des soldats vaincus que le hasard poussait encore.`,
    contexte: 'Ouverture de guerre et de désordre collectif.',
    attendus: [
      ['Accumulation', '« noirs, barbus, sales, harassés »', "L'énumération matérialise l'épuisement.", ['accumulation', 'guerre', 'épuisement', 'maupassant']],
      ['Description', '« sans drapeau, sans régiment »', 'La défaite se lit dans la disparition des signes militaires.', ['description', 'défaite', 'armée', 'réalisme']],
      ['Antithèse', '« épouvante » / « enthousiasme »', 'Le texte montre la volatilité des foules en guerre.', ['antithèse', 'foule', 'instabilité', 'histoire']]
    ]
  },
  {
    titre: 'Maison Vauquer',
    auteur: 'Balzac',
    oeuvre: 'Le Père Goriot',
    genre: 'Roman',
    diff: 2,
    texte: `Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux. Depuis trente ans, n'y a-t-il jamais été vu de jeune personne; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. En 1819, époque où commence ce drame, il s'y trouvait pourtant une pauvre jeune fille.`,
    contexte: "Incipit réaliste d'un microcosme social parisien.",
    attendus: [
      ['Précision', '« rue Neuve-Sainte-Geneviève »', "Le détail topographique ancre le récit dans le réel.", ['réalisme', 'paris', 'topographie', 'balzac']],
      ['Ironie', '« honorable établissement »', 'La formule valorisante suggère en creux la médiocrité.', ['ironie', 'narrateur', 'milieu', 'société']],
      ['Annonce', '« époque où commence ce drame »', 'Le narrateur prépare une trajectoire tragique.', ['annonce', 'drame', 'destin', 'roman']]
    ]
  },
  {
    titre: 'Marche vers la tombe',
    auteur: 'Hugo',
    oeuvre: 'Les Contemplations',
    genre: 'Poésie',
    diff: 1,
    texte: `Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur.`,
    contexte: "Élégie du deuil filial.",
    attendus: [
      ['Progression', '« Je partirai ... J\'irai ... Je marcherai »', 'La marche géographique devient parcours intérieur.', ['progression', 'deuil', 'hugo', 'élégie']],
      ['Antithèse', '« le jour ... comme la nuit »', 'La douleur annule les repères du monde.', ['antithèse', 'douleur', 'intériorité', 'lyrique']],
      ['Chute', '« sur ta tombe »', 'La destination funèbre reconfigure tout le poème.', ['chute', 'tombe', 'émotion', 'poésie']]
    ]
  },
  {
    titre: 'Allégorie de l’albatros',
    auteur: 'Baudelaire',
    oeuvre: 'Les Fleurs du mal',
    genre: 'Poésie',
    diff: 2,
    texte: `Souvent, pour s'amuser, les hommes d'équipage prennent des albatros, vastes oiseaux des mers, qui suivent, indolents compagnons de voyage, le navire glissant sur les gouffres amers. A peine les ont-ils déposés sur les planches, que ces rois de l'azur, maladroits et honteux, laissent piteusement leurs grandes ailes blanches comme des avirons traîner à côté d'eux. Ce voyageur ailé, comme il est gauche et veule! Lui, naguère si beau, qu'il est comique et laid! Le Poète est semblable au prince des nuées.`,
    contexte: 'Allégorie du poète inadapté au monde social.',
    attendus: [
      ['Allégorie', '« Le Poète est semblable au prince des nuées »', "L'albatros figure la condition du créateur.", ['allégorie', 'poète', 'société', 'baudelaire']],
      ['Antithèse', '« rois de l\'azur » / « comique et laid »', 'La grandeur chute dans le ridicule terrestre.', ['antithèse', 'sublime', 'ridicule', 'modernité']],
      ['Ironie', '« pour s\'amuser »', 'La cruauté collective est banalisée par le divertissement.', ['ironie', 'cruauté', 'foule', 'symbolisme']]
    ]
  },
  {
    titre: 'Chants désespérés',
    auteur: 'Musset',
    oeuvre: 'La Nuit de mai',
    genre: 'Poésie',
    diff: 2,
    texte: `Poète, prends ton luth et me donne un baiser; la fleur de l'églantier sent ses bourgeons éclore, le printemps naît ce soir, les vents vont s'embraser. Les plus désespérés sont les chants les plus beaux, et j'en sais d'immortels qui sont de purs sanglots. Lorsque le pélican, lassé d'un long voyage, retourne à ses roseaux, ses petits affamés courent sur le rivage en le voyant au loin s'abattre sur les eaux. Ainsi le poète nourrit son chant de sa propre blessure, et la douleur devient musique.`,
    contexte: "Poème dialogué sur la création née de la souffrance.",
    attendus: [
      ['Maxime', '« Les plus désespérés sont les chants les plus beaux »', "La formule fait de la douleur une source esthétique.", ['maxime', 'désespoir', 'beauté', 'musset']],
      ['Symbole', '« le pélican »', "L'oiseau représente le sacrifice du poète.", ['symbole', 'pélican', 'sacrifice', 'lyrisme']],
      ['Dialogue', '« Poète, prends ton luth »', "L'échange Muse/Poète dramatise l'inspiration.", ['dialogue', 'muse', 'poète', 'création']]
    ]
  },
  {
    titre: 'Stratégie de Merteuil',
    auteur: 'Laclos',
    oeuvre: 'Les Liaisons dangereuses',
    genre: 'Roman',
    diff: 2,
    texte: `Vous voilà donc bien heureux de votre dernière conquête! Vous m'écrivez trois pages pour me vanter une paysanne. J'en ris encore. Croyez-vous me faire envie? Je connais vos ruses. Vous voulez me piquer, me faire croire que vous n'avez plus besoin de moi. D'ailleurs, ce n'est pas Cécile qui m'intéresse; c'est vous. Je veux savoir si vous oserez exécuter le plan que nous avons formé. Préférez-vous la vertu de Mme de Tourvel à la gloire de me plaire? Choisissez. Si vous hésitez, je comprendrai que vous avez faibli, et je saurai me venger.`,
    contexte: 'Lettre de manipulation dans le roman libertin.',
    attendus: [
      ['Registre épistolaire', '« Vous m\'écrivez trois pages »', 'La forme lettre sert la stratégie psychologique.', ['épistolaire', 'lettre', 'laclos', 'manipulation']],
      ['Ironie', '« J\'en ris encore »', 'La moquerie masque une volonté de domination.', ['ironie', 'merteuil', 'pouvoir', 'stratégie']],
      ['Antithèse', '« vertu de Mme de Tourvel » / « gloire de me plaire »', 'Le conflit oppose morale et libertinage.', ['antithèse', 'vertu', 'séduction', 'libertinage']]
    ]
  },
  {
    titre: 'Dialogue du Neveu',
    auteur: 'Diderot',
    oeuvre: 'Le Neveu de Rameau',
    genre: 'Idées',
    diff: 3,
    texte: `Je ne connais pas de plus grand charlatan que celui qui prétend enseigner ce qu'il ne sait pas. Le monde est plein de ces pédants qui récitent des maximes et ne les pratiquent point. Ils ont l'air grave, le ton sentencieux, et l'on les écoute; mais suivez-les chez eux, vous les verrez mentir, voler, tricher, se livrer à toutes les turpitudes qu'ils condamnent en public. Le Neveu rit de tout cela: « Morale! c'est le masque du faible devant le fort. » Je lui réponds que sans morale, la société tombe en ruine. Le dialogue ne tranche pas; il oblige à penser.`,
    contexte: 'Satire philosophique de l’hypocrisie sociale.',
    attendus: [
      ['Ironie', '« l\'air grave, le ton sentencieux »', 'Le portrait dénonce les faux moralistes.', ['ironie', 'pédants', 'hypocrisie', 'diderot']],
      ['Antithèse', '« sans morale, la société tombe » / « Morale! c\'est le masque »', 'Le texte confronte deux conceptions irréconciliables.', ['antithèse', 'morale', 'cynisme', 'dialogue']],
      ['Registre argumentatif', '« Le dialogue ne tranche pas »', 'La pensée progresse par confrontation des voix.', ['argumentatif', 'débat', 'philosophie', 'lumières']]
    ]
  },
  {
    titre: 'Mal du siècle',
    auteur: 'Chateaubriand',
    oeuvre: 'René',
    genre: 'Roman',
    diff: 2,
    texte: `Les solitudes me parlent une langue que je comprends; les grands bois, les montagnes, les mers désertes me rendent ce que les hommes m'ont pris. J'ai passé ma jeunesse à fuir les villes, à chercher des lieux où le vent souffle sans témoin, où l'on peut pleurer sans ridicule. Amélie, ma sœur, partageait autrefois ces errances; mais le monde a séparé nos destins, et je reste seul avec mon mal du siècle, ce vague à l'âme qui consume sans éclat. Les ruines, les tombeaux, les crépuscules m'attirent: je ne cherche pas le bonheur, je cherche une émotion forte.`,
    contexte: 'Confession romantique et solitude existentielle.',
    attendus: [
      ['Personnification', '« Les solitudes me parlent »', 'La nature devient interlocutrice du moi.', ['personnification', 'nature', 'romantisme', 'rené']],
      ['Registre lyrique', '« ce vague à l\'âme »', 'Le texte exprime la crise intime du sujet romantique.', ['lyrique', 'mal du siècle', 'subjectivité', 'chateaubriand']],
      ['Antithèse', '« Je ne cherche pas le bonheur » / « une émotion forte »', 'Le héros refuse la modération bourgeoise.', ['antithèse', 'bonheur', 'intensité', 'roman']]
    ]
  },
  {
    titre: 'Passion à la cour',
    auteur: 'Lafayette',
    oeuvre: 'La Princesse de Clèves',
    genre: 'Roman',
    diff: 2,
    texte: `La cour était alors dans une magnificence qu'on n'a jamais vue depuis. L'ambition et la galanterie régnaient en même temps et occupaient également les esprits; l'un et l'autre trouvaient souvent des moyens de se concilier, et l'on ne savait lequel emportait l'avantage. Mme de Clèves, jeune, belle, et mariée au prince de Clèves, ne connaissait pas encore la violence de la passion. Elle croyait que l'honnêteté suffisait à régler la conduite. Mais le duc de Nemours parut: il était de ces hommes que la nature semble avoir formés pour se faire aimer.`,
    contexte: 'Exposition du roman de passion classique.',
    attendus: [
      ['Tableau social', '« L\'ambition et la galanterie régnaient »', 'Le cadre de cour organise les comportements.', ['cour', 'mœurs', 'galanterie', 'lafayette']],
      ['Antithèse', '« honnêteté suffisait » / « violence de la passion »', 'Le conflit moral est lancé dès l’exposition.', ['antithèse', 'vertu', 'passion', 'roman']],
      ['Caractérisation', '« formés pour se faire aimer »', 'Nemours apparaît comme type du séducteur.', ['caractérisation', 'nemours', 'désir', 'classicisme']]
    ]
  }
];

const WORLD_TEXTS = {
  ibsenMaison: {
    titre: 'Révolte de Nora',
    auteur: 'Ibsen',
    oeuvre: 'Une maison de poupée (trad. fr.)',
    genre: 'Théâtre',
    diff: 2,
    texte: `NORA: Je crois qu'avant tout je suis un être humain, autant que toi, du moins je veux essayer de le devenir. Je sais bien que la plupart des gens te donneront raison, Torvald, et que cela se trouve dans les livres. Mais je ne peux plus me contenter de ce que disent les livres. Il faut que je pense par moi-même et que je cherche à comprendre. HELMER: Tu abandonnes ton mari et tes enfants! NORA: J'ai d'autres devoirs tout aussi sacrés. HELMER: Lesquels? NORA: Mes devoirs envers moi-même. Je ne suis plus disposée à me laisser guider par des mains étrangères.`,
    contexte: 'Scène de rupture et affirmation de soi.',
    attendus: [
      ['Déclaration', '« je suis un être humain »', 'Nora reformule la hiérarchie des valeurs.', ['émancipation', 'théâtre', 'ibsen', 'identité']],
      ['Antithèse', '« ce que disent les livres » / « penser par moi-même »', 'La norme sociale est contestée par la conscience.', ['antithèse', 'norme', 'conscience', 'modernité']],
      ['Réplique clé', '« Mes devoirs envers moi-même »', 'La formule condense la portée féministe de la scène.', ['devoir', 'soi', 'rupture', 'drame']]
    ]
  },
  tchekhovCerisaie: {
    titre: 'La vente du verger',
    auteur: 'Tchekhov',
    oeuvre: 'La Cerisaie (trad. fr.)',
    genre: 'Théâtre',
    diff: 2,
    texte: `LOPAKHINE: Le domaine avec la cerisaie est vendu. Je l'ai acheté. Oui, c'est moi qui l'ai acheté! Si mon père et mon grand-père sortaient de leurs tombes et voyaient ce qui s'est passé, comment ce petit Lopakhine, qu'on battait autrefois, a acheté le domaine le plus beau du monde! LIUBOV: Ma vie, ma jeunesse, mon bonheur, adieu! adieu! TROFIMOV: Toute la Russie est notre jardin. Le vieux monde s'effondre, un autre commence; mais on entend déjà la hache dans le verger.`,
    contexte: 'Fin d’un monde aristocratique.',
    attendus: [
      ['Annonce', '« Le domaine avec la cerisaie est vendu »', 'La phrase fait basculer toute la pièce.', ['annonce', 'bascule', 'tchekhov', 'histoire']],
      ['Opposition sociale', '« ce petit Lopakhine ... a acheté »', 'Le renversement des classes est explicite.', ['social', 'renversement', 'propriété', 'théâtre']],
      ['Symbole', '« la hache dans le verger »', "Le son de la hache matérialise la fin d'un ordre.", ['symbole', 'verger', 'fin', 'modernité']]
    ]
  },
  whitmanSong: {
    titre: 'Chant de soi',
    auteur: 'Whitman',
    oeuvre: "Feuilles d'herbe (trad. fr.)",
    genre: 'Poésie',
    diff: 2,
    texte: `Je me célèbre et me chante, et ce que j'assume vous l'assumerez; car chaque atome qui m'appartient vous appartient aussi. Je flâne et j'invite mon âme, je me penche et j'observe un brin d'herbe d'été. Ma langue, chaque molécule de mon sang formée de cette terre et de cet air, née ici de parents nés ici. Je crois qu'une feuille d'herbe n'est pas moins que le travail des étoiles. Je suis vaste, je contiens des multitudes; j'accueille le monde, ses foules, ses ports, ses visages, ses routes ouvertes.`,
    contexte: 'Poétique du moi démocratique.',
    attendus: [
      ['Anaphore', '« Je »', 'La première personne fonde une voix expansive.', ['anaphore', 'moi', 'lyrique', 'whitman']],
      ['Image', '« un brin d\'herbe d\'été »', 'Le minuscule devient principe cosmique.', ['image', 'nature', 'cosmique', 'poésie']],
      ['Formule', '« je contiens des multitudes »', 'Le sujet se pense pluriel et collectif.', ['multitudes', 'identité', 'démocratie', 'chant']]
    ]
  },
  dostoCrime: {
    titre: 'Raskolnikov justifie son acte',
    auteur: 'Dostoïevski',
    oeuvre: 'Crime et châtiment (trad. fr.)',
    genre: 'Roman',
    diff: 3,
    texte: `Je voulais avoir l'audace, Sonia, voilà toute la cause! Je voulais savoir si j'étais un pou tremblant, comme tous les hommes, ou un homme. Je voulais savoir si j'avais le droit de franchir la limite, si j'oserais me pencher et prendre. J'ai tué une vieille, oui, mais ce n'est pas la vieille que j'ai tuée: c'est moi que j'ai tué! Je me suis assassiné pour toujours. Je n'ai pas supporté ma propre idée. Tout s'est écroulé en moi, et maintenant je n'ai plus que la honte et la fièvre.`,
    contexte: 'Confession morale de Raskolnikov.',
    attendus: [
      ['Questionnement', '« un pou tremblant ... ou un homme »', 'Le personnage se juge dans un dilemme de puissance.', ['dilemme', 'culpabilité', 'dostoïevski', 'roman']],
      ['Anaphore', '« Je voulais savoir »', 'La répétition traduit l’obsession théorique.', ['anaphore', 'obsession', 'idée', 'psychologie']],
      ['Renversement', '« c\'est moi que j\'ai tué »', "Le crime devient auto-condamnation intérieure.", ['renversement', 'faute', 'conscience', 'tragique']]
    ]
  },
  tolstoiGuerre: {
    titre: 'Sous le ciel d’Austerlitz',
    auteur: 'Tolstoï',
    oeuvre: 'Guerre et Paix (trad. fr.)',
    genre: 'Roman',
    diff: 2,
    texte: `Le prince André, tombé sur le champ de bataille, regardait le ciel immense, haut, tranquille, éternel. Comme tout était calme, solennel, incomparable, et comme c'était loin de ce tumulte, de ces cris, de cette fuite! Comment n'avais-je pas vu auparavant ce ciel élevé? Tout est vanité, tout est mensonge, sauf ce ciel infini. Il n'y a rien, rien que lui. Et même lui n'est pas, il n'y a rien que le silence et la paix. Grâce à Dieu! pensa-t-il, en oubliant la gloire militaire qu'il poursuivait la veille.`,
    contexte: 'Épiphanie existentielle pendant la guerre.',
    attendus: [
      ['Contraste', '« ciel immense » / « tumulte »', 'Le regard spirituel annule le fracas historique.', ['contraste', 'guerre', 'intériorité', 'tolstoï']],
      ['Interrogation', '« Comment n\'avais-je pas vu »', 'La question marque une conversion du personnage.', ['interrogation', 'prise de conscience', 'roman', 'épiphanie']],
      ['Maxime', '« Tout est vanité »', 'La formule condense une méditation morale.', ['maxime', 'vanité', 'paix', 'austerlitz']]
    ]
  },
  shakespeareHamlet: {
    titre: 'Être ou ne pas être',
    auteur: 'Shakespeare',
    oeuvre: 'Hamlet (trad. Hugo)',
    genre: 'Théâtre',
    diff: 2,
    texte: `Être ou ne pas être, c'est là la question. Y a-t-il plus de noblesse d'âme à souffrir les outrages et les flèches de la fortune outrageante, ou à prendre les armes contre une mer de troubles, et, en les combattant, y mettre fin? Mourir: dormir; plus rien; et dire qu'avec ce sommeil nous mettons fin aux maux du cœur et aux mille chocs naturels dont hérite la chair, c'est une consommation dévouée à souhaiter. Mourir: dormir; dormir! peut-être rêver. Voilà l'embarras.`,
    contexte: 'Soliloque existentiel du héros tragique.',
    attendus: [
      ['Antithèse', '« Être ou ne pas être »', 'La tragédie s’ouvre sur une alternative absolue.', ['antithèse', 'existence', 'hamlet', 'tragédie']],
      ['Métaphore', '« une mer de troubles »', 'La souffrance est figurée comme immensité hostile.', ['métaphore', 'troubles', 'douleur', 'théâtre']],
      ['Monologue', '« c\'est là la question »', 'La conscience en crise devient spectacle.', ['monologue', 'conscience', 'crise', 'shakespeare']]
    ]
  },
  kafkaProces: {
    titre: 'Arrestation de K.',
    auteur: 'Kafka',
    oeuvre: 'Le Procès (trad. fr.)',
    genre: 'Roman',
    diff: 2,
    texte: `Quelqu'un avait dû calomnier Joseph K., car, sans avoir rien fait de mal, il fut arrêté un matin. La cuisinière de Mme Grubach, sa logeuse, ne lui apporta pas son petit déjeuner; c'était la première fois. Il attendit un moment, puis sonna. Un homme qu'il n'avait jamais vu entra et lui dit qu'il n'avait pas le droit de sortir. K. demanda: « De quoi suis-je accusé? » L'homme répondit: « Nous ne sommes pas autorisés à vous le dire. » K. sentit qu'une machine obscure s'était mise en marche et qu'elle l'enveloppait déjà.`,
    contexte: 'Incipit de la culpabilité sans cause.',
    attendus: [
      ['Incipit', '« sans avoir rien fait de mal, il fut arrêté »', 'L’absurde judiciaire est posé immédiatement.', ['incipit', 'absurde', 'procès', 'kafka']],
      ['Question sans réponse', '« De quoi suis-je accusé? »', "L'opacité de l'autorité nourrit l'angoisse.", ['question', 'opacité', 'angoisse', 'roman']],
      ['Métaphore', '« une machine obscure »', 'Le pouvoir impersonnel devient mécanisme inexorable.', ['métaphore', 'pouvoir', 'bureaucratie', 'modernité']]
    ]
  },
  cervantesQuichotte: {
    titre: 'Incipit de Don Quichotte',
    auteur: 'Cervantès',
    oeuvre: 'Don Quichotte (trad. fr.)',
    genre: 'Roman',
    diff: 2,
    texte: `Dans un village de la Manche, dont je ne veux pas me rappeler le nom, vivait, il n'y a pas longtemps, un de ces gentilshommes qui ont lance au râtelier, rondache antique, maigre rosse et lévrier de chasse. Un pot-au-feu plus souvent de bœuf que de mouton, quelque pigeonneau le dimanche, consumaient les trois quarts de son revenu. Le reste passait en casaque de fin drap et haut-de-chausses de velours. Ce brave homme avait près de cinquante ans, sec de corps, maigre de visage, fort matinal et grand ami de la chasse.`,
    contexte: 'Ouverture parodique du roman moderne.',
    attendus: [
      ['Incipit', '« Dans un village de la Manche »', 'Le récit part d’un cadre concret et ironique.', ['incipit', 'cadre', 'roman', 'cervantès']],
      ['Accumulation', '« lance au râtelier, rondache antique, maigre rosse »', 'Le portrait compose un héros dérisoire.', ['accumulation', 'portrait', 'parodie', 'chevalerie']],
      ['Ironie', '« dont je ne veux pas me rappeler le nom »', 'La désinvolture narrative signale la distance comique.', ['ironie', 'narrateur', 'burlesque', 'moderne']]
    ]
  },
  goetheFaust: {
    titre: 'Soif de savoir de Faust',
    auteur: 'Goethe',
    oeuvre: 'Faust (trad. fr.)',
    genre: 'Théâtre',
    diff: 3,
    texte: `J'ai donc étudié, hélas! philosophie, jurisprudence, médecine, et même, malheureusement, théologie, avec un ardent labeur. Et me voici, pauvre fou, aussi sage qu'auparavant! On m'appelle maître, on m'appelle docteur, et depuis dix ans je mène mes élèves par le nez. Je vois bien que nous ne pouvons rien savoir! Cette pensée me brûle le cœur. J'ai plus de science que tous ces sots, docteurs, maîtres, scribes et prêtres; mais je n'ai ni certitude ni joie. Voilà pourquoi je me livre à la magie, afin de découvrir ce qui tient le monde au plus intime.`,
    contexte: 'Monologue d’ouverture sur les limites du savoir.',
    attendus: [
      ['Énumération', '« philosophie, jurisprudence, médecine ... théologie »', 'Le parcours savant débouche sur le vide.', ['énumération', 'savoir', 'faust', 'crise']],
      ['Exclamation', '« aussi sage qu\'auparavant! »', 'Le ton exprime la désillusion radicale.', ['exclamation', 'désillusion', 'théâtre', 'goethe']],
      ['Quête', '« ce qui tient le monde au plus intime »', 'La science se transforme en aspiration métaphysique.', ['quête', 'métaphysique', 'connaissance', 'modernité']]
    ]
  },
  dickensDeuxVilles: {
    titre: 'Le meilleur et le pire',
    auteur: 'Dickens',
    oeuvre: 'Le Conte de deux cités (trad. fr.)',
    genre: 'Roman',
    diff: 2,
    texte: `C'était le meilleur des temps, c'était le pire des temps; c'était l'âge de la sagesse, c'était l'âge de la folie; c'était l'époque de la croyance, c'était l'époque de l'incrédulité; c'était la saison de la lumière, c'était la saison des ténèbres; c'était le printemps de l'espérance, c'était l'hiver du désespoir. Nous avions tout devant nous, nous n'avions rien devant nous; nous allions tous directement au ciel, nous allions tous directement dans l'autre sens. En un mot, cette époque insistait pour qu'on ne la reçût qu'au superlatif.`,
    contexte: 'Incipit historique fondé sur les contrastes.',
    attendus: [
      ['Antithèse', '« le meilleur des temps ... le pire des temps »', 'La structure binaire dramatise la période.', ['antithèse', 'histoire', 'contraste', 'dickens']],
      ['Parallélisme', '« c\'était ... c\'était ... »', 'La répétition donne un souffle oratoire.', ['parallélisme', 'rythme', 'incipit', 'roman']],
      ['Hyperbole', '« qu\'au superlatif »', "L'époque est pensée dans l'excès.", ['hyperbole', 'superlatif', 'révolution', 'narration']]
    ]
  },
  poeCorbeau: {
    titre: 'Jamais plus',
    auteur: 'Poe',
    oeuvre: 'Le Corbeau (trad. Mallarmé)',
    genre: 'Poésie',
    diff: 3,
    texte: `Une fois, sur le minuit lugubre, pendant que je m'appesantissais, faible et fatigué, sur maint curieux et bizarre volume de doctrine oubliée, pendant que je dodelinais la tête, presque assoupi soudain, il se fit comme un tapotement, comme de quelqu'un frappant doucement, frappant à la porte de ma chambre. « C'est quelque visiteur, murmurai-je, qui frappe à la porte de ma chambre; ce n'est que cela, et rien de plus. » Et le Corbeau, perché, ne dit qu'un mot, comme si son âme en ce seul mot se répandait: « Jamais plus. »`,
    contexte: 'Poème narratif de deuil et d’obsession.',
    attendus: [
      ['Refrain', '« Jamais plus »', 'La répétition verbalise l’irréversible.', ['refrain', 'deuil', 'fatalité', 'poe']],
      ['Atmosphère', '« minuit lugubre »', 'Le décor nocturne installe le fantastique.', ['atmosphère', 'nuit', 'angoisse', 'poésie']],
      ['Répétition sonore', '« frappant doucement, frappant »', "Le rythme mime l'obsession auditive.", ['répétition', 'son', 'obsession', 'narrateur']]
    ]
  },
  melvilleMoby: {
    titre: 'Appelez-moi Ismaël',
    auteur: 'Melville',
    oeuvre: 'Moby Dick (trad. fr.)',
    genre: 'Roman',
    diff: 2,
    texte: `Appelez-moi Ismaël. Chaque fois que je sens la bouche se rider d'amertume, chaque fois que novembre humide s'installe dans mon âme, je comprends qu'il est temps de prendre la mer. C'est mon substitut au pistolet et à la balle. Je m'embarque tranquillement, sans bruit, comme d'autres vont à la pharmacie. Il y a dans l'océan quelque chose qui remet les pensées en ordre: le roulis, le vent salé, la ligne immense où le ciel rejoint l'eau. Alors je redeviens un homme parmi les hommes, un passant parmi les vagues.`,
    contexte: 'Incipit maritime et métaphysique.',
    attendus: [
      ['Formule', '« Appelez-moi Ismaël »', 'L’entrée directe crée une voix mémorable.', ['incipit', 'voix', 'melville', 'roman']],
      ['Métaphore', '« substitut au pistolet et à la balle »', 'La mer devient remède contre le désespoir.', ['métaphore', 'mer', 'désespoir', 'narrateur']],
      ['Image', '« le ciel rejoint l\'eau »', "L'horizon ouvre une perspective spirituelle.", ['image', 'horizon', 'quête', 'océan']]
    ]
  },
  hawthorneLettre: {
    titre: 'Le signe écarlate',
    auteur: 'Hawthorne',
    oeuvre: 'La Lettre écarlate (trad. fr.)',
    genre: 'Roman',
    diff: 2,
    texte: `Sur la poitrine de son corsage, brillait, brodée d'un fil rouge vif et entourée d'arabesques d'or, la lettre A. Ce signe singulier, que tout le monde regardait avec une curiosité mêlée de sévérité, semblait à la fois infamie et défi. Hester Prynne, droite, calme, tenait son enfant dans les bras et avançait au milieu de la foule, comme si la honte publique ne pouvait rien contre sa dignité intérieure. Les bonnes femmes murmuraient qu'il eût fallu marquer la faute au fer. Mais le visage d'Hester restait ferme, presque lumineux, sous la violence des jugements.`,
    contexte: 'Scène publique de stigmatisation morale.',
    attendus: [
      ['Symbole', '« la lettre A »', 'Le signe condense faute, contrôle social et résistance.', ['symbole', 'stigmatisation', 'hawthorne', 'roman']],
      ['Contraste', '« infamie et défi »', 'Le personnage transforme la marque imposée en force.', ['contraste', 'honte', 'dignité', 'femme']],
      ['Description', '« entourée d\'arabesques d\'or »', 'Le détail visuel rend le symbole ambigu.', ['description', 'visuel', 'jugement', 'puritanisme']]
    ]
  },
  stevensonJekyll: {
    titre: 'La potion de Jekyll',
    auteur: 'Stevenson',
    oeuvre: "L'Étrange Cas du Dr Jekyll et de Mr Hyde (trad. fr.)",
    genre: 'Roman',
    diff: 2,
    texte: `Je bus la potion d'un trait; un frisson me traversa, suivi d'une nausée atroce. Il y eut en moi comme un craquement, un déchirement, puis une ivresse furieuse. Quand j'ouvris les yeux, je n'étais plus le même homme. Je sentais une légèreté inconnue, une hardiesse coupable, une joie noire de me savoir affranchi de tout frein. Je tendis les mains: elles étaient plus nerveuses, plus sèches; je me regardai dans la glace, et je vis Hyde. Ainsi la dualité qui dormait en moi prit un visage, et ce visage était le mal.`,
    contexte: 'Naissance du double monstrueux.',
    attendus: [
      ['Gradation', '« frisson ... nausée ... déchirement »', 'La transformation est rendue sensible physiquement.', ['gradation', 'métamorphose', 'stevenson', 'fantastique']],
      ['Opposition', '« je n\'étais plus le même homme »', 'Le texte dramatise la scission identitaire.', ['opposition', 'double', 'identité', 'roman']],
      ['Symbole', '« je vis Hyde »', 'Le nom propre devient figure du mal intérieur.', ['symbole', 'hyde', 'mal', 'psychologie']]
    ]
  },
  wildePortrait: {
    titre: 'Le poids des jours',
    auteur: 'Wilde',
    oeuvre: 'Le Portrait de Dorian Gray (trad. fr.)',
    genre: 'Roman',
    diff: 2,
    texte: `Le portrait était devant lui, plus vivant que jamais dans sa corruption. Les rides de la cruauté marquaient la bouche; les yeux portaient une lueur rusée et froide; quelque chose de rouge traînait sur la main peinte. Dorian contempla cette image et sentit la peur le traverser: chaque faute qu'il commettait s'écrivait là, tandis que son visage à lui demeurait intact, jeune, admirable. Il songea que le tableau était devenu sa conscience visible. « C'est mon âme », murmura-t-il, et l'horreur de cette vérité le fit reculer.`,
    contexte: 'Scène de conscience et de dédoublement moral.',
    attendus: [
      ['Personnification', '« plus vivant que jamais »', 'Le tableau agit comme un être moral autonome.', ['personnification', 'portrait', 'wilde', 'symbolisme']],
      ['Antithèse', '« son visage ... demeurait intact »', 'Beauté extérieure et corruption intérieure s’opposent.', ['antithèse', 'apparence', 'âme', 'décadence']],
      ['Formule', '« C\'est mon âme »', 'La phrase explicite la matérialisation de la faute.', ['formule', 'conscience', 'faute', 'roman']]
    ]
  },
  byronHarold: {
    titre: 'L’âme voyageuse',
    auteur: 'Byron',
    oeuvre: "Le Pèlerinage de Childe Harold (trad. fr.)",
    genre: 'Poésie',
    diff: 2,
    texte: `Il marcha longtemps sur les rives où la mer battait les rochers, sans joie et sans repos, portant avec lui la lassitude du monde. Les fêtes, les gloires, les amitiés mêmes l'avaient laissé vide. Il cherchait dans les ruines, dans les ciels du soir, dans le bruit des vagues, un accord secret que la société lui refusait. Ô liberté! cria-t-il, toi seule peux guérir le cœur fatigué des hommes. Mais la liberté elle-même ressemble parfois à un vent froid: elle ouvre l'horizon et laisse l'âme plus nue encore devant l'infini.`,
    contexte: 'Poème du voyage intérieur romantique.',
    attendus: [
      ['Champ lexical', '« sans joie et sans repos »', 'La fatigue existentielle structure la plainte.', ['champ lexical', 'lassitude', 'byron', 'romantisme']],
      ['Apostrophe', '« Ô liberté! »', 'L’invocation transforme une idée en interlocutrice.', ['apostrophe', 'liberté', 'lyrique', 'poésie']],
      ['Image', '« un vent froid »', 'La liberté est pensée comme expérience ambivalente.', ['image', 'ambivalence', 'infini', 'sujet']]
    ]
  },
  shelleyFrankenstein: {
    titre: 'Face au créateur',
    auteur: 'Shelley',
    oeuvre: 'Frankenstein (trad. fr.)',
    genre: 'Roman',
    diff: 2,
    texte: `Je devrais être ton Adam, et je suis plutôt l'ange déchu que tu chasses de la joie sans faute commise. Je suis malheureux parce que je suis seul. Je suis bon; la misère m'a rendu démon. Donne-moi une compagne de mon espèce, et je me retirerai dans les déserts de l'Amérique du Sud; je ne nuirai plus à personne. Mais si tu refuses, je jure, par le soleil et par la terre, de te poursuivre jusqu'à ce que l'un de nous périsse. Souviens-toi que je suis ta créature, et que ton refus fera de moi ton ennemi.`,
    contexte: 'Plaidoyer de la créature contre son créateur.',
    attendus: [
      ['Référence biblique', '« ton Adam ... l\'ange déchu »', 'La créature relit sa condition en termes religieux.', ['bible', 'adam', 'chute', 'shelley']],
      ['Antithèse', '« Je suis bon; la misère m\'a rendu démon »', 'La monstruosité est présentée comme effet social.', ['antithèse', 'bon', 'démon', 'responsabilité']],
      ['Menace', '« je te poursuivre »', 'Le refus du créateur produit la logique tragique de vengeance.', ['menace', 'vengeance', 'drame', 'roman']]
    ]
  },
  pouchkineOneguine: {
    titre: 'Lettre de Tatiana',
    auteur: 'Pouchkine',
    oeuvre: 'Eugène Onéguine (trad. fr.)',
    genre: 'Poésie',
    diff: 2,
    texte: `Je vous écris: que puis-je de plus? Que puis-je dire encore? Je sais qu'en votre pouvoir est de me punir par le mépris. Mais vous, pour mon malheur, vous avez paru; et, vous voyant, je vous ai reconnu. C'était vous que j'attendais dans mes rêves silencieux, c'était vous que ma jeunesse appelait sans nom. Pourquoi êtes-vous venu dans notre solitude? Vous avez réveillé un cœur timide qui se croyait calme. Je suis à vous, et mon destin désormais dépend d'un mot que vous voudrez bien prononcer.`,
    contexte: "Déclaration amoureuse fondatrice du roman en vers.",
    attendus: [
      ['Interrogation', '« que puis-je de plus? »', 'Les questions traduisent l’extrême vulnérabilité.', ['interrogation', 'amour', 'tatiana', 'pouchkine']],
      ['Anaphore', '« c\'était vous »', "La répétition inscrit l'évidence du sentiment.", ['anaphore', 'déclaration', 'destin', 'poésie']],
      ['Formule', '« Je suis à vous »', 'La phrase condense le don total de soi.', ['formule', 'abandon', 'lyrique', 'roman en vers']]
    ]
  },
  gogolManteau: {
    titre: 'Akaki et son manteau',
    auteur: 'Gogol',
    oeuvre: 'Le Manteau (trad. fr.)',
    genre: 'Roman',
    diff: 2,
    texte: `Dans un département de Pétersbourg servait un fonctionnaire nommé Akaki Akakiévitch. On ne pouvait pas dire qu'il fût remarquable; petit, un peu grêlé, légèrement roux, et d'une vue courte, il copiait avec amour les papiers qu'on lui confiait. Son manteau, devenu si mince qu'on l'appelait la capote, ne protégeait plus du vent. Le tailleur déclara qu'il fallait en faire un neuf. Dès lors, Akaki vécut d'économies, marchant sur la pointe des pieds pour ne pas user ses semelles, afin d'atteindre ce bonheur: un manteau neuf.`,
    contexte: 'Portrait satirique du petit fonctionnaire.',
    attendus: [
      ['Caractérisation', '« On ne pouvait pas dire qu\'il fût remarquable »', 'Le héros est défini par sa médiocrité sociale.', ['caractérisation', 'fonctionnaire', 'gogol', 'satire']],
      ['Motif', '« un manteau neuf »', "L'objet devient horizon existentiel.", ['motif', 'objet', 'désir', 'réalisme']],
      ['Ironie', '« il copiait avec amour »', 'La dignité dérisoire du personnage suscite une compassion critique.', ['ironie', 'compassion', 'administration', 'nouvelle']]
    ]
  }
};

const WORLD_BY_FILE = {
  14: [
    // World lit 14: Ibsen
    WORLD_TEXTS.ibsenMaison,
    // World lit 14: Tchekhov
    WORLD_TEXTS.tchekhovCerisaie,
    // World lit 14: Whitman
    WORLD_TEXTS.whitmanSong,
    // World lit 14: Dostoïevski
    WORLD_TEXTS.dostoCrime
  ],
  15: [
    // World lit 15: Tolstoï
    WORLD_TEXTS.tolstoiGuerre,
    // World lit 15: Shakespeare
    WORLD_TEXTS.shakespeareHamlet,
    // World lit 15: Kafka
    WORLD_TEXTS.kafkaProces,
    // World lit 15: Cervantès
    WORLD_TEXTS.cervantesQuichotte
  ],
  16: [
    // World lit 16: Goethe
    WORLD_TEXTS.goetheFaust,
    // World lit 16: Dickens
    WORLD_TEXTS.dickensDeuxVilles,
    // World lit 16: Poe
    WORLD_TEXTS.poeCorbeau,
    // World lit 16: Melville
    WORLD_TEXTS.melvilleMoby
  ],
  17: [
    // World lit 17: Hawthorne
    WORLD_TEXTS.hawthorneLettre,
    // World lit 17: Stevenson
    WORLD_TEXTS.stevensonJekyll,
    // World lit 17: Wilde
    WORLD_TEXTS.wildePortrait,
    // World lit 17: Byron
    WORLD_TEXTS.byronHarold
  ],
  18: [
    // World lit 18: Shelley
    WORLD_TEXTS.shelleyFrankenstein,
    // World lit 18: Pouchkine
    WORLD_TEXTS.pouchkineOneguine,
    // World lit 18: Gogol
    WORLD_TEXTS.gogolManteau,
    // World lit 18: Ibsen
    {
      ...WORLD_TEXTS.ibsenMaison,
      titre: 'Hedda refuse la consolation',
      oeuvre: 'Hedda Gabler (trad. fr.)',
      texte: `HEDDA: Je veux, pour une fois dans ma vie, avoir pouvoir sur un destin d'homme. JEAN: Vous parlez toujours de pouvoir, madame. HEDDA: Oui, de pouvoir. On m'a appris à jouer du piano, à sourire, à recevoir; jamais à vivre. Et maintenant je suis enfermée dans cette maison comme dans une boîte. J'ai horreur du ridicule, horreur de la médiocrité. Je ne supporterai pas une existence où l'on respire la poussière des conventions. S'il faut choisir entre la liberté et l'ennui, je préfère encore la flamme.`
    }
  ],
  19: [
    // World lit 19: Tchekhov
    {
      ...WORLD_TEXTS.tchekhovCerisaie,
      titre: 'Le théâtre et la vie',
      oeuvre: 'La Mouette (trad. fr.)',
      texte: `NINA: Je suis une mouette... non, ce n'est pas cela. Je suis une actrice. Je joue, je souffre, je crois. TREPLEV: L'art nouveau viendra, il faut des formes nouvelles, et s'il n'y en a pas, mieux vaut rien. NINA: Quand je pense à ma vocation, je n'ai plus peur de la vie. J'ai appris qu'en notre métier, ce n'est pas la gloire qui compte, ni l'éclat, mais la patience, la foi, la capacité de porter sa croix. Je crois, et je souffre moins.`
    },
    // World lit 19: Whitman
    {
      ...WORLD_TEXTS.whitmanSong,
      titre: 'Salut au vaste monde',
      oeuvre: "Salut au monde (trad. fr.)",
      texte: `Je vois les rails de fer, les navires, les villes; je vois les paysans, les ouvriers, les mères, les enfants. Je vois les montagnes d'Asie, les plaines d'Amérique, les fleuves d'Europe, et tous les peuples me paraissent proches. O vous les nations, je vous salue! Je vous tends la main à travers les mers. Qui que tu sois, homme ou femme, ton souffle est frère du mien. Le monde n'est pas fragment, il est chant commun; et chaque voix y ajoute une mesure.`
    },
    // World lit 19: Dostoïevski
    {
      ...WORLD_TEXTS.dostoCrime,
      titre: 'Ivan face à la souffrance',
      oeuvre: 'Les Frères Karamazov (trad. fr.)',
      texte: `Je ne refuse pas Dieu, Aliocha; je lui rends seulement mon billet. Je ne puis accepter un monde où les larmes d'un enfant innocent entrent dans l'harmonie générale. Qu'on me montre la vérité finale, qu'on me promette la réconciliation, je n'en veux pas à ce prix. Mieux vaut rester avec ma douleur que d'acheter le paradis par le sang des petits. Voilà ma révolte. Elle n'est pas contre l'existence de Dieu, elle est contre le plan du monde.`
    },
    // World lit 19: Tolstoï
    {
      ...WORLD_TEXTS.tolstoiGuerre,
      titre: 'Anna sur le quai',
      oeuvre: 'Anna Karénine (trad. fr.)',
      texte: `Anna descendit du wagon, enveloppée de vapeur blanche et de bruits de fer. La neige tombait en gros flocons; des lanternes tremblaient dans le soir. Elle aperçut Vronski et sentit que sa vie venait de changer. Tout en elle était clarté et trouble à la fois. La convenance, le devoir, le regard des autres, tout cela reculait devant une force inconnue. Dans le fracas des roues, elle entendit comme un pressentiment: ce même rail qui porte les rencontres emporte aussi les destinées.`
    }
  ],
  20: [
    // World lit 20: Shakespeare
    {
      ...WORLD_TEXTS.shakespeareHamlet,
      titre: 'Demain, puis demain',
      oeuvre: 'Macbeth (trad. fr.)',
      texte: `Demain, puis demain, puis demain, rampe à petits pas de jour en jour jusqu'à la dernière syllabe du temps consigné. Et tous nos hiers n'ont fait qu'éclairer des fous sur le chemin de la poussière de la mort. Éteins-toi, éteins-toi, courte chandelle! La vie n'est qu'une ombre qui marche, un pauvre acteur qui se pavane et s'agite une heure sur la scène, puis qu'on n'entend plus. C'est un conte raconté par un idiot, plein de bruit et de fureur, et qui ne signifie rien.`
    },
    // World lit 20: Kafka
    {
      ...WORLD_TEXTS.kafkaProces,
      titre: 'Réveil de Gregor',
      oeuvre: 'La Métamorphose (trad. fr.)',
      texte: `En se réveillant un matin après des rêves agités, Gregor Samsa se trouva dans son lit métamorphosé en un monstrueux insecte. Il était sur le dos, un dos dur comme une carapace, et il voyait son ventre brun, cloisonné par des arches rigides. Ses nombreuses pattes, lamentablement grêles, nageaient devant ses yeux. « Qu'est-ce qui m'arrive? » pensa-t-il. Ce n'était pas un rêve. Sa chambre, avec ses murs familiers, demeurait tranquille; seul son corps avait basculé dans l'impossible.`
    },
    // World lit 20: Cervantès
    {
      ...WORLD_TEXTS.cervantesQuichotte,
      titre: 'Éloge des armes et des lettres',
      oeuvre: 'Don Quichotte, discours des armes et des lettres (trad. fr.)',
      texte: `Les lettres, dit Don Quichotte, ont pour fin de mettre les lois en clarté et de donner à chacun son droit; les armes ont pour fin et objet la paix, qui est le plus grand bien que les hommes puissent souhaiter en cette vie. On croit que le soldat n'est que violence, et l'homme de lettres n'est que repos; pourtant l'un et l'autre servent la république, chacun à sa manière. Si les armes sont rudes, les lettres sont laborieuses; et souvent les unes et les autres marchent au même péril.`
    },
    // World lit 20: Goethe
    {
      ...WORLD_TEXTS.goetheFaust,
      titre: 'Lettre de Werther',
      oeuvre: 'Les Souffrances du jeune Werther (trad. fr.)',
      texte: `Quelle douceur pour mon cœur de se perdre dans cette nature! Quand le brouillard de la vallée monte devant moi, quand le soleil de midi repose sur la masse impénétrable de ma forêt, quand, couché dans les hautes herbes auprès du ruisseau, je découvre mille petites plantes inconnues, je sens la présence de l'infini. Alors le monde entier devient intérieur, et mon âme se dilate. Mais cette félicité même me blesse, car je sens qu'elle est passagère, et que le désir dépasse toujours ce qu'il atteint.`
    }
  ],
  21: [
    // World lit 21: Dickens
    {
      ...WORLD_TEXTS.dickensDeuxVilles,
      titre: 'Oliver demande encore',
      oeuvre: 'Oliver Twist (trad. fr.)',
      texte: `Le soir, après qu'on eut partagé les maigres portions, les garçons tirèrent au sort celui qui irait parler au maître. Le sort tomba sur Oliver. Tremblant mais poussé par la faim, il s'avança, bol à la main, et dit: « S'il vous plaît, monsieur, j'en veux encore. » Le maître demeura pétrifié, puis le saisit au collet. Le bureau fut convoqué d'urgence: un enfant venait de demander plus de nourriture. Ce crime, dans la maison des pauvres, paraissait plus grave qu'une révolte.`
    },
    // World lit 21: Poe
    {
      ...WORLD_TEXTS.poeCorbeau,
      titre: 'Rue Morgue',
      oeuvre: 'Double assassinat dans la rue Morgue (trad. fr.)',
      texte: `Les habitants du quartier Saint-Roch furent réveillés, vers trois heures du matin, par des cris effroyables sortant d'une maison de la rue Morgue. On força la porte; la chambre était en désordre, les meubles brisés, les murs tachés. Le corps de Mademoiselle L'Espanaye gisait dans la cour; celui de sa mère fut trouvé dans la cheminée, la tête en bas, le corps affreusement meurtri. Plusieurs témoins affirmaient avoir entendu deux voix: l'une française, l'autre étrangère, impossible à identifier. Dupin sourit: le mystère venait de commencer.`
    },
    // World lit 21: Melville
    {
      ...WORLD_TEXTS.melvilleMoby,
      titre: 'Je préférerais ne pas',
      oeuvre: 'Bartleby (trad. fr.)',
      texte: `Je l'engageai d'abord parce qu'il copiait sans faute et sans bruit. Puis, un jour, je lui demandai de vérifier une copie avec moi. Bartleby répondit d'une voix calme: « Je préférerais ne pas. » Je crus mal entendre. Je répétai l'ordre. Il répéta: « Je préférerais ne pas. » Dès lors, cette formule revint pour toute demande, qu'il s'agît de sortir, de manger, de parler, d'expliquer. Il demeurait là, pâle, près de la fenêtre qui donnait sur un mur de briques, comme s'il habitait déjà un autre monde.`,
    },
    // World lit 21: Wilde
    {
      ...WORLD_TEXTS.wildePortrait,
      titre: 'Méditation de prison',
      oeuvre: 'De Profundis (trad. fr.)',
      texte: `La souffrance est le seul mode par lequel la conscience se révèle à elle-même dans sa profondeur. J'avais cru que l'art me suffisait; j'apprends ici, dans la solitude et la honte, que la douleur est aussi une forme de connaissance. Tout ce que j'avais pris pour éclat n'était qu'apparence. Le cœur humilié voit plus juste. Je dois accepter ce qui m'arrive, non comme une simple punition, mais comme une vérité qui me traverse et qui me transforme. Il n'est pas de création sans cette descente dans l'ombre.`
    }
  ]
};

const buildData = (fileNumber, firstId) => {
  const world = WORLD_BY_FILE[fileNumber].map((e, i) =>
    makeEntry(
      `GT-${firstId + i}`,
      e.titre,
      e.auteur,
      e.oeuvre,
      e.genre,
      e.diff,
      e.texte,
      e.contexte,
      e.attendus
    )
  );

  const french = FRENCH_BASE.map((e, i) =>
    makeEntry(
      `GT-${firstId + 4 + i}`,
      `${e.titre} [Série ${fileNumber}]`,
      e.auteur,
      e.oeuvre,
      e.genre,
      ((e.diff + fileNumber + i) % 3) + 1,
      e.texte,
      e.contexte,
      e.attendus
    )
  );

  return [...world, ...french];
};

export const DATA14 = buildData(14, 796);
export const DATA15 = buildData(15, 820);
export const DATA16 = buildData(16, 844);
export const DATA17 = buildData(17, 868);
export const DATA18 = buildData(18, 892);
export const DATA19 = buildData(19, 916);
export const DATA20 = buildData(20, 940);
export const DATA21 = buildData(21, 964);
