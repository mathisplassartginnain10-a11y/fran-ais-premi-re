/* ═══════════════════════════════════════════════════
   data-gtextes.js — 732 grands textes · repérage + interprétation
   ═══════════════════════════════════════════════════ */

const GRANDS_TEXTES = [
  {
    id: "GT-001",
    titre: "Chanson d'automne",
    auteur: "Verlaine",
    oeuvre: "Poèmes saturniens (1866)",
    genre: "Poésie",
    diff: 1,
    texte: `Les sanglots longs … Pareil à la feuille morte.`,
    contexte: "Poème lyrique en vers libres — mélancolie automnale, correspondances entre paysage et état d'âme.",
    attendus: [
      { procede: "Assonance", citation: "« Les sanglots longs »", interpretation: "L'assonance en [ɔ̃] relie « sanglots », « longs », « violons », « automne ». Cette répétition vocale grave imite la plainte des violons et installe une atmosphère mélancolique.", keywords: ["assonance","ɔ̃","voyelle","mélancol","plainte","violon","musical","automne","grave"] },
      { procede: "Enjambement", citation: "« … Pareil à la feuille morte. »", interpretation: "La phrase déborde d'un vers sur l'autre : le sujet « je » est emporté par le vent. L'enjambement brise le rythme attendu et traduit l'instabilité du poète, ballotté comme une feuille.", keywords: ["enjambement","vers","phrase","déborde","rythme","instab","vent","emport"] },
      { procede: "Comparaison", citation: "« Pareil à la / Feuille morte »", interpretation: "Comparaison explicite avec « pareil à » : le poète se compare à une feuille morte emportée par le vent. Il exprime son impuissance face au temps qui passe.", keywords: ["comparaison","pareil","feuille","morte","vent","impuiss","passage","temps"] },
      { procede: "Registre lyrique", citation: "« … Pareil à la feuille morte. »", interpretation: "Expression directe du « je » poétique et de sentiments intimes (souvenir, larmes, langueur). Le registre lyrique domine : subjectivité et mélancolie personnelle.", keywords: ["lyrique","je","sentiment","mélancol","subjectiv","pleure","souvenir","intime"] },
      { procede: "Champ lexical", citation: "« … Pareil à la feuille morte. »", interpretation: "Champ lexical de la mort, de la fin et de la tristesse : « morte », « automne », « blême », « pleure ». Ces mots construisent une atmosphère de déclin et de finitude.", keywords: ["champ lexical","mort","automne","trist","fin","déclin","blême","pleure"] },
      { procede: "Gradation", citation: "« … Pareil à la feuille morte. »", interpretation: "Gradation mélancolique : de la langueur au pleur, puis à l'effacement identitaire (feuille morte) — le spleen s'intensifie jusqu'à l'abandon total.", keywords: ["gradation","langueur","pleure","feuille","morte","mélancol","intens","spleen"] }
    ]
  },
  {
    id: "GT-002",
    titre: "Le Cid — Chimène",
    auteur: "Corneille",
    oeuvre: "Le Cid (1637)",
    genre: "Théâtre tragique",
    diff: 2,
    texte: `CHIMÈNE … Mais à peine on voit encor le chemin qu'on suit.`,
    contexte: "Scène d'amour impossible — Chimène aime Rodrigue mais doit venger son père tué par lui.",
    attendus: [
      { procede: "Litote", citation: "« … Mais à peine on voit encor le chemin qu'on suit. »", interpretation: "La litote dit moins pour faire entendre plus : « ne te hais point » signifie en réalité « je t'aime profondément ». Chimène masque sa passion par pudeur tragique.", keywords: ["litote","moins","aime","hais","pudeur","passion","masque","intens"] },
      { procede: "Oxymore", citation: "« … Mais à peine on voit encor le chemin qu'on suit. »", interpretation: "L'oxymore unit « obscure » et « clarté » dans un même groupe nominal. Corneille exprime l'ambiguïté d'une nuit étoilée qui éclaire sans suffire — image de la situation tragique de Chimène.", keywords: ["oxymore","obscure","clarté","contradict","ambigu","étoile","nuit"] },
      { procede: "Antithèse", citation: "« … Mais à peine on voit encor le chemin qu'on suit. »", interpretation: "Antithèse entre l'amour (« ne te hais point ») et le devoir (« ne puis te pardonner »). Deux sentiments opposés se heurtent et structurent le conflit intérieur du personnage.", keywords: ["antithèse","amour","devoir","oppos","pardonner","hais","conflit","contraste"] },
      { procede: "Registre tragique", citation: "« … Mais à peine on voit encor le chemin qu'on suit. »", interpretation: "Registre tragique : Chimène est prise entre passion amoureuse et devoir familial, soumise à une fatalité morale qu'elle ne peut contourner. Terreur et pitié chez le spectateur.", keywords: ["tragique","honneur","devoir","fatal","passion","pit","terreur","conflit"] },
      { procede: "Métaphore", citation: "« … Mais à peine on voit encor le chemin qu'on suit. »", interpretation: "La lumière des étoiles est présentée comme une clarté obscure — métaphore de la situation : tout est visible et pourtant le chemin reste incertain, comme l'avenir des amants.", keywords: ["métaphore","lumière","étoile","clarté","chemin","incert","image"] }
    ]
  },
  {
    id: "GT-003",
    titre: "Phèdre — monologue",
    auteur: "Racine",
    oeuvre: "Phèdre (1677)",
    genre: "Tragédie",
    diff: 2,
    texte: `PHÈDRE … Ô dieux ! que n'ai-je au fond des mers une retraite !`,
    contexte: "Phèdre avoue sa passion coupable pour Hippolyte — fatalité divine (Vénus) et déchirement moral.",
    attendus: [
      { procede: "Anaphore", citation: "« une retraite ! »", interpretation: "Anaphore : répétition de « J'ai voulu, j'ai tenté » en début de vers. Martèlement qui insiste sur l'effort vain de Phèdre pour résister à sa passion — effet incantatoire et pathétique.", keywords: ["anaphore","répét","voulu","tenté","martel","insist","effort","vain"] },
      { procede: "Hyperbole", citation: "« Que n'ai-je au fond des mers une retraite ! »", interpretation: "Hyperbole : souhait exagéré de se cacher au fond des mers pour échapper à la passion. Phèdre pousse l'expression au-delà du réaliste pour traduire l'intensité de sa souffrance.", keywords: ["hyperbole","exag","mers","retraite","souffr","intens","échapp"] },
      { procede: "Personnification", citation: "« une retraite ! »", interpretation: "Personnification : le « malheur » accomplit l'action d'attirer Phèdre comme un être actif. L'abstraction devient une force fatale quasi vivante qui la possède.", keywords: ["personnification","malheur","attire","actif","force","fatal","abstrac","vivant"] },
      { procede: "Registre tragique", citation: "« une retraite ! »", interpretation: "Registre tragique : Phèdre est soumise à une fatalité (Vénus) qui la dépasse. Elle ne peut échapper à sa faute — terreur et pitié, mécanique de la tragédie racinienne.", keywords: ["tragique","fatal","malheur","faute","passion","pit","dépasse","Vénus"] },
      { procede: "Antithèse", citation: "« une retraite ! »", interpretation: "Antithèse entre la volonté de fuir (« vaincre », « fuir ») et l'attraction fatale (« m'attire »). Le personnage est déchiré entre raison et passion.", keywords: ["antithèse","fuir","attire","volonté","passion","déchir","oppos"] }
    ]
  },
  {
    id: "GT-004",
    titre: "Demain, dès l'aube…",
    auteur: "Hugo",
    oeuvre: "Les Contemplations (1856)",
    genre: "Poésie élégiaque",
    diff: 2,
    texte: `Demain, dès l'aube, à l'heure où blanchit la campagne, … Triste, et le jour pour moi sera comme la nuit.`,
    contexte: "Élégie à la mémoire de la fille de Hugo, Léopoldine — voyage vers sa tombe à Villequier.",
    attendus: [
      { procede: "Anaphore", citation: "« l'aube, à l'heure où blanchit la campagne, … Triste, et le jour pour moi sera comme la nuit. »", interpretation: "Anaphore du « je » et des futurs « j'irai », « je marcherai » : insistance sur le projet de départ obstiné. Rythme martelé qui traduit la détermination du deuil.", keywords: ["anaphore","je","irai","partir","répét","détermin","deuil","martel"] },
      { procede: "Énumération", citation: "« l'aube, à l'heure où blanchit la campagne, … Triste, et le jour pour moi sera comme la nuit. »", interpretation: "Énumération : liste de traits physiques et moraux du poète en deuil. Chaque terme ajoute une dimension à la solitude — effet de plénitude mélancolique.", keywords: ["énumération","liste","seul","inconnu","triste","deuil","plénitude","solitude"] },
      { procede: "Comparaison", citation: "« le jour pour moi sera comme la nuit »", interpretation: "Comparaison avec « comme » : le jour = la nuit pour le poète en deuil. Le temps perd sa clarté — tout est obscurci par la perte de l'être aimé.", keywords: ["comparaison","comme","jour","nuit","deuil","obscur","perte"] },
      { procede: "Registre lyrique", citation: "« Triste, et le jour pour moi sera comme la nuit »", interpretation: "Registre lyrique (ton élégiaque) : plainte mélancolique, expression de la perte et du deuil. Nostalgie et tristesse dominent — poésie du regret.", keywords: ["lyrique","élégiaque","deuil","plainte","mélancol","perte","nostalg","trist"] },
      { procede: "Champ lexical", citation: "« l'aube, à l'heure où blanchit la campagne, … Triste, et le jour pour moi sera comme la nuit. »", interpretation: "Champ lexical de la solitude et de la peine : « seul », « inconnu », « triste », « dos courbé ». Cohérence thématique qui installe l'univers du deuil.", keywords: ["champ lexical","solitude","peine","seul","triste","deuil","thème"] }
    ]
  },
  {
    id: "GT-005",
    titre: "L'Avare — Harpagon",
    auteur: "Molière",
    oeuvre: "L'Avare (1668)",
    genre: "Comédie",
    diff: 1,
    texte: `HARPAGON … On me volait, on me volait, on me volait !`,
    contexte: "Harpagon découvre la disparition de son argent — comique de caractère (l'avarice).",
    attendus: [
      { procede: "Anaphore", citation: "« On me volait, on me volait, on me volait ! »", interpretation: "Anaphore de « On me volait » : répétition martelée qui traduit l'obsession d'Harpagon pour son argent. Effet comique par l'excès et la disproportion émotionnelle.", keywords: ["anaphore","volait","répét","obsession","argent","martel","excès"] },
      { procede: "Hyperbole", citation: "« … On me volait, on me volait, on me volait ! »", interpretation: "Hyperbole : Harpagon traite le vol d'argent comme une trahison capitale — exagération grotesque qui révèle l'avarice et provoque le rire.", keywords: ["hyperbole","trahison","exag","vol","grotesque","avarice","rire"] },
      { procede: "Registre comique", citation: "« On me volait, on me volait, on me volait ! »", interpretation: "Registre comique : disproportion entre la perte matérielle et la réaction d'Harpagon (monologue délirant). Comique de caractère — l'avarice poussée à l'absurde.", keywords: ["comique","disproportion","avarice","rire","caractère","grotesque","absurde"] }
    ]
  },
  {
    id: "GT-006",
    titre: "Correspondances",
    auteur: "Baudelaire",
    oeuvre: "Les Fleurs du Mal (1857)",
    genre: "Poésie symboliste",
    diff: 3,
    texte: `La Nature est un temple où de vivants piliers … Les parfums, les couleurs et les sons se répondent.`,
    contexte: "Sonnet célèbre — correspondances entre les sens, vision symboliste du monde.",
    attendus: [
      { procede: "Métaphore", citation: "« La Nature est un temple où de vivants piliers »", interpretation: "Métaphore : la Nature est identifiée à un temple sans outil comparatif. Baudelaire sacralise le monde naturel et suggère une présence mystérieuse (piliers « vivants »).", keywords: ["métaphore","nature","temple","sacr","implicite","piliers","vivants"] },
      { procede: "Personnification", citation: "« où de vivants piliers … Les parfums, les couleurs et les sons se répondent. »", interpretation: "Personnification : les symboles « observent » l'homme avec des « regards » — traits humains prêtés à des abstractions. Le monde devient actif et inquiétant.", keywords: ["personnification","symbole","observe","regard","humain","abstrac","monde"] },
      { procede: "Comparaison", citation: "« où de vivants piliers … Les parfums, les couleurs et les sons se répondent. »", interpretation: "Comparaison avec « comme » : les correspondances entre parfums, couleurs et sons sont comparées à des échos qui se confondent — image de l'harmonie universelle.", keywords: ["comparaison","comme","écho","confond","parfum","couleur","son"] },
      { procede: "Antithèse", citation: "« où de vivants piliers … Les parfums, les couleurs et les sons se répondent. »", interpretation: "Antithèse entre « nuit » et « clarté » : opposés réunis pour dire l'étendue des correspondances — elles englobent toutes les dimensions du sensible.", keywords: ["antithèse","nuit","clarté","oppos","étendue","sensible","dimensions"] },
      { procede: "Registre lyrique", citation: "« où de vivants piliers … Les parfums, les couleurs et les sons se répondent. »", interpretation: "Registre lyrique et vision poétique subjective : Baudelaire exprime une expérience intime du monde, mélange de mystère, beauté et mélancolie symboliste.", keywords: ["lyrique","subjectiv","mystère","symbol","intime","expérience","poète"] },
      { procede: "Champ lexical", citation: "« où de vivants piliers … Les parfums, les couleurs et les sons se répondent. »", interpretation: "Champ lexical des sens et du symbolisme : parfums, couleurs, sons, symboles, échos. Cohérence thématique autour de la synesthie et des correspondances.", keywords: ["champ lexical","sens","parfum","couleur","son","symbole","synesth"] }
    ]
  },
  {
    id: "GT-007",
    titre: "Horace — antithèse",
    auteur: "Corneille",
    oeuvre: "Horace (1640)",
    genre: "Tragédie",
    diff: 2,
    texte: `CAMILLE … C'est là le sort affreux qui pèse sur les humains.`,
    contexte: "Camille maudit Rome qui lui a pris Curiace — haine politique et amour contrarié.",
    attendus: [
      { procede: "Anaphore", citation: "« … C'est là le sort affreux qui pèse sur les humains. »", interpretation: "Anaphore de « Rome » en tête de vers : martèlement incantatoire qui exprime la haine obsédante de Camille contre la ville-puissance.", keywords: ["anaphore","rome","répét","martel","haine","tête","incant"] },
      { procede: "Antithèse", citation: "« … C'est là le sort affreux qui pèse sur les humains. »", interpretation: "Antithèse entre « dieux » et « hommes », « soif » et « faim » : opposition symétrique qui universalise la souffrance tragique.", keywords: ["antithèse","dieux","hommes","soif","faim","oppos","symét"] },
      { procede: "Registre tragique", citation: "« … C'est là le sort affreux qui pèse sur les humains. »", interpretation: "Registre tragique : Camille est broyée par la fatalité politique et amoureuse. La cité l'emporte sur l'individu — terreur et pitié.", keywords: ["tragique","fatal","amour","politique","pit","souffr","cit"] },
      { procede: "Hyperbole", citation: "« … C'est là le sort affreux qui pèse sur les humains. »", interpretation: "Hyperbole : Rome est personnifiée et accusée d'assassiner l'amant — exagération qui traduit la démesure de la douleur.", keywords: ["hyperbole","exag","immoler","amant","douleur","démésure"] },
      { procede: "Personnification", citation: "« … C'est là le sort affreux qui pèse sur les humains. »", interpretation: "Personnification de Rome : la ville agit comme un être tyrannique qui exige l'adoration et broie les passions privées.", keywords: ["personnification","rome","puissance","tyran","ville","cœur"] }
    ]
  },
  {
    id: "GT-008",
    titre: "Andromaque — serpents",
    auteur: "Racine",
    oeuvre: "Andromaque (1667)",
    genre: "Tragédie",
    diff: 1,
    texte: `ANDROMAQUE … Pour qui sont ces serpents qui sifflent sur vos têtes ?`,
    contexte: "Vers célèbre d'Andromaque — image menaçante au théâtre classique.",
    attendus: [
      { procede: "Allitération", citation: "« ces serpents qui sifflent sur vos têtes »", interpretation: "Allitération en [s] : « sont », « serpents », « sifflent », « sur ». La consonne siflante imite le bruit des serpents — harmonie imitative.", keywords: ["allitération","s","siffl","serpent","consonne","imit","harmonie"] },
      { procede: "Gradation", citation: "« serpents » → « sifflent sur vos têtes »", interpretation: "Gradation d'angoisse : la menace se rapproche du spectateur (serpents au-dessus des têtes) — intensité croissante de la peur.", keywords: ["gradation","angoiss","peur","serpent","intens","menace","spectateur"] },
      { procede: "Hyperbole", citation: "« ces serpents qui sifflent sur vos têtes »", interpretation: "Hyperbole : les serpents sur la tête des spectateurs transforment la scène en menace universelle — exagération qui dramatise la peur.", keywords: ["hyperbole","exag","serpent","menace","peur","spectateur"] },
      { procede: "Registre tragique", citation: "« … Pour qui sont ces serpents qui sifflent sur vos têtes ? »", interpretation: "Registre tragique : l'image obsédante des serpents traduit une menace fatale et une atmosphère d'angoisse.", keywords: ["tragique","menace","fatal","angoiss","peur"] },
      { procede: "Champ lexical", citation: "« … Pour qui sont ces serpents qui sifflent sur vos têtes ? »", interpretation: "Champ lexical de la menace et du danger : serpents, sifflement, têtes — vocabulaire qui installe l'inquiétude.", keywords: ["champ lexical","menace","danger","serpent","peur"] }
    ]
  },
  {
    id: "GT-009",
    titre: "Le Corbeau et le Renard",
    auteur: "La Fontaine",
    oeuvre: "Fables (1668)",
    genre: "Fable",
    diff: 1,
    texte: `Maître Corbeau, sur un arbre perché, … Vous êtes le Phénix des hôtes de ces bois. »`,
    contexte: "Fable didactique — flatterie du Renard pour voler le fromage.",
    attendus: [
      { procede: "Hyperbole", citation: "« Vous êtes le Phénix des hôtes de ces bois »", interpretation: "Hyperbole flatteuse : comparer le Corbeau au Phénix exagère la louange pour le manipuler — ironie du Renard.", keywords: ["hyperbole","phénix","flatte","exag","louange","manipul"] },
      { procede: "Énumération", citation: "« Corbeau, sur un arbre perché, … Vous êtes le Phénix des hôtes de ces bois. »", interpretation: "Énumération des compliments du Renard : chaque terme ajoute une louange pour enivrer le Corbeau — insistance de la flatterie.", keywords: ["énumération","joli","beau","plumage","flatte","liste","louange"] },
      { procede: "Comparaison", citation: "« Vous êtes le Phénix des hôtes de ces bois »", interpretation: "Rapprochement explicite (être le Phénix de…) : le Renard compare le Corbeau à un oiseau mythique — fausse éloge.", keywords: ["comparaison","phénix","oiseau","rapproch","éloge"] },
      { procede: "Registre comique", citation: "« Corbeau, sur un arbre perché, … Vous êtes le Phénix des hôtes de ces bois. »", interpretation: "Registre comique : situation burlesque (animal qui parle, flatterie grotesque) — le lecteur anticipe la chute du Corbeau.", keywords: ["comique","burlesque","animal","flatterie","rire","situation"] },
      { procede: "Champ lexical", citation: "« Corbeau, sur un arbre perché, … Vous êtes le Phénix des hôtes de ces bois. »", interpretation: "Champ lexical de la beauté et de l'apparence : joli, beau, plumage, ramage — insistance sur le leurre de la flatterie.", keywords: ["champ lexical","beauté","apparence","plumage","flatte"] }
    ]
  },
  {
    id: "GT-010",
    titre: "Candide — boucherie héroïque",
    auteur: "Voltaire",
    oeuvre: "Candide (1759)",
    genre: "Conte philosophique",
    diff: 2,
    texte: `« C'est une boucherie héroïque et glorieuse », dit un officier. … « Quelle est cette rage de se faire tuer sans profit pour personne ? »`,
    contexte: "Voltaire dénonce les guerres absurdes — satire de l'euphémisme militaire.",
    attendus: [
      { procede: "Oxymore", citation: "« boucherie héroïque et glorieuse »", interpretation: "Oxymore : « boucherie » (horreur) associée à « héroïque » et « glorieuse » (louange) — décalage satirique qui dénonce l'absurdité de la guerre.", keywords: ["oxymore","boucherie","héroïque","glorieux","contradict","guerre"] },
      { procede: "Registre satirique", citation: "« boucherie héroïque »", interpretation: "Registre satirique : Voltaire ridiculise le discours officiel sur la guerre par l'ironie et le grotesque — dénonciation par le rire.", keywords: ["satirique","ironie","dénonc","guerre","rire","grotesque"] },
      { procede: "Antithèse", citation: "« se faire tuer sans profit »", interpretation: "Antithèse entre l'idéal héroïque de la guerre et la réalité absurde (mort « sans profit ») — Candide oppose naïveté et horreur.", keywords: ["antithèse","mort","profit","héro","absurde","oppos"] },
      { procede: "Registre pathétique", citation: "« … « Quelle est cette rage de se faire tuer sans profit pour personne ? »", interpretation: "Registre pathétique : la souffrance de Candide suscite la compassion — contraste avec le cynisme de l'officier.", keywords: ["pathétique","pleure","trembl","compassion","souffr"] },
      { procede: "Hyperbole", citation: "« « C'est une boucherie héroïque et glorieuse », dit un officier. »", interpretation: "Hyperbole : la peur de Candide est exagérée corporellement pour marquer l'horreur ressentie face au massacre.", keywords: ["hyperbole","trembl","peur","membres","exag","horreur"] }
    ]
  },
  {
    id: "GT-011",
    titre: "Mignonne, allons voir si la rose",
    auteur: "Ronsard",
    oeuvre: "Odes (1545)",
    genre: "Poésie lyrique",
    diff: 1,
    texte: `Mignonne, allons voir si la rose … Et son teint au vôtre pareil.`,
    contexte: "Carpe diem poétique — la rose symbolise la beauté éphémère de la femme aimée.",
    attendus: [
      { procede: "Métaphore", citation: "« … Et son teint au vôtre pareil. »", interpretation: "Métaphore : la rose est vêtue d'une « robe de pourpre » — transfert du vêtement humain sur la fleur, image courtoise et sensuelle.", keywords: ["métaphore","robe","pourpre","rose","fleur","image"] },
      { procede: "Comparaison", citation: "« son teint au vôtre pareil »", interpretation: "Comparaison implicite entre le teint de la rose et celui de la bien-aimée — rapprochement qui lie nature et beauté féminine.", keywords: ["comparaison","teint","pareil","rose","beauté","femme"] },
      { procede: "Registre lyrique", citation: "« Mignonne, allons voir… »", interpretation: "Registre lyrique : apostrophe amoureuse, « je » poétique qui s'adresse à la femme — célébration intime de la beauté et du temps.", keywords: ["lyrique","amour","mignonne","intime","beauté","je"] },
      { procede: "Personnification", citation: "« … Et son teint au vôtre pareil. »", interpretation: "« avait déclose / Sa robe de pourpre » est traité·e comme un agent vivant (personnification) : l'effet est de rend la description plus vivante et d'intensifier carpe diem poétique.", keywords: ["personnification","rose","déclose","robe","anim","nature"] },
      { procede: "Champ lexical", citation: "« … Et son teint au vôtre pareil. »", interpretation: "Autour de « rose » face à « pourpre », le vocabulaire (« rose », « pourpre », « teint », « vesprée ») forme un réseau sémantique : le lecteur perçoit carpe diem poétique par accumulation lexicale.", keywords: ["champ lexical","beauté","éphém","rose","temps","pourpre"] }
    ]
  },
  {
    id: "GT-012",
    titre: "Le Lac",
    auteur: "Lamartine",
    oeuvre: "Méditations poétiques (1820)",
    genre: "Poésie élégiaque",
    diff: 2,
    texte: `Ainsi, toujours poussés vers de nouveaux rivages, … Et le lac frissonnait sous le vent du soir.`,
    contexte: "Élégie célèbre — le lac témoin d'un amour passé, métaphore du temps.",
    attendus: [
      { procede: "Comparaison", citation: "« nouveaux rivages, … Et le lac frissonnait sous le vent du soir. »", interpretation: "Le parallèle introduit par « sur l'océan des âges » (comparaison) facilite la visualisation de la scène et précise la dimension élégie célèbre du passage.", keywords: ["comparaison","océan","âges","temps","navigation","vie"] },
      { procede: "Anaphore", citation: "« nouveaux rivages, … Et le lac frissonnait sous le vent du soir. »", interpretation: "Structure énumérative avec reprise temporelle : les saisons qui passent martèlent l'idée d'un temps irréversible — insistance élégiaque.", keywords: ["anaphore","saison","passé","temps","répét","élég"] },
      { procede: "Personnification", citation: "« le lac frissonnait sous le vent »", interpretation: "Personnification : le lac « frissonnait » comme un être sensible — le paysage partage l'émotion du poète.", keywords: ["personnification","lac","frisson","vent","émotion","paysage"] },
      { procede: "Registre lyrique", citation: "« nouveaux rivages, … Et le lac frissonnait sous le vent du soir. »", interpretation: "Registre lyrique (ton élégiaque) : plainte sur le temps qui fuit et l'amour perdu — mélancolie et nostalgie dominantes.", keywords: ["lyrique","élégiaque","mélancol","perte","temps","nostalg","plainte"] },
      { procede: "Enjambement", citation: "« Ainsi, toujours poussés vers de nouveaux rivages »", interpretation: "L'enjambement sur « Ainsi, toujours poussés vers de nouveaux rivages, / Dans la nuit éternelle emportés » modifie le rythme du vers : Lamartine retarde ou brise le rythme attendu en lien avec élégie célèbre.", keywords: ["enjambement","vers","déborde","mouvement","emport","flux"] },
      { procede: "Contre-rejet", citation: "« vers de nouveaux rivages »", interpretation: "Contre-rejet : « rivages » termine le vers alors que le sens continue — suspension avant le débordement, accent sur l'idée de voyage sans fin.", keywords: ["contre-rejet","rivages","vers","suspens","débord","fin"] },
      { procede: "Alexandrin", citation: "« Ainsi, toujours poussés vers de nouveaux rivages, »", interpretation: "Alexandrin : vers de douze syllabes, vers de référence de Lamartine — régularité solennelle qui contraste avec le thème de l'instabilité.", keywords: ["alexandrin","douze","12","syllab","vers","régul","lamartine"] }
    ]
  },
  {
    id: "GT-013",
    titre: "Heureux qui, comme Ulysse",
    auteur: "Du Bellay",
    oeuvre: "Les Regrets (1558)",
    genre: "Sonnet élégiaque",
    diff: 2,
    texte: `Heureux qui, comme Ulysse, a fait un beau voyage, … Et mon Anjou verdoyant, et l'Angevin bocage ?`,
    contexte: "Du Bellay, exilé à Rome, regrette son Anjou natal — sonnet du retour impossible.",
    attendus: [
      { procede: "Comparaison", citation: "« Heureux qui, comme Ulysse »", interpretation: "Comparaison avec « comme » : le poète envie Ulysse et Jason qui ont pu rentrer chez eux — modèle du voyage accompli.", keywords: ["comparaison","comme","ulysse","voyage","retour","envie"] },
      { procede: "Registre lyrique", citation: "« qui, comme Ulysse, a fait un beau voyage, … Et mon Anjou verdoyant, et l'Angevin bocage ? »", interpretation: "Registre lyrique (ton élégiaque) : « hélas », nostalgie du pays natal, impossibilité du retour — plainte mélancolique.", keywords: ["lyrique","élégiaque","hélas","nostalg","village","retour","plainte"] },
      { procede: "Champ lexical", citation: "« qui, comme Ulysse, a fait un beau voyage, … Et mon Anjou verdoyant, et l'Angevin bocage ? »", interpretation: "Du Bellay densifie le passage avec un champ lexical centré sur village (« village », « fossés », « cabane », « bocage »), ce qui insiste sur l'idée centrale par résonance lexicale et ancre le thème de du bellay, exilé à rome, regrette son anjou natal.", keywords: ["champ lexical","campagne","village","bocage","natal","pays"] },
      { procede: "Anaphore", citation: "« qui, comme Ulysse, a fait un beau voyage, … Et mon Anjou verdoyant, et l'Angevin bocage ? »", interpretation: "Anaphore des « et » / énumération parallèle : accumulation des lieux regrettés — effet de liste nostalgique.", keywords: ["anaphore","énumér","nostalg","liste","anjou","lieux"] },
      { procede: "Sonnet", citation: "« qui, comme Ulysse, a fait un beau voyage, … Et mon Anjou verdoyant, et l'Angevin bocage ? »", interpretation: "Sonnet : forme fixe de 14 vers — Du Bellay éclaire du son élégie en quatrains puis tercets, cadre classique pour la plainte du retour impossible.", keywords: ["sonnet","14","quatrains","tercets","forme","fixe","structure"] },
      { procede: "Registre lyrique", citation: "« qui, comme Ulysse, a fait un beau voyage, … Et mon Anjou verdoyant, et l'Angevin bocage ? »", interpretation: "Registre lyrique : subjectivité du poète, expression intime du manque et du désir de retrouver les siens.", keywords: ["lyrique","je","exil","subjectiv","manque","désir"] }
    ]
  },
  {
    id: "GT-014",
    titre: "L'Étranger — Meursault",
    auteur: "Camus",
    oeuvre: "L'Étranger (1942)",
    genre: "Roman",
    diff: 2,
    texte: `Aujourd'hui, maman est morte. … Il faisait très chaud.`,
    contexte: "Incipit célèbre — voix de Meursault, perception limitée et détachée.",
    attendus: [
      { procede: "Champ lexical", citation: "« Aujourd'hui, maman est morte. »", interpretation: "Champ lexical de la mort : morte, décédée, enterrement — vocabulaire administratif et froid qui contraste avec l'émotion attendue.", keywords: ["champ lexical","mort","décéd","enterrement","froid","administr"] },
      { procede: "Antithèse", citation: "« Aujourd'hui, maman est morte. »", interpretation: "Antithèse entre la formule sociale creuse (« sentiments distingués ») et la réalité brutale (mort) — décalage qui caractérise Meursault.", keywords: ["antithèse","sentiments","mort","décalage","formule","brutal"] },
      { procede: "Phrase nominale", citation: "« Aujourd'hui, maman est morte. »", interpretation: "Par « Mère décédée. Enterrement demain. Sentiments distingués. », le phrase nominale approfondit voix de meursault et marque le style de Camus.", keywords: ["phrase nominale","télégramme","sec","froid","phrase","style"] },
      { procede: "Registre pathétique", citation: "« Aujourd'hui, maman est morte. »", interpretation: "Contre-registre : le sujet pathétique (mort de la mère) est traité sans émotion — le pathétique est sous-entendu par l'absence, ce qui choque le lecteur.", keywords: ["pathétique","mort","mère","émotion","absence","choc"] }
    ]
  },
  {
    id: "GT-015",
    titre: "Le Horla",
    auteur: "Maupassant",
    oeuvre: "Le Horla (1887)",
    genre: "Nouvelle fantastique",
    diff: 3,
    texte: `Il m'a suivi. … Je sens sa présence, je le devine, je le crains autour de moi.`,
    contexte: "Monologue d'un narrateur qui doute de sa raison — présence invisible.",
    attendus: [
      { procede: "Anaphore", citation: "« Il m'a suivi »", interpretation: "Anaphore du « il / je » : répétition obsédante qui traduit la folie progressive et l'emprise de l'être invisible.", keywords: ["anaphore","il","répét","obsess","hante","folie"] },
      { procede: "Hyperbole", citation: "« présence, je le devine, je le crains autour de moi. »", interpretation: "Hyperbole : « terrible » amplifie la menace d'une présence jamais vue — peur exagérée qui installe le malaise.", keywords: ["hyperbole","terrible","menace","peur","exag","invisible"] },
      { procede: "Champ lexical", citation: "« présence, je le devine, je le crains autour de moi. »", interpretation: "Champ lexical de la peur et de l'inquiétude : hante, crains, invisible, terrible — atmosphère oppressante.", keywords: ["champ lexical","peur","crainte","invisible","hante","inquiét"] }
    ]
  },
  {
    id: "GT-016",
    titre: "Germinal — la mine",
    auteur: "Zola",
    oeuvre: "Germinal (1885)",
    genre: "Roman naturaliste",
    diff: 2,
    texte: `Et les mineurs montaient, noirs, écrasés, les yeux blancs dans les faces de charbon. … La fosse crachait sa besogne, hommes et bêtes confondus dans la nuit du travail.`,
    contexte: "Description de la sortie de mine — dénonciation sociale zolienne.",
    attendus: [
      { procede: "Registre pathétique", citation: "« noirs, écrasés »", interpretation: "Registre pathétique : la souffrance des mineurs suscite pitié et indignation — Zola veut émouvoir pour dénoncer.", keywords: ["pathétique","souffr","mineur","fatigue","pit","indign"] },
      { procede: "Registre épique", citation: "« La fosse crachait sa besogne »", interpretation: "Registre épique : souffle grandiose de la description collective — la mine comme monstre dévorant les hommes.", keywords: ["épique","fosse","souffle","collectif","monstr","grandiose"] },
      { procede: "Personnification", citation: "« La fosse crachait sa besogne »", interpretation: "Personnification : la fosse « crache » comme un être vivace et vorace — la mine devient agent actif de l'oppression.", keywords: ["personnification","fosse","crache","mine","vorace","actif"] },
      { procede: "Métaphore", citation: "« hommes et bêtes confondus »", interpretation: "Métaphore: « hommes et bêtes confondus » transfère le sens d'un domaine à un autre et crée une image frappante. Zola suggère ainsi le dénonciation sociale zolienne.", keywords: ["métaphore","bêtes","hommes","déshuman","mineur","oppress"] },
      { procede: "Champ lexical", citation: "« besogne, hommes et bêtes confondus dans la nuit du travail. »", interpretation: "Champ lexical de l'enfermement et de la nuit : charbon, fosse, nuit, noirs — univers souterrain oppressant.", keywords: ["champ lexical","charbon","fosse","nuit","souterrain","oppress"] }
    ]
  },
  {
    id: "GT-017",
    titre: "Les Misérables — Gavroche",
    auteur: "Hugo",
    oeuvre: "Les Misérables (1862)",
    genre: "Roman",
    diff: 2,
    texte: `Gavroche était tombé. … C'était le petit enfant des rues, le gamin de Paris, celui qui riait au vent, qui chantait dans la mitraille.`,
    contexte: "Mort de Gavroche — scène pathétique engagée chez Hugo.",
    attendus: [
      { procede: "Registre pathétique", citation: "« rues, le gamin de Paris, celui qui riait au vent, qui chantait dans la mitraille. »", interpretation: "Registre pathétique : la mort de l'enfant innocent provoque compassion et indignation sociale — Hugo émeut pour faire réfléchir.", keywords: ["pathétique","gavroche","enfant","mort","compassion","indign"] },
      { procede: "Antithèse", citation: "« qui riait au vent » / « était tombé »", interpretation: "Antithèse entre la joie de vivre (rire, chanter) et la mort brutale — contraste qui accentue la tragédie.", keywords: ["antithèse","rire","mort","contraste","joie","brutal"] },
      { procede: "Hyperbole", citation: "« qui chantait dans la mitraille »", interpretation: "Hyperbole : chanter « dans la mitraille » exagère l'insouciance héroïque de Gavroche — légende de l'enfant courageux.", keywords: ["hyperbole","mitraille","chanter","insouci","héro","exag"] },
      { procede: "Champ lexical", citation: "« rues, le gamin de Paris, celui qui riait au vent, qui chantait dans la mitraille. »", interpretation: "Champ lexical de la violence et de la mort : balle, écroulé, mitraille — vocabulaire de la guerre civile.", keywords: ["champ lexical","violence","mort","balle","mitraille","guerre"] }
    ]
  },
  {
    id: "GT-019",
    titre: "La Cigale et la Fourmi",
    auteur: "La Fontaine",
    oeuvre: "Fables (1668)",
    genre: "Fable",
    diff: 1,
    texte: `La Cigale, ayant chanté … Quelque grain pour subsister.`,
    contexte: "Fable morale sur le travail et la prévoyance — registre didactique.",
    attendus: [
      { procede: "Champ lexical", citation: "« Cigale, ayant chanté … Quelque grain pour subsister. »", interpretation: "Champ lexical du besoin et de la subsistance : famine, dépourvue, grain — contraste avec le chant estival.", keywords: ["champ lexical","famine","grain","besoin","subsist","dépourv"] },
      { procede: "Antithèse", citation: "« Cigale, ayant chanté … Quelque grain pour subsister. »", interpretation: "Antithèse entre l'insouciance estivale (chanter) et la détresse hivernale (famine) — éclaire du morale de la fable.", keywords: ["antithèse","été","hiver","chanter","famine","contraste"] },
      { procede: "Personnification", citation: "« La Cigale »", interpretation: "Personnification : les insectes parlent, raisonnent et agissent comme des humains — procédé propre à la fable.", keywords: ["personnification","cigale","fourmi","animal","parle","fable"] },
      { procede: "Registre comique", citation: "« Cigale, ayant chanté … Quelque grain pour subsister. »", interpretation: "Registre comique léger : détail grotesque de la cigale affamée — ton enjoué qui retient l'attention avant la morale.", keywords: ["comique","grotesque","cigale","famine","enjoué","détail"] }
    ]
  },
  {
    id: "GT-020",
    titre: "Bérénice — adieux",
    auteur: "Racine",
    oeuvre: "Bérénice (1670)",
    genre: "Tragédie",
    diff: 2,
    texte: `BÉRÉNICE … Que je ne respire et ne vis que pour vous ?`,
    contexte: "Bérénice avoue son amour impossible pour Titus — registre pathétique et lyrique.",
    attendus: [
      { procede: "Anaphore", citation: "« que je… que je… que je… que je… »", interpretation: "Anaphore de « que je » : répétition incantatoire qui exprime l'emprise totale de l'amour — martèlement pathétique.", keywords: ["anaphore","que je","répét","amour","martel","incant"] },
      { procede: "Registre pathétique", citation: "« … Que je ne respire et ne vis que pour vous ? »", interpretation: "Registre pathétique : la souffrance amoureuse de Bérénice suscite la compassion — amour contrarié par le devoir impérial.", keywords: ["pathétique","amour","souffr","bérénice","compassion","imposs"] },
      { procede: "Registre lyrique", citation: "« … Que je ne respire et ne vis que pour vous ? »", interpretation: "Registre lyrique : expression directe des sentiments intimes — « je » amoureux, passion déclarée sans retenue.", keywords: ["lyrique","aime","je","passion","intime","sentiment"] },
      { procede: "Hyperbole", citation: "« je ne respire et ne vis que pour vous »", interpretation: "En exagérant « je ne respire et ne vis que pour vous », le texte use de l'hyperbole afin de souligne l'intensité du ressenti — procédé fréquent chez Racine.", keywords: ["hyperbole","respire","vis","exag","passion","absolu"] },
      { procede: "Antithèse", citation: "« … Que je ne respire et ne vis que pour vous ? »", interpretation: "Antithèse implicite entre l'amour personnel et le devoir de Titus — tension tragique qui structure la pièce.", keywords: ["antithèse","devoir","amour","titus","tension","trag"] }
    ]
  },
  {
    id: "GT-021",
    titre: "Art poétique",
    auteur: "Verlaine",
    oeuvre: "Jadis et naguère (1884)",
    genre: "Poésie",
    diff: 2,
    texte: `De la musique avant toute chose, … Où l'Indécis au Précis se joint.`,
    contexte: "Manifeste du symbolisme — musicalité, vagueness, poétique de l'Indécis.",
    attendus: [
      { procede: "Assonance", citation: "« chose, … Où l'Indécis au Précis se joint. »", interpretation: "Assonances en [y] et voyelles ouvertes : musicalité du poème qui illustre théoriquement son propos — le vers devient musique.", keywords: ["assonance","musical","voyelle","musique","air","soluble"] },
      { procede: "Allitération", citation: "« chose, … Où l'Indécis au Précis se joint. »", interpretation: "Allitération en [p] : répétition de consonnes qui crée une légèreté sonore — cohérence entre forme et fond.", keywords: ["allitération","p","consonne","pèse","pose","sonore"] },
      { procede: "Registre lyrique", citation: "« De la musique avant toute chose »", interpretation: "Registre lyrique : le poète exprime une vision personnelle de l'art — subjectivité du « tu » poétique adressé au poète.", keywords: ["lyrique","musique","poète","subjectiv","art","vision"] },
      { procede: "Antithèse", citation: "« l'Indécis au Précis se joint »", interpretation: "Antithèse entre Indécis et Précis : opposition fondatrice du symbolisme verlainien — nuance plutôt que clarté.", keywords: ["antithèse","indécis","précis","oppos","symbol","nuance"] },
      { procede: "Enjambement", citation: "« chose, … Où l'Indécis au Précis se joint. »", interpretation: "L'enjambement repérée dans le vers qui se poursuivent au-delà de la césure retarde ou brise le rythme attendu; le découpage du vers sert manifeste du symbolisme dans Jadis et naguère.", keywords: ["enjambement","vers","déborde","fluid","soluble","air"] }
    ]
  },
  {
    id: "GT-022",
    titre: "Sous le pont Mirabeau",
    auteur: "Apollinaire",
    oeuvre: "Alcools (1913)",
    genre: "Poésie moderniste",
    diff: 2,
    texte: `Sous le pont Mirabeau coule la Seine … Les jours s'en vont je demeure`,
    contexte: "Poème célèbre sur le temps et l'amour passé — rimes et reprises.",
    attendus: [
      { procede: "Enjambement", citation: "« coule la Seine »", interpretation: "Enjambement : « Et nos amours » déborde sur le vers suivant — les amours mêlées au fleuve, fluidité du temps.", keywords: ["enjambement","seine","amours","déborde","vers","flux"] },
      { procede: "Antithèse", citation: "« Seine … Les jours s'en vont je demeure »", interpretation: "Antithèse: « La joie venait toujours après la peine » installe une opposition nette qui condense la tension dramatique ou argumentative du passage.", keywords: ["antithèse","joie","peine","oppos","amour","cycle"] },
      { procede: "Registre lyrique", citation: "« Seine … Les jours s'en vont je demeure »", interpretation: "Registre lyrique (ton élégiaque) : souvenir mélancolique de l'amour perdu — nostalgie du temps qui passe sous le pont.", keywords: ["lyrique","élégiaque","souvenir","mélancol","amour","perdu","temps"] },
      { procede: "Registre lyrique", citation: "« Seine … Les jours s'en vont je demeure »", interpretation: "Registre lyrique : expression intime de l'amour et de la mémoire affective — « nos amours » personnelles.", keywords: ["lyrique","amours","intime","mémoire","affectif","nos"] },
      { procede: "Champ lexical", citation: "« Seine … Les jours s'en vont je demeure »", interpretation: "Apollinaire densifie le passage avec un champ lexical centré sur nuit (« nuit », « heure », « jours », « demeure »), ce qui insiste sur l'idée centrale par résonance lexicale et ancre le thème de poème célèbre sur le temps et l'amour passé.", keywords: ["champ lexical","temps","nuit","heure","jours","demeure"] }
    ]
  },
  {
    id: "GT-023",
    titre: "Les Fourberies de Scapin",
    auteur: "Molière",
    oeuvre: "Les Fourberies de Scapin (1671)",
    genre: "Comédie",
    diff: 1,
    texte: `SCAPIN … Ah ! coquin, coquin, coquin, coquin !`,
    contexte: "Scapin interroge un complice — comique de situation et répétitions.",
    attendus: [
      { procede: "Registre comique", citation: "« coquin, coquin, coquin, coquin ! »", interpretation: "Registre comique : quiproquo, fausses hésitations, gestuelle — le rire naît de la situation et du personnage rusé.", keywords: ["comique","scapin","quiproqu","rire","situation","ruse"] },
      { procede: "Anaphore", citation: "« coquin, coquin, coquin, coquin »", interpretation: "Anaphore de « coquin » : répétition comique qui accentue l'exaspération feinte de Scapin — effet de martèlement burlesque.", keywords: ["anaphore","coquin","répét","comique","burlesque","exasp"] },
      { procede: "Hyperbole", citation: "« coquin, coquin, coquin, coquin ! »", interpretation: "En exagérant « Ah ! le coquin ! », le texte use de l'hyperbole afin de souligne l'intensité du ressenti — procédé fréquent chez Molière.", keywords: ["hyperbole","coquin","exag","théâtr","indign","surjou"] },
      { procede: "Litote", citation: "« coquin, coquin, coquin, coquin ! »", interpretation: "Litote et feinte retenue : Scapin dit moins (« je ne crois pas ») pour faire entendre plus (suspicion certaine) — comique de l'hésitation simulée.", keywords: ["litote","feinte","hésit","comique","simul","retenue"] }
    ]
  },
  {
    id: "GT-024",
    titre: "L'Invitation au voyage",
    auteur: "Baudelaire",
    oeuvre: "Les Fleurs du Mal (1857)",
    genre: "Poésie",
    diff: 2,
    texte: `Mon enfant, ma sœur, … Dans un pleur qui ne pleure pas.`,
    contexte: "Poème d'évasion amoureuse — pays rêvé, correspondances sensuelles.",
    attendus: [
      { procede: "Métaphore", citation: "« enfant, ma sœur, … Dans un pleur qui ne pleure pas. »", interpretation: "Métaphore : le pays idéal = le visage de la bien-aimée — espace géographique transformé en image amoureuse.", keywords: ["métaphore","pays","ressemble","amour","idéal","image"] },
      { procede: "Comparaison", citation: "« enfant, ma sœur, … Dans un pleur qui ne pleure pas. »", interpretation: "Comparaison implicite entre ciels brouillés et yeux de la bien-aimée — rapprochement sensoriel et mystérieux.", keywords: ["comparaison","yeux","ciel","charme","mystér","soleil"] },
      { procede: "Registre lyrique", citation: "« Mon enfant, ma sœur »", interpretation: "Registre lyrique: par « Mon enfant, ma sœur », Baudelaire exprime une subjectivité intime et des émotions personnelles — tonalité dominante de Les Fleurs du Mal.", keywords: ["lyrique","amour","enfant","sœur","invitation","désir"] },
      { procede: "Oxymore", citation: "« un pleur qui ne pleure pas »", interpretation: "Oxymore: « un pleur qui ne pleure pas » réunit deux termes contradictoires. La tension sémantique exprime une ambiguïté ou un paradoxe vécu dans le pays rêvé.", keywords: ["oxymore","pleur","contradict","mélancol","yeux","triste"] },
      { procede: "Champ lexical", citation: "« enfant, ma sœur, … Dans un pleur qui ne pleure pas. »", interpretation: "Le champ lexical repéré (« douceur », « aimer », « charmes », « mystérieux ») enveloppe « douceur » face à « aimer » : les résonances entre ces lexies insiste sur l'idée centrale par résonance lexicale dans Les Fleurs du Mal.", keywords: ["champ lexical","séduction","rêve","douceur","charme","mystère"] }
    ]
  },
  {
    id: "GT-025",
    titre: "Tartuffe — fausse piété",
    auteur: "Molière",
    oeuvre: "Tartuffe (1664)",
    genre: "Comédie",
    diff: 2,
    texte: `TARTUFFE … Et vous ne m'attirerez plus par vos manèges.`,
    contexte: "Tartuffe simule la dévotion pour tromper Orgon — comédie de l'hypocrisie religieuse.",
    attendus: [
      { procede: "Registre comique", citation: "« … Et vous ne m'attirerez plus par vos manèges. »", interpretation: "Registre comique: « fausse dévotion de Tartuffe » provoque le rire par la situation, les mots ou les personnages, au cœur de la comédie de l'hypocrisie religieuse.", keywords: ["comique","hypocris","dévot","duplicit","rire","tartuffe"] },
      { procede: "Anaphore", citation: "« … Et vous ne m'attirerez plus par vos manèges. »", interpretation: "Anaphore de « non » et reprise de « Ciel / ordre du Ciel » : insistance théâtrale qui masque la manipulation.", keywords: ["anaphore","non","ciel","répét","insist","théâtr"] },
      { procede: "Antithèse", citation: "« … Et vous ne m'attirerez plus par vos manèges. »", interpretation: "Antithèse entre le prétendu départ vertueux et la volonté de séduire encore — contradiction qui révèle le faux-semblant.", keywords: ["antithèse","quitter","attir","contradict","vertu","séduire"] },
      { procede: "Hyperbole", citation: "« … Et vous ne m'attirerez plus par vos manèges. »", interpretation: "« tout ici est souillé » relève de l'hyperbole : l'amplification souligne l'intensité du ressenti et fixe l'émotion autour de tartuffe simule la dévotion pour tromper orgon.", keywords: ["hyperbole","souill","exag","monde","rigueur","caricature"] },
      { procede: "Champ lexical", citation: "« … Et vous ne m'attirerez plus par vos manèges. »", interpretation: "Champ lexical de la fausse morale et du stratagème : ciel, ordre, pièges, manèges — vocabulaire de la tromperie déguisée en vertu.", keywords: ["champ lexical","moral","piège","manège","tromper","vertu"] }
    ]
  },
  {
    id: "GT-026",
    titre: "Madame Bovary — le bal",
    auteur: "Flaubert",
    oeuvre: "Madame Bovary (1857)",
    genre: "Roman",
    diff: 2,
    texte: `Les chandeliers à branches, les bougies dans les globes de cristal, les girandoles du buffet, les petits verres en argent, les quadrilles, les fauteuils le long des murs, tout cela d'un coup l'atteignit comme l'atmosphère d'un pays lointain où elle serait entrée.`,
    contexte: "Emma découvre le bal de la marquise — éveil du désir d'ailleurs, style flaubertien.",
    attendus: [
      { procede: "Anaphore", citation: "« les chandeliers… les bougies… les girandoles… les petits verres… les quadrilles… les fauteuils »", interpretation: "Anaphore de « les » : énumération martelée qui traduit la surcharge d'objets et le vertige d'Emma devant le luxe.", keywords: ["anaphore","les","énumér","répét","lux","vertige"] },
      { procede: "Comparaison", citation: "« comme l'atmosphère d'un pays lointain »", interpretation: "Comparaison repérée dans « comme l'atmosphère d'un pays lointain »: le parallèle rend éveil du désir d'ailleurs plus concret et guide l'imaginaire du lecteur.", keywords: ["comparaison","comme","pays","lointain","rêve","évasion"] },
      { procede: "Registre pathétique", citation: "« branches, les bougies dans les globes de cristal, les girandoles du buffet, les petits verres en arg »", interpretation: "Registre pathétique : la beauté du bal révèle la misère du quotidien d'Emma — compassion pour une femme en quête d'idéal.", keywords: ["pathétique","misère","idéal","emma","compassion","quotidien"] },
      { procede: "Champ lexical", citation: "« branches, les bougies dans les globes de cristal, les girandoles du buffet, les petits verres en arg »", interpretation: "Champ lexical du luxe et de l'apparat : cristal, argent, girandoles — contraste avec la vie provinciale d'Emma.", keywords: ["champ lexical","luxe","cristal","argent","apparat","contraste"] }
    ]
  },
  {
    id: "GT-027",
    titre: "Dom Juan — le méchant homme",
    auteur: "Molière",
    oeuvre: "Dom Juan ou le Festin de pierre (1665)",
    genre: "Comédie",
    diff: 2,
    texte: `DOM JUAN Ah ! … pour être honnête homme, je donnerais tous les honnêtes gens du monde ; et je ne crois pas qu'on puisse faire une plaisanterie plus plaisante que de se moquer d'eux.`,
    contexte: "Dom Juan assume son immoralisme — comédie du libertin qui défie la morale.",
    attendus: [
      { procede: "Registre comique", citation: "« plaisanterie plus plaisante »", interpretation: "Registre comique: la scène provoque le rire par la situation, les mots ou les personnages; « plaisanterie plus plaisante » concentre cette coloration du comédie du libertin qui défie la morale.", keywords: ["comique","moque","provoc","rire","renvers","valeurs"] },
      { procede: "Antithèse", citation: "« honnête homme » / « se moquer d'eux »", interpretation: "Antithèse entre l'idéal moral (honnête homme) et le mépris affiché — contraste qui définit le personnage.", keywords: ["antithèse","honnête","moquer","contraste","moral","mépris"] },
      { procede: "Hyperbole", citation: "« tous les honnêtes gens du monde »", interpretation: "Hyperbole : « tous les honnêtes gens » pour une plaisanterie — exagération qui souligne le cynisme du libertin.", keywords: ["hyperbole","tous","exag","cynisme","libertin","monde"] },
      { procede: "Litote", citation: "« je ne crois pas qu'on puisse faire une plaisanterie plus plaisante »", interpretation: "Litote ironique : sous-entendre que la moquerie est supérieure — dédain masqué sous une fausse modération.", keywords: ["litote","ironie","moquer","dédain","sous-entend","modér"] },
      { procede: "Registre satirique", citation: "« homme, je donnerais tous les honnêtes gens du monde ; »", interpretation: "Registre satirique: la scène dénonce les mœurs ou les institutions par l'ironie et la dérision; « ensemble de la réplique » concentre cette coloration du comédie du libertin qui défie la morale.", keywords: ["satirique","dénonc","hypocris","rire","molière","libertin"] }
    ]
  },
  {
    id: "GT-028",
    titre: "Notre-Dame de Paris — Quasimodo",
    auteur: "Hugo",
    oeuvre: "Notre-Dame de Paris (1831)",
    genre: "Roman",
    diff: 2,
    texte: `Quasimodo était à peu près difforme. … Son dos était voûté, sa poitrine osseuse et concave, son épaule gauche avait une bosse qui le faisait pencher, sa jambe droite était estropiée.`,
    contexte: "Portrait physique de Quasimodo — pathétique et grotesque, style hugolien.",
    attendus: [
      { procede: "Registre pathétique", citation: "« voûté, sa poitrine osseuse et concave, son épaule gauche avait une bosse qui le faisait pencher, sa »", interpretation: "Registre pathétique: la scène suscite la compassion et l'indignation face à la souffrance; « portrait de la difformité » concentre cette coloration du pathétique et grotesque.", keywords: ["pathétique","difform","compassion","victime","rejet","laideur"] },
      { procede: "Anaphore", citation: "« Son dos… sa poitrine… son épaule… sa jambe »", interpretation: "Anaphore des possessifs « son / sa » : énumération qui martèle la laideur corporelle — insistance pathétique.", keywords: ["anaphore","son","sa","énumér","corps","laideur"] },
      { procede: "Antithèse", citation: "« difforme »", interpretation: "Antithèse repérée dans « difforme… informe »: deux termes ou idées s'opposent pour souligner pathétique et grotesque.", keywords: ["antithèse","difforme","informe","intens","monstru","contraste"] },
      { procede: "Hyperbole", citation: "« à peu près difforme »", interpretation: "En exagérant « à peu près difforme… informe », le texte use de l'hyperbole afin de souligne l'intensité du ressenti — procédé fréquent chez Hugo.", keywords: ["hyperbole","informe","exag","grotesque","difform","corps"] },
      { procede: "Champ lexical", citation: "« voûté, sa poitrine osseuse et concave, son épaule gauche avait une bosse qui le faisait pencher, sa »", interpretation: "Le champ lexical repéré (« voûté », « osseuse », « bosse », « estropiée ») enveloppe « voûté » face à « osseuse » : les résonances entre ces lexies insiste sur l'idée centrale par résonance lexicale dans Notre-Dame de Paris.", keywords: ["champ lexical","corps","mutil","bosse","estropi","osseux"] }
    ]
  },
  {
    id: "GT-029",
    titre: "Lettres persanes — satire des mœurs",
    auteur: "Montesquieu",
    oeuvre: "Lettres persanes (1721)",
    genre: "Conte argumenté",
    diff: 2,
    texte: `Comment peut-on être Persan ! … J'ai à peine revu la Perse, que je ne demande plus comment on peut être Européen ; car il faut avouer que l'on ne voit rien de si singulier que ce pays-ci.`,
    contexte: "Usbek découvre Paris avec un regard étranger — satire des mœurs européennes.",
    attendus: [
      { procede: "Registre satirique", citation: "« rien de si singulier que ce pays-ci »", interpretation: "Registre satirique : le regard persan déforme Paris pour en révéler les absurdités — dénonciation par le décalage culturel.", keywords: ["satirique","singulier","décalage","absurd","dénonc","paris"] },
      { procede: "Antithèse", citation: "« Persan » / « Européen »", interpretation: "Antithèse: « Persan » s'oppose à « Européen ». Cette tension structure le sens et oblige le lecteur à mesurer l'écart entre les deux idées.", keywords: ["antithèse","persan","européen","contraste","civilis","critique"] },
      { procede: "Hyperbole", citation: "« rien de si singulier »", interpretation: "L'hyperbole « rien de si singulier » pousse l'expression au-delà du vraisemblable : Montesquieu souligne l'intensité du ressenti pour marquer usbek découvre paris avec un regard étranger.", keywords: ["hyperbole","singulier","exag","comique","satire","paris"] },
      { procede: "Anaphore", citation: "« Comment peut-on être Persan… comment on peut être Européen »", interpretation: "Anaphore de la structure « comment peut-on être » : reprise qui souligne le choc culturel et la relativisation des mœurs.", keywords: ["anaphore","comment","persan","européen","choc","mœurs"] }
    ]
  },
  {
    id: "GT-030",
    titre: "Athalie — monologue d'Athalie",
    auteur: "Racine",
    oeuvre: "Athalie (1691)",
    genre: "Tragédie",
    diff: 3,
    texte: `Quel prodige nouveau me fait trembler et craindre ? … Pour me punir, que de choisir un si faible instrument ?`,
    contexte: "Athalie panique devant la prophétie — tragédie biblique, peur de la fatalité.",
    attendus: [
      { procede: "Registre tragique", citation: "« me fait trembler et craindre »", interpretation: "Registre tragique : Athalie est saisie par la peur d'une fatalité divine — terreur devant un pouvoir qui la dépasse.", keywords: ["tragique","trembl","crainte","fatal","peur","dépasse"] },
      { procede: "Anaphore", citation: "« trembler et craindre ? »", interpretation: "L'anaphore (« Un enfant, un enfant roi ! ») fonctionne comme un leitmotiv : elle martèle l'idée directrice et renforce la cohésion du passage.", keywords: ["anaphore","enfant","roi","répét","angoiss","reine"] },
      { procede: "Hyperbole", citation: "« Quel prodige nouveau »", interpretation: "« Quel prodige nouveau » relève de l'hyperbole : l'amplification souligne l'intensité du ressenti et fixe l'émotion autour de athalie panique devant la prophétie.", keywords: ["hyperbole","prodige","exag","menace","surnaturel","nouveau"] },
      { procede: "Antithèse", citation: "« n si faible instrume »", interpretation: "Antithèse entre la faiblesse de l'enfant et la puissance de la punition — Dieu humilie la reine par le dérisoire.", keywords: ["antithèse","faible","enfant","punir","dérisoire","dieu"] },
      { procede: "Registre pathétique", citation: "« punir, que de choisir un si faible instrument ? »", interpretation: "Registre pathétique : la souffrance et la peur d'Athalie suscitent une pité troublée — même la tyranne devient une proie.", keywords: ["pathétique","souffr","pit","peur","athalie","tyranne"] }
    ]
  }
];
/* Contexte des œuvres — affiché dans Grands textes (clé = fragment du titre normalisé) */
const GTEXT_OEUVRE_INFO = {
  "poemes saturniens": "Premier recueil de Verlaine (1866) : poésie mélancolique, musicalité des sonorités, correspondances entre nature et état d'âme.",
  "chanson d automne": "Poème de Verlaine (1866) : automne, finitude, « musicale » par les assonances — figure emblématique du lyrisme fin-de-siècle.",
  "le cid": "Tragédie de Corneille (1637) : amour de Chimène et Rodrigue, conflit entre passion et devoir d'honneur — pièce fondatrice du classicisme.",
  "phedre": "Tragédie de Racine (1677) : passion interdite, fatalité, registre pathétique et tragique — héroïne dominée par un désir qu'elle combat.",
  "andromaque": "Tragédie de Racine (1667) : veuve d'Hector, protection d'Astyanax — pièce d'ambiance tragique et pathétique.",
  "berenice": "Tragédie de Racine (1670) : amour impossible entre Titus et Bérénice — le devoir politique l'emporte sur la passion.",
  "athalie": "Tragédie biblique de Racine (1691) : reine idolâtre terrifiée par la prophétie — peur de la fatalité divine.",
  "horace": "Tragédie de Corneille (1640) : patriotisme romain, conflit familial — registre héroïque et tragique.",
  "les contemplations": "Recueil de Hugo (1856) : deuil, mémoire, nature — après la mort de Léopoldine, poésie mélancolique et visionnaire.",
  "les miserables": "Roman de Hugo (1862) : misère sociale, rédemption, engagement — Jean Valjean, figure du roman engagé du XIXe siècle.",
  "notre dame de paris": "Roman de Hugo (1831) : moyen âge parisien, Quasimodo, Esmeralda — roman historique et romantique.",
  "les fleurs du mal": "Recueil de Baudelaire (1857) : spleen, beauté du mal, modernité poétique — censuré à sa parution.",
  "l albatros": "Poème des Fleurs du Mal : métaphore de l'artiste incompris, moqué sur terre comme l'albatros sur le pont du navire.",
  "l avare": "Comédie de Molière (1668) : Harpagon, obsession de l'argent — comédie de caractère et satire sociale.",
  "tartuffe": "Comédie de Molière (1664) : hypocrisie religieuse dénoncée — Orgon dupé par Tartuffe.",
  "les fourberies de scapin": "Comédie de Molière (1671) : intrigue, ruse, registre comique — Scapin comme valet rusé.",
  "dom juan": "Pièce de Molière (1665) : séducteur et blasphémateur — mélange comique et tragique, double énonciation.",
  "fables": "Recueil de La Fontaine (1668 et suiv.) : « plaire et instruire » — animaux, satire des pouvoirs, morale implicite ou explicite.",
  "candide": "Conte philosophique de Voltaire (1759) : satire de l'optimisme leibnizien — « il faut cultiver notre jardin ».",
  "lettres persanes": "Roman épistolaire de Montesquieu (1721) : regard critique sur la société française via des Persans.",
  "meditations poetiques": "Recueil de Lamartine (1820) : « Le Lac », poésie du souvenir et du temps qui passe — lyrisme romantique.",
  "odes": "Recueil de Ronsard (1545) : poésie amoureuse et néo-platonicienne — « Mignonne, allons voir si la rose… ».",
  "les regrets": "Recueil de Du Bellay (1558) : nostalgie de l'Italie, « Heureux qui comme Ulysse… » — poésie humaniste.",
  "l etranger": "Roman de Camus (1942) : Meursault, absurde, indifférence — existentialisme, narrateur autodiégétique.",
  "la peste": "Roman de Camus (1947) : épidémie à Oran, engagement collectif — allégorie de la résistance.",
  "le horla": "Nouvelle fantastique de Maupassant (1887) : hantise, folie progressive — narrateur peu fiable.",
  "madame bovary": "Roman de Flaubert (1857) : Emma Bovary, bovarysme, réalisme — procès pour outrage à la morale publique.",
  "germinal": "Roman de Zola (1885) : grève des mineurs, naturalisme, dénonciation sociale — cycle des Rougon-Macquart.",
  "le rouge et le noir": "Roman de Stendhal (1830) : Julien Sorel, ambition provinciale, mœurs post-revolutionnaires — roman psychologique.",
  "la parure": "Nouvelle de Maupassant (1884) : Matilde Loisel, collier perdu — ironie du destin, dénouement choc.",
  "alcools": "Recueil d'Apollinaire (1913) : modernité, « Zone », rupture avec le symbolisme.",
  "romances sans paroles": "Recueil de Verlaine (1874) : poétique de la suggestion, musicalité, « de la musique avant toute chose ».",
  "huis clos": "Pièce de Sartre (1944) : « L'enfer, c'est les autres » — théâtre de l'absurde existentiel.",
  "cyrano de bergerac": "Pièce de Rostand (1897) : panache, amour impossible, alexandrins — héros romantique.",
  "du cote de chez swann": "Roman de Proust (1913) : mémoire involontaire, madeleine — début de la Recherche du temps perdu.",
  "les liaisons dangereuses": "Roman épistolaire de Laclos (1782) : manipulation, séduction, morale — Lumières et cynisme.",
  "les confessions": "Autobiographie de Rousseau (1782) : naissance du « je » moderne, sincérité revendiquée.",
  "rhinoceros": "Pièce d'Ionesco (1959) : conformisme, totalitarisme — théâtre de l'absurde.",
  "l aurore": "Recueil de Hugo (1898) : engagement politique, satire du Second Empire.",
  "jadis et naguere": "Recueil de Baudelaire (1884) : poèmes en prose et pièces diverses — spleen et modernité."
};

const GTEXT_GENRES = [
  { id: "", label: "Tous les genres" },
  { id: "poesie", label: "Poésie", test: g => /poésie|sonnet|symboliste|moderniste|élégiaque|lyrique/i.test(g) },
  { id: "theatre", label: "Théâtre", test: g => /tragédie|comédie|théâtre/i.test(g) },
  { id: "roman", label: "Roman & nouvelle", test: g => /roman|nouvelle|naturaliste|fantastique/i.test(g) },
  { id: "fable", label: "Fable & conte", test: g => /fable|conte|philosophique|argumenté/i.test(g) }
];

function gtextMatchGenre(text, genreId) {
  if (!genreId) return true;
  const g = GTEXT_GENRES.find(x => x.id === genreId);
  return g ? g.test(text.genre) : true;
}

const GTEXT_DIFFS = [
  { id: 0, label: "Tous" },
  { id: 1, label: "★ Facile" },
  { id: 2, label: "★★ Moyen" },
  { id: 3, label: "★★★ Difficile" }
];
