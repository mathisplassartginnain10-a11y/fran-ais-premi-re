/* Grands textes — lot 3 (GT-046 → GT-080) · tous niveaux · fusion au chargement */
const GRANDS_TEXTES_EXTRA2 = [
  {
    id: "GT-046",
    titre: "Je vis, je meurs",
    auteur: "Louise Labé",
    oeuvre: "Sonnets (1555)",
    genre: "Poésie",
    diff: 1,
    texte: `Je vis, je meurs : je me brûle et me noie,
J'ai chaud extrême en un extrême froid,
La douceur vive et la mort molle,
J'ai tout ensemble et tout d'un coup.
Tout en un coup d'œil je ris et je pleure,
Et en peu d'heure, bien mal, je m'ennuie.
Tout à la fois je languis et me meurs.
Mon mal vient à plaisir, mon plaisir vient à mal.
Je ne sais qu'ayant, ni quoi voulant,
Je trouve en bien mon mal, mon mal en bien.`,
    contexte: "Sonnet célèbre — amour contradictoire, oxymores et antithèses enchaînés.",
    attendus: [
      { procede: "Oxymore", citation: "« Je vis, je meurs »", interpretation: "Oxymore : vivre et mourir simultanément — contradiction poétique de l'amour passionné.", keywords: ["oxymore","vis","meurs","contradict","amour"] },
      { procede: "Antithèse", citation: "« je me brûle et me noie »", interpretation: "Antithèse entre brûler et noyer — les sensations opposées structurent le tourment amoureux.", keywords: ["antithèse","brûle","noie","oppos","tourment"] },
      { procede: "Anaphore", citation: "« Je vis, je meurs »", interpretation: "Anaphore du « je » : martèlement qui exprime l'emprise du sentiment sur le sujet lyrique.", keywords: ["anaphore","je","répét","emprise","lyrique"] },
      { procede: "Registre lyrique", citation: "« je ris et je pleure »", interpretation: "Registre lyrique : expression directe des émotions contradictoires — subjectivité amoureuse de Louise Labé.", keywords: ["lyrique","ris","pleure","émotion","subjectiv"] }
    ]
  },
  {
    id: "GT-047",
    titre: "Le Loup et l'Agneau",
    auteur: "La Fontaine",
    oeuvre: "Fables (1668)",
    genre: "Fable",
    diff: 1,
    texte: `La raison du plus fort est toujours la meilleure :
Nous l'allons montrer tout à l'heure.
Un Agneau se désaltérait
Dans le courant d'une onde pure.
Un Loup survient à jeun qui cherchait
Aventure, et que la faim en ces lieux rendait hardi.
— Que tu me rends donc troublé, dit cet animal plein d'ardeur ;
Tu ne saurais troubler l'eau où je bois.
— Et si je ne la troublais pas, répondit le Loup,
Tu me troublerais bien plus par l'odeur de ta laine.
— L'odeur de ma laine ? dit l'Agneau. Elle est à mon maître.
— Tu m'insultes donc, dit le Loup. Je sais que tu m'as dit du mal l'an passé.
— L'an passé, dit l'Agneau, j'étais pas encore né.
— Si ce n'est toi, c'est donc ton frère.
— Je n'en ai point. — C'est donc quelqu'un des tiens.`,
    contexte: "Fable célèbre — critique du pouvoir arbitraire, morale en exergue.",
    attendus: [
      { procede: "Maxime", citation: "« La raison du plus fort est toujours la meilleure »", interpretation: "Maxime en exergue : la fable dénonce d'emblée l'arbitraire du pouvoir — satire politique.", keywords: ["maxime","fort","raison","arbitraire","pouvoir"] },
      { procede: "Dialogue", citation: "« Que tu me rends donc troublé »", interpretation: "Dialogue : le Loup accuse l'Agneau par des prétextes successifs — satire de l'injustice.", keywords: ["dialogue","troublé","loup","agneau","injust"] },
      { procede: "Registre satirique", citation: "« la faim en ces lieux rendait hardi »", interpretation: "Registre satirique : la faim justifie la violence — critique du pouvoir qui invente des excuses.", keywords: ["satirique","faim","hardi","violence","excuse"] },
      { procede: "Antithèse", citation: "« Agneau »", interpretation: "Antithèse entre proie innocente et prédateur — structure allégorique de la fable.", keywords: ["antithèse","agneau","loup","proie","prédateur"] }
    ]
  },
  {
    id: "GT-048",
    titre: "Tristesse",
    auteur: "Alfred de Musset",
    oeuvre: "Poésies diverses (1840)",
    genre: "Poésie",
    diff: 1,
    texte: `J'ai perdu ma force et ma vie,
Et mes amis et ma gaieté ;
J'ai perdu jusqu'à la fierté
Qui faisait croire à mon génie.
Quand j'ai connu la Vérité,
J'ai cru que c'était une sœur ;
J'ai trouvé que c'était une hystérique,
Ou une folle dont il faut fuir les coups.
J'ai perdu mon courage et mes illusions,
Et je n'ai plus que le cœur qui bat,
Et les yeux qui pleurent, et la bouche qui rit,
Et l'âme qui souffre, et le corps qui faiblit.`,
    contexte: "Poème autobiographique — dépression du poète, registre élégiaque.",
    attendus: [
      { procede: "Anaphore", citation: "« J'ai perdu ma force »", interpretation: "Anaphore de « J'ai perdu » : martèlement qui exprime l'épuisement et la perte successive — registre élégiaque.", keywords: ["anaphore","perdu","répét","deuil","épuis"] },
      { procede: "Antithèse", citation: "« c'était une sœur »", interpretation: "Antithèse entre l'idéal de la Vérité (sœur) et la réalité (hystérique) — désillusion romantique.", keywords: ["antithèse","sœur","hystérique","vérité","désillu"] },
      { procede: "Énumération", citation: "« ma force et ma vie »", interpretation: "Énumération des pertes : force, vie, amis, gaieté — liste qui accumule le vide existentiel.", keywords: ["énumération","force","vie","amis","vide"] },
      { procede: "Registre lyrique", citation: "« J'ai perdu ma force »", interpretation: "Registre lyrique : confession intime du spleen — subjectivité autobiographique de Musset.", keywords: ["lyrique","force","spleen","confession","intime"] }
    ]
  },
  {
    id: "GT-049",
    titre: "Page d'écriture",
    auteur: "Jacques Prévert",
    oeuvre: "Paroles (1949)",
    genre: "Poésie",
    diff: 1,
    texte: `Page d'écriture
Avec ses taches de rousseur
Et ses taches d'encre
Et ses taches de larmes
Et ses taches de sang
Et ses taches de soleil
Et ses taches de nuit
Et ses taches de rire
Et ses taches de peur
Et ses taches de joie
Et ses taches de colère
Et ses taches de silence
Et ses taches de parole
Et ses yeux couleur de mer
Et ses yeux couleur de ciel
Et ses yeux couleur de terre
Et ses yeux couleur de feu`,
    contexte: "Poème en vers libres — portrait d'enfant, répétition incantatoire.",
    attendus: [
      { procede: "Anaphore", citation: "« Et ses taches »", interpretation: "Anaphore de « Et ses taches » : répétition incantatoire qui construit le portrait fragmenté de l'enfant.", keywords: ["anaphore","taches","répét","portrait","incant"] },
      { procede: "Énumération", citation: "« Avec ses taches de rousseur »", interpretation: "Énumération des taches : chaque terme ajoute une dimension au portrait — effet de plénitude.", keywords: ["énumération","taches","liste","portrait","enfant"] },
      { procede: "Comparaison", citation: "« ses yeux couleur de mer »", interpretation: "Comparaison : les yeux de l'enfant évoquent la mer — image poétique du regard.", keywords: ["comparaison","yeux","mer","regard","image"] },
      { procede: "Vers libre", citation: "« Page d'écriture »", interpretation: "Vers libre : absence de rime fixe et rythme conversationnel — modernité poétique de Prévert.", keywords: ["vers libre","rythme","moderne","prévert","fragment"] }
    ]
  },
  {
    id: "GT-050",
    titre: "Liberté",
    auteur: "Paul Éluard",
    oeuvre: "Poésie et vérité (1942)",
    genre: "Poésie",
    diff: 1,
    texte: `Sur mes cahiers d'écolier
Sur mon pupitre et les arbres
Sur le sable sur la neige
J'écris ton nom

Sur les pages que j'ai lues
Sur toutes les pages blanches
Pierre sang papier ou cendre
J'écris ton nom

Sur les images bannies
Sur les barreaux des prisons
Sur les gestes d'amour fous
J'écris ton nom

Sur les frontières sans papiers
Sur les drapeaux de liberté
Sur les murailles de ma ville
J'écris ton nom

Et par le pouvoir d'un mot
Je recommence ma vie
Je suis né pour te connaître
Pour te nommer
Liberté`,
    contexte: "Poème de la Résistance — anaphore célèbre, registre engagé.",
    attendus: [
      { procede: "Anaphore", citation: "« Sur mes cahiers »", interpretation: "Anaphore de « Sur » : la reprise martèle l'omniprésence de la Liberté — poésie de la Résistance.", keywords: ["anaphore","sur","répét","liberté","résist"] },
      { procede: "Énumération", citation: "« Pierre sang papier ou cendre »", interpretation: "Énumération des supports d'écriture : pierre, sang, papier, cendre — registre engagé et solennel.", keywords: ["énumération","pierre","sang","papier","cendre"] },
      { procede: "Registre épique", citation: "« par le pouvoir d'un mot »", interpretation: "Registre épique : le mot « Liberté » élève l'action au niveau du combat universel — exaltation poétique.", keywords: ["épique","mot","pouvoir","exalt","combat"] },
      { procede: "Apostrophe", citation: "« Liberté »", interpretation: "Apostrophe finale à la Liberté : le poème culmine sur le nom invoqué — anaphore et engagement fusionnent.", keywords: ["apostrophe","liberté","nom","engag","résist"] }
    ]
  },
  {
    id: "GT-051",
    titre: "Brise marine",
    auteur: "Stéphane Mallarmé",
    oeuvre: "Poésies (1899)",
    genre: "Poésie",
    diff: 2,
    texte: `La chair est triste, hélas ! et j'ai lu tous les livres.
Fuir ! là-bas fuir ! Je sens que des oiseaux sont ivres
D'être parmi l'écume inconnue et les cieux !
Rien, ni les vieux jardins reflétés par les yeux,
Ne retiendra ce cœur qui dans la mer se trempe.
Ô nuits ! ni la clarté déserte de ma lampe
Sur le vide papier que la blancheur défend.
Je partirai ! Steamer balançant ta mâture,
Lève l'ancre pour une exotique nature !`,
    contexte: "Poème symboliste — spleen, désir d'évasion, langage obscur.",
    attendus: [
      { procede: "Apostrophe", citation: "« Fuir ! là-bas fuir ! »", interpretation: "L'injonction violente ouvre un élan lyrique : Mallarmé formule la fuite comme nécessité existentielle face au spleen.", keywords: ["apostrophe","fuite","élan","lyrique","mallarmé","désir"] },
      { procede: "Antithèse", citation: "« j'ai lu tous les livres » / « Je partirai ! »", interpretation: "L'opposition entre saturation intellectuelle et départ imaginaire dramatise la crise moderne : le savoir ne sauve plus, seul l'ailleurs attire.", keywords: ["antithèse","livres","départ","crise","modernité","poésie"] },
      { procede: "Symbolisme", citation: "« le vide papier que la blancheur défend »", interpretation: "La page blanche symbolise l'impuissance poétique : la blancheur résiste à l'inspiration plutôt qu'elle ne l'accueille.", keywords: ["symbolisme","page blanche","impuissance","langage","création","mallarmé"] },
      { procede: "Registre lyrique", citation: "« Steamer balançant ta mâture »", interpretation: "L'image du navire condense l'imaginaire de l'évasion : les impératifs transforment le poème en départ rêvé.", keywords: ["lyrique","steamer","ancre","évasion","musicalité","rêve"] }
    ]
  },
  {
    id: "GT-052",
    titre: "Le Père Goriot — pension Vauquer",
    auteur: "Balzac",
    oeuvre: "Le Père Goriot (1835)",
    genre: "Roman",
    diff: 2,
    texte: `Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux, sans que jamais la médisance ait attaqué les mœurs de cet honorable établissement. Mais aussi, depuis trente ans, n'y a-t-il jamais été vu de jeune personne ; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. Néanmoins, en 1819, époque où commence ce drame, il s'y trouvait une pauvre jeune fille.`,
    contexte: "Incipit du roman — réalisme balzacien, comparaison ironique.",
    attendus: [
      { procede: "Précision topographique", citation: "« rue Neuve-Sainte-Geneviève »", interpretation: "Le détail géographique ancre le récit dans le Paris concret — procédé typique du réalisme balzacien.", keywords: ["réalisme","paris","topographie","balzac","concret","lieu"] },
      { procede: "Ironie", citation: "« honorable établissement »", interpretation: "La formule valorisante suggère en creux la médiocrité de la pension — ironie du narrateur sur le milieu.", keywords: ["ironie","honorable","médiocrité","narrateur","satire","pension"] },
      { procede: "Champ lexical", citation: "« Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, »", interpretation: "Le vocabulaire social (pension, modique, médisance) dessine un univers de misère étalée et de calcul.", keywords: ["champ lexical","pension","bourgeois","misère","social","balzac"] },
      { procede: "Incipit dramatique", citation: "« époque où commence ce drame »", interpretation: "Balzac annonce dès l'ouverture la dimension tragique du récit — pacte de lecture romanesque.", keywords: ["incipit","drame","tragique","annonce","roman","balzac"] }
    ]
  },
  {
    id: "GT-053",
    titre: "Un cœur simple — Félicité",
    auteur: "Flaubert",
    oeuvre: "Trois Contes (1877)",
    genre: "Nouvelle",
    diff: 2,
    texte: `Pendant cinquante ans, Félicité fut servante chez madame Aubain, une veuve. C'était une personne dure, à bouche fermée ; ses traits étaient longs, et sa peau si serrée qu'on eût dit qu'elle avait le visage comme un cuir à corne. Elle était simple, énorme, de hauteur ordinaire, et laide sans qualificatif. Elle avait été grosse fille, et elle avait eu des enfants. Elle ne se maria pas, par vertu. Sa mère, qui était nourrice, l'avait habituée à des privations. Elle ne fut jamais gai, et elle ne fut jamais triste ; elle avait des habitudes pareilles à celles des autres, et son cœur était comme de l'eau.`,
    contexte: "Portrait d'une servante — réalisme, description clinique.",
    attendus: [
      { procede: "Caractérisation", citation: "« laide sans qualificatif »", interpretation: "Flaubert condense en une formule lapidaire l'effacement physique de Félicité — description clinique sans pathos.", keywords: ["caractérisation","laide","effacement","servante","flaubert","clinique"] },
      { procede: "Antithèse", citation: "« ne fut jamais gai, et elle ne fut jamais triste »", interpretation: "L'absence d'émotions marque une neutralité existentielle — le personnage est réduit à des habitudes mécaniques.", keywords: ["antithèse","gai","triste","neutralité","mécanique","existence"] },
      { procede: "Comparaison", citation: "« son cœur était comme de l'eau »", interpretation: "Le cœur liquide traduit l'indifférence et la fluidité émotionnelle — métaphore qui efface la subjectivité.", keywords: ["comparaison","cœur","eau","indifférence","fluidité","apathie"] },
      { procede: "Registre réaliste", citation: "« visage comme un cuir à corne »", interpretation: "La matérialité du corps usé par le travail incarne le naturalisme flaubertien — misère sans commentaire moral.", keywords: ["réaliste","corps","usure","travail","naturalisme","misère"] }
    ]
  },
  {
    id: "GT-054",
    titre: "Le Barbier de Séville — Figaro",
    auteur: "Beaumarchais",
    oeuvre: "Le Barbier de Séville (1775)",
    genre: "Théâtre comique",
    diff: 1,
    texte: `FIGARO
Parce que vous êtes un grand seigneur, vous vous croyez un grand génie ! Noblesse, fortune, un rang, des places, tout cela rend si fier ! Quoi ! vous n'avez rien de tout cela, et vous êtes fâché tout de même ! Que de travail pour trouver un pauvre bouffon ! Que de travail ! Eh ! Dieu merci, mon cher seigneur, avec le talent que j'ai pour accommoder tout ! Et pourvu que je gagne ma vie, peu m'importe que je travaille pour ou contre le roi, pour l'Espagne ou la France, pour le diable ou pour Dieu ! Mais comment vous appelez-vous ? Quel est votre nom ? Vous faites si bien attention à tout, qu'il n'est pas extraordinaire que vous perdiez celui-là ! Vous vous êtes donné la peine de naître, et rien de plus.`,
    contexte: "Tirade de Figaro — critique de l'aristocratie, registre comique et satirique.",
    attendus: [
      { procede: "Registre satirique", citation: "« vous vous croyez un grand génie »", interpretation: "Figaro dénonce l'orgueil nobiliaire par l'ironie — la satire des privilèges structure la tirade.", keywords: ["satirique","génie","noblesse","ironie","figaro","privilège"] },
      { procede: "Énumération", citation: "« Noblesse, fortune, un rang, des places »", interpretation: "La liste des avantages sociaux accumule les privilèges pour mieux les vider de sens — critique des Lumières.", keywords: ["énumération","noblesse","fortune","rang","privilège","liste"] },
      { procede: "Antithèse", citation: "« grand seigneur » / « rien de plus »", interpretation: "L'opposition entre titre social et absence de mérite renverse la hiérarchie — chute comique célèbre.", keywords: ["antithèse","seigneur","naître","mérite","renversement","comique"] },
      { procede: "Registre comique", citation: "« Vous vous êtes donné la peine de naître »", interpretation: "La formule lapidaire provoque le rire par l'hyperbole ironique — Figaro réduit le comte à sa naissance seule.", keywords: ["comique","naître","chute","hyperbole","rire","beaumarchais"] }
    ]
  },
  {
    id: "GT-055",
    titre: "Le Jeu de l'amour et du hasard",
    auteur: "Marivaux",
    oeuvre: "Le Jeu de l'amour et du hasard (1730)",
    genre: "Théâtre comique",
    diff: 2,
    texte: `DORANTE
Il me semble que si l'on me regarde, je ne sais plus ce que je disais ; et que si l'on ne me regarde pas, je ne sais pas non plus ce que je fais.
SILVIA
Vous êtes sans doute un fort bel homme.
DORANTE
Non, madame.
SILVIA
Vous n'êtes pas un bel homme ?
DORANTE
Je ne sais pas ce que c'est. Il me semble que si l'on me regarde, je ne sais plus ce que je disais ; et que si l'on ne me regarde pas, je ne sais pas non plus ce que je fais. C'est une chose étrange : le regard des autres me trouble, et leur absence me perd.`,
    contexte: "Comédie du sentiment — trouble amoureux, registre léger et psychologique.",
    attendus: [
      { procede: "Antithèse", citation: "« si l'on me regarde » / « si l'on ne me regarde pas »", interpretation: "Dorante est paralysé dans les deux cas — l'antithèse dramatise le trouble amoureux et l'incapacité d'agir.", keywords: ["antithèse","regard","paralysie","amour","dorante","contraste"] },
      { procede: "Registre comique", citation: "« Je ne sais pas ce que c'est »", interpretation: "La réponse évasive sur la beauté provoque le rire — comique de l'embarras amoureux.", keywords: ["comique","beauté","embarras","rire","marivaux","évasion"] },
      { procede: "Dialogue", citation: "« Vous n'êtes pas un bel homme ? »", interpretation: "Le dialogue enchaîné révèle le jeu amoureux de Silvia — psychologie fine de la comédie du sentiment.", keywords: ["dialogue","silvia","question","jeu","sentiment","psychologie"] },
      { procede: "Registre lyrique", citation: "« je ne sais plus ce que je disais »", interpretation: "La subjectivité troublée du personnage amoureux installe le registre lyrique dans la comédie.", keywords: ["lyrique","trouble","subjectivité","amour","émotion","marivaux"] }
    ]
  },
  {
    id: "GT-056",
    titre: "Britannicus — Néron",
    auteur: "Racine",
    oeuvre: "Britannicus (1669)",
    genre: "Théâtre tragique",
    diff: 3,
    texte: `NÉRON
Qu'ai-je donc fait en un jour que la haine implore ?
Je sens de mon sang même un secret horreur ;
Mon cœur n'a plus de goût à la chose où je suis ;
Néron plutôt qu'Auguste, et plutôt qu'un empire
Un sort maudit à charger et à perdre un empire.
Traîner ce nom odieux qui m'accable et me pèse ;
Le rendre exécrable à toute la terre,
Et, comme un autre Atlas, d'un poids qui m'écrase
Traîner l'univers entier après moi !
Non, non, je veux cesser d'être ou d'être tyran ;
L'empire est à mon cœur un fardeau trop pesant.`,
    contexte: "Monologue de Néron — identité tyrannique, registre tragique.",
    attendus: [
      { procede: "Registre tragique", citation: "« Traîner ce nom odieux qui m'accable et me pèse »", interpretation: "Néron transforme le pouvoir en fardeau — la fatalité tyrannique dépasse le personnage et suscite terreur.", keywords: ["tragique","odieux","accable","néron","tyran","fatalité"] },
      { procede: "Métaphore", citation: "« comme un autre Atlas »", interpretation: "Le tyran devient Atlas écrasé par le monde — image mythologique qui magnifie la démesure du pouvoir.", keywords: ["métaphore","atlas","poids","univers","mythologie","démesure"] },
      { procede: "Anaphore", citation: "« Non, non, je veux cesser »", interpretation: "La répétition martèle le désir d'abdication — oscillation entre tyrannie et lucidité.", keywords: ["anaphore","non","cesser","abdication","oscillation","néron"] },
      { procede: "Alexandrin", citation: "« Traîner ce nom odieux qui m'accable et me pèse »", interpretation: "Le vers solennel en douze syllabes porte la grandeur tragique du monologue racinien.", keywords: ["alexandrin","douze","solennel","racine","monologue","rythme"] }
    ]
  },
  {
    id: "GT-057",
    titre: "Les Précieuses ridicules",
    auteur: "Molière",
    oeuvre: "Les Précieuses ridicules (1659)",
    genre: "Théâtre comique",
    diff: 1,
    texte: `MADELON
Ah ! mon Dieu ! que votre visage a d'embonpoint ! Et que vous avez l'air triste ! Vous ne vous portez pas bien, sans doute.
MASCARILLE
Madame, c'est la coutume de cet air-ci.
MADELON
Quelle mine de croque-mitaine ! ah ! que vous avez l'air triste ! Vous ne vous portez pas bien, sans doute. Vous avez l'air d'un homme qui a perdu son meilleur ami.
MASCARILLE
Madame, c'est la coutume de cet air-ci.`,
    contexte: "Comédie des manières — moquerie des précieuses, registre comique.",
    attendus: [
      { procede: "Registre comique", citation: "« que votre visage a d'embonpoint »", interpretation: "L'euphémisme précieux sur l'embonpoint caricature les manières des précieuses — moquerie des salons.", keywords: ["comique","embonpoint","précieuse","moquerie","molière","caricature"] },
      { procede: "Répétition", citation: "« c'est la coutume de cet air-ci »", interpretation: "Mascarille répète la même réplique — comique de situation qui ridiculise les interrogations affectées.", keywords: ["répétition","coutume","mascarille","situation","ridicule","réplique"] },
      { procede: "Antithèse", citation: "« embonpoint » / « air triste »", interpretation: "Le contraste entre corpulence et mélancolie accentue l'absurdité du portrait — effet comique.", keywords: ["antithèse","embonpoint","triste","contraste","absurde","portrait"] },
      { procede: "Registre satirique", citation: "« Quelle mine de croque-mitaine »", interpretation: "La satire des manières précieuses vise les codes du salon par l'exagération polie.", keywords: ["satirique","croque-mitaine","salon","manières","satire","précieux"] }
    ]
  },
  {
    id: "GT-058",
    titre: "La Cantatrice chauve",
    auteur: "Eugène Ionesco",
    oeuvre: "La Cantatrice chauve (1950)",
    genre: "Théâtre",
    diff: 2,
    texte: `M. MARTIN
Il y a un an, Elizabeth, vous aviez quarante ans.
M. MARTIN
Il y a un an, vous aviez quarante et demi... Il y a deux ans, vous aviez quarante et demi... Il y a trois ans, vous aviez quarante et demi... Il y a quatre ans, vous aviez quarante et demi... Il y a cinq ans, vous aviez quarante et demi... Il y a six ans, vous aviez quarante et demi...
M. MARTIN
Vous aviez quarante et demi, vous aviez quarante et demi... Vous aviez quarante et demi, vous aviez quarante et demi...`,
    contexte: "Théâtre de l'absurde — répétition mécanique, déconstruction du langage.",
    attendus: [
      { procede: "Anaphore", citation: "« Il y a un an » / « Il y a deux ans »", interpretation: "La reprise mécanique des dates vide le langage de son sens — procédé central du théâtre de l'absurde.", keywords: ["anaphore","an","répétition","mécanique","ionesco","absurde"] },
      { procede: "Gradation", citation: "« un an… deux ans… trois ans… »", interpretation: "La progression temporelle sans variation logique produit un effet de crescendo grotesque.", keywords: ["gradation","temps","progression","grotesque","crescendo","absurde"] },
      { procede: "Registre comique", citation: "« vous aviez quarante et demi »", interpretation: "L'immobilité de l'âge dans la répétition provoque le rire — dérision du discours rationnel.", keywords: ["comique","quarante","immobilité","rire","dérision","ionesco"] },
      { procede: "Déconstruction", citation: "« Elizabeth, vous aviez quarante ans »", interpretation: "Ionesco dissocie les mots de leur référent — le langage tourne à vide et perd sa fonction communicative.", keywords: ["déconstruction","langage","vide","communication","absurde","théâtre"] }
    ]
  },
  {
    id: "GT-059",
    titre: "En attendant Godot — Vladimir",
    auteur: "Samuel Beckett",
    oeuvre: "En attendant Godot (1952)",
    genre: "Théâtre",
    diff: 2,
    texte: `VLADIMIR
On n'a rien à faire.
ESTRAGON
On peut encore attendre un peu.
VLADIMIR
Oui, on peut toujours attendre un peu.
ESTRAGON
Qu'est-ce qu'on fait maintenant ?
VLADIMIR
Je ne sais pas.
ESTRAGON
Si on partait ?
VLADIMIR
Où ?
ESTRAGON
On pourrait essayer d'aller vers Godot.
VLADIMIR
Il ne viendra pas ce soir.
ESTRAGON
Alors demain ?
VLADIMIR
Peut-être demain.
ESTRAGON
Et si demain il ne vient pas non plus ?
VLADIMIR
Alors après-demain.
ESTRAGON
Et si jamais il ne vient ?
VLADIMIR
Alors on attendra quand même.`,
    contexte: "Théâtre de l'absurde — attente, vide existentiel.",
    attendus: [
      { procede: "Dialogue minimal", citation: "« Qu'est-ce qu'on fait maintenant ? »", interpretation: "Les répliques creuses traduisent l'absurde — l'attente devient seul horizon existentiel.", keywords: ["dialogue","attente","absurde","inaction","beckett","godot"] },
      { procede: "Antithèse", citation: "« Si on partait ? » / « Où ? »", interpretation: "Le désir de mouvement se heurte à l'impossibilité — paralysie existentielle caractéristique.", keywords: ["antithèse","partir","où","paralysie","mouvement","impossibilité"] },
      { procede: "Répétition", citation: "« on peut toujours attendre un peu »", interpretation: "La circularité de l'attente structure la pièce — temps suspendu sans progression.", keywords: ["répétition","attendre","circularité","temps","suspendu","beckett"] },
      { procede: "Registre tragique", citation: "« Alors on attendra quand même »", interpretation: "La résolution d'attendre sans fin installe une fatalité existentielle — pathos du vide.", keywords: ["tragique","attendre","fatalité","vide","existential","pathos"] }
    ]
  },
  {
    id: "GT-060",
    titre: "La Chartreuse de Parme — incipit",
    auteur: "Stendhal",
    oeuvre: "La Chartreuse de Parme (1839)",
    genre: "Roman",
    diff: 2,
    texte: `Le 15 mai 1796, le général Bonaparte fit son entrée dans Milan à la tête de cette jeune armée qui avait passé le pont de Lodi et fait à Arcole et à Mantoue les miracles de la bravoure. La France et Bonaparte étaient alors dans le midi de l'Italie comme dans leur propre maison, à peu de chose près. Milan, le plus beau des pays du monde, était tout révolu ; on n'y faisait pas plus attention à la guerre qu'à l'amour. Le général Bonaparte, qui avait déjà conquis l'Italie, était encore un jeune homme de vingt-sept ans.`,
    contexte: "Roman stendhalien — écriture sobre, registre historique et épique.",
    attendus: [
      { procede: "Registre épique", citation: "« les miracles de la bravoure »", interpretation: "Stendhal élève l'action militaire au niveau du grand récit — exaltation napoléonienne typique.", keywords: ["épique","bravoure","miracles","napoléon","exaltation","stendhal"] },
      { procede: "Énumération", citation: "« Le 15 mai 1796, le général Bonaparte fit son entrée dans Milan à la tête de cett »", interpretation: "La liste des victoires ancre le récit dans l'histoire — précision documentaire stendhalienne.", keywords: ["énumération","lodi","arcole","mantoue","victoires","histoire"] },
      { procede: "Comparaison", citation: "« comme dans leur propre maison »", interpretation: "L'Italie devient propriété française — image qui traduit la conquête et l'audace du jeune général.", keywords: ["comparaison","maison","conquête","italie","audace","napoléon"] },
      { procede: "Champ lexical", citation: "« Le 15 mai 1796, le général Bonaparte fit son entrée dans Milan à la tête de cett »", interpretation: "Le vocabulaire militaire structure l'incipit et installe le registre historique du roman.", keywords: ["champ lexical","général","armée","militaire","historique","guerre"] }
    ]
  },
  {
    id: "GT-061",
    titre: "L'Assommoir — Gervaise",
    auteur: "Zola",
    oeuvre: "L'Assommoir (1877)",
    genre: "Roman naturaliste",
    diff: 2,
    texte: `Gervaise, debout devant le lit, regardait dormir ses deux petits. Étienne et Claude, l'un de quatre ans, l'autre de deux ans, étaient blottis côte à côte ; et elle, pleurant presque, songait aux misères de sa vie. En ce moment-là, il y avait, près du lit, dans un mauvais sommier, une fille de douze ans qui dormait profondément. Gervaise avait tant de fatigue, tant de misère, tant de courage au travail, qu'elle aurait pu dormir debout. La misère allait poussant dans cette misère. Son corps était brisé.`,
    contexte: "Naturalisme zolien — misère ouvrière, registre pathétique.",
    attendus: [
      { procede: "Registre pathétique", citation: "« tant de fatigue, tant de misère »", interpretation: "L'accumulation des maux suscite compassion — Zola documente la misère ouvrière sans embellissement.", keywords: ["pathétique","fatigue","misère","compassion","zola","ouvrier"] },
      { procede: "Accumulation", citation: "« tant de fatigue, tant de misère, tant de courage »", interpretation: "La triple répétition de « tant » écrase le lecteur sous la masse des épreuves.", keywords: ["accumulation","tant","épreuves","masse","écrasement","naturalisme"] },
      { procede: "Champ lexical", citation: "« Gervaise, debout devant le lit, regardait dormir ses deux petits. Étienne et Cla »", interpretation: "Le vocabulaire de l'épuisement physique structure le portrait de Gervaise.", keywords: ["champ lexical","misère","fatigue","brisé","corps","épuisement"] },
      { procede: "Focalisation interne", citation: "« songait aux misères de sa vie »", interpretation: "L'accès aux pensées de Gervaise renforce l'empathie du lecteur pour la mère épuisée.", keywords: ["focalisation","interne","songait","mère","empathie","gervaise"] }
    ]
  },
  {
    id: "GT-062",
    titre: "Chéri — amour et âge",
    auteur: "Colette",
    oeuvre: "Chéri (1920)",
    genre: "Roman",
    diff: 2,
    texte: `Ils s'aimaient. Léa avait cinquante ans, Chéri vingt-cinq. Ils formaient un couple singulier, admiré et envié. Tout le monde s'intéressait à leur liaison. On ne comptait pas l'âge, on ne comptait pas les années. Ils s'aimaient depuis six ans. Léa était toujours belle, et Chéri toujours jeune. Ils formaient un couple singulier, admiré et envié, et ils ne se lassaient pas de se regarder. On ne comptait pas l'âge, on ne comptait pas les années. Ils s'aimaient depuis six ans. Léa était toujours belle, et Chéri toujours jeune.`,
    contexte: "Roman de la maturité — amour, regard social, style sensoriel.",
    attendus: [
      { procede: "Antithèse", citation: "« cinquante ans » / « vingt-cinq »", interpretation: "L'écart d'âge structure le couple — Colette oppose maturité et jeunesse pour questionner les normes sociales.", keywords: ["antithèse","âge","cinquante","vingt-cinq","contraste","couple"] },
      { procede: "Registre lyrique", citation: "« Ils s'aimaient »", interpretation: "L'affirmation simple ouvre sur une subjectivité amoureuse — registre lyrique dans le roman.", keywords: ["lyrique","aimaient","amour","subjectivité","colette","émotion"] },
      { procede: "Répétition", citation: "« couple singulier, admiré et envié »", interpretation: "La reprise martèle l'exception du couple dans le regard mondain.", keywords: ["répétition","singulier","admiré","envié","mondain","exception"] },
      { procede: "Champ lexical", citation: "« Ils s'aimaient. Léa avait cinquante ans, Chéri vingt-cinq. Ils formaient un coup »", interpretation: "Le vocabulaire social traduit le regard extérieur sur une liaison transgressive.", keywords: ["champ lexical","admiré","envié","social","regard","liaison"] }
    ]
  },
  {
    id: "GT-063",
    titre: "L'Amant — incipit",
    auteur: "Marguerite Duras",
    oeuvre: "L'Amant (1984)",
    genre: "Roman",
    diff: 2,
    texte: `Il est mort. Un matin, ils ont porté le mort de là où il reposait, dans le hamac à grelots, dans la salle de Si Mun qui est la plus grande de la maison de Than hzing. Il me semble que je ne pleurerai pas. Il me semble que ce n'est même pas une douleur, c'est plus sec, plus lointain, plus profond. C'est peut-être parce que je suis vieille. La mort de cet homme, dans un sens, cela m'échappe. Il me semble que ce n'est même pas une douleur.`,
    contexte: "Autobiographie romancée — deuil, écriture minimaliste.",
    attendus: [
      { procede: "Gradation", citation: "« plus sec, plus lointain, plus profond »", interpretation: "La progression intensifie le deuil sans pathos — écriture minimaliste de l'émotion refoulée.", keywords: ["gradation","sec","lointain","profond","deuil","intensité"] },
      { procede: "Registre lyrique", citation: "« Il me semble que je ne pleurerai pas »", interpretation: "La subjectivité hésitante traduit l'incapacité à nommer la perte — style durassien.", keywords: ["lyrique","pleurer","deuil","subjectivité","duras","perte"] },
      { procede: "Antithèse", citation: "« mort » / « ne pleurerai pas »", interpretation: "L'opposition entre la mort et l'absence de larmes condense la contradiction du deuil.", keywords: ["antithèse","mort","pleurer","contradiction","deuil","larmes"] },
      { procede: "Style minimaliste", citation: "« Il est mort »", interpretation: "La phrase brève et factuelle installe une distance froide — écriture épurée caractéristique.", keywords: ["minimaliste","phrase brève","factuel","distance","duras","épuré"] }
    ]
  },
  {
    id: "GT-064",
    titre: "La Libellule",
    auteur: "René Char",
    oeuvre: "Le Marteau sans maître (1934)",
    genre: "Poésie",
    diff: 3,
    texte: `Libellule sans reproche
Entre les doubles creux des tranchées de l'orage
Du jour où nous nous sommes connus
Sur l'île inhabitée des Platoniques
À la lisière de notre rencontre
Où l'ombre et l'orée se confondent
Et le bâton de mémoire
Que tu m'as donné ce jour-là.
Libellule sans reproche
Entre les doubles creux des tranchées de l'orage
Du jour où nous nous sommes connus.
Sur l'île inhabitée des Platoniques
À la lisière de notre rencontre.`,
    contexte: "Poésie surréaliste-résistante — images concises, symbolisme.",
    attendus: [
      { procede: "Personnification", citation: "« Libellule sans reproche »", interpretation: "La libellule devient interlocuteur moral — personnification qui charge la nature de sens symbolique.", keywords: ["personnification","libellule","reproche","nature","symbolisme","char"] },
      { procede: "Métaphore", citation: "« le bâton de mémoire »", interpretation: "L'objet condense le souvenir et la trace du passé — image concise typique de Char.", keywords: ["métaphore","bâton","mémoire","souvenir","trace","image"] },
      { procede: "Antithèse", citation: "« l'ombre et l'orée »", interpretation: "L'opposition ombre/lumière structure l'espace poétique — symbolisme de la rencontre.", keywords: ["antithèse","ombre","orée","lumière","rencontre","contraste"] },
      { procede: "Registre lyrique", citation: "« nous nous sommes connus »", interpretation: "Le « nous » intime ancre le poème dans une subjectivité mémorielle.", keywords: ["lyrique","connu","nous","souvenir","subjectivité","mémoire"] }
    ]
  },
  {
    id: "GT-065",
    titre: "L'Homme",
    auteur: "Jules Supervielle",
    oeuvre: "Gravitations (1925)",
    genre: "Poésie",
    diff: 2,
    texte: `Je suis un homme
et ma vie est comme celle de tous les hommes
sur la terre.
Sous le soleil.
Il passe sur ma peau un oiseau
et je n'ai pas le temps de voir s'il est beau.
Quand mon ventre est plein il est content
et quand il est vide il a peur de la mort.
C'est lui l'homme.
Mais parfois je l'oublie et parfois je l'entends
siffler au fond de moi,
tandis que je marche.
Je suis un homme
et ma vie est comme celle de tous les hommes
sur la terre.
Sous le soleil.`,
    contexte: "Poème humaniste — oiseau = poésie intérieure, registre simple.",
    attendus: [
      { procede: "Comparaison", citation: "« ma vie est comme celle de tous les hommes »", interpretation: "L'assimilation à l'universel humanise le moi poétique — registre simple et accessible.", keywords: ["comparaison","comme","hommes","universel","humaniste","supervielle"] },
      { procede: "Métaphore", citation: "« un oiseau » / « siffler au fond de moi »", interpretation: "L'oiseau intérieur symbolise la poésie ou l'âme — métaphore de la création intérieure.", keywords: ["métaphore","oiseau","siffler","poésie","âme","intérieur"] },
      { procede: "Antithèse", citation: "« parfois je l'oublie et parfois je l'entends »", interpretation: "L'alternance traduit la vacillation entre quotidien et inspiration poétique.", keywords: ["antithèse","oublie","entends","vacillation","quotidien","poésie"] },
      { procede: "Registre lyrique", citation: "« Je suis un homme »", interpretation: "L'affirmation du moi ouvre un poème de confession simple et profonde.", keywords: ["lyrique","je","homme","confession","simple","profond"] }
    ]
  },
  {
    id: "GT-066",
    titre: "Les Lilas et les roses",
    auteur: "Louis Aragon",
    oeuvre: "Les Yeux d'Elsa (1942)",
    genre: "Poésie",
    diff: 2,
    texte: `Les lilas et les roses
Ont une saison
Que le temps chante
Et l'hiver reprend le monde
Mais ceux qui s'aimèrent
Ne s'aiment plus
Les lilas et les roses
Ont une saison
Et l'amour a sa saison aussi
Mais ce n'est pas pour longtemps
Et l'hiver reprend le monde.
Les lilas et les roses
Ont une saison
Que le temps chante
Et l'amour a sa saison aussi
Mais ce n'est pas pour longtemps.
Et l'hiver reprend le monde
Alors que le nord
Vient du fond de la Sibérie.`,
    contexte: "Poème de la Résistance — fugacité du bonheur, registre élégiaque.",
    attendus: [
      { procede: "Personnification", citation: "« l'hiver reprend le monde »", interpretation: "L'hiver s'approprie le monde — personnification qui traduit l'emprise du temps sur le bonheur.", keywords: ["personnification","hiver","monde","temps","emprise","aragon"] },
      { procede: "Anaphore", citation: "« Les lilas et les roses »", interpretation: "La reprise structure le poème comme une complainte — insistance sur la fugacité.", keywords: ["anaphore","lilas","roses","reprise","complainte","fugacité"] },
      { procede: "Métaphore", citation: "« l'amour a sa saison aussi »", interpretation: "L'amour est assimilé aux saisons — métaphore qui lie sentiment et cycle naturel.", keywords: ["métaphore","amour","saison","cycle","nature","temps"] },
      { procede: "Registre élégiaque", citation: "« ceux qui s'aimèrent / Ne s'aiment plus »", interpretation: "Le regret du passé amoureux installe une mélancolie élégiaque — thème de la Résistance.", keywords: ["élégiaque","aimèrent","mélancolie","passé","regret","résistance"] }
    ]
  },
  {
    id: "GT-067",
    titre: "La Maison du berger",
    auteur: "Alfred de Vigny",
    oeuvre: "Poèmes antiques et modernes (1826)",
    genre: "Poésie",
    diff: 2,
    texte: `J'aime le son du cor, le soir, au fond du bois,
Sois donc mon livre et mon ami,
Douleur qu'on ne sait pas, amour qu'on ne comprend pas,
Hommes de peu de jours, mais qui craignent tant de vivre !
La mer des temps n'est pas si vaste que la pensée :
Et tous ses rivages ne suffiraient pas pour l'effroi
De nos rêves, ni pour la douceur de nos regrets.
Des hommes qu'on n'aime plus dès qu'on les a compris.`,
    contexte: "Poème philosophique — mélancolie, registre élégiaque romantique.",
    attendus: [
      { procede: "Apostrophe", citation: "« Sois donc mon livre et mon ami »", interpretation: "Vigny interpelle la douleur comme confident — apostrophe lyrique romantique.", keywords: ["apostrophe","livre","ami","douleur","romantique","vigny"] },
      { procede: "Assonance", citation: "« cor… soir… bois »", interpretation: "Les sonorités nasales créent une atmosphère mélancolique — musicalité du vers.", keywords: ["assonance","cor","soir","bois","mélancolie","sonorité"] },
      { procede: "Registre lyrique", citation: "« J'aime le son du cor »", interpretation: "Le « je » poétique exprime une subjectivité philosophique et mélancolique.", keywords: ["lyrique","je","cor","subjectivité","philosophie","mélancolie"] },
      { procede: "Maxime", citation: "« Des hommes qu'on n'aime plus dès qu'on les a compris »", interpretation: "La formule condense une réflexion sur l'incompréhension humaine — pessimisme vignyen.", keywords: ["maxime","hommes","compris","pessimisme","réflexion","philosophie"] }
    ]
  },
  {
    id: "GT-068",
    titre: "Spleen",
    auteur: "Charles Baudelaire",
    oeuvre: "Les Fleurs du Mal (1857)",
    genre: "Poésie",
    diff: 2,
    texte: `Quand le ciel bas et lourd pèse comme un couvercle
Sur l'esprit qui gémit en proie à la longueur,
Et que, bordant les lointains, on enroule un soir
Immenses ouragans de rumeur ;
Quand la pluie étalant des haillons épouvantables
D'un long lineament noir à travers les cieux,
Ou quand la terre est changée en un cachot humide,
Où l'Esperance en rut, par une gueule de rai,
Sort en bafouant l'archer qui tua leurs vaches,
Et quand la pluie roulant d'infini
- Ici-bas tout est chagrin, tout est supplice,
Verser un jour noir sur un monde impur ;`,
    contexte: "Sonnet du spleen — oppression, images sombres, alexandrins.",
    attendus: [
      { procede: "Comparaison", citation: "« pèse comme un couvercle »", interpretation: "Le ciel oppressif est un couvercle — image concrète du spleen qui étouffe l'esprit.", keywords: ["comparaison","comme","couvercle","ciel","oppression","spleen"] },
      { procede: "Métaphore", citation: "« Verser un jour noir sur un monde impur »", interpretation: "La métaphore finale condense l'apocalypse intérieure — monde et moi souillés.", keywords: ["métaphore","jour noir","monde impur","apocalypse","spleen","baudelaire"] },
      { procede: "Personnification", citation: "« l'esprit qui gémit »", interpretation: "L'esprit gémissant personnifie la souffrance intérieure — animation du mal-être.", keywords: ["personnification","esprit","gémit","souffrance","intérieur","mal-être"] },
      { procede: "Alexandrin", citation: "« Quand le ciel bas et lourd pèse comme un couvercle »", interpretation: "Le vers régulier en douze syllabes porte la solennité du sonnet classique revisité.", keywords: ["alexandrin","douze","solennel","sonnet","classique","baudelaire"] }
    ]
  },
  {
    id: "GT-069",
    titre: "Que tu es heureux",
    auteur: "Pierre de Ronsard",
    oeuvre: "Odes (1550)",
    genre: "Poésie",
    diff: 1,
    texte: `Que tu es heureux, Automne, et la terre est belle !
Que tes deux morts ne sont pas en leurs plus hauts atours !
Les arbres te saluent avec leur chevelure
De feuilles jaunes, et te couronnent d'or.
Les vents sonores heurtent à tes antres,
Et la terre vêt son manteau marqueté
De leurs feuilles qui mourront demain.
Que tu es heureux, Automne, et la terre est belle !
Que tes deux morts ne sont pas en leurs plus hauts atours !
Les arbres te saluent avec leur chevelure
De feuilles jaunes, et te couronnent d'or.`,
    contexte: "Ode à l'automne — personnification, registre lyrique renaissant.",
    attendus: [
      { procede: "Personnification", citation: "« Les arbres te saluent »", interpretation: "L'automne et les arbres sont animés — personnification lyrique de la Renaissance.", keywords: ["personnification","arbres","saluent","automne","nature","ronsard"] },
      { procede: "Apostrophe", citation: "« Que tu es heureux, Automne »", interpretation: "Ronsard interpelle la saison — apostrophe qui installe le registre lyrique.", keywords: ["apostrophe","automne","heureux","lyrique","ronsard","saison"] },
      { procede: "Antithèse", citation: "« belle » / « mourront demain »", interpretation: "La beauté présente contraste avec la mort imminente des feuilles — élégie du temps.", keywords: ["antithèse","belle","mourront","feuilles","temps","élégie"] },
      { procede: "Champ lexical", citation: "« Que tu es heureux, Automne, et la terre est belle ! Que tes deux morts ne sont p »", interpretation: "Le vocabulaire chromatique peint l'automne comme fête avant le déclin.", keywords: ["champ lexical","feuilles","jaunes","or","couleurs","automne"] }
    ]
  },
  {
    id: "GT-070",
    titre: "Le Vallon",
    auteur: "Alphonse de Lamartine",
    oeuvre: "Méditations poétiques (1820)",
    genre: "Poésie",
    diff: 1,
    texte: `Solitude ! que veux-tu donc ?
As-tu dans ton silence
Pour moi quelque dessein inconnu ?
Dis-moi, penchant sur moi ta face sépulcrale !
Ou si c'est dans ta voix le rappel d'un souvenir ?
Ou si c'est à ma peine une volupté complète ?
Tu m'as pris le cœur, et tu viens maintenant
Me demander pourquoi je souffre ?
Cette lumière éteinte au fond de ma pensée ?
Solitude ! que veux-tu donc ?
As-tu dans ton silence
Pour moi quelque dessein inconnu ?
Dis-moi, penchant sur moi ta face sépulcrale !`,
    contexte: "Poème élégiaque — solitude, souvenir amoureux.",
    attendus: [
      { procede: "Personnification", citation: "« Solitude ! que veux-tu donc ? »", interpretation: "La solitude est interpellée comme un être — personnification du sentiment abstrait.", keywords: ["personnification","solitude","interpellation","abstrait","lamartine","être"] },
      { procede: "Oxymore", citation: "« lumière éteinte »", interpretation: "L'oxymore condense le paradoxe du souvenir — clarté qui ne illumine plus.", keywords: ["oxymore","lumière","éteinte","souvenir","paradoxe","contradiction"] },
      { procede: "Registre lyrique", citation: "« Tu m'as pris le cœur »", interpretation: "La subjectivité amoureuse domine — élégie romantique du deuil.", keywords: ["lyrique","cœur","souffre","deuil","romantique","élégie"] },
      { procede: "Interrogation", citation: "« Me demander pourquoi je souffre ? »", interpretation: "Les questions rhétoriques dramatisent le dialogue intérieur avec la solitude.", keywords: ["interrogation","pourquoi","souffre","dialogue","intérieur","question"] }
    ]
  },
  {
    id: "GT-072",
    titre: "Micromégas — voyage",
    auteur: "Voltaire",
    oeuvre: "Micromégas (1752)",
    genre: "Conte philosophique",
    diff: 2,
    texte: `Sur une des planètes qui tournent autour de l'étoile dénommée Sirius, était un jeune homme de 8 lieues de haut, et 400 coudées de tour ; c'est ce qu'on peut appeler une belle nature, et il était appelé Micromégas, nom qui signifie le grand petit, étant admiré de 3 pouces de hauteur quand il avait dix ans, et de 120 pieds géométriques lorsqu'il fut en pleine force. Il fallait que le diamètre de Micromégas fût en proportion de sa taille, et comme la surface des sphères croît par le carré des diamètres, le soleil de Sirius, qui de notre terre nous paraît à peine autant large qu'un cheval d'artillerie, était la proportion à Micromégas, et sa planète, comme 18 de nos soleils.`,
    contexte: "Conte philosophique — ironie, voyage initiatique, satire.",
    attendus: [
      { procede: "Registre satirique", citation: "« ce qu'on peut appeler une belle nature »", interpretation: "Voltaire ironise sur les conventions du conte philosophique — ton léger et critique.", keywords: ["satirique","belle nature","ironie","voltaire","conte","critique"] },
      { procede: "Hyperbole", citation: "« 8 lieues de haut »", interpretation: "L'exagération des dimensions ridiculise l'échelle humaine — procédé du conte philosophique.", keywords: ["hyperbole","lieues","haut","exagération","échelle","gigantesque"] },
      { procede: "Antithèse", citation: "« Micromégas » / « le grand petit »", interpretation: "Le néologisme condense l'opposition entre petit et grand — ironie sur le nom et la stature.", keywords: ["antithèse","micromégas","grand petit","nom","contraste","néologisme"] },
      { procede: "Champ lexical", citation: "« Sur une des planètes qui tournent autour de l'étoile dénommée Sirius, était un j »", interpretation: "Le vocabulaire cosmique installe le cadre du voyage initiatique et de la satire.", keywords: ["champ lexical","planète","étoile","cosmique","voyage","espace"] }
    ]
  },
  {
    id: "GT-073",
    titre: "La Nausée — la racine",
    auteur: "Jean-Paul Sartre",
    oeuvre: "La Nausée (1938)",
    genre: "Roman",
    diff: 3,
    texte: `Et voici que tout se dérobait, se vidait sous mon regard. Je me sentais étranger, je ne savais plus où j'étais, je ne voyais plus devant moi les choses dont je parlais : « faubourg, pavé, chaise, passants ». Les noms s'étaient desséchés, ils avaient vacillé et s'étaient évanouis : j'étais là, je ne savais plus où, je ne savais plus ce que c'était. Et voici que la racine du marronnier plongeait dans le sol, juste devant moi.`,
    contexte: "Roman existentialiste — révélation de l'absurde.",
    attendus: [
      { procede: "Gradation", citation: "« se dérobait, se vidait »", interpretation: "La progression du malaise intensifie la crise existentielle — descente vers l'absurde.", keywords: ["gradation","dérobait","vidait","malaise","crise","sartre"] },
      { procede: "Énumération", citation: "« faubourg, pavé, chaise, passants »", interpretation: "La liste des objets quotidiens devient étrangère — dissolution du langage et du réel.", keywords: ["énumération","faubourg","pavé","objets","étranger","langage"] },
      { procede: "Registre tragique", citation: "« tout se dérobait, se vidait »", interpretation: "La fatalité de l'absurde dépasse Roquentin — terreur face au déréel.", keywords: ["tragique","dérobait","absurde","fatalité","déréalisation","nausée"] },
      { procede: "Symbolisme", citation: "« la racine du marronnier »", interpretation: "La racine devient révélateur de l'existence brute — objet qui déclenche la nausée.", keywords: ["symbolisme","racine","marronnier","révélation","existence","objet"] }
    ]
  },
  {
    id: "GT-074",
    titre: "Les Nourritures terrestres",
    auteur: "André Gide",
    oeuvre: "Les Nourritures terrestres (1897)",
    genre: "Roman",
    diff: 2,
    texte: `Nathanaël, mets en ordre dans ta vie. Nathanaël, jette de ta vie les images du passé : ne garde que ce qui est toi, ce qui t'appartient. Nathanaël, je t'offre des Nourritures terrestres. Tout ce qui est fantastique, Nathanaël, je veux que tu t'en délivres. Tout ce qui est artificiel, Nathanaël, je veux que tu en déchires l'enveloppe. Ne garde que ce qui est toi, ce qui t'appartient. Nathanaël, je t'offre des Nourritures terrestres. Tout ce qui est fantastique, Nathanaël, je veux que tu t'en délivres.`,
    contexte: "Prose lyrique — quête de soi, registre lyrique et didactique.",
    attendus: [
      { procede: "Anaphore", citation: "« Nathanaël »", interpretation: "La répétition du nom martèle l'injonction — structure didactique de la prose lyrique.", keywords: ["anaphore","nathanaël","injonction","répétition","didactique","gide"] },
      { procede: "Impératif", citation: "« Nathanaël, mets en ordre dans ta vie. Nathanaël, jette de ta vie les images du p »", interpretation: "Les impératifs structurent le discours comme manifeste de la quête de soi.", keywords: ["impératif","mets","jette","garde","manifeste","quête"] },
      { procede: "Métaphore", citation: "« les images du passé »", interpretation: "Le passé est une image à effacer — métaphore de la purification intérieure.", keywords: ["métaphore","images","passé","effacer","purification","mémoire"] },
      { procede: "Antithèse", citation: "« jette… / ne garde que »", interpretation: "L'opposition entre rejeter et retenir définit l'authenticité — quête de l'essentiel.", keywords: ["antithèse","jette","garde","essentiel","authenticité","contraste"] }
    ]
  },
  {
    id: "GT-075",
    titre: "Polyeucte — martyre",
    auteur: "Corneille",
    oeuvre: "Polyeucte (1642)",
    genre: "Théâtre tragique",
    diff: 2,
    texte: `POLYEUCTE
Non, non, les erreurs de votre cœur
Ont trop de pouvoir encore sur votre langue :
Elle parle avec douceur, et mon cœur s'y abonne ;
Et mon devoir m'oblige, et parle avec fureur.
Non, non, je ne veux point qu'un autre partage un jour
Le fruit délicieux d'un honneur que j'ai conquis ;
Et je ne veux point qu'un autre reçoive en couronne
Cette gloire que j'ai gagnée et qui me couronne.
POLYEUCTE
Non, non, madame, et c'est en moi-même que je cherche
Ce flot de vos regards dont le sang se resserre.`,
    contexte: "Tragédie chrétienne — conflit foi / amour, registre tragique.",
    attendus: [
      { procede: "Antithèse", citation: "« parle avec douceur » / « parle avec fureur »", interpretation: "Pauline et le devoir s'opposent dans le cœur de Polyeucte — conflit tragique foi/amour.", keywords: ["antithèse","douceur","fureur","devoir","passion","conflit"] },
      { procede: "Anaphore", citation: "« Non, non »", interpretation: "La répétition refuse la compromission — fermeté du martyr face à l'amour.", keywords: ["anaphore","non","refus","martyr","fermeté","foi"] },
      { procede: "Registre tragique", citation: "« mon devoir m'oblige »", interpretation: "Le devoir divin dépasse le personnage — fatalité tragique du martyre.", keywords: ["tragique","devoir","oblige","martyre","fatalité","foi"] },
      { procede: "Alexandrin", citation: "« Et mon devoir m'oblige, et parle avec fureur »", interpretation: "Le vers solennel porte la grandeur du conflit intérieur — alexandrin cornélien.", keywords: ["alexandrin","douze","solennel","cornelle","conflit","vers"] }
    ]
  },
  {
    id: "GT-076",
    titre: "Booz endormi — ouverture",
    auteur: "Victor Hugo",
    oeuvre: "La Légende des Siècles (1859)",
    genre: "Poésie",
    diff: 2,
    texte: `Booz s'était couché de fatigue accablé ;
Il avait tout le jour travaillé dans son aire ;
Puis il avait fait son lit à sa manière
Là-haut, vers le zénith, sous les cieux étoilé.

Ce vieillard possédait des champs de blés et d'orge ;
Il était, quoique riche, à la justice enclin ;
Il n'avait pas de fange en l'eau de son moulin,
Il n'avait pas d'enfer dans le feu de sa forge.

Sa barbe était d'argent comme un ruisseau d'avril.
Sa gerbe n'était point avare ni haineuse ;
Quand il voyait passer quelque pauvre glaneuse :
— Laissez tomber exprès des épis, disait-il.`,
    contexte: "Poème biblique — nuit paisible, énumération, registre épique.",
    attendus: [
      { procede: "Comparaison", citation: "« Sa barbe était d'argent comme un ruisseau d'avril »", interpretation: "La barbe blanche devient ruisseau printanier — vieillesse transfigurée en pureté.", keywords: ["comparaison","comme","barbe","ruisseau","vieillesse","pureté"] },
      { procede: "Antithèse", citation: "« Il n'avait pas de fange » / « pas d'enfer dans le feu »", interpretation: "La double négation définit la bonté de Booz en creux — pureté morale.", keywords: ["antithèse","fange","enfer","bonté","pureté","négation"] },
      { procede: "Registre épique", citation: "« sous les cieux étoilé »", interpretation: "Le cadre cosmique élève le moissonnage humble au rang d'épopée biblique.", keywords: ["épique","cieux","étoilé","cosmique","biblique","hugo"] },
      { procede: "Registre lyrique", citation: "« Laissez tomber exprès des épis »", interpretation: "Le geste de générosité condense la bonté humaniste de Booz en une parole.", keywords: ["lyrique","épis","générosité","geste","humaniste","bonté"] }
    ]
  },
  {
    id: "GT-077",
    titre: "Zone — début",
    auteur: "Guillaume Apollinaire",
    oeuvre: "Alcools (1913)",
    genre: "Poésie moderniste",
    diff: 3,
    texte: `À la fin tu es las de ce monde ancien.
Bergère ô tour Eiffel le troupeau des ponts bêle ce matin.
Tu en as assez de vivre dans l'antiquité grecque et romaine.
Ici même les automobiles ont l'air d'être anciennes.
La religion seule est restée toute neuve, la religion est restée simple comme les hangars de Port-Aviation.
Seul en Europe tu n'es pas antique ô Christianisme.
L'Européen le plus moderne c'est vous pape Pie X.
Et toi que les fenêtres observent la honte te retient d'entrer dans une église et de t'y confesser ce matin.`,
    contexte: "Poème moderniste — collage d'images, vers libre, rupture.",
    attendus: [
      { procede: "Apostrophe", citation: "« Bergère ô tour Eiffel »", interpretation: "Apostrophe surréaliste qui fusionne pastorale et modernité urbaine — collage apollinairien.", keywords: ["apostrophe","bergère","eiffel","modernité","collage","apollinaire"] },
      { procede: "Antithèse", citation: "« monde ancien » / « moderne »", interpretation: "L'opposition structure le poème — tension entre héritage classique et rupture moderniste.", keywords: ["antithèse","ancien","moderne","rupture","héritage","tension"] },
      { procede: "Vers libre", citation: "« À la fin tu es las de ce monde ancien »", interpretation: "L'absence de contrainte métrique fixe libère le flux de conscience et la modernité poétique.", keywords: ["vers libre","rupture","mètre","modernité","flux","apollinaire"] },
      { procede: "Accumulation", citation: "« À la fin tu es las de ce monde ancien. Bergère ô tour Eiffel le troupeau des pon »", interpretation: "Le collage d'images urbaines et religieuses construit la vision moderniste de Paris.", keywords: ["accumulation","collage","images","paris","urbain","moderniste"] }
    ]
  },
  {
    id: "GT-078",
    titre: "Le Dormeur du val — suite",
    auteur: "Arthur Rimbaud",
    oeuvre: "Poésies (1870)",
    genre: "Poésie",
    diff: 2,
    texte: `Un soldat jeune, bouche ouverte, tête nue,
Et la nuque baignant dans le frais cresson bleu,
Dort ; il est étendu dans l'herbe, sous la nue,
Pâle dans son lit vert où la lumière pleut.

Les pieds dans les glaïeuls, il dort. Souriant comme
Sourirait un enfant malade, il fait un somme :
Nature, berce-le chaudement : il a froid.

Les parfums ne font pas frissonner sa narine ;
Il dort dans le soleil, la main sur sa poitrine,
Tranquille. Il a deux trous rouges au côté droit.`,
    contexte: "Chute du poème — révélation tragique, registre pathétique.",
    attendus: [
      { procede: "Ironie tragique", citation: "« Il a deux trous rouges au côté droit »", interpretation: "La révélation finale retourne le tableau bucolique — le soldat était mort depuis le début.", keywords: ["ironie","trous","rouges","mort","révélation","rimbaud"] },
      { procede: "Personnification", citation: "« Nature, berce-le chaudement : il a froid »", interpretation: "La nature ne peut réchauffer le mort — apostrophe pathétique et indifférence cosmique.", keywords: ["personnification","nature","berce","froid","mort","pathos"] },
      { procede: "Champ lexical", citation: "« Un soldat jeune, bouche ouverte, tête nue, Et la nuque baignant dans le frais cr »", interpretation: "Le champ lexical du sommeil masque la mort — suspense avant la chute.", keywords: ["champ lexical","dort","sommeil","repos","mort","suspense"] },
      { procede: "Registre pathétique", citation: "« deux trous rouges »", interpretation: "La violence de la guerre surgit dans l'image crue — compassion et dénonciation.", keywords: ["pathétique","trous","guerre","violence","compassion","soldat"] }
    ]
  },
  {
    id: "GT-080",
    titre: "Le Petit Prince — renard",
    auteur: "Antoine de Saint-Exupéry",
    oeuvre: "Le Petit Prince (1943)",
    genre: "Conte",
    diff: 1,
    texte: `— On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux, reprit le renard.
— L'essentiel est invisible pour les yeux, répétit le petit prince, afin de se souvenir.
— C'est le temps que tu as perdu pour ta rose qui fait ta rose si importante.
— C'est le temps que j'ai perdu pour ma rose... fit le petit prince, afin de se souvenir.
— Les hommes ont oublié cette vérité, dit le renard. Mais tu ne dois pas l'oublier. Tu deviens responsable pour toujours de ce que tu as apprivoisé. Tu es responsable de ta rose.
— Je suis responsable de ma rose... répétit le petit prince.`,
    contexte: "Conte philosophique — morale sur l'amitié et l'amour.",
    attendus: [
      { procede: "Antithèse", citation: "« cœur » / « yeux »", interpretation: "Voir avec le cœur oppose intérieur et extérieur — morale sur la perception affective.", keywords: ["antithèse","cœur","yeux","intérieur","vision","morale"] },
      { procede: "Oxymore", citation: "« invisible pour les yeux »", interpretation: "L'essentiel est paradoxalement invisible — oxymore qui définit l'amitié et l'amour.", keywords: ["oxymore","invisible","yeux","essentiel","paradoxe","amour"] },
      { procede: "Répétition", citation: "« afin de se souvenir »", interpretation: "Le petit prince répète pour mémoriser — apprentissage de la sagesse par la parole.", keywords: ["répétition","souvenir","apprentissage","sagesse","renard","mémoire"] },
      { procede: "Maxime", citation: "« Tu es responsable de ta rose »", interpretation: "La formule condense la morale du conte — responsabilité et apprivoisement.", keywords: ["maxime","responsable","rose","morale","amitié","apprivoisé"] }
    ]
  }
];
const GTEXT_OEUVRE_INFO_EXTRA2 = {
  "je vis je meurs": "Sonnet de Louise Labé (1555) : amour passionné, oxymores — poétesse de la Pléiade.",
  "louv et l agneau": "Fable de La Fontaine (VIII, 3) : « la raison du plus fort » — satire du pouvoir.",
  "petit prince": "Conte de Saint-Exupéry (1943) : amitié, regard du cœur — allégorie humaniste.",
  "zone": "Poème d'Apollinaire (1913) : modernité parisienne, vers libre, collage d'images.",
  "nausée": "Roman de Sartre (1938) : existentialisme, crise de l'existence — Roquentin et la racine.",
  "cantatrice chauve": "Pièce d'Ionesco (1950) : théâtre de l'absurde, langage vide de sens.",
  "godot": "Pièce de Beckett (1952) : attente, absurde — théâtre existentialiste.",
  "nourritures terrestres": "Prose lyrique de Gide (1897) : quête de soi, jouissance de l'existence.",
  "barbier de seville": "Comédie de Beaumarchais (1775) : Figaro, critique de l'aristocratie.",
  "chartreuse de parme": "Roman de Stendhal (1839) : Fabrice del Dongo, Italie, amour et politique.",
  "assommoir": "Roman de Zola (1877) : Gervaise, misère ouvrière — naturalisme.",
  "l amant": "Roman de Duras (1984) : amour colonial, deuil, écriture minimaliste."
};

if (typeof GRANDS_TEXTES !== 'undefined') {
  GRANDS_TEXTES.push(...GRANDS_TEXTES_EXTRA2);
}
if (typeof GTEXT_OEUVRE_INFO !== 'undefined') {
  Object.assign(GTEXT_OEUVRE_INFO, GTEXT_OEUVRE_INFO_EXTRA2);
}
