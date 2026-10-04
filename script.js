const hiraganaBasic = [
  ["a", "あ"], ["i", "い"], ["u", "う"], ["e", "え"], ["o", "お"],
  ["ka", "か"], ["ki", "き"], ["ku", "く"], ["ke", "け"], ["ko", "こ"],
  ["sa", "さ"], ["shi", "し"], ["su", "す"], ["se", "せ"], ["so", "そ"],
  ["ta", "た"], ["chi", "ち"], ["tsu", "つ"], ["te", "て"], ["to", "と"],
  ["na", "な"], ["ni", "に"], ["nu", "ぬ"], ["ne", "ね"], ["no", "の"],
  ["ha", "は"], ["hi", "ひ"], ["fu", "ふ"], ["he", "へ"], ["ho", "ほ"],
  ["ma", "ま"], ["mi", "み"], ["mu", "む"], ["me", "め"], ["mo", "も"],
  ["ya", "や"], ["yu", "ゆ"], ["yo", "よ"],
  ["ra", "ら"], ["ri", "り"], ["ru", "る"], ["re", "れ"], ["ro", "ろ"],
  ["wa", "わ"], ["wo", "を"], ["n", "ん"]
];

const hiraganaDakuten = [
  ["ga", "が"], ["gi", "ぎ"], ["gu", "ぐ"], ["ge", "げ"], ["go", "ご"],
  ["za", "ざ"], ["ji", "じ"], ["zu", "ず"], ["ze", "ぜ"], ["zo", "ぞ"],
  ["da", "だ"], ["ji", "ぢ"], ["zu", "づ"], ["de", "で"], ["do", "ど"],
  ["ba", "ば"], ["bi", "び"], ["bu", "ぶ"], ["be", "べ"], ["bo", "ぼ"],
  ["pa", "ぱ"], ["pi", "ぴ"], ["pu", "ぷ"], ["pe", "ぺ"], ["po", "ぽ"]
];

const katakanaBasic = [
  ["a", "ア"], ["i", "イ"], ["u", "ウ"], ["e", "エ"], ["o", "オ"],
  ["ka", "カ"], ["ki", "キ"], ["ku", "ク"], ["ke", "ケ"], ["ko", "コ"],
  ["sa", "サ"], ["shi", "シ"], ["su", "ス"], ["se", "セ"], ["so", "ソ"],
  ["ta", "タ"], ["chi", "チ"], ["tsu", "ツ"], ["te", "テ"], ["to", "ト"],
  ["na", "ナ"], ["ni", "ニ"], ["nu", "ヌ"], ["ne", "ネ"], ["no", "ノ"],
  ["ha", "ハ"], ["hi", "ヒ"], ["fu", "フ"], ["he", "ヘ"], ["ho", "ホ"],
  ["ma", "マ"], ["mi", "ミ"], ["mu", "ム"], ["me", "メ"], ["mo", "モ"],
  ["ya", "ヤ"], ["yu", "ユ"], ["yo", "ヨ"],
  ["ra", "ラ"], ["ri", "リ"], ["ru", "ル"], ["re", "レ"], ["ro", "ロ"],
  ["wa", "ワ"], ["wo", "ヲ"], ["n", "ン"]
];

const katakanaDakuten = [
  ["ga", "ガ"], ["gi", "ギ"], ["gu", "グ"], ["ge", "ゲ"], ["go", "ゴ"],
  ["za", "ザ"], ["ji", "ジ"], ["zu", "ズ"], ["ze", "ゼ"], ["zo", "ゾ"],
  ["da", "ダ"], ["ji", "ヂ"], ["zu", "ヅ"], ["de", "デ"], ["do", "ド"],
  ["ba", "バ"], ["bi", "ビ"], ["bu", "ブ"], ["be", "ベ"], ["bo", "ボ"],
  ["pa", "パ"], ["pi", "ピ"], ["pu", "プ"], ["pe", "ペ"], ["po", "ポ"]
];

const vocabularyHiragana = [
  { h: "ねこ", r: "neko", m: "Kucing" },
  { h: "いぬ", r: "inu", m: "Anjing" },
  { h: "とり", r: "tori", m: "Burung" },
  { h: "さかな", r: "sakana", m: "Ikan" },
  { h: "さくら", r: "sakura", m: "Bunga Sakura" },
  { h: "やま", r: "yama", m: "Gunung" },
  { h: "かわ", r: "kawa", m: "Sungai" },
  { h: "みず", r: "mizu", m: "Air" },
  { h: "ひ", r: "hi", m: "Api" },
  { h: "つき", r: "tsuki", m: "Bulan" },
  { h: "たいよう", r: "taiyou", m: "Matahari" },
  { h: "ほし", r: "hoshi", m: "Bintang" },
  { h: "くるま", r: "kuruma", m: "Mobil" },
  { h: "ほん", r: "hon", m: "Buku" },
  { h: "いえ", r: "ie", m: "Rumah" },
  { h: "みせ", r: "mise", m: "Toko" },
  { h: "くつ", r: "kutsu", m: "Sepatu" },
  { h: "かさ", r: "kasa", m: "Payung" },
  { h: "あめ", r: "ame", m: "Hujan" }
];

const vocabularyKatakana = [
  { h: "テレビ", r: "terebi", m: "Televisi" },
  { h: "カメラ", r: "kamera", m: "Kamera" },
  { h: "スマホ", r: "sumaho", m: "Ponsel Pintar" },
  { h: "パソコン", r: "pasokon", m: "Komputer PC" },
  { h: "タクシー", r: "takushii", m: "Taksi" },
  { h: "バス", r: "basu", m: "Bus" },
  { h: "ホテル", r: "hoteru", m: "Hotel" },
  { h: "レストラン", r: "resutoran", m: "Restoran" },
  { h: "コーヒー", r: "koohii", m: "Kopi" },
  { h: "パン", r: "pan", m: "Roti" },
  { h: "ケーキ", r: "keeki", m: "Kue" },
  { h: "トイレ", r: "toire", m: "Toilet" },
  { h: "シャツ", r: "shatsu", m: "Kemeja" },
  { h: "ノート", r: "nooto", m: "Buku Catatan" },
  { h: "ペン", r: "pen", m: "Pena" }
];

const templates = {
  あ: [[0, 0, 1, 1, 1, 0, 0],[0, 1, 0, 0, 0, 1, 0],[0, 0, 0, 0, 1, 0, 0],[0, 0, 0, 1, 0, 0, 0],[0, 0, 1, 0, 0, 0, 0],[0, 1, 1, 1, 1, 1, 0],[0, 0, 0, 0, 0, 0, 0]],
  い: [[0, 0, 1, 1, 0, 0, 0],[0, 1, 0, 1, 0, 0, 0],[0, 0, 0, 1, 0, 0, 0],[0, 0, 0, 1, 0, 0, 0],[0, 0, 0, 1, 0, 0, 0],[0, 1, 1, 1, 1, 0, 0],[0, 0, 0, 0, 0, 0, 0]],
  う: [[0, 0, 1, 1, 0, 0, 0],[0, 1, 0, 0, 1, 0, 0],[0, 0, 0, 0, 1, 0, 0],[0, 0, 0, 0, 1, 0, 0],[0, 0, 0, 1, 0, 0, 0],[0, 1, 1, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0]],
  ア: [[0, 1, 1, 1, 1, 1, 0],[0, 0, 0, 0, 1, 0, 0],[0, 0, 0, 1, 0, 0, 0],[0, 0, 1, 0, 0, 0, 0],[0, 1, 0, 0, 0, 0, 0],[0, 1, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0]],
  イ: [[0, 0, 0, 1, 0, 0, 0],[0, 0, 1, 0, 0, 0, 0],[0, 1, 0, 0, 0, 0, 0],[0, 0, 1, 0, 0, 0, 0],[0, 0, 1, 0, 0, 0, 0],[0, 0, 1, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0]]
};

let currentAlphabet = 'hiragana';
let currentCharType = 'basic';
let activeData = hiraganaBasic;
let activeVocab = vocabularyHiragana;
let activeName = "Hiragana Dasar";

let wordLength = 1;
let correctAnswer = "";
let currentVocabCorrect = "";

function updateActiveData() {
  if (currentAlphabet === 'hiragana') {
    activeData = (currentCharType === 'basic') ? hiraganaBasic : hiraganaDakuten;
    activeName = (currentCharType === 'basic') ? "Hiragana Dasar" : "Hiragana Imbuhan";
    activeVocab = vocabularyHiragana;
  } else {
    activeData = (currentCharType === 'basic') ? katakanaBasic : katakanaDakuten;
    activeName = (currentCharType === 'basic') ? "Katakana Dasar" : "Katakana Imbuhan";
    activeVocab = vocabularyKatakana;
  }
  document.getElementById('mainTitle').innerText = `Belajar ${activeName}`;
  
  if (!document.getElementById('kanaPage').classList.contains('hidden')) {
    showKanaList(); 
  }
}

function setAlphabet(type) {
  currentAlphabet = type;
  document.getElementById('btnHiragana').classList.toggle('active', type === 'hiragana');
  document.getElementById('btnKatakana').classList.toggle('active', type === 'katakana');
  updateActiveData();
}

function setCharType(type) {
  currentCharType = type;
  document.getElementById('btnBasic').classList.toggle('active', type === 'basic');
  document.getElementById('btnDakuten').classList.toggle('active', type === 'dakuten');
  updateActiveData();
}

// ================= Utility =================
function shuffle(a) {
  return a.sort(() => Math.random() - 0.5);
}

function hideAll() {
  const views = ["menu", "quiz", "kanaPage", "quest", "dragDrop", "writing", "vocabMode"];
  views.forEach((id) => document.getElementById(id).classList.add("hidden"));
}

function backToMenu() {
  hideAll();
  document.getElementById("menu").classList.remove("hidden");
}

function clearResult(id) {
  const el = document.getElementById(id);
  if(el) {
    el.innerText = "";
    el.className = "result-badge";
  }
}

function showResult(id, isCorrect, msg) {
  const el = document.getElementById(id);
  el.innerText = msg;
  // Trigger animation by re-adding class
  el.className = "result-badge";
  void el.offsetWidth; // trigger reflow
  el.className = `result-badge show ${isCorrect ? 'success' : 'error'}`;
}

// ================= KANA LIST =================
function showKanaList() {
  hideAll();
  document.getElementById("kanaPage").classList.remove("hidden");
  document.getElementById("kanaListTitle").innerText = `Daftar Huruf ${activeName}`;
  const list = document.getElementById("kanaList");
  list.innerHTML = "";
  activeData.forEach((h) => {
    const card = document.createElement("div");
    card.className = "kana-card";
    card.innerHTML = `<span class="char">${h[1]}</span><span class="romaji">${h[0]}</span>`;
    list.appendChild(card);
  });
}

// ================= LEVEL MODE =================
function startLevel(len) {
  wordLength = len;
  hideAll();
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("quizTitle").innerText = `Tebak ${activeName}`;
  loadQuestion();
}

function loadQuestion() {
  clearResult("result");
  const word = shuffle([...activeData]).slice(0, wordLength);
  correctAnswer = word.map((w) => w[1]).join("");
  
  const shortName = activeName.split(" ")[0]; // "Hiragana" or "Katakana"
  document.getElementById("question").innerHTML = `Mana ${shortName.toLowerCase()} untuk: <br><b>${word.map((w) => w[0]).join(" ")}</b>`;
  
  const opts = new Set([correctAnswer]);
  while (opts.size < 4) {
    opts.add(shuffle([...activeData]).slice(0, wordLength).map((w) => w[1]).join(""));
  }
  
  const box = document.getElementById("choices");
  box.innerHTML = "";
  let answered = false;
  
  shuffle([...opts]).forEach((o) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.innerText = o;
    btn.onclick = () => {
      if(answered) return;
      answered = true;
      if(o === correctAnswer) {
        btn.classList.add("correct");
        showResult("result", true, "✨ Sugoi! Jawaban Benar!");
      } else {
        btn.classList.add("wrong");
        showResult("result", false, `❌ Salah! Yang benar adalah ${correctAnswer}`);
        // Highlight correct answer
        [...box.children].forEach(b => {
          if(b.innerText === correctAnswer) b.classList.add("correct");
        });
      }
    };
    box.appendChild(btn);
  });
}

// ================= KOSAKATA (VOCAB) MODE =================
function startVocab() {
  hideAll();
  document.getElementById("vocabMode").classList.remove("hidden");
  newVocab();
}

function newVocab() {
  clearResult("vocabResult");
  const selectedVocab = shuffle([...activeVocab])[0];
  currentVocabCorrect = selectedVocab.m;
  
  document.getElementById("vocabQuestion").innerHTML = `Apa arti dari kata ini? <br><b>${selectedVocab.h}</b><span class="romaji-hint">(${selectedVocab.r})</span>`;
  
  const opts = new Set([currentVocabCorrect]);
  while (opts.size < 4) {
    const randomVocab = activeVocab[Math.floor(Math.random() * activeVocab.length)].m;
    opts.add(randomVocab);
  }
  
  const box = document.getElementById("vocabChoices");
  box.innerHTML = "";
  let answered = false;
  
  shuffle([...opts]).forEach((o) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn text-sm"; 
    btn.innerText = o;
    btn.onclick = () => {
      if(answered) return;
      answered = true;
      if (o === currentVocabCorrect) {
        btn.classList.add("correct");
        showResult("vocabResult", true, "✨ Hebat! Jawabanmu Benar!");
      } else {
        btn.classList.add("wrong");
        showResult("vocabResult", false, `❌ Salah! Artinya adalah "${currentVocabCorrect}"`);
        [...box.children].forEach(b => {
          if(b.innerText === currentVocabCorrect) b.classList.add("correct");
        });
      }
    };
    box.appendChild(btn);
  });
}

// ================= QUEST MODE =================
function startQuest() {
  hideAll();
  document.getElementById("quest").classList.remove("hidden");
  newQuest();
}

function newQuest() {
  clearResult("questResult");
  const word = shuffle([...activeData]).slice(0, 3);
  const correct = word.map((w) => w[1]).join("");
  document.getElementById("questQuestion").innerHTML = `Manakah susunan huruf untuk: <br><b>${word.map((w) => w[0]).join(" ")}</b>`;
  
  const opts = new Set([correct]);
  while (opts.size < 3) {
    opts.add(shuffle([...activeData]).slice(0, 3).map((w) => w[1]).join(""));
  }
  
  const box = document.getElementById("questChoices");
  box.innerHTML = "";
  let answered = false;
  
  shuffle([...opts]).forEach((o) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.innerText = o;
    btn.onclick = () => {
      if(answered) return;
      answered = true;
      if (o === correct) {
        btn.classList.add("correct");
        showResult("questResult", true, "✨ Sugoi! Benar!");
      } else {
        btn.classList.add("wrong");
        showResult("questResult", false, "❌ Salah! Lanjut ke soal berikutnya...");
        setTimeout(() => {
           if(document.getElementById("quest").classList.contains("hidden")) return;
           newQuest();
        }, 1500);
      }
    };
    box.appendChild(btn);
  });
}

// ================= DRAG & DROP =================
function startDragDrop() {
  hideAll();
  document.getElementById("dragDrop").classList.remove("hidden");
  newDragDrop();
}

function newDragDrop() {
  clearResult("dragResult");
  const words = shuffle([...activeData]).slice(0, 3);
  const correct = words.map((w) => w[1]);
  
  document.getElementById("dragQuestion").innerHTML = `Susun huruf untuk: <br><b>${words.map((w) => w[0]).join(" ")}</b>`;
  
  const targetsDiv = document.getElementById("dragTargets");
  targetsDiv.innerHTML = "";
  
  correct.forEach((letter) => {
    const target = document.createElement("div");
    target.className = "drag-target";
    target.dataset.answer = letter;
    
    target.ondragover = (e) => {
      e.preventDefault();
      target.classList.add("drag-over");
    };
    target.ondragleave = (e) => {
      target.classList.remove("drag-over");
    };
    
    target.ondrop = (e) => {
      e.preventDefault();
      target.classList.remove("drag-over");
      const l = e.dataTransfer.getData("text");
      
      const lettersDiv = document.getElementById("dragLetters");
      const original = [...lettersDiv.children].find(el => el.innerText === l && el.style.display !== "none");
      if(original) {
         original.style.display = "none";
      }

      if(target.innerText) {
         const oldLetter = target.innerText;
         const hiddenLetter = [...lettersDiv.children].find(el => el.dataset.val === oldLetter && el.style.display === "none");
         if(hiddenLetter) hiddenLetter.style.display = "flex";
      }

      target.innerText = l;
      target.classList.add("filled");
      
      checkDragDropComplete();
    };
    targetsDiv.appendChild(target);
  });
  
  const lettersDiv = document.getElementById("dragLetters");
  lettersDiv.innerHTML = "";
  
  shuffle([...correct]).forEach((letter) => {
    const l = document.createElement("div");
    l.className = "drag-letter";
    l.innerText = letter;
    l.dataset.val = letter;
    l.draggable = true;
    l.ondragstart = (e) => {
      e.dataTransfer.setData("text", letter);
      setTimeout(() => e.target.style.opacity = '0.5', 0);
    };
    l.ondragend = (e) => {
      e.target.style.opacity = '1';
    }
    lettersDiv.appendChild(l);
  });
}

function checkDragDropComplete() {
  const targetsDiv = document.getElementById("dragTargets");
  const t = [...targetsDiv.children];
  if (t.every((el) => el.innerText !== "")) {
    const ok = t.every((el) => el.innerText === el.dataset.answer);
    if(ok) {
       showResult("dragResult", true, "✨ Sempurna! Susunan Benar!");
    } else {
       showResult("dragResult", false, "❌ Ada yang salah. Mengulang...");
       setTimeout(() => {
           if(document.getElementById("dragDrop").classList.contains("hidden")) return;
           newDragDrop();
       }, 1500);
    }
  }
}

// ================= WRITING MODE =================
let currentWritingAnswer = "";
const canvas = document.getElementById("writingCanvas");
const ctx = canvas.getContext("2d");
let drawing = false;

// Setup canvas drawing context
ctx.lineWidth = 14;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.strokeStyle = "#2C3E50";

function getPointerPos(e) {
  const rect = canvas.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  return {
    x: clientX - rect.left,
    y: clientY - rect.top
  };
}

function startDrawing(e) {
  e.preventDefault();
  drawing = true;
  const pos = getPointerPos(e);
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
}

function draw(e) {
  if (!drawing) return;
  e.preventDefault();
  const pos = getPointerPos(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
}

function stopDrawing(e) {
  if (!drawing) return;
  drawing = false;
  ctx.closePath();
}

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

canvas.addEventListener("touchstart", startDrawing, {passive: false});
canvas.addEventListener("touchmove", draw, {passive: false});
canvas.addEventListener("touchend", stopDrawing);

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  clearResult("writingResult");
}

function startWriting() {
  hideAll();
  document.getElementById("writing").classList.remove("hidden");
  newWriting();
}

function newWriting() {
  clearCanvas();
  const availableTemplates = Object.keys(templates);
  const word = shuffle(activeData.filter(h => availableTemplates.includes(h[1]))).slice(0, 1);
  
  if(word.length === 0) {
      document.getElementById("writingQuestion").innerHTML = `Belum ada template untuk mode ini.`;
      return;
  }
  
  currentWritingAnswer = word[0][1];
  document.getElementById("writingQuestion").innerHTML = `Tulis huruf untuk: <br><b>${word[0][0]}</b>`;
}

function checkWriting() {
  if (!currentWritingAnswer) return;
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;
  const size = 7;
  const sample = new Array(size).fill(0).map(() => new Array(size).fill(0));
  
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let sum = 0, count = 0;
      const startX = Math.floor((x * canvas.width) / size);
      const startY = Math.floor((y * canvas.height) / size);
      const endX = Math.floor(((x + 1) * canvas.width) / size);
      const endY = Math.floor(((y + 1) * canvas.height) / size);
      
      for (let i = startY; i < endY; i++) {
        for (let j = startX; j < endX; j++) {
          const idx = (i * canvas.width + j) * 4;
          const alpha = data[idx + 3];
          if (alpha > 50) sum++;
          count++;
        }
      }
      sample[y][x] = sum / count > 0.05 ? 1 : 0; 
    }
  }
  
  const template = templates[currentWritingAnswer];
  if (!template) {
    showResult("writingResult", false, "Template belum tersedia untuk huruf ini");
    return;
  }
  
  let match = 0;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (sample[y][x] === template[y][x]) match++;
    }
  }
  
  const percent = Math.floor((match / (size * size)) * 100);
  if(percent >= 60) {
      showResult("writingResult", true, `✨ Bagus! Mirip ${percent}%`);
  } else {
      showResult("writingResult", false, `❌ Coba lagi! (Kemiripan ${percent}%)`);
  }
}
