// ===== Engine JLPT Test =====
// Tab baru "JLPT Test": kartu level N5..N1, lalu trial test per level.
// Data soal diambil dari window.JLPTRegistry (lihat jlpt/registry.js).

const JLPT_LEVELS = [
  { id: "n5", label: "JLPT N5", icon: "🌱", desc: "Pemula", locked: false },
  { id: "n4", label: "JLPT N4", icon: "🌿", desc: "Dasar", locked: true },
  { id: "n3", label: "JLPT N3", icon: "⛰️", desc: "Menengah", locked: true },
  { id: "n2", label: "JLPT N2", icon: "🏔️", desc: "Lanjutan", locked: true },
  { id: "n1", label: "JLPT N1", icon: "👑", desc: "Puncak", locked: true }
];

const JLPT_SECTIONS = [
  {
    id: "kanji",
    label: "漢字読み",
    name: "Baca Kanji",
    icon: "🈶",
    desc: "Mencoba cara baca kanji (on / kun), misal 一 → いち"
  },
  {
    id: "vocab",
    label: "語彙",
    name: "Arti Kosakata",
    icon: "📖",
    desc: "Menerjemahkan kata/konsep ke bahasa Indonesia, misal 学校 = sekolah"
  },
  {
    id: "grammar",
    label: "文法・表現",
    name: "Pola Kalimat",
    icon: "🧩",
    desc: "Menentukan pola kalimat yang benar, misal 〜てもいいですか"
  },
  {
    id: "reading",
    label: "読解",
    name: "Bacaan Pendek",
    icon: "📄",
    desc: "Membaca teks pendek lalu menjawab pertanyaan tentang teks itu"
  }
];

const jlptState = {
  level: "n5",
  sections: { kanji: true, vocab: true, grammar: true, reading: true },
  perSection: 0, // 0 = semua soal yang tersedia
  questions: [],
  index: 0,
  results: [],
  score: 0,
  streak: 0,
  bestStreak: 0,
  answered: false
};

function jlptSectionMeta(id) {
  return JLPT_SECTIONS.find((s) => s.id === id) || { label: id, icon: "📘" };
}

// expose state untuk debugging di console
window.jlptState = jlptState;

function jlptActiveSectionIds() {
  return JLPT_SECTIONS.filter((s) => jlptState.sections[s.id]).map((s) => s.id);
}

function jlptLevelInfo(id) {
  return JLPT_LEVELS.find((l) => l.id === id) || null;
}

// Berapa banyak soal yang tersedia per bagian (untuk ditampilkan di setup)
function jlptSectionStats(levelId) {
  const L = window.JLPTRegistry ? JLPTRegistry.get(levelId) : null;
  const stats = {};
  JLPT_SECTIONS.forEach((s) => {
    if (!L) {
      stats[s.id] = { questions: 0, items: 0, note: "belum ada data" };
      return;
    }
    if (s.id === "reading") {
      const qCount = L.reading.reduce(
        (acc, p) => acc + (p.questions ? p.questions.length : 0),
        0
      );
      stats[s.id] = {
        questions: qCount,
        items: L.reading.length,
        note: `${L.reading.length} bacaan / ${qCount} soal`
      };
      return;
    }
    const list = L[s.id] || [];
    stats[s.id] = {
      questions: list.length,
      items: list.length,
      note: `${list.length} ${s.id === "kanji" ? "kanji" : s.id === "vocab" ? "kosakata" : "pola grammar"}`
    };
  });
  return stats;
}

// ---------- Kartu level ----------
function renderJlptLevels() {
  const grid = document.getElementById("jlptLevelGrid");
  if (!grid) return;
  grid.innerHTML = "";

  JLPT_LEVELS.forEach((lv) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "jlpt-level-btn" + (lv.locked ? " locked" : "");

    const meta = document.createElement("span");
    meta.className = "jll-icon";
    meta.textContent = lv.locked ? "🔒" : lv.icon;

    const text = document.createElement("span");
    text.className = "jll-text";
    const title = document.createElement("span");
    title.className = "jll-title";
    title.textContent = lv.label;
    const sub = document.createElement("span");
    sub.className = "jll-sub";
    sub.textContent = lv.locked ? "Segera hadir" : `Trial Test • ${lv.desc}`;
    text.appendChild(title);
    text.appendChild(sub);

    const badge = document.createElement("span");
    badge.className = "jll-badge";
    badge.textContent = lv.locked ? "Coming soon" : "Mulai";

    btn.appendChild(meta);
    btn.appendChild(text);
    btn.appendChild(badge);

    if (!lv.locked) {
      btn.onclick = () => openJlptSetup(lv.id);
    } else {
      btn.disabled = true;
    }
    grid.appendChild(btn);
  });
}

// ---------- Setup ----------
function openJlptSetup(levelId) {
  jlptState.level = levelId;
  jlptState.sections = { kanji: true, vocab: true, grammar: true, reading: true };
  jlptState.perSection = 0;
  jlptState.questions = [];
  jlptState.results = [];
  jlptState.index = 0;
  jlptState.score = 0;
  jlptState.streak = 0;
  jlptState.bestStreak = 0;

  const lv = jlptLevelInfo(levelId);
  const titleEl = document.getElementById("jlptSetupTitle");
  if (titleEl) titleEl.textContent = `Trial Test ${lv ? lv.label : levelId.toUpperCase()}`;

  renderJlptSetup();
  openTabView("jlpt", "jlptSetup");
}

function renderJlptSetup() {
  const stats = jlptSectionStats(jlptState.level);

  const pills = document.getElementById("jlptSectionPills");
  if (pills) {
    pills.innerHTML = "";
    JLPT_SECTIONS.forEach((sec) => {
      const st = stats[sec.id] || { questions: 0, note: "-" };

      const label = document.createElement("label");
      label.className = "checkbox-pill jlpt-pill";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = !!jlptState.sections[sec.id];
      input.onchange = () => toggleJlptSection(sec.id);

      const badge = document.createElement("span");
      badge.className = "pill-badge";

      const jp = document.createElement("span");
      jp.className = "jp-pill-title";
      jp.textContent = `${sec.icon} ${sec.label}`;

      const name = document.createElement("span");
      name.className = "jp-pill-name";
      name.textContent = sec.name;

      const desc = document.createElement("span");
      desc.className = "jp-pill-desc";
      desc.textContent = sec.desc;

      const count = document.createElement("span");
      count.className = "jp-pill-count";
      count.textContent = `📚 ${st.note}`;

      badge.appendChild(jp);
      badge.appendChild(name);
      badge.appendChild(desc);
      badge.appendChild(count);

      label.appendChild(input);
      label.appendChild(badge);
      pills.appendChild(label);
    });
  }

  // Ringkasan bagian aktif
  const active = jlptActiveSectionIds();
  const sectionHint = document.getElementById("jlptSectionHint");
  if (sectionHint) {
    sectionHint.innerHTML =
      active.length === 0
        ? "⚠️ Pilih minimal satu bagian, kalau tidak ada soal yang bisa dibuat."
        : `✅ <b>${active.length} dari ${JLPT_SECTIONS.length}</b> bagian aktif: ${active
            .map((id) => {
              const m = jlptSectionMeta(id);
              return `${m.icon} ${m.name}`;
            })
            .join(" · ")}. Centang bagian yang tidak mau diuji untuk melewati.`;
  }

  // Deskripsi level
  const descEl = document.getElementById("jlptLevelDesc");
  if (descEl) {
    const L = window.JLPTRegistry ? JLPTRegistry.get(jlptState.level) : null;
    if (L) {
      const totalQ = JLPTRegistry.buildQuestions(
        jlptState.level,
        jlptActiveSectionIds(),
        jlptState.perSection
      ).length;
      descEl.innerHTML = `
        <b>${L.label}</b> — ${L.desc || "Level JLPT"}.
        <br>Bank soal yang tersedia: <b>${L.kanji.length}</b> kanji, <b>${L.vocab.length}</b> kosakata,
        <b>${L.grammar.length}</b> pola grammar, <b>${L.reading.length}</b> bacaan.
        <br>Soal yang akan keluar di trial test ini: <b>${totalQ}</b> soal.
      `;
    } else {
      descEl.textContent = "Data level ini belum tersedia.";
    }
  }

  // Jumlah soal per bagian
  const seg = document.getElementById("jlptCountSeg");
  if (seg) {
    seg.querySelectorAll(".seg-btn").forEach((b) => {
      b.classList.toggle("active", Number(b.dataset.count) === jlptState.perSection);
    });
  }

  // Penjelasan singkat untuk pilihan jumlah soal
  const countHint = document.getElementById("jlptCountHint");
  if (countHint) {
    const per = jlptState.perSection;
    const aktif = active.length;
    const totalQ = JLPTRegistry.buildQuestions(
      jlptState.level,
      jlptActiveSectionIds(),
      jlptState.perSection
    ).length;
    const perText = per === 0
      ? "semua soal yang ada di tiap bagian"
      : `${per} soal dari tiap bagian`;
    const contoh = aktif === 0
      ? "belum ada bagian yang dicentang"
      : aktif === 1
        ? `${totalQ} soal total`
        : `${totalQ} soal total (${aktif} bagian × ${per === 0 ? "semua" : per})`;
    countHint.innerHTML = `
      Cara baca: jumlah ini diambil <b>tiap bagian yang dicentang</b> — bukan sekali untuk seluruh test.
      Saat ini: <b>${perText}</b> → <b>${contoh}</b>.
    `;
  }

  // Badge jumlah soal
  const poolBadge = document.getElementById("jlptPoolBadge");
  if (poolBadge) {
    const totalQ = JLPTRegistry.buildQuestions(
      jlptState.level,
      jlptActiveSectionIds(),
      jlptState.perSection
    ).length;
    poolBadge.innerHTML = `📦 Total <b>${totalQ}</b> soal · ${active.length} bagian aktif`;
  }
}

function toggleJlptSection(sectionId) {
  jlptState.sections[sectionId] = !jlptState.sections[sectionId];
  renderJlptSetup();
}

function setJlptCount(count) {
  jlptState.perSection = count;
  renderJlptSetup();
}

// ---------- Text-to-Speech (dengarkan bacaan / soal) ----------
const jlptTts = {
  supported: typeof window.speechSynthesis !== "undefined" && typeof window.SpeechSynthesisUtterance !== "undefined",
  speaking: false,
  keepAlive: null
};

function jlptTtsVoices() {
  if (!jlptTts.supported) return [];
  try {
    const v = window.speechSynthesis.getVoices();
    if (Array.isArray(v) && v.length > 0) {
      window.__jlptVoicesCache = v;
      return v;
    }
    if (Array.isArray(window.__jlptVoicesCache) && window.__jlptVoicesCache.length > 0) {
      return window.__jlptVoicesCache;
    }
    return v || [];
  } catch (e) {
    return [];
  }
}

function ensureJlptVoices() {
  if (!jlptTts.supported) return Promise.resolve([]);
  return new Promise((resolve) => {
    const existing = jlptTtsVoices();
    if (existing && existing.length > 0) return resolve(existing);
    let done = false;
    const handler = () => {
      if (done) return;
      done = true;
      window.speechSynthesis.removeEventListener("voiceschanged", handler);
      resolve(jlptTtsVoices());
    };
    window.speechSynthesis.addEventListener("voiceschanged", handler);
    try { window.speechSynthesis.getVoices(); } catch (e) {}
    setTimeout(() => {
      if (done) return;
      done = true;
      window.speechSynthesis.removeEventListener("voiceschanged", handler);
      resolve(jlptTtsVoices());
    }, 1500);
  });
}


function jlptTtsVoice() {
  const voices = jlptTtsVoices();
  return (
    voices.find((v) => /^ja[-_]JP/i.test(v.lang)) ||
    voices.find((v) => /^ja/i.test(v.lang)) ||
    null
  );
}

// Buang furigana (<rt>) supaya yang dibacakan kanji-nya, bukan furigana
function jlptPlainText(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html || "";
  tmp.querySelectorAll("rt, rp").forEach((el) => el.remove());
  return (tmp.textContent || "").replace(/\s+/g, " ").trim();
}

function jlptSpeakContent() {
  const q = jlptState.questions[jlptState.index];
  if (!q) return { text: "", label: "🔊 Dengarkan", isReading: false };
  if (q.section === "reading") {
    return {
      text: jlptPlainText(q.speak || q.context),
      label: "🔊 Dengarkan Bacaan",
      isReading: true
    };
  }
  return {
    text: jlptPlainText(q.speak || q.promptHtml || q.prompt),
    label: "🔊 Bacakan Soal",
    isReading: false
  };
}

function jlptSpeakBtnUpdate() {
  const btn = document.getElementById("jlptSpeakBtn");
  if (!btn) return;
  if (!jlptTts.supported) {
    btn.hidden = true;
    return;
  }
  const content = jlptSpeakContent();
  btn.hidden = !content.text;
  btn.textContent = jlptTts.speaking ? "⏹ Hentikan" : content.label;
  btn.classList.toggle("speaking", jlptTts.speaking);
  const voice = jlptTtsVoice();
  btn.title = voice
    ? `Suara: ${voice.name} (${voice.lang})`
    : "Voice bahasa Jepang belum tersedia di browser ini";
}

function jlptStopSpeak() {
  if (!jlptTts.supported) return;
  try {
    window.speechSynthesis.cancel();
  } catch (e) {
  }
  if (jlptTts.keepAlive) {
    clearInterval(jlptTts.keepAlive);
    jlptTts.keepAlive = null;
  }
  jlptTts.speaking = false;
  jlptSpeakBtnUpdate();
}

function jlptSpeakText(text) {
  if (!jlptTts.supported) {
    alert("Browser kamu belum mendukung suara. Coba pakai Chrome atau Edge.");
    return;
  }
  if (!text || !text.trim()) {
    alert("Tidak ada teks untuk dibacakan.");
    return;
  }
  jlptStopSpeak();
  ensureJlptVoices().then(() => {
    try {
      if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
        window.speechSynthesis.cancel();
      }
    } catch (e) {}
    setTimeout(() => jlptDoSpeak(text), 100);
  });
}


function jlptDoSpeak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "ja-JP";
  utter.rate = 0.85;
  utter.pitch = 1;
  const voice = jlptTtsVoice();
  if (voice) utter.voice = voice;
  utter.onend = () => jlptStopSpeak();
  utter.onerror = () => jlptStopSpeak();

  try {
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  } catch (e) {
    return;
  }
  jlptTts.speaking = true;
  jlptSpeakBtnUpdate();
  // Chrome berhenti bicara otomatis setelah ~15 detik, jadi di-"resume" berkala
  jlptTts.keepAlive = setInterval(() => {
    if (!window.speechSynthesis.speaking && !window.speechSynthesis.pending) {
      jlptStopSpeak();
      return;
    }
    try { window.speechSynthesis.resume(); } catch(e){}
  }, 4000);
}

function toggleJlptSpeak() {
  if (!jlptTts.supported) {
    alert("Browser kamu belum mendukung suara (text-to-speech). Coba pakai Chrome atau Edge.");
    return;
  }
  if (jlptTts.speaking) {
    jlptStopSpeak();
    return;
  }
  const content = jlptSpeakContent();
  if (!content.text) {
    alert("Tidak ada teks untuk dibacakan.");
    return;
  }
  // Voice kadang belum siap saat halaman baru dibuka
  if (jlptTtsVoices().length > 0) {
    jlptDoSpeak(content.text);
    return;
  }
  let done = false;
  const handler = () => {
    if (done) return;
    done = true;
    window.speechSynthesis.removeEventListener("voiceschanged", handler);
    jlptDoSpeak(content.text);
  };
  window.speechSynthesis.addEventListener("voiceschanged", handler);
  setTimeout(() => {
    if (done) return;
    done = true;
    window.speechSynthesis.removeEventListener("voiceschanged", handler);
    jlptDoSpeak(content.text);
  }, 1200);
}

// ---------- Kuis ----------
function startJlptTest() {
  const active = jlptActiveSectionIds();
  if (active.length === 0) {
    alert("Pilih minimal satu bagian ujian.");
    return;
  }
  const questions = JLPTRegistry.buildQuestions(jlptState.level, active, jlptState.perSection);
  if (questions.length === 0) {
    alert("Belum ada soal untuk bagian yang dipilih.");
    return;
  }

  jlptState.questions = questions;
  jlptState.results = [];
  jlptState.index = 0;
  jlptState.score = 0;
  jlptState.streak = 0;
  jlptState.bestStreak = 0;

  openTabView("jlpt", "jlptQuiz");
  renderJlptQuestion();
}

function renderJlptQuestion() {
  const q = jlptState.questions[jlptState.index];
  if (!q) return;
  jlptState.answered = false;
  jlptStopSpeak();

  const sec = jlptSectionMeta(q.section);
  const tagEl = document.getElementById("jlptSectionTag");
  if (tagEl) tagEl.textContent = `${sec.icon} ${sec.label}`;

  const qEl = document.getElementById("jlptQuestion");
  if (qEl) qEl.innerHTML = q.promptHtml || q.prompt;

  const ctxEl = document.getElementById("jlptContext");
  if (ctxEl) {
    if (q.context) {
      ctxEl.innerHTML = q.context;
      ctxEl.classList.remove("hidden");
    } else {
      ctxEl.innerHTML = "";
      ctxEl.classList.add("hidden");
    }
  }

  const subEl = document.getElementById("jlptSub");
  if (subEl) subEl.textContent = q.sub || "";

  jlptSpeakBtnUpdate();

  const resultEl = document.getElementById("jlptAnswerBadge");
  if (resultEl) {
    resultEl.innerText = "";
    resultEl.className = "result-badge";
  }

  const nextBtn = document.getElementById("jlptNextBtn");
  if (nextBtn) {
    nextBtn.disabled = true;
    nextBtn.innerHTML = jlptState.index === jlptState.questions.length - 1
      ? "Lihat Hasil &rarr;"
      : "Soal Berikutnya &rarr;";
  }

  // Progress
  const pct = ((jlptState.index) / jlptState.questions.length) * 100;
  const bar = document.getElementById("jlptProgressBar");
  if (bar) bar.style.width = `${pct}%`;
  const label = document.getElementById("jlptProgressLabel");
  if (label) label.textContent = `Soal ${jlptState.index + 1} / ${jlptState.questions.length}`;

  const scoreEl = document.getElementById("jlptScoreNum");
  if (scoreEl) scoreEl.textContent = jlptState.score;
  const streakEl = document.getElementById("jlptStreakNum");
  if (streakEl) streakEl.textContent = jlptState.streak;

  // Pilihan jawaban
  const box = document.getElementById("jlptChoices");
  if (box) {
    box.innerHTML = "";
    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn text-sm";
      btn.innerText = opt;
      btn.onclick = () => answerJlpt(idx, btn, box);
      box.appendChild(btn);
    });
  }
}

function answerJlpt(chosenIndex, btn, box) {
  if (jlptState.answered) return;
  jlptState.answered = true;

  const q = jlptState.questions[jlptState.index];
  const isCorrect = chosenIndex === q.answer;
  jlptState.results[jlptState.index] = { q, chosen: chosenIndex, correct: isCorrect };

  if (isCorrect) {
    jlptState.score += 10;
    jlptState.streak += 1;
    jlptState.bestStreak = Math.max(jlptState.bestStreak, jlptState.streak);
    btn.classList.add("correct");
    showResult("jlptAnswerBadge", true, "✨ Benar!");
  } else {
    jlptState.streak = 0;
    btn.classList.add("wrong");
    [...box.children].forEach((b, i) => {
      if (i === q.answer) b.classList.add("correct");
    });
    showResult("jlptAnswerBadge", false, `❌ Salah. Jawaban: ${q.options[q.answer]}`);
  }

  if (q.explain) {
    const el = document.getElementById("jlptAnswerBadge");
    if (el) el.innerHTML = `${el.innerHTML}<br><span class="jlpt-explain">${q.explain}</span>`;
  }

  const scoreEl = document.getElementById("jlptScoreNum");
  if (scoreEl) scoreEl.textContent = jlptState.score;
  const streakEl = document.getElementById("jlptStreakNum");
  if (streakEl) streakEl.textContent = jlptState.streak;

  const nextBtn = document.getElementById("jlptNextBtn");
  if (nextBtn) nextBtn.disabled = false;

  const bar = document.getElementById("jlptProgressBar");
  if (bar) bar.style.width = `${((jlptState.index + 1) / jlptState.questions.length) * 100}%`;
}

function nextJlptQuestion() {
  if (!jlptState.answered) return;
  if (jlptState.index < jlptState.questions.length - 1) {
    jlptState.index += 1;
    renderJlptQuestion();
  } else {
    finishJlptTest();
  }
}

// ---------- Hasil ----------
function finishJlptTest() {
  jlptStopSpeak();
  const results = jlptState.results;
  const total = jlptState.questions.length;
  const correct = results.filter((r) => r && r.correct).length;
  const wrong = total - correct;
  const accuracy = total ? Math.round((correct / total) * 100) : 0;

  document.getElementById("jlptResAccuracy").textContent = `${accuracy}%`;
  document.getElementById("jlptResScore").textContent = jlptState.score;
  document.getElementById("jlptResCorrect").textContent = `${correct} / ${total}`;
  document.getElementById("jlptResWrong").textContent = wrong;

  const lv = jlptLevelInfo(jlptState.level);
  const titleEl = document.getElementById("jlptResTitle");
  if (titleEl) {
    titleEl.textContent = accuracy >= 80
      ? `Luar biasa! Kamu siap untuk ${lv ? lv.label : "level berikutnya"}!`
      : accuracy >= 60
        ? "Bagus! Sedikit lagi menuju lulus."
        : "Tetap semangat! Coba lagi ya.";
  }
  const subEl = document.getElementById("jlptResSubtitle");
  if (subEl) {
    subEl.textContent = `Ringkasan trial test ${lv ? lv.label : ""} · streak tertinggi 🔥 ${jlptState.bestStreak}`;
  }
  const trophy = document.getElementById("jlptTrophy");
  if (trophy) trophy.textContent = accuracy >= 80 ? "🏆" : accuracy >= 60 ? "🥈" : "💪";

  // Rincian per bagian
  const breakdown = document.getElementById("jlptBreakdown");
  if (breakdown) {
    breakdown.innerHTML = "";
    JLPT_SECTIONS.forEach((sec) => {
      const inSec = results.filter((r) => r && r.q.section === sec.id);
      if (inSec.length === 0) return;
      const ok = inSec.filter((r) => r.correct).length;
      const pct = Math.round((ok / inSec.length) * 100);

      const row = document.createElement("div");
      row.className = "jlpt-breakdown-row";
      row.innerHTML = `
        <span class="jbr-label">${sec.icon} ${sec.label}</span>
        <span class="jbr-bar"><span class="jbr-fill" style="width:${pct}%"></span></span>
        <span class="jbr-score">${ok} / ${inSec.length}</span>
      `;
      breakdown.appendChild(row);
    });
  }

  // Daftar soal salah
  const wrongSection = document.getElementById("jlptWrongSection");
  const grid = document.getElementById("jlptWrongGrid");
  const wrongList = results.filter((r) => r && !r.correct);
  if (grid) grid.innerHTML = "";
  if (wrongSection) {
    if (wrongList.length === 0) {
      wrongSection.classList.add("hidden");
    } else {
      wrongSection.classList.remove("hidden");
      const cnt = document.getElementById("jlptWrongCount");
      if (cnt) cnt.textContent = wrongList.length;
      wrongList.forEach((r) => {
        const card = document.createElement("div");
        card.className = "jlpt-wrong-card";
        const sec = jlptSectionMeta(r.q.section);
        card.innerHTML = `
          <div class="jwc-tag">${sec.icon} ${sec.label}</div>
          <div class="jwc-prompt japanese-font">${r.q.promptHtml || r.q.prompt}</div>
          <div class="jwc-row">Jawaban: <b class="correct-highlight">${r.q.options[r.q.answer]}</b></div>
          <div class="jwc-row">Jawabanmu: <span class="user-typed">${r.q.options[r.chosen]}</span></div>
          ${r.q.explain ? `<div class="jwc-note">${r.q.explain}</div>` : ""}
        `;
        grid.appendChild(card);
      });
    }
  }

  openTabView("jlpt", "jlptResult");
}

function retryJlptWrongOnly() {
  const wrongList = jlptState.results.filter((r) => r && !r.correct).map((r) => r.q);
  if (wrongList.length === 0) {
    alert("Tidak ada soal yang salah. Keren! 🎉");
    return;
  }
  jlptState.questions = wrongList;
  jlptState.results = [];
  jlptState.index = 0;
  jlptState.score = 0;
  jlptState.streak = 0;
  openTabView("jlpt", "jlptQuiz");
  renderJlptQuestion();
}

function restartJlptTest() {
  startJlptTest();
}

function exitJlptQuiz() {
  backToJlptMenu();
}

function backToJlptMenu() {
  jlptStopSpeak();
  hideAll();
  showTabMenu("jlpt");
  window.scrollTo({ top: 0, behavior: "instant" });
}
