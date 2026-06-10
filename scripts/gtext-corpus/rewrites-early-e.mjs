import { att } from '../gtext-enrichment-lib.mjs';

export const REWRITES_EARLY_E = {
  'GT-201': {
    texte: `On distingue de longs fossés en lacis où le résidu de nuit s'accumule. C'est la tranchée. Le fond en est tapissé d'une couche visqueuse d'où le pied se décolle à chaque pas avec bruit, et qui sent mauvais autour de chaque abri, à cause de l'urine de la nuit. Les trous eux-mêmes, si on s'y penche en passant, puent aussi, comme des bouches. Je vois des ombres émerger de ces puits latéraux, et se mouvoir, masses énormes et difformes : des espèces d'ours qui pataugent et grognent. C'est nous. Nous sommes emmitouflés à la manière des populations arctiques. Quelques-uns s'étirent, vomissent des bâillements. On perçoit des figures, rougeoyantes ou livides, avec des salissures qui les balafrent, trouées par les veilleuses d'yeux brouillés et collés au bord. Tac ! Tac ! Pan ! Les coups de fusil, la canonnade. Au-dessus de nous, partout, ça crépite ou ça roule, par longues rafales ou par coups séparés. Le sombre et flamboyant orage ne cesse jamais, jamais.`,
    contexte: "Roman de guerre — naturalisme, horreur des tranchées, registre pathétique.",
    attendus: [
      att('Métaphore', '« C\'est la tranchée »', 'Barbusse nomme l\'espace militaire avec une sobriété oppressante : la tranchée devient le monde entier du soldat.', ["métaphore","tranchée","espace","guerre","soldat","barbusse"]),
      att('Comparaison', '« puent aussi, comme des bouches »', 'La comparaison organique transforme les abris en corps malades : le naturalisme insiste sur la dégradation physique.', ["comparaison","bouche","puanteur","abri","naturalisme","dégradation"]),
      att('Comparaison', '« des espèces d\'ours »', 'Les soldats sont animalisés : la comparaison réduit l\'homme à une masse informe épuisée.', ["comparaison","ours","soldats","animalisation","épuisement","masse"]),
      att('Anaphore', '« ne cesse jamais, jamais »', 'L\'anaphore finale martèle l\'incessance du bombardement : registre pathétique et oppressif de la guerre.', ["anaphore","jamais","bombardement","orage","pathétique","guerre"])
    ],
  },
  'GT-202': {
    texte: `C'était un soir, chez l'armurier Costecalde. Tartarin de Tarascon était en train de démontrer à quelques amateurs le maniement du fusil à aiguille, alors dans toute sa nouveauté… Soudain la porte s'ouvre, et un chasseur de casquettes se précipite effaré dans la boutique, en criant : « Un lion !… un lion !… » Stupeur générale, effroi, tumulte, bousculade. Tartarin croise la baïonnette, Costecalde court fermer la porte. On apprend que la ménagerie Mitaine venait de s'installer sur la place du Château avec un magnifique lion de l'Atlas. Tartarin fit lentement le tour de la baraque et vint se planter devant la cage du lion… Terrible et solennelle entrevue ! le lion de Tarascon et le lion de l'Atlas en face l'un de l'autre… Au bout d'un moment, les chasseurs de casquettes entendirent qu'il murmurait, en regardant le lion : « Ça, oui, c'est une chasse. »`,
    contexte: "Roman comique — bravade provinciale, registre satirique et burlesque.",
    attendus: [
      att('Dialogue', '« Un lion !… un lion !… »', 'L\'exclamation déclenche la comédie collective : Daudet dramatise la panique provinciale face au merveilleux exotique.', ["dialogue","lion","panique","exclamation","comique","daudet"]),
      att('Hyperbole', '« Terrible et solennelle entrevue »', 'L\'hyperbole mock-heroïque magnifie un simple face-à-face avec une cage : registre satirique de la bravade.', ["hyperbole","entrevue","solennelle","bravade","satirique","tarascon"]),
      att('Registre comique', '« Ça, oui, c\'est une chasse »', 'La réplique de Tartarin ridiculise le héros : la bravade se réduit à une vaniteuse contemplation derrière des barreaux.', ["comique","chasse","vanité","tarascon","ridicule","lion"]),
      att('Registre satirique', '« magnifique lion de l\'Atlas »', 'Le lion de foire devient objet de gloire provinciale : Daudet satirise l\'exotisme de pacotille et la mythomanie tarasconnaise.', ["satirique","atlas","exotisme","foire","province","mythomanie"])
    ],
  },
  'GT-203': {
    texte: `Maintenant elle avait pris l'habitude d'aller dès le matin tout au bout des terres, sur la haute falaise de Pors-Even, passant par derrière la maison paternelle de son Yann pour n'être pas vue par la mère ni les petites sœurs. Elle s'en allait toute seule à l'extrême pointe de ce pays de Ploubazlanec qui se découpe en corne de renne sur la Manche grise, et s'asseyait là tout le jour aux pieds d'une croix isolée qui domine les lointains immenses des eaux… Il y en a ainsi partout, de ces croix de granit, qui se dressent sur les falaises avancées de cette terre des marins, comme pour demander grâce ; comme pour apaiser la grande chose mouvante, mystérieuse, qui attire les hommes et ne les rend plus. Autour de cette croix de Pors-Even, il y avait les landes éternellement vertes, tapissées d'ajoncs courts. Et Gaud, assise au pied de sa croix, restait là, au milieu de ces tranquillités, regardant toujours, jusqu'à la nuit tombée, jusqu'à ne plus rien voir. Attendre, toujours attendre, sans rien savoir !`,
    contexte: "Roman exotique — Bretagne, amour et mer, registre lyrique et pathétique.",
    attendus: [
      att('Anaphore', '« Attendre, toujours attendre, sans rien savoir »', 'L\'anaphore conclut le passage sur l\'angoisse muette de Gaud : le pathos naît de l\'attente sans nouvelles.', ["anaphore","attendre","angoisse","gaud","pathétique","loti"]),
      att('Personnification', '« la grande chose mouvante, mystérieuse »', 'La mer est personnifiée en force fataliste : Loti transforme l\'élément marin en destin qui retient les pêcheurs.', ["personnification","mer","mystérieuse","fatalité","marins","loti"]),
      att('Champ lexical', '« Manche grise »', 'Le champ lexical maritime et breton ancre la scène dans un réalisme lyrique : paysage et deuil se confondent.', ["champ lexical","manche","grise","mer","bretagne","paysage"]),
      att('Registre pathétique', '« jusqu\'à ne plus rien voir »', 'La progression vers la nuit traduit l\'effacement du monde : Gaud demeure dans une souffrance contemplative.', ["pathétique","nuit","effacement","souffrance","attente","yann"])
    ],
  },
  'GT-204': {
    texte: `Le Nautilus, construit en acier et en cuivre, avait la forme d'un long cigare, dont la taille s'accroissait sensiblement du milieu vers les bouts. Il filait comme un poisson dans les profondeurs, laissant derrière lui un sillage lumineux. Par les hublots, nous voyions des méduses phosphorescentes danser dans l'eau bleuâtre, des bancs de poissons inconnus, des forêts de corail où l'on eût dit des arbres pétrifiés. Le silence de l'abîme était plus lourd que celui de la surface ; parfois un grondement lointain, pareil au roulement d'un tonnerre, nous rappelait que la mer recèle des forces incommensurables. Le capitaine Nemo, les bras croisés, contemplait cet univers souterrain avec la fierté d'un créateur.`,
    contexte: "Roman d\'aventures — science-fiction, mer, registre descriptif et merveilleux.",
    attendus: [
      att('Comparaison', '« filait comme un poisson »', 'La comparaison animalise la machine : Verne fusionne nature et technologie dans un registre merveilleux.', ["comparaison","poisson","nautilus","technologie","merveilleux","verne"]),
      att('Registre merveilleux', '« méduses phosphorescentes »', 'Les visions sous-marines ouvrent un monde fantastique : le descriptif scientifique devient émerveillement.', ["merveilleux","méduses","abîme","vision","fantastique","science"]),
      att('Hyperbole', '« forces incommensurables »', 'L\'hyperbole magnifie la puissance océanique : le merveilleux s\'appuie sur l\'infiniment grand.', ["hyperbole","mer","abîme","puissance","infini","nature"]),
      att('Description', '« forme d\'un long cigare »', 'La description précise du Nautilus installe le réalisme technique propre au roman d\'aventures vernien.', ["description","nautilus","forme","technique","réalisme","aventure"])
    ],
  },
  'GT-205': {
    texte: `Quand j'eus vingt-cinq ans, et que je commençai de me persuader que j'avais quelque talent pour la peinture, je me rendis à La Braye, dans la terre de mes pères. C'était au commencement de l'été. Le manoir de La Roncière, entouré de vieux chênes, semblait dormir sous la lumière dorée ; les fenêtres ouvertes laissaient entrer l'odeur des foins coupés. Dominique, assis sur le perron, rêvait à Madeleine avec une mélancolie douce. Il savait que leur amour était impossible : elle était mariée, lui n'osait parler. Le vent faisait bruisser les feuilles ; au loin, un clocher sonnait l'angélus. Tout semblait conspirer au bonheur, et pourtant une invisible barrière séparait leurs cœurs.`,
    contexte: "Roman pastoral — amour impossible, registre lyrique et mélancolique.",
    attendus: [
      att('Incipit', '« Quand j\'eus vingt-cinq ans »', 'L\'incipit autobiographique situe le récit dans la mémoire : Fromentin mêle portrait intérieur et paysage.', ["incipit","mémoire","peinture","autobiographie","fromentin","récit"]),
      att('Personnification', '« manoir ... semblait dormir »', 'Le manoir endormi personnifie la quiétude du monde rural : le décor pastoral enveloppe la rêverie amoureuse.', ["personnification","manoir","sommeil","quiétude","pastoral","décors"]),
      att('Registre lyrique', '« rêvait à Madeleine »', 'La focalisation sur le rêve amoureux installe un registre lyrique : subjectivité et mélancolie dominent le passage.', ["lyrique","rêve","madeleine","subjectivité","amour","mélancolie"]),
      att('Antithèse', '« bonheur » / « barrière »', 'L\'antithèse entre cadre harmonieux et impossibilité amoureuse structure le roman pastoral de Fromentin.', ["antithèse","bonheur","barrière","impossible","contraste","sentiment"])
    ],
  },
  'GT-208': {
    texte: `Sire, je suis de votre empire
Orphelin, sans appui ny guide ;
Mais j'ai l'esprit qui ne se tire
Jamais du chemin de la rime.
Quand bien plus grand que moi seroit
Le mal que l'on me vient de dire,
Je n'aurois pas un seul espoir
De vous en faire repentir.
Car je suis de votre maison,
Et si je suis un peu mutin,
C'est pour vous faire entendre au moins
Que je suis encor votre cousin.
Ne me laissez donc pas mourir
Sous le poids de l'adversité :
Un bon mot peut tout secourir,
Et la rime est ma vérité.`,
    contexte: "Poésie humaniste — satire légère, registre comique et élégant.",
    attendus: [
      att('Apostrophe', '« Sire, je suis »', 'Marot s\'adresse directement au roi : l\'apostrophe installe un ton suppliant mêlé d\'ironie courtoise.', ["apostrophe","sire","roi","supplique","cour","marot"]),
      att('Métaphore', '« chemin de la rime »', 'La rime devient chemin obstiné : métaphore de la fidélité poétique du poète humaniste.', ["métaphore","rime","chemin","poésie","obstination","humanisme"]),
      att('Registre comique', '« un peu mutin »', 'L\'autodérision mutine tempère la supplique : registre comique et élégant propre aux épîtres de Marot.', ["comique","mutin","ironie","supplique","élégant","satire"]),
      att('Rime', 'empire / guide / tire / rime', 'La rime croisée structure l\'épître : l\'artifice formel sert la persuasion polémique adressée au souverain.', ["rime","structure","forme","persuasion","épître","vers"])
    ],
  },
  'GT-209': {
    texte: `SCENE III. — Le cabinet de la reine.
LA REINE, MME DE MOTTE, le comte de Villeroy.
LA REINE. — On dit qu'un verre d'eau renversé peut faire tomber un ministre. C'est une plaisanterie de cour ; mais la plaisanterie devient sérieuse quand l'intrigue s'en mêle. Le roi est jeune, la reine est étrangère, et chacun cherche à profiter de la moindre faiblesse. Un geste, un mot, une larme peuvent décider du sort d'un homme. C'est ainsi que l'Angleterre et la France se jouent leur destin sur un plateau d'échiquier où les pions sont des ambassadeurs et les fous des favorites.`,
    contexte: "Vaudeville historique — intrigue politique, registre comique et satirique.",
    attendus: [
      att('Métaphore', '« verre d\'eau renversé »', 'Le détail trivial devient cause politique : Scribe illustre la disproportion comique entre fait et conséquence.', ["métaphore","verre","ministre","disproportion","intrigue","scribe"]),
      att('Registre satirique', '« plaisanterie de cour »', 'La satire vise les manœuvres politiques : la cour devient théâtre d\'intrigues disproportionnées.', ["satirique","cour","intrigue","politique","moquerie","vaudeville"]),
      att('Métaphore', '« plateau d\'échiquier »', 'La métaphore du jeu d\'échecs réduit la diplomatie à stratégie froide — registre comique et satirique.', ["métaphore","échiquier","diplomatie","jeu","pouvoir","intrigue"]),
      att('Registre comique', '« les fous des favorites »', 'L\'ironie sur les favorites dénonce la trivialité du pouvoir : comique de situation scénique.', ["comique","favorites","ironie","pouvoir","cour","satire"])
    ],
  },
  'GT-210': {
    texte: `Jacob regardait ces dames avec une simplicité qui les déconcertait ; il ne savait pas qu'il fallait feindre, et c'est peut-être pour cela qu'il plaisait. Il entrait dans le salon comme on entre dans un champ, les mains libres, l'âme ouverte, sans calcul ni détour. Les marquis souriaient de sa gaucherie ; les marquises le trouvaient original. Marivaux observe ici l'ascension sociale du paysan : ce qui devrait humilier Jacob — sa naïveté — devient paradoxalement son charme. L'ironie marivaudienne naît de l'écart entre les codes mondains et la sincérité du parvenu.`,
    contexte: "Roman comique — ascension sociale, registre ironique et psychologique.",
    attendus: [
      att('Antithèse', '« simplicité » / « feindre »', 'L\'opposition entre sincérité et hypocrisie mondaine structure le roman : Jacob triomphe par naïveté.', ["antithèse","simplicité","feindre","naïveté","hypocrisie","marivaux"]),
      att('Comparaison', '« comme on entre dans un champ »', 'La comparaison champ/salon marque l\'écart social : registre ironique de l\'ascension.', ["comparaison","champ","salon","gaucherie","social","ironie"]),
      att('Registre ironique', '« c\'est peut-être pour cela qu\'il plaisait »', 'L\'ironie marivaudienne renverse les valeurs : la gaucherie devient séduction.', ["ironique","plaisait","renversement","séduction","codes","parvenu"]),
      att('Registre comique', '« déconcertait »', 'Le malaise des dames provoque le rire : comique de caractère et de situation.', ["comique","déconcert","malaise","rire","caractère","situation"])
    ],
  },
  'GT-211': {
    texte: `Je l'aimais avec passion, et je la faisais souffrir. Je sentais que mon amour devenait pour elle un fardeau, que ma jalousie l'étouffait, que ma faiblesse l'accablait. Je voulais la quitter, et je ne le pouvais pas ; je voulais la rendre heureuse, et je ne faisais qu'accroître son malheur. Adolphe est le portrait d'une passion égoïste : Constant analyse les mouvements d'une âme qui se déchire entre remords et désir. Ellénore souffre de l'amour même qu'elle inspire ; Adolphe souffre de sa propre impuissance à aimer justement. Le registre lyrique se teinte de tragédie intérieure.`,
    contexte: "Roman psychologique — passion et remords, registre lyrique et tragique.",
    attendus: [
      att('Antithèse', '« la quitter » / « je ne le pouvais pas »', 'L\'antithèse dramatise l\'impuissance d\'Adolphe : le roman psychologique naît de ce clivage intérieur.', ["antithèse","quitter","impuissance","passion","clivage","constant"]),
      att('Registre lyrique', '« Je l\'aimais avec passion »', 'L\'aveu lyrique ouvre le monologue intérieur : subjectivité et introspection dominent le récit.', ["lyrique","passion","aveu","subjectivité","introspection","amour"]),
      att('Champ lexical', '« mon amour devenait pour elle un fardeau »', 'Le champ lexical de la souffrance installe un registre pathétique : l\'amour devient torture réciproque.', ["champ lexical","souffrance","fardeau","malheur","pathétique","passion"]),
      att('Registre tragique', '« je ne faisais qu\'accroître son malheur »', 'Constant transforme le roman sentimental en analyse tragique : l\'amour égoïste accroît le malheur d\'Ellénore.', ["tragique","malheur","remords","désir","psychologique","constant"])
    ],
  },
  'GT-212': {
    texte: `Il n'y a point d'autre bonheur que celui qu'on sent ; et pour le sentir, il faut être seul. La nature m'appelle ; je la suis dans ses retraites ; je m'assieds au bord des torrents, je m'étends sous les chênes centenaires. Là, je respire, je rêve, je souffre. Obermann, ce fils du XVIIIe siècle qui n'a pu s'adapter au monde, cherche dans la nature une consolation que la société lui refuse. Senancour invente le mal du siècle : cette mélancolie sans objet, ce spleen préromantique qui annonce Chateaubriand et Musset. La solitude alpine devient temple de l'âme moderne.`,
    contexte: "Roman romantique — mal du siècle, solitude, registre lyrique et mélancolique.",
    attendus: [
      att('Maxime', '« Il n\'y a point d\'autre bonheur que celui qu\'on sent »', 'La maxime condense la philosophie d\'Obermann : le bonheur est intérieur, inaccessible au monde social.', ["maxime","bonheur","sentir","intérieur","philosophie","senancour"]),
      att('Registre lyrique', '« je respire, je rêve, je souffre »', 'La triade lyrique exprime la complexité du moi romantique : nature, rêve et douleur s\'entrelacent.', ["lyrique","rêve","souffrir","moi","romantisme","nature"]),
      att('Antithèse', '« nature » / « société »', 'L\'antithèse structure le mal du siècle : Obermann fuit le monde pour la retraite alpine.', ["antithèse","nature","société","solitude","fuite","mal du siècle"]),
      att('Registre mélancolique', '« mélancolie sans objet »', 'Senancour nomme le spleen préromantique : mélancolie moderne qui annonce le romantisme français.', ["mélancolique","spleen","préromantisme","solitude","âme","siècle"])
    ],
  },
  'GT-213': {
    texte: `Hélas ! vous ne m'aimez plus, Julie ! Vous me le dites avec une froideur qui me glace le sang. Qu'ai-je fait pour mériter ce changement ? Je vous aimais avec une passion pure, respectueuse, qui ne demandait que votre bonheur. Vous m'avez encouragé par vos regards, par vos paroles, par ce silence même qui parlait à mon cœur. Et maintenant vous me repoussez ! Saint-Preux déchire le pacte social du roman épistolaire : l'amour impossible devient drame moral. Rousseau mêle lyrisme et pathos dans cette confession où le sentiment affole la raison.`,
    contexte: "Roman épistolaire — amour impossible, registre lyrique et pathétique.",
    attendus: [
      att('Apostrophe', '« Julie ! »', 'L\'apostrophe ouvre la lettre dans un registre pathétique : Saint-Preux interpelle celle qui le rejette.', ["apostrophe","julie","lettre","pathétique","amour","rousseau"]),
      att('Registre pathétique', '« froideur qui me glace le sang »', 'L\'hyperbole physiologique traduit la souffrance amoureuse : le corps manifeste le drame moral.', ["pathétique","froideur","souffrance","corps","amour","rejet"]),
      att('Antithèse', '« passion pure » / « vous me repoussez »', 'L\'antithèse entre amour idéal et rejet dramatise l\'impossible : registre lyrique et tragique.', ["antithèse","passion","repousse","impossible","lyrique","tragique"]),
      att('Registre lyrique', '« silence même qui parlait à mon cœur »', 'Le paradoxe lyrique transforme le silence en langage amoureux : sensibilité préromantique.', ["lyrique","silence","cœur","paradoxe","sensibilité","épistolaire"])
    ],
  },
  'GT-214': {
    texte: `Meung, où il était entré, il y avait un quart d'heure à peu près, par la porte de Beaugency, produisit une sensation dont la défaveur rejaillit jusqu'à son cavalier. Et cette sensation avait été d'autant plus pénible au jeune d'Artagnan (ainsi s'appelait le don Quichotte de cet autre Rossinante), qu'il ne se cachait pas le côté ridicule que lui donnait, si bon cavalier qu'il fût, une pareille monture. Aussi avait-il fort soupiré en acceptant le don que lui en avait fait M. d'Artagnan père : il n'ignorait pas qu'une pareille bête valait au moins vingt livres. Il est vrai que les paroles dont le présent avait été accompagné n'avaient pas de prix. — « Mon fils, avait dit le gentilhomme gascon, dans ce pur patois du Béarn, dont Henri IV n'avait jamais pu parvenir à se défaire, — mon fils, ce cheval est né dans la maison de votre père, il y a tantôt treize ans, et y est resté depuis ce temps-là, ce qui doit vous porter à l'aimer. Ne le vendez jamais, laissez-le mourir tranquillement et honorablement de vieillesse, et si vous faites campagne avec lui, ménagez-le comme vous ménageriez un vieux serviteur.`,
    contexte: "Roman d\'aventures — héroïsme, jeunesse, registre épique et comique.",
    attendus: [
      att('Comparaison', '« le don Quichotte de cet autre Rossinante »', 'Dumas compare d\'Artagnan à don Quichotte : le héros gascon naît déjà dans la bravade et l\'idéal chevaleresque.', ["comparaison","quichotte","rossinante","dartagnan","bravade","dumas"]),
      att('Registre comique', '« une pareille monture »', 'La monture grotesque installe le ton comique : le héros épique est d\'abord ridicule aux yeux du bourg.', ["comique","monture","ridicule","cheval","meung","gascon"]),
      att('Caractérisation', '« ce pur patois du Béarn »', 'Le patois béarnais marque l\'identité régionale du héros : caractérisation sociale et nationale dès l\'exposition.', ["caractérisation","béarn","patois","gascon","identité","père"]),
      att('Registre épique', '« ménagez-le comme vous ménageriez un vieux serviteur »', 'Le conseil paternel mêle comique et chevalerie : tonalité héroïcomique qui prépare les aventures.', ["épique","serviteur","cheval","conseil","héroïcomique","paternité"])
    ],
  },
  'GT-215': {
    texte: `RUY BLAS, seul, masqué.
Me voici donc le favori d'une reine !
Moi, le fils d'un meurtrier, moi, le laquais déguisé,
Moi, que l'Espagne méprise et que Madrid insulte !
Quel masque ! quel déguisement ! quel travestissement !
Et pourtant, c'est ma gloire, c'est ma joie, c'est ma vie !
Car enfin, je l'aime, cette reine adorée,
Et peut-être me regarde-t-elle en secret avec amour.
Mais non ! je suis un masque, un fantôme, une ombre ;
Si elle savait qui je suis, elle me chasserait.
Ô fatalité ! ô comédie du destin !
Le valet joue le maître, et le maître est un valet.`,
    contexte: "Drame romantique — déguisement, critique sociale, registre tragique et satirique.",
    attendus: [
      att('Anaphore', '« Moi, le fils d\'un meurtrier »', 'L\'anaphore martèle l\'ascension paradoxale : Hugo dramatise le renversement social du laquais masqué.', ["anaphore","moi","laquais","renversement","social","hugo"]),
      att('Antithèse', '« valet joue le maître »', 'L\'antithèse finale condense la critique sociale : le drame romantique dénonce l\'injustice des classes.', ["antithèse","valet","maître","classes","critique","tragique"]),
      att('Registre tragique', '« Si elle savait qui je suis »', 'Le monologue révèle l\'angoisse du déguisement : amour impossible et peur du démasquement.', ["tragique","masque","angoisse","amour","déguisement","fatalité"]),
      att('Registre satirique', '« comédie du destin »', 'La satire sociale traverse le pathos : Hugo dénonce une société fondée sur l\'apparence.', ["satirique","comédie","destin","apparence","société","injustice"])
    ],
  },
  'GT-216': {
    texte: `LORENZACCIO, seul.
Florence ! Florence ! ô ma mère adorée,
Ville de mes aïeux, cité de la liberté,
Comme tu es tombée ! Comme tu es prostituée !
Le tyran s'assied sur ton trône usurpé,
Et tes fils, lâches ou vendus, baissent la tête.
Moi seul, Lorenzaccio, le dernier des Médicis,
Je veux te sauver, ou du moins mourir pour toi.
Mais à quoi bon ? La décadence est partout ;
Le vice a corrompu les âmes et les corps ;
Florence agonise, et l'Italie entière
Regarde sa mort sans oser lui tendre la main.`,
    contexte: "Drame romantique — tyrannie, décadence, registre tragique et satirique.",
    attendus: [
      att('Apostrophe', '« Florence ! Florence ! »', 'L\'apostrophe à la ville mère ouvre un registre épique et pathétique : Musset personnifie la patrie trahie.', ["apostrophe","florence","patrie","pathétique","épique","musset"]),
      att('Personnification', '« Florence agonise »', 'Florence agonisante personnifie la décadence politique : la cité devient corps moribond.', ["personnification","florence","agonie","décadence","politique","tyrannie"]),
      att('Registre tragique', '« mourir pour toi »', 'Le héros romantique accepte le sacrifice : tragédie de l\'engagement dans un monde corrompu.', ["tragique","sacrifice","héros","engagement","corruption","mort"]),
      att('Registre satirique', '« lâches ou vendus »', 'La satire vise la complicité collective : Musset dénonce la lâcheté des contemporains.', ["satirique","lâcheté","vendus","complicité","dénonciation","tyran"])
    ],
  },
  'GT-217': {
    texte: `Elle était belle à faire peur, cette fille des bois, avec ses yeux verts comme la mer par tempête, et sa voix qui semblait venir d'un autre monde. Les paysans la regardaient passer en se signant ; les prêtres parlaient de sorcellerie. Mlle de Cordoué, l'Ensorcelée, marchait seule dans les landes bretonnes, poursuivie par une passion qu'elle ne comprenait pas. Barbey d'Aurevilly peint ici la femme fatale : beauté diabolique, désir interdit, registre pathétique et fantastique. La lande bretonne devient décor d'une tragédie où l'amour et la damnation se confondent.`,
    contexte: "Nouvelle fantastique — perversité, séduction, registre pathétique et tragique.",
    attendus: [
      att('Comparaison', '« yeux verts comme la mer par tempête »', 'La comparaison marine magnifie le regard : la beauté devient menace — registre fantastique.', ["comparaison","yeux","mer","menace","beauté","barbey"]),
      att('Registre fantastique', '« parlaient de sorcellerie »', 'Le soupçon de sorcellerie installe le fantastique : le surnaturel hante la lande bretonne.', ["fantastique","sorcellerie","surnaturel","lande","breton","peur"]),
      att('Hyperbole', '« belle à faire peur »', 'L\'hyperbole condense la femme fatale : la beauté dépasse le beau et bascule dans l\'effroi.', ["hyperbole","peur","beauté","fatale","effroi","passion"]),
      att('Registre pathétique', '« passion qu\'elle ne comprenait pas »', 'La passion incomprise structure la tragédie : pathos d\'une âme possédée par le désir.', ["pathétique","passion","incomprise","tragédie","désir","damnation"])
    ],
  },
  'GT-218': {
    texte: `Dans le désert de la Thébaïde, où le silence est si profond qu'on entend battre son cœur, Paphnuce marchait seul, le corps mortifié, l'âme en feu. Il avait quitté le monde pour fuir Thaïs, la comédienne d'Alexandrie, dont la beauté l'avait troublé. Mais plus il fuyait, plus elle le poursuivait dans ses rêves. Anatole France oppose ascétisme et désir avec une ironie douce : le moine croit dompter la chair, et la chair le dompte. Le registre pathétique se mêle à la satire philosophique du roman fin-de-siècle.`,
    contexte: "Roman philosophique — ascétisme et désir, registre ironique et pathétique.",
    attendus: [
      att('Antithèse', '« corps mortifié » / « âme en feu »', 'L\'antithèse du moine troublé dramatise le conflit ascétisme/désir — registre pathétique et ironique.', ["antithèse","mortifié","feu","ascétisme","désir","anatole france"]),
      att('Hyperbole', '« silence est si profond qu\'on entend battre son cœur »', 'L\'hyperbole du silence désertique souligne l\'intériorité du moine : le décor amplifie le drame intérieur.', ["hyperbole","silence","désert","intériorité","cœur","décor"]),
      att('Registre ironique', '« la chair le dompte »', 'L\'ironie d\'Anatole France dénonce l\'illusion ascétique : la chair triomphe du moine.', ["ironique","ascétisme","chair","illusion","satire","philosophie"]),
      att('Champ lexical', '« plus il fuyait, plus elle le poursuivait »', 'Le champ lexical de la fuite traduit l\'obsession : Thaïs hante le moine même dans le retrait.', ["champ lexical","fuite","poursuite","rêves","obsession","thaïs"])
    ],
  },
  'GT-219': {
    texte: `Mon père ne m'aimait pas. Il ne me battait pas souvent, mais il me regardait avec un mépris qui valait toutes les corrections. Quand je passais devant lui, il détournait les yeux ; quand je parlais, il ne répondait pas. Ma mère, douce et faible, tentait de m'intercéder, mais lui imposait silence. J'étais le fils indésirable, le rejeton roux qu'on tolerait parce qu'on ne pouvait pas le renier. Jules Renard transforme l'autobiographie en satire : le registre pathétique de l'enfant martyrisé se teinte d'une ironie amère qui dénonce la cruauté familiale bourgeoise.`,
    contexte: "Roman autobiographique — maltraitance familiale, registre pathétique et satirique.",
    attendus: [
      att('Registre pathétique', '« fils indésirable »', 'Le pathos de l\'enfant rejeté structure le roman : Renard expose la souffrance avec une sobriété déchirante.', ["pathétique","rejet","enfant","souffrance","famille","renard"]),
      att('Antiphrase', '« mépris qui valait toutes les corrections »', 'L\'antiphrase suggère une violence psychologique plus cruelle que la bastonnade : satire de la famille.', ["antiphrase","mépris","violence","psychologique","cruauté","satire"]),
      att('Registre satirique', '« rejeton roux qu\'on tolerait »', 'L\'ironie amère dénonce l\'hypocrisie bourgeoise : la famille masque sa cruauté derrière la bienséance.', ["satirique","ironie","bourgeoisie","hypocrisie","cruauté","famille"]),
      att('Focalisation interne', '« Mon père ne m\'aimait pas »', 'La focalisation interne du narrateur enfant ancre le récit dans une subjectivité blessée et lucide.', ["focalisation","interne","narrateur","enfant","subjectivité","autobiographie"])
    ],
  },
  'GT-220': {
    texte: `L'inquisiteur regardait le condamné avec un sourire affreux. — Tu espères échapper ? dit-il. — J'espère, murmura le prisonnier. — Alors je te laisse partir. Les portes s'ouvrirent. Le prisonnier hésita, puis recula. — Pourquoi ne pars-tu pas ? — Parce que... parce que tu veux que je parte. Villiers de l'Isle-Adam construit ici le paradoxe de la torture par l'espérance : la cruauté suprême consiste à offrir la liberté quand on sait qu'elle ne sera pas saisie. Le registre tragique se mêle à une réflexion philosophique sur la volonté et la peur.`,
    contexte: "Conte fantastique — cruauté, paradoxe, registre tragique et philosophique.",
    attendus: [
      att('Paradoxe', '« torture par l\'espérance »', 'Le paradoxe structure le conte : la liberté offerte devient supplice — cruauté philosophique villiérienne.', ["paradoxe","espérance","torture","liberté","cruauté","villiers"]),
      att('Dialogue', '« Pourquoi ne pars-tu pas ? »', 'Le dialogue minimal dramatise le piège mental : la parole de l\'inquisiteur est arme plus efficace que les fers.', ["dialogue","piège","inquisiteur","prisonnier","mental","tension"]),
      att('Registre tragique', '« sourire affreux »', 'Le tragique naît de la perversité calme : l\'inquisiteur incarne le mal rationalisé.', ["tragique","sourire","perversité","mal","inquisiteur","supplice"]),
      att('Registre philosophique', '« tu veux que je parte »', 'La réflexion sur la volonté libère une lecture philosophique : la peur du désir de l\'autre paralyse l\'action.', ["philosophique","volonté","peur","désir","liberté","paralysie"])
    ],
  },
  'GT-221': {
    texte: `Germinie Lacerteux avait quinze ans quand elle entra au service de Mlle de Varandeuil. C'était une fille de la campagne, forte, silencieuse, obéissante. Elle travaillait du matin au soir sans se plaindre, portant le linge, montant les escaliers, essuyant la poussière. Personne ne la regardait ; personne ne lui parlait. Elle mangeait dans la cuisine, seule, debout. Les Goncourt inventent le naturalisme du quotidien : la misère n'est pas spectaculaire, elle est faite de petites humiliations répétées. Germinie est la servante invisible dont la vie se consume dans l'ombre des antichambres parisiennes.`,
    contexte: "Roman naturaliste — misère féminine, registre pathétique et réaliste.",
    attendus: [
      att('Caractérisation', '« forte, silencieuse, obéissante »', 'La triade caractérise Germinie par le travail : le naturalisme réduit l\'être à sa fonction servile.', ["caractérisation","silencieuse","obéissante","servante","naturalisme","goncourt"]),
      att('Registre pathétique', '« Personne ne la regardait »', 'L\'invisibilité sociale suscite la compassion : le pathos naît de l\'indifférence bourgeoise.', ["pathétique","invisibilité","indifférence","misère","servante","compassion"]),
      att('Champ lexical', '« portant le linge »', 'Le champ lexical du travail domestique matérialise l\'exploitation : réalisme naturaliste du quotidien.', ["champ lexical","travail","linge","domestique","exploitation","réalisme"]),
      att('Registre réaliste', '« petites humiliations répétées »', 'Le réalisme goncourrien refuse le spectaculaire : la misère est banale et systémique.', ["réaliste","humiliations","misère","banal","systémique","naturalisme"])
    ],
  },
  'GT-222': {
    texte: `Je ne connais pas encore Nadja. Depuis plusieurs jours, je suis à Paris et je me promène seul dans les rues. L'homme, dit-on, ne se laisse guère conduire par des femmes qui ne cherchent pas à les conduire : cependant il faut que Nadja m'ait conduit, puisque c'est elle qui m'a conduit jusqu'à elle. Qui est-elle ? Une jeune femme, dit-on, qui a toujours vécu dans les hôtels, qui ne possède rien, qui ne travaille pas. Elle est toujours près de la Porte Saint-Denis, ou dans les environs. Breton invente le roman surréaliste : hasard, rencontre, amour comme révélation du merveilleux quotidien.`,
    contexte: "Roman surréaliste — hasard, amour, registre lyrique et onirique.",
    attendus: [
      att('Registre lyrique', '« me promène seul dans les rues »', 'La flânerie parisienne installe une écriture lyrique du hasard : le surréalisme naît de la rencontre.', ["lyrique","flânerie","paris","hasard","surréalisme","breton"]),
      att('Paradoxe', '« Nadja m\'ait conduit ... c\'est elle qui m\'a conduit »', 'Le paradoxe du hasard objectif fonde la poétique surréaliste : la rencontre précède la volonté.', ["paradoxe","hasard","conduire","rencontre","surréalisme","nadja"]),
      att('Focalisation interne', '« Je ne connais pas encore Nadja »', 'Le narrateur en quête structure le récit : focalisation interne et suspense onirique.', ["focalisation","interne","quête","suspense","onirique","narrateur"]),
      att('Registre onirique', '« révélation du merveilleux quotidien »', 'Breton transforme Paris en pays onirique : le merveilleux surgit de la vie ordinaire.', ["onirique","merveilleux","quotidien","paris","révélation","surréalisme"])
    ],
  },
  'GT-223': {
    texte: `Dans mon village, quand sonne l'Angélus du soir, les hommes s'arrêtent aux champs et se découvrent. Les cloches parlent doucement aux collines ; les ombres s'allongent sur les prairies. Je marche alors le long du chemin creux, entre les haies de châtaigniers, et je pense à Dieu avec simplicité. Jammes célèbre ici la piété béarnaise : poésie catholique, registre lyrique et méditatif. La nature et la prière se confondent dans une harmonie champêtre qui refuse l'artifice parisien.`,
    contexte: "Poésie catholique — simplicité, Béarn, registre lyrique et méditatif.",
    attendus: [
      att('Registre lyrique', '« cloches parlent doucement »', 'La personnification des cloches installe un lyrisme religieux : la nature participe à la prière.', ["lyrique","cloches","prière","nature","religieux","jammes"]),
      att('Champ lexical', '« haies de châtaigniers »', 'Le champ lexical rural ancre la poésie dans le Béarn : simplicité et enracinement.', ["champ lexical","rural","béarn","campagne","enracinement","simplicité"]),
      att('Registre méditatif', '« je pense à Dieu avec simplicité »', 'La méditation simple oppose la piété campagnarde à la complexité urbaine : registre contemplatif.', ["méditatif","dieu","simplicité","contemplation","piété","catholique"]),
      att('Antithèse', '« simplicité » / « artifice parisien »', 'L\'antithèse structure la poésie jammiste : le village authentique contre la modernité.', ["antithèse","simplicité","artifice","village","paris","authenticité"])
    ],
  },
  'GT-224': {
    texte: `ÉLECTRE. — Je suis de ceux qui ne peuvent pas oublier. Ma mère a tué mon père ; mon frère est mort ; moi, je vis pour la vengeance. On me dit que la haine corrompt, que le pardon libère. Mais comment pardonner quand le crime crie encore ? Giraudoux modernise la tragédie antique : Électre devient figure psychologique, tiraillée entre devoir héroïque et humanité. Le registre tragique se nuance d'une réflexion sur la mémoire et la justice.`,
    contexte: "Tragédie modernisée — vengeance, registre tragique et psychologique.",
    attendus: [
      att('Anaphore', '« Je suis de ceux »', 'L\'anaphore héroïque affirme l\'identité d\'Électre : modernisation psychologique du mythe antique.', ["anaphore","identité","électre","mythe","héroïque","giraudoux"]),
      att('Antithèse', '« haine corrompt » / « pardon libère »', 'L\'antithèse dramatise le dilemme moral : vengeance ou réconciliation dans une tragédie modernisée.', ["antithèse","haine","pardon","vengeance","moral","dilemme"]),
      att('Registre tragique', '« le crime crie encore »', 'La personnification du crime maintient le registre tragique : la mort du père hante la fille.', ["tragique","crime","vengeance","père","mémoire","hantise"]),
      att('Registre psychologique', '« tiraillée entre devoir héroïque et humanité »', 'Giraudoux psychologise le mythe : Électre n\'est plus seulement héroïne, elle est conscience divisée.', ["psychologique","devoir","humanité","conscience","mythe","modernisation"])
    ],
  },
  'GT-225': {
    texte: `François avait seize ans lorsqu'il connut Marthe. Elle était la femme d'un soldat partis pour la guerre ; lui, l'adolescent timide, tombait amoureux avec une gravité qui dépassait son âge. Leur passion fut brève et intense, scandaleuse pour le village, tragique pour Marthe qui mourut en couches. Radiguet écrit le roman de l'apprentissage amoureuse avec une sécheresse lyrique : le registre tragique se teinte d'une cruauté adolescente qui préfigure la modernité.`,
    contexte: "Roman d\'apprentissage — passion adolescente, registre lyrique et tragique.",
    attendus: [
      att('Registre lyrique', '« tombait amoureux avec une gravité »', 'Le lyrisme adolescent dépasse l\'âge du héros : Radiguet traite la passion avec une gravité tragique.', ["lyrique","passion","adolescent","gravité","amour","radiguet"]),
      att('Registre tragique', '« Marthe qui mourut en couches »', 'La mort de Marthe scelle la tragédie : l\'apprentissage amoureux se conclut par la perte.', ["tragique","mort","marthe","perte","passion","drame"]),
      att('Antithèse', '« brève et intense »', 'L\'antithèse temporelle condense l\'intensité de la passion : l\'éclat bref annonce la chute.', ["antithèse","brève","intense","passion","temps","éclat"]),
      att('Style', '« sécheresse lyrique »', 'Radiguet allie concision et émotion : style moderne qui refuse le pathos romanesque.', ["style","sécheresse","lyrique","modernité","concision","émotion"])
    ],
  },
  'GT-226': {
    texte: `Alors commença, pour Chloé, la grande agonie. D'abord elle fut fiévreuse, puis le piano-mangeuseurs commença à la manger. Les médecins n'y comprirent rien. Colin dépensa toute sa fortune pour acheter des fleurs, des parfums, des objets rares, espérant arrêter la maladie. Mais la tache sur la joue de Chloé s'élargissait, et l'amour ne suffisait pas. Vian mêle poésie et fantastique : la maladie devient métaphore de l'impossibilité de sauver l'être aimé. Le registre tragique se teinte d'un humour noir propre à l'écriture vianesque.`,
    contexte: "Roman fantastique — amour et mort, registre poétique et tragique.",
    attendus: [
      att('Néologisme', '« piano-mangeuseurs »', 'Le néologisme fantastique typique de Vian : l\'objet poétique devient agent de destruction.', ["néologisme","piano","fantastique","destruction","vian","poétique"]),
      att('Registre tragique', '« grande agonie »', 'L\'agonie de Chloé structure le registre tragique : l\'amour ne triomphe pas de la mort.', ["tragique","agonie","chloé","mort","amour","impossibilité"]),
      att('Métaphore', '« tache sur la joue »', 'La tache matérialise la maladie : métaphore visuelle de la dégradation progressive.', ["métaphore","tache","maladie","dégradation","joue","corps"]),
      att('Registre poétique', '« fleurs, des parfums, des objets rares »', 'L\'énumération poétique traduit la désespération de Colin : la beauté achetée ne guérit pas.', ["poétique","fleurs","parfums","désespération","colin","beauté"])
    ],
  },
  'GT-227': {
    texte: `Lulu marchait dans le grand théâtre du marché, les yeux fixés sur les hommes qui l'entouraient. Elle avait quinze ans, elle venait du désert, elle ne comprenait pas la ville. Les couleurs, les bruits, les visages la fascinaient et l'effrayaient. Le Clézio filme ici l'errance postcoloniale : l'enfant nomade confrontée à la modernité occidentale. Le registre lyrique et épique transforme la marche en quête existentielle, où le désert intérieur affronte le chaos urbain.`,
    contexte: "Roman postcolonial — errance, nomadisme, registre lyrique et épique.",
    attendus: [
      att('Registre lyrique', '« yeux fixés sur les hommes »', 'Le regard de Lulu installe une focalisation lyrique : découverte sensorielle du monde occidental.', ["lyrique","regard","lulu","découverte","sensoriel","clézio"]),
      att('Antithèse', '« fascinaient et l\'effrayaient »', 'L\'antithèse traduit le choc culturel : fascination et peur structurent l\'errance postcoloniale.', ["antithèse","fascination","peur","choc","culturel","errance"]),
      att('Registre épique', '« elle venait du désert »', 'La marche de Lulu depuis le désert devient épopée moderne : le nomadisme affronte la civilisation urbaine.', ["épique","désert","nomadisme","errance","moderne","confrontation"]),
      att('Champ lexical', '« Les couleurs, les bruits, les visages »', 'Le champ lexical sensoriel traduit la découverte : le désert rencontre la ville.', ["champ lexical","couleurs","bruits","visages","désert","sens"])
    ],
  },
  'GT-228': {
    texte: `Mon père est mort il y a deux mois. Il était né à Normandie, dans une famille de paysans, et il avait fini cafetier au marché de Yvetot. Toute sa vie, il avait travaillé pour que je fasse des études, pour que je devienne institutrice, pour que je m'en sorte. Il ne parlait presque jamais ; quand il parlait, c'était pour dire quelque chose de concret, de précis. Ernaux écrit l'autobiographie de la honte de classe : le registre sobre et pathétique d'une fille qui regarde son père avec amour et embarras.`,
    contexte: "Autobiographie — classe sociale, mémoire familiale, registre sobre et pathétique.",
    attendus: [
      att('Registre pathétique', '« Mon père est mort »', 'L\'incipit funèbre installe le deuil : le pathos naît de la perte et du regard rétrospectif.', ["pathétique","mort","père","deuil","perte","ernaux"]),
      att('Style sobre', '« concret, de précis »', 'La sobriété stylistique traduit la classe ouvrière : l\'écriture refuse l\'emphase romanesque.', ["sobre","concret","précis","style","classe","écriture"]),
      att('Thème social', '« travaillé pour que je fasse des études »', 'L\'ascension sociale par l\'éducation structure le récit : mémoire de la transmission familiale.', ["social","études","ascension","transmission","famille","cafetier"]),
      att('Antithèse', '« amour et embarras »', 'L\'antithèse affective définit le regard d\'Ernaux : honte de classe mêlée à l\'affection filiale.', ["antithèse","amour","embarras","honte","classe","regard"])
    ],
  },
  'GT-229': {
    texte: `Nous étions en Corse, dans le district de Porto-Vecchio, à une demi-lieue de la ville, dans un lieu sauvage qu'on appelle la maison de Mateo Falcone. C'était une maison isolée, bâtie au sommet d'une petite colline, au milieu d'un taillis de chênes verts. Si l'on eût observé la maison de loin, on eût pu la prendre pour un monceau de pierres, tant elle se confondait avec le roc. Mateo Falcone était connu dans toute la contrée pour sa force, sa bravoure et surtout pour sa probité. Mérimée ouvre la nouvelle réaliste : le cadre corse et le code d'honneur préparent la tragédie.`,
    contexte: "Nouvelle réaliste — code d\'honneur corse, registre tragique et pathétique.",
    attendus: [
      att('Description', '« se confondait avec le roc »', 'La description fusionne maison et rocher : le décor corse incarne la dureté du code d\'honneur.', ["description","maison","roc","corse","décor","merimée"]),
      att('Caractérisation', '« force, sa bravoure et surtout pour sa probité »', 'La triade caractérise Mateo : la probité annonce la tragédie du devoir supérieur au sang.', ["caractérisation","probité","bravoure","mateo","honneur","code"]),
      att('Registre tragique', '« code d\'honneur »', 'Le code d\'honneur structure la nouvelle : la probité mènera Mateo au sacrifice de son fils.', ["tragique","honneur","sacrifice","devoir","fils","corse"]),
      att('Incipit', '« Nous étions en Corse »', 'L\'incipit géographique installe le réalisme exotique mériméen : le narrateur ethnologue observe.', ["incipit","corse","réalisme","exotique","cadre","narrateur"])
    ],
  },
  'GT-230': {
    texte: `Landry et Sylvinet étaient jumeaux, si pareils qu'on ne les distinguait qu'à peine. Landry, le plus fort, protégeait Sylvinet, le plus fragile, avec une tendresse de frère qui touchait tout le village. Mais quand Fadette arriva, tout changea. Landry l'aima ; Sylvinet souffrit. George Sand peint ici la fraternité champêtre : le registre bucolique se teinte de pathos quand l'amour divise les jumeaux. La nature berrienne enveloppe une tragédie intime de jalousie et de loyauté.`,
    contexte: "Roman champêtre — fraternité, registre pathétique et bucolique.",
    attendus: [
      att('Antithèse', '« le plus fort » / « le plus fragile »', 'L\'antithèse des jumeaux structure la fraternité : complémentarité avant la crise amoureuse.', ["antithèse","fort","fragile","jumeaux","fraternité","sand"]),
      att('Registre bucolique', '« nature berrienne »', 'Le cadre champêtre installe un registre bucolique : la campagne berrienne enveloppe le drame intime.', ["bucolique","campagne","berri","nature","champêtre","décor"]),
      att('Registre pathétique', '« Sylvinet souffrit »', 'La jalousie fraternelle introduit le pathos : l\'amour divise ce que la naissance unissait.', ["pathétique","jalousie","souffrance","frère","amour","division"]),
      att('Caractérisation', '« tendresse de frère »', 'La tendresse initiale amplifie la chute : Sand dramatise la trahison involontaire de Landry.', ["caractérisation","tendresse","frère","protection","loyauté","drame"])
    ],
  },
  'GT-231': {
    texte: `Bouvard et Pécuchet résolurent de se mettre à l'étude. Ils commencèrent par l'anatomie, puis passèrent à la chimie, à l'astronomie, à l'histoire, à la philosophie. Chaque science les enthousiasma, puis les déçut ; chaque livre promettait la vérité, chaque expérience échouait. Flaubert satirise la quête du savoir : ses héros copistes incarnent la bêtise humaine face à l'infini des connaissances. Le registre comique et ironique dénonce l'illusion encyclopédique du XIXe siècle.`,
    contexte: "Roman satirique — quête du savoir, registre comique et ironique.",
    attendus: [
      att('Énumération', '« anatomie ... chimie ... astronomie »', 'L\'énumération des sciences parcourues structure la satire : accumulation comique des échecs.', ["énumération","sciences","savoir","accumulation","satire","flaubert"]),
      att('Registre comique', '« Chaque science les enthousiasma, puis les déçut »', 'Le rythme enthousiasme/déception produit le comique : Flaubert ridiculise la curiosité sans méthode.', ["comique","enthousiasme","déception","curiosité","bêtise","ironie"]),
      att('Registre satirique', '« bêtise humaine face à l\'infini »', 'La satire vise l\'ambition encyclopédique : Bouvard et Pécuchet incarnent l\'homme moyen face au savoir.', ["satirique","bêtise","savoir","encyclopédie","XIXe","dénonciation"]),
      att('Antithèse', '« promettait la vérité » / « expérience échouait »', 'L\'antithèse promesse/échec structure le roman : quête du savoir vouée à l\'absurde.', ["antithèse","vérité","échec","promesse","absurde","quête"])
    ],
  },
  'GT-232': {
    texte: `Octave de Malivert aimait Armance d'un amour secret qu'il n'osait avouer. Il la voyait chez sa tante, dans le salon parisien, et chaque mot qu'elle prononçait le troublait. Mais Octave portait en lui un secret plus terrible : une impuissance qu'il cachait à tous, même à lui-même. Stendhal explore la passion inhibée : le registre lyrique et tragique d'un héros stendhalien déchiré entre orgueil, désir et honte. Armance reste le roman de l'amour impossible par excellence.`,
    contexte: "Roman psychologique — passion inhibée, registre lyrique et tragique.",
    attendus: [
      att('Registre lyrique', '« amour secret qu\'il n\'osait avouer »', 'Le secret amoureux installe un lyrisme contenu : Stendhal analyse la passion refoulée.', ["lyrique","secret","passion","refoulement","amour","stendhal"]),
      att('Registre tragique', '« impuissance qu\'il cachait »', 'L\'impuissance secrète dramatise la tragédie : le héros est voué à l\'échec amoureux.', ["tragique","impuissance","honte","échec","secret","héros"]),
      att('Antithèse', '« désir » / « honte »', 'L\'antithèse désir/honte structure la psychologie stendhalienne : orgueil et passion s\'affrontent.', ["antithèse","désir","honte","orgueil","psychologie","passion"]),
      att('Focalisation interne', '« chaque mot qu\'elle prononçait le troublait »', 'La focalisation interne révèle la sensibilité du héros : analyse fine des mouvements de l\'âme.', ["focalisation","interne","trouble","sensibilité","âme","analyse"])
    ],
  },
  'GT-233': {
    texte: `Rennes, vieille cité, vieux jaunes de gare,
Où l'on voit, le soir, dans l'air morne et béant,
Surgir, triste, et traînant sa robe de bure,
L'antique Hôtel-Dieu, l'œil crevé, des murs.
Corbière moque Rennes et lui-même : poésie ironique où la laideur urbaine devient matière lyrique. Le registre satirique et mélancolique mêle autodérision et misanthropie. Le poète borgne regarde la ville avec un œil cratère, transformant la banalité en poésie corrosive.`,
    contexte: "Poésie ironique — mélancolie, registre satirique et lyrique.",
    attendus: [
      att('Apostrophe', '« Rennes, vieille cité »', 'L\'apostrophe à la ville ouvre un registre satirique : Corbière personnifie la cité bretonne.', ["apostrophe","rennes","ville","satirique","breton","corbière"]),
      att('Personnification', '« traînant sa robe de bure »', 'L\'Hôtel-Dieu personnifié devient figure fantomatique : la laideur urbaine se poétise.', ["personnification","hôtel-dieu","fantôme","laideur","urbain","poésie"]),
      att('Registre satirique', '« Corbière moque Rennes et lui-même »', 'L\'autodérision structure la poésie corbièrienne : ironie contre la ville et le poète.', ["satirique","moquerie","autodérision","ironie","misanthropie","corbière"]),
      att('Registre lyrique', '« air morne et béant »', 'Le lyrisme mélancolique transforme la banalité en émotion : spleen corrosif du poète.', ["lyrique","morne","mélancolie","spleen","émotion","banalité"])
    ],
  },
  'GT-234': {
    texte: `Hamlet, prince de Denmarke, était un jeune homme mélancolique qui ne savait pas ce qu'il voulait. Il aimait Ophélie, mais il la repoussait ; il voulait venger son père, mais il hésitait. Laforgue parodie Shakespeare avec une ironie moderniste : son Hamlet est anti-héros, indécis, presque comique. Le registre satirique démonte le mythe romantique du héros tragique et annonce la poésie du XXe siècle.`,
    contexte: "Poésie moderniste — parodie, registre comique et ironique.",
    attendus: [
      att('Parodie', '« Hamlet ... ne savait pas ce qu\'il voulait »', 'La parodie laforguienne démonte le héros shakespearien : indécision devient comique.', ["parodie","hamlet","indécision","shakespeare","démystification","laforgue"]),
      att('Antithèse', '« aimait Ophélie » / « la repoussait »', 'L\'antithèse traduit l\'anti-héros : contradiction permanente du personnage parodié.', ["antithèse","ophélie","repoussait","contradiction","anti-héros","comique"]),
      att('Registre ironique', '« presque comique »', 'L\'ironie moderniste refuse le pathos romantique : le tragique devient grotesque.', ["ironique","comique","pathos","grotesque","moderniste","refus"]),
      att('Registre satirique', '« démonte le mythe romantique »', 'La satire vise l\'idéalisation du héros : Laforgue anticipe la poésie du XXe siècle.', ["satirique","mythe","héros","romantisme","démystification","modernité"])
    ],
  },
  'GT-235': {
    texte: `La nature est impassible et belle. Les montagnes se dressent, les fleuves coulent, les forêts frémissent, indifférentes aux hommes qui naissent et meurent à leurs pieds. Leconte de Lisle, poète parnassien, contemple la nature avec une impassibilité stoïque. Le registre épique et pessimiste refuse le lyrisme romantique : pas de communion avec la nature, seulement une beauté froide et éternelle qui écrase l'homme.`,
    contexte: "Poésie parnassienne — impassibilité, registre épique et pessimiste.",
    attendus: [
      att('Personnification', '« indifférentes aux hommes »', 'La nature personnifiée reste impassible : le parnasse refuse l\'anthropomorphisme romantique.', ["personnification","nature","impassible","indifférence","parnasse","leconte de lisle"]),
      att('Registre épique', '« montagnes se dressent, les fleuves coulent »', 'L\'énumération épique magnifie la nature : vers parnassien et impersonnalité.', ["épique","montagnes","fleuves","énumération","magnification","vers"]),
      att('Registre pessimiste', '« naissent et meurent à leurs pieds »', 'Le pessimisme parnassien rappelle la petitesse humaine face à l\'éternité naturelle.', ["pessimiste","mort","éternité","homme","petitesse","stoïcisme"]),
      att('Antithèse', '« belle » / « impassible »', 'L\'antithèse beauté/indifférence définit l\'esthétique parnassienne : art impersonnel.', ["antithèse","belle","impassible","esthétique","impersonnel","parnasse"])
    ],
  },
  'GT-236': {
    texte: `Sur l'arc tendu, Œdipus debout, les yeux levés,
Regarde, immobile, au loin l'ennemi supposé.
De l'arc, de la lyre et du vol de l'aigle ailé,
Toute une harmonie héroïque a retenti ;
Et l'on eût dit qu'en ce corps de bronze, empanaché,
Vibrant encor du choc de la victoire immortelle,
L'âme du grand archer, fils de Jupiter, était
Restée, vivante et fière, à jamais emprisonnée.
Heredia condense toute une tragédie antique en un sonnet : le héros devient statue, l'action se fige en image. Le registre épique et tragique du parnasse transforme la mythologie en tableau sculpté où chaque vers est un trophée de perfection formelle.`,
    contexte: "Poésie parnassienne — sonnet, Antiquité, registre épique et tragique.",
    attendus: [
      att('Métaphore', '« le héros devient statue »', 'La métaphore sculpturale fige le mythe : le parnasse privilégie l\'image à l\'action.', ["métaphore","statue","mythe","figé","image","heredia"]),
      att('Registre épique', '« Œdipus debout, les yeux levés »', 'Le vers épique magnifie le héros antique : sonnet comme tableau héroïque.', ["épique","œdipe","héros","antiquité","magnification","sonnet"]),
      att('Registre tragique', '« ennemi supposé »', 'Le tragique est suggéré, non raconté : l\'ellipse parnassienne concentre la tension.', ["tragique","ennemi","tension","ellipse","suggestion","parnasse"]),
      att('Art pour l\'art', '« trophée de perfection formelle »', 'Heredia incarne l\'art pour l\'art : la forme parfaite prime sur l\'expression personnelle.', ["art pour l'art","perfection","forme","sonnet","parnasse","heredia"])
    ],
  },
  'GT-237': {
    texte: `Bruges-la-Morte, Bruges morte, Bruges où ma femme est morte. La ville aux canaux sombres, aux clochers gris, aux ponts de pierre, reflète ma douleur comme un miroir. Les clochettes des tramways tintent dans le brouillard ; les cygnes glissent sur l'eau noire ; les maisons gothiques se mirent dans les canaux immobiles. Rodenbach invente le roman symboliste : la ville devient paysage de l'âme, le deuil se spatialise. Le registre mélancolique et onirique transforme Bruges en tombeau vivant où le narrateur erre, poursuivant le fantôme de sa femme dans chaque ruelle, chaque reflet, chaque silence.`,
    contexte: "Roman symboliste — deuil, ville-miroir, registre mélancolique et onirique.",
    attendus: [
      att('Anaphore', '« Bruges-la-Morte, Bruges morte, Bruges »', 'L\'anaphore incantatoire fusionne ville et deuil : Bruges devient symbole de la perte.', ["anaphore","bruges","mort","deuil","incantation","rodenbach"]),
      att('Métaphore', '« ville ... reflète ma douleur comme un miroir »', 'La métaphore du miroir fait de la ville un paysage intérieur : symbolisme spatial du deuil.', ["métaphore","miroir","douleur","ville","symbolisme","deuil"]),
      att('Registre mélancolique', '« canaux sombres, aux clochers gris »', 'Le lexique sombre installe la mélancolie : décor urbanisé de la tristesse.', ["mélancolique","canaux","sombres","gris","tristesse","décor"]),
      att('Registre onirique', '« poursuivant le fantôme de sa femme »', 'L\'onirisme transforme le deuil en quête fantomatique : le symbolisme du XIXe siècle.', ["onirique","fantôme","femme","quête","symbolisme","deuil"])
    ],
  },
  'GT-238': {
    texte: `Pétrone, le courtisan de Néron, écrivait des satires si mordantes que l'empereur le fit mourir. Il choisit de se faire ouvrir les veines dans un bain, lentement, en disant des plaisanteries. Il eut le temps de lire ses vers, de boire du vin, de rire encore une fois avant que le sang ne l'emporte. Schwob ressuscite les morts de l'histoire en miniatures ironiques : le registre tragique se teinte de distance sarcastique. Pétrone meurt en artiste, transformant sa mort en dernière satire contre le pouvoir absolu de Néron, dans une prose précieuse et lapidaire.`,
    contexte: "Nouvelle historique — artifice, registre ironique et tragique.",
    attendus: [
      att('Registre ironique', '« disant des plaisanteries »', 'L\'ironie schwobienne transforme la mort en performance : distance sarcastique du narrateur.', ["ironique","plaisanteries","mort","performance","distance","schwob"]),
      att('Registre tragique', '« se faire ouvrir les veines »', 'La mort volontaire conserve un registre tragique : Pétrone choisit sa fin.', ["tragique","mort","veines","choix","suicide","héroïsme"]),
      att('Caractérisation', '« satires si mordantes »', 'La caractérisation condense Pétrone en satiriste : l\'artiste défie le pouvoir absolu.', ["caractérisation","satires","satiriste","artiste","pouvoir","néron"]),
      att('Artifice narratif', '« miniatures ironiques »', 'Schwob pratique l\'artifice historique : récit bref et lapidaire, style précieux.', ["artifice","miniature","historique","lapidaire","précieux","schwob"])
    ],
  },
  'GT-239': {
    texte: `Jadis, si je me souviens bien, ma vie était un festin où s'ouvraient tous les cœurs, où tous les vins coulaient à flots. Un soir, j'ai pris Beauté dans mes bras — et j'ai cru la sentir pâlir. Elle glissa de mes bras comme un oiseau. Et je me suis réveillé seul, dans la nuit froide. Rimbaud ouvre Une Saison en Enfer : prose poétique autobiographique où révolte, autodérision et lyrisme se mêlent. Le registre satirique se retourne contre le poète lui-même.`,
    contexte: "Prose poétique — révolte, autodérision, registre satirique et lyrique.",
    attendus: [
      att('Métaphore', '« ma vie était un festin »', 'La métaphore du festin évoque l\'ivresse poétique passée : nostalgie du temps perdu.', ["métaphore","festin","ivresse","nostalgie","passé","rimbaud"]),
      att('Comparaison', '« glissa de mes bras comme un oiseau »', 'La comparaison de Beauté à l\'oiseau traduit la fugacité : l\'idéal s\'échappe.', ["comparaison","oiseau","beauté","fugacité","idéal","échappe"]),
      att('Registre lyrique', '« nuit froide »', 'Le lyrisme de la désolation clôt le passage : réveil solitaire après l\'ivresse.', ["lyrique","nuit","froid","solitude","désolation","réveil"]),
      att('Registre satirique', '« se retourne contre le poète »', 'L\'autodérision rimbaudienne satirise le moi poétique : révolte contre soi-même.', ["satirique","autodérision","poète","révolte","moi","rimbaud"])
    ],
  },
  'GT-240': {
    texte: `Un soir, dans les rues de Paris, une jeune fille vendait des violettes. Un masque passa, s'arrêta, lui parla. C'était un duc déguisé qui, touché par sa voix, voulut la revoir. Mais le masque tombe, le secret éclate, et l'amour impossible se brise. Coppée, dans Le Passant, mêle comédie en vers et mélodrame : le déguisement romantique prépare la chute pathétique. Le registre lyrique du masque cache une tragédie sociale.`,
    contexte: "Comédie en vers — déguisement, registre pathétique et lyrique.",
    attendus: [
      att('Symbolisme', '« le masque tombe »', 'La chute du masque symbolise la révélation : l\'identité sociale détruit l\'amour.', ["symbolisme","masque","révélation","identité","secret","coppée"]),
      att('Registre pathétique', '« amour impossible se brise »', 'Le pathos naît de l\'impossibilité sociale : tragédie du déguisement romantique.', ["pathétique","impossible","amour","tragédie","social","chute"]),
      att('Registre lyrique', '« jeune fille vendait des violettes »', 'Le lyrisme parisien du passant installe une atmosphère mélancolique et romantique.', ["lyrique","violettes","paris","romantisme","atmosphère","mélancolie"]),
      att('Registre comique', '« duc déguisé »', 'Le déguisement introduit le comique de situation avant la bascule pathétique.', ["comique","duc","déguisement","situation","vers","théâtre"])
    ],
  },
  'GT-241': {
    texte: `Delphine aimait Léonce avec une passion que la société condamnait. Elle était veuve, libre, mais les mœurs du Directoire réprouvaient l'amour sans mariage. Elle lutta contre sa passion, tenta de fuir, s'accusa elle-même devant ses amis. Madame de Staël fait de Delphine la figure de la femme intellectuelle transgressive : le registre lyrique et pathétique d'un amour que la société ne peut accepter. Le roman sentimental devient pamphlet féministe avant l'heure.`,
    contexte: "Roman sentimental — passion transgressive, registre lyrique et pathétique.",
    attendus: [
      att('Registre pathétique', '« passion que la société condamnait »', 'Le pathos naît du conflit entre désir et norme : Delphine souffre d\'aimer interdit.', ["pathétique","passion","société","interdit","souffrance","staël"]),
      att('Registre lyrique', '« aimait Léonce avec une passion »', 'Le lyrisme amoureux structure le roman sentimental : subjectivité féminine affranchie.', ["lyrique","passion","amour","subjectivité","féminin","sentimental"]),
      att('Thème social', '« mœurs du Directoire réprouvaient »', 'La critique sociale traverse le roman : Staël dénonce l\'hypocrisie des conventions.', ["social","mœurs","directoire","hypocrisie","conventions","critique"]),
      att('Caractérisation', '« femme intellectuelle transgressive »', 'Delphine incarne la modernité féminine : passion et intelligence contre l\'ordre patriarcal.', ["caractérisation","intellectuelle","transgressive","féminisme","modernité","delphine"])
    ],
  },
  'GT-242': {
    texte: `LE POÈTE. — Il faut souffrir pour créer. La muse ne visite que les âmes tourmentées.
LA MUSE. — Tu te fais du mal pour rien. La poésie naît de la joie autant que de la douleur.
LE POÈTE. — Alors pourquoi suis-je si malheureux ?
LA MUSE. — Parce que tu confonds l'art et la vie. Musset dialogue le poète et la muse dans La Nuit de mai : registre lyrique et philosophique sur la vocation artistique. Le poète romantique interroge sa mission, oscillant entre désespoir et espérance.`,
    contexte: "Poème dialogué — quête artistique, registre lyrique et philosophique.",
    attendus: [
      att('Dialogue', '« LE POÈTE. — Il faut souffrir »', 'Le dialogue philosophique structure le poème : Musset dramatise la réflexion sur l\'art.', ["dialogue","poète","muse","philosophique","art","musset"]),
      att('Antithèse', '« joie autant que de la douleur »', 'L\'antithèse joie/douleur nuance le romantisme : la muse corrige le masochisme poétique.', ["antithèse","joie","douleur","romantisme","muse","création"]),
      att('Registre lyrique', '« muse ne visite que les âmes tourmentées »', 'Le lyrisme romantique affirme le lien souffrance/création : vocation poétique.', ["lyrique","muse","âmes","souffrance","création","vocation"]),
      att('Registre philosophique', '« confonds l\'art et la vie »', 'La réflexion philosophique distingue art et existence : modernité du poème dialogué.', ["philosophique","art","vie","distinction","existence","modernité"])
    ],
  },
  'GT-243': {
    texte: `La troupe de comédiens ambulants arrivait dans chaque ville au son du tambour. Le capitaine Fracasse, jeune noble ruiné, les avait rejoints par amour de l'aventure. Il jouait les héros sur les tréteaux, épée au poing, devant la foule ébahie, tandis que les valets préparaient les costumes et que les comédiennes chantaient sur la place du marché. Gautier célèbre le théâtre populaire du XVIIe siècle avec un registre comique et épique : le roman picaresque mêle bravoure, fantaisie et nostalgie du passé, dans une reconstitution historique pleine de verve et de panache.`,
    contexte: "Roman picaresque — théâtre ambulant, registre comique et épique.",
    attendus: [
      att('Registre épique', '« épée au poing, devant la foule ébahie »', 'L\'épique du héros de tréteau magnifie l\'aventure théâtrale : Gautier romantise le passé.', ["épique","épée","héros","aventure","théâtre","gautier"]),
      att('Registre comique', '« troupe de comédiens ambulants »', 'Le comique populaire structure le roman picaresque : fantaisie et bravoure mêlées.', ["comique","comédiens","ambulants","picaresque","fantaisie","populaire"]),
      att('Caractérisation', '« jeune noble ruiné »', 'Fracasse incarne le renversement social : le noble devient aventurier par goût du risque.', ["caractérisation","noble","ruiné","aventurier","renversement","fracasse"]),
      att('Nostalgie', '« nostalgie du passé »', 'Gautier idéalise le XVIIe siècle : registre romantique de la reconstitution historique.', ["nostalgie","passé","XVIIe","reconstitution","historique","romantisme"])
    ],
  },
  'GT-244': {
    texte: `La Vénus d'Ille, statue de bronze antique, fut déterrée dans le jardin du château. On la dressa sur un piédestal ; les paysans la vénérèrent, les jeunes filles lui offrirent des fleurs. Lors des noces du fils du châtelain, la statue tomba sur l'époux et l'écrasa. Mérimée construit une nouvelle fantastique où l'Antiquité revient se venger : le registre tragique et onirique mêle archéologie et superstition.`,
    contexte: "Nouvelle fantastique — statue meurtrière, registre tragique et onirique.",
    attendus: [
      att('Registre fantastique', '« statue tomba sur l\'époux »', 'Le fantastique surgit du réel archéologique : la statue devient agent de vengeance.', ["fantastique","statue","vengeance","archéologie","surnaturel","merimée"]),
      att('Registre tragique', '« l\'écrasa »', 'La mort de l\'époux scelle la tragédie : le merveilleux se retourne en catastrophe.', ["tragique","mort","époux","catastrophe","noces","chute"]),
      att('Symbolisme', '« Vénus d\'Ille »', 'La Vénus symbolise la passion antique qui détruit le présent : mythe et modernité.', ["symbolisme","vénus","passion","antique","destruction","mythe"]),
      att('Registre onirique', '« Antiquité revient se venger »', 'L\'onirisme mériméen fait resurgir le passé : le fantastique comme retour du refoulé.', ["onirique","antiquité","passé","refoulé","fantastique","superstition"])
    ],
  },
  'GT-245': {
    texte: `Lisbeth Fischer, la Cousine Bette, haïssait sa parente Adeline depuis l'enfance. Pauvre, laide, vivant dans l'ombre de la beauté d'Adeline, elle nourrissait une jalousie qui grandit avec les années. Quand Baron Hulot trahit Adeline, Bette vit sa chance : elle manipula, intrigua, détruisit la famille Hulot de l'intérieur. Balzac peint la jalousie comme force destructrice : registre tragique et satirique d'une vengeance de classé.`,
    contexte: "Roman réaliste — jalousie, vengeance, registre tragique et satirique.",
    attendus: [
      att('Registre tragique', '« jalousie qui grandit avec les années »', 'La jalousie devient moteur tragique : Bette incarne la vengeance du méprisé.', ["tragique","jalousie","vengeance","bette","destruction","balzac"]),
      att('Antithèse', '« Pauvre, laide » / « beauté d\'Adeline »', 'L\'antithèse sociale et physique structure la haine : jalousie de classe et de beauté.', ["antithèse","laide","beauté","pauvre","classe","haine"]),
      att('Registre satirique', '« détruisit la famille Hulot »', 'La satire balzacienne dénonce la corruption bourgeoise : Bette est agent de la chute.', ["satirique","corruption","bourgeoisie","chute","hulot","intrigue"]),
      att('Caractérisation', '« vivant dans l\'ombre »', 'Bette, créature de l\'ombre, représente le réalisme balzacien du personnage-type.', ["caractérisation","ombre","méprisé","réalisme","personnage-type","balzac"])
    ],
  },
  'GT-246': {
    texte: `ANTOINE. — Qui es-tu ?
LA VOICE. — Je suis la Tentation. Je viens de loin, de l'infini des temps.
ANTOINE. — Éloigne-toi de moi !
LA VOICE. — Tu ne peux pas m'éloigner. Je suis en toi.
Flaubert visionne la tentation de saint Antoine : visions fantastiques, défilé de monstres et de dieux, registre fantastique et tragique. Le saint du désert affronte les démons de la chair et de l'esprit dans un roman poétique sans équivalent.`,
    contexte: "Roman visionnaire — tentation, registre fantastique et tragique.",
    attendus: [
      att('Dialogue', '« Qui es-tu ? » / « Je suis la Tentation »', 'Le dialogue avec la Voix dramatise la tentation intérieure : le fantastique devient psychologique.', ["dialogue","tentation","voix","intérieur","fantastique","flaubert"]),
      att('Registre fantastique', '« visions fantastiques, défilé de monstres »', 'Le fantastique flaubertien déploie un catalogue hallucinatoire : style visionnaire.', ["fantastique","visions","monstres","hallucination","visionnaire","désert"]),
      att('Registre tragique', '« Tu ne peux pas m\'éloigner »', 'La tentation est inévitable : tragédie spirituelle du saint assailli.', ["tragique","inévitable","tentation","saint","spirituel","assailli"]),
      att('Symbolisme', '« Je suis en toi »', 'La tentation intériorisée symbolise le conflit chrétien : chair contre esprit.', ["symbolisme","intérieur","chair","esprit","chrétien","conflit"])
    ],
  },
  'GT-247': {
    texte: `La moisson commença dans la plaine de Beauce. Les faucheurs avançaient en ligne, la faux au poing, sous un soleil de plomb. Les femmes suivaient, ramassant les gerbes, liant les bottes, le dos courbé, la sueur collant la chemise à la peau. Les enfants apportaient l'eau ; les vieux regardaient, assis à l'ombre des charrettes. Zola filme la paysannerie avec un naturalisme épique : corps courbés, sueur, terre. Le registre pathétique célèbre la souffrance du labeur tout en dénonçant l'aliénation de la terre, dans une fresque où la Beauce devient scène de vie et de mort.`,
    contexte: "Roman naturaliste — paysannerie, registre pathétique et épique.",
    attendus: [
      att('Registre épique', '« faucheurs avançaient en ligne »', 'L\'épique du labeur collectif magnifie la paysannerie : naturalisme zolien.', ["épique","faucheurs","labeur","collectif","paysannerie","zola"]),
      att('Champ lexical', '« ramassant les gerbes »', 'Le champ lexical agricole ancre le réalisme : la moisson matérialise le labeur paysan.', ["champ lexical","gerbes","moisson","labeur","paysan","zola"]),
      att('Registre pathétique', '« corps courbés, sueur »', 'Le pathos du travail physique dénonce l\'exploitation : corps épuisés sous le soleil.', ["pathétique","corps","sueur","exploitation","labeur","souffrance"]),
      att('Description naturaliste', '« soleil de plomb »', 'La description naturaliste accumule les détails sensoriels : chaleur oppressante du moisson.', ["naturaliste","soleil","chaleur","description","sensoriel","moisson"])
    ],
  },
  'GT-248': {
    texte: `Des Esseintes, écrivain décadent, se plonge dans l'étude du satanisme médiéval. Il lit Gilles de Rais, les procès de sorcellerie, les grimoires, les récits de messes noires et de possession. Il visite les lieux du crime, collectionne les reliques macabres, compile les témoignages des inquisiteurs. Huysmans explore les bas-fonds de l'histoire religieuse avec un registre fantastique et satirique : le roman décadent mêle horreur, érudition et perversité. Là-bas, le mal n'est pas métaphore, il est document, matière romanesque aussi réelle que la poussière des archives.`,
    contexte: "Roman décadent — satanisme, registre fantastique et satirique.",
    attendus: [
      att('Registre fantastique', '« satanisme médiéval »', 'Le fantastique huysmansien s\'appuie sur l\'érudition : le mal devient matière romanesque.', ["fantastique","satanisme","médiéval","mal","érudition","huysmans"]),
      att('Registre satirique', '« le mal n\'est pas métaphore, il est document »', 'La satire décadente refuse la censure : Huysmans choque par l\'accumulation documentaire.', ["satirique","mal","document","décadent","choc","refus"]),
      att('Caractérisation', '« écrivain décadent »', 'Des Esseintes incarne le héros fin-de-siècle : fuite du réel vers l\'artifice.', ["caractérisation","décadent","des esseintes","fin-de-siècle","artifice","fuite"]),
      att('Énumération', '« Gilles de Rais, les procès de sorcellerie, les grimoires »', 'L\'énumération érudite structure le récit : accumulation horrifique des sources.', ["énumération","gilles de rais","sorcellerie","grimoires","horreur","accumulation"])
    ],
  },
  'GT-249': {
    texte: `Georges Duroy, dit Bel-Ami, arriva à Paris sans le sou, séduisit les femmes, trahit ses amis, et grimpa les échelons du journalisme et de la politique. Il utilisa sa beauté comme arme, son sourire comme passeport, son impudence comme talent. Les rédactions l'accueillirent, les salons l'admirèrent, les ministres le sollicitèrent. Maupassant peint l'arriviste cynique avec un réalisme satirique : le registre tragique de l'ascension sociale sans scrupules. Bel-Ami est le portrait du parvenu qui transforme sa beauté en capital et sa méchanceté en vertu.`,
    contexte: "Roman réaliste — arrivisme, registre satirique et tragique.",
    attendus: [
      att('Registre satirique', '« arriviste cynique »', 'La satire maupassantienne dénonce l\'arrivisme : Bel-Ami incarne la réussite sans mérite.', ["satirique","arriviste","cynique","réussite","dénonciation","maupassant"]),
      att('Caractérisation', '« transforme sa beauté en capital »', 'Bel-Ami est le parvenu moderne : la séduction devient stratégie sociale.', ["caractérisation","beauté","capital","séduction","parvenu","stratégie"]),
      att('Registre tragique', '« trahit ses amis »', 'La trahison structure l\'ascension tragique : chaque succès exige une faute morale.', ["tragique","trahison","ascension","faute","moral","succès"]),
      att('Réalisme', '« arriva à Paris sans le sou »', 'Le réalisme social ancre le récit : point de départ proletaire de l\'ascension.', ["réalisme","paris","pauvre","ascension","social","origine"])
    ],
  },
  'GT-250': {
    texte: `Claudine entra au collège de Montigny comme un petit chat sauvage. Elle observait ses maîtresses, séduisait ses camarades, découvrait sa sensualité avec une curiosité impudique. Elle fumait en cachette, contredisait les professeurs, riait trop fort dans les cours. Colette, sous le pseudonyme Willy, écrit l'adolescence avec un registre comique et lyrique : le roman autobiographique devient étude libre de la vie de pension, où la révolte féminine naît entre les murs d'une institution scolaire étouffante.`,
    contexte: "Roman autobiographique — adolescence, registre comique et lyrique.",
    attendus: [
      att('Comparaison', '« comme un petit chat sauvage »', 'La comparaison féline caractérise Claudine : indépendance et sensualité adolescente.', ["comparaison","chat","sauvage","claudine","indépendance","colette"]),
      att('Registre comique', '« curiosité impudique »', 'Le comique de l\'adolescence mêle innocence et transgression : regard libre sur la pension.', ["comique","impudique","adolescence","transgression","pension","curiosité"]),
      att('Registre lyrique', '« découvrait sa sensualité »', 'Le lyrisme colettien célèbre le corps féminin adolescent : écriture sensorielle.', ["lyrique","sensualité","corps","féminin","sensoriel","colette"]),
      att('Autobiographie', '« roman autobiographique »', 'Colette transforme l\'expérience vécue en fiction : pacte autobiographique sous pseudonyme.', ["autobiographie","vécu","fiction","pseudonyme","willy","pacte"])
    ],
  },
  'GT-251': {
    texte: `Dans la pension catholique, les garçons formaient une société secrète de hiérarchie et de cruauté. Les plus faibles subissaient les brimades des plus forts ; les maîtres fermaient les yeux. Les rituels d'humiliation se perpétuaient dans l'ombre des dortoirs, les alliances se nouaient dans la peur, la violence devenait langage commun. Montherlant observe l'adolescence masculine avec un registre tragique et lyrique : la pension devient microcosme de la violence humaine. Les Garçons est le roman de l'initiation à la cruauté, où l'innocence se perd dans les couloirs froids d'un internat.`,
    contexte: "Roman de l\'adolescence — pension, registre tragique et lyrique.",
    attendus: [
      att('Registre tragique', '« hiérarchie et de cruauté »', 'La tragédie de la pension expose la violence adolescente : initiation à la domination.', ["tragique","cruauté","hiérarchie","pension","violence","montherlant"]),
      att('Métaphore', '« microcosme de la violence humaine »', 'La pension symbolise la société : métaphore de la condition humaine.', ["métaphore","microcosme","société","violence","condition","humaine"]),
      att('Registre lyrique', '« initiation à la cruauté »', 'Le lyrisme montherlantien transforme la brutalité en expérience existentielle.', ["lyrique","initiation","cruauté","existence","adolescence","expérience"]),
      att('Dénonciation', '« les maîtres fermaient les yeux »', 'La dénonciation vise l\'institution : complicité de l\'autorité avec la violence.', ["dénonciation","maîtres","complicité","institution","autorité","pension"])
    ],
  },
  'GT-252': {
    texte: `Ô mes petites compagnes, je vois encore ce ruisseau noir
Dans le bois oublieux où le silence tombe
Avec le lourd cristal des étoiles qui scintillent...
La Jeune Parque s'ouvre sur une méditation nocturne : Valéry interroge la conscience, le temps, la beauté. Le registre lyrique et méditatif d'un poème philosophique où chaque vers est une pensée. La Parque, entre vie et mort, choisit de vivre, mais non sans douter, non sans souffrir, non sans interroger la lumière qui naît avec le jour.`,
    contexte: "Poème philosophique — conscience, registre lyrique et méditatif.",
    attendus: [
      att('Registre méditatif', '« méditation nocturne »', 'Valéry transforme la nuit en espace de pensée : méditation philosophique en vers.', ["méditatif","nuit","pensée","philosophique","vers","valéry"]),
      att('Registre lyrique', '« ruisseau noir »', 'Le lyrisme valéryen mêle nature et conscience : images nocturnes et sensibles.', ["lyrique","ruisseau","nuit","nature","conscience","images"]),
      att('Symbolisme', '« La Parque, entre vie et mort »', 'La Parque symbolise la conscience moderne : choix existentiel au bord du néant.', ["symbolisme","parque","vie","mort","choix","existence"]),
      att('Musicalité', '« lourd cristal des étoiles »', 'La musicalité du vers valéryen crée une harmonie méditative : sonorités et rythme.', ["musicalité","cristal","étoiles","harmonie","rythme","sonorités"])
    ],
  },
  'GT-253': {
    texte: `Du fond du couloir je regarde ces messieurs
Qui se promènent dans le couloir
Ils ont l'air d'être très contents
Ils ont l'air d'être très contents de vivre
Et moi je suis seul
Et je regarde par la fenêtre
Et je vois la ville
Et la ville est triste
Apollinaire, dans Les Fenêtres, mêle modernité urbaine et mélancolie : vers libre, guerre, solitude. Le registre lyrique et onirique transforme la fenêtre en seuil entre intérieur et monde.`,
    contexte: "Poème moderniste — guerre, ville, registre lyrique et onirique.",
    attendus: [
      att('Répétition', '« Ils ont l\'air d\'être très contents »', 'La répétition insiste sur l\'écart entre bonheur des autres et solitude du poète.', ["répétition","contents","solitude","écart","insistance","apollinaire"]),
      att('Registre lyrique', '« je suis seul »', 'Le lyrisme de la solitude urbaine structure le poème : moi contre la foule.', ["lyrique","seul","solitude","urbain","moi","foule"]),
      att('Symbolisme', '« fenêtre en seuil »', 'La fenêtre symbolise le passage entre intérieur et monde : modernité apollinienne.', ["symbolisme","fenêtre","seuil","intérieur","monde","modernité"]),
      att('Registre onirique', '« la ville est triste »', 'L\'onirisme urban transforme Paris en paysage mélancolique : guerre et modernité.', ["onirique","ville","triste","paris","mélancolie","guerre"])
    ],
  },
  'GT-254': {
    texte: `Les lilas et les roses
Ont une saison
Et c'est la saison de Paris
Quand les lilas fleurissent
Et que les obus sifflent
Quand les lilas fleurissent
Et que les obus sifflent
Sur les boulevards déserts
Aragon mêle amour et guerre dans Le Creve-cœur : poésie de la Résistance où le registre lyrique et épique célèbre Paris occupé. L'anaphore et la simplicité du vers populaire portent l'engagement poétique contre l'occupant.`,
    contexte: "Poésie de la Résistance — engagement, registre lyrique et épique.",
    attendus: [
      att('Antithèse', '« lilas fleurissent » / « obus sifflent »', 'L\'antithèse fleurs/obus mêle amour et guerre : poésie engagée de la Résistance.', ["antithèse","lilas","obus","guerre","amour","aragon"]),
      att('Anaphore', '« Les lilas et les roses »', 'L\'anaphore incantatoire structure le poème : simplicité lyrique au service de l\'engagement.', ["anaphore","lilas","roses","incantation","lyrique","engagement"]),
      att('Registre épique', '« Paris occupé »', 'L\'épique de la Résistance transforme Paris en héros : poésie patriotique.', ["épique","paris","résistance","patriotique","occupation","héros"]),
      att('Registre lyrique', '« c\'est la saison de Paris »', 'Le lyrisme aragonien célèbre la capitale : amour de la ville et de la femme.', ["lyrique","paris","saison","capitale","amour","célébration"])
    ],
  },
  'GT-255': {
    texte: `Voici venir les temps où vibrant sur sa tige
Chaque fleur s'évapore ainsi qu'un encensoir ;
Les sons et les parfums tournent dans l'air du soir ;
Valse mélancolique et langoureux vertige !
Le violon frémit comme un cœur qu'on afflige,
Un cœur tendre, qui hait le néant vaste et noir !
Le ciel est triste et beau comme un grand reposoir.
Le soleil s'est noyé dans ses ondes de lumière ;
Comme un long linceul traînant à l'Orient lointain,
Entends, ma chère, entends la douce Nuit qui marche.`,
    contexte: "Poème symboliste — synesthies, registre lyrique et mélancolique.",
    attendus: [
      att('Synesthésie', '« Les sons et les parfums tournent »', 'Baudelaire mêle ouïe et odorat : synesthésie symboliste du crépuscule.', ["synesthésie","sons","parfums","crépuscule","symbolisme","baudelaire"]),
      att('Comparaison', '« s\'évapore ainsi qu\'un encensoir »', 'La comparaison sacralise la fleur : le soir devient cérémonie religieuse.', ["comparaison","encensoir","fleur","sacré","soir","cérémonie"]),
      att('Comparaison', '« Comme un long linceul traînant »', 'Le linceul céleste transforme le couchant en deuil poétique : mélancolie et grandeur du soir.', ["comparaison","linceul","soleil","deuil","mélancolie","couchant"]),
      att('Registre lyrique', '« Valse mélancolique et langoureux vertige »', 'Le lyrisme baudelairien condense mélancolie et sensualité : spleen du soir.', ["lyrique","valse","mélancolie","vertige","spleen","soir"])
    ],
  },
  'GT-256': {
    texte: `Les sept jeunes Lorrains quittèrent leur province pour étudier à Paris. Brillants, ambitieux, ils y perdirent leurs racines. Ils y apprirent à mépriser leur patois, à oublier leurs collines, à imiter les Parisiens dans leurs manières et leurs opinions. Barrès dénonce les déracinés : ceux que l'éducation parisienne arrache à leur terre natale. Le registre tragique et didactique du roman politique oppose l'enracinement à l'abstraction républicaine, dans une fresque où la Lorraine perd ses fils au profit de la capitale.`,
    contexte: "Roman politique — enracinement, registre tragique et didactique.",
    attendus: [
      att('Thème politique', '« perdirent leurs racines »', 'Barrès thématise le déracinement : roman politique contre l\'uniformisation républicaine.', ["politique","racines","déracinement","terre","barrès","lorraine"]),
      att('Registre didactique', '« oppose l\'enracinement à l\'abstraction républicaine »', 'Le didactisme barrésien affirme la primauté du local : pamphlet romanesque.', ["didactique","enracinement","abstraction","local","pamphlet","idéologie"]),
      att('Registre tragique', '« Brillants, ambitieux, ils y perdirent »', 'La chute des sept jeunes Lorrains structure la tragédie : succès parisien, échec existentiel.', ["tragique","chute","ambition","échec","paris","province"]),
      att('Antithèse', '« province » / « Paris »', 'L\'antithèse géographique oppose authenticité régionale et corruption métropolitaine.', ["antithèse","province","paris","authenticité","corruption","géographie"])
    ],
  },
  'GT-258': {
    texte: `Elisabeth attendait l'aube dans sa cellule. Elle avait tué son mari, Antoine Tassy, avec l'aide de son amant George Nelson. Le meurtre la hantait ; la neige du Québec tombait silencieusement sur Kamouraska. Les cloches sonnaient au loin ; le fleuve gelait ; la mémoire revenait en fragments, en images, en sang. Anne Hébert transforme le crime passionnel en poème tragique : registre lyrique et onirique d'une conscience coupable devant le paysage québécois, où chaque flocon semble témoin du crime.`,
    contexte: "Roman québécois — crime passionnel, registre lyrique et tragique.",
    attendus: [
      att('Registre tragique', '« avait tué son mari »', 'Le crime passionnel structure la tragédie : Elisabeth hantée par sa faute.', ["tragique","meurtre","crime","faute","hantise","hébert"]),
      att('Registre lyrique', '« neige du Québec tombait silencieusement »', 'Le lyrisme hébertien fusionne paysage et conscience : neige comme miroir intérieur.', ["lyrique","neige","québec","paysage","conscience","silence"]),
      att('Symbolisme', '« Kamouraska »', 'Kamouraska symbolise le lieu du crime et du deuil : enracinement québécois.', ["symbolisme","kamouraska","lieu","crime","deuil","québécois"]),
      att('Focalisation interne', '« Le meurtre la hantait »', 'La focalisation interne plonge dans la culpabilité : roman psychologique québécois.', ["focalisation","interne","culpabilité","hantise","psychologique","elisabeth"])
    ],
  },
  'GT-259': {
    texte: `Le soir tombait sur la mare au diable. Germain, le garde-chasse, revenait du bois avec son fils. La brume montait des prés, les étoiles commençaient à briller, les oiseaux se taisaient dans les arbres. Sand peint la campagne berrienne avec un registre bucolique et lyrique : la nature comme refuge de l'amour simple. La mare au diable, lieu de légende, devient décor d'une idylle champêtre où le paysan retrouve la paix du cœur après une journée de labeur, sous un ciel qui promet la douceur de la nuit.`,
    contexte: "Roman champêtre — nature, amour, registre lyrique et bucolique.",
    attendus: [
      att('Registre bucolique', '« mare au diable »', 'Le lieu légendaire installe le bucolique : campagne berrienne comme espace du merveilleux simple.', ["bucolique","mare","légende","campagne","berri","sand"]),
      att('Champ lexical', '« les étoiles commençaient à briller »', 'Le champ lexical nocturne crée une atmosphère lyrique : soir champêtre et poétique.', ["champ lexical","étoiles","briller","soir","nuit","atmosphère"]),
      att('Registre lyrique', '« la nature comme refuge de l\'amour simple »', 'Sand célèbre l\'idylle rurale : lyrisme de l\'amour authentique contre la ville.', ["lyrique","nature","amour","idylle","rural","authenticité"]),
      att('Personnification', '« Le soir tombait »', 'Le soir personnifié enveloppe la scène : transition vers l\'intimité nocturne.', ["personnification","soir","nuit","intimité","transition","décor"])
    ],
  },
  'GT-260': {
    texte: `Les médailles d'argent que le temps accorde
Sont des souvenirs qui brillent dans la nuit
Du passé, quand la jeunesse est morte
Et que l'on regarde en arrière avec mélancolie.
Régnier, poète symboliste, médite sur la mémoire et le temps qui fuit. Le registre lyrique et mélancolique transforme le souvenir en médaille : objet précieux du passé. La poésie fin-de-siècle célèbre la nostalgie avec une musicalité raffinée.`,
    contexte: "Poésie symboliste — mémoire, registre lyrique et mélancolique.",
    attendus: [
      att('Métaphore', '« médailles d\'argent »', 'La métaphore de la médaille sacralise le souvenir : le passé devient objet de valeur.', ["métaphore","médailles","souvenir","passé","valeur","régnier"]),
      att('Registre mélancolique', '« regarde en arrière avec mélancolie »', 'La mélancolie structure le poème : nostalgie du temps perdu.', ["mélancolique","regard","nostalgie","temps","passé","souvenir"]),
      att('Personnification', '« le temps accorde »', 'Le temps personnifié distribue les souvenirs : symbolisme du temps qui passe.', ["personnification","temps","accorde","souvenirs","symbolisme","fuite"]),
      att('Registre lyrique', '« brillent dans la nuit / Du passé »', 'Le lyrisme régnierien mêle lumière et obscurité : beauté mélancolique du souvenir.', ["lyrique","brillent","nuit","passé","beauté","musicalité"])
    ],
  }
};
