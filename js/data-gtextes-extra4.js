/* Grands textes — lot 5 (GT-101 → GT-120) · fusion au chargement */
const GRANDS_TEXTES_EXTRA4 = [
  {
    id: "GT-101",
    titre: "Comme on voit sur la branche",
    auteur: "Ronsard",
    oeuvre: "Amours (1552)",
    genre: "Poésie",
    diff: 1,
    texte: `Comme on voit sur la branche au mois de mai … Deux rosisons pareils, que le ciel lui a peints ;`,
    contexte: "Sonnet de la Pléiade — métaphore de la jeunesse et du temps qui passe.",
    attendus: [
      { procede: "Comparaison", citation: "« Comme on voit sur la branche »", interpretation: "La comparaison « Comme on voit sur la branche… La rose » établit un rapprochement explicite : Ronsard facilite la visualisation de la scène et rend sonnet de la pléiade plus perceptible.", keywords: ["comparaison","comme","rose","branche","beauté","temps"] },
      { procede: "Métaphore", citation: "« mois de mai … Deux rosisons pareils, que le ciel lui a peints ; »", interpretation: "En transposant le sens de « La rose en sa beauté, tenant lieu de son teint », Ronsard métaphorise la scène ; le lecteur condense une idée complexe en une image frappante.", keywords: ["métaphore","rose","teint","beauté","nature","corps"] },
      { procede: "Hyperbole", citation: "« mois de mai … Deux rosisons pareils, que le ciel lui a peints ; »", interpretation: "En exagérant « la fleur des fleurs », Ronsard use de l'hyperbole pour souligner la métaphore de la jeunesse et du temps qui passe.", keywords: ["hyperbole","fleur","belle","exag","éloge","superlat"] },
      { procede: "Registre lyrique", citation: "« Comme on voit sur la branche »", interpretation: "Registre lyrique: la scène exprime une subjectivité intime et des émotions personnelles; « Comme on voit sur la branche » concentre cette coloration de la métaphore de la jeunesse et du temps qui passe.", keywords: ["lyrique","amour","beauté","pléiade","célébr","tradition"] },
      { procede: "Sonnet", citation: "« mois de mai … Deux rosisons pareils, que le ciel lui a peints ; »", interpretation: "Sonnet: la structure en quatrains et tercets organise de la métaphore de la jeunesse et du temps qui passe et permet un retournement au dernier tercet.", keywords: ["sonnet","forme","fixe","classique","contrainte","éloge"] }
    ]
  },
  {
    id: "GT-102",
    titre: "France, mère des arts",
    auteur: "Joachim du Bellay",
    oeuvre: "Les Regrets (1558)",
    genre: "Poésie",
    diff: 2,
    texte: `France, mère des arts, des armes et des lois, … Qui parlent hautement en langue francoise.`,
    contexte: "Ode à la patrie — humanisme, fierté nationale, langue française.",
    attendus: [
      { procede: "Apostrophe", citation: "« France, mère des arts »", interpretation: "En s'adressant directement (« France, mère des arts »), le locuteur use de l'apostrophe pour implique le lecteur ou un destinataire absent.", keywords: ["apostrophe","france","mère","patriot","human","personnif"] },
      { procede: "Métaphore", citation: "« mère des arts, des armes et des lois »", interpretation: "Par la métaphore (« mère », « arts », « armes », « lois »), le réel est détourné : Joachim du Bellay condense une idée complexe en une image frappante tout en ancrant ode à la patrie.", keywords: ["métaphore","mère","arts","civilis","nourric","filée"] },
      { procede: "Anaphore", citation: "« arts, des armes et des lois, … Qui parlent hautement en langue francoise. »", interpretation: "L'anaphore sur « Bénis tes fils, bénis tes filles » martèle une forme répétée : l'insistance martèle l'idée directrice et imprime un rythme obsédant propre à Joachim du Bellay.", keywords: ["anaphore","bénis","répét","patrie","fils","filles"] },
      { procede: "Registre lyrique", citation: "« France, mère »", interpretation: "Registre lyrique: la scène exprime une subjectivité intime et des émotions personnelles; « France, mère » concentre cette coloration de l'humanisme.", keywords: ["lyrique","patriot","langue","pays","émotion","amour"] },
      { procede: "Champ lexical", citation: "« arts, des armes et des lois, … Qui parlent hautement en langue francoise. »", interpretation: "Les occurrences « arts », « armes », « lois », « douceur » composent un champ lexical cohérent autour de ode à la patrie ; cette convergence insiste sur l'idée centrale par résonance lexicale et guide la lecture de Joachim du Bellay.", keywords: ["champ lexical","arts","lois","douceur","civilis","human"] }
    ]
  },
  {
    id: "GT-103",
    titre: "Le Cid — devoir de Rodrigue",
    auteur: "Corneille",
    oeuvre: "Le Cid (1637)",
    genre: "Tragédie",
    diff: 2,
    texte: `C'est bien fait ! je suis lâche, et je n'ai plus de cœur. … Je devrais les remettre pour ma querelle.`,
    contexte: "Rodrigue déchiré entre vengeance et amour — conflit tragique.",
    attendus: [
      { procede: "Antithèse", citation: "« ma querelle » / « pour ma querelle »", interpretation: "Antithèse: « ma querelle » s'oppose à « pour ma querelle ». Cette tension structure le sens et oblige le lecteur à mesurer l'écart entre les deux idées.", keywords: ["antithèse","querelle","honneur","amour","lâche","contraste"] },
      { procede: "Registre tragique", citation: "« je suis lâche »", interpretation: "Registre tragique: la scène installe une fatalité qui dépasse les personnages et provoque terreur ou pitié; « je suis lâche » concentre cette coloration du conflit tragique.", keywords: ["tragique","lâche","conflit","pit","terreur","intérieur"] },
      { procede: "Question rhétorique", citation: "« je devrais les remettre »", interpretation: "Question rhétorique repérée dans « je devrais les remettre »: l'interrogation feinte structure l'argumentation de conflit tragique.", keywords: ["question","rhétor","doute","moral","renoncer","interrog"] },
      { procede: "Champ lexical", citation: "« … Je devrais les remettre pour ma querelle. »", interpretation: "Les mots « lâche », « armes », « querelle » appartiennent au même champ sémantique. Leur convergence renforce conflit tragique et structure l'unité thématique du passage.", keywords: ["champ lexical","lâche","armes","honneur","combat","héroïq"] },
      { procede: "Alexandrin", citation: "« lâche, et je n'ai plus de cœur. »", interpretation: "L'alexandrin repérée dans le vers en douze syllabes retarde ou brise le rythme attendu; le découpage du vers sert rodrigue déchiré entre vengeance et amour dans Le Cid.", keywords: ["alexandrin","vers","tragique","classique","dignité","douze"] }
    ]
  },
  {
    id: "GT-104",
    titre: "Iphigénie — sacrifice",
    auteur: "Racine",
    oeuvre: "Iphigénie (1674)",
    genre: "Tragédie",
    diff: 3,
    texte: `Quoi ! je ne saurais voir Agamemnon en père, … Qu'ai-je donc fait aux dieux, qu'ai-je fait à la Grèce ?`,
    contexte: "Agamemnon face au sacrifice de sa fille — tragédie mythologique.",
    attendus: [
      { procede: "Apostrophe", citation: "« Quoi ! »", interpretation: "En s'adressant directement (« Quoi ! »), le locuteur use de l'apostrophe pour implique le lecteur ou un destinataire absent.", keywords: ["apostrophe","quoi","indign","exclam","lyrique","tragique"] },
      { procede: "Antithèse", citation: "« père, … Qu'ai-je donc fait aux dieux, qu'ai-je fait à la Grèce ? »", interpretation: "Antithèse entre « en père » et « pour toute ma famille »: le contraste met en relief deux pôles opposés et accentue tragédie mythologique.", keywords: ["antithèse","père","famille","devoir","chef","conflit"] },
      { procede: "Question rhétorique", citation: "« Qu'ai-je donc fait aux dieux »", interpretation: "Question rhétorique repérée dans « Qu'ai-je donc fait aux dieux »: l'interrogation feinte structure l'argumentation de tragédie mythologique.", keywords: ["question","rhétor","dieu","désesp","pathét","injust"] },
      { procede: "Registre tragique", citation: "« père, … Qu'ai-je donc fait aux dieux, qu'ai-je fait à la Grèce ? »", interpretation: "À travers « sacrifice », le registre tragique domine et installe une fatalité qui dépasse les personnages et provoque terreur ou pitié.", keywords: ["tragique","fatal","dieu","impuiss","sacrifice","héros"] },
      { procede: "Anaphore", citation: "« qu'ai-je fait… qu'ai-je fait »", interpretation: "L'anaphore (« qu'ai-je fait… qu'ai-je fait ») fonctionne comme un leitmotiv : elle martèle l'idée directrice et renforce la cohésion du passage.", keywords: ["anaphore","fait","répét","désesp","martel","insiste"] }
    ]
  },
  {
    id: "GT-105",
    titre: "Oh ! chants d'autrefois",
    auteur: "Victor Hugo",
    oeuvre: "Les Feuilles d'automne (1831)",
    genre: "Poésie",
    diff: 2,
    texte: `Oh ! chants d'autrefois, oh ! douces voix d'autrefois, … Comme un souffle d'été qui passe dans les fleurs.`,
    contexte: "Nostalgie du passé — lyrisme romantique, appel aux souvenirs.",
    attendus: [
      { procede: "Anaphore", citation: "« Oh ! chants… oh ! douces voix »", interpretation: "La reprise de « chants », « douces », « voix » en tête de segment (anaphore) martèle l'idée directrice et concentre l'attention du lecteur sur nostalgie du passé.", keywords: ["anaphore","oh","chants","répét","souvenir","appel"] },
      { procede: "Comparaison", citation: "« d'autrefois, … Comme un souffle d'été qui passe dans les fleurs. »", interpretation: "Comparaison repérée dans « Comme un chant de matin… Comme un souffle d'été »: le parallèle rend lyrisme romantique plus concret et guide l'imaginaire du lecteur.", keywords: ["comparaison","comme","matin","été","nature","mélancol"] },
      { procede: "Registre lyrique", citation: "« d'autrefois, … Comme un souffle d'été qui passe dans les fleurs. »", interpretation: "Registre lyrique: par « Revenez sur mon âme », Victor Hugo exprime une subjectivité intime et des émotions personnelles — tonalité dominante de Les Feuilles d'automne.", keywords: ["lyrique","je","âme","passé","subjectiv","romant"] },
      { procede: "Champ lexical", citation: "« d'autrefois, … Comme un souffle d'été qui passe dans les fleurs. »", interpretation: "Victor Hugo densifie le passage avec un champ lexical centré sur chants (« chants », « voix », « souffle »), ce qui insiste sur l'idée centrale par résonance lexicale et ancre le thème de nostalgie du passé.", keywords: ["champ lexical","chants","voix","cœur","souffle","musical"] },
      { procede: "Apostrophe", citation: "« Oh ! chants d'autrefois »", interpretation: "En s'adressant directement (« Oh ! chants d'autrefois »), le locuteur use de l'apostrophe pour implique le lecteur ou un destinataire absent.", keywords: ["apostrophe","chants","autrefois","invoqu","personnif","passé"] }
    ]
  },
  {
    id: "GT-106",
    titre: "Mon rêve familier",
    auteur: "Paul Verlaine",
    oeuvre: "Poèmes saturniens (1866)",
    genre: "Poésie",
    diff: 1,
    texte: `C'est la fuite de tout … Où la destinée est morte.`,
    contexte: "Poème musical — rêve amoureux, vers courts et assonances.",
    attendus: [
      { procede: "Assonance", citation: "« … Où la destinée est morte. »", interpretation: "L'assonance autour de « courts » crée une musicalité du vers ou de la phrase : le son renforce l'atmosphère du poème et soutient poème musical.", keywords: ["assonance","musical","verlaine","suggest","vers","court"] },
      { procede: "Métaphore", citation: "« la destinée est morte »", interpretation: "La métaphore « la destinée est morte » rapproche deux réalités sans outil comparatif: l'image condense rêve amoureux en une vision poétique forte.", keywords: ["métaphore","destin","morte","rêve","temps","suspend"] },
      { procede: "Champ lexical", citation: "« … Où la destinée est morte. »", interpretation: "Les occurrences « fuite », « repos », « route », « sans » composent un champ lexical cohérent autour de poème musical ; cette convergence insiste sur l'idée centrale par résonance lexicale et guide la lecture de Paul Verlaine.", keywords: ["champ lexical","fuite","repos","route","oniriq","calme"] },
      { procede: "Registre lyrique", citation: "« … Où la destinée est morte. »", interpretation: "À travers « Mon rêve familier », le registre lyrique domine et exprime une subjectivité intime et des émotions personnelles.", keywords: ["lyrique","rêve","intime","amour","subjectiv","familier"] },
      { procede: "Vers libre", citation: "« … Où la destinée est morte. »", interpretation: "Vers libre: « vers très courts » échappe à la métrique régulière. Paul Verlaine privilégie la liberté rythmique et la modernité de rêve amoureux.", keywords: ["vers libre","court","musical","verlaine","moderne","rythme"] }
    ]
  },
  {
    id: "GT-107",
    titre: "Cahier d'un retour au pays natal",
    auteur: "Aimé Césaire",
    oeuvre: "Cahier (1939)",
    genre: "Poésie",
    diff: 3,
    texte: `Au bout du petit matin, bourreau des cœurs et des chairs, … Sur le morne plaine mes désespoirs s'ancrent.`,
    contexte: "Poésie anticoloniale — révolte, identité, registre épique et lyrique.",
    attendus: [
      { procede: "Métaphore", citation: "« bourreau des cœurs et des chairs »", interpretation: "Par la métaphore (« bourreau », « chairs »), le réel est détourné : Aimé Césaire condense une idée complexe en une image frappante tout en ancrant poésie anticoloniale.", keywords: ["métaphore","bourreau","cœur","oppress","colonial","matin"] },
      { procede: "Personnification", citation: "« mes désespoirs s'ancrent »", interpretation: "En personnifiant « mes désespoirs s'ancrent », le texte rend la description plus vivante ; l'animation du non-humain sert poésie anticoloniale dans Cahier.", keywords: ["personnification","désesp","ancrent","souffr","plaine","figée"] },
      { procede: "Registre lyrique", citation: "« mes désespoirs »", interpretation: "Registre lyrique: « mes désespoirs » exprime une subjectivité intime et des émotions personnelles, au cœur du révolte.", keywords: ["lyrique","je","désesp","identité","anticolonial","subjectiv"] },
      { procede: "Champ lexical", citation: "« matin, bourreau des cœurs et des chairs, … Sur le morne plaine mes désespoirs s'ancrent. »", interpretation: "Autour de « bourreau » face à « désespoirs », le vocabulaire (« bourreau », « désespoirs », « morne », « plaine ») forme un réseau sémantique : le lecteur perçoit poésie anticoloniale par accumulation lexicale.", keywords: ["champ lexical","bourreau","désesp","morne","violence","révolte"] },
      { procede: "Registre épique", citation: "« matin, bourreau des cœurs et des chairs, … Sur le morne plaine mes désespoirs s'ancrent. »", interpretation: "Registre épique: « retour au pays natal » élève l'action au niveau du grand récit et exalte la scène, au cœur du révolte.", keywords: ["épique","retour","pays","identité","grandeur","quête"] }
    ]
  },
  {
    id: "GT-108",
    titre: "Femme noire",
    auteur: "Léopold Sédar Senghor",
    oeuvre: "Chants d'ombre (1945)",
    genre: "Poésie",
    diff: 2,
    texte: `Femme nue, femme noire … J'ai grandi à ton ombre ; la douceur de tes mains bandait mes yeux.`,
    contexte: "Négritude — célébration de la femme africaine, registre lyrique et épique.",
    attendus: [
      { procede: "Anaphore", citation: "« Femme nue, femme noire »", interpretation: "L'anaphore sur « Femme nue, femme noire » martèle une forme répétée : l'insistance martèle l'idée directrice et imprime un rythme obsédant propre à Léopold Sédar Senghor.", keywords: ["anaphore","femme","noire","répét","éloge","négritude"] },
      { procede: "Métaphore", citation: "« la douceur de tes mains bandait mes yeux. »", interpretation: "Par la métaphore (« couleur », « forme », « beauté »), le réel est détourné : Léopold Sédar Senghor condense une idée complexe en une image frappante tout en ancrant négritude.", keywords: ["métaphore","couleur","vie","beauté","identité","réhabil"] },
      { procede: "Registre lyrique", citation: "« J'ai grandi à ton ombre »", interpretation: "Registre lyrique: par « J'ai grandi à ton ombre », Léopold Sédar Senghor exprime une subjectivité intime et des émotions personnelles — tonalité dominante de Chants d'ombre.", keywords: ["lyrique","je","ombre","intime","mère","subjectiv"] },
      { procede: "Champ lexical", citation: "« la douceur de tes mains bandait mes yeux. »", interpretation: "Léopold Sédar Senghor densifie le passage avec un champ lexical centré sur douceur (« douceur », « beauté »), ce qui insiste sur l'idée centrale par résonance lexicale et ancre le thème de négritude.", keywords: ["champ lexical","douceur","beauté","vie","afrique","positif"] },
      { procede: "Énumération", citation: "« Femme nue, femme noire »", interpretation: "Énumération repérée dans « Femme nue, femme noire »: la liste multiplie les occurrences et renforce l'idée centrale de célébration de la femme africaine.", keywords: ["énumération","femme","nue","noire","éloge","liste"] }
    ]
  },
  {
    id: "GT-109",
    titre: "Mémoires d'Hadrien",
    auteur: "Marguerite Yourcenar",
    oeuvre: "Mémoires d'Hadrien (1951)",
    genre: "Roman",
    diff: 3,
    texte: `Les autres ne m'ont pas connu, ou du moins ne m'ont pas aimé. … Je suis resté seul avec moi-même, et avec ce monde que j'ai voulu comprendre.`,
    contexte: "Monologue intérieur d'Hadrien — réflexion sur le pouvoir et la mort.",
    attendus: [
      { procede: "Antithèse", citation: "« ne m'ont pas connu » / « ne m'ont pas aimé »", interpretation: "Antithèse entre « ne m'ont pas connu » et « ne m'ont pas aimé »: le contraste met en relief deux pôles opposés et accentue réflexion sur le pouvoir et la mort.", keywords: ["antithèse","connu","aimé","isolement","souverain","contraste"] },
      { procede: "Registre lyrique", citation: "« seul avec moi-même »", interpretation: "Registre lyrique: « seul avec moi-même » exprime une subjectivité intime et des émotions personnelles, au cœur du réflexion sur le pouvoir et la mort.", keywords: ["lyrique","je","seul","confession","méditat","exist"] },
      { procede: "Champ lexical", citation: "« moi-même, et avec ce monde que j'ai voulu comprendre. »", interpretation: "Marguerite Yourcenar densifie le passage avec un champ lexical centré sur seul (« seul », « comprendre », « monde »), ce qui insiste sur l'idée centrale par résonance lexicale et ancre le thème de monologue intérieur d'hadrien.", keywords: ["champ lexical","seul","comprend","monde","quête","philosoph"] }
    ]
  },
  {
    id: "GT-111",
    titre: "Eugénie Grandet — incipit",
    auteur: "Honoré de Balzac",
    oeuvre: "Eugénie Grandet (1833)",
    genre: "Roman",
    diff: 2,
    texte: `Sur certaines plateformes, une ville, et surtout une ville de province, est un monde à part, un monde plus moral que le monde social.`,
    contexte: "Roman réaliste — Saumur, avarice du père Grandet, vie provinciale.",
    attendus: [
      { procede: "Comparaison", citation: "« un monde à part »", interpretation: "La comparaison « un monde à part » établit un rapprochement explicite : Honoré de Balzac facilite la visualisation de la scène et rend roman réaliste plus perceptible.", keywords: ["comparaison","monde","province","distinct","balzac","réaliste"] },
      { procede: "Antithèse", citation: "« plus moral que le monde social »", interpretation: "Antithèse: « plus moral que le monde social » installe une opposition nette qui condense la tension dramatique ou argumentative du passage.", keywords: ["antithèse","moral","social","province","critique","paris"] },
      { procede: "Focalisation zéro", citation: "« Sur certaines plateformes »", interpretation: "Focalisation zéro repérée dans « Sur certaines plateformes »: le narrateur sait tout et guide le lecteur dans le saumur.", keywords: ["focalisation zéro","narrateur","cadre","descript","omnisc","réaliste"] },
      { procede: "Hyperbole", citation: "« un monde à part »", interpretation: "L'hyperbole « un monde à part » pousse l'expression au-delà du vraisemblable : Honoré de Balzac souligne l'intensité du ressenti pour marquer roman réaliste.", keywords: ["hyperbole","monde","province","enferm","exag","part"] },
      { procede: "Registre satirique", citation: "« plateformes, une ville, et surtout une ville de province, est un monde à part, un monde plus moral q »", interpretation: "À travers « plus moral », le texte bascule dans un registre satirique ; le lecteur est invité à critiquer les mœurs et les institutions par le rire, ce qui s'inscrit dans Eugénie Grandet.", keywords: ["satirique","moral","iron","province","balzac","dénonc"] }
    ]
  },
  {
    id: "GT-112",
    titre: "Hérodias — la lune",
    auteur: "Gustave Flaubert",
    oeuvre: "Trois Contes (1877)",
    genre: "Nouvelle",
    diff: 3,
    texte: `La lune montait au-dessus des montagnes opposées à Macheronte, et le nom de Jésus fit sonner les flèches des arcs sur les toits de toutes les forteresses.`,
    contexte: "Hérodias — atmosphère biblique, tension politique et religieuse.",
    attendus: [
      { procede: "Personnification", citation: "« le nom de Jésus fit sonner les flèches »", interpretation: "La personnification « le nom de Jésus fit sonner les flèches » dote un élément abstrait ou objectal de traits humains : Gustave Flaubert rend la description plus vivante et dynamise personnification.", keywords: ["personnification","nom","jésus","flèches","peur","tension"] },
      { procede: "Registre épique", citation: "« toits de toutes les forteresses »", interpretation: "Registre épique: « toits de toutes les forteresses » élève l'action au niveau du grand récit et exalte la scène, au cœur de l'atmosphère biblique.", keywords: ["épique","forteresse","grandeur","bibliq","polit","récit"] },
      { procede: "Focalisation zéro", citation: "« La lune montait »", interpretation: "Focalisation zéro repérée dans « La lune montait »: le narrateur sait tout et guide le lecteur dans l'atmosphère biblique.", keywords: ["focalisation zéro","narrateur","omnisc","visionn","scène","externe"] },
      { procede: "Champ lexical", citation: "« montagnes opposées à Macheronte, et le nom de Jésus fit sonner les flèches des arcs sur les toits de »", interpretation: "Le champ lexical repéré (« lune », « montagnes », « flèches », « forteresses ») enveloppe « lune » face à « montagnes » : les résonances entre ces lexies insiste sur l'idée centrale par résonance lexicale dans Trois Contes.", keywords: ["champ lexical","lune","montagne","flèche","forteresse","guerre"] },
      { procede: "Métaphore", citation: "« fit sonner les flèches »", interpretation: "La métaphore « fit sonner les flèches » rapproche deux domaines sémantiques : l'image condense une idée complexe en une image frappante et enrichit métaphore dans Trois Contes.", keywords: ["métaphore","sonner","flèche","signal","combat","symbol"] }
    ]
  },
  {
    id: "GT-115",
    titre: "Les Faux-monnayeurs — journal",
    auteur: "André Gide",
    oeuvre: "Les Faux-monnayeurs (1925)",
    genre: "Roman",
    diff: 3,
    texte: `Il faut laisser parler les personnages, et non pas le romancier. … Il faut les laisser agir, et non pas les expliquer.`,
    contexte: "Roman moderne — journal d'Édouard, théorie du roman.",
    attendus: [
      { procede: "Anaphore", citation: "« Il faut… Il faut »", interpretation: "L'anaphore (« Il faut… Il faut ») fonctionne comme un leitmotiv : elle martèle l'idée directrice et renforce la cohésion du passage.", keywords: ["anaphore","faut","répét","manifeste","esthét","roman"] },
      { procede: "Antithèse", citation: "« parler » / « expliquer »", interpretation: "Antithèse entre « parler » et « expliquer »: le contraste met en relief deux pôles opposés et accentue journal d'édouard.", keywords: ["antithèse","parler","expliquer","montrer","moderne","roman"] },
      { procede: "Registre didactique", citation: "« Il faut laisser parler »", interpretation: "Registre didactique: par « Il faut laisser parler », André Gide vise à instruire le lecteur et à transmettre une leçon morale ou intellectuelle — tonalité dominante de Les Faux-monnayeurs.", keywords: ["didact","parler","théorie","métafict","roman","gidien"] },
      { procede: "Parallélisme", citation: "« laisser parler… laisser agir »", interpretation: "Parallélisme: « laisser parler… laisser agir » reproduit une éclaire du syntaxique identique. La symétrie renforce journal d'édouard et crée un effet de martèlement.", keywords: ["parallélisme","laisser","parler","agir","aphor","structure"] }
    ]
  },
  {
    id: "GT-116",
    titre: "L'Assommoir — Gervaise au lavoir",
    auteur: "Émile Zola",
    oeuvre: "L'Assommoir (1877)",
    genre: "Roman naturaliste",
    diff: 2,
    texte: `Gervaise, les mains rouges, les bras nus, frottait avec une rage de vaincue. … L'eau lui éclaboussait la figure, et elle ne sentait plus rien.`,
    contexte: "Naturalisme zolien — misère ouvrière, corps épuisé.",
    attendus: [
      { procede: "Métaphore", citation: "« rage de vaincue »", interpretation: "La métaphore « rage de vaincue » rapproche deux domaines sémantiques : l'image condense une idée complexe en une image frappante et enrichit naturalisme zolien dans L'Assommoir.", keywords: ["métaphore","rage","vaincue","désesp","social","combat"] },
      { procede: "Registre pathétique", citation: "« elle ne sentait plus rien »", interpretation: "Registre pathétique: par « elle ne sentait plus rien », Émile Zola suscite la compassion et l'indignation face à la souffrance — tonalité dominante de L'Assommoir.", keywords: ["pathétique","sentait","misère","pit","anesth","gervaise"] },
      { procede: "Champ lexical", citation: "« figure, et elle ne sentait plus rien. »", interpretation: "Le champ lexical repéré (« mains », « rouges », « frottait ») enveloppe « mains rouges » face à « eau » : les résonances entre ces lexies insiste sur l'idée centrale par résonance lexicale dans L'Assommoir.", keywords: ["champ lexical","mains","eau","frott","travail","ouvrier"] },
      { procede: "Gradation", citation: "mains rouges → rage → ne sentait plus", interpretation: "Gradation : l'épuisement physique mène à l'anesthésie morale.", keywords: ["gradation","rouge","rage","épuis","anesth","moral"] }
    ]
  },
  {
    id: "GT-117",
    titre: "La Religieuse — Suzanne",
    auteur: "Diderot",
    oeuvre: "La Religieuse (1796)",
    genre: "Roman",
    diff: 3,
    texte: `Je ne sais si je suis une fille perdue ou une victime ; mais je sais que je suis malheureuse, et que je n'ai jamais mérité mon malheur.`,
    contexte: "Roman philosophique — oppression religieuse, registre pathétique.",
    attendus: [
      { procede: "Antithèse", citation: "« fille perdue » / « victime »", interpretation: "Antithèse entre « fille perdue » et « victime »: le contraste met en relief deux pôles opposés et accentue oppression religieuse.", keywords: ["antithèse","perdue","victime","culpab","innoc","contraste"] },
      { procede: "Registre pathétique", citation: "« je suis malheureuse »", interpretation: "À travers « je suis malheureuse », le registre pathétique domine et suscite la compassion et l'indignation face à la souffrance.", keywords: ["pathétique","malheureuse","pit","victime","couvent","souffr"] },
      { procede: "Litote", citation: "« jamais mérité mon malheur »", interpretation: "Litote : je ne mérite pas cette souffrance — innocence revendiquée.", keywords: ["litote","mérité","malheur","innoc","revend","souffr"] },
      { procede: "Champ lexical", citation: "« malheureuse, et que je n'ai jamais mérité mon malheur. »", interpretation: "Le champ lexical repéré (« malheureuse », « victime », « malheur ») enveloppe « malheureuse » face à « victime » : les résonances entre ces lexies insiste sur l'idée centrale par résonance lexicale dans La Religieuse.", keywords: ["champ lexical","malheur","victime","souffr","injust","institut"] }
    ]
  },
  {
    id: "GT-119",
    titre: "Les Mains sales — amour et engagement",
    auteur: "Jean-Paul Sartre",
    oeuvre: "Les Mains sales (1948)",
    genre: "Théâtre",
    diff: 3,
    texte: `Vous êtes jeune, vous devez aimer. … L'amour, c'est donner ce qu'on n'a pas à quelqu'un qui n'en veut pas.`,
    contexte: "Théâtre engagé — dilemme politique, amour et action.",
    attendus: [
      { procede: "Antithèse", citation: "« donner ce qu'on n'a pas » / « qui n'en veut pas »", interpretation: "Antithèse: « donner ce qu'on n'a pas » s'oppose à « qui n'en veut pas ». Cette tension structure le sens et oblige le lecteur à mesurer l'écart entre les deux idées.", keywords: ["antithèse","donner","veut","paradox","amour","exist"] },
      { procede: "Oxymore", citation: "« donner ce qu'on n'a pas »", interpretation: "Par « donner ce qu'on n'a pas », Jean-Paul Sartre crée un oxymore qui condense une contradiction vécue ; le lecteur perçoit la complexité de théâtre engagé.", keywords: ["oxymore","donner","impossible","paradox","amour","engage"] },
      { procede: "Registre didactique", citation: "« Vous devez aimer »", interpretation: "À travers « Vous devez aimer », le registre didactique domine et vise à instruire le lecteur et à transmettre une leçon morale ou intellectuelle.", keywords: ["didact","aimer","jeune","leçon","engage","théâtre"] },
      { procede: "Apostrophe", citation: "« Vous êtes jeune »", interpretation: "En s'adressant directement (« Vous êtes jeune »), le locuteur use de l'apostrophe pour implique le lecteur ou un destinataire absent.", keywords: ["apostrophe","jeune","interpelle","direct","sartre","théâtre"] }
    ]
  },
  {
    id: "GT-120",
    titre: "L'Hôte — Daru",
    auteur: "Albert Camus",
    oeuvre: "L'Exil et le royaume (1957)",
    genre: "Nouvelle",
    diff: 2,
    texte: `Daru regardait les deux hommes monter vers lui. … Il avançait devant, le fusil sur l'épaule, l'autre, les mains liées derrière le dos, marchait la tête haute.`,
    contexte: "Daru face à l'Arabe — dilemme moral, solitude, engagement.",
    attendus: [
      { procede: "Antithèse", citation: "« monter vers lui. »", interpretation: "Antithèse repérée dans « gendarme… l'autre, les mains liées »: deux termes ou idées s'opposent pour souligner dilemme moral.", keywords: ["antithèse","gendarme","prisonnier","tension","éthique","contraste"] },
      { procede: "Champ lexical", citation: "« devant, le fusil sur l'épaule, l'autre, les mains liées derrière le dos, marchait la tête haute. »", interpretation: "Les mots « fusil », « mains », « liées » appartiennent au même champ sémantique. Leur convergence renforce dilemme moral et structure l'unité thématique du passage.", keywords: ["champ lexical","fusil","liées","violence","contrainte","choix"] },
      { procede: "Registre tragique", citation: "« marchait la tête haute »", interpretation: "Registre tragique: « marchait la tête haute » installe une fatalité qui dépasse les personnages et provoque terreur ou pitié, au cœur du dilemme moral.", keywords: ["tragique","tête haute","dignité","pit","destin","prisonnier"] },
      { procede: "Métaphore", citation: "« monter vers lui »", interpretation: "La métaphore « monter vers lui » rapproche deux domaines sémantiques : l'image condense une idée complexe en une image frappante et enrichit daru face à l'arabe dans L'Exil et le royaume.", keywords: ["métaphore","monter","devoir","moral","éviter","spatial"] }
    ]
  }
];
if (typeof GRANDS_TEXTES !== 'undefined') {
  GRANDS_TEXTES.push(...GRANDS_TEXTES_EXTRA4);
}
