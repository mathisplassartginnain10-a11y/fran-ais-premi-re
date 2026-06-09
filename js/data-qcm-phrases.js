/* ═══════════════════════════════════════════════════
   data-qcm-phrases.js — QCM analyse de phrases (réf. Corpus)
   ═══════════════════════════════════════════════════ */

(function() {
  function _shuf(a) { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }
  function _norm(s) {
    return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim();
  }
  function _mkQ(cat, q, correct, wrong, expl, ref) {
    const seen = new Set();
    const opts = [];
    const add = (text) => {
      const t = String(text ?? '').trim();
      const k = _norm(t);
      if (!k || seen.has(k)) return;
      seen.add(k);
      opts.push(t);
    };
    add(correct);
    wrong.forEach(w => { if (opts.length < 4) add(w); });
    if (opts.length < 4) return null;
    const shuffled = _shuf(opts.slice(0, 4));
    const ans = shuffled.findIndex(o => _norm(o) === _norm(correct));
    if (ans < 0) return null;
    const item = { cat, q, opts: shuffled, ans, expl };
    if (ref) item.ref = ref;
    return item;
  }
  function _link(id) { return ' 📖 Réponse documentée dans le Corpus <button type="button" class="corpus-inline-btn" onclick="openCorpusRef(\'' + id + '\')">' + id + '</button>.'; }

  const _phraseQcm = [
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Les sanglots longs / Des violons / De l'automne » — Quelle analyse est correcte ?",
    "opts": [
      "Enjambement",
      "Rime plate",
      "Allitération en [l]",
      "Assonance en [ɔ̃]"
    ],
    "ans": 3,
    "expl": "L'assonance en [ɔ̃] relie « sanglots », « longs », « violons », « automne ». Cette répétition vocale imite la plainte des violons et installe la mélancolie automnale caractéristique de Verlaine.",
    "ref": "CP-001"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Les sanglots longs / Des violons / De l'automne » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Assonance",
      "Allitération en [l]",
      "Assonance en [ɔ̃]",
      "Rime plate"
    ],
    "ans": 0,
    "expl": "Procédé : Assonance. L'assonance en [ɔ̃] relie « sanglots », « longs », « violons », « automne ». Cette répétition vocale imite la plainte des violons et installe la mélancolie automnale caractéristique de Verlaine.",
    "ref": "CP-001"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Va, je ne te hais point. » — Quelle analyse est correcte ?",
    "opts": [
      "Euphémisme",
      "Antiphrase",
      "Ironie",
      "Litote"
    ],
    "ans": 3,
    "expl": "La litote dit moins pour faire entendre plus : « ne te hais point » signifie en réalité « je t'aime profondément ». Chimène masque sa passion par retenue tragique.",
    "ref": "CP-002"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Rome, l'unique objet de mon ressentiment ! / Rome, à qui vient ton bras… » — Quelle analyse est correcte ?",
    "opts": [
      "Anaphore",
      "Épiphore",
      "Gradation",
      "Chiasme"
    ],
    "ans": 0,
    "expl": "Répétition de « Rome » en tête de vers (anaphore). Camille martèle sa haine contre la ville qui lui a pris Curiace — effet d'incantation et d'emportement.",
    "ref": "CP-003"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Pour qui sont ces serpents qui sifflent sur vos têtes ? » — Quelle analyse est correcte ?",
    "opts": [
      "Allitération en [s]",
      "Onomatopée seule",
      "Rime riche",
      "Assonance en [i]"
    ],
    "ans": 0,
    "expl": "Allitération en [s] : « sont », « serpents », « sifflent », « sur ». La consonne siflante imite le bruit des serpents — procédé d'harmonie imitative.",
    "ref": "CP-004"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Pour qui sont ces serpents qui sifflent sur vos têtes ? » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Allitération en [s]",
      "Onomatopée seule",
      "Assonance en [i]",
      "Allitération"
    ],
    "ans": 3,
    "expl": "Procédé : Allitération. Allitération en [s] : « sont », « serpents », « sifflent », « sur ». La consonne siflante imite le bruit des serpents — procédé d'harmonie imitative.",
    "ref": "CP-004"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« La Nature est un temple où de vivants piliers / Laissent parfois sortir de confuses paroles » — Quelle analyse est correcte ?",
    "opts": [
      "Allégorie développée",
      "Personnification seule",
      "Comparaison avec comme",
      "Métaphore"
    ],
    "ans": 3,
    "expl": "Comparaison implicite sans outil : la Nature = un temple. Les piliers vivants = arbres. Baudelaire transforme le paysage en lieu sacré habité d'une présence mystérieuse.",
    "ref": "CP-005"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Cette obscure clarté qui tombe des étoiles » — Quelle analyse est correcte ?",
    "opts": [
      "Oxymore",
      "Paradoxe seul",
      "Périphrase",
      "Antithèse"
    ],
    "ans": 0,
    "expl": "Oxymore : « obscure » et « clarté » s'opposent dans un même groupe nominal. La nuit est à la fois éclairée par les étoiles et insuffisante pour voir — ambiguïté tragique.",
    "ref": "CP-006"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Il souffrit, agonisa, mourut. » — Quelle analyse est correcte ?",
    "opts": [
      "Énumération",
      "Gradation ascendante",
      "Accumulation sans ordre",
      "Polysyndète"
    ],
    "ans": 1,
    "expl": "Gradation ascendante : souffrir → agoniser → mourir. Rythme sec qui précipite la fin tragique.",
    "ref": "CP-007"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Il souffrit, agonisa, mourut. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Gradation ascendante",
      "Énumération",
      "Gradation",
      "Accumulation sans ordre"
    ],
    "ans": 2,
    "expl": "Procédé : Gradation. Gradation ascendante : souffrir → agoniser → mourir. Rythme sec qui précipite la fin tragique.",
    "ref": "CP-007"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Il prit son chapeau et congé. » — Quelle analyse est correcte ?",
    "opts": [
      "Épanorthose",
      "Zeugme",
      "Chiasme",
      "Synecdoque"
    ],
    "ans": 1,
    "expl": "Zeugme : le verbe « prit » relie deux compléments hétérogènes — objet concret (chapeau) et abstraction (congé). Effet de surprise par décalage sémantique.",
    "ref": "CP-008"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Femmes, moinillon, enfants, tout passa » — Quelle analyse est correcte ?",
    "opts": [
      "Gradation",
      "Anaphore",
      "Polysyndète",
      "Accumulation"
    ],
    "ans": 3,
    "expl": "Accumulation : énumération d'éléments sans gradation d'intensité. Rythme rapide qui suggère l'universalité de la mort.",
    "ref": "CP-009"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Et la palme de la victoire / Où la vertu le conduisait » — Quelle analyse est correcte ?",
    "opts": [
      "Hyperbole",
      "Comparaison",
      "Allégorie seule",
      "Métaphore"
    ],
    "ans": 3,
    "expl": "« Palme de la victoire » = métaphore de la gloire militaire. La vertu est personnifiée comme guide — registre épique et moralisateur.",
    "ref": "CP-010"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Il y a un trou de verdure où chante une rivière » — Quelle analyse est correcte ?",
    "opts": [
      "Personnification",
      "Métaphore seule",
      "Hyperbole",
      "Allégorie"
    ],
    "ans": 0,
    "expl": "La rivière « chante » — personnification qui dote la nature d'une voix humaine. Le paysage devient vivant et harmonieux avant la révélation tragique.",
    "ref": "CP-011"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Ô lac ! Ange un an plus tôt, à ta rive en fleurs » — Quelle analyse est correcte ?",
    "opts": [
      "Anaphore",
      "Interrogation rhétorique",
      "Métaphore",
      "Apostrophe"
    ],
    "ans": 3,
    "expl": "Apostrophe : le poète s'adresse directement au lac (« Ô lac ! »). Procédé lyrique qui exprime la nostalgie amoureuse et l'évocation du passé.",
    "ref": "CP-012"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« J'ai perdu ma force et ma vie / Et mes amis et ma gaieté » — Quelle analyse est correcte ?",
    "opts": [
      "Anaphore seule",
      "Oxymore",
      "Chiasme",
      "Énumération + gradation"
    ],
    "ans": 3,
    "expl": "Énumération des pertes (force, vie, amis, gaieté) avec structure parallèle. Le registre élégiaque traduit la déchéance du personnage de Rolla.",
    "ref": "CP-013"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« J'ai perdu ma force et ma vie / Et mes amis et ma gaieté » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Anaphore seule",
      "Énumération",
      "Énumération + gradation",
      "Chiasme"
    ],
    "ans": 1,
    "expl": "Procédé : Énumération. Énumération des pertes (force, vie, amis, gaieté) avec structure parallèle. Le registre élégiaque traduit la déchéance du personnage de Rolla.",
    "ref": "CP-013"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Demain, dès l'aube, à l'heure où blanchit la campagne » — Quelle analyse est correcte ?",
    "opts": [
      "Rime embrassée",
      "Anaphore temporelle",
      "Gradation",
      "Enjambement"
    ],
    "ans": 1,
    "expl": "Répétition de « demain » et des marqueurs temporels. L'anaphore structure le poème autour du pèlerinage vers la tombe de la fille — registre élégiaque.",
    "ref": "CP-014"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Demain, dès l'aube, à l'heure où blanchit la campagne » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Rime embrassée",
      "Anaphore temporelle",
      "Enjambement",
      "Anaphore"
    ],
    "ans": 3,
    "expl": "Procédé : Anaphore. Répétition de « demain » et des marqueurs temporels. L'anaphore structure le poème autour du pèlerinage vers la tombe de la fille — registre élégiaque.",
    "ref": "CP-014"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Sous le pont Mirabeau coule la Seine / Et nos amours » — Quelle analyse est correcte ?",
    "opts": [
      "Hyperbole",
      "Personnification seule",
      "Comparaison avec comme",
      "Comparaison implicite (métaphore)"
    ],
    "ans": 3,
    "expl": "Parallélisme et métaphore : les amours « coulent » comme la Seine. Le fleuve devient image du temps et de l'amour qui passe — registre mélancolique.",
    "ref": "CP-015"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Sous le pont Mirabeau coule la Seine / Et nos amours » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Comparaison avec comme",
      "Métaphore",
      "Personnification seule",
      "Comparaison implicite (métaphore)"
    ],
    "ans": 1,
    "expl": "Procédé : Métaphore. Parallélisme et métaphore : les amours « coulent » comme la Seine. Le fleuve devient image du temps et de l'amour qui passe — registre mélancolique.",
    "ref": "CP-015"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« C'est Vénus tout entière à sa proie attachée » — Quelle analyse est correcte ?",
    "opts": [
      "Hyperbole",
      "Allégorie simple",
      "Comparaison",
      "Métaphore filée"
    ],
    "ans": 3,
    "expl": "Métaphore filée : Phèdre = proie, Vénus/désir = chasseur. L'amour devient prédation — registre tragique, fatalité passionnelle.",
    "ref": "CP-016"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« De la musique avant toute chose » — Quelle analyse est correcte ?",
    "opts": [
      "Gradation",
      "Chiasme",
      "Anaphore + impératif",
      "Oxymore"
    ],
    "ans": 2,
    "expl": "Anaphore de la musicalité dans le poème même. Verlaine théorise la poésie musicale — le son prime sur le sens.",
    "ref": "CP-017"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« De la musique avant toute chose » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Anaphore",
      "Chiasme",
      "Anaphore + impératif",
      "Gradation"
    ],
    "ans": 0,
    "expl": "Procédé : Anaphore. Anaphore de la musicalité dans le poème même. Verlaine théorise la poésie musicale — le son prime sur le sens.",
    "ref": "CP-017"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Le Poète est semblable au prince des nuées / Qui hante la tempête et se rit de l'archer » — Quelle analyse est correcte ?",
    "opts": [
      "Comparaison développée",
      "Personnification",
      "Allégorie seule",
      "Métaphore simple"
    ],
    "ans": 0,
    "expl": "Comparaison explicite (semblable) entre le poète et l'albatros. L'oiseau majestueux en mer, grotesque à terre = métaphore du génie incompris.",
    "ref": "CP-018"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Le Poète est semblable au prince des nuées / Qui hante la tempête et se rit de l'archer » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Allégorie seule",
      "Métaphore simple",
      "Comparaison",
      "Comparaison développée"
    ],
    "ans": 2,
    "expl": "Procédé : Comparaison. Comparaison explicite (semblable) entre le poète et l'albatros. L'oiseau majestueux en mer, grotesque à terre = métaphore du génie incompris.",
    "ref": "CP-018"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« A noir, E blanc, I rouge, U vert, O bleu : voyelles » — Quelle analyse est correcte ?",
    "opts": [
      "Gradation",
      "Symbolisme des voyelles",
      "Allitération",
      "Anaphore"
    ],
    "ans": 1,
    "expl": "Attribution de couleurs aux voyelles — synesthie et symbolisme. Rimbaud invente un système poétique où la lettre devient couleur et sensation.",
    "ref": "CP-019"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« A noir, E blanc, I rouge, U vert, O bleu : voyelles » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Anaphore",
      "Allitération",
      "Symbolisme des voyelles",
      "Symbolisme"
    ],
    "ans": 3,
    "expl": "Procédé : Symbolisme. Attribution de couleurs aux voyelles — synesthie et symbolisme. Rimbaud invente un système poétique où la lettre devient couleur et sensation.",
    "ref": "CP-019"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Les blés dorés comme une barbe / Et les champs étaient verts comme un ciel d'avril » — Quelle analyse est correcte ?",
    "opts": [
      "Comparaison (comme)",
      "Métaphore",
      "Personnification",
      "Hyperbole"
    ],
    "ans": 0,
    "expl": "Double comparaison avec « comme » : blés/barbe, champs/ciel. Registre épique et biblique — nature prospère autour de Booz.",
    "ref": "CP-020"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Les blés dorés comme une barbe / Et les champs étaient verts comme un ciel d'avril » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Comparaison (comme)",
      "Personnification",
      "Métaphore",
      "Comparaison"
    ],
    "ans": 3,
    "expl": "Procédé : Comparaison. Double comparaison avec « comme » : blés/barbe, champs/ciel. Registre épique et biblique — nature prospère autour de Booz.",
    "ref": "CP-020"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Elle avait lu Paul et Virginie, et rêvait de petits chapeaux de paludiers. » — Quelle analyse est correcte ?",
    "opts": [
      "Référence intertextuelle",
      "Allégorie",
      "Anaphore",
      "Métaphore"
    ],
    "ans": 0,
    "expl": "Référence à Bernardin de Saint-Pierre. Les lectures sentimentales nourrissent les rêves d'Emma — procédé narratif de caractérisation par la culture.",
    "ref": "CP-021"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Elle avait lu Paul et Virginie, et rêvait de petits chapeaux de paludiers. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Métaphore",
      "Référence intertextuelle",
      "Allégorie",
      "Intertextualité"
    ],
    "ans": 3,
    "expl": "Procédé : Intertextualité. Référence à Bernardin de Saint-Pierre. Les lectures sentimentales nourrissent les rêves d'Emma — procédé narratif de caractérisation par la culture.",
    "ref": "CP-021"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Aujourd'hui, maman est morte. Ou peut-être hier, je ne sais pas. » — Quelle analyse est correcte ?",
    "opts": [
      "Gradation",
      "Anaphore",
      "Parataxe + indifférence narrative",
      "Hypotaxe"
    ],
    "ans": 2,
    "expl": "Parataxe : phrases courtes juxtaposées sans subordination. Le registre plat traduit l'indifférence de Meursault — style comme thème.",
    "ref": "CP-022"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Aujourd'hui, maman est morte. Ou peut-être hier, je ne sais pas. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Hypotaxe",
      "Parataxe",
      "Anaphore",
      "Parataxe + indifférence narrative"
    ],
    "ans": 1,
    "expl": "Procédé : Parataxe. Parataxe : phrases courtes juxtaposées sans subordination. Le registre plat traduit l'indifférence de Meursault — style comme thème.",
    "ref": "CP-022"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Longtemps, je me suis couché de bonne heure. » — Quelle analyse est correcte ?",
    "opts": [
      "Chiasme",
      "Oxymore",
      "Incise temporelle + hypnose narrative",
      "Parataxe"
    ],
    "ans": 2,
    "expl": "« Longtemps » ouvre une durée indéfinie. La phrase initiale de la Recherche installe le flux de la mémoire involontaire — rythme hypnotique.",
    "ref": "CP-023"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Longtemps, je me suis couché de bonne heure. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Parataxe",
      "Anaphore temporelle",
      "Incise temporelle + hypnose narrative",
      "Chiasme"
    ],
    "ans": 1,
    "expl": "Procédé : Anaphore temporelle. « Longtemps » ouvre une durée indéfinie. La phrase initiale de la Recherche installe le flux de la mémoire involontaire — rythme hypnotique.",
    "ref": "CP-023"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Le pauvre homme ! Il croyait rêver encore ! » — Quelle analyse est correcte ?",
    "opts": [
      "Registre tragique",
      "Registre épique",
      "Registre comique / ironie",
      "Registre pathétique"
    ],
    "ans": 2,
    "expl": "Dom Juan feint d'être pénitent — le spectateur sait la supercherie. Ironie dramatique et registre comique caractéristiques du personnage.",
    "ref": "CP-024"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Le pauvre homme ! Il croyait rêver encore ! » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Ironie dramatique",
      "Registre tragique",
      "Registre épique",
      "Registre comique / ironie"
    ],
    "ans": 0,
    "expl": "Procédé : Ironie dramatique. Dom Juan feint d'être pénitent — le spectateur sait la supercherie. Ironie dramatique et registre comique caractéristiques du personnage.",
    "ref": "CP-024"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Dans un mois, dans un an, que pourrai-je dire ? » — Quelle analyse est correcte ?",
    "opts": [
      "Registre comique",
      "Registre satirique",
      "Registre pathétique / élégiaque",
      "Registre épique"
    ],
    "ans": 2,
    "expl": "Interrogation rhétorique traduisant l'impuissance face à l'avenir. Registre pathétique de la séparation — amour impossible de Titus et Bérénice.",
    "ref": "CP-025"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Dans un mois, dans un an, que pourrai-je dire ? » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Registre comique",
      "Registre satirique",
      "Interrogation rhétorique",
      "Registre pathétique / élégiaque"
    ],
    "ans": 2,
    "expl": "Procédé : Interrogation rhétorique. Interrogation rhétorique traduisant l'impuissance face à l'avenir. Registre pathétique de la séparation — amour impossible de Titus et Bérénice.",
    "ref": "CP-025"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« L'enfer, c'est les autres. » — Quelle analyse est correcte ?",
    "opts": [
      "Phrase nominale + antithèse",
      "Gradation",
      "Litote",
      "Parataxe"
    ],
    "ans": 0,
    "expl": "Phrase nominale sans verbe conjugué principal. Antithèse entre l'attente d'un enfer matériel et la réalité relationnelle — registre philosophique.",
    "ref": "CP-026"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« L'enfer, c'est les autres. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Antithèse",
      "Parataxe",
      "Phrase nominale + antithèse",
      "Gradation"
    ],
    "ans": 0,
    "expl": "Procédé : Antithèse. Phrase nominale sans verbe conjugué principal. Antithèse entre l'attente d'un enfer matériel et la réalité relationnelle — registre philosophique.",
    "ref": "CP-026"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Ça vous retourne les tripes. » — Quelle analyse est correcte ?",
    "opts": [
      "Registre soutenu",
      "Registre familier / argot",
      "Registre lyrique",
      "Registre tragique"
    ],
    "ans": 1,
    "expl": "Lexique familier (« tripes ») et syntaxe orale. Registre populaire caractéristique de Céline — rupture avec le style soutenu classique.",
    "ref": "CP-027"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Ça vous retourne les tripes. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Registre populaire",
      "Registre lyrique",
      "Registre familier / argot",
      "Registre soutenu"
    ],
    "ans": 0,
    "expl": "Procédé : Registre populaire. Lexique familier (« tripes ») et syntaxe orale. Registre populaire caractéristique de Céline — rupture avec le style soutenu classique.",
    "ref": "CP-027"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« La modération est l'effroi des médiocres. » — Quelle analyse est correcte ?",
    "opts": [
      "Gradation",
      "Oxymore",
      "Antithèse",
      "Litote"
    ],
    "ans": 2,
    "expl": "Opposition modération/médiocres — antithèse dans la maxime. La Rochefoucauld renverse le sens commun avec concision.",
    "ref": "CP-028"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Tout est pour le mieux dans le meilleur des mondes possibles. » — Quelle analyse est correcte ?",
    "opts": [
      "Gradation",
      "Euphémisme",
      "Ironie / antiphrase",
      "Litote"
    ],
    "ans": 2,
    "expl": "Antiphrase : Pangloss affirme l'optimisme alors que les catastrophes s'accumulent. Voltaire dénonce la philosophie Leibniz par ironie.",
    "ref": "CP-029"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Tout est pour le mieux dans le meilleur des mondes possibles. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Euphémisme",
      "Litote",
      "Antiphrase",
      "Ironie / antiphrase"
    ],
    "ans": 2,
    "expl": "Procédé : Antiphrase. Antiphrase : Pangloss affirme l'optimisme alors que les catastrophes s'accumulent. Voltaire dénonce la philosophie Leibniz par ironie.",
    "ref": "CP-029"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Soleil qui meurs et qui renais chaque jour » — Quelle analyse est correcte ?",
    "opts": [
      "Zeugme",
      "Paradoxe / oxymore temporel",
      "Gradation",
      "Litote"
    ],
    "ans": 1,
    "expl": "Paradoxe : mourir et renaître chaque jour. Le soleil incarne l'amour périssable et renouvelé — registre lyrique pétrarquiste.",
    "ref": "CP-030"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Soleil qui meurs et qui renais chaque jour » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Gradation",
      "Litote",
      "Paradoxe",
      "Paradoxe / oxymore temporel"
    ],
    "ans": 2,
    "expl": "Procédé : Paradoxe. Paradoxe : mourir et renaître chaque jour. Le soleil incarne l'amour périssable et renouvelé — registre lyrique pétrarquiste.",
    "ref": "CP-030"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Je regarde le chat qui court sur le toit. » — Quelle analyse est correcte ?",
    "opts": [
      "COD de regarder",
      "Circonstancielle de lieu",
      "PSR complément de l'antécédent",
      "Complétive"
    ],
    "ans": 2,
    "expl": "Proposition subordonnée relative introduite par « qui ». Fonction : complément de l'antécédent « le chat ». Le pronom relatif « qui » est sujet de « court ».",
    "ref": "CP-031"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Je regarde le chat qui court sur le toit. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Circonstancielle de lieu",
      "PSR complément de l'antécédent",
      "COD de regarder",
      "Subordonnée relative"
    ],
    "ans": 3,
    "expl": "Procédé : Subordonnée relative. Proposition subordonnée relative introduite par « qui ». Fonction : complément de l'antécédent « le chat ». Le pronom relatif « qui » est sujet de « court ».",
    "ref": "CP-031"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« J'écoute une chanson et je danse. » — Quelle analyse est correcte ?",
    "opts": [
      "Propositions coordonnées",
      "Propositions juxtaposées",
      "Relative",
      "Complétive"
    ],
    "ans": 0,
    "expl": "Deux propositions indépendantes liées par la conjonction de coordination « et » (coordination). Deux verbes conjugués = phrase complexe par coordination.",
    "ref": "CP-032"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« J'écoute une chanson et je danse. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Relative",
      "Coordination",
      "Propositions coordonnées",
      "Propositions juxtaposées"
    ],
    "ans": 1,
    "expl": "Procédé : Coordination. Deux propositions indépendantes liées par la conjonction de coordination « et » (coordination). Deux verbes conjugués = phrase complexe par coordination.",
    "ref": "CP-032"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Je pense qu'il est déjà tard. » — Quelle analyse est correcte ?",
    "opts": [
      "Circonstancielle de temps",
      "Relative",
      "Indépendante",
      "Complétive COD de penser"
    ],
    "ans": 3,
    "expl": "Proposition subordonnée complétive introduite par « que ». Fonction : COD du verbe « pense ». C'est le contenu de la pensée.",
    "ref": "CP-033"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Je pense qu'il est déjà tard. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Complétive COD de penser",
      "Circonstancielle de temps",
      "Subordonnée complétive",
      "Relative"
    ],
    "ans": 2,
    "expl": "Procédé : Subordonnée complétive. Proposition subordonnée complétive introduite par « que ». Fonction : COD du verbe « pense ». C'est le contenu de la pensée.",
    "ref": "CP-033"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Bien que tu n'aies pas étudié, tu as eu une bonne note. » — Quelle analyse est correcte ?",
    "opts": [
      "Circonstancielle de concession",
      "Complétive",
      "Relative",
      "Circonstancielle de cause"
    ],
    "ans": 0,
    "expl": "Subordonnée circonstancielle de concession introduite par « bien que » (+ subjonctif). Indique une opposition entre l'étude et la réussite.",
    "ref": "CP-034"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Bien que tu n'aies pas étudié, tu as eu une bonne note. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Circonstancielle de concession",
      "Relative",
      "Subordonnée circonstancielle",
      "Circonstancielle de cause"
    ],
    "ans": 2,
    "expl": "Procédé : Subordonnée circonstancielle. Subordonnée circonstancielle de concession introduite par « bien que » (+ subjonctif). Indique une opposition entre l'étude et la réussite.",
    "ref": "CP-034"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Je fais du sport parce que c'est bon pour la santé. » — Quelle analyse est correcte ?",
    "opts": [
      "Relative",
      "Circonstancielle de cause",
      "Conséquence",
      "Circonstancielle de but"
    ],
    "ans": 1,
    "expl": "Subordonnée circonstancielle de cause introduite par « parce que ». Explique la raison de « je fais du sport ».",
    "ref": "CP-035"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Je fais du sport parce que c'est bon pour la santé. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Circonstancielle de but",
      "Conséquence",
      "Circonstancielle de cause",
      "Subordonnée circonstancielle"
    ],
    "ans": 3,
    "expl": "Procédé : Subordonnée circonstancielle. Subordonnée circonstancielle de cause introduite par « parce que ». Explique la raison de « je fais du sport ».",
    "ref": "CP-035"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Il doit travailler dur s'il veut réussir. » — Quelle analyse est correcte ?",
    "opts": [
      "Cause",
      "Circonstancielle de temps",
      "But",
      "Circonstancielle de condition"
    ],
    "ans": 3,
    "expl": "Subordonnée circonstancielle de condition introduite par « si ». La réussite dépend du travail — structure conditionnelle.",
    "ref": "CP-036"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Il doit travailler dur s'il veut réussir. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Subordonnée circonstancielle",
      "Circonstancielle de temps",
      "Cause",
      "Circonstancielle de condition"
    ],
    "ans": 0,
    "expl": "Procédé : Subordonnée circonstancielle. Subordonnée circonstancielle de condition introduite par « si ». La réussite dépend du travail — structure conditionnelle.",
    "ref": "CP-036"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Que tu aies arrêté le sport me désole. » — Quelle analyse est correcte ?",
    "opts": [
      "Relative",
      "Circonstancielle",
      "COD de désole",
      "Complétive sujet de désole"
    ],
    "ans": 3,
    "expl": "Complétive en tête de phrase, sujet du verbe « désole ». Introduite par « que » + subjonctif passé.",
    "ref": "CP-037"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Que tu aies arrêté le sport me désole. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Relative",
      "Complétive sujet de désole",
      "COD de désole",
      "Subordonnée complétive"
    ],
    "ans": 3,
    "expl": "Procédé : Subordonnée complétive. Complétive en tête de phrase, sujet du verbe « désole ». Introduite par « que » + subjonctif passé.",
    "ref": "CP-037"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Mon souhait est que tu viennes. » — Quelle analyse est correcte ?",
    "opts": [
      "Complétive attribut du sujet",
      "Relative",
      "Circonstancielle de but",
      "COD de est"
    ],
    "ans": 0,
    "expl": "Complétive attribut du sujet « mon souhait ». Le verbe « est » est copule ; « que tu viennes » précise le souhait.",
    "ref": "CP-038"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Mon souhait est que tu viennes. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Relative",
      "Subordonnée complétive",
      "COD de est",
      "Complétive attribut du sujet"
    ],
    "ans": 1,
    "expl": "Procédé : Subordonnée complétive. Complétive attribut du sujet « mon souhait ». Le verbe « est » est copule ; « que tu viennes » précise le souhait.",
    "ref": "CP-038"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Je n'ai jamais rien dit à personne. » — Quelle analyse est correcte ?",
    "opts": [
      "Négation partielle",
      "Double négation incorrecte",
      "Litote",
      "Triple négation (jamais, rien, personne)"
    ],
    "ans": 3,
    "expl": "Trois marqueurs négatifs : ne…jamais, rien, personne. La négation est totale et absolue — aucune exception.",
    "ref": "CP-039"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Je n'ai jamais rien dit à personne. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Négation totale",
      "Négation partielle",
      "Triple négation (jamais, rien, personne)",
      "Litote"
    ],
    "ans": 0,
    "expl": "Procédé : Négation totale. Trois marqueurs négatifs : ne…jamais, rien, personne. La négation est totale et absolue — aucune exception.",
    "ref": "CP-039"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Ce n'est pas méchant. » — Quelle analyse est correcte ?",
    "opts": [
      "Litote (négation atténuante)",
      "Antiphrase",
      "Négation totale",
      "Hyperbole"
    ],
    "ans": 0,
    "expl": "Litote grammaticale : « pas méchant » = plutôt gentil. Dire moins pour suggérer plus — atténuation du reproche.",
    "ref": "CP-040"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Ce n'est pas méchant. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Négation totale",
      "Antiphrase",
      "Litote (négation atténuante)",
      "Litote"
    ],
    "ans": 3,
    "expl": "Procédé : Litote. Litote grammaticale : « pas méchant » = plutôt gentil. Dire moins pour suggérer plus — atténuation du reproche.",
    "ref": "CP-040"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Je lui donne des conseils pour qu'il réussisse. » — Quelle analyse est correcte ?",
    "opts": [
      "Indicatif",
      "Subjonctif après pour que (but)",
      "Conditionnel",
      "Impératif"
    ],
    "ans": 1,
    "expl": "Après « pour que » (but), le verbe est au subjonctif : « réussisse ». Circonstancielle de but + mode du subjonctif.",
    "ref": "CP-041"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Je lui donne des conseils pour qu'il réussisse. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Subjonctif présent",
      "Conditionnel",
      "Subjonctif après pour que (but)",
      "Indicatif"
    ],
    "ans": 0,
    "expl": "Procédé : Subjonctif présent. Après « pour que » (but), le verbe est au subjonctif : « réussisse ». Circonstancielle de but + mode du subjonctif.",
    "ref": "CP-041"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Il faut que tu viennes demain. » — Quelle analyse est correcte ?",
    "opts": [
      "Impératif",
      "Indicatif futur",
      "Conditionnel",
      "Subjonctif après il faut que"
    ],
    "ans": 3,
    "expl": "Locution impersonnelle « il faut que » + subjonctif « viennes ». Le subjonctif marque la nécessité ou l'obligation.",
    "ref": "CP-042"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Il faut que tu viennes demain. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Conditionnel",
      "Subjonctif après il faut que",
      "Subjonctif présent",
      "Indicatif futur"
    ],
    "ans": 2,
    "expl": "Procédé : Subjonctif présent. Locution impersonnelle « il faut que » + subjonctif « viennes ». Le subjonctif marque la nécessité ou l'obligation.",
    "ref": "CP-042"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Si j'avais su, je serais venu. » — Quelle analyse est correcte ?",
    "opts": [
      "Imparfait + conditionnel présent",
      "Subjonctif",
      "Présent + futur",
      "Plus-que-parfait + conditionnel passé"
    ],
    "ans": 3,
    "expl": "Hypothèse irréelle du passé : si + plus-que-parfait, conditionnel passé à la principale. Action impossible dans le passé.",
    "ref": "CP-043"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Si j'avais su, je serais venu. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Imparfait + conditionnel présent",
      "Présent + futur",
      "Conditionnel passé",
      "Plus-que-parfait + conditionnel passé"
    ],
    "ans": 2,
    "expl": "Procédé : Conditionnel passé. Hypothèse irréelle du passé : si + plus-que-parfait, conditionnel passé à la principale. Action impossible dans le passé.",
    "ref": "CP-043"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Viens ici tout de suite ! » — Quelle analyse est correcte ?",
    "opts": [
      "Impératif présent",
      "Indicatif",
      "Conditionnel",
      "Subjonctif"
    ],
    "ans": 0,
    "expl": "Impératif présent 2e personne singulier « viens ». Mode de l'ordre ou de l'injonction — valeur modale impérative.",
    "ref": "CP-044"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Viens ici tout de suite ! » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Impératif présent",
      "Indicatif",
      "Subjonctif",
      "Impératif"
    ],
    "ans": 3,
    "expl": "Procédé : Impératif. Impératif présent 2e personne singulier « viens ». Mode de l'ordre ou de l'injonction — valeur modale impérative.",
    "ref": "CP-044"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Le gateau a été mangé par les enfants. » — Quelle analyse est correcte ?",
    "opts": [
      "Voix pronominale réfléchie",
      "Voix active",
      "Voix passive",
      "Voix pronominale réciproque"
    ],
    "ans": 2,
    "expl": "Voix passive : le sujet « le gâteau » subit l'action. Auxiliaire « être » + participe passé « mangé » + agent « par les enfants ».",
    "ref": "CP-045"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Le gateau a été mangé par les enfants. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Voix active",
      "Voix passive",
      "Passive",
      "Voix pronominale réfléchie"
    ],
    "ans": 2,
    "expl": "Procédé : Passive. Voix passive : le sujet « le gâteau » subit l'action. Auxiliaire « être » + participe passé « mangé » + agent « par les enfants ».",
    "ref": "CP-045"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Il se lave les mains. » — Quelle analyse est correcte ?",
    "opts": [
      "Pronominale réciproque",
      "Voix passive",
      "Voix pronominale réfléchie",
      "Pronominale passive"
    ],
    "ans": 2,
    "expl": "Pronom réfléchi « se » = le sujet accomplit l'action sur lui-même. Voix pronominale réfléchie (pas passive).",
    "ref": "CP-046"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Il se lave les mains. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Pronominale réfléchie",
      "Pronominale passive",
      "Voix pronominale réfléchie",
      "Voix passive"
    ],
    "ans": 0,
    "expl": "Procédé : Pronominale réfléchie. Pronom réfléchi « se » = le sujet accomplit l'action sur lui-même. Voix pronominale réfléchie (pas passive).",
    "ref": "CP-046"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Ils se sont regardés longtemps. » — Quelle analyse est correcte ?",
    "opts": [
      "Réfléchie",
      "Voix pronominale réciproque",
      "Active",
      "Passive"
    ],
    "ans": 1,
    "expl": "« Se » avec sujet pluriel = action réciproque : ils se regardent mutuellement. Voix pronominale réciproque.",
    "ref": "CP-047"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "gram",
    "q": "« Ils se sont regardés longtemps. » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Voix pronominale réciproque",
      "Passive",
      "Pronominale réciproque",
      "Réfléchie"
    ],
    "ans": 2,
    "expl": "Procédé : Pronominale réciproque. « Se » avec sujet pluriel = action réciproque : ils se regardent mutuellement. Voix pronominale réciproque.",
    "ref": "CP-047"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« La terre est bleue comme une orange » — Quelle analyse est correcte ?",
    "opts": [
      "Métaphore simple",
      "Oxymore seul",
      "Comparaison surréaliste",
      "Litote"
    ],
    "ans": 2,
    "expl": "Comparaison avec « comme » mais associant terre/bleue et orange — décalage surréaliste. Éluard brouille les correspondances habituelles.",
    "ref": "CP-048"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« La terre est bleue comme une orange » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Oxymore seul",
      "Métaphore simple",
      "Comparaison surréaliste",
      "Comparaison"
    ],
    "ans": 3,
    "expl": "Procédé : Comparaison. Comparaison avec « comme » mais associant terre/bleue et orange — décalage surréaliste. Éluard brouille les correspondances habituelles.",
    "ref": "CP-048"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Il pleure dans mon cœur / Comme il pleut sur la ville » — Quelle analyse est correcte ?",
    "opts": [
      "Hyperbole",
      "Comparaison + parallélisme",
      "Anaphore seule",
      "Métaphore"
    ],
    "ans": 1,
    "expl": "Comparaison « comme » entre larmes intérieures et pluie sur la ville. Parallélisme des vers renforce l'uniformité triste.",
    "ref": "CP-049"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Il pleure dans mon cœur / Comme il pleut sur la ville » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Comparaison + parallélisme",
      "Anaphore seule",
      "Métaphore",
      "Comparaison"
    ],
    "ans": 3,
    "expl": "Procédé : Comparaison. Comparaison « comme » entre larmes intérieures et pluie sur la ville. Parallélisme des vers renforce l'uniformité triste.",
    "ref": "CP-049"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Liberté / J'écris ton nom » — Quelle analyse est correcte ?",
    "opts": [
      "Apostrophe + anaphore",
      "Gradation",
      "Litote",
      "Métaphore"
    ],
    "ans": 0,
    "expl": "Apostrophe à la Liberté personnifiée. Poème de la Résistance — le nom « Liberté » devient cri poétique et politique.",
    "ref": "CP-050"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Liberté / J'écris ton nom » — Quel procédé ou notion est identifié ?",
    "opts": [
      "Litote",
      "Apostrophe + anaphore",
      "Apostrophe",
      "Métaphore"
    ],
    "ans": 2,
    "expl": "Procédé : Apostrophe. Apostrophe à la Liberté personnifiée. Poème de la Résistance — le nom « Liberté » devient cri poétique et politique.",
    "ref": "CP-050"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Un silence de mort régnait. » — Quelle analyse est correcte ?",
    "opts": [
      "Gradation",
      "Parataxe",
      "Personnification",
      "Litote"
    ],
    "ans": 2,
    "expl": "Le silence « règne » — personnification.",
    "ref": "CP-051"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« La mer monte, la mer monte. » — Quelle analyse est correcte ?",
    "opts": [
      "Parataxe",
      "Anaphore",
      "Litote",
      "Gradation"
    ],
    "ans": 1,
    "expl": "Répétition de « la mer monte » en tête.",
    "ref": "CP-052"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Je suis le ténébreux, le veuf, l'inconsolé. » — Quelle analyse est correcte ?",
    "opts": [
      "Litote",
      "Énumération + anaphore",
      "Gradation",
      "Parataxe"
    ],
    "ans": 1,
    "expl": "Triple qualificatif en énumération.",
    "ref": "CP-053"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Nos bras usés ne peuvent plus porter le poids du monde. » — Quelle analyse est correcte ?",
    "opts": [
      "Parataxe",
      "Litote",
      "Gradation",
      "Métaphore"
    ],
    "ans": 3,
    "expl": "Le « poids du monde » = métaphore du fardeau existentiel.",
    "ref": "CP-054"
  },
  {
    "cat": "Analyse de phrase",
    "mat": "proc",
    "q": "« Rien ne se perd, rien ne se crée, tout se transforme. » — Quelle analyse est correcte ?",
    "opts": [
      "Parataxe",
      "Parallélisme + antithèse",
      "Gradation",
      "Litote"
    ],
    "ans": 1,
    "expl": "Structure parallèle négative puis positive.",
    "ref": "CP-055"
  }
];

  _phraseQcm.forEach(item => {
    if (item.mat === 'gram') GRAM_QCM.push(item);
    else PROC_QCM.push(item);
  });

  if (typeof EXERCICES !== 'undefined') {
    EXERCICES.forEach(ex => {
      const ref = 'EX-' + ex.id;
      const q = {
        cat: 'Analyse de phrase',
        q: (ex.text.replace(/\n/g, ' ').slice(0, 120) + (ex.text.length > 120 ? '…' : '')) + ' — ' + ex.q,
        opts: _shuf([...ex.opts]),
        ans: 0,
        expl: ex.expl,
        ref: ref,
      };
      q.ans = q.opts.indexOf(ex.opts[ex.ans]);
      PROC_QCM.push(q);
    });
  }
})();
