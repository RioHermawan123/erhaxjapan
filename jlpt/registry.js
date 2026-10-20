// ===== Registry JLPT Test =====
// Data trial test JLPT dipisah per level & per bagian (section).
// Setiap level punya 4 bagian: kanji, vocab, grammar, reading.
//
// Format data:
//   kanji  : { k: "一", r: "いち", alt: ["ひと"], m: "satu" }
//   vocab  : { h: "がっこう", r: "gakkou", m: "sekolah" }
//   grammar: { p: "〜てもいいですか。", ex: "…", ask: "…", options: [...], answer: 0, note: "…" }
//   reading: { title: "…", text: "…", questions: [{ q, options, answer, note }] }

window.JLPTRegistry = (function () {
  const levels = {};

  function addLevel(id, meta) {
    // merge: data yang sudah ada tidak dihapus, supaya addLevel bisa
    // dipanggil kapan saja (mis. untuk metadata level) tanpa merusak bank soal
    const prev = levels[id] || {};
    levels[id] = {
      id,
      label: meta.label || prev.label || id.toUpperCase(),
      desc: meta.desc || prev.desc || "",
      icon: meta.icon || prev.icon || "📘",
      order: typeof meta.order === "number"
        ? meta.order
        : (typeof prev.order === "number" ? prev.order : 99),
      kanji: prev.kanji || [],
      vocab: prev.vocab || [],
      grammar: prev.grammar || [],
      reading: prev.reading || []
    };
  }

  function level(id) {
    if (!levels[id]) addLevel(id, {});
    return levels[id];
  }

  function addKanji(id, items) { level(id).kanji.push(...items); }
  function addVocab(id, items) { level(id).vocab.push(...items); }
  function addGrammar(id, items) { level(id).grammar.push(...items); }
  function addReading(id, items) { level(id).reading.push(...items); }

  function get(id) { return levels[id] || null; }
  function all() {
    return Object.values(levels).sort((a, b) => a.order - b.order);
  }

  function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  function pickDistractors(pool, count, exclude) {
    const used = new Set(exclude);
    const out = [];
    let guard = 0;
    while (out.length < count && guard < 500) {
      guard++;
      const cand = pool[Math.floor(Math.random() * pool.length)];
      if (!cand || used.has(cand)) continue;
      used.add(cand);
      out.push(cand);
    }
    return out;
  }

  function buildKanjiQuestion(item, pool) {
    const readingPool = pool.map((k) => k.r);
    const alt = item.alt || [];
    const opts = shuffle([item.r, ...pickDistractors(readingPool, 3, [item.r, ...alt])]);
    return {
      kind: "kanji",
      section: "kanji",
      prompt: item.k,
      promptHtml: `<span class="jlpt-kanji">${item.k}</span>`,
      sub: "Apa pembacaan (on / kun) dari kanji ini?",
      speak: item.k,
      options: opts,
      answer: opts.indexOf(item.r),
      explain: `${item.k} = ${item.r} (${item.m})`
    };
  }

  function buildVocabQuestion(item, pool) {
    const meaningPool = pool.map((v) => v.m);
    const opts = shuffle([item.m, ...pickDistractors(meaningPool, 3, [item.m])]);
    return {
      kind: "vocab",
      section: "vocab",
      prompt: `${item.h} (${item.r})`,
      sub: "Apa arti kata ini?",
      speak: item.h,
      options: opts,
      answer: opts.indexOf(item.m),
      explain: `${item.h} (${item.r}) = ${item.m}`
    };
  }

  function buildGrammarQuestion(item) {
    return {
      kind: "grammar",
      section: "grammar",
      prompt: item.p,
      promptHtml: `<span class="jlpt-pattern">${item.p}</span>`,
      sub: [item.ex, item.ask].filter(Boolean).join(" "),
      speak: item.p,
      options: item.options,
      answer: item.answer,
      explain: item.note || ""
    };
  }

  function buildReadingQuestions(passage) {
    return (passage.questions || []).map((q) => ({
      kind: "reading",
      section: "reading",
      prompt: passage.title || "Bacaan",
      promptHtml: `<span class="jlpt-passage-title">${passage.title || ""}</span>`,
      context: passage.text,
      sub: q.q,
      speak: passage.text,
      options: q.options,
      answer: q.answer,
      explain: q.note || ""
    }));
  }

  // sections: array id section yang diaktifkan
  // perSection: jumlah soal per bagian (0 = semua)
  function buildQuestions(levelId, sections, perSection) {
    const L = get(levelId);
    if (!L) return [];
    const questions = [];

    if (sections.includes("kanji") && L.kanji.length) {
      const picked = perSection ? shuffle(L.kanji).slice(0, perSection) : L.kanji;
      picked.forEach((k) => questions.push(buildKanjiQuestion(k, L.kanji)));
    }
    if (sections.includes("vocab") && L.vocab.length) {
      const picked = perSection ? shuffle(L.vocab).slice(0, perSection) : L.vocab;
      picked.forEach((v) => questions.push(buildVocabQuestion(v, L.vocab)));
    }
    if (sections.includes("grammar") && L.grammar.length) {
      const picked = perSection ? shuffle(L.grammar).slice(0, perSection) : L.grammar;
      picked.forEach((g) => questions.push(buildGrammarQuestion(g)));
    }
    if (sections.includes("reading") && L.reading.length) {
      // Batas jumlah soal berlaku pada jumlah pertanyaan (bukan jumlah teks)
      const readingQuestions = [];
      shuffle(L.reading).forEach((p) => readingQuestions.push(...buildReadingQuestions(p)));
      const picked = perSection ? readingQuestions.slice(0, perSection) : readingQuestions;
      questions.push(...picked);
    }

    return questions;
  }

  function countBySection(levelId, sections) {
    const L = get(levelId);
    if (!L) return { kanji: 0, vocab: 0, grammar: 0, reading: 0 };
    const out = { kanji: 0, vocab: 0, grammar: 0, reading: 0 };
    if (sections.includes("kanji")) out.kanji = L.kanji.length;
    if (sections.includes("vocab")) out.vocab = L.vocab.length;
    if (sections.includes("grammar")) out.grammar = L.grammar.length;
    if (sections.includes("reading")) out.reading = L.reading.length;
    return out;
  }

  return {
    addLevel, addKanji, addVocab, addGrammar, addReading,
    get, all, buildQuestions, countBySection, shuffle
  };
})();
