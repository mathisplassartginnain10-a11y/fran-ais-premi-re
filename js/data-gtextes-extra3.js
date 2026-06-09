/* Grands textes — lot 4 (GT-081 → GT-100) · fusion au chargement */
const GRANDS_TEXTES_EXTRA3 = [
  {
    id: "GT-081",
    titre: "La Princesse de Clèves — confession",
    auteur: "Madame de Lafayette",
    oeuvre: "La Princesse de Clèves (1678)",
    genre: "Roman",
    diff: 2,
    texte: `Je n'ai pas tenu compte de ce que je vous avais dit, que je ne devais pas vous aimer ; je sens que je ne puis ni ne dois l'être. Il ne dépend pas de moi de vous donner des marques de mon estime et de ma tendresse.`,
    contexte: "La princesse avoue à Monsieur de Clèves son amour pour le duc de Nemours — roman psychologique fondateur.",
    attendus: [      { procede: "Antithèse", citation: "« ne devais pas vous aimer » / « estime et tendresse »", interpretation: "Antithèse: « ne devais pas vous aimer » s'oppose à « estime et tendresse ». Cette tension structure le sens et oblige le lecteur à mesurer l'écart entre les deux idées.", keywords: ["antithèse", "devoir", "tendresse", "passion", "contraste", "moral"] },
      { procede: "Registre pathétique", citation: "« Il ne dépend pas de moi »", interpretation: "Registre pathétique : la princesse est victime d'un sentiment involontaire — pitié pour une héroïne déchirée.", keywords: ["pathétique", "victime", "involont", "pitié", "déchir", "sentiment"] },
      { procede: "Champ lexical", citation: "« estime », « tendresse », « aimer »", interpretation: "Champ lexical de l'affect : vocabulaire nuancé qui distingue estime, tendresse et amour — psychologie fine.", keywords: ["champ lexical", "estime", "tendresse", "aimer", "affect", "psycholog"] },
      { procede: "Litote", citation: "« ne devais pas vous aimer »", interpretation: "Litote ou pudeur classique : la princesse admet une faute tout en la formulant avec retenue — pudeur aristocratique.", keywords: ["litote", "pudeur", "retenue", "faute", "classique", "aristocr"] }
    ]
  },
  {
    id: "GT-082",
    titre: "René — le mal du siècle",
    auteur: "Chateaubriand",
    oeuvre: "René (1802)",
    genre: "Roman",
    diff: 2,
    texte: `Il n'y a point d'individu qui ne soit plus heureux que moi dans le monde entier. Un frère, une sœur, une maîtresse, une mère, perdues dans la tombe !`,
    contexte: "René confie son mal du siècle à un père missionnaire — préromantisme et mélancolie.",
    attendus: [
      { procede: "Antithèse", citation: "« plus heureux que moi » / « perdues dans la tombe »", interpretation: "Antithèse ironique : René se dit le plus malheureux alors qu'il énumère ses deuils — exagération romantique.", keywords: ["antithèse", "heureux", "tombe", "iron", "malheur", "contraste"] },
      { procede: "Énumération", citation: "« Un frère, une sœur, une maîtresse, une mère »", interpretation: "Chateaubriand recourt à l'énumération (« frère », « maîtresse », « mère ») pour épuise ou exalte selon la visée de l'auteur ; la liste éclaire du rené confie son mal du siècle à un père missionnaire dans René.", keywords: ["énumération", "frère", "sœur", "mère", "deuil", "liste"] },
      { procede: "Accumulation", citation: "« frère… sœur… maîtresse… mère »", interpretation: "Accumulation repérée dans « frère… sœur… maîtresse… mère »: la liste multiplie les occurrences et renforce l'idée centrale de préromantisme et mélancolie.", keywords: ["accumulation", "mort", "spleen", "isolement", "masse", "deuil"] },
      { procede: "Registre lyrique", citation: "« mal du siècle »", interpretation: "À travers « mal du siècle », le registre lyrique domine et exprime une subjectivité intime et des émotions personnelles.", keywords: ["lyrique", "je", "romant", "mélancol", "subjectiv", "spleen"] },
      { procede: "Hyperbole", citation: "« plus heureux que moi dans le monde entier »", interpretation: "En exagérant « plus heureux que moi dans le monde entier », le texte use de l'hyperbole afin de souligne l'intensité du ressenti — procédé fréquent chez Chateaubriand.", keywords: ["hyperbole", "malheur", "monde", "exag", "romant", "extrême"] }
    ]
  },
  {
    id: "GT-083",
    titre: "El Desdichado",
    auteur: "Gérard de Nerval",
    oeuvre: "Les Chimères (1854)",
    genre: "Poésie symboliste",
    diff: 3,
    texte: `Je suis le Ténébreux, — le Veuf, — l'Inconsolé,
Le Prince d'Aquitaine à la Tour abolie :
Ma seule Étoile est morte, — et mon luth constellé
Porte le Soleil noir de la Mélancolie.`,
    contexte: "Sonnet hermétique — identité multiple du poète, symbolisme et mélancolie.",
    attendus: [
      { procede: "Anaphore", citation: "« Je suis le… — le… — l'… »", interpretation: "En reprenant « Je suis le… — le… — l'… », Gérard de Nerval use de l'anaphore pour martèle l'idée directrice ; la répétition éclaire du sonnet hermétique dans Les Chimères.", keywords: ["anaphore", "je suis", "identité", "fragment", "répét", "sujet"] },
      { procede: "Énumération", citation: "« Ténébreux… Veuf… Inconsolé »", interpretation: "Gérard de Nerval recourt à l'énumération (« Ténébreux », « Veuf », « Inconsolé ») pour épuise ou exalte selon la visée de l'auteur ; la liste éclaire du sonnet hermétique dans Les Chimères.", keywords: ["énumération", "ténébreux", "veuf", "inconsol", "douleur", "liste"] },
      { procede: "Métaphore", citation: "« Soleil noir de la Mélancolie »", interpretation: "En transposant le sens de « Soleil noir de la Mélancolie », Gérard de Nerval métaphorise la scène ; le lecteur condense une idée complexe en une image frappante.", keywords: ["métaphore", "soleil", "noir", "mélancol", "spleen", "symbol"] },
      { procede: "Oxymore", citation: "« Soleil noir »", interpretation: "Oxymore repéré dans « Soleil noir »: l'association d'opposés condense une contradiction poétique propre à identité multiple du poète.", keywords: ["oxymore", "soleil", "noir", "paradox", "oppos", "contradict"] },
      { procede: "Registre lyrique", citation: "« Je suis le Ténébreux »", interpretation: "Registre lyrique: par « Je suis le Ténébreux », Gérard de Nerval exprime une subjectivité intime et des émotions personnelles — tonalité dominante de Les Chimères.", keywords: ["lyrique", "je", "myth", "vision", "subjectiv", "poète"] },
      { procede: "Sonnet", citation: "forme en 14 vers", interpretation: "Sonnet: forme fixe de quatorze vers (2 quatrains + 2 tercets). La contrainte concentre identité multiple du poète et prépare souvent une chute au tercet.", keywords: ["sonnet", "forme", "contrainte", "symbol", "dense", "fixe"] }
    ]
  },
  {
    id: "GT-084",
    titre: "À une passante",
    auteur: "Baudelaire",
    oeuvre: "Les Fleurs du Mal (1857)",
    genre: "Poésie",
    diff: 2,
    texte: `La rue assourdissante autour de moi hurlait.
Longue, mince, en deuil, la majestueuse tristesse
De son maintien, la rendait comme une reine
Et j'ai senti passer un coup de foudre.`,
    contexte: "Poème en prose lyrique — beauté fugitive dans la foule parisienne, modernité urbaine.",
    attendus: [
      { procede: "Comparaison", citation: "« comme une reine »", interpretation: "Le parallèle introduit par « comme une reine » (comparaison) facilite la visualisation de la scène et précise la dimension poème en prose lyrique du passage.", keywords: ["comparaison", "comme", "reine", "passante", "idéal", "transfig"] },
      { procede: "Métaphore", citation: "« un coup de foudre »", interpretation: "« un coup de foudre » fonctionne comme métaphore: le rapprochement implicite enrichit beauté fugitive dans la foule parisienne et marque le style de Baudelaire.", keywords: ["métaphore", "foudre", "émotion", "instant", "intens", "amour"] },
      { procede: "Champ lexical", citation: "« deuil », « majestueuse tristesse », « mince »", interpretation: "Baudelaire densifie le passage avec un champ lexical centré sur deuil (« deuil », « majestueuse », « tristesse », « mince »), ce qui insiste sur l'idée centrale par résonance lexicale et ancre le thème de poème en prose lyrique.", keywords: ["champ lexical", "deuil", "tristesse", "mélancol", "beauté", "distant"] },
      { procede: "Registre lyrique", citation: "« j'ai senti passer »", interpretation: "Registre lyrique: par « j'ai senti passer », Baudelaire exprime une subjectivité intime et des émotions personnelles — tonalité dominante de Les Fleurs du Mal.", keywords: ["lyrique", "je", "senti", "fulgur", "subjectiv", "moderne"] },
      { procede: "Hyperbole", citation: "« rue assourdissante… hurlait »", interpretation: "« rue assourdissante… hurlait » relève de l'hyperbole : l'amplification souligne l'intensité du ressenti et fixe l'émotion autour de poème en prose lyrique.", keywords: ["hyperbole", "rue", "hurler", "exag", "contraste", "ville"] }
    ]
  },
  {
    id: "GT-085",
    titre: "Indiana — incipit",
    auteur: "George Sand",
    oeuvre: "Indiana (1832)",
    genre: "Roman",
    diff: 2,
    texte: `Il y avait, dans l'île Bourbon, une maison bien connue, qu'on appelait le manoir de B… Elle était située au fond d'un vallon, au milieu de plantations de caféiers.`,
    contexte: "Roman colonial et féministe — cadre exotique, Indiana prisonnière de son mariage.",
    attendus: [
      { procede: "Focalisation zéro", citation: "« Il y avait… une maison »", interpretation: "Focalisation zéro (externe) : le narrateur omniscient installe le décor — description objective du cadre.", keywords: ["focalisation zéro", "narrateur", "décor", "objectif", "omnisc", "description"] },
      { procede: "Champ lexical", citation: "« île Bourbon », « caféiers », « vallon »", interpretation: "Champ lexical centré sur cadre exotique: « île », « Bourbon », « caféiers ». Ces résonances lexicales créent une atmosphère cohérente et insistent sur l'idée directrice.", keywords: ["champ lexical", "île", "café", "exot", "colonial", "vallon"] },
      { procede: "Registre épique", citation: "« manoir… au fond d'un vallon »", interpretation: "Registre épique: « manoir… au fond d'un vallon » élève l'action au niveau du grand récit et exalte la scène, au cœur du cadre exotique.", keywords: ["épique", "manoir", "destin", "cadre", "romanesq", "lieu"] },
      { procede: "Ellipse", citation: "« le manoir de B… »", interpretation: "Ellipse du nom de lieu : suspension qui crée un effet de récit intime ou de secret — convention romanesque.", keywords: ["ellipse", "nom", "suspension", "secret", "convention", "récit"] }
    ]
  },
  {
    id: "GT-086",
    titre: "Illusions perdues — Lucien à Paris",
    auteur: "Balzac",
    oeuvre: "Illusions perdues (1837–1843)",
    genre: "Roman",
    diff: 2,
    texte: `Lucien regardait Paris du haut de Saint-Sulpice ; Paris lui semblait un océan de pierre, un désert de maisons, un abîme où l'on ne pouvait rien distinguer.`,
    contexte: "Lucien Chardon découvre Paris — roman de l'ascension sociale et de la désillusion.",
    attendus: [
      { procede: "Métaphore", citation: "« océan de pierre », « désert de maisons »", interpretation: "Par la métaphore (« océan », « pierre », « désert », « maisons »), le réel est détourné : Balzac condense une idée complexe en une image frappante tout en ancrant lucien chardon découvre paris.", keywords: ["métaphore", "océan", "pierre", "désert", "paris", "écrase"] },
      { procede: "Accumulation", citation: "« océan… désert… abîme »", interpretation: "Accumulation: les termes « océan », « désert », « abîme » juxtaposent plusieurs éléments pour insister sur le roman de l'ascension sociale et de la désillusion et produire un effet de plénitude ou d'oppression.", keywords: ["accumulation", "océan", "abîme", "menace", "hostil", "image"] },      { procede: "Hyperbole", citation: "« abîme où l'on ne pouvait rien distinguer »", interpretation: "Hyperbole : Paris est un abîme — exagération qui traduit le vertige du héros.", keywords: ["hyperbole", "abîme", "vertige", "exag", "paris", "distingu"] },
      { procede: "Antithèse", citation: "provincial / « océan de pierre »", interpretation: "Antithèse repérée dans « océan de pierre »: deux termes ou idées s'opposent pour souligner roman de l'ascension sociale et de la désillusion.", keywords: ["antithèse", "provinc", "métropole", "choc", "contraste", "monde"] }
    ]
  },
  {
    id: "GT-087",
    titre: "Boule de Suif — départ",
    auteur: "Maupassant",
    oeuvre: "Boule de Suif (1880)",
    genre: "Nouvelle",
    diff: 2,
    texte: `Les occupants des voitures commencèrent à s'ennuyer à mourir, et, faute de mieux, on parla de cette fille, bien entendu avec des plaisanteries et des grossièretés.`,
    contexte: "Nouvelle naturaliste — hypocrisie bourgeoise pendant la guerre de 1870.",
    attendus: [
      { procede: "Registre satirique", citation: "« plaisanteries et grossièretés »", interpretation: "À travers « plaisanteries et grossièretés », le registre satirique domine et dénonce les mœurs ou les institutions par l'ironie et la dérision.", keywords: ["satirique", "hypocris", "bourgeois", "mépris", "grossi", "dénonc"] },
      { procede: "Hyperbole", citation: "« s'ennuyer à mourir »", interpretation: "En exagérant « s'ennuyer à mourir », le texte use de l'hyperbole afin de souligne l'intensité du ressenti — procédé fréquent chez Maupassant.", keywords: ["hyperbole", "ennui", "mourir", "extrême", "famili", "réaliste"] },
      { procede: "Antithèse", citation: "« occupants » respectables / « cette fille »", interpretation: "Antithèse entre « occupants » et « cette fille »: le contraste met en relief deux pôles opposés et accentue hypocrisie bourgeoise pendant la guerre de 1870.", keywords: ["antithèse", "respect", "vulgar", "contraste", "moral", "fille"] },
      { procede: "Champ lexical", citation: "« plaisanteries », « grossièretés », « s'ennuyer »", interpretation: "Les mots « plaisanteries », « grossièretés », « s'ennuyer » appartiennent au même champ sémantique. Leur convergence renforce hypocrisie bourgeoise pendant la guerre de 1870 et structure l'unité thématique du passage.", keywords: ["champ lexical", "grossi", "mépris", "trivial", "bassesse", "voyageur"] },
      { procede: "Focalisation zéro", citation: "« Les occupants… on parla »", interpretation: "Focalisation zéro: « Les occupants… on parla » — le narrateur omniscient connaît et relate les faits avec une vision globale de hypocrisie bourgeoise pendant la guerre de 1870.", keywords: ["focalisation zéro", "narrateur", "groupe", "critique", "imperson", "observe"] }
    ]
  },
  {
    id: "GT-088",
    titre: "La Bête humaine — la peur",
    auteur: "Zola",
    oeuvre: "La Bête humaine (1890)",
    genre: "Roman naturaliste",
    diff: 3,
    texte: `Il avait peur, une peur atroce, une peur qui le prenait à la gorge, qui lui serrait le cœur, qui lui glaçait le sang dans les veines.`,
    contexte: "Jacques Lantier, héros maudit — hérédité, violence, naturalisme psychologique.",
    attendus: [
      { procede: "Accumulation", citation: "« peur atroce… à la gorge… serrait le cœur… glaçait le sang »", interpretation: "Accumulation des effets physiques de la peur : chaque membre du corps est envahi — naturalisme somatique.", keywords: ["accumulation", "peur", "corps", "sang", "natural", "physique"] },
      { procede: "Gradation", citation: "« peur… atroce… à la gorge… cœur… sang »", interpretation: "Zola recourt à le gradation (« peur », « atroce », « gorge », « sang ») pour épuise ou exalte selon la visée de l'auteur ; la liste éclaire du jacques lantier, héros maudit dans La Bête humaine.", keywords: ["gradation", "peur", "corps", "intens", "croit", "intérieur"] },
      { procede: "Registre pathétique", citation: "« peur atroce »", interpretation: "Registre pathétique: la scène suscite la compassion et l'indignation face à la souffrance; « peur atroce » concentre cette coloration de l'hérédité.", keywords: ["pathétique", "peur", "proie", "pit", "maudit", "forces"] },      { procede: "Hyperbole", citation: "« glaçait le sang dans les veines »", interpretation: "Hyperbole : la peur est si forte qu'elle fige le sang — exagération qui traduit la terreur.", keywords: ["hyperbole", "sang", "glaç", "terreur", "exag", "veines"] }
    ]
  },
  {
    id: "GT-089",
    titre: "Le Mariage de Figaro — liberté",
    auteur: "Beaumarchais",
    oeuvre: "Le Mariage de Figaro (1784)",
    genre: "Comédie",
    diff: 2,
    texte: `Parce que vous êtes un grand seigneur, vous vous croyez un grand génie !… Noblesse, fortune, un rang, des places, tout cela rend si fier ! Qu'avez-vous fait pour tant de biens ?`,
    contexte: "Figaro dénonce le privilège — comédie des Lumières, registre satirique et polémique.",
    attendus: [
      { procede: "Registre satirique", citation: "« vous vous croyez un grand génie »", interpretation: "Registre satirique: « vous vous croyez un grand génie » dénonce les mœurs ou les institutions par l'ironie et la dérision, au cœur du comédie des lumières.", keywords: ["satirique", "génie", "orgueil", "noblesse", "privil", "critique"] },
      { procede: "Anaphore", citation: "« Noblesse, fortune, un rang, des places »", interpretation: "L'anaphore (« Noblesse, fortune, un rang, des places ») fonctionne comme un leitmotiv : elle martèle l'idée directrice et renforce la cohésion du passage.", keywords: ["anaphore", "noblesse", "fortune", "rang", "énumér", "liste"] },
      { procede: "Antithèse", citation: "« grand seigneur » / « Qu'avez-vous fait »", interpretation: "Antithèse: « grand seigneur » s'oppose à « Qu'avez-vous fait ». Cette tension structure le sens et oblige le lecteur à mesurer l'écart entre les deux idées.", keywords: ["antithèse", "seigneur", "mérite", "lumières", "aristocr", "contraste"] },
      { procede: "Question rhétorique", citation: "« Qu'avez-vous fait pour tant de biens ? »", interpretation: "Question rhétorique repérée dans « Qu'avez-vous fait pour tant de biens? »: l'interrogation feinte structure l'argumentation de comédie des lumières.", keywords: ["question", "rhétor", "polém", "figaro", "comte", "engage"] },
      { procede: "Champ lexical", citation: "« Noblesse, fortune, rang, places, fier »", interpretation: "Le champ lexical repéré (« Noblesse », « fortune », « rang », « places ») enveloppe « Noblesse, fortune, rang, places, fier » : les résonances entre ces lexies insiste sur l'idée centrale par résonance lexicale dans Le Mariage de Figaro.", keywords: ["champ lexical", "noblesse", "fortune", "rang", "hierarch", "fier"] }
    ]
  },
  {
    id: "GT-090",
    titre: "Cinna — devoir et amitié",
    auteur: "Corneille",
    oeuvre: "Cinna (1641)",
    genre: "Tragédie",
    diff: 2,
    texte: `Pour ne le point suivre, il faut quitter la vie,
Et qui m'en laisserait le pouvoir, je le ferais.
Mais l'Empereur veut que je vive, et par sa bonté
Il m'ôte le moyen de mourir à sa pitié.`,
    contexte: "Auguste face à Cinna — tragédie politique, conflit entre clémence et justice.",
    attendus: [
      { procede: "Antithèse", citation: "« quitter la vie » / « veut que je vive »", interpretation: "Antithèse: « quitter la vie » s'oppose à « veut que je vive ». Cette tension structure le sens et oblige le lecteur à mesurer l'écart entre les deux idées.", keywords: ["antithèse", "mort", "vivre", "clémence", "contraste", "auguste"] },
      { procede: "Registre tragique", citation: "« quitter la vie »", interpretation: "À travers « quitter la vie », le registre tragique domine et installe une fatalité qui dépasse les personnages et provoque terreur ou pitié.", keywords: ["tragique", "mort", "destin", "volont", "enjeu", "politique"] },
      { procede: "Oxymore", citation: "« m'ôte le moyen de mourir à sa pitié »", interpretation: "L'oxymore « m'ôte le moyen de mourir à sa pitié » réunit deux termes inconciliables : la tension sémantique condense une contradiction vécue et condense auguste face à cinna.", keywords: ["oxymore", "pit", "mourir", "clémence", "paradox", "tyran"] },
      { procede: "Alexandrin", citation: "vers en douze syllabes", interpretation: "L'alexandrin repérée dans le vers en douze syllabes retarde ou brise le rythme attendu; le découpage du vers sert auguste face à cinna dans Cinna.", keywords: ["alexandrin", "douze", "syllabe", "classique", "cornel", "dignité"] },
      { procede: "Champ lexical", citation: "« vie », « mourir », « bonté », « pitié »", interpretation: "Le champ lexical repéré (« mourir », « bonté », « pitié ») enveloppe « vie » face à « mourir » : les résonances entre ces lexies insiste sur l'idée centrale par résonance lexicale dans Cinna.", keywords: ["champ lexical", "vie", "mourir", "bonté", "pit", "moral"] }
    ]
  },
  {
    id: "GT-091",
    titre: "Esther — prière d'ouverture",
    auteur: "Racine",
    oeuvre: "Esther (1689)",
    genre: "Tragédie",
    diff: 2,
    texte: `Oui, je viens, Seigneur, je viens, je viens en tremblant
Devant votre autel, où je me prosterne en vain :
Vous seul connaissez mon innocence et mon crime.`,
    contexte: "Esther implore Dieu — tragédie biblique, registre pathétique et religieux.",
    attendus: [
      { procede: "Anaphore", citation: "« je viens… je viens… je viens »", interpretation: "L'anaphore sur « je viens… je viens… je viens » martèle une forme répétée : l'insistance martèle l'idée directrice et imprime un rythme obsédant propre à Racine.", keywords: ["anaphore", "viens", "répét", "ferveur", "peur", "esther"] },
      { procede: "Registre pathétique", citation: "« en tremblant… en vain »", interpretation: "Registre pathétique: la scène suscite la compassion et l'indignation face à la souffrance; « en tremblant… en vain » concentre cette coloration du tragédie biblique.", keywords: ["pathétique", "trembl", "proie", "pit", "innoc", "persécut"] },
      { procede: "Antithèse", citation: "« innocence et mon crime »", interpretation: "Antithèse: « innocence et mon crime » installe une opposition nette qui condense la tension dramatique ou argumentative du passage.", keywords: ["antithèse", "innocence", "crime", "paradox", "moral", "pur"] },
      { procede: "Apostrophe", citation: "« Seigneur… votre autel »", interpretation: "En s'adressant directement (« Seigneur… votre autel »), le locuteur use de l'apostrophe pour implique le lecteur ou un destinataire absent.", keywords: ["apostrophe", "seigneur", "dieu", "relig", "lyrique", "autel"] },
      { procede: "Alexandrin", citation: "vers en douze syllabes", interpretation: "L'alexandrin repérée dans le vers en douze syllabes retarde ou brise le rythme attendu; le découpage du vers sert esther implore dieu dans Esther.", keywords: ["alexandrin", "solenn", "tragique", "racine", "vers", "cadence"] }
    ]
  },
  {
    id: "GT-092",
    titre: "Le Misanthrope — vérité",
    auteur: "Molière",
    oeuvre: "Le Misanthrope (1666)",
    genre: "Comédie",
    diff: 2,
    texte: `Je ne puis souffrir, et j'enrage en mon âme,
De voir les mœurs du temps, et la lâche bassesse
De ces lâches mortels qui, par une faiblesse,
Se laissent conduire au gré de leurs appétits.`,
    contexte: "Alceste dénonce l'hypocrisie mondaine — comédie de caractère, héros intransigeant.",
    attendus: [
      { procede: "Registre satirique", citation: "« lâche bassesse… lâches mortels »", interpretation: "À travers « lâche bassesse… lâches mortels », le texte bascule dans un registre satirique ; le lecteur est invité à critiquer les mœurs et les institutions par le rire, ce qui s'inscrit dans Le Misanthrope.", keywords: ["satirique", "lâche", "hypocris", "monde", "critique", "moral"] },
      { procede: "Anaphore", citation: "« lâche… lâches »", interpretation: "En reprenant « lâche… lâches », Molière use de l'anaphore pour martèle l'idée directrice ; la répétition éclaire de l'alceste dénonce l'hypocrisie mondaine dans Le Misanthrope.", keywords: ["anaphore", "lâche", "répét", "mépris", "alceste", "insiste"] },
      { procede: "Registre lyrique", citation: "« j'enrage en mon âme »", interpretation: "Registre lyrique: par « j'enrage en mon âme », Molière exprime une subjectivité intime et des émotions personnelles — tonalité dominante de Le Misanthrope.", keywords: ["lyrique", "je", "rage", "colère", "subjectiv", "misanthrope"] },
      { procede: "Champ lexical", citation: "« lâche », « bassesse », « faiblesse », « appétits »", interpretation: "Champ lexical: « lâche », « bassesse », « faiblesse ». L'accumulation de ces lexies enveloppe le lecteur dans l'univers de comédie de caractère.", keywords: ["champ lexical", "lâche", "bassesse", "faiblesse", "corrupt", "moral"] },
      { procede: "Antithèse", citation: "vérité d'Alceste / « mœurs du temps »", interpretation: "Antithèse: « mœurs du temps » installe une opposition nette qui condense la tension dramatique ou argumentative du passage.", keywords: ["antithèse", "vérité", "hypocris", "idéal", "contraste", "monde"] }
    ]
  },
  {
    id: "GT-093",
    titre: "Le Malade imaginaire — Argan",
    auteur: "Molière",
    oeuvre: "Le Malade imaginaire (1673)",
    genre: "Comédie",
    diff: 1,
    texte: `Tout ce qui est de moi est à la médecine. Je ne suis né que pour souffrir et pour me faire soigner ; je n'ai point de santé, et je suis malade.`,
    contexte: "Argan, hypocondriaque — satire de la médecine et du caractère comique.",
    attendus: [
      { procede: "Hyperbole", citation: "« Tout ce qui est de moi est à la médecine »", interpretation: "L'hyperbole « Tout ce qui est de moi est à la médecine » pousse l'expression au-delà du vraisemblable : Molière souligne l'intensité du ressenti pour marquer argan, hypocondriaque.", keywords: ["hyperbole", "médecine", "exag", "comique", "hypocond", "existence"] },
      { procede: "Registre comique", citation: "« né que pour souffrir et me faire soigner »", interpretation: "Registre comique: « né que pour souffrir et me faire soigner » provoque le rire par la situation, les mots ou les personnages, au cœur du satire de la médecine et du caractère comique.", keywords: ["comique", "souffrir", "soigner", "ridicule", "obsession", "argan"] },
      { procede: "Antithèse", citation: "« né pour souffrir » / vie normale", interpretation: "Antithèse repérée dans « né pour souffrir »: deux termes ou idées s'opposent pour souligner satire de la médecine et du caractère comique.", keywords: ["antithèse", "souffrir", "bon sens", "contraste", "rire", "destin"] },
      { procede: "Champ lexical", citation: "« médecine », « souffrir », « soigner », « malade »", interpretation: "Molière densifie le passage avec un champ lexical centré sur médecine (« médecine », « souffrir », « soigner », « malade »), ce qui insiste sur l'idée centrale par résonance lexicale et ancre le thème de argan, hypocondriaque.", keywords: ["champ lexical", "médecine", "malade", "soigner", "imagin", "médical"] },
      { procede: "Gradation", citation: "« souffrir… soigner… pas de santé… malade »", interpretation: "Gradation: « souffrir… soigner… pas de santé… malade » organise les éléments en intensité croissante ou décroissante. La progression dramatique éclaire du satire de la médecine et du caractère comique.", keywords: ["gradation", "souffrir", "malade", "obsession", "intens", "comique"] }
    ]
  },
  {
    id: "GT-094",
    titre: "Les Djinns — ouverture",
    auteur: "Hugo",
    oeuvre: "Les Contemplations (1856)",
    genre: "Poésie",
    diff: 2,
    texte: `Murs, ville,
Et port,
Et docks,
Silence !
Les djinns, fils du feu, dans les airs rapides et chauds,
Montent, retombent, ou passent en hurlant.`,
    contexte: "Poème en strophes de longueur variable — peur surnaturelle, rythme et crescendo.",
    attendus: [
      { procede: "Énumération", citation: "« Murs, ville, / Et port, / Et docks »", interpretation: "Énumération: les termes « Murs », « ville », « port » juxtaposent plusieurs éléments pour insister sur la peur surnaturelle et produire un effet de plénitude ou d'oppression.", keywords: ["énumération", "murs", "ville", "port", "liste", "décor"] },
      { procede: "Gradation", citation: "strophes qui s'allongent", interpretation: "Hugo recourt à le gradation (« strophes », « s'allongent ») pour épuise ou exalte selon la visée de l'auteur ; la liste éclaire du poème en strophes de longueur variable dans Les Contemplations.", keywords: ["gradation", "strophe", "crescendo", "rythme", "djinns", "forme"] },
      { procede: "Personnification", citation: "« djinns… en hurlant »", interpretation: "En personnifiant « djinns… en hurlant », le texte rend la description plus vivante ; l'animation du non-humain sert poème en strophes de longueur variable dans Les Contemplations.", keywords: ["personnification", "djinns", "hurler", "surnaturel", "peur", "vivant"] },
      { procede: "Registre fantastique", citation: "« fils du feu… en hurlant »", interpretation: "Registre fantastique: « fils du feu… en hurlant » trouble la frontière entre réel et surnaturel, au cœur de la peur surnaturelle.", keywords: ["fantastique", "feu", "surnaturel", "terreur", "merveill", "djinns"] },
      { procede: "Champ lexical", citation: "« feu », « airs rapides », « hurlant »", interpretation: "Hugo densifie le passage avec un champ lexical centré sur airs (« airs », « rapides », « hurlant »), ce qui insiste sur l'idée centrale par résonance lexicale et ancre le thème de poème en strophes de longueur variable.", keywords: ["champ lexical", "feu", "hurler", "violence", "infern", "air"] }
    ]
  },
  {
    id: "GT-095",
    titre: "O saisons, ô châtiments",
    auteur: "Arthur Rimbaud",
    oeuvre: "Une saison en enfer (1873)",
    genre: "Poésie moderniste",
    diff: 3,
    texte: `Ô saisons, ô châtiments
On est de son temps malgré tout
Et pourtant on ne s'y habitue pas
Plus doucement on y serait pris`,
    contexte: "Prose poétique — révolte existentielle, modernité rimbaudienne.",
    attendus: [
      { procede: "Apostrophe", citation: "« Ô saisons, ô châtiments »", interpretation: "L'apostrophe « Ô saisons, ô châtiments » interpelle un absent ou une abstraction : Arthur Rimbaud implique le lecteur ou un destinataire absent et dramatise prose poétique.", keywords: ["apostrophe", "saisons", "châtim", "interpelle", "lyrique", "révolte"] },
      { procede: "Anaphore", citation: "« Ô saisons, ô châtiments »", interpretation: "L'anaphore sur « Ô saisons, ô châtiments » martèle une forme répétée : l'insistance martèle l'idée directrice et imprime un rythme obsédant propre à Arthur Rimbaud.", keywords: ["anaphore", "ô", "répét", "douleur", "temps", "insiste"] },
      { procede: "Antithèse", citation: "« de son temps malgré tout » / « on ne s'y habitue pas »", interpretation: "Antithèse entre « de son temps malgré tout » et « on ne s'y habitue pas »: le contraste met en relief deux pôles opposés et accentue révolte existentielle.", keywords: ["antithèse", "temps", "habitue", "refus", "exist", "malaise"] },
      { procede: "Registre lyrique", citation: "« On est de son temps »", interpretation: "Registre lyrique: « On est de son temps » exprime une subjectivité intime et des émotions personnelles, au cœur du révolte existentielle.", keywords: ["lyrique", "temps", "destin", "subjectiv", "maudit", "méditat"] },
      { procede: "Vers libre", citation: "vers sans rime fixe", interpretation: "Vers libre: « vers sans rime fixe » échappe à la métrique régulière. Arthur Rimbaud privilégie la liberté rythmique et la modernité de révolte existentielle.", keywords: ["vers libre", "rupture", "moderne", "rimbaud", "forme", "classique"] }
    ]
  },
  {
    id: "GT-096",
    titre: "Le Silence de la mer",
    auteur: "Vercors",
    oeuvre: "Le Silence de la mer (1942)",
    genre: "Nouvelle",
    diff: 2,
    texte: `Nous ne lui répondions pas. Il restait là, debout, un instant, puis il s'inclinait légèrement et repartait sans avoir prononcé une parole.`,
    contexte: "Résistance passive — occupant allemand et famille française, silence comme refus.",
    attendus: [
      { procede: "Antithèse", citation: "visite de l'officier / silence total", interpretation: "Antithèse repérée dans « visite de l'officier / silence total »: deux termes ou idées s'opposent pour souligner occupant allemand et famille française.", keywords: ["antithèse", "silence", "ennemi", "résist", "mutisme", "contraste"] },
      { procede: "Registre pathétique", citation: "« Nous ne lui répondions pas »", interpretation: "Registre pathétique: « Nous ne lui répondions pas » suscite la compassion et l'indignation face à la souffrance, au cœur de l'occupant allemand et famille française.", keywords: ["pathétique", "silence", "tension", "courage", "peur", "moral"] },      { procede: "Champ lexical", citation: "« ne répondions pas », « sans avoir prononcé une parole »", interpretation: "Champ lexical du silence : répétition du mutisme — refus symbolique de collaborer.", keywords: ["champ lexical", "silence", "parole", "mutisme", "refus", "symbol"] },
      { procede: "Gradation", citation: "debout… s'inclinait… repartait", interpretation: "Vercors recourt à le gradation (« debout », « s'inclinait », « repartait ») pour épuise ou exalte selon la visée de l'auteur ; la liste éclaire du résistance passive dans Le Silence de la mer.", keywords: ["gradation", "geste", "incline", "repart", "tension", "dramat"] }
    ]
  },
  {
    id: "GT-097",
    titre: "Antigone — je suis de ceux",
    auteur: "Jean Anouilh",
    oeuvre: "Antigone (1944)",
    genre: "Tragédie",
    diff: 2,
    texte: `Je suis de ceux qui pensent toujours qu'on va faire quelque chose de bien. Et qui, parfois, le font.`,
    contexte: "Antigone moderne face à Créon — tragédie de la révolte, théâtre du XXe siècle.",
    attendus: [
      { procede: "Antithèse", citation: "« pensent… faire » / « parfois, le font »", interpretation: "Antithèse: « pensent… faire » s'oppose à « parfois, le font ». Cette tension structure le sens et oblige le lecteur à mesurer l'écart entre les deux idées.", keywords: ["antithèse", "pensent", "font", "idéal", "action", "espoir"] },
      { procede: "Registre tragique", citation: "« je suis de ceux »", interpretation: "Registre tragique: par « je suis de ceux », Jean Anouilh installe une fatalité qui dépasse les personnages et provoque terreur ou pitié — tonalité dominante de Antigone.", keywords: ["tragique", "antigone", "révolte", "héroïne", "destin", "liberté"] },
      { procede: "Registre lyrique", citation: "« Je suis de ceux »", interpretation: "Registre lyrique: par « Je suis de ceux », Jean Anouilh exprime une subjectivité intime et des émotions personnelles — tonalité dominante de Antigone.", keywords: ["lyrique", "je", "affirm", "subjectiv", "moral", "engage"] },
      { procede: "Litote", citation: "« parfois, le font »", interpretation: "Litote: « parfois, le font » dit moins pour faire entendre plus. L'atténuation apparente renforce en réalité l'intensité de tragédie de la révolte.", keywords: ["litote", "parfois", "atténue", "modest", "lucid", "action"] },
      { procede: "Champ lexical", citation: "« bien », « pensent », « font »", interpretation: "Autour de « bien » face à « pensent », le vocabulaire (« bien », « pensent », « font ») forme un réseau sémantique : le lecteur perçoit antigone moderne face à créon par accumulation lexicale.", keywords: ["champ lexical", "bien", "moral", "éthique", "action", "pensent"] }
    ]
  },

  {
    id: "GT-099",
    titre: "La Condition humaine — révolte",
    auteur: "André Malraux",
    oeuvre: "La Condition humaine (1933)",
    genre: "Roman",
    diff: 3,
    texte: `Ce qui meurt en un homme, c'est le consentement. La révolte, c'est ce qui le construit.`,
    contexte: "Roman engagé — révolution chinoise, philosophie de l'action et de la fraternité.",
    attendus: [
      { procede: "Antithèse", citation: "« consentement » / « révolte »", interpretation: "Antithèse: « consentement » s'oppose à « révolte ». Cette tension structure le sens et oblige le lecteur à mesurer l'écart entre les deux idées.", keywords: ["antithèse", "consent", "révolte", "passiv", "refus", "contraste"] },
      { procede: "Métaphore", citation: "« ce qui meurt… c'est le consentement »", interpretation: "Métaphore: « ce qui meurt… c'est le consentement » transfère le sens d'un domaine à un autre et crée une image frappante. André Malraux suggère ainsi le révolution chinoise.", keywords: ["métaphore", "meurt", "consent", "mort", "philosoph", "intérieur"] },
      { procede: "Registre épique", citation: "« révolte… construit »", interpretation: "À travers « révolte… construit », le registre épique domine et élève l'action au niveau du grand récit et exalte la scène.", keywords: ["épique", "révolte", "construit", "grandeur", "action", "révolution"] },
      { procede: "Parallélisme", citation: "« Ce qui meurt… / La révolte… »", interpretation: "Parallélisme repéré dans « Ce qui meurt… / La révolte… »: la répétition de structures parallèles insiste sur révolution chinoise.", keywords: ["parallélisme", "maxime", "aphor", "structure", "pensée", "répond"] },
      { procede: "Champ lexical", citation: "« meurt », « consentement », « révolte », « construit »", interpretation: "Champ lexical centré sur révolution chinoise: « meurt », « consentement », « révolte ». Ces résonances lexicales créent une atmosphère cohérente et insistent sur l'idée directrice.", keywords: ["champ lexical", "révolte", "consent", "action", "exist", "politique"] }
    ]
  }
];

const GTEXT_OEUVRE_INFO_EXTRA3 = {
  "princesse de cl": "Roman de Madame de Lafayette (1678) : premier roman psychologique — amour, devoir et pudeur à la cour.",
  "rené chateaubri": "Préface de Chateaubriand (1802) : mal du siècle, mélancolie romantique — René et Amélie.",
  "el desdichado": "Sonnet de Nerval (1854) : symbolisme, identités multiples — poésie hermétique.",
  "passante baudel": "Poème de Baudelaire (1857) : modernité urbaine, beauté fugitive — Fleurs du Mal.",
  "indiana sand": "Roman de George Sand (1832) : amour et colonialisme — Indiana et la Réunion.",
  "illusions perdu": "Roman de Balzac (1837) : Lucien Chardon, désillusion parisienne — Comédie humaine.",
  "boule de suif": "Nouvelle de Maupassant (1880) : guerre de 1870, hypocrisie bourgeoise.",
  "bete humaine": "Roman de Zola (1890) : hérédité, violence, chemin de fer — cycle des Rougon-Macquart.",
  "mariage de figaro": "Comédie de Beaumarchais (1784) : Figaro contre le comte — Lumières et satire.",
  "cinna corneille": "Tragédie de Corneille (1641) : Auguste, clémence et pouvoir — Rome impériale.",
  "esther racine": "Tragédie biblique de Racine (1689) : Esther et Assuérus — pièce à machines.",
  "misanthrope": "Comédie de Molière (1666) : Alceste, vérité et hypocrisie mondaine.",
  "malade imaginaire": "Comédie de Molière (1673) : Argan, satire de la médecine et du caractère.",
  "djinns hugo": "Poème de Hugo (1856) : peur surnaturelle, strophes en crescendo — Les Contemplations.",
  "saisons chatiments": "Prose de Rimbaud (1873) : Une saison en enfer — révolte et modernité.",
  "silence de la mer": "Nouvelle de Vercors (1942) : résistance passive sous l'Occupation — clandestinité.",
  "antigone anouilh": "Pièce d'Anouilh (1944) : révolte d'Antigone — tragédie modernisée.",
  "bossuet oraison": "Prédication de Bossuet (1674) : vanité des grandeurs — style baroque et moral.",
  "condition humaine": "Roman de Malraux (1933) : révolution chinoise, fraternité et action — existentialisme engagé.",
  "noces camus": "Essai de Camus (1938) : Méditerranée, bonheur sensuel — lumière contre le spleen."
};

if (typeof GRANDS_TEXTES !== 'undefined') {
  GRANDS_TEXTES.push(...GRANDS_TEXTES_EXTRA3);
}
if (typeof GTEXT_OEUVRE_INFO !== 'undefined') {
  Object.assign(GTEXT_OEUVRE_INFO, GTEXT_OEUVRE_INFO_EXTRA3);
}
