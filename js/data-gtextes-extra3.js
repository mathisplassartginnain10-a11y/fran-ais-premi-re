/* Grands textes — lot 4 (GT-081 → GT-100) · fusion au chargement */
const GRANDS_TEXTES_EXTRA3 = [
  {
    id: "GT-081",
    titre: "La Princesse de Clèves — confession",
    auteur: "Madame de Lafayette",
    oeuvre: "La Princesse de Clèves (1678)",
    genre: "Roman",
    diff: 2,
    texte: `MADAME DE CLÈVES
Je n'ai pas tenu compte de ce que je vous avais dit, que je ne devais pas vous aimer ; je sens que je ne puis ni ne dois l'être. Il ne dépend pas de moi de vous donner des marques de mon estime et de ma tendresse. Monsieur de Nemours a tout l'avantage qu'il peut avoir sur vous ; je l'admire, je l'estime, je suis sensible à toutes ses qualités, et je suis persuadée qu'il mérite que l'on l'aime.`,
    contexte: "La princesse avoue à Monsieur de Clèves son amour pour le duc de Nemours — roman psychologique fondateur.",
    attendus: [
      { procede: "Antithèse", citation: "« ne devais pas vous aimer »", interpretation: "L'opposition entre devoir et sentiment structure la confession — psychologie fine de la princesse.", keywords: ["antithèse","devoir","tendresse","passion","contraste","moral"] },
      { procede: "Registre pathétique", citation: "« Il ne dépend pas de moi »", interpretation: "La princesse est victime d'un sentiment involontaire — pitié pour une héroïne déchirée.", keywords: ["pathétique","victime","involontaire","pitié","déchirée","sentiment"] },
      { procede: "Champ lexical", citation: "« MADAME DE CLÈVES Je n'ai pas tenu compte de ce que je vous avais dit, que je ne »", interpretation: "Le vocabulaire nuancé distingue estime, tendresse et amour — psychologie aristocratique.", keywords: ["champ lexical","estime","tendresse","admire","affect","psychologie"] },
      { procede: "Litote", citation: "« ne devais pas vous aimer »", interpretation: "La pudeur classique formule la faute avec retenue — registre de la cour.", keywords: ["litote","pudeur","retenue","faute","classique","cour"] }
    ]
  },
  {
    id: "GT-082",
    titre: "René — le mal du siècle",
    auteur: "Chateaubriand",
    oeuvre: "René (1802)",
    genre: "Roman",
    diff: 2,
    texte: `RENÉ
Il n'y a point d'individu qui ne soit plus heureux que moi dans le monde entier. Non, il n'y a pas de malheur comparable à celui de voir se détruire les seules passions qu'on aime. Un frère, une sœur, une maîtresse, une mère, perdues dans la tombe ! J'étais seul au monde : j'avais tout ce qui peut constituer la vie d'un homme. Je vivais dans l'affection d'une femme admirable ; je l'avais choisie entre tous les êtres.`,
    contexte: "René confie son mal du siècle à un père missionnaire — préromantisme et mélancolie.",
    attendus: [
      { procede: "Antithèse", citation: "« plus heureux que moi » / « perdues dans la tombe »", interpretation: "L'ironie de l'hyperbole malheureuse structure le mal du siècle — exagération romantique.", keywords: ["antithèse","heureux","tombe","ironie","malheur","contraste"] },
      { procede: "Énumération", citation: "« Un frère, une sœur, une maîtresse, une mère »", interpretation: "La liste des deuils accumule les pertes — gradation pathétique du mal du siècle.", keywords: ["énumération","frère","sœur","mère","deuil","liste"] },
      { procede: "Hyperbole", citation: "« plus heureux que moi dans le monde entier »", interpretation: "L'exagération paradoxale traduit l'extrême mélancolie du préromantisme.", keywords: ["hyperbole","malheur","monde","exagération","romantique","mélancolie"] },
      { procede: "Registre lyrique", citation: "« RENÉ Il n'y a point d'individu qui ne soit plus heureux que moi dans le monde en »", interpretation: "La subjectivité du moi romantique domine — confession intime au père missionnaire.", keywords: ["lyrique","je","romantique","mélancolie","subjectivité","spleen"] }
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
Porte le Soleil noir de la Mélancolie.
La tour du Guet immense qui a su pati ;
Nul n'a connu mon cœur que toi, — Femme imaginaire !
Celle qui cent fois me tortura comme un feu,
Et qui n'osa, — voulant voir la Sirène
Qui dort toujours au son des accords défunts,
Sourire sur les lèvres de l'Océan.`,
    contexte: "Sonnet hermétique — identité multiple du poète, symbolisme et mélancolie.",
    attendus: [
      { procede: "Anaphore", citation: "« Je suis le… — le… — l'… »", interpretation: "La répétition fragmente l'identité du poète — sujet multiple et mélancolique.", keywords: ["anaphore","je suis","identité","fragment","répétition","nerveal"] },
      { procede: "Métaphore", citation: "« le Soleil noir de la Mélancolie »", interpretation: "L'oxymore solaire condense le spleen en image symboliste — héritage des Chimères.", keywords: ["métaphore","soleil noir","mélancolie","spleen","symbolisme","nerveau"] },
      { procede: "Énumération", citation: "« Ténébreux… Veuf… Inconsolé »", interpretation: "La liste des titres accumule les facettes du moi poétique déchiré.", keywords: ["énumération","ténébreux","veuf","inconsolé","identité","liste"] },
      { procede: "Registre lyrique", citation: "« Je suis le Ténébreux »", interpretation: "L'affirmation du moi mythique ouvre un sonnet hermétique et mélancolique.", keywords: ["lyrique","je","mythique","subjectivité","hermétique","poète"] }
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
Longue, mince, en grand deuil, douceur majestueuse,
Une femme passa, d'une main fastueuse
Élevant, balançant le feston et l'ourlet ;
Agile et noble, sa jambe de statue.
Moi, je buvais, crispé comme un extravagant,
Dans son œil, ciel livide où germe un Foudre,
Elle, délicate morte, toujours le cher corps vivant
Que j'ai senti passer un coup de foudre !
La rue assourdissante autour de moi hurlait.
Longue, mince, en grand deuil, douceur majestueuse,
Une femme passa, d'une main fastueuse
Élevant, balançant le feston et l'ourlet ;`,
    contexte: "Poème en prose lyrique — beauté fugitive dans la foule parisienne, modernité urbaine.",
    attendus: [
      { procede: "Hyperbole", citation: "« La rue assourdissante autour de moi hurlait »", interpretation: "L'amplification urbaine oppose le chaos extérieur à l'intensité intérieure.", keywords: ["hyperbole","rue","hurlait","exagération","ville","chaos"] },
      { procede: "Métaphore", citation: "« un coup de foudre »", interpretation: "L'émotion fulgurante condense la beauté fugitive en image — modernité baudelairienne.", keywords: ["métaphore","foudre","émotion","instant","beauté","fugitive"] },
      { procede: "Comparaison", citation: "« sa jambe de statue »", interpretation: "Le corps de la passante devient sculpture — idéalisation dans la foule.", keywords: ["comparaison","jambe","statue","idéal","passante","beauté"] },
      { procede: "Registre lyrique", citation: "« j'ai senti passer »", interpretation: "La subjectivité du poète domine — fulgurance de l'expérience urbaine moderne.", keywords: ["lyrique","je","senti","subjectivité","moderne","urbain"] }
    ]
  },
  {
    id: "GT-085",
    titre: "Indiana — incipit",
    auteur: "George Sand",
    oeuvre: "Indiana (1832)",
    genre: "Roman",
    diff: 2,
    texte: `Il y avait, dans l'île Bourbon, une maison bien connue, qu'on appelait le manoir de B… Elle était située au fond d'un vallon, au milieu de plantations de caféiers. C'était une grande maison carrée, à un seul étage, avec un vaste toit en terrasse. De chaque côté de la porte, deux colonnes de bois soutenaient un auvent ; et, au-dessus de la porte, on voyait une espèce de girouette en fer, qui représentait un homme armé d'une épée.`,
    contexte: "Roman colonial et féministe — cadre exotique, Indiana prisonnière de son mariage.",
    attendus: [
      { procede: "Champ lexical", citation: "« Il y avait, dans l'île Bourbon, une maison bien connue, qu'on appelait le manoir »", interpretation: "Le vocabulaire exotique installe le cadre colonial — décor de l'emprisonnement d'Indiana.", keywords: ["champ lexical","île","café","exotique","colonial","décor"] },
      { procede: "Ellipse", citation: "« le manoir de B… »", interpretation: "La suspension du nom crée un effet de secret ou d'intimité — convention romanesque.", keywords: ["ellipse","nom","suspension","secret","convention","récit"] },
      { procede: "Focalisation zéro", citation: "« Il y avait… une maison »", interpretation: "Le narrateur omniscient installe le décor objectivement — exposition du roman.", keywords: ["focalisation zéro","narrateur","décor","objectif","exposition","sand"] },
      { procede: "Registre descriptif", citation: "« grande maison carrée »", interpretation: "La description précise ancre le récit dans le réel géographique de la Réunion.", keywords: ["descriptif","maison","précision","réel","géographie","roman"] }
    ]
  },
  {
    id: "GT-086",
    titre: "Illusions perdues — Lucien à Paris",
    auteur: "Balzac",
    oeuvre: "Illusions perdues (1837–1843)",
    genre: "Roman",
    diff: 2,
    texte: `Lucien regardait Paris du haut de Saint-Sulpice ; Paris lui semblait un océan de pierre, un désert de maisons, un abîme où l'on ne pouvait rien distinguer. Il était venu de sa province avec des illusions ; il avait rêvé de gloire, de fortune, de femmes ; et il se trouvait seul, perdu dans cette ville immense, sans amis, sans protecteurs, sans ressources. Paris lui semblait un océan de pierre où il allait être englouti.`,
    contexte: "Lucien Chardon découvre Paris — roman de l'ascension sociale et de la désillusion.",
    attendus: [
      { procede: "Métaphore", citation: "« un océan de pierre »", interpretation: "Paris devient océan hostile — image qui traduit le vertige et l'écrasement du provincial.", keywords: ["métaphore","océan","pierre","paris","vertige","balzac"] },
      { procede: "Accumulation", citation: "« océan… désert… abîme »", interpretation: "Les trois images cumulent la menace de la métropole — désillusion parisienne.", keywords: ["accumulation","océan","désert","abîme","menace","métropole"] },
      { procede: "Hyperbole", citation: "« abîme où l'on ne pouvait rien distinguer »", interpretation: "L'exagération traduit le vertige de Lucien face à l'immensité urbaine.", keywords: ["hyperbole","abîme","vertige","exagération","immensité","ville"] },
      { procede: "Antithèse", citation: "« illusions » / « seul, perdu »", interpretation: "L'opposition entre rêves provinciaux et réalité parisienne structure l'ascension sociale.", keywords: ["antithèse","illusions","perdu","rêve","réalité","désillusion"] }
    ]
  },
  {
    id: "GT-087",
    titre: "Boule de Suif — départ",
    auteur: "Maupassant",
    oeuvre: "Boule de Suif (1880)",
    genre: "Nouvelle",
    diff: 2,
    texte: `Les occupants des voitures commencèrent à s'ennuyer à mourir, et, faute de mieux, on parla de cette fille, bien entendu avec des plaisanteries et des grossièretés. On la traitait comme une chose, comme un objet de plaisir ou de dédain. Les femmes la regardaient avec une curiosité méprisante ; les hommes la regardaient avec une curiosité avide. Et, faute de mieux, on parla de cette fille, bien entendu avec des plaisanteries et des grossièretés.`,
    contexte: "Nouvelle naturaliste — hypocrisie bourgeoise pendant la guerre de 1870.",
    attendus: [
      { procede: "Registre satirique", citation: "« plaisanteries et des grossièretés »", interpretation: "Maupassant dénonce l'hypocrisie bourgeoise — mépris et vulgarité des voyageurs.", keywords: ["satirique","plaisanteries","grossièretés","hypocrisie","bourgeois","mépris"] },
      { procede: "Hyperbole", citation: "« s'ennuyer à mourir »", interpretation: "L'exagération de l'ennui motive la bassesse du discours — réalisme maupassantien.", keywords: ["hyperbole","ennui","mourir","exagération","réalisme","voyage"] },
      { procede: "Antithèse", citation: "« occupants » / « cette fille »", interpretation: "L'opposition entre respectabilité affichée et mépris révèle la hypocrisie sociale.", keywords: ["antithèse","occupants","fille","respectabilité","mépris","contraste"] },
      { procede: "Focalisation zéro", citation: "« Les occupants… on parla »", interpretation: "Le narrateur omniscient observe le groupe — critique impersonnelle de la société.", keywords: ["focalisation zéro","narrateur","groupe","critique","société","observe"] }
    ]
  },
  {
    id: "GT-088",
    titre: "La Bête humaine — la peur",
    auteur: "Zola",
    oeuvre: "La Bête humaine (1890)",
    genre: "Roman naturaliste",
    diff: 3,
    texte: `Il avait peur, une peur atroce, une peur qui le prenait à la gorge, qui lui serrait le cœur, qui lui glaçait le sang dans les veines. Jacques Lantier avait peur de lui-même, peur de cette violence qui montait en lui sans qu'il la comprenne, peur de cette hérédité maudite qui le poussait vers le crime. Il avait peur, une peur atroce, une peur qui le prenait à la gorge, qui lui serrait le cœur, qui lui glaçait le sang dans les veines. Jacques Lantier avait peur de lui-même, peur de cette violence qui montait en lui sans qu'il la comprenne, peur de cette hérédité maudite qui le poussait vers le crime.`,
    contexte: "Jacques Lantier, héros maudit — hérédité, violence, naturalisme psychologique.",
    attendus: [
      { procede: "Accumulation", citation: "« à la gorge… serrait le cœur… glaçait le sang »", interpretation: "Les effets physiques de la peur envahissent le corps — naturalisme somatique zolien.", keywords: ["accumulation","peur","corps","sang","naturalisme","physique"] },
      { procede: "Gradation", citation: "« peur… atroce… gorge… cœur… sang »", interpretation: "L'intensité croissante de la terreur structure la crise intérieure de Jacques.", keywords: ["gradation","peur","intensité","terreur","crise","zola"] },
      { procede: "Registre pathétique", citation: "« peur de lui-même »", interpretation: "Jacques est proie de forces intérieures — compassion pour le héros maudit.", keywords: ["pathétique","peur","maudit","pitié","hérédité","forces"] },
      { procede: "Hyperbole", citation: "« glaçait le sang dans les veines »", interpretation: "L'exagération traduit la terreur physique de la violence héréditaire.", keywords: ["hyperbole","sang","glaçait","terreur","exagération","violence"] }
    ]
  },
  {
    id: "GT-089",
    titre: "Le Mariage de Figaro — liberté",
    auteur: "Beaumarchais",
    oeuvre: "Le Mariage de Figaro (1784)",
    genre: "Comédie",
    diff: 2,
    texte: `FIGARO
Parce que vous êtes un grand seigneur, vous vous croyez un grand génie ! Noblesse, fortune, un rang, des places, tout cela rend si fier ! Quoi ! vous n'avez rien de tout cela, et vous êtes fâché tout de même ! Que de travail pour trouver un pauvre bouffon ! Que de travail ! Eh ! Dieu merci, mon cher seigneur, avec le talent que j'ai pour accommoder tout ! Et pourvu que je gagne ma vie, peu m'importe que je travaille pour ou contre le roi, pour l'Espagne ou la France, pour le diable ou pour Dieu ! Mais qu'avez-vous fait de tant de biens ? Vous vous êtes donné la peine de naître, et rien de plus. Quant à moi, qui me suis fait tout seul...`,
    contexte: "Figaro dénonce le privilège — comédie des Lumières, registre satirique et polémique.",
    attendus: [
      { procede: "Question rhétorique", citation: "« qu'avez-vous fait de tant de biens ? »", interpretation: "La question engage le débat politique — critique des privilèges dans la comédie des Lumières.", keywords: ["question","rhétorique","biens","privilège","lumières","polémique"] },
      { procede: "Registre satirique", citation: "« vous vous croyez un grand génie »", interpretation: "Figaro dénonce l'orgueil nobiliaire — satire des Lumières contre l'aristocratie.", keywords: ["satirique","génie","noblesse","orgueil","figaro","critique"] },
      { procede: "Anaphore", citation: "« Noblesse, fortune, un rang, des places »", interpretation: "L'énumération martèle les avantages vides du comte — liste satirique.", keywords: ["anaphore","noblesse","fortune","rang","énumération","privilège"] },
      { procede: "Antithèse", citation: "« vous êtes donné la peine de naître » / « moi… tout seul »", interpretation: "L'opposition naissance/mérite structure la tirade politique de Figaro.", keywords: ["antithèse","naître","tout seul","mérite","travail","contraste"] }
    ]
  },
  {
    id: "GT-090",
    titre: "Cinna — devoir et amitié",
    auteur: "Corneille",
    oeuvre: "Cinna (1641)",
    genre: "Tragédie",
    diff: 2,
    texte: `AUGUSTE
Pour ne le point suivre, il faut quitter la vie,
Et sa clémence veut que je vive malheureux.
Il m'ôte le moyen de mourir à sa pitié,
Pour ne le point suivre il faut quitter la vie,
Et sa bonté veut que je vive malheureux.
AUGUSTE
Auguste, mon ennemi, m'arrache tout mon but ;
Il m'ôte le moyen de mourir à sa pitié,
Pour ne le point suivre il faut quitter la vie,
Et sa clémence veut que je vive malheureux.`,
    contexte: "Auguste face à Cinna — tragédie politique, conflit entre clémence et justice.",
    attendus: [
      { procede: "Antithèse", citation: "« quitter la vie » / « veut que je vive »", interpretation: "Auguste oscille entre mort et survie — dilemme tragique de la clémence impériale.", keywords: ["antithèse","mort","vivre","clémence","contraste","auguste"] },
      { procede: "Oxymore", citation: "« m'ôte le moyen de mourir à sa pitié »", interpretation: "La pitié empêche la mort — paradoxe du tyran clément qui condamne à vivre.", keywords: ["oxymore","pit","mourir","paradoxe","clémence","tyran"] },
      { procede: "Registre tragique", citation: "« quitter la vie »", interpretation: "Le choix entre mort et vie malheureuse installe la fatalité politique — grandeur cornélienne.", keywords: ["tragique","vie","mort","fatalité","politique","cornelle"] },
      { procede: "Alexandrin", citation: "« Il m'ôte le moyen de mourir à sa pitié »", interpretation: "Le vers solennel porte la dignité tragique d'Auguste face à Cinna.", keywords: ["alexandrin","douze","solennel","dignité","cornelle","vers"] }
    ]
  },
  {
    id: "GT-091",
    titre: "Esther — prière d'ouverture",
    auteur: "Racine",
    oeuvre: "Esther (1689)",
    genre: "Tragédie",
    diff: 2,
    texte: `ESTHER
Oui, je viens, Seigneur, je viens, je viens en tremblant
Dans ce saint lieu que vos oracles ont honoré,
Dans ce lieu, dont je tremble et n'ose regarder,
De ce divin mystère où votre majesté
Dans l'obscurité même éclate à vos fidèles.
Vous seul connaissez mon innocence et mon crime.
ESTHER
Oui, je viens, Seigneur, je viens, je viens en tremblant
Dans ce saint lieu que vos oracles ont honoré,
Dans ce lieu, dont je tremble et n'ose regarder,
De ce divin mystère où votre majesté
Dans l'obscurité même éclate à vos fidèles.`,
    contexte: "Esther implore Dieu — tragédie biblique, registre pathétique et religieux.",
    attendus: [
      { procede: "Anaphore", citation: "« je viens… je viens… je viens »", interpretation: "La triple répétition martèle la ferveur et la peur d'Esther — rythme obsédant.", keywords: ["anaphore","viens","répétition","ferveur","peur","esther"] },
      { procede: "Apostrophe", citation: "« Seigneur »", interpretation: "Esther interpelle Dieu — registre religieux et pathétique de la prière.", keywords: ["apostrophe","seigneur","dieu","religieux","prière","racine"] },
      { procede: "Antithèse", citation: "« innocence et mon crime »", interpretation: "L'opposition condense le paradoxe moral d'Esther — pureté et culpabilité.", keywords: ["antithèse","innocence","crime","paradoxe","moral","pur"] },
      { procede: "Registre pathétique", citation: "« en tremblant »", interpretation: "La terreur d'Esther suscite compassion — tragédie biblique pathétique.", keywords: ["pathétique","tremblant","terreur","compassion","innocence","persécution"] }
    ]
  },
  {
    id: "GT-092",
    titre: "Le Misanthrope — vérité",
    auteur: "Molière",
    oeuvre: "Le Misanthrope (1666)",
    genre: "Comédie",
    diff: 2,
    texte: `ALCESTE
Je ne puis souffrir, et j'enrage en mon âme,
De voir les hommes se vendre à des lâches bassesses,
Et traiter de souverain avec des basses faiblesses ;
D'adorer des sots gens, et se traiter de fripons,
Et de ne se donner jamais que de fausses raisons.
C'est une chose inconcevable,
Que tout ce qu'on dit ici passe pour raisonnable ;
Et qu'on n'y souffre point qu'un franc discoursier.
ALCESTE
Je ne puis souffrir, et j'enrage en mon âme,
De voir les hommes se vendre à des lâches bassesses,
Et traiter de souverain avec des basses faiblesses ;
D'adorer des sots gens, et se traiter de fripons.`,
    contexte: "Alceste dénonce l'hypocrisie mondaine — comédie de caractère, héros intransigeant.",
    attendus: [
      { procede: "Registre satirique", citation: "« lâches bassesses »", interpretation: "Alceste dénonce l'hypocrisie mondaine — satire des mœurs par le misanthrope.", keywords: ["satirique","lâche","bassesse","hypocrisie","alceste","monde"] },
      { procede: "Anaphore", citation: "« lâche… lâches »", interpretation: "La répétition insiste sur le mépris d'Alceste pour la faiblesse morale.", keywords: ["anaphore","lâche","répétition","mépris","faiblesse","molière"] },
      { procede: "Registre lyrique", citation: "« j'enrage en mon âme »", interpretation: "La colère subjective du misanthrope installe le registre lyrique dans la comédie.", keywords: ["lyrique","rage","colère","subjectivité","misanthrope","âme"] },
      { procede: "Champ lexical", citation: "« ALCESTE Je ne puis souffrir, et j'enrage en mon âme, De voir les hommes se vendr »", interpretation: "Le vocabulaire moral condense la critique de la corruption mondaine.", keywords: ["champ lexical","lâche","bassesse","faiblesse","corruption","moral"] }
    ]
  },
  {
    id: "GT-093",
    titre: "Le Malade imaginaire — Argan",
    auteur: "Molière",
    oeuvre: "Le Malade imaginaire (1673)",
    genre: "Comédie",
    diff: 1,
    texte: `ARGAN
Tout ce qui est de moi est à la médecine et à la mort ;
Je ne suis né que pour souffrir et pour me faire soigner ;
Je n'ai point de santé, et je suis malade par complaisance.
Béline, ma femme, et mes filles, Angélique et Louison,
Me font prendre toutes les drogues que les médecins ordonnent.
Je suis malade, et je veux être malade ; c'est ma profession.
ARGAN
Tout ce qui est de moi est à la médecine et à la mort ;
Je ne suis né que pour souffrir et pour me faire soigner ;
Je n'ai point de santé, et je suis malade par complaisance.`,
    contexte: "Argan, hypocondriaque — satire de la médecine et du caractère comique.",
    attendus: [
      { procede: "Hyperbole", citation: "« Tout ce qui est de moi est à la médecine »", interpretation: "L'exagération ridiculise l'obsession médicale d'Argan — comique de caractère.", keywords: ["hyperbole","médecine","exagération","obsession","argan","comique"] },
      { procede: "Registre comique", citation: "« que pour souffrir et pour me faire soig »", interpretation: "La formule provoque le rire par l'absurdité de l'hypocondriaque.", keywords: ["comique","souffrir","soigner","ridicule","hypocondriaque","absurde"] },
      { procede: "Champ lexical", citation: "« ARGAN Tout ce qui est de moi est à la médecine et à la mort ; Je ne suis né que »", interpretation: "Le vocabulaire médical structure l'obsession d'Argan — satire de la médecine.", keywords: ["champ lexical","médecine","malade","soigner","médical","satire"] },
      { procede: "Antithèse", citation: "« santé » / « malade par complaisance »", interpretation: "L'opposition entre bon sens et maladie choisie accentue le ridicule.", keywords: ["antithèse","santé","malade","complaisance","ridicule","contraste"] }
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
Air nocturne et brume, encor brume ;
Montent, retombent, ou passent en hurlant,
Les djinns, fils du feu, dans l'air rapides et légers ;
Le cortège ailé prend sa course, en hurlant ;
Et sous les plis de leur robe épaisse
Montent de longs nuages en courbe,
Et les vents, les vents aux longs soupirs,
Battent les murailles dans la nuit.
Murs, ville,
Et port,
Air nocturne et brume, encor brume ;
Montent, retombent, ou passent en hurlant,
Les djinns, fils du feu, dans l'air rapides et légers ;`,
    contexte: "Poème en strophes de longueur variable — peur surnaturelle, rythme et crescendo.",
    attendus: [
      { procede: "Énumération", citation: "« Murs, ville, Et port, Air nocturne et brume, encor brume ; Montent, retombent, o »", interpretation: "La liste des lieux installe le décor nocturne — effet de plénitude oppressante.", keywords: ["énumération","murs","ville","port","décor","liste"] },
      { procede: "Gradation", citation: "« Montent, retombent, ou passent en hurlant »", interpretation: "La progression des mouvements crée un crescendo de terreur surnaturelle.", keywords: ["gradation","montent","retombent","crescendo","terreur","hugo"] },
      { procede: "Personnification", citation: "« Les djinns… en hurlant »", interpretation: "Les djinns animés hurlent — personnification du surnaturel fantastique.", keywords: ["personnification","djinns","hurler","surnaturel","fantastique","peur"] },
      { procede: "Registre fantastique", citation: "« fils du feu »", interpretation: "Le registre fantastique trouble la frontière entre réel et surnaturel.", keywords: ["fantastique","feu","surnaturel","terreur","djinns","nuit"] }
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
On est de son temps malgré tout et qu'on ne s'y habitue pas :
Plutôt être dévoré par la bête féroce, que d'être rongé par mille fourmis.
Plus doucement on y serait pris.
Ô saisons, ô châtiments
On est de son temps malgré tout et qu'on ne s'y habitue pas :
Plus doucement on y serait pris.
Ô saisons, ô châtiments
On est de son temps malgré tout et qu'on ne s'y habitue pas :
Plutôt être dévoré par la bête féroce, que d'être rongé par mille fourmis.`,
    contexte: "Prose poétique — révolte existentielle, modernité rimbaudienne.",
    attendus: [
      { procede: "Apostrophe", citation: "« Ô saisons, ô châtiments »", interpretation: "La double apostrophe interpelle le temps et la souffrance — révolte existentielle.", keywords: ["apostrophe","saisons","châtiments","révolte","rimbaud","temps"] },
      { procede: "Anaphore", citation: "« Ô saisons, ô châtiments »", interpretation: "La répétition martèle l'obsession temporelle — modernité rimbaudienne.", keywords: ["anaphore","ô","répétition","obsession","temps","insiste"] },
      { procede: "Antithèse", citation: "« de son temps » / « ne s'y habitue pas »", interpretation: "L'opposition traduit le malaise existentiel — refus de s'accommoder.", keywords: ["antithèse","temps","habitue","refus","malaise","existence"] },
      { procede: "Vers libre", citation: "« On est de son temps malgré tout »", interpretation: "La prose poétique échappe à la forme fixe — rupture avec la poésie classique.", keywords: ["vers libre","rupture","moderne","prose","rimbaud","forme"] }
    ]
  },
  {
    id: "GT-096",
    titre: "Le Silence de la mer",
    auteur: "Vercors",
    oeuvre: "Le Silence de la mer (1942)",
    genre: "Nouvelle",
    diff: 2,
    texte: `Je ne voyais pas l'officier. Le soir, après le dîner, il venait dans la salle de séjour. Il entrait, saluait la tante, la mère, et moi ; et s'asseyait dans un fauteuil, sans avoir l'air de nous regarder. Nous ne lui répondions pas. Il restait là, debout un instant, puis il s'inclinait légèrement et repartait sans avoir prononcé une parole. Je ne voyais pas l'officier. Le soir, après le dîner, il venait dans la salle de séjour. Il entrait, saluait la tante, la mère, et moi ; et s'asseyait dans un fauteuil, sans avoir l'air de nous regarder.`,
    contexte: "Résistance passive — occupant allemand et famille française, silence comme refus.",
    attendus: [
      { procede: "Champ lexical", citation: "« Je ne voyais pas l'officier. Le soir, après le dîner, il venait dans la salle de »", interpretation: "Le mutisme structure le refus — résistance passive symbolique.", keywords: ["champ lexical","silence","mutisme","refus","résistance","symbolique"] },
      { procede: "Gradation", citation: "« entrait… s'asseyait… s'inclinait… repartait »", interpretation: "La progression des gestes dramatise la tension sans parole.", keywords: ["gradation","geste","tension","progression","dramatique","vercors"] },
      { procede: "Registre pathétique", citation: "« Nous ne lui répondions pas »", interpretation: "Le silence suscite tension et courage moral — résistance passive.", keywords: ["pathétique","silence","courage","tension","moral","occupation"] },
      { procede: "Antithèse", citation: "« Je ne voyais pas l'officier. Le soir, après le dîner, il venait dans la salle de »", interpretation: "L'opposition entre présence de l'ennemi et mutisme traduit le refus.", keywords: ["antithèse","officier","silence","ennemi","refus","contraste"] }
    ]
  },
  {
    id: "GT-097",
    titre: "Antigone — je suis de ceux",
    auteur: "Jean Anouilh",
    oeuvre: "Antigone (1944)",
    genre: "Tragédie",
    diff: 2,
    texte: `ANTIGONE
Je suis de ceux — peut-être — qui n'ont pas besoin de comprendre pour agir. Je suis de ceux — peut-être — qui n'ont pas besoin de déraisonner pour agir. Je suis de ceux qui pensent toujours qu'on va faire quelque chose de bien, et qui, parfois, le font.
ANTIGONE
Je suis de ceux — peut-être — qui n'ont pas besoin de comprendre pour agir. Je suis de ceux — peut-être — qui n'ont pas besoin de déraisonner pour agir.`,
    contexte: "Antigone moderne face à Créon — tragédie de la révolte, théâtre du XXe siècle.",
    attendus: [
      { procede: "Litote", citation: "« parfois, le font »", interpretation: "L'atténuation renforce l'affirmation — lucidité modeste d'Antigone.", keywords: ["litote","parfois","atténue","modest","lucidité","action"] },
      { procede: "Antithèse", citation: "« pensent… faire » / « parfois, le font »", interpretation: "L'opposition entre idéal et action structure la révolte d'Antigone.", keywords: ["antithèse","pensent","font","idéal","action","espoir"] },
      { procede: "Registre tragique", citation: "« Je suis de ceux »", interpretation: "L'affirmation identitaire installe la révolte tragique face à Créon.", keywords: ["tragique","antigone","révolte","héroïne","destin","liberté"] },
      { procede: "Registre lyrique", citation: "« Je suis de ceux »", interpretation: "La subjectivité engagée d'Antigone — affirmation morale moderne.", keywords: ["lyrique","je","affirmation","subjectivité","moral","engage"] }
    ]
  },
  {
    id: "GT-099",
    titre: "La Condition humaine — révolte",
    auteur: "André Malraux",
    oeuvre: "La Condition humaine (1933)",
    genre: "Roman",
    diff: 3,
    texte: `Ce qui meurt en un homme, c'est le consentement. Il faut donc un équivalent de la révolte. La révolte, c'est ce qui le construit. La révolution est la libération de l'homme par l'homme. La condition humaine, ce n'est pas la fin de l'homme, c'est la condition dans laquelle l'homme commence à être révolté. Ce qui meurt en un homme, c'est le consentement. Il faut donc un équivalent de la révolte. La révolte, c'est ce qui le construit.`,
    contexte: "Roman engagé — révolution chinoise, philosophie de l'action et de la fraternité.",
    attendus: [
      { procede: "Antithèse", citation: "« consentement » / « révolte »", interpretation: "L'opposition structure la philosophie de l'action — refus de la passivité.", keywords: ["antithèse","consentement","révolte","passivité","refus","contraste"] },
      { procede: "Métaphore", citation: "« ce qui meurt… c'est le consentement »", interpretation: "La mort du consentement symbolise l'éveil politique — philosophie malrauvienne.", keywords: ["métaphore","meurt","consentement","éveil","politique","philosophie"] },
      { procede: "Registre épique", citation: "« révolte… construit »", interpretation: "La révolte élève l'action au grand récit — engagement révolutionnaire.", keywords: ["épique","révolte","construit","action","révolution","grandeur"] },
      { procede: "Parallélisme", citation: "« Ce qui meurt… / La révolte… »", interpretation: "Les structures parallèles condensent la pensée en maximes — aphorisme engagé.", keywords: ["parallélisme","maxime","aphorisme","structure","pensée","malraux"] }
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
