// ================= JLPT KUIS FORM =================
const jlptFormState = {
  level: "n5",
  sections: { kanji: true, vocab: true, grammar: true, reading: true },
  count: 20,
  questions: [],
  userAnswers: [],
  retryPool: null
};

function openJlptFormSetup() {
  jlptFormState.level = "n5";
  jlptFormState.sections = { kanji: true, vocab: true, grammar: true, reading: true };
  jlptFormState.count = 20;
  renderJlptFormSetup();
  openTabView("jlpt", "jlptFormSetup");
}

function renderJlptFormSetup() {
  const pills = document.getElementById("jlptFormSectionPills");
  if (pills) {
    pills.innerHTML = "";
    JLPT_SECTIONS.forEach((sec) => {
      const label = document.createElement("label");
      label.className = "checkbox-pill jlpt-pill";
      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = !!jlptFormState.sections[sec.id];
      input.onchange = () => {
        jlptFormState.sections[sec.id] = input.checked;
        renderJlptFormSetup();
      };
      const badge = document.createElement("span");
      badge.className = "pill-badge";
      const jp = document.createElement("span");
      jp.className = "jp-pill-title";
      jp.textContent = sec.icon + " " + sec.label;
      const name = document.createElement("span");
      name.className = "jp-pill-name";
      name.textContent = sec.name;
      badge.appendChild(jp);
      badge.appendChild(name);
      label.appendChild(input);
      label.appendChild(badge);
      pills.appendChild(label);
    });
  }

  const seg = document.getElementById("jlptFormCountSeg");
  if (seg) {
    seg.querySelectorAll(".seg-btn").forEach((b) => {
      b.classList.toggle("active", Number(b.dataset.count) === jlptFormState.count);
    });
  }

  const active = JLPT_SECTIONS.filter((s) => jlptFormState.sections[s.id]).map((s) => s.id);
  const pool = JLPTRegistry.buildQuestions(jlptFormState.level, active, 0);
  const badge = document.getElementById("jlptFormPoolBadge");
  if (badge) badge.innerHTML = "📦 <b>" + pool.length + "</b> soal tersedia";
}

function setJlptFormCount(n) {
  jlptFormState.count = n;
  renderJlptFormSetup();
}

function startJlptFormQuiz() {
  const active = JLPT_SECTIONS.filter((s) => jlptFormState.sections[s.id]).map((s) => s.id);
  if (active.length === 0) {
    alert("Pilih minimal satu bagian ujian.");
    return;
  }
  let pool = JLPTRegistry.buildQuestions(jlptFormState.level, active, 0);
  if (pool.length === 0) {
    alert("Belum ada soal untuk bagian yang dipilih.");
    return;
  }
  pool = JLPTRegistry.shuffle ? JLPTRegistry.shuffle(pool) : pool.sort(() => Math.random() - 0.5);
  if (jlptFormState.count > 0 && pool.length > jlptFormState.count) {
    pool = pool.slice(0, jlptFormState.count);
  }
  jlptFormState.questions = pool;
  jlptFormState.userAnswers = new Array(pool.length).fill("");
  jlptFormState.retryPool = null;
  renderJlptFormQuiz();
}

function renderJlptFormQuiz() {
  openTabView("jlpt", "jlptFormQuiz");
  const total = jlptFormState.questions.length;
  const label = document.getElementById("jlptFormProgressLabel");
  if (label) label.innerText = total + " Soal";
  const container = document.getElementById("jlptFormCardsContainer");
  if (!container) return;
  container.innerHTML = "";
  jlptFormState.questions.forEach((q, idx) => {
    const card = document.createElement("div");
    card.className = "fq-item-card";
    card.id = "jlptfq-card-" + idx;
    const sec = jlptSectionMeta(q.section);
    card.innerHTML = `
      <div class="fq-card-top">
        <span class="fq-soal-num"># ${idx + 1}</span>
        <span class="card-script-tag">${sec.label}</span>
        <button type="button" class="fq-review-speak-btn" onclick="jlptFormSpeak(${idx})" title="Dengar">🔊</button>
      </div>
      <div class="fq-kana-glyph japanese-font" style="font-size:28px;">${q.promptHtml || q.prompt || ""}</div>
      ${q.context ? '<div class="jlpt-context" style="margin-top:10px;">' + q.context + '</div>' : ""}
      ${q.sub ? '<div class="jlpt-sub" style="margin-top:6px;">' + q.sub + '</div>' : ""}
      <div class="fq-input-row">
        <input type="text" id="jlptfq-input-${idx}" class="fq-text-input" placeholder="Ketik jawaban..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" oninput="jlptFormOnInput(${idx}, this.value)" onkeydown="jlptFormKeydown(event, ${idx})" />
      </div>
      <div style="margin-top:6px; font-size:12px; color:var(--text-secondary);">Pilih sesuai opsi atau ketik sesuai konteks soal (pilihan ganda bisa dilihat di soal).</div>
    `;
    container.appendChild(card);
    if (q.options && q.options.length) {
      const opts = document.createElement("div");
      opts.className = "choices-grid";
      opts.style.marginTop = "10px";
      q.options.forEach((opt, oidx) => {
        const b = document.createElement("button");
        b.className = "choice-btn text-sm";
        b.type = "button";
        b.innerText = opt;
        b.onclick = () => {
          const inp = document.getElementById("jlptfq-input-" + idx);
          if (inp) { inp.value = opt; jlptFormOnInput(idx, opt); }
        };
        opts.appendChild(b);
      });
      card.appendChild(opts);
    }
  });
  jlptFormState.userAnswers.forEach((val, idx) => {
    if (val) {
      const inp = document.getElementById("jlptfq-input-" + idx);
      if (inp) inp.value = val;
    }
  });
  jlptFormUpdateCounter();
  const first = document.getElementById("jlptfq-input-0");
  if (first) setTimeout(() => first.focus(), 100);
}

function jlptFormSpeak(idx) {
  const q = jlptFormState.questions[idx];
  if (!q) return;
  jlptStopSpeak();
  let text = "";
  if (q.section === "reading") {
    text = jlptPlainText(q.speak || q.context || "");
  } else {
    text = jlptPlainText(q.speak || q.promptHtml || q.prompt || "");
  }
  if (!text) text = jlptPlainText(q.promptHtml || q.prompt || "");
  if (text) jlptSpeakText(text);
}


function jlptFormOnInput(idx, val) {
  jlptFormState.userAnswers[idx] = val.trim();
  const card = document.getElementById("jlptfq-card-" + idx);
  if (card) card.classList.toggle("fq-card-filled", val.trim().length > 0);
  jlptFormUpdateCounter();
}

function jlptFormKeydown(e, idx) {
  if (e.key === "Enter") {
    e.preventDefault();
    const next = document.getElementById("jlptfq-input-" + (idx + 1));
    if (next) {
      next.focus();
      next.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      submitJlptFormQuiz();
    }
  }
}

function jlptFormUpdateCounter() {
  const filled = jlptFormState.userAnswers.filter((a) => a.length > 0).length;
  const total = jlptFormState.questions.length;
  const counter = document.getElementById("jlptFormCounter");
  if (counter) {
    counter.innerText = filled + " / " + total + " terisi";
    counter.classList.toggle("fq-counter-complete", filled === total);
  }
}

function confirmExitJlptFormQuiz() {
  if (confirm("Yakin ingin keluar? Jawaban yang sudah diisi akan hilang.")) {
    backToJlptMenu();
  }
}

function submitJlptFormQuiz() {
  const filled = jlptFormState.userAnswers.filter((a) => a.length > 0).length;
  const total = jlptFormState.questions.length;
  if (filled < total) {
    if (!confirm("Masih ada " + (total - filled) + " soal yang kosong. Submit sekarang?")) {
      for (let i = 0; i < total; i++) {
        if (!jlptFormState.userAnswers[i]) {
          const inp = document.getElementById("jlptfq-input-" + i);
          if (inp) { inp.focus(); inp.scrollIntoView({ behavior: "smooth", block: "center" }); }
          break;
        }
      }
      return;
    }
  }
  showJlptFormQuizResult();
}

function showJlptFormQuizResult() {
  const questions = jlptFormState.questions;
  const answers = jlptFormState.userAnswers;
  let correctCount = 0;
  const results = questions.map((q, idx) => {
    const userTyped = answers[idx] || "";
    let isCorrect = false;
    if (q.options && typeof q.answer === "number") {
      isCorrect = userTyped.trim().toLowerCase() === String(q.options[q.answer]).trim().toLowerCase();
    } else {
      isCorrect = userTyped.trim().length > 0;
    }
    if (isCorrect) correctCount++;
    return { q, userTyped, isCorrect };
  });
  const total = questions.length;
  const wrongCount = total - correctCount;
  const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  openTabView("jlpt", "jlptFormResult");
  const trophy = document.getElementById("jlptFormResTrophy");
  const title = document.getElementById("jlptFormResTitle");
  const subtitle = document.getElementById("jlptFormResSubtitle");
  if (accuracy === 100) { if (trophy) trophy.innerText = "🏆"; if (title) title.innerText = "Sempurna!"; if (subtitle) subtitle.innerText = "Semua benar!"; }
  else if (accuracy >= 80) { if (trophy) trophy.innerText = "🌟"; if (title) title.innerText = "Bagus Sekali!"; if (subtitle) subtitle.innerText = "Hasil sangat bagus."; }
  else if (accuracy >= 60) { if (trophy) trophy.innerText = "👍"; if (title) title.innerText = "Lumayan!"; if (subtitle) subtitle.innerText = "Masih bisa ditingkatkan."; }
  else { if (trophy) trophy.innerText = "📚"; if (title) title.innerText = "Tetap Semangat!"; if (subtitle) subtitle.innerText = "Latihan yang salah ya."; }
  const accEl = document.getElementById("jlptFormResAccuracy");
  if (accEl) accEl.innerText = accuracy + "%";
  const corEl = document.getElementById("jlptFormResCorrect");
  if (corEl) corEl.innerText = correctCount + " / " + total;
  const wrgEl = document.getElementById("jlptFormResWrong");
  if (wrgEl) wrgEl.innerText = wrongCount;
  const grid = document.getElementById("jlptFormReviewGrid");
  if (grid) {
    grid.innerHTML = "";
    results.forEach((r, idx) => {
      const item = document.createElement("div");
      item.className = "jlpt-wrong-card";
      const sec = jlptSectionMeta(r.q.section);
      item.innerHTML = `
        <div class="jwc-tag">${sec.icon} ${sec.label} #${idx + 1}</div>
        <div class="jwc-prompt japanese-font">${r.q.promptHtml || r.q.prompt || ""}</div>
        ${r.q.context ? '<div class="jlpt-context" style="margin-top:8px;">' + r.q.context + '</div>' : ""}
        ${r.q.sub ? '<div class="jlpt-sub" style="margin-top:6px;">' + r.q.sub + '</div>' : ""}
        <div class="jwc-row">Jawaban benar: <b class="correct-highlight">${typeof r.q.answer === "number" && r.q.options ? r.q.options[r.q.answer] : "-"}</b></div>
        <div class="jwc-row">Jawabanmu: <span class="user-typed">${r.userTyped || "—"}</span> ${r.isCorrect ? "✅" : "❌"}</div>
        ${r.q.explain ? '<div class="jwc-note">' + r.q.explain + '</div>' : ""}
      `;
      grid.appendChild(item);
    });
  }
  jlptFormState.retryPool = results.filter((r) => !r.isCorrect).map((r) => r.q);
  const secWrong = document.getElementById("jlptFormWrongSection");
  if (secWrong) {
    if (jlptFormState.retryPool.length === 0) secWrong.classList.add("hidden");
    else secWrong.classList.remove("hidden");
  }
}

function retryJlptFormWrongOnly() {
  const wrong = jlptFormState.retryPool || [];
  if (wrong.length === 0) { alert("Semua benar!"); return; }
  jlptFormState.questions = wrong.map((q) => q);
  jlptFormState.userAnswers = new Array(jlptFormState.questions.length).fill("");
  jlptFormState.retryPool = null;
  renderJlptFormQuiz();
}
