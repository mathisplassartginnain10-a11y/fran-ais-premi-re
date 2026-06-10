/**
 * Réécritures manuelles des grands textes « bad » (extra12–extra15).
 */
import { att } from '../gtext-enrichment-lib.mjs';
import { REWRITES_PART_A } from './rewrites-part-a.mjs';
import { REWRITES_PART_B } from './rewrites-part-b.mjs';
import { REWRITES_PART_C } from './rewrites-part-c.mjs';
import { REWRITES_PART_D } from './rewrites-part-d.mjs';
import { REWRITES_EXTRA1921 } from './rewrites-extra19-21.mjs';
export const REWRITES = {
  'GT-734': {
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
    contexte: "Phèdre avoue sa passion à Oenone ; la nourrice propose l'accusation criminelle contre Hippolyte — registre tragique et manipulation.",
    attendus: [
      att('Apostrophe', '« Ô Vénus ! je le sais, tu veux que je meure »', 'Apostrophe : Phèdre interpelle la déesse et personnifie la fatalité amoureuse — la passion devient une force divine qui la condamne.', ['apostrophe', 'vénus', 'fatalité', 'passion', 'mort', 'tragique']),
      att('Antithèse', "« perdre celui qu'il offense »", "Antithèse entre sauver Phèdre et perdre Hippolyte : Oenone installe le dilemme criminel qui précipitera la catastrophe.", ['antithèse', 'sauver', 'perdre', 'hippolyte', 'dilemme', 'catastrophe']),
      att('Registre tragique', '« Faites-vous jour, ou plût au ciel que le crime / Vous fût inconnu ! »', 'Registre tragique : le choix entre aveu et mensonge dépasse les personnages — la fatalité du secret amoureux mène au crime.', ['registre', 'tragique', 'crime', 'aveu', 'mensonge', 'fatalité']),
      att('Dialogue', "« Quel crime ? Est-ce un crime d'aimer ? »", "Dialogue : la question rhétorique de Phèdre oppose passion innocente et loi morale — tension dramatique entre désir et devoir.", ['dialogue', 'crime', 'aimer', 'passion', 'devoir', 'tension']),
    ],
  },
  'GT-735': {
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
    contexte: "Litote amoureuse de Chimène face à son père — conflit entre honneur familial et passion pour Rodrigue.",
    attendus: [
      att('Litote', "« Va, je ne te hais point, tu penses que je te hais ? »", "Litote : Chimène nie la haine pour exprimer l'amour — la négation atténue une passion que le devoir lui interdit d'avouer.", ['litote', 'hais', 'amour', 'négation', 'devoir', 'chimène']),
      att('Antithèse', "« Il m'offense, et je l'aime »", "Antithèse entre offense et amour : Corneille condense le conflit tragique entre honneur et passion dans une formule brève.", ['antithèse', 'offense', 'aime', 'honneur', 'passion', 'conflit']),
      att('Registre pathétique', "« Je pleure sa victoire, et tremble pour sa vie »", "Registre pathétique : Chimène avoue sa compassion malgré le devoir de vengeance — pitié mêlée à l'indignation.", ['pathétique', 'pleure', 'tremble', 'pitié', 'vengeance', 'compassion']),
      att('Dialogue', "« Tu l'aimes donc toujours ? »", "Dialogue : le père interroge et force Chimène à révéler son trouble — la scène dramatise l'aveu contraint.", ['dialogue', 'aime', 'père', 'aveu', 'interrogation', 'trouble']),
    ],
  },
  'GT-736': {
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
    contexte: "Portrait de Gavroche — misère enfantine, vitalité et chanson dans les bas-fonds parisiens.",
    attendus: [
      att('Antithèse', "« les plus malheureusement malheureux et les plus malheureusement heureux »", "Antithèse : Hugo oppose misère extrême et joie insouciante — le personnage incarne la dignité du pauvre.", ['antithèse', 'malheureux', 'heureux', 'misère', 'joie', 'dignité']),
      att('Registre réaliste', "« Il était nu et grelottait »", "Registre réaliste : détails concrets (pieds nus, froid) dénoncent la misère sociale sans pathos artificiel.", ['réaliste', 'nu', 'grelottait', 'misère', 'social', 'concret']),
      att('Ironie', "« Ah ! je ris de me voir si belle / En ce miroir »", "Ironie : Gavroche reprend une chanson galante dans un décor de dénuement — décalage comique et poignant.", ['ironie', 'chanson', 'belle', 'décalage', 'comique', 'poignant']),
      att('Énumération', "« Il criait tout seul. Il riait aussi »", "Énumération d'actions simples : la juxtaposition des cris et du rire traduit une vitalité indomptable malgré l'abandon.", ['énumération', 'criait', 'riait', 'vitalité', 'abandon', 'enfant']),
    ],
  },
  'GT-737': {
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
    contexte: "Récit de la mort d'Hippolyte par Théramène — registre épique et pathétique.",
    attendus: [
      att('Registre épique', "« Un monstre sort des flots »", "Registre épique : le récit amplifie la catastrophe en scène héroïque — le monstre marin élève le drame au niveau mythologique.", ['épique', 'monstre', 'flots', 'héroïque', 'mythologique', 'catastrophe']),
      att('Hyperbole', "« Je sens mes cheveux se dresser sur ma tête altérée »", "Hyperbole : Théramène exagère sa terreur pour transmettre l'horreur du spectacle au spectateur.", ['hyperbole', 'cheveux', 'terreur', 'horreur', 'spectateur', 'exagération']),
      att('Registre pathétique', "« L'horreur du désespoir qui l'a précipité »", "Registre pathétique : le récit suscite compassion pour Hippolyte innocent victime de la fatalité amoureuse.", ['pathétique', 'désespoir', 'compassion', 'innocent', 'fatalité', 'victime']),
      att('Gradation', "« Les flots se sont apaisés »", "Gradation : le calme trompeur précède l'apparition du monstre — intensité croissante qui dramatise la mort du héros.", ['gradation', 'calme', 'flots', 'monstre', 'intensité', 'mort']),
    ],
  },
  'GT-738': {
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
    contexte: "Stances de Chimène — conflit entre honneur paternel et amour pour Rodrigue.",
    attendus: [
      att('Antithèse', "« Mon ardeur pour la gloire de mon père »", "Antithèse : Chimène oppose passion et devoir filial — les stances structurent le conflit tragique en vers.", ['antithèse', 'amour', 'père', 'devoir', 'passion', 'stances']),
      att('Apostrophe', "« mon cher Rodrigue, du bien »", "Apostrophe : Chimène interpelle Rodrigue dans un monologue lyrique — l'aveu amoureux se mêle à la demande de vengeance.", ['apostrophe', 'rodrigue', 'lyrique', 'aveu', 'vengeance', 'monologue']),
      att('Registre pathétique', "« Donnez-moi cette mort que je vous demande en pleurant »", "Registre pathétique : les larmes et la demande de mort traduisent l'impossibilité du choix — pitié devant le dilemme.", ['pathétique', 'mort', 'larmes', 'dilemme', 'pitié', 'impossible']),
      att('Métaphore', "« cruel obstacle »", "Métaphore : l'amour devient un obstacle à la vengeance — l'image condense le combat intérieur de Chimène.", ['métaphore', 'obstacle', 'amour', 'vengeance', 'combat', 'intérieur']),
    ],
  },
  'GT-741': {
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
    contexte: "Monologue d'Andromaque — devoir maternel, mémoire de Troie et refus de remariage.",
    attendus: [
      att('Anaphore', "« Souvenez-vous du jour »", "Anaphore implicite par l'invocation du souvenir : Andromaque martèle le passé troien pour justifier son refus.", ['anaphore', 'souvenez', 'souvenir', 'troie', 'passé', 'refus']),
      att('Registre pathétique', "« Mêlant sa voix mourante aux plaintes de sa veuve »", "Registre pathétique : le tableau d'Hector mourant suscite compassion — la mémoire du deuil fonde le devoir maternel.", ['pathétique', 'mourante', 'plaintes', 'deuil', 'compassion', 'hector']),
      att('Antithèse', "« Je n'ai pas, comme vous, des fureurs à étouffer »", "Antithèse entre la fureur de Pyrrhus et la dignité d'Andromaque — elle oppose violence et retenue.", ['antithèse', 'fureurs', 'dignité', 'violence', 'retenue', 'pyrrhus']),
      att('Apostrophe', "« Hélas ! si mon amour peut épargner la Troie »", "Apostrophe : Andromaque interpelle Pyrrhus et lie amour maternel et enjeu politique — le monologue dramatise le sacrifice.", ['apostrophe', 'troie', 'amour', 'maternel', 'sacrifice', 'politique']),
    ],
  },
  'GT-742': {
    texte: `CHIMÈNE
Père, épouse, sœur, et maîtresse,
Un cruel devoir partage mes affections ;
Je perds, en m'opposant à mes sentiments,
Et mon père, et Rodrigue, et l'amour qui me dompte.
Père, épouse, sœur, et maîtresse,
Tous les noms que j'avais pour le mien
Redoublent ma peine et ma honte extrême.
Ô rage ! ô désespoir ! ô vieil homme infortuné !
Ô cruel destin ! ô fureur de combattre !
Rodrigue me fait outrage, et Rodrigue me combat ;
Rodrigue m'est cher, et je ne puis le haïr ;
Rodrigue m'offense, et je sens mon cœur qui tremble
De ne pas lui vouloir mal, quand il me fait du mal.`,
    contexte: "Exclamatif de Chimène — anaphore des liens familiaux et conflit entre honneur et amour.",
    attendus: [
      att('Anaphore', "« Père, épouse, sœur, et maîtresse »", "Anaphore : la reprise des appellations familiales martèle le conflit des devoirs — effet incantatoire et pathétique.", ['anaphore', 'père', 'épouse', 'sœur', 'maîtresse', 'devoirs']),
      att('Énumération', "« Père, épouse, sœur, et maîtresse »", "Énumération des rôles de Chimène : chaque terme ajoute une obligation contradictoire et alourdit le dilemme.", ['énumération', 'rôles', 'obligations', 'contradictoire', 'dilemme', 'chimène']),
      att('Antithèse', "« Rodrigue m'offense, et je sens mon cœur qui tremble / De ne pas lui vouloir mal »", "Antithèse entre offense et tendresse : Corneille condense l'impossibilité tragique du choix amoureux.", ['antithèse', 'offense', 'tendresse', 'cœur', 'tremble', 'tragique']),
      att('Registre pathétique', "« Ô rage ! ô désespoir ! ô vieil homme infortuné ! »", "Registre pathétique : triple exclamation exprime le déchirement — compassion pour Chimène et pour son père.", ['pathétique', 'rage', 'désespoir', 'exclamation', 'déchirement', 'compassion']),
    ],
  },
  'GT-743': {
    texte: `CLÉANTE
Mais, dites-moi un peu, d'où vous vient donc Tartuffe,
Et comment le trouvèrent-ils si familier ?
ORGON
S'il avait su tenir, en effet, ainsi les rênes,
Frère, tous les honneurs dus à la vertu n'eussent-ils pas dû aller à lui ?
CLÉANTE
S'il est assez puissant pour faire à vos yeux ce mérite,
Vous n'avez pas besoin de vous faire son dupe.
ORGON
Que Dieu par sa bonté vous traite comme il le doit,
Puisqu'enfin il vous fait les honneurs qu'il me fait.
CLÉANTE
La vertu, mon frère, au fond n'est point une chose
Où la raison d'un autre soit le juge pour nous.
ORGON
C'est un homme… qui… ah !… enfin, un homme… qui…
Un homme qui prend le malheur des autres sur lui,
Un homme qui ne doit pas tant aux biens qu'il possède
Qu'aux grands biens du ciel dont en lui Dieu nous laisse voir l'image.
CLÉANTE
En lui vous voyez l'image des vertus célestes,
Et en lui seuls vous aimez ce qui fait toute votre gloire.`,
    contexte: "Orgon et Cléante — débat sur Tartuffe, dénonciation de l'hypocrisie religieuse.",
    attendus: [
      att('Ironie', "« vous n'avez pas besoin de vous faire son dupe »", "Ironie : Cléante dénonce l'aveuglement d'Orgon — le spectateur comprend ce qu'Orgon refuse de voir.", ['ironie', 'dupe', 'aveuglement', 'cléante', 'spectateur', 'dénonciation']),
      att('Antithèse', "« Où la raison d'un autre soit le juge pour nous »", "Antithèse entre vertu authentique et vertu imposée — Cléante oppose raison critique et dévotion aveugle.", ['antithèse', 'vertu', 'raison', 'juge', 'critique', 'dévotion']),
      att('Registre satirique', "« Un homme qui prend le malheur des autres sur lui »", "Registre satirique : Orgon idéalise Tartuffe en termes pieux — la satire vise l'hypocrisie religieuse.", ['satirique', 'malheur', 'hypocrisie', 'religieux', 'idéalise', 'tartuffe']),
      att('Dialogue', "« d'où vous vient donc Tartuffe »", "Dialogue : Cléante interroge et confronte Orgon — la scène structure le débat moral au cœur de la comédie.", ['dialogue', 'tartuffe', 'interroge', 'débat', 'moral', 'confrontation']),
    ],
  },
  'GT-744': {
    texte: `Demain, dès l'aube, à l'heure où blanchit la campagne,
Je partirai. Vois-tu, je sais que tu m'attends.
J'irai par la forêt, j'irai par la montagne.
Je ne puis demeurer loin de toi plus longtemps.

Je marcherai les yeux fixés sur mes pensées,
Sans rien voir au dehors, sans entendre aucun bruit,
Seul, inconnu, le dos courbé, les mains croisées,
Triste, et le jour pour moi sera comme la nuit.

Je ne regarderai ni l'or du soir qui tombe,
Ni les voiles au loin descendant vers Harfleur,
Et, quand j'arriverai, je mettrai sur ta tombe
Un bouquet de houx vert et de bruyère en fleur.`,
    contexte: "Poésie du deuil — pèlerinage vers la tombe de Léopoldine à Villequier.",
    attendus: [
      att('Anaphore', "« J'irai par la forêt, j'irai par la montagne »", "Anaphore sur « j'irai » : la reprise martèle la détermination du deuil et structure le rythme du poème.", ['anaphore', 'jirai', 'forêt', 'montagne', 'deuil', 'rythme']),
      att('Métaphore', "« le jour pour moi sera comme la nuit »", "Comparaison/métaphore : le jour nocturne traduit l'aveuglement du deuil — le monde extérieur disparaît.", ['métaphore', 'jour', 'nuit', 'aveuglement', 'deuil', 'monde']),
      att('Registre lyrique', "« Je marcherai les yeux fixés sur mes pensées »", "Registre lyrique : la subjectivité du poète guide le voyage intérieur — émotion du deuil paternel.", ['lyrique', 'pensées', 'subjectivité', 'voyage', 'émotion', 'père']),
      att('Symbolisme', "« Un bouquet de houx vert et de bruyère en fleur »", "Symbolisme : les plantes funéraires condensent le rituel du deuil et la mémoire tendre.", ['symbolisme', 'houx', 'bruyère', 'tombe', 'rituel', 'mémoire']),
    ],
  },
  'GT-257': {
    texte: `Cosette, on ne sait pas pourquoi, passait son temps à regarder l'eau couler. Ce n'est point un amusement pour une petite fille de huit ans, et cependant la nuit, quand les deux autres étaient endormis, elle se tenait à la fenêtre, et elle songeait, se chauffant au petit pot de feu sous ses pieds nus.
Au clair de lune, on voyait ce qu'on appelait dans ce pays la tour du guet, un édifice carré où elle était venue un soir faire de l'eau.
Elle était en haillons. Le vent lui faisait froid. Elle était pieds nus.
L'homme posa la main sur l'épaule de l'enfant, avec douceur, et lui dit :
— Ma petite, qu'est-ce que c'est que cela que tu portes là ?
— De l'eau, monsieur.
— Donne-moi donc ton seau, mon enfant.
Il alla lui-même au puits, remplit le seau et le rapporta, posant cette main sur l'épaule de l'enfant.`,
    contexte: "Cosette maltraitée chez les Thénardier — Valjean intervient ; misère enfantine et rédemption.",
    attendus: [
      att('Registre réaliste', "« Elle était en haillons. Le vent lui faisait froid »", "Registre réaliste : détails matériels de la misère enfantine — Hugo dénonce l'injustice sociale.", ['réaliste', 'haillons', 'froid', 'misère', 'enfant', 'injustice']),
      att('Registre pathétique', "« se chauffant au petit pot de feu sous ses pieds nus »", "Registre pathétique : l'image de Cosette seule et transie suscite compassion — figure de la victime innocente.", ['pathétique', 'pieds nus', 'seule', 'compassion', 'victime', 'innocente']),
      att('Antithèse', "« Donne-moi donc ton seau, mon enfant »", "Antithèse entre brutalité des Thénardier et douceur de Valjean — la rencontre annonce la rédemption.", ['antithèse', 'douceur', 'seau', 'rédemption', 'valjean', 'bonté']),
      att('Focalisation interne', "« elle songeait »", "Focalisation sur la rêverie de Cosette : le roman accorde une intériorité à l'enfant malheureux.", ['focalisation', 'songeaient', 'rêverie', 'intériorité', 'cosette', 'enfant']),
    ],
  },
  'GT-745': {
    texte: `PHÈDRE
Je veux, avant de mourir, parler une dernière fois.
Non, ta main n'a point cherché à me détromper ;
D'un froid respect, pour tout salut, m'a reçue ;
Mais ce n'est pas un vain hommage que l'on rend
À pas égaux au roi. Hélas ! où suis-je ? Mon cœur
S'égare. Peux-tu oublier qui je suis pour vous ?
Je ne dois pas à ce titre espérer vos respects.
N'immolez point la reine au fils du conquérant.
HIPPOLYTE
Madame, c'est assez. Il suffit que Thésée
M'ait fait naître avec vous dans l'auguste palais.
PHÈDRE
Vous l'appelez encore votre père, et le mien !
HIPPOLYTE
Oui, Madame, je sais quelle est pour moi votre bonté,
Et je n'oublie point le rang dont je vous honore.
PHÈDRE
Oui, Prince, je languis, je brûle, et pour mon crime
Je me sens toute seule en proie à tous les dieux
Qui m'ont jadis vengée et qui me punissent tous.`,
    contexte: "Scène de reconnaissance avec Hippolyte — tension dramatique et malentendu amoureux.",
    attendus: [
      att('Registre tragique', "« Je me sens toute seule en proie à tous les dieux »", "Registre tragique : Phèdre avoue sa passion comme un crime fatal — les dieux personnifient la fatalité.", ['tragique', 'brûle', 'crime', 'dieux', 'fatalité', 'passion']),
      att('Antithèse', "« N'immolez point la reine au fils du conquérant »", "Antithèse entre reine et fils du conquérant : Phèdre dramatise l'interdit amoureux et le décalage social.", ['antithèse', 'reine', 'conquérant', 'interdit', 'amoureux', 'décalage']),
      att('Dialogue', "« Peux-tu oublier qui je suis pour vous ? »", "Dialogue : la question révèle le trouble de Phèdre — malentendu entre respect et désir.", ['dialogue', 'oublier', 'trouble', 'malentendu', 'désir', 'respect']),
      att('Hyperbole', "« je languis, je brûle »", "Hyperbole : le lexique du feu exagère l'intensité de la passion — registre pathétique de l'amour interdit.", ['hyperbole', 'languis', 'brûle', 'passion', 'feu', 'interdit']),
    ],
  },
  'GT-747': {
    texte: `DON DIÈGUE
N'as-tu donc pas de sang, Rodrigue ? Ta mère
En t'a mis dans les veines, elle, de tant d'humeur ?
Rodrigue, as-tu du cœur ?
RODRIGUE
Un cœur moins agité que le mien
Eût-il en cet état pût garder la raison ?
DON DIÈGUE
Tu tardes trop à répondre ; un noble cœur
Ne consulte point tant pour venger son père.
Penses-tu qu'à l'honneur on se puisse ennuyer ?
— Rodriguez, qui donc ose aujourd'hui te dire
— Venge ton père, Rodriguez, ou cesse de vivre !
RODRIGUE
Mon père, laissez-moi répondre à votre plainte.
Je ne consulte point, je sais ce que je dois ;
Mais, au nom de Chimène, épargnez-moi ce jour.
DON DIÈGUE
Tu l'aimes donc ?
RODRIGUE
Oui, mon père, oui, je l'aime,
Et malgré le devoir, je sens qu'en cet instant
Mon amour combat ma raison et mon courage.`,
    contexte: "Don Diègue exhorte Rodrigue à venger l'honneur — devoir filial contre amour pour Chimène.",
    attendus: [
      att('Apostrophe', "« Venge ton père, Rodriguez, ou cesse de vivre ! »", "Apostrophe : Don Diègue interpelle son fils et pose l'ultimatum de l'honneur — tension dramatique maximale.", ['apostrophe', 'venge', 'père', 'honneur', 'ultimatum', 'tension']),
      att('Antithèse', "« Mon amour combat ma raison et mon courage »", "Antithèse entre amour et devoir : Rodrigue expose le conflit tragique qui structure tout le Cid.", ['antithèse', 'amour', 'raison', 'courage', 'devoir', 'conflit']),
      att('Registre pathétique', "« Un cœur moins agité que le mien »", "Registre pathétique : Rodrigue justifie son trouble — compassion pour le héros déchiré.", ['pathétique', 'cœur', 'raison', 'trouble', 'héros', 'déchirement']),
      att('Dialogue', "« Rodrigue, as-tu du cœur ? »", "Dialogue : le père interroge la virilité du fils — la scène dramatise l'épreuve de l'honneur.", ['dialogue', 'cœur', 'père', 'fils', 'honneur', 'épreuve']),
    ],
  },
  'GT-261': {
    texte: `ALCESTE
Non, non, il ne faut point adoucir les choses, et rien n'est si beau, pour bien parler, que la vérité dont on se fait un honneur ; aussi, je veux qu'on me traite avec une pleine franchise, ou qu'on ne me traite point du tout. Je ne saurais souffrir cette complaisance qui s'attache à flatter les vices des hommes, et qui, pour se faire valoir, caresse et applaudit tout ce qu'ils font.
CÉLIMÈNE
Mais enfin, la franchise a des bornes qu'il faut garder ; et l'on peut dire la vérité sans être brutal.
ALCESTE
Oui, quand on veut se faire un nom de courtois et d'honnête homme, et qu'on craint de déplaire à tout le monde ; mais moi, qui hais tous les hommes, les uns parce qu'ils sont méchants et méprisables, les autres pour être à tous méchants et méprisables, je veux qu'on me parle sans détour, et qu'on me dise franchement que je suis un insupportable.`,
    contexte: "Alceste et Célimène — critique des salons, vérité contre hypocrisie mondaine.",
    attendus: [
      att('Anaphore', "« Non, non, il ne faut point »", "Anaphore sur « non » : Alceste affirme son intransigeance et refuse toute complaisance sociale.", ['anaphore', 'non', 'intransigeance', 'complaisance', 'alceste', 'refus']),
      att('Antithèse', "« adoucir les choses… la vérité »", "Antithèse entre flatterie sociale et vérité brutale — Molière oppose deux éthiques de la parole.", ['antithèse', 'adoucir', 'vérité', 'flatterie', 'parole', 'éthique']),
      att('Registre polémique', "« pleine franchise »", "Registre polémique : le lexique combatif d'Alceste arme le discours contre les mœurs du salon.", ['polémique', 'franchise', 'combatif', 'salon', 'mœurs', 'discours']),
      att('Hyperbole', "« moi, qui hais tous les hommes »", "Hyperbole : la généralisation caricature le misanthrope et prépare le comique de caractère.", ['hyperbole', 'hais', 'hommes', 'misanthrope', 'caricature', 'comique']),
    ],
  },
  'GT-262': {
    texte: `DAMIS
Oui, je le trahirai, monsieur, je le trahirai, ou que la colère de Dieu m'écrase sur le champ ! Il n'est point ici de crime ou de scélérat que je redoute davantage. Je ne veux point qu'on me fasse un crime de ce que je vais faire ; et je veux, au contraire, qu'on m'en sache gré de la hardiesse que je vais montrer. C'est un monstre, oui, c'est un monstre qu'il faut démasquer ; et si mon père s'obstine à ne pas voir sa trahison, il faut que je prenne sur moi de l'éclairer. Je ne puis souffrir qu'un tel homme abuse de l'autorité d'un père, et qu'il se serve de notre confiance et de notre tendresse pour trahir notre honneur et notre repos.
MADAME PERNELLE
Quelle impétuosité !`,
    contexte: "Damis dénonce Tartuffe — courage moral et registre polémique.",
    attendus: [
      att('Anaphore', "« je le trahirai, monsieur, je le trahirai »", "Anaphore : Damis répète son serment et marque la fermeté de sa dénonciation.", ['anaphore', 'trahirai', 'damis', 'serment', 'fermeté', 'dénonciation']),
      att('Hyperbole', "« que la colère de Dieu m'écrase sur le champ »", "Hyperbole : l'adjuration divine exagère l'enjeu moral et souligne le courage du personnage.", ['hyperbole', 'dieu', 'colère', 'courage', 'enjeu', 'moral']),
      att('Registre polémique', "« crime ou de scélérat »", "Registre polémique : le vocabulaire judiciaire dénonce Tartuffe comme menace morale maximale.", ['polémique', 'crime', 'scélérat', 'hypocrisie', 'dénonce', 'menace']),
      att('Métaphore', "« C'est un monstre »", "Métaphore : Tartuffe est assimilé à un monstre — l'image condense la répulsion morale de Damis.", ['métaphore', 'monstre', 'tartuffe', 'répulsion', 'image', 'démasquer']),
    ],
  },
  'GT-263': {
    texte: `C'est toujours la même chose, et c'est toujours toi.
Ni ciel, ni jour, je ne vois qu'en songeant à toi.
Je ne sais quel désir toujours me fait trembler,
Et je sens confusément que je t'aime sans t'aimer.

Au son de ta voix faible et profonde, hélas !
Comme un sanglot, mon corps se soulève et se penche,
Et je crois que ta main, sur mon front qui frémit,
Vient essuyer mes pleurs et calmer mon esprit.

Je t'aime sans savoir qui tu es, ni d'où tu viens,
Et je ne sais pas même si tu es femme ou homme.
Tu es le rêve familier de mes nuits sans fin,
Et je t'attends toujours, et tu ne viens jamais.`,
    contexte: "Poésie mélancolique — amour idéal, musicalité verlainienne.",
    attendus: [
      att('Anaphore', "« C'est toujours la même chose, et c'est toujours toi »", "Anaphore : la reprise de « c'est toujours » installe l'obsession amoureuse et un rythme incantatoire.", ['anaphore', 'toujours', 'obsession', 'amour', 'rythme', 'incantatoire']),
      att('Comparaison', "« Comme un sanglot »", "Comparaison : la voix comparée à un sanglot traduit une émotion intime débordante.", ['comparaison', 'sanglot', 'voix', 'émotion', 'intime', 'débordante']),
      att('Registre lyrique', "« mon corps se soulève »", "Registre lyrique : le corps réagissant à la voix exprime une subjectivité passionnée.", ['lyrique', 'corps', 'soulève', 'passion', 'subjectivité', 'voix']),
      att('Oxymore', "« je t'aime sans t'aimer »", "Oxymore : l'amour irréel du rêve oppose possession et absence — mélancolie verlainienne.", ['oxymore', 'aime', 'rêve', 'absence', 'mélancolie', 'verlaine']),
    ],
  },
  'GT-264': {
    texte: `Au-dessus des étangs, au-dessus des vallons,
Des montagnes, des bois, des nuages, des mers,
Par delà le soleil, par delà les éthers,
Par delà les confins des sphères étoilées,

Mon esprit, tu te meus avec agilité,
Et, comme un bon nageur qui se pâme dans l'onde,
Tu sillonnes gaîment les immensités profondes
Avec une indicible et mâle allégarie.

Élève-toi, mon âme, et bois le feu divin
Des splendeurs qui t'entourent, et, ravi, dédaigne
Les ténèbres grossières de l'ignoble chaîne
Et les vastes douleurs qu'amassent les humains.`,
    contexte: "Poésie baudelairienne — élévation mystique, anaphore et rythme.",
    attendus: [
      att('Anaphore', "« Au-dessus des étangs, au-dessus des vallons »", "Anaphore : la montée répétée des prépositions structure l'élévation progressive de l'âme.", ['anaphore', 'au-dessus', 'élévation', 'âme', 'progressive', 'prépositions']),
      att('Énumération', "« montagnes, des bois, des nuages, des mers »", "Énumération : la liste des espaces naturels élargit le regard et prépare l'envol poétique.", ['énumération', 'montagnes', 'nuages', 'mers', 'envol', 'espace']),
      att('Comparaison', "« comme un bon nageur qui se pâme dans l'onde »", "Comparaison : l'âme comparée au nageur traduit l'ivresse de l'élévation spirituelle.", ['comparaison', 'nageur', 'onde', 'âme', 'ivresse', 'spirituelle']),
      att('Registre lyrique', "« Élève-toi, mon âme »", "Registre lyrique : l'apostrophe à l'âme traduit une quête d'idéal au-delà du spleen.", ['lyrique', 'élève', 'âme', 'idéal', 'spleen', 'apostrophe']),
    ],
  },
  'GT-265': {
    texte: `PYRRHUS
Andromaque, il faut que je vous aime,
Et que, malgré moi même, en dépit de ma gloire,
Je vous le dise encore une fois, je vous aime.
Je sais que je suis roi, que vous êtes captive,
Que, de vos premiers jours, entourée d'horreurs,
Vous n'avez vu partout que mes mains victorieuses ;
Mais enfin, Madame, il faut que je vous aime.
ANDROMAQUE
Seigneur, je ne prétends point vous faire un outrage ;
Mais enfin, croyez-moi, je ne vous aime point.
PYRRHUS
Vous ne m'aimez point ? Eh bien ! n'en déplaise
À ceux qui m'ont promis votre cœur et vos vœux,
Je veux croire de vous tout ce qu'il me plaît croire.
ANDROMAQUE
Vous le pouvez, Seigneur, et ce n'est pas un crime.
PYRRHUS
Et c'est Hector qui m'ordonne de le dire.`,
    contexte: "Pyrrhus déclare sa passion à Andromaque — tragédie classique, devoir et conflit politique.",
    attendus: [
      att('Apostrophe', "« Andromaque, il faut que je vous aime »", "Apostrophe : Pyrrhus interpelle Andromaque et dramatise l'aveu amoureux au cœur de la scène.", ['apostrophe', 'andromaque', 'pyrrhus', 'aveu', 'passion', 'scène']),
      att('Anaphore', "« il faut que je vous aime »", "Anaphore : la reprise de « il faut » traduit la fatalité du désir qui domine Pyrrhus.", ['anaphore', 'il faut', 'aime', 'fatalité', 'désir', 'domine']),
      att('Hyperbole', "« c'est Hector qui m'ordonne de le dire »", "Hyperbole : l'invocation d'Hector magnifie l'enjeu et mêle amour, mort et politique.", ['hyperbole', 'hector', 'ordre', 'mort', 'politique', 'enjeu']),
      att('Registre tragique', "« malgré moi même, en dépit de ma gloire »", "Registre tragique : la passion dépasse la raison politique — annonce de la catastrophe.", ['tragique', 'gloire', 'passion', 'catastrophe', 'raison', 'fatalité']),
    ],
  },
  'GT-266': {
    texte: `DON DIÈGUE
Ô rage ! Ô désespoir ! Ô vieil homme forcé !
Faut-il qu'un étranger, qu'un jeune insolent
Reprenne l'honneur dont je n'ai plus que l'ombre,
Et que je n'ose plus soutenir contre un homme !
Rodrigue, as-tu du cœur ?
RODRIGUE
Que faites-vous, mon père ?
DON DIÈGUE
Ne me parle point, ne me réponds rien.
Je suis outré, confus, le désespoir me tue,
Et la honte m'accable avec la vieillesse.
Mon fils, mon fils unique, témoin du jour et de ma honte !
Va, ne me réponds point, cours, venge ta querelle ;
Va, défie, combats, et triomphe, si tu peux.
Si tu reviens vainqueur, je te donne Chimène ;
Mais ne me reviens plus, si tu ne l'es pas.`,
    contexte: "Combat et mort du Comte — registre pathétique, honneur blessé et filiation.",
    attendus: [
      att('Anaphore', "« Ô rage ! Ô désespoir ! Ô vieil homme »", "Anaphore : la triple exclamation structure le désespoir de Don Diègue et intensifie le pathos.", ['anaphore', 'rage', 'désespoir', 'exclamation', 'pathos', 'diègue']),
      att('Apostrophe', "« Mon fils, mon fils unique »", "Apostrophe : le père s'adresse à Rodrigue et transfère sur lui l'honneur familial.", ['apostrophe', 'fils', 'unique', 'rodrigue', 'honneur', 'filiation']),
      att('Registre pathétique', "« témoin du jour et de ma honte »", "Registre pathétique : la honte publique suscite pitié et prépare la vengeance tragique.", ['pathétique', 'honte', 'pitié', 'vengeance', 'publique', 'tragique']),
      att('Antithèse', "« Si tu reviens vainqueur, je te donne Chimène ; / Mais ne me reviens plus »", "Antithèse entre victoire et rejet : Don Diègue lie honneur et filiation dans un ultimatum brutal.", ['antithèse', 'vainqueur', 'rejet', 'ultimatum', 'honneur', 'victoire']),
    ],
  },
  'GT-267': {
    texte: `ALCESTE
Ah ! mon pauvre cœur, voilà comme on te traite,
Et voilà sous quelle conduite on te fait vivre !
Tu n'as rien à répondre, et tu dois te soumettre ;
C'est elle qui te fait tout le mal que tu ressens.
Tu l'aimes, malheureux, et ton amour la flatte,
Et tu ne saurais pourtant rompre avec elle.
Non, non, il n'est point d'âme un peu généreuse
Qui puisse souffrir un pareil traitement.
Faut-il qu'on te fasse un crime de ta sincérité,
Et qu'il faille obéir aux maximes du monde ?
Ah ! que le monde est grand pour qui sait y vivre !
Mais pour qui ne sait pas, c'est une grande prison.`,
    contexte: "Monologue d'Alceste — misanthropie, déception amoureuse et sincérité blessée.",
    attendus: [
      att('Apostrophe', "« mon pauvre cœur »", "Apostrophe : Alceste s'adresse à son cœur et extériorise une souffrance intime.", ['apostrophe', 'cœur', 'alceste', 'souffrance', 'intime', 'extériorise']),
      att('Anaphore', "« voilà comme on te traite »", "Anaphore sur « voilà » : la reprise martèle l'injustice subie par le misanthrope.", ['anaphore', 'voilà', 'injustice', 'misanthrope', 'martèle', 'reprise']),
      att('Registre pathétique', "« mon pauvre cœur »", "Registre pathétique : la plainte du moi sincère suscite compassion et ironie tragique.", ['pathétique', 'plainte', 'sincérité', 'compassion', 'ironie', 'tragique']),
      att('Antithèse', "« c'est une grande prison »", "Antithèse : Alceste oppose adaptation sociale et enfermement moral — critique des mœurs.", ['antithèse', 'monde', 'prison', 'mœurs', 'social', 'critique']),
    ],
  },
  'GT-268': {
    texte: `O bois, mon ami, l'automne tient ses fêtes ;
Il étend sur les prés son manteau d'or et de roux,
Et l'on dirait, en voyant sa parure éclatante,
Qu'un roi fait son entrée au banquet des vieux jours.

L'étang voile d'argent sa lisière de roseaux,
Et, dans le grand silence où tout semble rêver,
On entend seulement, au loin, dans les roseaux,
Le bruit d'un pas d'eau qui fuit et qui rampe.

O bois, mon ami, l'automne tient ses fêtes ;
Et tout ce grand silence est paisible au fond des bois,
Comme un souvenir doux qui revient dans la mémoire
Quand le cœur, fatigué, se repose un moment.`,
    contexte: "Poésie du deuil — mémoire, nature et mélancolie.",
    attendus: [
      att('Apostrophe', "« O bois, mon ami »", "Apostrophe : Hugo s'adresse au bois comme à un confident et personnifie la nature.", ['apostrophe', 'bois', 'ami', 'nature', 'confident', 'personnifie']),
      att('Métaphore', "« voile d'argent sa lisière »", "Métaphore : l'étang drapé d'argent crée une image visuelle douce qui traduit la mélancolie.", ['métaphore', 'argent', 'étang', 'lisière', 'mélancolie', 'image']),
      att('Comparaison', "« Qu'un roi fait son entrée au banquet des vieux jours »", "Comparaison : l'automne comparé à un roi en fête sublime le paysage et crée une atmosphère solennelle.", ['comparaison', 'roi', 'automne', 'fête', 'paysage', 'solennelle']),
      att('Registre lyrique', "« tout ce grand silence »", "Registre lyrique : le silence paisible exprime une subjectivité nostalgique face au temps qui passe.", ['lyrique', 'silence', 'nostalgie', 'deuil', 'temps', 'paisible']),
    ],
  },
  'GT-269': {
    texte: `Il venait de se délivrer, lui, Javert, du rancuneur ; il venait de rendre à autrui le droit de le mépriser et de le fouler aux pieds. Il sentait qu'il était bon, qu'il était grand, qu'il était juste, qu'il était vrai, et cependant il se méprisait. Il sentait qu'il n'était plus qu'une bête féroce et qu'une brute stupide. Il avait perdu l'homme qu'il croyait être, et il ne retrouvait plus celui qu'il était. Il était dépouillé, il était nu, il était abandonné de lui-même.
Il sentit le vertige de son abîme. Il sentit, lui, le justicier inflexible, qu'il était plus bas que cet homme qu'il avait méprisé. Il sentit qu'il avait été stupide. Il avait, sous les yeux, l'exemple absolu, l'évidence, l'évidence visible de la vie, de la liberté, de l'homme extérieur à la loi, de la raison, de la vérité.`,
    contexte: "Javert face à la pitié de Valjean — déchirement moral et suicide imminent.",
    attendus: [
      att('Anaphore', "« Il venait de se délivrer, lui, Javert, du rancuneur ; il venait de rendre »", "Anaphore sur « il venait de » : la reprise souligne la double libération impossible de Javert et prépare sa chute.", ['anaphore', 'venait', 'javert', 'libération', 'chute', 'impossible']),
      att('Métaphore', "« vertige de son abîme »", "Métaphore : l'abîme traduit la crise existentielle de Javert face à la pitié reçue.", ['métaphore', 'abîme', 'vertige', 'crise', 'existence', 'pitié']),
      att('Antithèse', "« et cependant il se méprisait »", "Antithèse entre sentiment de grandeur et auto-mépris — le personnage se déchire.", ['antithèse', 'bon', 'méprisait', 'déchirement', 'javert', 'contradiction']),
      att('Registre pathétique', "« le droit de le mépriser et de le fouler aux pieds »", "Registre pathétique : la souffrance intérieure de Javert suscite pitié et tragédie morale.", ['pathétique', 'mépriser', 'souffrance', 'tragédie', 'morale', 'pitié']),
    ],
  },
  'GT-270': {
    texte: `ORESTE
Je suis plein de ton ombre, et crois en cet instant
Que je te vois encore, et que tu m'apparais.
Je crois entendre sa plainte à chaque pas que je fais,
Et mon cœur, qui te suit, croit te suivre à la trace.
Hélas ! depuis le jour où je t'ai vue en proie
À ce barbare insolent qui te tenait captive,
Je n'ai vécu, Pylade, que dans l'extrême rage
De te voir en ses mains, et de craindre sa rage.
Je t'ai vue, et j'ai cru que mon âme abattue
Ne pourrait plus jamais recouvrer sa vigueur ;
Mais l'amour, plus puissant que la haine et que la peur,
M'a rendu tout entier au soin de te secourir.`,
    contexte: "Monologue d'Oreste — jalousie, obsession et ambivalence amoureuse.",
    attendus: [
      att('Métaphore', "« plein de ton ombre »", "Métaphore : l'ombre d'Andromaque envahit Oreste et traduit une passion obsédante.", ['métaphore', 'ombre', 'obsession', 'jalousie', 'andromaque', 'envahit']),
      att('Anaphore', "« Je crois entendre sa plainte à chaque pas que je fais »", "Anaphore sur « je crois » : la reprise marque le trouble mental et l'obsession d'Oreste.", ['anaphore', 'crois', 'trouble', 'oreste', 'mental', 'obsession']),
      att('Antithèse', "« l'amour, plus puissant que la haine et que la peur »", "Antithèse : l'amour domine les sentiments contraires — structure l'ambivalence d'Oreste.", ['antithèse', 'amour', 'haine', 'peur', 'ambivalence', 'domine']),
      att('Registre lyrique', "« sa plainte à chaque pas »", "Registre lyrique : la subjectivité d'Oreste exprime une souffrance amoureuse intérieure.", ['lyrique', 'plainte', 'passion', 'souffrance', 'intérieur', 'subjectivité']),
    ],
  },
  'GT-271': {
    texte: `CÉLIMÈNE
On ne sauroit jamais être un petit marquis à demi ; et celui-ci remplit noblement sa place, en furetant de côté et d'autre, avec une mise tant de majesté, qu'il semble toujours dire : « Approchez, messieurs, et regardez-moi. » Il a l'air de commander à tout le monde, et de vouloir qu'on admire sa mine et sa taille. Il prend des attitudes, il fait des mines, il se donne des airs, et, pour peu qu'on l'applaudisse, il se croit le premier homme du monde.
ALCESTE
C'est un portrait au naturel.
CÉLIMÈNE
Non, c'est un portrait au naturel, et qui ne flatte point. Il est vrai qu'il a de l'esprit, qu'il sait parler, et qu'il a de l'adresse ; mais il est si plein de lui-même, qu'il étouffe tout le monde, et qu'il n'y a point moyen de souffler quand il parle.`,
    contexte: "Satire mondaine — portrait comique du petit marquis.",
    attendus: [
      att('Hyperbole', "« remplit noblement sa place »", "Hyperbole : Molière exagère la pose du marquis pour le ridiculiser.", ['hyperbole', 'noblement', 'pose', 'marquis', 'ridicule', 'satire']),
      att('Ironie', "« noblement »", "Ironie : l'adverbe « noblement » dit le contraire du ridicule décrit.", ['ironie', 'noblement', 'ridicule', 'mondanité', 'décalage', 'comique']),
      att('Registre comique', "« petit marquis à demi »", "Registre comique : le portrait satirique vise les mœurs du salon.", ['comique', 'petit marquis', 'satire', 'salon', 'mœurs', 'portrait']),
      att('Métaphore', "« il étouffe tout le monde »", "Métaphore : le marquis étouffe la conversation — image du narcissisme mondain.", ['métaphore', 'étouffe', 'narcissisme', 'mondain', 'conversation', 'vanité']),
    ],
  },
  'GT-272': {
    texte: `SGANARELLE
J'en pleurerais de compassion ; l'honnêteté semble une chose si démodée, et les hommes ne sont plus que des loups les uns pour les autres. Il n'y a plus de foi, plus de justice, plus de reconnaissance, plus de générosité ; chacun ne pense qu'à soi, et l'on vit dans une espèce de barbarie qui fait pitié.
GUSMAN
Mais enfin, monsieur, votre maître est un grand seigneur ; il a de l'esprit, de la naissance, de la mine, de l'adresse, et toutes les qualités qui plaisent aux femmes.
SGANARELLE
Oui, voilà comme les gens sont faits : ils admirent dans un grand seigneur ce qu'ils blâmeraient dans un autre. La naissance, la mine, l'esprit, l'adresse, tout cela excuse tout, et l'on trouve beau ce qui serait ridicule en un autre.`,
    contexte: "Sganarelle et Gusman — valet et satire morale du libertinage.",
    attendus: [
      att('Comparaison', "« des loups les uns pour les autres »", "Comparaison : Sganarelle assimile les hommes à des loups et dénonce l'égoïsme social.", ['comparaison', 'loups', 'égoïsme', 'social', 'hommes', 'dénonce']),
      att('Ironie', "« l'honnêteté semble une chose si démodée »", "Ironie : la formule moque une société où la vertu paraît dépassée.", ['ironie', 'honnêteté', 'démodée', 'vertu', 'société', 'moque']),
      att('Énumération', "« plus de foi, plus de justice, plus de reconnaissance »", "Énumération des vertus absentes : effet d'accélération qui dénonce la décadence morale.", ['énumération', 'foi', 'justice', 'reconnaissance', 'décadence', 'vertus']),
      att('Registre comique', "« J'en pleurerais de compassion »", "Registre comique : le valet commente en spectateur et guide le rire du public.", ['comique', 'pleurerais', 'valet', 'sganarelle', 'rire', 'spectateur']),
    ],
  },
  'GT-273': {
    texte: `C'est un trou de verdure où chante une rivière
Accrochant follement aux herbes des haillons
D'argent ; où le soleil, de la montagne fière,
Luit : c'est un petit val, calme et riant.

On y voit, çà et là, sous les buissons,
Deux yeux d'azur, deux yeux d'enfant, deux yeux du ciel,
Deux yeux qui rient et qui pleurent en même temps,
Deux yeux qui disent : « Que veux-tu ? »

C'est un soldat jeune, bouche ouverte, tête nue,
Et la nuque baignant dans le frais cresson bleu,
Dormant ; il est étendu dans l'herbe, sous la nue,
Pâle dans son lit vert où la lumière pleut.`,
    contexte: "Poésie mélancolique — nature paisible masquant la mort du soldat.",
    attendus: [
      att('Champ lexical', "« C'est un trou de verdure où chante une rivière »", "Champ lexical de la nature : le décor bucolique installe une atmosphère paisible qui contraste avec la révélation finale.", ['champ lexical', 'verdure', 'rivière', 'val', 'bucolique', 'paisible']),
      att('Métaphore', "« D'argent »", "Métaphore : les reflets argentés de la rivière créent une image sensorielle musicale typique de Verlaine.", ['métaphore', 'argent', 'rivière', 'reflets', 'musicalité', 'haillons']),
      att('Antithèse', "« Deux yeux qui rient et qui pleurent en même temps »", "Antithèse entre rire et pleurs : le détail annonce la mort voilée du dormeur.", ['antithèse', 'rient', 'pleurent', 'mort', 'voilée', 'contraste']),
      att('Registre lyrique', "« calme et riant »", "Registre lyrique : l'adjectivation douce traduit une mélancolie voilée caractéristique du poème.", ['lyrique', 'calme', 'riant', 'mélancolie', 'voilée', 'verlaine']),
    ],
  },
  'GT-274': {
    texte: `Voici venir les temps où vibrant sur sa tige
Chaque fleur s'évapore ainsi qu'un encensoir ;
Les sons et les parfums tournent en un mélange confus
De l'extase aux vertiges, il n'y a plus de milieu.

Comme un long écheveau qui se déroule et s'étend,
Le crépuscule met un grand frisson sur l'air ;
Et l'heure exquise et folle où l'on peut être bien
Avec un cœur qui bat et des yeux qui s'endorment.

Les cloches tintent, tintent, tintent, tintent, tintent,
Et l'âme enivrée erre au son de chaque cloche ;
Et l'âme enivrée erre au parfum de chaque fleur ;
De l'extase aux vertiges, il n'y a plus de milieu.`,
    contexte: "Modernité poétique — synesthies, spleen et extase au crépuscule.",
    attendus: [
      att('Comparaison', "« s'évapore ainsi qu'un encensoir »", "Comparaison : la fleur comparée à l'encensoir fusionne parfum et rite, typique de la synesthie baudelairienne.", ['comparaison', 'encensoir', 'fleur', 'parfum', 'synesthie', 'rite']),
      att('Synesthésie', "« sons et les parfums »", "Synesthésie : l'union des sens crée une atmosphère onirique propre à l'esthétique du spleen.", ['synesthésie', 'sons', 'parfums', 'spleen', 'onirique', 'sens']),
      att('Antithèse', "« De l'extase aux vertiges »", "Antithèse : Baudelaire oppose deux états limites du ressenti et abolit toute médiation.", ['antithèse', 'extase', 'vertiges', 'contraste', 'limites', 'ressenti']),
      att('Allitération', "« Les cloches tintent, tintent, tintent »", "Allitération et répétition : le martèlement imite le son des cloches et structure le rythme du soir.", ['allitération', 'cloches', 'tintent', 'rythme', 'martèlement', 'soir']),
    ],
  },
  'GT-275': {
    texte: `CAMILLE
Rome, l'unique objet de ma haine et de ma colère,
Je ne sais quel malheur, en naissant dans tes murs,
M'a destinée à la haine et aux soins de mon père.
Rome, l'unique objet de ma haine et de ma colère,
Tu le vois, je te suis, et, malgré ta colère,
Je ne puis te haïr, et je ne puis t'aimer.
Rome, l'unique objet de ma haine et de ma colère,
Connais le cœur que tu prétends que j'outrage.
Je ne hais point Curiace, et je n'aime point Horace ;
Mais, malgré moi, je sens qu'en secret je l'adore,
Et que, sans le vouloir, mon cœur lui fait la cour.`,
    contexte: "Monologue de Camille — anaphore, devoir politique et passion pour Curiace.",
    attendus: [
      att('Anaphore', "« Rome, l'unique objet de ma haine et de ma colère »", "Anaphore : la reprise de « Rome » martèle la haine politique de Camille et structure le monologue.", ['anaphore', 'rome', 'haine', 'colère', 'politique', 'monologue']),
      att('Apostrophe', "« Rome, l'unique objet »", "Apostrophe : Camille interpelle la cité comme un personnage et dramatise le conflit public.", ['apostrophe', 'rome', 'camille', 'cité', 'conflit', 'public']),
      att('Antithèse', "« Je ne hais point Curiace, et je n'aime point Horace »", "Antithèse entre devoir et passion : Camille nie tout en avouant son trouble secret.", ['antithèse', 'curiace', 'horace', 'devoir', 'passion', 'trouble']),
      att('Registre tragique', "« Je ne puis te haïr, et je ne puis t'aimer »", "Registre tragique : Camille avoue l'impossibilité de haïr Rome malgré le devoir — conflit politique et passionnel.", ['tragique', 'colère', 'haïr', 'rome', 'devoir', 'passion']),
    ],
  },
  'GT-276': {
    texte: `DOM JUAN
Que faire ? — Vous savez ce que c'est que d'être honnête homme, et ce que c'est que d'être libertin ; et vous savez aussi que je suis libertin, et que je ne le cacherai point. Non, non, je ne veux, et ne puis rien renier de ce que j'ai fait.
LE PAUVRE
Monsieur, la charité est une vertu si belle, qu'il n'est point de cœur si dur qui ne soit touché de la misère d'autrui.
DOM JUAN
S'il n'y a que les misérables pour être honnêtes, il faut avouer que l'honnêteté est une bien triste chose, et que les gens de bien sont bien malheureux.
LE PAUVRE
Monsieur, la religion nous enseigne que nous devons avoir compassion des malheureux.
DOM JUAN
Oui, quand la misère est réelle ; mais il y a tant de fripons qui se couvrent du nom de malheureux, qu'il est difficile de les distinguer.`,
    contexte: "Dom Juan et le Pauvre — registre comique et philosophique, libertinage et morale.",
    attendus: [
      att('Ironie', "« s'il n'y a que les misérables… honnêtes »", "Ironie : Dom Juan retourne la leçon du Pauvre et défend une éthique provocatrice.", ['ironie', 'misérables', 'honnêtes', 'libertin', 'provocation', 'éthique']),
      att('Anaphore', "« Non, non, je ne veux »", "Anaphore : la négation répétée affirme l'entêtement du personnage et le comique de situation.", ['anaphore', 'non', 'entêtement', 'dom juan', 'négation', 'affirmation']),
      att('Registre comique', "« Que faire ? »", "Registre comique : l'exclamation ouvre un débat moral sur un ton paradoxal propre à Molière.", ['comique', 'faire', 'paradoxe', 'moral', 'débat', 'molière']),
      att('Antithèse', "« honnête homme… libertin »", "Antithèse entre vertu et libertinage : Dom Juan assume explicitement son refus moral.", ['antithèse', 'honnête', 'libertin', 'vertu', 'refus', 'moral']),
    ],
  },
  'GT-277': {
    texte: `Je vois les toits que le jour écarte lentement,
Et les clochers que le soir dore et que le vent incline ;
Je vois les tours que l'ombre allonge et que la pluie trempe,
Et les murs que le temps ronge et que le froid déchire.

Je vois les rues où l'hiver met sa neige et son silence,
Et les places où l'automne étend ses feuilles mortes ;
Je vois les quais où la brume étend son voile gris,
Et les ponts que la Seine traverse et que le brouillard voile.

Assombrit Bruges et Gand que j'ai vus autrefois,
Et mes yeux se noient dans ces paysages tristes
Où le ciel et l'eau se mêlent dans une même teinte
Et où le souvenir revient comme une plainte lente.`,
    contexte: "Poésie impressionniste — mélancolie, mémoire et musicalité verlainienne.",
    attendus: [
      att('Anaphore', "« Je vois les toits que le jour écarte lentement »", "Anaphore sur « je vois » : la reprise structure le paysage et installe une contemplation mélancolique.", ['anaphore', 'je vois', 'toits', 'clochers', 'mélancolie', 'reprise']),
      att('Champ lexical', "« l'hiver met sa neige et son silence »", "Champ lexical urbain et hivernal : le décor belge installe une atmosphère mélancolique.", ['champ lexical', 'toits', 'clochers', 'pluie', 'hiver', 'urbain']),
      att('Métaphore', "« le jour écarte lentement »", "Métaphore : le jour personnifié suggère une lumière rare et un temps suspendu.", ['métaphore', 'jour', 'lentement', 'lumière', 'personnifié', 'suspendu']),
      att('Registre lyrique', "« que j'ai vus autrefois »", "Registre lyrique : le souvenir personnel colore le paysage d'une nostalgie intime.", ['lyrique', 'autrefois', 'souvenir', 'nostalgie', 'paysage', 'intime']),
    ],
  },
  'GT-278': {
    texte: `J'errais tout seul par la plage au vent froid,
Quand la nuit, sur la mer, étendait son manteau noir ;
La lune, au fond du ciel, semblait un globe d'argent
Qui roulait dans l'espace avec un bruit sans espoir.

La mer montait, montait, avec un bruit de chaînes,
Et la dune, immobile, regardait la tempête ;
Et moi, debout, les yeux fixés sur l'horizon,
Je sentais mon âme comme un monde mort
S'étendre, vaste, lugubre et sans fin.

La mer parlait ; la nuit parlait ; la dune parlait ;
Et chacun disait à mon cœur : « Où est-elle ? »
Et chacun disait à mon deuil : « Elle n'est plus. »`,
    contexte: "Poésie du deuil — paysage nocturne et méditation sur la perte.",
    attendus: [
      att('Métaphore', "« mon âme comme un monde mort »", "Métaphore : le moi intérieur assimilé à un monde mort traduit le deuil et l'isolement.", ['métaphore', 'âme', 'monde mort', 'deuil', 'isolement', 'intérieur']),
      att('Personnification', "« La mer parlait ; la nuit parlait »", "Personnification : les éléments du paysage dialoguent avec le deuil du poète.", ['personnification', 'mer', 'nuit', 'dune', 'dialogue', 'deuil']),
      att('Énumération', "« La mer parlait ; la nuit parlait ; la dune parlait »", "Énumération : les éléments du paysage s'accumulent et alourdissent l'atmosphère tragique.", ['énumération', 'mer', 'nuit', 'dune', 'atmosphère', 'tragique']),
      att('Registre lyrique', "« lugubre et sans fin »", "Registre lyrique : l'adjectivation exprime une subjectivité noyée dans la mélancolie.", ['lyrique', 'lugubre', 'mélancolie', 'subjectivité', 'sans fin', 'vaste']),
    ],
  },
  'GT-279': {
    texte: `Il y avait à Digne, en 1815, un évêque que la ville appelait M. Bienvenu, et que la contrée tout entière nommait Monseigneur Bienvenu. C'était un prêtre devenu évêque. C'était un vieillard de soixante-quinze ans qui occupait le siège de Digne depuis 1806.
Ce prêtre, homme simple et bon, vivait dans une petite maison avec une sœur âgée de soixante-six ans. Il possédait pour tout bien un jardin, qu'il cultivait lui-même, et une chambre au rez-de-chaussée, meublée de nattes et de meubles de bois.
Il avait pour toute servante une vieille femme du pays, qui s'appelait mademoiselle Baptistine, et qui avait atteint l'âge de cinquante-cinq ans.
Monseigneur Bienvenu était de ces hommes qui montrent à la fois la simplicité évangélique et la dignité épiscopale. Il ne se séparait point de son peuple, et il ne se croyait point au-dessus des autres.`,
    contexte: "Portrait de Monseigneur Myriel — figure morale exemplaire, misère et rédemption.",
    attendus: [
      att('Antithèse', "« Monseigneur Bienvenu »", "Antithèse entre familiarité (M. Bienvenu) et titre solennel : Hugo souligne la bienveillance du personnage.", ['antithèse', 'bienvenu', 'monseigneur', 'familiarité', 'titre', 'bienveillance']),
      att('Champ lexical', "« occupait le siège de Digne »", "Champ lexical religieux : le portrait ancre Myriel dans une fonction morale exemplaire.", ['champ lexical', 'prêtre', 'évêque', 'siège', 'religieux', 'morale']),
      att('Registre épique', "« la contrée tout entière nommait »", "Registre épique : la renommée du personnage l'élève au rang de figure exemplaire.", ['épique', 'contrée', 'nommait', 'renommée', 'exemplaire', 'figure']),
      att('Caractérisation', "« homme simple et bon »", "Caractérisation directe : Hugo pose d'emblée la vertu du personnage qui fondera la rédemption de Valjean.", ['caractérisation', 'simple', 'bon', 'vertu', 'myriel', 'rédemption']),
    ],
  },
  'GT-280': {
    texte: `SABINE
C'est sur moi qu'ils attendent la victoire ou le blâme ;
Je ne sais quel destin, en naissant dans ces murs,
M'a faite le partage entre Horace et Curiace.
Ni Rome, ni mon époux, ni mon frère, ni mon père,
Ne m'ont laissé le choix de mon trouble et de ma peine.
Horace est mon époux, Curiace est mon frère,
Et tous deux combattent pour la gloire de Rome.
Quoi ! pour être cruel, faut-il qu'on soit Romain ?
Et faut-il que l'honneur d'une femme innocente
Soit le prix du combat où Rome triomphe ou meurt ?
Je ne puis approuver ni condamner leur fureur ;
Je pleure, et je tremble, et je souhaite en secret
Que le vainqueur soit celui que mon cœur préfère.`,
    contexte: "Sabine entre Horace et Curiace — conflit familial et patriotique.",
    attendus: [
      att('Antithèse', "« victoire ou le blâme »", "Antithèse : Sabine oppose honneur et honte et dramatise son dilemme impossible.", ['antithèse', 'victoire', 'blâme', 'honneur', 'honte', 'dilemme']),
      att('Anaphore', "« Ni Rome, ni mon époux »", "Anaphore sur « ni » : la double loyauté structure le conflit tragique.", ['anaphore', 'ni', 'rome', 'époux', 'loyauté', 'conflit']),
      att('Registre tragique', "« Quoi ! pour être cruel, faut-il qu'on soit Romain ? »", "Registre tragique : la question rhétorique dénonce la violence du devoir politique.", ['tragique', 'cruel', 'romain', 'devoir', 'politique', 'violence']),
      att('Registre pathétique', "« Je pleure, et je tremble »", "Registre pathétique : Sabine exprime une impuissance qui suscite compassion.", ['pathétique', 'pleure', 'tremble', 'impuissance', 'compassion', 'sabine']),
    ],
  },
  'GT-281': {
    texte: `LA STATUE
Don Juan, je vous attends. Oui, oui, vous m'avez appelé : me voici.
DOM JUAN
Quoi ! c'est vous, monsieur ? Je vous croyais à Séville.
LA STATUE
J'ai suivi vos pas, et je viens vous demander ce que vous m'avez promis.
DOM JUAN
Je vous ai promis de vous donner ma main, et je la tiens prête à vous être donnée.
LA STATUE
Don Juan, il est temps que la justice de Dieu fasse éclater sa vengeance sur vous.
DOM JUAN
Ah ! ne me parlez plus ; la rencontrer, c'est obéir.
LA STATUE
Il faut que vous me suiviez.
DOM JUAN
Où ?
LA STATUE
Là où je vais ; ne me parlez plus ; la rencontrer, c'est obéir.`,
    contexte: "Chute de Dom Juan — punition du libertin, registre fantastique.",
    attendus: [
      att('Anaphore', "« Oui, oui, vous m'avez appelé »", "Anaphore : la Statue martèle l'inéluctable du châtiment et annonce la chute.", ['anaphore', 'oui', 'appelé', 'statue', 'châtiment', 'inéluctable']),
      att('Registre fantastique', "« Don Juan, je vous attends »", "Registre fantastique : la Statue parlante brise le réalisme et punit le libertin.", ['fantastique', 'statue', 'parlante', 'libertin', 'réalisme', 'punition']),
      att('Registre tragique', "« la rencontrer, c'est obéir »", "Registre tragique : la fatalité du devoir divin précipite la fin du héros.", ['tragique', 'rencontrer', 'obéir', 'fatalité', 'divin', 'chute']),
      att('Dialogue', "« Il faut que vous me suiviez »", "Dialogue : l'échange condensé dramatise la perte de liberté de Dom Juan.", ['dialogue', 'suiviez', 'dom juan', 'liberté', 'dramatise', 'échange']),
    ],
  },
  'GT-282': {
    texte: `HARPAGON
Sans mentir, voilà ce qui me chagrine le plus, de voir qu'on me dérobe, qu'on me pille ! C'est une chose qui me perce le cœur, et qui me fait perdre la tête. Enfin, c'est en vain que je mets de l'argent de côté ; on me vole tout, on me fait banqueroute ! Et je ne sais qui c'est qui me vole, ni comment on me vole, ni quand on me vole, ni où on me vole ; et cela me fait enrager.
LA FLÈCHE
Monsieur, si vous aviez un peu de patience, vous verriez que ce n'est peut-être pas ce que vous croyez.
HARPAGON
Comment, fripon ! tu veux encore me tromper ? Tu es complice de tous ceux qui me volent, et tu viens ici me faire des contes pour m'endormir.
LA FLÈCHE
Monsieur, je vous jure que je n'ai rien fait de mal.
HARPAGON
Tu n'as rien fait de mal ? Et l'argent que tu as dépensé, d'où te vient-il ?`,
    contexte: "Harpagon et La Flèche — obsession de l'argent, registre comique.",
    attendus: [
      att('Hyperbole', "« on me vole tout, on me fait banqueroute »", "Hyperbole : Harpagon exagère sa ruine et révèle une avarice comique.", ['hyperbole', 'vole', 'banqueroute', 'avarice', 'ruine', 'comique']),
      att('Anaphore', "« qu'on me dérobe, qu'on me pille »", "Anaphore sur « qu'on me » : la reprise concentre l'obsession possessive du personnage.", ['anaphore', 'dérobe', 'pille', 'obsession', 'possessive', 'reprise']),
      att('Énumération', "« qui c'est qui me vole, ni comment on me vole, ni quand on me vole, ni où on me vole »", "Énumération des questions : effet d'accélération qui traduit la paranoïa de l'avare.", ['énumération', 'comment', 'quand', 'où', 'paranoïa', 'avare']),
      att('Registre comique', "« voilà ce qui me chagrine le plus »", "Registre comique : la plainte disproportionnée suscite le rire du public.", ['comique', 'chagrine', 'plainte', 'rire', 'disproportion', 'harpagon']),
    ],
  },
  'GT-283': {
    texte: `Votre âme est un paysage choisi
Que vont charmant masques et bergamasques
Jouant du luth et dansant et quasi
Tristes sous leurs déguisements fantasques.

Tout en chantant sur le mode mineur
L'amour vainqueur et la vie opportune
Ils n'ont pas l'air de croire à leur bonheur
Et leur chanson se mêle au clair de lune,

Au calme clair de lune triste et beau,
Qui fait rêver les oiseaux dans les arbres
Et sangloter d'extase les jets d'eau,
Les grands jets d'eau sages parmi les marbres.`,
    contexte: "Poésie symboliste — musique, masques et mélancolie voilée.",
    attendus: [
      att('Métaphore', "« Votre âme est un paysage »", "Métaphore : l'âme comparée à un paysage traduit la vision symboliste du monde intérieur.", ['métaphore', 'âme', 'paysage', 'symbolisme', 'intérieur', 'vision']),
      att('Champ lexical', "« masques et bergamasques »", "Champ lexical du théâtre : les masques suggèrent l'artifice social et une tristesse dissimulée.", ['champ lexical', 'masques', 'bergamasques', 'théâtre', 'artifice', 'tristesse']),
      att('Registre lyrique', "« quasi tristes »", "Registre lyrique : la litote « quasi tristes » exprime une mélancolie délicate propre à Verlaine.", ['lyrique', 'quasi', 'tristes', 'litote', 'mélancolie', 'verlaine']),
      att('Musicalité', "« leur chanson se mêle au clair de lune »", "Musicalité : la fusion chant/lune incarne l'esthétique verlainienne de la suggestion.", ['musicalité', 'chanson', 'clair de lune', 'fusion', 'suggestion', 'esthétique']),
    ],
  },
  'GT-284': {
    texte: `Sois sage, ô ma Douleur, tiens-toi plus rassemblée.
Tu réclamais le Soir ; il descend ; le voici :
Une atmosphère obscure enveloppe la cité,
Aux uns portant la paix, aux autres le souci.

Pendant que le commun des mortels que la fatigue
Vaincra de sommeil lourd à la tombée des feux,
Comme un peintre charmant sur la toile qui lieux
De noirs, de jaunes et de roses mélangés,

Le ciel qui est derrière l'horizon se découvre
Pour offrir, en spectacle, aux yeux qui se lèvent
Des millions de lampes et de joyaux en feu.`,
    contexte: "Poésie du spleen — apaisement nocturne et méditation.",
    attendus: [
      att('Apostrophe', "« ô ma Douleur »", "Apostrophe : Baudelaire personnifie la souffrance et entame un dialogue intérieur apaisé.", ['apostrophe', 'douleur', 'spleen', 'dialogue', 'personnifie', 'intérieur']),
      att('Personnification', "« le Soir ; il descend »", "Personnification : le soir devient un personnage qui répond au désir du poète.", ['personnification', 'soir', 'descend', 'nuit', 'poète', 'répond']),
      att('Comparaison', "« Comme un peintre charmant »", "Comparaison : le ciel comparé à un peintre sublime la scène nocturne.", ['comparaison', 'peintre', 'ciel', 'nocturne', 'toile', 'sublime']),
      att('Registre lyrique', "« Aux uns portant la paix, aux autres le souci »", "Registre lyrique : la nuit partagée exprime une méditation mélancolique entre recueillement et spleen.", ['lyrique', 'paix', 'souci', 'nuit', 'recueillement', 'méditation']),
    ],
  },
  'GT-285': {
    texte: `Je me promenais seul, rêveur et sans dessein,
Par un sentier obscur, dans un vallon tranquille,
Où le feuillage incliné versait un frais ombrage
Sur la rive mouvante et sur le flot docile.

Là, tout était silence, et la nature entière
Semblait écouter la voix du souvenir ;
Et mon âme, à l'aspect de ce pays paisible,
S'ouvrait à la douceur d'un vague repentir.

Je me promenais seul, rêveur et sans dessein,
Quand, sur le bord du val, j'aperçus une tombe ;
Et je crus entendre une plainte de la terre
Qui me disait : « Ici repose une âme aimée. »`,
    contexte: "Lyrisme romantique — méditation intime et paysage bucolique.",
    attendus: [
      att('Focalisation interne', "« Je me promenais seul, rêveur »", "Focalisation interne : le je poétique guide la promenade et la méditation.", ['focalisation', 'interne', 'promenais', 'rêveur', 'méditation', 'je']),
      att('Champ lexical', "« dans un vallon tranquille »", "Champ lexical bucolique : le paysage naturel enveloppe le poète d'une quiétude mélancolique.", ['champ lexical', 'vallon', 'rive', 'feuillage', 'bucolique', 'nature']),
      att('Personnification', "« Semblait écouter la voix du souvenir »", "Personnification : la nature écoute le souvenir — harmonie romantique entre paysage et âme.", ['personnification', 'nature', 'écouter', 'souvenir', 'romantisme', 'harmonie']),
      att('Registre lyrique', "« rêveur et sans dessein »", "Registre lyrique : la flânerie exprime une subjectivité romantique ouverte au souvenir.", ['lyrique', 'rêveur', 'dessein', 'flânerie', 'romantisme', 'souvenir']),
    ],
  },
  'GT-286': {
    texte: `BÉRÉNICE
Innocent époux de l'innocente Arsinoé,
Inhumain Titus, hélas ! et faut-il que je vive ?
Qu'ai-je donc fait, grands dieux, pour n'être plus aimée ?
Titus règne, il est libre, il peut m'aimer encor ;
Et pourtant il s'en va. Quel obstacle s'oppose ?
Quel nouveau dessein naît dans son âme ? Quel autre
Lui conseille de me quitter et de m'oublier ?
Hélas ! il m'aimait hier ! Hélas ! je le voyais
Tout plein d'un trouble doux qui semblait me complaire.
Il faut que je l'oublie, ou que je meure, Titus.
Adieu, Seigneur. Puisqu'il le faut, adieu pour jamais.
Je vais, pour obéir à votre auguste loi,
Quitter ces lieux, Titus, et m'éloigner de vous.`,
    contexte: "Monologue de Bérénice — renoncement amoureux, registre lyrique et pathétique.",
    attendus: [
      att('Antithèse', "« Innocent époux de l'innocente Arsinoé, / Inhumain Titus »", "Antithèse : Bérénice oppose innocence et cruauté — condense le déchirement amoureux.", ['antithèse', 'innocent', 'inhumain', 'titus', 'déchirement', 'amour']),
      att('Anaphore', "« Hélas ! il m'aimait hier ! Hélas ! »", "Anaphore sur « hélas » : la reprise intensifie le pathos du renoncement.", ['anaphore', 'hélas', 'pathos', 'renoncement', 'reprise', 'intensifie']),
      att('Apostrophe', "« Adieu, Seigneur »", "Apostrophe : Bérénice interpelle Titus et dramatise l'adieu définitif.", ['apostrophe', 'adieu', 'seigneur', 'titus', 'définitif', 'interpelle']),
      att('Registre pathétique', "« Il faut que je l'oublie, ou que je meure »", "Registre pathétique : l'alternative morte ou oubli suscite compassion devant l'amour contrarié.", ['pathétique', 'oublie', 'meure', 'compassion', 'amour', 'contrarié']),
    ],
  },
  'GT-287': {
    texte: `HARPAGON
Allons, morbleu ! qu'on serve, et que l'on mange à petit bruit.
VALÈRE
Monsieur, la soupe est servie.
HARPAGON
Eh bien, qu'on serve, qu'on serve ; et vous, ma fille, prenez place. Et toi, mon fils, assieds-toi là. Mangez, mangez, et ne parlez point ; car, quand on parle, on ne mange pas, et quand on mange, on ne parle pas.
ÉLISE
Monsieur, je n'ai pas faim.
HARPAGON
Pas faim ! morbleu ! il faut manger. La santé se conserve par la nourriture, et l'on ne doit point négliger de manger.
HARPAGON
Holà, quelqu'un ! où est-il, ce coquin de maître d'hôtel ? Est-ce ainsi qu'on me sert ? Je voudrais bien savoir ce qu'on fait là-dedans, et ce que signifie tout ce bruit.`,
    contexte: "Scène du dîner — comique de situation et obsession de l'avare.",
    attendus: [
      att('Registre comique', "« quand on parle, on ne mange pas »", "Registre comique : la maxime absurde de Harpagon ridiculise son autorité domestique.", ['comique', 'parle', 'mange', 'absurde', 'autorité', 'ridicule']),
      att('Imperatif', "« Mangez, mangez, et ne parlez point »", "Impératifs répétés : Harpagon impose sa loi et crée le comique de situation.", ['impératif', 'mangez', 'parlez', 'loi', 'situation', 'harpagon']),
      att('Interjection', "« morbleu ! »", "Interjection : le juron révèle le tempérament violent et comique de l'avare.", ['interjection', 'morbleu', 'juron', 'tempérament', 'violent', 'avare']),
      att('Dialogue', "« Pas faim ! morbleu ! il faut manger »", "Dialogue : l'échange père-fille dramatise l'obsession de la nourriture et de l'économie.", ['dialogue', 'faim', 'manger', 'père', 'obsession', 'économie']),
    ],
  },
  'GT-288': {
    texte: `Voici des fruits, des fleurs, des feuilles et des branches,
Et puis voici mon cœur qui ne bat que pour vous.
Ne le déchirez pas avec vos deux mains blanches,
Et qu'à vos yeux si beaux ce simple don soit doux.

J'arrive tout couvert encore de rosée
Que le vent du matin vient glacer à mon front.
Soyez donc la bonté même et la tendresse même,
Gentille passante dont la blanche main cueillit
Cette modeste offrande d'un cœur qui ne bat que pour vous.

Écoutez la chanson douce qui n'est chantée
Que pour vous. Elle est discrète, en minor, et plaintive,
Et son accord mobile chante la mélancolie.`,
    contexte: "Poésie impressionniste — musicalité et sensibilité verlainienne.",
    attendus: [
      att('Énumération', "« fruits, des fleurs, des feuilles et des branches »", "Énumération : la liste offerte structure le don poétique et crée un effet de plénitude bucolique.", ['énumération', 'fruits', 'fleurs', 'feuilles', 'branches', 'don']),
      att('Métaphore', "« mon cœur qui ne bat que pour vous »", "Métaphore : le cœur offert condense la déclaration amoureuse en image simple.", ['métaphore', 'cœur', 'bat', 'amour', 'offrande', 'image']),
      att('Musicalité', "« en minor, et plaintive »", "Musicalité : le vocabulaire musical incarne l'esthétique impressionniste de Verlaine.", ['musicalité', 'minor', 'plaintive', 'impressionniste', 'verlaine', 'chanson']),
      att('Registre lyrique', "« Soyez donc la bonté même et la tendresse même »", "Registre lyrique : l'apostrophe à la passante exprime une sensibilité délicate et suppliante.", ['lyrique', 'bonté', 'tendresse', 'apostrophe', 'sensibilité', 'suppliante']),
    ],
  },
  'GT-289': {
    texte: `Le quatre septembre. C'était peut-être un jour comme aujourd'hui.
Je regardais l'eau couler. Elle coulait doucement,
Comme elle coule toujours, sans bruit et sans hâte.
Et je pensais à vous, Léopoldine, ma fille,
À vous qui n'êtes plus, à vous que j'ai perdue.

La barque passait ; l'eau était calme et profonde ;
Le ciel était sans nuage ; et tout semblait dire :
« Il n'y a rien de changé. » Et pourtant tout est changé.
Car vous n'êtes plus là, et le monde continue,
Et la Seine coule encore, indifférente et belle.

Ô vous que j'ai tant aimée, où êtes-vous, mon enfant ?
Est-ce que vous m'entendez ? Est-ce que vous me voyez ?
La vie est une ombre, et le deuil est une nuit
Qui ne finit jamais pour le père qui pleure.`,
    contexte: "Poésie du deuil — mémoire de Léopoldine, noyade à Villequier.",
    attendus: [
      att('Registre pathétique', "« vous que j'ai perdue »", "Registre pathétique : l'aveu du deuil paternel suscite une compassion profonde.", ['pathétique', 'perdue', 'deuil', 'père', 'compassion', 'aveu']),
      att('Antithèse', "« Il n'y a rien de changé… tout est changé »", "Antithèse : Hugo oppose continuité du monde et bouleversement intérieur du deuil.", ['antithèse', 'changé', 'monde', 'deuil', 'continuité', 'bouleversement']),
      att('Apostrophe', "« Ô vous que j'ai tant aimée »", "Apostrophe : le poète interpelle sa fille morte — lyrisme du deuil et de la mémoire.", ['apostrophe', 'aimée', 'fille', 'morte', 'mémoire', 'lyrisme']),
      att('Métaphore', "« La vie est une ombre »", "Métaphore : l'ombre condense la vanité de l'existence face à la mort.", ['métaphore', 'vie', 'ombre', 'mort', 'vanité', 'existence']),
    ],
  },
  'GT-291': {
    texte: `En 1815, M. Charles-François-Bienvenu Myriel était évêque de Digne.
C'était un vieillard de environ soixante-quinze ans ; il occupait le siège de Digne depuis 1806.
Quoique ce détail ne touche en aucune manière au fond même de ce que nous avons à raconter, il n'est peut-être pas inutile, ne fût-ce que pour être exact en tout, d'indiquer ici les bruits et les propos qui avaient couru sur son compte au moment où il était arrivé dans le diocèse.
Il était de petite taille, chauve, grisonnant, avec des traits réguliers et un air de grande bonté, mêlé néanmoins de quelque chose d'imposant et de sévère.
Il avait été, au commencement de la Révolution, curé d'E——, et, rempli d'enthousiasme pour les idées nouvelles, il avait été élu député aux États généraux.`,
    contexte: "Incipit des Misérables — présentation de l'évêque et roman engagé.",
    attendus: [
      att('Incipit', "« En 1815, M. Charles-François-Bienvenu Myriel était évêque de Digne »", "Incipit : Hugo ancre le roman dans l'histoire et pose le personnage fondateur de la rédemption.", ['incipit', '1815', 'myriel', 'évêque', 'histoire', 'rédemption']),
      att('Caractérisation', "« un air de grande bonté, mêlé néanmoins de quelque chose d'imposant »", "Caractérisation : le portrait mêle douceur et autorité — figure morale exemplaire.", ['caractérisation', 'bonté', 'imposant', 'portrait', 'morale', 'autorité']),
      att('Registre réaliste', "« Il était de petite taille, chauve, grisonnant »", "Registre réaliste : détails physiques concrets ancrent le personnage dans le vraisemblable.", ['réaliste', 'taille', 'chauve', 'détails', 'vraisemblable', 'physique']),
      att('Méta-narration', "« il n'est peut-être pas inutile, ne fût-ce que pour être exact en tout, d'indiquer ici les bruits »", "Méta-narration : le narrateur justifie son choix d'information — pacte de lecture du roman.", ['méta-narration', 'inutile', 'bruits', 'narrateur', 'pacte', 'lecture']),
    ],
  },
  'GT-292': {
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
L'empire a des devoirs que l'amour ne peut rompre.
ANTIOCHUS
Je sais qu'elle vous aime, et que vous l'aimez encore ;
Mais laissez-moi du moins mourir près d'elle, Seigneur.`,
    contexte: "Titus et Antiochus — conflit entre amour et devoir politique.",
    attendus: [
      att('Antithèse', "« l'empire a des devoirs que l'amour ne peut rompre »", "Antithèse entre amour et devoir : Titus pose la loi politique qui structure la tragédie.", ['antithèse', 'empire', 'devoirs', 'amour', 'politique', 'tragédie']),
      att('Registre tragique', "« il faut que je vous dise en mourant »", "Registre tragique : Antiochus annonce sa mort — fatalité du renoncement amoureux.", ['tragique', 'mourant', 'antiochus', 'fatalité', 'renoncement', 'mort']),
      att('Dialogue', "« Antiochus, il faut que nous nous séparions »", "Dialogue : Titus tranche le conflit — scène de rupture entre amitié et politique.", ['dialogue', 'séparions', 'titus', 'rupture', 'amitié', 'politique']),
      att('Anaphore', "« il faut que je règne »", "Anaphore sur « il faut » : martèle la nécessité du devoir impérial.", ['anaphore', 'il faut', 'règne', 'devoir', 'impérial', 'nécessité']),
    ],
  },
  'GT-293': {
    texte: `Le ciel est, par-dessus le toit,
Si bleu, si calme, si pur,
L'arbre qui balance sa cime
Au souffle du vent de l'heure,
Balance aussi mon cœur.

La cloche tinte, tinte, tinte, tinte, tinte, tinte,
Avec sa voix d'airain qui chante,
Chante, chante, sans fin,
Et la vie est là, monotone,
Comme un long regret.

Ô toi, ma ville natale,
Paris, où j'ai tant souffert,
Où j'ai tant aimé, tant pleuré,
Ton ciel gris me semble encore
Un miroir de mon cœur.`,
    contexte: "Poésie mélancolique et musicale — croquis urbain parisien.",
    attendus: [
      att('Musicalité', "« La cloche tinte, tinte, tinte »", "Musicalité : la répétition imite le son des cloches et structure le rythme du poème.", ['musicalité', 'cloche', 'tinte', 'rythme', 'répétition', 'son']),
      att('Comparaison', "« Comme un long regret »", "Comparaison : la vie comparée au regret traduit la mélancolie urbaine.", ['comparaison', 'regret', 'vie', 'mélancolie', 'urbaine', 'monotone']),
      att('Apostrophe', "« Ô toi, ma ville natale, / Paris »", "Apostrophe : Verlaine interpelle Paris et lie paysage et mémoire personnelle.", ['apostrophe', 'paris', 'ville', 'mémoire', 'personnelle', 'interpelle']),
      att('Registre lyrique', "« Balance aussi mon cœur »", "Registre lyrique : fusion du paysage et du moi — subjectivité impressionniste.", ['lyrique', 'balance', 'cœur', 'paysage', 'impressionniste', 'subjectivité']),
    ],
  },
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
      att("Antithèse", "« que le monde est grand à la clarté des lamp »", "Antithèse : l'opposition entre immensité rêvée et rétrécissement du souvenir structure la méditation sur le voyage.", ["antithèse","grand","petit","monde","souvenir","voyage"]),
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
      att("Personnification", "« Là le lac immobile et serein s'étend C »", "Personnification/comparaison : le lac devient miroir vivant — fusion du paysage et de l'âme.", ["personnification","lac","miroir","azur","paysage","âme"]),
      att("Champ lexical", "« e du vieux chêne, Au coucher du soleil, tristement je m'assieds ; »", "Champ lexical de la tristesse : l'ensemble lexical colore le paysage d'une mélancolie romantique.", ["champ lexical","tristesse","deuil","détresse","mélancolie","romantisme"]),
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
      att("Antithèse", "« NARCISSE Seigneur, elle a paru vous aimer. »", "Antithèse entre apparence et réalité : le tyran oscille entre illusion et lucidité.", ["antithèse","aimer","hait","apparence","réalité","illusion"]),
      att("Dialogue", "« Seigneur, elle a paru vous aimer »", "Dialogue : Narcisse tempère et révèle le trouble de Néron — scène de confidence politique.", ["dialogue","seigneur","narcisse","confidence","politique","trouble"]),
      att("Anaphore", "« Et quand je l'ai vue à mes genoux, Quand, les yeux dans les yeux, ell »", "Anaphore sur « Quand » : accumulation des souvenirs qui martèle la déception amoureuse.", ["anaphore","quand","souvenirs","déception","accumulation","amour"]),
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
      att("Anaphore", "« Il pleure dans mon cœur Comme »", "Anaphore sur « Il pleure » : insistance sur le spleen irrationnel.", ["anaphore","pleure","raison","spleen","insistance","irrationnel"]),
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
      att("Anaphore", "« JUNIE De ce que je l'ai vu, de ce qu'il m'a dit hier, De ce qu'il m'a juré, »", "Anaphore sur « De ce que » : accumulation qui traduit la terreur de Junie.", ["anaphore","ce qu","accumulation","terreur","junie","insistance"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Anaphore", "« Quelle est cette langueur Qui pénètre mon cœur ? »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
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
      att("Apostrophe", "« Je suis belle, ô mortels ! »", "Apostrophe : la Beauté s'adresse aux mortels et affirme sa puissance fascinante.", ["apostrophe","mortels","belle","puissance","beauté","allégorie"]),
      att("Antithèse", "« Et jamais je ne pleure et jamais je ne ris »", "Antithèse : la Beauté refuse toute émotion — froideur idéale et impersonnelle.", ["antithèse","pleure","ris","froideur","impersonnelle","idéal"]),
      att("Métaphore", "« comme un rêve de pierre »", "Métaphore : la Beauté est minérale et onirique — modernité baudelairienne.", ["métaphore","rêve","pierre","minérale","modernité","baudelaire"]),
      att("Symbolisme", "« Mes yeux, mes larges yeux aux clartés éternelles »", "Symbolisme : les yeux-miroirs condensent la fascination et l'idéal artistique.", ["symbolisme","yeux","miroirs","fascination","idéal","art"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Anaphore", "« Quelle est cette langueur Qui pénètre mon cœur ? »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« aigné dans le Poème De la Mer, infusé d'astres, et lactescent, Dévorant les azurs verts ; »", "Le champ lexical cosmique élargit la perception du monde.", ["champ lexical","mer","astres","azurs","vision","poésie"]),
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
      att("Morale", "« it, et dit : « Mon bon Monsieur, Apprenez que tout flatteur Vit aux dépens »", "La morale explicite la leçon sociale de la fable.", ["morale","flatteur","écoute","leçon","fable","classique"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« aigné dans le Poème De la Mer, infusé d'astres, et lactescent, Dévorant les azurs verts ; »", "Le champ lexical cosmique élargit la perception du monde.", ["champ lexical","mer","astres","azurs","vision","poésie"]),
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
      att("Morale", "« it, et dit : « Mon bon Monsieur, Apprenez que tout flatteur Vit aux dépens »", "La morale explicite la leçon sociale de la fable.", ["morale","flatteur","écoute","leçon","fable","classique"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Antithèse", "« bien que mortelle, Misérable vengeur d'une juste querelle, Et malheureux ob »", "L'antithèse met en relief la contradiction morale du héros.", ["antithèse","juste","injuste","querelle","rigueur","conflit"]),
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
      att("Anaphore", "« Quelle est cette langueur Qui pénètre mon cœur ? »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
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
      att("Anaphore", "« Quelle est cette langueur Qui pénètre mon cœur ? »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Antithèse", "« ALCESTE Je veux qu'on soit sincère, et qu'en homme d'ho »", "L'antithèse oppose idéal moral et hypocrisie sociale.", ["antithèse","sincère","feintes","misanthrope","satire","société"]),
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
      att("Anaphore", "« Quelle est cette langueur Qui pénètre mon cœur ? »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
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
      att("Anaphore", "« Quelle est cette langueur Qui pénètre mon cœur ? »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
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
      att("Apostrophe", "« Andromaque, je pense à vous ! »", "Apostrophe : le poète interpelle la héroïne antique — mémoire et deuil universel.", ["apostrophe","andromaque","pense","mémoire","deuil","héroïne"]),
      att("Métaphore", "« Ce Simoïs menteur »", "Métaphore : le fleuve parisien devient Simoïs — rapprochement mythologique et nostalgique.", ["métaphore","simoïs","menteur","mythologie","nostalgie","fleuve"]),
      att("Registre élégiaque", "« Le vieux Paris n'est plus »", "Registre élégiaque : constat de disparition — spleen urbain et temps qui passe.", ["élégiaque","paris","disparition","spleen","temps","urbain"]),
      att("Symbolisme", "« Voilà le cygne, vieux, rappelant l'homme »", "Symbolisme : le cygne solitaire figure l'exil et la déchéance du poète.", ["symbolisme","cygne","vieux","exil","poète","déchéance"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« aigné dans le Poème De la Mer, infusé d'astres, et lactescent, Dévorant les azurs verts ; »", "Le champ lexical cosmique élargit la perception du monde.", ["champ lexical","mer","astres","azurs","vision","poésie"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Morale", "« it, et dit : « Mon bon Monsieur, Apprenez que tout flatteur Vit aux dépens »", "La morale explicite la leçon sociale de la fable.", ["morale","flatteur","écoute","leçon","fable","classique"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Antithèse", "« bien que mortelle, Misérable vengeur d'une juste querelle, Et malheureux ob »", "L'antithèse met en relief la contradiction morale du héros.", ["antithèse","juste","injuste","querelle","rigueur","conflit"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« aigné dans le Poème De la Mer, infusé d'astres, et lactescent, Dévorant les azurs verts ; »", "Le champ lexical cosmique élargit la perception du monde.", ["champ lexical","mer","astres","azurs","vision","poésie"]),
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
      att("Champ lexical", "« aigné dans le Poème De la Mer, infusé d'astres, et lactescent, Dévorant les azurs verts ; »", "Le champ lexical cosmique élargit la perception du monde.", ["champ lexical","mer","astres","azurs","vision","poésie"]),
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
      att("Morale", "« it, et dit : « Mon bon Monsieur, Apprenez que tout flatteur Vit aux dépens »", "La morale explicite la leçon sociale de la fable.", ["morale","flatteur","écoute","leçon","fable","classique"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Antithèse", "« bien que mortelle, Misérable vengeur d'une juste querelle, Et malheureux ob »", "L'antithèse met en relief la contradiction morale du héros.", ["antithèse","juste","injuste","querelle","rigueur","conflit"]),
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
      att("Antithèse", "« ALCESTE Je veux qu'on soit sincère, et qu'en homme d'ho »", "L'antithèse oppose idéal moral et hypocrisie sociale.", ["antithèse","sincère","feintes","misanthrope","satire","société"]),
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
      att("Antithèse", "« ALCESTE Je veux qu'on soit sincère, et qu'en homme d'ho »", "L'antithèse oppose idéal moral et hypocrisie sociale.", ["antithèse","sincère","feintes","misanthrope","satire","société"]),
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
      att("Anaphore", "« Quelle est cette langueur Qui pénètre mon cœur ? »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
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
      att("Anaphore", "« Quelle est cette langueur Qui pénètre mon cœur ? »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« aigné dans le Poème De la Mer, infusé d'astres, et lactescent, Dévorant les azurs verts ; »", "Le champ lexical cosmique élargit la perception du monde.", ["champ lexical","mer","astres","azurs","vision","poésie"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Antithèse", "« bien que mortelle, Misérable vengeur d'une juste querelle, Et malheureux ob »", "L'antithèse met en relief la contradiction morale du héros.", ["antithèse","juste","injuste","querelle","rigueur","conflit"]),
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
      att("Antithèse", "« bien que mortelle, Misérable vengeur d'une juste querelle, Et malheureux ob »", "L'antithèse met en relief la contradiction morale du héros.", ["antithèse","juste","injuste","querelle","rigueur","conflit"]),
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
      att("Antithèse", "« ALCESTE Je veux qu'on soit sincère, et qu'en homme d'ho »", "L'antithèse oppose idéal moral et hypocrisie sociale.", ["antithèse","sincère","feintes","misanthrope","satire","société"]),
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
      att("Anaphore", "« Quelle est cette langueur Qui pénètre mon cœur ? »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
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
      att("Anaphore", "« Quelle est cette langueur Qui pénètre mon cœur ? »", "L'anaphore insiste sur la douleur sans cause.", ["anaphore","pleure","raison","langueur","musicalité","verlaine"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
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
      att("Champ lexical", "« On parlait de morale, de mérite, de religion ; »", "Le champ lexical social dévoile les valeurs affichées de la bourgeoisie.", ["champ lexical","morale","religion","bourgeoisie","société","réalisme"]),
      att("Antithèse", "« paraître juste pour réussir »", "L'antithèse oppose vertu affichée et stratégie réelle.", ["antithèse","paraître","juste","réussir","hypocrisie","roman"]),
      att("Focalisation interne", "« un regard ardent »", "Le regard du personnage annonce un parcours d'ascension.", ["focalisation","regard","ambition","personnage","ascension","psychologique"]),
    ],
  },
  ...REWRITES_PART_A,
  ...REWRITES_PART_B,
  ...REWRITES_PART_C,
  ...REWRITES_PART_D,
  ...REWRITES_EXTRA1921,
};
