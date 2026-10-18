const hiraganaBasic = [
  ["a", "あ"], ["i", "い"], ["u", "う"], ["e", "え"], ["o", "お"],
  ["ka", "か"], ["ki", "き"], ["ku", "く"], ["ke", "け"], ["ko", "こ"],
  ["sa", "さ"], ["shi", "し"], ["su", "す"], ["se", "せ"], ["so", "そ"],
  ["ta", "た"], ["chi", "ち"], ["tsu", "つ"], ["te", "て"], ["to", "と"],
  ["na", "な"], ["ni", "に"], ["nu", "ぬ"], ["ne", "ね"], ["no", "の"],
  ["ha", "は"], ["hi", "ひ"], ["fu", "ふ"], ["he", "へ"], ["ho", "ほ"],
  ["ma", "ま"], ["mi", "み"], ["mu", "む"], ["me", "め"], ["mo", "も"],
  ["ya", "や"], ["", ""], ["yu", "ゆ"], ["", ""], ["yo", "よ"],
  ["ra", "ら"], ["ri", "り"], ["ru", "る"], ["re", "れ"], ["ro", "ろ"],
  ["wa", "わ"], ["", ""], ["", ""], ["", ""], ["wo", "を"],
  ["n", "ん"], ["", ""], ["", ""], ["", ""], ["", ""]
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
  ["ya", "ヤ"], ["", ""], ["yu", "ユ"], ["", ""], ["yo", "ヨ"],
  ["ra", "ラ"], ["ri", "リ"], ["ru", "ル"], ["re", "レ"], ["ro", "ロ"],
  ["wa", "ワ"], ["", ""], ["", ""], ["", ""], ["wo", "ヲ"],
  ["n", "ン"], ["", ""], ["", ""], ["", ""], ["", ""]
];

const katakanaDakuten = [
  ["ga", "ガ"], ["gi", "ギ"], ["gu", "グ"], ["ge", "ゲ"], ["go", "ゴ"],
  ["za", "ザ"], ["ji", "ジ"], ["zu", "ズ"], ["ze", "ゼ"], ["zo", "ゾ"],
  ["da", "ダ"], ["ji", "ヂ"], ["zu", "ヅ"], ["de", "デ"], ["do", "ド"],
  ["ba", "バ"], ["bi", "ビ"], ["bu", "ブ"], ["be", "ベ"], ["bo", "ボ"],
  ["pa", "パ"], ["pi", "ピ"], ["pu", "プ"], ["pe", "ペ"], ["po", "ポ"]
];

const vocabularyHiragana = [
  // Hewan
  { h: "ねこ", r: "neko", m: "Kucing" },
  { h: "いぬ", r: "inu", m: "Anjing" },
  { h: "とり", r: "tori", m: "Burung" },
  { h: "さかな", r: "sakana", m: "Ikan" },
  { h: "うさぎ", r: "usagi", m: "Kelinci" },
  { h: "くま", r: "kuma", m: "Beruang" },
  { h: "うし", r: "ushi", m: "Sapi" },
  { h: "うま", r: "uma", m: "Kuda" },
  { h: "さる", r: "saru", m: "Monyet" },
  { h: "へび", r: "hebi", m: "Ular" },
  { h: "かめ", r: "kame", m: "Kura-kura" },
  // Alam
  { h: "さくら", r: "sakura", m: "Bunga Sakura" },
  { h: "やま", r: "yama", m: "Gunung" },
  { h: "かわ", r: "kawa", m: "Sungai" },
  { h: "うみ", r: "umi", m: "Laut" },
  { h: "そら", r: "sora", m: "Langit" },
  { h: "はな", r: "hana", m: "Bunga" },
  { h: "き", r: "ki", m: "Pohon" },
  { h: "もり", r: "mori", m: "Hutan" },
  { h: "しま", r: "shima", m: "Pulau" },
  // Benda sehari-hari
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
  { h: "あめ", r: "ame", m: "Hujan" },
  { h: "かぜ", r: "kaze", m: "Angin" },
  { h: "ゆき", r: "yuki", m: "Salju" },
  { h: "かみ", r: "kami", m: "Kertas" },
  { h: "はし", r: "hashi", m: "Sumpit" },
  { h: "まど", r: "mado", m: "Jendela" },
  { h: "ドア", r: "doa", m: "Pintu" },
  // Makanan & Minuman
  { h: "ごはん", r: "gohan", m: "Nasi" },
  { h: "みそしる", r: "misoshiru", m: "Sup Miso" },
  { h: "たまご", r: "tamago", m: "Telur" },
  { h: "にく", r: "niku", m: "Daging" },
  { h: "やさい", r: "yasai", m: "Sayuran" },
  { h: "くだもの", r: "kudamono", m: "Buah-buahan" },
  { h: "おちゃ", r: "ocha", m: "Teh" },
  { h: "さとう", r: "satou", m: "Gula" },
  { h: "しお", r: "shio", m: "Garam" },
  // Kata sifat/kondisi
  { h: "あたらしい", r: "atarashii", m: "Baru" },
  { h: "ふるい", r: "furui", m: "Lama / Tua" },
  { h: "おおきい", r: "ookii", m: "Besar" },
  { h: "ちいさい", r: "chiisai", m: "Kecil" },
  { h: "はやい", r: "hayai", m: "Cepat" },
  { h: "おそい", r: "osoi", m: "Lambat" },
  { h: "あつい", r: "atsui", m: "Panas" },
  { h: "さむい", r: "samui", m: "Dingin" },
  // Kata kerja dasar
  { h: "たべる", r: "taberu", m: "Makan" },
  { h: "のむ", r: "nomu", m: "Minum" },
  { h: "みる", r: "miru", m: "Melihat" },
  { h: "きく", r: "kiku", m: "Mendengar" },
  { h: "はなす", r: "hanasu", m: "Berbicara" },
  { h: "いく", r: "iku", m: "Pergi" },
  { h: "くる", r: "kuru", m: "Datang" },
  { h: "かく", r: "kaku", m: "Menulis" },
  { h: "よむ", r: "yomu", m: "Membaca" },
  { h: "ねる", r: "neru", m: "Tidur" },
  { h: "おきる", r: "okiru", m: "Bangun" },
  { h: "かう", r: "kau", m: "Membeli" },
  { h: "うる", r: "uru", m: "Menjual" },
  { h: "あそぶ", r: "asobu", m: "Bermain" },
  { h: "はたらく", r: "hataraku", m: "Bekerja" }
];

const vocabularyKatakana = [
  // Teknologi & Elektronik
  { h: "テレビ", r: "terebi", m: "Televisi" },
  { h: "カメラ", r: "kamera", m: "Kamera" },
  { h: "スマホ", r: "sumaho", m: "Ponsel Pintar" },
  { h: "パソコン", r: "pasokon", m: "Komputer PC" },
  { h: "ラジオ", r: "rajio", m: "Radio" },
  { h: "エアコン", r: "eakon", m: "AC / Penyejuk Udara" },
  { h: "ロボット", r: "robotto", m: "Robot" },
  { h: "インターネット", r: "intaanetto", m: "Internet" },
  { h: "ゲーム", r: "geemu", m: "Permainan / Game" },
  // Transportasi
  { h: "タクシー", r: "takushii", m: "Taksi" },
  { h: "バス", r: "basu", m: "Bus" },
  { h: "トラック", r: "torakku", m: "Truk" },
  { h: "バイク", r: "baiku", m: "Motor" },
  { h: "ヘリコプター", r: "herikoputaa", m: "Helikopter" },
  // Tempat
  { h: "ホテル", r: "hoteru", m: "Hotel" },
  { h: "レストラン", r: "resutoran", m: "Restoran" },
  { h: "スーパー", r: "suupaa", m: "Supermarket" },
  { h: "デパート", r: "depaato", m: "Department Store" },
  { h: "アパート", r: "apaato", m: "Apartemen" },
  { h: "マンション", r: "manshon", m: "Gedung Apartemen" },
  // Makanan & Minuman
  { h: "コーヒー", r: "koohii", m: "Kopi" },
  { h: "パン", r: "pan", m: "Roti" },
  { h: "ケーキ", r: "keeki", m: "Kue" },
  { h: "アイスクリーム", r: "aisukuriimu", m: "Es Krim" },
  { h: "ジュース", r: "juusu", m: "Jus" },
  { h: "ビール", r: "biiru", m: "Bir" },
  { h: "チョコレート", r: "chokoreeto", m: "Cokelat" },
  { h: "ピザ", r: "piza", m: "Pizza" },
  { h: "ハンバーガー", r: "hanbaagaa", m: "Hamburger" },
  { h: "カレー", r: "karee", m: "Kari" },
  // Pakaian & Aksesoris
  { h: "シャツ", r: "shatsu", m: "Kemeja" },
  { h: "ジャケット", r: "jaketto", m: "Jaket" },
  { h: "コート", r: "kooto", m: "Mantel" },
  { h: "ズボン", r: "zubon", m: "Celana" },
  { h: "ネクタイ", r: "nekutai", m: "Dasi" },
  // Olahraga & Hiburan
  { h: "サッカー", r: "sakkaa", m: "Sepak Bola" },
  { h: "テニス", r: "tenisu", m: "Tenis" },
  { h: "バスケット", r: "basuketto", m: "Basket" },
  { h: "スポーツ", r: "supootsu", m: "Olahraga" },
  { h: "コンサート", r: "konsaato", m: "Konser" },
  { h: "ミュージック", r: "myuujikku", m: "Musik" },
  // Lain-lain
  { h: "トイレ", r: "toire", m: "Toilet" },
  { h: "ノート", r: "nooto", m: "Buku Catatan" },
  { h: "ペン", r: "pen", m: "Pena" },
  { h: "ナイフ", r: "naifu", m: "Pisau" },
  { h: "フォーク", r: "fooku", m: "Garpu" },
  { h: "スプーン", r: "supuun", m: "Sendok" },
  { h: "テーブル", r: "teeburu", m: "Meja" },
  { h: "チケット", r: "chiketto", m: "Tiket" },
  { h: "ポケット", r: "poketto", m: "Saku" },
  { h: "ボタン", r: "botan", m: "Tombol / Kancing" }
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

// ===== Anti-Repeat Tracking =====
const HISTORY_LIMIT = 8; // how many recent answers to remember
let quizHistory = [];   // tracks recent correctAnswers for quiz
let vocabHistory = [];  // tracks recent vocab words shown

function addToHistory(historyArr, key) {
  historyArr.push(key);
  if (historyArr.length > HISTORY_LIMIT) historyArr.shift();
}

function getUnseenItem(pool, historyArr, keyFn) {
  // Try to find an item not in history
  const unseen = pool.filter(item => !historyArr.includes(keyFn(item)));
  const source = unseen.length > 0 ? unseen : pool; // fallback to full pool if all seen
  return shuffle([...source])[0];
}

function updateActiveData() {
  // Reset histories when mode changes
  quizHistory = [];
  vocabHistory = [];
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
  const views = [
    "menu", "quiz", "kanaPage", "quest", "dragDrop",
    "writing", "vocabMode", "tofuguSetup", "tofuguQuiz", "tofuguResult",
    "formQuizSetup", "formQuiz", "formQuizResult"
  ];
  views.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });
  // Hide top header during quizzes/views to keep screen clean and prevent scroll issues on mobile
  const header = document.getElementById("appHeader");
  if (header) header.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function backToMenu() {
  hideAll();
  const menu = document.getElementById("menu");
  if (menu) menu.classList.remove("hidden");
  // Show header again when returning to main menu
  const header = document.getElementById("appHeader");
  if (header) header.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: 'instant' });
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
    if(h[0] === "") {
       card.className = "kana-card empty";
    } else {
       card.className = "kana-card";
       card.innerHTML = `<span class="char">${h[1]}</span><span class="romaji">${h[0]}</span>`;
    }
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
  const validData = activeData.filter(h => h[0] !== "");

  // Pick an unseen combination of characters
  const word = [];
  const usedRomaji = new Set();
  for (let i = 0; i < wordLength; i++) {
    const available = validData.filter(h => !usedRomaji.has(h[0]));
    const pick = getUnseenItem(available.length > 0 ? available : validData, i === 0 ? quizHistory : [], item => item[1]);
    word.push(pick);
    usedRomaji.add(pick[0]);
  }

  correctAnswer = word.map((w) => w[1]).join("");
  addToHistory(quizHistory, correctAnswer);
  
  const shortName = activeName.split(" ")[0]; // "Hiragana" or "Katakana"
  document.getElementById("question").innerHTML = `Mana ${shortName.toLowerCase()} untuk: <br><b>${word.map((w) => w[0]).join(" ")}</b>`;
  
  // Generate unique wrong options, also avoiding repetition
  const opts = new Set([correctAnswer]);
  let attempt = 0;
  while (opts.size < 4 && attempt < 50) {
    attempt++;
    const candidate = shuffle([...validData]).slice(0, wordLength).map((w) => w[1]).join("");
    if (candidate !== correctAnswer) opts.add(candidate);
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
  // Anti-repeat: pick a vocab not recently shown
  const selectedVocab = getUnseenItem(activeVocab, vocabHistory, item => item.h);
  currentVocabCorrect = selectedVocab.m;
  addToHistory(vocabHistory, selectedVocab.h);
  
  document.getElementById("vocabQuestion").innerHTML = `Apa arti dari kata ini? <br><b>${selectedVocab.h}</b><span class="romaji-hint">(${selectedVocab.r})</span>`;
  
  // Generate 3 unique wrong answers (distractors)
  const opts = new Set([currentVocabCorrect]);
  let attempt = 0;
  while (opts.size < 4 && attempt < 50) {
    attempt++;
    opts.add(activeVocab[Math.floor(Math.random() * activeVocab.length)].m);
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
  const validData = activeData.filter(h => h[0] !== "");
  const word = shuffle([...validData]).slice(0, 3);
  const correct = word.map((w) => w[1]).join("");
  document.getElementById("questQuestion").innerHTML = `Manakah susunan huruf untuk: <br><b>${word.map((w) => w[0]).join(" ")}</b>`;
  
  const opts = new Set([correct]);
  while (opts.size < 3) {
    opts.add(shuffle([...validData]).slice(0, 3).map((w) => w[1]).join(""));
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
  const validData = activeData.filter(h => h[0] !== "");
  const words = shuffle([...validData]).slice(0, 3);
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
ctx.strokeStyle = "#F8FAFC";

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
  const validData = activeData.filter(h => h[0] !== "");
  const availableTemplates = Object.keys(templates);
  const word = shuffle(validData.filter(h => availableTemplates.includes(h[1]))).slice(0, 1);
  
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

// =============================================================================
// TOFUGU-STYLE KANA TYPING QUIZ ENGINE
// =============================================================================

const tofuguKanaData = [
  // HIRAGANA BASIC (46)
  { script: 'hiragana', category: 'basic', row: 'vowels', romaji: 'a', kana: 'あ', aliases: ['a'], rowName: 'Vokal (A-I-U-E-O)' },
  { script: 'hiragana', category: 'basic', row: 'vowels', romaji: 'i', kana: 'い', aliases: ['i'], rowName: 'Vokal (A-I-U-E-O)' },
  { script: 'hiragana', category: 'basic', row: 'vowels', romaji: 'u', kana: 'う', aliases: ['u'], rowName: 'Vokal (A-I-U-E-O)' },
  { script: 'hiragana', category: 'basic', row: 'vowels', romaji: 'e', kana: 'え', aliases: ['e'], rowName: 'Vokal (A-I-U-E-O)' },
  { script: 'hiragana', category: 'basic', row: 'vowels', romaji: 'o', kana: 'お', aliases: ['o'], rowName: 'Vokal (A-I-U-E-O)' },
  { script: 'hiragana', category: 'basic', row: 'k', romaji: 'ka', kana: 'か', aliases: ['ka'], rowName: 'Baris K (Ka-Ko)' },
  { script: 'hiragana', category: 'basic', row: 'k', romaji: 'ki', kana: 'き', aliases: ['ki'], rowName: 'Baris K (Ka-Ko)' },
  { script: 'hiragana', category: 'basic', row: 'k', romaji: 'ku', kana: 'く', aliases: ['ku'], rowName: 'Baris K (Ka-Ko)' },
  { script: 'hiragana', category: 'basic', row: 'k', romaji: 'ke', kana: 'け', aliases: ['ke'], rowName: 'Baris K (Ka-Ko)' },
  { script: 'hiragana', category: 'basic', row: 'k', romaji: 'ko', kana: 'こ', aliases: ['ko'], rowName: 'Baris K (Ka-Ko)' },
  { script: 'hiragana', category: 'basic', row: 's', romaji: 'sa', kana: 'さ', aliases: ['sa'], rowName: 'Baris S (Sa-So)' },
  { script: 'hiragana', category: 'basic', row: 's', romaji: 'shi', kana: 'し', aliases: ['shi', 'si'], rowName: 'Baris S (Sa-So)' },
  { script: 'hiragana', category: 'basic', row: 's', romaji: 'su', kana: 'す', aliases: ['su'], rowName: 'Baris S (Sa-So)' },
  { script: 'hiragana', category: 'basic', row: 's', romaji: 'se', kana: 'せ', aliases: ['se'], rowName: 'Baris S (Sa-So)' },
  { script: 'hiragana', category: 'basic', row: 's', romaji: 'so', kana: 'そ', aliases: ['so'], rowName: 'Baris S (Sa-So)' },
  { script: 'hiragana', category: 'basic', row: 't', romaji: 'ta', kana: 'た', aliases: ['ta'], rowName: 'Baris T (Ta-To)' },
  { script: 'hiragana', category: 'basic', row: 't', romaji: 'chi', kana: 'ち', aliases: ['chi', 'ti'], rowName: 'Baris T (Ta-To)' },
  { script: 'hiragana', category: 'basic', row: 't', romaji: 'tsu', kana: 'つ', aliases: ['tsu', 'tu'], rowName: 'Baris T (Ta-To)' },
  { script: 'hiragana', category: 'basic', row: 't', romaji: 'te', kana: 'て', aliases: ['te'], rowName: 'Baris T (Ta-To)' },
  { script: 'hiragana', category: 'basic', row: 't', romaji: 'to', kana: 'と', aliases: ['to'], rowName: 'Baris T (Ta-To)' },
  { script: 'hiragana', category: 'basic', row: 'n_row', romaji: 'na', kana: 'な', aliases: ['na'], rowName: 'Baris N (Na-No)' },
  { script: 'hiragana', category: 'basic', row: 'n_row', romaji: 'ni', kana: 'に', aliases: ['ni'], rowName: 'Baris N (Na-No)' },
  { script: 'hiragana', category: 'basic', row: 'n_row', romaji: 'nu', kana: 'ぬ', aliases: ['nu'], rowName: 'Baris N (Na-No)' },
  { script: 'hiragana', category: 'basic', row: 'n_row', romaji: 'ne', kana: 'ね', aliases: ['ne'], rowName: 'Baris N (Na-No)' },
  { script: 'hiragana', category: 'basic', row: 'n_row', romaji: 'no', kana: 'の', aliases: ['no'], rowName: 'Baris N (Na-No)' },
  { script: 'hiragana', category: 'basic', row: 'h', romaji: 'ha', kana: 'は', aliases: ['ha'], rowName: 'Baris H (Ha-Ho)' },
  { script: 'hiragana', category: 'basic', row: 'h', romaji: 'hi', kana: 'ひ', aliases: ['hi'], rowName: 'Baris H (Ha-Ho)' },
  { script: 'hiragana', category: 'basic', row: 'h', romaji: 'fu', kana: 'ふ', aliases: ['fu', 'hu'], rowName: 'Baris H (Ha-Ho)' },
  { script: 'hiragana', category: 'basic', row: 'h', romaji: 'he', kana: 'へ', aliases: ['he'], rowName: 'Baris H (Ha-Ho)' },
  { script: 'hiragana', category: 'basic', row: 'h', romaji: 'ho', kana: 'ほ', aliases: ['ho'], rowName: 'Baris H (Ha-Ho)' },
  { script: 'hiragana', category: 'basic', row: 'm', romaji: 'ma', kana: 'ま', aliases: ['ma'], rowName: 'Baris M (Ma-Mo)' },
  { script: 'hiragana', category: 'basic', row: 'm', romaji: 'mi', kana: 'み', aliases: ['mi'], rowName: 'Baris M (Ma-Mo)' },
  { script: 'hiragana', category: 'basic', row: 'm', romaji: 'mu', kana: 'む', aliases: ['mu'], rowName: 'Baris M (Ma-Mo)' },
  { script: 'hiragana', category: 'basic', row: 'm', romaji: 'me', kana: 'め', aliases: ['me'], rowName: 'Baris M (Ma-Mo)' },
  { script: 'hiragana', category: 'basic', row: 'm', romaji: 'mo', kana: 'も', aliases: ['mo'], rowName: 'Baris M (Ma-Mo)' },
  { script: 'hiragana', category: 'basic', row: 'y', romaji: 'ya', kana: 'や', aliases: ['ya'], rowName: 'Baris Y (Ya-Yo)' },
  { script: 'hiragana', category: 'basic', row: 'y', romaji: 'yu', kana: 'ゆ', aliases: ['yu'], rowName: 'Baris Y (Ya-Yo)' },
  { script: 'hiragana', category: 'basic', row: 'y', romaji: 'yo', kana: 'よ', aliases: ['yo'], rowName: 'Baris Y (Ya-Yo)' },
  { script: 'hiragana', category: 'basic', row: 'r', romaji: 'ra', kana: 'ら', aliases: ['ra'], rowName: 'Baris R (Ra-Ro)' },
  { script: 'hiragana', category: 'basic', row: 'r', romaji: 'ri', kana: 'り', aliases: ['ri'], rowName: 'Baris R (Ra-Ro)' },
  { script: 'hiragana', category: 'basic', row: 'r', romaji: 'ru', kana: 'る', aliases: ['ru'], rowName: 'Baris R (Ra-Ro)' },
  { script: 'hiragana', category: 'basic', row: 'r', romaji: 're', kana: 'れ', aliases: ['re'], rowName: 'Baris R (Ra-Ro)' },
  { script: 'hiragana', category: 'basic', row: 'r', romaji: 'ro', kana: 'ろ', aliases: ['ro'], rowName: 'Baris R (Ra-Ro)' },
  { script: 'hiragana', category: 'basic', row: 'w', romaji: 'wa', kana: 'わ', aliases: ['wa'], rowName: 'Baris W & N' },
  { script: 'hiragana', category: 'basic', row: 'w', romaji: 'wo', kana: 'を', aliases: ['wo', 'o'], rowName: 'Baris W & N' },
  { script: 'hiragana', category: 'basic', row: 'w', romaji: 'n', kana: 'ん', aliases: ['n', 'nn'], rowName: 'Baris W & N' },

  // HIRAGANA DAKUTEN (25)
  { script: 'hiragana', category: 'dakuten', row: 'g', romaji: 'ga', kana: 'が', aliases: ['ga'], rowName: 'Dakuten G (Ga-Go)' },
  { script: 'hiragana', category: 'dakuten', row: 'g', romaji: 'gi', kana: 'ぎ', aliases: ['gi'], rowName: 'Dakuten G (Ga-Go)' },
  { script: 'hiragana', category: 'dakuten', row: 'g', romaji: 'gu', kana: 'ぐ', aliases: ['gu'], rowName: 'Dakuten G (Ga-Go)' },
  { script: 'hiragana', category: 'dakuten', row: 'g', romaji: 'ge', kana: 'げ', aliases: ['ge'], rowName: 'Dakuten G (Ga-Go)' },
  { script: 'hiragana', category: 'dakuten', row: 'g', romaji: 'go', kana: 'ご', aliases: ['go'], rowName: 'Dakuten G (Ga-Go)' },
  { script: 'hiragana', category: 'dakuten', row: 'z', romaji: 'za', kana: 'ざ', aliases: ['za'], rowName: 'Dakuten Z (Za-Zo)' },
  { script: 'hiragana', category: 'dakuten', row: 'z', romaji: 'ji', kana: 'じ', aliases: ['ji', 'zi'], rowName: 'Dakuten Z (Za-Zo)' },
  { script: 'hiragana', category: 'dakuten', row: 'z', romaji: 'zu', kana: 'ず', aliases: ['zu'], rowName: 'Dakuten Z (Za-Zo)' },
  { script: 'hiragana', category: 'dakuten', row: 'z', romaji: 'ze', kana: 'ぜ', aliases: ['ze'], rowName: 'Dakuten Z (Za-Zo)' },
  { script: 'hiragana', category: 'dakuten', row: 'z', romaji: 'zo', kana: 'ぞ', aliases: ['zo'], rowName: 'Dakuten Z (Za-Zo)' },
  { script: 'hiragana', category: 'dakuten', row: 'd', romaji: 'da', kana: 'だ', aliases: ['da'], rowName: 'Dakuten D (Da-Do)' },
  { script: 'hiragana', category: 'dakuten', row: 'd', romaji: 'ji', kana: 'ぢ', aliases: ['ji', 'di', 'zi'], rowName: 'Dakuten D (Da-Do)' },
  { script: 'hiragana', category: 'dakuten', row: 'd', romaji: 'zu', kana: 'づ', aliases: ['zu', 'du'], rowName: 'Dakuten D (Da-Do)' },
  { script: 'hiragana', category: 'dakuten', row: 'd', romaji: 'de', kana: 'で', aliases: ['de'], rowName: 'Dakuten D (Da-Do)' },
  { script: 'hiragana', category: 'dakuten', row: 'd', romaji: 'do', kana: 'ど', aliases: ['do'], rowName: 'Dakuten D (Da-Do)' },
  { script: 'hiragana', category: 'dakuten', row: 'b', romaji: 'ba', kana: 'ば', aliases: ['ba'], rowName: 'Dakuten B (Ba-Bo)' },
  { script: 'hiragana', category: 'dakuten', row: 'b', romaji: 'bi', kana: 'び', aliases: ['bi'], rowName: 'Dakuten B (Ba-Bo)' },
  { script: 'hiragana', category: 'dakuten', row: 'b', romaji: 'bu', kana: 'ぶ', aliases: ['bu'], rowName: 'Dakuten B (Ba-Bo)' },
  { script: 'hiragana', category: 'dakuten', row: 'b', romaji: 'be', kana: 'べ', aliases: ['be'], rowName: 'Dakuten B (Ba-Bo)' },
  { script: 'hiragana', category: 'dakuten', row: 'b', romaji: 'bo', kana: 'ぼ', aliases: ['bo'], rowName: 'Dakuten B (Ba-Bo)' },
  { script: 'hiragana', category: 'dakuten', row: 'p', romaji: 'pa', kana: 'ぱ', aliases: ['pa'], rowName: 'Handakuten P (Pa-Po)' },
  { script: 'hiragana', category: 'dakuten', row: 'p', romaji: 'pi', kana: 'ぴ', aliases: ['pi'], rowName: 'Handakuten P (Pa-Po)' },
  { script: 'hiragana', category: 'dakuten', row: 'p', romaji: 'pu', kana: 'ぷ', aliases: ['pu'], rowName: 'Handakuten P (Pa-Po)' },
  { script: 'hiragana', category: 'dakuten', row: 'p', romaji: 'pe', kana: 'ぺ', aliases: ['pe'], rowName: 'Handakuten P (Pa-Po)' },
  { script: 'hiragana', category: 'dakuten', row: 'p', romaji: 'po', kana: 'ぽ', aliases: ['po'], rowName: 'Handakuten P (Pa-Po)' },

  // HIRAGANA YOON (33)
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'kya', kana: 'きゃ', aliases: ['kya'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'kyu', kana: 'きゅ', aliases: ['kyu'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'kyo', kana: 'きょ', aliases: ['kyo'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'sha', kana: 'しゃ', aliases: ['sha', 'sya'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'shu', kana: 'しゅ', aliases: ['shu', 'syu'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'sho', kana: 'しょ', aliases: ['sho', 'syo'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'cha', kana: 'ちゃ', aliases: ['cha', 'tya'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'chu', kana: 'ちゅ', aliases: ['chu', 'tyu'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'cho', kana: 'ちょ', aliases: ['cho', 'tyo'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'nya', kana: 'にゃ', aliases: ['nya'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'nyu', kana: 'にゅ', aliases: ['nyu'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'nyo', kana: 'にょ', aliases: ['nyo'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'hya', kana: 'ひゃ', aliases: ['hya'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'hyu', kana: 'ひゅ', aliases: ['hyu'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'hyo', kana: 'ひょ', aliases: ['hyo'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'mya', kana: 'みゃ', aliases: ['mya'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'myu', kana: 'みゅ', aliases: ['myu'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'myo', kana: 'みょ', aliases: ['myo'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'rya', kana: 'りゃ', aliases: ['rya'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'ryu', kana: 'りゅ', aliases: ['ryu'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'ryo', kana: 'りょ', aliases: ['ryo'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'gya', kana: 'ぎゃ', aliases: ['gya'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'gyu', kana: 'ぎゅ', aliases: ['gyu'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'gyo', kana: 'ぎょ', aliases: ['gyo'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'ja', kana: 'じゃ', aliases: ['ja', 'jya', 'zya'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'ju', kana: 'じゅ', aliases: ['ju', 'jyu', 'zyu'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'jo', kana: 'じょ', aliases: ['jo', 'jyo', 'zyo'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'bya', kana: 'びゃ', aliases: ['bya'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'byu', kana: 'びゅ', aliases: ['byu'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'byo', kana: 'びょ', aliases: ['byo'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'pya', kana: 'ぴゃ', aliases: ['pya'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'pyu', kana: 'ぴゅ', aliases: ['pyu'], rowName: 'Kombinasi Yoon' },
  { script: 'hiragana', category: 'combo', row: 'combo', romaji: 'pyo', kana: 'ぴょ', aliases: ['pyo'], rowName: 'Kombinasi Yoon' },

  // KATAKANA BASIC (46)
  { script: 'katakana', category: 'basic', row: 'vowels', romaji: 'a', kana: 'ア', aliases: ['a'], rowName: 'Vokal (A-I-U-E-O)' },
  { script: 'katakana', category: 'basic', row: 'vowels', romaji: 'i', kana: 'イ', aliases: ['i'], rowName: 'Vokal (A-I-U-E-O)' },
  { script: 'katakana', category: 'basic', row: 'vowels', romaji: 'u', kana: 'ウ', aliases: ['u'], rowName: 'Vokal (A-I-U-E-O)' },
  { script: 'katakana', category: 'basic', row: 'vowels', romaji: 'e', kana: 'エ', aliases: ['e'], rowName: 'Vokal (A-I-U-E-O)' },
  { script: 'katakana', category: 'basic', row: 'vowels', romaji: 'o', kana: 'オ', aliases: ['o'], rowName: 'Vokal (A-I-U-E-O)' },
  { script: 'katakana', category: 'basic', row: 'k', romaji: 'ka', kana: 'カ', aliases: ['ka'], rowName: 'Baris K (Ka-Ko)' },
  { script: 'katakana', category: 'basic', row: 'k', romaji: 'ki', kana: 'キ', aliases: ['ki'], rowName: 'Baris K (Ka-Ko)' },
  { script: 'katakana', category: 'basic', row: 'k', romaji: 'ku', kana: 'ク', aliases: ['ku'], rowName: 'Baris K (Ka-Ko)' },
  { script: 'katakana', category: 'basic', row: 'k', romaji: 'ke', kana: 'ケ', aliases: ['ke'], rowName: 'Baris K (Ka-Ko)' },
  { script: 'katakana', category: 'basic', row: 'k', romaji: 'ko', kana: 'コ', aliases: ['ko'], rowName: 'Baris K (Ka-Ko)' },
  { script: 'katakana', category: 'basic', row: 's', romaji: 'sa', kana: 'サ', aliases: ['sa'], rowName: 'Baris S (Sa-So)' },
  { script: 'katakana', category: 'basic', row: 's', romaji: 'shi', kana: 'シ', aliases: ['shi', 'si'], rowName: 'Baris S (Sa-So)' },
  { script: 'katakana', category: 'basic', row: 's', romaji: 'su', kana: 'ス', aliases: ['su'], rowName: 'Baris S (Sa-So)' },
  { script: 'katakana', category: 'basic', row: 's', romaji: 'se', kana: 'セ', aliases: ['se'], rowName: 'Baris S (Sa-So)' },
  { script: 'katakana', category: 'basic', row: 's', romaji: 'so', kana: 'ソ', aliases: ['so'], rowName: 'Baris S (Sa-So)' },
  { script: 'katakana', category: 'basic', row: 't', romaji: 'ta', kana: 'タ', aliases: ['ta'], rowName: 'Baris T (Ta-To)' },
  { script: 'katakana', category: 'basic', row: 't', romaji: 'chi', kana: 'チ', aliases: ['chi', 'ti'], rowName: 'Baris T (Ta-To)' },
  { script: 'katakana', category: 'basic', row: 't', romaji: 'tsu', kana: 'ツ', aliases: ['tsu', 'tu'], rowName: 'Baris T (Ta-To)' },
  { script: 'katakana', category: 'basic', row: 't', romaji: 'te', kana: 'テ', aliases: ['te'], rowName: 'Baris T (Ta-To)' },
  { script: 'katakana', category: 'basic', row: 't', romaji: 'to', kana: 'ト', aliases: ['to'], rowName: 'Baris T (Ta-To)' },
  { script: 'katakana', category: 'basic', row: 'n_row', romaji: 'na', kana: 'ナ', aliases: ['na'], rowName: 'Baris N (Na-No)' },
  { script: 'katakana', category: 'basic', row: 'n_row', romaji: 'ni', kana: 'ニ', aliases: ['ni'], rowName: 'Baris N (Na-No)' },
  { script: 'katakana', category: 'basic', row: 'n_row', romaji: 'nu', kana: 'ヌ', aliases: ['nu'], rowName: 'Baris N (Na-No)' },
  { script: 'katakana', category: 'basic', row: 'n_row', romaji: 'ne', kana: 'ネ', aliases: ['ne'], rowName: 'Baris N (Na-No)' },
  { script: 'katakana', category: 'basic', row: 'n_row', romaji: 'no', kana: 'ノ', aliases: ['no'], rowName: 'Baris N (Na-No)' },
  { script: 'katakana', category: 'basic', row: 'h', romaji: 'ha', kana: 'ハ', aliases: ['ha'], rowName: 'Baris H (Ha-Ho)' },
  { script: 'katakana', category: 'basic', row: 'h', romaji: 'hi', kana: 'ヒ', aliases: ['hi'], rowName: 'Baris H (Ha-Ho)' },
  { script: 'katakana', category: 'basic', row: 'h', romaji: 'fu', kana: 'フ', aliases: ['fu', 'hu'], rowName: 'Baris H (Ha-Ho)' },
  { script: 'katakana', category: 'basic', row: 'h', romaji: 'he', kana: 'ヘ', aliases: ['he'], rowName: 'Baris H (Ha-Ho)' },
  { script: 'katakana', category: 'basic', row: 'h', romaji: 'ho', kana: 'ホ', aliases: ['ho'], rowName: 'Baris H (Ha-Ho)' },
  { script: 'katakana', category: 'basic', row: 'm', romaji: 'ma', kana: 'マ', aliases: ['ma'], rowName: 'Baris M (Ma-Mo)' },
  { script: 'katakana', category: 'basic', row: 'm', romaji: 'mi', kana: 'ミ', aliases: ['mi'], rowName: 'Baris M (Ma-Mo)' },
  { script: 'katakana', category: 'basic', row: 'm', romaji: 'mu', kana: 'ム', aliases: ['mu'], rowName: 'Baris M (Ma-Mo)' },
  { script: 'katakana', category: 'basic', row: 'm', romaji: 'me', kana: 'メ', aliases: ['me'], rowName: 'Baris M (Ma-Mo)' },
  { script: 'katakana', category: 'basic', row: 'm', romaji: 'mo', kana: 'モ', aliases: ['mo'], rowName: 'Baris M (Ma-Mo)' },
  { script: 'katakana', category: 'basic', row: 'y', romaji: 'ya', kana: 'ヤ', aliases: ['ya'], rowName: 'Baris Y (Ya-Yo)' },
  { script: 'katakana', category: 'basic', row: 'y', romaji: 'yu', kana: 'ユ', aliases: ['yu'], rowName: 'Baris Y (Ya-Yo)' },
  { script: 'katakana', category: 'basic', row: 'y', romaji: 'yo', kana: 'ヨ', aliases: ['yo'], rowName: 'Baris Y (Ya-Yo)' },
  { script: 'katakana', category: 'basic', row: 'r', romaji: 'ra', kana: 'ラ', aliases: ['ra'], rowName: 'Baris R (Ra-Ro)' },
  { script: 'katakana', category: 'basic', row: 'r', romaji: 'ri', kana: 'リ', aliases: ['ri'], rowName: 'Baris R (Ra-Ro)' },
  { script: 'katakana', category: 'basic', row: 'r', romaji: 'ru', kana: 'ル', aliases: ['ru'], rowName: 'Baris R (Ra-Ro)' },
  { script: 'katakana', category: 'basic', row: 'r', romaji: 're', kana: 'レ', aliases: ['re'], rowName: 'Baris R (Ra-Ro)' },
  { script: 'katakana', category: 'basic', row: 'r', romaji: 'ro', kana: 'ロ', aliases: ['ro'], rowName: 'Baris R (Ra-Ro)' },
  { script: 'katakana', category: 'basic', row: 'w', romaji: 'wa', kana: 'ワ', aliases: ['wa'], rowName: 'Baris W & N' },
  { script: 'katakana', category: 'basic', row: 'w', romaji: 'wo', kana: 'ヲ', aliases: ['wo', 'o'], rowName: 'Baris W & N' },
  { script: 'katakana', category: 'basic', row: 'w', romaji: 'n', kana: 'ン', aliases: ['n', 'nn'], rowName: 'Baris W & N' },

  // KATAKANA DAKUTEN (25)
  { script: 'katakana', category: 'dakuten', row: 'g', romaji: 'ga', kana: 'ガ', aliases: ['ga'], rowName: 'Dakuten G (Ga-Go)' },
  { script: 'katakana', category: 'dakuten', row: 'g', romaji: 'gi', kana: 'ギ', aliases: ['gi'], rowName: 'Dakuten G (Ga-Go)' },
  { script: 'katakana', category: 'dakuten', row: 'g', romaji: 'gu', kana: 'グ', aliases: ['gu'], rowName: 'Dakuten G (Ga-Go)' },
  { script: 'katakana', category: 'dakuten', row: 'g', romaji: 'ge', kana: 'ゲ', aliases: ['ge'], rowName: 'Dakuten G (Ga-Go)' },
  { script: 'katakana', category: 'dakuten', row: 'g', romaji: 'go', kana: 'ゴ', aliases: ['go'], rowName: 'Dakuten G (Ga-Go)' },
  { script: 'katakana', category: 'dakuten', row: 'z', romaji: 'za', kana: 'ザ', aliases: ['za'], rowName: 'Dakuten Z (Za-Zo)' },
  { script: 'katakana', category: 'dakuten', row: 'z', romaji: 'ji', kana: 'ジ', aliases: ['ji', 'zi'], rowName: 'Dakuten Z (Za-Zo)' },
  { script: 'katakana', category: 'dakuten', row: 'z', romaji: 'zu', kana: 'ズ', aliases: ['zu'], rowName: 'Dakuten Z (Za-Zo)' },
  { script: 'katakana', category: 'dakuten', row: 'z', romaji: 'ze', kana: 'ゼ', aliases: ['ze'], rowName: 'Dakuten Z (Za-Zo)' },
  { script: 'katakana', category: 'dakuten', row: 'z', romaji: 'zo', kana: 'ゾ', aliases: ['zo'], rowName: 'Dakuten Z (Za-Zo)' },
  { script: 'katakana', category: 'dakuten', row: 'd', romaji: 'da', kana: 'ダ', aliases: ['da'], rowName: 'Dakuten D (Da-Do)' },
  { script: 'katakana', category: 'dakuten', row: 'd', romaji: 'ji', kana: 'ヂ', aliases: ['ji', 'di', 'zi'], rowName: 'Dakuten D (Da-Do)' },
  { script: 'katakana', category: 'dakuten', row: 'd', romaji: 'zu', kana: 'ヅ', aliases: ['zu', 'du'], rowName: 'Dakuten D (Da-Do)' },
  { script: 'katakana', category: 'dakuten', row: 'd', romaji: 'de', kana: 'デ', aliases: ['de'], rowName: 'Dakuten D (Da-Do)' },
  { script: 'katakana', category: 'dakuten', row: 'd', romaji: 'do', kana: 'ド', aliases: ['do'], rowName: 'Dakuten D (Da-Do)' },
  { script: 'katakana', category: 'dakuten', row: 'b', romaji: 'ba', kana: 'バ', aliases: ['ba'], rowName: 'Dakuten B (Ba-Bo)' },
  { script: 'katakana', category: 'dakuten', row: 'b', romaji: 'bi', kana: 'ビ', aliases: ['bi'], rowName: 'Dakuten B (Ba-Bo)' },
  { script: 'katakana', category: 'dakuten', row: 'b', romaji: 'bu', kana: 'ブ', aliases: ['bu'], rowName: 'Dakuten B (Ba-Bo)' },
  { script: 'katakana', category: 'dakuten', row: 'b', romaji: 'be', kana: 'ベ', aliases: ['be'], rowName: 'Dakuten B (Ba-Bo)' },
  { script: 'katakana', category: 'dakuten', row: 'b', romaji: 'bo', kana: 'ボ', aliases: ['bo'], rowName: 'Dakuten B (Ba-Bo)' },
  { script: 'katakana', category: 'dakuten', row: 'p', romaji: 'pa', kana: 'パ', aliases: ['pa'], rowName: 'Handakuten P (Pa-Po)' },
  { script: 'katakana', category: 'dakuten', row: 'p', romaji: 'pi', kana: 'ピ', aliases: ['pi'], rowName: 'Handakuten P (Pa-Po)' },
  { script: 'katakana', category: 'dakuten', row: 'p', romaji: 'pu', kana: 'プ', aliases: ['pu'], rowName: 'Handakuten P (Pa-Po)' },
  { script: 'katakana', category: 'dakuten', row: 'p', romaji: 'pe', kana: 'ペ', aliases: ['pe'], rowName: 'Handakuten P (Pa-Po)' },
  { script: 'katakana', category: 'dakuten', row: 'p', romaji: 'po', kana: 'ポ', aliases: ['po'], rowName: 'Handakuten P (Pa-Po)' },

  // KATAKANA YOON (33)
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'kya', kana: 'キャ', aliases: ['kya'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'kyu', kana: 'キュ', aliases: ['kyu'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'kyo', kana: 'キョ', aliases: ['kyo'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'sha', kana: 'シャ', aliases: ['sha', 'sya'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'shu', kana: 'シュ', aliases: ['shu', 'syu'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'sho', kana: 'ショ', aliases: ['sho', 'syo'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'cha', kana: 'チャ', aliases: ['cha', 'tya'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'chu', kana: 'チュ', aliases: ['chu', 'tyu'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'cho', kana: 'チョ', aliases: ['cho', 'tyo'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'nya', kana: 'ニャ', aliases: ['nya'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'nyu', kana: 'ニュ', aliases: ['nyu'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'nyo', kana: 'ニョ', aliases: ['nyo'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'hya', kana: 'ヒャ', aliases: ['hya'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'hyu', kana: 'ヒュ', aliases: ['hyu'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'hyo', kana: 'ヒョ', aliases: ['hyo'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'mya', kana: 'ミャ', aliases: ['mya'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'myu', kana: 'ミュ', aliases: ['myu'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'myo', kana: 'ミョ', aliases: ['myo'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'rya', kana: 'リャ', aliases: ['rya'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'ryu', kana: 'リュ', aliases: ['ryu'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'ryo', kana: 'リョ', aliases: ['ryo'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'gya', kana: 'ギャ', aliases: ['gya'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'gyu', kana: 'ギュ', aliases: ['gyu'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'gyo', kana: 'ギョ', aliases: ['gyo'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'ja', kana: 'ジャ', aliases: ['ja', 'jya', 'zya'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'ju', kana: 'ジュ', aliases: ['ju', 'jyu', 'zyu'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'jo', kana: 'ジョ', aliases: ['jo', 'jyo', 'zyo'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'bya', kana: 'ビャ', aliases: ['bya'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'byu', kana: 'ビュ', aliases: ['byu'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'byo', kana: 'ビョ', aliases: ['byo'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'pya', kana: 'ピャ', aliases: ['pya'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'pyu', kana: 'ピュ', aliases: ['pyu'], rowName: 'Kombinasi Yoon' },
  { script: 'katakana', category: 'combo', row: 'combo', romaji: 'pyo', kana: 'ピョ', aliases: ['pyo'], rowName: 'Kombinasi Yoon' }
];

const ROW_DEFINITIONS = [
  { id: 'vowels', name: 'Vokal (A-I-U-E-O)', sample: 'あ / ア' },
  { id: 'k', name: 'Baris K (Ka-Ko)', sample: 'か / カ' },
  { id: 's', name: 'Baris S (Sa-So)', sample: 'さ / サ' },
  { id: 't', name: 'Baris T (Ta-To)', sample: 'た / タ' },
  { id: 'n_row', name: 'Baris N (Na-No)', sample: 'な / ナ' },
  { id: 'h', name: 'Baris H (Ha-Ho)', sample: 'は / ハ' },
  { id: 'm', name: 'Baris M (Ma-Mo)', sample: 'ま / マ' },
  { id: 'y', name: 'Baris Y (Ya-Yo)', sample: 'や / ヤ' },
  { id: 'r', name: 'Baris R (Ra-Ro)', sample: 'ら / ラ' },
  { id: 'w', name: 'Baris W & N', sample: 'わ・ん / ワ・ン' },
  { id: 'g', name: 'Dakuten G (Ga-Go)', sample: 'が / ガ' },
  { id: 'z', name: 'Dakuten Z (Za-Zo)', sample: 'ざ / ザ' },
  { id: 'd', name: 'Dakuten D (Da-Do)', sample: 'だ / ダ' },
  { id: 'b', name: 'Dakuten B (Ba-Bo)', sample: 'ば / バ' },
  { id: 'p', name: 'Handakuten P (Pa-Po)', sample: 'ぱ / パ' },
  { id: 'combo', name: 'Kombinasi Yoon', sample: 'きゃ / キャ' }
];

// Audio State & Synthesizer
let tofuguSfxEnabled = true;
let tofuguVoiceEnabled = true;
let tofuguAudioCtx = null;

function initAudioContext() {
  if (!tofuguAudioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      tofuguAudioCtx = new AudioContextClass();
    }
  }
  if (tofuguAudioCtx && tofuguAudioCtx.state === 'suspended') {
    tofuguAudioCtx.resume();
  }
}

function playTofuguSfx(type) {
  if (!tofuguSfxEnabled) return;
  initAudioContext();
  if (!tofuguAudioCtx) return;

  try {
    const now = tofuguAudioCtx.currentTime;
    const osc = tofuguAudioCtx.createOscillator();
    const gain = tofuguAudioCtx.createGain();
    osc.connect(gain);
    gain.connect(tofuguAudioCtx.destination);

    if (type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now); // A5
      osc.frequency.exponentialRampToValueAtTime(1318.5, now + 0.08); // E6
      gain.gain.setValueAtTime(0.16, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc.start(now);
      osc.stop(now + 0.28);
    } else if (type === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.linearRampToValueAtTime(160, now + 0.25);
      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'fanfare') {
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        const o = tofuguAudioCtx.createOscillator();
        const g = tofuguAudioCtx.createGain();
        o.connect(g);
        g.connect(tofuguAudioCtx.destination);
        o.type = 'triangle';
        o.frequency.setValueAtTime(freq, now + idx * 0.1);
        g.gain.setValueAtTime(0.14, now + idx * 0.1);
        g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.28);
        o.start(now + idx * 0.1);
        o.stop(now + idx * 0.1 + 0.28);
      });
    }
  } catch (e) {
    console.error("Audio synth error:", e);
  }
}

function speakJapaneseKana(kanaText) {
  if (!tofuguVoiceEnabled || !('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(kanaText);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.error("SpeechSynthesis error:", e);
  }
}

function speakCurrentTofuguKana() {
  if (!tofuguQuizSession.currentQuestion) return;
  const btn = document.getElementById('cardSpeakerBtn');
  if (btn) {
    btn.classList.add('playing');
    setTimeout(() => btn.classList.remove('playing'), 600);
  }
  speakJapaneseKana(tofuguQuizSession.currentQuestion.kana);
}

// Global Setup State
let tofuguSetupState = {
  alphabet: 'hiragana', // 'hiragana', 'katakana', 'both'
  categories: ['basic', 'dakuten', 'combo'],
  selectedRows: [
    'vowels', 'k', 's', 't', 'n_row', 'h', 'm', 'y', 'r', 'w',
    'g', 'z', 'd', 'b', 'p', 'combo'
  ],
  questionCount: 20
};

// Quiz Session State
let tofuguQuizSession = {
  queue: [],
  currentIndex: 0,
  currentQuestion: null,
  score: 0,
  streak: 0,
  maxStreak: 0,
  correctCount: 0,
  wrongCount: 0,
  missedItems: [],
  isAwaitingNext: false,
  awaitingNextSince: 0
};
let isTofuguSubmitting = false;

// ================= Navigation & Setup Helpers =================

function openTofuguSetup() {
  hideAll();
  const setupEl = document.getElementById("tofuguSetup");
  if (setupEl) {
    setupEl.classList.remove("hidden");
    populateRowChips();
    updateSetupPoolCount();
  }
}

function startQuickTofuguQuiz() {
  // Use current alphabet or default to hiragana, 20 questions
  tofuguSetupState.alphabet = currentAlphabet || 'hiragana';
  tofuguSetupState.categories = ['basic', 'dakuten', 'combo'];
  tofuguSetupState.selectedRows = ROW_DEFINITIONS.map(r => r.id);
  tofuguSetupState.questionCount = 20;
  startTofuguQuiz();
}

function populateRowChips() {
  const container = document.getElementById("rowChipsContainer");
  if (!container) return;
  container.innerHTML = "";

  ROW_DEFINITIONS.forEach(rowDef => {
    const isSelected = tofuguSetupState.selectedRows.includes(rowDef.id);
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `row-chip ${isSelected ? 'active' : ''}`;
    chip.dataset.rowId = rowDef.id;
    chip.innerText = `${rowDef.name} (${rowDef.sample})`;
    chip.onclick = () => toggleRowChip(rowDef.id);
    container.appendChild(chip);
  });
}

function toggleRowChip(rowId) {
  const idx = tofuguSetupState.selectedRows.indexOf(rowId);
  if (idx > -1) {
    // don't allow deselecting everything if it's the last one
    if (tofuguSetupState.selectedRows.length > 1) {
      tofuguSetupState.selectedRows.splice(idx, 1);
    }
  } else {
    tofuguSetupState.selectedRows.push(rowId);
  }
  populateRowChips();
  updateSetupPoolCount();
}

function toggleAllRows(selectAll) {
  if (selectAll) {
    tofuguSetupState.selectedRows = ROW_DEFINITIONS.map(r => r.id);
  } else {
    // Keep at least one row
    tofuguSetupState.selectedRows = ['vowels'];
  }
  populateRowChips();
  updateSetupPoolCount();
}

function setSetupAlphabet(type) {
  tofuguSetupState.alphabet = type;
  const container = document.getElementById("alphabetSelector");
  if (container) {
    [...container.children].forEach(btn => {
      btn.classList.toggle("active", btn.dataset.type === type);
    });
  }
  updatePresetActiveBadge();
  updateSetupPoolCount();
}

function toggleCategoryFilter() {
  const categories = [];
  if (document.getElementById("catBasic")?.checked) categories.push('basic');
  if (document.getElementById("catDakuten")?.checked) categories.push('dakuten');
  if (document.getElementById("catYoon")?.checked) categories.push('combo');

  // Prevent empty selection
  if (categories.length === 0) {
    document.getElementById("catBasic").checked = true;
    categories.push('basic');
  }
  tofuguSetupState.categories = categories;
  updatePresetActiveBadge();
  updateSetupPoolCount();
}

function setSetupQuestionCount(count) {
  tofuguSetupState.questionCount = count;
  const container = document.getElementById("countSelector");
  if (container) {
    [...container.children].forEach(btn => {
      btn.classList.toggle("active", Number(btn.dataset.count) === count);
    });
  }
}

function saveAudioPrefs() {
  tofuguSfxEnabled = document.getElementById("toggleSoundSfx")?.checked ?? true;
  tofuguVoiceEnabled = document.getElementById("toggleSoundVoice")?.checked ?? true;
}

function selectPreset(presetId) {
  if (presetId === 'hiragana-all') {
    tofuguSetupState.alphabet = 'hiragana';
    tofuguSetupState.categories = ['basic', 'dakuten', 'combo'];
    tofuguSetupState.selectedRows = ROW_DEFINITIONS.map(r => r.id);
  } else if (presetId === 'hiragana-basic') {
    tofuguSetupState.alphabet = 'hiragana';
    tofuguSetupState.categories = ['basic'];
    tofuguSetupState.selectedRows = ['vowels', 'k', 's', 't', 'n_row', 'h', 'm', 'y', 'r', 'w'];
  } else if (presetId === 'katakana-all') {
    tofuguSetupState.alphabet = 'katakana';
    tofuguSetupState.categories = ['basic', 'dakuten', 'combo'];
    tofuguSetupState.selectedRows = ROW_DEFINITIONS.map(r => r.id);
  } else if (presetId === 'katakana-basic') {
    tofuguSetupState.alphabet = 'katakana';
    tofuguSetupState.categories = ['basic'];
    tofuguSetupState.selectedRows = ['vowels', 'k', 's', 't', 'n_row', 'h', 'm', 'y', 'r', 'w'];
  } else if (presetId === 'mixed-all') {
    tofuguSetupState.alphabet = 'both';
    tofuguSetupState.categories = ['basic', 'dakuten', 'combo'];
    tofuguSetupState.selectedRows = ROW_DEFINITIONS.map(r => r.id);
  }

  // Sync checkboxes
  if (document.getElementById("catBasic")) {
    document.getElementById("catBasic").checked = tofuguSetupState.categories.includes('basic');
  }
  if (document.getElementById("catDakuten")) {
    document.getElementById("catDakuten").checked = tofuguSetupState.categories.includes('dakuten');
  }
  if (document.getElementById("catYoon")) {
    document.getElementById("catYoon").checked = tofuguSetupState.categories.includes('combo');
  }

  // Sync alphabet buttons
  const container = document.getElementById("alphabetSelector");
  if (container) {
    [...container.children].forEach(btn => {
      btn.classList.toggle("active", btn.dataset.type === tofuguSetupState.alphabet);
    });
  }

  // Update preset buttons styling
  document.querySelectorAll(".preset-btn").forEach(btn => btn.classList.remove("active"));
  const activePresetBtn = {
    'hiragana-all': 'presetHiraAll',
    'hiragana-basic': 'presetHiraBasic',
    'katakana-all': 'presetKataAll',
    'katakana-basic': 'presetKataBasic',
    'mixed-all': 'presetMixedAll'
  }[presetId];
  if (activePresetBtn && document.getElementById(activePresetBtn)) {
    document.getElementById(activePresetBtn).classList.add("active");
  }

  populateRowChips();
  updateSetupPoolCount();
}

function updatePresetActiveBadge() {
  document.querySelectorAll(".preset-btn").forEach(btn => btn.classList.remove("active"));
}

function getFilteredKanaPool() {
  return tofuguKanaData.filter(item => {
    // Alphabet filter
    if (tofuguSetupState.alphabet !== 'both' && item.script !== tofuguSetupState.alphabet) {
      return false;
    }
    // Category filter
    if (!tofuguSetupState.categories.includes(item.category)) {
      return false;
    }
    // Row filter
    if (!tofuguSetupState.selectedRows.includes(item.row)) {
      return false;
    }
    return true;
  });
}

function updateSetupPoolCount() {
  const pool = getFilteredKanaPool();
  const badge = document.getElementById("setupPoolBadge");
  const startBtn = document.getElementById("startTofuguBtn");
  if (badge) {
    badge.innerHTML = `📦 <b>${pool.length}</b> huruf terpilih dalam bank soal`;
  }
  if (startBtn) {
    startBtn.disabled = pool.length === 0;
    if (pool.length === 0) {
      startBtn.innerText = "Pilih Minimal 1 Huruf";
    } else {
      startBtn.innerText = "🚀 Mulai Kuis Sekarang";
    }
  }
}

// ================= Core Quiz Flow =================

function startTofuguQuiz() {
  const pool = getFilteredKanaPool();
  if (pool.length === 0) {
    alert("Silakan pilih minimal satu jenis atau baris huruf pada pengaturan kuis.");
    openTofuguSetup();
    return;
  }

  // Build Queue
  let questions = shuffle([...pool]);
  if (tofuguSetupState.questionCount > 0 && questions.length > tofuguSetupState.questionCount) {
    questions = questions.slice(0, tofuguSetupState.questionCount);
  }

  tofuguQuizSession = {
    queue: questions,
    currentIndex: 0,
    currentQuestion: questions[0],
    score: 0,
    streak: 0,
    maxStreak: 0,
    correctCount: 0,
    wrongCount: 0,
    missedItems: [],
    isAwaitingNext: false,
    awaitingNextSince: 0
  };

  hideAll();
  const quizEl = document.getElementById("tofuguQuiz");
  if (quizEl) quizEl.classList.remove("hidden");

  renderTofuguCard();
}

function renderTofuguCard() {
  const { queue, currentIndex } = tofuguQuizSession;
  if (currentIndex >= queue.length) {
    showTofuguResult();
    return;
  }

  const q = queue[currentIndex];
  tofuguQuizSession.currentQuestion = q;
  tofuguQuizSession.isAwaitingNext = false;
  tofuguQuizSession.awaitingNextSince = 0;
  isTofuguSubmitting = false;

  // Reset Card State & Classes
  const card = document.getElementById("tofuguCard");
  if (card) {
    card.className = "tofugu-card";
  }

  const inputBox = document.getElementById("tofuguAnswerForm") || document.getElementById("tofuguInputBox");
  if (inputBox) {
    inputBox.classList.remove("eval-correct", "eval-wrong");
  }

  // Update Top Stats
  const progressRatio = Math.round(((currentIndex) / queue.length) * 100);
  const progressBar = document.getElementById("tofuguProgressBar");
  if (progressBar) progressBar.style.width = `${progressRatio}%`;

  const progressLabel = document.getElementById("tofuguProgressLabel");
  if (progressLabel) progressLabel.innerText = `Soal ${currentIndex + 1} / ${queue.length}`;

  const streakNum = document.getElementById("tofuguStreakNum");
  if (streakNum) streakNum.innerText = tofuguQuizSession.streak;

  const streakPill = document.getElementById("tofuguStreakPill");
  if (streakPill) {
    streakPill.classList.toggle("streak-hot", tofuguQuizSession.streak >= 3);
  }

  const scoreNum = document.getElementById("tofuguScoreNum");
  if (scoreNum) scoreNum.innerText = tofuguQuizSession.score;

  // Update Card Visuals
  const scriptTag = document.getElementById("cardScriptTag");
  if (scriptTag) {
    scriptTag.innerText = q.script.toUpperCase();
  }

  const kanaGlyph = document.getElementById("cardKanaGlyph");
  if (kanaGlyph) {
    kanaGlyph.innerText = q.kana;
  }

  const catLabel = document.getElementById("cardCategoryLabel");
  if (catLabel) {
    const catNames = {
      'basic': 'Huruf Dasar',
      'dakuten': 'Dakuten / Handakuten',
      'combo': 'Kombinasi Yoon'
    };
    catLabel.innerText = `${catNames[q.category] || 'Kana'} • ${q.rowName}`;
  }

  // Reset Input Field
  const input = document.getElementById("tofuguInput");
  if (input) {
    input.value = "";
    input.disabled = false;
    input.readOnly = false;
    input.focus();
  }

  const submitBtn = document.getElementById("tofuguSubmitBtn");
  if (submitBtn) {
    submitBtn.innerText = "Jawab ↵";
    submitBtn.disabled = false;
  }

  // Hide Both Feedback Cards
  const feedbackCard = document.getElementById("tofuguFeedbackCard");
  if (feedbackCard) {
    feedbackCard.classList.add("hidden");
  }
  const feedbackSuccess = document.getElementById("tofuguFeedbackSuccess");
  if (feedbackSuccess) {
    feedbackSuccess.classList.add("hidden");
  }

  // Automatically speak kana if voice is enabled
  speakJapaneseKana(q.kana);
}

// Check answer tolerance
function isTofuguAnswerCorrect(userInput, questionItem) {
  const clean = userInput.trim().toLowerCase();
  if (!clean) return false;

  // 1. Direct match with kana itself (in case mobile Japanese keyboard is used)
  if (clean === questionItem.kana) return true;

  // 2. Exact match with standard romaji
  if (clean === questionItem.romaji.toLowerCase()) return true;

  // 3. Explicit item aliases
  if (questionItem.aliases && questionItem.aliases.some(a => clean === a.toLowerCase())) {
    return true;
  }

  // 3. Global alternative romaji spellings
  const globalEquivalents = {
    'shi': ['shi', 'si'],
    'chi': ['chi', 'ti'],
    'tsu': ['tsu', 'tu'],
    'fu': ['fu', 'hu'],
    'ji': ['ji', 'zi', 'di'],
    'zu': ['zu', 'du'],
    'wo': ['wo', 'o'],
    'n': ['n', 'nn'],
    'sha': ['sha', 'sya'],
    'shu': ['shu', 'syu'],
    'sho': ['sho', 'syo'],
    'cha': ['cha', 'tya'],
    'chu': ['chu', 'tyu'],
    'cho': ['cho', 'tyo'],
    'ja': ['ja', 'jya', 'zya'],
    'ju': ['ju', 'jyu', 'zyu'],
    'jo': ['jo', 'jyo', 'zyo']
  };

  const allowed = globalEquivalents[questionItem.romaji];
  if (allowed && allowed.includes(clean)) return true;

  return false;
}

function handleTofuguSubmit() {
  if (isTofuguSubmitting) return;

  // If we are currently awaiting the user to advance after seeing wrong answer feedback:
  if (tofuguQuizSession.isAwaitingNext) {
    // Cooldown check: prevent immediate accidental skip (350ms)
    if (Date.now() - tofuguQuizSession.awaitingNextSince < 350) {
      return;
    }
    advanceTofuguQuestion();
    return;
  }

  const input = document.getElementById("tofuguInput");
  if (!input) return;
  const val = input.value.trim();

  // If empty input, shake gently and re-focus
  if (!val) {
    input.focus();
    return;
  }

  const q = tofuguQuizSession.currentQuestion;
  const isCorrect = isTofuguAnswerCorrect(val, q);
  const card = document.getElementById("tofuguCard");
  const formBox = document.getElementById("tofuguAnswerForm");
  const submitBtn = document.getElementById("tofuguSubmitBtn");

  if (isCorrect) {
    // Lock submission so no double triggers happen
    isTofuguSubmitting = true;

    playTofuguSfx('correct');
    tofuguQuizSession.streak++;
    if (tofuguQuizSession.streak > tofuguQuizSession.maxStreak) {
      tofuguQuizSession.maxStreak = tofuguQuizSession.streak;
    }

    const streakBonus = tofuguQuizSession.streak >= 3 ? 5 : 0;
    const earnedPoints = 10 + streakBonus;
    tofuguQuizSession.score += earnedPoints;
    tofuguQuizSession.correctCount++;

    // Visual card & input highlight
    if (card) {
      card.className = "tofugu-card card-correct";
    }
    if (formBox) {
      formBox.classList.add("eval-correct");
    }

    // Show SUCCESS Feedback Card clearly with kana & romaji
    const feedbackSuccess = document.getElementById("tofuguFeedbackSuccess");
    const fbKana = document.getElementById("feedbackSuccessKana");
    const fbRomaji = document.getElementById("feedbackSuccessRomaji");
    if (fbKana) fbKana.innerText = q.kana;
    if (fbRomaji) fbRomaji.innerText = q.romaji;
    if (feedbackSuccess) {
      const bonusText = streakBonus > 0 ? ` (+${streakBonus} Streak Bonus!)` : '';
      const pointsEl = feedbackSuccess.querySelector(".points-badge");
      if (pointsEl) pointsEl.innerText = `+${earnedPoints} Poin${bonusText}`;
      feedbackSuccess.classList.remove("hidden");
    }

    // Set input read-only (so keyboard doesn't bounce and typed answer stays visible)
    input.readOnly = true;
    if (submitBtn) {
      submitBtn.innerText = "✓ Benar!";
      submitBtn.disabled = true;
    }

    // 800ms clear view so user clearly reads the confirmation before advancing
    setTimeout(() => {
      tofuguQuizSession.currentIndex++;
      renderTofuguCard();
    }, 800);

  } else {
    // Wrong Answer Flow
    playTofuguSfx('wrong');
    tofuguQuizSession.streak = 0;
    tofuguQuizSession.wrongCount++;
    tofuguQuizSession.missedItems.push(q);
    tofuguQuizSession.isAwaitingNext = true;
    tofuguQuizSession.awaitingNextSince = Date.now();

    if (card) {
      card.className = "tofugu-card card-wrong";
    }
    if (formBox) {
      formBox.classList.add("eval-wrong");
    }

    // Pronounce again so user learns
    speakJapaneseKana(q.kana);

    // Show WRONG Feedback Box with user input and correct answer
    const feedbackCard = document.getElementById("tofuguFeedbackCard");
    const feedbackUserTyped = document.getElementById("feedbackUserTyped");
    const feedbackCorrectRomaji = document.getElementById("feedbackCorrectRomaji");

    if (feedbackUserTyped) {
      feedbackUserTyped.innerText = val;
    }
    if (feedbackCorrectRomaji) {
      feedbackCorrectRomaji.innerText = q.romaji;
    }
    if (feedbackCard) {
      feedbackCard.classList.remove("hidden");
    }

    // Make input read-only (preserve user's typed value for review)
    input.readOnly = true;

    // Change submit button text to "Lanjut ↵" so user can tap it or the next button
    if (submitBtn) {
      submitBtn.innerText = "Lanjut ↵";
    }

    const nextBtn = document.getElementById("feedbackNextBtn");
    if (nextBtn) {
      nextBtn.focus();
    }
  }
}

function advanceTofuguQuestion() {
  if (isTofuguSubmitting) return;
  if (tofuguQuizSession.isAwaitingNext && (Date.now() - tofuguQuizSession.awaitingNextSince < 350)) {
    return;
  }
  tofuguQuizSession.currentIndex++;
  renderTofuguCard();
}

function confirmExitTofugu() {
  if (confirm("Yakin ingin keluar dari kuis? Kemajuan saat ini tidak akan tersimpan.")) {
    backToMenu();
  }
}

// ================= Results & Review =================

function showTofuguResult() {
  hideAll();
  const resEl = document.getElementById("tofuguResult");
  if (resEl) resEl.classList.remove("hidden");

  playTofuguSfx('fanfare');

  const total = tofuguQuizSession.queue.length;
  const correct = tofuguQuizSession.correctCount;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

  // Title & Trophy based on accuracy
  const trophy = document.getElementById("resTrophyBadge");
  const title = document.getElementById("resMainTitle");
  const sub = document.getElementById("resSubtitle");

  if (accuracy === 100) {
    if (trophy) trophy.innerText = "🏆";
    if (title) title.innerText = "Sempurna! 100% Benar!";
    if (sub) sub.innerText = "Hebat sekali! Kamu sudah menguasai seluruh huruf yang diujikan!";
  } else if (accuracy >= 80) {
    if (trophy) trophy.innerText = "🌟";
    if (title) title.innerText = "Sugoi! Hasil Sangat Bagus!";
    if (sub) sub.innerText = "Kemampuan membacamu sudah sangat solid. Terus pertahankan!";
  } else if (accuracy >= 50) {
    if (trophy) trophy.innerText = "👍";
    if (title) title.innerText = "Kerja Bagus!";
    if (sub) sub.innerText = "Latihan rutin akan membuatmu semakin cepat dan hafal!";
  } else {
    if (trophy) trophy.innerText = "📚";
    if (title) title.innerText = "Tetap Semangat!";
    if (sub) sub.innerText = "Gunakan daftar huruf di bawah untuk mempelajari huruf yang salah.";
  }

  // Update Metrics
  const metricAcc = document.getElementById("resMetricAccuracy");
  if (metricAcc) metricAcc.innerText = `${accuracy}%`;

  const metricScore = document.getElementById("resMetricScore");
  if (metricScore) metricScore.innerText = tofuguQuizSession.score;

  const metricCorrect = document.getElementById("resMetricCorrect");
  if (metricCorrect) metricCorrect.innerText = `${correct} / ${total}`;

  const metricStreak = document.getElementById("resMetricStreak");
  if (metricStreak) metricStreak.innerText = `🔥 ${tofuguQuizSession.maxStreak}`;

  // Missed Kana Grid
  const missedSection = document.getElementById("resMissedSection");
  const missedGrid = document.getElementById("resMissedGrid");
  const missedCount = document.getElementById("resMissedCount");

  // De-duplicate missed items
  const uniqueMissed = [];
  const seenKeys = new Set();
  tofuguQuizSession.missedItems.forEach(item => {
    if (!seenKeys.has(item.kana)) {
      seenKeys.add(item.kana);
      uniqueMissed.push(item);
    }
  });

  if (uniqueMissed.length > 0 && missedSection && missedGrid) {
    missedSection.classList.remove("hidden");
    if (missedCount) missedCount.innerText = uniqueMissed.length;
    missedGrid.innerHTML = "";

    uniqueMissed.forEach(item => {
      const card = document.createElement("div");
      card.className = "missed-card";
      card.title = `Klik untuk mendengarkan pengucapan "${item.kana}" (${item.romaji})`;
      card.innerHTML = `
        <span class="missed-kana">${item.kana}</span>
        <span class="missed-romaji">${item.romaji}</span>
        <span class="missed-audio-icon">🔊 Dengar</span>
      `;
      card.onclick = () => speakJapaneseKana(item.kana);
      missedGrid.appendChild(card);
    });
  } else if (missedSection) {
    missedSection.classList.add("hidden");
  }
}

function repeatCurrentTofuguQuiz() {
  startTofuguQuiz();
}

function retryTofuguMissedOnly() {
  const uniqueMissed = [];
  const seenKeys = new Set();
  tofuguQuizSession.missedItems.forEach(item => {
    if (!seenKeys.has(item.kana)) {
      seenKeys.add(item.kana);
      uniqueMissed.push(item);
    }
  });

  if (uniqueMissed.length === 0) {
    alert("Semua jawabanmu sudah benar!");
    return;
  }

  tofuguQuizSession = {
    queue: shuffle([...uniqueMissed]),
    currentIndex: 0,
    currentQuestion: uniqueMissed[0],
    score: 0,
    streak: 0,
    maxStreak: 0,
    correctCount: 0,
    wrongCount: 0,
    missedItems: [],
    isAwaitingNext: false,
    awaitingNextSince: 0
  };
  isTofuguSubmitting = false;

  hideAll();
  const quizEl = document.getElementById("tofuguQuiz");
  if (quizEl) quizEl.classList.remove("hidden");

  renderTofuguCard();
}

// ================= Global Keyboard Listener for Speed =================

document.addEventListener("keydown", (e) => {
  const quizEl = document.getElementById("tofuguQuiz");
  if (!quizEl || quizEl.classList.contains("hidden")) return;

  // Enter Key
  if (e.key === "Enter") {
    if (tofuguQuizSession.isAwaitingNext) {
      e.preventDefault();
      if (Date.now() - tofuguQuizSession.awaitingNextSince >= 350) {
        advanceTofuguQuestion();
      }
      return;
    }

    // If input is currently focused, the form's native onsubmit handles it cleanly.
    // If user pressed Enter when input is not active, trigger handleTofuguSubmit():
    const input = document.getElementById("tofuguInput");
    if (document.activeElement !== input) {
      e.preventDefault();
      handleTofuguSubmit();
    }
    return;
  }

  // Space Key: Pronounce current kana if input isn't in typing mode or is empty
  if (e.code === "Space") {
    const input = document.getElementById("tofuguInput");
    if (input && (input.value === "" || tofuguQuizSession.isAwaitingNext || input.readOnly)) {
      e.preventDefault();
      speakCurrentTofuguKana();
    }
  }
});

// ================================================================
// ================= FORM QUIZ MODE ================================
// ================================================================

// --- State ---
let fqState = {
  preset: 'hiragana-basic',
  questionCount: 20,
};

let fqSession = {
  questions: [],      // { kana, romaji, script, category }
  userAnswers: [],    // parallel array, string per question
  retryPool: null,    // set when retrying wrong answers only
};

// --- Setup helpers ---
function openFormQuizSetup() {
  hideAll();
  const el = document.getElementById('formQuizSetup');
  if (el) el.classList.remove('hidden');
  fqUpdatePoolBadge();
}

function fqSelectPreset(presetId) {
  fqState.preset = presetId;
  // Sync active btn
  document.querySelectorAll('#formQuizSetup .preset-btn').forEach(b => b.classList.remove('active'));
  const map = {
    'hiragana-basic': 'fqPresetHiraBasic',
    'hiragana-all':   'fqPresetHiraAll',
    'katakana-basic': 'fqPresetKataBasic',
    'katakana-all':   'fqPresetKataAll',
    'mixed-all':      'fqPresetMixed',
  };
  const btn = document.getElementById(map[presetId]);
  if (btn) btn.classList.add('active');
  fqUpdatePoolBadge();
}

function fqSetCount(n) {
  fqState.questionCount = n;
  document.querySelectorAll('#fqCountSelector .seg-btn').forEach(b => {
    b.classList.toggle('active', Number(b.dataset.count) === n);
  });
  fqUpdatePoolBadge();
}

function fqBuildPool() {
  // Use tofuguKanaData (the full 208-kana array) if available, else build from basic arrays
  let pool;
  if (typeof tofuguKanaData !== 'undefined' && tofuguKanaData.length > 0) {
    pool = tofuguKanaData.filter(item => {
      switch (fqState.preset) {
        case 'hiragana-basic':  return item.script === 'hiragana' && item.category === 'basic';
        case 'hiragana-all':    return item.script === 'hiragana';
        case 'katakana-basic':  return item.script === 'katakana' && item.category === 'basic';
        case 'katakana-all':    return item.script === 'katakana';
        case 'mixed-all':       return true;
        default:                return true;
      }
    });
  } else {
    // Fallback
    const sets = {
      'hiragana-basic': hiraganaBasic,
      'hiragana-all':   [...hiraganaBasic, ...hiraganaDakuten],
      'katakana-basic': katakanaBasic,
      'katakana-all':   [...katakanaBasic, ...katakanaDakuten],
      'mixed-all':      [...hiraganaBasic, ...hiraganaDakuten, ...katakanaBasic, ...katakanaDakuten],
    };
    const raw = sets[fqState.preset] || hiraganaBasic;
    pool = raw.filter(([r]) => r !== '').map(([romaji, kana]) => ({
      kana, romaji,
      script: fqState.preset.includes('kata') ? 'katakana' : 'hiragana',
      category: 'basic',
    }));
  }
  return pool;
}

function fqUpdatePoolBadge() {
  const pool = fqBuildPool();
  const total = fqState.questionCount > 0 ? Math.min(fqState.questionCount, pool.length) : pool.length;
  const badge = document.getElementById('fqPoolBadge');
  if (badge) badge.innerHTML = `📦 <b>${pool.length}</b> huruf tersedia &nbsp;→&nbsp; <b>${total}</b> soal`;
  const startBtn = document.getElementById('fqStartBtn');
  if (startBtn) startBtn.disabled = pool.length === 0;
}

// --- Core Quiz Functions ---
function startFormQuiz() {
  let pool = fqBuildPool();
  if (pool.length === 0) {
    alert('Tidak ada huruf tersedia untuk preset ini.');
    return;
  }

  pool = shuffle([...pool]);
  if (fqState.questionCount > 0 && pool.length > fqState.questionCount) {
    pool = pool.slice(0, fqState.questionCount);
  }

  fqSession.questions = pool;
  fqSession.userAnswers = new Array(pool.length).fill('');
  fqSession.retryPool = null;

  renderFormQuiz();
}

function renderFormQuiz() {
  hideAll();
  const el = document.getElementById('formQuiz');
  if (el) el.classList.remove('hidden');

  const total = fqSession.questions.length;
  const label = document.getElementById('fqProgressLabel');
  if (label) label.innerText = `${total} Soal`;

  const container = document.getElementById('fqCardsContainer');
  if (!container) return;
  container.innerHTML = '';

  fqSession.questions.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'fq-item-card';
    card.id = `fq-card-${idx}`;

    const scriptTag = q.script ? q.script.toUpperCase() : 'KANA';
    const categoryMap = { basic: 'Huruf Dasar', dakuten: 'Dakuten', combo: 'Yoon' };
    const catLabel = categoryMap[q.category] || 'Kana';

    card.innerHTML = `
      <div class="fq-card-top">
        <span class="fq-soal-num"># ${idx + 1}</span>
        <span class="card-script-tag">${scriptTag}</span>
        <span class="fq-cat-label">${catLabel}</span>
      </div>
      <div class="fq-kana-glyph japanese-font">${q.kana}</div>
      <div class="fq-input-row">
        <input
          type="text"
          id="fq-input-${idx}"
          class="fq-text-input"
          placeholder="Ketik romaji..."
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
          oninput="fqOnInput(${idx}, this.value)"
          onkeydown="fqInputKeydown(event, ${idx})"
        />
      </div>
    `;
    container.appendChild(card);
  });

  // Restore any previously typed answers
  fqSession.userAnswers.forEach((val, idx) => {
    if (val) {
      const inp = document.getElementById(`fq-input-${idx}`);
      if (inp) inp.value = val;
    }
  });

  fqUpdateCounter();

  // Focus first input
  const firstInput = document.getElementById('fq-input-0');
  if (firstInput) setTimeout(() => firstInput.focus(), 100);
}

function fqOnInput(idx, val) {
  fqSession.userAnswers[idx] = val.trim();
  const card = document.getElementById(`fq-card-${idx}`);
  if (card) {
    card.classList.toggle('fq-card-filled', val.trim().length > 0);
  }
  fqUpdateCounter();
}

function fqInputKeydown(e, idx) {
  // Tab or Enter -> move to next input
  if (e.key === 'Enter') {
    e.preventDefault();
    const next = document.getElementById(`fq-input-${idx + 1}`);
    if (next) {
      next.focus();
      next.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      // Last input -> try submit
      submitFormQuiz();
    }
  }
}

function fqUpdateCounter() {
  const filled = fqSession.userAnswers.filter(a => a.length > 0).length;
  const total = fqSession.questions.length;
  const counter = document.getElementById('fqCompletionCounter');
  if (counter) {
    counter.innerText = `${filled} / ${total} terisi`;
    counter.classList.toggle('fq-counter-complete', filled === total);
  }
}

function confirmExitFormQuiz() {
  if (confirm('Yakin ingin keluar? Jawaban yang sudah diisi akan hilang.')) {
    backToMenu();
  }
}

// --- Submission & Result ---
function submitFormQuiz() {
  const filled = fqSession.userAnswers.filter(a => a.length > 0).length;
  const total = fqSession.questions.length;

  if (filled < total) {
    const empty = total - filled;
    if (!confirm(`Masih ada ${empty} soal yang kosong. Submit sekarang?`)) {
      // Scroll to first empty
      for (let i = 0; i < fqSession.questions.length; i++) {
        if (!fqSession.userAnswers[i]) {
          const inp = document.getElementById(`fq-input-${i}`);
          if (inp) {
            inp.focus();
            inp.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          break;
        }
      }
      return;
    }
  }

  showFormQuizResult();
}

function showFormQuizResult() {
  const questions = fqSession.questions;
  const answers = fqSession.userAnswers;

  let correctCount = 0;
  const results = questions.map((q, idx) => {
    const userTyped = answers[idx] || '';
    const isCorrect = isTofuguAnswerCorrect(userTyped, q);
    if (isCorrect) correctCount++;
    return { q, userTyped, isCorrect };
  });

  const total = questions.length;
  const wrongCount = total - correctCount;
  const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const score = correctCount * 10;

  hideAll();
  const resEl = document.getElementById('formQuizResult');
  if (resEl) resEl.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Trophy & title
  const trophy = document.getElementById('fqResTrophy');
  const title = document.getElementById('fqResTitle');
  const subtitle = document.getElementById('fqResSubtitle');
  if (accuracy === 100) {
    if (trophy) trophy.innerText = '🏆';
    if (title) title.innerText = 'Sempurna! Semua Benar!';
    if (subtitle) subtitle.innerText = 'Luar biasa! Kamu menguasai semua huruf yang diuji!';
  } else if (accuracy >= 80) {
    if (trophy) trophy.innerText = '🌟';
    if (title) title.innerText = 'Sugoi! Hasil Sangat Bagus!';
    if (subtitle) subtitle.innerText = 'Kemampuanmu sudah solid. Terus latihan!';
  } else if (accuracy >= 50) {
    if (trophy) trophy.innerText = '👍';
    if (title) title.innerText = 'Kerja Bagus!';
    if (subtitle) subtitle.innerText = 'Latihan rutin akan membuatmu semakin lancar!';
  } else {
    if (trophy) trophy.innerText = '📚';
    if (title) title.innerText = 'Tetap Semangat!';
    if (subtitle) subtitle.innerText = 'Pelajari huruf yang salah di bawah, lalu coba lagi!';
  }

  // Metrics
  const accEl = document.getElementById('fqResAccuracy');
  if (accEl) accEl.innerText = `${accuracy}%`;
  const corEl = document.getElementById('fqResCorrect');
  if (corEl) corEl.innerText = `${correctCount} / ${total}`;
  const scrEl = document.getElementById('fqResScore');
  if (scrEl) scrEl.innerText = score;
  const wrgEl = document.getElementById('fqResWrong');
  if (wrgEl) wrgEl.innerText = wrongCount;

  // Review grid
  const grid = document.getElementById('fqReviewGrid');
  if (!grid) return;
  grid.innerHTML = '';

  results.forEach(({ q, userTyped, isCorrect }, idx) => {
    const item = document.createElement('div');
    item.className = `fq-review-item ${isCorrect ? 'fq-review-correct' : 'fq-review-wrong'}`;

    const userDisplay = userTyped || '<span style="opacity:0.4">kosong</span>';
    const statusIcon = isCorrect ? '✅' : '❌';

    item.innerHTML = `
      <div class="fq-review-num">${idx + 1}</div>
      <div class="fq-review-kana japanese-font">${q.kana}</div>
      <div class="fq-review-detail">
        <div class="fq-review-correct-ans">${statusIcon} Benar: <b>${q.romaji}</b></div>
        ${!isCorrect ? `<div class="fq-review-user-ans">Kamu: <span class="user-typed">${userTyped || '—'}</span></div>` : ''}
      </div>
      <button class="fq-review-speak-btn" onclick="speakJapaneseKana('${q.kana}')" title="Dengar pengucapan">🔊</button>
    `;
    grid.appendChild(item);
  });

  // Store wrong items for retry
  fqSession.retryPool = results.filter(r => !r.isCorrect).map(r => r.q);

  // Show/hide retry button
  const retryBtn = document.querySelector('[onclick="retryFormQuizWrongOnly()"]');
  if (retryBtn) {
    retryBtn.style.display = fqSession.retryPool.length > 0 ? '' : 'none';
  }
}

function retryFormQuizWrongOnly() {
  const wrongItems = fqSession.retryPool;
  if (!wrongItems || wrongItems.length === 0) {
    alert('Semua jawabanmu sudah benar!');
    return;
  }

  fqSession.questions = shuffle([...wrongItems]);
  fqSession.userAnswers = new Array(fqSession.questions.length).fill('');
  fqSession.retryPool = null;

  renderFormQuiz();
}

// Initialize on DOM load
window.addEventListener('DOMContentLoaded', () => {
  // Tofugu quiz setup
  populateRowChips();
  updateSetupPoolCount();
  // Form quiz setup
  fqUpdatePoolBadge();
});
