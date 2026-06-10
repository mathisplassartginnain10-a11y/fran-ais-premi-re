/* Grands textes supplémentaires — fusionnés au chargement */
const GRANDS_TEXTES_EXTRA = [
  {
    id: "GT-031",
    titre: "L'Albatros",
    auteur: "Baudelaire",
    oeuvre: "Les Fleurs du Mal (1857)",
    genre: "Poésie",
    diff: 2,
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
    contexte: "Poème en alexandrins — métaphore de l'artiste incompris par la foule.",
    attendus: [
      { procede: "Comparaison", citation: "« Comme des avirons traînant à côté d'eux »", interpretation: "Comparaison : les ailes de l'albatros deviennent ridicules comme des avirons — image de l'artiste déchu hors de son élément.", keywords: ["comparaison","avirons","ailes","ridicule","déchu"] },
      { procede: "Antithèse", citation: "« naguère si beau, qu'il est comique et laid »", interpretation: "Antithèse entre la beauté libre en mer et la laideur sur le navire — contraste qui symbolise la chute de l'artiste.", keywords: ["antithèse","beau","laid","contraste","chute"] },
      { procede: "Métaphore", citation: "« ces rois de l'azur »", interpretation: "Métaphore : l'albatros est roi de l'azur — symbole du poète dans son élément naturel.", keywords: ["métaphore","rois","azur","poète","liberté"] },
      { procede: "Registre satirique", citation: "« comique et laid »", interpretation: "Registre satirique : la foule humilie l'albatros — dénonciation de la médiocrité qui écrase le génie.", keywords: ["satirique","comique","laid","foule","humili"] }
    ]
  },
  {
    id: "GT-032",
    titre: "Voyelles",
    auteur: "Rimbaud",
    oeuvre: "Poésie (1871)",
    genre: "Poésie moderniste",
    diff: 3,
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
      { procede: "Énumération", citation: "« A noir, E blanc, I rouge, U vert, O bleu »", interpretation: "Énumération des voyelles associées à des couleurs — liste qui crée une plénitude sensorielle typique du symbolisme.", keywords: ["énumération","voyelle","couleur","liste","sensori"] },
      { procede: "Synesthie", citation: "« A noir, E blanc, I rouge »", interpretation: "Synesthie : les voyelles deviennent couleurs et sensations — rupture avec la poésie descriptive.", keywords: ["synesthie","voyelle","couleur","sens","symbol"] },
      { procede: "Métaphore", citation: "« A, noir corset velu des mouches éclatantes »", interpretation: "Métaphore audacieuse : la voyelle A devient un corset noir — image poétique surprenante et nouvelle.", keywords: ["métaphore","corset","noir","image","surpren"] },
      { procede: "Registre lyrique", citation: "« Je dirai quelque jour vos naissances latentes »", interpretation: "Registre lyrique : le « je » poétique promet de révéler un mystère intime des voyelles — subjectivité visionnaire.", keywords: ["lyrique","je","mystère","latent","vision"] }
    ]
  },
  {
    id: "GT-033",
    titre: "Le Rouge et le Noir — l'église",
    auteur: "Stendhal",
    oeuvre: "Le Rouge et le Noir (1830)",
    genre: "Roman",
    diff: 2,
    texte: `Julien entra dans l'église. Il n'osait pas regarder les dames élégantes ; il ne pensait qu'à sa peur de rougir et de se trahir. Il se sentait mal à l'aise, maladroit, ridicule. Il avait l'air d'un paysan qui entre pour la première fois dans un salon. Les femmes le regardaient avec curiosité ; il baissait les yeux, rougissait, et ne savait où mettre ses mains. Il se rappelait les conseils du curé : il fallait être modeste, ne pas regarder les femmes, ne pas parler trop fort. Mais son cœur battait, et il craignait que tout le monde ne s'aperçût de sa timidité.`,
    contexte: "Julien Sorel, jeune provincial timide — roman psychologique du XIXe siècle.",
    attendus: [
      { procede: "Comparaison", citation: "« l'air d'un paysan qui entre pour la première fois dans un salon »", interpretation: "Comparaison : Julien est un intrus social — image de la gêne provinciale dans le monde élégant.", keywords: ["comparaison","paysan","salon","gêne","provincial"] },
      { procede: "Registre pathétique", citation: "« sa peur de rougir et de se trahir »", interpretation: "Registre pathétique : la vulnérabilité de Julien suscite la compassion — héros mal à l'aise dans un monde social supérieur.", keywords: ["pathétique","vulnér","rougir","compassion","timide"] },
      { procede: "Champ lexical", citation: "« mal à l'aise, maladroit, ridicule »", interpretation: "Champ lexical de la honte et de la maladresse — vocabulaire qui traduit l'inhibition psychologique du personnage.", keywords: ["champ lexical","honte","maladroit","ridicule","inhib"] },
      { procede: "Focalisation interne", citation: "« Il ne pensait qu'à sa peur »", interpretation: "Focalisation interne : le narrateur pénètre la conscience de Julien — analyse psychologique stendhalienne.", keywords: ["focalisation","peur","conscience","psycholog","stendhal"] }
    ]
  },
  {
    id: "GT-034",
    titre: "La Parure",
    auteur: "Maupassant",
    oeuvre: "La Parure (1884)",
    genre: "Nouvelle",
    diff: 1,
    texte: `Elle était de toute la soirée la plus jolie, la plus gracieuse, souriante et joyeuse. Tous les hommes la regardaient, la demandaient à danser, l'assiduité du ministre lui fit remarquer cette femme. Elle dansait avec une ivresse, une passion, une allégorie de la vie ; elle oubliait tout dans ce triomphe d'une heure ; elle ne pensait qu'à sa beauté, à son succès, à la couronne de femme la plus élégante et la plus recherchée qu'elle portait sur la tête.`,
    contexte: "Matilde Loisel au bal — ironie du destin, nouvelle naturaliste.",
    attendus: [
      { procede: "Hyperbole", citation: "« la plus jolie, la plus gracieuse »", interpretation: "Hyperbole du superlatif : Matilde atteint le sommet du bonheur social — exagération qui prépare la chute tragique.", keywords: ["hyperbole","superlatif","jolie","bonheur","chute"] },
      { procede: "Énumération", citation: "« jolie, la plus gracieuse, souriante et joyeuse »", interpretation: "Énumération d'adjectifs positifs : chaque trait ajoute à la gloire éphémère de Matilde — insistance sur le moment de plénitude.", keywords: ["énumération","jolie","gracieuse","joie","gloire"] },
      { procede: "Registre épique", citation: "« Tous les hommes la regardaient »", interpretation: "Registre épique (ironique) : Matilde est l'héroïne d'une soirée exceptionnelle — grandeur momentanée avant le dénouement cruel.", keywords: ["épique","héroïne","exceptionn","ironie","gloire"] },
      { procede: "Champ lexical", citation: "« ivresse, une passion, une allégorie de la vie »", interpretation: "Champ lexical de la fête et de la joie — atmosphère lumineuse qui contraste avec la misère du début et de la fin.", keywords: ["champ lexical","fête","joie","ivresse","contraste"] }
    ]
  },
  {
    id: "GT-035",
    titre: "Il pleure dans mon cœur",
    auteur: "Verlaine",
    oeuvre: "Romances sans paroles (1874)",
    genre: "Poésie",
    diff: 1,
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
      { procede: "Comparaison", citation: "« Comme il pleut sur la ville »", interpretation: "Comparaison avec « comme » : la tristesse intérieure est assimilée à la pluie — correspondance entre état d'âme et paysage.", keywords: ["comparaison","comme","pluie","tristesse","ville"] },
      { procede: "Métaphore", citation: "« Il pleure dans mon cœur »", interpretation: "Métaphore : le cœur pleure — intériorisation de la pluie et expression de la mélancolie vague.", keywords: ["métaphore","cœur","pleure","intérior","mélancol"] },
      { procede: "Registre lyrique", citation: "« Mon cœur a tant de peine »", interpretation: "Registre lyrique : expression du moi poétique et d'un sentiment sans cause précise — langueur et spleen.", keywords: ["lyrique","cœur","peine","moi","spleen"] },
      { procede: "Apostrophe", citation: "« Ô bruit doux de la pluie »", interpretation: "Apostrophe à la pluie : le poète s'adresse au paysage comme à un interlocuteur — musicalité et mélancolie.", keywords: ["apostrophe","pluie","bruit","musical","mélancol"] }
    ]
  },
  {
    id: "GT-036",
    titre: "Barbara",
    auteur: "Prévert",
    oeuvre: "Paroles (1946)",
    genre: "Poésie",
    diff: 1,
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
      { procede: "Anaphore", citation: "« Il pleut »", interpretation: "Anaphore de « Il pleut » : répétition obsédante qui lie pluie, guerre et souffrance collective — rythme incantatoire.", keywords: ["anaphore","pleut","répét","obsess","guerre"] },
      { procede: "Personnification", citation: "« c'est le vent le vent qui pleure »", interpretation: "Personnification du vent qui pleure : la nature partage la douleur humaine — mélange intime et historique.", keywords: ["personnification","vent","pleure","nature","douleur"] },
      { procede: "Apostrophe", citation: "« Barbara »", interpretation: "Apostrophe à Barbara : le poète interpelle la bien-aimée au cœur du poème de la Résistance — amour et destruction mêlés.", keywords: ["apostrophe","barbara","amour","résist","brest"] },
      { procede: "Énumération", citation: "« Sur la forêt qu'on arrache »", interpretation: "Énumération des destructions : chaque « sur » accumule les ravages de la guerre — effet de liste pathétique.", keywords: ["énumération","forêt","océan","guerre","destruction"] }
    ]
  },
  {
    id: "GT-037",
    titre: "Huis clos — l'enfer",
    auteur: "Sartre",
    oeuvre: "Huis clos (1944)",
    genre: "Théâtre",
    diff: 2,
    texte: `GARCIN
Vous avez votre rêve en main. Allez-y. Gardez-le. Je ne suis pas votre bouche à souffrir. Est-ce que vous croyez que j'ai envie de vous consoler ? Est-ce que vous croyez que je me soucie de ce que vous pensez de moi ? Non, non, ne me touchez pas. Je ne veux pas de votre pitié. Vous avez votre rêve en main. Allez-y. Gardez-le.
INEZ
Eh bien, l'enfer, c'est les autres.
GARCIN
Oui, c'est les autres. Toujours les autres. On est en enfer, et on ne le sait pas. On est en enfer, et on le sait, et on y reste.`,
    contexte: "Théâtre existentialiste — enfer comme regard des autres, pas supplice physique.",
    attendus: [
      { procede: "Paradoxe", citation: "« l'enfer, c'est les autres »", interpretation: "Paradoxe : l'enfer n'est ni feu ni démon mais la présence des autres — formule choc qui résume la philosophie de la pièce.", keywords: ["paradoxe","enfer","autres","formule","philosoph"] },
      { procede: "Anaphore", citation: "« On est en enfer »", interpretation: "Anaphore de « On est en enfer » : martèlement qui installe l'obsession de la condamnation relationnelle.", keywords: ["anaphore","enfer","répét","condamn","obsess"] },
      { procede: "Antithèse", citation: "« et on ne le sait pas »", interpretation: "Antithèse entre ignorance et conscience de l'enfer — le personnage bascule de l'aveuglement à la lucidité.", keywords: ["antithèse","sait","ignor","lucid","conscience"] },
      { procede: "Registre tragique", citation: "« Je ne suis pas votre bouche à souffrir »", interpretation: "Registre tragique : les personnages sont condamnés au regard mutuel — terreur existentielle sans rédemption.", keywords: ["tragique","souffrir","regard","condamn","existential"] }
    ]
  },
  {
    id: "GT-038",
    titre: "La Peste — opening",
    auteur: "Camus",
    oeuvre: "La Peste (1947)",
    genre: "Roman",
    diff: 2,
    texte: `Les curieux événements qui font le sujet de cette chronique eurent lieu en 194… à Oran. Certains lecteurs, comme on dit, seront peut-être tentés de trouver ces récits peu vraisemblables. Oran, ville ordinaire, n'est pas plus sujette que d'autres à la peste. La maladie n'y a jamais fait de ravages dignes d'être retenus. On s'y habitue. L'opinion générale était qu'on devait s'y résigner et que, vraiment, il n'y avait pas de quoi faire de telles histoires.`,
    contexte: "Allégorie de l'Occupation — ton neutre du narrateur face à l'événement absurde.",
    attendus: [
      { procede: "Litote", citation: "« il n'y avait pas de quoi faire de telles histoires »", interpretation: "Litote : la peste est minimisée par la foule — sous-entendu ironique sur l'indifférence collective.", keywords: ["litote","banal","déni","modér","minimis"] },
      { procede: "Focalisation externe", citation: "« L'opinion générale était »", interpretation: "Focalisation externe : le narrateur observe la cité sans entrer dans une conscience — distance chronique.", keywords: ["focalisation","opinion","narrateur","distance","chronique"] },
      { procede: "Registre tragique", citation: "« curieux événements »", interpretation: "Registre tragique sous ton feint : la peste est minimisée par euphémisme — terreur de l'absurde et de l'indifférence.", keywords: ["tragique","événements","euphém","absurde","indifférence"] },
      { procede: "Incipit", citation: "« Les curieux événements qui font le sujet de cette chronique »", interpretation: "Incipit : le narrateur annonce une chronique — pacte de lecture allégorique et distance narrative.", keywords: ["incipit","chronique","narrateur","allégor","pacte"] }
    ]
  },
  {
    id: "GT-039",
    titre: "Les Confessions — opening",
    auteur: "Rousseau",
    oeuvre: "Les Confessions (1782)",
    genre: "Autobiographie",
    diff: 2,
    texte: `Je forme une entreprise qui n'eut jamais d'exemple, et dont l'exécution n'aura point d'imitateur. Je veux montrer à mes semblables un homme dans toute la vérité de la nature ; et cet homme, ce sera moi. Moi seul. Je sens mon cœur, et je connais les hommes. Je ne suis fait comme aucun de ceux que j'ai vus ; j'ose même croire n'être fait comme aucun de ceux qui existent. Si je ne vaux pas mieux, au moins je suis autre.`,
    contexte: "Manifeste autobiographique — transparence et orgueil du moi écrivant.",
    attendus: [
      { procede: "Hyperbole", citation: "« n'eut jamais d'exemple, et dont l'exécution n'aura point d'imitateur »", interpretation: "Hyperbole : Rousseau revendique l'originalité absolue de son entreprise — orgueil du moi écrivant.", keywords: ["hyperbole","exemple","imitateur","original","orgueil"] },
      { procede: "Anaphore", citation: "« Je forme »", interpretation: "Anaphore du « je » : le discours autobiographique domine dès l'incipit — subjectivité revendiquée.", keywords: ["anaphore","je","discours","autobiograph","subjectiv"] },
      { procede: "Antithèse", citation: "« Si je ne vaux pas mieux, au moins je suis autre »", interpretation: "Antithèse entre valeur morale et singularité — Rousseau affirme sa différence comme vertu.", keywords: ["antithèse","mieux","autre","différence","singularité"] },
      { procede: "Registre lyrique", citation: "« cet homme, ce sera moi »", interpretation: "Registre lyrique : transparence et sincérité du moi — naissance du « je » moderne en littérature.", keywords: ["lyrique","moi","vérité","sincérité","autobiograph"] }
    ]
  },
  {
    id: "GT-040",
    titre: "La Mort du loup",
    auteur: "Vigny",
    oeuvre: "Poèmes antiques et modernes (1837)",
    genre: "Poésie élégiaque",
    diff: 2,
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
      { procede: "Comparaison", citation: "« Comme un soldat qui meurt »", interpretation: "Comparaison : le loup mourant évoque un soldat — élégie sur la fin de la force et de la fierté.", keywords: ["comparaison","soldat","meurt","loup","élégie"] },
      { procede: "Personnification", citation: "« O Nature ! »", interpretation: "Apostrophe à la Nature : Vigny interpelle une force supérieure — registre élégiaque et méditation romantique.", keywords: ["personnification","nature","apostrophe","élégiaque","romant"] },
      { procede: "Champ lexical", citation: "« croupe sanglante »", interpretation: "Champ lexical de la mort et du sang : sanglante, sang, mort — atmosphère de défaite noble.", keywords: ["champ lexical","sang","mort","défaite","noble"] },
      { procede: "Registre élégiaque", citation: "« Le sceau de la grandeur »", interpretation: "Registre élégiaque : le loup conserve sa dignité dans la mort — plainte mélancolique sur la fin de la force.", keywords: ["élégiaque","grandeur","dignité","mort","fierté"] }
    ]
  },
  {
    id: "GT-041",
    titre: "Rhinocéros — le premier rhinocéros",
    auteur: "Ionesco",
    oeuvre: "Rhinocéros (1959)",
    genre: "Théâtre de l'absurde",
    diff: 2,
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
    contexte: "Théâtre de l'absurde — métaphore de la conformité et du totalitarisme.",
    attendus: [
      { procede: "Paradoxe", citation: "« Un rhinocéros dans la ville »", interpretation: "Paradoxe : un rhinocéros dans une ville civilisée — rupture du réalisme qui symbolise l'idéologie envahissante.", keywords: ["paradoxe","rhinocéros","ville","absurde","rupture"] },
      { procede: "Anaphore", citation: "« Un rhinocéros »", interpretation: "Anaphore de « Un rhinocéros » : répétition qui exprime le choc et le déni — obsession du personnage.", keywords: ["anaphore","rhinocéros","répét","choc","déni"] },
      { procede: "Registre comique", citation: "« Vous plaisantez »", interpretation: "Registre comique : l'incrédulité de Dudard contraste avec la terreur de Bérenger — humour de l'absurde.", keywords: ["comique","plaisantez","incrédul","absurde","rire"] },
      { procede: "Registre satirique", citation: "« C'est impossible. C'est absurde »", interpretation: "Registre satirique : Ionesco dénonce la bêtise collective par l'absurde — métaphore de la déshumanisation.", keywords: ["satirique","absurde","bêtise","collectif","déshuman"] }
    ]
  },
  {
    id: "GT-042",
    titre: "Cyrano — tirade du nez",
    auteur: "Rostand",
    oeuvre: "Cyrano de Bergerac (1897)",
    genre: "Théâtre",
    diff: 2,
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
      { procede: "Anaphore", citation: "« Ah ! le nez… Ah ! le nez… le nez… le nez… »", interpretation: "Anaphore de « nez » : martèlement ironique qui ridiculise l'insulte de Valvert — virtuosité verbale de Cyrano.", keywords: ["anaphore","nez","répét","ironie","virtuosité"] },
      { procede: "Registre comique", citation: "« c'est un peu court, jeune homme »", interpretation: "Registre comique : Cyrano moque l'insulte banale — répartie qui provoque le rire du public.", keywords: ["comique","court","moque","répartie","rire"] },
      { procede: "Antithèse", citation: "« objet comique »", interpretation: "Antithèse entre l'insulte grossière et la finesse de la répartie — Cyrano renverse la situation.", keywords: ["antithèse","comique","finesse","insulte","renverse"] },
      { procede: "Registre épique", citation: "« On pouvait dire… Oh ! Dieu ! »", interpretation: "Registre épique : la tirade élève le duel verbal au niveau du panache héroïque — bravoure romantique.", keywords: ["épique","panache","héros","bravoure","duel"] }
    ]
  },
  {
    id: "GT-043",
    titre: "Madeleine — Proust",
    auteur: "Proust",
    oeuvre: "Du côté de chez Swann (1913)",
    genre: "Roman",
    diff: 3,
    texte: `Et tout d'un coup le souvenir m'est apparu. Ce goût, c'était la madeleine que le dimanche matin, à Combray, quand je descendais pour lui dire bonjour, ma tante Léonie m'offrait, en y trempant d'abord dans son infusion de thé ou de tilleul. Tout Combray et ses environs, toute la ville et le pays, la nourriture, les couleurs, les formes, tout ce qui n'est pas moi, surgirent de ma tasse, comme une fée d'une baguette magique.`,
    contexte: "Mémoire involontaire — madeleine, temps perdu et resurgence sensorielle.",
    attendus: [
      { procede: "Métaphore", citation: "« surgirent de ma tasse »", interpretation: "Métaphore : tout Combray jaillit de la tasse — image de la mémoire involontaire et de la résurgence sensorielle.", keywords: ["métaphore","surgir","tasse","mémoire","madeleine"] },
      { procede: "Comparaison", citation: "« comme une fée d'une baguette magique »", interpretation: "Comparaison : le souvenir surgit comme par magie — enchantement de la mémoire involontaire.", keywords: ["comparaison","fée","magique","souvenir","enchant"] },
      { procede: "Hyperbole", citation: "« Tout Combray et ses environs »", interpretation: "Hyperbole : une bouchée fait resurgir une ville entière — intensité de la mémoire sensorielle.", keywords: ["hyperbole","combray","ville","mémoire","exag"] },
      { procede: "Registre lyrique", citation: "« le souvenir m'est apparu »", interpretation: "Registre lyrique : expression intime de la redécouverte du passé — subjectivité du narrateur proustien.", keywords: ["lyrique","souvenir","passé","intime","narrateur"] }
    ]
  },
  {
    id: "GT-044",
    titre: "Les Liaisons dangereuses — lettre",
    auteur: "Laclos",
    oeuvre: "Les Liaisons dangereuses (1782)",
    genre: "Roman épistolaire",
    diff: 3,
    texte: `J'ai, je l'avoue, une certaine vanité de femme à laquelle vous avez su plaire. Vous m'avez vue faible : ne comptez pas sur ma faiblesse, mais sur ma vengeance. Je ne suis pas si facile à tromper que vous le croyez. J'ai appris à me connaître, et je sais ce dont je suis capable. Vous avez cru me dominer ; vous vous êtes trompé. C'est moi qui vous domine, et qui vous dominerai toujours. Ne croyez pas que je vous pardonnerai : je n'ai jamais pardonné, et je ne commencerai pas par vous.`,
    contexte: "Mme de Merteuil — manipulation, registre satirique et tragique.",
    attendus: [
      { procede: "Antithèse", citation: "« faiblesse »", interpretation: "Antithèse entre faiblesse apparente et vengeance — Merteuil retourne la situation par la menace.", keywords: ["antithèse","faiblesse","vengeance","contraste","menace"] },
      { procede: "Anaphore", citation: "« vous domine »", interpretation: "Anaphore de la domination : Merteuil martèle sa supériorité — registre satirique et tragique.", keywords: ["anaphore","domine","répét","supérior","merteuil"] },
      { procede: "Registre satirique", citation: "« une certaine vanité de femme »", interpretation: "Registre satirique : Merteuil dénonce et incarne la manipulation aristocratique — cynisme des Lumières.", keywords: ["satirique","vanité","manipul","cynisme","aristocrat"] },
      { procede: "Chiasme", citation: "« Vous avez cru me dominer ; vous vous êtes trompé »", interpretation: "Chiasme : inversion des rôles domination / soumission — Merteuil retourne la relation de pouvoir.", keywords: ["chiasme","dominer","trompé","inversion","pouvoir"] }
    ]
  },
  {
    id: "GT-045",
    titre: "Le Dormeur du val",
    auteur: "Rimbaud",
    oeuvre: "Poésie (1870)",
    genre: "Poésie",
    diff: 2,
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
      { procede: "Ironie", citation: "« Il dort »", interpretation: "Ironie tragique : le « sommeil » cache la mort du soldat — idylle trompeuse révélée au dernier vers.", keywords: ["ironie","dort","mort","soldat","idylle"] },
      { procede: "Champ lexical", citation: "« trou de verdure »", interpretation: "Champ lexical de la nature et de la lumière : verdure, soleil, rayons — contraste avec la mort à la fin.", keywords: ["champ lexical","verdure","soleil","nature","lumière"] },
      { procede: "Personnification", citation: "« la montagne fière »", interpretation: "Personnification : la montagne est « fière » — paysage idyllique qui trompe le lecteur.", keywords: ["personnification","montagne","fière","paysage","idylle"] },
      { procede: "Métaphore", citation: "« mousse de rayons »", interpretation: "Métaphore : les rayons du soleil forment une mousse lumineuse — fusion poétique de lumière et végétation.", keywords: ["métaphore","mousse","rayons","lumière","fusion"] }
    ]
  }
];
if (typeof GRANDS_TEXTES !== 'undefined') {
  GRANDS_TEXTES.push(...GRANDS_TEXTES_EXTRA);
}
