/* ═══════════════════════════════════════════════════
   data-qcm-extra.js — QCM bonus (fusionnés au chargement)
   ═══════════════════════════════════════════════════ */

const PROC_QCM_EXTRA = [
  /* ── Figures de style — Bloc 3 ── */
  {cat:"Figures de style",q:"Quelle figure associe deux termes contraires dans un même groupe nominal ?",opts:["Antithèse","Chiasme","Oxymore","Paradoxe"],ans:2,expl:"L'oxymore fusionne des contraires dans un même groupe : « obscure clarté », « douce amertume »."},
  {cat:"Figures de style",q:"« Rome, l'unique objet de mon ressentiment ! / Rome, à qui vient ton bras… » — quelle figure ?",opts:["Épiphore","Anaphore","Gradation","Accumulation"],ans:1,expl:"Répétition de « Rome » en tête de vers : anaphore à visée incantatoire (Corneille)."},
  {cat:"Figures de style",q:"Le symbolisme diffère de la métaphore car le symbole…",opts:["Est toujours plus court","S'appuie sur une convention culturelle partagée","Utilise « comme »","Ne concerne que la poésie"],ans:1,expl:"Le symbole renvoie à une idée abstraite par convention (colombe = paix). La métaphore crée un rapprochement ponctuel."},
  {cat:"Figures de style",q:"« Boire un verre » illustre plutôt…",opts:["Synecdoque","Métonymie (contenant pour contenu)","Hyperbole","Litote"],ans:1,expl:"Métonymie : le contenant (verre) désigne le contenu (boisson)."},
  {cat:"Figures de style",q:"Quelle figure consiste à exagérer volontairement ?",opts:["Litote","Euphémisme","Hyperbole","Ironie"],ans:2,expl:"L'hyperbole amplifie au-delà du réel pour insister ou provoquer."},
  {cat:"Figures de style",q:"Dans « Cette obscure clarté », l'effet principal est…",opts:["Humour","Tension sémantique exprimant une nuance complexe","Rapidité narrative","Description réaliste"],ans:1,expl:"L'oxymore dit l'indicible par le choc de deux contraires."},
  {cat:"Figures de style",q:"L'épanorthose « Je l'aimais, que dis-je, je l'adorais » produit…",opts:["Atténuation","Amplification par auto-correction","Ironie","Paradoxe"],ans:1,expl:"Feindre de se corriger pour renforcer le propos."},
  {cat:"Figures de style",q:"« Pan ! Boum ! » — quelle figure ?",opts:["Allitération","Assonance","Onomatopée","Rime"],ans:2,expl:"Imitation directe de sons réels."},
  {cat:"Figures de style",q:"La prétérition « Je ne parlerai pas de ses fautes… » sert surtout à…",opts:["Effacer l'idée","La mentionner quand même avec effet rhétorique","Personnifier","Comparer"],ans:1,expl:"Prétérition : feindre de taire ce qu'on évoque — effet ironique ou polémique."},
  {cat:"Figures de style",q:"Quelle figure dit le contraire de ce qu'on pense avec dérision systématique ?",opts:["Litote","Antiphrase","Euphémisme","Énumération"],ans:1,expl:"Antiphrase = ironie par retournement systématique (« beau travail ! » = mauvais)."},
  {cat:"Figures de style",q:"« Il souffrit, agonisa, mourut » — quelle figure domine ?",opts:["Énumération","Gradation ascendante","Accumulation seule","Anaphore"],ans:1,expl:"Gradation ascendante : intensité croissante vers la mort (Hugo)."},
  {cat:"Figures de style",q:"« Femmes, moinillon, enfants, tout passa » — procédé principal ?",opts:["Gradation","Énumération","Litote","Oxymore"],ans:1,expl:"Énumération : liste sans progression d'intensité — universalité de la peste (La Fontaine)."},
  {cat:"Figures de style",q:"Gradation vs énumération : la gradation…",opts:["Liste sans ordre","Organise les éléments par intensité croissante ou décroissante","Utilise « comme »","Ne concerne que le théâtre"],ans:1,expl:"Gradation = progression d'intensité. Énumération = liste pour insister, sans ordre d'intensité obligatoire."},

  /* ── Procédés narratifs — Bloc 3 ── */
  {cat:"Procédés narratifs",q:"Le narrateur hétérodiégétique est…",opts:["Le héros","Absent de l'histoire racontée","Un personnage secondaire uniquement","Toujours omniscient"],ans:1,expl:"Hétérodiégétique = narrateur extérieur à l'intrigue (≠ autodiégétique)."},
  {cat:"Procédés narratifs",q:"Une prolepse produit surtout…",opts:["Ralentissement","Ironie tragique ou tension","Objectivité froide","Description"],ans:1,expl:"Anticiper un futur que le personnage ignore crée une ironie tragique."},
  {cat:"Procédés narratifs",q:"Le discours indirect libre se reconnaît à…",opts:["Les guillemets obligatoires","L'absence de verbe déclaratif et le mélange des voix","Une subordonnée en que","Les tirets de théâtre"],ans:1,expl:"DIL : pensées du personnage insérées dans la narration sans marque formelle."},
  {cat:"Procédés narratifs",q:"La focalisation externe limite le lecteur à…",opts:["Toutes les pensées","L'observation des faits et gestes visibles","Un seul souvenir","Le passé du héros"],ans:1,expl:"Focalisation externe : pas d'accès aux pensées — effet froid, mystère."},
  {cat:"Procédés narratifs",q:"Une ellipse narrative sert surtout à…",opts:["Décrire un lieu","Accélérer en sautant une période","Ralentir l'action","Introduire un dialogue"],ans:1,expl:"L'ellipse efface du temps raconté pour densifier le récit."},
  {cat:"Procédés narratifs",q:"In medias res signifie…",opts:["Commencer par la fin","Plonger au milieu de l'action","Raconter chronologiquement","Ouvrir par une description"],ans:1,expl:"Ouverture au cœur de l'action — le lecteur reconstitue le contexte."},
  {cat:"Procédés narratifs",q:"Un leitmotiv est…",opts:["Une figure sonore","Un motif récurrent structurant le sens","Un type de rime","Un registre comique"],ans:1,expl:"Motif/thème/formule qui revient — cohérence et profondeur symbolique."},
  {cat:"Procédés narratifs",q:"La scène au théâtre correspond à…",opts:["Un résumé","Une durée racontée proche du temps réel","Une ellipse","Une prolepse"],ans:1,expl:"Scène = simulation du temps réel (dialogue in extenso)."},
  {cat:"Procédés narratifs",q:"L'analepse est…",opts:["Une anticipation","Un retour en arrière (flashback)","Une pause descriptive","Un changement de narrateur"],ans:1,expl:"Analepse = flashback, approfondit le passé des personnages."},
  {cat:"Procédés narratifs",q:"La double énonciation au théâtre désigne…",opts:["Deux actes","Parler à la scène ET au public","Deux narrateurs","Deux registres"],ans:1,expl:"Le comédien s'adresse à son partenaire et au spectateur simultanément."},

  /* ── Procédés poétiques — Bloc 3 ── */
  {cat:"Procédés poétiques",q:"Un alexandrin compte…",opts:["10 syllabes","12 syllabes en 2 hémistiches de 6","8 syllabes","14 syllabes"],ans:1,expl:"Alexandrin = 12 syllabes, césure après la 6e."},
  {cat:"Procédés poétiques",q:"Le schéma ABBA correspond aux rimes…",opts:["Plates","Croisées","Embrassées","Pauvres"],ans:2,expl:"Rimes embrassées : A encadre B — effet d'enfermement."},
  {cat:"Procédés poétiques",q:"Un enjambement…",opts:["Pause au milieu du vers","Fait déborder la phrase sur le vers suivant","Supprime une rime","Répète un son"],ans:1,expl:"Enjambement = rupture entre fin de vers et fin de phrase."},
  {cat:"Procédés poétiques",q:"Un sonnet comporte…",opts:["10 vers","14 vers (2 quatrains + 2 tercets)","16 vers","4 quatrains"],ans:1,expl:"Forme fixe de 14 vers — tension vers la chute du 14e."},
  {cat:"Procédés poétiques",q:"La diérèse consiste à…",opts:["Fusionner deux voyelles","Séparer deux voyelles en deux syllabes","Supprimer le e muet","Créer un hiatus"],ans:1,expl:"Diérèse : allonge et valorise un mot (vi-o-lon)."},
  {cat:"Procédés poétiques",q:"Le vers libre se caractérise par…",opts:["Rimes obligatoires","Affranchissement des contraintes métriques fixes","Uniquement des alexandrins","Des strophes de 6 vers"],ans:1,expl:"Modernité formelle : Rimbaud, Apollinaire, Saint-John Perse…"},
  {cat:"Procédés poétiques",q:"Un rejet met en valeur…",opts:["La fin du vers précédent","Un mot isolé en début du vers suivant","La rime interne","La césure"],ans:1,expl:"Rejet = mot important en tête de vers après enjambement."},
  {cat:"Procédés poétiques",q:"Rime riche = au moins…",opts:["1 son commun","2 sons communs","3 sons communs ou plus","Aucune exigence"],ans:2,expl:"Rime pauvre (1), suffisante (2), riche (3+)."},
  {cat:"Procédés poétiques",q:"Un tercet compte…",opts:["2 vers","3 vers","4 vers","6 vers"],ans:1,expl:"Tercet = 3 vers. Quatrain = 4. Distique = 2."},
  {cat:"Procédés poétiques",q:"La césure de l'alexandrin se place…",opts:["Après la 4e syllabe","Après la 6e syllabe","En fin de vers","Au début"],ans:1,expl:"Césure = pause rythmique au milieu de l'alexandrin (6 // 6)."},

  /* ── Registres — Bloc 3 ── */
  {cat:"Registres & tonalités",q:"Phèdre (Racine) relève surtout du registre…",opts:["Comique","Tragique","Didactique","Burlesque"],ans:1,expl:"Fatalité inévitable, pitié et terreur : registre tragique."},
  {cat:"Registres & tonalités",q:"Candide (Voltaire) exploite surtout le registre…",opts:["Lyrique","Satirique","Épique pur","Élégiaque"],ans:1,expl:"Dénonciation par l'ironie et la dérision."},
  {cat:"Registres & tonalités",q:"Le registre pathétique vise à…",opts:["Faire rire","Émouvoir, susciter la pitié","Instruire une morale","Créer du suspense fantastique"],ans:1,expl:"Pathétique = compassion, empathie, parfois indignation morale."},
  {cat:"Registres & tonalités",q:"Le registre lyrique exprime surtout…",opts:["Des faits historiques","Des sentiments personnels intimes","Une critique sociale directe","Une description objective"],ans:1,expl:"Lyrisme = « je » poétique, émotions, subjectivité."},
  {cat:"Registres & tonalités",q:"La catharsis (Aristote) désigne…",opts:["La faute du héros","La purification des passions du spectateur","Le dénouement comique","L'ironie"],ans:1,expl:"Terreur + pitié → libération émotionnelle chez le spectateur."},
  {cat:"Registres & tonalités",q:"Le fantastique selon Todorov repose sur…",opts:["La certitude surnaturelle","L'hésitation entre rationnel et surnaturel","L'humour","La fatalité"],ans:1,expl:"Hésitation du lecteur/personnage — ni merveilleux pur ni étrange expliqué."},
  {cat:"Registres & tonalités",q:"Les Fables de La Fontaine relèvent surtout du registre…",opts:["Épique","Didactique","Tragique","Fantastique"],ans:1,expl:"Plaire et instruire — morale explicite ou implicite."},
  {cat:"Registres & tonalités",q:"Le registre polémique se distingue du satirique car il…",opts:["Ne vise pas à convaincre","Attaque directement et argumentativement","Use toujours du rire","Est réservé au théâtre"],ans:1,expl:"Polémique = argumentation frontale (Zola, J'accuse…)."},
  {cat:"Registres & tonalités",q:"Le burlesque traite…",opts:["Un sujet grave avec solennité","Un sujet noble avec un style bas","Uniquement la nature","Des émotions intimes"],ans:1,expl:"Contraste comique entre sujet élevé et style trivial."},
  {cat:"Registres & tonalités",q:"« Heureux qui, comme Ulysse… » (Du Bellay) est surtout…",opts:["Épique","Élégiaque","Satirique","Didactique"],ans:1,expl:"Plainte mélancolique, nostalgie du pays natal."},

  /* ── Syntaxe & lexique — Bloc 3 ── */
  {cat:"Syntaxe & lexique",q:"Une phrase nominale…",opts:["Contient deux verbes","Ne contient pas de verbe conjugué","Est toujours interrogative","Utilise ne…pas"],ans:1,expl:"Phrase nominale : pas de verbe conjugué (« Silence. Puis, une porte. »)."},
  {cat:"Syntaxe & lexique",q:"La polysyndète multiplie…",opts:["Les métaphores","Les conjonctions","Les sujets","Les rimes"],ans:1,expl:"« Et… et… et… » — accumulation oppressante."},
  {cat:"Syntaxe & lexique",q:"Un champ lexical regroupe…",opts:["Les sens d'un mot","Les mots d'un même thème dans un texte","Les synonymes du dictionnaire","Les figures sonores"],ans:1,expl:"Sélection thématique construite par la lecture."},
  {cat:"Syntaxe & lexique",q:"La connotation, c'est…",opts:["Le sens du dictionnaire","Le sens subjectif ou culturel d'un mot","Sa fonction grammaticale","Sa rime"],ans:1,expl:"Connotation = sens implicite (« serpent » = trahison)."},
  {cat:"Syntaxe & lexique",q:"Un modalisateur sert à…",opts:["Décrire un lieu","Nuancer la certitude de l'énonciateur","Créer une rime","Accélérer le récit"],ans:1,expl:"« Probablement », « il semble que »…"},
  {cat:"Syntaxe & lexique",q:"La question rhétorique…",opts:["Attend une réponse précise","Renforce une idée sans attendre de réponse","Interpelle un personnage","Introduit une subordonnée"],ans:1,expl:"Question à réponse évidente — implication du lecteur."},
  {cat:"Syntaxe & lexique",q:"La dénotation correspond au…",opts:["Sens culturel","Sens littéral objectif","Registre familier","Champ lexical"],ans:1,expl:"Dénotation = sens premier, neutre, dictionnaire."},
  {cat:"Syntaxe & lexique",q:"« Et le vent, et la pluie, et la nuit… » — quel procédé ?",opts:["Anaphore","Polysyndète","Litote","Hyperbole"],ans:1,expl:"Répétition de la conjonction « et »."},
  {cat:"Syntaxe & lexique",q:"Le registre soutenu se reconnaît à…",opts:["L'argot","Un vocabulaire précis et une syntaxe élaborée","Des phrases d'un mot","L'absence de connecteurs"],ans:1,expl:"Écrit du bac = registre soutenu, jamais familier."},

  /* ── Méthode commentaire — Bloc 3 ── */
  {cat:"Méthode commentaire",q:"IPCI signifie…",opts:["Introduction, Plan, Corps, Interprétation","Idée, Procédé, Citation, Interprétation","Image, Phrase, Contexte, Ironie","Intention, Procédé, Conclusion, Impact"],ans:1,expl:"Structure minimale d'un paragraphe d'analyse."},
  {cat:"Méthode commentaire",q:"Le plan chronologique est à éviter car…",opts:["Il est trop court","Il devient une paraphrase déguisée","Il est interdit au bac","Il n'utilise pas de citations"],ans:1,expl:"Analyser ligne par ligne ≠ construire des axes thématiques."},
  {cat:"Méthode commentaire",q:"La conclusion doit contenir…",opts:["De nouveaux procédés","Un bilan + une ouverture","Un résumé du texte entier","Une nouvelle problématique"],ans:1,expl:"Bilan des axes + ouverture vers une perspective plus large."},
  {cat:"Méthode commentaire",q:"La paraphrase consiste à…",opts:["Citer avec guillemets","Raconter le texte sans analyser","Nommer les procédés","Construire un plan"],ans:1,expl:"Faute majeure : reformuler sans interpréter."},
  {cat:"Méthode commentaire",q:"Une bonne problématique est…",opts:["Une question fermée oui/non","Une question ouverte sur le fonctionnement du texte","Le titre reformulé","Une liste de procédés"],ans:1,expl:"Problématique = vrai débat intellectuel ouvert."},
  {cat:"Méthode commentaire",q:"L'introduction comprend classiquement…",opts:["Plan puis citation","Présentation, situation, problématique, annonce du plan","Registre puis thème","Citation longue puis résumé"],ans:1,expl:"Quatre temps structurés — concision recommandée."},
  {cat:"Méthode commentaire",q:"Une citation efficace doit être…",opts:["La plus longue possible","Courte, précise, entre guillemets","Paraphrasée","Toujours en début de devoir"],ans:1,expl:"Citation ciblée + numéro de vers/ligne si possible."},
  {cat:"Méthode commentaire",q:"La transition entre axes doit…",opts:["Résumer tout le devoir","Faire le lien logique entre parties","Introduire un auteur nouveau","Remplacer la conclusion"],ans:1,expl:"Bilan de l'axe précédent + annonce du suivant."},
  {cat:"Méthode commentaire",q:"Varier les niveaux d'analyse permet de…",opts:["Allonger artificiellement","Montrer la richesse du texte (lexical, syntaxique, stylistique…)","Éviter les citations","Remplacer la problématique"],ans:1,expl:"Lexique, syntaxe, figures, rythme, énonciation…"},
  {cat:"Méthode commentaire",q:"L'ouverture en conclusion ne doit pas…",opts:["Mentionner une autre œuvre","Introduire un élément non préparé","Être concise","Faire référence à un mouvement"],ans:1,expl:"La conclusion clôt — pas de nouveau sujet."},

  /* ── Dissertation — Bloc 3 ── */
  {cat:"Dissertation",q:"La thèse en dissertation, c'est…",opts:["Le sujet recopié","La position défendue face à la question","La conclusion","L'accroche"],ans:1,expl:"Thèse = prise de position argumentée."},
  {cat:"Dissertation",q:"Le plan dialectique suit…",opts:["3 thèmes parallèles","Thèse / antithèse / synthèse","Chronologie des auteurs","Genre par genre"],ans:1,expl:"Défendre, nuancer, dépasser la contradiction."},
  {cat:"Dissertation",q:"Paraphraser les œuvres en dissertation…",opts:["Est recommandé","Est une erreur majeure","Remplace l'argumentation","Suffit pour illustrer"],ans:1,expl:"Argumenter AVEC les œuvres, ne pas les raconter."},
  {cat:"Dissertation",q:"Un exemple en dissertation doit être…",opts:["Long et détaillé sans analyse","Précis et analysé en lien avec l'argument","Uniquement une citation","Absent si la thèse est claire"],ans:1,expl:"Argument → exemple → analyse → lien avec la thèse."},
  {cat:"Dissertation",q:"La synthèse dialectique consiste à…",opts:["Résumer thèse et antithèse","Dépasser la contradiction par une vision plus nuancée","Choisir l'antithèse","Oublier la thèse"],ans:1,expl:"Synthèse ≠ simple résumé — dépassement intellectuel."},
  {cat:"Dissertation",q:"L'accroche efficace peut être…",opts:["Le sujet recopié","Citation, paradoxe ou fait culturel lié au thème","Le plan détaillé","Une paraphrase"],ans:1,expl:"Capte l'attention — ouvre sur le débat."},
  {cat:"Dissertation",q:"« On peut se demander dans quelle mesure… » sert à…",opts:["Annoncer le plan","Formuler une problématique ouverte","Citer une œuvre","Conclure"],ans:1,expl:"Formule élégante de problématisation."},
  {cat:"Dissertation",q:"La transition en dissertation doit…",opts:["Lister les œuvres","Relier logiquement deux parties","Remplacer la conclusion","Paraphraser la partie I"],ans:1,expl:"Mini-bilan + pivot vers la partie suivante."},
  {cat:"Dissertation",q:"Minimum d'œuvres à mobiliser au bac…",opts:["1 suffit","2-3 dont programme + lecture personnelle","10 obligatoires","Aucune"],ans:1,expl:"Programme + culture personnelle = crédibilité."},
  {cat:"Dissertation",q:"L'ouverture en conclusion élargit vers…",opts:["Un nouveau plan complet","Une question voisine ou un autre domaine","Le résumé du sujet","Une citation longue"],ans:1,expl:"Pont vers art, époque, autre œuvre — sans tout rouvrir."},

  /* ── Connecteurs — Bloc 3 ── */
  {cat:"Connecteurs & Style",q:"« De plus », « en outre » expriment…",opts:["Opposition","Addition / renforcement","Cause","Concession"],ans:1,expl:"Connecteurs d'addition."},
  {cat:"Connecteurs & Style",q:"« Certes… mais » exprime…",opts:["Addition","Concession","Illustration","Conclusion"],ans:1,expl:"Concession : admettre un point pour mieux le dépasser."},
  {cat:"Connecteurs & Style",q:"« Donc », « ainsi », « par conséquent »…",opts:["Opposition","Conséquence / conclusion","Illustration","Concession"],ans:1,expl:"Connecteurs de conséquence."},
  {cat:"Connecteurs & Style",q:"« En revanche », « au contraire »…",opts:["Addition","Opposition directe","Cause","Reformulation"],ans:1,expl:"Connecteurs d'opposition."},
  {cat:"Connecteurs & Style",q:"« En effet », « car », « puisque » introduisent…",opts:["Une illustration","Une explication / cause","Une conclusion","Une concession"],ans:1,expl:"Justification logique."},
  {cat:"Connecteurs & Style",q:"« En d'autres termes » sert à…",opts:["Conclure","Reformuler / préciser","S'opposer","Illustrer"],ans:1,expl:"Reformulation du propos."},
  {cat:"Connecteurs & Style",q:"« Or » logique sert à…",opts:["Ajouter","Introduire un fait contraire inattendu","Illustrer","Conclure brièvement"],ans:1,expl:"Pivot dialectique : contredit la certitude précédente."},
  {cat:"Connecteurs & Style",q:"Registre adapté à l'écrit du bac…",opts:["Familier","Soutenu","Argotique","Oral spontané"],ans:1,expl:"Vocabulaire précis, syntaxe complexe, connecteurs élaborés."},
  {cat:"Connecteurs & Style",q:"Pour introduire un exemple on peut dire…",opts:["« Mais »","« Ainsi, dans… » / « C'est le cas de… »","« Donc »","« Cependant »"],ans:1,expl:"Formules d'illustration argumentée."},
  {cat:"Connecteurs & Style",q:"Annoncer un plan en 3 parties : formule élégante…",opts:["« Premièrement, deuxièmement… »","« Dans un premier temps… Puis… Enfin… »","« Il y a 3 parties »","Pas d'annonce"],ans:1,expl:"Fluidité et clarté pour le correcteur."},
];

const GRAM_QCM_EXTRA = [
  /* ── Propositions — Bloc 3 ── */
  {cat:"Les Propositions",q:"Une proposition se définit par…",opts:["Un nom propre","Un verbe conjugué","Une conjonction","Un adjectif"],ans:1,expl:"Groupe de mots construit autour d'un verbe conjugué."},
  {cat:"Les Propositions",q:"Phrase simple = …",opts:["2 verbes","1 verbe conjugué","1 subordonnée","2 principales"],ans:1,expl:"Une seule proposition indépendante."},
  {cat:"Les Propositions",q:"La PSR est introduite par…",opts:["Que","Un pronom relatif","Si","Parce que"],ans:1,expl:"Qui, que, dont, où, lequel…"},
  {cat:"Les Propositions",q:"La PSC complète surtout…",opts:["Un nom","Un verbe","Un adverbe","Une interjection"],ans:1,expl:"Complétive = complément du verbe (COD, sujet, etc.)."},
  {cat:"Les Propositions",q:"« Parce que » introduit une circonstancielle de…",opts:["But","Cause","Temps","Opposition"],ans:1,expl:"Cause : explique pourquoi."},
  {cat:"Les Propositions",q:"« Pour que » introduit une circonstancielle de…",opts:["Conséquence","But","Comparaison","Condition"],ans:1,expl:"But : objectif visé (+ subjonctif)."},
  {cat:"Les Propositions",q:"« Bien que » introduit une…",opts:["Cause","Concession","Condition","Conséquence"],ans:1,expl:"Concession : contradiction entre deux faits (+ subjonctif)."},
  {cat:"Les Propositions",q:"Relative explicative se distingue car elle…",opts:["Est indispensable","Est entre virgules, facultative","Utilise toujours dont","Est toujours en début"],ans:1,expl:"Précision ajoutée sans restreindre le sens."},
  {cat:"Les Propositions",q:"MAIS OU ET DONC OR NI CAR liste…",opts:["Les pronoms relatifs","Les conjonctions de coordination","Les subordonnants","Les modes"],ans:1,expl:"Mnémotechnique des 7 coordinations."},
  {cat:"Les Propositions",q:"« Si » introduit souvent une circonstancielle de…",opts:["Temps","Condition","Cause","But"],ans:1,expl:"Condition : hypothèse (+ indicatif en français standard)."},

  /* ── Propositions suite — Bloc 3 ── */
  {cat:"Les Propositions (suite)",q:"La participiale contient…",opts:["Un pronom relatif","Un participe sans subordonnant","Que obligatoire","Un impératif"],ans:1,expl:"Participe passé/présent, séparé par ponctuation."},
  {cat:"Les Propositions (suite)",q:"L'incise sert à…",opts:["Compléter un nom","Rapporter paroles/pensées insérées","Exprimer la cause seule","Remplacer une relative"],ans:1,expl:"« dit-il », « pensait-elle »…"},
  {cat:"Les Propositions (suite)",q:"Complétive infinitive : « J'entends chanter » — chanter est…",opts:["COD du verbe entendre","Sujet de entendre","Relative","Incise"],ans:0,expl:"Verbe de perception + infinitif sans « que »."},
  {cat:"Les Propositions (suite)",q:"Interrogative indirecte : « Je me demande pourquoi… » complète…",opts:["Un adjectif","Un verbe de questionnement","Un nom","Une préposition"],ans:1,expl:"Transposition d'une question directe."},
  {cat:"Les Propositions (suite)",q:"Principale ≠ indépendante car la principale…",opts:["Existe seule","Est liée à une subordonnée","N'a pas de verbe","Est toujours courte"],ans:1,expl:"La principale ne peut pas tenir seule sans sa subordonnée."},

  /* ── Négation — Bloc 3 ── */
  {cat:"La Négation",q:"Le discordantiel de la négation syntaxique est…",opts:["Pas","Ne (ou n')","Jamais","Sans"],ans:1,expl:"Ne initie l'impulsion négative."},
  {cat:"La Négation",q:"Ne…pas est une négation…",opts:["Partielle","Totale","Explétive","Lexicale"],ans:1,expl:"Nie complètement l'action."},
  {cat:"La Négation",q:"Ne…que exprime…",opts:["Une négation totale","Une restriction (= seulement)","Une crainte","Un préfixe"],ans:1,expl:"Pseudo-négation : affirmation partielle."},
  {cat:"La Négation",q:"Ne explétif : « J'ai peur qu'il ne vienne » — le ne…",opts:["Nie réellement","N'a pas de valeur négative réelle","Remplace pas","Est familier"],ans:1,expl:"Après crainte, comparaison, avant que (soutenu)."},
  {cat:"La Négation",q:"Négation lexicale par préfixe : exemple…",opts:["Il ne vient pas","Immoral","Personne","Ne…jamais"],ans:1,expl:"Préfixe privatif sur le mot (im-, in-, dé-…)."},
  {cat:"La Négation",q:"« Sans effort » illustre une négation…",opts:["Syntaxique totale","Lexicale par préposition","Explétive","Partielle ne…plus"],ans:1,expl:"Sans = négation lexicale."},
  {cat:"La Négation",q:"Forclusif pronom : …",opts:["Jamais","Personne","Plus","Point"],ans:1,expl:"Personne, rien, aucun… selon la nature grammaticale."},
  {cat:"La Négation",q:"« Il ne voit plus jamais personne » combine…",opts:["Deux négations totales","Plusieurs forclusifs","Ne seul","Antonymie seule"],ans:1,expl:"Cumul de forclusifs renforçant la négation."},
  {cat:"La Négation",q:"Antonymie = négation lexicale par…",opts:["Préfixe","Mot de sens opposé","Ne…pas","Prétérition"],ans:1,expl:"Aimer ↔ haïr : nier par le contraire."},
  {cat:"La Négation",q:"À l'oral familier, le ne est souvent…",opts:["Renforcé","Omis","Doublé","Remplacé par pas seul parfois"],ans:3,expl:"Chute du ne à l'oral — forclusif seul parfois suffisant."},

  /* ── Modes — Bloc 3 ── */
  {cat:"Les Modes",q:"Mode du réel et de la certitude…",opts:["Subjonctif","Indicatif","Impératif","Gérondif"],ans:1,expl:"Indicatif = faits établis."},
  {cat:"Les Modes",q:"Après « il faut que », on emploie…",opts:["Indicatif","Subjonctif","Conditionnel","Infinitif seul"],ans:1,expl:"Nécessité → subjonctif."},
  {cat:"Les Modes",q:"Conditionnel : « Si j'avais su, j'aurais… » = condition…",opts:["Réalisable","Irréalisable au passé","Certaine","Impérative"],ans:1,expl:"Si + plus-que-parfait → conditionnel passé."},
  {cat:"Les Modes",q:"Impératif sert à…",opts:["Douter","Ordre, conseil, défense","Décrire un fait","Hypothétiser"],ans:1,expl:"Viens ! Ne partez pas !"},
  {cat:"Les Modes",q:"Gérondif = … + participe présent",opts:["À","En","Pour","De"],ans:1,expl:"En travaillant, en courant…"},
  {cat:"Les Modes",q:"« Après qu'il est parti » → mode…",opts:["Subjonctif","Indicatif","Conditionnel","Impératif"],ans:1,expl:"Après que + indicatif (≠ avant que + subjonctif)."},
  {cat:"Les Modes",q:"« Bien que » exige le…",opts:["Indicatif","Subjonctif","Conditionnel","Participe seul"],ans:1,expl:"Concession → subjonctif."},
  {cat:"Les Modes",q:"Participe présent est…",opts:["Variable comme l'adjectif","Invariable","Toujours sujet","Un mode personnel"],ans:1,expl:"Tomber, tombant — invariable (≠ adjectif verbal accordé)."},
  {cat:"Les Modes",q:"Infinitif peut être sujet : …",opts:["Il part.","Lire est un plaisir.","Que je parte.","Lis !"],ans:1,expl:"Mode impersonnel utilisé comme nom."},
  {cat:"Les Modes",q:"« Il se peut que » → …",opts:["Indicatif","Subjonctif (incertitude)","Impératif","Gérondif"],ans:1,expl:"Incertitude → subjonctif. Certitude → indicatif."},

  /* ── Voix — Bloc 3 ── */
  {cat:"La Voix",q:"Voix passive : le sujet…",opts:["Fait l'action","Subit l'action","Est toujours absent","Est un pronom"],ans:1,expl:"Être + participe passé — patient grammatical."},
  {cat:"La Voix",q:"Passif se forme avec…",opts:["Avoir + participe","Être + participe passé accordé","Se + infinitif","Faire + infinitif"],ans:1,expl:"La lettre est écrite par Marie."},
  {cat:"La Voix",q:"Complément d'agent introduit par…",opts:["À","Par ou de","En","Sans"],ans:1,expl:"Par (courant) ou de (sentiments)."},
  {cat:"La Voix",q:"« Il se lave » = pronominale…",opts:["Réciproque","Réfléchie","Passive","Lexicale"],ans:1,expl:"Sujet agit sur lui-même."},
  {cat:"La Voix",q:"« Ils se regardent » = pronominale…",opts:["Réfléchie","Réciproque","Passive","Lexicale"],ans:1,expl:"Action mutuelle entre sujets."},
  {cat:"La Voix",q:"« Ce livre se lit facilement » = pronominale…",opts:["Réfléchie","À sens passif","Réciproque","Lexicale"],ans:1,expl:"= peut être lu facilement."},
  {cat:"La Voix",q:"Passif possible seulement si le verbe est…",opts:["Intransitif","Transitif direct (avec COD)","Impersonnel","Réfléchi"],ans:1,expl:"COD → sujet du passif."},
  {cat:"La Voix",q:"Effet stylistique du passif : souvent…",opts:["Mettre l'agent en avant","Mettre en valeur le patient / effacer l'agent","Accélérer","Ironiser"],ans:1,expl:"Utile en sciences, presse, littérature."},
  {cat:"La Voix",q:"« Marie aime Pierre » → passif correct…",opts:["Pierre est aimé par Marie","Marie est aimée par Pierre","Pierre aime Marie","Marie s'aime"],ans:0,expl:"COD devient sujet ; sujet actif → agent."},
  {cat:"La Voix",q:"Verbe essentiellement pronominal : …",opts:["Se laver (optionnel)","S'évanouir (pas de forme active)","Manger","Écrire"],ans:1,expl:"Pas de forme non pronominale active."},
];

if (typeof PROC_QCM !== 'undefined') PROC_QCM.push(...PROC_QCM_EXTRA);
if (typeof GRAM_QCM !== 'undefined') GRAM_QCM.push(...GRAM_QCM_EXTRA);
