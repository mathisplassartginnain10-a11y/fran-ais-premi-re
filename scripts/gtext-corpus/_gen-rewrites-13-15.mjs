/**
 * Réécritures manuelles GT-294+ (extra13, extra14, extra15) — fusion dans rewrites-all.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { att } from '../gtext-enrichment-lib.mjs';

const NEW_REWRITES = {
  'GT-294': {
    texte: `Pour l'enfant, amoureux de cartes et d'estampes,
L'univers est égal à son vaste appétit.
Ah ! que le monde est grand à la clarté des lampes !
Aux yeux du souvenir que le monde est petit !

Un matin, nous partîmes, le cœur plein de flamme,
Le cœur plein de flamme et les yeux pleins de rosée ;
Nous allions, suivant le rythme de la lame,
Berçant notre infini sur le fini des mers.

Mais les vrais voyageurs sont ceux-là seuls qui partent
Pour partir ; cœurs légers, semblables aux ballons,
De leur fatalité jamais ils ne s'écartent,
Et, sans savoir pourquoi, disent toujours : Allons !

Exquis en tout, un sait la cause de son voyage
Et l'effet ; des humeurs légères ou profondes,
Leur esprit humain a, qui de la boule ronge,
Cette fierté d'hyène et de panthère vagabondes !`,
    contexte: "Poème « Le Voyage » — modernité baudelairienne, spleen et quête sans fin.",
    attendus: [
      att("Antithèse", "« que le monde est grand… que le monde est petit »", "Antithèse : l'opposition entre immensité rêvée et rétrécissement du souvenir structure la méditation sur le voyage.", ["antithèse","grand","petit","monde","souvenir","voyage"]),
      att("Métaphore", "« Berçant notre infini sur le fini des mers »", "Métaphore : l'infini du désir reposant sur le fini de l'océan condense la tension entre idéal et réalité.", ["métaphore","infini","fini","mers","désir","idéal"]),
      att("Énumération", "« cœurs légers, semblables aux ballons »", "Énumération et comparaison : le voyageur type se définit par une série d'images légères et instables.", ["énumération","cœurs","ballons","voyageur","images","légèreté"]),
      att("Registre lyrique", "« le cœur plein de flamme et les yeux pleins de rosée »", "Registre lyrique : subjectivité romantique et émotion du départ inaugural.", ["lyrique","flamme","rosée","départ","émotion","romantisme"]),
    ],
  },
  'GT-295': {
    texte: `Souvent sur la montagne, à l'ombre du vieux chêne,
Au coucher du soleil, tristement je m'assieds ;
Je promène au hasard mes regards sur la plaine,
Dont le tableau changeant se déroule à mes pieds.

Ici gronde le fleuve aux flots impétueux ;
Il serpente et s'enfonce en un labyrinthe affreux ;
Là le lac immobile et serein s'étend
Comme un miroir profond qui réfléchit l'azur.

De tous côtés des bois couronnent les coteaux ;
Le vent agite et fait bruire leur sombre feuillage ;
Et le rocher, parmi les bruyères en fleurs,
De son côté escarpé domine le village.

Mais à l'horizon, là-bas, où le ciel se courbe,
Comme un voile de deuil sur ce monde en détresse,
Je vois, sur le sommet des montagnes superbes,
L'immense soleil qui descend dans la tristesse.`,
    contexte: "« L'Isolement » — paysage mélancolique et solitude lyrique chez Lamartine.",
    attendus: [
      att("Personnification", "« le lac immobile… Comme un miroir profond qui réfléchit l'azur »", "Personnification/comparaison : le lac devient miroir vivant — fusion du paysage et de l'âme.", ["personnification","lac","miroir","azur","paysage","âme"]),
      att("Champ lexical", "« tristement… tristesse… deuil… détresse »", "Champ lexical de la tristesse : l'ensemble lexical colore le paysage d'une mélancolie romantique.", ["champ lexical","tristesse","deuil","détresse","mélancolie","romantisme"]),
      att("Registre lyrique", "« tristement je m'assieds »", "Registre lyrique : le moi poétique s'accorde au décor pour exprimer l'isolement intérieur.", ["lyrique","assieds","isolement","moi","intérieur","solitude"]),
      att("Antithèse", "« tableau changeant »", "Antithèse implicite entre mobilité du paysage et fixité de la tristesse du poète.", ["antithèse","changeant","fixité","paysage","tristesse","contraste"]),
    ],
  },
  'GT-296': {
    texte: `Dans une province de la Westphalie, dans le château du baron de Thunder-ten-tronckh, vivait un jeune garçon à qui la nature avait donné les mœurs les plus douces. Sa physionomie annonçait son âme. Il avait le jugement assez droit, avec l'esprit le plus simple ; c'est, je crois, pour cette raison qu'il se nommait Candide. Les domestiques de la maison faisaient peu de cas de lui, parce qu'ils le voyaient mêlé à plus d'aisance aux travaux de la cuisine qu'aux exercices de la chasse. Mademoiselle Cunégonde, fille du baron, âgée de dix-sept ans, était à ravir. Le maître de la maison avait pour précepteur un philosophe nommé Pangloss, le plus grand professeur de métaphysico-théologie-cosmolonigologie du monde entier. Il avait prouvé de manière incontestable qu'il n'y a point d'effet sans cause, et que, dans ce meilleur des mondes possibles, le château de monseigneur le baron était le plus beau des châteaux.`,
    contexte: "Incipit de Candide — conte philosophique et critique de l'optimisme leibnizien.",
    attendus: [
      att("Ironie", "« dans ce meilleur des mondes possibles »", "Ironie : Pangloss proclame l'optimisme que le récit va systématiquement démentir.", ["ironie","meilleur","mondes","optimisme","pangloss","critique"]),
      att("Caractérisation", "« un jeune garçon à qui la nature avait donné les mœurs les plus douces »", "Caractérisation : Candide est défini par sa naïveté — personnage-type du conte philosophique.", ["caractérisation","douceur","naïveté","candide","conte","philosophique"]),
      att("Hyperbole", "« le plus grand professeur de métaphysico-théologie-cosmolonigologie »", "Hyperbole : le néologisme savant ridiculise le discours philosophique creux.", ["hyperbole","professeur","métaphysico","ridicule","philosophie","néologisme"]),
      att("Registre satirique", "« faisaient peu de cas de lui »", "Registre satirique : Voltaire brocarde les hiérarchies sociales et l'arrogance nobiliaire.", ["satirique","domestiques","hiérarchie","sociale","voltaire","arrogance"]),
    ],
  },
  'GT-297': {
    texte: `NÉRON
J'ai donc enfin trouvé l'art d'être aimé d'Agrippine ?
NARCISSE
Seigneur, elle a paru vous aimer.
NÉRON
Elle a paru ! Et quand je l'ai vue à mes genoux,
Quand, les yeux dans les yeux, elle m'a juré son amour,
Quand, pour me consoler, elle a feint de partager
Ma douleur, et m'a dit : « Mon fils, mon cher Néron »,
J'ai cru tout ce qu'elle disait, et mon cœur abusé
A voulu se livrer à cette fausse tendresse.
NARCISSE
Seigneur, peut-être a-t-elle eu quelque bonté pour vous.
NÉRON
Narcisse, ne me flattez point. Je sais qu'elle me hait.
Je le vois à ses yeux, à son air, à ses discours.
Elle ne m'aime point ; elle n'aime que Britannicus.
NARCISSE
Seigneur, il faut pourtant qu'elle vous obéisse.
NÉRON
Obéir ! C'est bien peu pour une mère et pour une reine.
Je veux qu'elle m'aime, et qu'elle m'aime par tendresse.`,
    contexte: "Néron et Narcisse (II, 2) — portrait du tyran, jalousie et registre politique.",
    attendus: [
      att("Registre tragique", "« Je veux qu'elle m'aime, et qu'elle m'aime par tendresse »", "Registre tragique : Néron transforme le pouvoir en exigence affective — démesure tyrannique.", ["tragique","aime","tendresse","néron","tyran","démesure"]),
      att("Antithèse", "« elle a paru vous aimer » / « Je sais qu'elle me hait »", "Antithèse entre apparence et réalité : le tyran oscille entre illusion et lucidité.", ["antithèse","aimer","hait","apparence","réalité","illusion"]),
      att("Dialogue", "« Seigneur, elle a paru vous aimer »", "Dialogue : Narcisse tempère et révèle le trouble de Néron — scène de confidence politique.", ["dialogue","seigneur","narcisse","confidence","politique","trouble"]),
      att("Anaphore", "« Quand… Quand… Quand… »", "Anaphore sur « Quand » : accumulation des souvenirs qui martèle la déception amoureuse.", ["anaphore","quand","souvenirs","déception","accumulation","amour"]),
    ],
  },
  'GT-298': {
    texte: `Il pleure dans mon cœur
Comme il pleut sur la ville ;
Quelle est cette langueur
Qui pénètre mon cœur ?

Ô bruit doux de la pluie
Par terre et sur les toits !
Pour un cœur qui s'ennuie,
Ô le chant de la pluie !

Il pleure sans raison
Dans ce cœur qui s'écœure.
Quoi ! nulle trahison ?...
Ce deuil est sans raison.

C'est bien la pire peine
De ne savoir pourquoi,
Sans amour et sans haine,
Sans savoir pour quoi.`,
    contexte: "« Spleen » (Romances sans paroles) — musicalité verlainienne et mélancolie sans cause.",
    attendus: [
      att("Comparaison", "« Comme il pleut sur la ville »", "Comparaison : les larmes intérieures sont assimilées à la pluie — fusion paysage/sentiment.", ["comparaison","pleut","ville","larmes","pluie","sentiment"]),
      att("Musicalité", "« Ô bruit doux de la pluie »", "Musicalité : vers courts, répétitions et sonorités douces créent une harmonie impressionniste.", ["musicalité","bruit","pluie","vers","impressionniste","harmonie"]),
      att("Anaphore", "« Il pleure… Il pleure sans raison »", "Anaphore sur « Il pleure » : insistance sur le spleen irrationnel.", ["anaphore","pleure","raison","spleen","insistance","irrationnel"]),
      att("Registre lyrique", "« Sans amour et sans haine »", "Registre lyrique : l'ennui pur, détaché de toute passion, définit l'état d'âme moderne.", ["lyrique","amour","haine","ennui","mélancolie","moderne"]),
    ],
  },
  'GT-299': {
    texte: `Pauca meae — Quatre septembre ! — Peut-être ce jour-là
Léopoldine était-elle sortie de la maison,
Allant, sous un ciel d'août, joyeuse, un livre à la main,
Vers le bateau où l'attendait Charles,
Son époux, son bien-aimé, son cher bien-aimé,
Qui, debout sur le tillac, souriait à la rive,
Et qui lui tendait les bras, et qui l'appelait,
Et qui disait : Viens ! — et qui l'attendait.

Et la barque partit, et la barque voguait,
Et la barque allait, et la barque filait,
Et la Seine coulait, et la Seine roulait,
Et la Seine emportait la barque et les deux êtres,
Et la Seine les noya, et la Seine les perdit,
Et la Seine les emporta dans son lit profond,
Et la Seine les cacha dans son lit profond,
Et la Seine ne rendit plus jamais les deux êtres.`,
    contexte: "« Pauca meae » — récit de la noyade de Léopoldine à Villequier, deuil paternel.",
    attendus: [
      att("Anaphore", "« Et la barque partit, et la barque voguait »", "Anaphore sur « Et la barque » : rythme incantatoire qui précipite la catastrophe.", ["anaphore","barque","rythme","catastrophe","incantatoire","précipite"]),
      att("Registre pathétique", "« Et la Seine les noya, et la Seine les perdit »", "Registre pathétique : la Seine personnifiée devient agent de la mort — compassion et horreur.", ["pathétique","seine","noya","mort","compassion","horreur"]),
      att("Énumération", "« son époux, son bien-aimé, son cher bien-aimé »", "Énumération : triple apostrophe renforce l'affection avant le drame.", ["énumération","époux","bien-aimé","affection","drame","triple"]),
      att("Narration", "« Quatre septembre ! — Peut-être ce jour-là »", "Narration : Hugo reconstitue le drame par hypothèse poétique — mémoire et deuil.", ["narration","septembre","hypothèse","mémoire","deuil","drame"]),
    ],
  },
  'GT-300': {
    texte: `La Fantine avait quitté M. sur la nuit qui suivit la scène que nous venons de raconter ; elle avait quitté M. sans oser aller chercher son enfant chez la Thénardier. Malheureusement, avant de partir, elle avait eu le tort de régler ses comptes avec le maître de l'auberge, et de lui remettre, en paiement, les soixante francs que les Thénardier avaient prétendu lui devoir. Pendant le voyage, la Fantine avait réalisé qu'elle ne pourrait jamais retourner à M. Elle avait donc pris le chemin de Paris. Arrivée à Paris, elle s'était adressée à un petit ouvrier en parures, qui fabriquait des fleurs en plumes et des papillons en tissu pour les chapeaux des femmes. Elle avait trouvé du travail dans cette industrie. Elle était habile, elle gagnait sa vie honnêtement, et elle croyait qu'elle pourrait toujours y parvenir ; mais le maître-ouvrier, qui avait remarqué sa beauté, ne tarda pas à lui faire des propositions.`,
    contexte: "Livre I — descente de Fantine dans la misère, roman engagé des Misérables.",
    attendus: [
      att("Registre réaliste", "« elle gagnait sa vie honnêtement »", "Registre réaliste : le travail féminin précaire ancre le personnage dans la misère sociale.", ["réaliste","vie","travail","misère","social","féminin"]),
      att("Narration", "« La Fantine avait quitté M. sur la nuit »", "Narration à la 3e personne : le romancier suit la trajectoire sociale de Fantine.", ["narration","fantine","quitté","trajectoire","romancier","social"]),
      att("Registre pathétique", "« elle avait eu le tort de régler ses comptes »", "Registre pathétique : l'euphémisme « tort » souligne l'injustice du sort — compassion.", ["pathétique","tort","comptes","injustice","compassion","sort"]),
      att("Anticipation", "« ne tarda pas à lui faire des propositions »", "Anticipation : la chute de Fantine est annoncée — structure tragique du roman.", ["anticipation","propositions","chute","tragique","fantine","annonce"]),
    ],
  },
  'GT-301': {
    texte: `Nous étions à l'étude, quand le proviseur entra, suivi d'un nouveau habillé en bourgeois et d'un garçon de classe qui portait un grand pupitre. Ceux qui dormaient se réveillèrent, et chacun se leva comme si surpris dans son travail. Le proviseur nous fit signe de nous rasseoir ; puis, se tournant vers le maître d'études : « Monsieur le professeur, lui dit-il, voici monsieur Charles Bovary, qui entre au second. Le proviseur recommanda à Charles de se mettre au rang, et de bien suivre la classe ; mais Charles, qui ne l'écoutait guère, regardait autour de lui. Sur le mur, des cartes géographiques pendaient ; près de la fenêtre, un banc ; sur le banc, des livres ; et, dans un coin, un globe terrestre. Charles avait quinze ans ; il était de taille moyenne, les cheveux blonds, les yeux bleus, le nez droit, les lèvres minces, les mains blanches.`,
    contexte: "Incipit de Madame Bovary — entrée de Charles au collège, style réaliste flaubertien.",
    attendus: [
      att("Incipit", "« Nous étions à l'étude, quand le proviseur entra »", "Incipit : entrée en matière sobre et factuelle — pacte réaliste du roman.", ["incipit","étude","proviseur","factuel","réaliste","pacte"]),
      att("Description", "« les cheveux blonds, les yeux bleus, le nez droit »", "Description : portrait physique méthodique de Charles — style descriptif impersonnel.", ["description","cheveux","yeux","portrait","impersonnel","charles"]),
      att("Focalisation interne", "« Charles, qui ne l'écoutait guère, regardait autour de lui »", "Focalisation : le regard naïf de l'enfant structure la perception du collège.", ["focalisation","regardait","charles","naïf","perception","collège"]),
      att("Registre réaliste", "« un nouveau habillé en bourgeois »", "Registre réaliste : détail vestimentaire ancre la scène dans le quotidien provincial.", ["réaliste","bourgeois","vestimentaire","quotidien","provincial","détail"]),
    ],
  },
  'GT-303': {
    texte: `BRITANNICUS
Junie, il faut partir ; le temps presse, et Néron
Ne tardera pas longtemps à nous surprendre ensemble.
JUNIE
Hélas ! que ne suis-je morte avant cette heure !
BRITANNICUS
Pourquoi ces pleurs, Junie ? et que craignez-vous encore ?
JUNIE
Je crains tout de ce prince, et surtout de sa haine.
BRITANNICUS
Sa haine ? Il vous aime, et c'est moi qu'il poursuit.
JUNIE
Il m'aime ! Hélas ! c'est pour cela que je tremble.
BRITANNICUS
Junie, d'où vous vient cette inquiétude extrême ?
JUNIE
De ce que je l'ai vu, de ce qu'il m'a dit hier,
De ce qu'il m'a juré, de ce qu'il m'a promis,
De ce qu'il exige, et de ce qu'il menace.
BRITANNICUS
Quoi ! Néron oserait…
JUNIE
Il ose tout, Seigneur ; il est capable de tout.
BRITANNICUS
Alors, partons, Junie ; fuyons ce palais fatal.
JUNIE
Fuyons ; mais où pourrons-nous trouver un asile ?`,
    contexte: "Britannicus et Junie (III, 4) — amour contrarié par le pouvoir tyrannique de Néron.",
    attendus: [
      att("Registre tragique", "« Il ose tout, Seigneur ; il est capable de tout »", "Registre tragique : Junie désigne la démesure du tyran — menace politique sur l'amour.", ["tragique","ose","capable","tyran","démesure","menace"]),
      att("Dialogue", "« Junie, d'où vous vient cette inquiétude extrême ? »", "Dialogue : Britannicus interroge et révèle l'angoisse de Junie — tension dramatique.", ["dialogue","inquiétude","britannicus","angoisse","tension","junie"]),
      att("Anaphore", "« De ce qu'il m'a vu, de ce qu'il m'a dit »", "Anaphore sur « De ce que » : accumulation qui traduit la terreur de Junie.", ["anaphore","ce qu","accumulation","terreur","junie","insistance"]),
      att("Antithèse", "« Sa haine ? Il vous aime »", "Antithèse entre haine et amour : le tyran confond possession et passion — conflit politique.", ["antithèse","haine","aime","tyran","possession","politique"]),
    ],
  },
  'GT-305': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Hugo, Les Misérables (1862), Portrait du personnage.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-306': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Lamartine, Méditations poétiques (1820), Les Alpes.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-309': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Hugo, Les Contemplations (1856), Melancholia.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-311': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Balzac, Le Père Goriot (1835), Ouverture / incipit.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-312': {
    texte: `Souvent, pour s'amuser, les hommes d'équipage
Prennent des albatros, vastes oiseaux des mers,
Qui suivent, indolents compagnons de voyage,
Le navire glissant sur les gouffres amers.
A peine les ont-ils déposés sur les planches,
Que ces rois de l'azur, maladroits et honteux,
Laissent piteusement leurs grandes ailes blanches
Comme des avirons traîner à côté d'eux.
Le Poète est semblable au prince des nuées
Qui hante la tempête et se rit de l'archer ;
Exilé sur le sol au milieu des huées,
Ses ailes de géant l'empêchent de marcher.`,
    contexte: "Baudelaire, Les Fleurs du mal (1857), Poème 2.",
    attendus: [
      att("Comparaison", "« Le Poète est semblable au prince des nuées »", "La comparaison construit l'allégorie du poète exilé.", ["comparaison","poète","nuées","exil","spleen","idéal"]),
      att("Antithèse", "« rois de l'azur, maladroits et honteux »", "L'antithèse oppose grandeur idéale et chute terrestre.", ["antithèse","azur","honteux","chute","poésie","modernité"]),
      att("Métaphore", "« Ses ailes de géant l'empêchent de marcher »", "La métaphore dit le prix social du génie.", ["métaphore","ailes","géant","génie","condition","poète"]),
    ],
  },
  'GT-313': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Flaubert, Madame Bovary (1857), Portrait du personnage.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-314': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Stendhal, Le Rouge et le Noir (1830), Ouverture / incipit.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-315': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Camus, L'Étranger (1942), Portrait du personnage.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-317': {
    texte: `Souvent, pour s'amuser, les hommes d'équipage
Prennent des albatros, vastes oiseaux des mers,
Qui suivent, indolents compagnons de voyage,
Le navire glissant sur les gouffres amers.
A peine les ont-ils déposés sur les planches,
Que ces rois de l'azur, maladroits et honteux,
Laissent piteusement leurs grandes ailes blanches
Comme des avirons traîner à côté d'eux.
Le Poète est semblable au prince des nuées
Qui hante la tempête et se rit de l'archer ;
Exilé sur le sol au milieu des huées,
Ses ailes de géant l'empêchent de marcher.`,
    contexte: "Baudelaire, Les Fleurs du mal (1857), Poème 3.",
    attendus: [
      att("Comparaison", "« Le Poète est semblable au prince des nuées »", "La comparaison construit l'allégorie du poète exilé.", ["comparaison","poète","nuées","exil","spleen","idéal"]),
      att("Antithèse", "« rois de l'azur, maladroits et honteux »", "L'antithèse oppose grandeur idéale et chute terrestre.", ["antithèse","azur","honteux","chute","poésie","modernité"]),
      att("Métaphore", "« Ses ailes de géant l'empêchent de marcher »", "La métaphore dit le prix social du génie.", ["métaphore","ailes","géant","génie","condition","poète"]),
    ],
  },
  'GT-318': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Hugo, Les Misérables (1862), Scène clé.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-319': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Zola, Germinal (1885), Portrait du personnage.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-320': {
    texte: `Il pleure dans mon cœur
Comme il pleut sur la ville ;
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
    contexte: "Verlaine, Poèmes saturniens (1866), Poème 2.",
    attendus: [
      att("Comparaison", "« Comme il pleut sur la ville »", "La comparaison fusionne météo et mélancolie intime.", ["comparaison","pluie","ville","cœur","spleen","lyrique"]),
      att("Anaphore", "« Il pleure... Il pleure sans raison »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
      att("Musicalité", "« Ô bruit doux de la pluie »", "Les sonorités et refrains donnent au texte sa douceur plaintive.", ["musicalité","bruit","doux","refrain","impressionnisme","poésie"]),
    ],
  },
  'GT-321': {
    texte: `Je suis belle, ô mortels ! comme un rêve de pierre,
Et mon sein, où chacun s'est meurtri tour à tour,
Est fait pour inspirer au poète une amour
Éternel et muet ainsi que la matière.

Je trône dans l'azur comme un sphinx incompris ;
J'unis un cœur de neige à la blancheur des cygnes ;
Je hais le mouvement qui déplace les lignes,
Et jamais je ne pleure et jamais je ne ris.

Les poètes, devant mes grandes attitudes,
Que j'ai l'air d'emprunter aux plus fiers monuments,
Consumeront leurs jours en d'austères études ;
Car j'ai, pour fasciner ces dociles amants,
De purs miroirs qui font toutes choses plus belles :
Mes yeux, mes larges yeux aux clartés éternelles !`,
    contexte: "« La Beauté » — portrait allégorique de la Beauté froide et éternelle.",
    attendus: [
      att('Apostrophe', "« Je suis belle, ô mortels ! »", "Apostrophe : la Beauté s'adresse aux mortels et affirme sa puissance fascinante.", ['apostrophe', 'mortels', 'belle', 'puissance', 'beauté', 'allégorie']),
      att('Antithèse', "« Et jamais je ne pleure et jamais je ne ris »", "Antithèse : la Beauté refuse toute émotion — froideur idéale et impersonnelle.", ['antithèse', 'pleure', 'ris', 'froideur', 'impersonnelle', 'idéal']),
      att('Métaphore', "« comme un rêve de pierre »", "Métaphore : la Beauté est minérale et onirique — modernité baudelairienne.", ['métaphore', 'rêve', 'pierre', 'minérale', 'modernité', 'baudelaire']),
      att('Symbolisme', "« Mes yeux, mes larges yeux aux clartés éternelles »", "Symbolisme : les yeux-miroirs condensent la fascination et l'idéal artistique.", ['symbolisme', 'yeux', 'miroirs', 'fascination', 'idéal', 'art']),
    ],
  },
  'GT-323': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Hugo, Les Contemplations (1856), Poème 1.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-325': {
    texte: `Rien n'était si beau, si leste, si brillant, si bien ordonné que les deux armées.
Les trompettes, les fifres, les hautbois, les tambours, les canons formaient une harmonie
telle qu'il n'y en eut jamais en enfer.
Les canons renversèrent d'abord à peu près six mille hommes de chaque côté ;
ensuite la mousqueterie ôta du meilleur des mondes environ neuf à dix mille coquins
qui en infectaient la surface.
La baïonnette fut aussi la raison suffisante de la mort de quelques milliers d'hommes.
Candide, qui tremblait comme un philosophe, se cacha du mieux qu'il put
pendant cette boucherie héroïque.`,
    contexte: "Voltaire, Candide (1759), Scène clé.",
    attendus: [
      att("Ironie", "« une harmonie telle qu'il n'y en eut jamais en enfer »", "L'ironie dénonce l'esthétisation de la guerre.", ["ironie","harmonie","enfer","guerre","voltaire","satire"]),
      att("Hyperbole", "« du meilleur des mondes »", "La formule optimiste devient critique par contraste.", ["hyperbole","meilleur","mondes","optimisme","critique","philosophique"]),
      att("Antiphrase", "« cette boucherie héroïque »", "L'antiphrase condamne la violence militaire.", ["antiphrase","boucherie","héroïque","dénonciation","massacre","conte"]),
    ],
  },
  'GT-328': {
    texte: `Il pleure dans mon cœur
Comme il pleut sur la ville ;
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
    contexte: "Verlaine, Poèmes saturniens (1866), Poème 3.",
    attendus: [
      att("Comparaison", "« Comme il pleut sur la ville »", "La comparaison fusionne météo et mélancolie intime.", ["comparaison","pluie","ville","cœur","spleen","lyrique"]),
      att("Anaphore", "« Il pleure... Il pleure sans raison »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
      att("Musicalité", "« Ô bruit doux de la pluie »", "Les sonorités et refrains donnent au texte sa douceur plaintive.", ["musicalité","bruit","doux","refrain","impressionnisme","poésie"]),
    ],
  },
  'GT-329': {
    texte: `Souvent, pour s'amuser, les hommes d'équipage
Prennent des albatros, vastes oiseaux des mers,
Qui suivent, indolents compagnons de voyage,
Le navire glissant sur les gouffres amers.
A peine les ont-ils déposés sur les planches,
Que ces rois de l'azur, maladroits et honteux,
Laissent piteusement leurs grandes ailes blanches
Comme des avirons traîner à côté d'eux.
Le Poète est semblable au prince des nuées
Qui hante la tempête et se rit de l'archer ;
Exilé sur le sol au milieu des huées,
Ses ailes de géant l'empêchent de marcher.`,
    contexte: "Baudelaire, Les Fleurs du mal (1857), Poème 5.",
    attendus: [
      att("Comparaison", "« Le Poète est semblable au prince des nuées »", "La comparaison construit l'allégorie du poète exilé.", ["comparaison","poète","nuées","exil","spleen","idéal"]),
      att("Antithèse", "« rois de l'azur, maladroits et honteux »", "L'antithèse oppose grandeur idéale et chute terrestre.", ["antithèse","azur","honteux","chute","poésie","modernité"]),
      att("Métaphore", "« Ses ailes de géant l'empêchent de marcher »", "La métaphore dit le prix social du génie.", ["métaphore","ailes","géant","génie","condition","poète"]),
    ],
  },
  'GT-330': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Hugo, Les Contemplations (1856), Poème 2.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-331': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Hugo, Notre-Dame de Paris (1831), Ouverture / incipit.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-332': {
    texte: `Comme je descendais des Fleuves impassibles,
Je ne me sentis plus guidé par les haleurs :
Des Peaux-Rouges criards les avaient pris pour cibles,
Les ayant cloués nus aux poteaux de couleurs.
J'étais insoucieux de tous les équipages,
Porteur de blés flamands ou de cotons anglais.
Quand avec mes haleurs ont fini ces tapages,
Les Fleuves m'ont laissé descendre où je voulais.
Et dès lors, je me suis baigné dans le Poème
De la Mer, infusé d'astres, et lactescent,
Dévorant les azurs verts ; où, flottaison blême,
Et ravie, un noyé pensif parfois descend.`,
    contexte: "Rimbaud, Le Bateau ivre (1871), Poème 2.",
    attendus: [
      att("Personnification", "« Les Fleuves m'ont laissé descendre où je voulais »", "La personnification transforme l'errance en initiation poétique.", ["personnification","fleuves","errance","initiation","rimbaud","modernité"]),
      att("Champ lexical", "« Poème », « Mer », « astres », « azurs »", "Le champ lexical cosmique élargit la perception du monde.", ["champ lexical","mer","astres","azurs","vision","poésie"]),
      att("Registre lyrique", "« je me suis baigné dans le Poème »", "Le registre lyrique met en avant l'expérience intérieure du sujet.", ["lyrique","je","poème","ivresse","voyage","subjectivité"]),
    ],
  },
  'GT-333': {
    texte: `Maître Corbeau, sur un arbre perché,
Tenait en son bec un fromage.
Maître Renard, par l'odeur alléché,
Lui tint à peu près ce langage :
« Hé ! bonjour, Monsieur du Corbeau.
Que vous êtes joli ! que vous me semblez beau !
Sans mentir, si votre ramage
Se rapporte à votre plumage,
Vous êtes le Phénix des hôtes de ces bois. »
A ces mots le Corbeau ne se sent pas de joie ;
Et pour montrer sa belle voix,
Il ouvre un large bec, laisse tomber sa proie.
Le Renard s'en saisit, et dit : « Mon bon Monsieur,
Apprenez que tout flatteur
Vit aux dépens de celui qui l'écoute. »`,
    contexte: "La Fontaine, Fables (1678), Poème 1.",
    attendus: [
      att("Dialogue", "« Hé ! bonjour, Monsieur du Corbeau »", "Le dialogue met en scène l'art de persuader.", ["dialogue","renard","corbeau","flatterie","fable","morale"]),
      att("Ironie", "« Que vous êtes joli ! que vous me semblez beau ! »", "L'ironie du compliment révèle la ruse.", ["ironie","compliment","ruse","satire","la fontaine","morale"]),
      att("Morale", "« tout flatteur / Vit aux dépens de celui qui l'écoute »", "La morale explicite la leçon sociale de la fable.", ["morale","flatteur","écoute","leçon","fable","classique"]),
    ],
  },
  'GT-335': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Stendhal, Le Rouge et le Noir (1830), Portrait du personnage.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-336': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Camus, L'Étranger (1942), Scène clé.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-341': {
    texte: `Souvent, pour s'amuser, les hommes d'équipage
Prennent des albatros, vastes oiseaux des mers,
Qui suivent, indolents compagnons de voyage,
Le navire glissant sur les gouffres amers.
A peine les ont-ils déposés sur les planches,
Que ces rois de l'azur, maladroits et honteux,
Laissent piteusement leurs grandes ailes blanches
Comme des avirons traîner à côté d'eux.
Le Poète est semblable au prince des nuées
Qui hante la tempête et se rit de l'archer ;
Exilé sur le sol au milieu des huées,
Ses ailes de géant l'empêchent de marcher.`,
    contexte: "Baudelaire, Les Fleurs du mal (1857), Poème 6.",
    attendus: [
      att("Comparaison", "« Le Poète est semblable au prince des nuées »", "La comparaison construit l'allégorie du poète exilé.", ["comparaison","poète","nuées","exil","spleen","idéal"]),
      att("Antithèse", "« rois de l'azur, maladroits et honteux »", "L'antithèse oppose grandeur idéale et chute terrestre.", ["antithèse","azur","honteux","chute","poésie","modernité"]),
      att("Métaphore", "« Ses ailes de géant l'empêchent de marcher »", "La métaphore dit le prix social du génie.", ["métaphore","ailes","géant","génie","condition","poète"]),
    ],
  },
  'GT-343': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Hugo, Les Misérables (1862), Monologue intérieur.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-344': {
    texte: `Comme je descendais des Fleuves impassibles,
Je ne me sentis plus guidé par les haleurs :
Des Peaux-Rouges criards les avaient pris pour cibles,
Les ayant cloués nus aux poteaux de couleurs.
J'étais insoucieux de tous les équipages,
Porteur de blés flamands ou de cotons anglais.
Quand avec mes haleurs ont fini ces tapages,
Les Fleuves m'ont laissé descendre où je voulais.
Et dès lors, je me suis baigné dans le Poème
De la Mer, infusé d'astres, et lactescent,
Dévorant les azurs verts ; où, flottaison blême,
Et ravie, un noyé pensif parfois descend.`,
    contexte: "Rimbaud, Le Bateau ivre (1871), Poème 3.",
    attendus: [
      att("Personnification", "« Les Fleuves m'ont laissé descendre où je voulais »", "La personnification transforme l'errance en initiation poétique.", ["personnification","fleuves","errance","initiation","rimbaud","modernité"]),
      att("Champ lexical", "« Poème », « Mer », « astres », « azurs »", "Le champ lexical cosmique élargit la perception du monde.", ["champ lexical","mer","astres","azurs","vision","poésie"]),
      att("Registre lyrique", "« je me suis baigné dans le Poème »", "Le registre lyrique met en avant l'expérience intérieure du sujet.", ["lyrique","je","poème","ivresse","voyage","subjectivité"]),
    ],
  },
  'GT-345': {
    texte: `Maître Corbeau, sur un arbre perché,
Tenait en son bec un fromage.
Maître Renard, par l'odeur alléché,
Lui tint à peu près ce langage :
« Hé ! bonjour, Monsieur du Corbeau.
Que vous êtes joli ! que vous me semblez beau !
Sans mentir, si votre ramage
Se rapporte à votre plumage,
Vous êtes le Phénix des hôtes de ces bois. »
A ces mots le Corbeau ne se sent pas de joie ;
Et pour montrer sa belle voix,
Il ouvre un large bec, laisse tomber sa proie.
Le Renard s'en saisit, et dit : « Mon bon Monsieur,
Apprenez que tout flatteur
Vit aux dépens de celui qui l'écoute. »`,
    contexte: "La Fontaine, Fables (1678), Poème 2.",
    attendus: [
      att("Dialogue", "« Hé ! bonjour, Monsieur du Corbeau »", "Le dialogue met en scène l'art de persuader.", ["dialogue","renard","corbeau","flatterie","fable","morale"]),
      att("Ironie", "« Que vous êtes joli ! que vous me semblez beau ! »", "L'ironie du compliment révèle la ruse.", ["ironie","compliment","ruse","satire","la fontaine","morale"]),
      att("Morale", "« tout flatteur / Vit aux dépens de celui qui l'écoute »", "La morale explicite la leçon sociale de la fable.", ["morale","flatteur","écoute","leçon","fable","classique"]),
    ],
  },
  'GT-346': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Zola, Germinal (1885), Scène clé.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-347': {
    texte: `PHÈDRE
Je le vis, je rougis, je pâlis à sa vue ;
Un trouble s'éleva dans mon âme éperdue ;
Mes yeux ne voyaient plus, je ne pouvais parler ;
Je sentis tout mon corps et transir et brûler.

ŒNONE
Madame, au nom des dieux, sortez de ce silence.

PHÈDRE
C'est Vénus tout entière à sa proie attachée !
Je reconnus Vénus et ses feux redoutables ;
D'un sang qu'elle poursuit tourments inévitables.
Je fuyais Hippolyte, et me trouvais partout
Sous l'empire fatal de son image et de son goût.`,
    contexte: "Racine, Phèdre (1677), Acte 1, scène 2.",
    attendus: [
      att("Anaphore", "« Je le vis, je rougis, je pâlis »", "L'anaphore de « je » traduit la montée de la passion fatale.", ["anaphore","je","passion","fatalite","phèdre","tragique"]),
      att("Hyperbole", "« C'est Vénus tout entière à sa proie attachée ! »", "L'hyperbole mythologique donne à l'aveu une dimension sacrée et implacable.", ["hyperbole","venus","proie","mythe","destin","tragédie"]),
      att("Antithèse", "« transir et brûler »", "L'antithèse exprime le conflit intérieur de l'héroïne.", ["antithèse","transir","brûler","contradiction","amour","douleur"]),
    ],
  },
  'GT-348': {
    texte: `CHIMÈNE
Elvire, m'as-tu fait un rapport bien sincère ?
Ne déguises-tu point ce qu'a dit mon père ?

ELVIRE
Tous ses discours semblaient un peu trop violents.

CHIMÈNE
Mon père est offensé ; Rodrigue est plein de gloire ;
Et moi, dans ce combat où se perd ma mémoire,
Je sens contre moi-même éclater ma fureur.

RODRIGUE
Percé jusques au fond du cœur
D'une atteinte imprévue aussi bien que mortelle,
Misérable vengeur d'une juste querelle,
Et malheureux objet d'une injuste rigueur,
Je demeure immobile, et mon âme abattue
Cède au coup qui me tue.`,
    contexte: "Corneille, Le Cid (1637), Acte 1, scène 1.",
    attendus: [
      att("Registre tragique", "« Percé jusques au fond du cœur »", "Le registre tragique montre l'honneur et l'amour irréconciliables.", ["tragique","cœur","honneur","amour","corneille","dilemme"]),
      att("Antithèse", "« juste querelle » / « injuste rigueur »", "L'antithèse met en relief la contradiction morale du héros.", ["antithèse","juste","injuste","querelle","rigueur","conflit"]),
      att("Dialogue", "« Elvire, m'as-tu fait un rapport bien sincère ? »", "Le dialogue dramatise l'hésitation de Chimène.", ["dialogue","chimène","elvire","tension","aveu","scène"]),
    ],
  },
  'GT-349': {
    texte: `Il pleure dans mon cœur
Comme il pleut sur la ville ;
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
    contexte: "Verlaine, Poèmes saturniens (1866), Poème 5.",
    attendus: [
      att("Comparaison", "« Comme il pleut sur la ville »", "La comparaison fusionne météo et mélancolie intime.", ["comparaison","pluie","ville","cœur","spleen","lyrique"]),
      att("Anaphore", "« Il pleure... Il pleure sans raison »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
      att("Musicalité", "« Ô bruit doux de la pluie »", "Les sonorités et refrains donnent au texte sa douceur plaintive.", ["musicalité","bruit","doux","refrain","impressionnisme","poésie"]),
    ],
  },
  'GT-350': {
    texte: `Il pleure dans mon cœur
Comme il pleut sur la ville ;
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
    contexte: "Verlaine, Romances sans paroles (1874), Poème 2.",
    attendus: [
      att("Comparaison", "« Comme il pleut sur la ville »", "La comparaison fusionne météo et mélancolie intime.", ["comparaison","pluie","ville","cœur","spleen","lyrique"]),
      att("Anaphore", "« Il pleure... Il pleure sans raison »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
      att("Musicalité", "« Ô bruit doux de la pluie »", "Les sonorités et refrains donnent au texte sa douceur plaintive.", ["musicalité","bruit","doux","refrain","impressionnisme","poésie"]),
    ],
  },
  'GT-352': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Hugo, Les Contemplations (1856), Poème 4.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-354': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Lamartine, Méditations poétiques (1820), Poème 1.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-357': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Balzac, Le Père Goriot (1835), Scène clé.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-358': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Maupassant, Bel-Ami (1885), Ouverture / incipit.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-360': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Proust, Du côté de chez Swann (1913), Portrait du personnage.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-361': {
    texte: `PHÈDRE
Je le vis, je rougis, je pâlis à sa vue ;
Un trouble s'éleva dans mon âme éperdue ;
Mes yeux ne voyaient plus, je ne pouvais parler ;
Je sentis tout mon corps et transir et brûler.

ŒNONE
Madame, au nom des dieux, sortez de ce silence.

PHÈDRE
C'est Vénus tout entière à sa proie attachée !
Je reconnus Vénus et ses feux redoutables ;
D'un sang qu'elle poursuit tourments inévitables.
Je fuyais Hippolyte, et me trouvais partout
Sous l'empire fatal de son image et de son goût.`,
    contexte: "Racine, Phèdre (1677), Acte 1, scène 3.",
    attendus: [
      att("Anaphore", "« Je le vis, je rougis, je pâlis »", "L'anaphore de « je » traduit la montée de la passion fatale.", ["anaphore","je","passion","fatalite","phèdre","tragique"]),
      att("Hyperbole", "« C'est Vénus tout entière à sa proie attachée ! »", "L'hyperbole mythologique donne à l'aveu une dimension sacrée et implacable.", ["hyperbole","venus","proie","mythe","destin","tragédie"]),
      att("Antithèse", "« transir et brûler »", "L'antithèse exprime le conflit intérieur de l'héroïne.", ["antithèse","transir","brûler","contradiction","amour","douleur"]),
    ],
  },
  'GT-362': {
    texte: `PHÈDRE
Je le vis, je rougis, je pâlis à sa vue ;
Un trouble s'éleva dans mon âme éperdue ;
Mes yeux ne voyaient plus, je ne pouvais parler ;
Je sentis tout mon corps et transir et brûler.

ŒNONE
Madame, au nom des dieux, sortez de ce silence.

PHÈDRE
C'est Vénus tout entière à sa proie attachée !
Je reconnus Vénus et ses feux redoutables ;
D'un sang qu'elle poursuit tourments inévitables.
Je fuyais Hippolyte, et me trouvais partout
Sous l'empire fatal de son image et de son goût.`,
    contexte: "Racine, Phèdre (1677), Acte 2, scène 1.",
    attendus: [
      att("Anaphore", "« Je le vis, je rougis, je pâlis »", "L'anaphore de « je » traduit la montée de la passion fatale.", ["anaphore","je","passion","fatalite","phèdre","tragique"]),
      att("Hyperbole", "« C'est Vénus tout entière à sa proie attachée ! »", "L'hyperbole mythologique donne à l'aveu une dimension sacrée et implacable.", ["hyperbole","venus","proie","mythe","destin","tragédie"]),
      att("Antithèse", "« transir et brûler »", "L'antithèse exprime le conflit intérieur de l'héroïne.", ["antithèse","transir","brûler","contradiction","amour","douleur"]),
    ],
  },
  'GT-364': {
    texte: `ALCESTE
Je veux qu'on soit sincère, et qu'en homme d'honneur
On ne lâche aucun mot qui ne parte du cœur.

PHILINTE
Lorsqu'un homme vous vient embrasser avec joie,
Il faut bien le payer de la même monnoie.

ALCESTE
Non, je ne puis souffrir cette lâche méthode
Qu'affectent la plupart de vos gens à la mode ;
Et je hais tous ces vains dehors civilisés,
Ces affables donneurs d'embrassades feintes.

DORINE
Monsieur, nous y voilà ; votre humeur vous emporte,
Mais la raison parfois vaut mieux que l'âme forte.`,
    contexte: "Molière, Tartuffe (1664), Acte 1, scène 1.",
    attendus: [
      att("Antithèse", "« sincère » / « embrassades feintes »", "L'antithèse oppose idéal moral et hypocrisie sociale.", ["antithèse","sincère","feintes","misanthrope","satire","société"]),
      att("Registre satirique", "« vos gens à la mode »", "La satire vise les codes mondains et la comédie des apparences.", ["satirique","mode","apparence","molière","critique","comédie"]),
      att("Dialogue", "« Je veux qu'on soit sincère »", "Le dialogue met en scène l'affrontement de deux visions du monde.", ["dialogue","alceste","philinte","conflit","morale","théâtre"]),
    ],
  },
  'GT-365': {
    texte: `Il pleure dans mon cœur
Comme il pleut sur la ville ;
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
    contexte: "Verlaine, Poèmes saturniens (1866), Poème 6.",
    attendus: [
      att("Comparaison", "« Comme il pleut sur la ville »", "La comparaison fusionne météo et mélancolie intime.", ["comparaison","pluie","ville","cœur","spleen","lyrique"]),
      att("Anaphore", "« Il pleure... Il pleure sans raison »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
      att("Musicalité", "« Ô bruit doux de la pluie »", "Les sonorités et refrains donnent au texte sa douceur plaintive.", ["musicalité","bruit","doux","refrain","impressionnisme","poésie"]),
    ],
  },
  'GT-366': {
    texte: `Il pleure dans mon cœur
Comme il pleut sur la ville ;
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
    contexte: "Verlaine, Romances sans paroles (1874), Poème 3.",
    attendus: [
      att("Comparaison", "« Comme il pleut sur la ville »", "La comparaison fusionne météo et mélancolie intime.", ["comparaison","pluie","ville","cœur","spleen","lyrique"]),
      att("Anaphore", "« Il pleure... Il pleure sans raison »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
      att("Musicalité", "« Ô bruit doux de la pluie »", "Les sonorités et refrains donnent au texte sa douceur plaintive.", ["musicalité","bruit","doux","refrain","impressionnisme","poésie"]),
    ],
  },
  'GT-367': {
    texte: `Andromaque, je pense à vous ! — Ce petit fleuve,
Pauvre et triste miroir où jadis resplendit
L'immense majesté de vos douleurs de veuve,
Ce Simoïs menteur qui par vos grands deuils s'enfle,
A fécondé soudain ma mémoire fertile,
Comme je traversais le nouveau Carrousel.
Le vieux Paris n'est plus (la forme d'une ville
Change plus vite, hélas ! que le cœur d'un mortel) ;
Je ne vois qu'en esprit tout ce camp de baraques,
Ces tas de chapiteaux ébauchés par les eaux,
Et, là-bas, vers les cieux, comme un ciel enfantin,
Le tendre et ridicule fronton des Tuileries.

Voilà le cygne, vieux, rappelant l'homme, et non pas
La femme, hélas ! qui fut ma joie et ma gloire.`,
    contexte: "« Le Cygne » — mémoire d'Andromaque et nostalgie du Paris disparu.",
    attendus: [
      att('Apostrophe', "« Andromaque, je pense à vous ! »", "Apostrophe : le poète interpelle la héroïne antique — mémoire et deuil universel.", ['apostrophe', 'andromaque', 'pense', 'mémoire', 'deuil', 'héroïne']),
      att('Métaphore', "« Ce Simoïs menteur »", "Métaphore : le fleuve parisien devient Simoïs — rapprochement mythologique et nostalgique.", ['métaphore', 'simoïs', 'menteur', 'mythologie', 'nostalgie', 'fleuve']),
      att('Registre élégiaque', "« Le vieux Paris n'est plus »", "Registre élégiaque : constat de disparition — spleen urbain et temps qui passe.", ['élégiaque', 'paris', 'disparition', 'spleen', 'temps', 'urbain']),
      att('Symbolisme', "« Voilà le cygne, vieux, rappelant l'homme »", "Symbolisme : le cygne solitaire figure l'exil et la déchéance du poète.", ['symbolisme', 'cygne', 'vieux', 'exil', 'poète', 'déchéance']),
    ],
  },
  'GT-368': {
    texte: `Souvent, pour s'amuser, les hommes d'équipage
Prennent des albatros, vastes oiseaux des mers,
Qui suivent, indolents compagnons de voyage,
Le navire glissant sur les gouffres amers.
A peine les ont-ils déposés sur les planches,
Que ces rois de l'azur, maladroits et honteux,
Laissent piteusement leurs grandes ailes blanches
Comme des avirons traîner à côté d'eux.
Le Poète est semblable au prince des nuées
Qui hante la tempête et se rit de l'archer ;
Exilé sur le sol au milieu des huées,
Ses ailes de géant l'empêchent de marcher.`,
    contexte: "Baudelaire, Les Fleurs du mal (1857), Poème 8.",
    attendus: [
      att("Comparaison", "« Le Poète est semblable au prince des nuées »", "La comparaison construit l'allégorie du poète exilé.", ["comparaison","poète","nuées","exil","spleen","idéal"]),
      att("Antithèse", "« rois de l'azur, maladroits et honteux »", "L'antithèse oppose grandeur idéale et chute terrestre.", ["antithèse","azur","honteux","chute","poésie","modernité"]),
      att("Métaphore", "« Ses ailes de géant l'empêchent de marcher »", "La métaphore dit le prix social du génie.", ["métaphore","ailes","géant","génie","condition","poète"]),
    ],
  },
  'GT-369': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Hugo, Les Contemplations (1856), Poème 5.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-370': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Hugo, Notre-Dame de Paris (1831), Portrait du personnage.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-371': {
    texte: `Comme je descendais des Fleuves impassibles,
Je ne me sentis plus guidé par les haleurs :
Des Peaux-Rouges criards les avaient pris pour cibles,
Les ayant cloués nus aux poteaux de couleurs.
J'étais insoucieux de tous les équipages,
Porteur de blés flamands ou de cotons anglais.
Quand avec mes haleurs ont fini ces tapages,
Les Fleuves m'ont laissé descendre où je voulais.
Et dès lors, je me suis baigné dans le Poème
De la Mer, infusé d'astres, et lactescent,
Dévorant les azurs verts ; où, flottaison blême,
Et ravie, un noyé pensif parfois descend.`,
    contexte: "Rimbaud, Le Bateau ivre (1871), Poème 5.",
    attendus: [
      att("Personnification", "« Les Fleuves m'ont laissé descendre où je voulais »", "La personnification transforme l'errance en initiation poétique.", ["personnification","fleuves","errance","initiation","rimbaud","modernité"]),
      att("Champ lexical", "« Poème », « Mer », « astres », « azurs »", "Le champ lexical cosmique élargit la perception du monde.", ["champ lexical","mer","astres","azurs","vision","poésie"]),
      att("Registre lyrique", "« je me suis baigné dans le Poème »", "Le registre lyrique met en avant l'expérience intérieure du sujet.", ["lyrique","je","poème","ivresse","voyage","subjectivité"]),
    ],
  },
  'GT-373': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Lamartine, Méditations poétiques (1820), Poème 2.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-374': {
    texte: `Maître Corbeau, sur un arbre perché,
Tenait en son bec un fromage.
Maître Renard, par l'odeur alléché,
Lui tint à peu près ce langage :
« Hé ! bonjour, Monsieur du Corbeau.
Que vous êtes joli ! que vous me semblez beau !
Sans mentir, si votre ramage
Se rapporte à votre plumage,
Vous êtes le Phénix des hôtes de ces bois. »
A ces mots le Corbeau ne se sent pas de joie ;
Et pour montrer sa belle voix,
Il ouvre un large bec, laisse tomber sa proie.
Le Renard s'en saisit, et dit : « Mon bon Monsieur,
Apprenez que tout flatteur
Vit aux dépens de celui qui l'écoute. »`,
    contexte: "La Fontaine, Fables (1678), Poème 4.",
    attendus: [
      att("Dialogue", "« Hé ! bonjour, Monsieur du Corbeau »", "Le dialogue met en scène l'art de persuader.", ["dialogue","renard","corbeau","flatterie","fable","morale"]),
      att("Ironie", "« Que vous êtes joli ! que vous me semblez beau ! »", "L'ironie du compliment révèle la ruse.", ["ironie","compliment","ruse","satire","la fontaine","morale"]),
      att("Morale", "« tout flatteur / Vit aux dépens de celui qui l'écoute »", "La morale explicite la leçon sociale de la fable.", ["morale","flatteur","écoute","leçon","fable","classique"]),
    ],
  },
  'GT-375': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Flaubert, Madame Bovary (1857), Monologue intérieur.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-376': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Stendhal, Le Rouge et le Noir (1830), Scène clé.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-377': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Maupassant, Le Horla (1887), Ouverture / incipit.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-378': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Camus, L'Étranger (1942), Monologue intérieur.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-379': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Mallarmé, L'Après-midi d'un faune (1876), Poème 1.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-382': {
    texte: `CHIMÈNE
Elvire, m'as-tu fait un rapport bien sincère ?
Ne déguises-tu point ce qu'a dit mon père ?

ELVIRE
Tous ses discours semblaient un peu trop violents.

CHIMÈNE
Mon père est offensé ; Rodrigue est plein de gloire ;
Et moi, dans ce combat où se perd ma mémoire,
Je sens contre moi-même éclater ma fureur.

RODRIGUE
Percé jusques au fond du cœur
D'une atteinte imprévue aussi bien que mortelle,
Misérable vengeur d'une juste querelle,
Et malheureux objet d'une injuste rigueur,
Je demeure immobile, et mon âme abattue
Cède au coup qui me tue.`,
    contexte: "Corneille, Le Cid (1637), Acte 1, scène 3.",
    attendus: [
      att("Registre tragique", "« Percé jusques au fond du cœur »", "Le registre tragique montre l'honneur et l'amour irréconciliables.", ["tragique","cœur","honneur","amour","corneille","dilemme"]),
      att("Antithèse", "« juste querelle » / « injuste rigueur »", "L'antithèse met en relief la contradiction morale du héros.", ["antithèse","juste","injuste","querelle","rigueur","conflit"]),
      att("Dialogue", "« Elvire, m'as-tu fait un rapport bien sincère ? »", "Le dialogue dramatise l'hésitation de Chimène.", ["dialogue","chimène","elvire","tension","aveu","scène"]),
    ],
  },
  'GT-387': {
    texte: `Souvent, pour s'amuser, les hommes d'équipage
Prennent des albatros, vastes oiseaux des mers,
Qui suivent, indolents compagnons de voyage,
Le navire glissant sur les gouffres amers.
A peine les ont-ils déposés sur les planches,
Que ces rois de l'azur, maladroits et honteux,
Laissent piteusement leurs grandes ailes blanches
Comme des avirons traîner à côté d'eux.
Le Poète est semblable au prince des nuées
Qui hante la tempête et se rit de l'archer ;
Exilé sur le sol au milieu des huées,
Ses ailes de géant l'empêchent de marcher.`,
    contexte: "Baudelaire, Les Fleurs du mal (1857), Poème 9.",
    attendus: [
      att("Comparaison", "« Le Poète est semblable au prince des nuées »", "La comparaison construit l'allégorie du poète exilé.", ["comparaison","poète","nuées","exil","spleen","idéal"]),
      att("Antithèse", "« rois de l'azur, maladroits et honteux »", "L'antithèse oppose grandeur idéale et chute terrestre.", ["antithèse","azur","honteux","chute","poésie","modernité"]),
      att("Métaphore", "« Ses ailes de géant l'empêchent de marcher »", "La métaphore dit le prix social du génie.", ["métaphore","ailes","géant","génie","condition","poète"]),
    ],
  },
  'GT-389': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Hugo, Les Misérables (1862), Description.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-390': {
    texte: `Comme je descendais des Fleuves impassibles,
Je ne me sentis plus guidé par les haleurs :
Des Peaux-Rouges criards les avaient pris pour cibles,
Les ayant cloués nus aux poteaux de couleurs.
J'étais insoucieux de tous les équipages,
Porteur de blés flamands ou de cotons anglais.
Quand avec mes haleurs ont fini ces tapages,
Les Fleuves m'ont laissé descendre où je voulais.
Et dès lors, je me suis baigné dans le Poème
De la Mer, infusé d'astres, et lactescent,
Dévorant les azurs verts ; où, flottaison blême,
Et ravie, un noyé pensif parfois descend.`,
    contexte: "Rimbaud, Le Bateau ivre (1871), Poème 6.",
    attendus: [
      att("Personnification", "« Les Fleuves m'ont laissé descendre où je voulais »", "La personnification transforme l'errance en initiation poétique.", ["personnification","fleuves","errance","initiation","rimbaud","modernité"]),
      att("Champ lexical", "« Poème », « Mer », « astres », « azurs »", "Le champ lexical cosmique élargit la perception du monde.", ["champ lexical","mer","astres","azurs","vision","poésie"]),
      att("Registre lyrique", "« je me suis baigné dans le Poème »", "Le registre lyrique met en avant l'expérience intérieure du sujet.", ["lyrique","je","poème","ivresse","voyage","subjectivité"]),
    ],
  },
  'GT-391': {
    texte: `Comme je descendais des Fleuves impassibles,
Je ne me sentis plus guidé par les haleurs :
Des Peaux-Rouges criards les avaient pris pour cibles,
Les ayant cloués nus aux poteaux de couleurs.
J'étais insoucieux de tous les équipages,
Porteur de blés flamands ou de cotons anglais.
Quand avec mes haleurs ont fini ces tapages,
Les Fleuves m'ont laissé descendre où je voulais.
Et dès lors, je me suis baigné dans le Poème
De la Mer, infusé d'astres, et lactescent,
Dévorant les azurs verts ; où, flottaison blême,
Et ravie, un noyé pensif parfois descend.`,
    contexte: "Rimbaud, Une Saison en enfer (1873), Poème 2.",
    attendus: [
      att("Personnification", "« Les Fleuves m'ont laissé descendre où je voulais »", "La personnification transforme l'errance en initiation poétique.", ["personnification","fleuves","errance","initiation","rimbaud","modernité"]),
      att("Champ lexical", "« Poème », « Mer », « astres », « azurs »", "Le champ lexical cosmique élargit la perception du monde.", ["champ lexical","mer","astres","azurs","vision","poésie"]),
      att("Registre lyrique", "« je me suis baigné dans le Poème »", "Le registre lyrique met en avant l'expérience intérieure du sujet.", ["lyrique","je","poème","ivresse","voyage","subjectivité"]),
    ],
  },
  'GT-393': {
    texte: `Maître Corbeau, sur un arbre perché,
Tenait en son bec un fromage.
Maître Renard, par l'odeur alléché,
Lui tint à peu près ce langage :
« Hé ! bonjour, Monsieur du Corbeau.
Que vous êtes joli ! que vous me semblez beau !
Sans mentir, si votre ramage
Se rapporte à votre plumage,
Vous êtes le Phénix des hôtes de ces bois. »
A ces mots le Corbeau ne se sent pas de joie ;
Et pour montrer sa belle voix,
Il ouvre un large bec, laisse tomber sa proie.
Le Renard s'en saisit, et dit : « Mon bon Monsieur,
Apprenez que tout flatteur
Vit aux dépens de celui qui l'écoute. »`,
    contexte: "La Fontaine, Fables (1678), Poème 5.",
    attendus: [
      att("Dialogue", "« Hé ! bonjour, Monsieur du Corbeau »", "Le dialogue met en scène l'art de persuader.", ["dialogue","renard","corbeau","flatterie","fable","morale"]),
      att("Ironie", "« Que vous êtes joli ! que vous me semblez beau ! »", "L'ironie du compliment révèle la ruse.", ["ironie","compliment","ruse","satire","la fontaine","morale"]),
      att("Morale", "« tout flatteur / Vit aux dépens de celui qui l'écoute »", "La morale explicite la leçon sociale de la fable.", ["morale","flatteur","écoute","leçon","fable","classique"]),
    ],
  },
  'GT-394': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Zola, Germinal (1885), Monologue intérieur.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-395': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Mallarmé, L'Après-midi d'un faune (1876), Poème 2.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-396': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Laclos, Les Liaisons dangereuses (1782), Ouverture / incipit.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-397': {
    texte: `PHÈDRE
Je le vis, je rougis, je pâlis à sa vue ;
Un trouble s'éleva dans mon âme éperdue ;
Mes yeux ne voyaient plus, je ne pouvais parler ;
Je sentis tout mon corps et transir et brûler.

ŒNONE
Madame, au nom des dieux, sortez de ce silence.

PHÈDRE
C'est Vénus tout entière à sa proie attachée !
Je reconnus Vénus et ses feux redoutables ;
D'un sang qu'elle poursuit tourments inévitables.
Je fuyais Hippolyte, et me trouvais partout
Sous l'empire fatal de son image et de son goût.`,
    contexte: "Racine, Phèdre (1677), Acte 1, scène 5.",
    attendus: [
      att("Anaphore", "« Je le vis, je rougis, je pâlis »", "L'anaphore de « je » traduit la montée de la passion fatale.", ["anaphore","je","passion","fatalite","phèdre","tragique"]),
      att("Hyperbole", "« C'est Vénus tout entière à sa proie attachée ! »", "L'hyperbole mythologique donne à l'aveu une dimension sacrée et implacable.", ["hyperbole","venus","proie","mythe","destin","tragédie"]),
      att("Antithèse", "« transir et brûler »", "L'antithèse exprime le conflit intérieur de l'héroïne.", ["antithèse","transir","brûler","contradiction","amour","douleur"]),
    ],
  },
  'GT-399': {
    texte: `PHÈDRE
Je le vis, je rougis, je pâlis à sa vue ;
Un trouble s'éleva dans mon âme éperdue ;
Mes yeux ne voyaient plus, je ne pouvais parler ;
Je sentis tout mon corps et transir et brûler.

ŒNONE
Madame, au nom des dieux, sortez de ce silence.

PHÈDRE
C'est Vénus tout entière à sa proie attachée !
Je reconnus Vénus et ses feux redoutables ;
D'un sang qu'elle poursuit tourments inévitables.
Je fuyais Hippolyte, et me trouvais partout
Sous l'empire fatal de son image et de son goût.`,
    contexte: "Racine, Phèdre (1677), Acte 3, scène 1.",
    attendus: [
      att("Anaphore", "« Je le vis, je rougis, je pâlis »", "L'anaphore de « je » traduit la montée de la passion fatale.", ["anaphore","je","passion","fatalite","phèdre","tragique"]),
      att("Hyperbole", "« C'est Vénus tout entière à sa proie attachée ! »", "L'hyperbole mythologique donne à l'aveu une dimension sacrée et implacable.", ["hyperbole","venus","proie","mythe","destin","tragédie"]),
      att("Antithèse", "« transir et brûler »", "L'antithèse exprime le conflit intérieur de l'héroïne.", ["antithèse","transir","brûler","contradiction","amour","douleur"]),
    ],
  },
  'GT-400': {
    texte: `PHÈDRE
Je le vis, je rougis, je pâlis à sa vue ;
Un trouble s'éleva dans mon âme éperdue ;
Mes yeux ne voyaient plus, je ne pouvais parler ;
Je sentis tout mon corps et transir et brûler.

ŒNONE
Madame, au nom des dieux, sortez de ce silence.

PHÈDRE
C'est Vénus tout entière à sa proie attachée !
Je reconnus Vénus et ses feux redoutables ;
D'un sang qu'elle poursuit tourments inévitables.
Je fuyais Hippolyte, et me trouvais partout
Sous l'empire fatal de son image et de son goût.`,
    contexte: "Racine, Andromaque (1667), Acte 1, scène 2.",
    attendus: [
      att("Anaphore", "« Je le vis, je rougis, je pâlis »", "L'anaphore de « je » traduit la montée de la passion fatale.", ["anaphore","je","passion","fatalite","phèdre","tragique"]),
      att("Hyperbole", "« C'est Vénus tout entière à sa proie attachée ! »", "L'hyperbole mythologique donne à l'aveu une dimension sacrée et implacable.", ["hyperbole","venus","proie","mythe","destin","tragédie"]),
      att("Antithèse", "« transir et brûler »", "L'antithèse exprime le conflit intérieur de l'héroïne.", ["antithèse","transir","brûler","contradiction","amour","douleur"]),
    ],
  },
  'GT-401': {
    texte: `CHIMÈNE
Elvire, m'as-tu fait un rapport bien sincère ?
Ne déguises-tu point ce qu'a dit mon père ?

ELVIRE
Tous ses discours semblaient un peu trop violents.

CHIMÈNE
Mon père est offensé ; Rodrigue est plein de gloire ;
Et moi, dans ce combat où se perd ma mémoire,
Je sens contre moi-même éclater ma fureur.

RODRIGUE
Percé jusques au fond du cœur
D'une atteinte imprévue aussi bien que mortelle,
Misérable vengeur d'une juste querelle,
Et malheureux objet d'une injuste rigueur,
Je demeure immobile, et mon âme abattue
Cède au coup qui me tue.`,
    contexte: "Corneille, Le Cid (1637), Acte 1, scène 4.",
    attendus: [
      att("Registre tragique", "« Percé jusques au fond du cœur »", "Le registre tragique montre l'honneur et l'amour irréconciliables.", ["tragique","cœur","honneur","amour","corneille","dilemme"]),
      att("Antithèse", "« juste querelle » / « injuste rigueur »", "L'antithèse met en relief la contradiction morale du héros.", ["antithèse","juste","injuste","querelle","rigueur","conflit"]),
      att("Dialogue", "« Elvire, m'as-tu fait un rapport bien sincère ? »", "Le dialogue dramatise l'hésitation de Chimène.", ["dialogue","chimène","elvire","tension","aveu","scène"]),
    ],
  },
  'GT-402': {
    texte: `ALCESTE
Je veux qu'on soit sincère, et qu'en homme d'honneur
On ne lâche aucun mot qui ne parte du cœur.

PHILINTE
Lorsqu'un homme vous vient embrasser avec joie,
Il faut bien le payer de la même monnoie.

ALCESTE
Non, je ne puis souffrir cette lâche méthode
Qu'affectent la plupart de vos gens à la mode ;
Et je hais tous ces vains dehors civilisés,
Ces affables donneurs d'embrassades feintes.

DORINE
Monsieur, nous y voilà ; votre humeur vous emporte,
Mais la raison parfois vaut mieux que l'âme forte.`,
    contexte: "Molière, Le Misanthrope (1666), Acte 1, scène 1.",
    attendus: [
      att("Antithèse", "« sincère » / « embrassades feintes »", "L'antithèse oppose idéal moral et hypocrisie sociale.", ["antithèse","sincère","feintes","misanthrope","satire","société"]),
      att("Registre satirique", "« vos gens à la mode »", "La satire vise les codes mondains et la comédie des apparences.", ["satirique","mode","apparence","molière","critique","comédie"]),
      att("Dialogue", "« Je veux qu'on soit sincère »", "Le dialogue met en scène l'affrontement de deux visions du monde.", ["dialogue","alceste","philinte","conflit","morale","théâtre"]),
    ],
  },
  'GT-403': {
    texte: `ALCESTE
Je veux qu'on soit sincère, et qu'en homme d'honneur
On ne lâche aucun mot qui ne parte du cœur.

PHILINTE
Lorsqu'un homme vous vient embrasser avec joie,
Il faut bien le payer de la même monnoie.

ALCESTE
Non, je ne puis souffrir cette lâche méthode
Qu'affectent la plupart de vos gens à la mode ;
Et je hais tous ces vains dehors civilisés,
Ces affables donneurs d'embrassades feintes.

DORINE
Monsieur, nous y voilà ; votre humeur vous emporte,
Mais la raison parfois vaut mieux que l'âme forte.`,
    contexte: "Molière, Tartuffe (1664), Acte 1, scène 3.",
    attendus: [
      att("Antithèse", "« sincère » / « embrassades feintes »", "L'antithèse oppose idéal moral et hypocrisie sociale.", ["antithèse","sincère","feintes","misanthrope","satire","société"]),
      att("Registre satirique", "« vos gens à la mode »", "La satire vise les codes mondains et la comédie des apparences.", ["satirique","mode","apparence","molière","critique","comédie"]),
      att("Dialogue", "« Je veux qu'on soit sincère »", "Le dialogue met en scène l'affrontement de deux visions du monde.", ["dialogue","alceste","philinte","conflit","morale","théâtre"]),
    ],
  },
  'GT-405': {
    texte: `Il pleure dans mon cœur
Comme il pleut sur la ville ;
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
    contexte: "Verlaine, Poèmes saturniens (1866), Poème 8.",
    attendus: [
      att("Comparaison", "« Comme il pleut sur la ville »", "La comparaison fusionne météo et mélancolie intime.", ["comparaison","pluie","ville","cœur","spleen","lyrique"]),
      att("Anaphore", "« Il pleure... Il pleure sans raison »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
      att("Musicalité", "« Ô bruit doux de la pluie »", "Les sonorités et refrains donnent au texte sa douceur plaintive.", ["musicalité","bruit","doux","refrain","impressionnisme","poésie"]),
    ],
  },
  'GT-406': {
    texte: `Il pleure dans mon cœur
Comme il pleut sur la ville ;
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
    contexte: "Verlaine, Romances sans paroles (1874), Poème 5.",
    attendus: [
      att("Comparaison", "« Comme il pleut sur la ville »", "La comparaison fusionne météo et mélancolie intime.", ["comparaison","pluie","ville","cœur","spleen","lyrique"]),
      att("Anaphore", "« Il pleure... Il pleure sans raison »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
      att("Musicalité", "« Ô bruit doux de la pluie »", "Les sonorités et refrains donnent au texte sa douceur plaintive.", ["musicalité","bruit","doux","refrain","impressionnisme","poésie"]),
    ],
  },
  'GT-408': {
    texte: `Souvent, pour s'amuser, les hommes d'équipage
Prennent des albatros, vastes oiseaux des mers,
Qui suivent, indolents compagnons de voyage,
Le navire glissant sur les gouffres amers.
A peine les ont-ils déposés sur les planches,
Que ces rois de l'azur, maladroits et honteux,
Laissent piteusement leurs grandes ailes blanches
Comme des avirons traîner à côté d'eux.
Le Poète est semblable au prince des nuées
Qui hante la tempête et se rit de l'archer ;
Exilé sur le sol au milieu des huées,
Ses ailes de géant l'empêchent de marcher.`,
    contexte: "Baudelaire, Les Fleurs du mal (1857), Poème 10.",
    attendus: [
      att("Comparaison", "« Le Poète est semblable au prince des nuées »", "La comparaison construit l'allégorie du poète exilé.", ["comparaison","poète","nuées","exil","spleen","idéal"]),
      att("Antithèse", "« rois de l'azur, maladroits et honteux »", "L'antithèse oppose grandeur idéale et chute terrestre.", ["antithèse","azur","honteux","chute","poésie","modernité"]),
      att("Métaphore", "« Ses ailes de géant l'empêchent de marcher »", "La métaphore dit le prix social du génie.", ["métaphore","ailes","géant","génie","condition","poète"]),
    ],
  },
  'GT-409': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Hugo, Les Contemplations (1856), Poème 7.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-410': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Hugo, Les Misérables (1862), Chapitre 1.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-412': {
    texte: `Comme je descendais des Fleuves impassibles,
Je ne me sentis plus guidé par les haleurs :
Des Peaux-Rouges criards les avaient pris pour cibles,
Les ayant cloués nus aux poteaux de couleurs.
J'étais insoucieux de tous les équipages,
Porteur de blés flamands ou de cotons anglais.
Quand avec mes haleurs ont fini ces tapages,
Les Fleuves m'ont laissé descendre où je voulais.
Et dès lors, je me suis baigné dans le Poème
De la Mer, infusé d'astres, et lactescent,
Dévorant les azurs verts ; où, flottaison blême,
Et ravie, un noyé pensif parfois descend.`,
    contexte: "Rimbaud, Une Saison en enfer (1873), Poème 3.",
    attendus: [
      att("Personnification", "« Les Fleuves m'ont laissé descendre où je voulais »", "La personnification transforme l'errance en initiation poétique.", ["personnification","fleuves","errance","initiation","rimbaud","modernité"]),
      att("Champ lexical", "« Poème », « Mer », « astres », « azurs »", "Le champ lexical cosmique élargit la perception du monde.", ["champ lexical","mer","astres","azurs","vision","poésie"]),
      att("Registre lyrique", "« je me suis baigné dans le Poème »", "Le registre lyrique met en avant l'expérience intérieure du sujet.", ["lyrique","je","poème","ivresse","voyage","subjectivité"]),
    ],
  },
  'GT-413': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Lamartine, Méditations poétiques (1820), Poème 4.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-415': {
    texte: `Rien n'était si beau, si leste, si brillant, si bien ordonné que les deux armées.
Les trompettes, les fifres, les hautbois, les tambours, les canons formaient une harmonie
telle qu'il n'y en eut jamais en enfer.
Les canons renversèrent d'abord à peu près six mille hommes de chaque côté ;
ensuite la mousqueterie ôta du meilleur des mondes environ neuf à dix mille coquins
qui en infectaient la surface.
La baïonnette fut aussi la raison suffisante de la mort de quelques milliers d'hommes.
Candide, qui tremblait comme un philosophe, se cacha du mieux qu'il put
pendant cette boucherie héroïque.`,
    contexte: "Voltaire, Candide (1759), Description.",
    attendus: [
      att("Ironie", "« une harmonie telle qu'il n'y en eut jamais en enfer »", "L'ironie dénonce l'esthétisation de la guerre.", ["ironie","harmonie","enfer","guerre","voltaire","satire"]),
      att("Hyperbole", "« du meilleur des mondes »", "La formule optimiste devient critique par contraste.", ["hyperbole","meilleur","mondes","optimisme","critique","philosophique"]),
      att("Antiphrase", "« cette boucherie héroïque »", "L'antiphrase condamne la violence militaire.", ["antiphrase","boucherie","héroïque","dénonciation","massacre","conte"]),
    ],
  },
  'GT-416': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Flaubert, L'Éducation sentimentale (1869), Ouverture / incipit.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-418': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Maupassant, Bel-Ami (1885), Portrait du personnage.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-419': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Camus, La Peste (1947), Portrait du personnage.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-421': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Mallarmé, Poésies (1897), Poème 1.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-423': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Mérimée, Carmen (1845), Ouverture / incipit.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-425': {
    texte: `PHÈDRE
Je le vis, je rougis, je pâlis à sa vue ;
Un trouble s'éleva dans mon âme éperdue ;
Mes yeux ne voyaient plus, je ne pouvais parler ;
Je sentis tout mon corps et transir et brûler.

ŒNONE
Madame, au nom des dieux, sortez de ce silence.

PHÈDRE
C'est Vénus tout entière à sa proie attachée !
Je reconnus Vénus et ses feux redoutables ;
D'un sang qu'elle poursuit tourments inévitables.
Je fuyais Hippolyte, et me trouvais partout
Sous l'empire fatal de son image et de son goût.`,
    contexte: "Racine, Phèdre (1677), Acte 1, scène 6.",
    attendus: [
      att("Anaphore", "« Je le vis, je rougis, je pâlis »", "L'anaphore de « je » traduit la montée de la passion fatale.", ["anaphore","je","passion","fatalite","phèdre","tragique"]),
      att("Hyperbole", "« C'est Vénus tout entière à sa proie attachée ! »", "L'hyperbole mythologique donne à l'aveu une dimension sacrée et implacable.", ["hyperbole","venus","proie","mythe","destin","tragédie"]),
      att("Antithèse", "« transir et brûler »", "L'antithèse exprime le conflit intérieur de l'héroïne.", ["antithèse","transir","brûler","contradiction","amour","douleur"]),
    ],
  },
  'GT-426': {
    texte: `PHÈDRE
Je le vis, je rougis, je pâlis à sa vue ;
Un trouble s'éleva dans mon âme éperdue ;
Mes yeux ne voyaient plus, je ne pouvais parler ;
Je sentis tout mon corps et transir et brûler.

ŒNONE
Madame, au nom des dieux, sortez de ce silence.

PHÈDRE
C'est Vénus tout entière à sa proie attachée !
Je reconnus Vénus et ses feux redoutables ;
D'un sang qu'elle poursuit tourments inévitables.
Je fuyais Hippolyte, et me trouvais partout
Sous l'empire fatal de son image et de son goût.`,
    contexte: "Racine, Phèdre (1677), Acte 2, scène 4.",
    attendus: [
      att("Anaphore", "« Je le vis, je rougis, je pâlis »", "L'anaphore de « je » traduit la montée de la passion fatale.", ["anaphore","je","passion","fatalite","phèdre","tragique"]),
      att("Hyperbole", "« C'est Vénus tout entière à sa proie attachée ! »", "L'hyperbole mythologique donne à l'aveu une dimension sacrée et implacable.", ["hyperbole","venus","proie","mythe","destin","tragédie"]),
      att("Antithèse", "« transir et brûler »", "L'antithèse exprime le conflit intérieur de l'héroïne.", ["antithèse","transir","brûler","contradiction","amour","douleur"]),
    ],
  },
  'GT-428': {
    texte: `PHÈDRE
Je le vis, je rougis, je pâlis à sa vue ;
Un trouble s'éleva dans mon âme éperdue ;
Mes yeux ne voyaient plus, je ne pouvais parler ;
Je sentis tout mon corps et transir et brûler.

ŒNONE
Madame, au nom des dieux, sortez de ce silence.

PHÈDRE
C'est Vénus tout entière à sa proie attachée !
Je reconnus Vénus et ses feux redoutables ;
D'un sang qu'elle poursuit tourments inévitables.
Je fuyais Hippolyte, et me trouvais partout
Sous l'empire fatal de son image et de son goût.`,
    contexte: "Racine, Andromaque (1667), Acte 1, scène 3.",
    attendus: [
      att("Anaphore", "« Je le vis, je rougis, je pâlis »", "L'anaphore de « je » traduit la montée de la passion fatale.", ["anaphore","je","passion","fatalite","phèdre","tragique"]),
      att("Hyperbole", "« C'est Vénus tout entière à sa proie attachée ! »", "L'hyperbole mythologique donne à l'aveu une dimension sacrée et implacable.", ["hyperbole","venus","proie","mythe","destin","tragédie"]),
      att("Antithèse", "« transir et brûler »", "L'antithèse exprime le conflit intérieur de l'héroïne.", ["antithèse","transir","brûler","contradiction","amour","douleur"]),
    ],
  },
  'GT-429': {
    texte: `PHÈDRE
Je le vis, je rougis, je pâlis à sa vue ;
Un trouble s'éleva dans mon âme éperdue ;
Mes yeux ne voyaient plus, je ne pouvais parler ;
Je sentis tout mon corps et transir et brûler.

ŒNONE
Madame, au nom des dieux, sortez de ce silence.

PHÈDRE
C'est Vénus tout entière à sa proie attachée !
Je reconnus Vénus et ses feux redoutables ;
D'un sang qu'elle poursuit tourments inévitables.
Je fuyais Hippolyte, et me trouvais partout
Sous l'empire fatal de son image et de son goût.`,
    contexte: "Racine, Andromaque (1667), Acte 2, scène 1.",
    attendus: [
      att("Anaphore", "« Je le vis, je rougis, je pâlis »", "L'anaphore de « je » traduit la montée de la passion fatale.", ["anaphore","je","passion","fatalite","phèdre","tragique"]),
      att("Hyperbole", "« C'est Vénus tout entière à sa proie attachée ! »", "L'hyperbole mythologique donne à l'aveu une dimension sacrée et implacable.", ["hyperbole","venus","proie","mythe","destin","tragédie"]),
      att("Antithèse", "« transir et brûler »", "L'antithèse exprime le conflit intérieur de l'héroïne.", ["antithèse","transir","brûler","contradiction","amour","douleur"]),
    ],
  },
  'GT-431': {
    texte: `CHIMÈNE
Elvire, m'as-tu fait un rapport bien sincère ?
Ne déguises-tu point ce qu'a dit mon père ?

ELVIRE
Tous ses discours semblaient un peu trop violents.

CHIMÈNE
Mon père est offensé ; Rodrigue est plein de gloire ;
Et moi, dans ce combat où se perd ma mémoire,
Je sens contre moi-même éclater ma fureur.

RODRIGUE
Percé jusques au fond du cœur
D'une atteinte imprévue aussi bien que mortelle,
Misérable vengeur d'une juste querelle,
Et malheureux objet d'une injuste rigueur,
Je demeure immobile, et mon âme abattue
Cède au coup qui me tue.`,
    contexte: "Corneille, Le Cid (1637), Acte 2, scène 3.",
    attendus: [
      att("Registre tragique", "« Percé jusques au fond du cœur »", "Le registre tragique montre l'honneur et l'amour irréconciliables.", ["tragique","cœur","honneur","amour","corneille","dilemme"]),
      att("Antithèse", "« juste querelle » / « injuste rigueur »", "L'antithèse met en relief la contradiction morale du héros.", ["antithèse","juste","injuste","querelle","rigueur","conflit"]),
      att("Dialogue", "« Elvire, m'as-tu fait un rapport bien sincère ? »", "Le dialogue dramatise l'hésitation de Chimène.", ["dialogue","chimène","elvire","tension","aveu","scène"]),
    ],
  },
  'GT-432': {
    texte: `CHIMÈNE
Elvire, m'as-tu fait un rapport bien sincère ?
Ne déguises-tu point ce qu'a dit mon père ?

ELVIRE
Tous ses discours semblaient un peu trop violents.

CHIMÈNE
Mon père est offensé ; Rodrigue est plein de gloire ;
Et moi, dans ce combat où se perd ma mémoire,
Je sens contre moi-même éclater ma fureur.

RODRIGUE
Percé jusques au fond du cœur
D'une atteinte imprévue aussi bien que mortelle,
Misérable vengeur d'une juste querelle,
Et malheureux objet d'une injuste rigueur,
Je demeure immobile, et mon âme abattue
Cède au coup qui me tue.`,
    contexte: "Corneille, Le Cid (1637), Acte 3, scène 1.",
    attendus: [
      att("Registre tragique", "« Percé jusques au fond du cœur »", "Le registre tragique montre l'honneur et l'amour irréconciliables.", ["tragique","cœur","honneur","amour","corneille","dilemme"]),
      att("Antithèse", "« juste querelle » / « injuste rigueur »", "L'antithèse met en relief la contradiction morale du héros.", ["antithèse","juste","injuste","querelle","rigueur","conflit"]),
      att("Dialogue", "« Elvire, m'as-tu fait un rapport bien sincère ? »", "Le dialogue dramatise l'hésitation de Chimène.", ["dialogue","chimène","elvire","tension","aveu","scène"]),
    ],
  },
  'GT-434': {
    texte: `ALCESTE
Je veux qu'on soit sincère, et qu'en homme d'honneur
On ne lâche aucun mot qui ne parte du cœur.

PHILINTE
Lorsqu'un homme vous vient embrasser avec joie,
Il faut bien le payer de la même monnoie.

ALCESTE
Non, je ne puis souffrir cette lâche méthode
Qu'affectent la plupart de vos gens à la mode ;
Et je hais tous ces vains dehors civilisés,
Ces affables donneurs d'embrassades feintes.

DORINE
Monsieur, nous y voilà ; votre humeur vous emporte,
Mais la raison parfois vaut mieux que l'âme forte.`,
    contexte: "Molière, Tartuffe (1664), Acte 1, scène 4.",
    attendus: [
      att("Antithèse", "« sincère » / « embrassades feintes »", "L'antithèse oppose idéal moral et hypocrisie sociale.", ["antithèse","sincère","feintes","misanthrope","satire","société"]),
      att("Registre satirique", "« vos gens à la mode »", "La satire vise les codes mondains et la comédie des apparences.", ["satirique","mode","apparence","molière","critique","comédie"]),
      att("Dialogue", "« Je veux qu'on soit sincère »", "Le dialogue met en scène l'affrontement de deux visions du monde.", ["dialogue","alceste","philinte","conflit","morale","théâtre"]),
    ],
  },
  'GT-435': {
    texte: `Il pleure dans mon cœur
Comme il pleut sur la ville ;
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
    contexte: "Verlaine, Poèmes saturniens (1866), Poème 9.",
    attendus: [
      att("Comparaison", "« Comme il pleut sur la ville »", "La comparaison fusionne météo et mélancolie intime.", ["comparaison","pluie","ville","cœur","spleen","lyrique"]),
      att("Anaphore", "« Il pleure... Il pleure sans raison »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
      att("Musicalité", "« Ô bruit doux de la pluie »", "Les sonorités et refrains donnent au texte sa douceur plaintive.", ["musicalité","bruit","doux","refrain","impressionnisme","poésie"]),
    ],
  },
  'GT-436': {
    texte: `Il pleure dans mon cœur
Comme il pleut sur la ville ;
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
    contexte: "Verlaine, Romances sans paroles (1874), Poème 6.",
    attendus: [
      att("Comparaison", "« Comme il pleut sur la ville »", "La comparaison fusionne météo et mélancolie intime.", ["comparaison","pluie","ville","cœur","spleen","lyrique"]),
      att("Anaphore", "« Il pleure... Il pleure sans raison »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
      att("Musicalité", "« Ô bruit doux de la pluie »", "Les sonorités et refrains donnent au texte sa douceur plaintive.", ["musicalité","bruit","doux","refrain","impressionnisme","poésie"]),
    ],
  },
  'GT-438': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Hugo, Les Contemplations (1856), Poème 8.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  'GT-440': {
    texte: `La petite ville, tassée au pied des collines, semblait paisible à qui la regardait de loin.
Pourtant, derrière les façades propres et les paroles honnêtes, chacun calculait son intérêt.
On parlait de morale, de mérite, de religion ; on surveillait les alliances, on pesait les dots,
on jugeait les ambitions avec une sévérité hypocrite.
Le jeune homme qui passait sur la place n'avait rien d'un héros : un habit noir, des mains maigres,
un regard ardent, et ce silence obstiné de ceux qui rêvent une autre vie.
Il observait les puissants, retenait leurs mots, et sentait déjà que le monde était un théâtre
où il fallait paraître juste pour réussir.`,
    contexte: "Hugo, Notre-Dame de Paris (1831), Scène clé.",
    attendus: [
      att("Champ lexical", "« morale, mérite, religion »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
};

function escJs(value) {
  return JSON.stringify(value);
}

function serializeRewriteEntry(key, entry) {
  const attendusCode = entry.attendus
    .map((a) => `      att(${escJs(a.procede)}, ${escJs(a.citation)}, ${escJs(a.interpretation)}, ${JSON.stringify(a.keywords)}),`)
    .join('\n');
  return `  '${key}': {\n    texte: \`${String(entry.texte).replace(/\\/g, '\\\\').replace(/\`/g, '\\\`')}\`,\n    contexte: ${escJs(entry.contexte)},\n    attendus: [\n${attendusCode}\n    ],\n  },\n`;
}

function countRewriteKeys(fileContent) {
  return (fileContent.match(/^\s*['"]GT-\d+['"]\s*:/gm) || []).length;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rewritesFile = path.join(__dirname, 'rewrites-all.mjs');
let existing = fs.readFileSync(rewritesFile, 'utf8');
existing = existing.replace(/import \{ REWRITES_EXTRA\d+ \}[^;]+;\s*/g, '');
existing = existing.replace(/\s*\.\.\.REWRITES_EXTRA\d+,?\s*/g, '\n');
const insertAt = existing.lastIndexOf('};');
const existingKeys = new Set(
  (existing.match(/['"]GT-\d+['"]\s*:/g) || []).map((m) => m.match(/['"]GT-\d+['"]/)[0].slice(1, -1)),
);
let keysAdded = 0;
let keysUpdated = 0;
for (const [key, entry] of Object.entries(NEW_REWRITES)) {
  const serialized = serializeRewriteEntry(key, entry).trimEnd();
  const keyRe = new RegExp(`\\s*['"]${key.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}['"]\\s*:\\s*\\{[\\s\\S]*?\\n  \\},\\n`, 'm');
  if (keyRe.test(existing)) {
    existing = existing.replace(keyRe, `\n${serialized}\n`);
    keysUpdated++;
  } else {
    existing = `${existing.slice(0, insertAt)}${serialized}\n${existing.slice(insertAt)}`;
    insertAt = existing.lastIndexOf('};');
    keysAdded++;
  }
}
fs.writeFileSync(rewritesFile, existing, 'utf8');
const total = countRewriteKeys(existing);
console.log(`keys added: ${keysAdded}`);
console.log(`keys updated: ${keysUpdated}`);
console.log(`total REWRITES keys after merge: ${total}`);
console.log(`NEW_REWRITES keys defined: ${Object.keys(NEW_REWRITES).length}`);
