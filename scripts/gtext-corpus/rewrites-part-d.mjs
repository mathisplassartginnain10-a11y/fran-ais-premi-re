import { att } from '../gtext-enrichment-lib.mjs';

export const REWRITES_PART_D = {
  'GT-580': {
    texte: `Julien n'avait pas encore dix-neuf ans lorsqu'il entra pour la première fois dans la maison de M. de Rênal. Son visage était pâle, les traits fins, les yeux noirs vifs et singulièrement pénétrants. Ce que le maître de maison ne pouvait voir, c'était la double vie que menait déjà ce jeune homme : en apparence humble et respectueux, il cachait une fierté sans bornes et l'idée confuse qu'un jour cette humilité lui rapporterait le centuple. L'hypocrisie était sa première arme, non par nature, mais par nécessité. Il songeait à Napoléon. Cet homme heureux, vêtu avec soin, exprimait à chaque geste la satisfaction que donne la propriété : Julien sentit monter en lui ce mélange singulier de mépris et d'envie qui est le lot des ambitieux pauvres placés face aux riches satisfaits. Il regardait M. de Rênal avec les yeux froids d'un calculateur. La fortune, se disait-il, voilà ce que les hommes de province appellent le mérite. Il portait déjà cette double vie : en surface la déférence, au fond le mépris le plus absolu pour les parvenus qui ne lui ressemblaient pas. Il se promit qu'un jour il ne s'inclinerait plus.`,
    contexte: "Roman psychologique — ambition et hypocrisie. Portrait intérieur de Julien Sorel à son entrée chez les Rênal.",
    attendus: [
      att('Antithèse', "« en surface la déférence, au fond le mépris le plus absolu »", "Antithèse : Stendhal oppose la façade soumise et le mépris secret de Julien — la dualité du personnage condense le thème de l'hypocrisie sociale.", ['antithèse', 'déférence', 'mépris', 'hypocrisie', 'stendhal', 'social']),
      att('Ironie', "« voilà ce que les hommes de province appellent le mérite »", "Ironie : Julien retourne le concept de mérite contre la bourgeoisie provincière — Stendhal dénonce par la voix intérieure du héros une société qui confond fortune et valeur.", ['ironie', 'mérite', 'province', 'fortune', 'bourgeoisie', 'stendhal']),
      att('Métaphore', "« L'hypocrisie était sa première arme »", "Métaphore guerrière : la dissimulation devient une arme de guerre sociale — Julien se vit en stratège contraint de combattre par la ruse faute de naissance.", ['métaphore', 'arme', 'hypocrisie', 'guerre', 'sociale', 'stratège']),
      att('Analyse psychologique', "« ce mélange singulier de mépris et d'envie »", "Analyse psychologique : Stendhal pénètre les états d'âme contradictoires du héros — le roman introspectif prend ici toute sa dimension moderne.", ['psychologie', 'mépris', 'envie', 'introspection', 'ambition', 'contradictoire']),
    ],
  },
  'GT-582': {
    texte: `— Avez-vous éprouvé de la douleur à l'enterrement de votre mère ? a demandé le président.
J'ai répondu que j'avais un peu perdu l'habitude de m'interroger sur moi-même et qu'il m'était difficile de répondre. Il a répété la question. J'ai dit : « Oui, comme tout le monde, je suppose. »
L'avocat général a regardé mes jurés et a dit lentement : « Messieurs, l'indifférence devant la mort d'une mère, voilà ce qui vous est présenté. »
Il a parlé ensuite de mon âme. Il disait qu'il l'avait sondée et qu'il n'y avait rien trouvé de semblable à un sentiment humain. Il a déclaré : « Je vous demande la tête de cet homme. »
Mon avocat a levé les bras. La salle a bourdonné. Le président a tapé avec son marteau. J'écoutais, mais à peine. Il faisait chaud. De grands rayons de soleil entraient par les fenêtres et la lumière tombait oblique sur les bancs. J'entendais les mots, mais ils m'atteignaient comme de loin. J'avais envie que tout soit fini, de retrouver ma cellule, et de dormir. On m'a condamné à mort au nom du peuple français.`,
    contexte: "Absurde — indifférence et condamnation. Dialogue du procès de Meursault dans L'Étranger.",
    attendus: [
      att('Style de l\'écriture blanche', "« Oui, comme tout le monde, je suppose »", "Style de l'écriture blanche : la réponse de Meursault par sa platitude calculée désoriente le tribunal — le ton neutre révèle l'abîme entre le personnage et la norme sociale.", ['écriture blanche', 'neutre', 'indifférence', 'meursault', 'absurde', 'camus']),
      att('Registre judiciaire', "« Je vous demande la tête de cet homme »", "Registre judiciaire : la formule rituelle de la réquisition prend une résonance absurde — condamner pour absence de douleur expose le vertige moral du système.", ['judiciaire', 'réquisition', 'condamnation', 'absurde', 'mort', 'système']),
      att('Métaphore', "« il l'avait sondée et qu'il n'y avait rien trouvé »", "Métaphore de la sonde : l'âme de Meursault est traitée comme un espace vide à explorer — l'avocat général projette une intériorité inexistante et condamne ce vide.", ['métaphore', 'âme', 'vide', 'sonde', 'humanité', 'absence']),
      att('Distanciation', "« les mots, mais ils m'atteignaient comme de loin »", "Distanciation : Meursault assiste à son propre procès comme à un spectacle étranger — l'indifférence au dénouement confirme la philosophie de l'absurde.", ['distanciation', 'spectacle', 'étranger', 'absurde', 'indifférence', 'procès']),
    ],
  },
  'GT-583': {
    texte: `Ce matin-là, j'ai travaillé tard au bureau. Dans l'après-midi, Marie est venue me chercher. Elle voulait que nous allions nager. L'eau était froide et bonne. Nous avons nagé longtemps. Elle riait tout le temps. Sur la plage, elle a posé sa tête sur mon estomac et nous avons regardé le ciel. À un moment elle m'a demandé si je l'aimais. Je lui ai répondu que cela ne voulait rien dire, mais qu'il me semblait que non. Elle a eu l'air triste, puis elle a préparé le dîner. Je l'ai regardée faire sans rien dire.
Le soir, Salamano est venu frapper à ma porte. Il pleurait. Son chien avait disparu. Les agents de la fourrière l'avaient peut-être pris. Il avait l'air misérable et il continuait à pleurer. Je lui ai dit que son chien reviendrait. Il a dit que non, que si on le mettait à la fourrière, on le tuerait. Puis il est parti. Il faisait chaud dans l'escalier. Je suis rentré. Ça ne m'intéressait pas vraiment. J'avais sommeil. Je me suis couché. La nuit était calme et je me suis endormi.`,
    contexte: "Absurde — indifférence et condamnation. Passage du chapitre 3 de la première partie de L'Étranger.",
    attendus: [
      att('Écriture blanche', "« cela ne voulait rien dire, mais qu'il me semblait que non »", "Écriture blanche : la réponse de Meursault à Marie, dépourvue de pathos, traduit une impossibilité radicale à éprouver les sentiments attendus — l'indifférence affective est le marqueur central du personnage.", ['écriture blanche', 'indifférence', 'sentiment', 'meursault', 'camus', 'absurde']),
      att('Registre réaliste', "« L'eau était froide et bonne »", "Registre réaliste : la sensation brute remplace l'introspection — Meursault perçoit le monde par les sens sans médiation symbolique, conformément à l'esthétique camusienne.", ['réaliste', 'sensation', 'corps', 'mer', 'physique', 'présent']),
      att('Temporalité', "« Ce matin-là », « Le soir »", "Temporalité : les marqueurs temporels simples segmentent la journée sans hiérarchie émotionnelle — l'amour, la misère de Salamano et le sommeil s'enchaînent à égalité, illustrant l'absurde.", ['temporalité', 'journée', 'succession', 'égalité', 'absurde', 'routine']),
      att('Énumération', "« Ça ne m'intéressait pas vraiment. J'avais sommeil. Je me suis couché. »", "Énumération de courtes phrases juxtaposées : la parataxe mime l'indifférence de Meursault — le drame de Salamano et la fatigue personnelle sont mis sur le même plan.", ['énumération', 'parataxe', 'indifférence', 'juxtaposition', 'brevitas', 'salamano']),
    ],
  },
  'GT-584': {
    texte: `Mon âme vers ton front où rêve, ô calme sœur,
Un automne jonché de taches de rousseur,
Et vers le ciel errant de ton œil angélique
Monte, comme dans un jardin mélancolique,
Fidèle, un blanc jet d'eau soupire vers l'Azur !
— Vers l'Azur attendri d'octobre pâle et pur
Qui mire aux grands bassins sa langueur infinie
Et laisse, sur l'eau morte où la fauve agonie
Des feuilles erre au vent et creuse un froid sillon,
Se traîner le soleil jaune d'un long rayon.

La chair est triste, hélas ! et j'ai lu tous les livres.
Fuir ! là-bas fuir ! Je sens que des oiseaux sont ivres
D'être parmi l'écume inconnue et les cieux !
Rien, ni les vieux jardins reflétés par les yeux
Ne retiendra ce cœur qui dans la mer se trempe
Ô nuits ! ni la clarté déserte de ma lampe
Sur le vide papier que la blancheur défend
Et ni la jeune femme allaitant son enfant.`,
    contexte: "Symbolisme — suggestion et poésie pure. Deux poèmes des Poésies : « Soupir » et l'ouverture de « Brise marine ».",
    attendus: [
      att('Métaphore filée', "« un blanc jet d'eau soupire vers l'Azur »", "Métaphore filée : l'âme du poète est comparée à un jet d'eau qui monte et aspire à l'Azur — l'idéal symboliste se dit par l'image sans jamais être nommé directement.", ['métaphore', 'jet d\'eau', 'azur', 'idéal', 'symbolisme', 'suggestion']),
      att('Symbolisme', "« l'Azur attendri d'octobre pâle et pur »", "Symbolisme : l'Azur (majuscule) figure l'idéal poétique inaccessible — Mallarmé peint par la nuance chromatique (pâle, pur) une beauté qui se dérobe.", ['symbolisme', 'azur', 'idéal', 'chromatique', 'mallarmé', 'inaccessible']),
      att('Registre lyrique', "« Mon âme vers ton front où rêve, ô calme sœur »", "Registre lyrique : l'apostrophe à la sœur ouvre un espace intime où le moi poétique s'élève — la rêverie automnale teinte le poème d'une mélancolie douce.", ['lyrique', 'apostrophe', 'intime', 'mélancolie', 'automne', 'rêverie']),
      att('Antithèse', "« La chair est triste, hélas ! et j'ai lu tous les livres »", "Antithèse entre la chair (réel, corporel) et les livres (savoir, abstraction) : Mallarmé exprime la lassitude du monde sensible et intellectuel — seul l'élan vers l'inconnu peut y répondre.", ['antithèse', 'chair', 'livres', 'lassitude', 'évasion', 'brise marine']),
    ],
  },
  'GT-585': {
    texte: `Ces nymphes, je les veux perpétuer.

Si clair,
Leur incarnat léger, qu'il voltige dans l'air
Assoupi de sommeils touffus.

                    Aimai-je un rêve ?
Mon doute, amas de nuit ancienne, s'achève
En maint rameau subtil, qui, demeuré les vrais
Bois mêmes, prouve, hélas ! que bien seul je m'offrais
Pour triomphe la faute idéale de roses.

Réfléchissons…
            ou si les femmes dont tu gloses
Figurent un souhait de tes sens fabuleux !
Faune, l'illusion s'échappe des yeux bleus
Et froids, comme une source en pleurs, de la plus chaste :
Mais, l'autre tout soupirs, dis-tu qu'elle contraste
Comme brise du jour chaude dans ta toison ?

Non ! par l'immobile et lasse pâmoison
Suffoquant de chaleurs le matin frais s'il lutte,
Ne murmure point d'eau que ne verse ma flûte
Au bosquet arrosé d'accords ; et le seul vent
Hors des deux tuyaux prompt à s'exhaler avant
Qu'il disperse le son dans une pluie aride,
C'est, à l'horizon pas remué d'une ride,
Le visible et serein souffle artificiel
De l'inspiration, qui regagne le ciel.`,
    contexte: "Symbolisme — sensualité et rêve. Ouverture de L'Après-midi d'un faune de Mallarmé.",
    attendus: [
      att('Question rhétorique', "« Aimai-je un rêve ? »", "Question rhétorique : le faune doute de la réalité des nymphes — l'incertitude entre rêve et désir réel est le ressort de tout le poème, emblème du symbolisme mallarméen.", ['question rhétorique', 'rêve', 'doute', 'désir', 'symbolisme', 'faune']),
      att('Métaphore', "« la faute idéale de roses »", "Métaphore : les nymphes se réduisent à une « faute idéale de roses » — l'image condense la sensualité et l'impossibilité de la posséder en une formule hermétique typique de Mallarmé.", ['métaphore', 'roses', 'sensualité', 'idéal', 'hermétique', 'mallarmé']),
      att('Registre onirique', "« l'illusion s'échappe des yeux bleus »", "Registre onirique : les nymphes se dissipent comme une illusion — Mallarmé suggère que la beauté sensuelle n'existe que dans la rêverie et ne supporte pas la réalité.", ['onirique', 'illusion', 'nymphes', 'rêverie', 'sensualité', 'disparition']),
      att('Synesthésie', "« Ne murmure point d'eau que ne verse ma flûte / Au bosquet arrosé d'accords »", "Synesthésie : la musique de la flûte est perçue comme de l'eau arrosant le bosquet — Mallarmé fond le sonore et le visuel pour rendre sensible l'expérience poétique totale.", ['synesthésie', 'flûte', 'musique', 'eau', 'bosquet', 'accords']),
    ],
  },
  'GT-587': {
    texte: `J'arrivai enfin ; je vis Madame de Warens. Cette époque de ma vie a déterminé mon caractère ; je ne puis me résoudre à la passer légèrement. J'étais dans ma seizième année. On m'avait dit d'aller frapper à une porte. Je frappai. La dame qui m'ouvrit n'avait pas le moins du monde la figure d'une vieille dévote. Je m'étais figuré quelque vieille femme bien renfrognée, car pour moi les mots dévote et bourru étaient synonymes. Je vis un visage pétri de grâces, de beaux yeux bleus pleins de douceur, un teint éblouissant, le contour d'une gorge enchanteresse. Rien n'échappa au rapide coup d'œil du jeune prosélyte. Je devins à l'instant le sien, très sûr qu'une religion prêchée par de tels missionnaires ne pouvait manquer de mener en paradis. Elle prit ma lettre avec un sourire, l'ouvrit, parcourut celle de M. de Pontverre, la reprit, me regarda, et dit : « Mon enfant, vous voilà donc dans un pays étranger à votre âge. C'est dommage. » Elle m'invita à dîner. Tout en elle me troublait, et je sentais que le bonheur de rencontrer une telle femme suffirait à remplir ma vie.`,
    contexte: "Autobiographie — éveil affectif, mémoire sensorielle et conversion. Rencontre fondatrice avec Mme de Warens dans Les Confessions.",
    attendus: [
      att('Registre autobiographique', "« Cette époque de ma vie a déterminé mon caractère »", "Registre autobiographique : Rousseau commente depuis l'âge adulte le moment fondateur — la distance temporelle donne au récit une dimension réflexive sur la formation de soi.", ['autobiographique', 'caractère', 'réflexivité', 'formation', 'mémoire', 'rousseau']),
      att('Portrait', "« un visage pétri de grâces, de beaux yeux bleus pleins de douceur »", "Portrait : l'accumulation de détails physiques (yeux, teint, gorge) témoigne de la vivacité du souvenir sensoriel — Rousseau restitue l'éblouissement de l'adolescent par la précision du tableau.", ['portrait', 'grâces', 'yeux', 'douceur', 'souvenir', 'sensoriel']),
      att('Ironie', "« une religion prêchée par de tels missionnaires ne pouvait manquer de mener en paradis »", "Ironie : Rousseau transpose ironiquement la conversion religieuse en séduction amoureuse — le mot prosélyte révèle que l'attraction pour Mme de Warens est autant charnelle que spirituelle.", ['ironie', 'religion', 'prosélyte', 'séduction', 'conversion', 'spirituel']),
      att('Hyperbole', "« le bonheur de rencontrer une telle femme suffirait à remplir ma vie »", "Hyperbole : Rousseau magnifie rétrospectivement la rencontre en événement existentiel total — l'exagération lyrique annonce la place centrale que Mme de Warens occupera dans les Confessions.", ['hyperbole', 'bonheur', 'rencontre', 'vie', 'lyrique', 'warens']),
    ],
  },
};
