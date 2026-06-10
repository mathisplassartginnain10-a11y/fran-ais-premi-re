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
    texte: `Chanson d'automne — Paul Verlaine (Poèmes saturniens, 1866)
Poème lyrique en tercets — mélancolie automnale et musicalité des assonances.

I
Les sanglots longs
Des violons
De l'automne
Blessent mon cœur
D'une langueur
Monotone.

II
Tout suffocant
Et blême, quand
Sonne l'heure,
Je me souviens
Des jours anciens
Et je pleure ;

III
Et je m'en vais
Au vent mauvais
Qui m'emporte
Deçà, delà,
Pareil à la
Feuille morte.`,
    contexte: "Poème lyrique en vers impairs — mélancolie automnale, correspondances entre paysage et état d'âme.",
    attendus: [
      { procede: "Assonance", citation: "« Les sanglots longs / Des violons / De l'automne »", interpretation: "Assonance en [ɔ̃] : « sanglots », « longs », « violons », « automne » — sonorité grave qui imite la plainte des instruments et installe la mélancolie.", keywords: ["assonance","automne","violons","mélancol","sonorité"] },
      { procede: "Comparaison", citation: "« Pareil à la / Feuille morte »", interpretation: "Comparaison explicite avec « pareil à » : le poète se compare à une feuille morte emportée par le vent — image de l'impuissance face au temps.", keywords: ["comparaison","feuille","morte","vent","impuiss"] },
      { procede: "Enjambement", citation: "« Et je m'en vais / Au vent mauvais / Qui m'emporte »", interpretation: "Enjambement : le sens déborde d'un vers à l'autre et brise la régularité — traduit l'instabilité du sujet poétique.", keywords: ["enjambement","vers","rythme","instab","déborde"] },
      { procede: "Registre lyrique", citation: "« Je me souviens / Des jours anciens / Et je pleure »", interpretation: "Registre lyrique : expression du « je » et de sentiments intimes (souvenir, larmes) — subjectivité et mélancolie personnelle.", keywords: ["lyrique","pleure","souvenir","intime","mélancol"] }
    ]
  },
  {
    id: "GT-002",
    titre: "Le Cid — Chimène",
    auteur: "Corneille",
    oeuvre: "Le Cid (1637)",
    genre: "Théâtre tragique",
    diff: 2,
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
Il m'offense, et je l'aime ; et malgré mon courroux,
Je sens qu'en dépit de tout l'effort que je puis faire,
Je pleure sa victoire, et tremble pour sa vie.
LE COMTE
Il te faut un grand cœur pour parler ainsi.
CHIMÈNE
Il m'offense, et je l'aime encore.`,
    contexte: "Scène d'amour impossible — Chimène avoue par litote son amour pour Rodrigue tout en devant venger son père.",
    attendus: [
      { procede: "Litote", citation: "« Va, je ne te hais point »", interpretation: "Litote : nier la haine pour exprimer l'amour — pudeur tragique de Chimène devant son père.", keywords: ["litote","hais","amour","pudeur","chimène"] },
      { procede: "Antithèse", citation: "« Il m'offense, et je l'aime »", interpretation: "Antithèse entre offense et amour — cœur du conflit tragique cornelien entre passion et devoir.", keywords: ["antithèse","offense","aime","conflit","honneur"] },
      { procede: "Registre pathétique", citation: "« Je pleure sa victoire, et tremble pour sa vie »", interpretation: "Registre pathétique : compassion malgré le devoir de vengeance — pitié du spectateur.", keywords: ["pathétique","pleure","tremble","compassion","devoir"] },
      { procede: "Oxymore", citation: "« Un funeste objet qui m'avait tant de charmes »", interpretation: "Oxymore : « funeste » et « charmes » s'opposent pour dire l'ambivalence du sentiment amoureux.", keywords: ["oxymore","funeste","charmes","contradict","amour"] }
    ]
  },
  {
    id: "GT-003",
    titre: "Phèdre — monologue",
    auteur: "Racine",
    oeuvre: "Phèdre (1677)",
    genre: "Tragédie",
    diff: 2,
    texte: `PHÈDRE
Hélas ! ils m'ont tressailli d'un frisson de joie et d'espérance !
Mais vous ne m'appelez plus ni ma sœur ni ma fille,
Et dans vos piteux regards je ne me reconnais plus.
Ne m'approchez pas, je vous en conjure ;
Vous connaissez trop bien tout l'infâme de ma peine.
Je l'ai voulu, j'ai tenté de lui résister,
Depuis qu'on m'a soumise à cet Hémon charmant,
Depuis qu'un impur amour s'est glissé dans mon sein,
À ma juste faiblesse comment ai-je pu résister ?
Ô dieux ! que n'ai-je au fond des mers une retraite !
Je voulais mourir, et j'ose avouer au jour
La honte de mes vœux et l'horreur de mon amour.`,
    contexte: "Phèdre avoue à Œnone sa passion interdite pour Hippolyte — fatalité divine et déchirement moral.",
    attendus: [
      { procede: "Hyperbole", citation: "« que n'ai-je au fond des mers une retraite ! »", interpretation: "Hyperbole : souhait exagéré de disparaître au fond des mers pour échapper à la passion — intensité de la honte.", keywords: ["hyperbole","mers","retraite","passion","honte"] },
      { procede: "Anaphore", citation: "« Je l'ai voulu, j'ai tenté de lui résister »", interpretation: "Anaphore de « j'ai » : martèlement qui insiste sur l'effort vain contre l'amour interdit.", keywords: ["anaphore","voulu","tenté","résist","martel"] },
      { procede: "Registre pathétique", citation: "« La honte de mes vœux et l'horreur de mon amour »", interpretation: "Registre pathétique : aveu de la honte amoureuse — compassion et malaise devant la passion coupable.", keywords: ["pathétique","honte","vœux","amour","aveu"] },
      { procede: "Champ lexical", citation: "« impur amour »", interpretation: "Champ lexical de la faute et de la culpabilité — vocabulaire qui traduit le malaise moral de Phèdre.", keywords: ["champ lexical","impur","honte","horreur","faute"] }
    ]
  },
  {
    id: "GT-004",
    titre: "Demain, dès l'aube…",
    auteur: "Hugo",
    oeuvre: "Les Contemplations (1856)",
    genre: "Poésie élégiaque",
    diff: 2,
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
Un bouquet de houx vert et d'héliotrope bleu.`,
    contexte: "Élégie à la mémoire de Léopoldine — voyage du deuil vers la tombe à Villequier.",
    attendus: [
      { procede: "Anaphore", citation: "« J'irai par la forêt, j'irai par la montagne »", interpretation: "Anaphore de « j'irai » : insistance sur le projet de départ obstiné — rythme martelé du deuil.", keywords: ["anaphore","irai","répét","départ","deuil"] },
      { procede: "Comparaison", citation: "« le jour pour moi sera comme la nuit »", interpretation: "Comparaison avec « comme » : le jour devient nuit pour le poète en deuil — temps obscurci par la perte.", keywords: ["comparaison","jour","nuit","deuil","obscur"] },
      { procede: "Énumération", citation: "« Seul, inconnu, le dos courbé, les mains croisées, / Triste »", interpretation: "Énumération de traits du voyageur en deuil — chaque terme ajoute une dimension à la solitude.", keywords: ["énumération","seul","triste","solitude","deuil"] },
      { procede: "Registre lyrique", citation: "« je sais que tu m'attends »", interpretation: "Registre lyrique élégiaque : apostrophe à la morte, expression intime de la perte et du regret.", keywords: ["lyrique","élégiaque","attends","perte","apostrophe"] }
    ]
  },
  {
    id: "GT-005",
    titre: "L'Avare — Harpagon",
    auteur: "Molière",
    oeuvre: "L'Avare (1668)",
    genre: "Comédie",
    diff: 1,
    texte: `HARPAGON
Hélas ! mon pauvre argent, mon pauvre argent, mes amours, es-tu perdu ? Est-ce bien toi ? Oui, c'est toi-même ; tu n'as point changé de visage, et tu es encore gaillon et rubicond, et bénéficieux. O ciel ! t'ai-je donc perdu ? Qui t'a ravi ? Où es-tu ? Où te caches-tu ? Où es-tu ? Te voit-on ? T'entends-tu ? Non : tu es invisible à mes yeux, mais présent à mon cœur. Reste en ce lieu, et ne me quitte pas. Allons, je me veux rassurer, je me veux remettre. Ne me troublera-t-on point et laissera-t-on ma maison en repos ? Je m'en vais par toute ma maison voir si personne n'y est caché.`,
    contexte: "Harpagon découvre la disparition de son trésor — monologue comique où l'avarice devient passion amoureuse.",
    attendus: [
      { procede: "Anaphore", citation: "« mon pauvre argent, mon pauvre argent, mes amours »", interpretation: "Anaphore de « mon pauvre argent » : répétition obsédante qui traduit l'attachement pathologique à l'argent.", keywords: ["anaphore","argent","répét","obsess","avarice"] },
      { procede: "Apostrophe", citation: "« es-tu perdu ? Est-ce bien toi ? »", interpretation: "Apostrophe à l'argent personnifié : Harpagon s'adresse à son trésor comme à un être aimé — comique de caractère.", keywords: ["apostrophe","argent","amours","personnif","comique"] },
      { procede: "Hyperbole", citation: "« invisible à mes yeux, mais présent à mon cœur »", interpretation: "Hyperbole amoureuse appliquée à l'argent — exagération grotesque qui révèle l'avarice.", keywords: ["hyperbole","cœur","invisible","exag","grotesque"] },
      { procede: "Registre comique", citation: "« gaillon et rubicond, et bénéficieux »", interpretation: "Registre comique : vocabulaire amoureux pour décrire des écus — décalage satirique entre registre et objet.", keywords: ["comique","décalage","satire","harpagon","écus"] }
    ]
  },
  {
    id: "GT-006",
    titre: "Correspondances",
    auteur: "Baudelaire",
    oeuvre: "Les Fleurs du Mal (1857)",
    genre: "Poésie symboliste",
    diff: 3,
    texte: `La Nature est un temple où de vivants piliers
Laissent parfois sortir de confuses paroles ;
L'homme y passe à travers des forêts de symboles
Qui l'observent avec des regards familiers.

Comme de longs échos qui de loin se confondent
Dans une ténébreuse et profonde unité,
Vaste comme la nuit et comme la clarté,
Les parfums, les couleurs et les sons se répondent.

Il est des parfums frais comme des chairs d'enfants,
Doux comme les hautbois, verts comme les prairies,
— Et d'autres, corrompus, riches et triomphants,
Ayant l'expansion des choses infinies,
Comme l'ambre, le musc, le benjoin et l'encens,
Qui chantent les transports de l'esprit et des sens.`,
    contexte: "Sonnet symboliste — correspondances entre les sens et vision sacrée du monde naturel.",
    attendus: [
      { procede: "Métaphore", citation: "« La Nature est un temple où de vivants piliers »", interpretation: "Métaphore : la Nature identifiée à un temple sans outil comparatif — sacralisation du monde et mystère.", keywords: ["métaphore","nature","temple","piliers","sacr"] },
      { procede: "Personnification", citation: "« Qui l'observent avec des regards familiers »", interpretation: "Personnification : les symboles observent l'homme — le monde devient actif et inquiétant.", keywords: ["personnification","symbole","regard","observe","inquiét"] },
      { procede: "Comparaison", citation: "« Vaste comme la nuit et comme la clarté »", interpretation: "Comparaison double : les correspondances englobent l'opposition nuit/clarté — étendue du sensible.", keywords: ["comparaison","nuit","clarté","vaste","sensible"] },
      { procede: "Synesthie", citation: "« Les parfums, les couleurs et les sons se répondent »", interpretation: "Synesthie : mélange des parfums, couleurs et sons — cœur de la poétique baudelairienne.", keywords: ["synesthie","parfum","couleur","son","correspond"] }
    ]
  },
  {
    id: "GT-007",
    titre: "Horace — antithèse",
    auteur: "Corneille",
    oeuvre: "Horace (1640)",
    genre: "Tragédie",
    diff: 2,
    texte: `CAMILLE
Rome, l'unique objet de mon ressentiment !
Rome, à qui vient ton bras d'immoler mon amant !
Rome, qui veux que mon cœur adore ta puissance,
Et qui le vois encor pleurer sa délivrance !
Les dieux ont soif, les hommes ont faim :
C'est là le sort affreux qui pèse sur les humains.
Quoi ! Rome triomphe, et Curiace est mort !
Quoi ! le vainqueur est heureux, et le vaincu trépassé !
Et moi, je pleure et je gronde, et je n'ose me plaindre,
De peur qu'on ne m'accuse encor de l'avoir craint !`,
    contexte: "Camille maudit Rome après la mort de Curiace — haine politique et amour contrarié.",
    attendus: [
      { procede: "Anaphore", citation: "« Rome, l'unique objet de mon ressentiment ! »", interpretation: "Anaphore de « Rome » : incantation de la haine politique — effet martelé et pathétique.", keywords: ["anaphore","rome","incant","haine","martel"] },
      { procede: "Antithèse", citation: "« le vainqueur est heureux, et le vaincu trépassé »", interpretation: "Antithèse entre victoire romaine et mort de l'amant — conflit tragique entre amour et cité.", keywords: ["antithèse","vainqueur","vaincu","mort","rome"] },
      { procede: "Registre pathétique", citation: "« moi, je pleure et je gronde »", interpretation: "Registre pathétique : subjectivité de Camille face à l'histoire — compassion du spectateur.", keywords: ["pathétique","pleure","gronde","camille","compassion"] },
      { procede: "Hyperbole", citation: "« Rome, à qui vient ton bras d'immoler mon amant »", interpretation: "Hyperbole : Rome personnifiée assassine l'amant — exagération qui traduit la démesure de la douleur.", keywords: ["hyperbole","immoler","amant","rome","exag"] }
    ]
  },
  {
    id: "GT-008",
    titre: "Andromaque — serpents",
    auteur: "Racine",
    oeuvre: "Andromaque (1667)",
    genre: "Tragédie",
    diff: 1,
    texte: `ANDROMAQUE
Barbare, te souvient-il bien que ce fils, ce témoin,
Ce jeune Astyanax, dont tu veux faire un otage,
Est du grand Hector le fils, et le seul, et le dernier ?
Ne te suffit-il pas qu'un sort cruel et funeste
Ait mis Troie en cendres et tous ses dieux en poudre ?
Faut-il que, dans la Grèce où tu l'as fait conduire,
Son nom soit reproché, sa vertu criminelle,
Et qu'il n'ait de son père hérité que la haine ?
PYRRHUS
Je sais qu'aux Grecs sa mort fut fort utile,
Mais, sans vous offenser, Madame, en ce témoin
Je ne vois que Pyrrhus et ce qu'il doit à Achille.
ANDROMAQUE
Il doit à votre père, et non pas à vos fureurs.
PYRRHUS
Madame, dans le fils je ne vois que le père.`,
    contexte: "Andromaque défend Astyanax face à Pyrrhus — menace politique et pathétique au cœur de la tragédie racinienne.",
    attendus: [
      { procede: "Anaphore", citation: "« ce fils, ce témoin »", interpretation: "Anaphore de « ce fils, ce témoin » : insistance sur Astyanax comme enjeu dramatique — martèlement pathétique.", keywords: ["anaphore","fils","témoin","astyanax","insistance","pathétique"] },
      { procede: "Registre pathétique", citation: "« dont tu veux faire un otage »", interpretation: "Registre pathétique : la mère protège l'enfant du héros — pitié et indignation devant la violence politique.", keywords: ["pathétique","otage","astyanax","mère","pitié","hector"] },
      { procede: "Antithèse", citation: "« hérité que la haine »", interpretation: "Antithèse : le fils d'Hector n'hérite que de la haine — injustice tragique infligée par les vainqueurs grecs.", keywords: ["antithèse","haine","héritage","injustice","hector","fils"] },
      { procede: "Dialogue", citation: "« dans le fils je ne vois que le père »", interpretation: "Dialogue : Pyrrhus réduit Astyanax à l'ombre d'Achille — tension entre vengeance et amour contrarié.", keywords: ["dialogue","père","fils","pyrrhus","achille","tension"] },
      { procede: "Hyperbole", citation: "« Troie en cendres et tous ses dieux en poudre »", interpretation: "Hyperbole : la destruction totale de Troie est rappelée pour dramatiser l'excès de la persécution contre un enfant.", keywords: ["hyperbole","troie","cendres","destruction","exagération","guerre"] }
    ]
  },
  {
    id: "GT-009",
    titre: "Le Corbeau et le Renard",
    auteur: "La Fontaine",
    oeuvre: "Fables (1668)",
    genre: "Fable",
    diff: 1,
    texte: `Maître Corbeau, sur un arbre perché,
Tenait en son bec un fromage.
Maître Renard, par l'odeur alléché,
Lui tint à peu près ce langage :
« Et bonjour, Monsieur du Corbeau.
Que vous êtes joli ! que vous me semblez beau !
Sans mentir, si votre ramage
Se rapporte à votre plumage,
Vous êtes le Phénix des hôtes de ces bois. »
À ces mots le Corbeau ne se sent pas de joie ;
Et pour montrer sa belle voix,
Il ouvre un large bec, laisse tomber sa proie.
Le Renard s'en saisit, et dit : « Mon bon Monsieur,
Apprenez que tout flatteur
Vit au dépens de celui qui l'écoute :
Cette leçon vaut bien un fromage, sans doute. »
Le Corbeau, honteux et confus,
Jura, mais un peu tard, qu'on ne l'y prendrait plus.`,
    contexte: "Fable didactique — flatterie du Renard pour voler le fromage du Corbeau.",
    attendus: [
      { procede: "Hyperbole", citation: "« Vous êtes le Phénix des hôtes de ces bois »", interpretation: "Hyperbole flatteuse : comparer le Corbeau au Phénix exagère la louange pour le manipuler — ironie du Renard.", keywords: ["hyperbole","phénix","flatte","exag","louange"] },
      { procede: "Registre comique", citation: "« le Corbeau ne se sent pas de joie »", interpretation: "Registre comique : la vanité du Corbeau provoque la chute — situation burlesque entre animaux parlants.", keywords: ["comique","vanité","corbeau","chute","burlesque"] },
      { procede: "Morale", citation: "« tout flatteur / Vit au dépens de celui qui l'écoute »", interpretation: "Morale explicite : la fable dénonce la flatterie et clôt le récit par une leçon didactique.", keywords: ["morale","flatteur","écoute","leçon","didactique"] },
      { procede: "Dialogue", citation: "« Et bonjour, Monsieur du Corbeau »", interpretation: "Dialogue feint entre Renard et Corbeau : la politesse masque la ruse et structure la scène en répliques.", keywords: ["dialogue","bonjour","renard","ruse","politesse"] }
    ]
  },
  {
    id: "GT-010",
    titre: "Candide — boucherie héroïque",
    auteur: "Voltaire",
    oeuvre: "Candide (1759)",
    genre: "Conte philosophique",
    diff: 2,
    texte: `« C'est une boucherie héroïque et glorieuse », dit un officier. « Non, répondit un autre, je sais que jamais le despotisme et la barbarie n'ont poussé leurs excès jusque-là. Ils font ici quinze ou vingt mille hommes d'un coup ; les balles et les baïonnettes ne suffisant pas à leur massacre, on décide de les baigner dans des lacs de sang ; trente mille voisins combattent depuis vingt ans sans se connaître, pour des intérêts dont ils n'ont cure. » Candide, qui avait été cultivé dans ces bonnes maximes, pleurait presque à chaque bataille dont les bourreaux lui rendaient compte. « Quelle est cette rage de se faire tuer sans profit pour personne ? »`,
    contexte: "Voltaire dénonce les guerres absurdes — satire de l'euphémisme militaire et du carnage.",
    attendus: [
      { procede: "Oxymore", citation: "« boucherie héroïque et glorieuse »", interpretation: "Oxymore : « boucherie » (horreur) associée à « héroïque » et « glorieuse » — décalage satirique qui dénonce l'absurdité de la guerre.", keywords: ["oxymore","boucherie","héroïque","glorieux","guerre"] },
      { procede: "Hyperbole", citation: "« quinze ou vingt mille hommes d'un coup »", interpretation: "Hyperbole : chiffres exagérés du massacre — Voltaire amplifie l'horreur pour provoquer l'indignation.", keywords: ["hyperbole","mille","massacre","exag","horreur"] },
      { procede: "Registre satirique", citation: "« boucherie héroïque »", interpretation: "Registre satirique : Voltaire ridiculise le discours officiel sur la guerre par l'ironie et le grotesque.", keywords: ["satirique","ironie","dénonc","guerre","grotesque"] },
      { procede: "Antithèse", citation: "« se faire tuer sans profit pour personne »", interpretation: "Antithèse entre l'idéal héroïque de la guerre et la réalité absurde — Candide oppose naïveté et horreur.", keywords: ["antithèse","mort","profit","absurde","héro"] }
    ]
  },
  {
    id: "GT-011",
    titre: "Mignonne, allons voir si la rose",
    auteur: "Ronsard",
    oeuvre: "Odes (1545)",
    genre: "Poésie lyrique",
    diff: 1,
    texte: `Mignonne, allons voir si la rose
Qui ce matin avoit desclose
Sa robe de pourpre au Soleil,
A point perdu ceste vesprée
Les plis de sa robe pourprée,
Et son teint au vôtre pareil.
Las ! voyez comme en peu d'espace,
Mignonne, elle a dessus la place,
Las ! las ! ses beautés laissé choir !
Ô vraiment marâtre Nature,
Puis qu'une fleur n'est qu'un moment,
Si belle, matin à l'assise,
Soyons à l'assise, vous et moi,
Deux roses avec le souci
De vous voir ici-bas fleurir.`,
    contexte: "Carpe diem poétique — la rose symbolise la beauté éphémère de la femme aimée.",
    attendus: [
      { procede: "Comparaison", citation: "« son teint au vôtre pareil »", interpretation: "Comparaison implicite entre le teint de la rose et celui de la bien-aimée — rapprochement qui lie nature et beauté féminine.", keywords: ["comparaison","teint","pareil","rose","beauté"] },
      { procede: "Personnification", citation: "« Sa robe de pourpre au Soleil »", interpretation: "Personnification : la rose est vêtue d'une « robe de pourpre » — transfert du vêtement humain sur la fleur.", keywords: ["personnification","robe","pourpre","rose","fleur"] },
      { procede: "Registre lyrique", citation: "« Mignonne, allons voir si la rose »", interpretation: "Registre lyrique : apostrophe amoureuse qui célèbre la beauté et l'urgence du temps.", keywords: ["lyrique","amour","mignonne","intime","beauté"] },
      { procede: "Métaphore", citation: "« Deux roses avec le souci »", interpretation: "Métaphore : le poète et sa bien-aimée sont deux roses — image du carpe diem et de la fragilité du temps.", keywords: ["métaphore","roses","souci","carpe diem","éphémère"] }
    ]
  },
  {
    id: "GT-012",
    titre: "Le Lac",
    auteur: "Lamartine",
    oeuvre: "Méditations poétiques (1820)",
    genre: "Poésie élégiaque",
    diff: 2,
    texte: `Ainsi, toujours poussés vers de nouveaux rivages,
Dans la nuit éternelle emportés,
Ne pourrons-nous jamais sur l'océan des âges
Jeter l'ancre un seul jour ?

O lac ! l'année déjà fuit vers l'autre éternité
Un sombre morceau d'un azure infini !
Et je me souviens de l'heure où, debout sur les rochers,
Tu lui disais adieu, et où, triste et tremblant,
Tu semblais d'un long soupir abandonner les eaux
Pour les eaux de l'azur, pour le firmament.
Et le lac frissonnait sous le vent du soir.`,
    contexte: "Élégie célèbre — le lac témoin d'un amour passé, métaphore du temps qui fuit.",
    attendus: [
      { procede: "Comparaison", citation: "« sur l'océan des âges »", interpretation: "Comparaison : la vie est un océan sans rivage fixe — image de l'instabilité et du temps irréversible.", keywords: ["comparaison","océan","âges","temps","instab"] },
      { procede: "Personnification", citation: "« le lac frissonnait sous le vent »", interpretation: "Personnification : le lac « frissonnait » comme un être sensible — le paysage partage l'émotion du poète.", keywords: ["personnification","lac","frisson","vent","émotion"] },
      { procede: "Apostrophe", citation: "« O lac ! »", interpretation: "Apostrophe au lac : le poète interpelle le paysage comme un interlocuteur — lyrisme élégiaque et intimité du souvenir.", keywords: ["apostrophe","lac","souvenir","élégiaque","lyrique"] },
      { procede: "Enjambement", citation: "« Ainsi, toujours poussés vers de nouveaux rivages »", interpretation: "Enjambement : le sens déborde du vers et mime le mouvement sans fin — rythme du flux temporel.", keywords: ["enjambement","rivages","vers","mouvement","flux"] }
    ]
  },
  {
    id: "GT-013",
    titre: "Heureux qui, comme Ulysse",
    auteur: "Du Bellay",
    oeuvre: "Les Regrets (1558)",
    genre: "Sonnet élégiaque",
    diff: 2,
    texte: `Heureux qui, comme Ulysse, a fait un beau voyage,
Ou comme cestuy-là qui conquit la Toison,
Et puis est retourné, plein d'usage et raison,
Vivre entre ses parents le reste de son âge !
Quand reverrai-je, hélas, de mon petit village
Les fossés pleins d'eau vive entre deux rangs de saules,
Mes chères maisons de brique et de marne blanche,
À l'entour de Paris, de grands pays de France,
Et mon Anjou verdoyant, et l'Angevin bocage ?`,
    contexte: "Du Bellay, exilé à Rome, regrette son Anjou natal — sonnet du retour impossible.",
    attendus: [
      { procede: "Comparaison", citation: "« Heureux qui, comme Ulysse »", interpretation: "Comparaison avec « comme » : le poète envie Ulysse qui a pu rentrer chez lui — modèle du voyage accompli.", keywords: ["comparaison","comme","ulysse","voyage","retour"] },
      { procede: "Énumération", citation: "« Les fossés pleins d'eau vive entre deux rangs de saules »", interpretation: "Énumération des lieux regrettés : chaque détail ancre la nostalgie dans le paysage concret de l'Anjou.", keywords: ["énumération","fossés","saules","nostalg","anjou"] },
      { procede: "Registre lyrique", citation: "« Quand reverrai-je, hélas »", interpretation: "Registre lyrique élégiaque : « hélas » et question rhétorique expriment le manque et l'impossibilité du retour.", keywords: ["lyrique","élégiaque","hélas","nostalg","exil"] },
      { procede: "Anaphore", citation: "« Et mon Anjou verdoyant, et l'Angevin bocage »", interpretation: "Anaphore de « et » : accumulation des lieux natals — insistance nostalgique sur le pays perdu.", keywords: ["anaphore","anjou","bocage","nostalg","pays"] }
    ]
  },
  {
    id: "GT-014",
    titre: "L'Étranger — Meursault",
    auteur: "Camus",
    oeuvre: "L'Étranger (1942)",
    genre: "Roman",
    diff: 2,
    texte: `Aujourd'hui, maman est morte. Ou peut-être hier, je ne sais pas. J'ai reçu un télégramme de l'asile : « Mère décédée. Enterrement demain. Sentiments distingués. » Cela ne veut rien dire. C'était peut-être hier. L'asile de vieillards est à Marengo, à quatre-vingts kilomètres d'Alger. Je prendrai l'autobus à deux heures et j'arriverai dans l'après-midi. Ainsi, je pourrai veiller et je rentrerai demain soir. J'ai demandé deux jours de congé à mon patron et il ne pouvait pas me les refuser avec une excuse pareille. Il m'a dit : « Ce n'est pas de ma faute. » Il n'avait pas l'air de me plaindre. J'ai dit : « Non. » Il m'a dit : « Il faisait très chaud. »`,
    contexte: "Incipit célèbre — voix de Meursault, perception limitée et détachée face à la mort de sa mère.",
    attendus: [
      { procede: "Phrase nominale", citation: "« Mère décédée. Enterrement demain. Sentiments distingués. »", interpretation: "Phrase nominale télégraphique : style sec et administratif qui contraste avec l'annonce de la mort — froideur du narrateur.", keywords: ["phrase nominale","télégramme","sec","froid","style"] },
      { procede: "Registre pathétique", citation: "« Aujourd'hui, maman est morte »", interpretation: "Contre-registre : le sujet pathétique (mort de la mère) est traité sans émotion — le pathétique est sous-entendu par l'absence.", keywords: ["pathétique","mort","mère","émotion","absence"] },
      { procede: "Antithèse", citation: "« Sentiments distingués »", interpretation: "Antithèse entre la formule sociale creuse et la réalité brutale (mort) — décalage qui caractérise Meursault.", keywords: ["antithèse","sentiments","mort","décalage","formule"] },
      { procede: "Incertitude", citation: "« Ou peut-être hier, je ne sais pas »", interpretation: "Incertitude narrative : Meursault ne sait même pas quand sa mère est morte — indifférence qui choque le lecteur.", keywords: ["incertitude","peut-être","indifférence","narrateur","choc"] }
    ]
  },
  {
    id: "GT-015",
    titre: "Le Horla",
    auteur: "Maupassant",
    oeuvre: "Le Horla (1887)",
    genre: "Nouvelle fantastique",
    diff: 3,
    texte: `Je me sens étrange, affaibli, tout inquiet. Pourtant, je n'ai pas souffert. Je ne me sens pas souffrant. Mais je ne me sens pas bien. L'impression que j'éprouve est celle d'une force inconnue, mystérieuse et redoutable qui m'écrase, qui me domine et m'obsède sans que je puisse la comprendre et la définir. Je le sens, je le devine. Il est là ! Il est là ! autour de moi, sur moi, dans moi ! Il me bouffe, il me tord, il m'étouffe. Oh ! la suffocation ! Quand il n'occupe pas mon corps, il occupe mon âme ; mon esprit, comme mon corps, n'est plus qu'à lui. Il me suit ! Il me suit ! Il me suit depuis ce matin.`,
    contexte: "Monologue d'un narrateur hanté — présence invisible et folie progressive.",
    attendus: [
      { procede: "Anaphore", citation: "« Il me suit ! Il me suit ! »", interpretation: "Anaphore de « Il me suit » : répétition obsédante qui traduit la folie progressive et l'emprise de l'être invisible.", keywords: ["anaphore","suivi","répét","obsess","hante"] },
      { procede: "Personnification", citation: "« une force inconnue, mystérieuse et redoutable »", interpretation: "Personnification : la force invisible agit comme un être — l'abstraction devient une menace quasi vivante.", keywords: ["personnification","force","menace","vivant","invisible"] },
      { procede: "Champ lexical", citation: "« Il me bouffe, il me tord, il m'étouffe »", interpretation: "Champ lexical de la violence intérieure : bouffer, tordre, étouffer — vocabulaire qui traduit l'oppression psychique.", keywords: ["champ lexical","violence","étouff","oppress","corps"] },
      { procede: "Registre fantastique", citation: "« Il est là ! Il est là ! »", interpretation: "Registre fantastique : l'invisible menace sans preuve rationnelle — le doute sur la raison structure le récit.", keywords: ["fantastique","invisible","menace","doute","raison"] }
    ]
  },
  {
    id: "GT-016",
    titre: "Germinal — la mine",
    auteur: "Zola",
    oeuvre: "Germinal (1885)",
    genre: "Roman naturaliste",
    diff: 2,
    texte: `Et les mineurs montaient, noirs, écrasés, les yeux blancs dans les faces de charbon. Ils sortaient de la fosse comme des bêtes de somme, courbés, haletants, traînant leurs sabots dans la boue. La fosse crachait sa besogne, hommes et bêtes confondus dans la nuit du travail. On ne distinguait plus les visages sous la suie ; on ne voyait que des corps usés, des épaules voûtées, des mains déformées par le pic. Le vent du soir soufflait sur ce défilé de misère, et les femmes attendaient, blêmes, au bord du chemin, les hommes qui rentraient du trou noir.`,
    contexte: "Description de la sortie de mine — dénonciation sociale zolienne.",
    attendus: [
      { procede: "Registre pathétique", citation: "« noirs, écrasés »", interpretation: "Registre pathétique : la souffrance des mineurs suscite pitié et indignation — Zola veut émouvoir pour dénoncer.", keywords: ["pathétique","souffr","mineur","fatigue","pit"] },
      { procede: "Personnification", citation: "« La fosse crachait sa besogne »", interpretation: "Personnification : la fosse « crache » comme un être vivace et vorace — la mine devient agent actif de l'oppression.", keywords: ["personnification","fosse","crache","mine","vorace"] },
      { procede: "Métaphore", citation: "« hommes et bêtes confondus »", interpretation: "Métaphore : les mineurs sont réduits au rang d'animaux de somme — déshumanisation par le travail.", keywords: ["métaphore","bêtes","hommes","déshuman","travail"] },
      { procede: "Champ lexical", citation: "« nuit du travail »", interpretation: "Champ lexical de l'enfermement et de la nuit : charbon, fosse, nuit, noirs — univers souterrain oppressant.", keywords: ["champ lexical","charbon","fosse","nuit","souterrain"] }
    ]
  },
  {
    id: "GT-017",
    titre: "Les Misérables — Gavroche",
    auteur: "Hugo",
    oeuvre: "Les Misérables (1862)",
    genre: "Roman",
    diff: 2,
    texte: `Gavroche était tombé. Il venait de recevoir une balle dans la tête. Il était étendu sur le pavé, les bras en croix, la face tournée vers le ciel. Il ne remuait plus. C'était le petit enfant des rues, le gamin de Paris, celui qui riait au vent, qui chantait dans la mitraille, qui volait des pommes aux étalages, qui criait aux passants des mots d'espoir. Il avait douze ans. Il était mort pour la liberté. Les bourgeois fermèrent leurs fenêtres ; la foule passa sans s'arrêter. Seul, dans l'ombre, un vieux pauvre homme murmura : « Voilà un enfant qui a bien chanté. »`,
    contexte: "Mort de Gavroche — scène pathétique engagée chez Hugo.",
    attendus: [
      { procede: "Registre pathétique", citation: "« le gamin de Paris, celui qui riait au vent »", interpretation: "Registre pathétique : la mort de l'enfant innocent provoque compassion et indignation sociale — Hugo émeut pour faire réfléchir.", keywords: ["pathétique","gavroche","enfant","mort","compassion"] },
      { procede: "Antithèse", citation: "« qui riait au vent »", interpretation: "Antithèse entre la joie de vivre (rire, chanter) et la mort brutale — contraste qui accentue la tragédie.", keywords: ["antithèse","rire","mort","contraste","joie"] },
      { procede: "Hyperbole", citation: "« qui chantait dans la mitraille »", interpretation: "Hyperbole : chanter « dans la mitraille » exagère l'insouciance héroïque de Gavroche — légende de l'enfant courageux.", keywords: ["hyperbole","mitraille","chanter","insouci","héro"] },
      { procede: "Champ lexical", citation: "« une balle dans la tête »", interpretation: "Champ lexical de la violence et de la mort : balle, tombé, mitraille — vocabulaire de la guerre civile.", keywords: ["champ lexical","violence","mort","balle","mitraille"] }
    ]
  },
  {
    id: "GT-019",
    titre: "La Cigale et la Fourmi",
    auteur: "La Fontaine",
    oeuvre: "Fables (1668)",
    genre: "Fable",
    diff: 1,
    texte: `La Cigale, ayant chanté
Tout l'été,
Se trouva fort dépourvue
Quand la bise fut venue :
Pas un seul petit morceau
De mouche ou de vermisseau.
Elle alla crier famine
Chez la Fourmi sa voisine,
La priant de lui prêter
Quelque grain pour subsister
Jusqu'à la saison nouvelle.
— Vous m'avez chanté, lui dit-elle,
Je n'en suis pas fâchée :
Vous avez bien dansé ; maintenant dansez.
La morale de cette fable est si connue,
Qu'il ne sert de rien de la développer.`,
    contexte: "Fable morale sur le travail et la prévoyance — registre didactique.",
    attendus: [
      { procede: "Antithèse", citation: "« ayant chanté / Tout l'été »", interpretation: "Antithèse entre l'insouciance estivale (chanter) et la détresse hivernale (famine) — morale de la prévoyance.", keywords: ["antithèse","été","hiver","chanter","famine"] },
      { procede: "Personnification", citation: "« La Cigale »", interpretation: "Personnification : les insectes parlent, raisonnent et agissent comme des humains — procédé propre à la fable.", keywords: ["personnification","cigale","fourmi","animal","fable"] },
      { procede: "Registre comique", citation: "« Vous avez bien dansé ; maintenant dansez »", interpretation: "Registre comique : la réplique cinglante de la Fourmi retourne la chanson contre la Cigale — ironie morale.", keywords: ["comique","dansé","ironie","fourmi","morale"] },
      { procede: "Champ lexical", citation: "« famine »", interpretation: "Champ lexical du besoin et de la subsistance : famine, dépourvue, grain — contraste avec le chant estival.", keywords: ["champ lexical","famine","grain","besoin","subsist"] }
    ]
  },
  {
    id: "GT-020",
    titre: "Bérénice — adieux",
    auteur: "Racine",
    oeuvre: "Bérénice (1670)",
    genre: "Tragédie",
    diff: 2,
    texte: `BÉRÉNICE
Que je ne respire et ne vis que pour vous ?
Que je ne puisse aimer, et n'écoute, et ne voie,
Et ne sois occupée, et ne pense, et ne croie
Qu'à ce qui peut vous plaire et vous être agréable ?
Que mon cœur, mon esprit, et mes yeux, et ma vie
Soient à vous seul, et ne soient qu'à votre envie ?
Que je ne puisse un jour, sans vous faire de peine,
Dire un seul mot, avoir un seul mouvement,
Un seul regard, qui ne vous soit obéissant ?
Que je ne respire et ne vis que pour vous ?`,
    contexte: "Bérénice avoue son amour impossible pour Titus — registre pathétique et lyrique.",
    attendus: [
      { procede: "Anaphore", citation: "« Que je »", interpretation: "Anaphore de « Que je » : répétition incantatoire qui exprime l'emprise totale de l'amour — martèlement pathétique.", keywords: ["anaphore","que je","répét","amour","martel"] },
      { procede: "Registre pathétique", citation: "« Que je ne respire et ne vis que pour vous »", interpretation: "Registre pathétique : la souffrance amoureuse de Bérénice suscite la compassion — amour contrarié par le devoir impérial.", keywords: ["pathétique","amour","souffr","bérénice","compassion"] },
      { procede: "Hyperbole", citation: "« ne respire et ne vis que pour vous »", interpretation: "Hyperbole : l'existence entière réduite à l'amour de Titus — exagération qui traduit la passion absolue.", keywords: ["hyperbole","respire","vis","exag","passion"] },
      { procede: "Énumération", citation: "« mon cœur, mon esprit, et mes yeux, et ma vie »", interpretation: "Énumération des facultés soumises à l'amour — chaque terme renforce l'idée de dépendance totale.", keywords: ["énumération","cœur","esprit","yeux","vie"] }
    ]
  },
  {
    id: "GT-021",
    titre: "Art poétique",
    auteur: "Verlaine",
    oeuvre: "Jadis et naguère (1884)",
    genre: "Poésie",
    diff: 2,
    texte: `De la musique avant toute chose,
Et pour cela préfère l'Impair
Plus vague et plus soluble dans l'air,
Sans rien en lui qui pèse ou qui pose.

Il faut aussi que tu n'ailles point
Choisir tes mots sans quelque méprise :
Rien de plus cher que la chanson grise
Où l'Indécis au Précis se joint.

C'est des beaux yeux derrière des voiles,
C'est le grand midi tremblant de juillet,
C'est par un ciel d'automne attiédi
Le bleu fouillis des claires étoiles !`,
    contexte: "Manifeste du symbolisme — musicalité, vagueness, poétique de l'Indécis.",
    attendus: [
      { procede: "Registre lyrique", citation: "« De la musique avant toute chose »", interpretation: "Registre lyrique : le poète exprime une vision personnelle de l'art — subjectivité du « tu » poétique adressé au poète.", keywords: ["lyrique","musique","poète","subjectiv","art"] },
      { procede: "Antithèse", citation: "« l'Indécis au Précis se joint »", interpretation: "Antithèse entre Indécis et Précis : opposition fondatrice du symbolisme verlainien — nuance plutôt que clarté.", keywords: ["antithèse","indécis","précis","oppos","symbol"] },
      { procede: "Comparaison", citation: "« Plus vague et plus soluble dans l'air »", interpretation: "Comparaison : la poésie doit être soluble dans l'air — image de la musicalité et de la légèreté du vers.", keywords: ["comparaison","soluble","air","musical","léger"] },
      { procede: "Métaphore", citation: "« la chanson grise »", interpretation: "Métaphore : la poésie idéale est une « chanson grise » — couleur et musicalité fusionnent dans la suggestion.", keywords: ["métaphore","chanson","grise","suggestion","nuance"] }
    ]
  },
  {
    id: "GT-022",
    titre: "Sous le pont Mirabeau",
    auteur: "Apollinaire",
    oeuvre: "Alcools (1913)",
    genre: "Poésie moderniste",
    diff: 2,
    texte: `Sous le pont Mirabeau coule la Seine
Et nos amours
Faut-il qu'il m'en souvienne
La joie venait toujours après la peine

Vienne la nuit sonne l'heure
Les jours s'en vont je demeure

Les mains dans les mains restons face à face
Tandis que sous le pont de nos bras passe
Des éternels regards l'eau si triste et si lasse

Passent les jours et passent les semaines
Ni temps passé ni amours reviennent
Sous le pont Mirabeau coule la Seine

Vienne la nuit sonne l'heure
Les jours s'en vont je demeure`,
    contexte: "Poème célèbre sur le temps et l'amour passé — rimes et reprises.",
    attendus: [
      { procede: "Antithèse", citation: "« La joie venait toujours après la peine »", interpretation: "Antithèse entre joie et peine : cycle amoureux où le bonheur succède toujours à la souffrance — mélancolie du souvenir.", keywords: ["antithèse","joie","peine","oppos","amour"] },
      { procede: "Anaphore", citation: "« Vienne la nuit sonne l'heure »", interpretation: "Anaphore du refrain : la reprise martèle le passage du temps et l'immobilité du « je » qui demeure.", keywords: ["anaphore","nuit","heure","répét","temps"] },
      { procede: "Registre lyrique", citation: "« Les jours s'en vont je demeure »", interpretation: "Registre lyrique élégiaque : souvenir mélancolique de l'amour perdu — nostalgie du temps qui passe.", keywords: ["lyrique","élégiaque","souvenir","mélancol","amour"] },
      { procede: "Métaphore", citation: "« sous le pont de nos bras passe »", interpretation: "Métaphore : les bras enlacés deviennent un pont — image du corps et du fleuve mêlés au temps.", keywords: ["métaphore","pont","bras","fleuve","temps"] }
    ]
  },
  {
    id: "GT-023",
    titre: "Les Fourberies de Scapin",
    auteur: "Molière",
    oeuvre: "Les Fourberies de Scapin (1671)",
    genre: "Comédie",
    diff: 1,
    texte: `SCAPIN
Ah ! le coquin, le coquin, le coquin, le coquin ! Je ne sais pas si je dois m'en aller ou rester, si je dois crier ou me taire, si c'est lui ou si ce n'est pas lui. Ah ! le coquin, le coquin, le coquin ! Il a l'air tout effaré ; il regarde en tous sens ; il semble chercher quelqu'un à qui parler. Ah ! le coquin, le coquin ! Je ne sais que penser de tout ceci. Ah ! le coquin, le coquin, le coquin !`,
    contexte: "Scapin interroge un complice — comique de situation et répétitions.",
    attendus: [
      { procede: "Anaphore", citation: "« le coquin, le coquin, le coquin »", interpretation: "Anaphore de « coquin » : répétition comique qui accentue l'exaspération feinte de Scapin — effet de martèlement burlesque.", keywords: ["anaphore","coquin","répét","comique","burlesque"] },
      { procede: "Registre comique", citation: "« Ah ! le coquin »", interpretation: "Registre comique : quiproquo, fausses hésitations, gestuelle — le rire naît de la situation et du personnage rusé.", keywords: ["comique","scapin","quiproqu","rire","situation"] },
      { procede: "Énumération", citation: "« si je dois m'en aller ou rester, si je dois crier ou me taire »", interpretation: "Énumération des hésitations simulées : Scapin multiplie les questions pour jouer la comédie.", keywords: ["énumération","hésit","simul","questions","ruse"] },
      { procede: "Hyperbole", citation: "« le coquin, le coquin, le coquin, le coquin »", interpretation: "Hyperbole : la répétition excessive de « coquin » exagère l'indignation feinte — comique de l'emphase.", keywords: ["hyperbole","coquin","exag","emphase","feinte"] }
    ]
  },
  {
    id: "GT-024",
    titre: "L'Invitation au voyage",
    auteur: "Baudelaire",
    oeuvre: "Les Fleurs du Mal (1857)",
    genre: "Poésie",
    diff: 2,
    texte: `L'Invitation au voyage — Charles Baudelaire (Les Fleurs du Mal)

Mon enfant, ma sœur,
Songe à la douceur
D'aller là-bas vivre ensemble !
Aimer à loisir,
Aimer et mourir
Au pays qui te ressemble !
Les soleils mouillés
De ces ciels brouillés
Pour mon esprit ont les charmes
Si troublants
De tes yeux, par ma foi,
Dans leurs pleurs les plus fous.

Là, tout n'est qu'ordre et beauté,
Luxe, calme et volupté.`,
    contexte: "Poème d'évasion amoureuse — pays rêvé, correspondances sensuelles.",
    attendus: [
      { procede: "Apostrophe", citation: "« Mon enfant, ma sœur »", interpretation: "Apostrophe : le poète s'adresse à la bien-aimée par des termes tendres — registre lyrique et intime.", keywords: ["apostrophe","enfant","sœur","amour","intime"] },
      { procede: "Comparaison", citation: "« Au pays qui te ressemble »", interpretation: "Comparaison implicite : le pays idéal ressemble au visage de la bien-aimée — espace géographique transformé en image amoureuse.", keywords: ["comparaison","pays","ressemble","amour","idéal"] },
      { procede: "Champ lexical", citation: "« Luxe, calme et volupté »", interpretation: "Champ lexical du rêve et de la séduction : douceur, charmes, volupté — atmosphère d'évasion sensuelle.", keywords: ["champ lexical","luxe","calme","volupté","rêve"] },
      { procede: "Registre lyrique", citation: "« Aimer à loisir, / Aimer et mourir »", interpretation: "Registre lyrique : expression du désir d'union totale — amour et mort mêlés dans l'invitation au voyage.", keywords: ["lyrique","aimer","mourir","désir","union"] }
    ]
  },
  {
    id: "GT-025",
    titre: "Tartuffe — fausse piété",
    auteur: "Molière",
    oeuvre: "Tartuffe (1664)",
    genre: "Comédie",
    diff: 2,
    texte: `TARTUFFE
Non, non, ne vous troublez point ; et ne prenez point garde à moi.
Je verrai, par hasard, ce que c'est que tout ceci.
Dieu m'ordonne de n'y point donner d'attention ;
Et pour ne point vous scandaliser, je me retire tout à fait.
ELMIRE
Vous pouvez reprendre haut le fil de votre discours.
TARTUFFE
Hélas ! c'est un conseil que je ne saurais suivre.
Laissez-moi, pour le moment, vous offrir mon visage
Pour garant de mes paroles, et vous faire connaître
Que tout ici est souillé, et que rien ne m'attire
Dans les choses du monde, et que je ne respire
Qu'en votre seule personne un pur et saint amour.
ELMIRE
Votre discours est en un ton de sincérité
Dont mon âme est sensible ; et je commence à croire
Que vous m'aimez d'un amour véritable.`,
    contexte: "Tartuffe simule la dévotion pour tromper Orgon — comédie de l'hypocrisie religieuse.",
    attendus: [
      { procede: "Registre comique", citation: "« pur et saint amour »", interpretation: "Registre comique : Tartuffe feint la dévotion pour séduire Elmire — hypocrisie religieuse qui provoque le rire.", keywords: ["comique","hypocris","dévot","tartuffe","rire"] },
      { procede: "Antithèse", citation: "« tout ici est souillé »", interpretation: "Antithèse entre le monde « souillé » et l'amour « pur et saint » — faux-semblant qui révèle la duplicité.", keywords: ["antithèse","souill","pur","saint","duplicit"] },
      { procede: "Ironie", citation: "« Dieu m'ordonne de n'y point donner d'attention »", interpretation: "Ironie dramatique : Tartuffe invoque Dieu pour masquer sa curiosité — satire de la fausse piété.", keywords: ["ironie","dieu","ordonne","fausse","piété"] },
      { procede: "Champ lexical", citation: "« pur et saint amour »", interpretation: "Champ lexical de la fausse morale : pur, saint, souillé — vocabulaire de la tromperie déguisée en vertu.", keywords: ["champ lexical","pur","saint","souill","morale"] }
    ]
  },
  {
    id: "GT-026",
    titre: "Madame Bovary — le bal",
    auteur: "Flaubert",
    oeuvre: "Madame Bovary (1857)",
    genre: "Roman",
    diff: 2,
    texte: `Les chandeliers à branches, les bougies dans les globes de cristal, les girandoles du buffet, les petits verres en argent, les quadrilles, les fauteuils le long des murs, tout cela d'un coup l'atteignit comme l'atmosphère d'un pays lointain où elle serait entrée. Tous ces bourgeois de campagne ne bougeaient pas plus que des rochers au fond de la mer ; au contact de leurs robes noires, de leurs habits basanés, de leurs vestes, d'autres habits sombres, s'épanouissaient sur les glaces le regard des danseurs.`,
    contexte: "Emma découvre le bal de la marquise — éveil du désir d'ailleurs, style flaubertien.",
    attendus: [
      { procede: "Anaphore", citation: "« les chandeliers à branches, les bougies dans les globes de cristal, les girandoles du buffet »", interpretation: "Anaphore de « les » : énumération martelée qui traduit la surcharge d'objets et le vertige d'Emma devant le luxe.", keywords: ["anaphore","les","énumér","lux","vertige"] },
      { procede: "Comparaison", citation: "« comme l'atmosphère d'un pays lointain »", interpretation: "Comparaison : le bal devient un pays lointain — éveil du désir d'ailleurs et de l'imaginaire romanesque.", keywords: ["comparaison","comme","pays","lointain","rêve"] },
      { procede: "Comparaison", citation: "« ne bougeaient pas plus que des rochers au fond de la mer »", interpretation: "Comparaison : les bourgeois figés comme des rochers — immobilisme social contrastant avec le vertige d'Emma.", keywords: ["comparaison","rochers","mer","immobile","contraste"] },
      { procede: "Champ lexical", citation: "« globes de cristal »", interpretation: "Champ lexical du luxe et de l'apparat : cristal, argent, girandoles — contraste avec la vie provinciale d'Emma.", keywords: ["champ lexical","luxe","cristal","argent","apparat"] }
    ]
  },
  {
    id: "GT-027",
    titre: "Dom Juan — le méchant homme",
    auteur: "Molière",
    oeuvre: "Dom Juan ou le Festin de pierre (1665)",
    genre: "Comédie",
    diff: 2,
    texte: `DOM JUAN
Ah ! pour être honnête homme, je donnerais tous les honnêtes gens du monde ; et je ne crois pas qu'on puisse faire une plaisanterie plus plaisante que de se moquer d'eux. Sganarelle, tu ne sais pas ce que c'est que d'être un homme de bien ; c'est une chose qui me fait pitié. Il faut que l'âme soit bien basse pour se résoudre à n'être que ce que les autres veulent qu'on soit, et pour renoncer à toutes les douceurs de la vie, pour craindre la mort.`,
    contexte: "Dom Juan assume son immoralisme — comédie du libertin qui défie la morale.",
    attendus: [
      { procede: "Antithèse", citation: "« honnête homme »", interpretation: "Antithèse entre l'idéal moral (honnête homme) et le mépris affiché — contraste qui définit le personnage.", keywords: ["antithèse","honnête","moquer","contraste","moral"] },
      { procede: "Hyperbole", citation: "« tous les honnêtes gens du monde »", interpretation: "Hyperbole : « tous les honnêtes gens » pour une plaisanterie — exagération qui souligne le cynisme du libertin.", keywords: ["hyperbole","tous","exag","cynisme","libertin"] },
      { procede: "Registre comique", citation: "« plaisanterie plus plaisante »", interpretation: "Registre comique : Dom Juan provoque le rire par le renversement des valeurs morales — comédie du libertin.", keywords: ["comique","moque","provoc","rire","renvers"] },
      { procede: "Litote", citation: "« je ne crois pas qu'on puisse faire une plaisanterie plus plaisante »", interpretation: "Litote ironique : sous-entendre que la moquerie est supérieure — dédain masqué sous une fausse modération.", keywords: ["litote","ironie","moquer","dédain","modér"] }
    ]
  },
  {
    id: "GT-028",
    titre: "Notre-Dame de Paris — Quasimodo",
    auteur: "Hugo",
    oeuvre: "Notre-Dame de Paris (1831)",
    genre: "Roman",
    diff: 2,
    texte: `Quasimodo était à peu près difforme. Il n'avait pas plus de quinze ans, et déjà il était informe : la tête trop grosse, les cheveux roux, les yeux injectés de sang, la bouche tordue, le nez camus, les dents écartées, les jambes torses. Son dos était voûté, sa poitrine osseuse et concave, son épaule gauche avait une bosse qui le faisait pencher, sa jambe droite était estropiée. Il ne pouvait marcher qu'en boitant, et ses mains énormes, pendantes, semblaient des grappes de fruits mûrs.`,
    contexte: "Portrait physique de Quasimodo — pathétique et grotesque, style hugolien.",
    attendus: [
      { procede: "Énumération", citation: "« la tête trop grosse, les cheveux roux, les yeux injectés de sang »", interpretation: "Énumération des difformités : chaque trait ajoute à l'accumulation pathétique du corps monstrueux.", keywords: ["énumération","tête","cheveux","yeux","difform"] },
      { procede: "Anaphore", citation: "« Son dos était voûté, sa poitrine osseuse »", interpretation: "Anaphore des possessifs « son / sa » : énumération qui martèle la laideur corporelle — insistance pathétique.", keywords: ["anaphore","son","sa","corps","laideur"] },
      { procede: "Comparaison", citation: "« semblaient des grappes de fruits mûrs »", interpretation: "Comparaison : les mains de Quasimodo évoquent des grappes — image grotesque et matérielle du corps.", keywords: ["comparaison","grappes","fruits","mains","grotesque"] },
      { procede: "Registre pathétique", citation: "« à peu près difforme »", interpretation: "Registre pathétique : la difformité suscite compassion — Hugo humanise le monstre par la description clinique.", keywords: ["pathétique","difform","compassion","monstre","hugo"] }
    ]
  },
  {
    id: "GT-029",
    titre: "Lettres persanes — satire des mœurs",
    auteur: "Montesquieu",
    oeuvre: "Lettres persanes (1721)",
    genre: "Conte argumenté",
    diff: 2,
    texte: `Comment peut-on être Persan ! J'ai à peine revu la Perse, que je ne demande plus comment on peut être Européen ; car il faut avouer que l'on ne voit rien de si singulier que ce pays-ci. Paris est une ville prodigieuse, où le temps se passe en plaisirs. On n'y voit que des gens bien faits, bien vêtus, bien coiffés, bien élevés, bien éduqués, bien polis, et qui savent vivre. On y voit des femmes qui ont de l'esprit, de la beauté, de la grâce, de l'élégance, de la douceur, de la bonté, de la vertu.`,
    contexte: "Usbek découvre Paris avec un regard étranger — satire des mœurs européennes.",
    attendus: [
      { procede: "Registre satirique", citation: "« rien de si singulier que ce pays-ci »", interpretation: "Registre satirique : le regard persan déforme Paris pour en révéler les absurdités — dénonciation par le décalage culturel.", keywords: ["satirique","singulier","décalage","absurd","paris"] },
      { procede: "Antithèse", citation: "« Persan »", interpretation: "Antithèse implicite entre regard persan et mœurs européennes — relativisation des normes par le dépaysement.", keywords: ["antithèse","persan","européen","contraste","mœurs"] },
      { procede: "Hyperbole", citation: "« rien de si singulier »", interpretation: "Hyperbole : l'étonnement exagéré du Persan souligne l'ironie sur les coutumes parisiennes.", keywords: ["hyperbole","singulier","exag","étonn","ironie"] },
      { procede: "Énumération", citation: "« bien faits, bien vêtus, bien coiffés, bien élevés »", interpretation: "Énumération des qualités parisiennes : accumulation ironique qui satirise la vanité mondaine.", keywords: ["énumération","bien","paris","vanité","ironie"] }
    ]
  },
  {
    id: "GT-030",
    titre: "Athalie — monologue d'Athalie",
    auteur: "Racine",
    oeuvre: "Athalie (1691)",
    genre: "Tragédie",
    diff: 3,
    texte: `Quel prodige nouveau me fait trembler et craindre ?
Un enfant, un enfant roi ! Quoi ! ce petit être,
Ce faible enfant, dont l'âge est encore incertain,
Ce nouveau-né, dont à peine on voit le sein,
Ce petit innocent, ce faible instrument,
Doit être le bourreau d'une reine si grande !
Pour me punir, que de choisir un si faible instrument ?
Ô ciel ! pourquoi m'avez-vous faite si puissante,
Si vous vouliez me perdre, et si basse, et si tendre ?`,
    contexte: "Athalie panique devant la prophétie — tragédie biblique, peur de la fatalité.",
    attendus: [
      { procede: "Anaphore", citation: "« Un enfant, un enfant roi »", interpretation: "Anaphore de « enfant » : martèlement qui exprime l'angoisse d'Athalie devant la prophétie — obsession tragique.", keywords: ["anaphore","enfant","roi","angoiss","répét"] },
      { procede: "Antithèse", citation: "« si faible instrument »", interpretation: "Antithèse entre la faiblesse de l'enfant et la puissance de la punition — Dieu humilie la reine par le dérisoire.", keywords: ["antithèse","faible","enfant","punir","dérisoire"] },
      { procede: "Hyperbole", citation: "« Quel prodige nouveau »", interpretation: "Hyperbole : le « prodige » amplifie la terreur d'Athalie devant le surnaturel — registre tragique biblique.", keywords: ["hyperbole","prodige","exag","terreur","surnaturel"] },
      { procede: "Registre tragique", citation: "« me fait trembler et craindre »", interpretation: "Registre tragique : Athalie est saisie par la peur d'une fatalité divine — terreur devant un pouvoir qui la dépasse.", keywords: ["tragique","trembl","crainte","fatal","peur"] }
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
