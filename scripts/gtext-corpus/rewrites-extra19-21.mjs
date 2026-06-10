import { att } from '../gtext-enrichment-lib.mjs';

export const REWRITES_EXTRA1921 = {
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
    contexte: "Modernité — libération poétique. — poème n°2.",
    attendus: [
      att('Anaphore', "« Les jours s'en vont je demeure »", "Anaphore : la reprise du refrain fixe le temps qui passe face à la permanence du moi — modernité poétique de la mémoire amoureuse.", ["anaphore","jours","demeure","temps","mémoire","refrain"]),
      att('Métaphore', "« L'amour s'en va comme cette eau courante »", "Métaphore : l'amour comparé à l'eau de la Seine traduit l'éphémère et la fluidité des sentiments.", ["métaphore","amour","eau","courante","éphémère","seine"]),
      att('Registre lyrique', "« Entends-tu ma voix doucement chanter »", "Registre lyrique : apostrophe au beloved et musicalité du vers libéré — subjectivité intime d'Apollinaire.", ["lyrique","voix","chanter","apostrophe","musicalité","intime"]),
      att('Antithèse', "« La joie venait toujours après la peine »", "Antithèse joie/peine : le couple douleur-plaisir structure la nostalgie du pont Mirabeau.", ["antithèse","joie","peine","nostalgie","couple","souvenir"]),
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
      att('Énumération', "« Des mots des mots des mots »", "Énumération : l'accumulation de « mots » et de comparaisons crée un rythme incantatoire et une plénitude poétique.", ["énumération","mots","accumulation","rythme","incantatoire","plénitude"]),
      att('Comparaison', "« Des mots comme des larmes »", "Comparaison : chaque série rapproche les mots d'éléments naturels ou émotionnels — tendresse et violence mêlées.", ["comparaison","larmes","mots","nature","émotion","tendresse"]),
      att('Registre lyrique', "« Ses yeux couleur de mer »", "Registre lyrique : portrait de la fille par détails sensoriels — poésie populaire et intimité.", ["lyrique","yeux","mer","portrait","sensoriel","intimité"]),
      att('Gradation', "« Des mots comme des bourrasques de feuilles et de sang et de rêves »", "Gradation : les comparaisons s'intensifient jusqu'à la bourrasque finale — crescendo expressif.", ["gradation","bourrasques","intensité","crescendo","rêves","sang"]),
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
    contexte: "Poésie — méditation et pensée. — poème n°3.",
    attendus: [
      att('Apostrophe', "« Le vent se lève !... il faut tenter de vivre ! »", "Apostrophe et exclamation : le poète s'adresse au vent et affirme la volonté de vivre face à la mort.", ["apostrophe","vent","vivre","volonté","mort","exclamation"]),
      att('Métaphore', "« La vague en poudre ose jaillir des rocs »", "Métaphore : la mer personnifiée devient force créatrice — méditation sur la nature et la pensée.", ["métaphore","vague","poudre","rocs","nature","création"]),
      att('Antithèse', "« lutte éternelle de la mer et du ciel »", "Antithèse mer/ciel : l'opposition des éléments structure la méditation philosophique du poème.", ["antithèse","mer","ciel","lutte","éléments","philosophie"]),
      att('Registre lyrique', "« parmi les sursauts d'une immense musique »", "Registre lyrique : musicalité et subjectivité du moi poétique face à l'univers.", ["lyrique","musique","sursauts","subjectivité","univers","méditation"]),
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
      att('Anaphore', "« Rien de plus cher que la chanson grise »", "Anaphore : le refrain martèle la thèse symboliste de la suggestion et de la musicalité.", ["anaphore","chanson","grise","refrain","symbolisme","suggestion"]),
      att('Antithèse', "« l'Indécis au Précis se joint »", "Antithèse indécis/précis : Verlaine définit l'idéal poétique par la fusion des contraires.", ["antithèse","indécis","précis","fusion","poétique","idéal"]),
      att('Registre lyrique', "« De la musique avant toute chose »", "Registre lyrique : la musicalité prime sur le sens — manifeste du symbolisme.", ["lyrique","musique","manifeste","symbolisme","rythme","sens"]),
      att('Énumération', "« C'est des beaux yeux derrière des voiles »", "Énumération d'images vagues : chaque comparaison illustre la poétique de la suggestion.", ["énumération","images","voiles","suggestion","vague","comparaison"]),
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
      att('Champ lexical', "« C'est un trou de verdure où chante une rivière »", "Champ lexical de la nature : le décor bucolique contraste avec la mort du soldat — ironie tragique.", ["champ lexical","nature","verdure","rivière","contraste","mort"]),
      att('Antithèse', "« Sourirait un enfant malade, il fait un somme »", "Antithèse : sourire d'enfant et maladie/mort — décalage pathétique du dernier vers.", ["antithèse","souriant","enfant","malade","décalage","pathétique"]),
      att('Registre pathétique', "« Il a deux trous rouges au côté droit »", "Registre pathétique : la révélation finale des blessures de guerre brise l'idylle — compassion et indignation.", ["pathétique","trous","rouges","guerre","compassion","révélation"]),
      att('Apostrophe', "« Nature, berce-le chaudement : il a froid »", "Apostrophe à la Nature : le poète interpelle le monde naturel face à la mort du jeune soldat.", ["apostrophe","nature","berce","froid","soldat","mort"]),
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
      att('Anaphore', "« J'accuse ! »", "Anaphore : la reprise martèle l'accusation publique et transforme le pamphlet en acte d'engagement civique.", ["anaphore","accuse","accusation","engagement","dreyfus","pamphlet"]),
      att('Registre polémique', "« rapport mensongère et scélératesse »", "Registre polémique : le vocabulaire judiciaire violent arme l'argumentation contre les responsables.", ["polémique","mensonge","scélératesse","dénonciation","justice","violence"]),
      att('Énumération', "« J'accuse le lieutenant-colonel Picquart »", "Énumération : chaque paragraphe cible un responsable — structure accusatoire systématique.", ["énumération","responsables","cible","systématique","accusation","structure"]),
      att('Antithèse', "« innocence de Dreyfus »", "Antithèse crime/innocence : Zola oppose deux visions de la justice et expose la perversion de l'institution.", ["antithèse","innocence","trahison","crime","justice","institution"]),
    ],
  },
  'GT-597': {
    texte: `PHÈDRE
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
Le fils de celui qui les a conquis pour elle.`,
    contexte: "Tragédie de la passion transgressive et du devoir. — Acte 2, scène 8.",
    attendus: [
      att('Registre tragique', "« C'en est fait. Je n'ai pu soutenir tes regards »", "Registre tragique : Phèdre avoue l'aveuglement de sa passion — la fatalité amoureuse précipite la catastrophe.", ["tragique","regards","passion","fatalité","aveu","catastrophe"]),
      att('Antithèse', "« Je te laisse mon empire »", "Antithèse entre pouvoir royal et dépendance amoureuse : Phèdre renonce au trône pour suivre Hippolyte.", ["antithèse","empire","devoir","amour","renoncement","trône"]),
      att('Dialogue', "« Madame, c'est à moi de partir »", "Dialogue : échange tendu entre Phèdre et Hippolyte — malentendu et tension dramatique.", ["dialogue","partir","hippolyte","tension","malentendu","échange"]),
      att('Hyperbole', "« ce lieu funeste où mes sens se sont égarés »", "Hyperbole : le lieu devient maudit par la passion — l'espace théâtral incarne la faute.", ["hyperbole","funeste","sens","égarés","faute","lieu"]),
    ],
  },
  'GT-598': {
    texte: `PHÈDRE
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
Quel crime ? Est-ce un crime d'aimer ?`,
    contexte: "Tragédie de la passion transgressive et du devoir. — Acte 3, scène 6.",
    attendus: [
      att('Métaphore', "« PHÈDRE\nQue ne puis-je à la fois prendre ou bien laisser la vie ! »", "Métaphore : ce passage met en relief tragédie de la passion transgressive et du devoir. — acte 3, scène 6 et oriente la lecture vers une tension sensible propre à Racine.", ["métaphore","racine","tragédie","passion","transgressive","devoir."]),
      att('Antithèse', "« Faut-il de plus affreux un désespoir vous saisir ? »", "Antithèse : ce passage met en relief tragédie de la passion transgressive et du devoir. — acte 3, scène 6 et oriente la lecture vers une tension sensible propre à Racine.", ["antithèse","racine","tragédie","passion","transgressive","devoir."]),
      att('Registre pathétique', "« C'est moi qu'il faut sacrifier pour sauver votre vie. »", "Registre pathétique : ce passage met en relief tragédie de la passion transgressive et du devoir. — acte 3, scène 6 et oriente la lecture vers une tension sensible propre à Racine.", ["registre pathétique","racine","tragédie","passion","transgressive","devoir."]),
      att('Anaphore', "« je le sais, tu veux que je meure. »", "Anaphore : ce passage met en relief tragédie de la passion transgressive et du devoir. — acte 3, scène 6 et oriente la lecture vers une tension sensible propre à Racine.", ["anaphore","racine","tragédie","passion","transgressive","devoir."]),
    ],
  },
  'GT-599': {
    texte: `THÉRAMÈNE
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
Dans le fond de l'abîme.`,
    contexte: "Tragédie de la passion transgressive et du devoir. — Acte 5, scène 2.",
    attendus: [
      att('Registre épique', "« Un monstre sort des flots »", "Registre épique : le récit amplifie la catastrophe en scène héroïque mythologique.", ["épique","monstre","flots","héroïque","catastrophe","mythologique"]),
      att('Registre pathétique', "« L'horreur du désespoir qui l'a précipité »", "Registre pathétique : compassion pour Hippolyte innocent victime de la fatalité.", ["pathétique","désespoir","compassion","innocent","victime","fatalité"]),
      att('Gradation', "« Les flots se sont apaisés »", "Gradation : calme trompeur avant l'apparition du monstre — intensité croissante.", ["gradation","calme","flots","monstre","intensité","suspense"]),
      att('Hyperbole', "« vapeurs infectes et sanglantes »", "Hyperbole : l'horreur du monstre est amplifiée pour transmettre la terreur au spectateur.", ["hyperbole","vapeurs","horreur","terreur","monstre","spectateur"]),
    ],
  },
  'GT-601': {
    texte: `ANDROMAQUE
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
Je n'ai plus de soupirs à lui donner, ni de larmes.`,
    contexte: "Tragédie de la fidélité et de la jalousie. — Acte 2, scène 5.",
    attendus: [
      att('Métaphore', "« HÉCTOR\nOui, je me souviens, Madame, et je veux bien\nQue vous me rappeliez ce jour et cette scène. »", "Métaphore : ce passage met en relief tragédie de la fidélité et de la jalousie. — acte 2, scène 5 et oriente la lecture vers une tension sensible propre à Racine.", ["métaphore","racine","tragédie","fidélité","jalousie.","scène"]),
      att('Antithèse', "« sans être touché d'une pitié si tendre,\nVous pouvez aujourd'hui demander ce qu'elle pleure ? »", "Antithèse : ce passage met en relief tragédie de la fidélité et de la jalousie. — acte 2, scène 5 et oriente la lecture vers une tension sensible propre à Racine.", ["antithèse","racine","tragédie","fidélité","jalousie.","scène"]),
      att('Registre pathétique', "« HÉCTOR\nJe ne demande rien, Madame, que votre cœur. »", "Registre pathétique : ce passage met en relief tragédie de la fidélité et de la jalousie. — acte 2, scène 5 et oriente la lecture vers une tension sensible propre à Racine.", ["registre pathétique","racine","tragédie","fidélité","jalousie.","scène"]),
      att('Anaphore', "« ANDROMAQUE\nUn cœur, après Pyrrhus, n'est plus à qui l'on veut. »", "Anaphore : ce passage met en relief tragédie de la fidélité et de la jalousie. — acte 2, scène 5 et oriente la lecture vers une tension sensible propre à Racine.", ["anaphore","racine","tragédie","fidélité","jalousie.","scène"]),
    ],
  },
  'GT-604': {
    texte: `PHÈDRE
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Tragédie de l'honneur et de l'amour. — Acte 1, scène 9.",
    attendus: [
      att('Apostrophe', "« Ô Vénus ! je le sais, tu veux que je meure »", "Apostrophe : Phèdre interpelle la déesse et personnifie la fatalité amoureuse — la passion devient une force divine qui la condamne.", ["apostrophe","vénus","fatalité","passion","mort","tragique"]),
      att('Antithèse', "« perdre celui qu'il offense »", "Antithèse entre sauver Phèdre et perdre Hippolyte : Oenone installe le dilemme criminel qui précipitera la catastrophe.", ["antithèse","sauver","perdre","hippolyte","dilemme","catastrophe"]),
      att('Registre tragique', "« Faites-vous jour, ou plût au ciel que le crime / Vous fût inconnu ! »", "Registre tragique : le choix entre aveu et mensonge dépasse les personnages — la fatalité du secret amoureux mène au crime.", ["registre","tragique","crime","aveu","mensonge","fatalité"]),
      att('Dialogue', "« Quel crime ? Est-ce un crime d'aimer ? »", "Dialogue : la question rhétorique de Phèdre oppose passion innocente et loi morale — tension dramatique entre désir et devoir.", ["dialogue","crime","aimer","passion","devoir","tension"]),
    ],
  },
  'GT-606': {
    texte: `LE COMTE
Rodrigue ne t'est plus qu'un funeste objet.
CHIMÈNE
Un funeste objet qui m'avait tant de charmes !
LE COMTE
Tu dois maintenant haïr ce qu'un jour tu aimas.
CHIMÈNE
Va, je ne te hais point, tu penses que je te hais ?
Mes blessures ont un cœur qui n'est pas endurci ;
À qui venge mon père il s'attache et se donne,
Et moins il m'offense, plus je le pardonne.
LE COMTE
Tu l'aimes donc toujours ?
CHIMÈNE
Je l'aimais innocemment, quand mon père vivait ;
Et tu devais choisir un époux à ta fille,
Sans me contraindre à rompre un nœud si fortement noué.
LE COMTE
Tu ne hais donc point celui qui t'a fait outrage ?
CHIMÈNE
Il m'offense, et je l'aime ; et malgré mon courroux,
Je sens qu'en dépit de tout l'effort que je puis faire,
Je pleure sa victoire, et tremble pour sa vie.`,
    contexte: "Tragédie de l'honneur et de l'amour. — Acte 3, scène 5.",
    attendus: [
      att('Litote', "« Va, je ne te hais point, tu penses que je te hais ? »", "Litote : Chimène nie la haine pour exprimer l'amour — la négation atténue une passion que le devoir lui interdit d'avouer.", ["litote","hais","amour","négation","devoir","chimène"]),
      att('Antithèse', "« Il m'offense, et je l'aime »", "Antithèse entre offense et amour : Corneille condense le conflit tragique entre honneur et passion dans une formule brève.", ["antithèse","offense","aime","honneur","passion","conflit"]),
      att('Registre pathétique', "« Je pleure sa victoire, et tremble pour sa vie »", "Registre pathétique : Chimène avoue sa compassion malgré le devoir de vengeance — pitié mêlée à l'indignation.", ["pathétique","pleure","tremble","pitié","vengeance","compassion"]),
      att('Dialogue', "« Tu l'aimes donc toujours ? »", "Dialogue : le père interroge et force Chimène à révéler son trouble — la scène dramatise l'aveu contraint.", ["dialogue","aime","père","aveu","interrogation","trouble"]),
    ],
  },
  'GT-607': {
    texte: `Gavroche était un de ces enfants les plus malheureusement malheureux et les plus malheureusement heureux de la terre. Il avait les pieds nus, la tête nue. Il avait l'air d'avoir plus de sept ans, mais, en réalité, il n'avait pas encore franchi sa quatrième année. C'était un petit homme. Il était nu et grelottait. Il criait tout seul. Il riait aussi. C'était dans les bas-fonds de la ville.
— Comment t'appelles-tu ? lui avait-on demandé.
— Je m'appelle petit Gavroche.
— Comment t'appelles-tu, morveux ?
— Je m'appelle petit Gavroche.
— Comment t'appelles-tu, chenapan ?
— Je m'appelle petit Gavroche.
Il chantait tout en marchant :
Ah ! je ris de me voir si belle
En ce miroir,
Hélas ! en l'état où je suis,
On ne peut pas s'appeler belle.
Il avait une voix claire, gaie, forte, qui semblait faite pour être entendue au fond des bois. Il chantait des chansons à tout venant, sans autre préméditation que le besoin de chanter.`,
    contexte: "Tragédie de l'honneur et de l'amour. — Acte 4, scène 3.",
    attendus: [
      att('Antithèse', "« les plus malheureusement malheureux et les plus malheureusement heureux »", "Antithèse : Hugo oppose misère extrême et joie insouciante — le personnage incarne la dignité du pauvre.", ["antithèse","malheureux","heureux","misère","joie","dignité"]),
      att('Registre réaliste', "« Il était nu et grelottait »", "Registre réaliste : détails concrets (pieds nus, froid) dénoncent la misère sociale sans pathos artificiel.", ["réaliste","nu","grelottait","misère","social","concret"]),
      att('Ironie', "« Ah ! je ris de me voir si belle / En ce miroir »", "Ironie : Gavroche reprend une chanson galante dans un décor de dénuement — décalage comique et poignant.", ["ironie","chanson","belle","décalage","comique","poignant"]),
      att('Énumération', "« Il criait tout seul. Il riait aussi »", "Énumération d'actions simples : la juxtaposition des cris et du rire traduit une vitalité indomptable malgré l'abandon.", ["énumération","criait","riait","vitalité","abandon","enfant"]),
    ],
  },
  'GT-609': {
    texte: `je meure.
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Conflit entre devoir patriotique et amour. — Acte 1, scène 3.",
    attendus: [
      att('Métaphore', "« OENONE\nMadame, avant que l'on vous atteigne il est temps. »", "Métaphore : ce passage met en relief conflit entre devoir patriotique et amour. — acte 1, scène 3 et oriente la lecture vers une tension sensible propre à Corneille.", ["métaphore","corneille","conflit","entre","devoir","patriotique"]),
      att('Antithèse', "« Les prêtres, qu'on offense, chercheront un supplice ; »", "Antithèse : ce passage met en relief conflit entre devoir patriotique et amour. — acte 1, scène 3 et oriente la lecture vers une tension sensible propre à Corneille.", ["antithèse","corneille","conflit","entre","devoir","patriotique"]),
      att('Registre pathétique', "« Vos cris, que tous ont crus sortir de votre cervelle,\nOnt fait d'Hippolyte un criminel coupable. »", "Registre pathétique : ce passage met en relief conflit entre devoir patriotique et amour. — acte 1, scène 3 et oriente la lecture vers une tension sensible propre à Corneille.", ["registre pathétique","corneille","conflit","entre","devoir","patriotique"]),
      att('Anaphore', "« PHÈDRE\nIl s'est bien débattu contre mon innocence ! »", "Anaphore : ce passage met en relief conflit entre devoir patriotique et amour. — acte 1, scène 3 et oriente la lecture vers une tension sensible propre à Corneille.", ["anaphore","corneille","conflit","entre","devoir","patriotique"]),
    ],
  },
  'GT-611': {
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
    contexte: "Comédie de caractère — sincérité et hypocrisie. — Acte 1, scène 6.",
    attendus: [
      att('Métaphore', "« laissez-moi respirer un peu, je vous en prie. »", "Métaphore : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 1, scène 6 et oriente la lecture vers une tension sensible propre à Molière.", ["métaphore","molière","comédie","caractère","sincérité","hypocrisie."]),
      att('Antithèse', "« Je vais tout étrangler, savez-vous bien ? »", "Antithèse : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 1, scène 6 et oriente la lecture vers une tension sensible propre à Molière.", ["antithèse","molière","comédie","caractère","sincérité","hypocrisie."]),
      att('Registre pathétique', "« et ce n'est pas mon fait,\nJe suis trop scrupuleux sans doute ; »", "Registre pathétique : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 1, scène 6 et oriente la lecture vers une tension sensible propre à Molière.", ["registre pathétique","molière","comédie","caractère","sincérité","hypocrisie."]),
      att('Anaphore', "« mais enfin je ne saurais aller\naux extrémités jusqu'à cela ; »", "Anaphore : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 1, scène 6 et oriente la lecture vers une tension sensible propre à Molière.", ["anaphore","molière","comédie","caractère","sincérité","hypocrisie."]),
    ],
  },
  'GT-613': {
    texte: `aux extrémités jusqu'à cela ; les choses en sont venues trop loin,
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
    contexte: "Comédie de caractère — sincérité et hypocrisie. — Acte 3, scène 2.",
    attendus: [
      att('Métaphore', "« aux extrémités jusqu'à cela ; »", "Métaphore : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 3, scène 2 et oriente la lecture vers une tension sensible propre à Molière.", ["métaphore","molière","comédie","caractère","sincérité","hypocrisie."]),
      att('Antithèse', "« les choses en sont venues trop loin,\net je n'approuve pas entièrement vos désirs. »", "Antithèse : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 3, scène 2 et oriente la lecture vers une tension sensible propre à Molière.", ["antithèse","molière","comédie","caractère","sincérité","hypocrisie."]),
      att('Registre pathétique', "« et comme on dit, ne poussons pas la chose\ntrop loin. »", "Registre pathétique : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 3, scène 2 et oriente la lecture vers une tension sensible propre à Molière.", ["registre pathétique","molière","comédie","caractère","sincérité","hypocrisie."]),
      att('Anaphore', "« Mais voici votre mari qui survient ; »", "Anaphore : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 3, scène 2 et oriente la lecture vers une tension sensible propre à Molière.", ["anaphore","molière","comédie","caractère","sincérité","hypocrisie."]),
    ],
  },
  'GT-615': {
    texte: `ve pas entièrement vos désirs.
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
    contexte: "Comédie — dénonciation de l'hypocrisie. — Acte 2, scène 6.",
    attendus: [
      att('Métaphore', "« ve pas entièrement vos désirs. »", "Métaphore : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 2, scène 6 et oriente la lecture vers une tension sensible propre à Molière.", ["métaphore","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
      att('Antithèse', "« et comme on dit, ne poussons pas la chose\ntrop loin. »", "Antithèse : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 2, scène 6 et oriente la lecture vers une tension sensible propre à Molière.", ["antithèse","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
      att('Registre pathétique', "« Mais voici votre mari qui survient ; »", "Registre pathétique : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 2, scène 6 et oriente la lecture vers une tension sensible propre à Molière.", ["registre pathétique","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
      att('Anaphore', "« par forme, mettons\nnous à genoux ; »", "Anaphore : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 2, scène 6 et oriente la lecture vers une tension sensible propre à Molière.", ["anaphore","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
    ],
  },
  'GT-616': {
    texte: `que devant nous, dans toutes les rencontres,
nous nous pourrions donner le temps de nous retirer, et n'allons pas
jeter de poudre aux yeux ; et comme on dit, ne poussons pas la chose
trop loin. Mais voici votre mari qui survient ; par forme, mettons
nous à genoux ; c'est à vous à tout disposer, et à vous tendre le
pan de votre robe.
ELMIRE
Oui, mais songez à ne point vous échauffer trop le cerveau,
et à revenir bientôt à vos sens, pour ne point vous aviser de
me faire des remontrances sur la conduite que je tiens.`,
    contexte: "Comédie — dénonciation de l'hypocrisie. — Acte 3, scène 4.",
    attendus: [
      att('Métaphore', "« et comme on dit, ne poussons pas la chose\ntrop loin. »", "Métaphore : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 3, scène 4 et oriente la lecture vers une tension sensible propre à Molière.", ["métaphore","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
      att('Antithèse', "« Mais voici votre mari qui survient ; »", "Antithèse : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 3, scène 4 et oriente la lecture vers une tension sensible propre à Molière.", ["antithèse","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
      att('Registre pathétique', "« par forme, mettons\nnous à genoux ; »", "Registre pathétique : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 3, scène 4 et oriente la lecture vers une tension sensible propre à Molière.", ["registre pathétique","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
      att('Anaphore', "« c'est à vous à tout disposer, et à vous tendre le\npan de votre robe. »", "Anaphore : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 3, scène 4 et oriente la lecture vers une tension sensible propre à Molière.", ["anaphore","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
    ],
  },
  'GT-618': {
    texte: `vais tout étrangler, savez-vous bien ? et ce n'est pas mon fait,
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
    contexte: "Comédie — libertinage et châtiment. — Acte 1, scène 4.",
    attendus: [
      att('Métaphore', "« vais tout étrangler, savez-vous bien ? »", "Métaphore : ce passage met en relief comédie — libertinage et châtiment. — acte 1, scène 4 et oriente la lecture vers une tension sensible propre à Molière.", ["métaphore","molière","comédie","libertinage","châtiment.","scène"]),
      att('Antithèse', "« et ce n'est pas mon fait,\nJe suis trop scrupuleux sans doute ; »", "Antithèse : ce passage met en relief comédie — libertinage et châtiment. — acte 1, scène 4 et oriente la lecture vers une tension sensible propre à Molière.", ["antithèse","molière","comédie","libertinage","châtiment.","scène"]),
      att('Registre pathétique', "« mais enfin je ne saurais aller\naux extrémités jusqu'à cela ; »", "Registre pathétique : ce passage met en relief comédie — libertinage et châtiment. — acte 1, scène 4 et oriente la lecture vers une tension sensible propre à Molière.", ["registre pathétique","molière","comédie","libertinage","châtiment.","scène"]),
      att('Anaphore', "« les choses en sont venues trop loin,\net je n'approuve pas entièrement vos désirs. »", "Anaphore : ce passage met en relief comédie — libertinage et châtiment. — acte 1, scène 4 et oriente la lecture vers une tension sensible propre à Molière.", ["anaphore","molière","comédie","libertinage","châtiment.","scène"]),
    ],
  },
  'GT-622': {
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
    contexte: "Modernité poétique, spleen et idéal. — poème n°15.",
    attendus: [
      att('Métaphore', "« — Quand le ciel bas et lourd pèse comme un couvercle Sur l'esprit en gémissant proie, »", "Métaphore : ce passage met en relief modernité poétique, spleen et idéal. — poème n°15 et oriente la lecture vers une tension sensible propre à Baudelaire.", ["métaphore","baudelaire","modernité","poétique,","spleen","idéal."]),
      att('Antithèse', "« Sur l'esprit en gémissant proie, Et que de l'horizon embrassant tout l'ennui Vient vers nous verser »", "Antithèse : ce passage met en relief modernité poétique, spleen et idéal. — poème n°15 et oriente la lecture vers une tension sensible propre à Baudelaire.", ["antithèse","baudelaire","modernité","poétique,","spleen","idéal."]),
      att('Registre pathétique', "« l'ennui Vient vers nous verser un long goutteron noir ; Quand la terre est changée en »", "Registre pathétique : ce passage met en relief modernité poétique, spleen et idéal. — poème n°15 et oriente la lecture vers une tension sensible propre à Baudelaire.", ["registre pathétique","baudelaire","modernité","poétique,","spleen","idéal."]),
      att('Anaphore', "« la terre est changée en un cachot humide, Où l'Espérance, agitée par des chauves-souris, Bat ses »", "Anaphore : ce passage met en relief modernité poétique, spleen et idéal. — poème n°15 et oriente la lecture vers une tension sensible propre à Baudelaire.", ["anaphore","baudelaire","modernité","poétique,","spleen","idéal."]),
    ],
  },
  'GT-623': {
    texte: `La barricade était une haute muraille de pierres et de meubles ; une poudre noire et épaisse s'étendait sur le dessus ; le créneau exécutait ce salut sinistre des rues en état de siège. Les hommes de l'intérieur se tenaient là, noirs, uniquement voilés par leur chemise blanche, à demi perdus dans la pénombre du matin, et semblaient des spectres qui attendaient le jour pour disparaître. Deux hommes du poste principal, debout dans la tranchée, la lunette au front, et le fusil à la main, se penchaient sur le bord et regardaient au loin le bout de la rue Jean-Pierre-Martyr. L'attente était lugubre ; on n'entendait que le bruit des marteaux des serruriers qui clouaient les portes, ou des gardes nationaux qui allaient ou venaient, ou des sentinelles qui s'interpellaient ; et la ville, effrayée, se taisait dans l'ombre.`,
    contexte: "Poésie du deuil et de la mémoire. — poème n°12.",
    attendus: [
      att('Métaphore', "« La barricade était une haute muraille de pierres et de meubles ; »", "Métaphore : ce passage met en relief poésie du deuil et de la mémoire. — poème n°12 et oriente la lecture vers une tension sensible propre à Hugo.", ["métaphore","hugo","poésie","deuil","mémoire.","poème"]),
      att('Antithèse', "« une poudre noire et épaisse s'étendait sur le dessus ; »", "Antithèse : ce passage met en relief poésie du deuil et de la mémoire. — poème n°12 et oriente la lecture vers une tension sensible propre à Hugo.", ["antithèse","hugo","poésie","deuil","mémoire.","poème"]),
      att('Registre pathétique', "« le créneau exécutait ce salut sinistre des rues en état de siège. »", "Registre pathétique : ce passage met en relief poésie du deuil et de la mémoire. — poème n°12 et oriente la lecture vers une tension sensible propre à Hugo.", ["registre pathétique","hugo","poésie","deuil","mémoire.","poème"]),
      att('Anaphore', "« L'attente était lugubre ; »", "Anaphore : ce passage met en relief poésie du deuil et de la mémoire. — poème n°12 et oriente la lecture vers une tension sensible propre à Hugo.", ["anaphore","hugo","poésie","deuil","mémoire.","poème"]),
    ],
  },
  'GT-625': {
    texte: `muraille de pierres et de meubles ; une poudre noire et épaisse s'étendait sur le dessus ; le créneau exécutait ce salut sinistre des rues en état de siège. Les hommes de l'intérieur se tenaient là, noirs, uniquement voilés par leur chemise blanche, à demi perdus dans la pénombre du matin, et semblaient des spectres qui attendaient le jour pour disparaître. Deux hommes du poste principal, debout dans la tranchée, la lunette au front, et le fusil à la main, se penchaient sur le bord et regardaient au loin le bout de la rue Jean-Pierre-Martyr. L'attente était lugubre ; on n'entendait que le bruit des marteaux des serruriers qui clouaient les portes, ou des gardes nationaux qui allaient ou venaient, ou des sentinelles qui s'interpellaient ; et la ville, effrayée, se taisait dans l'ombre.`,
    contexte: "Roman engagé — misère et rédemption. — chapitre 6.",
    attendus: [
      att('Métaphore', "« muraille de pierres et de meubles ; »", "Métaphore : ce passage met en relief roman engagé — misère et rédemption. — chapitre 6 et oriente la lecture vers une tension sensible propre à Hugo.", ["métaphore","hugo","roman","engagé","misère","rédemption."]),
      att('Antithèse', "« une poudre noire et épaisse s'étendait sur le dessus ; »", "Antithèse : ce passage met en relief roman engagé — misère et rédemption. — chapitre 6 et oriente la lecture vers une tension sensible propre à Hugo.", ["antithèse","hugo","roman","engagé","misère","rédemption."]),
      att('Registre pathétique', "« le créneau exécutait ce salut sinistre des rues en état de siège. »", "Registre pathétique : ce passage met en relief roman engagé — misère et rédemption. — chapitre 6 et oriente la lecture vers une tension sensible propre à Hugo.", ["registre pathétique","hugo","roman","engagé","misère","rédemption."]),
      att('Anaphore', "« L'attente était lugubre ; »", "Anaphore : ce passage met en relief roman engagé — misère et rédemption. — chapitre 6 et oriente la lecture vers une tension sensible propre à Hugo.", ["anaphore","hugo","roman","engagé","misère","rédemption."]),
    ],
  },
  'GT-626': {
    texte: `oudre noire et épaisse s'étendait sur le dessus ; le créneau exécutait ce salut sinistre des rues en état de siège. Les hommes de l'intérieur se tenaient là, noirs, uniquement voilés par leur chemise blanche, à demi perdus dans la pénombre du matin, et semblaient des spectres qui attendaient le jour pour disparaître. Deux hommes du poste principal, debout dans la tranchée, la lunette au front, et le fusil à la main, se penchaient sur le bord et regardaient au loin le bout de la rue Jean-Pierre-Martyr. L'attente était lugubre ; on n'entendait que le bruit des marteaux des serruriers qui clouaient les portes, ou des gardes nationaux qui allaient ou venaient, ou des sentinelles qui s'interpellaient ; et la ville, effrayée, se taisait dans l'ombre.`,
    contexte: "Épopée humaniste du XIXe siècle. — poème n°4.",
    attendus: [
      att('Métaphore', "« oudre noire et épaisse s'étendait sur le dessus ; »", "Métaphore : ce passage met en relief épopée humaniste du xixe siècle. — poème n°4 et oriente la lecture vers une tension sensible propre à Hugo.", ["métaphore","hugo","épopée","humaniste","siècle.","poème"]),
      att('Antithèse', "« le créneau exécutait ce salut sinistre des rues en état de siège. »", "Antithèse : ce passage met en relief épopée humaniste du xixe siècle. — poème n°4 et oriente la lecture vers une tension sensible propre à Hugo.", ["antithèse","hugo","épopée","humaniste","siècle.","poème"]),
      att('Registre pathétique', "« L'attente était lugubre ; »", "Registre pathétique : ce passage met en relief épopée humaniste du xixe siècle. — poème n°4 et oriente la lecture vers une tension sensible propre à Hugo.", ["registre pathétique","hugo","épopée","humaniste","siècle.","poème"]),
      att('Anaphore', "« et la ville, effrayée, se taisait dans l'ombre. »", "Anaphore : ce passage met en relief épopée humaniste du xixe siècle. — poème n°4 et oriente la lecture vers une tension sensible propre à Hugo.", ["anaphore","hugo","épopée","humaniste","siècle.","poème"]),
    ],
  },
  'GT-628': {
    texte: `Ô Vénus ! je le sais, tu veux que je meure.
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Prose poétique — révolte et quête. — poème n°8.",
    attendus: [
      att('Apostrophe', "« Ô Vénus ! je le sais, tu veux que je meure »", "Apostrophe : Phèdre interpelle la déesse et personnifie la fatalité amoureuse — la passion devient une force divine qui la condamne.", ["apostrophe","vénus","fatalité","passion","mort","tragique"]),
      att('Antithèse', "« perdre celui qu'il offense »", "Antithèse entre sauver Phèdre et perdre Hippolyte : Oenone installe le dilemme criminel qui précipitera la catastrophe.", ["antithèse","sauver","perdre","hippolyte","dilemme","catastrophe"]),
      att('Registre tragique', "« Faites-vous jour, ou plût au ciel que le crime / Vous fût inconnu ! »", "Registre tragique : le choix entre aveu et mensonge dépasse les personnages — la fatalité du secret amoureux mène au crime.", ["registre","tragique","crime","aveu","mensonge","fatalité"]),
      att('Dialogue', "« Quel crime ? Est-ce un crime d'aimer ? »", "Dialogue : la question rhétorique de Phèdre oppose passion innocente et loi morale — tension dramatique entre désir et devoir.", ["dialogue","crime","aimer","passion","devoir","tension"]),
    ],
  },
  'GT-629': {
    texte: `e.
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Poésie visionnaire et rupture formelle. — poème n°5.",
    attendus: [
      att('Métaphore', "« OENONE\nMadame, avant que l'on vous atteigne il est temps. »", "Métaphore : ce passage met en relief poésie visionnaire et rupture formelle. — poème n°5 et oriente la lecture vers une tension sensible propre à Rimbaud.", ["métaphore","rimbaud","poésie","visionnaire","rupture","formelle."]),
      att('Antithèse', "« Les prêtres, qu'on offense, chercheront un supplice ; »", "Antithèse : ce passage met en relief poésie visionnaire et rupture formelle. — poème n°5 et oriente la lecture vers une tension sensible propre à Rimbaud.", ["antithèse","rimbaud","poésie","visionnaire","rupture","formelle."]),
      att('Registre pathétique', "« Vos cris, que tous ont crus sortir de votre cervelle,\nOnt fait d'Hippolyte un criminel coupable. »", "Registre pathétique : ce passage met en relief poésie visionnaire et rupture formelle. — poème n°5 et oriente la lecture vers une tension sensible propre à Rimbaud.", ["registre pathétique","rimbaud","poésie","visionnaire","rupture","formelle."]),
      att('Anaphore', "« PHÈDRE\nIl s'est bien débattu contre mon innocence ! »", "Anaphore : ce passage met en relief poésie visionnaire et rupture formelle. — poème n°5 et oriente la lecture vers une tension sensible propre à Rimbaud.", ["anaphore","rimbaud","poésie","visionnaire","rupture","formelle."]),
    ],
  },
  'GT-631': {
    texte: `fense, chercheront un supplice ;
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Fable morale et satire sociale. — poème n°11.",
    attendus: [
      att('Métaphore', "« fense, chercheront un supplice ; »", "Métaphore : ce passage met en relief fable morale et satire sociale. — poème n°11 et oriente la lecture vers une tension sensible propre à La Fontaine.", ["métaphore","la fontaine","fable","morale","satire","sociale."]),
      att('Antithèse', "« Vos cris, que tous ont crus sortir de votre cervelle,\nOnt fait d'Hippolyte un criminel coupable. »", "Antithèse : ce passage met en relief fable morale et satire sociale. — poème n°11 et oriente la lecture vers une tension sensible propre à La Fontaine.", ["antithèse","la fontaine","fable","morale","satire","sociale."]),
      att('Registre pathétique', "« PHÈDRE\nIl s'est bien débattu contre mon innocence ! »", "Registre pathétique : ce passage met en relief fable morale et satire sociale. — poème n°11 et oriente la lecture vers une tension sensible propre à La Fontaine.", ["registre pathétique","la fontaine","fable","morale","satire","sociale."]),
      att('Anaphore', "« OENONE\nMais les bruits en sont forts, et la cour s'en fomente. »", "Anaphore : ce passage met en relief fable morale et satire sociale. — poème n°11 et oriente la lecture vers une tension sensible propre à La Fontaine.", ["anaphore","la fontaine","fable","morale","satire","sociale."]),
    ],
  },
  'GT-633': {
    texte: `lle,
Ont fait d'Hippolyte un criminel coupable.
PHÈDRE
Il s'est bien débattu contre mon innocence !
OENONE
Mais les bruits en sont forts, et la cour s'en fomente.
Faut-il d'un crime obscur affranchir le coupable ?
Faites-vous jour, ou plût au ciel que le crime
Vous fût inconnu !
PHÈDRE
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Roman réaliste — bovarysme et style indirect libre. — chapitre 4.",
    attendus: [
      att('Métaphore', "« lle,\nOnt fait d'Hippolyte un criminel coupable. »", "Métaphore : ce passage met en relief roman réaliste — bovarysme et style indirect libre. — chapitre 4 et oriente la lecture vers une tension sensible propre à Flaubert.", ["métaphore","flaubert","roman","réaliste","bovarysme","style"]),
      att('Antithèse', "« PHÈDRE\nIl s'est bien débattu contre mon innocence ! »", "Antithèse : ce passage met en relief roman réaliste — bovarysme et style indirect libre. — chapitre 4 et oriente la lecture vers une tension sensible propre à Flaubert.", ["antithèse","flaubert","roman","réaliste","bovarysme","style"]),
      att('Registre pathétique', "« OENONE\nMais les bruits en sont forts, et la cour s'en fomente. »", "Registre pathétique : ce passage met en relief roman réaliste — bovarysme et style indirect libre. — chapitre 4 et oriente la lecture vers une tension sensible propre à Flaubert.", ["registre pathétique","flaubert","roman","réaliste","bovarysme","style"]),
      att('Anaphore', "« Faut-il d'un crime obscur affranchir le coupable ? »", "Anaphore : ce passage met en relief roman réaliste — bovarysme et style indirect libre. — chapitre 4 et oriente la lecture vers une tension sensible propre à Flaubert.", ["anaphore","flaubert","roman","réaliste","bovarysme","style"]),
    ],
  },
  'GT-634': {
    texte: `Le Voreux, l'homme semé, redoutable, géant pour ainsi dire, était cramponné à sa veine. Il l'avait épuisée, en fait, il avait commencé à dévorer la roche autour d'elle. Maintenant, dans le beuglement du ventilateur, on entendait les coups sourds de ce travail de bête. Les herses de fonte bavaient des blocs de houille, l'entonnoir avalait des montagnes de charbon, la cage avalait des hommes et rejetait des hommes, sans relâche, avec l'appétit brûlant d'un gosier moulu et qui ne renoncerait qu'à la dernière marée. Et les mineurs montaient, noirs, écrasés, les yeux blancs dans les faces de charbon, courbés sous la fatigue, comme des damnés remontant de l'enfer. La fosse crachait sa besogne, hommes et bêtes confondus dans la nuit du travail.`,
    contexte: "Naturalisme — grève minière et misère. — Dialogue.",
    attendus: [
      att('Métaphore', "« Le Voreux, l'homme semé, redoutable, géant pour ainsi dire, était cramponné à sa veine. »", "Métaphore : ce passage met en relief naturalisme — grève minière et misère. — dialogue et oriente la lecture vers une tension sensible propre à Zola.", ["métaphore","zola","naturalisme","grève","minière","misère."]),
      att('Antithèse', "« Il l'avait épuisée, en fait, il avait commencé à dévorer la roche autour d'elle. »", "Antithèse : ce passage met en relief naturalisme — grève minière et misère. — dialogue et oriente la lecture vers une tension sensible propre à Zola.", ["antithèse","zola","naturalisme","grève","minière","misère."]),
      att('Registre pathétique', "« Maintenant, dans le beuglement du ventilateur, on entendait les coups sourds de ce travail de bête. »", "Registre pathétique : ce passage met en relief naturalisme — grève minière et misère. — dialogue et oriente la lecture vers une tension sensible propre à Zola.", ["registre pathétique","zola","naturalisme","grève","minière","misère."]),
      att('Anaphore', "« La fosse crachait sa besogne, hommes et bêtes confondus dans la nuit du travail. »", "Anaphore : ce passage met en relief naturalisme — grève minière et misère. — dialogue et oriente la lecture vers une tension sensible propre à Zola.", ["anaphore","zola","naturalisme","grève","minière","misère."]),
    ],
  },
  'GT-635': {
    texte: `puisée, en fait, il avait commencé à dévorer la roche autour d'elle. Maintenant, dans le beuglement du ventilateur, on entendait les coups sourds de ce travail de bête. Les herses de fonte bavaient des blocs de houille, l'entonnoir avalait des montagnes de charbon, la cage avalait des hommes et rejetait des hommes, sans relâche, avec l'appétit brûlant d'un gosier moulu et qui ne renoncerait qu'à la dernière marée. Et les mineurs montaient, noirs, écrasés, les yeux blancs dans les faces de charbon, courbés sous la fatigue, comme des damnés remontant de l'enfer. La fosse crachait sa besogne, hommes et bêtes confondus dans la nuit du travail.`,
    contexte: "Naturalisme — grève minière et misère. — chapitre 3.",
    attendus: [
      att('Métaphore', "« puisée, en fait, il avait commencé à dévorer la roche autour d'elle. »", "Métaphore : ce passage met en relief naturalisme — grève minière et misère. — chapitre 3 et oriente la lecture vers une tension sensible propre à Zola.", ["métaphore","zola","naturalisme","grève","minière","misère."]),
      att('Antithèse', "« Maintenant, dans le beuglement du ventilateur, on entendait les coups sourds de ce travail de bête. »", "Antithèse : ce passage met en relief naturalisme — grève minière et misère. — chapitre 3 et oriente la lecture vers une tension sensible propre à Zola.", ["antithèse","zola","naturalisme","grève","minière","misère."]),
      att('Registre pathétique', "« La fosse crachait sa besogne, hommes et bêtes confondus dans la nuit du travail. »", "Registre pathétique : ce passage met en relief naturalisme — grève minière et misère. — chapitre 3 et oriente la lecture vers une tension sensible propre à Zola.", ["registre pathétique","zola","naturalisme","grève","minière","misère."]),
      att('Anaphore', "« puisée, en fait, il avait commencé à dévorer la roche autour d'elle. Maintenant, dans le beuglement »", "Anaphore : ce passage met en relief naturalisme — grève minière et misère. — chapitre 3 et oriente la lecture vers une tension sensible propre à Zola.", ["anaphore","zola","naturalisme","grève","minière","misère."]),
    ],
  },
  'GT-636': {
    texte: `En rentrant dans l'hôtel Vauquer, madame Vauquer trouva dans la salle à manger le père Goriot, accroupi devant le feu, le visage ridé, les mains jointes, la vue fixée sur les bûches du foyer, comme si elles eussent été l'objet de sa pensée. Il entendit le bruit des pas de madame Vauquer, mais ne se retourna pas. — Ma voisine est une femme qui paie sans discuter, dit-il en souriant. — Vous avez raison, monsieur Goriot, répondit la pensionnaire. — Et vous, vous êtes un homme d'affaires, reprit-il. — Non, dit-elle, je suis veuve, et je vis de ma pension. — Ah ! c'est autre chose, fit-il en se levant. Le vieillard avait les cheveux blancs, le front bas, les yeux vitreux, les mains tremblantes ; il portait un habit vert fané, une culotte de coutil blanc, des bas gris et des souliers à boucles.`,
    contexte: "Réalisme — ascension sociale et déclin. — chapitre 2.",
    attendus: [
      att('Métaphore', "« Il entendit le bruit des pas de madame Vauquer, mais ne se retourna pas. »", "Métaphore : ce passage met en relief réalisme — ascension sociale et déclin. — chapitre 2 et oriente la lecture vers une tension sensible propre à Balzac.", ["métaphore","balzac","réalisme","ascension","sociale","déclin."]),
      att('Antithèse', "« — Ma voisine est une femme qui paie sans discuter, dit-il en souriant. »", "Antithèse : ce passage met en relief réalisme — ascension sociale et déclin. — chapitre 2 et oriente la lecture vers une tension sensible propre à Balzac.", ["antithèse","balzac","réalisme","ascension","sociale","déclin."]),
      att('Registre pathétique', "« — Vous avez raison, monsieur Goriot, répondit la pensionnaire. »", "Registre pathétique : ce passage met en relief réalisme — ascension sociale et déclin. — chapitre 2 et oriente la lecture vers une tension sensible propre à Balzac.", ["registre pathétique","balzac","réalisme","ascension","sociale","déclin."]),
      att('Anaphore', "« — Et vous, vous êtes un homme d'affaires, reprit-il. »", "Anaphore : ce passage met en relief réalisme — ascension sociale et déclin. — chapitre 2 et oriente la lecture vers une tension sensible propre à Balzac.", ["anaphore","balzac","réalisme","ascension","sociale","déclin."]),
    ],
  },
  'GT-637': {
    texte: `aut sacrifier pour sauver votre vie.
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Roman psychologique — ambition et hypocrisie. — chapitre 1.",
    attendus: [
      att('Apostrophe', "« Ô Vénus ! je le sais, tu veux que je meure »", "Apostrophe : Phèdre interpelle la déesse et personnifie la fatalité amoureuse — la passion devient une force divine qui la condamne.", ["apostrophe","vénus","fatalité","passion","mort","tragique"]),
      att('Antithèse', "« perdre celui qu'il offense »", "Antithèse entre sauver Phèdre et perdre Hippolyte : Oenone installe le dilemme criminel qui précipitera la catastrophe.", ["antithèse","sauver","perdre","hippolyte","dilemme","catastrophe"]),
      att('Registre tragique', "« Faites-vous jour, ou plût au ciel que le crime / Vous fût inconnu ! »", "Registre tragique : le choix entre aveu et mensonge dépasse les personnages — la fatalité du secret amoureux mène au crime.", ["registre","tragique","crime","aveu","mensonge","fatalité"]),
      att('Dialogue', "« Quel crime ? Est-ce un crime d'aimer ? »", "Dialogue : la question rhétorique de Phèdre oppose passion innocente et loi morale — tension dramatique entre désir et devoir.", ["dialogue","crime","aimer","passion","devoir","tension"]),
    ],
  },
  'GT-638': {
    texte: `Aujourd'hui, maman est morte. Ou peut-être hier, je ne sais pas. J'ai reçu un télégramme de l'asile : « Mère décédée. Enterrement demain. Sentiments distingués. » Cela ne veut rien dire. C'était peut-être hier. L'asile de vieillards est à Marengo, à quatre-vingts kilomètres d'Alger. Je prendrai l'autobus à deux heures et j'arriverai dans l'après-midi. Ainsi, je pourrai veiller, et je rentrerai à Alger demain soir. J'ai demandé deux jours de congé à mon patron et je ne peux pas lui refuser avec une excuse comme ça. Ça ne sera pas de ma faute si maman est enterrée vendredi plutôt qu'aujourd'hui, c'est-à-dire si je suis là pour l'enterrement. Mais ce soir j'ai demandé à l'employée de la morgue si on pouvait fermer la bière ; on m'a dit que oui et que c'était comme ça qu'on faisait habituellement. Il faisait très chaud.`,
    contexte: "Absurde — indifférence et condamnation. — chapitre 4.",
    attendus: [
      att('Métaphore', "« Aujourd'hui, maman est morte. »", "Métaphore : ce passage met en relief absurde — indifférence et condamnation. — chapitre 4 et oriente la lecture vers une tension sensible propre à Camus.", ["métaphore","camus","absurde","indifférence","condamnation.","chapitre"]),
      att('Antithèse', "« Ou peut-être hier, je ne sais pas. »", "Antithèse : ce passage met en relief absurde — indifférence et condamnation. — chapitre 4 et oriente la lecture vers une tension sensible propre à Camus.", ["antithèse","camus","absurde","indifférence","condamnation.","chapitre"]),
      att('Registre pathétique', "« J'ai reçu un télégramme de l'asile : »", "Registre pathétique : ce passage met en relief absurde — indifférence et condamnation. — chapitre 4 et oriente la lecture vers une tension sensible propre à Camus.", ["registre pathétique","camus","absurde","indifférence","condamnation.","chapitre"]),
      att('Anaphore', "« Sentiments distingués. »", "Anaphore : ce passage met en relief absurde — indifférence et condamnation. — chapitre 4 et oriente la lecture vers une tension sensible propre à Camus.", ["anaphore","camus","absurde","indifférence","condamnation.","chapitre"]),
    ],
  },
  'GT-640': {
    texte: `e il est temps.
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Symbolisme — sensualité et rêve. — poème n°8.",
    attendus: [
      att('Métaphore', "« Les prêtres, qu'on offense, chercheront un supplice ; »", "Métaphore : ce passage met en relief symbolisme — sensualité et rêve. — poème n°8 et oriente la lecture vers une tension sensible propre à Mallarmé.", ["métaphore","mallarmé","symbolisme","sensualité","rêve.","poème"]),
      att('Antithèse', "« Vos cris, que tous ont crus sortir de votre cervelle,\nOnt fait d'Hippolyte un criminel coupable. »", "Antithèse : ce passage met en relief symbolisme — sensualité et rêve. — poème n°8 et oriente la lecture vers une tension sensible propre à Mallarmé.", ["antithèse","mallarmé","symbolisme","sensualité","rêve.","poème"]),
      att('Registre pathétique', "« PHÈDRE\nIl s'est bien débattu contre mon innocence ! »", "Registre pathétique : ce passage met en relief symbolisme — sensualité et rêve. — poème n°8 et oriente la lecture vers une tension sensible propre à Mallarmé.", ["registre pathétique","mallarmé","symbolisme","sensualité","rêve.","poème"]),
      att('Anaphore', "« OENONE\nMais les bruits en sont forts, et la cour s'en fomente. »", "Anaphore : ce passage met en relief symbolisme — sensualité et rêve. — poème n°8 et oriente la lecture vers une tension sensible propre à Mallarmé.", ["anaphore","mallarmé","symbolisme","sensualité","rêve.","poème"]),
    ],
  },
  'GT-641': {
    texte: `e, chercheront un supplice ;
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Poème dialogué — quête artistique. — poème n°2.",
    attendus: [
      att('Métaphore', "« e, chercheront un supplice ; »", "Métaphore : ce passage met en relief poème dialogué — quête artistique. — poème n°2 et oriente la lecture vers une tension sensible propre à Musset.", ["métaphore","musset","poème","dialogué","quête","artistique."]),
      att('Antithèse', "« Vos cris, que tous ont crus sortir de votre cervelle,\nOnt fait d'Hippolyte un criminel coupable. »", "Antithèse : ce passage met en relief poème dialogué — quête artistique. — poème n°2 et oriente la lecture vers une tension sensible propre à Musset.", ["antithèse","musset","poème","dialogué","quête","artistique."]),
      att('Registre pathétique', "« PHÈDRE\nIl s'est bien débattu contre mon innocence ! »", "Registre pathétique : ce passage met en relief poème dialogué — quête artistique. — poème n°2 et oriente la lecture vers une tension sensible propre à Musset.", ["registre pathétique","musset","poème","dialogué","quête","artistique."]),
      att('Anaphore', "« OENONE\nMais les bruits en sont forts, et la cour s'en fomente. »", "Anaphore : ce passage met en relief poème dialogué — quête artistique. — poème n°2 et oriente la lecture vers une tension sensible propre à Musset.", ["anaphore","musset","poème","dialogué","quête","artistique."]),
    ],
  },
  'GT-642': {
    texte: `e tous ont crus sortir de votre cervelle,
Ont fait d'Hippolyte un criminel coupable.
PHÈDRE
Il s'est bien débattu contre mon innocence !
OENONE
Mais les bruits en sont forts, et la cour s'en fomente.
Faut-il d'un crime obscur affranchir le coupable ?
Faites-vous jour, ou plût au ciel que le crime
Vous fût inconnu !
PHÈDRE
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Renaissance — célébration et éphémère. — poème n°1.",
    attendus: [
      att('Métaphore', "« e tous ont crus sortir de votre cervelle,\nOnt fait d'Hippolyte un criminel coupable. »", "Métaphore : ce passage met en relief renaissance — célébration et éphémère. — poème n°1 et oriente la lecture vers une tension sensible propre à Ronsard.", ["métaphore","ronsard","renaissance","célébration","éphémère.","poème"]),
      att('Antithèse', "« PHÈDRE\nIl s'est bien débattu contre mon innocence ! »", "Antithèse : ce passage met en relief renaissance — célébration et éphémère. — poème n°1 et oriente la lecture vers une tension sensible propre à Ronsard.", ["antithèse","ronsard","renaissance","célébration","éphémère.","poème"]),
      att('Registre pathétique', "« OENONE\nMais les bruits en sont forts, et la cour s'en fomente. »", "Registre pathétique : ce passage met en relief renaissance — célébration et éphémère. — poème n°1 et oriente la lecture vers une tension sensible propre à Ronsard.", ["registre pathétique","ronsard","renaissance","célébration","éphémère.","poème"]),
      att('Anaphore', "« Faut-il d'un crime obscur affranchir le coupable ? »", "Anaphore : ce passage met en relief renaissance — célébration et éphémère. — poème n°1 et oriente la lecture vers une tension sensible propre à Ronsard.", ["anaphore","ronsard","renaissance","célébration","éphémère.","poème"]),
    ],
  },
  'GT-644': {
    texte: `puis-je à la fois prendre ou bien laisser la vie !
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Autobiographie — singularité du moi et prétention à la sincérité absolue.",
    attendus: [
      att('Apostrophe', "« Ô Vénus ! je le sais, tu veux que je meure »", "Apostrophe : Phèdre interpelle la déesse et personnifie la fatalité amoureuse — la passion devient une force divine qui la condamne.", ["apostrophe","vénus","fatalité","passion","mort","tragique"]),
      att('Antithèse', "« perdre celui qu'il offense »", "Antithèse entre sauver Phèdre et perdre Hippolyte : Oenone installe le dilemme criminel qui précipitera la catastrophe.", ["antithèse","sauver","perdre","hippolyte","dilemme","catastrophe"]),
      att('Registre tragique', "« Faites-vous jour, ou plût au ciel que le crime / Vous fût inconnu ! »", "Registre tragique : le choix entre aveu et mensonge dépasse les personnages — la fatalité du secret amoureux mène au crime.", ["registre","tragique","crime","aveu","mensonge","fatalité"]),
      att('Dialogue', "« Quel crime ? Est-ce un crime d'aimer ? »", "Dialogue : la question rhétorique de Phèdre oppose passion innocente et loi morale — tension dramatique entre désir et devoir.", ["dialogue","crime","aimer","passion","devoir","tension"]),
    ],
  },
  'GT-645': {
    texte: `la vie !
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Romantisme — révolte féminine. — Portrait du personnage.",
    attendus: [
      att('Apostrophe', "« Ô Vénus ! je le sais, tu veux que je meure »", "Apostrophe : Phèdre interpelle la déesse et personnifie la fatalité amoureuse — la passion devient une force divine qui la condamne.", ["apostrophe","vénus","fatalité","passion","mort","tragique"]),
      att('Antithèse', "« perdre celui qu'il offense »", "Antithèse entre sauver Phèdre et perdre Hippolyte : Oenone installe le dilemme criminel qui précipitera la catastrophe.", ["antithèse","sauver","perdre","hippolyte","dilemme","catastrophe"]),
      att('Registre tragique', "« Faites-vous jour, ou plût au ciel que le crime / Vous fût inconnu ! »", "Registre tragique : le choix entre aveu et mensonge dépasse les personnages — la fatalité du secret amoureux mène au crime.", ["registre","tragique","crime","aveu","mensonge","fatalité"]),
      att('Dialogue', "« Quel crime ? Est-ce un crime d'aimer ? »", "Dialogue : la question rhétorique de Phèdre oppose passion innocente et loi morale — tension dramatique entre désir et devoir.", ["dialogue","crime","aimer","passion","devoir","tension"]),
    ],
  },
  'GT-646': {
    texte: `spoir vous saisir ?
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Roman champêtre — nature et amour. — Ouverture / incipit.",
    attendus: [
      att('Apostrophe', "« Ô Vénus ! je le sais, tu veux que je meure »", "Apostrophe : Phèdre interpelle la déesse et personnifie la fatalité amoureuse — la passion devient une force divine qui la condamne.", ["apostrophe","vénus","fatalité","passion","mort","tragique"]),
      att('Antithèse', "« perdre celui qu'il offense »", "Antithèse entre sauver Phèdre et perdre Hippolyte : Oenone installe le dilemme criminel qui précipitera la catastrophe.", ["antithèse","sauver","perdre","hippolyte","dilemme","catastrophe"]),
      att('Registre tragique', "« Faites-vous jour, ou plût au ciel que le crime / Vous fût inconnu ! »", "Registre tragique : le choix entre aveu et mensonge dépasse les personnages — la fatalité du secret amoureux mène au crime.", ["registre","tragique","crime","aveu","mensonge","fatalité"]),
      att('Dialogue', "« Quel crime ? Est-ce un crime d'aimer ? »", "Dialogue : la question rhétorique de Phèdre oppose passion innocente et loi morale — tension dramatique entre désir et devoir.", ["dialogue","crime","aimer","passion","devoir","tension"]),
    ],
  },
  'GT-647': {
    texte: `sacrifier pour sauver votre vie.
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Modernité — libération poétique. — poème n°3.",
    attendus: [
      att('Apostrophe', "« Ô Vénus ! je le sais, tu veux que je meure »", "Apostrophe : Phèdre interpelle la déesse et personnifie la fatalité amoureuse — la passion devient une force divine qui la condamne.", ["apostrophe","vénus","fatalité","passion","mort","tragique"]),
      att('Antithèse', "« perdre celui qu'il offense »", "Antithèse entre sauver Phèdre et perdre Hippolyte : Oenone installe le dilemme criminel qui précipitera la catastrophe.", ["antithèse","sauver","perdre","hippolyte","dilemme","catastrophe"]),
      att('Registre tragique', "« Faites-vous jour, ou plût au ciel que le crime / Vous fût inconnu ! »", "Registre tragique : le choix entre aveu et mensonge dépasse les personnages — la fatalité du secret amoureux mène au crime.", ["registre","tragique","crime","aveu","mensonge","fatalité"]),
      att('Dialogue', "« Quel crime ? Est-ce un crime d'aimer ? »", "Dialogue : la question rhétorique de Phèdre oppose passion innocente et loi morale — tension dramatique entre désir et devoir.", ["dialogue","crime","aimer","passion","devoir","tension"]),
    ],
  },
  'GT-649': {
    texte: `E
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Registre oral — désespoir et guerre. — Ouverture / incipit.",
    attendus: [
      att('Métaphore', "« E\nMadame, avant que l'on vous atteigne il est temps. »", "Métaphore : ce passage met en relief registre oral — désespoir et guerre. — ouverture / incipit et oriente la lecture vers une tension sensible propre à Céline.", ["métaphore","céline","registre","désespoir","guerre.","ouverture"]),
      att('Antithèse', "« Les prêtres, qu'on offense, chercheront un supplice ; »", "Antithèse : ce passage met en relief registre oral — désespoir et guerre. — ouverture / incipit et oriente la lecture vers une tension sensible propre à Céline.", ["antithèse","céline","registre","désespoir","guerre.","ouverture"]),
      att('Registre pathétique', "« Vos cris, que tous ont crus sortir de votre cervelle,\nOnt fait d'Hippolyte un criminel coupable. »", "Registre pathétique : ce passage met en relief registre oral — désespoir et guerre. — ouverture / incipit et oriente la lecture vers une tension sensible propre à Céline.", ["registre pathétique","céline","registre","désespoir","guerre.","ouverture"]),
      att('Anaphore', "« PHÈDRE\nIl s'est bien débattu contre mon innocence ! »", "Anaphore : ce passage met en relief registre oral — désespoir et guerre. — ouverture / incipit et oriente la lecture vers une tension sensible propre à Céline.", ["anaphore","céline","registre","désespoir","guerre.","ouverture"]),
    ],
  },
  'GT-651': {
    texte: `hercheront un supplice ;
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Roman épistolaire — manipulation. — Scène clé.",
    attendus: [
      att('Métaphore', "« hercheront un supplice ; »", "Métaphore : ce passage met en relief roman épistolaire — manipulation. — scène clé et oriente la lecture vers une tension sensible propre à Laclos.", ["métaphore","laclos","roman","épistolaire","manipulation.","scène"]),
      att('Antithèse', "« Vos cris, que tous ont crus sortir de votre cervelle,\nOnt fait d'Hippolyte un criminel coupable. »", "Antithèse : ce passage met en relief roman épistolaire — manipulation. — scène clé et oriente la lecture vers une tension sensible propre à Laclos.", ["antithèse","laclos","roman","épistolaire","manipulation.","scène"]),
      att('Registre pathétique', "« PHÈDRE\nIl s'est bien débattu contre mon innocence ! »", "Registre pathétique : ce passage met en relief roman épistolaire — manipulation. — scène clé et oriente la lecture vers une tension sensible propre à Laclos.", ["registre pathétique","laclos","roman","épistolaire","manipulation.","scène"]),
      att('Anaphore', "« OENONE\nMais les bruits en sont forts, et la cour s'en fomente. »", "Anaphore : ce passage met en relief roman épistolaire — manipulation. — scène clé et oriente la lecture vers une tension sensible propre à Laclos.", ["anaphore","laclos","roman","épistolaire","manipulation.","scène"]),
    ],
  },
  'GT-652': {
    texte: `us ont crus sortir de votre cervelle,
Ont fait d'Hippolyte un criminel coupable.
PHÈDRE
Il s'est bien débattu contre mon innocence !
OENONE
Mais les bruits en sont forts, et la cour s'en fomente.
Faut-il d'un crime obscur affranchir le coupable ?
Faites-vous jour, ou plût au ciel que le crime
Vous fût inconnu !
PHÈDRE
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Fantastique — statue meurtrière. — Ouverture / incipit.",
    attendus: [
      att('Métaphore', "« us ont crus sortir de votre cervelle,\nOnt fait d'Hippolyte un criminel coupable. »", "Métaphore : ce passage met en relief fantastique — statue meurtrière. — ouverture / incipit et oriente la lecture vers une tension sensible propre à Mérimée.", ["métaphore","mérimée","fantastique","statue","meurtrière.","ouverture"]),
      att('Antithèse', "« PHÈDRE\nIl s'est bien débattu contre mon innocence ! »", "Antithèse : ce passage met en relief fantastique — statue meurtrière. — ouverture / incipit et oriente la lecture vers une tension sensible propre à Mérimée.", ["antithèse","mérimée","fantastique","statue","meurtrière.","ouverture"]),
      att('Registre pathétique', "« OENONE\nMais les bruits en sont forts, et la cour s'en fomente. »", "Registre pathétique : ce passage met en relief fantastique — statue meurtrière. — ouverture / incipit et oriente la lecture vers une tension sensible propre à Mérimée.", ["registre pathétique","mérimée","fantastique","statue","meurtrière.","ouverture"]),
      att('Anaphore', "« Faut-il d'un crime obscur affranchir le coupable ? »", "Anaphore : ce passage met en relief fantastique — statue meurtrière. — ouverture / incipit et oriente la lecture vers une tension sensible propre à Mérimée.", ["anaphore","mérimée","fantastique","statue","meurtrière.","ouverture"]),
    ],
  },
  'GT-653': {
    texte: `fait d'Hippolyte un criminel coupable.
PHÈDRE
Il s'est bien débattu contre mon innocence !
OENONE
Mais les bruits en sont forts, et la cour s'en fomente.
Faut-il d'un crime obscur affranchir le coupable ?
Faites-vous jour, ou plût au ciel que le crime
Vous fût inconnu !
PHÈDRE
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Poésie — méditation et pensée. — poème n°4.",
    attendus: [
      att('Métaphore', "« fait d'Hippolyte un criminel coupable. »", "Métaphore : ce passage met en relief poésie — méditation et pensée. — poème n°4 et oriente la lecture vers une tension sensible propre à Valéry.", ["métaphore","valéry","poésie","méditation","pensée.","poème"]),
      att('Antithèse', "« PHÈDRE\nIl s'est bien débattu contre mon innocence ! »", "Antithèse : ce passage met en relief poésie — méditation et pensée. — poème n°4 et oriente la lecture vers une tension sensible propre à Valéry.", ["antithèse","valéry","poésie","méditation","pensée.","poème"]),
      att('Registre pathétique', "« OENONE\nMais les bruits en sont forts, et la cour s'en fomente. »", "Registre pathétique : ce passage met en relief poésie — méditation et pensée. — poème n°4 et oriente la lecture vers une tension sensible propre à Valéry.", ["registre pathétique","valéry","poésie","méditation","pensée.","poème"]),
      att('Anaphore', "« Faut-il d'un crime obscur affranchir le coupable ? »", "Anaphore : ce passage met en relief poésie — méditation et pensée. — poème n°4 et oriente la lecture vers une tension sensible propre à Valéry.", ["anaphore","valéry","poésie","méditation","pensée.","poème"]),
    ],
  },
  'GT-655': {
    texte: `vie !
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Jeunesse poétique — Le Dormeur du val. — poème n°6.",
    attendus: [
      att('Apostrophe', "« Ô Vénus ! je le sais, tu veux que je meure »", "Apostrophe : Phèdre interpelle la déesse et personnifie la fatalité amoureuse — la passion devient une force divine qui la condamne.", ["apostrophe","vénus","fatalité","passion","mort","tragique"]),
      att('Antithèse', "« perdre celui qu'il offense »", "Antithèse entre sauver Phèdre et perdre Hippolyte : Oenone installe le dilemme criminel qui précipitera la catastrophe.", ["antithèse","sauver","perdre","hippolyte","dilemme","catastrophe"]),
      att('Registre tragique', "« Faites-vous jour, ou plût au ciel que le crime / Vous fût inconnu ! »", "Registre tragique : le choix entre aveu et mensonge dépasse les personnages — la fatalité du secret amoureux mène au crime.", ["registre","tragique","crime","aveu","mensonge","fatalité"]),
      att('Dialogue', "« Quel crime ? Est-ce un crime d'aimer ? »", "Dialogue : la question rhétorique de Phèdre oppose passion innocente et loi morale — tension dramatique entre désir et devoir.", ["dialogue","crime","aimer","passion","devoir","tension"]),
    ],
  },
  'GT-656': {
    texte: `cle
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
    contexte: "Poèmes en prose — modernité urbaine. — poème n°2.",
    attendus: [
      att('Métaphore', "« cle Sur l'esprit en gémissant proie, Et que de l'horizon embrassant tout l'ennui Vient vers nous »", "Métaphore : ce passage met en relief poèmes en prose — modernité urbaine. — poème n°2 et oriente la lecture vers une tension sensible propre à Baudelaire.", ["métaphore","baudelaire","poèmes","prose","modernité","urbaine."]),
      att('Antithèse', "« tout l'ennui Vient vers nous verser un long goutteron noir ; Quand la terre est changée »", "Antithèse : ce passage met en relief poèmes en prose — modernité urbaine. — poème n°2 et oriente la lecture vers une tension sensible propre à Baudelaire.", ["antithèse","baudelaire","poèmes","prose","modernité","urbaine."]),
      att('Registre pathétique', "« Quand la terre est changée en un cachot humide, Où l'Espérance, agitée par des chauves-souris, Bat »", "Registre pathétique : ce passage met en relief poèmes en prose — modernité urbaine. — poème n°2 et oriente la lecture vers une tension sensible propre à Baudelaire.", ["registre pathétique","baudelaire","poèmes","prose","modernité","urbaine."]),
      att('Anaphore', "« agitée par des chauves-souris, Bat ses craintives ailes à nos cépaux, Et tombe un ciel livide »", "Anaphore : ce passage met en relief poèmes en prose — modernité urbaine. — poème n°2 et oriente la lecture vers une tension sensible propre à Baudelaire.", ["anaphore","baudelaire","poèmes","prose","modernité","urbaine."]),
    ],
  },
  'GT-657': {
    texte: `omme semé, redoutable, géant pour ainsi dire, était cramponné à sa veine. Il l'avait épuisée, en fait, il avait commencé à dévorer la roche autour d'elle. Maintenant, dans le beuglement du ventilateur, on entendait les coups sourds de ce travail de bête. Les herses de fonte bavaient des blocs de houille, l'entonnoir avalait des montagnes de charbon, la cage avalait des hommes et rejetait des hommes, sans relâche, avec l'appétit brûlant d'un gosier moulu et qui ne renoncerait qu'à la dernière marée. Et les mineurs montaient, noirs, écrasés, les yeux blancs dans les faces de charbon, courbés sous la fatigue, comme des damnés remontant de l'enfer. La fosse crachait sa besogne, hommes et bêtes confondus dans la nuit du travail.`,
    contexte: "Pamphlet — dénonciation des fausses preuves (affaire Dreyfus).",
    attendus: [
      att('Métaphore', "« omme semé, redoutable, géant pour ainsi dire, était cramponné à sa veine. »", "Métaphore : ce passage met en relief pamphlet — dénonciation des fausses preuves (affaire dreyfus) et oriente la lecture vers une tension sensible propre à Zola.", ["métaphore","zola","pamphlet","dénonciation","fausses","preuves"]),
      att('Antithèse', "« Il l'avait épuisée, en fait, il avait commencé à dévorer la roche autour d'elle. »", "Antithèse : ce passage met en relief pamphlet — dénonciation des fausses preuves (affaire dreyfus) et oriente la lecture vers une tension sensible propre à Zola.", ["antithèse","zola","pamphlet","dénonciation","fausses","preuves"]),
      att('Registre pathétique', "« Maintenant, dans le beuglement du ventilateur, on entendait les coups sourds de ce travail de bête. »", "Registre pathétique : ce passage met en relief pamphlet — dénonciation des fausses preuves (affaire dreyfus) et oriente la lecture vers une tension sensible propre à Zola.", ["registre pathétique","zola","pamphlet","dénonciation","fausses","preuves"]),
      att('Anaphore', "« La fosse crachait sa besogne, hommes et bêtes confondus dans la nuit du travail. »", "Anaphore : ce passage met en relief pamphlet — dénonciation des fausses preuves (affaire dreyfus) et oriente la lecture vers une tension sensible propre à Zola.", ["anaphore","zola","pamphlet","dénonciation","fausses","preuves"]),
    ],
  },
  'GT-658': {
    texte: `e à manger le père Goriot, accroupi devant le feu, le visage ridé, les mains jointes, la vue fixée sur les bûches du foyer, comme si elles eussent été l'objet de sa pensée. Il entendit le bruit des pas de madame Vauquer, mais ne se retourna pas. — Ma voisine est une femme qui paie sans discuter, dit-il en souriant. — Vous avez raison, monsieur Goriot, répondit la pensionnaire. — Et vous, vous êtes un homme d'affaires, reprit-il. — Non, dit-elle, je suis veuve, et je vis de ma pension. — Ah ! c'est autre chose, fit-il en se levant. Le vieillard avait les cheveux blancs, le front bas, les yeux vitreux, les mains tremblantes ; il portait un habit vert fané, une culotte de coutil blanc, des bas gris et des souliers à boucles.`,
    contexte: "Réalisme — avarice et province. — Ouverture / incipit.",
    attendus: [
      att('Métaphore', "« Il entendit le bruit des pas de madame Vauquer, mais ne se retourna pas. »", "Métaphore : ce passage met en relief réalisme — avarice et province. — ouverture / incipit et oriente la lecture vers une tension sensible propre à Balzac.", ["métaphore","balzac","réalisme","avarice","province.","ouverture"]),
      att('Antithèse', "« — Ma voisine est une femme qui paie sans discuter, dit-il en souriant. »", "Antithèse : ce passage met en relief réalisme — avarice et province. — ouverture / incipit et oriente la lecture vers une tension sensible propre à Balzac.", ["antithèse","balzac","réalisme","avarice","province.","ouverture"]),
      att('Registre pathétique', "« — Vous avez raison, monsieur Goriot, répondit la pensionnaire. »", "Registre pathétique : ce passage met en relief réalisme — avarice et province. — ouverture / incipit et oriente la lecture vers une tension sensible propre à Balzac.", ["registre pathétique","balzac","réalisme","avarice","province.","ouverture"]),
      att('Anaphore', "« — Et vous, vous êtes un homme d'affaires, reprit-il. »", "Anaphore : ce passage met en relief réalisme — avarice et province. — ouverture / incipit et oriente la lecture vers une tension sensible propre à Balzac.", ["anaphore","balzac","réalisme","avarice","province.","ouverture"]),
    ],
  },
  'GT-661': {
    texte: `PHÈDRE
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
Je laisse à l'univers un exemple à chérir.`,
    contexte: "Tragédie de la passion transgressive et du devoir. — Acte 3, scène 7.",
    attendus: [
      att('Antithèse', "« triomphantes de crime » / « rougit de rien »", "Antithèse : Phèdre se distingue des criminelles impénitentes — conscience morale tragique.", ["antithèse","crime","honte","conscience","pénitence","femmes"]),
      att('Registre tragique', "« Le ciel a mis en moi toute l'horreur du crime »", "Registre tragique : la passion est vécue comme faute cosmique et divine.", ["tragique","ciel","horreur","crime","faute","divine"]),
      att('Métaphore', "« La honte la plus noire a couvert mon visage »", "Métaphore : la honte devient voile physique — incarnation de la culpabilité.", ["métaphore","honte","visage","culpabilité","noire","voile"]),
      att('Apostrophe', "« je laisse à l'univers un exemple à chérir »", "Apostrophe implicite au monde : Phèdre veut transformer sa mort en leçon morale.", ["apostrophe","univers","exemple","mort","leçon","morale"]),
    ],
  },
  'GT-662': {
    texte: `PHÈDRE
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
Ce fils de Thésée et de la reine Amazonienne.`,
    contexte: "Tragédie de la passion transgressive et du devoir. — Acte 4, scène 5.",
    attendus: [
      att('Registre pathétique', "« Je sens que je me meurs »", "Registre pathétique : l'agonie de Phèdre suscite pitié — aveu contraint par la mort.", ["pathétique","meurs","agonie","pitié","aveu","mort"]),
      att('Antithèse', "« je rougis, je pâlis »", "Antithèse rougir/pâlir : le corps trahit la passion que la parole dissimule.", ["antithèse","rougis","pâlis","corps","passion","trahison"]),
      att('Hyperbole', "« Je brûle »", "Hyperbole : la passion devient souffrance physique — intensité du désir transgressif.", ["hyperbole","brûle","passion","souffrance","désir","intensité"]),
      att('Métaphore', "« Un trouble s'élève en mon âme incertaine »", "Métaphore : l'âme devient champ de bataille — conflit intérieur tragique.", ["métaphore","trouble","âme","incertaine","conflit","intérieur"]),
    ],
  },
  'GT-664': {
    texte: `HERMIONE
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
Devant cette ingrate, aux yeux de qui je pleure.`,
    contexte: "Tragédie de la fidélité et de la jalousie. — Acte 1, scène 8.",
    attendus: [
      att('Anaphore', "« Hector ! Hector toujours ! »", "Anaphore : Hermione martèle le nom du rival mort — jalousie obsessionnelle.", ["anaphore","hector","jalousie","obsession","rival","martèle"]),
      att('Registre tragique', "« J'ai fait égorger son fils devant ses yeux »", "Registre tragique : la violence extrême traduit la jalousie comme force destructrice.", ["tragique","égorger","violence","jalousie","destructrice","fils"]),
      att('Hyperbole', "« Ai-je donc épuisé toute ma violence ? »", "Hyperbole : Hermione pousse sa fureur au-delà du vraisemblable — excès passionnel.", ["hyperbole","violence","fureur","excès","passion","hermione"]),
      att('Antithèse', "« Aime Pyrrhus, ou qu'elle périsse avec lui »", "Antithèse amour/mort : ultimatum tragique qui condamne Andromaque.", ["antithèse","aime","périsse","ultimatum","mort","amour"]),
    ],
  },
  'GT-666': {
    texte: `PYRRHUS
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
Que le tombeau, et l'ombre, et le souvenir des morts.`,
    contexte: "Tragédie de la fidélité et de la jalousie. — Acte 3, scène 4.",
    attendus: [
      att('Dialogue', "« Quel prix exigez-vous donc ? »", "Dialogue : Pyrrhus négocie avec Andromaque — tension entre amour et devoir maternel.", ["dialogue","prix","négociation","pyrrhus","devoir","maternel"]),
      att('Registre pathétique', "« Laissez-moi pleurer Hector »", "Registre pathétique : Andromaque refuse la vie sans fidélité au mort — deuil comme valeur suprême.", ["pathétique","pleurer","hector","deuil","fidélité","mort"]),
      att('Antithèse', "« Sauver mon fils ! Hélas ! il est déjà trop tard »", "Antithèse entre espoir et désespoir : la maternité piégée par la politique.", ["antithèse","sauver","tard","maternité","désespoir","politique"]),
      att('Métaphore', "« le tombeau, et l'ombre, et le souvenir des morts »", "Métaphore : la fidélité se confond avec la mort — amour impossible du vivant.", ["métaphore","tombeau","ombre","souvenir","morts","fidélité"]),
    ],
  },
  'GT-667': {
    texte: `ORESTE
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
J'ai tout tenté pour plaire, et tout m'est devenu crime.`,
    contexte: "Tragédie de la fidélité et de la jalousie. — Acte 4, scène 2.",
    attendus: [
      att('Antithèse', "« Je l'aime, et pourtant je la hais »", "Antithèse amour/haine : Oreste condense le trouble passionnel de la jalousie.", ["antithèse","aime","hais","oreste","trouble","passion"]),
      att('Énumération', "« Partout je la poursuis, et partout je la fuis »", "Énumération des mouvements contradictoires — errance du personnage éperdu.", ["énumération","poursuis","fuis","errance","contradiction","éperdu"]),
      att('Registre lyrique', "« Ne peut lui donner rien que des soupirs et des larmes »", "Registre lyrique : subjectivité amoureuse et impuissance du héros.", ["lyrique","soupirs","larmes","impuissance","amour","héros"]),
      att('Apostrophe', "« Qu'ai-je donc fait ? Quel crime ai-je commis contre elle ? »", "Apostrophe : Oreste s'interroge — conscience tragique avant le crime.", ["apostrophe","crime","conscience","interrogation","oreste","tragique"]),
    ],
  },
  'GT-668': {
    texte: `TITUS
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
L'empire a des devoirs que l'amour ne peut rompre.`,
    contexte: "Tragédie du renoncement amoureux. — Acte 1, scène 2.",
    attendus: [
      att('Antithèse', "« l'empire a des devoirs que l'amour ne peut rompre »", "Antithèse amour/devoir : Titus pose la loi politique qui structure la tragédie du renoncement.", ["antithèse","empire","devoirs","amour","renoncement","politique"]),
      att('Anaphore', "« il faut que je règne »", "Anaphore sur « il faut » : martèle la nécessité du devoir impérial.", ["anaphore","il faut","règne","devoir","impérial","nécessité"]),
      att('Registre tragique', "« il faut que je vous dise en mourant »", "Registre tragique : Antiochus annonce sa mort — fatalité du renoncement amoureux.", ["tragique","mourant","antiochus","fatalité","mort","renoncement"]),
      att('Dialogue', "« Antiochus, il faut que nous nous séparions »", "Dialogue : Titus tranche le conflit — scène de rupture entre amitié et politique.", ["dialogue","séparions","titus","rupture","amitié","politique"]),
    ],
  },
  'GT-669': {
    texte: `THÉRAMÈNE
C'en est fait. Hippolyte expirant nous a confiés
L'horreur du désespoir qui l'a précipité.
Son déplorable sort va vous être raconté.
Les flots se sont apaisés ; un calme sans nuages
A succédé aux bruits dont le vent gémissait.
Hippolyte, maître encor de ses premiers courages,
S'élance sur son char, dont le bruit retentit.
D'un cri les matelots, les pilotins grelottants,
Sont comme frappés morts au bruit de ces sanglots.
L'oreille en est glacée ; et moi-même, en tremblant,
D'un trouble qu'à défaut de sang mon cœur n'admet pas,
Je sens mes cheveux se dresser sur ma tête altérée.
Un monstre sort des flots, et de son large museau
Souille l'air de vapeurs infectes et sanglantes.
Le ciel avec horreur voit ce monstre en furie
S'élancer sur le prince, et d'un coup l'entraîner
Dans le fond de l'abîme.`,
    contexte: "Tragédie de l'honneur et de l'amour. — Acte 1, scène 10.",
    attendus: [
      att('Registre épique', "« Un monstre sort des flots »", "Registre épique : le récit amplifie la catastrophe en scène héroïque — le monstre marin élève le drame au niveau mythologique.", ["épique","monstre","flots","héroïque","mythologique","catastrophe"]),
      att('Hyperbole', "« Je sens mes cheveux se dresser sur ma tête altérée »", "Hyperbole : Théramène exagère sa terreur pour transmettre l'horreur du spectacle au spectateur.", ["hyperbole","cheveux","terreur","horreur","spectateur","exagération"]),
      att('Registre pathétique', "« L'horreur du désespoir qui l'a précipité »", "Registre pathétique : le récit suscite compassion pour Hippolyte innocent victime de la fatalité amoureuse.", ["pathétique","désespoir","compassion","innocent","fatalité","victime"]),
      att('Gradation', "« Les flots se sont apaisés »", "Gradation : le calme trompeur précède l'apparition du monstre — intensité croissante qui dramatise la mort du héros.", ["gradation","calme","flots","monstre","intensité","mort"]),
    ],
  },
  'GT-670': {
    texte: `CHIMÈNE
Que je sens de rudes combats !
La passion oppose à mes vœux
Dans mon ardent amour pour vous
Mon ardeur pour la gloire de mon père.
Mon père occupe tout ce que je dois adorer :
Je lui dois mes respects, ma haine et ma vengeance ;
Et pour vous, dont j'admire et que j'ose espérer,
Mon cœur, par un devoir, s'oppose à ma tendance.
Il m'ordonne de haïr ; et moi, cruel obstacle,
Je sens qu'en dépit de l'effort que j'ai fait,
Je ne haïrai point un amant qu'il souhaite
Que j'aie à son tour, mon cher Rodrigue, du bien.
Puisque, malgré moi, je l'aime, et qu'enfin je le pleure,
Faites qu'au moins Rodrigue meure de ma main ;
Je vous en conjure, et pour prix de mes larmes,
Donnez-moi cette mort que je vous demande en pleurant.`,
    contexte: "Tragédie de l'honneur et de l'amour. — Acte 2, scène 8.",
    attendus: [
      att('Antithèse', "« Mon ardeur pour la gloire de mon père »", "Antithèse : Chimène oppose passion et devoir filial — les stances structurent le conflit tragique en vers.", ["antithèse","amour","père","devoir","passion","stances"]),
      att('Apostrophe', "« mon cher Rodrigue, du bien »", "Apostrophe : Chimène interpelle Rodrigue dans un monologue lyrique — l'aveu amoureux se mêle à la demande de vengeance.", ["apostrophe","rodrigue","lyrique","aveu","vengeance","monologue"]),
      att('Registre pathétique', "« Donnez-moi cette mort que je vous demande en pleurant »", "Registre pathétique : les larmes et la demande de mort traduisent l'impossibilité du choix — pitié devant le dilemme.", ["pathétique","mort","larmes","dilemme","pitié","impossible"]),
      att('Métaphore', "« cruel obstacle »", "Métaphore : l'amour devient un obstacle à la vengeance — l'image condense le combat intérieur de Chimène.", ["métaphore","obstacle","amour","vengeance","combat","intérieur"]),
    ],
  },
  'GT-672': {
    texte: `ANDROMAQUE
Souvenez-vous du jour où votre épouse sanglante
Sur le corps sans vie de votre Hector expirant,
Pour le dernier regard se jeta tout éperdue,
Mêlant sa voix mourante aux plaintes de sa veuve.
Puis, dans le fond des mers, quand vous m'eûtes enlevée,
Quand de vos vaisseaux l'onde amène sur vos côtes
Cette veuve infortunée aux clameurs redoublées
Des matrones troiennes qui retentirent toutes ;
Je vis votre bonheur, l'ornement de vos fêtes.
Qu'ai-je donc reproché depuis ce triste jour ?
J'ai passé dans le sort le bienfait de la victoire,
Et j'ai maudit mes jours en voyant vos amours.
Hélas ! si mon amour peut épargner la Troie,
On ne peut trop, Seigneur, punir une victime.
Je ne vous parle point d'un espoir qui m'outrage :
Je n'ai pas, comme vous, des fureurs à étouffer ;
Et, malgré les rigueurs de ma triste servitude,
Je ne vous dirai point que je vous hais, Seigneur.`,
    contexte: "Tragédie de l'honneur et de l'amour. — Acte 5, scène 2.",
    attendus: [
      att('Anaphore', "« Souvenez-vous du jour »", "Anaphore implicite par l'invocation du souvenir : Andromaque martèle le passé troien pour justifier son refus.", ["anaphore","souvenez","souvenir","troie","passé","refus"]),
      att('Registre pathétique', "« Mêlant sa voix mourante aux plaintes de sa veuve »", "Registre pathétique : le tableau d'Hector mourant suscite compassion — la mémoire du deuil fonde le devoir maternel.", ["pathétique","mourante","plaintes","deuil","compassion","hector"]),
      att('Antithèse', "« Je n'ai pas, comme vous, des fureurs à étouffer »", "Antithèse entre la fureur de Pyrrhus et la dignité d'Andromaque — elle oppose violence et retenue.", ["antithèse","fureurs","dignité","violence","retenue","pyrrhus"]),
      att('Apostrophe', "« Hélas ! si mon amour peut épargner la Troie »", "Apostrophe : Andromaque interpelle Pyrrhus et lie amour maternel et enjeu politique — le monologue dramatise le sacrifice.", ["apostrophe","troie","amour","maternel","sacrifice","politique"]),
    ],
  },
  'GT-673': {
    texte: `r tu aimas.
CHIMÈNE
Va, je ne te hais point, tu penses que je te hais ?
Mes blessures ont un cœur qui n'est pas endurci ;
À qui venge mon père il s'attache et se donne,
Et moins il m'offense, plus je le pardonne.
LE COMTE
Tu l'aimes donc toujours ?
CHIMÈNE
Je l'aimais innocemment, quand mon père vivait ;
Et tu devais choisir un époux à ta fille,
Sans me contraindre à rompre un nœud si fortement noué.
LE COMTE
Tu ne hais donc point celui qui t'a fait outrage ?
CHIMÈNE
Il m'offense, et je l'aime ; et malgré mon courroux,
Je sens qu'en dépit de tout l'effort que je puis faire,
Je pleure sa victoire, et tremble pour sa vie.`,
    contexte: "Conflit entre devoir patriotique et amour. — Acte 1, scène 4.",
    attendus: [
      att('Litote', "« Va, je ne te hais point, tu penses que je te hais ? »", "Litote : Chimène nie la haine pour exprimer l'amour — la négation atténue une passion que le devoir lui interdit d'avouer.", ["litote","hais","amour","négation","devoir","chimène"]),
      att('Antithèse', "« Il m'offense, et je l'aime »", "Antithèse entre offense et amour : Corneille condense le conflit tragique entre honneur et passion dans une formule brève.", ["antithèse","offense","aime","honneur","passion","conflit"]),
      att('Registre pathétique', "« Je pleure sa victoire, et tremble pour sa vie »", "Registre pathétique : Chimène avoue sa compassion malgré le devoir de vengeance — pitié mêlée à l'indignation.", ["pathétique","pleure","tremble","pitié","vengeance","compassion"]),
      att('Dialogue', "« Tu l'aimes donc toujours ? »", "Dialogue : le père interroge et force Chimène à révéler son trouble — la scène dramatise l'aveu contraint.", ["dialogue","aime","père","aveu","interrogation","trouble"]),
    ],
  },
  'GT-674': {
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
    contexte: "Comédie de caractère — sincérité et hypocrisie. — Acte 1, scène 7.",
    attendus: [
      att('Métaphore', "« laissez-moi respirer un peu, je vous en prie. »", "Métaphore : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 1, scène 7 et oriente la lecture vers une tension sensible propre à Molière.", ["métaphore","molière","comédie","caractère","sincérité","hypocrisie."]),
      att('Antithèse', "« Je vais tout étrangler, savez-vous bien ? »", "Antithèse : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 1, scène 7 et oriente la lecture vers une tension sensible propre à Molière.", ["antithèse","molière","comédie","caractère","sincérité","hypocrisie."]),
      att('Registre pathétique', "« et ce n'est pas mon fait,\nJe suis trop scrupuleux sans doute ; »", "Registre pathétique : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 1, scène 7 et oriente la lecture vers une tension sensible propre à Molière.", ["registre pathétique","molière","comédie","caractère","sincérité","hypocrisie."]),
      att('Anaphore', "« mais enfin je ne saurais aller\naux extrémités jusqu'à cela ; »", "Anaphore : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 1, scène 7 et oriente la lecture vers une tension sensible propre à Molière.", ["anaphore","molière","comédie","caractère","sincérité","hypocrisie."]),
    ],
  },
  'GT-675': {
    texte: `, je vous en prie.
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
    contexte: "Comédie de caractère — sincérité et hypocrisie. — Acte 2, scène 5.",
    attendus: [
      att('Métaphore', "« Je vais tout étrangler, savez-vous bien ? »", "Métaphore : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 2, scène 5 et oriente la lecture vers une tension sensible propre à Molière.", ["métaphore","molière","comédie","caractère","sincérité","hypocrisie."]),
      att('Antithèse', "« et ce n'est pas mon fait,\nJe suis trop scrupuleux sans doute ; »", "Antithèse : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 2, scène 5 et oriente la lecture vers une tension sensible propre à Molière.", ["antithèse","molière","comédie","caractère","sincérité","hypocrisie."]),
      att('Registre pathétique', "« mais enfin je ne saurais aller\naux extrémités jusqu'à cela ; »", "Registre pathétique : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 2, scène 5 et oriente la lecture vers une tension sensible propre à Molière.", ["registre pathétique","molière","comédie","caractère","sincérité","hypocrisie."]),
      att('Anaphore', "« les choses en sont venues trop loin,\net je n'approuve pas entièrement vos désirs. »", "Anaphore : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 2, scène 5 et oriente la lecture vers une tension sensible propre à Molière.", ["anaphore","molière","comédie","caractère","sincérité","hypocrisie."]),
    ],
  },
  'GT-676': {
    texte: `, savez-vous bien ? et ce n'est pas mon fait,
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
    contexte: "Comédie de caractère — sincérité et hypocrisie. — Acte 4, scène 1.",
    attendus: [
      att('Métaphore', "« et ce n'est pas mon fait,\nJe suis trop scrupuleux sans doute ; »", "Métaphore : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 4, scène 1 et oriente la lecture vers une tension sensible propre à Molière.", ["métaphore","molière","comédie","caractère","sincérité","hypocrisie."]),
      att('Antithèse', "« mais enfin je ne saurais aller\naux extrémités jusqu'à cela ; »", "Antithèse : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 4, scène 1 et oriente la lecture vers une tension sensible propre à Molière.", ["antithèse","molière","comédie","caractère","sincérité","hypocrisie."]),
      att('Registre pathétique', "« les choses en sont venues trop loin,\net je n'approuve pas entièrement vos désirs. »", "Registre pathétique : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 4, scène 1 et oriente la lecture vers une tension sensible propre à Molière.", ["registre pathétique","molière","comédie","caractère","sincérité","hypocrisie."]),
      att('Anaphore', "« et comme on dit, ne poussons pas la chose\ntrop loin. »", "Anaphore : ce passage met en relief comédie de caractère — sincérité et hypocrisie. — acte 4, scène 1 et oriente la lecture vers une tension sensible propre à Molière.", ["anaphore","molière","comédie","caractère","sincérité","hypocrisie."]),
    ],
  },
  'GT-677': {
    texte: `ait,
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
    contexte: "Comédie — dénonciation de l'hypocrisie. — Acte 1, scène 9.",
    attendus: [
      att('Métaphore', "« ait,\nJe suis trop scrupuleux sans doute ; »", "Métaphore : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 1, scène 9 et oriente la lecture vers une tension sensible propre à Molière.", ["métaphore","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
      att('Antithèse', "« mais enfin je ne saurais aller\naux extrémités jusqu'à cela ; »", "Antithèse : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 1, scène 9 et oriente la lecture vers une tension sensible propre à Molière.", ["antithèse","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
      att('Registre pathétique', "« les choses en sont venues trop loin,\net je n'approuve pas entièrement vos désirs. »", "Registre pathétique : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 1, scène 9 et oriente la lecture vers une tension sensible propre à Molière.", ["registre pathétique","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
      att('Anaphore', "« et comme on dit, ne poussons pas la chose\ntrop loin. »", "Anaphore : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 1, scène 9 et oriente la lecture vers une tension sensible propre à Molière.", ["anaphore","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
    ],
  },
  'GT-679': {
    texte: `mités jusqu'à cela ; les choses en sont venues trop loin,
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
    contexte: "Comédie — dénonciation de l'hypocrisie. — Acte 3, scène 5.",
    attendus: [
      att('Métaphore', "« mités jusqu'à cela ; »", "Métaphore : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 3, scène 5 et oriente la lecture vers une tension sensible propre à Molière.", ["métaphore","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
      att('Antithèse', "« les choses en sont venues trop loin,\net je n'approuve pas entièrement vos désirs. »", "Antithèse : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 3, scène 5 et oriente la lecture vers une tension sensible propre à Molière.", ["antithèse","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
      att('Registre pathétique', "« et comme on dit, ne poussons pas la chose\ntrop loin. »", "Registre pathétique : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 3, scène 5 et oriente la lecture vers une tension sensible propre à Molière.", ["registre pathétique","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
      att('Anaphore', "« Mais voici votre mari qui survient ; »", "Anaphore : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 3, scène 5 et oriente la lecture vers une tension sensible propre à Molière.", ["anaphore","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
    ],
  },
  'GT-680': {
    texte: `enues trop loin,
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
    contexte: "Comédie — dénonciation de l'hypocrisie. — Acte 4, scène 3.",
    attendus: [
      att('Métaphore', "« enues trop loin,\net je n'approuve pas entièrement vos désirs. »", "Métaphore : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 4, scène 3 et oriente la lecture vers une tension sensible propre à Molière.", ["métaphore","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
      att('Antithèse', "« et comme on dit, ne poussons pas la chose\ntrop loin. »", "Antithèse : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 4, scène 3 et oriente la lecture vers une tension sensible propre à Molière.", ["antithèse","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
      att('Registre pathétique', "« Mais voici votre mari qui survient ; »", "Registre pathétique : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 4, scène 3 et oriente la lecture vers une tension sensible propre à Molière.", ["registre pathétique","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
      att('Anaphore', "« par forme, mettons\nnous à genoux ; »", "Anaphore : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 4, scène 3 et oriente la lecture vers une tension sensible propre à Molière.", ["anaphore","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
    ],
  },
  'GT-681': {
    texte: `ièrement vos désirs.
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
    contexte: "Comédie — dénonciation de l'hypocrisie. — Acte 5, scène 1.",
    attendus: [
      att('Métaphore', "« ièrement vos désirs. »", "Métaphore : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 5, scène 1 et oriente la lecture vers une tension sensible propre à Molière.", ["métaphore","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
      att('Antithèse', "« et comme on dit, ne poussons pas la chose\ntrop loin. »", "Antithèse : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 5, scène 1 et oriente la lecture vers une tension sensible propre à Molière.", ["antithèse","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
      att('Registre pathétique', "« Mais voici votre mari qui survient ; »", "Registre pathétique : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 5, scène 1 et oriente la lecture vers une tension sensible propre à Molière.", ["registre pathétique","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
      att('Anaphore', "« par forme, mettons\nnous à genoux ; »", "Anaphore : ce passage met en relief comédie — dénonciation de l'hypocrisie. — acte 5, scène 1 et oriente la lecture vers une tension sensible propre à Molière.", ["anaphore","molière","comédie","dénonciation","l'hypocrisie.","scène"]),
    ],
  },
  'GT-683': {
    texte: `er un peu, je vous en prie.
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
    contexte: "Comédie — libertinage et châtiment. — Acte 2, scène 3.",
    attendus: [
      att('Métaphore', "« er un peu, je vous en prie. »", "Métaphore : ce passage met en relief comédie — libertinage et châtiment. — acte 2, scène 3 et oriente la lecture vers une tension sensible propre à Molière.", ["métaphore","molière","comédie","libertinage","châtiment.","scène"]),
      att('Antithèse', "« Je vais tout étrangler, savez-vous bien ? »", "Antithèse : ce passage met en relief comédie — libertinage et châtiment. — acte 2, scène 3 et oriente la lecture vers une tension sensible propre à Molière.", ["antithèse","molière","comédie","libertinage","châtiment.","scène"]),
      att('Registre pathétique', "« et ce n'est pas mon fait,\nJe suis trop scrupuleux sans doute ; »", "Registre pathétique : ce passage met en relief comédie — libertinage et châtiment. — acte 2, scène 3 et oriente la lecture vers une tension sensible propre à Molière.", ["registre pathétique","molière","comédie","libertinage","châtiment.","scène"]),
      att('Anaphore', "« mais enfin je ne saurais aller\naux extrémités jusqu'à cela ; »", "Anaphore : ce passage met en relief comédie — libertinage et châtiment. — acte 2, scène 3 et oriente la lecture vers une tension sensible propre à Molière.", ["anaphore","molière","comédie","libertinage","châtiment.","scène"]),
    ],
  },
  'GT-684': {
    texte: `étrangler, savez-vous bien ? et ce n'est pas mon fait,
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
    contexte: "Comédie — libertinage et châtiment. — Acte 3, scène 1.",
    attendus: [
      att('Métaphore', "« étrangler, savez-vous bien ? »", "Métaphore : ce passage met en relief comédie — libertinage et châtiment. — acte 3, scène 1 et oriente la lecture vers une tension sensible propre à Molière.", ["métaphore","molière","comédie","libertinage","châtiment.","scène"]),
      att('Antithèse', "« et ce n'est pas mon fait,\nJe suis trop scrupuleux sans doute ; »", "Antithèse : ce passage met en relief comédie — libertinage et châtiment. — acte 3, scène 1 et oriente la lecture vers une tension sensible propre à Molière.", ["antithèse","molière","comédie","libertinage","châtiment.","scène"]),
      att('Registre pathétique', "« mais enfin je ne saurais aller\naux extrémités jusqu'à cela ; »", "Registre pathétique : ce passage met en relief comédie — libertinage et châtiment. — acte 3, scène 1 et oriente la lecture vers une tension sensible propre à Molière.", ["registre pathétique","molière","comédie","libertinage","châtiment.","scène"]),
      att('Anaphore', "« les choses en sont venues trop loin,\net je n'approuve pas entièrement vos désirs. »", "Anaphore : ce passage met en relief comédie — libertinage et châtiment. — acte 3, scène 1 et oriente la lecture vers une tension sensible propre à Molière.", ["anaphore","molière","comédie","libertinage","châtiment.","scène"]),
    ],
  },
  'GT-685': {
    texte: `pas mon fait,
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
    contexte: "Comédie — obsession de l'argent. — Acte 1, scène 3.",
    attendus: [
      att('Métaphore', "« pas mon fait,\nJe suis trop scrupuleux sans doute ; »", "Métaphore : ce passage met en relief comédie — obsession de l'argent. — acte 1, scène 3 et oriente la lecture vers une tension sensible propre à Molière.", ["métaphore","molière","comédie","obsession","l'argent.","scène"]),
      att('Antithèse', "« mais enfin je ne saurais aller\naux extrémités jusqu'à cela ; »", "Antithèse : ce passage met en relief comédie — obsession de l'argent. — acte 1, scène 3 et oriente la lecture vers une tension sensible propre à Molière.", ["antithèse","molière","comédie","obsession","l'argent.","scène"]),
      att('Registre pathétique', "« les choses en sont venues trop loin,\net je n'approuve pas entièrement vos désirs. »", "Registre pathétique : ce passage met en relief comédie — obsession de l'argent. — acte 1, scène 3 et oriente la lecture vers une tension sensible propre à Molière.", ["registre pathétique","molière","comédie","obsession","l'argent.","scène"]),
      att('Anaphore', "« et comme on dit, ne poussons pas la chose\ntrop loin. »", "Anaphore : ce passage met en relief comédie — obsession de l'argent. — acte 1, scène 3 et oriente la lecture vers une tension sensible propre à Molière.", ["anaphore","molière","comédie","obsession","l'argent.","scène"]),
    ],
  },
  'GT-687': {
    texte: `auver votre vie.
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Poésie mélancolique et musicale. — poème n°14.",
    attendus: [
      att('Apostrophe', "« Ô Vénus ! je le sais, tu veux que je meure »", "Apostrophe : Phèdre interpelle la déesse et personnifie la fatalité amoureuse — la passion devient une force divine qui la condamne.", ["apostrophe","vénus","fatalité","passion","mort","tragique"]),
      att('Antithèse', "« perdre celui qu'il offense »", "Antithèse entre sauver Phèdre et perdre Hippolyte : Oenone installe le dilemme criminel qui précipitera la catastrophe.", ["antithèse","sauver","perdre","hippolyte","dilemme","catastrophe"]),
      att('Registre tragique', "« Faites-vous jour, ou plût au ciel que le crime / Vous fût inconnu ! »", "Registre tragique : le choix entre aveu et mensonge dépasse les personnages — la fatalité du secret amoureux mène au crime.", ["registre","tragique","crime","aveu","mensonge","fatalité"]),
      att('Dialogue', "« Quel crime ? Est-ce un crime d'aimer ? »", "Dialogue : la question rhétorique de Phèdre oppose passion innocente et loi morale — tension dramatique entre désir et devoir.", ["dialogue","crime","aimer","passion","devoir","tension"]),
    ],
  },
  'GT-688': {
    texte: `veux que je meure.
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Poésie impressionniste et musicalité. — poème n°11.",
    attendus: [
      att('Métaphore', "« OENONE\nMadame, avant que l'on vous atteigne il est temps. »", "Métaphore : ce passage met en relief poésie impressionniste et musicalité. — poème n°11 et oriente la lecture vers une tension sensible propre à Verlaine.", ["métaphore","verlaine","poésie","impressionniste","musicalité.","poème"]),
      att('Antithèse', "« Les prêtres, qu'on offense, chercheront un supplice ; »", "Antithèse : ce passage met en relief poésie impressionniste et musicalité. — poème n°11 et oriente la lecture vers une tension sensible propre à Verlaine.", ["antithèse","verlaine","poésie","impressionniste","musicalité.","poème"]),
      att('Registre pathétique', "« Vos cris, que tous ont crus sortir de votre cervelle,\nOnt fait d'Hippolyte un criminel coupable. »", "Registre pathétique : ce passage met en relief poésie impressionniste et musicalité. — poème n°11 et oriente la lecture vers une tension sensible propre à Verlaine.", ["registre pathétique","verlaine","poésie","impressionniste","musicalité.","poème"]),
      att('Anaphore', "« PHÈDRE\nIl s'est bien débattu contre mon innocence ! »", "Anaphore : ce passage met en relief poésie impressionniste et musicalité. — poème n°11 et oriente la lecture vers une tension sensible propre à Verlaine.", ["anaphore","verlaine","poésie","impressionniste","musicalité.","poème"]),
    ],
  },
  'GT-689': {
    texte: `Rappelez-vous l'objet que nous vîmes, mon âme, ce beau matin d'août si doux : une charogne infâme à trouser son maillot, sur un chemin de sable entouré de rochers, les jambes en l'air, comme une femme lubrique, brûlante et suintante de poisons, ouverte enfacinant et béante comme un bâtard de couche qui se chaufferait au soleil. — Mon beau soleil, ciel pur et de l'azur ! Tout cela pour s'ouvrir comme un matelas sans fond. Les bêtes, dressées sur cette bedaine immonde, agitaient craintivement ces quartiers vivants, d'une croupe horrible, entassaient de noires millions de formes, qui murmuraient comme des outils. On voyait tout pourri sur tout ce pétrifié, une brume de pourriture s'étalait au loin sur le cadavre de merde tremblant d'engouement.`,
    contexte: "Modernité poétique, spleen et idéal. — poème n°16.",
    attendus: [
      att('Métaphore', "« Rappelez-vous l'objet que nous vîmes, mon âme, ce beau matin d'août si doux : »", "Métaphore : ce passage met en relief modernité poétique, spleen et idéal. — poème n°16 et oriente la lecture vers une tension sensible propre à Baudelaire.", ["métaphore","baudelaire","modernité","poétique,","spleen","idéal."]),
      att('Antithèse', "« — Mon beau soleil, ciel pur et de l'azur ! »", "Antithèse : ce passage met en relief modernité poétique, spleen et idéal. — poème n°16 et oriente la lecture vers une tension sensible propre à Baudelaire.", ["antithèse","baudelaire","modernité","poétique,","spleen","idéal."]),
      att('Registre pathétique', "« Tout cela pour s'ouvrir comme un matelas sans fond. »", "Registre pathétique : ce passage met en relief modernité poétique, spleen et idéal. — poème n°16 et oriente la lecture vers une tension sensible propre à Baudelaire.", ["registre pathétique","baudelaire","modernité","poétique,","spleen","idéal."]),
      att('Anaphore', "« Rappelez-vous l'objet que nous vîmes, mon âme, ce beau matin d'août si doux : une charogne »", "Anaphore : ce passage met en relief modernité poétique, spleen et idéal. — poème n°16 et oriente la lecture vers une tension sensible propre à Baudelaire.", ["anaphore","baudelaire","modernité","poétique,","spleen","idéal."]),
    ],
  },
  'GT-691': {
    texte: `Jean Valjean était sur la barricade. Il s'était élancé au moment où la garde nationale avait commencé à gronder. L'assaut était terrible. Les insurgés reculaient lentement, mais ils reculaient. La barricade était presque bordée d'ennemis ; il n'y avait plus qu'un étroit passage entre les troupes et eux. Jean Valjean regarda autour de lui comme un homme qui va mourir, et se jeta, les yeux clos, dans ce passage, ce fut une brèche vivante. Les soldats, surpris, reculèrent ; les insurgés, ragaillardis, reprirent l'offensive. Jean Valjean, au milieu de la mêlée, sauva la vie à Marius, qu'il portait dans ses bras à travers le champ de bataille, sans être touché.`,
    contexte: "Roman engagé — misère et rédemption. — chapitre 7.",
    attendus: [
      att('Métaphore', "« Jean Valjean était sur la barricade. »", "Métaphore : ce passage met en relief roman engagé — misère et rédemption. — chapitre 7 et oriente la lecture vers une tension sensible propre à Hugo.", ["métaphore","hugo","roman","engagé","misère","rédemption."]),
      att('Antithèse', "« Il s'était élancé au moment où la garde nationale avait commencé à gronder. »", "Antithèse : ce passage met en relief roman engagé — misère et rédemption. — chapitre 7 et oriente la lecture vers une tension sensible propre à Hugo.", ["antithèse","hugo","roman","engagé","misère","rédemption."]),
      att('Registre pathétique', "« L'assaut était terrible. »", "Registre pathétique : ce passage met en relief roman engagé — misère et rédemption. — chapitre 7 et oriente la lecture vers une tension sensible propre à Hugo.", ["registre pathétique","hugo","roman","engagé","misère","rédemption."]),
      att('Anaphore', "« Les insurgés reculaient lentement, mais ils reculaient. »", "Anaphore : ce passage met en relief roman engagé — misère et rédemption. — chapitre 7 et oriente la lecture vers une tension sensible propre à Hugo.", ["anaphore","hugo","roman","engagé","misère","rédemption."]),
    ],
  },
  'GT-692': {
    texte: `Jean Valjean était sur la barricade. Il s'était élancé au moment où la garde nationale avait commencé à gronder. L'assaut était terrible. Les insurgés reculaient lentement, mais ils reculaient. La barricade était presque bordée d'ennemis ; il n'y avait plus qu'un étroit passage entre les troupes et eux. Jean Valjean regarda autour de lui comme un homme qui va mourir, et se jeta, les yeux clos, dans ce passage, ce fut une brèche vivante. Les soldats, surpris, reculèrent ; les insurgés, ragaillardis, reprirent l'offensive. Jean Valjean, au milieu de la mêlée, sauva la vie à Marius, qu'il portait dans ses bras à travers le champ de bataille, sans être touché.`,
    contexte: "Épopée humaniste du XIXe siècle. — poème n°5.",
    attendus: [
      att('Métaphore', "« Jean Valjean était sur la barricade. »", "Métaphore : ce passage met en relief épopée humaniste du xixe siècle. — poème n°5 et oriente la lecture vers une tension sensible propre à Hugo.", ["métaphore","hugo","épopée","humaniste","siècle.","poème"]),
      att('Antithèse', "« Il s'était élancé au moment où la garde nationale avait commencé à gronder. »", "Antithèse : ce passage met en relief épopée humaniste du xixe siècle. — poème n°5 et oriente la lecture vers une tension sensible propre à Hugo.", ["antithèse","hugo","épopée","humaniste","siècle.","poème"]),
      att('Registre pathétique', "« L'assaut était terrible. »", "Registre pathétique : ce passage met en relief épopée humaniste du xixe siècle. — poème n°5 et oriente la lecture vers une tension sensible propre à Hugo.", ["registre pathétique","hugo","épopée","humaniste","siècle.","poème"]),
      att('Anaphore', "« Les insurgés reculaient lentement, mais ils reculaient. »", "Anaphore : ce passage met en relief épopée humaniste du xixe siècle. — poème n°5 et oriente la lecture vers une tension sensible propre à Hugo.", ["anaphore","hugo","épopée","humaniste","siècle.","poème"]),
    ],
  },
  'GT-693': {
    texte: `e un criminel coupable.
PHÈDRE
Il s'est bien débattu contre mon innocence !
OENONE
Mais les bruits en sont forts, et la cour s'en fomente.
Faut-il d'un crime obscur affranchir le coupable ?
Faites-vous jour, ou plût au ciel que le crime
Vous fût inconnu !
PHÈDRE
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Voyage initiatique et modernité poétique. — poème n°13.",
    attendus: [
      att('Métaphore', "« e un criminel coupable. »", "Métaphore : ce passage met en relief voyage initiatique et modernité poétique. — poème n°13 et oriente la lecture vers une tension sensible propre à Rimbaud.", ["métaphore","rimbaud","voyage","initiatique","modernité","poétique."]),
      att('Antithèse', "« PHÈDRE\nIl s'est bien débattu contre mon innocence ! »", "Antithèse : ce passage met en relief voyage initiatique et modernité poétique. — poème n°13 et oriente la lecture vers une tension sensible propre à Rimbaud.", ["antithèse","rimbaud","voyage","initiatique","modernité","poétique."]),
      att('Registre pathétique', "« OENONE\nMais les bruits en sont forts, et la cour s'en fomente. »", "Registre pathétique : ce passage met en relief voyage initiatique et modernité poétique. — poème n°13 et oriente la lecture vers une tension sensible propre à Rimbaud.", ["registre pathétique","rimbaud","voyage","initiatique","modernité","poétique."]),
      att('Anaphore', "« Faut-il d'un crime obscur affranchir le coupable ? »", "Anaphore : ce passage met en relief voyage initiatique et modernité poétique. — poème n°13 et oriente la lecture vers une tension sensible propre à Rimbaud.", ["anaphore","rimbaud","voyage","initiatique","modernité","poétique."]),
    ],
  },
  'GT-694': {
    texte: `a, je ne te hais point, tu penses que je te hais ?
Mes blessures ont un cœur qui n'est pas endurci ;
À qui venge mon père il s'attache et se donne,
Et moins il m'offense, plus je le pardonne.
LE COMTE
Tu l'aimes donc toujours ?
CHIMÈNE
Je l'aimais innocemment, quand mon père vivait ;
Et tu devais choisir un époux à ta fille,
Sans me contraindre à rompre un nœud si fortement noué.
LE COMTE
Tu ne hais donc point celui qui t'a fait outrage ?
CHIMÈNE
Il m'offense, et je l'aime ; et malgré mon courroux,
Je sens qu'en dépit de tout l'effort que je puis faire,
Je pleure sa victoire, et tremble pour sa vie.`,
    contexte: "Prose poétique — révolte et quête. — poème n°9.",
    attendus: [
      att('Métaphore', "« a, je ne te hais point, tu penses que je te hais ? »", "Métaphore : ce passage met en relief prose poétique — révolte et quête. — poème n°9 et oriente la lecture vers une tension sensible propre à Rimbaud.", ["métaphore","rimbaud","prose","poétique","révolte","quête."]),
      att('Antithèse', "« Mes blessures ont un cœur qui n'est pas endurci ; »", "Antithèse : ce passage met en relief prose poétique — révolte et quête. — poème n°9 et oriente la lecture vers une tension sensible propre à Rimbaud.", ["antithèse","rimbaud","prose","poétique","révolte","quête."]),
      att('Registre pathétique', "« À qui venge mon père il s'attache et se donne,\nEt moins il m'offense, plus je le pardonne. »", "Registre pathétique : ce passage met en relief prose poétique — révolte et quête. — poème n°9 et oriente la lecture vers une tension sensible propre à Rimbaud.", ["registre pathétique","rimbaud","prose","poétique","révolte","quête."]),
      att('Anaphore', "« LE COMTE\nTu l'aimes donc toujours ? »", "Anaphore : ce passage met en relief prose poétique — révolte et quête. — poème n°9 et oriente la lecture vers une tension sensible propre à Rimbaud.", ["anaphore","rimbaud","prose","poétique","révolte","quête."]),
    ],
  },
  'GT-695': {
    texte: `te hais ?
Mes blessures ont un cœur qui n'est pas endurci ;
À qui venge mon père il s'attache et se donne,
Et moins il m'offense, plus je le pardonne.
LE COMTE
Tu l'aimes donc toujours ?
CHIMÈNE
Je l'aimais innocemment, quand mon père vivait ;
Et tu devais choisir un époux à ta fille,
Sans me contraindre à rompre un nœud si fortement noué.
LE COMTE
Tu ne hais donc point celui qui t'a fait outrage ?
CHIMÈNE
Il m'offense, et je l'aime ; et malgré mon courroux,
Je sens qu'en dépit de tout l'effort que je puis faire,
Je pleure sa victoire, et tremble pour sa vie.`,
    contexte: "Poésie visionnaire et rupture formelle. — poème n°6.",
    attendus: [
      att('Métaphore', "« Mes blessures ont un cœur qui n'est pas endurci ; »", "Métaphore : ce passage met en relief poésie visionnaire et rupture formelle. — poème n°6 et oriente la lecture vers une tension sensible propre à Rimbaud.", ["métaphore","rimbaud","poésie","visionnaire","rupture","formelle."]),
      att('Antithèse', "« À qui venge mon père il s'attache et se donne,\nEt moins il m'offense, plus je le pardonne. »", "Antithèse : ce passage met en relief poésie visionnaire et rupture formelle. — poème n°6 et oriente la lecture vers une tension sensible propre à Rimbaud.", ["antithèse","rimbaud","poésie","visionnaire","rupture","formelle."]),
      att('Registre pathétique', "« LE COMTE\nTu l'aimes donc toujours ? »", "Registre pathétique : ce passage met en relief poésie visionnaire et rupture formelle. — poème n°6 et oriente la lecture vers une tension sensible propre à Rimbaud.", ["registre pathétique","rimbaud","poésie","visionnaire","rupture","formelle."]),
      att('Anaphore', "« CHIMÈNE\nJe l'aimais innocemment, quand mon père vivait ; »", "Anaphore : ce passage met en relief poésie visionnaire et rupture formelle. — poème n°6 et oriente la lecture vers une tension sensible propre à Rimbaud.", ["anaphore","rimbaud","poésie","visionnaire","rupture","formelle."]),
    ],
  },
  'GT-697': {
    texte: `ne t'est plus qu'un funeste objet.
CHIMÈNE
Un funeste objet qui m'avait tant de charmes !
LE COMTE
Tu dois maintenant haïr ce qu'un jour tu aimas.
CHIMÈNE
Va, je ne te hais point, tu penses que je te hais ?
Mes blessures ont un cœur qui n'est pas endurci ;
À qui venge mon père il s'attache et se donne,
Et moins il m'offense, plus je le pardonne.
LE COMTE
Tu l'aimes donc toujours ?
CHIMÈNE
Je l'aimais innocemment, quand mon père vivait ;
Et tu devais choisir un époux à ta fille,
Sans me contraindre à rompre un nœud si fortement noué.
LE COMTE
Tu ne hais donc point celui qui t'a fait outrage ?
CHIMÈNE
Il m'offense, et je l'aime ; et malgré mon courroux,
Je sens qu'en dépit de tout l'effort que je puis faire,
Je pleure sa victoire, et tremble pour sa vie.`,
    contexte: "Fable morale et satire sociale. — poème n°12.",
    attendus: [
      att('Litote', "« Va, je ne te hais point, tu penses que je te hais ? »", "Litote : Chimène nie la haine pour exprimer l'amour — la négation atténue une passion que le devoir lui interdit d'avouer.", ["litote","hais","amour","négation","devoir","chimène"]),
      att('Antithèse', "« Il m'offense, et je l'aime »", "Antithèse entre offense et amour : Corneille condense le conflit tragique entre honneur et passion dans une formule brève.", ["antithèse","offense","aime","honneur","passion","conflit"]),
      att('Registre pathétique', "« Je pleure sa victoire, et tremble pour sa vie »", "Registre pathétique : Chimène avoue sa compassion malgré le devoir de vengeance — pitié mêlée à l'indignation.", ["pathétique","pleure","tremble","pitié","vengeance","compassion"]),
      att('Dialogue', "« Tu l'aimes donc toujours ? »", "Dialogue : le père interroge et force Chimène à révéler son trouble — la scène dramatise l'aveu contraint.", ["dialogue","aime","père","aveu","interrogation","trouble"]),
    ],
  },
  'GT-698': {
    texte: `Dans un château de Westphalie, à quelques lieues de la ville de Dantzig, il y avait un baron qui possédait une des plus belles maisons de la province, mais dont l'entrée n'était pas plus riche que celle d'un baron allemand. La cour de sa maison était encombrée de poutres et de bardeaux cloutés ; tout autour, des poutres soutenaient un grenier ; autour du grenier, il y avait quelquefois des lapins qui passaient et qui revenaient par les trous que le temps avait faits dans les murailles. Candide, le neveu du baron, était un jeune homme à la figure pleine de candeur et de simplicité ; il avait le jugement assez droit, avec l'esprit tout simple ; c'est ce qui le fit sortir du château.`,
    contexte: "Conte philosophique — critique de l'optimisme. — Climax.",
    attendus: [
      att('Métaphore', "« La cour de sa maison était encombrée de poutres et de bardeaux cloutés ; »", "Métaphore : ce passage met en relief conte philosophique — critique de l'optimisme. — climax et oriente la lecture vers une tension sensible propre à Voltaire.", ["métaphore","voltaire","conte","philosophique","critique","l'optimisme."]),
      att('Antithèse', "« tout autour, des poutres soutenaient un grenier ; »", "Antithèse : ce passage met en relief conte philosophique — critique de l'optimisme. — climax et oriente la lecture vers une tension sensible propre à Voltaire.", ["antithèse","voltaire","conte","philosophique","critique","l'optimisme."]),
      att('Registre pathétique', "« Candide, le neveu du baron, était un jeune homme à la figure pleine de candeur et de simplicité ; »", "Registre pathétique : ce passage met en relief conte philosophique — critique de l'optimisme. — climax et oriente la lecture vers une tension sensible propre à Voltaire.", ["registre pathétique","voltaire","conte","philosophique","critique","l'optimisme."]),
      att('Anaphore', "« il avait le jugement assez droit, avec l'esprit tout simple ; »", "Anaphore : ce passage met en relief conte philosophique — critique de l'optimisme. — climax et oriente la lecture vers une tension sensible propre à Voltaire.", ["anaphore","voltaire","conte","philosophique","critique","l'optimisme."]),
    ],
  },
  'GT-699': {
    texte: `Candide demeura dans la surprise et l'affliction, mais surtout il était pénétré d'une sourde indignation contre l'optimisme du Pangloss. « Ah ! disait-il entre ses dents, si jamais la victoire fut cruelle, c'est ici qu'elle l'a été. — Cela est bien, répondait le baron, mais il faut que l'homme soit sur cette terre, en attendant qu'il en soit temps de partir pour une autre, il faut que chacun cultive son jardin. — Je n'ai qu'un jardin, dit Candide, mais j'en suis le maître après les malheurs que j'ai essuyés. Je sais qu'il faut cultiver notre jardin, mais pourquoi les Élus d'Espagne ont-ils brûlé des innocents ? pourquoi Pangloss a-t-il été pendu ? pourquoi mademoiselle Cunégonde a-t-elle été déchiquetée ? »`,
    contexte: "Conte philosophique — critique de l'optimisme. — chapitre 6.",
    attendus: [
      att('Métaphore', "« disait-il entre ses dents, si jamais la victoire fut cruelle, c'est ici qu'elle l'a été. »", "Métaphore : ce passage met en relief conte philosophique — critique de l'optimisme. — chapitre 6 et oriente la lecture vers une tension sensible propre à Voltaire.", ["métaphore","voltaire","conte","philosophique","critique","l'optimisme."]),
      att('Antithèse', "« — Je n'ai qu'un jardin, dit Candide, mais j'en suis le maître après les malheurs que j'ai essuyés. »", "Antithèse : ce passage met en relief conte philosophique — critique de l'optimisme. — chapitre 6 et oriente la lecture vers une tension sensible propre à Voltaire.", ["antithèse","voltaire","conte","philosophique","critique","l'optimisme."]),
      att('Registre pathétique', "« Je sais qu'il faut cultiver notre jardin, mais pourquoi les Élus d'Espagne ont-ils brûlé des innocents ? »", "Registre pathétique : ce passage met en relief conte philosophique — critique de l'optimisme. — chapitre 6 et oriente la lecture vers une tension sensible propre à Voltaire.", ["registre pathétique","voltaire","conte","philosophique","critique","l'optimisme."]),
      att('Anaphore', "« pourquoi Pangloss a-t-il été pendu ? »", "Anaphore : ce passage met en relief conte philosophique — critique de l'optimisme. — chapitre 6 et oriente la lecture vers une tension sensible propre à Voltaire.", ["anaphore","voltaire","conte","philosophique","critique","l'optimisme."]),
    ],
  },
  'GT-703': {
    texte: `À nous deux maintenant ! dit Rastignac en serrant les dents. Vous et moi, nous nous comprendrons. Et se retournant vers le père Goriot : — À votre santé, père, dit-il, et le regarda avec une sorte de pitié mêlée d'intérêt. — Il n'y a qu'ici qu'on ne me rie pas au nez, dit le vieillard ; vous me paraissez bon enfant, venez causer avec moi ce soir. — Volontiers, répondit Eugène. — Eh bien ! dit le père Goriot, il faudra me dire franchement si vous aimez ma fille. — Oui, dit Rastignac. — Eh bien ! vous l'épouserez, je vous en réponds. Je suis riche, je le suis, dit-il en se levant tout à coup.`,
    contexte: "Réalisme — ascension sociale et déclin. — Dialogue.",
    attendus: [
      att('Métaphore', "« À nous deux maintenant ! »", "Métaphore : ce passage met en relief réalisme — ascension sociale et déclin. — dialogue et oriente la lecture vers une tension sensible propre à Balzac.", ["métaphore","balzac","réalisme","ascension","sociale","déclin."]),
      att('Antithèse', "« dit Rastignac en serrant les dents. »", "Antithèse : ce passage met en relief réalisme — ascension sociale et déclin. — dialogue et oriente la lecture vers une tension sensible propre à Balzac.", ["antithèse","balzac","réalisme","ascension","sociale","déclin."]),
      att('Registre pathétique', "« Vous et moi, nous nous comprendrons. »", "Registre pathétique : ce passage met en relief réalisme — ascension sociale et déclin. — dialogue et oriente la lecture vers une tension sensible propre à Balzac.", ["registre pathétique","balzac","réalisme","ascension","sociale","déclin."]),
      att('Anaphore', "« Et se retournant vers le père Goriot : »", "Anaphore : ce passage met en relief réalisme — ascension sociale et déclin. — dialogue et oriente la lecture vers une tension sensible propre à Balzac.", ["anaphore","balzac","réalisme","ascension","sociale","déclin."]),
    ],
  },
  'GT-704': {
    texte: `Cette pension se trouvait dans le haut faubourg Saint-Germain, rue Neuve-Sainte-Geneviève, entre la rue de l'Arbalète et la montagne Sainte-Geneviève. C'est là que se trouve la Râpée, zone intermédiaire peu habitée et pauvre entre le faubourg Saint-Germain et le quartier latin ; c'est une de ces zones tragiques où les plus grandes misères de Paris se croisent et se confondent, zones sans nom, sans poésie, sans âme, que l'on ne montre pas aux étrangers, et où l'on n'entre guère sans raison. La maison Vauquer, vieille comme ses habitants, suinte l'humidité par toutes ses fissures ; ses murs verdis, ses rideaux déteints, ses meubles vermoulus composent un tableau de dénuement qui semble figé dans une misère sans espoir.`,
    contexte: "Réalisme — ascension sociale et déclin. — chapitre 3.",
    attendus: [
      att('Métaphore', "« La maison Vauquer, vieille comme ses habitants, suinte l'humidité par toutes ses fissures ; »", "Métaphore : ce passage met en relief réalisme — ascension sociale et déclin. — chapitre 3 et oriente la lecture vers une tension sensible propre à Balzac.", ["métaphore","balzac","réalisme","ascension","sociale","déclin."]),
      att('Antithèse', "« Cette pension se trouvait dans le haut faubourg Saint-Germain, rue Neuve-Sainte-Geneviève, entre la rue de l'Arbalète »", "Antithèse : ce passage met en relief réalisme — ascension sociale et déclin. — chapitre 3 et oriente la lecture vers une tension sensible propre à Balzac.", ["antithèse","balzac","réalisme","ascension","sociale","déclin."]),
      att('Registre pathétique', "« entre la rue de l'Arbalète et la montagne Sainte-Geneviève. C'est là que se trouve la Râpée, »", "Registre pathétique : ce passage met en relief réalisme — ascension sociale et déclin. — chapitre 3 et oriente la lecture vers une tension sensible propre à Balzac.", ["registre pathétique","balzac","réalisme","ascension","sociale","déclin."]),
      att('Anaphore', "« que se trouve la Râpée, zone intermédiaire peu habitée et pauvre entre le faubourg Saint-Germain et »", "Anaphore : ce passage met en relief réalisme — ascension sociale et déclin. — chapitre 3 et oriente la lecture vers une tension sensible propre à Balzac.", ["anaphore","balzac","réalisme","ascension","sociale","déclin."]),
    ],
  },
  'GT-705': {
    texte: `uneste objet qui m'avait tant de charmes !
LE COMTE
Tu dois maintenant haïr ce qu'un jour tu aimas.
CHIMÈNE
Va, je ne te hais point, tu penses que je te hais ?
Mes blessures ont un cœur qui n'est pas endurci ;
À qui venge mon père il s'attache et se donne,
Et moins il m'offense, plus je le pardonne.
LE COMTE
Tu l'aimes donc toujours ?
CHIMÈNE
Je l'aimais innocemment, quand mon père vivait ;
Et tu devais choisir un époux à ta fille,
Sans me contraindre à rompre un nœud si fortement noué.
LE COMTE
Tu ne hais donc point celui qui t'a fait outrage ?
CHIMÈNE
Il m'offense, et je l'aime ; et malgré mon courroux,
Je sens qu'en dépit de tout l'effort que je puis faire,
Je pleure sa victoire, et tremble pour sa vie.`,
    contexte: "Roman psychologique — ambition et hypocrisie. — chapitre 2.",
    attendus: [
      att('Litote', "« Va, je ne te hais point, tu penses que je te hais ? »", "Litote : Chimène nie la haine pour exprimer l'amour — la négation atténue une passion que le devoir lui interdit d'avouer.", ["litote","hais","amour","négation","devoir","chimène"]),
      att('Antithèse', "« Il m'offense, et je l'aime »", "Antithèse entre offense et amour : Corneille condense le conflit tragique entre honneur et passion dans une formule brève.", ["antithèse","offense","aime","honneur","passion","conflit"]),
      att('Registre pathétique', "« Je pleure sa victoire, et tremble pour sa vie »", "Registre pathétique : Chimène avoue sa compassion malgré le devoir de vengeance — pitié mêlée à l'indignation.", ["pathétique","pleure","tremble","pitié","vengeance","compassion"]),
      att('Dialogue', "« Tu l'aimes donc toujours ? »", "Dialogue : le père interroge et force Chimène à révéler son trouble — la scène dramatise l'aveu contraint.", ["dialogue","aime","père","aveu","interrogation","trouble"]),
    ],
  },
  'GT-708': {
    texte: `Les curieux événements qui font l'objet de cette chronique sont arrivés à Oran en 194. L'auteur, sachant qu'il n'a pas le talent qu'il faudrait pour faire du récit d'aventures ou de la confession un exercice intéressant, a choisi de rapporter, quand il le pourra, ce qui fut dit, vu et senti par les gens qu'il a rencontrés. Il ne peut pas prétendre avoir vu tout ce qu'il raconte ; il ne peut pas non plus prétendre l'avoir entièrement compris. C'est pourquoi il a eu recours à la prudence du narrateur qui, lorsque son récit touche à des domaines délicats, emploie les mots de « semble » ou de « on a l'impression ».`,
    contexte: "Allégorie — résistance et solidarité. — Monologue intérieur.",
    attendus: [
      att('Métaphore', "« Les curieux événements qui font l'objet de cette chronique sont arrivés à Oran en 194. »", "Métaphore : ce passage met en relief allégorie — résistance et solidarité. — monologue intérieur et oriente la lecture vers une tension sensible propre à Camus.", ["métaphore","camus","allégorie","résistance","solidarité.","monologue"]),
      att('Antithèse', "« Il ne peut pas prétendre avoir vu tout ce qu'il raconte ; »", "Antithèse : ce passage met en relief allégorie — résistance et solidarité. — monologue intérieur et oriente la lecture vers une tension sensible propre à Camus.", ["antithèse","camus","allégorie","résistance","solidarité.","monologue"]),
      att('Registre pathétique', "« il ne peut pas non plus prétendre l'avoir entièrement compris. »", "Registre pathétique : ce passage met en relief allégorie — résistance et solidarité. — monologue intérieur et oriente la lecture vers une tension sensible propre à Camus.", ["registre pathétique","camus","allégorie","résistance","solidarité.","monologue"]),
      att('Anaphore', "« Les curieux événements qui font l'objet de cette chronique sont arrivés à Oran en 194. L'auteur, »", "Anaphore : ce passage met en relief allégorie — résistance et solidarité. — monologue intérieur et oriente la lecture vers une tension sensible propre à Camus.", ["anaphore","camus","allégorie","résistance","solidarité.","monologue"]),
    ],
  },
  'GT-710': {
    texte: `qu'on offense, chercheront un supplice ;
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Symbolisme — suggestion et poésie pure. — poème n°7.",
    attendus: [
      att('Métaphore', "« qu'on offense, chercheront un supplice ; »", "Métaphore : ce passage met en relief symbolisme — suggestion et poésie pure. — poème n°7 et oriente la lecture vers une tension sensible propre à Mallarmé.", ["métaphore","mallarmé","symbolisme","suggestion","poésie","pure."]),
      att('Antithèse', "« Vos cris, que tous ont crus sortir de votre cervelle,\nOnt fait d'Hippolyte un criminel coupable. »", "Antithèse : ce passage met en relief symbolisme — suggestion et poésie pure. — poème n°7 et oriente la lecture vers une tension sensible propre à Mallarmé.", ["antithèse","mallarmé","symbolisme","suggestion","poésie","pure."]),
      att('Registre pathétique', "« PHÈDRE\nIl s'est bien débattu contre mon innocence ! »", "Registre pathétique : ce passage met en relief symbolisme — suggestion et poésie pure. — poème n°7 et oriente la lecture vers une tension sensible propre à Mallarmé.", ["registre pathétique","mallarmé","symbolisme","suggestion","poésie","pure."]),
      att('Anaphore', "« OENONE\nMais les bruits en sont forts, et la cour s'en fomente. »", "Anaphore : ce passage met en relief symbolisme — suggestion et poésie pure. — poème n°7 et oriente la lecture vers une tension sensible propre à Mallarmé.", ["anaphore","mallarmé","symbolisme","suggestion","poésie","pure."]),
    ],
  },
  'GT-712': {
    texte: `objet qui m'avait tant de charmes !
LE COMTE
Tu dois maintenant haïr ce qu'un jour tu aimas.
CHIMÈNE
Va, je ne te hais point, tu penses que je te hais ?
Mes blessures ont un cœur qui n'est pas endurci ;
À qui venge mon père il s'attache et se donne,
Et moins il m'offense, plus je le pardonne.
LE COMTE
Tu l'aimes donc toujours ?
CHIMÈNE
Je l'aimais innocemment, quand mon père vivait ;
Et tu devais choisir un époux à ta fille,
Sans me contraindre à rompre un nœud si fortement noué.
LE COMTE
Tu ne hais donc point celui qui t'a fait outrage ?
CHIMÈNE
Il m'offense, et je l'aime ; et malgré mon courroux,
Je sens qu'en dépit de tout l'effort que je puis faire,
Je pleure sa victoire, et tremble pour sa vie.`,
    contexte: "Poème dialogué — quête artistique. — poème n°3.",
    attendus: [
      att('Litote', "« Va, je ne te hais point, tu penses que je te hais ? »", "Litote : Chimène nie la haine pour exprimer l'amour — la négation atténue une passion que le devoir lui interdit d'avouer.", ["litote","hais","amour","négation","devoir","chimène"]),
      att('Antithèse', "« Il m'offense, et je l'aime »", "Antithèse entre offense et amour : Corneille condense le conflit tragique entre honneur et passion dans une formule brève.", ["antithèse","offense","aime","honneur","passion","conflit"]),
      att('Registre pathétique', "« Je pleure sa victoire, et tremble pour sa vie »", "Registre pathétique : Chimène avoue sa compassion malgré le devoir de vengeance — pitié mêlée à l'indignation.", ["pathétique","pleure","tremble","pitié","vengeance","compassion"]),
      att('Dialogue', "« Tu l'aimes donc toujours ? »", "Dialogue : le père interroge et force Chimène à révéler son trouble — la scène dramatise l'aveu contraint.", ["dialogue","aime","père","aveu","interrogation","trouble"]),
    ],
  },
  'GT-715': {
    texte: `t, tu penses que je te hais ?
Mes blessures ont un cœur qui n'est pas endurci ;
À qui venge mon père il s'attache et se donne,
Et moins il m'offense, plus je le pardonne.
LE COMTE
Tu l'aimes donc toujours ?
CHIMÈNE
Je l'aimais innocemment, quand mon père vivait ;
Et tu devais choisir un époux à ta fille,
Sans me contraindre à rompre un nœud si fortement noué.
LE COMTE
Tu ne hais donc point celui qui t'a fait outrage ?
CHIMÈNE
Il m'offense, et je l'aime ; et malgré mon courroux,
Je sens qu'en dépit de tout l'effort que je puis faire,
Je pleure sa victoire, et tremble pour sa vie.`,
    contexte: "Autobiographie — origines sociales et modestie civique.",
    attendus: [
      att('Métaphore', "« t, tu penses que je te hais ? »", "Métaphore : ce passage met en relief autobiographie — origines sociales et modestie civique et oriente la lecture vers une tension sensible propre à Rousseau.", ["métaphore","rousseau","autobiographie","origines","sociales","modestie"]),
      att('Antithèse', "« Mes blessures ont un cœur qui n'est pas endurci ; »", "Antithèse : ce passage met en relief autobiographie — origines sociales et modestie civique et oriente la lecture vers une tension sensible propre à Rousseau.", ["antithèse","rousseau","autobiographie","origines","sociales","modestie"]),
      att('Registre pathétique', "« À qui venge mon père il s'attache et se donne,\nEt moins il m'offense, plus je le pardonne. »", "Registre pathétique : ce passage met en relief autobiographie — origines sociales et modestie civique et oriente la lecture vers une tension sensible propre à Rousseau.", ["registre pathétique","rousseau","autobiographie","origines","sociales","modestie"]),
      att('Anaphore', "« LE COMTE\nTu l'aimes donc toujours ? »", "Anaphore : ce passage met en relief autobiographie — origines sociales et modestie civique et oriente la lecture vers une tension sensible propre à Rousseau.", ["anaphore","rousseau","autobiographie","origines","sociales","modestie"]),
    ],
  },
  'GT-717': {
    texte: `iquement voilés par leur chemise blanche, à demi perdus dans la pénombre du matin, et semblaient des spectres qui attendaient le jour pour disparaître. Deux hommes du poste principal, debout dans la tranchée, la lunette au front, et le fusil à la main, se penchaient sur le bord et regardaient au loin le bout de la rue Jean-Pierre-Martyr. L'attente était lugubre ; on n'entendait que le bruit des marteaux des serruriers qui clouaient les portes, ou des gardes nationaux qui allaient ou venaient, ou des sentinelles qui s'interpellaient ; et la ville, effrayée, se taisait dans l'ombre.`,
    contexte: "Poésie engagée — satire politique. — poème n°1.",
    attendus: [
      att('Métaphore', "« L'attente était lugubre ; »", "Métaphore : ce passage met en relief poésie engagée — satire politique. — poème n°1 et oriente la lecture vers une tension sensible propre à Hugo.", ["métaphore","hugo","poésie","engagée","satire","politique."]),
      att('Antithèse', "« et la ville, effrayée, se taisait dans l'ombre. »", "Antithèse : ce passage met en relief poésie engagée — satire politique. — poème n°1 et oriente la lecture vers une tension sensible propre à Hugo.", ["antithèse","hugo","poésie","engagée","satire","politique."]),
      att('Registre pathétique', "« iquement voilés par leur chemise blanche, à demi perdus dans la pénombre du matin, et semblaient »", "Registre pathétique : ce passage met en relief poésie engagée — satire politique. — poème n°1 et oriente la lecture vers une tension sensible propre à Hugo.", ["registre pathétique","hugo","poésie","engagée","satire","politique."]),
      att('Anaphore', "« pénombre du matin, et semblaient des spectres qui attendaient le jour pour disparaître. Deux hommes du »", "Anaphore : ce passage met en relief poésie engagée — satire politique. — poème n°1 et oriente la lecture vers une tension sensible propre à Hugo.", ["anaphore","hugo","poésie","engagée","satire","politique."]),
    ],
  },
  'GT-719': {
    texte: `s atteigne il est temps.
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Poésie populaire — humour et tendresse. — poème n°3.",
    attendus: [
      att('Métaphore', "« s atteigne il est temps. »", "Métaphore : ce passage met en relief poésie populaire — humour et tendresse. — poème n°3 et oriente la lecture vers une tension sensible propre à Prévert.", ["métaphore","prévert","poésie","populaire","humour","tendresse."]),
      att('Antithèse', "« Les prêtres, qu'on offense, chercheront un supplice ; »", "Antithèse : ce passage met en relief poésie populaire — humour et tendresse. — poème n°3 et oriente la lecture vers une tension sensible propre à Prévert.", ["antithèse","prévert","poésie","populaire","humour","tendresse."]),
      att('Registre pathétique', "« Vos cris, que tous ont crus sortir de votre cervelle,\nOnt fait d'Hippolyte un criminel coupable. »", "Registre pathétique : ce passage met en relief poésie populaire — humour et tendresse. — poème n°3 et oriente la lecture vers une tension sensible propre à Prévert.", ["registre pathétique","prévert","poésie","populaire","humour","tendresse."]),
      att('Anaphore', "« PHÈDRE\nIl s'est bien débattu contre mon innocence ! »", "Anaphore : ce passage met en relief poésie populaire — humour et tendresse. — poème n°3 et oriente la lecture vers une tension sensible propre à Prévert.", ["anaphore","prévert","poésie","populaire","humour","tendresse."]),
    ],
  },
  'GT-720': {
    texte: `on offense, chercheront un supplice ;
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Roman — mensonge et quête de vérité. — Ouverture / incipit.",
    attendus: [
      att('Métaphore', "« on offense, chercheront un supplice ; »", "Métaphore : ce passage met en relief roman — mensonge et quête de vérité. — ouverture / incipit et oriente la lecture vers une tension sensible propre à Gide.", ["métaphore","gide","roman","mensonge","quête","vérité."]),
      att('Antithèse', "« Vos cris, que tous ont crus sortir de votre cervelle,\nOnt fait d'Hippolyte un criminel coupable. »", "Antithèse : ce passage met en relief roman — mensonge et quête de vérité. — ouverture / incipit et oriente la lecture vers une tension sensible propre à Gide.", ["antithèse","gide","roman","mensonge","quête","vérité."]),
      att('Registre pathétique', "« PHÈDRE\nIl s'est bien débattu contre mon innocence ! »", "Registre pathétique : ce passage met en relief roman — mensonge et quête de vérité. — ouverture / incipit et oriente la lecture vers une tension sensible propre à Gide.", ["registre pathétique","gide","roman","mensonge","quête","vérité."]),
      att('Anaphore', "« OENONE\nMais les bruits en sont forts, et la cour s'en fomente. »", "Anaphore : ce passage met en relief roman — mensonge et quête de vérité. — ouverture / incipit et oriente la lecture vers une tension sensible propre à Gide.", ["anaphore","gide","roman","mensonge","quête","vérité."]),
    ],
  },
  'GT-721': {
    texte: `cris, que tous ont crus sortir de votre cervelle,
Ont fait d'Hippolyte un criminel coupable.
PHÈDRE
Il s'est bien débattu contre mon innocence !
OENONE
Mais les bruits en sont forts, et la cour s'en fomente.
Faut-il d'un crime obscur affranchir le coupable ?
Faites-vous jour, ou plût au ciel que le crime
Vous fût inconnu !
PHÈDRE
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Autobiographie collective — mémoire socialisée et effacement du vécu individuel.",
    attendus: [
      att('Métaphore', "« cris, que tous ont crus sortir de votre cervelle,\nOnt fait d'Hippolyte un criminel coupable. »", "Métaphore : ce passage met en relief autobiographie collective — mémoire socialisée et effacement du vécu individuel et oriente la lecture vers une tension sensible propre à Ernaux.", ["métaphore","ernaux","autobiographie","collective","mémoire","socialisée"]),
      att('Antithèse', "« PHÈDRE\nIl s'est bien débattu contre mon innocence ! »", "Antithèse : ce passage met en relief autobiographie collective — mémoire socialisée et effacement du vécu individuel et oriente la lecture vers une tension sensible propre à Ernaux.", ["antithèse","ernaux","autobiographie","collective","mémoire","socialisée"]),
      att('Registre pathétique', "« OENONE\nMais les bruits en sont forts, et la cour s'en fomente. »", "Registre pathétique : ce passage met en relief autobiographie collective — mémoire socialisée et effacement du vécu individuel et oriente la lecture vers une tension sensible propre à Ernaux.", ["registre pathétique","ernaux","autobiographie","collective","mémoire","socialisée"]),
      att('Anaphore', "« Faut-il d'un crime obscur affranchir le coupable ? »", "Anaphore : ce passage met en relief autobiographie collective — mémoire socialisée et effacement du vécu individuel et oriente la lecture vers une tension sensible propre à Ernaux.", ["anaphore","ernaux","autobiographie","collective","mémoire","socialisée"]),
    ],
  },
  'GT-723': {
    texte: `E
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin`,
    contexte: "Roman sentimental — passion et fatalité. — Portrait du personnage.",
    attendus: [
      att('Apostrophe', "« Ô Vénus ! je le sais, tu veux que je meure »", "Apostrophe : Phèdre interpelle la déesse et personnifie la fatalité amoureuse — la passion devient une force divine qui la condamne.", ["apostrophe","vénus","fatalité","passion","mort","tragique"]),
      att('Antithèse', "« perdre celui qu'il offense »", "Antithèse entre sauver Phèdre et perdre Hippolyte : Oenone installe le dilemme criminel qui précipitera la catastrophe.", ["antithèse","sauver","perdre","hippolyte","dilemme","catastrophe"]),
      att('Registre tragique', "« Faites-vous jour, ou plût au ciel que le crime / Vous fût inconnu ! »", "Registre tragique : le choix entre aveu et mensonge dépasse les personnages — la fatalité du secret amoureux mène au crime.", ["registre","tragique","crime","aveu","mensonge","fatalité"]),
      att('Dialogue', "« Quel crime ? Est-ce un crime d'aimer ? »", "Dialogue : la question rhétorique de Phèdre oppose passion innocente et loi morale — tension dramatique entre désir et devoir.", ["dialogue","crime","aimer","passion","devoir","tension"]),
    ],
  },
  'GT-726': {
    texte: `'il faut sacrifier pour sauver votre vie.
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
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Poétique du symbolisme — Art poétique. — poème n°5.",
    attendus: [
      att('Apostrophe', "« Ô Vénus ! je le sais, tu veux que je meure »", "Apostrophe : Phèdre interpelle la déesse et personnifie la fatalité amoureuse — la passion devient une force divine qui la condamne.", ["apostrophe","vénus","fatalité","passion","mort","tragique"]),
      att('Antithèse', "« perdre celui qu'il offense »", "Antithèse entre sauver Phèdre et perdre Hippolyte : Oenone installe le dilemme criminel qui précipitera la catastrophe.", ["antithèse","sauver","perdre","hippolyte","dilemme","catastrophe"]),
      att('Registre tragique', "« Faites-vous jour, ou plût au ciel que le crime / Vous fût inconnu ! »", "Registre tragique : le choix entre aveu et mensonge dépasse les personnages — la fatalité du secret amoureux mène au crime.", ["registre","tragique","crime","aveu","mensonge","fatalité"]),
      att('Dialogue', "« Quel crime ? Est-ce un crime d'aimer ? »", "Dialogue : la question rhétorique de Phèdre oppose passion innocente et loi morale — tension dramatique entre désir et devoir.", ["dialogue","crime","aimer","passion","devoir","tension"]),
    ],
  },
  'GT-728': {
    texte: `te de poisons, ouverte enfacinant et béante comme un bâtard de couche qui se chaufferait au soleil. — Mon beau soleil, ciel pur et de l'azur ! Tout cela pour s'ouvrir comme un matelas sans fond. Les bêtes, dressées sur cette bedaine immonde, agitaient craintivement ces quartiers vivants, d'une croupe horrible, entassaient de noires millions de formes, qui murmuraient comme des outils. On voyait tout pourri sur tout ce pétrifié, une brume de pourriture s'étalait au loin sur le cadavre de merde tremblant d'engouement.`,
    contexte: "Poèmes en prose — modernité urbaine. — poème n°3.",
    attendus: [
      att('Métaphore', "« te de poisons, ouverte enfacinant et béante comme un bâtard de couche qui se chaufferait au soleil. »", "Métaphore : ce passage met en relief poèmes en prose — modernité urbaine. — poème n°3 et oriente la lecture vers une tension sensible propre à Baudelaire.", ["métaphore","baudelaire","poèmes","prose","modernité","urbaine."]),
      att('Antithèse', "« — Mon beau soleil, ciel pur et de l'azur ! »", "Antithèse : ce passage met en relief poèmes en prose — modernité urbaine. — poème n°3 et oriente la lecture vers une tension sensible propre à Baudelaire.", ["antithèse","baudelaire","poèmes","prose","modernité","urbaine."]),
      att('Registre pathétique', "« Tout cela pour s'ouvrir comme un matelas sans fond. »", "Registre pathétique : ce passage met en relief poèmes en prose — modernité urbaine. — poème n°3 et oriente la lecture vers une tension sensible propre à Baudelaire.", ["registre pathétique","baudelaire","poèmes","prose","modernité","urbaine."]),
      att('Anaphore', "« te de poisons, ouverte enfacinant et béante comme un bâtard de couche qui se chaufferait au »", "Anaphore : ce passage met en relief poèmes en prose — modernité urbaine. — poème n°3 et oriente la lecture vers une tension sensible propre à Baudelaire.", ["anaphore","baudelaire","poèmes","prose","modernité","urbaine."]),
    ],
  },
  'GT-729': {
    texte: `Voreux, l'homme semé, redoutable, géant pour ainsi dire, était cramponné à sa veine. Il l'avait épuisée, en fait, il avait commencé à dévorer la roche autour d'elle. Maintenant, dans le beuglement du ventilateur, on entendait les coups sourds de ce travail de bête. Les herses de fonte bavaient des blocs de houille, l'entonnoir avalait des montagnes de charbon, la cage avalait des hommes et rejetait des hommes, sans relâche, avec l'appétit brûlant d'un gosier moulu et qui ne renoncerait qu'à la dernière marée. Et les mineurs montaient, noirs, écrasés, les yeux blancs dans les faces de charbon, courbés sous la fatigue, comme des damnés remontant de l'enfer. La fosse crachait sa besogne, hommes et bêtes confondus dans la nuit du travail.`,
    contexte: "Engagement — devoir moral de l'écrivain, appel à la nation (affaire Dreyfus).",
    attendus: [
      att('Métaphore', "« Voreux, l'homme semé, redoutable, géant pour ainsi dire, était cramponné à sa veine. »", "Métaphore : ce passage met en relief engagement — devoir moral de l'écrivain, appel à la nation (affaire dreyfus) et oriente la lecture vers une tension sensible propre à Zola.", ["métaphore","zola","engagement","devoir","moral","l'écrivain,"]),
      att('Antithèse', "« Il l'avait épuisée, en fait, il avait commencé à dévorer la roche autour d'elle. »", "Antithèse : ce passage met en relief engagement — devoir moral de l'écrivain, appel à la nation (affaire dreyfus) et oriente la lecture vers une tension sensible propre à Zola.", ["antithèse","zola","engagement","devoir","moral","l'écrivain,"]),
      att('Registre pathétique', "« Maintenant, dans le beuglement du ventilateur, on entendait les coups sourds de ce travail de bête. »", "Registre pathétique : ce passage met en relief engagement — devoir moral de l'écrivain, appel à la nation (affaire dreyfus) et oriente la lecture vers une tension sensible propre à Zola.", ["registre pathétique","zola","engagement","devoir","moral","l'écrivain,"]),
      att('Anaphore', "« La fosse crachait sa besogne, hommes et bêtes confondus dans la nuit du travail. »", "Anaphore : ce passage met en relief engagement — devoir moral de l'écrivain, appel à la nation (affaire dreyfus) et oriente la lecture vers une tension sensible propre à Zola.", ["anaphore","zola","engagement","devoir","moral","l'écrivain,"]),
    ],
  },
  'GT-730': {
    texte: `Duroy montait, toujours plus haut ; il séduisait, il trahissait, il profitait de tout, et Paris s'ouvrait à lui comme une proie facile. Il avait appris à se servir des femmes comme d'échelons, des hommes comme d'outils, et des journaux comme d'instruments de pouvoir. Rien ne l'arrêtait : ni la honte, ni la loyauté, ni même l'amour. Chaque soir, en rentrant dans son appartement neuf, il contemplait la ville illuminée et se disait que tout cela était à lui, ou le serait bientôt. La fortune, la gloire, les honneurs — il les voyait à portée de main, et il avançait, implacable, vers ce but unique : dominer.`,
    contexte: "Nouvelle réaliste — ironie du destin. — Portrait du personnage.",
    attendus: [
      att('Métaphore', "« Duroy montait, toujours plus haut ; »", "Métaphore : ce passage met en relief nouvelle réaliste — ironie du destin. — portrait du personnage et oriente la lecture vers une tension sensible propre à Maupassant.", ["métaphore","maupassant","nouvelle","réaliste","ironie","destin."]),
      att('Antithèse', "« il séduisait, il trahissait, il profitait de tout, et Paris s'ouvrait à lui comme une proie facile. »", "Antithèse : ce passage met en relief nouvelle réaliste — ironie du destin. — portrait du personnage et oriente la lecture vers une tension sensible propre à Maupassant.", ["antithèse","maupassant","nouvelle","réaliste","ironie","destin."]),
      att('Registre pathétique', "« Rien ne l'arrêtait : »", "Registre pathétique : ce passage met en relief nouvelle réaliste — ironie du destin. — portrait du personnage et oriente la lecture vers une tension sensible propre à Maupassant.", ["registre pathétique","maupassant","nouvelle","réaliste","ironie","destin."]),
      att('Anaphore', "« ni la honte, ni la loyauté, ni même l'amour. »", "Anaphore : ce passage met en relief nouvelle réaliste — ironie du destin. — portrait du personnage et oriente la lecture vers une tension sensible propre à Maupassant.", ["anaphore","maupassant","nouvelle","réaliste","ironie","destin."]),
    ],
  },
  'GT-731': {
    texte: `s, que tous ont crus sortir de votre cervelle,
Ont fait d'Hippolyte un criminel coupable.
PHÈDRE
Il s'est bien débattu contre mon innocence !
OENONE
Mais les bruits en sont forts, et la cour s'en fomente.
Faut-il d'un crime obscur affranchir le coupable ?
Faites-vous jour, ou plût au ciel que le crime
Vous fût inconnu !
PHÈDRE
Quel crime ? Est-ce un crime d'aimer ?
OENONE
Vous avez trop parlé, Madame, et votre amour
S'est trop effrontément trahi par vos transports.
Il faut, pour le sauver, perdre celui qu'il offense.
Accusez-le ; mon dessein ne s'étend pas plus loin.`,
    contexte: "Conte philosophique — amitié et regard. — Portrait du personnage.",
    attendus: [
      att('Métaphore', "« s, que tous ont crus sortir de votre cervelle,\nOnt fait d'Hippolyte un criminel coupable. »", "Métaphore : ce passage met en relief conte philosophique — amitié et regard. — portrait du personnage et oriente la lecture vers une tension sensible propre à Saint-Exupéry.", ["métaphore","saint-exupéry","conte","philosophique","amitié","regard."]),
      att('Antithèse', "« PHÈDRE\nIl s'est bien débattu contre mon innocence ! »", "Antithèse : ce passage met en relief conte philosophique — amitié et regard. — portrait du personnage et oriente la lecture vers une tension sensible propre à Saint-Exupéry.", ["antithèse","saint-exupéry","conte","philosophique","amitié","regard."]),
      att('Registre pathétique', "« OENONE\nMais les bruits en sont forts, et la cour s'en fomente. »", "Registre pathétique : ce passage met en relief conte philosophique — amitié et regard. — portrait du personnage et oriente la lecture vers une tension sensible propre à Saint-Exupéry.", ["registre pathétique","saint-exupéry","conte","philosophique","amitié","regard."]),
      att('Anaphore', "« Faut-il d'un crime obscur affranchir le coupable ? »", "Anaphore : ce passage met en relief conte philosophique — amitié et regard. — portrait du personnage et oriente la lecture vers une tension sensible propre à Saint-Exupéry.", ["anaphore","saint-exupéry","conte","philosophique","amitié","regard."]),
    ],
  },
  'GT-732': {
    texte: `PHÈDRE
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
Sans me laisser un mot, sans me dire adieu !`,
    contexte: "Tragédie de la passion transgressive et du devoir. — Acte 2, scène 10.",
    attendus: [
      att('Métaphore', "« C'est Vénus tout entière à sa proie attachée »", "Métaphore mythologique : Phèdre se définit comme victime de la déesse — fatalité amoureuse.", ["métaphore","vénus","proie","mythologie","fatalité","déesse"]),
      att('Anaphore', "« J'ai voulu »", "Anaphore : la répétition des tentatives avouées structure le récit de la passion refoulée.", ["anaphore","voulu","tentatives","passion","refoulée","répétition"]),
      att('Registre tragique', "« Ah ! cruel, tu le savais, toi, que je t'aimais ! »", "Registre tragique : l'aveu final déchaîne la catastrophe — irruption de la vérité.", ["tragique","cruel","aimais","aveu","catastrophe","vérité"]),
      att('Apostrophe', "« Hélas ! Madame, enfin je croyais vous connaître »", "Apostrophe : Hippolyte exprime le choc de la révélation — rupture du malentendu.", ["apostrophe","madame","choc","révélation","malentendu","hippolyte"]),
    ],
  },
};
