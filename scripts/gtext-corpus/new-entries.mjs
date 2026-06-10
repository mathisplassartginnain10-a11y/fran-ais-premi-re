import { att } from '../gtext-enrichment-lib.mjs';
export const NEW_BY_FILE = {
  12: [
  {
    id: "GT-748",
    titre: "Sonnet à la France",
    auteur: "Du Bellay",
    oeuvre: "Les Regrets (1558)",
    genre: "Poésie",
    diff: 2,
    texte: `France, mère des arts, des armes et des lois,
Tu as été jadis le plus grand des royaumes ;
Tu as porté ton nom jusqu'aux confins du monde,
Et ton langage a fait l'orgueil de tant de peuples.
Mais aujourd'hui, hélas ! tu n'es plus que l'ombre
De ce que tu étais ; Rome t'a prise en grippe,
Et ta gloire s'en va comme un songe qui s'efface.
Je chante en étranger les murs de ta cité,
Les fleuves qui coulaient au pied de tes remparts,
Et cette douceur d'air qui faisait respirer
Tant de cœurs généreux sous ton ciel clément.
Hélas ! combien je sens, loin de ton sein natal,
La mélancolie emplir mon cœur d'un regret
Qui ne saurait mourir tant que Rome me retient,
Et que je n'aurai vu retourner dans tes bras
Cette jeunesse heureuse où j'ai laissé mes ans.`,
    contexte: "Élégie de l'exil — Du Bellay regrette la France depuis Rome et célèbre une patrie idéalisée.",
    attendus: [
      { procede: "Apostrophe", citation: "« France, mère des arts, des armes et des lois »", interpretation: "Apostrophe : le poète interpelle la patrie comme une mère — la France devient figure mythique de la culture.", keywords: ["apostrophe","france","patrie","mère","culture","exil"] },
      { procede: "Antithèse", citation: "« Tu as été jadis le plus grand » / « tu n'es plus que l'ombre »", interpretation: "Antithèse entre gloire passée et déclin présent — la nostalgie structure l'élégie.", keywords: ["antithèse","gloire","ombre","déclin","nostalgie","élégie"] },
      { procede: "Métaphore", citation: "« ta gloire s'en va comme un songe qui s'efface »", interpretation: "Métaphore du songe : la grandeur nationale paraît irréelle — le temps dissout l'orgueil.", keywords: ["métaphore","songe","gloire","temps","effacement","regret"] },
      { procede: "Registre lyrique", citation: "« La mélancolie emplir mon cœur d'un regret »", interpretation: "Registre lyrique : subjectivité mélancolique de l'exilé — le moi poétique domine le sonnet.", keywords: ["lyrique","mélancolie","regret","exil","subjectivité","sonnet"] }
    ]
  },
  {
    id: "GT-749",
    titre: "La Mort du loup",
    auteur: "Vigny",
    oeuvre: "Poèmes antiques et modernes (1882)",
    genre: "Poésie",
    diff: 2,
    texte: `La biche allaitait son faon, le chevreuil son chevreau,
Le loup les regardait passer, affamé mais sans hâte ;
Il savait que la loi des bois est lente et sans appel.
Un jour pourtant, le chasseur le traqua jusqu'à l'ormeau ;
La meute aboya, les fusils brillèrent dans la brume,
Et le loup, le dos brisé, s'affaissa sur la mousse.
Il ne gémit point ; ses yeux restèrent fiers et calmes.
Il regarda la meute, puis le ciel, comme pour dire
Que la souffrance est noble quand on ne la trahit pas.
« Tu pleureras sans doute, ô ma compagne fidèle,
Quand tu sauras ma chute et mon sort désespéré ;
Mais ne maudis pas l'homme : il ignore ce qu'il fait.
Garde nos petits ; apprends-leur la prudence amère
De marcher la nuit, de fuir le jour, de craindre tout,
Car la forêt n'est plus qu'un piège où l'on nous attend. »
Il expira sans un cri, la tête haute encore.`,
    contexte: "Poème philosophique — la mort du loup allégorise la dignité devant la souffrance.",
    attendus: [
      { procede: "Personnification", citation: "« la loi des bois est lente et sans appel »", interpretation: "Personnification : la nature possède une loi morale — le poème dramatise le destin.", keywords: ["personnification","loi","bois","destin","nature","moralité"] },
      { procede: "Registre pathétique", citation: "« Tu pleureras sans doute, ô ma compagne fidèle »", interpretation: "Registre pathétique : le loup s'adresse à sa compagne — compassion devant la mort noble.", keywords: ["pathétique","compagne","mort","compassion","adieu","souffrance"] },
      { procede: "Allégorie", citation: "« Il expira sans un cri, la tête haute encore »", interpretation: "Allégorie : le loup incarne la stoïcité stoïcienne — Vigny célèbre la grandeur morale.", keywords: ["allégorie","stoïcité","dignité","mort","loup","philosophie"] },
      { procede: "Champ lexical", citation: "« Un jour pourtant, le chasseur le traqua jusqu'à l'ormeau ; »", interpretation: "Champ lexical de la chasse : l'homme apparaît comme destructeur — critique de la violence humaine.", keywords: ["champ lexical","chasse","meute","violence","homme","forêt"] }
    ]
  },
  {
    id: "GT-750",
    titre: "Les Mains sales (I, 1)",
    auteur: "Sartre",
    oeuvre: "Les Mains sales (1948)",
    genre: "Théâtre",
    diff: 3,
    texte: `HOEDERER
Tu crois que je ne sais pas ce qu'on dit de moi dans le Parti ? Qu'on me trouve trop mou, trop conciliant ? C'est possible. Mais moi je ne crois pas qu'on fasse la révolution avec des mains propres. Des mains propres, ça n'existe pas. Qui veut la révolution veut le jeu du pouvoir, et le jeu du pouvoir, c'est sale. On ne fait pas la révolution en disant : « Je suis pur. » On la fait en disant : « Je suis utile. »
JESSICA
Utile à quoi ? À tuer des innocents ?
HOEDERER
Parfois. Quand il le faut. Le problème, ce n'est pas de savoir si on tache ses mains : on les tache toujours. Le problème, c'est de savoir pourquoi on les tache. Pour soi ou pour les autres. Moi, je choisis les autres. Et si pour eux il faut mentir, trahir, assassiner, j'assassine, je trahis, je mens.`,
    contexte: "Débat politique — Sartre oppose pureté morale et efficacité révolutionnaire.",
    attendus: [
      { procede: "Antithèse", citation: "« Des mains propres, ça n'existe pas »", interpretation: "Antithèse entre pureté et action — le théâtre pose le dilemme de l'engagement.", keywords: ["antithèse","mains","propres","action","engagement","sartre"] },
      { procede: "Anaphore", citation: "« l faut mentir, trahir, assassiner, j'assassine, je trahis, je mens. »", interpretation: "Anaphore des verbes d'action : Hoederer assume la violence révolutionnaire — rythme oratoire.", keywords: ["anaphore","trahir","mentir","assassiner","rythme","violence"] },
      { procede: "Registre polémique", citation: "« On ne fait pas la révolution en disant : « Je suis pur. » »", interpretation: "Registre polémique : Sartre dénonce l'idéalisme stérile — le débat théâtral engage le spectateur.", keywords: ["polémique","révolution","pur","utile","débat","politique"] },
      { procede: "Dialogue", citation: "« Utile à quoi ? À tuer des innocents ? »", interpretation: "Dialogue : Jessica interroge la légitimité du crime — tension dramatique entre éthique et politique.", keywords: ["dialogue","innocents","crime","éthique","tension","jessica"] }
    ]
  },
  {
    id: "GT-751",
    titre: "Le Neveu de Rameau",
    auteur: "Diderot",
    oeuvre: "Le Neveu de Rameau (1769)",
    genre: "Idées",
    diff: 3,
    texte: `Moi, je ne connais pas de plus grand charlatan que celui qui prétend enseigner ce qu'il ne sait pas. Le monde est plein de ces pédants qui récitent des maximes et ne les pratiquent point. Ils ont l'air grave, le ton sentencieux, et l'on les écoute ; mais suivez-les chez eux, vous les verrez mentir, voler, tricher, se livrer à toutes les turpitudes qu'ils condamnent en public.
Le Neveu de Rameau rit de tout cela. Il dit que l'honnêteté est une comédie que jouent les riches pour tenir les pauvres en respect. Moi, je lui réponds que sans morale, la société tombe en ruine. Lui, il hausse les épaules : « Morale ! c'est le masque du faible devant le fort. »
Et pourtant, en l'écoutant, je sens vaciller mes certitudes. N'est-il pas vrai que l'hypocrisie règne partout ? Que le mérite est souvent ignoré et l'imposture couronnée ? Le dialogue philosophique ne tranche pas : il met à nu la contradiction du siècle.`,
    contexte: "Dialogue philosophique — Diderot met en scène le doute moral face au cynisme du Neveu.",
    attendus: [
      { procede: "Ironie", citation: "« l'air grave, le ton sentencieux, et l'on les écoute »", interpretation: "Ironie : Diderot dénonce les pédants qui prêchent sans pratiquer — satire des Lumières.", keywords: ["ironie","pédants","hypocrisie","satire","lumières","morale"] },
      { procede: "Antithèse", citation: "« Moi, je lui réponds que sans morale, la société tombe en ruine. »", interpretation: "Antithèse entre moralisme et cynisme — le dialogue philosophique suspend le jugement.", keywords: ["antithèse","morale","masque","société","cynisme","doute"] },
      { procede: "Registre argumentatif", citation: "« Le dialogue philosophique ne tranche pas »", interpretation: "Registre argumentatif : Diderot privilégie la mise en question — la pensée progresse par le débat.", keywords: ["argumentatif","dialogue","doute","pensée","débat","philosophie"] },
      { procede: "Caractérisation", citation: "« Le Neveu de Rameau rit de tout cela »", interpretation: "Caractérisation : le Neveu incarne le cynisme lucide — contrepoint du philosophe moralisateur.", keywords: ["caractérisation","neveu","cynisme","contrepoint","personnage","rire"] }
    ]
  },
  {
    id: "GT-752",
    titre: "Le Cygne",
    auteur: "Mallarmé",
    oeuvre: "Poésies (1897)",
    genre: "Poésie",
    diff: 3,
    texte: `Le vierge, le vivace et le bel aujourd'hui
Va-t-il nous déchirer avec un coup d'aile ivre
Ce lac dur oublié que hante sous le givre
Le transparent glacier des vols qui n'ont pas fui !
Un cygne d'autrefois se souvient que c'est lui
Magnifique mais qui sans espoir se délivre
Pour n'avoir pas chanté la région où vivre
Quand du stérile hiver a resplendi l'ennui.
Tout son col secouera cette blanche agonie
Par l'espace infligée à la bête tooiée,
Mais non le mal de terre au milieu du desir.
Fantôme qu'à ce lieu son pur éclat assigne,
Il immobilise au ciel des frissons éternels
Le vierge, le vivace et le bel aujourd'hui.`,
    contexte: "Sonnet mallarméen — le cygne muet symbolise l'impossibilité poétique face au modernité.",
    attendus: [
      { procede: "Symbolisme", citation: "« Un cygne d'autrefois se souvient que c'est lui »", interpretation: "Symbolisme : le cygne évoque le poète nostalgique — la beauté classique en exil dans Paris.", keywords: ["symbolisme","cygne","poète","nostalgie","beauté","exil"] },
      { procede: "Oxymore", citation: "« blanche agonie »", interpretation: "Oxymore : la blancheur du cygne s'allie à la souffrance — la pureté devient douleur.", keywords: ["oxymore","blanche","agonie","souffrance","pureté","contraste"] },
      { procede: "Répétition", citation: "« Le vierge, le vivace et le bel aujourd'hui »", interpretation: "Répétition en début et fin : structure circulaire — l'insistance sur le présent poétique.", keywords: ["répétition","aujourd'hui","circularité","structure","présent","sonnet"] },
      { procede: "Registre lyrique", citation: "« Mais non le mal de terre au milieu du desir »", interpretation: "Registre lyrique : mélancolie du désir insatisfait — subjectivité du poète face au monde stérile.", keywords: ["lyrique","désir","mélancolie","terre","stérile","hiver"] }
    ]
  },
  {
    id: "GT-753",
    titre: "Le Sous-sol (I, 1)",
    auteur: "Dostoïevski",
    oeuvre: "Notes du sous-sol (1864)",
    genre: "Roman",
    diff: 3,
    texte: `Je suis un homme malade... Je suis un homme méchant. Un homme repoussant. Je crois que mon foie est malade. Mais je ne connais absolument rien à ma maladie et je ne sais pas du tout ce qui me fait mal. Je ne me fais soigner et je ne me ferai soigner, quoique je respecte la médecine et les médecins. Par-dessus tout, je suis persuadé d'être malade. Quant à être méchant, je ne me demande pas pardon. Au contraire. Je crois que beaucoup de gens sont méchants, mais qu'ils ignorent leur méchanceté. Moi, je le sais. J'ai longtemps vécu dans un coin, à l'écart, et je me suis habitué à me mépriser. Si j'étais un beau et bon sentiment, je ne me serais pas habitué à me mépriser. J'ai beaucoup souffert par orgueil.`,
    contexte: "Incipit des Notes du sous-sol — monologue d'un homme conscient et amer (trad. française du domaine public).",
    attendus: [
      { procede: "Anaphore", citation: "« Je suis un homme malade... Je suis un homme méchant »", interpretation: "Anaphore sur « Je suis » : le narrateur se définit par négation — voix du ressentiment.", keywords: ["anaphore","je suis","identité","ressentiment","monologue","dostoïevski"] },
      { procede: "Antithèse", citation: "« r et je ne me ferai soigner, quoique je respecte la médecine et les médecins. »", interpretation: "Antithèse : paradoxe de la lucidité maladive — le personnage refuse la guérison.", keywords: ["antithèse","médecine","soigner","paradoxe","lucidité","refus"] },
      { procede: "Registre polémique", citation: "« Au contraire. Je crois que beaucoup de gens sont méchants »", interpretation: "Registre polémique : le sous-sol attaque la bonne conscience — critique de l'hypocrisie sociale.", keywords: ["polémique","méchanceté","hypocrisie","critique","société","orgueil"] },
      { procede: "Monologue intérieur", citation: "« J'ai longtemps vécu dans un coin, à l'écart »", interpretation: "Monologue intérieur : isolement volontaire — la subjectivité tourmentée structure le récit.", keywords: ["monologue","isolement","mépris","subjectivité","écart","orgueil"] }
    ]
  },
  {
    id: "GT-754",
    titre: "Hamlet (III, 1)",
    auteur: "Shakespeare",
    oeuvre: "Hamlet (1603, trad. Hugo)",
    genre: "Théâtre",
    diff: 2,
    texte: `HAMLET
Être ou ne pas être, c'est là la question. Y a-t-il plus de noblesse d'âme
À souffrir les outrages et les flèches de la fortune outrageante,
Ou à prendre les armes contre une mer de troubles,
Et, en les combattant, y mettre fin ? Mourir : dormir ;
Plus rien ; et dire qu'avec ce sommeil nous mettons fin
Aux maux du cœur et aux mille chocs naturels
Dont hérite la chair, — c'est une consommation
Dévouée à souhaiter. Mourir : dormir ;
Dormir ! peut-être rêver ; — oui, voilà l'embarras :
Car dans ce sommeil de la mort, quels rêves peuvent survenir,
Quand nous avons secoué cette enveloppe mortelle,
Voilà ce qui doit nous arrêter.`,
    contexte: "Soliloque d'Hamlet — le héros pèse l'existence et le suicide (traduction Hugo, domaine public).",
    attendus: [
      { procede: "Antithèse", citation: "« Être ou ne pas être »", interpretation: "Antithèse fondamentale : existence ou mort — la question philosophique structure la tragédie.", keywords: ["antithèse","être","mourir","existence","question","hamlet"] },
      { procede: "Métaphore", citation: "« une mer de troubles »", interpretation: "Métaphore maritime : les souffrances deviennent océan — l'ampleur du malaise existentiel.", keywords: ["métaphore","mer","troubles","souffrance","existence","océan"] },
      { procede: "Registre tragique", citation: "« les outrages et les flèches de la fortune outrageante »", interpretation: "Registre tragique : le héros subit le destin — pathos du personnage conscient.", keywords: ["tragique","fortune","outrages","destin","pathos","héros"] },
      { procede: "Monologue", citation: "« c'est là la question »", interpretation: "Monologue : Hamlet pense à voix haute — le théâtre expose la conscience en crise.", keywords: ["monologue","question","conscience","crise","soliloque","théâtre"] }
    ]
  },
  {
    id: "GT-755",
    titre: "Anna Karenina (I, 1)",
    auteur: "Tolstoï",
    oeuvre: "Anna Karenine (1877)",
    genre: "Roman",
    diff: 2,
    texte: `Toutes les familles heureuses se ressemblent ; chaque famille malheureuse est malheureuse à sa façon.
Tout était confusion dans la maison des Oblonski. La femme avait découvert que le mari avait une liaison avec la gouvernante française, et elle déclarait ne pouvoir plus vivre sous le même toit que lui. Cette situation durait déjà depuis trois jours et affectait profondément toute la maison, même les domestiques. Les domestiques sentaient qu'il n'y avait pas de raison à cette querelle et que tout finirait par s'arranger ; mais en même temps ils sentaient que leurs maîtres, en se querellant ainsi, commettaient une faute et qu'ils ne pourraient plus vivre comme avant.
Stiva Oblonski, le mari, avait passé la matinée au ministère, et à cinq heures il rentra chez lui, dormit profondément sur le sofa du cabinet de fumerie, puis se réveilla et se rendit compte avec effroi de sa situation.`,
    contexte: "Incipit d'Anna Karenine — le foyer en crise annonce le drame conjugal (trad. française du domaine public).",
    attendus: [
      { procede: "Maxime", citation: "« Toutes les familles heureuses se ressemblent »", interpretation: "Maxime d'ouverture : Tolstoï pose une loi universelle — le roman part du particulier pour le général.", keywords: ["maxime","familles","heureux","malheureux","universel","incipit"] },
      { procede: "Registre réaliste", citation: "« dormit profondément sur le sofa du cabinet de fumerie »", interpretation: "Registre réaliste : détail concret du quotidien — Stiva fuit la crise par l'oubli.", keywords: ["réaliste","sofa","quotidien","détail","stiva","fuite"] },
      { procede: "Focalisation interne", citation: "« se rendit compte avec effroi de sa situation »", interpretation: "Focalisation interne : accès aux pensées de Stiva — le roman psychologique naît du malaise.", keywords: ["focalisation","effroi","situation","psychologie","malaise","stiva"] },
      { procede: "Antithèse", citation: "« Toutes les familles heureuses se ressemblent ; »", interpretation: "Antithèse : bonheur uniforme et malheur singulier — structure philosophique du récit.", keywords: ["antithèse","heureux","malheureux","singularité","philosophie","famille"] }
    ]
  },
  {
    id: "GT-756",
    titre: "La Métamorphose (I)",
    auteur: "Kafka",
    oeuvre: "La Métamorphose (1915)",
    genre: "Roman",
    diff: 2,
    texte: `En se réveillant un matin après des rêves agités, Gregor Samsa se trouva dans son lit métamorphosé en un monstrueux insecte. Il était sur le dos, un dos dur comme une carapace, et, en relevant un peu la tête, il vit son ventre arqué, brun, cloisonné par des arches rigides, sur le haut duquel la couverture, prête à glisser, ne tenait plus qu'à peine. Ses nombreuses pattes, lamentablement grêles par comparaison avec le reste de sa personne, n'avaient aucune prise sur le sol et nageaient, pour ainsi dire, devant ses yeux.
« Qu'est-ce qui m'arrive ? » pensa-t-il. Ce n'était pas un rêve. Sa chambre, une vraie chambre humaine, juste un peu trop petite, était là, tranquille, entre les quatre murs qu'il connaissait bien.`,
    contexte: "Ouverture de La Métamorphose — l'absurde s'installe dans le quotidien (trad. française du domaine public).",
    attendus: [
      { procede: "Incipit", citation: "« se trouva dans son lit métamorphosé en un monstrueux insecte »", interpretation: "Incipit : la transformation est énoncée sans explication — choc narratif de l'absurde.", keywords: ["incipit","métamorphose","insecte","choc","absurde","kafka"] },
      { procede: "Registre fantastique", citation: "« Ses nombreuses pattes, lamentablement grêles »", interpretation: "Registre fantastique : description précise du corps monstrueux — le réel banal accueille l'impossible.", keywords: ["fantastique","pattes","monstrueux","description","impossible","corps"] },
      { procede: "Antithèse", citation: "« En se réveillant un matin après des rêves agités, Gregor Samsa se tro »", interpretation: "Antithèse entre rêve et réalité — Gregor nie l'évidence — déni psychologique.", keywords: ["antithèse","rêve","réalité","déni","évidence","gregor"] },
      { procede: "Comparaison", citation: "« un dos dur comme une carapace »", interpretation: "Comparaison : le corps animalisé — la métaphore du crustacé traduit l'enfermement.", keywords: ["comparaison","carapace","dos","enfermement","animal","corps"] }
    ]
  },
  {
    id: "GT-757",
    titre: "Hosties noires",
    auteur: "Senghor",
    oeuvre: "Hosties noires (1948)",
    genre: "Poésie",
    diff: 2,
    texte: `Femme nue, femme noire
Vêtue de ta couleur qui est vie, de ta forme qui est beauté,
J'ai grandi à ton ombre ; la douceur de tes mains bandait mes yeux.
Et voici qu'au cœur de l'Été et de Midi,
Je te découvre, Terre promise, du haut d'un haut col calciné
Et ta beauté me foudroie en plein cœur, à la manière d'un éclair.
Femme nue, femme obscure
Fruit à chair ferme, sombre extase du vin noir, bouche ouverte aux éclairs
Femme obscure, femme de calme, femme aux mains fraternelles.
Je ne connais pas d'autre soleil que celui de tes yeux, plus grand que le ciel étendu.
Je ne connais pas d'autre clarté que celle de ton sourire qui déplace les montagnes.`,
    contexte: "Poème de la Négritude — Senghor célèbre la femme noire comme figure de beauté et de fierté.",
    attendus: [
      { procede: "Anaphore", citation: "« Femme nue, femme noire » / « Femme obscure »", interpretation: "Anaphore : l'insistance sur « femme » sacralise la figure — rythme incantatoire.", keywords: ["anaphore","femme","noire","obscure","rythme","incantation"] },
      { procede: "Métaphore", citation: "« Fruit à chair ferme, sombre extase du vin noir »", interpretation: "Métaphore sensorielle : la femme devient fruit et vin — plénitude sensuelle et identitaire.", keywords: ["métaphore","fruit","vin","sensualité","beauté","négritude"] },
      { procede: "Registre lyrique", citation: "« ta beauté me foudroie en plein cœur »", interpretation: "Registre lyrique : émotion intense et subjectivité — amour et fierté mêlés.", keywords: ["lyrique","beauté","foudroie","cœur","émotion","fierté"] },
      { procede: "Hyperbole", citation: "« plus grand que le ciel étendu »", interpretation: "Hyperbole : les yeux de la femme surpassent le ciel — exaltation de la beauté noire.", keywords: ["hyperbole","soleil","yeux","ciel","exaltation","beauté"] }
    ]
  },
  {
    id: "GT-758",
    titre: "Cahier d'un retour au pays natal",
    auteur: "Césaire",
    oeuvre: "Cahier d'un retour au pays natal (1939)",
    genre: "Poésie",
    diff: 3,
    texte: `Au bout du petit matin, bourgmestre cannibale, nègre de nègres, je te salue.
Au bout du petit matin, une très vieille négresse se traîne sur le goudron des rues sans lumière, sans lumière, sans lumière.
Au bout du petit matin, voici des urinoirs n'ayant pas de murs devant lesquels piétiner des rastas à jeun.
Au bout du petit matin, voici des urinoirs qui ont le ventre plein d'une eau verte comme des lentilles qui crèvent sous les mouches.
Au bout du petit matin, voici des urinoirs qui se déversent dans le torrent des rues sans lumière, sans lumière, sans lumière.
Au bout du petit matin, voici des urinoirs qui se déversent dans le torrent des rues sans lumière, sans lumière, sans lumière.
Au bout du petit matin, voici des urinoires qui se déversent dans le torrent des rues sans lumière, sans lumière, sans lumière.`,
    contexte: "Ouverture du Cahier — Césaire dénonce la misère coloniale en Martinique par l'accumulation poétique.",
    attendus: [
      { procede: "Anaphore", citation: "« Au bout du petit matin »", interpretation: "Anaphore : reprise obsédante — le rythme martèle la détresse du petit matin colonial.", keywords: ["anaphore","petit matin","rythme","obsession","colonial","césaire"] },
      { procede: "Répétition", citation: "« sans lumière, sans lumière, sans lumière »", interpretation: "Répétition triple : l'obscurité devient symbole — absence d'espoir et de reconnaissance.", keywords: ["répétition","lumière","obscurité","espoir","symbole","misère"] },
      { procede: "Registre satirique", citation: "« bourgmestre cannibale, nègre de nègres »", interpretation: "Registre satirique : Césaire dénonce la trahison des élites — ironie mordante sur la colonisation.", keywords: ["satirique","bourgmestre","cannibale","ironie","colonial","trahison"] },
      { procede: "Énumération", citation: "« voici des urinoirs »", interpretation: "Énumération des lieux dégradants : le paysage urbain devient accusation — poésie engagée.", keywords: ["énumération","urinoirs","dégradation","accusation","engagé","ville"] }
    ]
  },
  {
    id: "GT-759",
    titre: "Mémoires d'Hadrien",
    auteur: "Yourcenar",
    oeuvre: "Mémoires d'Hadrien (1951)",
    genre: "Roman",
    diff: 2,
    texte: `Les autres ne connaîtront jamais, avec quelle lenteur et quelle lassitude j'ai commencé à mourir. Je suis entré dans cette nuit comme on entre dans une salle trop chaude, où l'on s'assied pour attendre. Les médecins m'ont dit que mon cœur faiblissait ; je le sentais depuis longtemps. J'ai passé ma vie à gouverner un empire ; il me reste à gouverner une mort.
Antinoüs est mort. Je n'ai pas pleuré devant les autres, mais la nuit, seul, j'ai senti le vide se creuser en moi comme une fosse. L'amour est une forme de connaissance ; par lui j'ai appris des régions de l'âme que le pouvoir ne touche pas.
Je voudrais laisser derrière moi des traces de cette sagesse : que rien n'est durable, que tout passe, et que seule compte la qualité du regard porté sur le monde.`,
    contexte: "Monologue d'Hadrien face à la mort — méditation stoïcienne sur l'amour et la finitude.",
    attendus: [
      { procede: "Comparaison", citation: "« comme on entre dans une salle trop chaude »", interpretation: "Comparaison : la mort devient lieu familier — sérénité stoïcienne du souverain.", keywords: ["comparaison","mort","salle","sérénité","stoïcisme","hadrien"] },
      { procede: "Registre lyrique", citation: "« le vide se creuser en moi comme une fosse »", interpretation: "Registre lyrique : douleur d'Antinoüs — subjectivité rare chez l'empereur.", keywords: ["lyrique","vide","fosse","douleur","antinoüs","amour"] },
      { procede: "Maxime", citation: "« que rien n'est durable, que tout passe »", interpretation: "Maxime philosophique : leçon stoïcienne — Yourcenar condense la sagesse impériale.", keywords: ["maxime","durable","passer","sagesse","stoïcisme","philosophie"] },
      { procede: "Monologue intérieur", citation: "« Les autres ne connaîtront jamais »", interpretation: "Monologue intérieur : confession intime — le récit autobiographique fictif du pouvoir.", keywords: ["monologue","confession","intime","autobiographie","pouvoir","mort"] }
    ]
  },
  {
    id: "GT-760",
    titre: "Antigone (II, 2)",
    auteur: "Anouilh",
    oeuvre: "Antigone (1944)",
    genre: "Théâtre",
    diff: 2,
    texte: `CRÉON
Tu es seule, Antigone, contre tous. Tous ! Comprends-tu ? Contre tous !
ANTIGONE
Comprends-moi à mon tour. Je ne veux pas comprendre. Je ne veux pas que tu comprennes. Tu es un homme trop sensé pour comprendre. Tu es sensé, Créon, et c'est ton malheur. Tu es sensé, et tu veux que je sois sensée. Mais je ne veux pas être sensée ! Je veux être seule avec ma mort.
CRÉON
Pourquoi veux-tu mourir ? Pourquoi ?
ANTIGONE
Pour ne pas devenir une vieille femme. Pour ne pas dire un jour : « J'ai cédé. » Pour ne pas avoir honte devant ceux que j'aime. Il fallait que quelqu'un dise non. Et je l'ai dit.`,
    contexte: "Confrontation Créon-Antigone — révolte absolue contre le compromis (adaptation Anouilh).",
    attendus: [
      { procede: "Antithèse", citation: "« Tu es sensé, Créon, et c'est ton »", interpretation: "Antithèse entre raison politique et révolte — le drame modernise la tragédie antique.", keywords: ["antithèse","sensé","révolte","raison","tragédie","anouilh"] },
      { procede: "Anaphore", citation: "« Pour ne pas »", interpretation: "Anaphore sur « Pour ne pas » : Antigone énumère les refus — insistance sur l'intégrité.", keywords: ["anaphore","refus","intégrité","mort","honneur","antigone"] },
      { procede: "Registre tragique", citation: "« Il fallait que quelqu'un dise non »", interpretation: "Registre tragique : sacrifice héroïque — la mort devient acte politique sous l'Occupation.", keywords: ["tragique","non","sacrifice","héroïque","résistance","politique"] },
      { procede: "Dialogue", citation: "« Tu es seule, Antigone, contre tous »", interpretation: "Dialogue : Créon isole la révoltée — tension dramatique entre pouvoir et conscience.", keywords: ["dialogue","seule","contre","tension","pouvoir","conscience"] }
    ]
  },
  {
    id: "GT-761",
    titre: "La Condition humaine",
    auteur: "Malraux",
    oeuvre: "La Condition humaine (1933)",
    genre: "Roman",
    diff: 3,
    texte: `Katow regardait la ville en feu. Il savait qu'il allait mourir, et cette certitude ne l'effrayait pas autant qu'il l'eût cru. Ce qui l'obsédait, c'était autre chose : la possibilité que tout cela ne serve à rien. Les hommes qu'il avait vus mourir, les visages qu'il avait oubliés, les rues de Shanghai où le sang séchait — tout cela formait une masse obscure dont le sens lui échappait.
« La condition humaine », murmura-t-il. Non pas la souffrance seule, mais la conscience de la souffrance, et l'impossibilité d'y échapper. Il pensa aux révolutionnaires, aux condamnés, aux mères qui pleuraient leurs enfants. Tous portaient la même marque : celle d'être homme, c'est-à-dire mortel et conscient.
Il alluma une cigarette. La fumée monta vers le ciel rouge. Katow sourit : au moins, il choisissait encore la manière de mourir.`,
    contexte: "Katow face à la mort — Malraux explore la conscience révolutionnaire et la finitude.",
    attendus: [
      { procede: "Registre tragique", citation: "« Il savait qu'il allait mourir, et cette certitude ne l'effrayait pas autant qu'il l'eût cru. »", interpretation: "Registre tragique : lucidité devant la mort — le héros malrucien accepte le sacrifice.", keywords: ["tragique","mort","certitude","sacrifice","lucidité","katow"] },
      { procede: "Métaphore", citation: "« une masse obscure dont le sens lui échappait »", interpretation: "Métaphore : l'histoire devient masse inintelligible — crise du sens révolutionnaire.", keywords: ["métaphore","masse","obscur","sens","histoire","crise"] },
      { procede: "Champ lexical", citation: "« rque : celle d'être homme, c'est-à-dire mortel et conscient. »", interpretation: "Champ lexical de la mort : la violence politique imprègne le récit — condition humaine.", keywords: ["champ lexical","mort","sang","violence","politique","humanité"] },
      { procede: "Symbolisme", citation: "« La fumée monta vers le ciel rouge »", interpretation: "Symbolisme : feu et fumée — apocalypse urbaine et révolution en échec.", keywords: ["symbolisme","fumée","ciel","feu","apocalypse","shanghai"] }
    ]
  },
  {
    id: "GT-762",
    titre: "René (I, 1)",
    auteur: "Chateaubriand",
    oeuvre: "René (1802)",
    genre: "Roman",
    diff: 2,
    texte: `Je ne sais pourquoi il existe une liaison intime entre la nature sauvage et sauvage et moi. Les solitudes me parlent une langue que je comprends ; les grands bois, les montagnes, les mers désertes me rendent ce que les hommes m'ont pris. J'ai passé ma jeunesse à fuir les villes, à chercher des lieux où le vent souffle sans témoin, où l'on peut pleurer sans ridicule.
Amélie, ma sœur, partageait autrefois ces errances. Nous lisions ensemble les poètes anciens ; nous rêvions de contrées lointaines. Mais le monde a séparé nos destins, et je reste seul avec mon mal du siècle — ce vague à l'âme dont parle tant de jeunes gens en ce temps de transition.
Les ruines, les tombeaux, les crépuscules m'attirent. Je ne cherche pas le bonheur ; je cherche une émotion forte qui me fasse sentir que j'existe encore.`,
    contexte: "Monologue de René — mal du siècle et quête de solitude romantique.",
    attendus: [
      { procede: "Personnification", citation: "« Les solitudes me parlent une langue que je comprends »", interpretation: "Personnification : la nature devient confidente — le romantisme fuit la société.", keywords: ["personnification","solitudes","nature","romantisme","fuite","langue"] },
      { procede: "Registre lyrique", citation: "« ce vague à l'âme dont parle tant de jeunes gens »", interpretation: "Registre lyrique : le mal du siècle — subjectivité générationnelle du romantisme.", keywords: ["lyrique","vague","âme","siècle","subjectivité","romantisme"] },
      { procede: "Antithèse", citation: "« Je ne cherche pas le bonheur » / « une émotion forte »", interpretation: "Antithèse : rejet du bonheur bourgeois — quête d'intensité existentielle.", keywords: ["antithèse","bonheur","émotion","existence","quête","rené"] },
      { procede: "Champ lexical", citation: "« les grands bois, les montagnes, les mers désertes me rendent ce que les hommes m'ont pr »", interpretation: "Champ lexical du paysage sublime : nature vastes — esthétique du romantisme.", keywords: ["champ lexical","paysage","sublime","montagnes","mers","nature"] }
    ]
  },
  {
    id: "GT-763",
    titre: "La Princesse de Clèves (I)",
    auteur: "Lafayette",
    oeuvre: "La Princesse de Clèves (1678)",
    genre: "Roman",
    diff: 2,
    texte: `La cour était alors dans une magnificence qu'on n'a jamais vue depuis. L'ambition et la galanterie régnaient en même temps et occupaient également les esprits ; l'un et l'autre trouvaient souvent des moyens de se concilier, et l'on ne savait lequel des deux emportait l'avantage. Les hommes faisaient profession d'être galants, et les femmes y étaient si accoutumées qu'elles ne croyaient pas aimer lorsqu'elles n'étaient pas aimées en public.
Mme de Clèves, jeune, belle, et mariée au prince de Clèves, ne connaissait pas encore la violence de la passion. Elle croyait que l'honnêteté suffisait à régler la conduite, et que l'on pouvait vivre dans le monde sans y laisser son cœur. Mais le duc de Nemours parut : il était de ces hommes que la nature semble avoir formés pour se faire aimer.`,
    contexte: "Exposition du roman — galanterie à la cour et naissance de la passion chez Mme de Clèves.",
    attendus: [
      { procede: "Registre réaliste", citation: "« L'ambition et la galanterie régnaient en même temps »", interpretation: "Registre réaliste : portrait sociologique de la cour — Lafayette analyse les mœurs.", keywords: ["réaliste","galanterie","cour","mœurs","ambition","lafayette"] },
      { procede: "Antithèse", citation: "« Elle croyait que l'honnêteté suffisait à régler la conduite »", interpretation: "Antithèse entre vertu et passion — le roman naît de ce conflit intérieur.", keywords: ["antithèse","honnêteté","passion","vertu","conflit","cœur"] },
      { procede: "Caractérisation", citation: "« formés pour se faire aimer »", interpretation: "Caractérisation de Nemours : séducteur naturel — le désir structure l'intrigue.", keywords: ["caractérisation","nemours","séducteur","désir","nature","amour"] },
      { procede: "Narration", citation: "« La cour était alors dans une magnificence »", interpretation: "Narration à la 3e personne : le narrateur distancié pose le cadre historique.", keywords: ["narration","cour","magnificence","cadre","historique","exposition"] }
    ]
  },
  {
    id: "GT-764",
    titre: "Terre des hommes",
    auteur: "Saint-Exupéry",
    oeuvre: "Terre des hommes (1939)",
    genre: "Idées",
    diff: 2,
    texte: `La vie ne vaut d'être vécue que parce qu'elle lie les hommes les uns aux autres. J'ai appris cela dans le désert, quand j'étais tombé en panne, seul, avec à peine assez d'eau pour deux jours. Ce n'était pas la peur de mourir qui me troublait le plus ; c'était l'idée de mourir sans avoir transmis quelque chose, sans avoir été utile à ceux que j'aimais.
Un paysan berbère m'a recueilli. Il ne parlait pas ma langue ; il n'avait rien de superflu. Pourtant, il m'a donné son thé, son abri, son silence patient. J'ai compris alors que la richesse véritable n'est pas ce que l'on possède, mais ce que l'on donne.
Les aviateurs, les nomades, les artisans forment une même fraternité : celle de ceux qui savent que l'homme n'est grand que par sa responsabilité envers les autres hommes.`,
    contexte: "Méditation sur la fraternité — Saint-Exupéry lie survie et responsabilité humaine.",
    attendus: [
      { procede: "Maxime", citation: "« La vie ne vaut d'être vécue que parce qu'elle lie les hommes »", interpretation: "Maxime : le sens de la vie est relationnel — éthique humaniste de Saint-Exupéry.", keywords: ["maxime","vie","hommes","lien","humanisme","éthique"] },
      { procede: "Antithèse", citation: "« ors que la richesse véritable n'est pas ce que l'on possède, mais ce que l'on do »", interpretation: "Antithèse entre possession et don — critique de la richesse matérielle.", keywords: ["antithèse","posséder","donner","richesse","générosité","désert"] },
      { procede: "Registre autobiographique", citation: "« J'ai appris cela dans le désert »", interpretation: "Registre autobiographique : expérience vécue — le récit exemplaire fonde la leçon.", keywords: ["autobiographique","désert","expérience","leçon","récit","exemplaire"] },
      { procede: "Champ lexical", citation: "« vent que l'homme n'est grand que par sa responsabilité envers les autres hommes. »", interpretation: "Champ lexical de la solidarité : vocabulaire éthique — humanisme de la Résistance.", keywords: ["champ lexical","fraternité","responsabilité","solidarité","humanisme","éthique"] }
    ]
  },
  {
    id: "GT-765",
    titre: "En attendant Godot (I)",
    auteur: "Beckett",
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
    contexte: "Dialogue d'attente — Beckett dramatise l'absurde et l'inaction.",
    attendus: [
      { procede: "Dialogue", citation: "« Qu'est-ce qu'on fait maintenant ? »", interpretation: "Dialogue minimal : les répliques creuses traduisent l'absurde — théâtre de l'attente.", keywords: ["dialogue","attente","absurde","inaction","beckett","godot"] },
      { procede: "Répétition", citation: "« On peut toujours attendre un peu »", interpretation: "Répétition : l'attente devient seul horizon — circularité existentielle.", keywords: ["répétition","attendre","circularité","existence","horizon","temps"] },
      { procede: "Antithèse", citation: "« Si on partait ? » / « Où ? »", interpretation: "Antithèse entre désir de mouvement et impossibilité — paralysie existentielle.", keywords: ["antithèse","partir","où","paralysie","mouvement","impossibilité"] },
      { procede: "Registre comique", citation: "« On n'a rien à faire »", interpretation: "Registre comique : humour noir de l'inutilité — rire devant le vide.", keywords: ["comique","rien","humour","vide","inutilité","absurde"] }
    ]
  },
  {
    id: "GT-766",
    titre: "L'Amant (I)",
    auteur: "Duras",
    oeuvre: "L'Amant (1984)",
    genre: "Roman",
    diff: 2,
    texte: `J'ai commencé à l'aimer dès le premier jour. Je ne savais pas encore que c'était l'amour. Je savais seulement qu'il venait vers moi dans une limousine noire, qu'il portait un chapeau de feutre, qu'il fumait des cigarettes anglaises. J'avais quinze ans et demi. Lui, il avait douze ans de plus. Il était chinois, riche, seul comme moi.
Ma mère ne voyait pas ce qui se passait, ou feignait de ne pas voir. Mon frère haïssait cet homme sans le connaître. Moi, je montais dans sa voiture chaque jour après le lycée. Nous allions dans une chambre d'hôtel rue des Grands-Augustins. Là, il me parlait doucement, il me regardait comme personne ne m'avait regardée.
Je ne savais pas encore que cet amour-là marquerait toute ma vie, que je l'écrirais soixante ans plus tard avec la même brûlure.`,
    contexte: "Incipit de L'Amant — mémoire de la passion adolescente en Indochine.",
    attendus: [
      { procede: "Incipit", citation: "« J'ai commencé à l'aimer dès le premier jour »", interpretation: "Incipit mémoriel : retour sur le passé — la voix narrative condense l'émotion.", keywords: ["incipit","aimer","mémoire","passé","émotion","duras"] },
      { procede: "Registre lyrique", citation: "« il me regardait comme personne ne m'avait regardée »", interpretation: "Registre lyrique : regard amoureux — subjectivité adolescente et désir.", keywords: ["lyrique","regard","amour","désir","adolescence","subjectivité"] },
      { procede: "Focalisation interne", citation: "« Je ne savais pas encore que c'était l'amour »", interpretation: "Focalisation interne : ignorance puis reconnaissance — structure du souvenir.", keywords: ["focalisation","amour","souvenir","reconnaissance","ignorance","récit"] },
      { procede: "Antithèse", citation: "« seul comme moi »", interpretation: "Antithèse implicite : solitude partagée — le couple naît de l'isolement colonial.", keywords: ["antithèse","seul","couple","isolement","colonial","passion"] }
    ]
  },
  {
    id: "GT-767",
    titre: "Les Contemplations — « Bois solitaire »",
    auteur: "Hugo",
    oeuvre: "Les Contemplations (1856)",
    genre: "Poésie",
    diff: 2,
    texte: `L'automne faisait pleuvoir les feuilles mortes
Comme une poussière éparse au vent du soir ;
Le bois, muet et sombre, ouvrait ses profondeurs
Où le ruisseau murmurait un chant de deuil.
Je marchais seul, pensif, rêvant à tant de choses
Qui ne reviendront plus, à tant de visages
Effacés par le temps, à tant de voix perdues
Dans le grand océan des heures écoulées.
Et j'entendais, au fond de ma mémoire,
Un echo lointain de pas qui ne reviendront pas,
Un echo de rires, un echo de sanglots,
Tout ce qu'un cœur humain peut garder de regrets
Quand la vie s'en va comme une eau qui coule
Et ne laisse derrière elle qu'une rive vide.`,
    contexte: "Élégie hugolienne — deuil et mémoire dans le paysage automnal.",
    attendus: [
      { procede: "Comparaison", citation: "« Comme une poussière éparse au vent du soir »", interpretation: "Comparaison : feuilles mortes et poussière — image de la dissolution et du temps.", keywords: ["comparaison","feuilles","poussière","temps","automne","hugo"] },
      { procede: "Anaphore", citation: "« à tant de »", interpretation: "Anaphore sur « à tant de » : accumulation des pertes — insistance élégiaque.", keywords: ["anaphore","tant","pertes","accumulation","élégie","deuil"] },
      { procede: "Personnification", citation: "« Le bois, muet et sombre, ouvrait ses profondeurs »", interpretation: "Personnification : le bois accueille le deuil — paysage miroir de la mélancolie.", keywords: ["personnification","bois","profondeurs","mélancolie","paysage","deuil"] },
      { procede: "Registre lyrique", citation: "« Un echo de rires, un echo de sanglots »", interpretation: "Registre lyrique : mémoire affective — subjectivité du poète face au passé.", keywords: ["lyrique","echo","rires","sanglots","mémoire","regret"] }
    ]
  },
  {
    id: "GT-768",
    titre: "Les Fleurs du mal — « Spleen »",
    auteur: "Baudelaire",
    oeuvre: "Les Fleurs du mal (1857)",
    genre: "Poésie",
    diff: 2,
    texte: `Quand le ciel bas et lourd pèse comme un couvercle
Sur l'esprit gémissant en proie aux longs ennuis,
Et que, bordant les lointains, on voit circuler
Le noir cortège des jours tristes et monotone ;
Quand la pluie étale enfin ses longs rideaux gris
De l'horizon au bout des toits de toute la ville,
Et que l'on n'a, pour fuir, qu'un taudis sans lumière
Où la bave des rats fouille les murs humides ;
Mon esprit, comme un corbeau sur les eaux désespérées,
Bat l'aile inerte et se noie dans l'ennui profond.
Paris qui fourmille, cité pleine de rêves,
Où le spectre en plein jour rôde plus que la nuit !`,
    contexte: "Poème du spleen — ennui urbain et oppression du ciel parisien.",
    attendus: [
      { procede: "Similitude", citation: "« pèse comme un couvercle »", interpretation: "Similitude : le ciel écrase l'esprit — métaphore de l'oppression mélancolique.", keywords: ["similitude","couvercle","ciel","oppression","spleen","baudelaire"] },
      { procede: "Métaphore", citation: "« Mon esprit, comme un corbeau sur les eaux désespérées »", interpretation: "Métaphore du corbeau : l'âme noyée dans l'ennui — symbolisme baudelairien.", keywords: ["métaphore","corbeau","esprit","ennui","noyade","spleen"] },
      { procede: "Champ lexical", citation: "« Quand la pluie étale enfin ses longs rideaux gris De l'horizon au bout des »", interpretation: "Champ lexical de la tristesse : atmosphère oppressive — modernité urbaine.", keywords: ["champ lexical","tristesse","pluie","gris","urbain","modernité"] },
      { procede: "Registre lyrique", citation: "« l'esprit gémissant en proie aux longs ennuis »", interpretation: "Registre lyrique : subjectivité malade — le moi poétique souffre de la ville.", keywords: ["lyrique","esprit","ennui","souffrance","subjectivité","ville"] }
    ]
  },
  {
    id: "GT-769",
    titre: "Les Faux-Monnayeurs (I)",
    auteur: "Gide",
    oeuvre: "Les Faux-Monnayeurs (1925)",
    genre: "Roman",
    diff: 2,
    texte: `Édouard tenait son journal. Il y notait tout ce qui lui semblait devoir servir au roman qu'il n'écrivait pas encore — ou plutôt qu'il écrivait en l'écrivant. « Faux-Monnayeurs », avait-il titré provisoirement. Le mot le tentait : fausse monnaie, fausse valeur, fausse identité. Bernard avait découvert qu'il n'était pas le fils de ses parents ; Olivier cherchait une vérité que la famille lui cachait.
Édouard observait ces adolescents avec une curiosité presque cruelle. Il voulait les mettre en roman, mais le roman dévorait la vie. « Je ne sais plus où est la vérité », écrivit-il un soir. « Tout ce que je raconte devient fiction ; toute fiction devient vraie. »
Le cahier s'ouvrait sur une question : peut-on être sincère en inventant ?`,
    contexte: "Journal d'Édouard — Gide met en abyme la création romanesque.",
    attendus: [
      { procede: "Métaphore", citation: "« fausse monnaie, fausse valeur, fausse identité »", interpretation: "Métaphore de la fausse monnaie : le titre condense les thèmes — authenticité et mensonge.", keywords: ["métaphore","monnaie","valeur","identité","mensonge","gide"] },
      { procede: "Mise en abyme", citation: "« au roman qu'il n'écrivait pas encore — ou plutôt qu'il écrivait en l'écrivant »", interpretation: "Mise en abyme : le journal devient roman — Gide questionne la création.", keywords: ["mise en abyme","journal","roman","création","écriture","gide"] },
      { procede: "Question rhétorique", citation: "« peut-on être sincère en inventant ? »", interpretation: "Question rhétorique : le doute fondamental du roman — pacte avec le lecteur.", keywords: ["question","sincère","inventer","doute","pacte","lecteur"] },
      { procede: "Registre autobiographique", citation: "« Édouard tenait son journal »", interpretation: "Registre autobiographique : double Gide-Édouard — autofiction avant la lettre.", keywords: ["autobiographique","journal","édouard","autofiction","double","gide"] }
    ]
  },
  {
    id: "GT-770",
    titre: "La Nuit de mai (ouverture)",
    auteur: "Musset",
    oeuvre: "La Nuit de mai (1835)",
    genre: "Poésie",
    diff: 2,
    texte: `MUSE
Quand le ciel bas et lourd incline son voûte
Sur un cœur où l'ennui s'accroît comme un lierre,
Quand la nuit tombe et que le vent se lamente,
Viens-tu, Muse, m'offrir ta main fraternelle ?
POÈTE
Non, laisse-moi dormir ; j'ai trop souffert ce jour.
MUSE
Dors-tu ? le temps s'écoule, et la jeunesse fuit.
POÈTE
Que m'importe la jeunesse ou la gloire ?
MUSE
L'art est long, la vie est brève ; travaille encore.
POÈTE
À quoi bon ? mes chansons ne changent rien au monde.
MUSE
Le monde a besoin de chansons, même inutiles.
POÈTE
Alors parle ; j'écoute. Mais ne me promets rien.`,
    contexte: "Poème dialogué — débat entre le Poète découragé et la Muse.",
    attendus: [
      { procede: "Dialogue", citation: "« Viens-tu, Muse, m'offrir ta main fraternelle ? »", interpretation: "Dialogue poétique : Muse et Poète s'affrontent — forme dramatique du mal du siècle.", keywords: ["dialogue","muse","poète","dramatique","siècle","musset"] },
      { procede: "Antithèse", citation: "« L'art est long, la vie est brève »", interpretation: "Antithèse : contrainte temporelle de l'artiste — maxime humaniste.", keywords: ["antithèse","art","vie","bref","long","maxime"] },
      { procede: "Registre lyrique", citation: "« j'ai trop souffert ce jour »", interpretation: "Registre lyrique : plainte du poète — subjectivité et découragement.", keywords: ["lyrique","souffert","plainte","découragement","subjectivité","nuit"] },
      { procede: "Apostrophe", citation: "« Viens-tu, Muse »", interpretation: "Apostrophe à la Muse : invocation classique renouvelée — quête artistique.", keywords: ["apostrophe","muse","invocation","art","quête","classique"] }
    ]
  },
  {
    id: "GT-771",
    titre: "Les Liaisons dangereuses (L. 81)",
    auteur: "Laclos",
    oeuvre: "Les Liaisons dangereuses (1782)",
    genre: "Roman",
    diff: 2,
    texte: `Mme de Merteuil à Vicomte de Valmont.
Vous voilà donc bien heureux de votre dernière conquête ! Vous m'écrivez trois pages pour me vanter une paysanne. J'en ris encore. Croyez-vous me faire envie ? Non, mon ami : je connais vos ruses. Vous voulez me piquer, me faire croire que vous n'avez plus besoin de moi. C'est inutile. Je sais ce que vaut votre constance.
D'ailleurs, ce n'est pas Cécile qui m'intéresse ; c'est vous. Je veux savoir si vous oserez exécuter le plan que nous avons formé. Préférez-vous la vertu de Mme de Tourvel à la gloire de me plaire ? Choisissez. Si vous hésitez, je comprendrai que vous avez faibli — et je saurai me venger.
Je n'aime pas qu'on me désobéisse. Vous le savez. Votre amie,
Mme de Merteuil.`,
    contexte: "Lettre de Merteuil — manipulation et jalousie dans le roman épistolaire.",
    attendus: [
      { procede: "Registre épistolaire", citation: "« Mme de Merteuil à Vicomte de Valmont »", interpretation: "Registre épistolaire : forme en lettres — intimité et stratégie se mêlent.", keywords: ["épistolaire","lettre","merteuil","valmont","forme","laclos"] },
      { procede: "Ironie", citation: "« J'en ris encore »", interpretation: "Ironie : Merteuil feint la moquerie — manipulation psychologique du Valmont.", keywords: ["ironie","rire","moquerie","manipulation","merteuil","stratégie"] },
      { procede: "Antithèse", citation: "« vertu de Mme de Tourvel » / « gloire de me plaire »", interpretation: "Antithèse : vertu et séduction — le libertinage structure le conflit.", keywords: ["antithèse","vertu","gloire","séduction","libertinage","conflit"] },
      { procede: "Registre polémique", citation: "« Je n'aime pas qu'on me désobéisse »", interpretation: "Registre polémique : menace voilée — Merteuil exerce le pouvoir.", keywords: ["polémique","désobéir","menace","pouvoir","vengeance","merteuil"] }
    ]
  }
  ],
  13: [
  {
    id: "GT-772",
    titre: "Don Quichotte (I, 1)",
    auteur: "Cervantès",
    oeuvre: "Don Quichotte (1605, trad. fr.)",
    genre: "Roman",
    diff: 2,
    texte: `Dans un village de la Manche, dont je ne veux pas me rappeler le nom, vivait, il n'y a pas longtemps, un de ces gentilshommes qui ont lance au râtelier, rondache antique, maigre rosse et lévrier de chasse. Un pot-au-feu plus souvent de bœuf que de mouton, salpicón la plupart des soirs, des duelos y quebrantos le samedi, lentilles le vendredi, quelque pigeonneau de surcroît le dimanche, consumaient les trois quarts de son revenu. Le reste passait en casaque de fin drap, haut-de-chausses de velours pour les fêtes, pantoufles de même étoffe; et les jours de semaine, il se faisait honneur de son meilleur gros drap.`,
    contexte: "Incipit romanesque : naissance du héros parodique.",
    attendus: [
      { procede: "Incipit", citation: "« Dans un village de la Manche »", interpretation: "L'ouverture installe un cadre concret avant la dérive imaginaire.", keywords: ["incipit","cadre","réalisme","roman"] },
      { procede: "Accumulation", citation: "« lance au râtelier, rondache antique, maigre rosse »", interpretation: "Portrait comique du gentilhomme appauvri.", keywords: ["accumulation","portrait","comique","chevalerie"] },
      { procede: "Registre burlesque", citation: "« dont je ne veux pas me rappeler le nom »", interpretation: "Feinte négligence du narrateur — parodie héroïque.", keywords: ["burlesque","narrateur","parodie","ironie"] }
    ]
  },
  {
    id: "GT-773",
    titre: "Werther (10 mai)",
    auteur: "Goethe",
    oeuvre: "Les Souffrances du jeune Werther (1774, trad. fr.)",
    genre: "Roman",
    diff: 2,
    texte: `Quelle douceur pour mon cœur de se perdre dans cette nature! Quand le brouillard de la vallée monte devant moi, quand le soleil de midi repose sur la masse impénétrable de ma forêt, et que quelques rayons seulement se glissent jusque dans le sanctuaire; quand, couché dans les hautes herbes auprès du ruisseau, je découvre, de la terre jusqu'à moi, mille petites plantes inconnues; quand je sens de plus près le monde innombrable des vermisseaux, des insectes, et que je sens la présence du Tout-Puissant qui nous a créés à son image, le souffle du Très-Aimé qui nous porte et nous soutient dans une éternelle volupté.`,
    contexte: "Lettre lyrique : Werther confond paysage, émotion et élévation spirituelle.",
    attendus: [
      { procede: "Anaphore", citation: "« r pour mon cœur de se perdre dans cette nature! »", interpretation: "Reprise rythmique traduisant l'expansion de la sensibilité.", keywords: ["anaphore","lyrisme","nature","sensibilité"] },
      { procede: "Champ lexical", citation: "« r pour mon cœur de se perdre dans cette nature! »", interpretation: "Le monde naturel devient miroir de l'âme passionnée.", keywords: ["nature","paysage","âme","romantisme"] },
      { procede: "Registre lyrique", citation: "« Quelle douceur pour mon cœur »", interpretation: "La première personne fait de l'expérience un absolu intime.", keywords: ["lyrique","je","émotion","werther"] }
    ]
  },
  {
    id: "GT-774",
    titre: "Deux villes (incipit)",
    auteur: "Dickens",
    oeuvre: "Le Conte de deux cités (1859, trad. fr.)",
    genre: "Roman",
    diff: 2,
    texte: `C'était le meilleur des temps, c'était le pire des temps; c'était l'âge de la sagesse, c'était l'âge de la folie; c'était l'époque de la croyance, c'était l'époque de l'incrédulité; c'était la saison de la lumière, c'était la saison des ténèbres; c'était le printemps de l'espérance, c'était l'hiver du désespoir. Nous avions tout devant nous, nous n'avions rien devant nous; nous allions tous directement au ciel, nous allions tous directement dans l'autre sens. En un mot, cette époque ressemblait tellement à la nôtre que ses autorités les plus bruyantes insistaient pour qu'on ne la reçût, en bien ou en mal, qu'au superlatif.`,
    contexte: "Ouverture historique : la Révolution sous le signe du contraste.",
    attendus: [
      { procede: "Antithèse", citation: "« C'était le meilleur des temps, c'était le pire des temps; c'était l'âge de la sagesse, c'était l'âge de la folie; c'était l'époque de la croyance, c'était l'époque de l'incrédulité; c'était la saison de la lumière, c'était la saison des ténèbres; c'était le printemps de l'espérance, c'était l'hiver du désespoir. Nous avions tout devant nous, nous n'avions rien devant nous; nous allions tous directement au ciel, nous allions tous directement dans l'autre sens. En un mot, cette époque ressemblait tellement à la nôtre que ses autorités les plus bruyantes insistaient pour qu'on ne la reçût, en bien ou en mal, qu'au superlatif. »", interpretation: "Système binaire dramatisant une époque déchirée.", keywords: ["antithèse","histoire","contraste","révolution"] },
      { procede: "Parallélisme", citation: "« C'était le meilleur des temps, c'était le pire des temps; c'était l'âge de la sagesse, c'était l'âge de la folie; c'était l'époque de la croyance, c'était l'époque de l'incrédulité; c'était la saison de la lumière, c'était la saison des ténèbres; c'était le printemps de l'espérance, c'était l'hiver du désespoir. Nous avions tout devant nous, nous n'avions rien devant nous; nous allions tous directement au ciel, nous allions tous directement dans l'autre sens. En un mot, cette époque ressemblait tellement à la nôtre que ses autorités les plus bruyantes insistaient pour qu'on ne la reçût, en bien ou en mal, qu'au superlatif. »", interpretation: "Rythme oratoire de l'incipit.", keywords: ["parallélisme","rythme","oratoire","incipit"] },
      { procede: "Hyperbole", citation: "« qu'au superlatif »", interpretation: "Excès idéologique du moment historique.", keywords: ["hyperbole","superlatif","narrateur","critique"] }
    ]
  },
  {
    id: "GT-775",
    titre: "Le Corbeau (extrait)",
    auteur: "Poe",
    oeuvre: "Le Corbeau (1845, trad. Mallarmé)",
    genre: "Poésie",
    diff: 3,
    texte: `Une fois, sur le minuit lugubre, pendant que je m'appesantissais, faible et fatigué, sur maint curieux et bizarre volume de doctrine oubliée, pendant que je dodelinais la tête, presque assoupi soudain, il se fit comme un tapotement, comme de quelqu'un frappant doucement, frappant à la porte de ma chambre. « C'est quelque visiteur, murmurai-je, qui frappe à la porte de ma chambre; ce n'est que cela, et rien de plus. » Et le Corbeau, perché, ne dit qu'un mot, comme si son âme en ce seul mot se répandait: « Jamais plus. »`,
    contexte: "Poème narratif : deuil et hantise dans la voix répétée de l'oiseau.",
    attendus: [
      { procede: "Refrain", citation: "« Jamais plus »", interpretation: "Refrain fixant l'irréversibilité du deuil.", keywords: ["refrain","deuil","fatalité","poe"] },
      { procede: "Atmosphère", citation: "« minuit lugubre »", interpretation: "Décor nocturne d'angoisse fantastique.", keywords: ["fantastique","nuit","angoisse","atmosphère"] },
      { procede: "Gradation sonore", citation: "« frappant doucement, frappant »", interpretation: "Répétition auditive matérialisant l'obsession.", keywords: ["répétition","son","obsession","narrateur"] }
    ]
  },
  {
    id: "GT-776",
    titre: "Essais (I, 26)",
    auteur: "Montaigne",
    oeuvre: "Essais (1580)",
    genre: "Idées",
    diff: 2,
    texte: `Savoir par cœur n'est pas savoir: c'est tenir ce qu'on a donné en garde à sa mémoire. Ce qu'on sait droitement, on en dispose sans regarder au patron, sans tourner les yeux vers son livre. Fâcheuse suffisance, qu'une suffisance purement livresque! Je voudrais qu'on fût soigneux de choisir un conducteur qui eût plutôt la tête bien faite que bien pleine, et qu'on y requît tous les deux, mais plus les mœurs et l'entendement que la science. Qu'il fasse tout passer par l'étamine et ne loge rien en sa tête par simple autorité et à crédit.`,
    contexte: "Réflexion humaniste sur l'éducation et le jugement.",
    attendus: [
      { procede: "Antithèse", citation: "« tête bien faite que bien pleine »", interpretation: "Montaigne oppose jugement vivant et érudition passive.", keywords: ["antithèse","éducation","jugement","humanisme"] },
      { procede: "Maxime", citation: "« Savoir par cœur n'est pas savoir »", interpretation: "Pédagogie de l'appropriation critique.", keywords: ["maxime","mémoire","savoir","pédagogie"] },
      { procede: "Métaphore", citation: "« passer par l'étamine »", interpretation: "L'élève doit filtrer les idées.", keywords: ["métaphore","esprit critique","autorité","liberté"] }
    ]
  },
  {
    id: "GT-777",
    titre: "Traité sur la tolérance",
    auteur: "Voltaire",
    oeuvre: "Traité sur la tolérance (1763)",
    genre: "Idées",
    diff: 2,
    texte: `Ce n'est donc plus aux hommes que je m'adresse; c'est à toi, Dieu de tous les êtres, de tous les mondes et de tous les temps: s'il est permis à de faibles créatures, perdues dans l'immensité et imperceptibles au reste de l'univers, d'oser te demander quelque chose, à toi qui as tout donné, à toi dont les décrets sont immuables comme éternels, daigne regarder en pitié les erreurs attachées à notre nature; que ces erreurs ne fassent point nos calamités. Tu ne nous as point donné un cœur pour nous haïr, et des mains pour nous égorger; fais que nous nous aidions mutuellement à supporter le fardeau d'une vie pénible et passagère.`,
    contexte: "Prière philosophique : argumentation par l'universalité religieuse.",
    attendus: [
      { procede: "Apostrophe", citation: "« c'est à toi, Dieu de tous les êtres »", interpretation: "Invocation donnant une portée universelle au plaidoyer.", keywords: ["apostrophe","dieu","universel","tolérance"] },
      { procede: "Antithèse", citation: "« Tu ne nous as point donné un cœur pour nous haïr, et des mains pour n »", interpretation: "Voltaire oppose violence confessionnelle et fraternité.", keywords: ["antithèse","haine","fraternité","lumières"] },
      { procede: "Registre oratoire", citation: "« daigne regarder en pitié »", interpretation: "Ton solennel — supplication civique.", keywords: ["oratoire","prière","civique","voltaire"] }
    ]
  },
  {
    id: "GT-778",
    titre: "Discours sur l'inégalité",
    auteur: "Rousseau",
    oeuvre: "Discours (1755)",
    genre: "Idées",
    diff: 3,
    texte: `Le premier qui, ayant enclos un terrain, s'avisa de dire: Ceci est à moi, et trouva des gens assez simples pour le croire, fut le vrai fondateur de la société civile. Que de crimes, de guerres, de meurtres, que de misères et d'horreurs n'eût point épargnés au genre humain celui qui, arrachant les pieux ou comblant le fossé, eût crié à ses semblables: Gardez-vous d'écouter cet imposteur; vous êtes perdus, si vous oubliez que les fruits sont à tous, et que la terre n'est à personne. Mais il y a grande apparence qu'alors les choses en étaient déjà venues au point de ne pouvoir plus durer comme elles étaient.`,
    contexte: "Critique de la propriété et du contrat social inégal.",
    attendus: [
      { procede: "Hypothèse", citation: "« Le premier qui, ayant enclos un terrain, s'avisa de dire: Ceci est à moi, et trouva des gens assez simples pour le croire, fut le vrai fondateur de la société civile. Que de crimes, de guerres, de meurtres, que de misères et d'horreurs n'eût point épargnés au genre humain celui qui, arrachant les pieux ou comblant le fossé, eût crié à ses semblables: Gardez-vous d'écouter cet imposteur; vous êtes perdus, si vous oubliez que les fruits sont à tous, et que la terre n'est à personne. Mais il y a grande apparence qu'alors les choses en étaient déjà venues au point de ne pouvoir plus durer comme elles étaient. »", interpretation: "Scène d'origine dénonçant l'injustice.", keywords: ["propriété","origine","inégalité","polémique"] },
      { procede: "Exclamation", citation: "« Que de crimes, de guerres, de meurtres »", interpretation: "Énumération dramatisant les effets de l'appropriation.", keywords: ["énumération","violence","histoire","critique"] },
      { procede: "Maxime", citation: "« la terre n'est à personne »", interpretation: "Droit naturel contre l'ordre social établi.", keywords: ["sentence","nature","société","rousseau"] }
    ]
  },
  {
    id: "GT-779",
    titre: "De l'esprit des lois (XI, 6)",
    auteur: "Montesquieu",
    oeuvre: "De l'esprit des lois (1748)",
    genre: "Idées",
    diff: 2,
    texte: `Il y a dans chaque État trois sortes de pouvoirs: la puissance législative, la puissance exécutrice des choses qui dépendent du droit des gens, et la puissance exécutrice de celles qui dépendent du droit civil. Par la première, le prince ou le magistrat fait des lois pour un temps ou pour toujours. Par la seconde, il fait la paix ou la guerre, envoie ou reçoit des ambassades, établit la sûreté. Par la troisième, il punit les crimes, ou juge les différends des particuliers. Lorsque, dans la même personne, la puissance législative est réunie à la puissance exécutrice, il n'y a point de liberté.`,
    contexte: "Séparation des pouvoirs comme garantie de liberté.",
    attendus: [
      { procede: "Définition", citation: "« trois sortes de pouvoirs »", interpretation: "Raisonnement par distinction conceptuelle.", keywords: ["définition","pouvoirs","politique","lois"] },
      { procede: "Anaphore", citation: "« Il y a dans chaque État trois sortes de pouvoirs: la puissance législative, la puissance exécutrice des choses qui dépendent du droit des gens, et la puissance exécutrice de celles qui dépendent du droit civil. Par la première, le prince ou le magistrat fait des lois pour un temps ou pour toujours. Par la seconde, il fait la paix ou la guerre, envoie ou reçoit des ambassades, établit la sûreté. Par la troisième, il punit les crimes, ou juge les différends des particuliers. Lorsque, dans la même personne, la puissance législative est réunie à la puissance exécutrice, il n'y a point de liberté. »", interpretation: "Progression clarifiant la mécanique institutionnelle.", keywords: ["anaphore","progression","institution","clarté"] },
      { procede: "Thèse", citation: "« il n'y a point de liberté »", interpretation: "Concentration du pouvoir détruit l'État libre.", keywords: ["thèse","liberté","séparation","montesquieu"] }
    ]
  },
  {
    id: "GT-780",
    titre: "Le Loup et l'Agneau",
    auteur: "La Fontaine",
    oeuvre: "Fables (1668)",
    genre: "Poésie",
    diff: 1,
    texte: `La raison du plus fort est toujours la meilleure:
Nous l'allons montrer tout à l'heure.
Un Agneau se désaltérait
Dans le courant d'une onde pure.
Un Loup survient à jeun, qui cherchait aventure,
Et que la faim en ces lieux attirait.
Qui te rend si hardi de troubler mon breuvage?
Dit cet animal plein de rage:
Tu seras châtié de ta témérité.
Sire, répond l'Agneau, que Votre Majesté
Ne se mette pas en colère;
Mais plutôt qu'elle considère
Que je me vas désaltérant
Dans le courant,
Plus de vingt pas au-dessous d'Elle.`,
    contexte: "Fable argumentative : l'arbitraire de la force.",
    attendus: [
      { procede: "Morale", citation: "« La raison du plus fort est toujours la meilleure »", interpretation: "Moralité initiale orientant la lecture politique.", keywords: ["morale","force","justice","fable"] },
      { procede: "Dialogue", citation: "« Qui te rend si hardi »", interpretation: "Discours direct — procès truqué.", keywords: ["dialogue","procès","injustice","allégorie"] },
      { procede: "Ironie", citation: "« Votre Majesté »", interpretation: "Politesse de l'agneau accentuant la violence du loup.", keywords: ["ironie","politesse","domination","la fontaine"] }
    ]
  },
  {
    id: "GT-781",
    titre: "Tartuffe (I, 5)",
    auteur: "Molière",
    oeuvre: "Tartuffe (1669)",
    genre: "Théâtre",
    diff: 2,
    texte: `ORGON
Ha! si vous aviez vu comme j'en fis rencontre,
Vous auriez pris pour lui l'amitié que je montre.
Chaque jour à l'église il venait, d'un air doux,
Tout vis-à-vis de moi se mettre à deux genoux.
Il attirait les yeux de l'assemblée entière
Par l'ardeur dont au Ciel il poussait sa prière;
Il faisait des soupirs, de grands élancements,
Et baisait humblement la terre à tous moments;
Et lorsque je sortais, il me devançait vite,
Pour m'aller à la porte offrir de l'eau bénite.
DORINE
Et Tartuffe?
ORGON
Le pauvre homme!`,
    contexte: "Comédie de l'aveuglement dévot.",
    attendus: [
      { procede: "Comique de caractère", citation: "« Le pauvre homme! »", interpretation: "Refrain d'Orgon manifestant son aveuglement.", keywords: ["comique","aveuglement","orgon","tartuffe"] },
      { procede: "Accumulation", citation: "« soupirs, de grands élancements »", interpretation: "Excès de dévotion signalant l'hypocrisie.", keywords: ["accumulation","hypocrisie","dévotion","satire"] },
      { procede: "Ironie dramatique", citation: "« Et Tartuffe? »", interpretation: "Le spectateur comprend ce qu'Orgon refuse de voir.", keywords: ["ironie dramatique","spectateur","imposture","théâtre"] }
    ]
  },
  {
    id: "GT-782",
    titre: "Phèdre (I, 3)",
    auteur: "Racine",
    oeuvre: "Phèdre (1677)",
    genre: "Théâtre",
    diff: 3,
    texte: `PÈDRE
Je le vis, je rougis, je pâlis à sa vue;
Un trouble s'éleva dans mon âme éperdue;
Mes yeux ne voyaient plus, je ne pouvais parler;
Je sentis tout mon corps et transir et brûler.
Je reconnus Vénus et ses feux redoutables,
D'un sang qu'elle poursuit tourments inévitables.
Par des vœux assidus je crus les détourner:
Je lui bâtis un temple, et pris soin de l'orner;
De victimes moi-même à toute heure entourée,
Je cherchais dans leurs flancs ma raison égarée.`,
    contexte: "Aveu tragique : passion comme fatalité divine.",
    attendus: [
      { procede: "Parallélisme", citation: "« Je le vis, je rougis, je pâlis »", interpretation: "Rythme ternaire du choc amoureux.", keywords: ["parallélisme","passion","aveu","tragédie"] },
      { procede: "Antithèse", citation: "« transir et brûler »", interpretation: "Ambivalence douloureuse du désir.", keywords: ["antithèse","désir","douleur","racine"] },
      { procede: "Mythologie", citation: "« Je reconnus Vénus »", interpretation: "Amour inscrit dans la fatalité tragique.", keywords: ["mythologie","fatalité","vénus","phèdre"] }
    ]
  },
  {
    id: "GT-783",
    titre: "Le Cid (I, 6)",
    auteur: "Corneille",
    oeuvre: "Le Cid (1637)",
    genre: "Théâtre",
    diff: 2,
    texte: `RODRIGUE
Percé jusques au fond du cœur
D'une atteinte imprévue aussi bien que mortelle,
Misérable vengeur d'une juste querelle,
Et malheureux objet d'une injuste rigueur,
Je demeure immobile, et mon âme abattue
Cède au coup qui me tue.
Si près de voir mon feu récompensé,
Ô Dieu! l'étrange peine!
En cet affront mon père est l'offensé,
Et l'offenseur le père de Chimène.
Que je sens de rudes combats!
Contre mon propre honneur mon amour s'intéresse.`,
    contexte: "Dilemme cornélien : amour et devoir.",
    attendus: [
      { procede: "Antithèse", citation: "« Contre mon propre honneur mon amour s'intéresse. »", interpretation: "Impossible choix du héros.", keywords: ["antithèse","dilemme","honneur","amour"] },
      { procede: "Registre tragique", citation: "« Percé jusques au fond du cœur »", interpretation: "Souffrance morale comme blessure réelle.", keywords: ["tragique","souffrance","honneur","corneille"] },
      { procede: "Exclamation", citation: "« Ô Dieu! l'étrange peine! »", interpretation: "Urgence du conflit dramatique.", keywords: ["exclamation","pathétique","conflit","rodrigue"] }
    ]
  },
  {
    id: "GT-784",
    titre: "Demain, dès l'aube",
    auteur: "Hugo",
    oeuvre: "Les Contemplations (1856)",
    genre: "Poésie",
    diff: 1,
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
Et quand j'arriverai, je mettrai sur ta tombe
Un bouquet de houx vert et de bruyère en fleur.`,
    contexte: "Élégie : trajet vers la tombe de la fille disparue.",
    attendus: [
      { procede: "Progression", citation: "« Seul, inconnu, le dos courbé, les mains croisées, »", interpretation: "Marche physique comme chemin du deuil.", keywords: ["progression","deuil","élégie","hugo"] },
      { procede: "Antithèse", citation: "« Seul, inconnu, le dos courbé, les mains croisées, »", interpretation: "Le monde extérieur s'efface devant la douleur.", keywords: ["antithèse","douleur","intériorité","lyrique"] },
      { procede: "Chute", citation: "« sur ta tombe »", interpretation: "Destination funèbre révélée.", keywords: ["chute","tombe","émotion","poésie"] }
    ]
  },
  {
    id: "GT-785",
    titre: "L'Albatros",
    auteur: "Baudelaire",
    oeuvre: "Les Fleurs du mal (1857)",
    genre: "Poésie",
    diff: 2,
    texte: `Souvent, pour s'amuser, les hommes d'équipage
Prennent des albatros, vastes oiseaux des mers,
Qui suivent, indolents compagnons de voyage,
Le navire glissant sur les gouffres amers.
A peine les ont-ils déposés sur les planches,
Que ces rois de l'azur, maladroits et honteux,
Laissent piteusement leurs grandes ailes blanches
Comme des avirons traîner à côté d'eux.
Ce voyageur ailé, comme il est gauche et veule!
Lui, naguère si beau, qu'il est comique et laid!
Le Poète est semblable au prince des nuées.`,
    contexte: "Allégorie du poète : grandeur et inadaptation sociale.",
    attendus: [
      { procede: "Allégorie", citation: "« Le Poète est semblable au prince des nuées »", interpretation: "L'oiseau identifié au créateur.", keywords: ["allégorie","poète","société","baudelaire"] },
      { procede: "Antithèse", citation: "« t-ils déposés sur les planches, Que ces rois de l'azur, maladroits et honte »", interpretation: "Chute du sublime vers le ridicule.", keywords: ["antithèse","sublime","ridicule","modernité"] },
      { procede: "Ironie", citation: "« pour s'amuser »", interpretation: "Cruauté collective banalisée.", keywords: ["ironie","cruauté","foule","symbolisme"] }
    ]
  },
  {
    id: "GT-786",
    titre: "Le Dormeur du val",
    auteur: "Rimbaud",
    oeuvre: "Poésies (1870)",
    genre: "Poésie",
    diff: 1,
    texte: `C'est un trou de verdure où chante une rivière
Accrochant follement aux herbes des haillons
D'argent; où le soleil, de la montagne fière,
Luit: c'est un petit val qui mousse de rayons.
Un soldat jeune, bouche ouverte, tête nue,
Et la nuque baignant dans le frais cresson bleu,
Dort; il est étendu dans l'herbe, sous la nue,
Pâle dans son lit vert où la lumière pleut.
Les pieds dans les glaïeuls, il dort. Souriant comme
Sourirait un enfant malade, il fait un somme:
Nature, berce-le chaudement: il a froid.
Les parfums ne font pas frissonner sa narine;
Il dort dans le soleil, la main sur sa poitrine,
Tranquille. Il a deux trous rouges au côté droit.`,
    contexte: "Poème de guerre : idylle vers la mort.",
    attendus: [
      { procede: "Chute", citation: "« Il a deux trous rouges au côté droit »", interpretation: "Dernier vers reconfigurant le tableau.", keywords: ["chute","guerre","mort","rimbaud"] },
      { procede: "Personnification", citation: "« Nature, berce-le »", interpretation: "Nature mère impuissante.", keywords: ["personnification","nature","pathétique","poésie"] },
      { procede: "Contraste", citation: "« trou de verdure » / « trous rouges »", interpretation: "Violence guerrière par le contraste visuel.", keywords: ["contraste","couleurs","violence","lyrique"] }
    ]
  },
  {
    id: "GT-787",
    titre: "Chanson d'automne",
    auteur: "Verlaine",
    oeuvre: "Poèmes saturniens (1866)",
    genre: "Poésie",
    diff: 1,
    texte: `Les sanglots longs
Des violons
De l'automne
Blessent mon cœur
D'une langueur
Monotone.
Tout suffocant
Et blême, quand
Sonne l'heure,
Je me souviens
Des jours anciens
Et je pleure;
Et je m'en vais
Au vent mauvais
Qui m'emporte
Deçà, delà,
Pareil à la
Feuille morte.
Le soir s'allonge et la cloche descend dans l'air humide, la ville s'efface, et mon pas hésite comme une voix qui s'éteint dans le froid.`,
    contexte: "Musique mélancolique : paysage saisonnier et moi.",
    attendus: [
      { procede: "Allitération", citation: "« sanglots longs / violons »", interpretation: "Plainte musicale nasale.", keywords: ["allitération","musicalité","mélancolie","verlaine"] },
      { procede: "Comparaison", citation: "« Pareil à la feuille morte »", interpretation: "Sujet emporté par le temps.", keywords: ["comparaison","automne","temps","destin"] },
      { procede: "Registre lyrique", citation: "« je me souviens ... je pleure »", interpretation: "Émotion intime gouvernant le poème.", keywords: ["lyrique","souvenir","tristesse","poésie"] }
    ]
  },
  {
    id: "GT-788",
    titre: "Zone (ouverture)",
    auteur: "Apollinaire",
    oeuvre: "Alcools (1913)",
    genre: "Poésie",
    diff: 2,
    texte: `A la fin tu es las de ce monde ancien.
Bergère ô tour Eiffel le troupeau des ponts bêle ce matin.
Tu en as assez de vivre dans l'antiquité grecque et romaine.
Ici même les automobiles ont l'air d'être anciennes.
La religion seule est restée toute neuve, la religion est restée simple comme les hangars de Port-Aviation.
Seul en Europe tu n'es pas antique ô Christianisme.
L'Européen le plus moderne c'est vous pape Pie X.
Et toi que les fenêtres observent la honte te retient d'entrer dans une église et de t'y confesser ce matin.`,
    contexte: "Poétique de la modernité : collage urbain.",
    attendus: [
      { procede: "Apostrophe", citation: "« Bergère ô tour Eiffel »", interpretation: "Pastorale renouvelée en ville.", keywords: ["apostrophe","modernité","ville","apollinaire"] },
      { procede: "Antithèse", citation: "« monde ancien » / « moderne »", interpretation: "Tension héritage et nouveauté.", keywords: ["antithèse","ancien","moderne","avant-garde"] },
      { procede: "Vers libre", citation: "« A la fin tu es las de ce monde ancien »", interpretation: "Flux de conscience.", keywords: ["vers libre","rythme","subjectivité","alcools"] }
    ]
  },
  {
    id: "GT-789",
    titre: "Le Lac",
    auteur: "Lamartine",
    oeuvre: "Méditations poétiques (1820)",
    genre: "Poésie",
    diff: 2,
    texte: `Ainsi, toujours poussés vers de nouveaux rivages,
Dans la nuit éternelle emportés sans retour,
Ne pourrons-nous jamais sur l'océan des âges
Jeter l'ancre un seul jour?
Ô lac! l'année à peine a fini sa carrière,
Et près des flots chéris qu'elle devait revoir,
Regarde! je viens seul m'asseoir sur cette pierre
Où tu la vis s'asseoir!
Tu mugissais ainsi sous ces roches profondes;
Ainsi tu te brisais sur leurs flancs déchirés;
Ainsi le vent jetait l'écume de tes ondes
Sur ses pieds adorés.`,
    contexte: "Élégie sur le temps et la perte.",
    attendus: [
      { procede: "Interrogation", citation: "« Ne pourrons-nous jamais »", interpretation: "Question existentielle.", keywords: ["interrogation","temps","fuite","lamartine"] },
      { procede: "Apostrophe", citation: "« Ô lac! »", interpretation: "Paysage confident.", keywords: ["apostrophe","nature","souvenir","romantisme"] },
      { procede: "Métaphore", citation: "« l'océan des âges »", interpretation: "Temps figuré comme mer.", keywords: ["métaphore","temps","durée","élégie"] }
    ]
  },
  {
    id: "GT-790",
    titre: "La Nuit de mai",
    auteur: "Musset",
    oeuvre: "Poésies nouvelles (1835)",
    genre: "Poésie",
    diff: 2,
    texte: `POÈTE
Poète, prends ton luth et me donne un baiser;
La fleur de l'églantier sent ses bourgeons éclore,
Le printemps naît ce soir, les vents vont s'embraser,
Et l'odeur de tes vers se répandra sur l'aurore.
MUSE
Les plus désespérés sont les chants les plus beaux,
Et j'en sais d'immortels qui sont de purs sanglots.
Lorsque le pélican, lassé d'un long voyage,
Dans les brouillards du soir retourne à ses roseaux,
Ses petits affamés courent sur le rivage
En le voyant au loin s'abattre sur les eaux.`,
    contexte: "Dialogue lyrique : souffrance source de création.",
    attendus: [
      { procede: "Dialogue", citation: "« POÈTE Poète, prends ton luth et me donne un baiser; »", interpretation: "Inspiration comme combat.", keywords: ["dialogue","muse","poète","création"] },
      { procede: "Maxime", citation: "« Les plus désespérés sont les chants les plus beaux »", interpretation: "Esthétique du malheur.", keywords: ["maxime","désespoir","beauté","romantisme"] },
      { procede: "Symbole", citation: "« le pélican »", interpretation: "Poète qui se sacrifie.", keywords: ["symbole","pélican","sacrifice","lyrisme"] }
    ]
  },
  {
    id: "GT-791",
    titre: "Le Père Goriot (incipit)",
    auteur: "Balzac",
    oeuvre: "Le Père Goriot (1835)",
    genre: "Roman",
    diff: 2,
    texte: `Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux, sans que jamais la médisance ait attaqué les mœurs de cet honorable établissement. Mais aussi, depuis trente ans, n'y a-t-il jamais été vu de jeune personne; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. Néanmoins, en 1819, époque où commence ce drame, il s'y trouvait une pauvre jeune fille.`,
    contexte: "Incipit réaliste du monde balzacien.",
    attendus: [
      { procede: "Précision", citation: "« rue Neuve-Sainte-Geneviève »", interpretation: "Ancrage topographique parisien.", keywords: ["réalisme","topographie","paris","balzac"] },
      { procede: "Ironie", citation: "« honorable établissement »", interpretation: "Médiocrité suggérée.", keywords: ["ironie","narrateur","milieu","société"] },
      { procede: "Annonce", citation: "« époque où commence ce drame »", interpretation: "Destin tragique annoncé.", keywords: ["drame","annonce","destin","roman"] }
    ]
  },
  {
    id: "GT-792",
    titre: "Madame Bovary (I, 1)",
    auteur: "Flaubert",
    oeuvre: "Madame Bovary (1857)",
    genre: "Roman",
    diff: 2,
    texte: `Nous étions à l'étude, quand le proviseur entra, suivi d'un nouveau habillé en bourgeois et d'un garçon de classe qui portait un grand pupitre. Ceux qui dormaient se réveillèrent, et chacun se leva comme surpris dans son travail. Le proviseur nous fit signe de nous rasseoir; puis, se tournant vers le maître d'études: « Monsieur Roger, lui dit-il à demi-voix, voici un élève que je vous recommande; il entre en cinquième. Si son travail et sa conduite sont méritoires, il passera dans les grands, où l'appelle son âge. » Resté dans l'angle, derrière la porte, si bien qu'on l'apercevait à peine, le nouveau était un gars de la campagne.`,
    contexte: "Entrée maladroite de Charles.",
    attendus: [
      { procede: "Focalisation", citation: "« Nous étions à l'étude »", interpretation: "Regard collectif sur le personnage.", keywords: ["focalisation","collectif","regard","flaubert"] },
      { procede: "Réalisme", citation: "« habillé en bourgeois »", interpretation: "Hiérarchie scolaire et sociale.", keywords: ["réalisme","social","école","roman"] },
      { procede: "Anticipation", citation: "« le nouveau »", interpretation: "Inadaptation annoncée.", keywords: ["anticipation","personnage","inadaptation","charles"] }
    ]
  },
  {
    id: "GT-793",
    titre: "Germinal (I, 1)",
    auteur: "Zola",
    oeuvre: "Germinal (1885)",
    genre: "Roman",
    diff: 3,
    texte: `Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il ne voyait même pas le sol noir, et il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucune ombre d'arbre ne tachait le ciel, le pavé se déroulait avec la rectitude d'une jetée, au milieu des ténèbres.`,
    contexte: "Incipit naturaliste : marche nocturne hostile.",
    attendus: [
      { procede: "Métaphore", citation: "« rafales larges comme sur une mer »", interpretation: "Plaine océanique désolée.", keywords: ["métaphore","paysage","désolation","zola"] },
      { procede: "Champ lexical", citation: "« Il ne voyait même pas le sol noir, et il n'avait la sensation de l'immense horizon plat que par »", interpretation: "Noirceur du drame social.", keywords: ["champ lexical","noir","mine","naturalisme"] },
      { procede: "Focalisation externe", citation: "« un homme suivait seul »", interpretation: "Silhouette anonyme.", keywords: ["focalisation","anonymat","milieu","roman"] }
    ]
  },
  {
    id: "GT-794",
    titre: "Boule de suif (départ)",
    auteur: "Maupassant",
    oeuvre: "Boule de suif (1880)",
    genre: "Roman",
    diff: 2,
    texte: `Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes, noirs, barbus, sales, harassés, marchaient d'un air abattu, sans drapeau, sans régiment. Tous semblaient accablés, éreintés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude, et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait surtout des mobilisés, gens paisibles, rentiers tranquilles, ployant sous le poids du fusil; puis de petits mobiles alertes, faciles à l'épouvante comme à l'enthousiasme; puis des francs-tireurs, héros de parade, et des soldats vaincus.`,
    contexte: "Ouverture de guerre : désordre militaire.",
    attendus: [
      { procede: "Accumulation", citation: "« noirs, barbus, sales, harassés »", interpretation: "Épuisement collectif.", keywords: ["accumulation","guerre","épuisement","maupassant"] },
      { procede: "Antithèse", citation: "« de petits mobiles alertes, faciles à l'épouvante comme à l'enthousias »", interpretation: "Instabilité des foules.", keywords: ["antithèse","foule","instabilité","réalisme"] },
      { procede: "Description", citation: "« sans drapeau, sans régiment »", interpretation: "Perte des signes militaires.", keywords: ["description","défaite","armée","histoire"] }
    ]
  },
  {
    id: "GT-795",
    titre: "Le Rouge et le Noir (ouverture)",
    auteur: "Stendhal",
    oeuvre: "Le Rouge et le Noir (1830)",
    genre: "Roman",
    diff: 2,
    texte: `La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, c'est une des branches du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure qui semble promettre le bonheur à tout le monde.`,
    contexte: "Incipit ironique : décor provincial harmonieux.",
    attendus: [
      { procede: "Cadre", citation: "« la petite ville de Verrières »", interpretation: "Ancrage local.", keywords: ["cadre","province","réalisme","stendhal"] },
      { procede: "Lexique positif", citation: "« La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, c'est une des branches du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure qui semble promettre le bonheur à tout le monde. »", interpretation: "Contraste critique futur.", keywords: ["lexique","ironie","bourgeoisie","roman"] },
      { procede: "Attente", citation: "« semble promettre le bonheur »", interpretation: "Promesse suspecte.", keywords: ["attente","promesse","satire","narrateur"] }
    ]
  }
  ],
  14: [
  {
    id: "GT-796",
    titre: "Révolte de Nora",
    auteur: "Ibsen",
    oeuvre: "Une maison de poupée (trad. fr.)",
    genre: "Théâtre",
    diff: 2,
    texte: `NORA: Je crois qu'avant tout je suis un être humain, autant que toi, du moins je veux essayer de le devenir. Je sais bien que la plupart des gens te donneront raison, Torvald, et que cela se trouve dans les livres. Mais je ne peux plus me contenter de ce que disent les livres. Il faut que je pense par moi-même et que je cherche à comprendre. HELMER: Tu abandonnes ton mari et tes enfants! NORA: J'ai d'autres devoirs tout aussi sacrés. HELMER: Lesquels? NORA: Mes devoirs envers moi-même. Je ne suis plus disposée à me laisser guider par des mains étrangères.`,
    contexte: "Scène de rupture et affirmation de soi.",
    attendus: [
      { procede: "Déclaration", citation: "« je suis un être humain »", interpretation: "Nora reformule la hiérarchie des valeurs.", keywords: ["émancipation","théâtre","ibsen","identité"] },
      { procede: "Antithèse", citation: "« Mais je ne peux plus me contenter de ce que disent les livres. »", interpretation: "La norme sociale est contestée par la conscience.", keywords: ["antithèse","norme","conscience","modernité"] },
      { procede: "Réplique clé", citation: "« Mes devoirs envers moi-même »", interpretation: "La formule condense la portée féministe de la scène.", keywords: ["devoir","soi","rupture","drame"] }
    ]
  },
  {
    id: "GT-797",
    titre: "La vente du verger",
    auteur: "Tchekhov",
    oeuvre: "La Cerisaie (trad. fr.)",
    genre: "Théâtre",
    diff: 2,
    texte: `LOPAKHINE: Le domaine avec la cerisaie est vendu. Je l'ai acheté. Oui, c'est moi qui l'ai acheté! Si mon père et mon grand-père sortaient de leurs tombes et voyaient ce qui s'est passé, comment ce petit Lopakhine, qu'on battait autrefois, a acheté le domaine le plus beau du monde! LIUBOV: Ma vie, ma jeunesse, mon bonheur, adieu! adieu! TROFIMOV: Toute la Russie est notre jardin. Le vieux monde s'effondre, un autre commence; mais on entend déjà la hache dans le verger.`,
    contexte: "Fin d’un monde aristocratique.",
    attendus: [
      { procede: "Annonce", citation: "« Le domaine avec la cerisaie est vendu »", interpretation: "La phrase fait basculer toute la pièce.", keywords: ["annonce","bascule","tchekhov","histoire"] },
      { procede: "Opposition sociale", citation: "« ce petit Lopakhine ... a acheté »", interpretation: "Le renversement des classes est explicite.", keywords: ["social","renversement","propriété","théâtre"] },
      { procede: "Symbole", citation: "« la hache dans le verger »", interpretation: "Le son de la hache matérialise la fin d'un ordre.", keywords: ["symbole","verger","fin","modernité"] }
    ]
  },
  {
    id: "GT-798",
    titre: "Chant de soi",
    auteur: "Whitman",
    oeuvre: "Feuilles d'herbe (trad. fr.)",
    genre: "Poésie",
    diff: 2,
    texte: `Je me célèbre et me chante, et ce que j'assume vous l'assumerez; car chaque atome qui m'appartient vous appartient aussi. Je flâne et j'invite mon âme, je me penche et j'observe un brin d'herbe d'été. Ma langue, chaque molécule de mon sang formée de cette terre et de cet air, née ici de parents nés ici. Je crois qu'une feuille d'herbe n'est pas moins que le travail des étoiles. Je suis vaste, je contiens des multitudes; j'accueille le monde, ses foules, ses ports, ses visages, ses routes ouvertes.`,
    contexte: "Poétique du moi démocratique.",
    attendus: [
      { procede: "Anaphore", citation: "« Je »", interpretation: "La première personne fonde une voix expansive.", keywords: ["anaphore","moi","lyrique","whitman"] },
      { procede: "Image", citation: "« un brin d'herbe d'été »", interpretation: "Le minuscule devient principe cosmique.", keywords: ["image","nature","cosmique","poésie"] },
      { procede: "Formule", citation: "« je contiens des multitudes »", interpretation: "Le sujet se pense pluriel et collectif.", keywords: ["multitudes","identité","démocratie","chant"] }
    ]
  },
  {
    id: "GT-799",
    titre: "Raskolnikov justifie son acte",
    auteur: "Dostoïevski",
    oeuvre: "Crime et châtiment (trad. fr.)",
    genre: "Roman",
    diff: 3,
    texte: `Je voulais avoir l'audace, Sonia, voilà toute la cause! Je voulais savoir si j'étais un pou tremblant, comme tous les hommes, ou un homme. Je voulais savoir si j'avais le droit de franchir la limite, si j'oserais me pencher et prendre. J'ai tué une vieille, oui, mais ce n'est pas la vieille que j'ai tuée: c'est moi que j'ai tué! Je me suis assassiné pour toujours. Je n'ai pas supporté ma propre idée. Tout s'est écroulé en moi, et maintenant je n'ai plus que la honte et la fièvre.`,
    contexte: "Confession morale de Raskolnikov.",
    attendus: [
      { procede: "Questionnement", citation: "« Je voulais avoir l'audace, Sonia, voilà toute la cause! Je voulais savoir si j'étais un pou tremblant, comme tous les hommes, ou un homme. Je voulais savoir si j'avais le droit de franchir la limite, si j'oserais me pencher et prendre. J'ai tué une vieille, oui, mais ce n'est pas la vieille que j'ai tuée: c'est moi que j'ai tué! Je me suis assassiné pour toujours. Je n'ai pas supporté ma propre idée. Tout s'est écroulé en moi, et maintenant je n'ai plus que la honte et la fièvre. »", interpretation: "Le personnage se juge dans un dilemme de puissance.", keywords: ["dilemme","culpabilité","dostoïevski","roman"] },
      { procede: "Anaphore", citation: "« Je voulais savoir »", interpretation: "La répétition traduit l’obsession théorique.", keywords: ["anaphore","obsession","idée","psychologie"] },
      { procede: "Renversement", citation: "« c'est moi que j'ai tué »", interpretation: "Le crime devient auto-condamnation intérieure.", keywords: ["renversement","faute","conscience","tragique"] }
    ]
  },
  {
    id: "GT-800",
    titre: "Prière pour la tolérance [Série 14]",
    auteur: "Voltaire",
    oeuvre: "Traité sur la tolérance",
    genre: "Idées",
    diff: 2,
    texte: `Ce n'est donc plus aux hommes que je m'adresse; c'est à toi, Dieu de tous les êtres, de tous les mondes et de tous les temps: s'il est permis à de faibles créatures, perdues dans l'immensité et imperceptibles au reste de l'univers, d'oser te demander quelque chose, à toi qui as tout donné, à toi dont les décrets sont immuables comme éternels, daigne regarder en pitié les erreurs attachées à notre nature; que ces erreurs ne fassent point nos calamités. Tu ne nous as point donné un cœur pour nous haïr, et des mains pour nous égorger; fais que nous nous aidions mutuellement à supporter le fardeau d'une vie pénible et passagère.`,
    contexte: "Prière philosophique contre l'intolérance religieuse.",
    attendus: [
      { procede: "Apostrophe", citation: "« c'est à toi, Dieu de tous les êtres »", interpretation: "L'adresse solennelle universalise la demande morale.", keywords: ["apostrophe","universel","tolérance","voltaire"] },
      { procede: "Antithèse", citation: "« Tu ne nous as point donné un cœur pour nous haïr, et des mains pour n »", interpretation: "Le texte oppose la violence à la fraternité.", keywords: ["antithèse","haine","fraternité","lumières"] },
      { procede: "Registre oratoire", citation: "« daigne regarder en pitié »", interpretation: "Le ton de supplication renforce la portée civique.", keywords: ["oratoire","prière","argumentation","idées"] }
    ]
  },
  {
    id: "GT-801",
    titre: "Aveu de Phèdre [Série 14]",
    auteur: "Racine",
    oeuvre: "Phèdre",
    genre: "Théâtre",
    diff: 1,
    texte: `Je le vis, je rougis, je pâlis à sa vue; un trouble s'éleva dans mon âme éperdue; mes yeux ne voyaient plus, je ne pouvais parler; je sentis tout mon corps et transir et brûler. Je reconnus Vénus et ses feux redoutables, d'un sang qu'elle poursuit tourments inévitables. Par des vœux assidus je crus les détourner: je lui bâtis un temple, et pris soin de l'orner; de victimes moi-même à toute heure entourée, je cherchais dans leurs flancs ma raison égarée. Ainsi, la passion se fait faute, et la faute se fait destin.`,
    contexte: "Aveu tragique d'une passion impossible.",
    attendus: [
      { procede: "Parallélisme", citation: "« Je le vis, je rougis, je pâlis »", interpretation: "Le rythme ternaire dramatise le choc amoureux.", keywords: ["parallélisme","aveu","tragédie","racine"] },
      { procede: "Antithèse", citation: "« transir et brûler »", interpretation: "Le désir se dit dans une contradiction corporelle.", keywords: ["antithèse","désir","douleur","pathétique"] },
      { procede: "Mythologie", citation: "« Je reconnus Vénus »", interpretation: "La référence divine inscrit la passion dans la fatalité.", keywords: ["mythologie","fatalité","vénus","tragique"] }
    ]
  },
  {
    id: "GT-802",
    titre: "Dilemme de Rodrigue [Série 14]",
    auteur: "Corneille",
    oeuvre: "Le Cid",
    genre: "Théâtre",
    diff: 1,
    texte: `Percé jusques au fond du cœur d'une atteinte imprévue aussi bien que mortelle, misérable vengeur d'une juste querelle, et malheureux objet d'une injuste rigueur, je demeure immobile, et mon âme abattue cède au coup qui me tue. En cet affront mon père est l'offensé, et l'offenseur le père de Chimène. Que je sens de rudes combats! contre mon propre honneur mon amour s'intéresse. Faut-il perdre Chimène, ou trahir mon lignage? le héros naît dans cette hésitation.`,
    contexte: "Conflit classique entre honneur et amour.",
    attendus: [
      { procede: "Antithèse", citation: "« contre mon propre honneur mon amour s'intéresse. »", interpretation: "La symétrie formule l'impasse morale.", keywords: ["antithèse","honneur","amour","corneille"] },
      { procede: "Registre tragique", citation: "« Percé jusques au fond du cœur »", interpretation: "La douleur morale prend la forme d'une blessure.", keywords: ["tragique","souffrance","dilemme","théâtre"] },
      { procede: "Exclamation", citation: "« Que je sens de rudes combats! »", interpretation: "L'exclamation rend sensible l'urgence intérieure.", keywords: ["exclamation","combat","pathétique","classicisme"] }
    ]
  },
  {
    id: "GT-803",
    titre: "Aveuglement d’Orgon [Série 14]",
    auteur: "Molière",
    oeuvre: "Tartuffe",
    genre: "Théâtre",
    diff: 2,
    texte: `Ha! si vous aviez vu comme j'en fis rencontre, vous auriez pris pour lui l'amitié que je montre. Chaque jour à l'église il venait, d'un air doux, tout vis-à-vis de moi se mettre à deux genoux. Il attirait les yeux de l'assemblée entière par l'ardeur dont au Ciel il poussait sa prière; il faisait des soupirs, de grands élancements, et baisait humblement la terre à tous moments. Et lorsque je sortais, il me devançait vite pour m'aller à la porte offrir de l'eau bénite. Et Tartuffe? Le pauvre homme!`,
    contexte: "Portrait comique d'un faux dévot.",
    attendus: [
      { procede: "Comique de caractère", citation: "« Le pauvre homme! »", interpretation: "Le refrain signale l'aveuglement d'Orgon.", keywords: ["comique","orgon","imposture","molière"] },
      { procede: "Accumulation", citation: "« soupirs, de grands élancements »", interpretation: "La surenchère gestuelle dénonce l'hypocrisie.", keywords: ["accumulation","hypocrisie","satire","dévotion"] },
      { procede: "Ironie dramatique", citation: "« Et Tartuffe? »", interpretation: "Le spectateur comprend ce qu'Orgon refuse de voir.", keywords: ["ironie dramatique","spectateur","théâtre","classicisme"] }
    ]
  },
  {
    id: "GT-804",
    titre: "Morale du plus fort [Série 14]",
    auteur: "La Fontaine",
    oeuvre: "Fables",
    genre: "Poésie",
    diff: 2,
    texte: `La raison du plus fort est toujours la meilleure: nous l'allons montrer tout à l'heure. Un Agneau se désaltérait dans le courant d'une onde pure. Un Loup survient à jeun, qui cherchait aventure, et que la faim en ces lieux attirait. Qui te rend si hardi de troubler mon breuvage? dit cet animal plein de rage: tu seras châtié de ta témérité. Sire, répond l'Agneau, que Votre Majesté ne se mette pas en colère; mais plutôt qu'elle considère que je me vas désaltérant plus de vingt pas au-dessous d'Elle.`,
    contexte: "Fable sur l'arbitraire de la force.",
    attendus: [
      { procede: "Morale", citation: "« La raison du plus fort est toujours la meilleure »", interpretation: "La moralité initiale donne la clé de lecture politique.", keywords: ["morale","force","justice","fable"] },
      { procede: "Dialogue", citation: "« Qui te rend si hardi »", interpretation: "Le discours direct met en scène un procès biaisé.", keywords: ["dialogue","procès","injustice","allégorie"] },
      { procede: "Ironie", citation: "« Votre Majesté »", interpretation: "La politesse de l'agneau souligne la brutalité du loup.", keywords: ["ironie","domination","la fontaine","pouvoir"] }
    ]
  },
  {
    id: "GT-805",
    titre: "Le soldat endormi [Série 14]",
    auteur: "Rimbaud",
    oeuvre: "Le Dormeur du val",
    genre: "Poésie",
    diff: 3,
    texte: `C'est un trou de verdure où chante une rivière accrochant follement aux herbes des haillons d'argent; où le soleil, de la montagne fière, luit: c'est un petit val qui mousse de rayons. Un soldat jeune, bouche ouverte, tête nue, et la nuque baignant dans le frais cresson bleu, dort; il est étendu dans l'herbe, sous la nue, pâle dans son lit vert où la lumière pleut. Les parfums ne font pas frissonner sa narine; il dort dans le soleil, la main sur sa poitrine, tranquille. Il a deux trous rouges au côté droit.`,
    contexte: "Poème de guerre à chute brutale.",
    attendus: [
      { procede: "Chute", citation: "« Il a deux trous rouges au côté droit »", interpretation: "Le dernier vers renverse la lecture bucolique.", keywords: ["chute","guerre","mort","rimbaud"] },
      { procede: "Personnification", citation: "« C'est un trou de verdure où chante une rivière accrochant follement aux herbes des haillons d'argent; où le soleil, de la montagne fière, luit: c'est un petit val qui mousse de rayons. Un soldat jeune, bouche ouverte, tête nue, et la nuque baignant dans le frais cresson bleu, dort; il est étendu dans l'herbe, sous la nue, pâle dans son lit vert où la lumière pleut. Les parfums ne font pas frissonner sa narine; il dort dans le soleil, la main sur sa poitrine, tranquille. Il a deux trous rouges au côté droit. »", interpretation: "La nature maternelle reste impuissante face à la guerre.", keywords: ["personnification","nature","pathétique","poésie"] },
      { procede: "Contraste", citation: "« trou de verdure »", interpretation: "Le cadre lumineux contraste avec la mort du soldat.", keywords: ["contraste","couleurs","violence","lyrique"] }
    ]
  },
  {
    id: "GT-806",
    titre: "Mélancolie d’automne [Série 14]",
    auteur: "Verlaine",
    oeuvre: "Chanson d’automne",
    genre: "Poésie",
    diff: 1,
    texte: `Les sanglots longs des violons de l'automne blessent mon cœur d'une langueur monotone. Tout suffocant et blême, quand sonne l'heure, je me souviens des jours anciens et je pleure; et je m'en vais au vent mauvais qui m'emporte deçà, delà, pareil à la feuille morte. Le soir s'allonge et la cloche descend dans l'air humide; la ville s'efface; mon pas hésite comme une voix qui s'éteint dans le froid, et ma mémoire revient avec ses battements sourds.`,
    contexte: "Poème bref et musical de la nostalgie.",
    attendus: [
      { procede: "Allitération", citation: "« sanglots longs des violons »", interpretation: "Les sonorités prolongent la plainte.", keywords: ["allitération","musicalité","verlaine","mélancolie"] },
      { procede: "Comparaison", citation: "« Pareil à la feuille morte »", interpretation: "Le sujet se dit emporté par le temps.", keywords: ["comparaison","automne","temps","destin"] },
      { procede: "Registre lyrique", citation: "« je me souviens ... je pleure »", interpretation: "L'expression du moi structure le poème.", keywords: ["lyrique","souvenir","tristesse","poésie"] }
    ]
  },
  {
    id: "GT-807",
    titre: "Modernité de Zone [Série 14]",
    auteur: "Apollinaire",
    oeuvre: "Alcools",
    genre: "Poésie",
    diff: 3,
    texte: `A la fin tu es las de ce monde ancien. Bergère ô tour Eiffel le troupeau des ponts bêle ce matin. Tu en as assez de vivre dans l'antiquité grecque et romaine. Ici même les automobiles ont l'air d'être anciennes. La religion seule est restée toute neuve, la religion est restée simple comme les hangars de Port-Aviation. Seul en Europe tu n'es pas antique ô Christianisme. Et toi que les fenêtres observent, la honte te retient d'entrer dans une église et de t'y confesser ce matin.`,
    contexte: "Poétique de la modernité urbaine.",
    attendus: [
      { procede: "Apostrophe", citation: "« Bergère ô tour Eiffel »", interpretation: "L'image mêle tradition pastorale et ville moderne.", keywords: ["apostrophe","tour eiffel","modernité","apollinaire"] },
      { procede: "Antithèse", citation: "« monde ancien » / « moderne »", interpretation: "Le poème se construit sur une tension temporelle.", keywords: ["antithèse","ancien","moderne","avant-garde"] },
      { procede: "Vers libre", citation: "« A la fin tu es las de ce monde ancien »", interpretation: "L'absence de cadre métrique accompagne la mobilité du regard.", keywords: ["vers libre","rythme","montage","alcools"] }
    ]
  },
  {
    id: "GT-808",
    titre: "Incipit provincial [Série 14]",
    auteur: "Stendhal",
    oeuvre: "Le Rouge et le Noir",
    genre: "Roman",
    diff: 1,
    texte: `La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure.`,
    contexte: "Ouverture réaliste et ironique de la province.",
    attendus: [
      { procede: "Cadre", citation: "« La petite ville de Verrières »", interpretation: "L'incipit pose un espace social précis.", keywords: ["cadre","province","stendhal","réalisme"] },
      { procede: "Lexique mélioratif", citation: "« La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure. »", interpretation: "Le positif prépare une lecture critique.", keywords: ["lexique","ironie","bourgeoisie","roman"] },
      { procede: "Attente", citation: "« La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure. »", interpretation: "La promesse initiale sera démentie par le récit.", keywords: ["attente","promesse","narrateur","destin"] }
    ]
  },
  {
    id: "GT-809",
    titre: "Entrée de Charles [Série 14]",
    auteur: "Flaubert",
    oeuvre: "Madame Bovary",
    genre: "Roman",
    diff: 2,
    texte: `Nous étions à l'étude, quand le proviseur entra, suivi d'un nouveau habillé en bourgeois et d'un garçon de classe qui portait un grand pupitre. Ceux qui dormaient se réveillèrent, et chacun se leva comme surpris dans son travail. Le proviseur nous fit signe de nous rasseoir; puis, se tournant vers le maître d'études: « Monsieur Roger, lui dit-il, voici un élève que je vous recommande. » Resté dans l'angle, derrière la porte, si bien qu'on l'apercevait à peine, le nouveau était un gars de la campagne, embarrassé par les regards.`,
    contexte: "Scène d'entrée et de maladresse sociale.",
    attendus: [
      { procede: "Focalisation", citation: "« Nous étions à l'étude »", interpretation: "Le point de vue collectif installe la scène.", keywords: ["focalisation","collectif","flaubert","classe"] },
      { procede: "Réalisme social", citation: "« habillé en bourgeois »", interpretation: "Le vêtement marque immédiatement la position sociale.", keywords: ["réalisme","social","école","roman"] },
      { procede: "Caractérisation", citation: "« le nouveau était un gars de la campagne »", interpretation: "L'origine rurale prépare l'inadaptation.", keywords: ["caractérisation","charles","inadaptation","bovary"] }
    ]
  },
  {
    id: "GT-810",
    titre: "Nuit de Germinal [Série 14]",
    auteur: "Zola",
    oeuvre: "Germinal",
    genre: "Roman",
    diff: 1,
    texte: `Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucune ombre d'arbre ne tachait le ciel; le pavé se déroulait avec la rectitude d'une jetée, au milieu des ténèbres.`,
    contexte: "Incipit naturaliste d'une marche vers la mine.",
    attendus: [
      { procede: "Métaphore", citation: "« rafales larges comme sur une mer »", interpretation: "La plaine devient un espace hostile et océanique.", keywords: ["métaphore","paysage","zola","naturalisme"] },
      { procede: "Champ lexical", citation: "« Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucune ombre d'arbre ne tachait le ciel; le pavé se déroulait avec la rectitude d'une jetée, au milieu des ténèbres. »", interpretation: "La noirceur annonce la violence sociale.", keywords: ["champ lexical","noir","mine","drame"] },
      { procede: "Focalisation externe", citation: "« un homme suivait seul »", interpretation: "L'anonymat initial universalise la condition ouvrière.", keywords: ["focalisation","anonymat","ouvrier","roman"] }
    ]
  },
  {
    id: "GT-811",
    titre: "Armée en déroute [Série 14]",
    auteur: "Maupassant",
    oeuvre: "Boule de suif",
    genre: "Roman",
    diff: 1,
    texte: `Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes, noirs, barbus, sales, harassés, marchaient d'un air abattu, sans drapeau, sans régiment. Tous semblaient accablés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude, et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait des mobilisés paisibles, des francs-tireurs de parade, et des soldats vaincus que le hasard poussait encore.`,
    contexte: "Ouverture de guerre et de désordre collectif.",
    attendus: [
      { procede: "Accumulation", citation: "« noirs, barbus, sales, harassés »", interpretation: "L'énumération matérialise l'épuisement.", keywords: ["accumulation","guerre","épuisement","maupassant"] },
      { procede: "Description", citation: "« sans drapeau, sans régiment »", interpretation: "La défaite se lit dans la disparition des signes militaires.", keywords: ["description","défaite","armée","réalisme"] },
      { procede: "Antithèse", citation: "« Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes, noirs, barbus, sales, harassés, marchaient d'un air abattu, sans drapeau, sans régiment. Tous semblaient accablés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude, et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait des mobilisés paisibles, des francs-tireurs de parade, et des soldats vaincus que le hasard poussait encore. »", interpretation: "Le texte montre la volatilité des foules en guerre.", keywords: ["antithèse","foule","instabilité","histoire"] }
    ]
  },
  {
    id: "GT-812",
    titre: "Maison Vauquer [Série 14]",
    auteur: "Balzac",
    oeuvre: "Le Père Goriot",
    genre: "Roman",
    diff: 2,
    texte: `Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux. Depuis trente ans, n'y a-t-il jamais été vu de jeune personne; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. En 1819, époque où commence ce drame, il s'y trouvait pourtant une pauvre jeune fille.`,
    contexte: "Incipit réaliste d'un microcosme social parisien.",
    attendus: [
      { procede: "Précision", citation: "« rue Neuve-Sainte-Geneviève »", interpretation: "Le détail topographique ancre le récit dans le réel.", keywords: ["réalisme","paris","topographie","balzac"] },
      { procede: "Ironie", citation: "« Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux. Depuis trente ans, n'y a-t-il jamais été vu de jeune personne; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. En 1819, époque où commence ce drame, il s'y trouvait pourtant une pauvre jeune fille. »", interpretation: "La formule valorisante suggère en creux la médiocrité.", keywords: ["ironie","narrateur","milieu","société"] },
      { procede: "Annonce", citation: "« époque où commence ce drame »", interpretation: "Le narrateur prépare une trajectoire tragique.", keywords: ["annonce","drame","destin","roman"] }
    ]
  },
  {
    id: "GT-813",
    titre: "Marche vers la tombe [Série 14]",
    auteur: "Hugo",
    oeuvre: "Les Contemplations",
    genre: "Poésie",
    diff: 2,
    texte: `Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur.`,
    contexte: "Élégie du deuil filial.",
    attendus: [
      { procede: "Progression", citation: "« Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur. »", interpretation: "La marche géographique devient parcours intérieur.", keywords: ["progression","deuil","hugo","élégie"] },
      { procede: "Antithèse", citation: "« Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur. »", interpretation: "La douleur annule les repères du monde.", keywords: ["antithèse","douleur","intériorité","lyrique"] },
      { procede: "Chute", citation: "« sur ta tombe »", interpretation: "La destination funèbre reconfigure tout le poème.", keywords: ["chute","tombe","émotion","poésie"] }
    ]
  },
  {
    id: "GT-814",
    titre: "Allégorie de l’albatros [Série 14]",
    auteur: "Baudelaire",
    oeuvre: "Les Fleurs du mal",
    genre: "Poésie",
    diff: 1,
    texte: `Souvent, pour s'amuser, les hommes d'équipage prennent des albatros, vastes oiseaux des mers, qui suivent, indolents compagnons de voyage, le navire glissant sur les gouffres amers. A peine les ont-ils déposés sur les planches, que ces rois de l'azur, maladroits et honteux, laissent piteusement leurs grandes ailes blanches comme des avirons traîner à côté d'eux. Ce voyageur ailé, comme il est gauche et veule! Lui, naguère si beau, qu'il est comique et laid! Le Poète est semblable au prince des nuées.`,
    contexte: "Allégorie du poète inadapté au monde social.",
    attendus: [
      { procede: "Allégorie", citation: "« Le Poète est semblable au prince des nuées »", interpretation: "L'albatros figure la condition du créateur.", keywords: ["allégorie","poète","société","baudelaire"] },
      { procede: "Antithèse", citation: "« t-ils déposés sur les planches, que ces rois de l'azur, maladroits et honte »", interpretation: "La grandeur chute dans le ridicule terrestre.", keywords: ["antithèse","sublime","ridicule","modernité"] },
      { procede: "Ironie", citation: "« pour s'amuser »", interpretation: "La cruauté collective est banalisée par le divertissement.", keywords: ["ironie","cruauté","foule","symbolisme"] }
    ]
  },
  {
    id: "GT-815",
    titre: "Chants désespérés [Série 14]",
    auteur: "Musset",
    oeuvre: "La Nuit de mai",
    genre: "Poésie",
    diff: 2,
    texte: `Poète, prends ton luth et me donne un baiser; la fleur de l'églantier sent ses bourgeons éclore, le printemps naît ce soir, les vents vont s'embraser. Les plus désespérés sont les chants les plus beaux, et j'en sais d'immortels qui sont de purs sanglots. Lorsque le pélican, lassé d'un long voyage, retourne à ses roseaux, ses petits affamés courent sur le rivage en le voyant au loin s'abattre sur les eaux. Ainsi le poète nourrit son chant de sa propre blessure, et la douleur devient musique.`,
    contexte: "Poème dialogué sur la création née de la souffrance.",
    attendus: [
      { procede: "Maxime", citation: "« Les plus désespérés sont les chants les plus beaux »", interpretation: "La formule fait de la douleur une source esthétique.", keywords: ["maxime","désespoir","beauté","musset"] },
      { procede: "Symbole", citation: "« le pélican »", interpretation: "L'oiseau représente le sacrifice du poète.", keywords: ["symbole","pélican","sacrifice","lyrisme"] },
      { procede: "Dialogue", citation: "« Poète, prends ton luth »", interpretation: "L'échange Muse/Poète dramatise l'inspiration.", keywords: ["dialogue","muse","poète","création"] }
    ]
  },
  {
    id: "GT-816",
    titre: "Stratégie de Merteuil [Série 14]",
    auteur: "Laclos",
    oeuvre: "Les Liaisons dangereuses",
    genre: "Roman",
    diff: 3,
    texte: `Vous voilà donc bien heureux de votre dernière conquête! Vous m'écrivez trois pages pour me vanter une paysanne. J'en ris encore. Croyez-vous me faire envie? Je connais vos ruses. Vous voulez me piquer, me faire croire que vous n'avez plus besoin de moi. D'ailleurs, ce n'est pas Cécile qui m'intéresse; c'est vous. Je veux savoir si vous oserez exécuter le plan que nous avons formé. Préférez-vous la vertu de Mme de Tourvel à la gloire de me plaire? Choisissez. Si vous hésitez, je comprendrai que vous avez faibli, et je saurai me venger.`,
    contexte: "Lettre de manipulation dans le roman libertin.",
    attendus: [
      { procede: "Registre épistolaire", citation: "« Vous m'écrivez trois pages »", interpretation: "La forme lettre sert la stratégie psychologique.", keywords: ["épistolaire","lettre","laclos","manipulation"] },
      { procede: "Ironie", citation: "« J'en ris encore »", interpretation: "La moquerie masque une volonté de domination.", keywords: ["ironie","merteuil","pouvoir","stratégie"] },
      { procede: "Antithèse", citation: "« vertu de Mme de Tourvel » / « gloire de me plaire »", interpretation: "Le conflit oppose morale et libertinage.", keywords: ["antithèse","vertu","séduction","libertinage"] }
    ]
  },
  {
    id: "GT-817",
    titre: "Dialogue du Neveu [Série 14]",
    auteur: "Diderot",
    oeuvre: "Le Neveu de Rameau",
    genre: "Idées",
    diff: 2,
    texte: `Je ne connais pas de plus grand charlatan que celui qui prétend enseigner ce qu'il ne sait pas. Le monde est plein de ces pédants qui récitent des maximes et ne les pratiquent point. Ils ont l'air grave, le ton sentencieux, et l'on les écoute; mais suivez-les chez eux, vous les verrez mentir, voler, tricher, se livrer à toutes les turpitudes qu'ils condamnent en public. Le Neveu rit de tout cela: « Morale! c'est le masque du faible devant le fort. » Je lui réponds que sans morale, la société tombe en ruine. Le dialogue ne tranche pas; il oblige à penser.`,
    contexte: "Satire philosophique de l’hypocrisie sociale.",
    attendus: [
      { procede: "Ironie", citation: "« l'air grave, le ton sentencieux »", interpretation: "Le portrait dénonce les faux moralistes.", keywords: ["ironie","pédants","hypocrisie","diderot"] },
      { procede: "Antithèse", citation: "« sans morale, la société tombe » / « Morale! c'est le masque »", interpretation: "Le texte confronte deux conceptions irréconciliables.", keywords: ["antithèse","morale","cynisme","dialogue"] },
      { procede: "Registre argumentatif", citation: "« Le dialogue ne tranche pas »", interpretation: "La pensée progresse par confrontation des voix.", keywords: ["argumentatif","débat","philosophie","lumières"] }
    ]
  },
  {
    id: "GT-818",
    titre: "Mal du siècle [Série 14]",
    auteur: "Chateaubriand",
    oeuvre: "René",
    genre: "Roman",
    diff: 2,
    texte: `Les solitudes me parlent une langue que je comprends; les grands bois, les montagnes, les mers désertes me rendent ce que les hommes m'ont pris. J'ai passé ma jeunesse à fuir les villes, à chercher des lieux où le vent souffle sans témoin, où l'on peut pleurer sans ridicule. Amélie, ma sœur, partageait autrefois ces errances; mais le monde a séparé nos destins, et je reste seul avec mon mal du siècle, ce vague à l'âme qui consume sans éclat. Les ruines, les tombeaux, les crépuscules m'attirent: je ne cherche pas le bonheur, je cherche une émotion forte.`,
    contexte: "Confession romantique et solitude existentielle.",
    attendus: [
      { procede: "Personnification", citation: "« Les solitudes me parlent »", interpretation: "La nature devient interlocutrice du moi.", keywords: ["personnification","nature","romantisme","rené"] },
      { procede: "Registre lyrique", citation: "« ce vague à l'âme »", interpretation: "Le texte exprime la crise intime du sujet romantique.", keywords: ["lyrique","mal du siècle","subjectivité","chateaubriand"] },
      { procede: "Antithèse", citation: "« Je ne cherche pas le bonheur » / « une émotion forte »", interpretation: "Le héros refuse la modération bourgeoise.", keywords: ["antithèse","bonheur","intensité","roman"] }
    ]
  },
  {
    id: "GT-819",
    titre: "Passion à la cour [Série 14]",
    auteur: "Lafayette",
    oeuvre: "La Princesse de Clèves",
    genre: "Roman",
    diff: 3,
    texte: `La cour était alors dans une magnificence qu'on n'a jamais vue depuis. L'ambition et la galanterie régnaient en même temps et occupaient également les esprits; l'un et l'autre trouvaient souvent des moyens de se concilier, et l'on ne savait lequel emportait l'avantage. Mme de Clèves, jeune, belle, et mariée au prince de Clèves, ne connaissait pas encore la violence de la passion. Elle croyait que l'honnêteté suffisait à régler la conduite. Mais le duc de Nemours parut: il était de ces hommes que la nature semble avoir formés pour se faire aimer.`,
    contexte: "Exposition du roman de passion classique.",
    attendus: [
      { procede: "Tableau social", citation: "« L'ambition et la galanterie régnaient »", interpretation: "Le cadre de cour organise les comportements.", keywords: ["cour","mœurs","galanterie","lafayette"] },
      { procede: "Antithèse", citation: "« Elle croyait que l'honnêteté suffisait à régler la conduite »", interpretation: "Le conflit moral est lancé dès l’exposition.", keywords: ["antithèse","vertu","passion","roman"] },
      { procede: "Caractérisation", citation: "« formés pour se faire aimer »", interpretation: "Nemours apparaît comme type du séducteur.", keywords: ["caractérisation","nemours","désir","classicisme"] }
    ]
  }
  ],
  15: [
  {
    id: "GT-820",
    titre: "Sous le ciel d’Austerlitz",
    auteur: "Tolstoï",
    oeuvre: "Guerre et Paix (trad. fr.)",
    genre: "Roman",
    diff: 2,
    texte: `Le prince André, tombé sur le champ de bataille, regardait le ciel immense, haut, tranquille, éternel. Comme tout était calme, solennel, incomparable, et comme c'était loin de ce tumulte, de ces cris, de cette fuite! Comment n'avais-je pas vu auparavant ce ciel élevé? Tout est vanité, tout est mensonge, sauf ce ciel infini. Il n'y a rien, rien que lui. Et même lui n'est pas, il n'y a rien que le silence et la paix. Grâce à Dieu! pensa-t-il, en oubliant la gloire militaire qu'il poursuivait la veille.`,
    contexte: "Épiphanie existentielle pendant la guerre.",
    attendus: [
      { procede: "Contraste", citation: "« ciel immense » / « tumulte »", interpretation: "Le regard spirituel annule le fracas historique.", keywords: ["contraste","guerre","intériorité","tolstoï"] },
      { procede: "Interrogation", citation: "« Comment n'avais-je pas vu »", interpretation: "La question marque une conversion du personnage.", keywords: ["interrogation","prise de conscience","roman","épiphanie"] },
      { procede: "Maxime", citation: "« Tout est vanité »", interpretation: "La formule condense une méditation morale.", keywords: ["maxime","vanité","paix","austerlitz"] }
    ]
  },
  {
    id: "GT-821",
    titre: "Être ou ne pas être",
    auteur: "Shakespeare",
    oeuvre: "Hamlet (trad. Hugo)",
    genre: "Théâtre",
    diff: 2,
    texte: `Être ou ne pas être, c'est là la question. Y a-t-il plus de noblesse d'âme à souffrir les outrages et les flèches de la fortune outrageante, ou à prendre les armes contre une mer de troubles, et, en les combattant, y mettre fin? Mourir: dormir; plus rien; et dire qu'avec ce sommeil nous mettons fin aux maux du cœur et aux mille chocs naturels dont hérite la chair, c'est une consommation dévouée à souhaiter. Mourir: dormir; dormir! peut-être rêver. Voilà l'embarras.`,
    contexte: "Soliloque existentiel du héros tragique.",
    attendus: [
      { procede: "Antithèse", citation: "« Être ou ne pas être »", interpretation: "La tragédie s’ouvre sur une alternative absolue.", keywords: ["antithèse","existence","hamlet","tragédie"] },
      { procede: "Métaphore", citation: "« une mer de troubles »", interpretation: "La souffrance est figurée comme immensité hostile.", keywords: ["métaphore","troubles","douleur","théâtre"] },
      { procede: "Monologue", citation: "« c'est là la question »", interpretation: "La conscience en crise devient spectacle.", keywords: ["monologue","conscience","crise","shakespeare"] }
    ]
  },
  {
    id: "GT-822",
    titre: "Arrestation de K.",
    auteur: "Kafka",
    oeuvre: "Le Procès (trad. fr.)",
    genre: "Roman",
    diff: 2,
    texte: `Quelqu'un avait dû calomnier Joseph K., car, sans avoir rien fait de mal, il fut arrêté un matin. La cuisinière de Mme Grubach, sa logeuse, ne lui apporta pas son petit déjeuner; c'était la première fois. Il attendit un moment, puis sonna. Un homme qu'il n'avait jamais vu entra et lui dit qu'il n'avait pas le droit de sortir. K. demanda: « De quoi suis-je accusé? » L'homme répondit: « Nous ne sommes pas autorisés à vous le dire. » K. sentit qu'une machine obscure s'était mise en marche et qu'elle l'enveloppait déjà.`,
    contexte: "Incipit de la culpabilité sans cause.",
    attendus: [
      { procede: "Incipit", citation: "« sans avoir rien fait de mal, il fut arrêté »", interpretation: "L’absurde judiciaire est posé immédiatement.", keywords: ["incipit","absurde","procès","kafka"] },
      { procede: "Question sans réponse", citation: "« De quoi suis-je accusé? »", interpretation: "L'opacité de l'autorité nourrit l'angoisse.", keywords: ["question","opacité","angoisse","roman"] },
      { procede: "Métaphore", citation: "« une machine obscure »", interpretation: "Le pouvoir impersonnel devient mécanisme inexorable.", keywords: ["métaphore","pouvoir","bureaucratie","modernité"] }
    ]
  },
  {
    id: "GT-823",
    titre: "Incipit de Don Quichotte",
    auteur: "Cervantès",
    oeuvre: "Don Quichotte (trad. fr.)",
    genre: "Roman",
    diff: 2,
    texte: `Dans un village de la Manche, dont je ne veux pas me rappeler le nom, vivait, il n'y a pas longtemps, un de ces gentilshommes qui ont lance au râtelier, rondache antique, maigre rosse et lévrier de chasse. Un pot-au-feu plus souvent de bœuf que de mouton, quelque pigeonneau le dimanche, consumaient les trois quarts de son revenu. Le reste passait en casaque de fin drap et haut-de-chausses de velours. Ce brave homme avait près de cinquante ans, sec de corps, maigre de visage, fort matinal et grand ami de la chasse.`,
    contexte: "Ouverture parodique du roman moderne.",
    attendus: [
      { procede: "Incipit", citation: "« Dans un village de la Manche »", interpretation: "Le récit part d’un cadre concret et ironique.", keywords: ["incipit","cadre","roman","cervantès"] },
      { procede: "Accumulation", citation: "« lance au râtelier, rondache antique, maigre rosse »", interpretation: "Le portrait compose un héros dérisoire.", keywords: ["accumulation","portrait","parodie","chevalerie"] },
      { procede: "Ironie", citation: "« dont je ne veux pas me rappeler le nom »", interpretation: "La désinvolture narrative signale la distance comique.", keywords: ["ironie","narrateur","burlesque","moderne"] }
    ]
  },
  {
    id: "GT-824",
    titre: "Prière pour la tolérance [Série 15]",
    auteur: "Voltaire",
    oeuvre: "Traité sur la tolérance",
    genre: "Idées",
    diff: 3,
    texte: `Ce n'est donc plus aux hommes que je m'adresse; c'est à toi, Dieu de tous les êtres, de tous les mondes et de tous les temps: s'il est permis à de faibles créatures, perdues dans l'immensité et imperceptibles au reste de l'univers, d'oser te demander quelque chose, à toi qui as tout donné, à toi dont les décrets sont immuables comme éternels, daigne regarder en pitié les erreurs attachées à notre nature; que ces erreurs ne fassent point nos calamités. Tu ne nous as point donné un cœur pour nous haïr, et des mains pour nous égorger; fais que nous nous aidions mutuellement à supporter le fardeau d'une vie pénible et passagère.`,
    contexte: "Prière philosophique contre l'intolérance religieuse.",
    attendus: [
      { procede: "Apostrophe", citation: "« c'est à toi, Dieu de tous les êtres »", interpretation: "L'adresse solennelle universalise la demande morale.", keywords: ["apostrophe","universel","tolérance","voltaire"] },
      { procede: "Antithèse", citation: "« Tu ne nous as point donné un cœur pour nous haïr, et des mains pour n »", interpretation: "Le texte oppose la violence à la fraternité.", keywords: ["antithèse","haine","fraternité","lumières"] },
      { procede: "Registre oratoire", citation: "« daigne regarder en pitié »", interpretation: "Le ton de supplication renforce la portée civique.", keywords: ["oratoire","prière","argumentation","idées"] }
    ]
  },
  {
    id: "GT-825",
    titre: "Aveu de Phèdre [Série 15]",
    auteur: "Racine",
    oeuvre: "Phèdre",
    genre: "Théâtre",
    diff: 2,
    texte: `Je le vis, je rougis, je pâlis à sa vue; un trouble s'éleva dans mon âme éperdue; mes yeux ne voyaient plus, je ne pouvais parler; je sentis tout mon corps et transir et brûler. Je reconnus Vénus et ses feux redoutables, d'un sang qu'elle poursuit tourments inévitables. Par des vœux assidus je crus les détourner: je lui bâtis un temple, et pris soin de l'orner; de victimes moi-même à toute heure entourée, je cherchais dans leurs flancs ma raison égarée. Ainsi, la passion se fait faute, et la faute se fait destin.`,
    contexte: "Aveu tragique d'une passion impossible.",
    attendus: [
      { procede: "Parallélisme", citation: "« Je le vis, je rougis, je pâlis »", interpretation: "Le rythme ternaire dramatise le choc amoureux.", keywords: ["parallélisme","aveu","tragédie","racine"] },
      { procede: "Antithèse", citation: "« transir et brûler »", interpretation: "Le désir se dit dans une contradiction corporelle.", keywords: ["antithèse","désir","douleur","pathétique"] },
      { procede: "Mythologie", citation: "« Je reconnus Vénus »", interpretation: "La référence divine inscrit la passion dans la fatalité.", keywords: ["mythologie","fatalité","vénus","tragique"] }
    ]
  },
  {
    id: "GT-826",
    titre: "Dilemme de Rodrigue [Série 15]",
    auteur: "Corneille",
    oeuvre: "Le Cid",
    genre: "Théâtre",
    diff: 2,
    texte: `Percé jusques au fond du cœur d'une atteinte imprévue aussi bien que mortelle, misérable vengeur d'une juste querelle, et malheureux objet d'une injuste rigueur, je demeure immobile, et mon âme abattue cède au coup qui me tue. En cet affront mon père est l'offensé, et l'offenseur le père de Chimène. Que je sens de rudes combats! contre mon propre honneur mon amour s'intéresse. Faut-il perdre Chimène, ou trahir mon lignage? le héros naît dans cette hésitation.`,
    contexte: "Conflit classique entre honneur et amour.",
    attendus: [
      { procede: "Antithèse", citation: "« contre mon propre honneur mon amour s'intéresse. »", interpretation: "La symétrie formule l'impasse morale.", keywords: ["antithèse","honneur","amour","corneille"] },
      { procede: "Registre tragique", citation: "« Percé jusques au fond du cœur »", interpretation: "La douleur morale prend la forme d'une blessure.", keywords: ["tragique","souffrance","dilemme","théâtre"] },
      { procede: "Exclamation", citation: "« Que je sens de rudes combats! »", interpretation: "L'exclamation rend sensible l'urgence intérieure.", keywords: ["exclamation","combat","pathétique","classicisme"] }
    ]
  },
  {
    id: "GT-827",
    titre: "Aveuglement d’Orgon [Série 15]",
    auteur: "Molière",
    oeuvre: "Tartuffe",
    genre: "Théâtre",
    diff: 3,
    texte: `Ha! si vous aviez vu comme j'en fis rencontre, vous auriez pris pour lui l'amitié que je montre. Chaque jour à l'église il venait, d'un air doux, tout vis-à-vis de moi se mettre à deux genoux. Il attirait les yeux de l'assemblée entière par l'ardeur dont au Ciel il poussait sa prière; il faisait des soupirs, de grands élancements, et baisait humblement la terre à tous moments. Et lorsque je sortais, il me devançait vite pour m'aller à la porte offrir de l'eau bénite. Et Tartuffe? Le pauvre homme!`,
    contexte: "Portrait comique d'un faux dévot.",
    attendus: [
      { procede: "Comique de caractère", citation: "« Le pauvre homme! »", interpretation: "Le refrain signale l'aveuglement d'Orgon.", keywords: ["comique","orgon","imposture","molière"] },
      { procede: "Accumulation", citation: "« soupirs, de grands élancements »", interpretation: "La surenchère gestuelle dénonce l'hypocrisie.", keywords: ["accumulation","hypocrisie","satire","dévotion"] },
      { procede: "Ironie dramatique", citation: "« Et Tartuffe? »", interpretation: "Le spectateur comprend ce qu'Orgon refuse de voir.", keywords: ["ironie dramatique","spectateur","théâtre","classicisme"] }
    ]
  },
  {
    id: "GT-828",
    titre: "Morale du plus fort [Série 15]",
    auteur: "La Fontaine",
    oeuvre: "Fables",
    genre: "Poésie",
    diff: 3,
    texte: `La raison du plus fort est toujours la meilleure: nous l'allons montrer tout à l'heure. Un Agneau se désaltérait dans le courant d'une onde pure. Un Loup survient à jeun, qui cherchait aventure, et que la faim en ces lieux attirait. Qui te rend si hardi de troubler mon breuvage? dit cet animal plein de rage: tu seras châtié de ta témérité. Sire, répond l'Agneau, que Votre Majesté ne se mette pas en colère; mais plutôt qu'elle considère que je me vas désaltérant plus de vingt pas au-dessous d'Elle.`,
    contexte: "Fable sur l'arbitraire de la force.",
    attendus: [
      { procede: "Morale", citation: "« La raison du plus fort est toujours la meilleure »", interpretation: "La moralité initiale donne la clé de lecture politique.", keywords: ["morale","force","justice","fable"] },
      { procede: "Dialogue", citation: "« Qui te rend si hardi »", interpretation: "Le discours direct met en scène un procès biaisé.", keywords: ["dialogue","procès","injustice","allégorie"] },
      { procede: "Ironie", citation: "« Votre Majesté »", interpretation: "La politesse de l'agneau souligne la brutalité du loup.", keywords: ["ironie","domination","la fontaine","pouvoir"] }
    ]
  },
  {
    id: "GT-829",
    titre: "Le soldat endormi [Série 15]",
    auteur: "Rimbaud",
    oeuvre: "Le Dormeur du val",
    genre: "Poésie",
    diff: 1,
    texte: `C'est un trou de verdure où chante une rivière accrochant follement aux herbes des haillons d'argent; où le soleil, de la montagne fière, luit: c'est un petit val qui mousse de rayons. Un soldat jeune, bouche ouverte, tête nue, et la nuque baignant dans le frais cresson bleu, dort; il est étendu dans l'herbe, sous la nue, pâle dans son lit vert où la lumière pleut. Les parfums ne font pas frissonner sa narine; il dort dans le soleil, la main sur sa poitrine, tranquille. Il a deux trous rouges au côté droit.`,
    contexte: "Poème de guerre à chute brutale.",
    attendus: [
      { procede: "Chute", citation: "« Il a deux trous rouges au côté droit »", interpretation: "Le dernier vers renverse la lecture bucolique.", keywords: ["chute","guerre","mort","rimbaud"] },
      { procede: "Personnification", citation: "« C'est un trou de verdure où chante une rivière accrochant follement aux herbes des haillons d'argent; où le soleil, de la montagne fière, luit: c'est un petit val qui mousse de rayons. Un soldat jeune, bouche ouverte, tête nue, et la nuque baignant dans le frais cresson bleu, dort; il est étendu dans l'herbe, sous la nue, pâle dans son lit vert où la lumière pleut. Les parfums ne font pas frissonner sa narine; il dort dans le soleil, la main sur sa poitrine, tranquille. Il a deux trous rouges au côté droit. »", interpretation: "La nature maternelle reste impuissante face à la guerre.", keywords: ["personnification","nature","pathétique","poésie"] },
      { procede: "Contraste", citation: "« trou de verdure »", interpretation: "Le cadre lumineux contraste avec la mort du soldat.", keywords: ["contraste","couleurs","violence","lyrique"] }
    ]
  },
  {
    id: "GT-830",
    titre: "Mélancolie d’automne [Série 15]",
    auteur: "Verlaine",
    oeuvre: "Chanson d’automne",
    genre: "Poésie",
    diff: 2,
    texte: `Les sanglots longs des violons de l'automne blessent mon cœur d'une langueur monotone. Tout suffocant et blême, quand sonne l'heure, je me souviens des jours anciens et je pleure; et je m'en vais au vent mauvais qui m'emporte deçà, delà, pareil à la feuille morte. Le soir s'allonge et la cloche descend dans l'air humide; la ville s'efface; mon pas hésite comme une voix qui s'éteint dans le froid, et ma mémoire revient avec ses battements sourds.`,
    contexte: "Poème bref et musical de la nostalgie.",
    attendus: [
      { procede: "Allitération", citation: "« sanglots longs des violons »", interpretation: "Les sonorités prolongent la plainte.", keywords: ["allitération","musicalité","verlaine","mélancolie"] },
      { procede: "Comparaison", citation: "« Pareil à la feuille morte »", interpretation: "Le sujet se dit emporté par le temps.", keywords: ["comparaison","automne","temps","destin"] },
      { procede: "Registre lyrique", citation: "« je me souviens ... je pleure »", interpretation: "L'expression du moi structure le poème.", keywords: ["lyrique","souvenir","tristesse","poésie"] }
    ]
  },
  {
    id: "GT-831",
    titre: "Modernité de Zone [Série 15]",
    auteur: "Apollinaire",
    oeuvre: "Alcools",
    genre: "Poésie",
    diff: 1,
    texte: `A la fin tu es las de ce monde ancien. Bergère ô tour Eiffel le troupeau des ponts bêle ce matin. Tu en as assez de vivre dans l'antiquité grecque et romaine. Ici même les automobiles ont l'air d'être anciennes. La religion seule est restée toute neuve, la religion est restée simple comme les hangars de Port-Aviation. Seul en Europe tu n'es pas antique ô Christianisme. Et toi que les fenêtres observent, la honte te retient d'entrer dans une église et de t'y confesser ce matin.`,
    contexte: "Poétique de la modernité urbaine.",
    attendus: [
      { procede: "Apostrophe", citation: "« Bergère ô tour Eiffel »", interpretation: "L'image mêle tradition pastorale et ville moderne.", keywords: ["apostrophe","tour eiffel","modernité","apollinaire"] },
      { procede: "Antithèse", citation: "« monde ancien » / « moderne »", interpretation: "Le poème se construit sur une tension temporelle.", keywords: ["antithèse","ancien","moderne","avant-garde"] },
      { procede: "Vers libre", citation: "« A la fin tu es las de ce monde ancien »", interpretation: "L'absence de cadre métrique accompagne la mobilité du regard.", keywords: ["vers libre","rythme","montage","alcools"] }
    ]
  },
  {
    id: "GT-832",
    titre: "Incipit provincial [Série 15]",
    auteur: "Stendhal",
    oeuvre: "Le Rouge et le Noir",
    genre: "Roman",
    diff: 2,
    texte: `La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure.`,
    contexte: "Ouverture réaliste et ironique de la province.",
    attendus: [
      { procede: "Cadre", citation: "« La petite ville de Verrières »", interpretation: "L'incipit pose un espace social précis.", keywords: ["cadre","province","stendhal","réalisme"] },
      { procede: "Lexique mélioratif", citation: "« La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure. »", interpretation: "Le positif prépare une lecture critique.", keywords: ["lexique","ironie","bourgeoisie","roman"] },
      { procede: "Attente", citation: "« La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure. »", interpretation: "La promesse initiale sera démentie par le récit.", keywords: ["attente","promesse","narrateur","destin"] }
    ]
  },
  {
    id: "GT-833",
    titre: "Entrée de Charles [Série 15]",
    auteur: "Flaubert",
    oeuvre: "Madame Bovary",
    genre: "Roman",
    diff: 3,
    texte: `Nous étions à l'étude, quand le proviseur entra, suivi d'un nouveau habillé en bourgeois et d'un garçon de classe qui portait un grand pupitre. Ceux qui dormaient se réveillèrent, et chacun se leva comme surpris dans son travail. Le proviseur nous fit signe de nous rasseoir; puis, se tournant vers le maître d'études: « Monsieur Roger, lui dit-il, voici un élève que je vous recommande. » Resté dans l'angle, derrière la porte, si bien qu'on l'apercevait à peine, le nouveau était un gars de la campagne, embarrassé par les regards.`,
    contexte: "Scène d'entrée et de maladresse sociale.",
    attendus: [
      { procede: "Focalisation", citation: "« Nous étions à l'étude »", interpretation: "Le point de vue collectif installe la scène.", keywords: ["focalisation","collectif","flaubert","classe"] },
      { procede: "Réalisme social", citation: "« habillé en bourgeois »", interpretation: "Le vêtement marque immédiatement la position sociale.", keywords: ["réalisme","social","école","roman"] },
      { procede: "Caractérisation", citation: "« le nouveau était un gars de la campagne »", interpretation: "L'origine rurale prépare l'inadaptation.", keywords: ["caractérisation","charles","inadaptation","bovary"] }
    ]
  },
  {
    id: "GT-834",
    titre: "Nuit de Germinal [Série 15]",
    auteur: "Zola",
    oeuvre: "Germinal",
    genre: "Roman",
    diff: 2,
    texte: `Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucune ombre d'arbre ne tachait le ciel; le pavé se déroulait avec la rectitude d'une jetée, au milieu des ténèbres.`,
    contexte: "Incipit naturaliste d'une marche vers la mine.",
    attendus: [
      { procede: "Métaphore", citation: "« rafales larges comme sur une mer »", interpretation: "La plaine devient un espace hostile et océanique.", keywords: ["métaphore","paysage","zola","naturalisme"] },
      { procede: "Champ lexical", citation: "« Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucune ombre d'arbre ne tachait le ciel; le pavé se déroulait avec la rectitude d'une jetée, au milieu des ténèbres. »", interpretation: "La noirceur annonce la violence sociale.", keywords: ["champ lexical","noir","mine","drame"] },
      { procede: "Focalisation externe", citation: "« un homme suivait seul »", interpretation: "L'anonymat initial universalise la condition ouvrière.", keywords: ["focalisation","anonymat","ouvrier","roman"] }
    ]
  },
  {
    id: "GT-835",
    titre: "Armée en déroute [Série 15]",
    auteur: "Maupassant",
    oeuvre: "Boule de suif",
    genre: "Roman",
    diff: 2,
    texte: `Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes, noirs, barbus, sales, harassés, marchaient d'un air abattu, sans drapeau, sans régiment. Tous semblaient accablés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude, et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait des mobilisés paisibles, des francs-tireurs de parade, et des soldats vaincus que le hasard poussait encore.`,
    contexte: "Ouverture de guerre et de désordre collectif.",
    attendus: [
      { procede: "Accumulation", citation: "« noirs, barbus, sales, harassés »", interpretation: "L'énumération matérialise l'épuisement.", keywords: ["accumulation","guerre","épuisement","maupassant"] },
      { procede: "Description", citation: "« sans drapeau, sans régiment »", interpretation: "La défaite se lit dans la disparition des signes militaires.", keywords: ["description","défaite","armée","réalisme"] },
      { procede: "Antithèse", citation: "« Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes, noirs, barbus, sales, harassés, marchaient d'un air abattu, sans drapeau, sans régiment. Tous semblaient accablés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude, et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait des mobilisés paisibles, des francs-tireurs de parade, et des soldats vaincus que le hasard poussait encore. »", interpretation: "Le texte montre la volatilité des foules en guerre.", keywords: ["antithèse","foule","instabilité","histoire"] }
    ]
  },
  {
    id: "GT-836",
    titre: "Maison Vauquer [Série 15]",
    auteur: "Balzac",
    oeuvre: "Le Père Goriot",
    genre: "Roman",
    diff: 3,
    texte: `Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux. Depuis trente ans, n'y a-t-il jamais été vu de jeune personne; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. En 1819, époque où commence ce drame, il s'y trouvait pourtant une pauvre jeune fille.`,
    contexte: "Incipit réaliste d'un microcosme social parisien.",
    attendus: [
      { procede: "Précision", citation: "« rue Neuve-Sainte-Geneviève »", interpretation: "Le détail topographique ancre le récit dans le réel.", keywords: ["réalisme","paris","topographie","balzac"] },
      { procede: "Ironie", citation: "« Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux. Depuis trente ans, n'y a-t-il jamais été vu de jeune personne; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. En 1819, époque où commence ce drame, il s'y trouvait pourtant une pauvre jeune fille. »", interpretation: "La formule valorisante suggère en creux la médiocrité.", keywords: ["ironie","narrateur","milieu","société"] },
      { procede: "Annonce", citation: "« époque où commence ce drame »", interpretation: "Le narrateur prépare une trajectoire tragique.", keywords: ["annonce","drame","destin","roman"] }
    ]
  },
  {
    id: "GT-837",
    titre: "Marche vers la tombe [Série 15]",
    auteur: "Hugo",
    oeuvre: "Les Contemplations",
    genre: "Poésie",
    diff: 3,
    texte: `Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur.`,
    contexte: "Élégie du deuil filial.",
    attendus: [
      { procede: "Progression", citation: "« Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur. »", interpretation: "La marche géographique devient parcours intérieur.", keywords: ["progression","deuil","hugo","élégie"] },
      { procede: "Antithèse", citation: "« Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur. »", interpretation: "La douleur annule les repères du monde.", keywords: ["antithèse","douleur","intériorité","lyrique"] },
      { procede: "Chute", citation: "« sur ta tombe »", interpretation: "La destination funèbre reconfigure tout le poème.", keywords: ["chute","tombe","émotion","poésie"] }
    ]
  },
  {
    id: "GT-838",
    titre: "Allégorie de l’albatros [Série 15]",
    auteur: "Baudelaire",
    oeuvre: "Les Fleurs du mal",
    genre: "Poésie",
    diff: 2,
    texte: `Souvent, pour s'amuser, les hommes d'équipage prennent des albatros, vastes oiseaux des mers, qui suivent, indolents compagnons de voyage, le navire glissant sur les gouffres amers. A peine les ont-ils déposés sur les planches, que ces rois de l'azur, maladroits et honteux, laissent piteusement leurs grandes ailes blanches comme des avirons traîner à côté d'eux. Ce voyageur ailé, comme il est gauche et veule! Lui, naguère si beau, qu'il est comique et laid! Le Poète est semblable au prince des nuées.`,
    contexte: "Allégorie du poète inadapté au monde social.",
    attendus: [
      { procede: "Allégorie", citation: "« Le Poète est semblable au prince des nuées »", interpretation: "L'albatros figure la condition du créateur.", keywords: ["allégorie","poète","société","baudelaire"] },
      { procede: "Antithèse", citation: "« t-ils déposés sur les planches, que ces rois de l'azur, maladroits et honte »", interpretation: "La grandeur chute dans le ridicule terrestre.", keywords: ["antithèse","sublime","ridicule","modernité"] },
      { procede: "Ironie", citation: "« pour s'amuser »", interpretation: "La cruauté collective est banalisée par le divertissement.", keywords: ["ironie","cruauté","foule","symbolisme"] }
    ]
  },
  {
    id: "GT-839",
    titre: "Chants désespérés [Série 15]",
    auteur: "Musset",
    oeuvre: "La Nuit de mai",
    genre: "Poésie",
    diff: 3,
    texte: `Poète, prends ton luth et me donne un baiser; la fleur de l'églantier sent ses bourgeons éclore, le printemps naît ce soir, les vents vont s'embraser. Les plus désespérés sont les chants les plus beaux, et j'en sais d'immortels qui sont de purs sanglots. Lorsque le pélican, lassé d'un long voyage, retourne à ses roseaux, ses petits affamés courent sur le rivage en le voyant au loin s'abattre sur les eaux. Ainsi le poète nourrit son chant de sa propre blessure, et la douleur devient musique.`,
    contexte: "Poème dialogué sur la création née de la souffrance.",
    attendus: [
      { procede: "Maxime", citation: "« Les plus désespérés sont les chants les plus beaux »", interpretation: "La formule fait de la douleur une source esthétique.", keywords: ["maxime","désespoir","beauté","musset"] },
      { procede: "Symbole", citation: "« le pélican »", interpretation: "L'oiseau représente le sacrifice du poète.", keywords: ["symbole","pélican","sacrifice","lyrisme"] },
      { procede: "Dialogue", citation: "« Poète, prends ton luth »", interpretation: "L'échange Muse/Poète dramatise l'inspiration.", keywords: ["dialogue","muse","poète","création"] }
    ]
  },
  {
    id: "GT-840",
    titre: "Stratégie de Merteuil [Série 15]",
    auteur: "Laclos",
    oeuvre: "Les Liaisons dangereuses",
    genre: "Roman",
    diff: 1,
    texte: `Vous voilà donc bien heureux de votre dernière conquête! Vous m'écrivez trois pages pour me vanter une paysanne. J'en ris encore. Croyez-vous me faire envie? Je connais vos ruses. Vous voulez me piquer, me faire croire que vous n'avez plus besoin de moi. D'ailleurs, ce n'est pas Cécile qui m'intéresse; c'est vous. Je veux savoir si vous oserez exécuter le plan que nous avons formé. Préférez-vous la vertu de Mme de Tourvel à la gloire de me plaire? Choisissez. Si vous hésitez, je comprendrai que vous avez faibli, et je saurai me venger.`,
    contexte: "Lettre de manipulation dans le roman libertin.",
    attendus: [
      { procede: "Registre épistolaire", citation: "« Vous m'écrivez trois pages »", interpretation: "La forme lettre sert la stratégie psychologique.", keywords: ["épistolaire","lettre","laclos","manipulation"] },
      { procede: "Ironie", citation: "« J'en ris encore »", interpretation: "La moquerie masque une volonté de domination.", keywords: ["ironie","merteuil","pouvoir","stratégie"] },
      { procede: "Antithèse", citation: "« vertu de Mme de Tourvel » / « gloire de me plaire »", interpretation: "Le conflit oppose morale et libertinage.", keywords: ["antithèse","vertu","séduction","libertinage"] }
    ]
  },
  {
    id: "GT-841",
    titre: "Dialogue du Neveu [Série 15]",
    auteur: "Diderot",
    oeuvre: "Le Neveu de Rameau",
    genre: "Idées",
    diff: 3,
    texte: `Je ne connais pas de plus grand charlatan que celui qui prétend enseigner ce qu'il ne sait pas. Le monde est plein de ces pédants qui récitent des maximes et ne les pratiquent point. Ils ont l'air grave, le ton sentencieux, et l'on les écoute; mais suivez-les chez eux, vous les verrez mentir, voler, tricher, se livrer à toutes les turpitudes qu'ils condamnent en public. Le Neveu rit de tout cela: « Morale! c'est le masque du faible devant le fort. » Je lui réponds que sans morale, la société tombe en ruine. Le dialogue ne tranche pas; il oblige à penser.`,
    contexte: "Satire philosophique de l’hypocrisie sociale.",
    attendus: [
      { procede: "Ironie", citation: "« l'air grave, le ton sentencieux »", interpretation: "Le portrait dénonce les faux moralistes.", keywords: ["ironie","pédants","hypocrisie","diderot"] },
      { procede: "Antithèse", citation: "« sans morale, la société tombe » / « Morale! c'est le masque »", interpretation: "Le texte confronte deux conceptions irréconciliables.", keywords: ["antithèse","morale","cynisme","dialogue"] },
      { procede: "Registre argumentatif", citation: "« Le dialogue ne tranche pas »", interpretation: "La pensée progresse par confrontation des voix.", keywords: ["argumentatif","débat","philosophie","lumières"] }
    ]
  },
  {
    id: "GT-842",
    titre: "Mal du siècle [Série 15]",
    auteur: "Chateaubriand",
    oeuvre: "René",
    genre: "Roman",
    diff: 3,
    texte: `Les solitudes me parlent une langue que je comprends; les grands bois, les montagnes, les mers désertes me rendent ce que les hommes m'ont pris. J'ai passé ma jeunesse à fuir les villes, à chercher des lieux où le vent souffle sans témoin, où l'on peut pleurer sans ridicule. Amélie, ma sœur, partageait autrefois ces errances; mais le monde a séparé nos destins, et je reste seul avec mon mal du siècle, ce vague à l'âme qui consume sans éclat. Les ruines, les tombeaux, les crépuscules m'attirent: je ne cherche pas le bonheur, je cherche une émotion forte.`,
    contexte: "Confession romantique et solitude existentielle.",
    attendus: [
      { procede: "Personnification", citation: "« Les solitudes me parlent »", interpretation: "La nature devient interlocutrice du moi.", keywords: ["personnification","nature","romantisme","rené"] },
      { procede: "Registre lyrique", citation: "« ce vague à l'âme »", interpretation: "Le texte exprime la crise intime du sujet romantique.", keywords: ["lyrique","mal du siècle","subjectivité","chateaubriand"] },
      { procede: "Antithèse", citation: "« Je ne cherche pas le bonheur » / « une émotion forte »", interpretation: "Le héros refuse la modération bourgeoise.", keywords: ["antithèse","bonheur","intensité","roman"] }
    ]
  },
  {
    id: "GT-843",
    titre: "Passion à la cour [Série 15]",
    auteur: "Lafayette",
    oeuvre: "La Princesse de Clèves",
    genre: "Roman",
    diff: 1,
    texte: `La cour était alors dans une magnificence qu'on n'a jamais vue depuis. L'ambition et la galanterie régnaient en même temps et occupaient également les esprits; l'un et l'autre trouvaient souvent des moyens de se concilier, et l'on ne savait lequel emportait l'avantage. Mme de Clèves, jeune, belle, et mariée au prince de Clèves, ne connaissait pas encore la violence de la passion. Elle croyait que l'honnêteté suffisait à régler la conduite. Mais le duc de Nemours parut: il était de ces hommes que la nature semble avoir formés pour se faire aimer.`,
    contexte: "Exposition du roman de passion classique.",
    attendus: [
      { procede: "Tableau social", citation: "« L'ambition et la galanterie régnaient »", interpretation: "Le cadre de cour organise les comportements.", keywords: ["cour","mœurs","galanterie","lafayette"] },
      { procede: "Antithèse", citation: "« Elle croyait que l'honnêteté suffisait à régler la conduite »", interpretation: "Le conflit moral est lancé dès l’exposition.", keywords: ["antithèse","vertu","passion","roman"] },
      { procede: "Caractérisation", citation: "« formés pour se faire aimer »", interpretation: "Nemours apparaît comme type du séducteur.", keywords: ["caractérisation","nemours","désir","classicisme"] }
    ]
  }
  ],
  16: [
  {
    id: "GT-844",
    titre: "Soif de savoir de Faust",
    auteur: "Goethe",
    oeuvre: "Faust (trad. fr.)",
    genre: "Théâtre",
    diff: 3,
    texte: `J'ai donc étudié, hélas! philosophie, jurisprudence, médecine, et même, malheureusement, théologie, avec un ardent labeur. Et me voici, pauvre fou, aussi sage qu'auparavant! On m'appelle maître, on m'appelle docteur, et depuis dix ans je mène mes élèves par le nez. Je vois bien que nous ne pouvons rien savoir! Cette pensée me brûle le cœur. J'ai plus de science que tous ces sots, docteurs, maîtres, scribes et prêtres; mais je n'ai ni certitude ni joie. Voilà pourquoi je me livre à la magie, afin de découvrir ce qui tient le monde au plus intime.`,
    contexte: "Monologue d’ouverture sur les limites du savoir.",
    attendus: [
      { procede: "Énumération", citation: "« philosophie, jurisprudence, médecine ... théologie »", interpretation: "Le parcours savant débouche sur le vide.", keywords: ["énumération","savoir","faust","crise"] },
      { procede: "Exclamation", citation: "« aussi sage qu'auparavant! »", interpretation: "Le ton exprime la désillusion radicale.", keywords: ["exclamation","désillusion","théâtre","goethe"] },
      { procede: "Quête", citation: "« ce qui tient le monde au plus intime »", interpretation: "La science se transforme en aspiration métaphysique.", keywords: ["quête","métaphysique","connaissance","modernité"] }
    ]
  },
  {
    id: "GT-845",
    titre: "Le meilleur et le pire",
    auteur: "Dickens",
    oeuvre: "Le Conte de deux cités (trad. fr.)",
    genre: "Roman",
    diff: 2,
    texte: `C'était le meilleur des temps, c'était le pire des temps; c'était l'âge de la sagesse, c'était l'âge de la folie; c'était l'époque de la croyance, c'était l'époque de l'incrédulité; c'était la saison de la lumière, c'était la saison des ténèbres; c'était le printemps de l'espérance, c'était l'hiver du désespoir. Nous avions tout devant nous, nous n'avions rien devant nous; nous allions tous directement au ciel, nous allions tous directement dans l'autre sens. En un mot, cette époque insistait pour qu'on ne la reçût qu'au superlatif.`,
    contexte: "Incipit historique fondé sur les contrastes.",
    attendus: [
      { procede: "Antithèse", citation: "« C'était le meilleur des temps, c'était le pire des temps; c'était l'âge de la sagesse, c'était l'âge de la folie; c'était l'époque de la croyance, c'était l'époque de l'incrédulité; c'était la saison de la lumière, c'était la saison des ténèbres; c'était le printemps de l'espérance, c'était l'hiver du désespoir. Nous avions tout devant nous, nous n'avions rien devant nous; nous allions tous directement au ciel, nous allions tous directement dans l'autre sens. En un mot, cette époque insistait pour qu'on ne la reçût qu'au superlatif. »", interpretation: "La structure binaire dramatise la période.", keywords: ["antithèse","histoire","contraste","dickens"] },
      { procede: "Parallélisme", citation: "« C'était le meilleur des temps, c'était le pire des temps; c'était l'âge de la sagesse, c'était l'âge de la folie; c'était l'époque de la croyance, c'était l'époque de l'incrédulité; c'était la saison de la lumière, c'était la saison des ténèbres; c'était le printemps de l'espérance, c'était l'hiver du désespoir. Nous avions tout devant nous, nous n'avions rien devant nous; nous allions tous directement au ciel, nous allions tous directement dans l'autre sens. En un mot, cette époque insistait pour qu'on ne la reçût qu'au superlatif. »", interpretation: "La répétition donne un souffle oratoire.", keywords: ["parallélisme","rythme","incipit","roman"] },
      { procede: "Hyperbole", citation: "« qu'au superlatif »", interpretation: "L'époque est pensée dans l'excès.", keywords: ["hyperbole","superlatif","révolution","narration"] }
    ]
  },
  {
    id: "GT-846",
    titre: "Jamais plus",
    auteur: "Poe",
    oeuvre: "Le Corbeau (trad. Mallarmé)",
    genre: "Poésie",
    diff: 3,
    texte: `Une fois, sur le minuit lugubre, pendant que je m'appesantissais, faible et fatigué, sur maint curieux et bizarre volume de doctrine oubliée, pendant que je dodelinais la tête, presque assoupi soudain, il se fit comme un tapotement, comme de quelqu'un frappant doucement, frappant à la porte de ma chambre. « C'est quelque visiteur, murmurai-je, qui frappe à la porte de ma chambre; ce n'est que cela, et rien de plus. » Et le Corbeau, perché, ne dit qu'un mot, comme si son âme en ce seul mot se répandait: « Jamais plus. »`,
    contexte: "Poème narratif de deuil et d’obsession.",
    attendus: [
      { procede: "Refrain", citation: "« Jamais plus »", interpretation: "La répétition verbalise l’irréversible.", keywords: ["refrain","deuil","fatalité","poe"] },
      { procede: "Atmosphère", citation: "« minuit lugubre »", interpretation: "Le décor nocturne installe le fantastique.", keywords: ["atmosphère","nuit","angoisse","poésie"] },
      { procede: "Répétition sonore", citation: "« frappant doucement, frappant »", interpretation: "Le rythme mime l'obsession auditive.", keywords: ["répétition","son","obsession","narrateur"] }
    ]
  },
  {
    id: "GT-847",
    titre: "Appelez-moi Ismaël",
    auteur: "Melville",
    oeuvre: "Moby Dick (trad. fr.)",
    genre: "Roman",
    diff: 2,
    texte: `Appelez-moi Ismaël. Chaque fois que je sens la bouche se rider d'amertume, chaque fois que novembre humide s'installe dans mon âme, je comprends qu'il est temps de prendre la mer. C'est mon substitut au pistolet et à la balle. Je m'embarque tranquillement, sans bruit, comme d'autres vont à la pharmacie. Il y a dans l'océan quelque chose qui remet les pensées en ordre: le roulis, le vent salé, la ligne immense où le ciel rejoint l'eau. Alors je redeviens un homme parmi les hommes, un passant parmi les vagues.`,
    contexte: "Incipit maritime et métaphysique.",
    attendus: [
      { procede: "Formule", citation: "« Appelez-moi Ismaël »", interpretation: "L’entrée directe crée une voix mémorable.", keywords: ["incipit","voix","melville","roman"] },
      { procede: "Métaphore", citation: "« substitut au pistolet et à la balle »", interpretation: "La mer devient remède contre le désespoir.", keywords: ["métaphore","mer","désespoir","narrateur"] },
      { procede: "Image", citation: "« le ciel rejoint l'eau »", interpretation: "L'horizon ouvre une perspective spirituelle.", keywords: ["image","horizon","quête","océan"] }
    ]
  },
  {
    id: "GT-848",
    titre: "Prière pour la tolérance [Série 16]",
    auteur: "Voltaire",
    oeuvre: "Traité sur la tolérance",
    genre: "Idées",
    diff: 1,
    texte: `Ce n'est donc plus aux hommes que je m'adresse; c'est à toi, Dieu de tous les êtres, de tous les mondes et de tous les temps: s'il est permis à de faibles créatures, perdues dans l'immensité et imperceptibles au reste de l'univers, d'oser te demander quelque chose, à toi qui as tout donné, à toi dont les décrets sont immuables comme éternels, daigne regarder en pitié les erreurs attachées à notre nature; que ces erreurs ne fassent point nos calamités. Tu ne nous as point donné un cœur pour nous haïr, et des mains pour nous égorger; fais que nous nous aidions mutuellement à supporter le fardeau d'une vie pénible et passagère.`,
    contexte: "Prière philosophique contre l'intolérance religieuse.",
    attendus: [
      { procede: "Apostrophe", citation: "« c'est à toi, Dieu de tous les êtres »", interpretation: "L'adresse solennelle universalise la demande morale.", keywords: ["apostrophe","universel","tolérance","voltaire"] },
      { procede: "Antithèse", citation: "« Tu ne nous as point donné un cœur pour nous haïr, et des mains pour n »", interpretation: "Le texte oppose la violence à la fraternité.", keywords: ["antithèse","haine","fraternité","lumières"] },
      { procede: "Registre oratoire", citation: "« daigne regarder en pitié »", interpretation: "Le ton de supplication renforce la portée civique.", keywords: ["oratoire","prière","argumentation","idées"] }
    ]
  },
  {
    id: "GT-849",
    titre: "Aveu de Phèdre [Série 16]",
    auteur: "Racine",
    oeuvre: "Phèdre",
    genre: "Théâtre",
    diff: 3,
    texte: `Je le vis, je rougis, je pâlis à sa vue; un trouble s'éleva dans mon âme éperdue; mes yeux ne voyaient plus, je ne pouvais parler; je sentis tout mon corps et transir et brûler. Je reconnus Vénus et ses feux redoutables, d'un sang qu'elle poursuit tourments inévitables. Par des vœux assidus je crus les détourner: je lui bâtis un temple, et pris soin de l'orner; de victimes moi-même à toute heure entourée, je cherchais dans leurs flancs ma raison égarée. Ainsi, la passion se fait faute, et la faute se fait destin.`,
    contexte: "Aveu tragique d'une passion impossible.",
    attendus: [
      { procede: "Parallélisme", citation: "« Je le vis, je rougis, je pâlis »", interpretation: "Le rythme ternaire dramatise le choc amoureux.", keywords: ["parallélisme","aveu","tragédie","racine"] },
      { procede: "Antithèse", citation: "« transir et brûler »", interpretation: "Le désir se dit dans une contradiction corporelle.", keywords: ["antithèse","désir","douleur","pathétique"] },
      { procede: "Mythologie", citation: "« Je reconnus Vénus »", interpretation: "La référence divine inscrit la passion dans la fatalité.", keywords: ["mythologie","fatalité","vénus","tragique"] }
    ]
  },
  {
    id: "GT-850",
    titre: "Dilemme de Rodrigue [Série 16]",
    auteur: "Corneille",
    oeuvre: "Le Cid",
    genre: "Théâtre",
    diff: 3,
    texte: `Percé jusques au fond du cœur d'une atteinte imprévue aussi bien que mortelle, misérable vengeur d'une juste querelle, et malheureux objet d'une injuste rigueur, je demeure immobile, et mon âme abattue cède au coup qui me tue. En cet affront mon père est l'offensé, et l'offenseur le père de Chimène. Que je sens de rudes combats! contre mon propre honneur mon amour s'intéresse. Faut-il perdre Chimène, ou trahir mon lignage? le héros naît dans cette hésitation.`,
    contexte: "Conflit classique entre honneur et amour.",
    attendus: [
      { procede: "Antithèse", citation: "« contre mon propre honneur mon amour s'intéresse. »", interpretation: "La symétrie formule l'impasse morale.", keywords: ["antithèse","honneur","amour","corneille"] },
      { procede: "Registre tragique", citation: "« Percé jusques au fond du cœur »", interpretation: "La douleur morale prend la forme d'une blessure.", keywords: ["tragique","souffrance","dilemme","théâtre"] },
      { procede: "Exclamation", citation: "« Que je sens de rudes combats! »", interpretation: "L'exclamation rend sensible l'urgence intérieure.", keywords: ["exclamation","combat","pathétique","classicisme"] }
    ]
  },
  {
    id: "GT-851",
    titre: "Aveuglement d’Orgon [Série 16]",
    auteur: "Molière",
    oeuvre: "Tartuffe",
    genre: "Théâtre",
    diff: 1,
    texte: `Ha! si vous aviez vu comme j'en fis rencontre, vous auriez pris pour lui l'amitié que je montre. Chaque jour à l'église il venait, d'un air doux, tout vis-à-vis de moi se mettre à deux genoux. Il attirait les yeux de l'assemblée entière par l'ardeur dont au Ciel il poussait sa prière; il faisait des soupirs, de grands élancements, et baisait humblement la terre à tous moments. Et lorsque je sortais, il me devançait vite pour m'aller à la porte offrir de l'eau bénite. Et Tartuffe? Le pauvre homme!`,
    contexte: "Portrait comique d'un faux dévot.",
    attendus: [
      { procede: "Comique de caractère", citation: "« Le pauvre homme! »", interpretation: "Le refrain signale l'aveuglement d'Orgon.", keywords: ["comique","orgon","imposture","molière"] },
      { procede: "Accumulation", citation: "« soupirs, de grands élancements »", interpretation: "La surenchère gestuelle dénonce l'hypocrisie.", keywords: ["accumulation","hypocrisie","satire","dévotion"] },
      { procede: "Ironie dramatique", citation: "« Et Tartuffe? »", interpretation: "Le spectateur comprend ce qu'Orgon refuse de voir.", keywords: ["ironie dramatique","spectateur","théâtre","classicisme"] }
    ]
  },
  {
    id: "GT-852",
    titre: "Morale du plus fort [Série 16]",
    auteur: "La Fontaine",
    oeuvre: "Fables",
    genre: "Poésie",
    diff: 1,
    texte: `La raison du plus fort est toujours la meilleure: nous l'allons montrer tout à l'heure. Un Agneau se désaltérait dans le courant d'une onde pure. Un Loup survient à jeun, qui cherchait aventure, et que la faim en ces lieux attirait. Qui te rend si hardi de troubler mon breuvage? dit cet animal plein de rage: tu seras châtié de ta témérité. Sire, répond l'Agneau, que Votre Majesté ne se mette pas en colère; mais plutôt qu'elle considère que je me vas désaltérant plus de vingt pas au-dessous d'Elle.`,
    contexte: "Fable sur l'arbitraire de la force.",
    attendus: [
      { procede: "Morale", citation: "« La raison du plus fort est toujours la meilleure »", interpretation: "La moralité initiale donne la clé de lecture politique.", keywords: ["morale","force","justice","fable"] },
      { procede: "Dialogue", citation: "« Qui te rend si hardi »", interpretation: "Le discours direct met en scène un procès biaisé.", keywords: ["dialogue","procès","injustice","allégorie"] },
      { procede: "Ironie", citation: "« Votre Majesté »", interpretation: "La politesse de l'agneau souligne la brutalité du loup.", keywords: ["ironie","domination","la fontaine","pouvoir"] }
    ]
  },
  {
    id: "GT-853",
    titre: "Le soldat endormi [Série 16]",
    auteur: "Rimbaud",
    oeuvre: "Le Dormeur du val",
    genre: "Poésie",
    diff: 2,
    texte: `C'est un trou de verdure où chante une rivière accrochant follement aux herbes des haillons d'argent; où le soleil, de la montagne fière, luit: c'est un petit val qui mousse de rayons. Un soldat jeune, bouche ouverte, tête nue, et la nuque baignant dans le frais cresson bleu, dort; il est étendu dans l'herbe, sous la nue, pâle dans son lit vert où la lumière pleut. Les parfums ne font pas frissonner sa narine; il dort dans le soleil, la main sur sa poitrine, tranquille. Il a deux trous rouges au côté droit.`,
    contexte: "Poème de guerre à chute brutale.",
    attendus: [
      { procede: "Chute", citation: "« Il a deux trous rouges au côté droit »", interpretation: "Le dernier vers renverse la lecture bucolique.", keywords: ["chute","guerre","mort","rimbaud"] },
      { procede: "Personnification", citation: "« C'est un trou de verdure où chante une rivière accrochant follement aux herbes des haillons d'argent; où le soleil, de la montagne fière, luit: c'est un petit val qui mousse de rayons. Un soldat jeune, bouche ouverte, tête nue, et la nuque baignant dans le frais cresson bleu, dort; il est étendu dans l'herbe, sous la nue, pâle dans son lit vert où la lumière pleut. Les parfums ne font pas frissonner sa narine; il dort dans le soleil, la main sur sa poitrine, tranquille. Il a deux trous rouges au côté droit. »", interpretation: "La nature maternelle reste impuissante face à la guerre.", keywords: ["personnification","nature","pathétique","poésie"] },
      { procede: "Contraste", citation: "« trou de verdure »", interpretation: "Le cadre lumineux contraste avec la mort du soldat.", keywords: ["contraste","couleurs","violence","lyrique"] }
    ]
  },
  {
    id: "GT-854",
    titre: "Mélancolie d’automne [Série 16]",
    auteur: "Verlaine",
    oeuvre: "Chanson d’automne",
    genre: "Poésie",
    diff: 3,
    texte: `Les sanglots longs des violons de l'automne blessent mon cœur d'une langueur monotone. Tout suffocant et blême, quand sonne l'heure, je me souviens des jours anciens et je pleure; et je m'en vais au vent mauvais qui m'emporte deçà, delà, pareil à la feuille morte. Le soir s'allonge et la cloche descend dans l'air humide; la ville s'efface; mon pas hésite comme une voix qui s'éteint dans le froid, et ma mémoire revient avec ses battements sourds.`,
    contexte: "Poème bref et musical de la nostalgie.",
    attendus: [
      { procede: "Allitération", citation: "« sanglots longs des violons »", interpretation: "Les sonorités prolongent la plainte.", keywords: ["allitération","musicalité","verlaine","mélancolie"] },
      { procede: "Comparaison", citation: "« Pareil à la feuille morte »", interpretation: "Le sujet se dit emporté par le temps.", keywords: ["comparaison","automne","temps","destin"] },
      { procede: "Registre lyrique", citation: "« je me souviens ... je pleure »", interpretation: "L'expression du moi structure le poème.", keywords: ["lyrique","souvenir","tristesse","poésie"] }
    ]
  },
  {
    id: "GT-855",
    titre: "Modernité de Zone [Série 16]",
    auteur: "Apollinaire",
    oeuvre: "Alcools",
    genre: "Poésie",
    diff: 2,
    texte: `A la fin tu es las de ce monde ancien. Bergère ô tour Eiffel le troupeau des ponts bêle ce matin. Tu en as assez de vivre dans l'antiquité grecque et romaine. Ici même les automobiles ont l'air d'être anciennes. La religion seule est restée toute neuve, la religion est restée simple comme les hangars de Port-Aviation. Seul en Europe tu n'es pas antique ô Christianisme. Et toi que les fenêtres observent, la honte te retient d'entrer dans une église et de t'y confesser ce matin.`,
    contexte: "Poétique de la modernité urbaine.",
    attendus: [
      { procede: "Apostrophe", citation: "« Bergère ô tour Eiffel »", interpretation: "L'image mêle tradition pastorale et ville moderne.", keywords: ["apostrophe","tour eiffel","modernité","apollinaire"] },
      { procede: "Antithèse", citation: "« monde ancien » / « moderne »", interpretation: "Le poème se construit sur une tension temporelle.", keywords: ["antithèse","ancien","moderne","avant-garde"] },
      { procede: "Vers libre", citation: "« A la fin tu es las de ce monde ancien »", interpretation: "L'absence de cadre métrique accompagne la mobilité du regard.", keywords: ["vers libre","rythme","montage","alcools"] }
    ]
  },
  {
    id: "GT-856",
    titre: "Incipit provincial [Série 16]",
    auteur: "Stendhal",
    oeuvre: "Le Rouge et le Noir",
    genre: "Roman",
    diff: 3,
    texte: `La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure.`,
    contexte: "Ouverture réaliste et ironique de la province.",
    attendus: [
      { procede: "Cadre", citation: "« La petite ville de Verrières »", interpretation: "L'incipit pose un espace social précis.", keywords: ["cadre","province","stendhal","réalisme"] },
      { procede: "Lexique mélioratif", citation: "« La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure. »", interpretation: "Le positif prépare une lecture critique.", keywords: ["lexique","ironie","bourgeoisie","roman"] },
      { procede: "Attente", citation: "« La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure. »", interpretation: "La promesse initiale sera démentie par le récit.", keywords: ["attente","promesse","narrateur","destin"] }
    ]
  },
  {
    id: "GT-857",
    titre: "Entrée de Charles [Série 16]",
    auteur: "Flaubert",
    oeuvre: "Madame Bovary",
    genre: "Roman",
    diff: 1,
    texte: `Nous étions à l'étude, quand le proviseur entra, suivi d'un nouveau habillé en bourgeois et d'un garçon de classe qui portait un grand pupitre. Ceux qui dormaient se réveillèrent, et chacun se leva comme surpris dans son travail. Le proviseur nous fit signe de nous rasseoir; puis, se tournant vers le maître d'études: « Monsieur Roger, lui dit-il, voici un élève que je vous recommande. » Resté dans l'angle, derrière la porte, si bien qu'on l'apercevait à peine, le nouveau était un gars de la campagne, embarrassé par les regards.`,
    contexte: "Scène d'entrée et de maladresse sociale.",
    attendus: [
      { procede: "Focalisation", citation: "« Nous étions à l'étude »", interpretation: "Le point de vue collectif installe la scène.", keywords: ["focalisation","collectif","flaubert","classe"] },
      { procede: "Réalisme social", citation: "« habillé en bourgeois »", interpretation: "Le vêtement marque immédiatement la position sociale.", keywords: ["réalisme","social","école","roman"] },
      { procede: "Caractérisation", citation: "« le nouveau était un gars de la campagne »", interpretation: "L'origine rurale prépare l'inadaptation.", keywords: ["caractérisation","charles","inadaptation","bovary"] }
    ]
  },
  {
    id: "GT-858",
    titre: "Nuit de Germinal [Série 16]",
    auteur: "Zola",
    oeuvre: "Germinal",
    genre: "Roman",
    diff: 3,
    texte: `Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucune ombre d'arbre ne tachait le ciel; le pavé se déroulait avec la rectitude d'une jetée, au milieu des ténèbres.`,
    contexte: "Incipit naturaliste d'une marche vers la mine.",
    attendus: [
      { procede: "Métaphore", citation: "« rafales larges comme sur une mer »", interpretation: "La plaine devient un espace hostile et océanique.", keywords: ["métaphore","paysage","zola","naturalisme"] },
      { procede: "Champ lexical", citation: "« Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucune ombre d'arbre ne tachait le ciel; le pavé se déroulait avec la rectitude d'une jetée, au milieu des ténèbres. »", interpretation: "La noirceur annonce la violence sociale.", keywords: ["champ lexical","noir","mine","drame"] },
      { procede: "Focalisation externe", citation: "« un homme suivait seul »", interpretation: "L'anonymat initial universalise la condition ouvrière.", keywords: ["focalisation","anonymat","ouvrier","roman"] }
    ]
  },
  {
    id: "GT-859",
    titre: "Armée en déroute [Série 16]",
    auteur: "Maupassant",
    oeuvre: "Boule de suif",
    genre: "Roman",
    diff: 3,
    texte: `Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes, noirs, barbus, sales, harassés, marchaient d'un air abattu, sans drapeau, sans régiment. Tous semblaient accablés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude, et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait des mobilisés paisibles, des francs-tireurs de parade, et des soldats vaincus que le hasard poussait encore.`,
    contexte: "Ouverture de guerre et de désordre collectif.",
    attendus: [
      { procede: "Accumulation", citation: "« noirs, barbus, sales, harassés »", interpretation: "L'énumération matérialise l'épuisement.", keywords: ["accumulation","guerre","épuisement","maupassant"] },
      { procede: "Description", citation: "« sans drapeau, sans régiment »", interpretation: "La défaite se lit dans la disparition des signes militaires.", keywords: ["description","défaite","armée","réalisme"] },
      { procede: "Antithèse", citation: "« Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes, noirs, barbus, sales, harassés, marchaient d'un air abattu, sans drapeau, sans régiment. Tous semblaient accablés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude, et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait des mobilisés paisibles, des francs-tireurs de parade, et des soldats vaincus que le hasard poussait encore. »", interpretation: "Le texte montre la volatilité des foules en guerre.", keywords: ["antithèse","foule","instabilité","histoire"] }
    ]
  },
  {
    id: "GT-860",
    titre: "Maison Vauquer [Série 16]",
    auteur: "Balzac",
    oeuvre: "Le Père Goriot",
    genre: "Roman",
    diff: 1,
    texte: `Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux. Depuis trente ans, n'y a-t-il jamais été vu de jeune personne; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. En 1819, époque où commence ce drame, il s'y trouvait pourtant une pauvre jeune fille.`,
    contexte: "Incipit réaliste d'un microcosme social parisien.",
    attendus: [
      { procede: "Précision", citation: "« rue Neuve-Sainte-Geneviève »", interpretation: "Le détail topographique ancre le récit dans le réel.", keywords: ["réalisme","paris","topographie","balzac"] },
      { procede: "Ironie", citation: "« Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux. Depuis trente ans, n'y a-t-il jamais été vu de jeune personne; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. En 1819, époque où commence ce drame, il s'y trouvait pourtant une pauvre jeune fille. »", interpretation: "La formule valorisante suggère en creux la médiocrité.", keywords: ["ironie","narrateur","milieu","société"] },
      { procede: "Annonce", citation: "« époque où commence ce drame »", interpretation: "Le narrateur prépare une trajectoire tragique.", keywords: ["annonce","drame","destin","roman"] }
    ]
  },
  {
    id: "GT-861",
    titre: "Marche vers la tombe [Série 16]",
    auteur: "Hugo",
    oeuvre: "Les Contemplations",
    genre: "Poésie",
    diff: 1,
    texte: `Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur.`,
    contexte: "Élégie du deuil filial.",
    attendus: [
      { procede: "Progression", citation: "« Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur. »", interpretation: "La marche géographique devient parcours intérieur.", keywords: ["progression","deuil","hugo","élégie"] },
      { procede: "Antithèse", citation: "« Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur. »", interpretation: "La douleur annule les repères du monde.", keywords: ["antithèse","douleur","intériorité","lyrique"] },
      { procede: "Chute", citation: "« sur ta tombe »", interpretation: "La destination funèbre reconfigure tout le poème.", keywords: ["chute","tombe","émotion","poésie"] }
    ]
  },
  {
    id: "GT-862",
    titre: "Allégorie de l’albatros [Série 16]",
    auteur: "Baudelaire",
    oeuvre: "Les Fleurs du mal",
    genre: "Poésie",
    diff: 3,
    texte: `Souvent, pour s'amuser, les hommes d'équipage prennent des albatros, vastes oiseaux des mers, qui suivent, indolents compagnons de voyage, le navire glissant sur les gouffres amers. A peine les ont-ils déposés sur les planches, que ces rois de l'azur, maladroits et honteux, laissent piteusement leurs grandes ailes blanches comme des avirons traîner à côté d'eux. Ce voyageur ailé, comme il est gauche et veule! Lui, naguère si beau, qu'il est comique et laid! Le Poète est semblable au prince des nuées.`,
    contexte: "Allégorie du poète inadapté au monde social.",
    attendus: [
      { procede: "Allégorie", citation: "« Le Poète est semblable au prince des nuées »", interpretation: "L'albatros figure la condition du créateur.", keywords: ["allégorie","poète","société","baudelaire"] },
      { procede: "Antithèse", citation: "« t-ils déposés sur les planches, que ces rois de l'azur, maladroits et honte »", interpretation: "La grandeur chute dans le ridicule terrestre.", keywords: ["antithèse","sublime","ridicule","modernité"] },
      { procede: "Ironie", citation: "« pour s'amuser »", interpretation: "La cruauté collective est banalisée par le divertissement.", keywords: ["ironie","cruauté","foule","symbolisme"] }
    ]
  },
  {
    id: "GT-863",
    titre: "Chants désespérés [Série 16]",
    auteur: "Musset",
    oeuvre: "La Nuit de mai",
    genre: "Poésie",
    diff: 1,
    texte: `Poète, prends ton luth et me donne un baiser; la fleur de l'églantier sent ses bourgeons éclore, le printemps naît ce soir, les vents vont s'embraser. Les plus désespérés sont les chants les plus beaux, et j'en sais d'immortels qui sont de purs sanglots. Lorsque le pélican, lassé d'un long voyage, retourne à ses roseaux, ses petits affamés courent sur le rivage en le voyant au loin s'abattre sur les eaux. Ainsi le poète nourrit son chant de sa propre blessure, et la douleur devient musique.`,
    contexte: "Poème dialogué sur la création née de la souffrance.",
    attendus: [
      { procede: "Maxime", citation: "« Les plus désespérés sont les chants les plus beaux »", interpretation: "La formule fait de la douleur une source esthétique.", keywords: ["maxime","désespoir","beauté","musset"] },
      { procede: "Symbole", citation: "« le pélican »", interpretation: "L'oiseau représente le sacrifice du poète.", keywords: ["symbole","pélican","sacrifice","lyrisme"] },
      { procede: "Dialogue", citation: "« Poète, prends ton luth »", interpretation: "L'échange Muse/Poète dramatise l'inspiration.", keywords: ["dialogue","muse","poète","création"] }
    ]
  },
  {
    id: "GT-864",
    titre: "Stratégie de Merteuil [Série 16]",
    auteur: "Laclos",
    oeuvre: "Les Liaisons dangereuses",
    genre: "Roman",
    diff: 2,
    texte: `Vous voilà donc bien heureux de votre dernière conquête! Vous m'écrivez trois pages pour me vanter une paysanne. J'en ris encore. Croyez-vous me faire envie? Je connais vos ruses. Vous voulez me piquer, me faire croire que vous n'avez plus besoin de moi. D'ailleurs, ce n'est pas Cécile qui m'intéresse; c'est vous. Je veux savoir si vous oserez exécuter le plan que nous avons formé. Préférez-vous la vertu de Mme de Tourvel à la gloire de me plaire? Choisissez. Si vous hésitez, je comprendrai que vous avez faibli, et je saurai me venger.`,
    contexte: "Lettre de manipulation dans le roman libertin.",
    attendus: [
      { procede: "Registre épistolaire", citation: "« Vous m'écrivez trois pages »", interpretation: "La forme lettre sert la stratégie psychologique.", keywords: ["épistolaire","lettre","laclos","manipulation"] },
      { procede: "Ironie", citation: "« J'en ris encore »", interpretation: "La moquerie masque une volonté de domination.", keywords: ["ironie","merteuil","pouvoir","stratégie"] },
      { procede: "Antithèse", citation: "« vertu de Mme de Tourvel » / « gloire de me plaire »", interpretation: "Le conflit oppose morale et libertinage.", keywords: ["antithèse","vertu","séduction","libertinage"] }
    ]
  },
  {
    id: "GT-865",
    titre: "Dialogue du Neveu [Série 16]",
    auteur: "Diderot",
    oeuvre: "Le Neveu de Rameau",
    genre: "Idées",
    diff: 1,
    texte: `Je ne connais pas de plus grand charlatan que celui qui prétend enseigner ce qu'il ne sait pas. Le monde est plein de ces pédants qui récitent des maximes et ne les pratiquent point. Ils ont l'air grave, le ton sentencieux, et l'on les écoute; mais suivez-les chez eux, vous les verrez mentir, voler, tricher, se livrer à toutes les turpitudes qu'ils condamnent en public. Le Neveu rit de tout cela: « Morale! c'est le masque du faible devant le fort. » Je lui réponds que sans morale, la société tombe en ruine. Le dialogue ne tranche pas; il oblige à penser.`,
    contexte: "Satire philosophique de l’hypocrisie sociale.",
    attendus: [
      { procede: "Ironie", citation: "« l'air grave, le ton sentencieux »", interpretation: "Le portrait dénonce les faux moralistes.", keywords: ["ironie","pédants","hypocrisie","diderot"] },
      { procede: "Antithèse", citation: "« sans morale, la société tombe » / « Morale! c'est le masque »", interpretation: "Le texte confronte deux conceptions irréconciliables.", keywords: ["antithèse","morale","cynisme","dialogue"] },
      { procede: "Registre argumentatif", citation: "« Le dialogue ne tranche pas »", interpretation: "La pensée progresse par confrontation des voix.", keywords: ["argumentatif","débat","philosophie","lumières"] }
    ]
  },
  {
    id: "GT-866",
    titre: "Mal du siècle [Série 16]",
    auteur: "Chateaubriand",
    oeuvre: "René",
    genre: "Roman",
    diff: 1,
    texte: `Les solitudes me parlent une langue que je comprends; les grands bois, les montagnes, les mers désertes me rendent ce que les hommes m'ont pris. J'ai passé ma jeunesse à fuir les villes, à chercher des lieux où le vent souffle sans témoin, où l'on peut pleurer sans ridicule. Amélie, ma sœur, partageait autrefois ces errances; mais le monde a séparé nos destins, et je reste seul avec mon mal du siècle, ce vague à l'âme qui consume sans éclat. Les ruines, les tombeaux, les crépuscules m'attirent: je ne cherche pas le bonheur, je cherche une émotion forte.`,
    contexte: "Confession romantique et solitude existentielle.",
    attendus: [
      { procede: "Personnification", citation: "« Les solitudes me parlent »", interpretation: "La nature devient interlocutrice du moi.", keywords: ["personnification","nature","romantisme","rené"] },
      { procede: "Registre lyrique", citation: "« ce vague à l'âme »", interpretation: "Le texte exprime la crise intime du sujet romantique.", keywords: ["lyrique","mal du siècle","subjectivité","chateaubriand"] },
      { procede: "Antithèse", citation: "« Je ne cherche pas le bonheur » / « une émotion forte »", interpretation: "Le héros refuse la modération bourgeoise.", keywords: ["antithèse","bonheur","intensité","roman"] }
    ]
  },
  {
    id: "GT-867",
    titre: "Passion à la cour [Série 16]",
    auteur: "Lafayette",
    oeuvre: "La Princesse de Clèves",
    genre: "Roman",
    diff: 2,
    texte: `La cour était alors dans une magnificence qu'on n'a jamais vue depuis. L'ambition et la galanterie régnaient en même temps et occupaient également les esprits; l'un et l'autre trouvaient souvent des moyens de se concilier, et l'on ne savait lequel emportait l'avantage. Mme de Clèves, jeune, belle, et mariée au prince de Clèves, ne connaissait pas encore la violence de la passion. Elle croyait que l'honnêteté suffisait à régler la conduite. Mais le duc de Nemours parut: il était de ces hommes que la nature semble avoir formés pour se faire aimer.`,
    contexte: "Exposition du roman de passion classique.",
    attendus: [
      { procede: "Tableau social", citation: "« L'ambition et la galanterie régnaient »", interpretation: "Le cadre de cour organise les comportements.", keywords: ["cour","mœurs","galanterie","lafayette"] },
      { procede: "Antithèse", citation: "« Elle croyait que l'honnêteté suffisait à régler la conduite »", interpretation: "Le conflit moral est lancé dès l’exposition.", keywords: ["antithèse","vertu","passion","roman"] },
      { procede: "Caractérisation", citation: "« formés pour se faire aimer »", interpretation: "Nemours apparaît comme type du séducteur.", keywords: ["caractérisation","nemours","désir","classicisme"] }
    ]
  }
  ],
  17: [
  {
    id: "GT-868",
    titre: "Le signe écarlate",
    auteur: "Hawthorne",
    oeuvre: "La Lettre écarlate (trad. fr.)",
    genre: "Roman",
    diff: 2,
    texte: `Sur la poitrine de son corsage, brillait, brodée d'un fil rouge vif et entourée d'arabesques d'or, la lettre A. Ce signe singulier, que tout le monde regardait avec une curiosité mêlée de sévérité, semblait à la fois infamie et défi. Hester Prynne, droite, calme, tenait son enfant dans les bras et avançait au milieu de la foule, comme si la honte publique ne pouvait rien contre sa dignité intérieure. Les bonnes femmes murmuraient qu'il eût fallu marquer la faute au fer. Mais le visage d'Hester restait ferme, presque lumineux, sous la violence des jugements.`,
    contexte: "Scène publique de stigmatisation morale.",
    attendus: [
      { procede: "Symbole", citation: "« la lettre A »", interpretation: "Le signe condense faute, contrôle social et résistance.", keywords: ["symbole","stigmatisation","hawthorne","roman"] },
      { procede: "Contraste", citation: "« infamie et défi »", interpretation: "Le personnage transforme la marque imposée en force.", keywords: ["contraste","honte","dignité","femme"] },
      { procede: "Description", citation: "« entourée d'arabesques d'or »", interpretation: "Le détail visuel rend le symbole ambigu.", keywords: ["description","visuel","jugement","puritanisme"] }
    ]
  },
  {
    id: "GT-869",
    titre: "La potion de Jekyll",
    auteur: "Stevenson",
    oeuvre: "L'Étrange Cas du Dr Jekyll et de Mr Hyde (trad. fr.)",
    genre: "Roman",
    diff: 2,
    texte: `Je bus la potion d'un trait; un frisson me traversa, suivi d'une nausée atroce. Il y eut en moi comme un craquement, un déchirement, puis une ivresse furieuse. Quand j'ouvris les yeux, je n'étais plus le même homme. Je sentais une légèreté inconnue, une hardiesse coupable, une joie noire de me savoir affranchi de tout frein. Je tendis les mains: elles étaient plus nerveuses, plus sèches; je me regardai dans la glace, et je vis Hyde. Ainsi la dualité qui dormait en moi prit un visage, et ce visage était le mal.`,
    contexte: "Naissance du double monstrueux.",
    attendus: [
      { procede: "Gradation", citation: "« Je bus la potion d'un trait; un frisson me traversa, suivi d'une nausée atroce. Il y eut en moi comme un craquement, un déchirement, puis une ivresse furieuse. Quand j'ouvris les yeux, je n'étais plus le même homme. Je sentais une légèreté inconnue, une hardiesse coupable, une joie noire de me savoir affranchi de tout frein. Je tendis les mains: elles étaient plus nerveuses, plus sèches; je me regardai dans la glace, et je vis Hyde. Ainsi la dualité qui dormait en moi prit un visage, et ce visage était le mal. »", interpretation: "La transformation est rendue sensible physiquement.", keywords: ["gradation","métamorphose","stevenson","fantastique"] },
      { procede: "Opposition", citation: "« je n'étais plus le même homme »", interpretation: "Le texte dramatise la scission identitaire.", keywords: ["opposition","double","identité","roman"] },
      { procede: "Symbole", citation: "« je vis Hyde »", interpretation: "Le nom propre devient figure du mal intérieur.", keywords: ["symbole","hyde","mal","psychologie"] }
    ]
  },
  {
    id: "GT-870",
    titre: "Le poids des jours",
    auteur: "Wilde",
    oeuvre: "Le Portrait de Dorian Gray (trad. fr.)",
    genre: "Roman",
    diff: 2,
    texte: `Le portrait était devant lui, plus vivant que jamais dans sa corruption. Les rides de la cruauté marquaient la bouche; les yeux portaient une lueur rusée et froide; quelque chose de rouge traînait sur la main peinte. Dorian contempla cette image et sentit la peur le traverser: chaque faute qu'il commettait s'écrivait là, tandis que son visage à lui demeurait intact, jeune, admirable. Il songea que le tableau était devenu sa conscience visible. « C'est mon âme », murmura-t-il, et l'horreur de cette vérité le fit reculer.`,
    contexte: "Scène de conscience et de dédoublement moral.",
    attendus: [
      { procede: "Personnification", citation: "« plus vivant que jamais »", interpretation: "Le tableau agit comme un être moral autonome.", keywords: ["personnification","portrait","wilde","symbolisme"] },
      { procede: "Antithèse", citation: "« Le portrait était devant lui, plus vivant que jamais dans sa corruption. Les rides de la cruauté marquaient la bouche; les yeux portaient une lueur rusée et froide; quelque chose de rouge traînait sur la main peinte. Dorian contempla cette image et sentit la peur le traverser: chaque faute qu'il commettait s'écrivait là, tandis que son visage à lui demeurait intact, jeune, admirable. Il songea que le tableau était devenu sa conscience visible. « C'est mon âme », murmura-t-il, et l'horreur de cette vérité le fit reculer. »", interpretation: "Beauté extérieure et corruption intérieure s’opposent.", keywords: ["antithèse","apparence","âme","décadence"] },
      { procede: "Formule", citation: "« C'est mon âme »", interpretation: "La phrase explicite la matérialisation de la faute.", keywords: ["formule","conscience","faute","roman"] }
    ]
  },
  {
    id: "GT-871",
    titre: "L’âme voyageuse",
    auteur: "Byron",
    oeuvre: "Le Pèlerinage de Childe Harold (trad. fr.)",
    genre: "Poésie",
    diff: 2,
    texte: `Il marcha longtemps sur les rives où la mer battait les rochers, sans joie et sans repos, portant avec lui la lassitude du monde. Les fêtes, les gloires, les amitiés mêmes l'avaient laissé vide. Il cherchait dans les ruines, dans les ciels du soir, dans le bruit des vagues, un accord secret que la société lui refusait. Ô liberté! cria-t-il, toi seule peux guérir le cœur fatigué des hommes. Mais la liberté elle-même ressemble parfois à un vent froid: elle ouvre l'horizon et laisse l'âme plus nue encore devant l'infini.`,
    contexte: "Poème du voyage intérieur romantique.",
    attendus: [
      { procede: "Champ lexical", citation: "« sans joie et sans repos »", interpretation: "La fatigue existentielle structure la plainte.", keywords: ["champ lexical","lassitude","byron","romantisme"] },
      { procede: "Apostrophe", citation: "« Ô liberté! »", interpretation: "L’invocation transforme une idée en interlocutrice.", keywords: ["apostrophe","liberté","lyrique","poésie"] },
      { procede: "Image", citation: "« un vent froid »", interpretation: "La liberté est pensée comme expérience ambivalente.", keywords: ["image","ambivalence","infini","sujet"] }
    ]
  },
  {
    id: "GT-872",
    titre: "Prière pour la tolérance [Série 17]",
    auteur: "Voltaire",
    oeuvre: "Traité sur la tolérance",
    genre: "Idées",
    diff: 2,
    texte: `Ce n'est donc plus aux hommes que je m'adresse; c'est à toi, Dieu de tous les êtres, de tous les mondes et de tous les temps: s'il est permis à de faibles créatures, perdues dans l'immensité et imperceptibles au reste de l'univers, d'oser te demander quelque chose, à toi qui as tout donné, à toi dont les décrets sont immuables comme éternels, daigne regarder en pitié les erreurs attachées à notre nature; que ces erreurs ne fassent point nos calamités. Tu ne nous as point donné un cœur pour nous haïr, et des mains pour nous égorger; fais que nous nous aidions mutuellement à supporter le fardeau d'une vie pénible et passagère.`,
    contexte: "Prière philosophique contre l'intolérance religieuse.",
    attendus: [
      { procede: "Apostrophe", citation: "« c'est à toi, Dieu de tous les êtres »", interpretation: "L'adresse solennelle universalise la demande morale.", keywords: ["apostrophe","universel","tolérance","voltaire"] },
      { procede: "Antithèse", citation: "« Tu ne nous as point donné un cœur pour nous haïr, et des mains pour n »", interpretation: "Le texte oppose la violence à la fraternité.", keywords: ["antithèse","haine","fraternité","lumières"] },
      { procede: "Registre oratoire", citation: "« daigne regarder en pitié »", interpretation: "Le ton de supplication renforce la portée civique.", keywords: ["oratoire","prière","argumentation","idées"] }
    ]
  },
  {
    id: "GT-873",
    titre: "Aveu de Phèdre [Série 17]",
    auteur: "Racine",
    oeuvre: "Phèdre",
    genre: "Théâtre",
    diff: 1,
    texte: `Je le vis, je rougis, je pâlis à sa vue; un trouble s'éleva dans mon âme éperdue; mes yeux ne voyaient plus, je ne pouvais parler; je sentis tout mon corps et transir et brûler. Je reconnus Vénus et ses feux redoutables, d'un sang qu'elle poursuit tourments inévitables. Par des vœux assidus je crus les détourner: je lui bâtis un temple, et pris soin de l'orner; de victimes moi-même à toute heure entourée, je cherchais dans leurs flancs ma raison égarée. Ainsi, la passion se fait faute, et la faute se fait destin.`,
    contexte: "Aveu tragique d'une passion impossible.",
    attendus: [
      { procede: "Parallélisme", citation: "« Je le vis, je rougis, je pâlis »", interpretation: "Le rythme ternaire dramatise le choc amoureux.", keywords: ["parallélisme","aveu","tragédie","racine"] },
      { procede: "Antithèse", citation: "« transir et brûler »", interpretation: "Le désir se dit dans une contradiction corporelle.", keywords: ["antithèse","désir","douleur","pathétique"] },
      { procede: "Mythologie", citation: "« Je reconnus Vénus »", interpretation: "La référence divine inscrit la passion dans la fatalité.", keywords: ["mythologie","fatalité","vénus","tragique"] }
    ]
  },
  {
    id: "GT-874",
    titre: "Dilemme de Rodrigue [Série 17]",
    auteur: "Corneille",
    oeuvre: "Le Cid",
    genre: "Théâtre",
    diff: 1,
    texte: `Percé jusques au fond du cœur d'une atteinte imprévue aussi bien que mortelle, misérable vengeur d'une juste querelle, et malheureux objet d'une injuste rigueur, je demeure immobile, et mon âme abattue cède au coup qui me tue. En cet affront mon père est l'offensé, et l'offenseur le père de Chimène. Que je sens de rudes combats! contre mon propre honneur mon amour s'intéresse. Faut-il perdre Chimène, ou trahir mon lignage? le héros naît dans cette hésitation.`,
    contexte: "Conflit classique entre honneur et amour.",
    attendus: [
      { procede: "Antithèse", citation: "« contre mon propre honneur mon amour s'intéresse. »", interpretation: "La symétrie formule l'impasse morale.", keywords: ["antithèse","honneur","amour","corneille"] },
      { procede: "Registre tragique", citation: "« Percé jusques au fond du cœur »", interpretation: "La douleur morale prend la forme d'une blessure.", keywords: ["tragique","souffrance","dilemme","théâtre"] },
      { procede: "Exclamation", citation: "« Que je sens de rudes combats! »", interpretation: "L'exclamation rend sensible l'urgence intérieure.", keywords: ["exclamation","combat","pathétique","classicisme"] }
    ]
  },
  {
    id: "GT-875",
    titre: "Aveuglement d’Orgon [Série 17]",
    auteur: "Molière",
    oeuvre: "Tartuffe",
    genre: "Théâtre",
    diff: 2,
    texte: `Ha! si vous aviez vu comme j'en fis rencontre, vous auriez pris pour lui l'amitié que je montre. Chaque jour à l'église il venait, d'un air doux, tout vis-à-vis de moi se mettre à deux genoux. Il attirait les yeux de l'assemblée entière par l'ardeur dont au Ciel il poussait sa prière; il faisait des soupirs, de grands élancements, et baisait humblement la terre à tous moments. Et lorsque je sortais, il me devançait vite pour m'aller à la porte offrir de l'eau bénite. Et Tartuffe? Le pauvre homme!`,
    contexte: "Portrait comique d'un faux dévot.",
    attendus: [
      { procede: "Comique de caractère", citation: "« Le pauvre homme! »", interpretation: "Le refrain signale l'aveuglement d'Orgon.", keywords: ["comique","orgon","imposture","molière"] },
      { procede: "Accumulation", citation: "« soupirs, de grands élancements »", interpretation: "La surenchère gestuelle dénonce l'hypocrisie.", keywords: ["accumulation","hypocrisie","satire","dévotion"] },
      { procede: "Ironie dramatique", citation: "« Et Tartuffe? »", interpretation: "Le spectateur comprend ce qu'Orgon refuse de voir.", keywords: ["ironie dramatique","spectateur","théâtre","classicisme"] }
    ]
  },
  {
    id: "GT-876",
    titre: "Morale du plus fort [Série 17]",
    auteur: "La Fontaine",
    oeuvre: "Fables",
    genre: "Poésie",
    diff: 2,
    texte: `La raison du plus fort est toujours la meilleure: nous l'allons montrer tout à l'heure. Un Agneau se désaltérait dans le courant d'une onde pure. Un Loup survient à jeun, qui cherchait aventure, et que la faim en ces lieux attirait. Qui te rend si hardi de troubler mon breuvage? dit cet animal plein de rage: tu seras châtié de ta témérité. Sire, répond l'Agneau, que Votre Majesté ne se mette pas en colère; mais plutôt qu'elle considère que je me vas désaltérant plus de vingt pas au-dessous d'Elle.`,
    contexte: "Fable sur l'arbitraire de la force.",
    attendus: [
      { procede: "Morale", citation: "« La raison du plus fort est toujours la meilleure »", interpretation: "La moralité initiale donne la clé de lecture politique.", keywords: ["morale","force","justice","fable"] },
      { procede: "Dialogue", citation: "« Qui te rend si hardi »", interpretation: "Le discours direct met en scène un procès biaisé.", keywords: ["dialogue","procès","injustice","allégorie"] },
      { procede: "Ironie", citation: "« Votre Majesté »", interpretation: "La politesse de l'agneau souligne la brutalité du loup.", keywords: ["ironie","domination","la fontaine","pouvoir"] }
    ]
  },
  {
    id: "GT-877",
    titre: "Le soldat endormi [Série 17]",
    auteur: "Rimbaud",
    oeuvre: "Le Dormeur du val",
    genre: "Poésie",
    diff: 3,
    texte: `C'est un trou de verdure où chante une rivière accrochant follement aux herbes des haillons d'argent; où le soleil, de la montagne fière, luit: c'est un petit val qui mousse de rayons. Un soldat jeune, bouche ouverte, tête nue, et la nuque baignant dans le frais cresson bleu, dort; il est étendu dans l'herbe, sous la nue, pâle dans son lit vert où la lumière pleut. Les parfums ne font pas frissonner sa narine; il dort dans le soleil, la main sur sa poitrine, tranquille. Il a deux trous rouges au côté droit.`,
    contexte: "Poème de guerre à chute brutale.",
    attendus: [
      { procede: "Chute", citation: "« Il a deux trous rouges au côté droit »", interpretation: "Le dernier vers renverse la lecture bucolique.", keywords: ["chute","guerre","mort","rimbaud"] },
      { procede: "Personnification", citation: "« C'est un trou de verdure où chante une rivière accrochant follement aux herbes des haillons d'argent; où le soleil, de la montagne fière, luit: c'est un petit val qui mousse de rayons. Un soldat jeune, bouche ouverte, tête nue, et la nuque baignant dans le frais cresson bleu, dort; il est étendu dans l'herbe, sous la nue, pâle dans son lit vert où la lumière pleut. Les parfums ne font pas frissonner sa narine; il dort dans le soleil, la main sur sa poitrine, tranquille. Il a deux trous rouges au côté droit. »", interpretation: "La nature maternelle reste impuissante face à la guerre.", keywords: ["personnification","nature","pathétique","poésie"] },
      { procede: "Contraste", citation: "« trou de verdure »", interpretation: "Le cadre lumineux contraste avec la mort du soldat.", keywords: ["contraste","couleurs","violence","lyrique"] }
    ]
  },
  {
    id: "GT-878",
    titre: "Mélancolie d’automne [Série 17]",
    auteur: "Verlaine",
    oeuvre: "Chanson d’automne",
    genre: "Poésie",
    diff: 1,
    texte: `Les sanglots longs des violons de l'automne blessent mon cœur d'une langueur monotone. Tout suffocant et blême, quand sonne l'heure, je me souviens des jours anciens et je pleure; et je m'en vais au vent mauvais qui m'emporte deçà, delà, pareil à la feuille morte. Le soir s'allonge et la cloche descend dans l'air humide; la ville s'efface; mon pas hésite comme une voix qui s'éteint dans le froid, et ma mémoire revient avec ses battements sourds.`,
    contexte: "Poème bref et musical de la nostalgie.",
    attendus: [
      { procede: "Allitération", citation: "« sanglots longs des violons »", interpretation: "Les sonorités prolongent la plainte.", keywords: ["allitération","musicalité","verlaine","mélancolie"] },
      { procede: "Comparaison", citation: "« Pareil à la feuille morte »", interpretation: "Le sujet se dit emporté par le temps.", keywords: ["comparaison","automne","temps","destin"] },
      { procede: "Registre lyrique", citation: "« je me souviens ... je pleure »", interpretation: "L'expression du moi structure le poème.", keywords: ["lyrique","souvenir","tristesse","poésie"] }
    ]
  },
  {
    id: "GT-879",
    titre: "Modernité de Zone [Série 17]",
    auteur: "Apollinaire",
    oeuvre: "Alcools",
    genre: "Poésie",
    diff: 3,
    texte: `A la fin tu es las de ce monde ancien. Bergère ô tour Eiffel le troupeau des ponts bêle ce matin. Tu en as assez de vivre dans l'antiquité grecque et romaine. Ici même les automobiles ont l'air d'être anciennes. La religion seule est restée toute neuve, la religion est restée simple comme les hangars de Port-Aviation. Seul en Europe tu n'es pas antique ô Christianisme. Et toi que les fenêtres observent, la honte te retient d'entrer dans une église et de t'y confesser ce matin.`,
    contexte: "Poétique de la modernité urbaine.",
    attendus: [
      { procede: "Apostrophe", citation: "« Bergère ô tour Eiffel »", interpretation: "L'image mêle tradition pastorale et ville moderne.", keywords: ["apostrophe","tour eiffel","modernité","apollinaire"] },
      { procede: "Antithèse", citation: "« monde ancien » / « moderne »", interpretation: "Le poème se construit sur une tension temporelle.", keywords: ["antithèse","ancien","moderne","avant-garde"] },
      { procede: "Vers libre", citation: "« A la fin tu es las de ce monde ancien »", interpretation: "L'absence de cadre métrique accompagne la mobilité du regard.", keywords: ["vers libre","rythme","montage","alcools"] }
    ]
  },
  {
    id: "GT-880",
    titre: "Incipit provincial [Série 17]",
    auteur: "Stendhal",
    oeuvre: "Le Rouge et le Noir",
    genre: "Roman",
    diff: 1,
    texte: `La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure.`,
    contexte: "Ouverture réaliste et ironique de la province.",
    attendus: [
      { procede: "Cadre", citation: "« La petite ville de Verrières »", interpretation: "L'incipit pose un espace social précis.", keywords: ["cadre","province","stendhal","réalisme"] },
      { procede: "Lexique mélioratif", citation: "« La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure. »", interpretation: "Le positif prépare une lecture critique.", keywords: ["lexique","ironie","bourgeoisie","roman"] },
      { procede: "Attente", citation: "« La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure. »", interpretation: "La promesse initiale sera démentie par le récit.", keywords: ["attente","promesse","narrateur","destin"] }
    ]
  },
  {
    id: "GT-881",
    titre: "Entrée de Charles [Série 17]",
    auteur: "Flaubert",
    oeuvre: "Madame Bovary",
    genre: "Roman",
    diff: 2,
    texte: `Nous étions à l'étude, quand le proviseur entra, suivi d'un nouveau habillé en bourgeois et d'un garçon de classe qui portait un grand pupitre. Ceux qui dormaient se réveillèrent, et chacun se leva comme surpris dans son travail. Le proviseur nous fit signe de nous rasseoir; puis, se tournant vers le maître d'études: « Monsieur Roger, lui dit-il, voici un élève que je vous recommande. » Resté dans l'angle, derrière la porte, si bien qu'on l'apercevait à peine, le nouveau était un gars de la campagne, embarrassé par les regards.`,
    contexte: "Scène d'entrée et de maladresse sociale.",
    attendus: [
      { procede: "Focalisation", citation: "« Nous étions à l'étude »", interpretation: "Le point de vue collectif installe la scène.", keywords: ["focalisation","collectif","flaubert","classe"] },
      { procede: "Réalisme social", citation: "« habillé en bourgeois »", interpretation: "Le vêtement marque immédiatement la position sociale.", keywords: ["réalisme","social","école","roman"] },
      { procede: "Caractérisation", citation: "« le nouveau était un gars de la campagne »", interpretation: "L'origine rurale prépare l'inadaptation.", keywords: ["caractérisation","charles","inadaptation","bovary"] }
    ]
  },
  {
    id: "GT-882",
    titre: "Nuit de Germinal [Série 17]",
    auteur: "Zola",
    oeuvre: "Germinal",
    genre: "Roman",
    diff: 1,
    texte: `Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucune ombre d'arbre ne tachait le ciel; le pavé se déroulait avec la rectitude d'une jetée, au milieu des ténèbres.`,
    contexte: "Incipit naturaliste d'une marche vers la mine.",
    attendus: [
      { procede: "Métaphore", citation: "« rafales larges comme sur une mer »", interpretation: "La plaine devient un espace hostile et océanique.", keywords: ["métaphore","paysage","zola","naturalisme"] },
      { procede: "Champ lexical", citation: "« Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucune ombre d'arbre ne tachait le ciel; le pavé se déroulait avec la rectitude d'une jetée, au milieu des ténèbres. »", interpretation: "La noirceur annonce la violence sociale.", keywords: ["champ lexical","noir","mine","drame"] },
      { procede: "Focalisation externe", citation: "« un homme suivait seul »", interpretation: "L'anonymat initial universalise la condition ouvrière.", keywords: ["focalisation","anonymat","ouvrier","roman"] }
    ]
  },
  {
    id: "GT-883",
    titre: "Armée en déroute [Série 17]",
    auteur: "Maupassant",
    oeuvre: "Boule de suif",
    genre: "Roman",
    diff: 1,
    texte: `Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes, noirs, barbus, sales, harassés, marchaient d'un air abattu, sans drapeau, sans régiment. Tous semblaient accablés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude, et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait des mobilisés paisibles, des francs-tireurs de parade, et des soldats vaincus que le hasard poussait encore.`,
    contexte: "Ouverture de guerre et de désordre collectif.",
    attendus: [
      { procede: "Accumulation", citation: "« noirs, barbus, sales, harassés »", interpretation: "L'énumération matérialise l'épuisement.", keywords: ["accumulation","guerre","épuisement","maupassant"] },
      { procede: "Description", citation: "« sans drapeau, sans régiment »", interpretation: "La défaite se lit dans la disparition des signes militaires.", keywords: ["description","défaite","armée","réalisme"] },
      { procede: "Antithèse", citation: "« Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes, noirs, barbus, sales, harassés, marchaient d'un air abattu, sans drapeau, sans régiment. Tous semblaient accablés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude, et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait des mobilisés paisibles, des francs-tireurs de parade, et des soldats vaincus que le hasard poussait encore. »", interpretation: "Le texte montre la volatilité des foules en guerre.", keywords: ["antithèse","foule","instabilité","histoire"] }
    ]
  },
  {
    id: "GT-884",
    titre: "Maison Vauquer [Série 17]",
    auteur: "Balzac",
    oeuvre: "Le Père Goriot",
    genre: "Roman",
    diff: 2,
    texte: `Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux. Depuis trente ans, n'y a-t-il jamais été vu de jeune personne; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. En 1819, époque où commence ce drame, il s'y trouvait pourtant une pauvre jeune fille.`,
    contexte: "Incipit réaliste d'un microcosme social parisien.",
    attendus: [
      { procede: "Précision", citation: "« rue Neuve-Sainte-Geneviève »", interpretation: "Le détail topographique ancre le récit dans le réel.", keywords: ["réalisme","paris","topographie","balzac"] },
      { procede: "Ironie", citation: "« Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux. Depuis trente ans, n'y a-t-il jamais été vu de jeune personne; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. En 1819, époque où commence ce drame, il s'y trouvait pourtant une pauvre jeune fille. »", interpretation: "La formule valorisante suggère en creux la médiocrité.", keywords: ["ironie","narrateur","milieu","société"] },
      { procede: "Annonce", citation: "« époque où commence ce drame »", interpretation: "Le narrateur prépare une trajectoire tragique.", keywords: ["annonce","drame","destin","roman"] }
    ]
  },
  {
    id: "GT-885",
    titre: "Marche vers la tombe [Série 17]",
    auteur: "Hugo",
    oeuvre: "Les Contemplations",
    genre: "Poésie",
    diff: 2,
    texte: `Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur.`,
    contexte: "Élégie du deuil filial.",
    attendus: [
      { procede: "Progression", citation: "« Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur. »", interpretation: "La marche géographique devient parcours intérieur.", keywords: ["progression","deuil","hugo","élégie"] },
      { procede: "Antithèse", citation: "« Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur. »", interpretation: "La douleur annule les repères du monde.", keywords: ["antithèse","douleur","intériorité","lyrique"] },
      { procede: "Chute", citation: "« sur ta tombe »", interpretation: "La destination funèbre reconfigure tout le poème.", keywords: ["chute","tombe","émotion","poésie"] }
    ]
  },
  {
    id: "GT-886",
    titre: "Allégorie de l’albatros [Série 17]",
    auteur: "Baudelaire",
    oeuvre: "Les Fleurs du mal",
    genre: "Poésie",
    diff: 1,
    texte: `Souvent, pour s'amuser, les hommes d'équipage prennent des albatros, vastes oiseaux des mers, qui suivent, indolents compagnons de voyage, le navire glissant sur les gouffres amers. A peine les ont-ils déposés sur les planches, que ces rois de l'azur, maladroits et honteux, laissent piteusement leurs grandes ailes blanches comme des avirons traîner à côté d'eux. Ce voyageur ailé, comme il est gauche et veule! Lui, naguère si beau, qu'il est comique et laid! Le Poète est semblable au prince des nuées.`,
    contexte: "Allégorie du poète inadapté au monde social.",
    attendus: [
      { procede: "Allégorie", citation: "« Le Poète est semblable au prince des nuées »", interpretation: "L'albatros figure la condition du créateur.", keywords: ["allégorie","poète","société","baudelaire"] },
      { procede: "Antithèse", citation: "« t-ils déposés sur les planches, que ces rois de l'azur, maladroits et honte »", interpretation: "La grandeur chute dans le ridicule terrestre.", keywords: ["antithèse","sublime","ridicule","modernité"] },
      { procede: "Ironie", citation: "« pour s'amuser »", interpretation: "La cruauté collective est banalisée par le divertissement.", keywords: ["ironie","cruauté","foule","symbolisme"] }
    ]
  },
  {
    id: "GT-887",
    titre: "Chants désespérés [Série 17]",
    auteur: "Musset",
    oeuvre: "La Nuit de mai",
    genre: "Poésie",
    diff: 2,
    texte: `Poète, prends ton luth et me donne un baiser; la fleur de l'églantier sent ses bourgeons éclore, le printemps naît ce soir, les vents vont s'embraser. Les plus désespérés sont les chants les plus beaux, et j'en sais d'immortels qui sont de purs sanglots. Lorsque le pélican, lassé d'un long voyage, retourne à ses roseaux, ses petits affamés courent sur le rivage en le voyant au loin s'abattre sur les eaux. Ainsi le poète nourrit son chant de sa propre blessure, et la douleur devient musique.`,
    contexte: "Poème dialogué sur la création née de la souffrance.",
    attendus: [
      { procede: "Maxime", citation: "« Les plus désespérés sont les chants les plus beaux »", interpretation: "La formule fait de la douleur une source esthétique.", keywords: ["maxime","désespoir","beauté","musset"] },
      { procede: "Symbole", citation: "« le pélican »", interpretation: "L'oiseau représente le sacrifice du poète.", keywords: ["symbole","pélican","sacrifice","lyrisme"] },
      { procede: "Dialogue", citation: "« Poète, prends ton luth »", interpretation: "L'échange Muse/Poète dramatise l'inspiration.", keywords: ["dialogue","muse","poète","création"] }
    ]
  },
  {
    id: "GT-888",
    titre: "Stratégie de Merteuil [Série 17]",
    auteur: "Laclos",
    oeuvre: "Les Liaisons dangereuses",
    genre: "Roman",
    diff: 3,
    texte: `Vous voilà donc bien heureux de votre dernière conquête! Vous m'écrivez trois pages pour me vanter une paysanne. J'en ris encore. Croyez-vous me faire envie? Je connais vos ruses. Vous voulez me piquer, me faire croire que vous n'avez plus besoin de moi. D'ailleurs, ce n'est pas Cécile qui m'intéresse; c'est vous. Je veux savoir si vous oserez exécuter le plan que nous avons formé. Préférez-vous la vertu de Mme de Tourvel à la gloire de me plaire? Choisissez. Si vous hésitez, je comprendrai que vous avez faibli, et je saurai me venger.`,
    contexte: "Lettre de manipulation dans le roman libertin.",
    attendus: [
      { procede: "Registre épistolaire", citation: "« Vous m'écrivez trois pages »", interpretation: "La forme lettre sert la stratégie psychologique.", keywords: ["épistolaire","lettre","laclos","manipulation"] },
      { procede: "Ironie", citation: "« J'en ris encore »", interpretation: "La moquerie masque une volonté de domination.", keywords: ["ironie","merteuil","pouvoir","stratégie"] },
      { procede: "Antithèse", citation: "« vertu de Mme de Tourvel » / « gloire de me plaire »", interpretation: "Le conflit oppose morale et libertinage.", keywords: ["antithèse","vertu","séduction","libertinage"] }
    ]
  },
  {
    id: "GT-889",
    titre: "Dialogue du Neveu [Série 17]",
    auteur: "Diderot",
    oeuvre: "Le Neveu de Rameau",
    genre: "Idées",
    diff: 2,
    texte: `Je ne connais pas de plus grand charlatan que celui qui prétend enseigner ce qu'il ne sait pas. Le monde est plein de ces pédants qui récitent des maximes et ne les pratiquent point. Ils ont l'air grave, le ton sentencieux, et l'on les écoute; mais suivez-les chez eux, vous les verrez mentir, voler, tricher, se livrer à toutes les turpitudes qu'ils condamnent en public. Le Neveu rit de tout cela: « Morale! c'est le masque du faible devant le fort. » Je lui réponds que sans morale, la société tombe en ruine. Le dialogue ne tranche pas; il oblige à penser.`,
    contexte: "Satire philosophique de l’hypocrisie sociale.",
    attendus: [
      { procede: "Ironie", citation: "« l'air grave, le ton sentencieux »", interpretation: "Le portrait dénonce les faux moralistes.", keywords: ["ironie","pédants","hypocrisie","diderot"] },
      { procede: "Antithèse", citation: "« sans morale, la société tombe » / « Morale! c'est le masque »", interpretation: "Le texte confronte deux conceptions irréconciliables.", keywords: ["antithèse","morale","cynisme","dialogue"] },
      { procede: "Registre argumentatif", citation: "« Le dialogue ne tranche pas »", interpretation: "La pensée progresse par confrontation des voix.", keywords: ["argumentatif","débat","philosophie","lumières"] }
    ]
  },
  {
    id: "GT-890",
    titre: "Mal du siècle [Série 17]",
    auteur: "Chateaubriand",
    oeuvre: "René",
    genre: "Roman",
    diff: 2,
    texte: `Les solitudes me parlent une langue que je comprends; les grands bois, les montagnes, les mers désertes me rendent ce que les hommes m'ont pris. J'ai passé ma jeunesse à fuir les villes, à chercher des lieux où le vent souffle sans témoin, où l'on peut pleurer sans ridicule. Amélie, ma sœur, partageait autrefois ces errances; mais le monde a séparé nos destins, et je reste seul avec mon mal du siècle, ce vague à l'âme qui consume sans éclat. Les ruines, les tombeaux, les crépuscules m'attirent: je ne cherche pas le bonheur, je cherche une émotion forte.`,
    contexte: "Confession romantique et solitude existentielle.",
    attendus: [
      { procede: "Personnification", citation: "« Les solitudes me parlent »", interpretation: "La nature devient interlocutrice du moi.", keywords: ["personnification","nature","romantisme","rené"] },
      { procede: "Registre lyrique", citation: "« ce vague à l'âme »", interpretation: "Le texte exprime la crise intime du sujet romantique.", keywords: ["lyrique","mal du siècle","subjectivité","chateaubriand"] },
      { procede: "Antithèse", citation: "« Je ne cherche pas le bonheur » / « une émotion forte »", interpretation: "Le héros refuse la modération bourgeoise.", keywords: ["antithèse","bonheur","intensité","roman"] }
    ]
  },
  {
    id: "GT-891",
    titre: "Passion à la cour [Série 17]",
    auteur: "Lafayette",
    oeuvre: "La Princesse de Clèves",
    genre: "Roman",
    diff: 3,
    texte: `La cour était alors dans une magnificence qu'on n'a jamais vue depuis. L'ambition et la galanterie régnaient en même temps et occupaient également les esprits; l'un et l'autre trouvaient souvent des moyens de se concilier, et l'on ne savait lequel emportait l'avantage. Mme de Clèves, jeune, belle, et mariée au prince de Clèves, ne connaissait pas encore la violence de la passion. Elle croyait que l'honnêteté suffisait à régler la conduite. Mais le duc de Nemours parut: il était de ces hommes que la nature semble avoir formés pour se faire aimer.`,
    contexte: "Exposition du roman de passion classique.",
    attendus: [
      { procede: "Tableau social", citation: "« L'ambition et la galanterie régnaient »", interpretation: "Le cadre de cour organise les comportements.", keywords: ["cour","mœurs","galanterie","lafayette"] },
      { procede: "Antithèse", citation: "« Elle croyait que l'honnêteté suffisait à régler la conduite »", interpretation: "Le conflit moral est lancé dès l’exposition.", keywords: ["antithèse","vertu","passion","roman"] },
      { procede: "Caractérisation", citation: "« formés pour se faire aimer »", interpretation: "Nemours apparaît comme type du séducteur.", keywords: ["caractérisation","nemours","désir","classicisme"] }
    ]
  }
  ],
  18: [
  {
    id: "GT-892",
    titre: "Face au créateur",
    auteur: "Shelley",
    oeuvre: "Frankenstein (trad. fr.)",
    genre: "Roman",
    diff: 2,
    texte: `Je devrais être ton Adam, et je suis plutôt l'ange déchu que tu chasses de la joie sans faute commise. Je suis malheureux parce que je suis seul. Je suis bon; la misère m'a rendu démon. Donne-moi une compagne de mon espèce, et je me retirerai dans les déserts de l'Amérique du Sud; je ne nuirai plus à personne. Mais si tu refuses, je jure, par le soleil et par la terre, de te poursuivre jusqu'à ce que l'un de nous périsse. Souviens-toi que je suis ta créature, et que ton refus fera de moi ton ennemi.`,
    contexte: "Plaidoyer de la créature contre son créateur.",
    attendus: [
      { procede: "Référence biblique", citation: "« Je devrais être ton Adam, et je suis plutôt l'ange déchu que tu chasses de la joie san »", interpretation: "La créature relit sa condition en termes religieux.", keywords: ["bible","adam","chute","shelley"] },
      { procede: "Antithèse", citation: "« Je suis bon; la misère m'a rendu démon »", interpretation: "La monstruosité est présentée comme effet social.", keywords: ["antithèse","bon","démon","responsabilité"] },
      { procede: "Menace", citation: "« Je devrais être ton Adam, et je suis plutôt l'ange déchu que tu chasses de la joie sans faute commise. Je suis malheureux parce que je suis seul. Je suis bon; la misère m'a rendu démon. Donne-moi une compagne de mon espèce, et je me retirerai dans les déserts de l'Amérique du Sud; je ne nuirai plus à personne. Mais si tu refuses, je jure, par le soleil et par la terre, de te poursuivre jusqu'à ce que l'un de nous périsse. Souviens-toi que je suis ta créature, et que ton refus fera de moi ton ennemi. »", interpretation: "Le refus du créateur produit la logique tragique de vengeance.", keywords: ["menace","vengeance","drame","roman"] }
    ]
  },
  {
    id: "GT-893",
    titre: "Lettre de Tatiana",
    auteur: "Pouchkine",
    oeuvre: "Eugène Onéguine (trad. fr.)",
    genre: "Poésie",
    diff: 2,
    texte: `Je vous écris: que puis-je de plus? Que puis-je dire encore? Je sais qu'en votre pouvoir est de me punir par le mépris. Mais vous, pour mon malheur, vous avez paru; et, vous voyant, je vous ai reconnu. C'était vous que j'attendais dans mes rêves silencieux, c'était vous que ma jeunesse appelait sans nom. Pourquoi êtes-vous venu dans notre solitude? Vous avez réveillé un cœur timide qui se croyait calme. Je suis à vous, et mon destin désormais dépend d'un mot que vous voudrez bien prononcer.`,
    contexte: "Déclaration amoureuse fondatrice du roman en vers.",
    attendus: [
      { procede: "Interrogation", citation: "« que puis-je de plus? »", interpretation: "Les questions traduisent l’extrême vulnérabilité.", keywords: ["interrogation","amour","tatiana","pouchkine"] },
      { procede: "Anaphore", citation: "« c'était vous »", interpretation: "La répétition inscrit l'évidence du sentiment.", keywords: ["anaphore","déclaration","destin","poésie"] },
      { procede: "Formule", citation: "« Je suis à vous »", interpretation: "La phrase condense le don total de soi.", keywords: ["formule","abandon","lyrique","roman en vers"] }
    ]
  },
  {
    id: "GT-894",
    titre: "Akaki et son manteau",
    auteur: "Gogol",
    oeuvre: "Le Manteau (trad. fr.)",
    genre: "Roman",
    diff: 2,
    texte: `Dans un département de Pétersbourg servait un fonctionnaire nommé Akaki Akakiévitch. On ne pouvait pas dire qu'il fût remarquable; petit, un peu grêlé, légèrement roux, et d'une vue courte, il copiait avec amour les papiers qu'on lui confiait. Son manteau, devenu si mince qu'on l'appelait la capote, ne protégeait plus du vent. Le tailleur déclara qu'il fallait en faire un neuf. Dès lors, Akaki vécut d'économies, marchant sur la pointe des pieds pour ne pas user ses semelles, afin d'atteindre ce bonheur: un manteau neuf.`,
    contexte: "Portrait satirique du petit fonctionnaire.",
    attendus: [
      { procede: "Caractérisation", citation: "« On ne pouvait pas dire qu'il fût remarquable »", interpretation: "Le héros est défini par sa médiocrité sociale.", keywords: ["caractérisation","fonctionnaire","gogol","satire"] },
      { procede: "Motif", citation: "« un manteau neuf »", interpretation: "L'objet devient horizon existentiel.", keywords: ["motif","objet","désir","réalisme"] },
      { procede: "Ironie", citation: "« il copiait avec amour »", interpretation: "La dignité dérisoire du personnage suscite une compassion critique.", keywords: ["ironie","compassion","administration","nouvelle"] }
    ]
  },
  {
    id: "GT-895",
    titre: "Hedda refuse la consolation",
    auteur: "Ibsen",
    oeuvre: "Hedda Gabler (trad. fr.)",
    genre: "Théâtre",
    diff: 2,
    texte: `HEDDA: Je veux, pour une fois dans ma vie, avoir pouvoir sur un destin d'homme. JEAN: Vous parlez toujours de pouvoir, madame. HEDDA: Oui, de pouvoir. On m'a appris à jouer du piano, à sourire, à recevoir; jamais à vivre. Et maintenant je suis enfermée dans cette maison comme dans une boîte. J'ai horreur du ridicule, horreur de la médiocrité. Je ne supporterai pas une existence où l'on respire la poussière des conventions. S'il faut choisir entre la liberté et l'ennui, je préfère encore la flamme.`,
    contexte: "Scène de rupture et affirmation de soi.",
    attendus: [
      { procede: "Déclaration", citation: "« HEDDA: Je veux, pour une fois dans ma vie, avoir pouvoir sur un destin d'homme. JEAN: Vous parlez toujours de pouvoir, madame. HEDDA: Oui, de pouvoir. On m'a appris à jouer du piano, à sourire, à recevoir; jamais à vivre. Et maintenant je suis enfermée dans cette maison comme dans une boîte. J'ai horreur du ridicule, horreur de la médiocrité. Je ne supporterai pas une existence où l'on respire la poussière des conventions. S'il faut choisir entre la liberté et l'ennui, je préfère encore la flamme. »", interpretation: "Nora reformule la hiérarchie des valeurs.", keywords: ["émancipation","théâtre","ibsen","identité"] },
      { procede: "Antithèse", citation: "« HEDDA: Je veux, pour une fois dans ma vie, avoir pouvoir sur un destin d'homme. JEAN: Vous parlez toujours de pouvoir, madame. HEDDA: Oui, de pouvoir. On m'a appris à jouer du piano, à sourire, à recevoir; jamais à vivre. Et maintenant je suis enfermée dans cette maison comme dans une boîte. J'ai horreur du ridicule, horreur de la médiocrité. Je ne supporterai pas une existence où l'on respire la poussière des conventions. S'il faut choisir entre la liberté et l'ennui, je préfère encore la flamme. »", interpretation: "La norme sociale est contestée par la conscience.", keywords: ["antithèse","norme","conscience","modernité"] },
      { procede: "Réplique clé", citation: "« HEDDA: Je veux, pour une fois dans ma vie, avoir pouvoir sur un destin d'homme. JEAN: Vous parlez toujours de pouvoir, madame. HEDDA: Oui, de pouvoir. On m'a appris à jouer du piano, à sourire, à recevoir; jamais à vivre. Et maintenant je suis enfermée dans cette maison comme dans une boîte. J'ai horreur du ridicule, horreur de la médiocrité. Je ne supporterai pas une existence où l'on respire la poussière des conventions. S'il faut choisir entre la liberté et l'ennui, je préfère encore la flamme. »", interpretation: "La formule condense la portée féministe de la scène.", keywords: ["devoir","soi","rupture","drame"] }
    ]
  },
  {
    id: "GT-896",
    titre: "Prière pour la tolérance [Série 18]",
    auteur: "Voltaire",
    oeuvre: "Traité sur la tolérance",
    genre: "Idées",
    diff: 3,
    texte: `Ce n'est donc plus aux hommes que je m'adresse; c'est à toi, Dieu de tous les êtres, de tous les mondes et de tous les temps: s'il est permis à de faibles créatures, perdues dans l'immensité et imperceptibles au reste de l'univers, d'oser te demander quelque chose, à toi qui as tout donné, à toi dont les décrets sont immuables comme éternels, daigne regarder en pitié les erreurs attachées à notre nature; que ces erreurs ne fassent point nos calamités. Tu ne nous as point donné un cœur pour nous haïr, et des mains pour nous égorger; fais que nous nous aidions mutuellement à supporter le fardeau d'une vie pénible et passagère.`,
    contexte: "Prière philosophique contre l'intolérance religieuse.",
    attendus: [
      { procede: "Apostrophe", citation: "« c'est à toi, Dieu de tous les êtres »", interpretation: "L'adresse solennelle universalise la demande morale.", keywords: ["apostrophe","universel","tolérance","voltaire"] },
      { procede: "Antithèse", citation: "« Tu ne nous as point donné un cœur pour nous haïr, et des mains pour n »", interpretation: "Le texte oppose la violence à la fraternité.", keywords: ["antithèse","haine","fraternité","lumières"] },
      { procede: "Registre oratoire", citation: "« daigne regarder en pitié »", interpretation: "Le ton de supplication renforce la portée civique.", keywords: ["oratoire","prière","argumentation","idées"] }
    ]
  },
  {
    id: "GT-897",
    titre: "Aveu de Phèdre [Série 18]",
    auteur: "Racine",
    oeuvre: "Phèdre",
    genre: "Théâtre",
    diff: 2,
    texte: `Je le vis, je rougis, je pâlis à sa vue; un trouble s'éleva dans mon âme éperdue; mes yeux ne voyaient plus, je ne pouvais parler; je sentis tout mon corps et transir et brûler. Je reconnus Vénus et ses feux redoutables, d'un sang qu'elle poursuit tourments inévitables. Par des vœux assidus je crus les détourner: je lui bâtis un temple, et pris soin de l'orner; de victimes moi-même à toute heure entourée, je cherchais dans leurs flancs ma raison égarée. Ainsi, la passion se fait faute, et la faute se fait destin.`,
    contexte: "Aveu tragique d'une passion impossible.",
    attendus: [
      { procede: "Parallélisme", citation: "« Je le vis, je rougis, je pâlis »", interpretation: "Le rythme ternaire dramatise le choc amoureux.", keywords: ["parallélisme","aveu","tragédie","racine"] },
      { procede: "Antithèse", citation: "« transir et brûler »", interpretation: "Le désir se dit dans une contradiction corporelle.", keywords: ["antithèse","désir","douleur","pathétique"] },
      { procede: "Mythologie", citation: "« Je reconnus Vénus »", interpretation: "La référence divine inscrit la passion dans la fatalité.", keywords: ["mythologie","fatalité","vénus","tragique"] }
    ]
  },
  {
    id: "GT-898",
    titre: "Dilemme de Rodrigue [Série 18]",
    auteur: "Corneille",
    oeuvre: "Le Cid",
    genre: "Théâtre",
    diff: 2,
    texte: `Percé jusques au fond du cœur d'une atteinte imprévue aussi bien que mortelle, misérable vengeur d'une juste querelle, et malheureux objet d'une injuste rigueur, je demeure immobile, et mon âme abattue cède au coup qui me tue. En cet affront mon père est l'offensé, et l'offenseur le père de Chimène. Que je sens de rudes combats! contre mon propre honneur mon amour s'intéresse. Faut-il perdre Chimène, ou trahir mon lignage? le héros naît dans cette hésitation.`,
    contexte: "Conflit classique entre honneur et amour.",
    attendus: [
      { procede: "Antithèse", citation: "« contre mon propre honneur mon amour s'intéresse. »", interpretation: "La symétrie formule l'impasse morale.", keywords: ["antithèse","honneur","amour","corneille"] },
      { procede: "Registre tragique", citation: "« Percé jusques au fond du cœur »", interpretation: "La douleur morale prend la forme d'une blessure.", keywords: ["tragique","souffrance","dilemme","théâtre"] },
      { procede: "Exclamation", citation: "« Que je sens de rudes combats! »", interpretation: "L'exclamation rend sensible l'urgence intérieure.", keywords: ["exclamation","combat","pathétique","classicisme"] }
    ]
  },
  {
    id: "GT-899",
    titre: "Aveuglement d’Orgon [Série 18]",
    auteur: "Molière",
    oeuvre: "Tartuffe",
    genre: "Théâtre",
    diff: 3,
    texte: `Ha! si vous aviez vu comme j'en fis rencontre, vous auriez pris pour lui l'amitié que je montre. Chaque jour à l'église il venait, d'un air doux, tout vis-à-vis de moi se mettre à deux genoux. Il attirait les yeux de l'assemblée entière par l'ardeur dont au Ciel il poussait sa prière; il faisait des soupirs, de grands élancements, et baisait humblement la terre à tous moments. Et lorsque je sortais, il me devançait vite pour m'aller à la porte offrir de l'eau bénite. Et Tartuffe? Le pauvre homme!`,
    contexte: "Portrait comique d'un faux dévot.",
    attendus: [
      { procede: "Comique de caractère", citation: "« Le pauvre homme! »", interpretation: "Le refrain signale l'aveuglement d'Orgon.", keywords: ["comique","orgon","imposture","molière"] },
      { procede: "Accumulation", citation: "« soupirs, de grands élancements »", interpretation: "La surenchère gestuelle dénonce l'hypocrisie.", keywords: ["accumulation","hypocrisie","satire","dévotion"] },
      { procede: "Ironie dramatique", citation: "« Et Tartuffe? »", interpretation: "Le spectateur comprend ce qu'Orgon refuse de voir.", keywords: ["ironie dramatique","spectateur","théâtre","classicisme"] }
    ]
  },
  {
    id: "GT-900",
    titre: "Morale du plus fort [Série 18]",
    auteur: "La Fontaine",
    oeuvre: "Fables",
    genre: "Poésie",
    diff: 3,
    texte: `La raison du plus fort est toujours la meilleure: nous l'allons montrer tout à l'heure. Un Agneau se désaltérait dans le courant d'une onde pure. Un Loup survient à jeun, qui cherchait aventure, et que la faim en ces lieux attirait. Qui te rend si hardi de troubler mon breuvage? dit cet animal plein de rage: tu seras châtié de ta témérité. Sire, répond l'Agneau, que Votre Majesté ne se mette pas en colère; mais plutôt qu'elle considère que je me vas désaltérant plus de vingt pas au-dessous d'Elle.`,
    contexte: "Fable sur l'arbitraire de la force.",
    attendus: [
      { procede: "Morale", citation: "« La raison du plus fort est toujours la meilleure »", interpretation: "La moralité initiale donne la clé de lecture politique.", keywords: ["morale","force","justice","fable"] },
      { procede: "Dialogue", citation: "« Qui te rend si hardi »", interpretation: "Le discours direct met en scène un procès biaisé.", keywords: ["dialogue","procès","injustice","allégorie"] },
      { procede: "Ironie", citation: "« Votre Majesté »", interpretation: "La politesse de l'agneau souligne la brutalité du loup.", keywords: ["ironie","domination","la fontaine","pouvoir"] }
    ]
  },
  {
    id: "GT-901",
    titre: "Le soldat endormi [Série 18]",
    auteur: "Rimbaud",
    oeuvre: "Le Dormeur du val",
    genre: "Poésie",
    diff: 1,
    texte: `C'est un trou de verdure où chante une rivière accrochant follement aux herbes des haillons d'argent; où le soleil, de la montagne fière, luit: c'est un petit val qui mousse de rayons. Un soldat jeune, bouche ouverte, tête nue, et la nuque baignant dans le frais cresson bleu, dort; il est étendu dans l'herbe, sous la nue, pâle dans son lit vert où la lumière pleut. Les parfums ne font pas frissonner sa narine; il dort dans le soleil, la main sur sa poitrine, tranquille. Il a deux trous rouges au côté droit.`,
    contexte: "Poème de guerre à chute brutale.",
    attendus: [
      { procede: "Chute", citation: "« Il a deux trous rouges au côté droit »", interpretation: "Le dernier vers renverse la lecture bucolique.", keywords: ["chute","guerre","mort","rimbaud"] },
      { procede: "Personnification", citation: "« C'est un trou de verdure où chante une rivière accrochant follement aux herbes des haillons d'argent; où le soleil, de la montagne fière, luit: c'est un petit val qui mousse de rayons. Un soldat jeune, bouche ouverte, tête nue, et la nuque baignant dans le frais cresson bleu, dort; il est étendu dans l'herbe, sous la nue, pâle dans son lit vert où la lumière pleut. Les parfums ne font pas frissonner sa narine; il dort dans le soleil, la main sur sa poitrine, tranquille. Il a deux trous rouges au côté droit. »", interpretation: "La nature maternelle reste impuissante face à la guerre.", keywords: ["personnification","nature","pathétique","poésie"] },
      { procede: "Contraste", citation: "« trou de verdure »", interpretation: "Le cadre lumineux contraste avec la mort du soldat.", keywords: ["contraste","couleurs","violence","lyrique"] }
    ]
  },
  {
    id: "GT-902",
    titre: "Mélancolie d’automne [Série 18]",
    auteur: "Verlaine",
    oeuvre: "Chanson d’automne",
    genre: "Poésie",
    diff: 2,
    texte: `Les sanglots longs des violons de l'automne blessent mon cœur d'une langueur monotone. Tout suffocant et blême, quand sonne l'heure, je me souviens des jours anciens et je pleure; et je m'en vais au vent mauvais qui m'emporte deçà, delà, pareil à la feuille morte. Le soir s'allonge et la cloche descend dans l'air humide; la ville s'efface; mon pas hésite comme une voix qui s'éteint dans le froid, et ma mémoire revient avec ses battements sourds.`,
    contexte: "Poème bref et musical de la nostalgie.",
    attendus: [
      { procede: "Allitération", citation: "« sanglots longs des violons »", interpretation: "Les sonorités prolongent la plainte.", keywords: ["allitération","musicalité","verlaine","mélancolie"] },
      { procede: "Comparaison", citation: "« Pareil à la feuille morte »", interpretation: "Le sujet se dit emporté par le temps.", keywords: ["comparaison","automne","temps","destin"] },
      { procede: "Registre lyrique", citation: "« je me souviens ... je pleure »", interpretation: "L'expression du moi structure le poème.", keywords: ["lyrique","souvenir","tristesse","poésie"] }
    ]
  },
  {
    id: "GT-903",
    titre: "Modernité de Zone [Série 18]",
    auteur: "Apollinaire",
    oeuvre: "Alcools",
    genre: "Poésie",
    diff: 1,
    texte: `A la fin tu es las de ce monde ancien. Bergère ô tour Eiffel le troupeau des ponts bêle ce matin. Tu en as assez de vivre dans l'antiquité grecque et romaine. Ici même les automobiles ont l'air d'être anciennes. La religion seule est restée toute neuve, la religion est restée simple comme les hangars de Port-Aviation. Seul en Europe tu n'es pas antique ô Christianisme. Et toi que les fenêtres observent, la honte te retient d'entrer dans une église et de t'y confesser ce matin.`,
    contexte: "Poétique de la modernité urbaine.",
    attendus: [
      { procede: "Apostrophe", citation: "« Bergère ô tour Eiffel »", interpretation: "L'image mêle tradition pastorale et ville moderne.", keywords: ["apostrophe","tour eiffel","modernité","apollinaire"] },
      { procede: "Antithèse", citation: "« monde ancien » / « moderne »", interpretation: "Le poème se construit sur une tension temporelle.", keywords: ["antithèse","ancien","moderne","avant-garde"] },
      { procede: "Vers libre", citation: "« A la fin tu es las de ce monde ancien »", interpretation: "L'absence de cadre métrique accompagne la mobilité du regard.", keywords: ["vers libre","rythme","montage","alcools"] }
    ]
  },
  {
    id: "GT-904",
    titre: "Incipit provincial [Série 18]",
    auteur: "Stendhal",
    oeuvre: "Le Rouge et le Noir",
    genre: "Roman",
    diff: 2,
    texte: `La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure.`,
    contexte: "Ouverture réaliste et ironique de la province.",
    attendus: [
      { procede: "Cadre", citation: "« La petite ville de Verrières »", interpretation: "L'incipit pose un espace social précis.", keywords: ["cadre","province","stendhal","réalisme"] },
      { procede: "Lexique mélioratif", citation: "« La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure. »", interpretation: "Le positif prépare une lecture critique.", keywords: ["lexique","ironie","bourgeoisie","roman"] },
      { procede: "Attente", citation: "« La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure. »", interpretation: "La promesse initiale sera démentie par le récit.", keywords: ["attente","promesse","narrateur","destin"] }
    ]
  },
  {
    id: "GT-905",
    titre: "Entrée de Charles [Série 18]",
    auteur: "Flaubert",
    oeuvre: "Madame Bovary",
    genre: "Roman",
    diff: 3,
    texte: `Nous étions à l'étude, quand le proviseur entra, suivi d'un nouveau habillé en bourgeois et d'un garçon de classe qui portait un grand pupitre. Ceux qui dormaient se réveillèrent, et chacun se leva comme surpris dans son travail. Le proviseur nous fit signe de nous rasseoir; puis, se tournant vers le maître d'études: « Monsieur Roger, lui dit-il, voici un élève que je vous recommande. » Resté dans l'angle, derrière la porte, si bien qu'on l'apercevait à peine, le nouveau était un gars de la campagne, embarrassé par les regards.`,
    contexte: "Scène d'entrée et de maladresse sociale.",
    attendus: [
      { procede: "Focalisation", citation: "« Nous étions à l'étude »", interpretation: "Le point de vue collectif installe la scène.", keywords: ["focalisation","collectif","flaubert","classe"] },
      { procede: "Réalisme social", citation: "« habillé en bourgeois »", interpretation: "Le vêtement marque immédiatement la position sociale.", keywords: ["réalisme","social","école","roman"] },
      { procede: "Caractérisation", citation: "« le nouveau était un gars de la campagne »", interpretation: "L'origine rurale prépare l'inadaptation.", keywords: ["caractérisation","charles","inadaptation","bovary"] }
    ]
  },
  {
    id: "GT-906",
    titre: "Nuit de Germinal [Série 18]",
    auteur: "Zola",
    oeuvre: "Germinal",
    genre: "Roman",
    diff: 2,
    texte: `Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucune ombre d'arbre ne tachait le ciel; le pavé se déroulait avec la rectitude d'une jetée, au milieu des ténèbres.`,
    contexte: "Incipit naturaliste d'une marche vers la mine.",
    attendus: [
      { procede: "Métaphore", citation: "« rafales larges comme sur une mer »", interpretation: "La plaine devient un espace hostile et océanique.", keywords: ["métaphore","paysage","zola","naturalisme"] },
      { procede: "Champ lexical", citation: "« Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucune ombre d'arbre ne tachait le ciel; le pavé se déroulait avec la rectitude d'une jetée, au milieu des ténèbres. »", interpretation: "La noirceur annonce la violence sociale.", keywords: ["champ lexical","noir","mine","drame"] },
      { procede: "Focalisation externe", citation: "« un homme suivait seul »", interpretation: "L'anonymat initial universalise la condition ouvrière.", keywords: ["focalisation","anonymat","ouvrier","roman"] }
    ]
  },
  {
    id: "GT-907",
    titre: "Armée en déroute [Série 18]",
    auteur: "Maupassant",
    oeuvre: "Boule de suif",
    genre: "Roman",
    diff: 2,
    texte: `Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes, noirs, barbus, sales, harassés, marchaient d'un air abattu, sans drapeau, sans régiment. Tous semblaient accablés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude, et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait des mobilisés paisibles, des francs-tireurs de parade, et des soldats vaincus que le hasard poussait encore.`,
    contexte: "Ouverture de guerre et de désordre collectif.",
    attendus: [
      { procede: "Accumulation", citation: "« noirs, barbus, sales, harassés »", interpretation: "L'énumération matérialise l'épuisement.", keywords: ["accumulation","guerre","épuisement","maupassant"] },
      { procede: "Description", citation: "« sans drapeau, sans régiment »", interpretation: "La défaite se lit dans la disparition des signes militaires.", keywords: ["description","défaite","armée","réalisme"] },
      { procede: "Antithèse", citation: "« Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes, noirs, barbus, sales, harassés, marchaient d'un air abattu, sans drapeau, sans régiment. Tous semblaient accablés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude, et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait des mobilisés paisibles, des francs-tireurs de parade, et des soldats vaincus que le hasard poussait encore. »", interpretation: "Le texte montre la volatilité des foules en guerre.", keywords: ["antithèse","foule","instabilité","histoire"] }
    ]
  },
  {
    id: "GT-908",
    titre: "Maison Vauquer [Série 18]",
    auteur: "Balzac",
    oeuvre: "Le Père Goriot",
    genre: "Roman",
    diff: 3,
    texte: `Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux. Depuis trente ans, n'y a-t-il jamais été vu de jeune personne; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. En 1819, époque où commence ce drame, il s'y trouvait pourtant une pauvre jeune fille.`,
    contexte: "Incipit réaliste d'un microcosme social parisien.",
    attendus: [
      { procede: "Précision", citation: "« rue Neuve-Sainte-Geneviève »", interpretation: "Le détail topographique ancre le récit dans le réel.", keywords: ["réalisme","paris","topographie","balzac"] },
      { procede: "Ironie", citation: "« Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux. Depuis trente ans, n'y a-t-il jamais été vu de jeune personne; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. En 1819, époque où commence ce drame, il s'y trouvait pourtant une pauvre jeune fille. »", interpretation: "La formule valorisante suggère en creux la médiocrité.", keywords: ["ironie","narrateur","milieu","société"] },
      { procede: "Annonce", citation: "« époque où commence ce drame »", interpretation: "Le narrateur prépare une trajectoire tragique.", keywords: ["annonce","drame","destin","roman"] }
    ]
  },
  {
    id: "GT-909",
    titre: "Marche vers la tombe [Série 18]",
    auteur: "Hugo",
    oeuvre: "Les Contemplations",
    genre: "Poésie",
    diff: 3,
    texte: `Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur.`,
    contexte: "Élégie du deuil filial.",
    attendus: [
      { procede: "Progression", citation: "« Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur. »", interpretation: "La marche géographique devient parcours intérieur.", keywords: ["progression","deuil","hugo","élégie"] },
      { procede: "Antithèse", citation: "« Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur. »", interpretation: "La douleur annule les repères du monde.", keywords: ["antithèse","douleur","intériorité","lyrique"] },
      { procede: "Chute", citation: "« sur ta tombe »", interpretation: "La destination funèbre reconfigure tout le poème.", keywords: ["chute","tombe","émotion","poésie"] }
    ]
  },
  {
    id: "GT-910",
    titre: "Allégorie de l’albatros [Série 18]",
    auteur: "Baudelaire",
    oeuvre: "Les Fleurs du mal",
    genre: "Poésie",
    diff: 2,
    texte: `Souvent, pour s'amuser, les hommes d'équipage prennent des albatros, vastes oiseaux des mers, qui suivent, indolents compagnons de voyage, le navire glissant sur les gouffres amers. A peine les ont-ils déposés sur les planches, que ces rois de l'azur, maladroits et honteux, laissent piteusement leurs grandes ailes blanches comme des avirons traîner à côté d'eux. Ce voyageur ailé, comme il est gauche et veule! Lui, naguère si beau, qu'il est comique et laid! Le Poète est semblable au prince des nuées.`,
    contexte: "Allégorie du poète inadapté au monde social.",
    attendus: [
      { procede: "Allégorie", citation: "« Le Poète est semblable au prince des nuées »", interpretation: "L'albatros figure la condition du créateur.", keywords: ["allégorie","poète","société","baudelaire"] },
      { procede: "Antithèse", citation: "« t-ils déposés sur les planches, que ces rois de l'azur, maladroits et honte »", interpretation: "La grandeur chute dans le ridicule terrestre.", keywords: ["antithèse","sublime","ridicule","modernité"] },
      { procede: "Ironie", citation: "« pour s'amuser »", interpretation: "La cruauté collective est banalisée par le divertissement.", keywords: ["ironie","cruauté","foule","symbolisme"] }
    ]
  },
  {
    id: "GT-911",
    titre: "Chants désespérés [Série 18]",
    auteur: "Musset",
    oeuvre: "La Nuit de mai",
    genre: "Poésie",
    diff: 3,
    texte: `Poète, prends ton luth et me donne un baiser; la fleur de l'églantier sent ses bourgeons éclore, le printemps naît ce soir, les vents vont s'embraser. Les plus désespérés sont les chants les plus beaux, et j'en sais d'immortels qui sont de purs sanglots. Lorsque le pélican, lassé d'un long voyage, retourne à ses roseaux, ses petits affamés courent sur le rivage en le voyant au loin s'abattre sur les eaux. Ainsi le poète nourrit son chant de sa propre blessure, et la douleur devient musique.`,
    contexte: "Poème dialogué sur la création née de la souffrance.",
    attendus: [
      { procede: "Maxime", citation: "« Les plus désespérés sont les chants les plus beaux »", interpretation: "La formule fait de la douleur une source esthétique.", keywords: ["maxime","désespoir","beauté","musset"] },
      { procede: "Symbole", citation: "« le pélican »", interpretation: "L'oiseau représente le sacrifice du poète.", keywords: ["symbole","pélican","sacrifice","lyrisme"] },
      { procede: "Dialogue", citation: "« Poète, prends ton luth »", interpretation: "L'échange Muse/Poète dramatise l'inspiration.", keywords: ["dialogue","muse","poète","création"] }
    ]
  },
  {
    id: "GT-912",
    titre: "Stratégie de Merteuil [Série 18]",
    auteur: "Laclos",
    oeuvre: "Les Liaisons dangereuses",
    genre: "Roman",
    diff: 1,
    texte: `Vous voilà donc bien heureux de votre dernière conquête! Vous m'écrivez trois pages pour me vanter une paysanne. J'en ris encore. Croyez-vous me faire envie? Je connais vos ruses. Vous voulez me piquer, me faire croire que vous n'avez plus besoin de moi. D'ailleurs, ce n'est pas Cécile qui m'intéresse; c'est vous. Je veux savoir si vous oserez exécuter le plan que nous avons formé. Préférez-vous la vertu de Mme de Tourvel à la gloire de me plaire? Choisissez. Si vous hésitez, je comprendrai que vous avez faibli, et je saurai me venger.`,
    contexte: "Lettre de manipulation dans le roman libertin.",
    attendus: [
      { procede: "Registre épistolaire", citation: "« Vous m'écrivez trois pages »", interpretation: "La forme lettre sert la stratégie psychologique.", keywords: ["épistolaire","lettre","laclos","manipulation"] },
      { procede: "Ironie", citation: "« J'en ris encore »", interpretation: "La moquerie masque une volonté de domination.", keywords: ["ironie","merteuil","pouvoir","stratégie"] },
      { procede: "Antithèse", citation: "« vertu de Mme de Tourvel » / « gloire de me plaire »", interpretation: "Le conflit oppose morale et libertinage.", keywords: ["antithèse","vertu","séduction","libertinage"] }
    ]
  },
  {
    id: "GT-913",
    titre: "Dialogue du Neveu [Série 18]",
    auteur: "Diderot",
    oeuvre: "Le Neveu de Rameau",
    genre: "Idées",
    diff: 3,
    texte: `Je ne connais pas de plus grand charlatan que celui qui prétend enseigner ce qu'il ne sait pas. Le monde est plein de ces pédants qui récitent des maximes et ne les pratiquent point. Ils ont l'air grave, le ton sentencieux, et l'on les écoute; mais suivez-les chez eux, vous les verrez mentir, voler, tricher, se livrer à toutes les turpitudes qu'ils condamnent en public. Le Neveu rit de tout cela: « Morale! c'est le masque du faible devant le fort. » Je lui réponds que sans morale, la société tombe en ruine. Le dialogue ne tranche pas; il oblige à penser.`,
    contexte: "Satire philosophique de l’hypocrisie sociale.",
    attendus: [
      { procede: "Ironie", citation: "« l'air grave, le ton sentencieux »", interpretation: "Le portrait dénonce les faux moralistes.", keywords: ["ironie","pédants","hypocrisie","diderot"] },
      { procede: "Antithèse", citation: "« sans morale, la société tombe » / « Morale! c'est le masque »", interpretation: "Le texte confronte deux conceptions irréconciliables.", keywords: ["antithèse","morale","cynisme","dialogue"] },
      { procede: "Registre argumentatif", citation: "« Le dialogue ne tranche pas »", interpretation: "La pensée progresse par confrontation des voix.", keywords: ["argumentatif","débat","philosophie","lumières"] }
    ]
  },
  {
    id: "GT-914",
    titre: "Mal du siècle [Série 18]",
    auteur: "Chateaubriand",
    oeuvre: "René",
    genre: "Roman",
    diff: 3,
    texte: `Les solitudes me parlent une langue que je comprends; les grands bois, les montagnes, les mers désertes me rendent ce que les hommes m'ont pris. J'ai passé ma jeunesse à fuir les villes, à chercher des lieux où le vent souffle sans témoin, où l'on peut pleurer sans ridicule. Amélie, ma sœur, partageait autrefois ces errances; mais le monde a séparé nos destins, et je reste seul avec mon mal du siècle, ce vague à l'âme qui consume sans éclat. Les ruines, les tombeaux, les crépuscules m'attirent: je ne cherche pas le bonheur, je cherche une émotion forte.`,
    contexte: "Confession romantique et solitude existentielle.",
    attendus: [
      { procede: "Personnification", citation: "« Les solitudes me parlent »", interpretation: "La nature devient interlocutrice du moi.", keywords: ["personnification","nature","romantisme","rené"] },
      { procede: "Registre lyrique", citation: "« ce vague à l'âme »", interpretation: "Le texte exprime la crise intime du sujet romantique.", keywords: ["lyrique","mal du siècle","subjectivité","chateaubriand"] },
      { procede: "Antithèse", citation: "« Je ne cherche pas le bonheur » / « une émotion forte »", interpretation: "Le héros refuse la modération bourgeoise.", keywords: ["antithèse","bonheur","intensité","roman"] }
    ]
  },
  {
    id: "GT-915",
    titre: "Passion à la cour [Série 18]",
    auteur: "Lafayette",
    oeuvre: "La Princesse de Clèves",
    genre: "Roman",
    diff: 1,
    texte: `La cour était alors dans une magnificence qu'on n'a jamais vue depuis. L'ambition et la galanterie régnaient en même temps et occupaient également les esprits; l'un et l'autre trouvaient souvent des moyens de se concilier, et l'on ne savait lequel emportait l'avantage. Mme de Clèves, jeune, belle, et mariée au prince de Clèves, ne connaissait pas encore la violence de la passion. Elle croyait que l'honnêteté suffisait à régler la conduite. Mais le duc de Nemours parut: il était de ces hommes que la nature semble avoir formés pour se faire aimer.`,
    contexte: "Exposition du roman de passion classique.",
    attendus: [
      { procede: "Tableau social", citation: "« L'ambition et la galanterie régnaient »", interpretation: "Le cadre de cour organise les comportements.", keywords: ["cour","mœurs","galanterie","lafayette"] },
      { procede: "Antithèse", citation: "« Elle croyait que l'honnêteté suffisait à régler la conduite »", interpretation: "Le conflit moral est lancé dès l’exposition.", keywords: ["antithèse","vertu","passion","roman"] },
      { procede: "Caractérisation", citation: "« formés pour se faire aimer »", interpretation: "Nemours apparaît comme type du séducteur.", keywords: ["caractérisation","nemours","désir","classicisme"] }
    ]
  }
  ],
  19: [
  {
    id: "GT-916",
    titre: "Le théâtre et la vie",
    auteur: "Tchekhov",
    oeuvre: "La Mouette (trad. fr.)",
    genre: "Théâtre",
    diff: 2,
    texte: `NINA: Je suis une mouette... non, ce n'est pas cela. Je suis une actrice. Je joue, je souffre, je crois. TREPLEV: L'art nouveau viendra, il faut des formes nouvelles, et s'il n'y en a pas, mieux vaut rien. NINA: Quand je pense à ma vocation, je n'ai plus peur de la vie. J'ai appris qu'en notre métier, ce n'est pas la gloire qui compte, ni l'éclat, mais la patience, la foi, la capacité de porter sa croix. Je crois, et je souffre moins.`,
    contexte: "Fin d’un monde aristocratique.",
    attendus: [
      { procede: "Annonce", citation: "« NINA: Je suis une mouette... non, ce n'est pas cela. Je suis une actrice. Je joue, je souffre, je crois. TREPLEV: L'art nouveau viendra, il faut des formes nouvelles, et s'il n'y en a pas, mieux vaut rien. NINA: Quand je pense à ma vocation, je n'ai plus peur de la vie. J'ai appris qu'en notre métier, ce n'est pas la gloire qui compte, ni l'éclat, mais la patience, la foi, la capacité de porter sa croix. Je crois, et je souffre moins. »", interpretation: "La phrase fait basculer toute la pièce.", keywords: ["annonce","bascule","tchekhov","histoire"] },
      { procede: "Opposition sociale", citation: "« NINA: Je suis une mouette... non, ce n'est pas cela. Je suis une actrice. Je joue, je souffre, je crois. TREPLEV: L'art nouveau viendra, il faut des formes nouvelles, et s'il n'y en a pas, mieux vaut rien. NINA: Quand je pense à ma vocation, je n'ai plus peur de la vie. J'ai appris qu'en notre métier, ce n'est pas la gloire qui compte, ni l'éclat, mais la patience, la foi, la capacité de porter sa croix. Je crois, et je souffre moins. »", interpretation: "Le renversement des classes est explicite.", keywords: ["social","renversement","propriété","théâtre"] },
      { procede: "Symbole", citation: "« NINA: Je suis une mouette... non, ce n'est pas cela. Je suis une actrice. Je joue, je souffre, je crois. TREPLEV: L'art nouveau viendra, il faut des formes nouvelles, et s'il n'y en a pas, mieux vaut rien. NINA: Quand je pense à ma vocation, je n'ai plus peur de la vie. J'ai appris qu'en notre métier, ce n'est pas la gloire qui compte, ni l'éclat, mais la patience, la foi, la capacité de porter sa croix. Je crois, et je souffre moins. »", interpretation: "Le son de la hache matérialise la fin d'un ordre.", keywords: ["symbole","verger","fin","modernité"] }
    ]
  },
  {
    id: "GT-917",
    titre: "Salut au vaste monde",
    auteur: "Whitman",
    oeuvre: "Salut au monde (trad. fr.)",
    genre: "Poésie",
    diff: 2,
    texte: `Je vois les rails de fer, les navires, les villes; je vois les paysans, les ouvriers, les mères, les enfants. Je vois les montagnes d'Asie, les plaines d'Amérique, les fleuves d'Europe, et tous les peuples me paraissent proches. O vous les nations, je vous salue! Je vous tends la main à travers les mers. Qui que tu sois, homme ou femme, ton souffle est frère du mien. Le monde n'est pas fragment, il est chant commun; et chaque voix y ajoute une mesure.`,
    contexte: "Poétique du moi démocratique.",
    attendus: [
      { procede: "Anaphore", citation: "« Je »", interpretation: "La première personne fonde une voix expansive.", keywords: ["anaphore","moi","lyrique","whitman"] },
      { procede: "Image", citation: "« Je vois les rails de fer, les navires, les villes; je vois les paysans, les ouvriers, les mères, les enfants. Je vois les montagnes d'Asie, les plaines d'Amérique, les fleuves d'Europe, et tous les peuples me paraissent proches. O vous les nations, je vous salue! Je vous tends la main à travers les mers. Qui que tu sois, homme ou femme, ton souffle est frère du mien. Le monde n'est pas fragment, il est chant commun; et chaque voix y ajoute une mesure. »", interpretation: "Le minuscule devient principe cosmique.", keywords: ["image","nature","cosmique","poésie"] },
      { procede: "Formule", citation: "« Le monde n'est pas fragment, il est chant commun; »", interpretation: "Le sujet se pense pluriel et collectif.", keywords: ["multitudes","identité","démocratie","chant"] }
    ]
  },
  {
    id: "GT-918",
    titre: "Ivan face à la souffrance",
    auteur: "Dostoïevski",
    oeuvre: "Les Frères Karamazov (trad. fr.)",
    genre: "Roman",
    diff: 3,
    texte: `Je ne refuse pas Dieu, Aliocha; je lui rends seulement mon billet. Je ne puis accepter un monde où les larmes d'un enfant innocent entrent dans l'harmonie générale. Qu'on me montre la vérité finale, qu'on me promette la réconciliation, je n'en veux pas à ce prix. Mieux vaut rester avec ma douleur que d'acheter le paradis par le sang des petits. Voilà ma révolte. Elle n'est pas contre l'existence de Dieu, elle est contre le plan du monde.`,
    contexte: "Confession morale de Raskolnikov.",
    attendus: [
      { procede: "Questionnement", citation: "« Je ne refuse pas Dieu, Aliocha; je lui rends seulement mon billet. Je ne puis accepter un monde où les larmes d'un enfant innocent entrent dans l'harmonie générale. Qu'on me montre la vérité finale, qu'on me promette la réconciliation, je n'en veux pas à ce prix. Mieux vaut rester avec ma douleur que d'acheter le paradis par le sang des petits. Voilà ma révolte. Elle n'est pas contre l'existence de Dieu, elle est contre le plan du monde. »", interpretation: "Le personnage se juge dans un dilemme de puissance.", keywords: ["dilemme","culpabilité","dostoïevski","roman"] },
      { procede: "Anaphore", citation: "« Je ne refuse pas Dieu, Aliocha; je lui rends seulement mon billet. Je ne puis accepter un monde où les larmes d'un enfant innocent entrent dans l'harmonie générale. Qu'on me montre la vérité finale, qu'on me promette la réconciliation, je n'en veux pas à ce prix. Mieux vaut rester avec ma douleur que d'acheter le paradis par le sang des petits. Voilà ma révolte. Elle n'est pas contre l'existence de Dieu, elle est contre le plan du monde. »", interpretation: "La répétition traduit l’obsession théorique.", keywords: ["anaphore","obsession","idée","psychologie"] },
      { procede: "Renversement", citation: "« Je ne refuse pas Dieu, Aliocha; je lui rends seulement mon billet. Je ne puis accepter un monde où les larmes d'un enfant innocent entrent dans l'harmonie générale. Qu'on me montre la vérité finale, qu'on me promette la réconciliation, je n'en veux pas à ce prix. Mieux vaut rester avec ma douleur que d'acheter le paradis par le sang des petits. Voilà ma révolte. Elle n'est pas contre l'existence de Dieu, elle est contre le plan du monde. »", interpretation: "Le crime devient auto-condamnation intérieure.", keywords: ["renversement","faute","conscience","tragique"] }
    ]
  },
  {
    id: "GT-919",
    titre: "Anna sur le quai",
    auteur: "Tolstoï",
    oeuvre: "Anna Karénine (trad. fr.)",
    genre: "Roman",
    diff: 2,
    texte: `Anna descendit du wagon, enveloppée de vapeur blanche et de bruits de fer. La neige tombait en gros flocons; des lanternes tremblaient dans le soir. Elle aperçut Vronski et sentit que sa vie venait de changer. Tout en elle était clarté et trouble à la fois. La convenance, le devoir, le regard des autres, tout cela reculait devant une force inconnue. Dans le fracas des roues, elle entendit comme un pressentiment: ce même rail qui porte les rencontres emporte aussi les destinées.`,
    contexte: "Épiphanie existentielle pendant la guerre.",
    attendus: [
      { procede: "Contraste", citation: "« Anna descendit du wagon, enveloppée de vapeur blanche et de bruits de fer. La neige tombait en gros flocons; des lanternes tremblaient dans le soir. Elle aperçut Vronski et sentit que sa vie venait de changer. Tout en elle était clarté et trouble à la fois. La convenance, le devoir, le regard des autres, tout cela reculait devant une force inconnue. Dans le fracas des roues, elle entendit comme un pressentiment: ce même rail qui porte les rencontres emporte aussi les destinées. »", interpretation: "Le regard spirituel annule le fracas historique.", keywords: ["contraste","guerre","intériorité","tolstoï"] },
      { procede: "Interrogation", citation: "« Anna descendit du wagon, enveloppée de vapeur blanche et de bruits de fer. La neige tombait en gros flocons; des lanternes tremblaient dans le soir. Elle aperçut Vronski et sentit que sa vie venait de changer. Tout en elle était clarté et trouble à la fois. La convenance, le devoir, le regard des autres, tout cela reculait devant une force inconnue. Dans le fracas des roues, elle entendit comme un pressentiment: ce même rail qui porte les rencontres emporte aussi les destinées. »", interpretation: "La question marque une conversion du personnage.", keywords: ["interrogation","prise de conscience","roman","épiphanie"] },
      { procede: "Maxime", citation: "« Anna descendit du wagon, enveloppée de vapeur blanche et de bruits de fer. La neige tombait en gros flocons; des lanternes tremblaient dans le soir. Elle aperçut Vronski et sentit que sa vie venait de changer. Tout en elle était clarté et trouble à la fois. La convenance, le devoir, le regard des autres, tout cela reculait devant une force inconnue. Dans le fracas des roues, elle entendit comme un pressentiment: ce même rail qui porte les rencontres emporte aussi les destinées. »", interpretation: "La formule condense une méditation morale.", keywords: ["maxime","vanité","paix","austerlitz"] }
    ]
  },
  {
    id: "GT-920",
    titre: "Prière pour la tolérance [Série 19]",
    auteur: "Voltaire",
    oeuvre: "Traité sur la tolérance",
    genre: "Idées",
    diff: 1,
    texte: `Ce n'est donc plus aux hommes que je m'adresse; c'est à toi, Dieu de tous les êtres, de tous les mondes et de tous les temps: s'il est permis à de faibles créatures, perdues dans l'immensité et imperceptibles au reste de l'univers, d'oser te demander quelque chose, à toi qui as tout donné, à toi dont les décrets sont immuables comme éternels, daigne regarder en pitié les erreurs attachées à notre nature; que ces erreurs ne fassent point nos calamités. Tu ne nous as point donné un cœur pour nous haïr, et des mains pour nous égorger; fais que nous nous aidions mutuellement à supporter le fardeau d'une vie pénible et passagère.`,
    contexte: "Prière philosophique contre l'intolérance religieuse.",
    attendus: [
      { procede: "Apostrophe", citation: "« c'est à toi, Dieu de tous les êtres »", interpretation: "L'adresse solennelle universalise la demande morale.", keywords: ["apostrophe","universel","tolérance","voltaire"] },
      { procede: "Antithèse", citation: "« Tu ne nous as point donné un cœur pour nous haïr, et des mains pour n »", interpretation: "Le texte oppose la violence à la fraternité.", keywords: ["antithèse","haine","fraternité","lumières"] },
      { procede: "Registre oratoire", citation: "« daigne regarder en pitié »", interpretation: "Le ton de supplication renforce la portée civique.", keywords: ["oratoire","prière","argumentation","idées"] }
    ]
  },
  {
    id: "GT-921",
    titre: "Aveu de Phèdre [Série 19]",
    auteur: "Racine",
    oeuvre: "Phèdre",
    genre: "Théâtre",
    diff: 3,
    texte: `Je le vis, je rougis, je pâlis à sa vue; un trouble s'éleva dans mon âme éperdue; mes yeux ne voyaient plus, je ne pouvais parler; je sentis tout mon corps et transir et brûler. Je reconnus Vénus et ses feux redoutables, d'un sang qu'elle poursuit tourments inévitables. Par des vœux assidus je crus les détourner: je lui bâtis un temple, et pris soin de l'orner; de victimes moi-même à toute heure entourée, je cherchais dans leurs flancs ma raison égarée. Ainsi, la passion se fait faute, et la faute se fait destin.`,
    contexte: "Aveu tragique d'une passion impossible.",
    attendus: [
      { procede: "Parallélisme", citation: "« Je le vis, je rougis, je pâlis »", interpretation: "Le rythme ternaire dramatise le choc amoureux.", keywords: ["parallélisme","aveu","tragédie","racine"] },
      { procede: "Antithèse", citation: "« transir et brûler »", interpretation: "Le désir se dit dans une contradiction corporelle.", keywords: ["antithèse","désir","douleur","pathétique"] },
      { procede: "Mythologie", citation: "« Je reconnus Vénus »", interpretation: "La référence divine inscrit la passion dans la fatalité.", keywords: ["mythologie","fatalité","vénus","tragique"] }
    ]
  },
  {
    id: "GT-922",
    titre: "Dilemme de Rodrigue [Série 19]",
    auteur: "Corneille",
    oeuvre: "Le Cid",
    genre: "Théâtre",
    diff: 3,
    texte: `Percé jusques au fond du cœur d'une atteinte imprévue aussi bien que mortelle, misérable vengeur d'une juste querelle, et malheureux objet d'une injuste rigueur, je demeure immobile, et mon âme abattue cède au coup qui me tue. En cet affront mon père est l'offensé, et l'offenseur le père de Chimène. Que je sens de rudes combats! contre mon propre honneur mon amour s'intéresse. Faut-il perdre Chimène, ou trahir mon lignage? le héros naît dans cette hésitation.`,
    contexte: "Conflit classique entre honneur et amour.",
    attendus: [
      { procede: "Antithèse", citation: "« contre mon propre honneur mon amour s'intéresse. »", interpretation: "La symétrie formule l'impasse morale.", keywords: ["antithèse","honneur","amour","corneille"] },
      { procede: "Registre tragique", citation: "« Percé jusques au fond du cœur »", interpretation: "La douleur morale prend la forme d'une blessure.", keywords: ["tragique","souffrance","dilemme","théâtre"] },
      { procede: "Exclamation", citation: "« Que je sens de rudes combats! »", interpretation: "L'exclamation rend sensible l'urgence intérieure.", keywords: ["exclamation","combat","pathétique","classicisme"] }
    ]
  },
  {
    id: "GT-923",
    titre: "Aveuglement d’Orgon [Série 19]",
    auteur: "Molière",
    oeuvre: "Tartuffe",
    genre: "Théâtre",
    diff: 1,
    texte: `Ha! si vous aviez vu comme j'en fis rencontre, vous auriez pris pour lui l'amitié que je montre. Chaque jour à l'église il venait, d'un air doux, tout vis-à-vis de moi se mettre à deux genoux. Il attirait les yeux de l'assemblée entière par l'ardeur dont au Ciel il poussait sa prière; il faisait des soupirs, de grands élancements, et baisait humblement la terre à tous moments. Et lorsque je sortais, il me devançait vite pour m'aller à la porte offrir de l'eau bénite. Et Tartuffe? Le pauvre homme!`,
    contexte: "Portrait comique d'un faux dévot.",
    attendus: [
      { procede: "Comique de caractère", citation: "« Le pauvre homme! »", interpretation: "Le refrain signale l'aveuglement d'Orgon.", keywords: ["comique","orgon","imposture","molière"] },
      { procede: "Accumulation", citation: "« soupirs, de grands élancements »", interpretation: "La surenchère gestuelle dénonce l'hypocrisie.", keywords: ["accumulation","hypocrisie","satire","dévotion"] },
      { procede: "Ironie dramatique", citation: "« Et Tartuffe? »", interpretation: "Le spectateur comprend ce qu'Orgon refuse de voir.", keywords: ["ironie dramatique","spectateur","théâtre","classicisme"] }
    ]
  },
  {
    id: "GT-924",
    titre: "Morale du plus fort [Série 19]",
    auteur: "La Fontaine",
    oeuvre: "Fables",
    genre: "Poésie",
    diff: 1,
    texte: `La raison du plus fort est toujours la meilleure: nous l'allons montrer tout à l'heure. Un Agneau se désaltérait dans le courant d'une onde pure. Un Loup survient à jeun, qui cherchait aventure, et que la faim en ces lieux attirait. Qui te rend si hardi de troubler mon breuvage? dit cet animal plein de rage: tu seras châtié de ta témérité. Sire, répond l'Agneau, que Votre Majesté ne se mette pas en colère; mais plutôt qu'elle considère que je me vas désaltérant plus de vingt pas au-dessous d'Elle.`,
    contexte: "Fable sur l'arbitraire de la force.",
    attendus: [
      { procede: "Morale", citation: "« La raison du plus fort est toujours la meilleure »", interpretation: "La moralité initiale donne la clé de lecture politique.", keywords: ["morale","force","justice","fable"] },
      { procede: "Dialogue", citation: "« Qui te rend si hardi »", interpretation: "Le discours direct met en scène un procès biaisé.", keywords: ["dialogue","procès","injustice","allégorie"] },
      { procede: "Ironie", citation: "« Votre Majesté »", interpretation: "La politesse de l'agneau souligne la brutalité du loup.", keywords: ["ironie","domination","la fontaine","pouvoir"] }
    ]
  },
  {
    id: "GT-925",
    titre: "Le soldat endormi [Série 19]",
    auteur: "Rimbaud",
    oeuvre: "Le Dormeur du val",
    genre: "Poésie",
    diff: 2,
    texte: `C'est un trou de verdure où chante une rivière accrochant follement aux herbes des haillons d'argent; où le soleil, de la montagne fière, luit: c'est un petit val qui mousse de rayons. Un soldat jeune, bouche ouverte, tête nue, et la nuque baignant dans le frais cresson bleu, dort; il est étendu dans l'herbe, sous la nue, pâle dans son lit vert où la lumière pleut. Les parfums ne font pas frissonner sa narine; il dort dans le soleil, la main sur sa poitrine, tranquille. Il a deux trous rouges au côté droit.`,
    contexte: "Poème de guerre à chute brutale.",
    attendus: [
      { procede: "Chute", citation: "« Il a deux trous rouges au côté droit »", interpretation: "Le dernier vers renverse la lecture bucolique.", keywords: ["chute","guerre","mort","rimbaud"] },
      { procede: "Personnification", citation: "« C'est un trou de verdure où chante une rivière accrochant follement aux herbes des haillons d'argent; où le soleil, de la montagne fière, luit: c'est un petit val qui mousse de rayons. Un soldat jeune, bouche ouverte, tête nue, et la nuque baignant dans le frais cresson bleu, dort; il est étendu dans l'herbe, sous la nue, pâle dans son lit vert où la lumière pleut. Les parfums ne font pas frissonner sa narine; il dort dans le soleil, la main sur sa poitrine, tranquille. Il a deux trous rouges au côté droit. »", interpretation: "La nature maternelle reste impuissante face à la guerre.", keywords: ["personnification","nature","pathétique","poésie"] },
      { procede: "Contraste", citation: "« trou de verdure »", interpretation: "Le cadre lumineux contraste avec la mort du soldat.", keywords: ["contraste","couleurs","violence","lyrique"] }
    ]
  },
  {
    id: "GT-926",
    titre: "Mélancolie d’automne [Série 19]",
    auteur: "Verlaine",
    oeuvre: "Chanson d’automne",
    genre: "Poésie",
    diff: 3,
    texte: `Les sanglots longs des violons de l'automne blessent mon cœur d'une langueur monotone. Tout suffocant et blême, quand sonne l'heure, je me souviens des jours anciens et je pleure; et je m'en vais au vent mauvais qui m'emporte deçà, delà, pareil à la feuille morte. Le soir s'allonge et la cloche descend dans l'air humide; la ville s'efface; mon pas hésite comme une voix qui s'éteint dans le froid, et ma mémoire revient avec ses battements sourds.`,
    contexte: "Poème bref et musical de la nostalgie.",
    attendus: [
      { procede: "Allitération", citation: "« sanglots longs des violons »", interpretation: "Les sonorités prolongent la plainte.", keywords: ["allitération","musicalité","verlaine","mélancolie"] },
      { procede: "Comparaison", citation: "« Pareil à la feuille morte »", interpretation: "Le sujet se dit emporté par le temps.", keywords: ["comparaison","automne","temps","destin"] },
      { procede: "Registre lyrique", citation: "« je me souviens ... je pleure »", interpretation: "L'expression du moi structure le poème.", keywords: ["lyrique","souvenir","tristesse","poésie"] }
    ]
  },
  {
    id: "GT-927",
    titre: "Modernité de Zone [Série 19]",
    auteur: "Apollinaire",
    oeuvre: "Alcools",
    genre: "Poésie",
    diff: 2,
    texte: `A la fin tu es las de ce monde ancien. Bergère ô tour Eiffel le troupeau des ponts bêle ce matin. Tu en as assez de vivre dans l'antiquité grecque et romaine. Ici même les automobiles ont l'air d'être anciennes. La religion seule est restée toute neuve, la religion est restée simple comme les hangars de Port-Aviation. Seul en Europe tu n'es pas antique ô Christianisme. Et toi que les fenêtres observent, la honte te retient d'entrer dans une église et de t'y confesser ce matin.`,
    contexte: "Poétique de la modernité urbaine.",
    attendus: [
      { procede: "Apostrophe", citation: "« Bergère ô tour Eiffel »", interpretation: "L'image mêle tradition pastorale et ville moderne.", keywords: ["apostrophe","tour eiffel","modernité","apollinaire"] },
      { procede: "Antithèse", citation: "« monde ancien » / « moderne »", interpretation: "Le poème se construit sur une tension temporelle.", keywords: ["antithèse","ancien","moderne","avant-garde"] },
      { procede: "Vers libre", citation: "« A la fin tu es las de ce monde ancien »", interpretation: "L'absence de cadre métrique accompagne la mobilité du regard.", keywords: ["vers libre","rythme","montage","alcools"] }
    ]
  },
  {
    id: "GT-928",
    titre: "Incipit provincial [Série 19]",
    auteur: "Stendhal",
    oeuvre: "Le Rouge et le Noir",
    genre: "Roman",
    diff: 3,
    texte: `La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure.`,
    contexte: "Ouverture réaliste et ironique de la province.",
    attendus: [
      { procede: "Cadre", citation: "« La petite ville de Verrières »", interpretation: "L'incipit pose un espace social précis.", keywords: ["cadre","province","stendhal","réalisme"] },
      { procede: "Lexique mélioratif", citation: "« La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure. »", interpretation: "Le positif prépare une lecture critique.", keywords: ["lexique","ironie","bourgeoisie","roman"] },
      { procede: "Attente", citation: "« La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure. »", interpretation: "La promesse initiale sera démentie par le récit.", keywords: ["attente","promesse","narrateur","destin"] }
    ]
  },
  {
    id: "GT-929",
    titre: "Entrée de Charles [Série 19]",
    auteur: "Flaubert",
    oeuvre: "Madame Bovary",
    genre: "Roman",
    diff: 1,
    texte: `Nous étions à l'étude, quand le proviseur entra, suivi d'un nouveau habillé en bourgeois et d'un garçon de classe qui portait un grand pupitre. Ceux qui dormaient se réveillèrent, et chacun se leva comme surpris dans son travail. Le proviseur nous fit signe de nous rasseoir; puis, se tournant vers le maître d'études: « Monsieur Roger, lui dit-il, voici un élève que je vous recommande. » Resté dans l'angle, derrière la porte, si bien qu'on l'apercevait à peine, le nouveau était un gars de la campagne, embarrassé par les regards.`,
    contexte: "Scène d'entrée et de maladresse sociale.",
    attendus: [
      { procede: "Focalisation", citation: "« Nous étions à l'étude »", interpretation: "Le point de vue collectif installe la scène.", keywords: ["focalisation","collectif","flaubert","classe"] },
      { procede: "Réalisme social", citation: "« habillé en bourgeois »", interpretation: "Le vêtement marque immédiatement la position sociale.", keywords: ["réalisme","social","école","roman"] },
      { procede: "Caractérisation", citation: "« le nouveau était un gars de la campagne »", interpretation: "L'origine rurale prépare l'inadaptation.", keywords: ["caractérisation","charles","inadaptation","bovary"] }
    ]
  },
  {
    id: "GT-930",
    titre: "Nuit de Germinal [Série 19]",
    auteur: "Zola",
    oeuvre: "Germinal",
    genre: "Roman",
    diff: 3,
    texte: `Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucune ombre d'arbre ne tachait le ciel; le pavé se déroulait avec la rectitude d'une jetée, au milieu des ténèbres.`,
    contexte: "Incipit naturaliste d'une marche vers la mine.",
    attendus: [
      { procede: "Métaphore", citation: "« rafales larges comme sur une mer »", interpretation: "La plaine devient un espace hostile et océanique.", keywords: ["métaphore","paysage","zola","naturalisme"] },
      { procede: "Champ lexical", citation: "« Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucune ombre d'arbre ne tachait le ciel; le pavé se déroulait avec la rectitude d'une jetée, au milieu des ténèbres. »", interpretation: "La noirceur annonce la violence sociale.", keywords: ["champ lexical","noir","mine","drame"] },
      { procede: "Focalisation externe", citation: "« un homme suivait seul »", interpretation: "L'anonymat initial universalise la condition ouvrière.", keywords: ["focalisation","anonymat","ouvrier","roman"] }
    ]
  },
  {
    id: "GT-931",
    titre: "Armée en déroute [Série 19]",
    auteur: "Maupassant",
    oeuvre: "Boule de suif",
    genre: "Roman",
    diff: 3,
    texte: `Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes, noirs, barbus, sales, harassés, marchaient d'un air abattu, sans drapeau, sans régiment. Tous semblaient accablés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude, et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait des mobilisés paisibles, des francs-tireurs de parade, et des soldats vaincus que le hasard poussait encore.`,
    contexte: "Ouverture de guerre et de désordre collectif.",
    attendus: [
      { procede: "Accumulation", citation: "« noirs, barbus, sales, harassés »", interpretation: "L'énumération matérialise l'épuisement.", keywords: ["accumulation","guerre","épuisement","maupassant"] },
      { procede: "Description", citation: "« sans drapeau, sans régiment »", interpretation: "La défaite se lit dans la disparition des signes militaires.", keywords: ["description","défaite","armée","réalisme"] },
      { procede: "Antithèse", citation: "« Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes, noirs, barbus, sales, harassés, marchaient d'un air abattu, sans drapeau, sans régiment. Tous semblaient accablés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude, et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait des mobilisés paisibles, des francs-tireurs de parade, et des soldats vaincus que le hasard poussait encore. »", interpretation: "Le texte montre la volatilité des foules en guerre.", keywords: ["antithèse","foule","instabilité","histoire"] }
    ]
  },
  {
    id: "GT-932",
    titre: "Maison Vauquer [Série 19]",
    auteur: "Balzac",
    oeuvre: "Le Père Goriot",
    genre: "Roman",
    diff: 1,
    texte: `Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux. Depuis trente ans, n'y a-t-il jamais été vu de jeune personne; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. En 1819, époque où commence ce drame, il s'y trouvait pourtant une pauvre jeune fille.`,
    contexte: "Incipit réaliste d'un microcosme social parisien.",
    attendus: [
      { procede: "Précision", citation: "« rue Neuve-Sainte-Geneviève »", interpretation: "Le détail topographique ancre le récit dans le réel.", keywords: ["réalisme","paris","topographie","balzac"] },
      { procede: "Ironie", citation: "« Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux. Depuis trente ans, n'y a-t-il jamais été vu de jeune personne; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. En 1819, époque où commence ce drame, il s'y trouvait pourtant une pauvre jeune fille. »", interpretation: "La formule valorisante suggère en creux la médiocrité.", keywords: ["ironie","narrateur","milieu","société"] },
      { procede: "Annonce", citation: "« époque où commence ce drame »", interpretation: "Le narrateur prépare une trajectoire tragique.", keywords: ["annonce","drame","destin","roman"] }
    ]
  },
  {
    id: "GT-933",
    titre: "Marche vers la tombe [Série 19]",
    auteur: "Hugo",
    oeuvre: "Les Contemplations",
    genre: "Poésie",
    diff: 1,
    texte: `Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur.`,
    contexte: "Élégie du deuil filial.",
    attendus: [
      { procede: "Progression", citation: "« Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur. »", interpretation: "La marche géographique devient parcours intérieur.", keywords: ["progression","deuil","hugo","élégie"] },
      { procede: "Antithèse", citation: "« Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur. »", interpretation: "La douleur annule les repères du monde.", keywords: ["antithèse","douleur","intériorité","lyrique"] },
      { procede: "Chute", citation: "« sur ta tombe »", interpretation: "La destination funèbre reconfigure tout le poème.", keywords: ["chute","tombe","émotion","poésie"] }
    ]
  },
  {
    id: "GT-934",
    titre: "Allégorie de l’albatros [Série 19]",
    auteur: "Baudelaire",
    oeuvre: "Les Fleurs du mal",
    genre: "Poésie",
    diff: 3,
    texte: `Souvent, pour s'amuser, les hommes d'équipage prennent des albatros, vastes oiseaux des mers, qui suivent, indolents compagnons de voyage, le navire glissant sur les gouffres amers. A peine les ont-ils déposés sur les planches, que ces rois de l'azur, maladroits et honteux, laissent piteusement leurs grandes ailes blanches comme des avirons traîner à côté d'eux. Ce voyageur ailé, comme il est gauche et veule! Lui, naguère si beau, qu'il est comique et laid! Le Poète est semblable au prince des nuées.`,
    contexte: "Allégorie du poète inadapté au monde social.",
    attendus: [
      { procede: "Allégorie", citation: "« Le Poète est semblable au prince des nuées »", interpretation: "L'albatros figure la condition du créateur.", keywords: ["allégorie","poète","société","baudelaire"] },
      { procede: "Antithèse", citation: "« t-ils déposés sur les planches, que ces rois de l'azur, maladroits et honte »", interpretation: "La grandeur chute dans le ridicule terrestre.", keywords: ["antithèse","sublime","ridicule","modernité"] },
      { procede: "Ironie", citation: "« pour s'amuser »", interpretation: "La cruauté collective est banalisée par le divertissement.", keywords: ["ironie","cruauté","foule","symbolisme"] }
    ]
  },
  {
    id: "GT-935",
    titre: "Chants désespérés [Série 19]",
    auteur: "Musset",
    oeuvre: "La Nuit de mai",
    genre: "Poésie",
    diff: 1,
    texte: `Poète, prends ton luth et me donne un baiser; la fleur de l'églantier sent ses bourgeons éclore, le printemps naît ce soir, les vents vont s'embraser. Les plus désespérés sont les chants les plus beaux, et j'en sais d'immortels qui sont de purs sanglots. Lorsque le pélican, lassé d'un long voyage, retourne à ses roseaux, ses petits affamés courent sur le rivage en le voyant au loin s'abattre sur les eaux. Ainsi le poète nourrit son chant de sa propre blessure, et la douleur devient musique.`,
    contexte: "Poème dialogué sur la création née de la souffrance.",
    attendus: [
      { procede: "Maxime", citation: "« Les plus désespérés sont les chants les plus beaux »", interpretation: "La formule fait de la douleur une source esthétique.", keywords: ["maxime","désespoir","beauté","musset"] },
      { procede: "Symbole", citation: "« le pélican »", interpretation: "L'oiseau représente le sacrifice du poète.", keywords: ["symbole","pélican","sacrifice","lyrisme"] },
      { procede: "Dialogue", citation: "« Poète, prends ton luth »", interpretation: "L'échange Muse/Poète dramatise l'inspiration.", keywords: ["dialogue","muse","poète","création"] }
    ]
  },
  {
    id: "GT-936",
    titre: "Stratégie de Merteuil [Série 19]",
    auteur: "Laclos",
    oeuvre: "Les Liaisons dangereuses",
    genre: "Roman",
    diff: 2,
    texte: `Vous voilà donc bien heureux de votre dernière conquête! Vous m'écrivez trois pages pour me vanter une paysanne. J'en ris encore. Croyez-vous me faire envie? Je connais vos ruses. Vous voulez me piquer, me faire croire que vous n'avez plus besoin de moi. D'ailleurs, ce n'est pas Cécile qui m'intéresse; c'est vous. Je veux savoir si vous oserez exécuter le plan que nous avons formé. Préférez-vous la vertu de Mme de Tourvel à la gloire de me plaire? Choisissez. Si vous hésitez, je comprendrai que vous avez faibli, et je saurai me venger.`,
    contexte: "Lettre de manipulation dans le roman libertin.",
    attendus: [
      { procede: "Registre épistolaire", citation: "« Vous m'écrivez trois pages »", interpretation: "La forme lettre sert la stratégie psychologique.", keywords: ["épistolaire","lettre","laclos","manipulation"] },
      { procede: "Ironie", citation: "« J'en ris encore »", interpretation: "La moquerie masque une volonté de domination.", keywords: ["ironie","merteuil","pouvoir","stratégie"] },
      { procede: "Antithèse", citation: "« vertu de Mme de Tourvel » / « gloire de me plaire »", interpretation: "Le conflit oppose morale et libertinage.", keywords: ["antithèse","vertu","séduction","libertinage"] }
    ]
  },
  {
    id: "GT-937",
    titre: "Dialogue du Neveu [Série 19]",
    auteur: "Diderot",
    oeuvre: "Le Neveu de Rameau",
    genre: "Idées",
    diff: 1,
    texte: `Je ne connais pas de plus grand charlatan que celui qui prétend enseigner ce qu'il ne sait pas. Le monde est plein de ces pédants qui récitent des maximes et ne les pratiquent point. Ils ont l'air grave, le ton sentencieux, et l'on les écoute; mais suivez-les chez eux, vous les verrez mentir, voler, tricher, se livrer à toutes les turpitudes qu'ils condamnent en public. Le Neveu rit de tout cela: « Morale! c'est le masque du faible devant le fort. » Je lui réponds que sans morale, la société tombe en ruine. Le dialogue ne tranche pas; il oblige à penser.`,
    contexte: "Satire philosophique de l’hypocrisie sociale.",
    attendus: [
      { procede: "Ironie", citation: "« l'air grave, le ton sentencieux »", interpretation: "Le portrait dénonce les faux moralistes.", keywords: ["ironie","pédants","hypocrisie","diderot"] },
      { procede: "Antithèse", citation: "« sans morale, la société tombe » / « Morale! c'est le masque »", interpretation: "Le texte confronte deux conceptions irréconciliables.", keywords: ["antithèse","morale","cynisme","dialogue"] },
      { procede: "Registre argumentatif", citation: "« Le dialogue ne tranche pas »", interpretation: "La pensée progresse par confrontation des voix.", keywords: ["argumentatif","débat","philosophie","lumières"] }
    ]
  },
  {
    id: "GT-938",
    titre: "Mal du siècle [Série 19]",
    auteur: "Chateaubriand",
    oeuvre: "René",
    genre: "Roman",
    diff: 1,
    texte: `Les solitudes me parlent une langue que je comprends; les grands bois, les montagnes, les mers désertes me rendent ce que les hommes m'ont pris. J'ai passé ma jeunesse à fuir les villes, à chercher des lieux où le vent souffle sans témoin, où l'on peut pleurer sans ridicule. Amélie, ma sœur, partageait autrefois ces errances; mais le monde a séparé nos destins, et je reste seul avec mon mal du siècle, ce vague à l'âme qui consume sans éclat. Les ruines, les tombeaux, les crépuscules m'attirent: je ne cherche pas le bonheur, je cherche une émotion forte.`,
    contexte: "Confession romantique et solitude existentielle.",
    attendus: [
      { procede: "Personnification", citation: "« Les solitudes me parlent »", interpretation: "La nature devient interlocutrice du moi.", keywords: ["personnification","nature","romantisme","rené"] },
      { procede: "Registre lyrique", citation: "« ce vague à l'âme »", interpretation: "Le texte exprime la crise intime du sujet romantique.", keywords: ["lyrique","mal du siècle","subjectivité","chateaubriand"] },
      { procede: "Antithèse", citation: "« Je ne cherche pas le bonheur » / « une émotion forte »", interpretation: "Le héros refuse la modération bourgeoise.", keywords: ["antithèse","bonheur","intensité","roman"] }
    ]
  },
  {
    id: "GT-939",
    titre: "Passion à la cour [Série 19]",
    auteur: "Lafayette",
    oeuvre: "La Princesse de Clèves",
    genre: "Roman",
    diff: 2,
    texte: `La cour était alors dans une magnificence qu'on n'a jamais vue depuis. L'ambition et la galanterie régnaient en même temps et occupaient également les esprits; l'un et l'autre trouvaient souvent des moyens de se concilier, et l'on ne savait lequel emportait l'avantage. Mme de Clèves, jeune, belle, et mariée au prince de Clèves, ne connaissait pas encore la violence de la passion. Elle croyait que l'honnêteté suffisait à régler la conduite. Mais le duc de Nemours parut: il était de ces hommes que la nature semble avoir formés pour se faire aimer.`,
    contexte: "Exposition du roman de passion classique.",
    attendus: [
      { procede: "Tableau social", citation: "« L'ambition et la galanterie régnaient »", interpretation: "Le cadre de cour organise les comportements.", keywords: ["cour","mœurs","galanterie","lafayette"] },
      { procede: "Antithèse", citation: "« Elle croyait que l'honnêteté suffisait à régler la conduite »", interpretation: "Le conflit moral est lancé dès l’exposition.", keywords: ["antithèse","vertu","passion","roman"] },
      { procede: "Caractérisation", citation: "« formés pour se faire aimer »", interpretation: "Nemours apparaît comme type du séducteur.", keywords: ["caractérisation","nemours","désir","classicisme"] }
    ]
  }
  ],
  20: [
  {
    id: "GT-940",
    titre: "Demain, puis demain",
    auteur: "Shakespeare",
    oeuvre: "Macbeth (trad. fr.)",
    genre: "Théâtre",
    diff: 2,
    texte: `Demain, puis demain, puis demain, rampe à petits pas de jour en jour jusqu'à la dernière syllabe du temps consigné. Et tous nos hiers n'ont fait qu'éclairer des fous sur le chemin de la poussière de la mort. Éteins-toi, éteins-toi, courte chandelle! La vie n'est qu'une ombre qui marche, un pauvre acteur qui se pavane et s'agite une heure sur la scène, puis qu'on n'entend plus. C'est un conte raconté par un idiot, plein de bruit et de fureur, et qui ne signifie rien.`,
    contexte: "Soliloque existentiel du héros tragique.",
    attendus: [
      { procede: "Antithèse", citation: "« Demain, puis demain, puis demain, rampe à petits pas de jour en jour jusqu'à la dernière syllabe du temps consigné. Et tous nos hiers n'ont fait qu'éclairer des fous sur le chemin de la poussière de la mort. Éteins-toi, éteins-toi, courte chandelle! La vie n'est qu'une ombre qui marche, un pauvre acteur qui se pavane et s'agite une heure sur la scène, puis qu'on n'entend plus. C'est un conte raconté par un idiot, plein de bruit et de fureur, et qui ne signifie rien. »", interpretation: "La tragédie s’ouvre sur une alternative absolue.", keywords: ["antithèse","existence","hamlet","tragédie"] },
      { procede: "Métaphore", citation: "« Demain, puis demain, puis demain, rampe à petits pas de jour en jour jusqu'à la dernière syllabe du temps consigné. Et tous nos hiers n'ont fait qu'éclairer des fous sur le chemin de la poussière de la mort. Éteins-toi, éteins-toi, courte chandelle! La vie n'est qu'une ombre qui marche, un pauvre acteur qui se pavane et s'agite une heure sur la scène, puis qu'on n'entend plus. C'est un conte raconté par un idiot, plein de bruit et de fureur, et qui ne signifie rien. »", interpretation: "La souffrance est figurée comme immensité hostile.", keywords: ["métaphore","troubles","douleur","théâtre"] },
      { procede: "Monologue", citation: "« Demain, puis demain, puis demain, rampe à petits pas de jour en jour jusqu'à la dernière syllabe du temps consigné. Et tous nos hiers n'ont fait qu'éclairer des fous sur le chemin de la poussière de la mort. Éteins-toi, éteins-toi, courte chandelle! La vie n'est qu'une ombre qui marche, un pauvre acteur qui se pavane et s'agite une heure sur la scène, puis qu'on n'entend plus. C'est un conte raconté par un idiot, plein de bruit et de fureur, et qui ne signifie rien. »", interpretation: "La conscience en crise devient spectacle.", keywords: ["monologue","conscience","crise","shakespeare"] }
    ]
  },
  {
    id: "GT-941",
    titre: "Réveil de Gregor",
    auteur: "Kafka",
    oeuvre: "La Métamorphose (trad. fr.)",
    genre: "Roman",
    diff: 2,
    texte: `En se réveillant un matin après des rêves agités, Gregor Samsa se trouva dans son lit métamorphosé en un monstrueux insecte. Il était sur le dos, un dos dur comme une carapace, et il voyait son ventre brun, cloisonné par des arches rigides. Ses nombreuses pattes, lamentablement grêles, nageaient devant ses yeux. « Qu'est-ce qui m'arrive? » pensa-t-il. Ce n'était pas un rêve. Sa chambre, avec ses murs familiers, demeurait tranquille; seul son corps avait basculé dans l'impossible.`,
    contexte: "Incipit de la culpabilité sans cause.",
    attendus: [
      { procede: "Incipit", citation: "« En se réveillant un matin après des rêves agités, Gregor Samsa se trouva dans son lit métamorphosé en un monstrueux insecte. Il était sur le dos, un dos dur comme une carapace, et il voyait son ventre brun, cloisonné par des arches rigides. Ses nombreuses pattes, lamentablement grêles, nageaient devant ses yeux. « Qu'est-ce qui m'arrive? » pensa-t-il. Ce n'était pas un rêve. Sa chambre, avec ses murs familiers, demeurait tranquille; seul son corps avait basculé dans l'impossible. »", interpretation: "L’absurde judiciaire est posé immédiatement.", keywords: ["incipit","absurde","procès","kafka"] },
      { procede: "Question sans réponse", citation: "« En se réveillant un matin après des rêves agités, Gregor Samsa se trouva dans son lit métamorphosé en un monstrueux insecte. Il était sur le dos, un dos dur comme une carapace, et il voyait son ventre brun, cloisonné par des arches rigides. Ses nombreuses pattes, lamentablement grêles, nageaient devant ses yeux. « Qu'est-ce qui m'arrive? » pensa-t-il. Ce n'était pas un rêve. Sa chambre, avec ses murs familiers, demeurait tranquille; seul son corps avait basculé dans l'impossible. »", interpretation: "L'opacité de l'autorité nourrit l'angoisse.", keywords: ["question","opacité","angoisse","roman"] },
      { procede: "Métaphore", citation: "« En se réveillant un matin après des rêves agités, Gregor Samsa se trouva dans son lit métamorphosé en un monstrueux insecte. Il était sur le dos, un dos dur comme une carapace, et il voyait son ventre brun, cloisonné par des arches rigides. Ses nombreuses pattes, lamentablement grêles, nageaient devant ses yeux. « Qu'est-ce qui m'arrive? » pensa-t-il. Ce n'était pas un rêve. Sa chambre, avec ses murs familiers, demeurait tranquille; seul son corps avait basculé dans l'impossible. »", interpretation: "Le pouvoir impersonnel devient mécanisme inexorable.", keywords: ["métaphore","pouvoir","bureaucratie","modernité"] }
    ]
  },
  {
    id: "GT-942",
    titre: "Éloge des armes et des lettres",
    auteur: "Cervantès",
    oeuvre: "Don Quichotte, discours des armes et des lettres (trad. fr.)",
    genre: "Roman",
    diff: 2,
    texte: `Les lettres, dit Don Quichotte, ont pour fin de mettre les lois en clarté et de donner à chacun son droit; les armes ont pour fin et objet la paix, qui est le plus grand bien que les hommes puissent souhaiter en cette vie. On croit que le soldat n'est que violence, et l'homme de lettres n'est que repos; pourtant l'un et l'autre servent la république, chacun à sa manière. Si les armes sont rudes, les lettres sont laborieuses; et souvent les unes et les autres marchent au même péril.`,
    contexte: "Ouverture parodique du roman moderne.",
    attendus: [
      { procede: "Incipit", citation: "« Les lettres, dit Don Quichotte, ont pour fin de mettre les lois en clarté et de donner à chacun son droit; les armes ont pour fin et objet la paix, qui est le plus grand bien que les hommes puissent souhaiter en cette vie. On croit que le soldat n'est que violence, et l'homme de lettres n'est que repos; pourtant l'un et l'autre servent la république, chacun à sa manière. Si les armes sont rudes, les lettres sont laborieuses; et souvent les unes et les autres marchent au même péril. »", interpretation: "Le récit part d’un cadre concret et ironique.", keywords: ["incipit","cadre","roman","cervantès"] },
      { procede: "Accumulation", citation: "« Les lettres, dit Don Quichotte, ont pour fin de mettre les lois en clarté et de donner à chacun son droit; les armes ont pour fin et objet la paix, qui est le plus grand bien que les hommes puissent souhaiter en cette vie. On croit que le soldat n'est que violence, et l'homme de lettres n'est que repos; pourtant l'un et l'autre servent la république, chacun à sa manière. Si les armes sont rudes, les lettres sont laborieuses; et souvent les unes et les autres marchent au même péril. »", interpretation: "Le portrait compose un héros dérisoire.", keywords: ["accumulation","portrait","parodie","chevalerie"] },
      { procede: "Ironie", citation: "« Les lettres, dit Don Quichotte, ont pour fin de mettre les lois en clarté et de donner à chacun son droit; les armes ont pour fin et objet la paix, qui est le plus grand bien que les hommes puissent souhaiter en cette vie. On croit que le soldat n'est que violence, et l'homme de lettres n'est que repos; pourtant l'un et l'autre servent la république, chacun à sa manière. Si les armes sont rudes, les lettres sont laborieuses; et souvent les unes et les autres marchent au même péril. »", interpretation: "La désinvolture narrative signale la distance comique.", keywords: ["ironie","narrateur","burlesque","moderne"] }
    ]
  },
  {
    id: "GT-943",
    titre: "Lettre de Werther",
    auteur: "Goethe",
    oeuvre: "Les Souffrances du jeune Werther (trad. fr.)",
    genre: "Théâtre",
    diff: 3,
    texte: `Quelle douceur pour mon cœur de se perdre dans cette nature! Quand le brouillard de la vallée monte devant moi, quand le soleil de midi repose sur la masse impénétrable de ma forêt, quand, couché dans les hautes herbes auprès du ruisseau, je découvre mille petites plantes inconnues, je sens la présence de l'infini. Alors le monde entier devient intérieur, et mon âme se dilate. Mais cette félicité même me blesse, car je sens qu'elle est passagère, et que le désir dépasse toujours ce qu'il atteint.`,
    contexte: "Monologue d’ouverture sur les limites du savoir.",
    attendus: [
      { procede: "Énumération", citation: "« Quelle douceur pour mon cœur de se perdre dans cette nature! Quand le brouillard de la vallée monte devant moi, quand le soleil de midi repose sur la masse impénétrable de ma forêt, quand, couché dans les hautes herbes auprès du ruisseau, je découvre mille petites plantes inconnues, je sens la présence de l'infini. Alors le monde entier devient intérieur, et mon âme se dilate. Mais cette félicité même me blesse, car je sens qu'elle est passagère, et que le désir dépasse toujours ce qu'il atteint. »", interpretation: "Le parcours savant débouche sur le vide.", keywords: ["énumération","savoir","faust","crise"] },
      { procede: "Exclamation", citation: "« Quelle douceur pour mon cœur de se perdre dans cette nature! Quand le brouillard de la vallée monte devant moi, quand le soleil de midi repose sur la masse impénétrable de ma forêt, quand, couché dans les hautes herbes auprès du ruisseau, je découvre mille petites plantes inconnues, je sens la présence de l'infini. Alors le monde entier devient intérieur, et mon âme se dilate. Mais cette félicité même me blesse, car je sens qu'elle est passagère, et que le désir dépasse toujours ce qu'il atteint. »", interpretation: "Le ton exprime la désillusion radicale.", keywords: ["exclamation","désillusion","théâtre","goethe"] },
      { procede: "Quête", citation: "« Quelle douceur pour mon cœur de se perdre dans cette nature! Quand le brouillard de la vallée monte devant moi, quand le soleil de midi repose sur la masse impénétrable de ma forêt, quand, couché dans les hautes herbes auprès du ruisseau, je découvre mille petites plantes inconnues, je sens la présence de l'infini. Alors le monde entier devient intérieur, et mon âme se dilate. Mais cette félicité même me blesse, car je sens qu'elle est passagère, et que le désir dépasse toujours ce qu'il atteint. »", interpretation: "La science se transforme en aspiration métaphysique.", keywords: ["quête","métaphysique","connaissance","modernité"] }
    ]
  },
  {
    id: "GT-944",
    titre: "Prière pour la tolérance [Série 20]",
    auteur: "Voltaire",
    oeuvre: "Traité sur la tolérance",
    genre: "Idées",
    diff: 2,
    texte: `Ce n'est donc plus aux hommes que je m'adresse; c'est à toi, Dieu de tous les êtres, de tous les mondes et de tous les temps: s'il est permis à de faibles créatures, perdues dans l'immensité et imperceptibles au reste de l'univers, d'oser te demander quelque chose, à toi qui as tout donné, à toi dont les décrets sont immuables comme éternels, daigne regarder en pitié les erreurs attachées à notre nature; que ces erreurs ne fassent point nos calamités. Tu ne nous as point donné un cœur pour nous haïr, et des mains pour nous égorger; fais que nous nous aidions mutuellement à supporter le fardeau d'une vie pénible et passagère.`,
    contexte: "Prière philosophique contre l'intolérance religieuse.",
    attendus: [
      { procede: "Apostrophe", citation: "« c'est à toi, Dieu de tous les êtres »", interpretation: "L'adresse solennelle universalise la demande morale.", keywords: ["apostrophe","universel","tolérance","voltaire"] },
      { procede: "Antithèse", citation: "« Tu ne nous as point donné un cœur pour nous haïr, et des mains pour n »", interpretation: "Le texte oppose la violence à la fraternité.", keywords: ["antithèse","haine","fraternité","lumières"] },
      { procede: "Registre oratoire", citation: "« daigne regarder en pitié »", interpretation: "Le ton de supplication renforce la portée civique.", keywords: ["oratoire","prière","argumentation","idées"] }
    ]
  },
  {
    id: "GT-945",
    titre: "Aveu de Phèdre [Série 20]",
    auteur: "Racine",
    oeuvre: "Phèdre",
    genre: "Théâtre",
    diff: 1,
    texte: `Je le vis, je rougis, je pâlis à sa vue; un trouble s'éleva dans mon âme éperdue; mes yeux ne voyaient plus, je ne pouvais parler; je sentis tout mon corps et transir et brûler. Je reconnus Vénus et ses feux redoutables, d'un sang qu'elle poursuit tourments inévitables. Par des vœux assidus je crus les détourner: je lui bâtis un temple, et pris soin de l'orner; de victimes moi-même à toute heure entourée, je cherchais dans leurs flancs ma raison égarée. Ainsi, la passion se fait faute, et la faute se fait destin.`,
    contexte: "Aveu tragique d'une passion impossible.",
    attendus: [
      { procede: "Parallélisme", citation: "« Je le vis, je rougis, je pâlis »", interpretation: "Le rythme ternaire dramatise le choc amoureux.", keywords: ["parallélisme","aveu","tragédie","racine"] },
      { procede: "Antithèse", citation: "« transir et brûler »", interpretation: "Le désir se dit dans une contradiction corporelle.", keywords: ["antithèse","désir","douleur","pathétique"] },
      { procede: "Mythologie", citation: "« Je reconnus Vénus »", interpretation: "La référence divine inscrit la passion dans la fatalité.", keywords: ["mythologie","fatalité","vénus","tragique"] }
    ]
  },
  {
    id: "GT-946",
    titre: "Dilemme de Rodrigue [Série 20]",
    auteur: "Corneille",
    oeuvre: "Le Cid",
    genre: "Théâtre",
    diff: 1,
    texte: `Percé jusques au fond du cœur d'une atteinte imprévue aussi bien que mortelle, misérable vengeur d'une juste querelle, et malheureux objet d'une injuste rigueur, je demeure immobile, et mon âme abattue cède au coup qui me tue. En cet affront mon père est l'offensé, et l'offenseur le père de Chimène. Que je sens de rudes combats! contre mon propre honneur mon amour s'intéresse. Faut-il perdre Chimène, ou trahir mon lignage? le héros naît dans cette hésitation.`,
    contexte: "Conflit classique entre honneur et amour.",
    attendus: [
      { procede: "Antithèse", citation: "« contre mon propre honneur mon amour s'intéresse. »", interpretation: "La symétrie formule l'impasse morale.", keywords: ["antithèse","honneur","amour","corneille"] },
      { procede: "Registre tragique", citation: "« Percé jusques au fond du cœur »", interpretation: "La douleur morale prend la forme d'une blessure.", keywords: ["tragique","souffrance","dilemme","théâtre"] },
      { procede: "Exclamation", citation: "« Que je sens de rudes combats! »", interpretation: "L'exclamation rend sensible l'urgence intérieure.", keywords: ["exclamation","combat","pathétique","classicisme"] }
    ]
  },
  {
    id: "GT-947",
    titre: "Aveuglement d’Orgon [Série 20]",
    auteur: "Molière",
    oeuvre: "Tartuffe",
    genre: "Théâtre",
    diff: 2,
    texte: `Ha! si vous aviez vu comme j'en fis rencontre, vous auriez pris pour lui l'amitié que je montre. Chaque jour à l'église il venait, d'un air doux, tout vis-à-vis de moi se mettre à deux genoux. Il attirait les yeux de l'assemblée entière par l'ardeur dont au Ciel il poussait sa prière; il faisait des soupirs, de grands élancements, et baisait humblement la terre à tous moments. Et lorsque je sortais, il me devançait vite pour m'aller à la porte offrir de l'eau bénite. Et Tartuffe? Le pauvre homme!`,
    contexte: "Portrait comique d'un faux dévot.",
    attendus: [
      { procede: "Comique de caractère", citation: "« Le pauvre homme! »", interpretation: "Le refrain signale l'aveuglement d'Orgon.", keywords: ["comique","orgon","imposture","molière"] },
      { procede: "Accumulation", citation: "« soupirs, de grands élancements »", interpretation: "La surenchère gestuelle dénonce l'hypocrisie.", keywords: ["accumulation","hypocrisie","satire","dévotion"] },
      { procede: "Ironie dramatique", citation: "« Et Tartuffe? »", interpretation: "Le spectateur comprend ce qu'Orgon refuse de voir.", keywords: ["ironie dramatique","spectateur","théâtre","classicisme"] }
    ]
  },
  {
    id: "GT-948",
    titre: "Morale du plus fort [Série 20]",
    auteur: "La Fontaine",
    oeuvre: "Fables",
    genre: "Poésie",
    diff: 2,
    texte: `La raison du plus fort est toujours la meilleure: nous l'allons montrer tout à l'heure. Un Agneau se désaltérait dans le courant d'une onde pure. Un Loup survient à jeun, qui cherchait aventure, et que la faim en ces lieux attirait. Qui te rend si hardi de troubler mon breuvage? dit cet animal plein de rage: tu seras châtié de ta témérité. Sire, répond l'Agneau, que Votre Majesté ne se mette pas en colère; mais plutôt qu'elle considère que je me vas désaltérant plus de vingt pas au-dessous d'Elle.`,
    contexte: "Fable sur l'arbitraire de la force.",
    attendus: [
      { procede: "Morale", citation: "« La raison du plus fort est toujours la meilleure »", interpretation: "La moralité initiale donne la clé de lecture politique.", keywords: ["morale","force","justice","fable"] },
      { procede: "Dialogue", citation: "« Qui te rend si hardi »", interpretation: "Le discours direct met en scène un procès biaisé.", keywords: ["dialogue","procès","injustice","allégorie"] },
      { procede: "Ironie", citation: "« Votre Majesté »", interpretation: "La politesse de l'agneau souligne la brutalité du loup.", keywords: ["ironie","domination","la fontaine","pouvoir"] }
    ]
  },
  {
    id: "GT-949",
    titre: "Le soldat endormi [Série 20]",
    auteur: "Rimbaud",
    oeuvre: "Le Dormeur du val",
    genre: "Poésie",
    diff: 3,
    texte: `C'est un trou de verdure où chante une rivière accrochant follement aux herbes des haillons d'argent; où le soleil, de la montagne fière, luit: c'est un petit val qui mousse de rayons. Un soldat jeune, bouche ouverte, tête nue, et la nuque baignant dans le frais cresson bleu, dort; il est étendu dans l'herbe, sous la nue, pâle dans son lit vert où la lumière pleut. Les parfums ne font pas frissonner sa narine; il dort dans le soleil, la main sur sa poitrine, tranquille. Il a deux trous rouges au côté droit.`,
    contexte: "Poème de guerre à chute brutale.",
    attendus: [
      { procede: "Chute", citation: "« Il a deux trous rouges au côté droit »", interpretation: "Le dernier vers renverse la lecture bucolique.", keywords: ["chute","guerre","mort","rimbaud"] },
      { procede: "Personnification", citation: "« C'est un trou de verdure où chante une rivière accrochant follement aux herbes des haillons d'argent; où le soleil, de la montagne fière, luit: c'est un petit val qui mousse de rayons. Un soldat jeune, bouche ouverte, tête nue, et la nuque baignant dans le frais cresson bleu, dort; il est étendu dans l'herbe, sous la nue, pâle dans son lit vert où la lumière pleut. Les parfums ne font pas frissonner sa narine; il dort dans le soleil, la main sur sa poitrine, tranquille. Il a deux trous rouges au côté droit. »", interpretation: "La nature maternelle reste impuissante face à la guerre.", keywords: ["personnification","nature","pathétique","poésie"] },
      { procede: "Contraste", citation: "« trou de verdure »", interpretation: "Le cadre lumineux contraste avec la mort du soldat.", keywords: ["contraste","couleurs","violence","lyrique"] }
    ]
  },
  {
    id: "GT-950",
    titre: "Mélancolie d’automne [Série 20]",
    auteur: "Verlaine",
    oeuvre: "Chanson d’automne",
    genre: "Poésie",
    diff: 1,
    texte: `Les sanglots longs des violons de l'automne blessent mon cœur d'une langueur monotone. Tout suffocant et blême, quand sonne l'heure, je me souviens des jours anciens et je pleure; et je m'en vais au vent mauvais qui m'emporte deçà, delà, pareil à la feuille morte. Le soir s'allonge et la cloche descend dans l'air humide; la ville s'efface; mon pas hésite comme une voix qui s'éteint dans le froid, et ma mémoire revient avec ses battements sourds.`,
    contexte: "Poème bref et musical de la nostalgie.",
    attendus: [
      { procede: "Allitération", citation: "« sanglots longs des violons »", interpretation: "Les sonorités prolongent la plainte.", keywords: ["allitération","musicalité","verlaine","mélancolie"] },
      { procede: "Comparaison", citation: "« Pareil à la feuille morte »", interpretation: "Le sujet se dit emporté par le temps.", keywords: ["comparaison","automne","temps","destin"] },
      { procede: "Registre lyrique", citation: "« je me souviens ... je pleure »", interpretation: "L'expression du moi structure le poème.", keywords: ["lyrique","souvenir","tristesse","poésie"] }
    ]
  },
  {
    id: "GT-951",
    titre: "Modernité de Zone [Série 20]",
    auteur: "Apollinaire",
    oeuvre: "Alcools",
    genre: "Poésie",
    diff: 3,
    texte: `A la fin tu es las de ce monde ancien. Bergère ô tour Eiffel le troupeau des ponts bêle ce matin. Tu en as assez de vivre dans l'antiquité grecque et romaine. Ici même les automobiles ont l'air d'être anciennes. La religion seule est restée toute neuve, la religion est restée simple comme les hangars de Port-Aviation. Seul en Europe tu n'es pas antique ô Christianisme. Et toi que les fenêtres observent, la honte te retient d'entrer dans une église et de t'y confesser ce matin.`,
    contexte: "Poétique de la modernité urbaine.",
    attendus: [
      { procede: "Apostrophe", citation: "« Bergère ô tour Eiffel »", interpretation: "L'image mêle tradition pastorale et ville moderne.", keywords: ["apostrophe","tour eiffel","modernité","apollinaire"] },
      { procede: "Antithèse", citation: "« monde ancien » / « moderne »", interpretation: "Le poème se construit sur une tension temporelle.", keywords: ["antithèse","ancien","moderne","avant-garde"] },
      { procede: "Vers libre", citation: "« A la fin tu es las de ce monde ancien »", interpretation: "L'absence de cadre métrique accompagne la mobilité du regard.", keywords: ["vers libre","rythme","montage","alcools"] }
    ]
  },
  {
    id: "GT-952",
    titre: "Incipit provincial [Série 20]",
    auteur: "Stendhal",
    oeuvre: "Le Rouge et le Noir",
    genre: "Roman",
    diff: 1,
    texte: `La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure.`,
    contexte: "Ouverture réaliste et ironique de la province.",
    attendus: [
      { procede: "Cadre", citation: "« La petite ville de Verrières »", interpretation: "L'incipit pose un espace social précis.", keywords: ["cadre","province","stendhal","réalisme"] },
      { procede: "Lexique mélioratif", citation: "« La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure. »", interpretation: "Le positif prépare une lecture critique.", keywords: ["lexique","ironie","bourgeoisie","roman"] },
      { procede: "Attente", citation: "« La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure. »", interpretation: "La promesse initiale sera démentie par le récit.", keywords: ["attente","promesse","narrateur","destin"] }
    ]
  },
  {
    id: "GT-953",
    titre: "Entrée de Charles [Série 20]",
    auteur: "Flaubert",
    oeuvre: "Madame Bovary",
    genre: "Roman",
    diff: 2,
    texte: `Nous étions à l'étude, quand le proviseur entra, suivi d'un nouveau habillé en bourgeois et d'un garçon de classe qui portait un grand pupitre. Ceux qui dormaient se réveillèrent, et chacun se leva comme surpris dans son travail. Le proviseur nous fit signe de nous rasseoir; puis, se tournant vers le maître d'études: « Monsieur Roger, lui dit-il, voici un élève que je vous recommande. » Resté dans l'angle, derrière la porte, si bien qu'on l'apercevait à peine, le nouveau était un gars de la campagne, embarrassé par les regards.`,
    contexte: "Scène d'entrée et de maladresse sociale.",
    attendus: [
      { procede: "Focalisation", citation: "« Nous étions à l'étude »", interpretation: "Le point de vue collectif installe la scène.", keywords: ["focalisation","collectif","flaubert","classe"] },
      { procede: "Réalisme social", citation: "« habillé en bourgeois »", interpretation: "Le vêtement marque immédiatement la position sociale.", keywords: ["réalisme","social","école","roman"] },
      { procede: "Caractérisation", citation: "« le nouveau était un gars de la campagne »", interpretation: "L'origine rurale prépare l'inadaptation.", keywords: ["caractérisation","charles","inadaptation","bovary"] }
    ]
  },
  {
    id: "GT-954",
    titre: "Nuit de Germinal [Série 20]",
    auteur: "Zola",
    oeuvre: "Germinal",
    genre: "Roman",
    diff: 1,
    texte: `Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucune ombre d'arbre ne tachait le ciel; le pavé se déroulait avec la rectitude d'une jetée, au milieu des ténèbres.`,
    contexte: "Incipit naturaliste d'une marche vers la mine.",
    attendus: [
      { procede: "Métaphore", citation: "« rafales larges comme sur une mer »", interpretation: "La plaine devient un espace hostile et océanique.", keywords: ["métaphore","paysage","zola","naturalisme"] },
      { procede: "Champ lexical", citation: "« Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucune ombre d'arbre ne tachait le ciel; le pavé se déroulait avec la rectitude d'une jetée, au milieu des ténèbres. »", interpretation: "La noirceur annonce la violence sociale.", keywords: ["champ lexical","noir","mine","drame"] },
      { procede: "Focalisation externe", citation: "« un homme suivait seul »", interpretation: "L'anonymat initial universalise la condition ouvrière.", keywords: ["focalisation","anonymat","ouvrier","roman"] }
    ]
  },
  {
    id: "GT-955",
    titre: "Armée en déroute [Série 20]",
    auteur: "Maupassant",
    oeuvre: "Boule de suif",
    genre: "Roman",
    diff: 1,
    texte: `Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes, noirs, barbus, sales, harassés, marchaient d'un air abattu, sans drapeau, sans régiment. Tous semblaient accablés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude, et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait des mobilisés paisibles, des francs-tireurs de parade, et des soldats vaincus que le hasard poussait encore.`,
    contexte: "Ouverture de guerre et de désordre collectif.",
    attendus: [
      { procede: "Accumulation", citation: "« noirs, barbus, sales, harassés »", interpretation: "L'énumération matérialise l'épuisement.", keywords: ["accumulation","guerre","épuisement","maupassant"] },
      { procede: "Description", citation: "« sans drapeau, sans régiment »", interpretation: "La défaite se lit dans la disparition des signes militaires.", keywords: ["description","défaite","armée","réalisme"] },
      { procede: "Antithèse", citation: "« Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes, noirs, barbus, sales, harassés, marchaient d'un air abattu, sans drapeau, sans régiment. Tous semblaient accablés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude, et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait des mobilisés paisibles, des francs-tireurs de parade, et des soldats vaincus que le hasard poussait encore. »", interpretation: "Le texte montre la volatilité des foules en guerre.", keywords: ["antithèse","foule","instabilité","histoire"] }
    ]
  },
  {
    id: "GT-956",
    titre: "Maison Vauquer [Série 20]",
    auteur: "Balzac",
    oeuvre: "Le Père Goriot",
    genre: "Roman",
    diff: 2,
    texte: `Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux. Depuis trente ans, n'y a-t-il jamais été vu de jeune personne; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. En 1819, époque où commence ce drame, il s'y trouvait pourtant une pauvre jeune fille.`,
    contexte: "Incipit réaliste d'un microcosme social parisien.",
    attendus: [
      { procede: "Précision", citation: "« rue Neuve-Sainte-Geneviève »", interpretation: "Le détail topographique ancre le récit dans le réel.", keywords: ["réalisme","paris","topographie","balzac"] },
      { procede: "Ironie", citation: "« Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux. Depuis trente ans, n'y a-t-il jamais été vu de jeune personne; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. En 1819, époque où commence ce drame, il s'y trouvait pourtant une pauvre jeune fille. »", interpretation: "La formule valorisante suggère en creux la médiocrité.", keywords: ["ironie","narrateur","milieu","société"] },
      { procede: "Annonce", citation: "« époque où commence ce drame »", interpretation: "Le narrateur prépare une trajectoire tragique.", keywords: ["annonce","drame","destin","roman"] }
    ]
  },
  {
    id: "GT-957",
    titre: "Marche vers la tombe [Série 20]",
    auteur: "Hugo",
    oeuvre: "Les Contemplations",
    genre: "Poésie",
    diff: 2,
    texte: `Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur.`,
    contexte: "Élégie du deuil filial.",
    attendus: [
      { procede: "Progression", citation: "« Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur. »", interpretation: "La marche géographique devient parcours intérieur.", keywords: ["progression","deuil","hugo","élégie"] },
      { procede: "Antithèse", citation: "« Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur. »", interpretation: "La douleur annule les repères du monde.", keywords: ["antithèse","douleur","intériorité","lyrique"] },
      { procede: "Chute", citation: "« sur ta tombe »", interpretation: "La destination funèbre reconfigure tout le poème.", keywords: ["chute","tombe","émotion","poésie"] }
    ]
  },
  {
    id: "GT-958",
    titre: "Allégorie de l’albatros [Série 20]",
    auteur: "Baudelaire",
    oeuvre: "Les Fleurs du mal",
    genre: "Poésie",
    diff: 1,
    texte: `Souvent, pour s'amuser, les hommes d'équipage prennent des albatros, vastes oiseaux des mers, qui suivent, indolents compagnons de voyage, le navire glissant sur les gouffres amers. A peine les ont-ils déposés sur les planches, que ces rois de l'azur, maladroits et honteux, laissent piteusement leurs grandes ailes blanches comme des avirons traîner à côté d'eux. Ce voyageur ailé, comme il est gauche et veule! Lui, naguère si beau, qu'il est comique et laid! Le Poète est semblable au prince des nuées.`,
    contexte: "Allégorie du poète inadapté au monde social.",
    attendus: [
      { procede: "Allégorie", citation: "« Le Poète est semblable au prince des nuées »", interpretation: "L'albatros figure la condition du créateur.", keywords: ["allégorie","poète","société","baudelaire"] },
      { procede: "Antithèse", citation: "« t-ils déposés sur les planches, que ces rois de l'azur, maladroits et honte »", interpretation: "La grandeur chute dans le ridicule terrestre.", keywords: ["antithèse","sublime","ridicule","modernité"] },
      { procede: "Ironie", citation: "« pour s'amuser »", interpretation: "La cruauté collective est banalisée par le divertissement.", keywords: ["ironie","cruauté","foule","symbolisme"] }
    ]
  },
  {
    id: "GT-959",
    titre: "Chants désespérés [Série 20]",
    auteur: "Musset",
    oeuvre: "La Nuit de mai",
    genre: "Poésie",
    diff: 2,
    texte: `Poète, prends ton luth et me donne un baiser; la fleur de l'églantier sent ses bourgeons éclore, le printemps naît ce soir, les vents vont s'embraser. Les plus désespérés sont les chants les plus beaux, et j'en sais d'immortels qui sont de purs sanglots. Lorsque le pélican, lassé d'un long voyage, retourne à ses roseaux, ses petits affamés courent sur le rivage en le voyant au loin s'abattre sur les eaux. Ainsi le poète nourrit son chant de sa propre blessure, et la douleur devient musique.`,
    contexte: "Poème dialogué sur la création née de la souffrance.",
    attendus: [
      { procede: "Maxime", citation: "« Les plus désespérés sont les chants les plus beaux »", interpretation: "La formule fait de la douleur une source esthétique.", keywords: ["maxime","désespoir","beauté","musset"] },
      { procede: "Symbole", citation: "« le pélican »", interpretation: "L'oiseau représente le sacrifice du poète.", keywords: ["symbole","pélican","sacrifice","lyrisme"] },
      { procede: "Dialogue", citation: "« Poète, prends ton luth »", interpretation: "L'échange Muse/Poète dramatise l'inspiration.", keywords: ["dialogue","muse","poète","création"] }
    ]
  },
  {
    id: "GT-960",
    titre: "Stratégie de Merteuil [Série 20]",
    auteur: "Laclos",
    oeuvre: "Les Liaisons dangereuses",
    genre: "Roman",
    diff: 3,
    texte: `Vous voilà donc bien heureux de votre dernière conquête! Vous m'écrivez trois pages pour me vanter une paysanne. J'en ris encore. Croyez-vous me faire envie? Je connais vos ruses. Vous voulez me piquer, me faire croire que vous n'avez plus besoin de moi. D'ailleurs, ce n'est pas Cécile qui m'intéresse; c'est vous. Je veux savoir si vous oserez exécuter le plan que nous avons formé. Préférez-vous la vertu de Mme de Tourvel à la gloire de me plaire? Choisissez. Si vous hésitez, je comprendrai que vous avez faibli, et je saurai me venger.`,
    contexte: "Lettre de manipulation dans le roman libertin.",
    attendus: [
      { procede: "Registre épistolaire", citation: "« Vous m'écrivez trois pages »", interpretation: "La forme lettre sert la stratégie psychologique.", keywords: ["épistolaire","lettre","laclos","manipulation"] },
      { procede: "Ironie", citation: "« J'en ris encore »", interpretation: "La moquerie masque une volonté de domination.", keywords: ["ironie","merteuil","pouvoir","stratégie"] },
      { procede: "Antithèse", citation: "« vertu de Mme de Tourvel » / « gloire de me plaire »", interpretation: "Le conflit oppose morale et libertinage.", keywords: ["antithèse","vertu","séduction","libertinage"] }
    ]
  },
  {
    id: "GT-961",
    titre: "Dialogue du Neveu [Série 20]",
    auteur: "Diderot",
    oeuvre: "Le Neveu de Rameau",
    genre: "Idées",
    diff: 2,
    texte: `Je ne connais pas de plus grand charlatan que celui qui prétend enseigner ce qu'il ne sait pas. Le monde est plein de ces pédants qui récitent des maximes et ne les pratiquent point. Ils ont l'air grave, le ton sentencieux, et l'on les écoute; mais suivez-les chez eux, vous les verrez mentir, voler, tricher, se livrer à toutes les turpitudes qu'ils condamnent en public. Le Neveu rit de tout cela: « Morale! c'est le masque du faible devant le fort. » Je lui réponds que sans morale, la société tombe en ruine. Le dialogue ne tranche pas; il oblige à penser.`,
    contexte: "Satire philosophique de l’hypocrisie sociale.",
    attendus: [
      { procede: "Ironie", citation: "« l'air grave, le ton sentencieux »", interpretation: "Le portrait dénonce les faux moralistes.", keywords: ["ironie","pédants","hypocrisie","diderot"] },
      { procede: "Antithèse", citation: "« sans morale, la société tombe » / « Morale! c'est le masque »", interpretation: "Le texte confronte deux conceptions irréconciliables.", keywords: ["antithèse","morale","cynisme","dialogue"] },
      { procede: "Registre argumentatif", citation: "« Le dialogue ne tranche pas »", interpretation: "La pensée progresse par confrontation des voix.", keywords: ["argumentatif","débat","philosophie","lumières"] }
    ]
  },
  {
    id: "GT-962",
    titre: "Mal du siècle [Série 20]",
    auteur: "Chateaubriand",
    oeuvre: "René",
    genre: "Roman",
    diff: 2,
    texte: `Les solitudes me parlent une langue que je comprends; les grands bois, les montagnes, les mers désertes me rendent ce que les hommes m'ont pris. J'ai passé ma jeunesse à fuir les villes, à chercher des lieux où le vent souffle sans témoin, où l'on peut pleurer sans ridicule. Amélie, ma sœur, partageait autrefois ces errances; mais le monde a séparé nos destins, et je reste seul avec mon mal du siècle, ce vague à l'âme qui consume sans éclat. Les ruines, les tombeaux, les crépuscules m'attirent: je ne cherche pas le bonheur, je cherche une émotion forte.`,
    contexte: "Confession romantique et solitude existentielle.",
    attendus: [
      { procede: "Personnification", citation: "« Les solitudes me parlent »", interpretation: "La nature devient interlocutrice du moi.", keywords: ["personnification","nature","romantisme","rené"] },
      { procede: "Registre lyrique", citation: "« ce vague à l'âme »", interpretation: "Le texte exprime la crise intime du sujet romantique.", keywords: ["lyrique","mal du siècle","subjectivité","chateaubriand"] },
      { procede: "Antithèse", citation: "« Je ne cherche pas le bonheur » / « une émotion forte »", interpretation: "Le héros refuse la modération bourgeoise.", keywords: ["antithèse","bonheur","intensité","roman"] }
    ]
  },
  {
    id: "GT-963",
    titre: "Passion à la cour [Série 20]",
    auteur: "Lafayette",
    oeuvre: "La Princesse de Clèves",
    genre: "Roman",
    diff: 3,
    texte: `La cour était alors dans une magnificence qu'on n'a jamais vue depuis. L'ambition et la galanterie régnaient en même temps et occupaient également les esprits; l'un et l'autre trouvaient souvent des moyens de se concilier, et l'on ne savait lequel emportait l'avantage. Mme de Clèves, jeune, belle, et mariée au prince de Clèves, ne connaissait pas encore la violence de la passion. Elle croyait que l'honnêteté suffisait à régler la conduite. Mais le duc de Nemours parut: il était de ces hommes que la nature semble avoir formés pour se faire aimer.`,
    contexte: "Exposition du roman de passion classique.",
    attendus: [
      { procede: "Tableau social", citation: "« L'ambition et la galanterie régnaient »", interpretation: "Le cadre de cour organise les comportements.", keywords: ["cour","mœurs","galanterie","lafayette"] },
      { procede: "Antithèse", citation: "« Elle croyait que l'honnêteté suffisait à régler la conduite »", interpretation: "Le conflit moral est lancé dès l’exposition.", keywords: ["antithèse","vertu","passion","roman"] },
      { procede: "Caractérisation", citation: "« formés pour se faire aimer »", interpretation: "Nemours apparaît comme type du séducteur.", keywords: ["caractérisation","nemours","désir","classicisme"] }
    ]
  }
  ],
  21: [
  {
    id: "GT-964",
    titre: "Oliver demande encore",
    auteur: "Dickens",
    oeuvre: "Oliver Twist (trad. fr.)",
    genre: "Roman",
    diff: 2,
    texte: `Le soir, après qu'on eut partagé les maigres portions, les garçons tirèrent au sort celui qui irait parler au maître. Le sort tomba sur Oliver. Tremblant mais poussé par la faim, il s'avança, bol à la main, et dit: « S'il vous plaît, monsieur, j'en veux encore. » Le maître demeura pétrifié, puis le saisit au collet. Le bureau fut convoqué d'urgence: un enfant venait de demander plus de nourriture. Ce crime, dans la maison des pauvres, paraissait plus grave qu'une révolte.`,
    contexte: "Incipit historique fondé sur les contrastes.",
    attendus: [
      { procede: "Antithèse", citation: "« Le soir, après qu'on eut partagé les maigres portions, les garçons tirèrent au sort celui qui irait parler au maître. Le sort tomba sur Oliver. Tremblant mais poussé par la faim, il s'avança, bol à la main, et dit: « S'il vous plaît, monsieur, j'en veux encore. » Le maître demeura pétrifié, puis le saisit au collet. Le bureau fut convoqué d'urgence: un enfant venait de demander plus de nourriture. Ce crime, dans la maison des pauvres, paraissait plus grave qu'une révolte. »", interpretation: "La structure binaire dramatise la période.", keywords: ["antithèse","histoire","contraste","dickens"] },
      { procede: "Parallélisme", citation: "« Le soir, après qu'on eut partagé les maigres portions, les garçons tirèrent au sort celui qui irait parler au maître. Le sort tomba sur Oliver. Tremblant mais poussé par la faim, il s'avança, bol à la main, et dit: « S'il vous plaît, monsieur, j'en veux encore. » Le maître demeura pétrifié, puis le saisit au collet. Le bureau fut convoqué d'urgence: un enfant venait de demander plus de nourriture. Ce crime, dans la maison des pauvres, paraissait plus grave qu'une révolte. »", interpretation: "La répétition donne un souffle oratoire.", keywords: ["parallélisme","rythme","incipit","roman"] },
      { procede: "Hyperbole", citation: "« Le soir, après qu'on eut partagé les maigres portions, les garçons tirèrent au sort celui qui irait parler au maître. Le sort tomba sur Oliver. Tremblant mais poussé par la faim, il s'avança, bol à la main, et dit: « S'il vous plaît, monsieur, j'en veux encore. » Le maître demeura pétrifié, puis le saisit au collet. Le bureau fut convoqué d'urgence: un enfant venait de demander plus de nourriture. Ce crime, dans la maison des pauvres, paraissait plus grave qu'une révolte. »", interpretation: "L'époque est pensée dans l'excès.", keywords: ["hyperbole","superlatif","révolution","narration"] }
    ]
  },
  {
    id: "GT-965",
    titre: "Rue Morgue",
    auteur: "Poe",
    oeuvre: "Double assassinat dans la rue Morgue (trad. fr.)",
    genre: "Poésie",
    diff: 3,
    texte: `Les habitants du quartier Saint-Roch furent réveillés, vers trois heures du matin, par des cris effroyables sortant d'une maison de la rue Morgue. On força la porte; la chambre était en désordre, les meubles brisés, les murs tachés. Le corps de Mademoiselle L'Espanaye gisait dans la cour; celui de sa mère fut trouvé dans la cheminée, la tête en bas, le corps affreusement meurtri. Plusieurs témoins affirmaient avoir entendu deux voix: l'une française, l'autre étrangère, impossible à identifier. Dupin sourit: le mystère venait de commencer.`,
    contexte: "Poème narratif de deuil et d’obsession.",
    attendus: [
      { procede: "Refrain", citation: "« Les habitants du quartier Saint-Roch furent réveillés, vers trois heures du matin, par des cris effroyables sortant d'une maison de la rue Morgue. On força la porte; la chambre était en désordre, les meubles brisés, les murs tachés. Le corps de Mademoiselle L'Espanaye gisait dans la cour; celui de sa mère fut trouvé dans la cheminée, la tête en bas, le corps affreusement meurtri. Plusieurs témoins affirmaient avoir entendu deux voix: l'une française, l'autre étrangère, impossible à identifier. Dupin sourit: le mystère venait de commencer. »", interpretation: "La répétition verbalise l’irréversible.", keywords: ["refrain","deuil","fatalité","poe"] },
      { procede: "Atmosphère", citation: "« Les habitants du quartier Saint-Roch furent réveillés, vers trois heures du matin, par des cris effroyables sortant d'une maison de la rue Morgue. On força la porte; la chambre était en désordre, les meubles brisés, les murs tachés. Le corps de Mademoiselle L'Espanaye gisait dans la cour; celui de sa mère fut trouvé dans la cheminée, la tête en bas, le corps affreusement meurtri. Plusieurs témoins affirmaient avoir entendu deux voix: l'une française, l'autre étrangère, impossible à identifier. Dupin sourit: le mystère venait de commencer. »", interpretation: "Le décor nocturne installe le fantastique.", keywords: ["atmosphère","nuit","angoisse","poésie"] },
      { procede: "Répétition sonore", citation: "« Les habitants du quartier Saint-Roch furent réveillés, vers trois heures du matin, par des cris effroyables sortant d'une maison de la rue Morgue. On força la porte; la chambre était en désordre, les meubles brisés, les murs tachés. Le corps de Mademoiselle L'Espanaye gisait dans la cour; celui de sa mère fut trouvé dans la cheminée, la tête en bas, le corps affreusement meurtri. Plusieurs témoins affirmaient avoir entendu deux voix: l'une française, l'autre étrangère, impossible à identifier. Dupin sourit: le mystère venait de commencer. »", interpretation: "Le rythme mime l'obsession auditive.", keywords: ["répétition","son","obsession","narrateur"] }
    ]
  },
  {
    id: "GT-966",
    titre: "Je préférerais ne pas",
    auteur: "Melville",
    oeuvre: "Bartleby (trad. fr.)",
    genre: "Roman",
    diff: 2,
    texte: `Je l'engageai d'abord parce qu'il copiait sans faute et sans bruit. Puis, un jour, je lui demandai de vérifier une copie avec moi. Bartleby répondit d'une voix calme: « Je préférerais ne pas. » Je crus mal entendre. Je répétai l'ordre. Il répéta: « Je préférerais ne pas. » Dès lors, cette formule revint pour toute demande, qu'il s'agît de sortir, de manger, de parler, d'expliquer. Il demeurait là, pâle, près de la fenêtre qui donnait sur un mur de briques, comme s'il habitait déjà un autre monde.`,
    contexte: "Incipit maritime et métaphysique.",
    attendus: [
      { procede: "Formule", citation: "« Bartleby répondit d'une voix calme: « Je préférerais ne pas. »", interpretation: "L’entrée directe crée une voix mémorable.", keywords: ["incipit","voix","melville","roman"] },
      { procede: "Métaphore", citation: "« Je l'engageai d'abord parce qu'il copiait sans faute et sans bruit. Puis, un jour, je lui demandai de vérifier une copie avec moi. Bartleby répondit d'une voix calme: « Je préférerais ne pas. » Je crus mal entendre. Je répétai l'ordre. Il répéta: « Je préférerais ne pas. » Dès lors, cette formule revint pour toute demande, qu'il s'agît de sortir, de manger, de parler, d'expliquer. Il demeurait là, pâle, près de la fenêtre qui donnait sur un mur de briques, comme s'il habitait déjà un autre monde. »", interpretation: "La mer devient remède contre le désespoir.", keywords: ["métaphore","mer","désespoir","narrateur"] },
      { procede: "Image", citation: "« Je l'engageai d'abord parce qu'il copiait sans faute et sans bruit. Puis, un jour, je lui demandai de vérifier une copie avec moi. Bartleby répondit d'une voix calme: « Je préférerais ne pas. » Je crus mal entendre. Je répétai l'ordre. Il répéta: « Je préférerais ne pas. » Dès lors, cette formule revint pour toute demande, qu'il s'agît de sortir, de manger, de parler, d'expliquer. Il demeurait là, pâle, près de la fenêtre qui donnait sur un mur de briques, comme s'il habitait déjà un autre monde. »", interpretation: "L'horizon ouvre une perspective spirituelle.", keywords: ["image","horizon","quête","océan"] }
    ]
  },
  {
    id: "GT-967",
    titre: "Méditation de prison",
    auteur: "Wilde",
    oeuvre: "De Profundis (trad. fr.)",
    genre: "Roman",
    diff: 2,
    texte: `La souffrance est le seul mode par lequel la conscience se révèle à elle-même dans sa profondeur. J'avais cru que l'art me suffisait; j'apprends ici, dans la solitude et la honte, que la douleur est aussi une forme de connaissance. Tout ce que j'avais pris pour éclat n'était qu'apparence. Le cœur humilié voit plus juste. Je dois accepter ce qui m'arrive, non comme une simple punition, mais comme une vérité qui me traverse et qui me transforme. Il n'est pas de création sans cette descente dans l'ombre.`,
    contexte: "Scène de conscience et de dédoublement moral.",
    attendus: [
      { procede: "Personnification", citation: "« La souffrance est le seul mode par lequel la conscience se révèle à elle-même dans sa profondeur. J'avais cru que l'art me suffisait; j'apprends ici, dans la solitude et la honte, que la douleur est aussi une forme de connaissance. Tout ce que j'avais pris pour éclat n'était qu'apparence. Le cœur humilié voit plus juste. Je dois accepter ce qui m'arrive, non comme une simple punition, mais comme une vérité qui me traverse et qui me transforme. Il n'est pas de création sans cette descente dans l'ombre. »", interpretation: "Le tableau agit comme un être moral autonome.", keywords: ["personnification","portrait","wilde","symbolisme"] },
      { procede: "Antithèse", citation: "« que j'avais pris pour éclat n'était qu'apparence. »", interpretation: "Beauté extérieure et corruption intérieure s’opposent.", keywords: ["antithèse","apparence","âme","décadence"] },
      { procede: "Formule", citation: "« uffrance est le seul mode par lequel la conscience se révèle à elle-même dans sa profondeur. »", interpretation: "La phrase explicite la matérialisation de la faute.", keywords: ["formule","conscience","faute","roman"] }
    ]
  },
  {
    id: "GT-968",
    titre: "Prière pour la tolérance [Série 21]",
    auteur: "Voltaire",
    oeuvre: "Traité sur la tolérance",
    genre: "Idées",
    diff: 3,
    texte: `Ce n'est donc plus aux hommes que je m'adresse; c'est à toi, Dieu de tous les êtres, de tous les mondes et de tous les temps: s'il est permis à de faibles créatures, perdues dans l'immensité et imperceptibles au reste de l'univers, d'oser te demander quelque chose, à toi qui as tout donné, à toi dont les décrets sont immuables comme éternels, daigne regarder en pitié les erreurs attachées à notre nature; que ces erreurs ne fassent point nos calamités. Tu ne nous as point donné un cœur pour nous haïr, et des mains pour nous égorger; fais que nous nous aidions mutuellement à supporter le fardeau d'une vie pénible et passagère.`,
    contexte: "Prière philosophique contre l'intolérance religieuse.",
    attendus: [
      { procede: "Apostrophe", citation: "« c'est à toi, Dieu de tous les êtres »", interpretation: "L'adresse solennelle universalise la demande morale.", keywords: ["apostrophe","universel","tolérance","voltaire"] },
      { procede: "Antithèse", citation: "« Tu ne nous as point donné un cœur pour nous haïr, et des mains pour n »", interpretation: "Le texte oppose la violence à la fraternité.", keywords: ["antithèse","haine","fraternité","lumières"] },
      { procede: "Registre oratoire", citation: "« daigne regarder en pitié »", interpretation: "Le ton de supplication renforce la portée civique.", keywords: ["oratoire","prière","argumentation","idées"] }
    ]
  },
  {
    id: "GT-969",
    titre: "Aveu de Phèdre [Série 21]",
    auteur: "Racine",
    oeuvre: "Phèdre",
    genre: "Théâtre",
    diff: 2,
    texte: `Je le vis, je rougis, je pâlis à sa vue; un trouble s'éleva dans mon âme éperdue; mes yeux ne voyaient plus, je ne pouvais parler; je sentis tout mon corps et transir et brûler. Je reconnus Vénus et ses feux redoutables, d'un sang qu'elle poursuit tourments inévitables. Par des vœux assidus je crus les détourner: je lui bâtis un temple, et pris soin de l'orner; de victimes moi-même à toute heure entourée, je cherchais dans leurs flancs ma raison égarée. Ainsi, la passion se fait faute, et la faute se fait destin.`,
    contexte: "Aveu tragique d'une passion impossible.",
    attendus: [
      { procede: "Parallélisme", citation: "« Je le vis, je rougis, je pâlis »", interpretation: "Le rythme ternaire dramatise le choc amoureux.", keywords: ["parallélisme","aveu","tragédie","racine"] },
      { procede: "Antithèse", citation: "« transir et brûler »", interpretation: "Le désir se dit dans une contradiction corporelle.", keywords: ["antithèse","désir","douleur","pathétique"] },
      { procede: "Mythologie", citation: "« Je reconnus Vénus »", interpretation: "La référence divine inscrit la passion dans la fatalité.", keywords: ["mythologie","fatalité","vénus","tragique"] }
    ]
  },
  {
    id: "GT-970",
    titre: "Dilemme de Rodrigue [Série 21]",
    auteur: "Corneille",
    oeuvre: "Le Cid",
    genre: "Théâtre",
    diff: 2,
    texte: `Percé jusques au fond du cœur d'une atteinte imprévue aussi bien que mortelle, misérable vengeur d'une juste querelle, et malheureux objet d'une injuste rigueur, je demeure immobile, et mon âme abattue cède au coup qui me tue. En cet affront mon père est l'offensé, et l'offenseur le père de Chimène. Que je sens de rudes combats! contre mon propre honneur mon amour s'intéresse. Faut-il perdre Chimène, ou trahir mon lignage? le héros naît dans cette hésitation.`,
    contexte: "Conflit classique entre honneur et amour.",
    attendus: [
      { procede: "Antithèse", citation: "« contre mon propre honneur mon amour s'intéresse. »", interpretation: "La symétrie formule l'impasse morale.", keywords: ["antithèse","honneur","amour","corneille"] },
      { procede: "Registre tragique", citation: "« Percé jusques au fond du cœur »", interpretation: "La douleur morale prend la forme d'une blessure.", keywords: ["tragique","souffrance","dilemme","théâtre"] },
      { procede: "Exclamation", citation: "« Que je sens de rudes combats! »", interpretation: "L'exclamation rend sensible l'urgence intérieure.", keywords: ["exclamation","combat","pathétique","classicisme"] }
    ]
  },
  {
    id: "GT-971",
    titre: "Aveuglement d’Orgon [Série 21]",
    auteur: "Molière",
    oeuvre: "Tartuffe",
    genre: "Théâtre",
    diff: 3,
    texte: `Ha! si vous aviez vu comme j'en fis rencontre, vous auriez pris pour lui l'amitié que je montre. Chaque jour à l'église il venait, d'un air doux, tout vis-à-vis de moi se mettre à deux genoux. Il attirait les yeux de l'assemblée entière par l'ardeur dont au Ciel il poussait sa prière; il faisait des soupirs, de grands élancements, et baisait humblement la terre à tous moments. Et lorsque je sortais, il me devançait vite pour m'aller à la porte offrir de l'eau bénite. Et Tartuffe? Le pauvre homme!`,
    contexte: "Portrait comique d'un faux dévot.",
    attendus: [
      { procede: "Comique de caractère", citation: "« Le pauvre homme! »", interpretation: "Le refrain signale l'aveuglement d'Orgon.", keywords: ["comique","orgon","imposture","molière"] },
      { procede: "Accumulation", citation: "« soupirs, de grands élancements »", interpretation: "La surenchère gestuelle dénonce l'hypocrisie.", keywords: ["accumulation","hypocrisie","satire","dévotion"] },
      { procede: "Ironie dramatique", citation: "« Et Tartuffe? »", interpretation: "Le spectateur comprend ce qu'Orgon refuse de voir.", keywords: ["ironie dramatique","spectateur","théâtre","classicisme"] }
    ]
  },
  {
    id: "GT-972",
    titre: "Morale du plus fort [Série 21]",
    auteur: "La Fontaine",
    oeuvre: "Fables",
    genre: "Poésie",
    diff: 3,
    texte: `La raison du plus fort est toujours la meilleure: nous l'allons montrer tout à l'heure. Un Agneau se désaltérait dans le courant d'une onde pure. Un Loup survient à jeun, qui cherchait aventure, et que la faim en ces lieux attirait. Qui te rend si hardi de troubler mon breuvage? dit cet animal plein de rage: tu seras châtié de ta témérité. Sire, répond l'Agneau, que Votre Majesté ne se mette pas en colère; mais plutôt qu'elle considère que je me vas désaltérant plus de vingt pas au-dessous d'Elle.`,
    contexte: "Fable sur l'arbitraire de la force.",
    attendus: [
      { procede: "Morale", citation: "« La raison du plus fort est toujours la meilleure »", interpretation: "La moralité initiale donne la clé de lecture politique.", keywords: ["morale","force","justice","fable"] },
      { procede: "Dialogue", citation: "« Qui te rend si hardi »", interpretation: "Le discours direct met en scène un procès biaisé.", keywords: ["dialogue","procès","injustice","allégorie"] },
      { procede: "Ironie", citation: "« Votre Majesté »", interpretation: "La politesse de l'agneau souligne la brutalité du loup.", keywords: ["ironie","domination","la fontaine","pouvoir"] }
    ]
  },
  {
    id: "GT-973",
    titre: "Le soldat endormi [Série 21]",
    auteur: "Rimbaud",
    oeuvre: "Le Dormeur du val",
    genre: "Poésie",
    diff: 1,
    texte: `C'est un trou de verdure où chante une rivière accrochant follement aux herbes des haillons d'argent; où le soleil, de la montagne fière, luit: c'est un petit val qui mousse de rayons. Un soldat jeune, bouche ouverte, tête nue, et la nuque baignant dans le frais cresson bleu, dort; il est étendu dans l'herbe, sous la nue, pâle dans son lit vert où la lumière pleut. Les parfums ne font pas frissonner sa narine; il dort dans le soleil, la main sur sa poitrine, tranquille. Il a deux trous rouges au côté droit.`,
    contexte: "Poème de guerre à chute brutale.",
    attendus: [
      { procede: "Chute", citation: "« Il a deux trous rouges au côté droit »", interpretation: "Le dernier vers renverse la lecture bucolique.", keywords: ["chute","guerre","mort","rimbaud"] },
      { procede: "Personnification", citation: "« C'est un trou de verdure où chante une rivière accrochant follement aux herbes des haillons d'argent; où le soleil, de la montagne fière, luit: c'est un petit val qui mousse de rayons. Un soldat jeune, bouche ouverte, tête nue, et la nuque baignant dans le frais cresson bleu, dort; il est étendu dans l'herbe, sous la nue, pâle dans son lit vert où la lumière pleut. Les parfums ne font pas frissonner sa narine; il dort dans le soleil, la main sur sa poitrine, tranquille. Il a deux trous rouges au côté droit. »", interpretation: "La nature maternelle reste impuissante face à la guerre.", keywords: ["personnification","nature","pathétique","poésie"] },
      { procede: "Contraste", citation: "« trou de verdure »", interpretation: "Le cadre lumineux contraste avec la mort du soldat.", keywords: ["contraste","couleurs","violence","lyrique"] }
    ]
  },
  {
    id: "GT-974",
    titre: "Mélancolie d’automne [Série 21]",
    auteur: "Verlaine",
    oeuvre: "Chanson d’automne",
    genre: "Poésie",
    diff: 2,
    texte: `Les sanglots longs des violons de l'automne blessent mon cœur d'une langueur monotone. Tout suffocant et blême, quand sonne l'heure, je me souviens des jours anciens et je pleure; et je m'en vais au vent mauvais qui m'emporte deçà, delà, pareil à la feuille morte. Le soir s'allonge et la cloche descend dans l'air humide; la ville s'efface; mon pas hésite comme une voix qui s'éteint dans le froid, et ma mémoire revient avec ses battements sourds.`,
    contexte: "Poème bref et musical de la nostalgie.",
    attendus: [
      { procede: "Allitération", citation: "« sanglots longs des violons »", interpretation: "Les sonorités prolongent la plainte.", keywords: ["allitération","musicalité","verlaine","mélancolie"] },
      { procede: "Comparaison", citation: "« Pareil à la feuille morte »", interpretation: "Le sujet se dit emporté par le temps.", keywords: ["comparaison","automne","temps","destin"] },
      { procede: "Registre lyrique", citation: "« je me souviens ... je pleure »", interpretation: "L'expression du moi structure le poème.", keywords: ["lyrique","souvenir","tristesse","poésie"] }
    ]
  },
  {
    id: "GT-975",
    titre: "Modernité de Zone [Série 21]",
    auteur: "Apollinaire",
    oeuvre: "Alcools",
    genre: "Poésie",
    diff: 1,
    texte: `A la fin tu es las de ce monde ancien. Bergère ô tour Eiffel le troupeau des ponts bêle ce matin. Tu en as assez de vivre dans l'antiquité grecque et romaine. Ici même les automobiles ont l'air d'être anciennes. La religion seule est restée toute neuve, la religion est restée simple comme les hangars de Port-Aviation. Seul en Europe tu n'es pas antique ô Christianisme. Et toi que les fenêtres observent, la honte te retient d'entrer dans une église et de t'y confesser ce matin.`,
    contexte: "Poétique de la modernité urbaine.",
    attendus: [
      { procede: "Apostrophe", citation: "« Bergère ô tour Eiffel »", interpretation: "L'image mêle tradition pastorale et ville moderne.", keywords: ["apostrophe","tour eiffel","modernité","apollinaire"] },
      { procede: "Antithèse", citation: "« monde ancien » / « moderne »", interpretation: "Le poème se construit sur une tension temporelle.", keywords: ["antithèse","ancien","moderne","avant-garde"] },
      { procede: "Vers libre", citation: "« A la fin tu es las de ce monde ancien »", interpretation: "L'absence de cadre métrique accompagne la mobilité du regard.", keywords: ["vers libre","rythme","montage","alcools"] }
    ]
  },
  {
    id: "GT-976",
    titre: "Incipit provincial [Série 21]",
    auteur: "Stendhal",
    oeuvre: "Le Rouge et le Noir",
    genre: "Roman",
    diff: 2,
    texte: `La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure.`,
    contexte: "Ouverture réaliste et ironique de la province.",
    attendus: [
      { procede: "Cadre", citation: "« La petite ville de Verrières »", interpretation: "L'incipit pose un espace social précis.", keywords: ["cadre","province","stendhal","réalisme"] },
      { procede: "Lexique mélioratif", citation: "« La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure. »", interpretation: "Le positif prépare une lecture critique.", keywords: ["lexique","ironie","bourgeoisie","roman"] },
      { procede: "Attente", citation: "« La petite ville de Verrières peut passer pour l'une des plus jolies de la Franche-Comté. Ses maisons blanches, avec leurs toits pointus de tuiles rouges, s'étendent sur la pente d'une colline, dont de vigoureux bouquets de châtaigniers marquent les moindres sinuosités. Le Doubs coule à quelques centaines de pieds au-dessous de ses fortifications, bâties jadis par les Espagnols. Verrières est abritée du côté du nord par une haute montagne, branche du Jura. Au premier aspect, le voyageur est frappé de cette propreté bourgeoise, de cet air d'ordre, et de ce mélange d'industrie et de verdure. »", interpretation: "La promesse initiale sera démentie par le récit.", keywords: ["attente","promesse","narrateur","destin"] }
    ]
  },
  {
    id: "GT-977",
    titre: "Entrée de Charles [Série 21]",
    auteur: "Flaubert",
    oeuvre: "Madame Bovary",
    genre: "Roman",
    diff: 3,
    texte: `Nous étions à l'étude, quand le proviseur entra, suivi d'un nouveau habillé en bourgeois et d'un garçon de classe qui portait un grand pupitre. Ceux qui dormaient se réveillèrent, et chacun se leva comme surpris dans son travail. Le proviseur nous fit signe de nous rasseoir; puis, se tournant vers le maître d'études: « Monsieur Roger, lui dit-il, voici un élève que je vous recommande. » Resté dans l'angle, derrière la porte, si bien qu'on l'apercevait à peine, le nouveau était un gars de la campagne, embarrassé par les regards.`,
    contexte: "Scène d'entrée et de maladresse sociale.",
    attendus: [
      { procede: "Focalisation", citation: "« Nous étions à l'étude »", interpretation: "Le point de vue collectif installe la scène.", keywords: ["focalisation","collectif","flaubert","classe"] },
      { procede: "Réalisme social", citation: "« habillé en bourgeois »", interpretation: "Le vêtement marque immédiatement la position sociale.", keywords: ["réalisme","social","école","roman"] },
      { procede: "Caractérisation", citation: "« le nouveau était un gars de la campagne »", interpretation: "L'origine rurale prépare l'inadaptation.", keywords: ["caractérisation","charles","inadaptation","bovary"] }
    ]
  },
  {
    id: "GT-978",
    titre: "Nuit de Germinal [Série 21]",
    auteur: "Zola",
    oeuvre: "Germinal",
    genre: "Roman",
    diff: 2,
    texte: `Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucune ombre d'arbre ne tachait le ciel; le pavé se déroulait avec la rectitude d'une jetée, au milieu des ténèbres.`,
    contexte: "Incipit naturaliste d'une marche vers la mine.",
    attendus: [
      { procede: "Métaphore", citation: "« rafales larges comme sur une mer »", interpretation: "La plaine devient un espace hostile et océanique.", keywords: ["métaphore","paysage","zola","naturalisme"] },
      { procede: "Champ lexical", citation: "« Dans la plaine rase, sous la nuit sans étoiles, d'une obscurité et d'une épaisseur d'encre, un homme suivait seul la grande route de Marchiennes à Montsou, dix kilomètres de pavé coupant tout droit, à travers les champs de betteraves. Il n'avait la sensation de l'immense horizon plat que par les souffles du vent de mars, des rafales larges comme sur une mer, glacées d'avoir balayé des lieues de marais et de terres nues. Aucune ombre d'arbre ne tachait le ciel; le pavé se déroulait avec la rectitude d'une jetée, au milieu des ténèbres. »", interpretation: "La noirceur annonce la violence sociale.", keywords: ["champ lexical","noir","mine","drame"] },
      { procede: "Focalisation externe", citation: "« un homme suivait seul »", interpretation: "L'anonymat initial universalise la condition ouvrière.", keywords: ["focalisation","anonymat","ouvrier","roman"] }
    ]
  },
  {
    id: "GT-979",
    titre: "Armée en déroute [Série 21]",
    auteur: "Maupassant",
    oeuvre: "Boule de suif",
    genre: "Roman",
    diff: 2,
    texte: `Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes, noirs, barbus, sales, harassés, marchaient d'un air abattu, sans drapeau, sans régiment. Tous semblaient accablés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude, et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait des mobilisés paisibles, des francs-tireurs de parade, et des soldats vaincus que le hasard poussait encore.`,
    contexte: "Ouverture de guerre et de désordre collectif.",
    attendus: [
      { procede: "Accumulation", citation: "« noirs, barbus, sales, harassés »", interpretation: "L'énumération matérialise l'épuisement.", keywords: ["accumulation","guerre","épuisement","maupassant"] },
      { procede: "Description", citation: "« sans drapeau, sans régiment »", interpretation: "La défaite se lit dans la disparition des signes militaires.", keywords: ["description","défaite","armée","réalisme"] },
      { procede: "Antithèse", citation: "« Pendant plusieurs jours de suite des lambeaux d'armée en déroute avaient traversé la ville. Ce n'était point de la troupe, mais des hordes débandées. Les hommes, noirs, barbus, sales, harassés, marchaient d'un air abattu, sans drapeau, sans régiment. Tous semblaient accablés, incapables d'une pensée ou d'une résolution, marchant seulement par habitude, et tombant de fatigue sitôt qu'ils s'arrêtaient. On voyait des mobilisés paisibles, des francs-tireurs de parade, et des soldats vaincus que le hasard poussait encore. »", interpretation: "Le texte montre la volatilité des foules en guerre.", keywords: ["antithèse","foule","instabilité","histoire"] }
    ]
  },
  {
    id: "GT-980",
    titre: "Maison Vauquer [Série 21]",
    auteur: "Balzac",
    oeuvre: "Le Père Goriot",
    genre: "Roman",
    diff: 3,
    texte: `Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux. Depuis trente ans, n'y a-t-il jamais été vu de jeune personne; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. En 1819, époque où commence ce drame, il s'y trouvait pourtant une pauvre jeune fille.`,
    contexte: "Incipit réaliste d'un microcosme social parisien.",
    attendus: [
      { procede: "Précision", citation: "« rue Neuve-Sainte-Geneviève »", interpretation: "Le détail topographique ancre le récit dans le réel.", keywords: ["réalisme","paris","topographie","balzac"] },
      { procede: "Ironie", citation: "« Madame Vauquer, née de Conflans, est une vieille femme qui, depuis quarante ans, tient à Paris une pension bourgeoise établie rue Neuve-Sainte-Geneviève, entre le quartier latin et le faubourg Saint-Marceau. Cette pension, connue sous le nom de Maison Vauquer, admet également des hommes et des femmes, jeunes ou vieux. Depuis trente ans, n'y a-t-il jamais été vu de jeune personne; et pour qu'un jeune homme y demeure, il faut que sa famille lui fasse une bien modique pension. En 1819, époque où commence ce drame, il s'y trouvait pourtant une pauvre jeune fille. »", interpretation: "La formule valorisante suggère en creux la médiocrité.", keywords: ["ironie","narrateur","milieu","société"] },
      { procede: "Annonce", citation: "« époque où commence ce drame »", interpretation: "Le narrateur prépare une trajectoire tragique.", keywords: ["annonce","drame","destin","roman"] }
    ]
  },
  {
    id: "GT-981",
    titre: "Marche vers la tombe [Série 21]",
    auteur: "Hugo",
    oeuvre: "Les Contemplations",
    genre: "Poésie",
    diff: 3,
    texte: `Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur.`,
    contexte: "Élégie du deuil filial.",
    attendus: [
      { procede: "Progression", citation: "« Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur. »", interpretation: "La marche géographique devient parcours intérieur.", keywords: ["progression","deuil","hugo","élégie"] },
      { procede: "Antithèse", citation: "« Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai. Vois-tu, je sais que tu m'attends. J'irai par la forêt, j'irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, sans rien voir au dehors, sans entendre aucun bruit, seul, inconnu, le dos courbé, les mains croisées, triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l'or du soir qui tombe, et quand j'arriverai, je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur. »", interpretation: "La douleur annule les repères du monde.", keywords: ["antithèse","douleur","intériorité","lyrique"] },
      { procede: "Chute", citation: "« sur ta tombe »", interpretation: "La destination funèbre reconfigure tout le poème.", keywords: ["chute","tombe","émotion","poésie"] }
    ]
  },
  {
    id: "GT-982",
    titre: "Allégorie de l’albatros [Série 21]",
    auteur: "Baudelaire",
    oeuvre: "Les Fleurs du mal",
    genre: "Poésie",
    diff: 2,
    texte: `Souvent, pour s'amuser, les hommes d'équipage prennent des albatros, vastes oiseaux des mers, qui suivent, indolents compagnons de voyage, le navire glissant sur les gouffres amers. A peine les ont-ils déposés sur les planches, que ces rois de l'azur, maladroits et honteux, laissent piteusement leurs grandes ailes blanches comme des avirons traîner à côté d'eux. Ce voyageur ailé, comme il est gauche et veule! Lui, naguère si beau, qu'il est comique et laid! Le Poète est semblable au prince des nuées.`,
    contexte: "Allégorie du poète inadapté au monde social.",
    attendus: [
      { procede: "Allégorie", citation: "« Le Poète est semblable au prince des nuées »", interpretation: "L'albatros figure la condition du créateur.", keywords: ["allégorie","poète","société","baudelaire"] },
      { procede: "Antithèse", citation: "« t-ils déposés sur les planches, que ces rois de l'azur, maladroits et honte »", interpretation: "La grandeur chute dans le ridicule terrestre.", keywords: ["antithèse","sublime","ridicule","modernité"] },
      { procede: "Ironie", citation: "« pour s'amuser »", interpretation: "La cruauté collective est banalisée par le divertissement.", keywords: ["ironie","cruauté","foule","symbolisme"] }
    ]
  },
  {
    id: "GT-983",
    titre: "Chants désespérés [Série 21]",
    auteur: "Musset",
    oeuvre: "La Nuit de mai",
    genre: "Poésie",
    diff: 3,
    texte: `Poète, prends ton luth et me donne un baiser; la fleur de l'églantier sent ses bourgeons éclore, le printemps naît ce soir, les vents vont s'embraser. Les plus désespérés sont les chants les plus beaux, et j'en sais d'immortels qui sont de purs sanglots. Lorsque le pélican, lassé d'un long voyage, retourne à ses roseaux, ses petits affamés courent sur le rivage en le voyant au loin s'abattre sur les eaux. Ainsi le poète nourrit son chant de sa propre blessure, et la douleur devient musique.`,
    contexte: "Poème dialogué sur la création née de la souffrance.",
    attendus: [
      { procede: "Maxime", citation: "« Les plus désespérés sont les chants les plus beaux »", interpretation: "La formule fait de la douleur une source esthétique.", keywords: ["maxime","désespoir","beauté","musset"] },
      { procede: "Symbole", citation: "« le pélican »", interpretation: "L'oiseau représente le sacrifice du poète.", keywords: ["symbole","pélican","sacrifice","lyrisme"] },
      { procede: "Dialogue", citation: "« Poète, prends ton luth »", interpretation: "L'échange Muse/Poète dramatise l'inspiration.", keywords: ["dialogue","muse","poète","création"] }
    ]
  },
  {
    id: "GT-984",
    titre: "Stratégie de Merteuil [Série 21]",
    auteur: "Laclos",
    oeuvre: "Les Liaisons dangereuses",
    genre: "Roman",
    diff: 1,
    texte: `Vous voilà donc bien heureux de votre dernière conquête! Vous m'écrivez trois pages pour me vanter une paysanne. J'en ris encore. Croyez-vous me faire envie? Je connais vos ruses. Vous voulez me piquer, me faire croire que vous n'avez plus besoin de moi. D'ailleurs, ce n'est pas Cécile qui m'intéresse; c'est vous. Je veux savoir si vous oserez exécuter le plan que nous avons formé. Préférez-vous la vertu de Mme de Tourvel à la gloire de me plaire? Choisissez. Si vous hésitez, je comprendrai que vous avez faibli, et je saurai me venger.`,
    contexte: "Lettre de manipulation dans le roman libertin.",
    attendus: [
      { procede: "Registre épistolaire", citation: "« Vous m'écrivez trois pages »", interpretation: "La forme lettre sert la stratégie psychologique.", keywords: ["épistolaire","lettre","laclos","manipulation"] },
      { procede: "Ironie", citation: "« J'en ris encore »", interpretation: "La moquerie masque une volonté de domination.", keywords: ["ironie","merteuil","pouvoir","stratégie"] },
      { procede: "Antithèse", citation: "« vertu de Mme de Tourvel » / « gloire de me plaire »", interpretation: "Le conflit oppose morale et libertinage.", keywords: ["antithèse","vertu","séduction","libertinage"] }
    ]
  },
  {
    id: "GT-985",
    titre: "Dialogue du Neveu [Série 21]",
    auteur: "Diderot",
    oeuvre: "Le Neveu de Rameau",
    genre: "Idées",
    diff: 3,
    texte: `Je ne connais pas de plus grand charlatan que celui qui prétend enseigner ce qu'il ne sait pas. Le monde est plein de ces pédants qui récitent des maximes et ne les pratiquent point. Ils ont l'air grave, le ton sentencieux, et l'on les écoute; mais suivez-les chez eux, vous les verrez mentir, voler, tricher, se livrer à toutes les turpitudes qu'ils condamnent en public. Le Neveu rit de tout cela: « Morale! c'est le masque du faible devant le fort. » Je lui réponds que sans morale, la société tombe en ruine. Le dialogue ne tranche pas; il oblige à penser.`,
    contexte: "Satire philosophique de l’hypocrisie sociale.",
    attendus: [
      { procede: "Ironie", citation: "« l'air grave, le ton sentencieux »", interpretation: "Le portrait dénonce les faux moralistes.", keywords: ["ironie","pédants","hypocrisie","diderot"] },
      { procede: "Antithèse", citation: "« sans morale, la société tombe » / « Morale! c'est le masque »", interpretation: "Le texte confronte deux conceptions irréconciliables.", keywords: ["antithèse","morale","cynisme","dialogue"] },
      { procede: "Registre argumentatif", citation: "« Le dialogue ne tranche pas »", interpretation: "La pensée progresse par confrontation des voix.", keywords: ["argumentatif","débat","philosophie","lumières"] }
    ]
  },
  {
    id: "GT-986",
    titre: "Mal du siècle [Série 21]",
    auteur: "Chateaubriand",
    oeuvre: "René",
    genre: "Roman",
    diff: 3,
    texte: `Les solitudes me parlent une langue que je comprends; les grands bois, les montagnes, les mers désertes me rendent ce que les hommes m'ont pris. J'ai passé ma jeunesse à fuir les villes, à chercher des lieux où le vent souffle sans témoin, où l'on peut pleurer sans ridicule. Amélie, ma sœur, partageait autrefois ces errances; mais le monde a séparé nos destins, et je reste seul avec mon mal du siècle, ce vague à l'âme qui consume sans éclat. Les ruines, les tombeaux, les crépuscules m'attirent: je ne cherche pas le bonheur, je cherche une émotion forte.`,
    contexte: "Confession romantique et solitude existentielle.",
    attendus: [
      { procede: "Personnification", citation: "« Les solitudes me parlent »", interpretation: "La nature devient interlocutrice du moi.", keywords: ["personnification","nature","romantisme","rené"] },
      { procede: "Registre lyrique", citation: "« ce vague à l'âme »", interpretation: "Le texte exprime la crise intime du sujet romantique.", keywords: ["lyrique","mal du siècle","subjectivité","chateaubriand"] },
      { procede: "Antithèse", citation: "« Je ne cherche pas le bonheur » / « une émotion forte »", interpretation: "Le héros refuse la modération bourgeoise.", keywords: ["antithèse","bonheur","intensité","roman"] }
    ]
  },
  {
    id: "GT-987",
    titre: "Passion à la cour [Série 21]",
    auteur: "Lafayette",
    oeuvre: "La Princesse de Clèves",
    genre: "Roman",
    diff: 1,
    texte: `La cour était alors dans une magnificence qu'on n'a jamais vue depuis. L'ambition et la galanterie régnaient en même temps et occupaient également les esprits; l'un et l'autre trouvaient souvent des moyens de se concilier, et l'on ne savait lequel emportait l'avantage. Mme de Clèves, jeune, belle, et mariée au prince de Clèves, ne connaissait pas encore la violence de la passion. Elle croyait que l'honnêteté suffisait à régler la conduite. Mais le duc de Nemours parut: il était de ces hommes que la nature semble avoir formés pour se faire aimer.`,
    contexte: "Exposition du roman de passion classique.",
    attendus: [
      { procede: "Tableau social", citation: "« L'ambition et la galanterie régnaient »", interpretation: "Le cadre de cour organise les comportements.", keywords: ["cour","mœurs","galanterie","lafayette"] },
      { procede: "Antithèse", citation: "« Elle croyait que l'honnêteté suffisait à régler la conduite »", interpretation: "Le conflit moral est lancé dès l’exposition.", keywords: ["antithèse","vertu","passion","roman"] },
      { procede: "Caractérisation", citation: "« formés pour se faire aimer »", interpretation: "Nemours apparaît comme type du séducteur.", keywords: ["caractérisation","nemours","désir","classicisme"] }
    ]
  }
  ]
};
