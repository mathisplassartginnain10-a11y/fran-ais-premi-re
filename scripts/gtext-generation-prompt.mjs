/**
 * Prompt de génération / remplacement des grands textes (GT).
 * Utilisé par generate-bac-textes.mjs, clean-generic-gtexts.mjs et tout flux LLM futur.
 */

export const GTEXT_GENERATION_PROMPT = `Tu enrichis la banque de grands textes du bac de français (Première).

CONTRAINTES DE CONTENU

- Programme français de Première : auteurs et œuvres au programme, extraits authentiques ou
  reconstitués fidèlement (jamais de placeholder générique du type « invite à une lecture
  attentive des procédés »).
- Chaque entrée : id GT-xxx, titre, auteur, oeuvre (avec date), genre, diff (1-3), texte
  (extrait substantiel 400-1200 caractères sauf poésie courte), contexte (1-2 phrases),
  attendus (3 objets : procede, citation entre « », interpretation, keywords).
- Citations dans attendus : sous-chaînes EXACTES du champ texte.
- Genres variés : poésie, théâtre, roman/récit, fable, argumentation, correspondance, etc.
- Pas de doublon thématique évident avec une entrée existante (même auteur + même passage).

ADDENDUM — OUVERTURE À LA LITTÉRATURE MONDIALE (TRADUITE)

En plus des auteurs francophones, intègre aussi des extraits d'œuvres étrangères
MAJEURES, mais UNIQUEMENT en TRADUCTION FRANÇAISE (jamais en langue originale) — le
programme de Première autorise les références à des œuvres étrangères en
"littérature comparée"/ouverture culturelle, et ça enrichit les axes de comparaison
dans les conclusions.

Règles spécifiques à ces entrées :
- Le champ texte doit être le texte FRANÇAIS (traduction publiée), jamais en VO.
- Le champ oeuvre doit préciser la traduction si pertinent, ex. :
  oeuvre: "Crime et Châtiment (1866, trad. française)"
- N'utilise que des œuvres dont la TRADUCTION FRANÇAISE est elle-même dans le domaine
  public (traducteur mort depuis +70 ans) OU dont tu peux citer un extrait très court
  (quelques phrases, usage pédagogique/citation) sans reproduire un chapitre entier —
  privilégie dans le doute des extraits courts (200-500 caractères) pour ces œuvres
  traduites, par prudence sur les droits.
- Auteurs/œuvres possibles selon le genre concerné par l'extrait :
  · Roman/récit : Dostoïevski, Tolstoï, Kafka, Cervantès (Don Quichotte), Goethe
    (Werther), Dickens, Steinbeck, Garcia Márquez (extraits courts), Shakespeare
    (passages narratifs/sonnets).
  · Théâtre : Shakespeare (Hamlet, Macbeth — traductions anciennes du domaine public,
    ex. François-Victor Hugo), Tchekhov, Ibsen, Brecht (extraits courts).
  · Poésie : Whitman, Pessoa, Neruda, Rilke, Poe (Le Corbeau, trad. Mallarmé/Baudelaire
    — domaine public), Li Bai / Du Fu (poésie classique chinoise traduite), poésie
    arabe classique, etc.
  · Idées/argumentation : Sénèque, Marc Aurèle, Cicéron (traductions anciennes),
    textes philosophiques traduits (Kant, Nietzsche — extraits très courts par prudence).

Objectif indicatif : qu'environ 15 à 20 % des NOUVELLES entrées ajoutées (cas b du
prompt précédent) proviennent de cette littérature mondiale traduite, le reste restant
centré sur le programme français de Première. N'en fais PAS la majorité — l'essentiel
de l'épreuve porte sur le programme français.

FORMAT DE SORTIE

JSON array d'objets { id, titre, auteur, oeuvre, genre, diff, texte, contexte, attendus }.
`;

/** Partie CONTRAINTES DE CONTENU seule (pour inclusion dans d'autres prompts). */
export const GTEXT_CONTENT_CONSTRAINTS = GTEXT_GENERATION_PROMPT.match(
  /CONTRAINTES DE CONTENU[\s\S]*?(?=\nFORMAT DE SORTIE)/
)?.[0]?.trim() || '';
