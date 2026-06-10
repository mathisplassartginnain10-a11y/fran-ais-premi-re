import { att } from '../gtext-enrichment-lib.mjs';

export const REWRITES_EARLY_A = {
  'GT-001': {
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
    contexte: "Poème lyrique en vers impairs — mélancolie automnale, correspondances entre paysage et état d\'âme.",
    attendus: [
      att('Assonance', '« Les sanglots longs / Des violons / De l\'automne »', 'Assonance en [ɔ̃] : « sanglots », « longs », « violons », « automne » — sonorité grave qui imite la plainte des instruments et installe la mélancolie.', ["assonance","automne","violons","mélancol","sonorité"]),
      att('Comparaison', '« Pareil à la / Feuille morte »', 'Comparaison explicite avec « pareil à » : le poète se compare à une feuille morte emportée par le vent — image de l\'impuissance face au temps.', ["comparaison","feuille","morte","vent","impuiss"]),
      att('Enjambement', '« Et je m\'en vais / Au vent mauvais / Qui m\'emporte »', 'Enjambement : le sens déborde d\'un vers à l\'autre et brise la régularité — traduit l\'instabilité du sujet poétique.', ["enjambement","vers","rythme","instab","déborde"]),
      att('Registre lyrique', '« Je me souviens / Des jours anciens / Et je pleure »', 'Registre lyrique : expression du « je » et de sentiments intimes (souvenir, larmes) — subjectivité et mélancolie personnelle.', ["lyrique","pleure","souvenir","intime","mélancol"])
    ],
  },
  'GT-002': {
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
    contexte: "Scène d\'amour impossible — Chimène avoue par litote son amour pour Rodrigue tout en devant venger son père.",
    attendus: [
      att('Litote', '« Va, je ne te hais point »', 'Litote : nier la haine pour exprimer l\'amour — pudeur tragique de Chimène devant son père.', ["litote","hais","amour","pudeur","chimène"]),
      att('Antithèse', '« Il m\'offense, et je l\'aime »', 'Antithèse entre offense et amour — cœur du conflit tragique cornelien entre passion et devoir.', ["antithèse","offense","aime","conflit","honneur"]),
      att('Registre pathétique', '« Je pleure sa victoire, et tremble pour sa vie »', 'Registre pathétique : compassion malgré le devoir de vengeance — pitié du spectateur.', ["pathétique","pleure","tremble","compassion","devoir"]),
      att('Oxymore', '« Un funeste objet qui m\'avait tant de charmes »', 'Oxymore : « funeste » et « charmes » s\'opposent pour dire l\'ambivalence du sentiment amoureux.', ["oxymore","funeste","charmes","contradict","amour"])
    ],
  },
  'GT-003': {
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
      att('Hyperbole', '« que n\'ai-je au fond des mers une retraite ! »', 'Hyperbole : souhait exagéré de disparaître au fond des mers pour échapper à la passion — intensité de la honte.', ["hyperbole","mers","retraite","passion","honte"]),
      att('Anaphore', '« Je l\'ai voulu, j\'ai tenté de lui résister »', 'Anaphore de « j\'ai » : martèlement qui insiste sur l\'effort vain contre l\'amour interdit.', ["anaphore","voulu","tenté","résist","martel"]),
      att('Registre pathétique', '« La honte de mes vœux et l\'horreur de mon amour »', 'Registre pathétique : aveu de la honte amoureuse — compassion et malaise devant la passion coupable.', ["pathétique","honte","vœux","amour","aveu"]),
      att('Champ lexical', '« impur amour »', 'Champ lexical de la faute et de la culpabilité — vocabulaire qui traduit le malaise moral de Phèdre.', ["champ lexical","impur","honte","horreur","faute"])
    ],
  },
  'GT-004': {
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
      att('Anaphore', '« J\'irai par la forêt, j\'irai par la montagne »', 'Anaphore de « j\'irai » : insistance sur le projet de départ obstiné — rythme martelé du deuil.', ["anaphore","irai","répét","départ","deuil"]),
      att('Comparaison', '« le jour pour moi sera comme la nuit »', 'Comparaison avec « comme » : le jour devient nuit pour le poète en deuil — temps obscurci par la perte.', ["comparaison","jour","nuit","deuil","obscur"]),
      att('Énumération', '« Seul, inconnu, le dos courbé, les mains croisées, / Triste »', 'Énumération de traits du voyageur en deuil — chaque terme ajoute une dimension à la solitude.', ["énumération","seul","triste","solitude","deuil"]),
      att('Registre lyrique', '« je sais que tu m\'attends »', 'Registre lyrique élégiaque : apostrophe à la morte, expression intime de la perte et du regret.', ["lyrique","élégiaque","attends","perte","apostrophe"])
    ],
  },
  'GT-005': {
    texte: `HARPAGON
Hélas ! mon pauvre argent, mon pauvre argent, mes amours, es-tu perdu ? Est-ce bien toi ? Oui, c'est toi-même ; tu n'as point changé de visage, et tu es encore gaillon et rubicond, et bénéficieux. O ciel ! t'ai-je donc perdu ? Qui t'a ravi ? Où es-tu ? Où te caches-tu ? Où es-tu ? Te voit-on ? T'entends-tu ? Non : tu es invisible à mes yeux, mais présent à mon cœur. Reste en ce lieu, et ne me quitte pas. Allons, je me veux rassurer, je me veux remettre. Ne me troublera-t-on point et laissera-t-on ma maison en repos ? Je m'en vais par toute ma maison voir si personne n'y est caché.`,
    contexte: "Harpagon découvre la disparition de son trésor — monologue comique où l\'avarice devient passion amoureuse.",
    attendus: [
      att('Anaphore', '« mon pauvre argent, mon pauvre argent, mes amours »', 'Anaphore de « mon pauvre argent » : répétition obsédante qui traduit l\'attachement pathologique à l\'argent.', ["anaphore","argent","répét","obsess","avarice"]),
      att('Apostrophe', '« es-tu perdu ? Est-ce bien toi ? »', 'Apostrophe à l\'argent personnifié : Harpagon s\'adresse à son trésor comme à un être aimé — comique de caractère.', ["apostrophe","argent","amours","personnif","comique"]),
      att('Hyperbole', '« invisible à mes yeux, mais présent à mon cœur »', 'Hyperbole amoureuse appliquée à l\'argent — exagération grotesque qui révèle l\'avarice.', ["hyperbole","cœur","invisible","exag","grotesque"]),
      att('Registre comique', '« gaillon et rubicond, et bénéficieux »', 'Registre comique : vocabulaire amoureux pour décrire des écus — décalage satirique entre registre et objet.', ["comique","décalage","satire","harpagon","écus"])
    ],
  },
  'GT-006': {
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
      att('Métaphore', '« La Nature est un temple où de vivants piliers »', 'Métaphore : la Nature identifiée à un temple sans outil comparatif — sacralisation du monde et mystère.', ["métaphore","nature","temple","piliers","sacr"]),
      att('Personnification', '« Qui l\'observent avec des regards familiers »', 'Personnification : les symboles observent l\'homme — le monde devient actif et inquiétant.', ["personnification","symbole","regard","observe","inquiét"]),
      att('Comparaison', '« Vaste comme la nuit et comme la clarté »', 'Comparaison double : les correspondances englobent l\'opposition nuit/clarté — étendue du sensible.', ["comparaison","nuit","clarté","vaste","sensible"]),
      att('Synesthie', '« Les parfums, les couleurs et les sons se répondent »', 'Synesthie : mélange des parfums, couleurs et sons — cœur de la poétique baudelairienne.', ["synesthie","parfum","couleur","son","correspond"])
    ],
  },
  'GT-007': {
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
      att('Anaphore', '« Rome, l\'unique objet de mon ressentiment ! »', 'Anaphore de « Rome » : incantation de la haine politique — effet martelé et pathétique.', ["anaphore","rome","incant","haine","martel"]),
      att('Antithèse', '« le vainqueur est heureux, et le vaincu trépassé »', 'Antithèse entre victoire romaine et mort de l\'amant — conflit tragique entre amour et cité.', ["antithèse","vainqueur","vaincu","mort","rome"]),
      att('Registre pathétique', '« moi, je pleure et je gronde »', 'Registre pathétique : subjectivité de Camille face à l\'histoire — compassion du spectateur.', ["pathétique","pleure","gronde","camille","compassion"]),
      att('Hyperbole', '« Rome, à qui vient ton bras d\'immoler mon amant »', 'Hyperbole : Rome personnifiée assassine l\'amant — exagération qui traduit la démesure de la douleur.', ["hyperbole","immoler","amant","rome","exag"])
    ],
  },
  'GT-008': {
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
      att('Anaphore', '« ce fils, ce témoin »', 'Anaphore de « ce fils, ce témoin » : insistance sur Astyanax comme enjeu dramatique — martèlement pathétique.', ["anaphore","fils","témoin","astyanax","insistance","pathétique"]),
      att('Registre pathétique', '« dont tu veux faire un otage »', 'Registre pathétique : la mère protège l\'enfant du héros — pitié et indignation devant la violence politique.', ["pathétique","otage","astyanax","mère","pitié","hector"]),
      att('Antithèse', '« hérité que la haine »', 'Antithèse : le fils d\'Hector n\'hérite que de la haine — injustice tragique infligée par les vainqueurs grecs.', ["antithèse","haine","héritage","injustice","hector","fils"]),
      att('Dialogue', '« dans le fils je ne vois que le père »', 'Dialogue : Pyrrhus réduit Astyanax à l\'ombre d\'Achille — tension entre vengeance et amour contrarié.', ["dialogue","père","fils","pyrrhus","achille","tension"]),
      att('Hyperbole', '« Troie en cendres et tous ses dieux en poudre »', 'Hyperbole : la destruction totale de Troie est rappelée pour dramatiser l\'excès de la persécution contre un enfant.', ["hyperbole","troie","cendres","destruction","exagération","guerre"])
    ],
  },
  'GT-009': {
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
      att('Hyperbole', '« Vous êtes le Phénix des hôtes de ces bois »', 'Hyperbole flatteuse : comparer le Corbeau au Phénix exagère la louange pour le manipuler — ironie du Renard.', ["hyperbole","phénix","flatte","exag","louange"]),
      att('Registre comique', '« le Corbeau ne se sent pas de joie »', 'Registre comique : la vanité du Corbeau provoque la chute — situation burlesque entre animaux parlants.', ["comique","vanité","corbeau","chute","burlesque"]),
      att('Morale', '« tout flatteur / Vit au dépens de celui qui l\'écoute »', 'Morale explicite : la fable dénonce la flatterie et clôt le récit par une leçon didactique.', ["morale","flatteur","écoute","leçon","didactique"]),
      att('Dialogue', '« Et bonjour, Monsieur du Corbeau »', 'Dialogue feint entre Renard et Corbeau : la politesse masque la ruse et structure la scène en répliques.', ["dialogue","bonjour","renard","ruse","politesse"])
    ],
  },
  'GT-010': {
    texte: `« C'est une boucherie héroïque et glorieuse », dit un officier. « Non, répondit un autre, je sais que jamais le despotisme et la barbarie n'ont poussé leurs excès jusque-là. Ils font ici quinze ou vingt mille hommes d'un coup ; les balles et les baïonnettes ne suffisant pas à leur massacre, on décide de les baigner dans des lacs de sang ; trente mille voisins combattent depuis vingt ans sans se connaître, pour des intérêts dont ils n'ont cure. » Candide, qui avait été cultivé dans ces bonnes maximes, pleurait presque à chaque bataille dont les bourreaux lui rendaient compte. « Quelle est cette rage de se faire tuer sans profit pour personne ? »`,
    contexte: "Voltaire dénonce les guerres absurdes — satire de l\'euphémisme militaire et du carnage.",
    attendus: [
      att('Oxymore', '« boucherie héroïque et glorieuse »', 'Oxymore : « boucherie » (horreur) associée à « héroïque » et « glorieuse » — décalage satirique qui dénonce l\'absurdité de la guerre.', ["oxymore","boucherie","héroïque","glorieux","guerre"]),
      att('Hyperbole', '« quinze ou vingt mille hommes d\'un coup »', 'Hyperbole : chiffres exagérés du massacre — Voltaire amplifie l\'horreur pour provoquer l\'indignation.', ["hyperbole","mille","massacre","exag","horreur"]),
      att('Registre satirique', '« boucherie héroïque »', 'Registre satirique : Voltaire ridiculise le discours officiel sur la guerre par l\'ironie et le grotesque.', ["satirique","ironie","dénonc","guerre","grotesque"]),
      att('Antithèse', '« se faire tuer sans profit pour personne »', 'Antithèse entre l\'idéal héroïque de la guerre et la réalité absurde — Candide oppose naïveté et horreur.', ["antithèse","mort","profit","absurde","héro"])
    ],
  },
  'GT-011': {
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
      att('Comparaison', '« son teint au vôtre pareil »', 'Comparaison implicite entre le teint de la rose et celui de la bien-aimée — rapprochement qui lie nature et beauté féminine.', ["comparaison","teint","pareil","rose","beauté"]),
      att('Personnification', '« Sa robe de pourpre au Soleil »', 'Personnification : la rose est vêtue d\'une « robe de pourpre » — transfert du vêtement humain sur la fleur.', ["personnification","robe","pourpre","rose","fleur"]),
      att('Registre lyrique', '« Mignonne, allons voir si la rose »', 'Registre lyrique : apostrophe amoureuse qui célèbre la beauté et l\'urgence du temps.', ["lyrique","amour","mignonne","intime","beauté"]),
      att('Métaphore', '« Deux roses avec le souci »', 'Métaphore : le poète et sa bien-aimée sont deux roses — image du carpe diem et de la fragilité du temps.', ["métaphore","roses","souci","carpe diem","éphémère"])
    ],
  },
  'GT-012': {
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
    contexte: "Élégie célèbre — le lac témoin d\'un amour passé, métaphore du temps qui fuit.",
    attendus: [
      att('Comparaison', '« sur l\'océan des âges »', 'Comparaison : la vie est un océan sans rivage fixe — image de l\'instabilité et du temps irréversible.', ["comparaison","océan","âges","temps","instab"]),
      att('Personnification', '« le lac frissonnait sous le vent »', 'Personnification : le lac « frissonnait » comme un être sensible — le paysage partage l\'émotion du poète.', ["personnification","lac","frisson","vent","émotion"]),
      att('Apostrophe', '« O lac ! »', 'Apostrophe au lac : le poète interpelle le paysage comme un interlocuteur — lyrisme élégiaque et intimité du souvenir.', ["apostrophe","lac","souvenir","élégiaque","lyrique"]),
      att('Enjambement', '« Ainsi, toujours poussés vers de nouveaux rivages »', 'Enjambement : le sens déborde du vers et mime le mouvement sans fin — rythme du flux temporel.', ["enjambement","rivages","vers","mouvement","flux"])
    ],
  },
  'GT-013': {
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
      att('Comparaison', '« Heureux qui, comme Ulysse »', 'Comparaison avec « comme » : le poète envie Ulysse qui a pu rentrer chez lui — modèle du voyage accompli.', ["comparaison","comme","ulysse","voyage","retour"]),
      att('Énumération', '« Les fossés pleins d\'eau vive entre deux rangs de saules »', 'Énumération des lieux regrettés : chaque détail ancre la nostalgie dans le paysage concret de l\'Anjou.', ["énumération","fossés","saules","nostalg","anjou"]),
      att('Registre lyrique', '« Quand reverrai-je, hélas »', 'Registre lyrique élégiaque : « hélas » et question rhétorique expriment le manque et l\'impossibilité du retour.', ["lyrique","élégiaque","hélas","nostalg","exil"]),
      att('Anaphore', '« Et mon Anjou verdoyant, et l\'Angevin bocage »', 'Anaphore de « et » : accumulation des lieux natals — insistance nostalgique sur le pays perdu.', ["anaphore","anjou","bocage","nostalg","pays"])
    ],
  },
  'GT-014': {
    texte: `Aujourd'hui, maman est morte. Ou peut-être hier, je ne sais pas. J'ai reçu un télégramme de l'asile : « Mère décédée. Enterrement demain. Sentiments distingués. » Cela ne veut rien dire. C'était peut-être hier. L'asile de vieillards est à Marengo, à quatre-vingts kilomètres d'Alger. Je prendrai l'autobus à deux heures et j'arriverai dans l'après-midi. Ainsi, je pourrai veiller et je rentrerai demain soir. J'ai demandé deux jours de congé à mon patron et il ne pouvait pas me les refuser avec une excuse pareille. Il m'a dit : « Ce n'est pas de ma faute. » Il n'avait pas l'air de me plaindre. J'ai dit : « Non. » Il m'a dit : « Il faisait très chaud. »`,
    contexte: "Incipit célèbre — voix de Meursault, perception limitée et détachée face à la mort de sa mère.",
    attendus: [
      att('Phrase nominale', '« Mère décédée. Enterrement demain. Sentiments distingués. »', 'Phrase nominale télégraphique : style sec et administratif qui contraste avec l\'annonce de la mort — froideur du narrateur.', ["phrase nominale","télégramme","sec","froid","style"]),
      att('Registre pathétique', '« Aujourd\'hui, maman est morte »', 'Contre-registre : le sujet pathétique (mort de la mère) est traité sans émotion — le pathétique est sous-entendu par l\'absence.', ["pathétique","mort","mère","émotion","absence"]),
      att('Antithèse', '« Sentiments distingués »', 'Antithèse entre la formule sociale creuse et la réalité brutale (mort) — décalage qui caractérise Meursault.', ["antithèse","sentiments","mort","décalage","formule"]),
      att('Incertitude', '« Ou peut-être hier, je ne sais pas »', 'Incertitude narrative : Meursault ne sait même pas quand sa mère est morte — indifférence qui choque le lecteur.', ["incertitude","peut-être","indifférence","narrateur","choc"])
    ],
  },
  'GT-015': {
    texte: `Je me sens étrange, affaibli, tout inquiet. Pourtant, je n'ai pas souffert. Je ne me sens pas souffrant. Mais je ne me sens pas bien. L'impression que j'éprouve est celle d'une force inconnue, mystérieuse et redoutable qui m'écrase, qui me domine et m'obsède sans que je puisse la comprendre et la définir. Je le sens, je le devine. Il est là ! Il est là ! autour de moi, sur moi, dans moi ! Il me bouffe, il me tord, il m'étouffe. Oh ! la suffocation ! Quand il n'occupe pas mon corps, il occupe mon âme ; mon esprit, comme mon corps, n'est plus qu'à lui. Il me suit ! Il me suit ! Il me suit depuis ce matin.`,
    contexte: "Monologue d\'un narrateur hanté — présence invisible et folie progressive.",
    attendus: [
      att('Anaphore', '« Il me suit ! Il me suit ! »', 'Anaphore de « Il me suit » : répétition obsédante qui traduit la folie progressive et l\'emprise de l\'être invisible.', ["anaphore","suivi","répét","obsess","hante"]),
      att('Personnification', '« une force inconnue, mystérieuse et redoutable »', 'Personnification : la force invisible agit comme un être — l\'abstraction devient une menace quasi vivante.', ["personnification","force","menace","vivant","invisible"]),
      att('Champ lexical', '« Il me bouffe, il me tord, il m\'étouffe »', 'Champ lexical de la violence intérieure : bouffer, tordre, étouffer — vocabulaire qui traduit l\'oppression psychique.', ["champ lexical","violence","étouff","oppress","corps"]),
      att('Registre fantastique', '« Il est là ! Il est là ! »', 'Registre fantastique : l\'invisible menace sans preuve rationnelle — le doute sur la raison structure le récit.', ["fantastique","invisible","menace","doute","raison"])
    ],
  },
  'GT-016': {
    texte: `Et les mineurs montaient, noirs, écrasés, les yeux blancs dans les faces de charbon. Ils sortaient de la fosse comme des bêtes de somme, courbés, haletants, traînant leurs sabots dans la boue. La fosse crachait sa besogne, hommes et bêtes confondus dans la nuit du travail. On ne distinguait plus les visages sous la suie ; on ne voyait que des corps usés, des épaules voûtées, des mains déformées par le pic. Le vent du soir soufflait sur ce défilé de misère, et les femmes attendaient, blêmes, au bord du chemin, les hommes qui rentraient du trou noir.`,
    contexte: "Description de la sortie de mine — dénonciation sociale zolienne.",
    attendus: [
      att('Registre pathétique', '« noirs, écrasés »', 'Registre pathétique : la souffrance des mineurs suscite pitié et indignation — Zola veut émouvoir pour dénoncer.', ["pathétique","souffr","mineur","fatigue","pit"]),
      att('Personnification', '« La fosse crachait sa besogne »', 'Personnification : la fosse « crache » comme un être vivace et vorace — la mine devient agent actif de l\'oppression.', ["personnification","fosse","crache","mine","vorace"]),
      att('Métaphore', '« hommes et bêtes confondus »', 'Métaphore : les mineurs sont réduits au rang d\'animaux de somme — déshumanisation par le travail.', ["métaphore","bêtes","hommes","déshuman","travail"]),
      att('Champ lexical', '« nuit du travail »', 'Champ lexical de l\'enfermement et de la nuit : charbon, fosse, nuit, noirs — univers souterrain oppressant.', ["champ lexical","charbon","fosse","nuit","souterrain"])
    ],
  },
  'GT-017': {
    texte: `Gavroche était tombé. Il venait de recevoir une balle dans la tête. Il était étendu sur le pavé, les bras en croix, la face tournée vers le ciel. Il ne remuait plus. C'était le petit enfant des rues, le gamin de Paris, celui qui riait au vent, qui chantait dans la mitraille, qui volait des pommes aux étalages, qui criait aux passants des mots d'espoir. Il avait douze ans. Il était mort pour la liberté. Les bourgeois fermèrent leurs fenêtres ; la foule passa sans s'arrêter. Seul, dans l'ombre, un vieux pauvre homme murmura : « Voilà un enfant qui a bien chanté. »`,
    contexte: "Mort de Gavroche — scène pathétique engagée chez Hugo.",
    attendus: [
      att('Registre pathétique', '« le gamin de Paris, celui qui riait au vent »', 'Registre pathétique : la mort de l\'enfant innocent provoque compassion et indignation sociale — Hugo émeut pour faire réfléchir.', ["pathétique","gavroche","enfant","mort","compassion"]),
      att('Antithèse', '« qui riait au vent »', 'Antithèse entre la joie de vivre (rire, chanter) et la mort brutale — contraste qui accentue la tragédie.', ["antithèse","rire","mort","contraste","joie"]),
      att('Hyperbole', '« qui chantait dans la mitraille »', 'Hyperbole : chanter « dans la mitraille » exagère l\'insouciance héroïque de Gavroche — légende de l\'enfant courageux.', ["hyperbole","mitraille","chanter","insouci","héro"]),
      att('Champ lexical', '« une balle dans la tête »', 'Champ lexical de la violence et de la mort : balle, tombé, mitraille — vocabulaire de la guerre civile.', ["champ lexical","violence","mort","balle","mitraille"])
    ],
  },
  'GT-019': {
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
      att('Antithèse', '« ayant chanté / Tout l\'été »', 'Antithèse entre l\'insouciance estivale (chanter) et la détresse hivernale (famine) — morale de la prévoyance.', ["antithèse","été","hiver","chanter","famine"]),
      att('Personnification', '« La Cigale »', 'Personnification : les insectes parlent, raisonnent et agissent comme des humains — procédé propre à la fable.', ["personnification","cigale","fourmi","animal","fable"]),
      att('Registre comique', '« Vous avez bien dansé ; maintenant dansez »', 'Registre comique : la réplique cinglante de la Fourmi retourne la chanson contre la Cigale — ironie morale.', ["comique","dansé","ironie","fourmi","morale"]),
      att('Champ lexical', '« famine »', 'Champ lexical du besoin et de la subsistance : famine, dépourvue, grain — contraste avec le chant estival.', ["champ lexical","famine","grain","besoin","subsist"])
    ],
  },
  'GT-020': {
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
      att('Anaphore', '« Que je »', 'Anaphore de « Que je » : répétition incantatoire qui exprime l\'emprise totale de l\'amour — martèlement pathétique.', ["anaphore","que je","répét","amour","martel"]),
      att('Registre pathétique', '« Que je ne respire et ne vis que pour vous »', 'Registre pathétique : la souffrance amoureuse de Bérénice suscite la compassion — amour contrarié par le devoir impérial.', ["pathétique","amour","souffr","bérénice","compassion"]),
      att('Hyperbole', '« ne respire et ne vis que pour vous »', 'Hyperbole : l\'existence entière réduite à l\'amour de Titus — exagération qui traduit la passion absolue.', ["hyperbole","respire","vis","exag","passion"]),
      att('Énumération', '« mon cœur, mon esprit, et mes yeux, et ma vie »', 'Énumération des facultés soumises à l\'amour — chaque terme renforce l\'idée de dépendance totale.', ["énumération","cœur","esprit","yeux","vie"])
    ],
  },
  'GT-021': {
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
    contexte: "Manifeste du symbolisme — musicalité, vagueness, poétique de l\'Indécis.",
    attendus: [
      att('Registre lyrique', '« De la musique avant toute chose »', 'Registre lyrique : le poète exprime une vision personnelle de l\'art — subjectivité du « tu » poétique adressé au poète.', ["lyrique","musique","poète","subjectiv","art"]),
      att('Antithèse', '« l\'Indécis au Précis se joint »', 'Antithèse entre Indécis et Précis : opposition fondatrice du symbolisme verlainien — nuance plutôt que clarté.', ["antithèse","indécis","précis","oppos","symbol"]),
      att('Comparaison', '« Plus vague et plus soluble dans l\'air »', 'Comparaison : la poésie doit être soluble dans l\'air — image de la musicalité et de la légèreté du vers.', ["comparaison","soluble","air","musical","léger"]),
      att('Métaphore', '« la chanson grise »', 'Métaphore : la poésie idéale est une « chanson grise » — couleur et musicalité fusionnent dans la suggestion.', ["métaphore","chanson","grise","suggestion","nuance"])
    ],
  },
  'GT-022': {
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
    contexte: "Poème célèbre sur le temps et l\'amour passé — rimes et reprises.",
    attendus: [
      att('Antithèse', '« La joie venait toujours après la peine »', 'Antithèse entre joie et peine : cycle amoureux où le bonheur succède toujours à la souffrance — mélancolie du souvenir.', ["antithèse","joie","peine","oppos","amour"]),
      att('Anaphore', '« Vienne la nuit sonne l\'heure »', 'Anaphore du refrain : la reprise martèle le passage du temps et l\'immobilité du « je » qui demeure.', ["anaphore","nuit","heure","répét","temps"]),
      att('Registre lyrique', '« Les jours s\'en vont je demeure »', 'Registre lyrique élégiaque : souvenir mélancolique de l\'amour perdu — nostalgie du temps qui passe.', ["lyrique","élégiaque","souvenir","mélancol","amour"]),
      att('Métaphore', '« sous le pont de nos bras passe »', 'Métaphore : les bras enlacés deviennent un pont — image du corps et du fleuve mêlés au temps.', ["métaphore","pont","bras","fleuve","temps"])
    ],
  },
  'GT-023': {
    texte: `SCAPIN
Ah ! le coquin, le coquin, le coquin, le coquin ! Je ne sais pas si je dois m'en aller ou rester, si je dois crier ou me taire, si c'est lui ou si ce n'est pas lui. Ah ! le coquin, le coquin, le coquin ! Il a l'air tout effaré ; il regarde en tous sens ; il semble chercher quelqu'un à qui parler. Ah ! le coquin, le coquin ! Je ne sais que penser de tout ceci. Ah ! le coquin, le coquin, le coquin !`,
    contexte: "Scapin interroge un complice — comique de situation et répétitions.",
    attendus: [
      att('Anaphore', '« le coquin, le coquin, le coquin »', 'Anaphore de « coquin » : répétition comique qui accentue l\'exaspération feinte de Scapin — effet de martèlement burlesque.', ["anaphore","coquin","répét","comique","burlesque"]),
      att('Registre comique', '« Ah ! le coquin »', 'Registre comique : quiproquo, fausses hésitations, gestuelle — le rire naît de la situation et du personnage rusé.', ["comique","scapin","quiproqu","rire","situation"]),
      att('Énumération', '« si je dois m\'en aller ou rester, si je dois crier ou me taire »', 'Énumération des hésitations simulées : Scapin multiplie les questions pour jouer la comédie.', ["énumération","hésit","simul","questions","ruse"]),
      att('Hyperbole', '« le coquin, le coquin, le coquin, le coquin »', 'Hyperbole : la répétition excessive de « coquin » exagère l\'indignation feinte — comique de l\'emphase.', ["hyperbole","coquin","exag","emphase","feinte"])
    ],
  },
  'GT-024': {
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
    contexte: "Poème d\'évasion amoureuse — pays rêvé, correspondances sensuelles.",
    attendus: [
      att('Apostrophe', '« Mon enfant, ma sœur »', 'Apostrophe : le poète s\'adresse à la bien-aimée par des termes tendres — registre lyrique et intime.', ["apostrophe","enfant","sœur","amour","intime"]),
      att('Comparaison', '« Au pays qui te ressemble »', 'Comparaison implicite : le pays idéal ressemble au visage de la bien-aimée — espace géographique transformé en image amoureuse.', ["comparaison","pays","ressemble","amour","idéal"]),
      att('Champ lexical', '« Luxe, calme et volupté »', 'Champ lexical du rêve et de la séduction : douceur, charmes, volupté — atmosphère d\'évasion sensuelle.', ["champ lexical","luxe","calme","volupté","rêve"]),
      att('Registre lyrique', '« Aimer à loisir, / Aimer et mourir »', 'Registre lyrique : expression du désir d\'union totale — amour et mort mêlés dans l\'invitation au voyage.', ["lyrique","aimer","mourir","désir","union"])
    ],
  },
  'GT-025': {
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
    contexte: "Tartuffe simule la dévotion pour tromper Orgon — comédie de l\'hypocrisie religieuse.",
    attendus: [
      att('Registre comique', '« pur et saint amour »', 'Registre comique : Tartuffe feint la dévotion pour séduire Elmire — hypocrisie religieuse qui provoque le rire.', ["comique","hypocris","dévot","tartuffe","rire"]),
      att('Antithèse', '« tout ici est souillé »', 'Antithèse entre le monde « souillé » et l\'amour « pur et saint » — faux-semblant qui révèle la duplicité.', ["antithèse","souill","pur","saint","duplicit"]),
      att('Ironie', '« Dieu m\'ordonne de n\'y point donner d\'attention »', 'Ironie dramatique : Tartuffe invoque Dieu pour masquer sa curiosité — satire de la fausse piété.', ["ironie","dieu","ordonne","fausse","piété"]),
      att('Champ lexical', '« pur et saint amour »', 'Champ lexical de la fausse morale : pur, saint, souillé — vocabulaire de la tromperie déguisée en vertu.', ["champ lexical","pur","saint","souill","morale"])
    ],
  },
  'GT-026': {
    texte: `Les chandeliers à branches, les bougies dans les globes de cristal, les girandoles du buffet, les petits verres en argent, les quadrilles, les fauteuils le long des murs, tout cela d'un coup l'atteignit comme l'atmosphère d'un pays lointain où elle serait entrée. Tous ces bourgeois de campagne ne bougeaient pas plus que des rochers au fond de la mer ; au contact de leurs robes noires, de leurs habits basanés, de leurs vestes, d'autres habits sombres, s'épanouissaient sur les glaces le regard des danseurs.`,
    contexte: "Emma découvre le bal de la marquise — éveil du désir d\'ailleurs, style flaubertien.",
    attendus: [
      att('Anaphore', '« les chandeliers à branches, les bougies dans les globes de cristal, les girandoles du buffet »', 'Anaphore de « les » : énumération martelée qui traduit la surcharge d\'objets et le vertige d\'Emma devant le luxe.', ["anaphore","les","énumér","lux","vertige"]),
      att('Comparaison', '« comme l\'atmosphère d\'un pays lointain »', 'Comparaison : le bal devient un pays lointain — éveil du désir d\'ailleurs et de l\'imaginaire romanesque.', ["comparaison","comme","pays","lointain","rêve"]),
      att('Comparaison', '« ne bougeaient pas plus que des rochers au fond de la mer »', 'Comparaison : les bourgeois figés comme des rochers — immobilisme social contrastant avec le vertige d\'Emma.', ["comparaison","rochers","mer","immobile","contraste"]),
      att('Champ lexical', '« globes de cristal »', 'Champ lexical du luxe et de l\'apparat : cristal, argent, girandoles — contraste avec la vie provinciale d\'Emma.', ["champ lexical","luxe","cristal","argent","apparat"])
    ],
  },
  'GT-027': {
    texte: `DOM JUAN
Ah ! pour être honnête homme, je donnerais tous les honnêtes gens du monde ; et je ne crois pas qu'on puisse faire une plaisanterie plus plaisante que de se moquer d'eux. Sganarelle, tu ne sais pas ce que c'est que d'être un homme de bien ; c'est une chose qui me fait pitié. Il faut que l'âme soit bien basse pour se résoudre à n'être que ce que les autres veulent qu'on soit, et pour renoncer à toutes les douceurs de la vie, pour craindre la mort.`,
    contexte: "Dom Juan assume son immoralisme — comédie du libertin qui défie la morale.",
    attendus: [
      att('Antithèse', '« honnête homme »', 'Antithèse entre l\'idéal moral (honnête homme) et le mépris affiché — contraste qui définit le personnage.', ["antithèse","honnête","moquer","contraste","moral"]),
      att('Hyperbole', '« tous les honnêtes gens du monde »', 'Hyperbole : « tous les honnêtes gens » pour une plaisanterie — exagération qui souligne le cynisme du libertin.', ["hyperbole","tous","exag","cynisme","libertin"]),
      att('Registre comique', '« plaisanterie plus plaisante »', 'Registre comique : Dom Juan provoque le rire par le renversement des valeurs morales — comédie du libertin.', ["comique","moque","provoc","rire","renvers"]),
      att('Litote', '« je ne crois pas qu\'on puisse faire une plaisanterie plus plaisante »', 'Litote ironique : sous-entendre que la moquerie est supérieure — dédain masqué sous une fausse modération.', ["litote","ironie","moquer","dédain","modér"])
    ],
  },
  'GT-028': {
    texte: `Quasimodo était à peu près difforme. Il n'avait pas plus de quinze ans, et déjà il était informe : la tête trop grosse, les cheveux roux, les yeux injectés de sang, la bouche tordue, le nez camus, les dents écartées, les jambes torses. Son dos était voûté, sa poitrine osseuse et concave, son épaule gauche avait une bosse qui le faisait pencher, sa jambe droite était estropiée. Il ne pouvait marcher qu'en boitant, et ses mains énormes, pendantes, semblaient des grappes de fruits mûrs.`,
    contexte: "Portrait physique de Quasimodo — pathétique et grotesque, style hugolien.",
    attendus: [
      att('Énumération', '« la tête trop grosse, les cheveux roux, les yeux injectés de sang »', 'Énumération des difformités : chaque trait ajoute à l\'accumulation pathétique du corps monstrueux.', ["énumération","tête","cheveux","yeux","difform"]),
      att('Anaphore', '« Son dos était voûté, sa poitrine osseuse »', 'Anaphore des possessifs « son / sa » : énumération qui martèle la laideur corporelle — insistance pathétique.', ["anaphore","son","sa","corps","laideur"]),
      att('Comparaison', '« semblaient des grappes de fruits mûrs »', 'Comparaison : les mains de Quasimodo évoquent des grappes — image grotesque et matérielle du corps.', ["comparaison","grappes","fruits","mains","grotesque"]),
      att('Registre pathétique', '« à peu près difforme »', 'Registre pathétique : la difformité suscite compassion — Hugo humanise le monstre par la description clinique.', ["pathétique","difform","compassion","monstre","hugo"])
    ],
  },
  'GT-029': {
    texte: `Comment peut-on être Persan ! J'ai à peine revu la Perse, que je ne demande plus comment on peut être Européen ; car il faut avouer que l'on ne voit rien de si singulier que ce pays-ci. Paris est une ville prodigieuse, où le temps se passe en plaisirs. On n'y voit que des gens bien faits, bien vêtus, bien coiffés, bien élevés, bien éduqués, bien polis, et qui savent vivre. On y voit des femmes qui ont de l'esprit, de la beauté, de la grâce, de l'élégance, de la douceur, de la bonté, de la vertu.`,
    contexte: "Usbek découvre Paris avec un regard étranger — satire des mœurs européennes.",
    attendus: [
      att('Registre satirique', '« rien de si singulier que ce pays-ci »', 'Registre satirique : le regard persan déforme Paris pour en révéler les absurdités — dénonciation par le décalage culturel.', ["satirique","singulier","décalage","absurd","paris"]),
      att('Antithèse', '« Persan »', 'Antithèse implicite entre regard persan et mœurs européennes — relativisation des normes par le dépaysement.', ["antithèse","persan","européen","contraste","mœurs"]),
      att('Hyperbole', '« rien de si singulier »', 'Hyperbole : l\'étonnement exagéré du Persan souligne l\'ironie sur les coutumes parisiennes.', ["hyperbole","singulier","exag","étonn","ironie"]),
      att('Énumération', '« bien faits, bien vêtus, bien coiffés, bien élevés »', 'Énumération des qualités parisiennes : accumulation ironique qui satirise la vanité mondaine.', ["énumération","bien","paris","vanité","ironie"])
    ],
  },
  'GT-030': {
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
      att('Anaphore', '« Un enfant, un enfant roi »', 'Anaphore de « enfant » : martèlement qui exprime l\'angoisse d\'Athalie devant la prophétie — obsession tragique.', ["anaphore","enfant","roi","angoiss","répét"]),
      att('Antithèse', '« si faible instrument »', 'Antithèse entre la faiblesse de l\'enfant et la puissance de la punition — Dieu humilie la reine par le dérisoire.', ["antithèse","faible","enfant","punir","dérisoire"]),
      att('Hyperbole', '« Quel prodige nouveau »', 'Hyperbole : le « prodige » amplifie la terreur d\'Athalie devant le surnaturel — registre tragique biblique.', ["hyperbole","prodige","exag","terreur","surnaturel"]),
      att('Registre tragique', '« me fait trembler et craindre »', 'Registre tragique : Athalie est saisie par la peur d\'une fatalité divine — terreur devant un pouvoir qui la dépasse.', ["tragique","trembl","crainte","fatal","peur"])
    ],
  },
  'GT-031': {
    texte: `Souvent, pour s'amuser, les hommes d'équipage
Prennent des albatros, vastes oiseaux des mers,
Qui suivent, indolents compagnons de voyage,
Le navire glissant sur les gouffres amers.

À peine les ont-ils déposés sur les planches,
Qu'ils pâlissent, sous la honte, ces rois de l'azur ;
Et, débiles, laissant pendre leur grande aile blanche,
Comme des avirons traînant à côté d'eux.

Ce voyageur ailé, comme il est gauche et peureux !
Lui, naguère si beau, qu'il est comique et laid !
L'un agace son bec avec un brûle-gueule,
L'autre mime l'infirme qui volait tout droit !`,
    contexte: "Poème en alexandrins — métaphore de l\'artiste incompris par la foule.",
    attendus: [
      att('Comparaison', '« Comme des avirons traînant à côté d\'eux »', 'Comparaison : les ailes de l\'albatros deviennent ridicules comme des avirons — image de l\'artiste déchu hors de son élément.', ["comparaison","avirons","ailes","ridicule","déchu"]),
      att('Antithèse', '« naguère si beau, qu\'il est comique et laid »', 'Antithèse entre la beauté libre en mer et la laideur sur le navire — contraste qui symbolise la chute de l\'artiste.', ["antithèse","beau","laid","contraste","chute"]),
      att('Métaphore', '« ces rois de l\'azur »', 'Métaphore : l\'albatros est roi de l\'azur — symbole du poète dans son élément naturel.', ["métaphore","rois","azur","poète","liberté"]),
      att('Registre satirique', '« comique et laid »', 'Registre satirique : la foule humilie l\'albatros — dénonciation de la médiocrité qui écrase le génie.', ["satirique","comique","laid","foule","humili"])
    ],
  },
  'GT-032': {
    texte: `A noir, E blanc, I rouge, U vert, O bleu : voyelles,
Je dirai quelque jour vos naissances latentes :
A, noir corset velu des mouches éclatantes
Qui bombinent autour des puanteurs cruelles,

Golfes d'ombre ; E, candeur des vapeurs et des tentes,
Lances des glaciers fiers, rois blancs, frissons d'ombelles ;
I, pourpres, sang craché, rire des lèvres belles
Dans la colère ou les ivresses pénitentes ;

U, cycles, vibrements divins des mers virides,
Paix des pâtis semés d'animaux, paix des rides
Que l'alchimie imprime aux grands fronts studieux ;

O, suprême Clairon plein des strideurs étranges,
Silences traversés des Mondes et des Anges :
— O l'Oméga, rayon violet de Ses Yeux ! —`,
    contexte: "Poème symboliste — synesthie des voyelles, rupture avec la poésie descriptive.",
    attendus: [
      att('Énumération', '« A noir, E blanc, I rouge, U vert, O bleu »', 'Énumération des voyelles associées à des couleurs — liste qui crée une plénitude sensorielle typique du symbolisme.', ["énumération","voyelle","couleur","liste","sensori"]),
      att('Synesthie', '« A noir, E blanc, I rouge »', 'Synesthie : les voyelles deviennent couleurs et sensations — rupture avec la poésie descriptive.', ["synesthie","voyelle","couleur","sens","symbol"]),
      att('Métaphore', '« A, noir corset velu des mouches éclatantes »', 'Métaphore audacieuse : la voyelle A devient un corset noir — image poétique surprenante et nouvelle.', ["métaphore","corset","noir","image","surpren"]),
      att('Registre lyrique', '« Je dirai quelque jour vos naissances latentes »', 'Registre lyrique : le « je » poétique promet de révéler un mystère intime des voyelles — subjectivité visionnaire.', ["lyrique","je","mystère","latent","vision"])
    ],
  },
  'GT-033': {
    texte: `Julien entra dans l'église. Il n'osait pas regarder les dames élégantes ; il ne pensait qu'à sa peur de rougir et de se trahir. Il se sentait mal à l'aise, maladroit, ridicule. Il avait l'air d'un paysan qui entre pour la première fois dans un salon. Les femmes le regardaient avec curiosité ; il baissait les yeux, rougissait, et ne savait où mettre ses mains. Il se rappelait les conseils du curé : il fallait être modeste, ne pas regarder les femmes, ne pas parler trop fort. Mais son cœur battait, et il craignait que tout le monde ne s'aperçût de sa timidité.`,
    contexte: "Julien Sorel, jeune provincial timide — roman psychologique du XIXe siècle.",
    attendus: [
      att('Comparaison', '« l\'air d\'un paysan qui entre pour la première fois dans un salon »', 'Comparaison : Julien est un intrus social — image de la gêne provinciale dans le monde élégant.', ["comparaison","paysan","salon","gêne","provincial"]),
      att('Registre pathétique', '« sa peur de rougir et de se trahir »', 'Registre pathétique : la vulnérabilité de Julien suscite la compassion — héros mal à l\'aise dans un monde social supérieur.', ["pathétique","vulnér","rougir","compassion","timide"]),
      att('Champ lexical', '« mal à l\'aise, maladroit, ridicule »', 'Champ lexical de la honte et de la maladresse — vocabulaire qui traduit l\'inhibition psychologique du personnage.', ["champ lexical","honte","maladroit","ridicule","inhib"]),
      att('Focalisation interne', '« Il ne pensait qu\'à sa peur »', 'Focalisation interne : le narrateur pénètre la conscience de Julien — analyse psychologique stendhalienne.', ["focalisation","peur","conscience","psycholog","stendhal"])
    ],
  },
  'GT-034': {
    texte: `Elle était de toute la soirée la plus jolie, la plus gracieuse, souriante et joyeuse. Tous les hommes la regardaient, la demandaient à danser, l'assiduité du ministre lui fit remarquer cette femme. Elle dansait avec une ivresse, une passion, une allégorie de la vie ; elle oubliait tout dans ce triomphe d'une heure ; elle ne pensait qu'à sa beauté, à son succès, à la couronne de femme la plus élégante et la plus recherchée qu'elle portait sur la tête.`,
    contexte: "Matilde Loisel au bal — ironie du destin, nouvelle naturaliste.",
    attendus: [
      att('Hyperbole', '« la plus jolie, la plus gracieuse »', 'Hyperbole du superlatif : Matilde atteint le sommet du bonheur social — exagération qui prépare la chute tragique.', ["hyperbole","superlatif","jolie","bonheur","chute"]),
      att('Énumération', '« jolie, la plus gracieuse, souriante et joyeuse »', 'Énumération d\'adjectifs positifs : chaque trait ajoute à la gloire éphémère de Matilde — insistance sur le moment de plénitude.', ["énumération","jolie","gracieuse","joie","gloire"]),
      att('Registre épique', '« Tous les hommes la regardaient »', 'Registre épique (ironique) : Matilde est l\'héroïne d\'une soirée exceptionnelle — grandeur momentanée avant le dénouement cruel.', ["épique","héroïne","exceptionn","ironie","gloire"]),
      att('Champ lexical', '« ivresse, une passion, une allégorie de la vie »', 'Champ lexical de la fête et de la joie — atmosphère lumineuse qui contraste avec la misère du début et de la fin.', ["champ lexical","fête","joie","ivresse","contraste"])
    ],
  },
  'GT-035': {
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

— C'est bien la pire peine
De ne savoir pourquoi
Sans amour et sans haine
Mon cœur a tant de peine.`,
    contexte: "Poème musical en vers impairs — mélancolie urbaine, correspondances pluie / larmes.",
    attendus: [
      att('Comparaison', '« Comme il pleut sur la ville »', 'Comparaison avec « comme » : la tristesse intérieure est assimilée à la pluie — correspondance entre état d\'âme et paysage.', ["comparaison","comme","pluie","tristesse","ville"]),
      att('Métaphore', '« Il pleure dans mon cœur »', 'Métaphore : le cœur pleure — intériorisation de la pluie et expression de la mélancolie vague.', ["métaphore","cœur","pleure","intérior","mélancol"]),
      att('Registre lyrique', '« Mon cœur a tant de peine »', 'Registre lyrique : expression du moi poétique et d\'un sentiment sans cause précise — langueur et spleen.', ["lyrique","cœur","peine","moi","spleen"]),
      att('Apostrophe', '« Ô bruit doux de la pluie »', 'Apostrophe à la pluie : le poète s\'adresse au paysage comme à un interlocuteur — musicalité et mélancolie.', ["apostrophe","pluie","bruit","musical","mélancol"])
    ],
  },
  'GT-036': {
    texte: `Barbara
Il pleut sur Brest comme il pleut ailleurs
Mais il pleut comme il pleut sur la mer
Sur la ville qui est au bout de la terre
Sur la forêt qu'on arrache
Sur l'océan qu'on empoisonne
Sur la ville qu'on déchire
Sur l'homme qu'on humilie
Sur l'âme qu'on opprime
Il pleut
Il pleut sur Brest
Il pleut sur nos amours
Et c'est le vent le vent qui pleure le vent qui pleure
Barbara
Il pleut sur Brest comme il pleut ailleurs
Mais il pleut sur Brest comme il pleut sur la mer
Sur la ville qui est au bout de la terre`,
    contexte: "Poème de la Résistance — Brest bombardée, amour et guerre entremêlés.",
    attendus: [
      att('Anaphore', '« Il pleut »', 'Anaphore de « Il pleut » : répétition obsédante qui lie pluie, guerre et souffrance collective — rythme incantatoire.', ["anaphore","pleut","répét","obsess","guerre"]),
      att('Personnification', '« c\'est le vent le vent qui pleure »', 'Personnification du vent qui pleure : la nature partage la douleur humaine — mélange intime et historique.', ["personnification","vent","pleure","nature","douleur"]),
      att('Apostrophe', '« Barbara »', 'Apostrophe à Barbara : le poète interpelle la bien-aimée au cœur du poème de la Résistance — amour et destruction mêlés.', ["apostrophe","barbara","amour","résist","brest"]),
      att('Énumération', '« Sur la forêt qu\'on arrache »', 'Énumération des destructions : chaque « sur » accumule les ravages de la guerre — effet de liste pathétique.', ["énumération","forêt","océan","guerre","destruction"])
    ],
  },
  'GT-037': {
    texte: `GARCIN
Vous avez votre rêve en main. Allez-y. Gardez-le. Je ne suis pas votre bouche à souffrir. Est-ce que vous croyez que j'ai envie de vous consoler ? Est-ce que vous croyez que je me soucie de ce que vous pensez de moi ? Non, non, ne me touchez pas. Je ne veux pas de votre pitié. Vous avez votre rêve en main. Allez-y. Gardez-le.
INEZ
Eh bien, l'enfer, c'est les autres.
GARCIN
Oui, c'est les autres. Toujours les autres. On est en enfer, et on ne le sait pas. On est en enfer, et on le sait, et on y reste.`,
    contexte: "Théâtre existentialiste — enfer comme regard des autres, pas supplice physique.",
    attendus: [
      att('Paradoxe', '« l\'enfer, c\'est les autres »', 'Paradoxe : l\'enfer n\'est ni feu ni démon mais la présence des autres — formule choc qui résume la philosophie de la pièce.', ["paradoxe","enfer","autres","formule","philosoph"]),
      att('Anaphore', '« On est en enfer »', 'Anaphore de « On est en enfer » : martèlement qui installe l\'obsession de la condamnation relationnelle.', ["anaphore","enfer","répét","condamn","obsess"]),
      att('Antithèse', '« et on ne le sait pas »', 'Antithèse entre ignorance et conscience de l\'enfer — le personnage bascule de l\'aveuglement à la lucidité.', ["antithèse","sait","ignor","lucid","conscience"]),
      att('Registre tragique', '« Je ne suis pas votre bouche à souffrir »', 'Registre tragique : les personnages sont condamnés au regard mutuel — terreur existentielle sans rédemption.', ["tragique","souffrir","regard","condamn","existential"])
    ],
  },
  'GT-038': {
    texte: `Les curieux événements qui font le sujet de cette chronique eurent lieu en 194… à Oran. Certains lecteurs, comme on dit, seront peut-être tentés de trouver ces récits peu vraisemblables. Oran, ville ordinaire, n'est pas plus sujette que d'autres à la peste. La maladie n'y a jamais fait de ravages dignes d'être retenus. On s'y habitue. L'opinion générale était qu'on devait s'y résigner et que, vraiment, il n'y avait pas de quoi faire de telles histoires.`,
    contexte: "Allégorie de l\'Occupation — ton neutre du narrateur face à l\'événement absurde.",
    attendus: [
      att('Litote', '« il n\'y avait pas de quoi faire de telles histoires »', 'Litote : la peste est minimisée par la foule — sous-entendu ironique sur l\'indifférence collective.', ["litote","banal","déni","modér","minimis"]),
      att('Focalisation externe', '« L\'opinion générale était »', 'Focalisation externe : le narrateur observe la cité sans entrer dans une conscience — distance chronique.', ["focalisation","opinion","narrateur","distance","chronique"]),
      att('Registre tragique', '« curieux événements »', 'Registre tragique sous ton feint : la peste est minimisée par euphémisme — terreur de l\'absurde et de l\'indifférence.', ["tragique","événements","euphém","absurde","indifférence"]),
      att('Incipit', '« Les curieux événements qui font le sujet de cette chronique »', 'Incipit : le narrateur annonce une chronique — pacte de lecture allégorique et distance narrative.', ["incipit","chronique","narrateur","allégor","pacte"])
    ],
  },
  'GT-039': {
    texte: `Je forme une entreprise qui n'eut jamais d'exemple, et dont l'exécution n'aura point d'imitateur. Je veux montrer à mes semblables un homme dans toute la vérité de la nature ; et cet homme, ce sera moi. Moi seul. Je sens mon cœur, et je connais les hommes. Je ne suis fait comme aucun de ceux que j'ai vus ; j'ose même croire n'être fait comme aucun de ceux qui existent. Si je ne vaux pas mieux, au moins je suis autre.`,
    contexte: "Manifeste autobiographique — transparence et orgueil du moi écrivant.",
    attendus: [
      att('Hyperbole', '« n\'eut jamais d\'exemple, et dont l\'exécution n\'aura point d\'imitateur »', 'Hyperbole : Rousseau revendique l\'originalité absolue de son entreprise — orgueil du moi écrivant.', ["hyperbole","exemple","imitateur","original","orgueil"]),
      att('Anaphore', '« Je forme »', 'Anaphore du « je » : le discours autobiographique domine dès l\'incipit — subjectivité revendiquée.', ["anaphore","je","discours","autobiograph","subjectiv"]),
      att('Antithèse', '« Si je ne vaux pas mieux, au moins je suis autre »', 'Antithèse entre valeur morale et singularité — Rousseau affirme sa différence comme vertu.', ["antithèse","mieux","autre","différence","singularité"]),
      att('Registre lyrique', '« cet homme, ce sera moi »', 'Registre lyrique : transparence et sincérité du moi — naissance du « je » moderne en littérature.', ["lyrique","moi","vérité","sincérité","autobiograph"])
    ],
  },
  'GT-040': {
    texte: `La bête traînait encore sa croupe sanglante,
Et lâchait dans l'herbe, en se retournant,
Sa mâchoire, pleine de clarté et de sang,
Et sa langue immobile, et son œil ténébreux.
Comme un soldat qui meurt, elle étendit les bras,
Prit un long frisson et rendit le dernier soupir.
La mort avait mis sur sa noble figure
Le sceau de la grandeur qu'elle eut dans sa vie.
— O Nature ! en tes fureurs, en tes douleurs, en tes colères,
Tu n'as rien fait de plus grand ni de plus beau !`,
    contexte: "Mort du loup blessé — élégie sur la fin de la force et de la fierté.",
    attendus: [
      att('Comparaison', '« Comme un soldat qui meurt »', 'Comparaison : le loup mourant évoque un soldat — élégie sur la fin de la force et de la fierté.', ["comparaison","soldat","meurt","loup","élégie"]),
      att('Personnification', '« O Nature ! »', 'Apostrophe à la Nature : Vigny interpelle une force supérieure — registre élégiaque et méditation romantique.', ["personnification","nature","apostrophe","élégiaque","romant"]),
      att('Champ lexical', '« croupe sanglante »', 'Champ lexical de la mort et du sang : sanglante, sang, mort — atmosphère de défaite noble.', ["champ lexical","sang","mort","défaite","noble"]),
      att('Registre élégiaque', '« Le sceau de la grandeur »', 'Registre élégiaque : le loup conserve sa dignité dans la mort — plainte mélancolique sur la fin de la force.', ["élégiaque","grandeur","dignité","mort","fierté"])
    ],
  },
  'GT-041': {
    texte: `BÉRENGER
Qu'est-ce que c'est que cette bête-là ?
DUDARD
Quelle bête ?
BÉRENGER
Là-bas, dans la rue.
DUDARD
Je ne vois rien.
BÉRENGER
Moi, je la vois. C'est un rhinocéros.
DUDARD
Un rhinocéros ? Vous plaisantez.
BÉRENGER
Non, non, je ne plaisante pas. C'est un rhinocéros. Il est là, dans la rue. Il marche. Il avance. Il va nous écraser. Un rhinocéros ! Un rhinocéros dans la ville ! C'est impossible. C'est absurde. Et pourtant, c'est vrai.`,
    contexte: "Théâtre de l\'absurde — métaphore de la conformité et du totalitarisme.",
    attendus: [
      att('Paradoxe', '« Un rhinocéros dans la ville »', 'Paradoxe : un rhinocéros dans une ville civilisée — rupture du réalisme qui symbolise l\'idéologie envahissante.', ["paradoxe","rhinocéros","ville","absurde","rupture"]),
      att('Anaphore', '« Un rhinocéros »', 'Anaphore de « Un rhinocéros » : répétition qui exprime le choc et le déni — obsession du personnage.', ["anaphore","rhinocéros","répét","choc","déni"]),
      att('Registre comique', '« Vous plaisantez »', 'Registre comique : l\'incrédulité de Dudard contraste avec la terreur de Bérenger — humour de l\'absurde.', ["comique","plaisantez","incrédul","absurde","rire"]),
      att('Registre satirique', '« C\'est impossible. C\'est absurde »', 'Registre satirique : Ionesco dénonce la bêtise collective par l\'absurde — métaphore de la déshumanisation.', ["satirique","absurde","bêtise","collectif","déshuman"])
    ],
  },
  'GT-042': {
    texte: `CYRANO
Ah ! non ! c'est un peu court, jeune homme !
On pouvait dire… Oh ! Dieu ! … bien des choses en somme…
En variant l'accent, car, tout en se moquant,
Il y a des tons, savants, spirituels, modérés,
Dont on peut tout à coup tirer un effet comique,
Et que l'on dirait, en les poussant un peu fort,
Qu'on les prend pour des cris de passion.
Ah ! le nez… Ah ! le nez… le nez… le nez…
Mais, quand on veut, mon cher, on l'attaque autrement,
Et l'on marque, sans en rien démordre,
Des points plus délicats, et dont l'attaque est forte.
Car le nez, mon cher, est un objet comique,
Mais c'est un objet comique parce qu'il est grand.`,
    contexte: "Répartie célèbre — registre comique et épique, virtuosité verbale.",
    attendus: [
      att('Anaphore', '« Ah ! le nez… Ah ! le nez… le nez… le nez… »', 'Anaphore de « nez » : martèlement ironique qui ridiculise l\'insulte de Valvert — virtuosité verbale de Cyrano.', ["anaphore","nez","répét","ironie","virtuosité"]),
      att('Registre comique', '« c\'est un peu court, jeune homme »', 'Registre comique : Cyrano moque l\'insulte banale — répartie qui provoque le rire du public.', ["comique","court","moque","répartie","rire"]),
      att('Antithèse', '« objet comique »', 'Antithèse entre l\'insulte grossière et la finesse de la répartie — Cyrano renverse la situation.', ["antithèse","comique","finesse","insulte","renverse"]),
      att('Registre épique', '« On pouvait dire… Oh ! Dieu ! »', 'Registre épique : la tirade élève le duel verbal au niveau du panache héroïque — bravoure romantique.', ["épique","panache","héros","bravoure","duel"])
    ],
  },
  'GT-043': {
    texte: `Et tout d'un coup le souvenir m'est apparu. Ce goût, c'était la madeleine que le dimanche matin, à Combray, quand je descendais pour lui dire bonjour, ma tante Léonie m'offrait, en y trempant d'abord dans son infusion de thé ou de tilleul. Tout Combray et ses environs, toute la ville et le pays, la nourriture, les couleurs, les formes, tout ce qui n'est pas moi, surgirent de ma tasse, comme une fée d'une baguette magique.`,
    contexte: "Mémoire involontaire — madeleine, temps perdu et resurgence sensorielle.",
    attendus: [
      att('Métaphore', '« surgirent de ma tasse »', 'Métaphore : tout Combray jaillit de la tasse — image de la mémoire involontaire et de la résurgence sensorielle.', ["métaphore","surgir","tasse","mémoire","madeleine"]),
      att('Comparaison', '« comme une fée d\'une baguette magique »', 'Comparaison : le souvenir surgit comme par magie — enchantement de la mémoire involontaire.', ["comparaison","fée","magique","souvenir","enchant"]),
      att('Hyperbole', '« Tout Combray et ses environs »', 'Hyperbole : une bouchée fait resurgir une ville entière — intensité de la mémoire sensorielle.', ["hyperbole","combray","ville","mémoire","exag"]),
      att('Registre lyrique', '« le souvenir m\'est apparu »', 'Registre lyrique : expression intime de la redécouverte du passé — subjectivité du narrateur proustien.', ["lyrique","souvenir","passé","intime","narrateur"])
    ],
  },
  'GT-044': {
    texte: `J'ai, je l'avoue, une certaine vanité de femme à laquelle vous avez su plaire. Vous m'avez vue faible : ne comptez pas sur ma faiblesse, mais sur ma vengeance. Je ne suis pas si facile à tromper que vous le croyez. J'ai appris à me connaître, et je sais ce dont je suis capable. Vous avez cru me dominer ; vous vous êtes trompé. C'est moi qui vous domine, et qui vous dominerai toujours. Ne croyez pas que je vous pardonnerai : je n'ai jamais pardonné, et je ne commencerai pas par vous.`,
    contexte: "Mme de Merteuil — manipulation, registre satirique et tragique.",
    attendus: [
      att('Antithèse', '« faiblesse »', 'Antithèse entre faiblesse apparente et vengeance — Merteuil retourne la situation par la menace.', ["antithèse","faiblesse","vengeance","contraste","menace"]),
      att('Anaphore', '« vous domine »', 'Anaphore de la domination : Merteuil martèle sa supériorité — registre satirique et tragique.', ["anaphore","domine","répét","supérior","merteuil"]),
      att('Registre satirique', '« une certaine vanité de femme »', 'Registre satirique : Merteuil dénonce et incarne la manipulation aristocratique — cynisme des Lumières.', ["satirique","vanité","manipul","cynisme","aristocrat"]),
      att('Chiasme', '« Vous avez cru me dominer ; vous vous êtes trompé »', 'Chiasme : inversion des rôles domination / soumission — Merteuil retourne la relation de pouvoir.', ["chiasme","dominer","trompé","inversion","pouvoir"])
    ],
  },
  'GT-045': {
    texte: `C'est un trou de verdure où chante une rivière
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
Il dort dans le soleil, la main sur sa poitrine,
Tranquille. Il a deux trous rouges au côté droit.`,
    contexte: "Poème de la guerre — idylle trompeuse, soldat mort révélé à la fin.",
    attendus: [
      att('Ironie', '« Il dort »', 'Ironie tragique : le « sommeil » cache la mort du soldat — idylle trompeuse révélée au dernier vers.', ["ironie","dort","mort","soldat","idylle"]),
      att('Champ lexical', '« trou de verdure »', 'Champ lexical de la nature et de la lumière : verdure, soleil, rayons — contraste avec la mort à la fin.', ["champ lexical","verdure","soleil","nature","lumière"]),
      att('Personnification', '« la montagne fière »', 'Personnification : la montagne est « fière » — paysage idyllique qui trompe le lecteur.', ["personnification","montagne","fière","paysage","idylle"]),
      att('Métaphore', '« mousse de rayons »', 'Métaphore : les rayons du soleil forment une mousse lumineuse — fusion poétique de lumière et végétation.', ["métaphore","mousse","rayons","lumière","fusion"])
    ],
  },
  'GT-046': {
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
      att('Oxymore', '« Je vis, je meurs »', 'Oxymore : vivre et mourir simultanément — contradiction poétique de l\'amour passionné.', ["oxymore","vis","meurs","contradict","amour"]),
      att('Antithèse', '« je me brûle et me noie »', 'Antithèse entre brûler et noyer — les sensations opposées structurent le tourment amoureux.', ["antithèse","brûle","noie","oppos","tourment"]),
      att('Anaphore', '« Je vis, je meurs »', 'Anaphore du « je » : martèlement qui exprime l\'emprise du sentiment sur le sujet lyrique.', ["anaphore","je","répét","emprise","lyrique"]),
      att('Registre lyrique', '« je ris et je pleure »', 'Registre lyrique : expression directe des émotions contradictoires — subjectivité amoureuse de Louise Labé.', ["lyrique","ris","pleure","émotion","subjectiv"])
    ],
  },
  'GT-047': {
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
      att('Maxime', '« La raison du plus fort est toujours la meilleure »', 'Maxime en exergue : la fable dénonce d\'emblée l\'arbitraire du pouvoir — satire politique.', ["maxime","fort","raison","arbitraire","pouvoir"]),
      att('Dialogue', '« Que tu me rends donc troublé »', 'Dialogue : le Loup accuse l\'Agneau par des prétextes successifs — satire de l\'injustice.', ["dialogue","troublé","loup","agneau","injust"]),
      att('Registre satirique', '« la faim en ces lieux rendait hardi »', 'Registre satirique : la faim justifie la violence — critique du pouvoir qui invente des excuses.', ["satirique","faim","hardi","violence","excuse"]),
      att('Antithèse', '« Agneau »', 'Antithèse entre proie innocente et prédateur — structure allégorique de la fable.', ["antithèse","agneau","loup","proie","prédateur"])
    ],
  },
  'GT-048': {
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
      att('Anaphore', '« J\'ai perdu ma force »', 'Anaphore de « J\'ai perdu » : martèlement qui exprime l\'épuisement et la perte successive — registre élégiaque.', ["anaphore","perdu","répét","deuil","épuis"]),
      att('Antithèse', '« c\'était une sœur »', 'Antithèse entre l\'idéal de la Vérité (sœur) et la réalité (hystérique) — désillusion romantique.', ["antithèse","sœur","hystérique","vérité","désillu"]),
      att('Énumération', '« ma force et ma vie »', 'Énumération des pertes : force, vie, amis, gaieté — liste qui accumule le vide existentiel.', ["énumération","force","vie","amis","vide"]),
      att('Registre lyrique', '« J\'ai perdu ma force »', 'Registre lyrique : confession intime du spleen — subjectivité autobiographique de Musset.', ["lyrique","force","spleen","confession","intime"])
    ],
  },
  'GT-049': {
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
    contexte: "Poème en vers libres — portrait d\'enfant, répétition incantatoire.",
    attendus: [
      att('Anaphore', '« Et ses taches »', 'Anaphore de « Et ses taches » : répétition incantatoire qui construit le portrait fragmenté de l\'enfant.', ["anaphore","taches","répét","portrait","incant"]),
      att('Énumération', '« Avec ses taches de rousseur »', 'Énumération des taches : chaque terme ajoute une dimension au portrait — effet de plénitude.', ["énumération","taches","liste","portrait","enfant"]),
      att('Comparaison', '« ses yeux couleur de mer »', 'Comparaison : les yeux de l\'enfant évoquent la mer — image poétique du regard.', ["comparaison","yeux","mer","regard","image"]),
      att('Vers libre', '« Page d\'écriture »', 'Vers libre : absence de rime fixe et rythme conversationnel — modernité poétique de Prévert.', ["vers libre","rythme","moderne","prévert","fragment"])
    ],
  },
  'GT-050': {
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
      att('Anaphore', '« Sur mes cahiers »', 'Anaphore de « Sur » : la reprise martèle l\'omniprésence de la Liberté — poésie de la Résistance.', ["anaphore","sur","répét","liberté","résist"]),
      att('Énumération', '« Pierre sang papier ou cendre »', 'Énumération des supports d\'écriture : pierre, sang, papier, cendre — registre engagé et solennel.', ["énumération","pierre","sang","papier","cendre"]),
      att('Registre épique', '« par le pouvoir d\'un mot »', 'Registre épique : le mot « Liberté » élève l\'action au niveau du combat universel — exaltation poétique.', ["épique","mot","pouvoir","exalt","combat"]),
      att('Apostrophe', '« Liberté »', 'Apostrophe finale à la Liberté : le poème culmine sur le nom invoqué — anaphore et engagement fusionnent.', ["apostrophe","liberté","nom","engag","résist"])
    ],
  }
};
