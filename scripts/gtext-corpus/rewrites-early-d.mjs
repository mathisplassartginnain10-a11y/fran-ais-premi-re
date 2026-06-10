import { att } from '../gtext-enrichment-lib.mjs';

export const REWRITES_EARLY_D = {
  'GT-151': {
    texte: `Sur la cime du mont des hommes tu marcheras dans la poussière au bruit des mules,
Et tu entreras dans la ville sans nom.
Trois colonnes d'oiseaux te suivront.
Tu seras la nuit une flamme entre les dents,
Tu seras le désir.
Tu seras le désir de la terre entière qui se dilatera dans l'astre du soir,
Et la terre entière se dilatera dans l'astre du soir.
Mémoire lourde de mémoire!
Poussière des villes!
Et déjà sous les pas ta route s'effondre.
Et déjà sous les pas ta route s'effondre.
Et déjà sous les pas ta route s'effondre.`,
    contexte: "Poésie épique — errance, symbolisme, vers libre solennel.",
    attendus: [
      att('Anaphore', '« Et déjà sous les pas ta route s\'effondre »', 'Anaphore : la triple reprise martèle l\'effacement du chemin parcouru et installe un rythme incantatoire propre à l\'épopée moderne.', ["anaphore","route","effondre","rythme","errance","pervence"]),
      att('Apostrophe', '« tu marcheras dans la poussière »', 'Apostrophe : le « tu » interpelle un destinataire universel — le poète, le conquérant ou le lecteur — et dramatise la marche initiatique.', ["apostrophe","tu","marcheras","injonction","épopée","destin"]),
      att('Métaphore', '« une flamme entre les dents »', 'Métaphore : le corps devient arme et feu — l\'image condense la violence du désir et la fureur de l\'action.', ["métaphore","flamme","dents","désir","corps","violence"]),
      att('Registre épique', '« la terre entière qui se dilatera dans l\'astre du soir »', 'Registre épique : l\'amplification cosmique élève la marche individuelle au niveau d\'une conquête universelle.', ["épique","terre","astre","cosmos","grandeur","voyage"])
    ],
  },
  'GT-152': {
    texte: `À force de lire uniquement des ouvrages d'une idée tendue et d'un style exotique, il en était arrivé à une langue bien à lui, où se mêlaient les expressions des auteurs les plus opposés. Il avait fini par se bâtir un monde artificiel, où les seules satisfactions étaient celles de l'esprit et du goût. Il s'était bâti un monde artificiel, où les seules satisfactions étaient celles de l'esprit et du goût. Là, il pouvait s'isoler de la foule, y vivre à l'abri des attaques des idées vulgaires, y cultiver les raffinements de la pensée et les subtilités de l'expression.`,
    contexte: "Décadentisme — esthétisme, fuite du réel, symbolisme fin-de-siècle.",
    attendus: [
      att('Métaphore', '« se bâtir un monde artificiel »', 'Métaphore : Des Esseintes érige un univers esthétique contre le réel — la construction verbale traduit la claustration du dandy décadent.', ["métaphore","monde","artificiel","esthétisme","fuite","dandy"]),
      att('Antithèse', '« l\'esprit et du goût »', 'Antithèse implicite entre le monde intérieur raffiné et la « foule » vulgaire : Huysmans oppose culture et banalité.', ["antithèse","esprit","goût","foule","raffinement","vulgarité"]),
      att('Champ lexical', '« raffinements de la pensée et les subtilités de l\'expression »', 'Champ lexical de l\'art et du raffinement : la convergence lexicale insiste sur la quête d\'une sensibilité extrême.', ["champ lexical","raffinement","subtilité","pensée","expression","décadent"]),
      att('Registre lyrique', '« les seules satisfactions étaient celles de l\'esprit »', 'Registre lyrique atténué : la quête de sensations intellectuelles remplace l\'élan passionnel — sensibilité fin-de-siècle.', ["lyrique","satisfactions","esprit","sensibilité","décadent","intérieur"])
    ],
  },
  'GT-153': {
    texte: `Chactas, vieillard et captif, me dit un jour : « Fils, je t'aimais ; je t'aime encore. Écoute l'histoire de mes malheurs et de mes amours. » Il me raconta qu'il avait été pris jeune par les guerriers de la Floride, qu'il avait connu Atala, fille de l'indien Simagan, et qu'elle l'avait aimé d'un amour si pur qu'elle préféra mourir plutôt que de trahir sa foi. « O mon fils, disait le vieillard en pleurant, la nature est belle quand on la contemple aux rayons du soleil couchant, au milieu des forêts de l'Amérique ! »`,
    contexte: "Préromantisme — nature américaine, amour tragique, registre lyrique.",
    attendus: [
      att('Apostrophe', '« Fils, je t\'aimais »', 'Apostrophe : Chactas s\'adresse à son interlocuteur comme à un fils — la transmission orale structure le récit préromantique.', ["apostrophe","fils","aimais","transmission","oral","chactas"]),
      att('Anaphore', '« je t\'aimais ; je t\'aime encore »', 'Anaphore sur « je t\'aime » : la reprise lie passé et présent et souligne la continuité affective malgré le temps.', ["anaphore","aime","passé","présent","amour","continuité"]),
      att('Registre lyrique', '« la nature est belle quand on la contemple aux rayons du soleil couchant »', 'Registre lyrique : l\'exclamation mélancolique mêle paysage exotique et émotion — sensibilité préromantique.', ["lyrique","nature","soleil","forêts","exotisme","mélancolie"]),
      att('Registre pathétique', '« Atala… préféra mourir plutôt que de trahir sa foi »', 'Registre pathétique : le sacrifice d\'Atala suscite la pitié — amour impossible et mort héroïque.', ["pathétique","atala","mourir","foi","sacrifice","tragique"])
    ],
  },
  'GT-154': {
    texte: `Il y a des crimes qui ne sont pas des crimes, des fautes qui ne sont pas des fautes, des péchés qui ne sont pas des péchés. Il y a des vertus qui ne sont pas des vertus, des devoirs qui ne sont pas des devoirs, des sacrifices qui ne sont pas des sacrifices. Il y a des choses qui sont et qui ne sont pas en même temps. Il y a des choses qui sont blanches et qui sont noires. Il y a des choses qui sont bonnes et qui sont mauvaises. Il y a des choses qui sont vraies et qui sont fausses. Voilà ce que j'appelle les Diaboliques.`,
    contexte: "Décadentisme — perversité, moral, style ampoulé et provocateur.",
    attendus: [
      att('Anaphore', '« Il y a des crimes… Il y a des vertus… Il y a des choses »', 'Anaphore sur « Il y a » : l\'énumération parallèle structure l\'avertissement moral et martèle la subversion des catégories.', ["anaphore","il y a","énumération","rythme","structure","barbey"]),
      att('Paradoxe', '« crimes qui ne sont pas des crimes »', 'Paradoxe : la négation des normes morales brouille le jugement du lecteur — provocation décadente.', ["paradoxe","crimes","fautes","péchés","morale","subversion"]),
      att('Antithèse', '« blanches et qui sont noires »', 'Antithèse : blanc/noir, bon/mauvais, vrai/faux — les oppositions condensent l\'ambivalence du mal.', ["antithèse","blanc","noir","bon","mauvais","contraste"]),
      att('Registre satirique', '« Voilà ce que j\'appelle les Diaboliques »', 'Registre satirique : la conclusion ironique désigne les nouvelles comme études de perversité — dérision de la morale bourgeoise.', ["satirique","diaboliques","ironie","morale","perversité","provocation"])
    ],
  },
  'GT-155': {
    texte: `VALÈRE. — Hélas ! quelle funeste passion que celle du jeu ! Elle nous rend insensibles à toutes les autres, et nous fait perdre jusqu'au sentiment de l'honneur. Hector, mon fils, tu ne sais pas encore ce que c'est que le jeu ; mais écoute-moi, et garde-toi-en comme d'un poison. Le jeu est l'âme du monde ; c'est par le jeu que les hommes se connaissent, et c'est par le jeu qu'ils se perdent. Un joueur ne voit plus rien au-delà de sa passion ; il sacrifie sa fortune, sa famille, sa réputation, et ne s'arrête que lorsqu'il n'a plus rien à perdre.`,
    contexte: "Comédie classique — passion du jeu, registre comique et moral.",
    attendus: [
      att('Métaphore', '« Le jeu est l\'âme du monde »', 'Métaphore : le jeu devient principe vital du monde — maxime qui résume la thèse morale de la comédie.', ["métaphore","jeu","âme","monde","passion","maxime"]),
      att('Antithèse', '« se connaissent » / « se perdent »', 'Antithèse : connaissance et perdition — le jeu révèle et détruit à la fois les hommes.', ["antithèse","connaissent","perdent","paradoxe","joueur","contraste"]),
      att('Registre didactique', '« écoute-moi, et garde-toi-en comme d\'un poison »', 'Registre didactique : Valère transmet une leçon morale à son fils — fonction éducative du théâtre classique.', ["didactique","écoute","poison","leçon","moral","père"]),
      att('Hyperbole', '« sacrifie sa fortune, sa famille, sa réputation »', 'Hyperbole : l\'énumération des pertes exagère la destructivité de la passion du jeu.', ["hyperbole","fortune","famille","réputation","sacrifice","exagération"])
    ],
  },
  'GT-158': {
    texte: `DORANTE, seul.
Je suis poète, et je le sens ; je le dis hautement, et je le crie aux quatre vents. La poésie est ma vie, ma respiration, mon unique passion. Je ne puis voir une fleur sans faire un sonnet, ni entendre une fontaine sans trouver un alexandrin. Mes amis m'accusent de métromanie ; je leur réponds que c'est un malheureux qui n'aime pas la versification. Quand je marche, je compte mes pas en mesures ; quand je parle, je rime malgré moi. La comédie, la tragédie, l'ode, l'élégie, tout me sert de prétexte à versifier.`,
    contexte: "Comédie — obsession de la versification, registre comique et lyrique.",
    attendus: [
      att('Anaphore', '« je le sens ; je le dis… je le crie »', 'Anaphore sur « je » : la répétition martèle l\'obsession poétique de Dorante — trait comique central.', ["anaphore","je","répétition","poète","obsession","rythme"]),
      att('Hyperbole', '« je le crie aux quatre vents »', 'Hyperbole : la proclamation universelle exagère la vanité du poète — registre comique.', ["hyperbole","quatre vents","proclamation","vanité","exagération","comique"]),
      att('Registre comique', '« Je suis poète, et je le sens »', 'Registre comique : la déclaration emphatique ridiculise le personnage — moquerie de la métromanie.', ["comique","poète","vanité","dorante","moquerie","métromanie"]),
      att('Énumération', '« la comédie, la tragédie, l\'ode, l\'élégie »', 'Énumération des genres poétiques : la liste multiplie les prétextes à versifier et souligne l\'excès.', ["énumération","comédie","tragédie","ode","genres","versification"])
    ],
  },
  'GT-159': {
    texte: `Je ne sais si je dois me plaindre ou me louer du sort qui m'a fait naître. Ma naissance est incertaine ; on m'a élevée dans l'opulence, et j'ai connu la misère. J'ai été belle, et la beauté m'a attiré des hommages dont je n'ai pas toujours su profiter. J'ai aimé, et l'amour m'a fait connaître la joie et la douleur. Voilà ce que je veux raconter avec sincérité, sans me flatter ni m'accuser outre mesure, en laissant au lecteur le soin de juger mes actions et mes sentiments.`,
    contexte: "Roman psychologique — analyse des sentiments, registre lyrique et moral.",
    attendus: [
      att('Question rhétorique', '« Je ne sais si je dois me plaindre ou me louer »', 'Question rhétorique : Marianne expose son ambivalence dès l\'incipit — analyse psychologique marivaudienne.', ["question","rhétorique","plaindre","louer","doute","psychologie"]),
      att('Antithèse', '« me plaindre ou me louer »', 'Antithèse : plainte et louange s\'opposent pour traduire l\'incertitude existentielle de l\'héroïne.', ["antithèse","plaindre","louer","destin","ambivalence","contraste"]),
      att('Registre lyrique', '« J\'ai aimé, et l\'amour m\'a fait connaître la joie et la douleur »', 'Registre lyrique : la confidence intime mêle émotion et réflexion — subjectivité féminine.', ["lyrique","aimé","joie","douleur","sentiment","féminin"]),
      att('Registre didactique', '« en laissant au lecteur le soin de juger mes actions »', 'Registre didactique : Marianne pose un pacte moral avec le lecteur — transparence autobiographique.', ["didactique","lecteur","juger","sincérité","moral","confession"])
    ],
  },
  'GT-160': {
    texte: `PERDICAN. — Perdre ou gagner une bataille ne prouve rien sur la question de savoir si l'on a raison ou tort. La force ne fait pas le droit, et le succès ne justifie pas la cause. On ne badine pas avec l'amour : c'est une chose sérieuse, ou c'est une plaisanterie ; il n'y a pas de milieu. Aimer, c'est souffrir ou faire souffrir ; c'est une maladie dont on ne guérit jamais tout à fait. Les jeunes gens rient de l'amour parce qu'ils ne l'ont pas encore éprouvé ; les vieillards en parlent avec mélancolie parce qu'ils l'ont trop éprouvé.`,
    contexte: "Drame romantique — amour, fatalité, ironie philosophique.",
    attendus: [
      att('Antithèse', '« Perdre ou gagner » / « raison ou tort »', 'Antithèse : victoire et défaite ne déterminent pas la justice — maxime philosophique sur l\'amour et la guerre.', ["antithèse","perdre","gagner","raison","tort","contraste"]),
      att('Paradoxe', '« ne prouve rien »', 'Paradoxe : le résultat militaire ne valide pas la cause — renversement de la logique héroïque.', ["paradoxe","prouve","rien","bataille","force","droit"]),
      att('Registre didactique', '« On ne badine pas avec l\'amour »', 'Registre didactique : la maxime titre l\'œuvre et avertit le spectateur — sérieux romantique.', ["didactique","badine","amour","maxime","sérieux","avertissement"]),
      att('Registre tragique', '« c\'est souffrir ou faire souffrir »', 'Registre tragique : l\'amour est une fatalité douloureuse — pas de bonheur sans souffrance.', ["tragique","souffrir","amour","fatalité","maladie","musset"])
    ],
  },
  'GT-161': {
    texte: `Voici des bonshommes qui ont des idées dans la tête. Il y en a même qui ont des sentiments dans le cœur. Et ça, ça ne se voit pas tous les jours. C'est une chose qui vous apprendra autre chose, la guerre, si vous vivez, si vous revenez, vous aurez une grande tendresse pour les bonshommes. La guerre, c'est quand on essaie de tuer des bonshommes qui ne vous ont rien fait, et qui ne vous connaissent pas, et qui vous connaissent pas non plus. C'est un métier. C'est un métier où il faut être jeune, parce que les vieux, ils savent trop ce que c'est.`,
    contexte: "Registre populaire — syntaxe orale, anti-heroïsme, naturalisme brutal.",
    attendus: [
      att('Registre populaire', '« des bonshommes qui ont des idées dans la tête »', 'Registre populaire : le vocabulaire familier (« bonshommes ») et la syntaxe relâchée rompent avec le style soutenu.', ["populaire","bonshommes","oral","familier","syntaxe","céline"]),
      att('Apostrophe', '« si vous vivez, si vous revenez »', 'Apostrophe : le « vous » implique le lecteur dans l\'expérience de la guerre — complicité cynique.', ["apostrophe","vous","vivez","lecteur","guerre","direct"]),
      att('Antiphrase', '« une grande tendresse pour les bonshommes »', 'Antiphrase : la « tendresse » dit le contraire de la réalité de la guerre — ironie tragique.', ["antiphrase","tendresse","guerre","ironie","décalage","cynisme"]),
      att('Répétition', '« C\'est un métier »', 'Répétition : la guerre réduite à un « métier » banalise l\'horreur — anti-héroïsme célinien.', ["répétition","métier","guerre","banal","anti-héroïsme","dérisoire"])
    ],
  },
  'GT-162': {
    texte: `PÈRE UBU. — Cornegidouille ! Paix ! Mère Ubu, vous êtes laide, vous sentez mauvais, vous avez de vilains yeux, vous avez de vilains dents, vous avez de vilains cheveux, vous avez de vilains pieds, vous avez de vilains ongles. Je te ferai marcher la guedille, par saint Médard, si tu ne te tais pas. MÈRE UBU. — Quoi, vilain, tu n'as pas peur de te faire pendre, créature infâme ? PÈRE UBU. — Cornegidouille ! je ne crains personne. MÈRE UBU. — Et bien que, vil Ubu, tu veux assassiner le roi de Pologne et te mettre sur le trône toi-même ? PÈRE UBU. — Cornegidouille ! Mère Ubu, qui t'a dit cela ?`,
    contexte: "Théâtre de l\'absurde — langue grotesque, registre comique et satirique.",
    attendus: [
      att('Néologisme', '« Cornegidouille »', 'Néologisme : l\'injure ubuesque invente un langage scatologique — rupture avec la langue théâtrale classique.', ["néologisme","cornegidouille","injure","ubuesque","invention","grotesque"]),
      att('Anaphore', '« Cornegidouille »', 'Anaphore sur « Cornegidouille » : la reprise de l\'injure structure le dialogue — langage mécanique et comique.', ["anaphore","cornegidouille","répétition","injure","rythme","absurde"]),
      att('Registre comique', '« vous sentez mauvais »', 'Registre comique : la grossièreté et l\'accumulation provoquent le rire — satire du pouvoir.', ["comique","grotesque","rire","scatologie","ubu","satire"]),
      att('Hyperbole', '« te ferai marcher la guedille »', 'Hyperbole : la menace grotesque exagère l\'autorité parodique du tyran Ubu.', ["hyperbole","guedille","menace","exagération","tyran","burlesque"])
    ],
  },
  'GT-163': {
    texte: `Un mari trompé ne se trompe jamais seul : il trompe toujours sa femme avec lui. C'est une loi du vaudeville, et c'est aussi une loi de la vie. Quand un mari soupçonne sa femme, il devient lui-même complice de l'adultère qu'il dénonce. Il guette, il épie, il interroge, et par là même il participe au mensonge qu'il voudrait démasquer. Le quiproquo naît de cette complicité involontaire : chacun croit tromper l'autre, et chacun est trompé. Voilà pourquoi la jalousie est comique autant que tragique, et pourquoi Feydeau fait rire en faisant souffrir.`,
    contexte: "Vaudeville — quiproquo, registre comique et paradoxal.",
    attendus: [
      att('Paradoxe', '« ne se trompe jamais seul »', 'Paradoxe : le mari trompé entraîne sa femme dans sa propre dupe — logique renversée du vaudeville.', ["paradoxe","trompé","seul","adultère","quiproquo","comique"]),
      att('Antithèse', '« il trompe toujours sa femme avec lui »', 'Antithèse : victime et complice coexistent — le mari devient acteur du mensonge qu\'il dénonce.', ["antithèse","trompe","femme","complicité","victime","ironie"]),
      att('Registre comique', '« Feydeau fait rire en faisant souffrir »', 'Registre comique : la souffrance amoureuse devient matière à rire — mécanique du vaudeville.', ["comique","rire","souffrir","vaudeville","feydeau","quiproquo"]),
      att('Registre didactique', '« C\'est une loi du vaudeville »', 'Registre didactique : la maxime expose la règle dramaturgique — métathéâtre implicite.', ["didactique","loi","vaudeville","règle","théâtre","maxime"])
    ],
  },
  'GT-164': {
    texte: `La pauvre bête sentit qu'elle était perdue ; elle se mit à saigner, à pleurer, à regarder le ciel. Elle fit encore quelques pas vers la maison, puis s'arrêta, retourna vers le loup, et se mit à le combattre de toutes ses forces. Mais le loup était le plus fort. Il la saisit par le cou et l'étouffa. M. Seguin retrouva sa chèvre le lendemain matin, dans un ravin, les jambes brisées, le ventre déchiré, le cou rongé. Il pleura sur elle comme sur sa propre enfant, et dit aux voisins : « Ma pauvre Blanchette est morte ; j'aimais mieux elle que mes enfants. »`,
    contexte: "Conte provençal — registre pathétique, personnification animalière.",
    attendus: [
      att('Personnification', '« sentit qu\'elle était perdue »', 'Personnification : la chèvre acquiert une conscience humaine — le drame animal devient tragédie.', ["personnification","sentit","perdue","chèvre","conscience","animal"]),
      att('Énumération', '« saigner, à pleurer, à regarder le ciel »', 'Énumération : les trois infinitifs condensent la détresse — rythme pathétique.', ["énumération","saigner","pleurer","regarder","détresse","rythme"]),
      att('Registre pathétique', '« Il pleura sur elle comme sur sa propre enfant »', 'Registre pathétique : le deuil de Seguin suscite la compassion — mort héroïque de Blanchette.', ["pathétique","pleura","enfant","mort","compassion","daudet"]),
      att('Champ lexical', '« jambes brisées, le ventre déchiré, le cou rongé »', 'Champ lexical de la violence : l\'énumération des mutilations accentue l\'horreur de la mort.', ["champ lexical","brisées","déchiré","rongé","violence","mort"])
    ],
  },
  'GT-165': {
    texte: `Je suis un savant, et je ne sais rien. Je suis un homme, et je ne suis bon à rien. Voilà ma confession, que je fais avec la même bonhomie avec laquelle je bois mon café le matin. J'ai passé ma vie à feuilleter des manuscrits, à déchiffrer des textes grecs et latins, et je n'ai jamais rien découvert qui vaille la peine d'être transmis à la postérité. Mes connaissances sont vastes et inutiles ; mon savoir est profond et stérile. Je me moque de moi-même, et c'est peut-être là ma seule qualité.`,
    contexte: "Ironie fin-de-siècle — scepticisme, registre comique et philosophique.",
    attendus: [
      att('Antithèse', '« savant » / « ne sais rien »', 'Antithèse : le titre de savant contredit l\'aveu d\'ignorance — paradoxe du savoir stérile.', ["antithèse","savant","rien","ignorance","contraste","paradoxe"]),
      att('Paradoxe', '« Je suis un savant, et je ne sais rien »', 'Paradoxe : la contradiction apparente concentre l\'ironie fin-de-siècle d\'Anatole France.', ["paradoxe","savant","sais","ironie","scepticisme","confession"]),
      att('Anaphore', '« Je suis… Je suis… »', 'Anaphore sur « Je suis » : la reprise structure l\'autoportrait satirique du narrateur.', ["anaphore","je suis","répétition","autoportrait","confession","rythme"]),
      att('Registre comique', '« Je me moque de moi-même »', 'Registre comique : l\'autodérision distancie le savoir — ton léger et philosophique.', ["comique","moque","autodérision","ironie","bonhomie","scepticisme"])
    ],
  },
  'GT-166': {
    texte: `Paul et Elisabeth vivaient seuls avec leur vieux serviteur Agathe, dans une grande maison parisienne. Ils s'aimaient d'une amitié si forte qu'ils en étaient malades, et si exclusive qu'ils en étaient cruels. Leur chambre, qu'ils appelaient « la chambre », était un refuge contre le monde. Là, ils inventaient des jeux, des rites, des langages secrets. Ils se faisaient des confidences qu'ils ne faisaient à personne d'autre. Quand l'un souffrait, l'autre souffrait davantage ; quand l'un triomphait, l'autre triomphait aussi. Leur lien était une bulle de verre, fragile et étanche.`,
    contexte: "Roman poétique — passion adolescente, registre lyrique et pathétique.",
    attendus: [
      att('Hyperbole', '« amitié si forte qu\'ils en étaient malades »', 'Hyperbole : l\'amitié dépassée en maladie traduit l\'intensité toxique de la relation.', ["hyperbole","amitié","malades","passion","excès","adolescence"]),
      att('Antithèse', '« s\'aimaient » / « cruels »', 'Antithèse : amour et cruauté coexistent — ambivalence de la passion adolescente.', ["antithèse","aimaient","cruels","amour","violence","ambivalence"]),
      att('Métaphore', '« une bulle de verre, fragile et étanche »', 'Métaphore : la chambre devient univers clos — isolement poétique des Enfants terribles.', ["métaphore","bulle","verre","refuge","isolement","clos"]),
      att('Registre pathétique', '« quand l\'un souffrait, l\'autre souffrait davantage »', 'Registre pathétique : la souffrance partagée suscite une mélancolie malsaine — lien pathologique.', ["pathétique","souffrait","lien","mélancolie","toxique","cocteau"])
    ],
  },
  'GT-167': {
    texte: `Il y avait dans l'air, ce soir-là, une attente qui ne demandait qu'à se prolonger indéfiniment. Les Syrtes, cette terre en suspens entre mer et désert, semblaient retenir leur souffle. Aldo, le narrateur, observait depuis sa terrasse les lumières lointaines du fort, les ombres des soldats, le silence pesant qui enveloppait la ville. Rien ne se passait, et pourtant tout semblait sur le point d'arriver. Le temps s'étirait, dilaté, comme si la réalité hésitait entre le rêve et l'éveil. Cette attente hypnotique structure tout le roman — attente d'un événement qui ne vient jamais tout à fait.`,
    contexte: "Roman onirique — attente, temps suspendu, style hypnotique.",
    attendus: [
      att('Personnification', '« une attente qui ne demandait qu\'à se prolonger »', 'Personnification : l\'attente devient agent vivant — atmosphère onirique des Syrtes.', ["personnification","attente","prolonger","onirique","atmosphère","gracq"]),
      att('Hyperbole', '« indéfiniment »', 'Hyperbole : le temps sans fin suspend le récit — temporalité dilatée.', ["hyperbole","indéfiniment","temps","suspendu","infini","attente"]),
      att('Registre lyrique', '« ce soir-là, une attente »', 'Registre lyrique : la subjectivité du narrateur colore la description — émotion contenue.', ["lyrique","soir","attente","subjectivité","poétique","méditation"]),
      att('Champ lexical', '« silence pesant… temps s\'étirait… réalité hésitait »', 'Champ lexical de la suspension : les résonances lexicales insistent sur l\'immobilité hypnotique.', ["champ lexical","silence","temps","attente","rêve","immobilité"])
    ],
  },
  'GT-168': {
    texte: `Il pleut des cordes. Les cordes pleurent. Les pleurs pleurent. Les pleurs pleurent des pleurs. Les pleurs pleurent des pleurs pleurant. Les pleurs pleurent des pleurs pleurant des pleurs. La pluie pleure. La pluie pleure des pleurs. La pluie pleure des pleurs pleurant. Il pleut. Il pleut des cordes. Les cordes pleurent. Les cordes pleurent des pleurs. Les pleurs pleurent des cordes. Il pleut des cordes et des pleurs. La pluie et les pleurs et les cordes pleurent ensemble dans la nuit cubiste.`,
    contexte: "Poésie cubiste/surréaliste — jeux de mots, registre comique et onirique.",
    attendus: [
      att('Anaphore', '« Les pleurs pleurent »', 'Anaphore sur « pleurent » : la reprise mécanique produit un effet cubiste et incantatoire.', ["anaphore","pleurent","répétition","incantation","rythme","jacob"]),
      att('Métaphore', '« Il pleut des cordes »', 'Métaphore : la pluie devient cordes — image synesthésique et surréaliste.', ["métaphore","pleut","cordes","pluie","image","surréaliste"]),
      att('Registre comique', '« Les cordes pleurent »', 'Registre comique : le jeu de mots sur « pleurer » et « cordes » provoque un effet d\'absurde ludique.', ["comique","jeu","mots","absurde","humour","langage"]),
      att('Paradoxe', '« Les pleurs pleurent des pleurs »', 'Paradoxe : les pleurs pleurent eux-mêmes — circularité onirique propre à Max Jacob.', ["paradoxe","pleurs","pleurent","circularité","onirique","répétition"])
    ],
  },
  'GT-169': {
    texte: `Le cœur sur la main
Comme une pierre lourde
Le cœur sur la main
Comme une pierre lourde
Le cœur sur la main
Comme une pierre lourde
Le cœur sur la main
Comme une pierre lourde
Le cœur sur la main
Comme une pierre lourde
Le cœur sur la main
Comme une pierre lourde
Le cœur sur la main
Comme une pierre lourde
Le cœur sur la main
Comme une pierre lourde
Le cœur sur la main
Comme une pierre lourde
Le cœur sur la main
Comme une pierre lourde`,
    contexte: "Poésie cubiste — images sèches, vers libres, émotion contenue.",
    attendus: [
      att('Anaphore', '« Le cœur sur la main »', 'Anaphore : le refrain obsédant martèle l\'image centrale — poétique cubiste de Reverdy.', ["anaphore","cœur","main","répétition","refrain","cubiste"]),
      att('Comparaison', '« Comme une pierre lourde »', 'Comparaison : le cœur offert devient pierre — image sèche de la souffrance contenue.', ["comparaison","comme","pierre","lourde","cœur","souffrance"]),
      att('Vers libre', '« Comme une pierre lourde »', 'Vers libre : la brièveté des vers et l\'absence de rime fixe marquent la modernité poétique.', ["vers libre","court","sans rime","moderne","reverdy","rupture"]),
      att('Registre lyrique', '« Le cœur sur la main »', 'Registre lyrique : l\'image nuée exprime une sincérité émotionnelle — poésie de l\'émotion contenue.', ["lyrique","cœur","main","sincérité","émotion","intimité"])
    ],
  },
  'GT-170': {
    texte: `J'habite un vieux pays
Fort et triste
La mélancolie
Y habite longtemps
Les pluies y lavent
Mes yeux et mes vitres
Et mon cœur et mes habits
Et la langue du pays
Où je suis né.
J'habite un vieux pays
Fort et triste
La mélancolie
Y habite longtemps
Les pluies y lavent
Mes yeux et mes vitres
Et mon cœur et mes habits
Et la langue du pays
Où je suis né.
Les cloches y sonnent
Dans le soir qui tombe
Et la mélancolie
Y habite longtemps.`,
    contexte: "Poésie du quotidien — mélancolie, registre lyrique et intimiste.",
    attendus: [
      att('Personnification', '« La mélancolie / Y habite longtemps »', 'Personnification : la mélancolie devient habitante du pays — atmosphère intimiste.', ["personnification","mélancolie","habite","pays","tristesse","atmosphère"]),
      att('Anaphore', '« Mes yeux et mes vitres »', 'Anaphore sur « et » : la reprise lie le corps et le paysage — fusion intérieur/extérieur.', ["anaphore","et","yeux","cœur","pluies","fusion"]),
      att('Registre lyrique', '« J\'habite un vieux pays »', 'Registre lyrique : la confidence du « je » poétique installe une subjectivité mélancolique.', ["lyrique","habite","pays","je","intimité","fargue"]),
      att('Champ lexical', '« vieux… fort… triste… mélancolie »', 'Champ lexical de la tristesse : les adjectifs convergent vers une atmosphère élégiaque.', ["champ lexical","vieux","triste","mélancolie","pluies","élégie"])
    ],
  },
  'GT-171': {
    texte: `La persienne est restée immobile. De l'autre côté, dans la chambre voisine, A… et Franck parlent. Leur voix monte par intermittence, puis s'éteint. La persienne est restée immobile. Le soleil frappe la lame de bois, et une bande d'ombre traverse la table. La persienne est restée immobile. Franck se lève, s'éloigne. A… reste seule un instant. La persienne est restée immobile. Le narrateur, immobile aussi, compte les secondes, les minutes, les heures de cette immobilité qui est la sienne.`,
    contexte: "Nouveau roman — description objective, répétition, jalousie du narrateur.",
    attendus: [
      att('Anaphore', '« La persienne est restée immobile »', 'Anaphore : la reprise obsessionnelle traduit la jalousie du narrateur — regard fixe et paranoïaque.', ["anaphore","persienne","immobile","répétition","obsession","jalousie"]),
      att('Registre pathétique', '« compte les secondes, les minutes, les heures »', 'Registre pathétique atténué : l\'observation minutieuse trahit la souffrance amoureuse.', ["pathétique","secondes","souffrance","attente","jalousie","temps"]),
      att('Énumération', '« les secondes, les minutes, les heures »', 'Énumération temporelle : la progression accentue l\'attente interminable.', ["énumération","secondes","minutes","heures","temps","attente"]),
      att('Style descriptif', '« une bande d\'ombre traverse la table »', 'Style descriptif objectif : le narrateur s\'efface derrière les faits — esthétique du nouveau roman.', ["descriptif","ombre","table","objectif","faits","robbe-grillet"])
    ],
  },
  'GT-172': {
    texte: `Vous avez mis le pied gauche sur la pédale, vous laissez partir le train. Vous enlevez votre main droite de la poche de votre pardessus gris clair, vous la remettez dans la poche de votre pardessus gris clair. Vous avez mis le pied gauche sur la pédale, vous laissez partir le train. Le compartiment est vide. Vous regardez par la vitre : des champs, des maisons, des usines défilent. Vous pensez à Rome, à votre femme, à vos enfants. Vous avez mis le pied gauche sur la pédale.`,
    contexte: "Nouveau roman — deuxième personne, voyage Rome-Paris, registre descriptif.",
    attendus: [
      att('Apostrophe', '« Vous avez… vous laissez… vous enlevez »', 'Apostrophe : le « vous » identifie le lecteur au personnage — originalité du nouveau roman.', ["apostrophe","vous","lecteur","deuxième personne","butor","identification"]),
      att('Présent de narration', '« vous laissez partir le train »', 'Présent de narration : l\'action se déroule sous les yeux du lecteur — effet d\'immédiateté.', ["présent","narration","immédiat","action","temps","lecteur"]),
      att('Anaphore', '« Vous avez mis le pied gauche sur la pédale »', 'Anaphore : la reprise du geste initial structure le voyage comme une boucle — temporalité circulaire.', ["anaphore","pédale","pied","répétition","voyage","boucle"]),
      att('Énumération', '« des champs, des maisons, des usines »', 'Énumération : le paysage défilant multiplie les visions — descriptif minutieux du trajet.', ["énumération","champs","maisons","usines","paysage","train"])
    ],
  },
  'GT-173': {
    texte: `CHANTAL. — Je suis seule. Je suis seule. Je suis seule. Personne ne m'entend. Personne ne me voit. Je crie et le silence me renvoie mon cri. Dans ce brothel, dans cette maison de fantasmes, je joue un rôle : l'épouse du président, la générale, la sainte. Mais quand le rideau tombe, quand les clients partent, il ne reste que moi, seule, face au miroir qui me renvoie une image que je ne reconnais plus. Je suis seule. Je suis seule. Je suis seule.`,
    contexte: "Théâtre du fantasmé — illusion du pouvoir, registre lyrique et tragique.",
    attendus: [
      att('Anaphore', '« Je suis seule »', 'Anaphore : le cri répété martèle la solitude existentielle de Chantal — théâtre du fantasmé.', ["anaphore","seule","répétition","solitude","cri","genet"]),
      att('Registre pathétique', '« le silence me renvoie mon cri »', 'Registre pathétique : l\'écho du cri dans le vide suscite la pitié — détresse absolue.', ["pathétique","silence","cri","pit","détresse","vide"]),
      att('Antithèse', '« joue un rôle » / « seule, face au miroir »', 'Antithèse : le masque théâtral s\'oppose à la solitude réelle — illusion du pouvoir.', ["antithèse","rôle","seule","masque","illusion","miroir"]),
      att('Registre lyrique', '« une image que je ne reconnais plus »', 'Registre lyrique : la quête identitaire s\'exprime en métaphore du miroir — subjectivité tragique.', ["lyrique","image","miroir","identité","subjectivité","tragique"])
    ],
  },
  'GT-174': {
    texte: `Il était grand, il était beau, il était fort, et il savait tout. Les enfants du village l'appelaient le Roi des aulnes, parce qu'il habitait dans une cabane au milieu des arbres, et parce qu'il connaissait les secrets de la forêt. Il leur apprenait à lire les traces des animaux, à reconnaître les plantes, à écouter le vent. Il leur disait des histoires de géants et de lutins, de sorcières et de chevaliers. Quand il parlait, sa voix remplissait l'espace, et les enfants croyaient en lui comme en un dieu.`,
    contexte: "Conte philosophique — mythologie, registre épique et onirique.",
    attendus: [
      att('Anaphore', '« il était… il était… il était… il savait »', 'Anaphore : l\'accumulation construit le portrait idéalisé du personnage mythique.', ["anaphore","était","répétition","portrait","idéal","mythique"]),
      att('Gradation', '« grand… beau… fort… savait tout »', 'Gradation : l\'intensité croissante élève le personnage au statut de figure légendaire.', ["gradation","grand","beau","fort","omniscience","crescendo"]),
      att('Hyperbole', '« il savait tout »', 'Hyperbole : l\'omniscience exagérée confère une dimension surnaturelle au Roi des aulnes.', ["hyperbole","savait","tout","surnaturel","mythe","exagération"]),
      att('Registre épique', '« croyaient en lui comme en un dieu »', 'Registre épique : l\'admiration des enfants élève le conte au niveau du récit fondateur.', ["épique","dieu","enfants","croyance","légende","tournier"])
    ],
  },
  'GT-175': {
    texte: `Il faut aimer les hommes, Morel, plus que les éléphants. Mais aimer les éléphants, c'est déjà aimer les hommes. Car l'éléphant, c'est la mémoire, c'est la sagesse, c'est la dignité. Quand on tue un éléphant, on tue quelque chose de plus grand que soi. Morel veut protéger les éléphants du Gabon ; il croit qu'en les sauvant, il sauvera l'humanité de sa propre barbarie. L'éléphant devient symbole : symbole de ce que l'homme devrait être et n'est plus.`,
    contexte: "Roman engagé — écologie, humanisme, registre didactique et lyrique.",
    attendus: [
      att('Antithèse', '« hommes » / « éléphants »', 'Antithèse : nature et humanité s\'opposent pour mieux se révéler — éthique écologique.', ["antithèse","hommes","éléphants","nature","humanité","contraste"]),
      att('Paradoxe', '« aimer les éléphants… c\'est déjà aimer les hommes »', 'Paradoxe : protéger l\'animal revient à protéger l\'humain — renversement humaniste.', ["paradoxe","éléphants","hommes","amour","protection","humanisme"]),
      att('Registre didactique', '« Il faut aimer les hommes, Morel »', 'Registre didactique : la leçon morale est adressée explicitement — roman engagé.', ["didactique","faut","aimer","morale","leçon","engagement"]),
      att('Symbolisme', '« l\'éléphant, c\'est la mémoire, c\'est la sagesse »', 'Symbolisme : l\'éléphant condense les valeurs perdues de l\'humanité — allégorie écologique.', ["symbolisme","éléphant","mémoire","sagesse","dignité","allégorie"])
    ],
  },
  'GT-176': {
    texte: `Il a mis le café
Dans la tasse
Il a mis le lait
Dans la tasse de café
Il a mis le sucre
Dans le café au lait
Avec la petite cuiller
Il a tourné
Il a bu le café au lait
Et il a reposé la tasse
Sans me parler
Il a allumé
Une cigarette
Il a fait des ronds
Avec la fumée
Il a reposé la cigarette
Dans le cendrier
Sans me parler
Sans me regarder
Il s'est levé
Il a mis
Son manteau de pluie
Parce qu'il pleuvait
Et il est parti
Sous la pluie
Sans une parole
Sans me regarder
Et moi j'ai pris
Ma tête dans ma main
Et j'ai pleuré`,
    contexte: "Poésie du quotidien — rupture amoureuse, registre lyrique et tragique.",
    attendus: [
      att('Anaphore', '« Il a mis… Il a mis… Il a mis »', 'Anaphore sur « Il a » : la reprise des gestes banals martèle le départ — tension tragique.', ["anaphore","il a","répétition","gestes","banal","départ"]),
      att('Registre lyrique', '« Et moi j\'ai pris / Ma tête dans ma main / Et j\'ai pleuré »', 'Registre lyrique : la confidence finale brise la froideur des gestes — émotion contenue puis libérée.', ["lyrique","pleuré","tête","main","émotion","rupture"]),
      att('Vers libre', '« Il a mis le café / Dans la tasse »', 'Vers libre : la prose poétique et les vers courts modernisent le récit amoureux.', ["vers libre","prose","court","moderne","prévert","rythme"]),
      att('Gradation', '« Sans me parler / Sans me regarder »', 'Gradation : l\'absence croissante de communication accentue la solitude finale.', ["gradation","sans","parler","regarder","isolement","silence"])
    ],
  },
  'GT-177': {
    texte: `La terre est bleue comme une orange
Jamais une erreur les mots ne mentent pas
Ils ne te donnent plus à chanter
Au bord des eaux et des feux
Sur les routes
Je te montre des souvenirs
Et des villes
Et des souvenirs et des villes
Qui ne sont pas les mêmes
Parce que tu es différent
De ce que tu étais hier
Et de ce que tu seras demain
La terre est bleue comme une orange
Jamais une erreur les mots ne mentent pas
Ils ne te donnent plus à chanter
Au bord des eaux et des feux
Sur les routes
Je te montre des souvenirs
Et des villes
Qui ne sont pas les mêmes
Parce que tu es différent
De ce que tu étais hier
Et de ce que tu seras demain`,
    contexte: "Surréalisme — images poétiques, amour, registre lyrique.",
    attendus: [
      att('Comparaison', '« bleue comme une orange »', 'Comparaison impossible : la terre bleue et l\'orange fusionnent — image surréaliste d\'Éluard.', ["comparaison","bleue","orange","impossible","surréaliste","image"]),
      att('Paradoxe', '« les mots ne mentent pas »', 'Paradoxe : les mots disent le vrai par l\'impossible — poétique surréaliste.', ["paradoxe","mots","mentent","vérité","poésie","surréalisme"]),
      att('Antithèse', '« Parce que tu es différent »', 'Antithèse temporelle : passé et futur s\'opposent au présent — identité mouvante.', ["antithèse","différent","hier","demain","temps","identité"]),
      att('Registre lyrique', '« Je te montre des souvenirs »', 'Registre lyrique : l\'apostrophe amoureuse mêle mémoire et émotion — poème d\'amour surréaliste.', ["lyrique","souvenirs","amour","apostrophe","mémoire","éluard"])
    ],
  },
  'GT-179': {
    texte: `Un jour, tout sera fini, les tableaux, les parfums, les livres, les armes, les lits, les repas, les maisons, les routes, les villes, les femmes, les enfants, les hommes, les animaux, les arbres, les fleurs, les étoiles, le ciel, la terre. Un jour, tout sera fini, et il ne restera rien de ce que nous avons aimé, de ce que nous avons bâti, de ce que nous avons souffert. Jeune Captive, tu mourras au printemps, au moment où la nature renaît, et tu ne verras pas l'été.`,
    contexte: "Poésie révolutionnaire — condamné à mort, registre tragique et lyrique.",
    attendus: [
      att('Énumération', '« les tableaux, les parfums, les livres »', 'Énumération : la liste des biens humains accentue l\'horreur de la fin — élégie universalisante.', ["énumération","tableaux","parfums","livres","liste","mort"]),
      att('Registre tragique', '« Un jour, tout sera fini »', 'Registre tragique : la fatalité de la mort dépasse le personnage — grandeur chénierienne.', ["tragique","fini","mort","fatalité","chénier","révolution"]),
      att('Apostrophe', '« Jeune Captive, tu mourras au printemps »', 'Apostrophe : le poète s\'adresse à la captive — compassion face à la condamnation.', ["apostrophe","captive","mourras","printemps","pit","condamnation"]),
      att('Antithèse', '« nature renaît » / « tu ne verras pas l\'été »', 'Antithèse : la vie reprend sans la victime — ironie tragique du destin.', ["antithèse","renaît","été","printemps","mort","contraste"])
    ],
  },
  'GT-180': {
    texte: `Ô toi que j'ai quittée en pleurant,
Hôte de ce ciel si pur et si sombre,
Où reste-t-il de toi ?
Nous t'avons pleurée, et voici l'heure
Où nous pleurons devant ta tombe fermée.
Ô toi que j'ai quittée en pleurant !
Le vent gonfle les voiles de la barque,
Et je m'en vais, loin de ce cher tombeau.
Ô toi que j'ai quittée en pleurant !
Le vent gonfle les voiles de la barque,
Et je m'en vais, loin de ce cher tombeau.
Ô toi que j'ai quittée en pleurant,
Hôte de ce ciel si pur et si sombre,
Où reste-t-il de toi ?
Nous t'avons pleurée, et voici l'heure
Où nous pleurons devant ta tombe fermée.`,
    contexte: "Élégie à Léopoldine — deuil, registre pathétique et lyrique.",
    attendus: [
      att('Apostrophe', '« Ô toi que j\'ai quittée en pleurant »', 'Apostrophe : le père interpelle sa fille morte — élégie hugolienne au deuil.', ["apostrophe","toi","quittée","pleurant","deuil","hugo"]),
      att('Anaphore', '« Ô toi que j\'ai quittée en pleurant »', 'Anaphore : le refrain obsédant structure l\'élégie — douleur qui ne se apaise pas.', ["anaphore","quittée","pleurant","refrain","douleur","élégie"]),
      att('Registre pathétique', '« nous pleurons devant ta tombe fermée »', 'Registre pathétique : la scène du deuil suscite la pitié — mort de Léopoldine.', ["pathétique","pleurons","tombe","pit","deuil","fille"]),
      att('Question rhétorique', '« Où reste-t-il de toi ? »', 'Question rhétorique : l\'interrogation sur l\'au-delà oriente la méditation élégiaque.', ["question","rhétorique","reste","au-delà","méditation","absence"])
    ],
  },
  'GT-181': {
    texte: `Rolla, accoudé sur sa table, la tête dans ses mains, regardait la nuit tomber sur Paris. Il avait vingt ans, et déjà il sentait le poids des années. L'amour l'avait brisé ; le plaisir l'avait lassé ; la vie lui semblait une comédie qu'il avait trop vue. « Demain, se disait-il, demain je me tuerai. » Mais demain revenait toujours, et Rolla remettait sa mort au lendemain. Il buvait pour oublier, il lisait pour s'endormir, il rêvait d'une femme idéale qui ne viendrait jamais. La nuit était noire, la chambre était froide, et Rolla, seul, attendait la fin.`,
    contexte: "Poème romantique — désespoir amoureux, registre lyrique et mélancolique.",
    attendus: [
      att('Registre lyrique', '« L\'amour l\'avait brisé ; le plaisir l\'avait lassé »', 'Registre lyrique : la subjectivité de Rolla exprime le mal du siècle — mélancolie romantique.', ["lyrique","amour","brisé","lassé","mélancolie","musset"]),
      att('Antithèse', '« Demain, se disait-il, demain je me tuerai »', 'Antithèse entre la résolution et le report : Rolla diffère toujours la mort — paradoxe existentiel.', ["antithèse","demain","tuerai","report","paradoxe","existence"]),
      att('Champ lexical', '« nuit… noire… froide… seul… fin »', 'Champ lexical de la nuit et de la mort : l\'atmosphère nocturne traduit le désespoir.', ["champ lexical","nuit","noire","froide","seul","désespoir"]),
      att('Registre tragique', '« attendait la fin »', 'Registre tragique : l\'attente de la mort installe une fatalité romantique.', ["tragique","fin","mort","attente","fatalité","rolla"])
    ],
  },
  'GT-182': {
    texte: `Voici la cafetière
En faïence fine
Où bout le café
Avec un bruit doux
Comme un murmure.
La flamme bleue
Monte et descend
Sous le mince tuyau
De cuivre poli.
L'odeur du café
Se mêle à l'odeur
Des roses fanées
Sur la table.
Voici la cafetière
En faïence fine
Où bout le café
Avec un bruit doux
Comme un murmure.
La flamme bleue
Monte et descend
Sous le mince tuyau
De cuivre poli.
L'odeur du café
Se mêle à l'odeur
Des roses fanées
Sur la table.`,
    contexte: "Poésie parnassienne — objet d\'art, préciosité formelle, art pour l\'art.",
    attendus: [
      att('Description', '« Voici la cafetière / En faïence fine »', 'Description précieuse : Gautier peint l\'objet avec minutie — esthétique parnassienne de l\'art pour l\'art.', ["description","cafetière","faïence","objet","parnassien","gautier"]),
      att('Comparaison', '« Comme un murmure »', 'Comparaison : le bruit du café devient murmure — musicalité du vers.', ["comparaison","murmure","bruit","doux","musicalité","vers"]),
      att('Synesthie', '« L\'odeur du café / Se mêle à l\'odeur / Des roses fanées »', 'Synesthie : les odeurs se superposent — correspondances sensorielles parnassiennes.', ["synesthie","odeur","café","roses","sens","fusion"]),
      att('Registre lyrique', '« La flamme bleue / Monte et descend »', 'Registre lyrique atténué : la contemplation esthétique remplace la passion — poésie de l\'objet.', ["lyrique","flamme","bleue","contemplation","esthétique","art"])
    ],
  },
  'GT-183': {
    texte: `C'était par un beau soir d'août, au moment où le soleil descendait derrière le clocher de Loisy. Les blés étaient murs, les prés verts, et l'air sentait bon la terre et le foin. Je marchais seul dans le val, songeant à Sylvie, à Adrienne, à ces deux figures de mon passé qui se confondaient dans ma mémoire. Sylvie, la fille du garde, simple et rustique ; Adrienne, la princesse rêvée, inaccessible. Le val s'illuminait de la dernière lumière du jour, et je sentais que je n'aimerais jamais qu'une ombre, qu'un souvenir.`,
    contexte: "Nouvelle romantique — paysage intérieur, mémoire et rêve.",
    attendus: [
      att('Champ lexical', '« blés… prés… terre… foin »', 'Champ lexical pastoral : le paysage du val traduit la nostalgie — nature miroir de l\'âme.', ["champ lexical","blés","prés","terre","foin","pastoral"]),
      att('Antithèse', '« Sylvie… simple et rustique » / « Adrienne… inaccessible »', 'Antithèse : la femme réelle s\'oppose à la femme rêvée — dualité romantique.', ["antithèse","sylvie","adrienne","simple","inaccessible","dualité"]),
      att('Registre lyrique', '« je n\'aimerais jamais qu\'une ombre, qu\'un souvenir »', 'Registre lyrique : la confidence intime révèle l\'amour impossible — mélancolie nervalienne.', ["lyrique","ombre","souvenir","amour","impossible","nérvale"]),
      att('Métaphore', '« ces deux figures de mon passé qui se confondaient »', 'Métaphore : les femmes deviennent figures fantômatiques — mémoire et rêve entremêlés.', ["métaphore","figures","passé","confondaient","mémoire","rêve"])
    ],
  },
  'GT-184': {
    texte: `Un jour, l'amour et la beauté, fleurissant dans votre corps, j'ai traîné dans une boue ignoble, et j'ai laissé un morceau de ma vie oublié. Plus tard, passant à côté d'un champ, j'ai vu sur une charogne, les entrailles pendantes, cette charogne infâme, pourrie par le soleil, éclater comme un ventre, et de cette pourriture, sortir des bêtes, des chiens, des chiens voraces. Et pourtant, vous serez pareille à cette ordure, à cette horrible infection, étoile de mes yeux, soleil de ma nature, vous, mon ange et ma passion !`,
    contexte: "Poésie moderniste — spleen, laideur et beauté, registre satirique et lyrique.",
    attendus: [
      att('Antithèse', '« amour et la beauté » / « boue ignoble »', 'Antithèse : la beauté passée s\'oppose à la charogne présente — contraste spleen et idéal.', ["antithèse","beauté","boue","charogne","contraste","baudelaire"]),
      att('Métaphore', '« étoile de mes yeux, soleil de ma nature »', 'Métaphore : la bien-aimée est célébrée en hyperboles lyriques — amour et dégoût mêlés.', ["métaphore","étoile","soleil","ange","passion","amour"]),
      att('Registre satirique', '« charogne infâme, pourrie par le soleil »', 'Registre satirique : la description réaliste de la pourriture choque — modernité baudelairienne.', ["satirique","charogne","pourriture","dégoût","réalisme","choc"]),
      att('Apostrophe', '« vous, mon ange et ma passion »', 'Apostrophe : le poète s\'adresse à la femme absente — élégie de la beauté fletrie.', ["apostrophe","ange","passion","vous","femme","élégie"])
    ],
  },
  'GT-185': {
    texte: `Gilliatt, seul sur la roche, affrontait la tempête. Les vagues le cinglaient, le vent lui arrachait les vêtements, la mer montait, menaçante, implacable. Il avait promis de sauver la machine du navire échoué ; il avait juré de ne pas reculer. Ses mains saignaient, ses muscles brûlaient, mais il continuait. L'homme contre la nature, la volonté contre l'élément : telle était la lutte. Hugo voyait en Gilliatt un héros du peuple, un Prométhée des mers, un être qui sacrifiait tout pour tenir parole.`,
    contexte: "Roman maritime — lutte homme-nature, registre épique et pathétique.",
    attendus: [
      att('Personnification', '« la mer montait, menaçante, implacable »', 'Personnification : la mer devient adversaire vivant — combat homme-nature.', ["personnification","mer","menaçante","implacable","nature","adversaire"]),
      att('Antithèse', '« L\'homme contre la nature »', 'Antithèse : l\'homme s\'oppose à l\'élément — thème hugolien de la lutte héroïque.', ["antithèse","homme","nature","volonté","élément","lutte"]),
      att('Registre épique', '« un Prométhée des mers »', 'Registre épique : Gilliatt est élevé au rang de héros mythique — grandeur hugolienne.', ["épique","prométhée","héros","sacrifice","grandeur","hugo"]),
      att('Registre pathétique', '« Ses mains saignaient, ses muscles brûlaient »', 'Registre pathétique : la souffrance physique suscite l\'admiration — corps martyrisé.', ["pathétique","mains","saignaient","souffrance","admiration","martyre"])
    ],
  },
  'GT-186': {
    texte: `Consuelo chantait. Sa voix, pure et puissante, remplissait la salle, envahissait les cœurs, transportait les auditeurs. Elle ne chantait pas seulement avec sa gorge : elle chantait avec son âme, avec toute la souffrance de son passé, avec tout l'espoir de son avenir. Quand elle atteignait les notes les plus hautes, le public retenait son souffle ; quand elle descendait dans les graves, un silence religieux s'installait. La musique de Consuelo était une révélation : elle disait ce que les mots ne pouvaient pas dire.`,
    contexte: "Roman artistique — lyrisme, émotion collective, registre pathétique.",
    attendus: [
      att('Métaphore', '« elle chantait avec son âme »', 'Métaphore : la voix devient expression de l\'âme — art et émotion fusionnés.', ["métaphore","âme","chantait","voix","émotion","art"]),
      att('Hyperbole', '« remplissait la salle, envahissait les cœurs »', 'Hyperbole : l\'impact de la voix dépasse l\'espace physique — puissance artistique.', ["hyperbole","salle","cœurs","transportait","puissance","voix"]),
      att('Registre pathétique', '« toute la souffrance de son passé »', 'Registre pathétique : le chant exprime la douleur — identification du public.', ["pathétique","souffrance","passé","compassion","identification","sand"]),
      att('Gradation', '« notes les plus hautes… descendait dans les graves »', 'Gradation : la modulation vocale structure l\'émotion collective — montée et descente.', ["gradation","hautes","graves","modulation","émotion","public"])
    ],
  },
  'GT-187': {
    texte: `Frédéric Moreau, revenu à Paris après des années de rêverie, retrouvait la ville avec mélancolie. Il avait aimé Mme Arnoux, perdu Mme Arnoux, et maintenant il ne savait plus très bien ce qu'il voulait. La révolution de 1848 éclatait ; les barricades se dressaient ; les idées s'affrontaient. Frédéric observait tout cela de loin, comme un spectateur de sa propre vie. Il avait rêvé de gloire, d'amour, de fortune ; il n'avait obtenu que la désillusion. Flaubert peignait en lui le portrait du bovarysme masculin : rêver sans agir, désirer sans posséder.`,
    contexte: "Roman réaliste — désillusion, bovarysme masculin, registre ironique.",
    attendus: [
      att('Registre ironique', '« spectateur de sa propre vie »', 'Registre ironique : Frédéric contemple passivement son existence — distance flaubertienne.', ["ironique","spectateur","passif","désillusion","distance","flaubert"]),
      att('Antithèse', '« rêvé de gloire… n\'avait obtenu que la désillusion »', 'Antithèse : rêve et réalité s\'opposent — bovarysme masculin.', ["antithèse","rêvé","désillusion","gloire","contraste","bovarysme"]),
      att('Métaphore', '« le portrait du bovarysme masculin »', 'Métaphore : Frédéric incarne une maladie du rêve — analyse sociale flaubertienne.', ["métaphore","portrait","bovarysme","rêve","maladie","analyse"]),
      att('Registre pathétique', '« Il avait aimé Mme Arnoux, perdu Mme Arnoux »', 'Registre pathétique atténué : l\'amour perdu structure la mélancolie du héros.', ["pathétique","aimé","perdu","mélancolie","amour","arnoux"])
    ],
  },
  'GT-188': {
    texte: `Le magasin s'ouvrait sur le boulevard Haussmann comme une caverne de lumière. Des milliers d'articles s'étalaient sur des kilomètres de comptoirs ; des centaines de vendeuses, en uniforme noir, glissaient entre les clientes ; des millions de francs changeaient de mains chaque jour. Octave Mouret avait bâti cet empire du commerce, cet « au bonheur des dames » qui promettait le bonheur par l'achat. Zola voyait dans le grand magasin la modernité parisienne : le capitalisme triomphant, la femme réduite à consommatrice, la ville transformée en spectacle.`,
    contexte: "Naturalisme — monde du commerce, modernité parisienne, registre épique.",
    attendus: [
      att('Hyperbole', '« Des milliers… des centaines… des millions »', 'Hyperbole : l\'amplification numérique exalte l\'ampleur du commerce — naturalisme zolien.', ["hyperbole","milliers","millions","ampleur","commerce","zola"]),
      att('Métaphore', '« une caverne de lumière »', 'Métaphore : le magasin devient antre moderne — spectacle capitaliste.', ["métaphore","caverne","lumière","magasin","spectacle","modernité"]),
      att('Registre épique', '« empire du commerce »', 'Registre épique : Octave Mouret est un conquérant du capitalisme — grandeur du récit.', ["épique","empire","commerce","conquête","capitalisme","grandeur"]),
      att('Registre satirique', '« la femme réduite à consommatrice »', 'Registre satirique : Zola dénonce la réification de la femme — critique sociale.', ["satirique","femme","consommatrice","critique","capitalisme","dénonciation"])
    ],
  },
  'GT-189': {
    texte: `Je ne me souviens pas très bien de ce qui s'est passé pendant ces années-là. J'avais vingt ans, peut-être un peu plus, peut-être un peu moins. Je vivais à Paris, dans un hôtel de la rue des Boutiques Obscures, et je me disais que j'allais retrouver quelqu'un, quelqu'un que j'avais connu autrefois, dont j'avais perdu la trace. Je ne savais plus son nom. Je ne savais plus son visage. Je ne savais plus que j'étais moi-même. La mémoire me quittait par bribes, et chaque bribe me laissait plus seul.`,
    contexte: "Roman modianesque — mémoire, identité perdue, registre mélancolique.",
    attendus: [
      att('Anaphore', '« Je ne savais plus… Je ne savais plus… Je ne savais plus »', 'Anaphore : la répétition traduit l\'effacement progressif de la mémoire — style modianesque.', ["anaphore","savais","répétition","mémoire","effacement","modiano"]),
      att('Registre lyrique', '« La mémoire me quittait par bribes »', 'Registre lyrique : la subjectivité mélancolique colore le récit — identité floue.', ["lyrique","mémoire","bribes","mélancolie","subjectivité","identité"]),
      att('Gradation', '« son nom… son visage… que j\'étais moi-même »', 'Gradation : l\'oubli s\'intensifie jusqu\'à l\'identité — perte croissante.', ["gradation","nom","visage","moi-même","oubli","perte"]),
      att('Champ lexical', '« perdu la trace… ne savais plus… mémoire me quittait »', 'Champ lexical de l\'oubli : les résonances insistent sur la quête identitaire.', ["champ lexical","perdu","trace","oubli","mémoire","quête"])
    ],
  },
  'GT-190': {
    texte: `Ils s'appelaient Jérôme et Sylvie. Ils avaient vingt-six ans et vingt-quatre ans. Ils habitaient un deux-pièces rue de la Montagne-Sainte-Geneviève, et ils possédaient des choses : un divan, une table, des chaises, des assiettes, des verres, des couteaux, des fourchettes, des cuillers, des casseroles, des poêles, des torchons, des draps, des couvertures, des oreillers. Ils possédaient aussi des livres, des disques, des vêtements, des chaussures. Ils possédaient tout cela, et pourtant ils n'étaient pas heureux. Ils attendaient quelque chose — un voyage, un métier, un enfant — qui ne venait jamais.`,
    contexte: "Nouveau roman — société de consommation, registre ironique et critique.",
    attendus: [
      att('Énumération', '« un divan, une table, des chaises »', 'Énumération : l\'inventaire des objets accumule la matérialité — critique de la consommation.', ["énumération","divan","table","chaises","objets","inventaire"]),
      att('Anaphore', '« Ils possédaient… Ils possédaient aussi… Ils possédaient tout cela »', 'Anaphore sur « possédaient » : la reprise ironise l\'accumulation — bonheur par les choses.', ["anaphore","possédaient","répétition","accumulation","ironie","consommation"]),
      att('Antithèse', '« possédaient tout cela, et pourtant ils n\'étaient pas heureux »', 'Antithèse : possession et malheur s\'opposent — critique de la société de consommation.', ["antithèse","possédaient","heureux","contraste","malheur","critique"]),
      att('Registre ironique', '« ils attendaient quelque chose… qui ne venait jamais »', 'Registre ironique : l\'attente perpétuelle dénonce l\'impuissance du couple — satire douce.', ["ironique","attendaient","jamais","impuissance","couple","perec"])
    ],
  },
  'GT-191': {
    texte: `Plume partit un matin, sans bagages, sans destination, sans raison. Il marcha longtemps. Il rencontra des gens qui lui demandaient qui il était ; il ne savait pas quoi répondre. On lui demanda son nom ; il avait oublié son nom. On lui demanda d'où il venait ; il ne savait plus. Plume devenait de plus en plus léger, de plus en plus transparent, de plus en plus absent. Les autres continuaient à vivre ; Plume continuait à marcher. Il marchait vers nulle part, et nulle part l'attendait.`,
    contexte: "Roman surréaliste — absurdité, dépersonnalisation, registre comique et tragique.",
    attendus: [
      att('Gradation', '« de plus en plus léger… transparent… absent »', 'Gradation : l\'effacement progressif de Plume traduit la dépersonnalisation — absurdité existentielle.', ["gradation","léger","transparent","absent","effacement","michaux"]),
      att('Énumération', '« sans bagages, sans destination, sans raison »', 'Énumération des privations : le voyage absurde commence dans le vide.', ["énumération","bagages","destination","raison","vide","privation"]),
      att('Registre comique', '« il avait oublié son nom »', 'Registre comique : l\'oubli du nom provoque un effet d\'absurde — décalage surréaliste.', ["comique","oublié","nom","absurde","décalage","surréaliste"]),
      att('Registre tragique', '« Il marchait vers nulle part »', 'Registre tragique : l\'errance sans but traduit l\'absurdité de l\'existence.', ["tragique","nulle part","errance","absurdité","existence","voyage"])
    ],
  },
  'GT-192': {
    texte: `Elle entre. Elle dit bonjour. Elle ne dit pas bonjour. Elle dit autre chose. Il répond. Il ne répond pas. Il dit autre chose. Entre eux, il y a des mots, des silences, des regards, des non-dits. Elle pense qu'il pense qu'elle pense. Il pense qu'elle pense qu'il pense. Les pensées se croisent sans se rencontrer. Les mots flottent entre eux comme des bulles. Personne ne sait ce que l'autre veut dire. Personne ne sait ce qu'il veut dire lui-même. C'est ainsi que les tropismes naissent : dans l'espace infime entre ce qu'on dit et ce qu'on pense.`,
    contexte: "Nouveau roman — sous-conversation, mouvements intérieurs, registre psychologique.",
    attendus: [
      att('Antithèse', '« Elle dit bonjour. Elle ne dit pas bonjour »', 'Antithèse : dire et ne pas dire coexistent — sous-conversation sarrautienne.', ["antithèse","bonjour","dit","silence","sous-conversation","sarraute"]),
      att('Paradoxe', '« Les pensées se croisent sans se rencontrer »', 'Paradoxe : la communication échoue malgré les mots — tropismes psychologiques.', ["paradoxe","pensées","croisent","communication","échec","tropisme"]),
      att('Métaphore', '« Les mots flottent… comme des bulles »', 'Métaphore : les paroles deviennent bulles vides — langage déréalisé.', ["métaphore","mots","bulles","flottent","vide","langage"]),
      att('Registre psychologique', '« dans l\'espace infime entre ce qu\'on dit et ce qu\'on pense »', 'Registre psychologique : Sarraute explore les mouvements intérieurs — micro-psychologie.', ["psychologique","espace","dit","pense","intérieur","micro"])
    ],
  },
  'GT-193': {
    texte: `Le temps ne passe pas. Il est. Il est là, présent, immobile, offert. Nous le traversons sans le voir, comme on traverse une pièce sans regarder les murs. Mais parfois, un instant se détache, se cristallise, devient visible. Cet instant, c'est maintenant. Maintenant, la lumière tombe sur la table, sur la tasse, sur la main qui tient la tasse. Maintenant, tout est là, tout est donné, tout est échange. Dans l'échange, le temps cesse de fuir. Dans l'échange, nous sommes.`,
    contexte: "Poésie contemporaine — présence, instant, registre méditatif et lyrique.",
    attendus: [
      att('Paradoxe', '« Le temps ne passe pas. Il est »', 'Paradoxe : le temps immobile contredit l\'écoulement — méditation bonnefoyenne.', ["paradoxe","temps","passe","est","immobile","bonnefoy"]),
      att('Anaphore', '« Maintenant… Maintenant… Maintenant »', 'Anaphore sur « Maintenant » : l\'insistance cristallise l\'instant — présence poétique.', ["anaphore","maintenant","répétition","instant","présence","cristallise"]),
      att('Comparaison', '« comme on traverse une pièce sans regarder les murs »', 'Comparaison : le temps vécu devient espace ignoré — figure de l\'inattention.', ["comparaison","traverse","pièce","murs","inattention","temps"]),
      att('Registre lyrique', '« Dans l\'échange, nous sommes »', 'Registre lyrique : la présence partagée devient révélation — poétique de l\'instant.', ["lyrique","échange","sommes","présence","révélation","instant"])
    ],
  },
  'GT-194': {
    texte: `J'étais une jeune fille rangée. Je faisais ce qu'on attendait de moi : étudier, obéir, ne pas poser de questions gênantes. Ma mère voulait que je sois une demoiselle respectable ; mon père voulait que je sois une intellectuelle. Moi, je ne savais pas ce que je voulais. Je lisais Sartre et Camus en cachette ; je rêvais de liberté en cachette ; je m'ennuyais en public. La conformité bourgeoise m'étouffait, et pourtant je ne savais pas comment m'en échapper. Je n'étais pas encore Simone de Beauvoir ; j'étais une jeune fille qui attendait.`,
    contexte: "Autobiographie — féminisme, conformisme bourgeois, registre critique et lyrique.",
    attendus: [
      att('Antithèse', '« demoiselle respectable » / « intellectuelle »', 'Antithèse : les attentes parentales s\'opposent — conflit identitaire.', ["antithèse","respectable","intellectuelle","attentes","conflit","identité"]),
      att('Champ lexical', '« étudier, obéir, ne pas poser de questions »', 'Champ lexical de la conformité : la liste des devoirs traduit l\'étouffement bourgeois.', ["champ lexical","obéir","conformité","rangée","devoirs","étouffement"]),
      att('Registre critique', '« La conformité bourgeoise m\'étouffait »', 'Registre critique : Beauvoir dénonce l\'aliénation féminine — analyse féministe.', ["critique","conformité","bourgeoise","étouffait","féminisme","aliénation"]),
      att('Registre lyrique', '« je rêvais de liberté en cachette »', 'Registre lyrique : le désir de liberté s\'exprime en confidence — subjectivité autobiographique.', ["lyrique","rêvais","liberté","cachette","désir","confession"])
    ],
  },
  'GT-195': {
    texte: `Puis-je, monsieur, vous offrir mes services, maintenant, sans crainte d'être importun ? Car, vous le voyez, je suis le Juge-Pénitent. Amsterdam, d'abord. On vous parlera du canal, des maisons qui se mirant dans l'eau. Rien. Le grimoire des tours de Notre-Dame, le grand œuvre du commerce ou plutôt du négoce, le polder aussi, et le fameux réseau des canaux qui rendent la comparaison avec la Venise inévitable. Rien, encore une fois. Pourquoi nous battre ? Vous ne connaissez pas Amsterdam. Moi si. J'y ai vécu. Autrefois, j'étais avocat à Paris. Je vivais du bien des autres. J'étais vertueux, on m'admirait. Aujourd'hui, je confesse. Je vous juge comme je me juge. Bienvenue en enfer, qui n'est pas le feu mais l'eau — l'eau partout, et pas de sortie.`,
    contexte: "Roman philosophique — culpabilité, juge-pénitent, registre ironique et tragique.",
    attendus: [
      att('Métaphore', '« des maisons qui se mirant dans l\'eau »', 'Métaphore : la ville sur l\'eau devient allégorie de l\'existence — absurde camusien.', ["métaphore","amsterdam","eau","maisons","allégorie","camus"]),
      att('Antithèse', '« Je vous juge comme je me juge »', 'Antithèse : juge et pénitent coexistent — paradoxe du juge-pénitent.', ["antithèse","juge","pénitent","paradoxe","culpabilité","clamence"]),
      att('Registre ironique', '« J\'étais vertueux, on m\'admirait »', 'Registre ironique : l\'auto-portrait vertueux est démenti par la confession — décalage satirique.', ["ironique","vertueux","admirait","confession","décalage","satire"]),
      att('Registre tragique', '« Bienvenue en enfer, qui n\'est pas le feu mais l\'eau »', 'Registre tragique : l\'enfer aquatique renverse la tradition — fatalité existentielle.', ["tragique","enfer","eau","fatalité","existence","clamence"])
    ],
  },
  'GT-196': {
    texte: `Comme je descendais des Fleuves impassibles,
Je ne me sentis plus guidé par les haleurs :
Des Peaux-Rouges criards les avaient pris pour cibles
Les ayant cloués nus aux poteaux colorés.

J'ai été l'hiver sonné du trompeau des calmes.
J'ai suivi, longs mois, la houle furieuse des mers
Et n'ai pas eu plus souvent ma victoire aux fêtes
Que l'étoile au fond du marais.

Je me suis baigné dans le Poème
De la Mer, infusé d'astres, et luisant,
Devinant alors le chant vert et glauque
Des rythmes insensés qui sont l'homme et la mer et la vengeance !`,
    contexte: "Poème symboliste — voyage initiatique, liberté, registre épique et lyrique.",
    attendus: [
      att('Métaphore', '« Je me suis baigné dans le Poème / De la Mer »', 'Métaphore : Rimbaud fusionne poète et océan — initiation poétique et liberté.', ["métaphore","poème","mer","baigné","initiation","rimbaud"]),
      att('Personnification', '« des Fleuves impassibles »', 'Personnification : les fleuves indifférents abandonnent le poète — nature hostile.', ["personnification","fleuves","impassibles","nature","abandon","voyage"]),
      att('Registre épique', '« longs mois, la houle furieuse des mers »', 'Registre épique : le grand voyage maritime élève le récit au niveau héroïque.', ["épique","houle","mers","voyage","héroïque","temps"]),
      att('Symbolisme', '« l\'homme et la mer et la vengeance »', 'Symbolisme : la triade condense l\'univers rimbauldien — liberté, nature, révolte.', ["symbolisme","homme","mer","vengeance","révolte","univers"])
    ],
  },
  'GT-197': {
    texte: `Je rencontrai Manon Lescaut au moment où je quittais l'école. Elle était jeune, belle, vivante ; elle m'aima avec une passion que je ne méritais pas. Je l'aimai aussi, mais mon amour fut moins fort que le sien, ou du moins je le crus. Manon me quitta pour un homme riche ; je la suivis ; je la perdis ; je la retrouvai ; je la perdis encore. L'amour de Manon fut ma joie et ma ruine. Elle mourut dans mes bras, en Amérique, exilée, punie pour avoir trop aimé. Je ne l'ai jamais oubliée.`,
    contexte: "Roman sentimental — passion fatale, registre pathétique et lyrique.",
    attendus: [
      att('Antithèse', '« ma joie et ma ruine »', 'Antithèse : bonheur et destruction coexistent — passion fatale prévostienne.', ["antithèse","joie","ruine","amour","contraste","passion"]),
      att('Registre pathétique', '« Elle mourut dans mes bras »', 'Registre pathétique : la mort de Manon suscite la pitié — dénouement tragique.', ["pathétique","mourut","bras","pit","mort","tragique"]),
      att('Registre lyrique', '« Je l\'aimai aussi, mais mon amour fut moins fort »', 'Registre lyrique : la confidence amoureuse structure le récit — subjectivité du narrateur.', ["lyrique","aimai","amour","confession","subjectivité","prévost"]),
      att('Gradation', '« je la suivis ; je la perdis ; je la retrouvai ; je la perdis encore »', 'Gradation : les rebondissements accentuent la fatalité amoureuse.', ["gradation","suivis","perdis","retrouvai","fatalité","rebondissements"])
    ],
  },
  'GT-198': {
    texte: `Meaulnes avait disparu pendant trois jours. Quand il revint, il ne parla pas de ce qu'il avait vu. Mais on devina qu'il avait vécu quelque chose d'extraordinaire : une fête, un château, une jeune fille. Yvonne de Galais. Meaulnes l'avait aimée en une nuit, et cette nuit avait changé sa vie. La fête étrange, les invités masqués, la musique, les lumières : tout cela formait un monde à part, un domaine perdu que Meaulnes chercherait toute sa vie sans jamais le retrouver. Le Grand Meaulnes, c'est le roman du rêve impossible, de l'enfance perdue, de l'amour fugitif.`,
    contexte: "Roman initiatique — rêve et réalité, registre onirique et lyrique.",
    attendus: [
      att('Métaphore', '« un domaine perdu »', 'Métaphore : la fête devient paradis perdu — quête initiatique alain-fournier.', ["métaphore","domaine","perdu","fête","paradis","quête"]),
      att('Registre onirique', '« une fête, un château, une jeune fille »', 'Registre onirique : l\'énumération féerique crée une atmosphère de conte.', ["onirique","fête","château","féerique","conte","rêve"]),
      att('Registre lyrique', '« Meaulnes l\'avait aimée en une nuit »', 'Registre lyrique : l\'amour instantané condense l\'émotion — passion fugitive.', ["lyrique","aimée","nuit","passion","fugitive","amour"]),
      att('Symbolisme', '« Le Grand Meaulnes, c\'est le roman du rêve impossible »', 'Symbolisme : Meaulnes incarne la quête de l\'impossible — enfance perdue.', ["symbolisme","rêve","impossible","enfance","quête","perdue"])
    ],
  },
  'GT-199': {
    texte: `Zadig, ayant perdu son chien et son cheval, se plaignit de la Providence. Il rencontra un pêcheur qui lui dit : « Tu te plains de perdre un chien et un cheval ; tu ne sais pas que ces pertes t'ont évité la mort. » Zadig ne comprit pas. Plus tard, il fut arrêté pour un crime qu'il n'avait pas commis ; on le conduisait à l'échafaud lorsqu'on découvrit le vrai coupable. Zadig fut libéré. Il comprit alors que ce qu'on appelle malheur est souvent le déguisement du bonheur, et que la Providence sait mieux que nous ce qui nous convient.`,
    contexte: "Conte philosophique — satire des institutions, registre ironique et didactique.",
    attendus: [
      att('Registre didactique', '« ce qu\'on appelle malheur est souvent le déguisement du bonheur »', 'Registre didactique : la leçon morale conclut le conte — optimisme voltairien.', ["didactique","malheur","bonheur","leçon","providence","voltaire"]),
      att('Paradoxe', '« ces pertes t\'ont évité la mort »', 'Paradoxe : la perte devient salut — renversement de la logique commune.', ["paradoxe","pertes","mort","salut","providence","renversement"]),
      att('Registre ironique', '« Zadig ne comprit pas »', 'Registre ironique : l\'incompréhension du héros souligne la sagesse différée — satire.', ["ironique","comprit","incompréhension","sagesse","satire","décalage"]),
      att('Antithèse', '« malheur » / « bonheur »', 'Antithèse : malheur et bonheur s\'inversent — philosophie optimiste du conte.', ["antithèse","malheur","bonheur","inversion","optimisme","contraste"])
    ],
  },
  'GT-200': {
    texte: `Ma mère m'aimait d'un amour que je ne méritais pas. Elle croyait en moi avant que je croie en moi-même. Elle me disait que j'irais loin, que je serais écrivain, que je serais quelqu'un. Elle avait quitté la Russie pour moi ; elle avait tout sacrifié pour moi. Quand elle mourut, je compris que je ne lui avais jamais assez rendu cet amour. La promesse de l'aube, c'était la promesse qu'elle m'avait faite : que la vie serait belle, que je serais heureux, que l'avenir m'appartenait. Je l'ai écrit pour elle, et pour moi, et pour tous ceux qui ont une mère.`,
    contexte: "Autobiographie — amour maternel, destin, registre pathétique et lyrique.",
    attendus: [
      att('Hyperbole', '« d\'un amour que je ne méritais pas »', 'Hyperbole : l\'amour maternel dépasse le mérite — dévotion inconditionnelle.', ["hyperbole","amour","méritais","dévotion","maternel","inconditionnel"]),
      att('Anaphore', '« que je serais… que je serais… que l\'avenir »', 'Anaphore sur « que » : la promesse maternelle structure l\'espoir — destin garyen.', ["anaphore","serais","promesse","espoir","avenir","mère"]),
      att('Registre pathétique', '« je ne lui avais jamais assez rendu cet amour »', 'Registre pathétique : le regret filial suscite la compassion — deuil maternel.', ["pathétique","rendu","amour","regret","deuil","compassion"]),
      att('Registre lyrique', '« La promesse de l\'aube »', 'Registre lyrique : le titre métaphorique condense l\'espoir et la mémoire — élégie à la mère.', ["lyrique","promesse","aube","espoir","mémoire","mère"])
    ],
  }
};
