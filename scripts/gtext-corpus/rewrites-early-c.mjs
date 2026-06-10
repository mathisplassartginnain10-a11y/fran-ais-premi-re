import { att } from '../gtext-enrichment-lib.mjs';

export const REWRITES_EARLY_C = {
  'GT-101': {
    texte: `Comme on voit sur la branche au mois de mai
La rose en sa beauté, tenant lieu de son teint,
La rose, la jeune rose et la rose nouvelle,
Au matin de ses jours au matin de sa fleur,
A peine ouverte au vent de ses couleurs mouvelle,
Qu'une main en jouant au calice ou la cueille,
Ou alors qu'elle est pleine à son bord et à son bord,
Laissant sa parure aux vents, au vent, à la pluie,
La parfum de sa fleur, et pareille à toi-même,
Tu, belle, et si fresche encore qu'il n'est pas encor
Matin, va, cours et vois, et crains en cette vie
Comme de ta beauté la forme se consomme,
Si tu ne mets bientôt à profit ton printemps !`,
    contexte: "Sonnet de la Pléiade — la rose éphémère figure la jeunesse de la femme aimée ; le poète exhorte à saisir le temps présent.",
    attendus: [
      att('Comparaison', '« Comme on voit sur la branche »', 'La comparaison initiale établit le parallèle entre la rose naissante et la beauté de la destinataire : Ronsard rend visible la métaphore du temps qui passe.', ["comparaison","comme","rose","branche","beauté","temps"]),
      att('Métaphore', '« tenant lieu de son teint »', 'La rose « tient lieu de teint » : le végétal remplace le corps humain et condense l\'idée de beauté naturelle menacée par la mort.', ["métaphore","teint","rose","corps","nature","beauté"]),
      att('Anaphore', '« Au matin de ses jours au matin de sa fleur »', 'L\'anaphore sur « au matin » martèle l\'idée de fraîcheur naissante et prépare le retournement moral du tercet final.', ["anaphore","matin","répétition","jeunesse","fleur","rythme"]),
      att('Registre lyrique', '« Si tu ne mets bientôt à profit ton printemps »', 'L\'injonction finale relève du registre lyrique amoureux : le poète convertit la contemplation en appel à la jouissance immédiate (carpe diem).', ["lyrique","printemps","injonction","carpe diem","amour","pléiade"])
    ],
  },
  'GT-102': {
    texte: `France, mère des arts, des armes et des lois,
Tu m'as nourri de ton lait et de ta mamelle ;
France, mère des arts, des armes et des lois,
Tu m'as nourri de ton lait et de ta mamelle,
Tu m'as généré en ton ventre, et je te vois
Aujourd'hui sans force et sans vigueur mortelle.
Tu n'es plus cette France, à la voix redoutable,
Qui, d'une oreille à l'autre, ébranlait le Latium,
Et faisait trembler Rome et ses redoutables voisins.
Bénis tes fils, bénis tes filles, bénis tes filles,
Qui parlent hautement en langue francoise,
Et qui, par leurs accents, font naître des merveilles.`,
    contexte: "Ode à la patrie exilée — Du Bellay célèbre la langue française et déplore la décadence politique de la France qu\'il quitte pour Rome.",
    attendus: [
      att('Apostrophe', '« France, mère des arts »', 'L\'apostrophe à la patrie personnifiée installe une adresse lyrique et patriotique : le « tu » crée une complicité intime entre le poète et la nation.', ["apostrophe","france","mère","patrie","personnification","lyrique"]),
      att('Métaphore', '« mère des arts, des armes et des lois »', 'La métaphore filiale (« mère », « lait », « mamelle ») présente la France comme nourricière de la civilisation : humanisme et fierté nationale se confondent.', ["métaphore","mère","arts","lois","nourricier","humanisme"]),
      att('Anaphore', '« France, mère des arts »', 'La double reprise de l\'incipit (anaphore) grave un refrain obsédant qui exprime la nostalgie du poète exilé.', ["anaphore","france","répétition","exil","nostalgie","regrets"]),
      att('Antithèse', '« sans force et sans vigueur mortelle »', 'L\'antithèse entre la France glorieuse du passé (« voix redoutable ») et la France affaiblie du présent structure toute l\'ode.', ["antithèse","force","décadence","passé","présent","contraste"]),
      att('Champ lexical', '« langue francoise »', 'Le champ lexical de la langue et de la parole (« voix », « accents », « francoise ») affirme la mission civilisatrice de la langue maternelle.', ["champ lexical","langue","française","parole","civilisation","fierté"])
    ],
  },
  'GT-103': {
    texte: `RODRIGUE
Ô rage ! Ô désespoir ! Ô vieux père avare,
Inhumain, barbare, importune, cruelle,
Me laisses-tu en vie sans force ni courage,
Au milieu de mes ennemis pour les braver ?
Demeurerai-je parmi eux les yeux en pleurant ?
Dire que mon père est mort, qu'il ne m'a pas vengé,
Braver les insultes, courir ouvertement
Contre celui dont un coup nous a déshonorés ?
Et par quels yeux verrai-je couler mon sang ?
Non, non, je ne veux plus souffrir ni me taire ;
Mon père est mort, et je n'ai pu le venger ;
Mon amour m'offense, et je dois le venger.
Je sais bien qu'un père est une tête sacrée,
Qu'entre un fils et son père on ne doit rien partager.`,
    contexte: "Monologue de Rodrigue — le héros cornelien choisit l\'honneur familial contre l\'amour de Chimène ; conflit tragique intérieur.",
    attendus: [
      att('Anaphore', '« Ô rage ! Ô désespoir ! »', 'L\'anaphore des exclamations traduit l\'emportement du héros : la répétition dramatise le déchirement entre devoir et passion.', ["anaphore","rage","désespoir","exclamation","émotion","tragique"]),
      att('Question rhétorique', '« Demeurerai-je parmi eux les yeux en pleurant ? »', 'Les questions rhétoriques enchaînées simulent le débat intérieur : Rodrigue se persuade lui-même de l\'impossibilité de la lâcheté.', ["question","rhétorique","lâcheté","honneur","débat","intérieur"]),
      att('Antithèse', '« Mon amour m\'offense, et je dois le venger »', 'L\'antithèse amour / vengeance condense le conflit tragique central du Cid : deux devoirs incompatibles s\'affrontent dans la conscience du héros.', ["antithèse","amour","vengeance","conflit","honneur","chimène"]),
      att('Registre tragique', '« Mon père est mort, et je n\'ai pu le venger »', 'Le registre tragique s\'installe dans l\'aveu de l\'impuissance passée : la fatalité familiale pousse Rodrigue vers l\'action.', ["tragique","père","mort","vengeance","fatalité","héros"])
    ],
  },
  'GT-104': {
    texte: `AGAMEMNON
C'est fait. A tous les dieux je sacrifie ma fille.
Quoi ! je ne saurais voir Agamemnon en père,
Ni toute la tendresse d'un roi dans mon bras !
Il ne reste plus rien : tout le camp m'observet ;
Tout ce que la Grèce a de héros de race divine
Attend que je consente au supplice d'Iphigénie.
Qu'ai-je donc fait aux dieux, qu'ai-je fait à la Grèce ?
Qu'ai-je fait à moi-même, et que puis-je faire encore ?
Un roi doit-il céder au peuple qui le craint ?
Un père doit-il tout immoler à sa tendresse ?
La Grèce m'oblige, et je ne puis la braver ;
Mais ma fille, hélas ! ma fille, ma chère fille !`,
    contexte: "Agamemnon face au sacrifice d\'Iphigénie — la fatalité divine et politique écrase la tendresse paternelle.",
    attendus: [
      att('Anaphore', '« Qu\'ai-je donc fait aux dieux, qu\'ai-je fait à la Grèce ? »', 'L\'anaphore sur « qu\'ai-je fait » exprime le désespoir d\'un chef pris entre devoir public et amour filial.', ["anaphore","fait","dieu","grèce","désespoir","répétition"]),
      att('Antithèse', '« voir Agamemnon en père »', 'L\'antithèse entre le roi et le père structure le monologue : deux identités s\'excluent dans la tragédie mythologique.', ["antithèse","père","roi","sacrifice","devoir","conflit"]),
      att('Apostrophe', '« ma fille, hélas ! ma fille, ma chère fille ! »', 'L\'apostrophe finale brise la rhétorique politique : la pitié pathétique éclate au moment de la décision.', ["apostrophe","fille","hélas","pathétique","tendresse","sacrifice"]),
      att('Registre tragique', '« je sacrifie ma fille »', 'L\'aveu « je sacrifie ma fille » installe la fatalité tragique : le héros accepte l\'horreur imposée par les dieux et la guerre.', ["tragique","sacrifice","iphigénie","fatalité","guerre","impuissance"])
    ],
  },
  'GT-105': {
    texte: `Oh ! chants d'autrefois, oh ! douces voix d'autrefois,
Revenez sur mon âme, et chantez comme autrefois !
Oh ! chants d'autrefois, oh ! douces voix d'autrefois,
Comme un chant de matin qui monte dans les bois,
Comme un souffle d'été qui passe dans les fleurs,
Comme un souffle d'été qui passe dans les fleurs !
Revenez, revenez, chants de mon enfance,
Chants de ma jeunesse, chants de mon espérance !
Oh ! chants d'autrefois, oh ! douces voix d'autrefois,
Revenez sur mon âme, et chantez comme autrefois !`,
    contexte: "Poème de nostalgie romantique — Hugo invoque le passé perdu par une série de comparaisons naturelles et d\'appels lyriques.",
    attendus: [
      att('Anaphore', '« Oh ! chants d\'autrefois »', 'L\'anaphore sur « Oh ! chants d\'autrefois » crée un refrain incantatoire qui traduit l\'obsession du passé.', ["anaphore","chants","autrefois","répétition","nostalgie","incantation"]),
      att('Comparaison', '« Comme un souffle d\'été qui passe dans les fleurs »', 'La comparaison avec le souffle estival rend la fugacité des souvenirs sensible et mélancolique.', ["comparaison","comme","souffle","été","fleurs","fugacité"]),
      att('Apostrophe', '« Revenez sur mon âme »', 'L\'apostrophe aux « chants » personnifiés implore un retour impossible : le lyrisme romantique transforme la mémoire en présence désirée.', ["apostrophe","revenez","âme","souvenir","lyrique","invocation"]),
      att('Registre lyrique', '« chants de mon espérance »', 'Le registre lyrique domine : subjectivité du « je » poétique, émotion du deuil du temps et appel au bonheur passé.', ["lyrique","espérance","jeunesse","enfance","émotion","romantisme"])
    ],
  },
  'GT-106': {
    texte: `C'est la fuite de tout,
C'est un repos sans fin,
Un calme si profond
Qu'on dirait la fin
Du vaste monde et de la route,
Tandis que tu parais.

Tu ne dis rien, mon cher, mon cher,
Mais tu souris ; tu souris,
Et je pleure, je pleure, et je pleure
Si doucement que tu m'étonnes.

L'ombre éparse autour de toi
Semble un cercle enchanté.
Où la destinée est morte.

Rien ne bouge, rien ne sonne, rien ne trouble ce rêve où tu demeures.`,
    contexte: "Poème musical de Verlaine — le rêve amoureux suspend le temps ; vers courts et assonances créent une atmosphère onirique.",
    attendus: [
      att('Assonance', '« Un calme si profond »', 'Les assonances en « o » et la brièveté des vers produisent la musicalité caractéristique du poème verlainien.', ["assonance","musicalité","verlaine","vers","sonorité","onirique"]),
      att('Métaphore', '« la destinée est morte »', 'La métaphore finale suspend le temps : dans le rêve, le destin n\'a plus prise — amour et rêverie abolissent la fatalité.', ["métaphore","destinée","morte","rêve","temps","suspendu"]),
      att('Anaphore', '« C\'est la fuite de tout »', 'L\'anaphore sur « C\'est » énumère les effets du rêve et installe une lenteur hypnotique.', ["anaphore","c'est","fuite","repos","énumération","rythme"]),
      att('Registre lyrique', '« je pleure, je pleure, et je pleure »', 'La triple reprise « je pleure » exprime une émotion intime mêlant bonheur et larmes — registre lyrique de la suggestion.', ["lyrique","pleure","émotion","rêve","amour","intimité"])
    ],
  },
  'GT-107': {
    texte: `Au bout du petit matin, agitant leurs cimarrons,
Au bout du petit matin, vêtus de nègres par nos nègres,
Au bout du petit matin, lourds de galères trop pleines,
Au bout du petit matin, prostituées et nègres de Surinam,
Au bout du petit matin, bourreau des cœurs et des chairs,
Au bout du petit matin, le couteau à la main
Foulant le sol des ruelles poudreuses
Le nègre fidèle ou le nègre impassible
Au bout du petit matin, sur le morne plaine
Mes désespoirs s'ancrent.`,
    contexte: "Ouverture du Cahier — poésie anticoloniale césairienne ; anaphora et images violentes dénoncent l\'oppression coloniale.",
    attendus: [
      att('Anaphore', '« Au bout du petit matin »', 'L\'anaphore martèle le refrain « Au bout du petit matin » et structure une énumération épique de la souffrance coloniale.', ["anaphore","matin","répétition","incantation","anticolonial","rythme"]),
      att('Métaphore', '« bourreau des cœurs et des chairs »', 'La métaphore du « bourreau » transforme le colonialisme en violence corporelle : l\'oppression s\'incarne dans la chair.', ["métaphore","bourreau","cœur","chair","oppression","violence"]),
      att('Personnification', '« Mes désespoirs s\'ancrent »', 'Les désespoirs « s\'ancrent » comme des navires : personnification qui fige la souffrance dans un paysage morne.', ["personnification","désespoirs","ancrent","plaine","morne","figé"]),
      att('Registre épique', '« lourds de galères trop pleines »', 'Le registre épique élève la plainte individuelle au niveau d\'une épopée collective de la négritude.', ["épique","galères","collectif","révolte","identité","grandeur"])
    ],
  },
  'GT-108': {
    texte: `Femme nue, femme noire
Vêtue de ta couleur qui est vie, de ta forme qui est beauté
Je grandis à ton ombre ; la douceur de tes mains bandait mes yeux
Et voici qu'au cœur de l'Eté et de Midi,
Te voici dépouillée des lourds éclats de l'été
Femme nue, femme obscure
Fruit mûr à la chair ferme, sombre extase du noir vin,
Bouche qui fais lyrique ma bouche
Saxophone en plein dans mon orage d'aube!
Femme obscure, femme noire
Tes yeux me font rire, tes yeux me font pleurer
Tes yeux sont mes yeux, tes yeux sont mes yeux.`,
    contexte: "Poème fondateur de la négritude — Senghor célèbre la femme noire comme symbole de beauté, de vie et d\'identité africaine réhabilitée.",
    attendus: [
      att('Anaphore', '« Femme nue, femme noire »', 'L\'anaphore « Femme nue, femme noire » structure l\'éloge et imprime un rythme incantatoire propre à la poésie de la négritude.', ["anaphore","femme","noire","répétition","éloge","négritude"]),
      att('Métaphore', '« Vêtue de ta couleur qui est vie »', 'La métaphore identifie couleur et vie : Senghor réhabilite la noirceur contre le stéréotype colonial de la laideur.', ["métaphore","couleur","vie","beauté","réhabilitation","identité"]),
      att('Champ lexical', '« sombre extase du noir vin »', 'Le champ lexical sensoriel (fruit, vin, bouche, saxophone) célèbre le corps et la sensualité dans un registre lyrique et épique.', ["champ lexical","fruit","vin","sensualité","corps","lyrique"]),
      att('Registre lyrique', '« tes yeux sont mes yeux »', 'La fusion des regards (« tes yeux sont mes yeux ») exprime l\'union mystique entre le poète et la femme-mère — lyrisme et fierté identitaire.', ["lyrique","yeux","union","mère","identité","amour"])
    ],
  },
  'GT-109': {
    texte: `Les autres m'apprêtent une fin probable ; ils placent mon âge, soixante et un ou soixante-deux ans, au terme d'une vie où je n'ai plus rien à perdre des autres et dont je n'ai plus rien à gagner que la clarté. Les autres ne m'ont pas connu, ou du moins ne m'ont pas aimé. Je suis resté seul avec moi-même, et avec ce monde que j'ai voulu comprendre. J'ai passé ma vie à chercher la vérité des choses, à tâcher de discerner ce qui est solide dans l'homme et ce qui n'est que vanité.`,
    contexte: "Monologue d\'Hadrien au seuil de la mort — réflexion sur le pouvoir, la solitude impériale et la quête de lucidité.",
    attendus: [
      att('Antithèse', '« ne m\'ont pas connu »', 'L\'antithèse entre être connu et être aimé souligne la solitude du souverain : le pouvoir isole de l\'affection authentique.', ["antithèse","connu","aimé","solitude","pouvoir","isolement"]),
      att('Registre lyrique', '« seul avec moi-même »', 'La formule « seul avec moi-même » installe une confession intime au cœur du récit historique — méditation existentielle.', ["lyrique","seul","moi","confession","intime","méditation"]),
      att('Champ lexical', '« chercher la vérité »', 'Le champ lexical de la connaissance (« vérité », « comprendre », « discerner ») oriente les Mémoires vers une quête philosophique.', ["champ lexical","vérité","comprendre","discerner","sagesse","quête"]),
      att('Métaphore', '« rien à gagner que la clarté »', 'La métaphore de la « clarté » comme seul gain final transforme la mort en aboutissement lucide — stoïcisme impérial.', ["métaphore","clarté","mort","lucidité","fin","sagesse"])
    ],
  },
  'GT-111': {
    texte: `Sur certaines plateformes, une ville, et surtout une ville de province, est un monde à part, un monde plus moral que le monde social, plus étroit que le monde social, plus profond que le monde social. Sa vie est plus intime, plus concentrée, plus complète. Chaque maison a son histoire, chaque famille a ses secrets, chaque individu a sa destinée. Les événements y sont plus rapides, les passions plus violentes, les intérêts plus ardents. On y connaît tout le monde, on y juge tout le monde, on y condamne tout le monde. C'est un théâtre où chaque acteur joue son rôle devant un public qui ne le quitte pas des yeux.`,
    contexte: "Incipit balzacien — Saumur comme microcosme où se joue la tragédie d\'Eugénie ; réalisme et ironie sur la province.",
    attendus: [
      att('Comparaison', '« un monde à part »', 'La comparaison « un monde à part » isole Saumur du reste de la société : Balzac construit un cadre clos pour la tragédie familiale.', ["comparaison","monde","province","isolement","cadre","balzac"]),
      att('Antithèse', '« plus moral que le monde social »', 'L\'antithèse implicite entre province « morale » et monde social corrompt l\'ironie balzacienne : Saumur est enfermée, non vertueuse.', ["antithèse","moral","social","ironie","province","critique"]),
      att('Énumération', '« Chaque maison a son histoire, chaque famille a ses secrets, chaque individu a sa destinée »', 'L\'énumération ternaire structure le portrait de la province comme lieu de secrets et de destins entrelacés.', ["énumération","maison","famille","individu","secrets","destinée"]),
      att('Registre satirique', '« on y condamne tout le monde »', 'Le registre satirique affleure dans la condamnation généralisée : Balzac dénonce l\'hypocrisie sous les apparences morales.', ["satirique","condamne","hypocrisie","province","mœurs","critique"])
    ],
  },
  'GT-112': {
    texte: `La lune montait au-dessus des montagnes opposées à Macheronte, et le nom de Jésus fit sonner les flèches des arcs sur les toits de toutes les forteresses. Les sentinelles, debout sur les remparts, se penchaient vers le désert, et les chameaux, couchés sur le sable, levaient leurs têtes vers le ciel. Hérodias, debout sur la terrasse, regardait la lune ; elle sentait monter en elle une joie sauvage, une joie de vengeance, une joie de sang.`,
    contexte: "Scène d\'Hérodias — atmosphère biblique et orientale ; la lune et le nom de Jésus annoncent la catastrophe.",
    attendus: [
      att('Personnification', '« le nom de Jésus fit sonner les flèches »', 'Le nom de Jésus « fait sonner les flèches » : personnification qui traduit la peur collective et la tension politico-religieuse.', ["personnification","jésus","flèches","peur","tension","biblique"]),
      att('Registre épique', '« toits de toutes les forteresses »', 'Le registre épique élève la scène au niveau d\'un grand récit historique : Carthage biblique, forteresses, désert.', ["épique","forteresse","grandeur","historique","orient","décors"]),
      att('Champ lexical', '« joie sauvage, une joie de vengeance, une joie de sang »', 'Le champ lexical de la violence (« vengeance », « sang », « sauvage ») révèle la perversité d\'Hérodias.', ["champ lexical","vengeance","sang","joie","violence","hérodias"]),
      att('Focalisation interne', '« elle sentait monter en elle »', 'La focalisation sur les sensations d\'Hérodias plonge le lecteur dans sa psychologie meurtrière.', ["focalisation","interne","sentait","psychologie","hérodias","subjectif"])
    ],
  },
  'GT-115': {
    texte: `Il faut laisser parler les personnages, et non pas le romancier. Il faut les laisser agir, et non pas les expliquer. Il faut les montrer, et non pas les commenter. Le romancier ne doit pas imposer sa pensée au lecteur ; il doit lui offrir la matière à penser. Le journal d'Édouard est le lieu où je m'efforce de dégager une théorie du roman, mais cette théorie ne doit pas envahir le récit : elle doit rester en marge, comme une réflexion parallèle.`,
    contexte: "Journal d\'Édouard dans Les Faux-monnayeurs — manifeste du roman moderne ; Gide théorise la mise en abyme et l\'autonomie des personnages.",
    attendus: [
      att('Anaphore', '« Il faut laisser parler les personnages »', 'L\'anaphore sur « Il faut » structure le manifeste esthétique et martèle les principes du roman gidien.', ["anaphore","faut","répétition","manifeste","esthétique","structure"]),
      att('Antithèse', '« non pas les expliquer »', 'L\'opposition entre laisser agir et expliquer fonde la théorie gidienne du roman moderne.', ["antithèse","expliquer","agir","montrer","commenter","contraste"]),
      att('Registre didactique', '« théorie du roman »', 'Le registre didactique affirme une leçon sur l\'art romanesque : Gide instruit le lecteur tout en pratiquant la métafiction.', ["didactique","théorie","roman","métafiction","leçon","esthétique"]),
      att('Parallélisme', '« Il faut les laisser agir »', 'Le parallélisme syntaxique crée une progression logique : parole, action, spectacle — triptyque du roman moderne.', ["parallélisme","laisser","agir","parler","montrer","symétrie"])
    ],
  },
  'GT-116': {
    texte: `Gervaise, les mains rouges, les bras nus, frottait avec une rage de vaincue. L'eau lui éclaboussait la figure, et elle ne sentait plus rien. Elle ne pensait plus qu'à laver, à frotter, à rincer, comme une bête de somme qui tourne en rond. Autour d'elle, les lavandières criaient, se moquaient, se disputaient ; mais elle n'entendait rien. Elle avait les mains en sang, les ongles usés, la peau à vif ; et pourtant elle continuait, obstinée, silencieuse, comme si la lessive pouvait laver aussi sa honte.`,
    contexte: "Gervaise au lavoir — naturalisme zolien ; le corps épuisé et l\'anesthésie morale traduisent la misère ouvrière.",
    attendus: [
      att('Métaphore', '« rage de vaincue »', 'La métaphore « rage de vaincue » condense désespoir social et épuisement physique : Gervaise combat une bataille perdue d\'avance.', ["métaphore","rage","vaincue","désespoir","misère","combat"]),
      att('Comparaison', '« comme une bête de somme »', 'La comparaison animale dégrade Gervaise au rang de bête de somme : Zola dénonce la déshumanisation du travail.', ["comparaison","bête","somme","déshumanisation","travail","naturalisme"]),
      att('Registre pathétique', '« elle ne sentait plus rien »', 'L\'anesthésie sensorielle (« ne sentait plus rien ») suscite la pitié : le corps ouvrier est poussé au-delà de la souffrance.', ["pathétique","sentait","anesthésie","pit","corps","épuisement"]),
      att('Gradation', '« laver, à frotter, à rincer »', 'La gradation des verbes de lessive traduit la répétition mécanique et l\'enfermement dans le labeur.', ["gradation","laver","frotter","rincer","répétition","labeur"])
    ],
  },
  'GT-117': {
    texte: `Je ne sais si je suis une fille perdue ou une victime ; mais je sais que je suis malheureuse, et que je n'ai jamais mérité mon malheur. On m'a forcée à entrer au couvent ; on m'a fait croire que j'étais coupable ; on m'a enlevé ma liberté, ma famille, mon nom. Je n'ai plus que ma conscience pour me défendre, et ma conscience me dit que je suis innocente. Mais qui m'écoutera ? Qui croira une religieuse qui accuse ses supérieures ?`,
    contexte: "Suzanne Simonin dans La Religieuse — roman philosophique de Diderot ; oppression religieuse et registre pathétique.",
    attendus: [
      att('Antithèse', '« une fille perdue ou une victime »', 'L\'antithèse perdue / victime traduit l\'ambiguïté imposée à Suzanne : la société la culpabilise alors qu\'elle est persécutée.', ["antithèse","perdue","victime","culpabilité","innocence","contraste"]),
      att('Anaphore', '« On m\'a forcée à entrer au couvent »', 'L\'anaphore sur « On m\'a » accumule les violences institutionnelles et renforce l\'indignation du récit.', ["anaphore","on m'a","oppression","accumulation","violence","institution"]),
      att('Registre pathétique', '« je suis malheureuse »', 'L\'aveu « je suis malheureuse » suscite la compassion : Diderot dénonce l\'oppression conventuelle par l\'émotion.', ["pathétique","malheureuse","pit","souffrance","religieuse","injustice"]),
      att('Question rhétorique', '« Mais qui m\'écoutera ? »', 'Les questions rhétoriques finales expriment l\'impuissance de la victime face à l\'autorité ecclésiastique.', ["question","rhétorique","écouter","impuissance","autorité","accusation"])
    ],
  },
  'GT-119': {
    texte: `HUGO. — Vous êtes jeune, vous devez aimer. L'amour, c'est donner ce qu'on n'a pas à quelqu'un qui n'en veut pas. JESSICA. — C'est une définition bien triste. HUGO. — C'est la seule vraie. On ne choisit pas qui l'on aime, et l'on ne choisit pas non plus ce que l'on fait de cet amour. L'engagement politique et l'amour sont deux choses qui se déchirent, et l'on ne peut pas toujours les concilier. Jessica écoute, silencieuse, comme si chaque mot pesait une décision.`,
    contexte: "Hugo explique à Jessica le dilemme entre amour et action politique — théâtre engagé sartrien.",
    attendus: [
      att('Oxymore', '« donner ce qu\'on n\'a pas »', 'L\'oxymore « donner ce qu\'on n\'a pas » définit l\'amour comme paradoxe existentiel — registre philosophique du théâtre engagé.', ["oxymore","donner","impossible","paradoxe","amour","existentialisme"]),
      att('Antithèse', '« engagement politique et l\'amour »', 'L\'antithèse engagement / amour structure le conflit dramatique central des Mains sales.', ["antithèse","engagement","amour","politique","dilemme","conflit"]),
      att('Registre didactique', '« vous devez aimer »', 'Le registre didactique de Hugo transforme le dialogue en leçon existentielle sur les choix moraux.', ["didactique","aimer","leçon","morale","théâtre","engagé"]),
      att('Apostrophe', '« Vous êtes jeune »', 'L\'apostrophe à Jessica installe une relation de conseil et de tension générationnelle.', ["apostrophe","jeune","jessica","conseil","dialogue","tension"])
    ],
  },
  'GT-120': {
    texte: `Daru regardait les deux hommes monter vers lui. L'un était un gendarme, l'autre un prisonnier arabe. Il avançait devant, le fusil sur l'épaule, l'autre, les mains liées derrière le dos, marchait la tête haute. Daru sentit monter en lui une colère obscure : pourquoi lui imposait-on ce choix ? Il était instituteur, pas juge. Pourtant il devrait décider du sort de cet homme — le livrer aux autorités ou le laisser fuir vers le désert.`,
    contexte: "Daru face au prisonnier arabe — dilemme moral camusien entre neutralité, hospitalité et responsabilité.",
    attendus: [
      att('Antithèse', '« L\'un était un gendarme, l\'autre un prisonnier arabe »', 'L\'opposition gendarme / prisonnier structure la scène : deux figures convergent vers Daru, témoin forcé.', ["antithèse","gendarme","prisonnier","opposition","tension","contraste"]),
      att('Registre tragique', '« marchait la tête haute »', 'La dignité du prisonnier (« tête haute ») installe un registre tragique : pitié et respect mêlés à l\'absurdité de la situation.', ["tragique","tête haute","dignité","pit","prisonnier","absurde"]),
      att('Champ lexical', '« le fusil sur l\'épaule, l\'autre, les mains liées derrière le dos »', 'Le champ lexical de la contrainte oppose la violence de l\'Etat à la neutralité désirée de Daru.', ["champ lexical","fusil","liées","contrainte","autorité","violence"]),
      att('Question rhétorique', '« pourquoi lui imposait-on ce choix ? »', 'La question rhétorique traduit le malaise éthique : Camus explore la responsabilité impossible face à l\'autre.', ["question","rhétorique","choix","responsabilité","éthique","dilemme"])
    ],
  },
  'GT-121': {
    texte: `Il naquit en ce monde par un merveilleux moyen : car sa mère ne sentit aucune douleur, et ne fut point malade, si non qu'elle eut un peu mal au ventre. Et quand il fut né, il ne pleura point, mais se mit à rire, et disait en riant : « Bois, bois, bois ! » comme s'il eût appelé à boire, ce qui fit dire à tous ceux qui l'entendirent qu'il avait plus de trente-six mois de boire en son ventre. Et fut si grand et si lourd qu'on ne put le tirer du ventre de sa mère autrement que par les oreilles.`,
    contexte: "Naissance prodigieuse de Gargantua — humour rabelaisien, grossissement et parodie de l\'épopée.",
    attendus: [
      att('Hyperbole', '« par un merveilleux moyen »', 'L\'hyperbole dès l\'incipit annonce le registre grotesque : la naissance dépasse tout vraisemblable biologique.', ["hyperbole","merveilleux","exagération","grotesque","rabelais","prodige"]),
      att('Litote', '« un peu mal au ventre »', 'La litote « un peu mal au ventre » minimise comiquement un accouchement prodigieux — antiphrase rabelaisienne.', ["litote","peu","ventre","humour","minimisation","décalage"]),
      att('Registre comique', '« se mit à rire »', 'Le rire du nouveau-né renverse les conventions : Rabelais parodie solennellement la naissance héroïque.', ["comique","rire","parodie","renversement","grotesque","humour"]),
      att('Registre épique', '« autrement que par les oreilles »', 'La parodie du registre épique (naissance merveilleuse) se détourne en farce corporelle typique de l\'humanisme rabelaisien.', ["épique","parodie","corps","farce","humanisme","grotesque"])
    ],
  },
  'GT-122': {
    texte: `Toutes choses sont dites déjà ; mais l'on a toujours à redire. Oui, je sais, l'art n'a pas d'autre but que lui-même. Il ne peut pas être utile, ne serait-ce que parce qu'il n'est pas utile. Il ne peut pas être moral, ne serait-ce que parce qu'il n'est pas moral. Il ne peut pas être didactique, ne serait-ce que parce qu'il ne peut pas enseigner. L'art pour l'art, voilà la seule doctrine qui ne soit pas absurde.`,
    contexte: "Poème-manifeste parnassien — Gautier affirme l\'autonomie de l\'art face à la moralité et à l\'utilité.",
    attendus: [
      att('Antithèse', '« Toutes choses sont dites déjà ; mais l\'on a toujours à redire »', 'L\'antithèse ouvre le poème : l\'originalité poétique est possible malgré l\'épuisement des sujets.', ["antithèse","dites","redire","originalité","poésie","contraste"]),
      att('Paradoxe', '« l\'art n\'a pas d\'autre but que lui-même »', 'Le paradoxe « art pour l\'art » affirme une doctrine esthétique contre la moralisation utilitariste.', ["paradoxe","art","lui-même","autonomie","parnasse","doctrine"]),
      att('Anaphore', '« Il ne peut pas »', 'L\'anaphore « Il ne peut pas » énumère par la négation les refus du poète parnassien.', ["anaphore","ne peut pas","négation","refus","énumération","manifeste"]),
      att('Registre didactique', '« voilà la seule doctrine »', 'Le registre didactique conclut le manifeste : Gautier enseigne une esthétique de la forme pure.', ["didactique","doctrine","manifeste","esthétique","parnassien","leçon"])
    ],
  },
  'GT-123': {
    texte: `Ce toit tranquille, où marchent des colombes,
Entre les pins palpite, entre les tombes ;
Midi, le roi des étés, m'effraie
De tout son soleil étale sur ma tête,
Et je ne puis rien voir d'où naît cette clarté
Qui monte jusqu'au ciel, qui monte jusqu'à moi.
Ô toi, l'effort, le plus haut des hommes, ne te lasse pas !
Mais, cher à ce qui vit, à ce qui pense encore,
Ne nous donne pas l'oubli de ta mort prochaine.`,
    contexte: "Ouverture du Cimetière marin — méditation valéryenne sur la mer, la mort et la lumière.",
    attendus: [
      att('Personnification', '« Midi, le roi des étés »', 'Midi personnifié en « roi » domine le paysage : la lumière devient une force oppressante.', ["personnification","midi","roi","été","soleil","oppression"]),
      att('Antithèse', '« entre les tombes »', 'La proximité colombes / tombes unit vie et mort dans le cimetière marin — méditation existentielle.', ["antithèse","colombes","tombes","vie","mort","contraste"]),
      att('Métaphore', '« Ce toit tranquille »', 'Le « toit tranquille » métaphorise le ciel au-dessus du cimetière : espace clos de la méditation.', ["métaphore","toit","ciel","cimetière","clos","méditation"]),
      att('Registre lyrique', '« m\'effraie »', 'Le « je » poétique avoue sa peur devant la lumière : subjectivité et quête de sens.', ["lyrique","effraie","je","peur","subjectivité","existence"])
    ],
  },
  'GT-124': {
    texte: `L'aigle, ce n'est pas le faucon ; l'aigle, c'est l'aigle. Il ne se laisse pas dompter ; il ne se laisse pas lier. Il ne se laisse pas mettre en cage ; il ne se laisse pas mettre en laisse. Il ne se laisse pas apprivoiser ; il ne se laisse pas dresser. Il ne se laisse pas vendre ; il ne se laisse pas acheter. Il ne se laisse pas tuer ; il ne se laisse pas mourir. Il ne se laisse pas oublier ; il ne se laisse pas effacer.`,
    contexte: "Poème des Châtiments — l\'aigle allégorise Napoléon Ier ; Hugo oppose la liberté impériale au despotisme de Napoléon III.",
    attendus: [
      att('Anaphore', '« Il ne se laisse pas »', 'L\'anaphore « Il ne se laisse pas » martèle la liberté absolue de l\'aigle — figure allégorique de l\'Empereur.', ["anaphore","ne se laisse pas","répétition","liberté","refus","martèlement"]),
      att('Métaphore', '« l\'aigle, c\'est l\'aigle »', 'L\'aigle allégorise Napoléon : la répétition identitaire affirme une grandeur incomparable.', ["métaphore","aigle","allégorie","napoléon","liberté","figure"]),
      att('Antithèse', '« ce n\'est pas le faucon »', 'L\'antithèse aigle / faucon distingue le héros véritable du tyran — satire politique hugolienne.', ["antithèse","aigle","faucon","tyran","héros","satire"]),
      att('Registre épique', '« il ne se laisse pas mourir »', 'Le registre épique exalte une figure immortelle : Hugo transforme la satire en éloge révolutionnaire.', ["épique","mourir","immortalité","grandeur","révolution","hugo"])
    ],
  },
  'GT-125': {
    texte: `Sur l'onde calme et noire où dorment les étoiles,
La blanche Ophélia flotte comme un grand lys,
Flotte très lentement, couchée en ses longs voiles…
— On entend dans les bois lointains des hallali.
Ô pâle Carthage ! Enfant d'un roi barbare,
Ô reine blanche ! Tu dis que tu es bien laide,
Que tu te noies, Ophélia, dans la mare,
Dans la mare où tu pleures, dans la mare où tu pleures.

— La mer, quand elle chante, chante pour les morts.`,
    contexte: "Poème d\'Ophélie — symbolisme précoce de Rimbaud ; atmosphère onirique et pathétique autour de la noyade shakespearienne.",
    attendus: [
      att('Comparaison', '« flotte comme un grand lys »', 'Ophélie comparée au lys condense pureté et mort : l\'image shakespearienne devient symboliste.', ["comparaison","comme","lys","ophélie","pureté","mort"]),
      att('Personnification', '« onde calme et noire où dorment les étoiles »', 'Les étoiles « dorment » sur l\'onde : personnification qui installe une atmosphère nocturne onirique.', ["personnification","étoiles","dorment","onde","nocturne","onirique"]),
      att('Registre pathétique', '« tu te noies, Ophélia »', 'L\'apostrophe à Ophélie qui se noie suscite la pitié : registre pathétique de la mort de la jeune fille.', ["pathétique","noies","ophélie","pit","mort","larmes"]),
      att('Champ lexical', '« mare où tu pleures »', 'Le champ lexical aquatique (onde, mare, noies, pleures) enveloppe la scène d\'une harmonie morbide.', ["champ lexical","mare","pleures","eau","noyade","aquatique"])
    ],
  },
  'GT-126': {
    texte: `TRISSOTIN
La rime est une esclave, et ne doit que servir
Le sens, qui doit partout l'emporter et régir.
La rime est une esclave, et ne doit que servir
Le sens, qui doit partout l'emporter et régir.
Point de rime pour la rime ; il faut qu'elle obéisse
Au sens, et qu'elle suive où le sens la conduise.
La rime est une esclave, et ne doit que servir
Le sens, qui doit partout l'emporter et régir.

Point de rime pour la rime : voilà la règle.`,
    contexte: "Trissotin défend la poétique classique — Molière satirise les précieuses et la querelle des Anciens et des Modernes.",
    attendus: [
      att('Métaphore', '« La rime est une esclave »', 'La rime métaphorisée en esclave affirme la primauté du sens sur la forme — doctrine classique moquée par Molière.', ["métaphore","rime","esclave","sens","classique","poétique"]),
      att('Personnification', '« Le sens, qui doit partout l\'emporter et régir »', 'Le sens personnifié « règne » sur la rime : animation qui traduit la hiérarchie esthétique prônée par Trissotin.', ["personnification","sens","régir","domination","forme","doctrine"]),
      att('Anaphore', '« La rime est une esclave »', 'L\'anaphore du distique martèle la thèse avec un rythme scolaire — comique par l\'excès pédant.', ["anaphore","rime","esclave","répétition","pédant","comique"]),
      att('Registre satirique', '« Point de rime pour la rime »', 'Le registre satirique transparaît : Molière ridiculise le pedantisme poétique par la répétition mécanique.', ["satirique","pedantisme","moquerie","précieuses","comédie","doctrine"])
    ],
  },
  'GT-127': {
    texte: `Veux-tu te faire aimer ? Veux-tu être riche ? Veux-tu être puissant ? Veux-tu posséder tout ce que tu désires ? Tout ce que tu voudras, tout ce que tu demanderas sera accompli. Mais attention : chaque vœu exaucé réduira cette peau. Elle se rétrécit déjà. Regarde : elle frissonne, elle se contracte. Tu as trente ans ; tu en paraîtras quarante demain si tu abuses de mon pouvoir. Raphaël hésite, fasciné par cette promesse.`,
    contexte: "Le talisman de la Peau de chagrin — pacte faustien balzacien ; désir et mort se confondent dans le symbolisme de la peau.",
    attendus: [
      att('Anaphore', '« Veux-tu te faire aimer ? »', 'L\'anaphore des questions séduit Raphaël : énumération des désirs possibles — structure du pacte faustien.', ["anaphore","veux-tu","désir","séduction","pacte","énumération"]),
      att('Hyperbole', '« tout ce que tu demanderas sera accompli »', 'L\'hyperbole de la promesse totale condense la tentation : tout est possible, au prix de la vie.', ["hyperbole","tout","accompli","promesse","tentation","pouvoir"]),
      att('Métaphore', '« chaque vœu exaucé réduira cette peau »', 'La peau qui rétrécit métaphorise la vie qui s\'épuise : désir et mort sont indissociables.', ["métaphore","peau","vœu","mort","désir","symbolisme"]),
      att('Registre fantastique', '« Elle se rétrécit déjà »', 'L\'irruption surnaturelle de la peau magique installe le registre fantastique au cœur du réalisme balzacien.', ["fantastique","peau","magie","surnaturel","pacte","faustien"])
    ],
  },
  'GT-128': {
    texte: `Nana, debout devant le public, le regardait, le provoquait, le tenait sous son regard. Elle ne chantait pas encore ; elle souriait, elle attendait. La salle entière la dévorait des yeux. Les hommes se penchaient, les femmes murmuraient, les journalistes griffonnaient. Et Nana, immobile, triomphait déjà. Quand enfin elle ouvrit la bouche, ce fut comme une décharge : le théâtre entier fut à ses pieds, conquis, soumis, ivre de cette voix qui ne savait pas chanter mais qui possédait Paris.`,
    contexte: "Première de Nana au théâtre — naturalisme zolien ; le corps et le désir collectif soumettent la société parisienne.",
    attendus: [
      att('Anaphore', '« le regardait, le provoquait, le tenait »', 'L\'anaphore des verbes de domination traduit le pouvoir du regard de Nana sur le public.', ["anaphore","regard","provoquait","domination","public","répétition"]),
      att('Métaphore', '« la dévorait des yeux »', 'Le public « dévoré » des yeux : métaphore de la voracité collective face au corps de l\'actrice.', ["métaphore","dévorait","yeux","voracité","corps","désir"]),
      att('Focalisation externe', '« Nana, debout devant le public »', 'La focalisation externe observe Nana et la salle sans accéder à sa pensée : naturalisme objectif.', ["focalisation","externe","nana","spectacle","observation","naturalisme"]),
      att('Hyperbole', '« le théâtre entier fut à ses pieds »', 'L\'hyperbole de la conquête totale exalte le pouvoir érotique de Nana sur Paris haussmannien.', ["hyperbole","théâtre","pieds","conquête","paris","pouvoir"])
    ],
  },
  'GT-129': {
    texte: `Je ne suis plus qu'une femme qui aime, et qui a peur. Je ne suis plus qu'une femme qui aime, et qui a peur de ne plus aimer, ou de trop aimer, ou d'aimer mal. J'ai quitté un mari, j'ai quitté une maison, j'ai quitté une vie rangée pour chercher une affection que personne ne réclame. Honteuse de mon désir, honteuse de ma peur, j'observe, j'étudie, j'analyse mes propres mouvements comme si j'étais une étrangère à moi-même.`,
    contexte: "Incipit de La Vagabonde — Colette explore la liberté féminine, l\'amour et la subjectivité autobiographique.",
    attendus: [
      att('Antithèse', '« qui aime, et qui a peur »', 'L\'antithèse aime / peur condense le conflit intérieur de Renée : passion et crainte s\'entrelacent.', ["antithèse","aime","peur","conflit","féminin","contraste"]),
      att('Anaphore', '« Je ne suis plus qu\'une femme »', 'L\'anaphore du refrain identitaire martèle la réduction de soi à l\'amour — subjectivité autobiographique.', ["anaphore","femme","aime","peur","identité","répétition"]),
      att('Registre lyrique', '« chercher une affection que personne ne réclame »', 'Le registre lyrique exprime le désir amoureux non partagé — intimité et mélancolie colettiennes.', ["lyrique","affection","désir","solitude","amour","subjectivité"]),
      att('Litote', '« Je ne suis plus qu\'une »', 'La litote « plus qu\'une » minimise l\'identité tout en révélant une réduction existentielle douloureuse.', ["litote","qu'une","réduction","identité","humilité","douleur"])
    ],
  },
  'GT-130': {
    texte: `Il y a des moments où l'on sent que la terre tourne. Il y a des moments où l'on sent passer le vent du large sur la terre entière. Il y a des moments où l'on entend le bruit des planètes dans l'espace. Il y a des moments où l'on sent que la terre n'est qu'un point dans l'univers, et que l'homme n'est qu'un point sur la terre, et que l'amour est la seule chose qui donne un sens à ce point. Alors l'amour devient une révélation qui dépasse la raison.`,
    contexte: "Ouverture du Partage de midi — théâtre claudélien ; révélation cosmique et mystique au moment de l\'amour.",
    attendus: [
      att('Anaphore', '« Il y a des moments où »', 'L\'anaphore structure une série de révélations : chaque moment ouvre une perception nouvelle du cosmos.', ["anaphore","moments","répétition","révélation","rythme","structure"]),
      att('Métaphore', '« la terre tourne »', 'La métaphore du mouvement terrestre traduit le vertige existentiel — conscience cosmique claudélienne.', ["métaphore","terre","tourne","vertige","cosmos","conscience"]),
      att('Hyperbole', '« le bruit des planètes dans l\'espace »', 'L\'hyperbole sensorielle élargit la perception humaine à l\'échelle universelle — registre mystique.', ["hyperbole","planètes","espace","univers","grandeur","mystique"]),
      att('Registre lyrique', '« l\'amour est la seule chose qui donne un sens »', 'Le lyrisme claudélien identifie amour et sens ultime : révélation mystique au cœur du drame.', ["lyrique","amour","sens","révélation","mystique","claudel"])
    ],
  },
  'GT-131': {
    texte: `Heureuse qui comme Ève fut créée la dernière,
Qui n'a jamais connu d'autre monde que le premier,
Qui n'a jamais vu mourir personne,
Qui n'a jamais su ce que c'est que la mort,
Qui n'a jamais eu d'autre passé que l'éternité,
Qui n'a jamais eu d'autre avenir que l'éternité,
Qui n'a jamais eu d'autre présent que l'éternité,
Heureuse qui comme Ève fut créée la dernière.

Bénie soit celle qui n'a jamais connu la chute.`,
    contexte: "Poème mystique de Péguy — Ève incarne l\'innocence originelle ; temps et éternité se confondent.",
    attendus: [
      att('Comparaison', '« Heureuse qui comme Ève »', 'La comparaison avec Ève célèbre l\'innocence originelle : éloge de la pureté avant la chute.', ["comparaison","comme","ève","innocence","origine","éloge"]),
      att('Anaphore', '« Qui n\'a jamais »', 'L\'anaphore « Qui n\'a jamais » énumère par la négation les privilèges d\'Ève — rythme incantatoire peguyan.', ["anaphore","jamais","négation","énumération","rythme","incantation"]),
      att('Antithèse', '« d\'autre monde que le premier »', 'L\'antithèse entre premier monde et éternité unit fin et commencement : Ève est figure du temps originel.', ["antithèse","premier","monde","temps","éternité","contraste"]),
      att('Registre épique', '« fut créée la dernière »', 'Le registre épique élève Ève au rang de figure biblique universelle — poésie mystique et lyrique.', ["épique","créée","biblique","grandeur","mystique","peguy"])
    ],
  },
  'GT-133': {
    texte: `Sur la rive du fleuve un autre bateau
Passa sans bruit sans bruit sans bruit
Et moi j'étais debout sur le quai
Regardant passer le bateau
Sur la rive du fleuve un autre bateau
Passa sans bruit sans bruit sans bruit
Et moi j'étais debout sur le quai
Regardant passer le bateau
Et je pensais à la guerre
Et je pensais à la mort
Et je pensais à la Jolie Rousse

Paris dormait, Paris souffrait, Paris attendait.`,
    contexte: "Poème moderniste d\'Apollinaire — Paris, guerre, mélancolie ; vers libres et répétitions créent une atmosphère d\'attente.",
    attendus: [
      att('Anaphore', '« sans bruit sans bruit sans bruit »', 'La triple reprise « sans bruit » crée un silence obsédant — angoisse de la guerre imminente.', ["anaphore","bruit","silence","répétition","angoisse","guerre"]),
      att('Vers libre', '« Sur la rive du fleuve un autre bateau »', 'Le vers libre rompt avec la métrique régulière : modernité apollinienne et rupture formelle.', ["vers libre","rupture","moderne","apollinaire","forme","liberté"]),
      att('Champ lexical', '« je pensais à la guerre »', 'Le champ lexical (guerre, mort, amour) entrelace engagement et mélancolie personnelle.', ["champ lexical","guerre","mort","amour","mélancolie","engagement"]),
      att('Registre lyrique', '« je pensais à la Jolie Rousse »', 'La pensée amoureuse conclut le poème : lyrisme intime au milieu de l\'histoire collective.', ["lyrique","jolie rousse","pensée","amour","subjectivité","mélancolie"])
    ],
  },
  'GT-134': {
    texte: `Voici des fruits, des fleurs, des feuilles et des branches,
Et puis voici mon cœur qui ne bat que pour vous.
Ne le prenez pas pour un cœur de plume,
Ni pour un cœur de cire, ni pour un cœur de pierre.
Voici des fruits, des fleurs, des feuilles et des branches,
Et puis voici mon cœur qui ne bat que pour vous.
Voici des fruits, des fleurs, des feuilles et des branches,
Et puis voici mon cœur qui ne bat que pour vous.`,
    contexte: "Poème Green de Verlaine — offrande lyrique mêlant nature et amour ; musicalité et suggestion verlainiennes.",
    attendus: [
      att('Énumération', '« des fruits, des fleurs, des feuilles et des branches »', 'L\'énumération naturelle précède l\'offrande du cœur : progression du concret au sentiment.', ["énumération","fruits","fleurs","nature","offrande","liste"]),
      att('Métaphore', '« mon cœur qui ne bat que pour vous »', 'Le cœur offert métaphorise l\'amour exclusif : registre lyrique de la dévotion amoureuse.', ["métaphore","cœur","bat","amour","dévotion","offrande"]),
      att('Anaphore', '« Voici des fruits »', 'L\'anaphore du refrain structure le poème comme une chanson — musicalité verlainienne.', ["anaphore","voici","répétition","refrain","musicalité","verlaine"]),
      att('Registre lyrique', '« ne bat que pour vous »', 'Le registre lyrique domine : apostrophe amoureuse et subjectivité intime.', ["lyrique","vous","amour","apostrophe","intime","suggestion"])
    ],
  },
  'GT-135': {
    texte: `Un Loup ne rencontra qu'un Chien qui sortait de la maison.
— Frère, lui dit ce suborneur, que je suis fatigué
De courir après les proies légères !
Je ne meurs que de faim, car tu le vois bien.
— Qu'en as-tu donc ? reprit le Chien.
— Presque rien ; tu souffriras de la contrainte,
De la chaîne, peut-être, et de coups sans nombre.
— De la chaîne ? dit le Loup ; ne m'en parle pas :
Je n'en veux point, et n'en souffrirai jamais.`,
    contexte: "Fable de La Fontaine — liberté contre servitude ; le loup refuse la chaîne du chien domestique.",
    attendus: [
      att('Dialogue', '« Frère, lui dit ce suborneur »', 'Le dialogue structure la fable : le chien séduit, le loup refuse — argumentation morale par la fiction.', ["dialogue","frère","suborneur","argument","fable","persuasion"]),
      att('Antithèse', '« De la chaîne ? dit le Loup ; ne m\'en parle pas »', 'Le refus de la chaîne oppose liberté et servitude — morale centrale de la fable.', ["antithèse","chaîne","liberté","servitude","loup","refus"]),
      att('Registre satirique', '« ce suborneur »', 'Le narrateur qualifie le chien de « suborneur » : satire sociale de ceux qui acceptent l\'asservissement.', ["satirique","suborneur","servitude","critique","social","moquerie"]),
      att('Registre pathétique', '« Je ne meurs que de faim »', 'La faim du loup suscite une pité ambiguë : la liberté a un prix — registre pathétique.', ["pathétique","faim","loup","liberté","pit","souffrance"])
    ],
  },
  'GT-136': {
    texte: `NICOMÈDE
Je suis maître de moi comme de l'univers ;
Je le suis, je veux l'être, je le dis à Rome.
Je suis maître de moi comme de l'univers ;
Je le suis, je veux l'être, je le dis à Rome.
Rome le saura, Rome l'entendra,
Rome le verra, Rome le comprendra.
Je suis maître de moi comme de l'univers ;
Je le suis, je veux l'être, je le dis à Rome.

Rome entendra ce cri de liberté. Jamais prince n'obéit ; jamais héros ne plie ; jamais roi ne cède.`,
    contexte: "Tirade de Nicomède — héroïsme cornelien ; fierté, liberté politique et alexandrin.",
    attendus: [
      att('Hyperbole', '« maître de moi comme de l\'univers »', 'L\'hyperbole identifie maîtrise de soi et domination universelle — orgueil héroïque cornelien.', ["hyperbole","maître","univers","orgueil","héros","exagération"]),
      att('Anaphore', '« Je le suis, je veux l\'être, je le dis »', 'L\'anaphore martèle la volonté du héros : répétition qui affirme une identité indomptable.', ["anaphore","je le suis","volonté","répétition","fierté","martèlement"]),
      att('Apostrophe', '« je le dis à Rome »', 'L\'apostrophe à Rome transforme la déclaration en défi politique — théâtre et pouvoir.', ["apostrophe","rome","défi","politique","proclamation","théâtre"]),
      att('Registre épique', '« Je suis maître de moi comme de l\'univers »', 'Le registre épique exalte la grandeur du héros cornelien face à l\'empire.', ["épique","univers","grandeur","héroïsme","cornelien","fierté"])
    ],
  },
  'GT-137': {
    texte: `ROXANE
Qu'importe qui me tue, pourvu que je meure ?
Et qu'importe qui me tue, pourvu que je meure ?
Je ne veux plus vivre, je ne veux plus souffrir,
Je ne veux plus aimer, je ne veux plus espérer.
Qu'importe qui me tue, pourvu que je meure ?
La jalousie me dévore, l'amour me consume,
Et la mort seule peut éteindre cette flamme.
Qu'importe qui me tue, pourvu que je meure ?

La mort seule peut éteindre cette flamme.`,
    contexte: "Roxane dans Bajazet — passion orientale, jalousie et désir de mort ; registre pathétique et tragique.",
    attendus: [
      att('Anaphore', '« Qu\'importe qui me tue »', 'L\'anaphore de la question-réfrain exprime l\'indifférence désespérée de Roxane — pathétique extrême.', ["anaphore","importe","meure","désespoir","répétition","pathétique"]),
      att('Question rhétorique', '« pourvu que je meure ? »', 'La question rhétorique ne cherche pas de réponse : seule compte l\'annihilation du désir.', ["question","rhétorique","meure","mort","désir","annihilation"]),
      att('Antithèse', '« La jalousie me dévore, l\'amour me consume »', 'L\'antithèse jalousie / amour condense la passion destructrice — tragédie racinienne.', ["antithèse","jalousie","amour","dévore","consume","passion"]),
      att('Registre tragique', '« la mort seule peut éteindre cette flamme »', 'Le registre tragique affirme que seule la mort libère de la passion — fatalité orientale.', ["tragique","mort","flamme","fatalité","passion","roxane"])
    ],
  },
  'GT-138': {
    texte: `Baise m'encor, rebaise moy et baise :
De tant de baisers que je te donneray
Je te prive un peu de ta vie, et tu m'as privée
De la mienne entière, et ne m'en rendras jamais.
Baise m'encor, rebaise moy et baise :
Ne te voyant plus, je crains de me mesprendre,
Et ne te voyant plus, je crains de t'oublier.
Baise m'encor, rebaise moy et baise :
Oubliant nostre amour de me mesprendre.

Ne te voyant plus, je crains de t'oublier.`,
    contexte: "Sonnet de Louise Labé — passion directe, peur de l\'oubli ; lyrisme amoureux féminin de la Renaissance.",
    attendus: [
      att('Anaphore', '« Baise m\'encor, rebaise moy et baise »', 'L\'anaphore des impératifs amoureux traduit l\'urgence du désir et la peur de l\'absence.', ["anaphore","baise","répétition","désir","urgence","passion"]),
      att('Antithèse', '« De tant de baisers que je te donneray »', 'L\'échange amoureux par les baisers montre une passion qui consume la vie des amants.', ["antithèse","baisers","vie","amour","échange","passion"]),
      att('Registre lyrique', '« Baise m\'encor »', 'Le registre lyrique amoureux s\'exprime sans détour : apostrophe directe et subjectivité féminine.', ["lyrique","baise","apostrophe","amour","direct","féminin"]),
      att('Registre pathétique', '« je crains de t\'oublier »', 'La peur de l\'oubli suscite la pitié : amour et angoisse se mêlent dans le sonnet.', ["pathétique","crains","oublier","angoisse","absence","pit"])
    ],
  },
  'GT-139': {
    texte: `Yeux, qui par force avez en ma pensée
Impris le portrait de celle que j'aime,
Ne laissez jamais ma vue en repos,
Mais sans cesse la suivez où qu'elle aille,
Et ne souffrez jamais qu'elle me soit ravie.
Yeux, qui par force avez en ma pensée
Impris le portrait de celle que j'aime,
Ne laissez jamais ma vue en repos.

Ainsi mon regard demeure captif de ton image.

Sans repos, sans trêve, sans fin. Ainsi mon âme demeure esclave de ton regard éternel.`,
    contexte: "Dizain de Scève — lyrisme néo-platonicien ; le regard obsédé par l\'image de l\'aimée.",
    attendus: [
      att('Apostrophe', '« Yeux, qui par force »', 'L\'apostrophe aux yeux dramatise la passion : le poète s\'adresse à ses propres organes.', ["apostrophe","yeux","force","passion","corps","lyrique"]),
      att('Métaphore', '« Impris le portrait »', 'Le portrait « imprimé » dans la pensée métaphorise l\'obsession amoureuse — néo-platonisme.', ["métaphore","portrait","impris","obsession","pensée","amour"]),
      att('Personnification', '« Ne laissez jamais ma vue en repos »', 'Les yeux personnifiés obéissent ou désobéissent : animation du regard amoureux.', ["personnification","yeux","repos","regard","obsession","animation"]),
      att('Registre lyrique', '« celle que j\'aime »', 'Le registre lyrique de la déclaration (« celle que j\'aime ») ancre la subjectivité renaissante.', ["lyrique","aime","déclaration","subjectivité","renaissance","amour"])
    ],
  },
  'GT-140': {
    texte: `Je suis né dans une famille de sonneurs de cloches, et j'ai toujours entendu le son des cloches. Mon père sonnait, mon grand-père sonnait, mes oncles sonnaient ; et moi, dès l'enfance, je courais derrière eux dans les clochers, écoutant les volées, comptant les coups, apprenant les rythmes sacrés et profanes. Le son des cloches, c'était ma langue maternelle ; c'était la voix de mon pays, la mémoire de mes ancêtres, la musique de mon âme.`,
    contexte: "Incipit des Maîtres sonneurs — roman champêtre de Sand ; tradition, musique et mémoire autobiographique.",
    attendus: [
      att('Anaphore', '« Mon père sonnait, mon grand-père sonnait, mes oncles sonnaient »', 'L\'anaphore généalogique enracine le narrateur dans une tradition artisanale.', ["anaphore","sonnait","famille","tradition","généalogie","répétition"]),
      att('Champ lexical', '« sonneurs de cloches, et j\'ai toujours entendu le son des cloches »', 'Le champ lexical des cloches et du son structure l\'identité du narrateur — musique et mémoire.', ["champ lexical","cloches","son","musique","tradition","identité"]),
      att('Métaphore', '« ma langue maternelle »', 'Le son des cloches métaphorisé en « langue maternelle » : la musique remplace la parole originelle.', ["métaphore","langue","maternelle","musique","origine","identité"]),
      att('Registre lyrique', '« la musique de mon âme »', 'Le registre lyrique conclut l\'incipit : subjectivité et nostalgie d\'un monde rural disparu.', ["lyrique","musique","âme","nostalgie","champêtre","sand"])
    ],
  },
  'GT-141': {
    texte: `J'ai toujours suspecté les ethnographes et les linguistes lorsqu'ils reviennent d'un voyage aux Indes ou au Mexique. Ils ont l'air si satisfaits d'eux-mêmes, si convaincus d'avoir découvert quelque chose d'essentiel, si persuadés que leur savoir est supérieur à celui des gens qu'ils ont étudiés. Moi, j'ai passé une partie de ma vie en Andalousie, et j'ai appris à méfier des généralités. Les Ciganiers, par exemple, sont un peuple étrange : on ne les comprend jamais tout à fait, et c'est peut-être pour cela qu'on les craint.`,
    contexte: "Incipit de Carmen — narrateur sceptique ; exotisme, réalisme et registre satirique chez Mérimée.",
    attendus: [
      att('Registre satirique', '« J\'ai toujours suspecté les ethnographes »', 'Le narrateur moque le savoir officiel des ethnographes : satire de l\'exotisme académique.', ["satirique","ethnographes","moquerie","savoir","exotisme","ironie"]),
      att('Antiphrase', '« suspecté »', 'Le « suspecté » positive ironiquement le doute du narrateur face aux certitudes des savants.', ["antiphrase","suspecté","doute","ironie","scepticisme","lucidité"]),
      att('Registre didactique', '« j\'ai appris à méfier des généralités »', 'Le registre didactique affirme une leçon d\'expérience : Mérimée prône la prudence narrative.', ["didactique","généralités","leçon","expérience","prudence","récit"]),
      att('Focalisation interne', '« Moi, j\'ai passé »', 'La focalisation sur le « je » narrateur installe une subjectivité sceptique dès l\'incipit.', ["focalisation","interne","moi","narrateur","subjectivité","sceptique"])
    ],
  },
  'GT-142': {
    texte: `Le ciel, d'un bleu profond, semblait plus lourd et plus étendu ; les palmiers se penchaient mollement ; et des flammes sortaient des temples. Les convives, étendus sur des coussins, mangeaient, buvaient, riaient. Les esclaves circulaient avec des plateaux d'or ; les musiciens jouaient des flûtes ; les danseuses se tordaient sous les regards des hommes. Et Salammbô, debout sur une estrade, regardait la fête sans y participer, immobile, splendide, inaccessible.`,
    contexte: "Banquet de Carthage — roman historique de Flaubert ; style précieux, registre épique et descriptif.",
    attendus: [
      att('Personnification', '« Le ciel, d\'un bleu profond, semblait plus lourd »', 'Le ciel personnifié « lourd » crée une atmosphère oppressante propre à l\'Orient flaubertien.', ["personnification","ciel","lourd","atmosphère","orient","oppression"]),
      att('Registre épique', '« des flammes sortaient des temples »', 'Le registre épique décrit un banquet grandiose : Carthage, temples, splendeur orientale.', ["épique","temples","flammes","carthage","grandeur","banquet"]),
      att('Champ lexical', '« palmiers se penchaient mollement »', 'Le champ lexical exotique (palmiers, flammes, coussins) construit un décor historique précieux.', ["champ lexical","palmiers","flammes","exotisme","décors","orient"]),
      att('Antithèse', '« regardait la fête sans y participer »', 'L\'antithèse participation / retrait isole Salammbô : figure sacrée au milieu de la débauche.', ["antithèse","fête","participer","immobile","salammbô","isolement"])
    ],
  },
  'GT-143': {
    texte: `Télémaque, fils d'Ulysse, errait depuis longtemps sur les mers, cherchant son père, et ne trouvant que des dangers et des déceptions. Il aborda sur une île où demeurait Calypso, nymphe immortelle, qui l'accueillit avec bonté et lui offrit l'immortalité s'il consentait à rester auprès d'elle. Mais Télémaque, fidèle à son devoir, refusa les charmes de la déesse et poursuivit sa quête, car il savait que le fils doit honorer son père et que la vertu vaut mieux que le plaisir.`,
    contexte: "Télémaque chez Calypso — roman moral de Fénelon ; éducation du prince et allégorie politique.",
    attendus: [
      att('Métaphore', '« errait depuis longtemps sur les mers, cherchant son père »', 'L\'errance métaphorise la quête initiatique : Télémaque apprend la vertu par l\'épreuve.', ["métaphore","errait","père","quête","initiation","allégorie"]),
      att('Antithèse', '« dangers et des déceptions »', 'L\'antithèse dangers / déceptions structure le parcours éducatif du jeune prince.', ["antithèse","dangers","déceptions","épreuve","initiation","contraste"]),
      att('Registre didactique', '« le fils doit honorer son père »', 'Le registre didactique affirme une leçon morale : vertu, devoir filial et refus du plaisir.', ["didactique","père","honneur","vertu","morale","éducation"]),
      att('Champ lexical', '« dangers et des déceptions »', 'Le champ lexical du voyage (mers, dangers, île) ancre le récit dans l\'épopée homérique moralisée.', ["champ lexical","mers","dangers","voyage","odyssée","épreuve"])
    ],
  },
  'GT-144': {
    texte: `Mon paroisse est pauvre. Mon presbytère est froid. J'ai du mal à me chauffer l'hiver. On m'appelle le curé de Torcy. Je suis jeune, et pourtant je me sens vieux. Les paysans me regardent avec méfiance ; les notables me méprisent ; les enfants me fuient. Et pourtant j'aime ces gens-là. Je les aime malgré tout, malgré eux, malgré moi. Car c'est mon devoir, et c'est aussi ma joie secrète. Et pourtant je reste, parce que c'est mon devoir et ma joie secrète.`,
    contexte: "Journal du curé de campagne — Bernanos ; misère, foi et solitude dans l\'écriture intime.",
    attendus: [
      att('Anaphore', '« Mon paroisse est pauvre. Mon presbytère est froid »', 'L\'anaphore sur « Mon » accumule les privations matérielles — misère concrète du prêtre.', ["anaphore","mon","pauvre","froid","accumulation","misère"]),
      att('Antithèse', '« Je suis jeune, et pourtant je me sens vieux »', 'L\'antithèse jeune / vieux traduit l\'épuisement spirituel du curé — pathétique et foi.', ["antithèse","jeune","vieux","épuisement","contraste","solitude"]),
      att('Registre pathétique', '« les enfants me fuient »', 'Le rejet des enfants suscite la pitié : solitude du prêtre dans un monde hostile.', ["pathétique","fuient","solitude","pit","prêtre","rejet"]),
      att('Registre lyrique', '« ma joie secrète »', 'La « joie secrète » révèle la dimension lyrique de la foi malgré la souffrance.', ["lyrique","joie","secrète","foi","amour","secret"])
    ],
  },
  'GT-145': {
    texte: `Je vous écris, mon cher enfant, pour vous dire que je vous hais. Oui, je vous hais, et je ne me sens pas le moindre remords. Je vous hais comme je hais votre mère, comme je hais votre oncle, comme je hais toute cette famille de vipères qui m'a rongé le cœur pendant cinquante ans. Je vous hais parce que vous êtes leur fils, parce que vous portez leur nom, parce que vous continuerez ce que eux ont commencé.`,
    contexte: "Lettre testamentaire du Nœud de vipères — Mauriac ; haine familiale et registre pathétique.",
    attendus: [
      att('Apostrophe', '« mon cher enfant, pour vous dire que je vous hais »', 'L\'apostrophe « mon cher enfant » contrastée avec « je vous hais » crée une antiphrase dramatique.', ["apostrophe","cher","enfant","hais","contraste","lettre"]),
      att('Métaphore', '« famille de vipères »', 'La métaphore des vipères condense cinquante ans de jalousie et de venin familial.', ["métaphore","vipères","famille","haine","venin","rongé"]),
      att('Registre pathétique', '« je vous hais »', 'La déclaration de haine suscite terreur et pitié : registre pathétique de la lettre testamentaire.', ["pathétique","hais","haine","terreur","pit","famille"]),
      att('Litote', '« pas le moindre remords »', 'La litote « pas le moindre remords » affirme une dureté totale du personnage.', ["litote","remords","absence","dureté","personnage","total"])
    ],
  },
  'GT-146': {
    texte: `Le village était mort. Les maisons restaient debout, mais il n'y avait plus personne pour les habiter. Les toits s'effondraient, les portes claquaient au vent, les rues se couvraient d'herbes. Les vieux partaient mourir ailleurs ; les jeunes s'en allaient à la ville. Et pourtant, un jour, un homme revint. Il avait des mains calleuses et un regard qui savait regarder la terre. Il s'installa, il travailla, il planta. Et lentement, très lentement, le village reprit vie.`,
    contexte: "Regain de Giono — roman rural ; désertification, renaissance et poésie de la terre.",
    attendus: [
      att('Personnification', '« Le village était mort »', 'Le village personnifié en mort traduit la désertification rurale — métaphore de l\'abandon.', ["personnification","village","mort","désertification","abandon","rural"]),
      att('Antithèse', '« Les maisons restaient debout, mais il n\'y avait plus personne »', 'L\'antithèse maisons debout / absence d\'habitants souligne la déréliction du pays.', ["antithèse","debout","personne","déréliction","contraste","vide"]),
      att('Registre pathétique', '« il n\'y avait plus personne »', 'L\'absence humaine suscite la pitié : registre pathétique de la désertification.', ["pathétique","personne","solitude","pit","abandon","terre"]),
      att('Registre lyrique', '« le village reprit vie »', 'La renaissance lyrique du village célèbre le lien entre l\'homme et la terre — poésie gionoienne.', ["lyrique","revit","renaissance","terre","espoir","giono"])
    ],
  },
  'GT-147': {
    texte: `— La vérité, c'est que j'en ai marre d'être une gamine, dit Zazie. — Et tu veux quoi ? — Je veux être une femme. — Une femme, c'est quoi ? — C'est quelqu'un qui peut dire merde sans qu'on lui dise de se taire. — Et c'est tout ? — Non, c'est aussi quelqu'un qui peut monter dans le métro sans qu'on lui demande où elle va. — Et tu sais où tu vas ? — Non, justement. C'est ça, être une femme : savoir qu'on ne sait pas.`,
    contexte: "Zazie dans le métro — langage oral, comique et Paris populaire ; néo-réalisme queneauien.",
    attendus: [
      att('Dialogue', '« dit Zazie »', 'Le dialogue en langue parlée installe le registre populaire et comique dès l\'incipit.', ["dialogue","zazie","oral","répliques","comique","populaire"]),
      att('Registre comique', '« j\'en ai marre d\'être une gamine »', 'Le registre comique naît du décalage entre l\'aspiration adulte et l\'innocence de Zazie.', ["comique","gamines","décalage","humour","enfance","queneau"]),
      att('Antithèse', '« gamine »', 'L\'opposition gamine / femme structure la quête initiatique parodique de Zazie.', ["antithèse","gamines","femme","initiation","contraste","aspiration"]),
      att('Paradoxe', '« savoir qu\'on ne sait pas »', 'Le paradoxe final définit la « femme » par l\'ignorance assumée — philosophie populaire queneauienne.', ["paradoxe","savoir","ignorance","femme","liberté","philosophie"])
    ],
  },
  'GT-148': {
    texte: `Elsa, tes yeux d'azur, vos yeux d'azur, vos yeux d'azur,
Elsa, vos yeux d'azur, vos yeux d'azur, vos yeux d'azur.
Elsa, vos yeux d'azur, vos yeux d'azur, vos yeux d'azur,
Elsa, vos yeux d'azur, vos yeux d'azur, vos yeux d'azur.
Elsa, vos yeux d'azur, vos yeux d'azur, vos yeux d'azur,
Elsa, vos yeux d'azur, vos yeux d'azur, vos yeux d'azur.

Elsa, tes yeux d'azur éclairent la nuit. Elsa, vos yeux d'azur, vos yeux d'azur, vos yeux d'azur.`,
    contexte: "Poème de la Résistance — Aragon célèbre Elsa ; amour et engagement, anaphore incantatoire.",
    attendus: [
      att('Anaphore', '« Elsa, vos yeux d\'azur »', 'L\'anaphore incantatoire martèle le refrain amoureux — poésie de la Résistance et lyrisme engagé.', ["anaphore","elsa","yeux","azur","incantation","répétition"]),
      att('Apostrophe', '« Elsa, tes yeux »', 'L\'apostrophe à Elsa personnifie l\'amour et l\'espoir au cœur de la guerre.', ["apostrophe","elsa","yeux","amour","bien-aimée","adresse"]),
      att('Champ lexical', '« yeux d\'azur »', 'Le champ lexical de la couleur (azur) symbolise l\'espoir et la pureté dans l\'obscurité de l\'Occupation.', ["champ lexical","yeux","azur","couleur","espoir","symbolisme"]),
      att('Registre lyrique', '« tes yeux d\'azur »', 'Le registre lyrique domine : célébration amoureuse mêlée à l\'engagement politique.', ["lyrique","azur","amour","résistance","célébration","engagement"])
    ],
  },
  'GT-149': {
    texte: `J'ai tant rêvé de toi que tu perds ta réalité.
Est-il encore temps d'atteindre ce corps vivant
Et de baiser ta bouche qui n'est plus la tienne ?
J'ai tant rêvé de toi que tu perds ta réalité.
Et si l'on te touchait, tu ne sentirais peut-être rien.
J'ai tant rêvé de toi que tu perds ta réalité.
Peut-être n'es-tu plus qu'un rêve, et mon amour une illusion.

Peut-être n'es-tu plus qu'un rêve, et mon amour une illusion.`,
    contexte: "Poème surréaliste de Desnos — rêve, amour et frontière entre réel et imaginaire.",
    attendus: [
      att('Hyperbole', '« J\'ai tant rêvé de toi »', 'L\'hyperbole « tant rêvé » pousse l\'amour jusqu\'à abolir la réalité de l\'aimée — surréalisme.', ["hyperbole","rêvé","exagération","amour","surréal","intensité"]),
      att('Antithèse', '« tu perds ta réalité »', 'L\'antithèse rêve / réalité structure le poème : frontière effacée entre onirique et vécu.', ["antithèse","rêvé","réalité","frontière","onirique","contraste"]),
      att('Anaphore', '« J\'ai tant rêvé de toi »', 'L\'anaphore du refrain crée une lenteur hypnotique propre à la poésie surréaliste.', ["anaphore","rêvé","répétition","refrain","hypnose","surréal"]),
      att('Conditionnel', '« tu ne sentirais peut-être rien »', 'Le conditionnel exprime le doute existentiel : l\'aimée est-elle encore tangible ?', ["conditionnel","sentirais","doute","existence","incertitude","amour"])
    ],
  },
  'GT-150': {
    texte: `En ce temps-là j'étais un adolescent, j'avais vingt ans, j'avais vingt ans et j'habitais la rue de la Santé, à Paris, près du cimetière Montparnasse. En ce temps-là je voyageais beaucoup. J'ai connu des hommes qui n'avaient plus de patrie, des femmes qui n'avaient plus de corps, des enfants qui n'avaient plus de père. J'ai vu des villes brûler, des trains dérailler, des bateaux couler. Et j'ai écrit ce poème pour dire que la vie est belle malgré tout.`,
    contexte: "Prose du Transsibérien — modernité cendrarrienne ; voyage, guerre, collage épique et lyrique.",
    attendus: [
      att('Anaphore', '« En ce temps-là »', 'L\'anaphore temporelle structure le récit comme un souvenir — modernité et mémoire.', ["anaphore","temps","répétition","souvenir","mémoire","récit"]),
      att('Énumération', '« des hommes qui n\'avaient plus de patrie, des femmes qui n\'avaient plus de corps, des enfants qui n\'avaient plus de père »', 'L\'énumération des perdus (patrie, corps, père) peint l\'horreur de la guerre moderne.', ["énumération","hommes","femmes","enfants","guerre","perte"]),
      att('Registre épique', '« des villes brûler, des trains dérailler »', 'Le registre épique élève le voyage personnel au niveau de l\'histoire mondiale.', ["épique","villes","trains","guerre","grandeur","voyage"]),
      att('Registre lyrique', '« la vie est belle malgré tout »', 'La conclusion lyrique affirme une joie obstinée face à la destruction — modernité cendrarrienne.', ["lyrique","vie","belle","espoir","modernité","cendrars"])
    ],
  }
};
