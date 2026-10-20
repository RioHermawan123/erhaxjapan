// Data Grammar JLPT N5
// type "pattern": tanyakan arti pola kalimat
// type "fill"   : titik-titik harus diisi dengan partikel/kata yang tepat (tanda ___)
JLPTRegistry.addGrammar("n5", [
  {
    type: "pattern",
    p: "〜です / 〜ます",
    ex: "わたしは 学生です。",
    ask: "Kalimat ini bermakna ...",
    options: ["Saya adalah pelajar.", "Saya punya pelajar.", "Saya menjadi pelajar.", "Saya ada pelajar."],
    answer: 0,
    note: "です / ます menyatakan 'adalah' dan menempel pada kata sifat / kata benda."
  },
  {
    type: "pattern",
    p: "〜ではありません",
    ex: "わたしは 学生ではありません。",
    ask: "Kalimat ini bermakna ...",
    options: ["Saya bukan pelajar.", "Saya menjadi pelajar.", "Saya seorang pelajar.", "Saya ingin menjadi pelajar."],
    answer: 0,
    note: "です setelah に / で menyatakan negasi: 'bukan'."
  },
  {
    type: "pattern",
    p: "〜じゃありません",
    ex: "先生じゃありません。",
    ask: "Kalimat ini bermakna ...",
    options: ["Saya bukan guru (gaya santai).", "Saya adalah guru.", "Saya akan menjadi guru.", "Guru itu saya."],
    answer: 0,
    note: "じゃ = では dalam percakapan santai / lugas."
  },
  {
    type: "pattern",
    p: "〜ですか",
    ex: "あなたは 学生ですか。",
    ask: "Kalimat ini bermakna ...",
    options: ["Apakah kamu pelajar?", "Kamu adalah pelajar.", "Kamu ada di sini.", "Kamu akan pelajar."],
    answer: 0,
    note: "〜ですか membuat kalimat menjadi pertanyaan ya / tidak."
  },
  {
    type: "pattern",
    p: "〜ませんか",
    ex: "いっしょに 昼ご飯を 食べませんか。",
    ask: "Kalimat ini bermakna ...",
    options: ["Mari makan siang bersama?", "Kamu tidak makan siang.", "Kita tidak makan siang.", "Makan siang sudah selesai."],
    answer: 0,
    note: "〜ませんか dipakai untuk mengajak / menawarkan dengan sopan."
  },
  {
    type: "pattern",
    p: "〜ましょう",
    ex: "いっしょに 勉強しましょう。",
    ask: "Kalimat ini bermakna ...",
    options: ["Ayo belajar bersama.", "Kita tidak belajar.", "Dia belajar sendirian.", "Belajar itu mahal."],
    answer: 0,
    note: "〜ましょう berarti 'ayo / mari kita ...'."
  },
  {
    type: "pattern",
    p: "〜ましょうか",
    ex: "あした 一緒に 行き ましょうか。",
    ask: "Kalimat ini bermakna ...",
    options: ["Mau pergi bersama besok?", "Kamu tidak mau pergi.", "Kita sudah pergi kemarin.", "Pergi itu mahal."],
    answer: 0,
    note: "〜ましょうか adalah usul / pertanyaan: 'mau ...?'"
  },
  {
    type: "pattern",
    p: "〜たいです",
    ex: "日本へ 行き たいです。",
    ask: "Kalimat ini bermakna ...",
    options: ["Saya ingin pergi ke Jepang.", "Saya pergi ke Jepang kemarin.", "Jepang ingin pergi.", "Saya tidak ingin pergi."],
    answer: 0,
    note: "〜たい menyatakan keinginan orang yang berbicara."
  },
  {
    type: "pattern",
    p: "〜ほしいです",
    ex: "新しい カメラが ほしいです。",
    ask: "Kalimat ini bermakna ...",
    options: ["Saya ingin kamera baru.", "Saya punya kamera baru.", "Kamera baru itu mahal.", "Saya menjual kamera."],
    answer: 0,
    note: "〜ほしい dipakai saat meminta sesuatu kepada orang lain."
  },
  {
    type: "pattern",
    p: "〜られます",
    ex: "日本語が 話せます。",
    ask: "Kalimat ini bermakna ...",
    options: ["Saya bisa berbahasa Jepang.", "Saya sedang berbicara bahasa Jepang.", "Saya ingin berbicara bahasa Jepang.", "Bahasa Jepang sulit."],
    answer: 0,
    note: "Bentuk 〜られます (potential) berarti 'bisa / dapat'."
  },
  {
    type: "pattern",
    p: "ことができます",
    ex: "ここでは 日本語を 話す ことが できます。",
    ask: "Kalimat ini bermakna ...",
    options: ["Di sini bisa berbicara bahasa Jepang.", "Di sini tidak bisa berbicara.", "Bahasa Jepang di sini sulit.", "Saya belajar di sini."],
    answer: 0,
    note: "〜ことができます = 'bisa (melakukan)'."
  },
  {
    type: "pattern",
    p: "〜てもいいですか",
    ex: "ここで 写真を撮っても いいですか。",
    ask: "Kalimat ini bermakna ...",
    options: ["Boleh saya mengambil foto di sini?", "Dilarang mengambil foto di sini.", "Apakah foto ini bagus?", "Saya akan mengambil foto."],
    answer: 0,
    note: "〜てもいいですか meminta izin: 'boleh ...?'"
  },
  {
    type: "pattern",
    p: "〜てはいけません",
    ex: "教室では 飲食 しては いけません。",
    ask: "Kalimat ini bermakna ...",
    options: ["Dilarang makan minum di kelas.", "Boleh makan minum di kelas.", "Makan minum di kelas itu enak.", "Mari makan minum di kelas."],
    answer: 0,
    note: "〜てはいけません = larangan keras."
  },
  {
    type: "pattern",
    p: "〜てください",
    ex: "ここに 名前を 書いて ください。",
    ask: "Kalimat ini bermakna ...",
    options: ["Tolong tulis nama di sini.", "Nama saya di sini.", "Saya tidak mau menulis nama.", "Di mana nama saya?"],
    answer: 0,
    note: "〜てください = permintaan sopan: 'tolong ...'"
  },
  {
    type: "pattern",
    p: "〜ないでください",
    ex: "ここで 立たないで ください。",
    ask: "Kalimat ini bermakna ...",
    options: ["Tolong jangan berdiri di sini.", "Tolong berdiri di sini.", "Boleh berdiri di sini?", "Saya berdiri di sini."],
    answer: 0,
    note: "〜ないでください = 'tolong jangan ...'"
  },
  {
    type: "pattern",
    p: "〜ています",
    ex: "今 ごはんを 食べて います。",
    ask: "Kalimat ini bermakna ...",
    options: ["Saya sedang makan sekarang.", "Saya sudah makan.", "Saya akan makan.", "Saya tidak makan."],
    answer: 0,
    note: "〜ています menunjukkan aksi yang sedang berlangsung."
  },
  {
    type: "pattern",
    p: "〜たことがあります",
    ex: "日本へ 行ったことが あります。",
    ask: "Kalimat ini bermakna ...",
    options: ["Saya pernah pergi ke Jepang.", "Saya akan pergi ke Jepang.", "Saya tidak pernah ke Jepang.", "Jepang sangat jauh."],
    answer: 0,
    note: "〜たことがあります = pengalaman di masa lalu: 'pernah ...'"
  },
  {
    type: "pattern",
    p: "〜から (alasan)",
    ex: "雨が 降っているから、 行きません。",
    ask: "Kalimat ini bermakna ...",
    options: ["Karena hujan, saya tidak pergi.", "Karena saya tidak pergi, hujan turun.", "Hujan turun sebelum saya pergi.", "Saya pergi karena hujan."],
    answer: 0,
    note: "〜から menyatakan alasan (pada kalimat ini) dan juga urutan waktu."
  },
  {
    type: "pattern",
    p: "〜ので",
    ex: "用事があるので、 先に 失礼します。",
    ask: "Kalimat ini bermakna ...",
    options: ["Karena ada keperluan, saya permisi.", "Karena saya permisi, ada keperluan.", "Saya ada keperluan kemarin.", "Keperluan itu tidak ada."],
    answer: 0,
    note: "〜ので menyatakan alasan dengan netral, sering dipakai di tulisan."
  },
  {
    type: "pattern",
    p: "〜けど",
    ex: "その さんは 日本語が 上手ですけど、 英語は まだ 苦手です。",
    ask: "Kalimat ini bermakna ...",
    options: ["Orang itu fasih bahasa Jepang, tapi bahasa Inggris masih sulit baginya.", "Orang itu tidak fasih bahasa Jepang.", "Orang itu belajar bahasa Inggris.", "Bahasa Inggris dan Jepang sama sulitnya."],
    answer: 0,
    note: "〜けど (= が) menyatakan kontras: 'tapi'."
  },
  {
    type: "pattern",
    p: "〜より",
    ex: "宿題は 授業より むずかしいです。",
    ask: "Kalimat ini bermakna ...",
    options: ["PR lebih sulit daripada pelajaran.", "Pelajaran lebih sulit daripada PR.", "PR dan pelajaran sama sulitnya.", "Saya tidak mengerjakan PR."],
    answer: 0,
    note: "A より B = A lebih ... daripada B."
  },
  {
    type: "pattern",
    p: "〜まで",
    ex: "駅は ここまで です。",
    ask: "Kalimat ini bermakna ...",
    options: ["Stasiunnya sampai sini.", "Stasiunnya jauh sekali.", "Saya turun di stasiun berikutnya.", "Dari sini ke stasiun."],
    answer: 0,
    note: "〜まで = 'sampai (batas)'"
  },
  {
    type: "pattern",
    p: "〜から 〜まで",
    ex: "授業は 九時から 三時まで です。",
    ask: "Kalimat ini bermakna ...",
    options: ["Pelajaran dari jam 9 sampai jam 3.", "Pelajaran jam 3 sampai jam 9.", "Pelajaran hanya 3 jam.", "Saya tidak masuk jam 9."],
    answer: 0,
    note: "Rentang waktu: 'dari ... sampai ...'"
  },
  {
    type: "pattern",
    p: "ここ / そこ / あそこ",
    ex: "ここは 駅に 近いです。",
    ask: "Kalimat ini bermakna ...",
    options: ["Di sini dekat dengan stasiun.", "Di sana dekat dengan stasiun.", "Stasiunnya jauh dari sini.", "Saya di stasiun sekarang."],
    answer: 0,
    note: "ここ (dekat, tempat pembicara), そこ (dekat, tempat lawan bicara), あそこ (jauh)."
  },
  {
    type: "pattern",
    p: "この / その / あの",
    ex: "この 本は とても 面白いです。",
    ask: "Kalimat ini bermakna ...",
    options: ["Buku ini sangat menarik.", "Buku itu sangat menarik.", "Buku itu membosankan.", "Saya tidak punya buku."],
    answer: 0,
    note: "この = ini (dekat), その = itu (sedikit jauh), あの = itu (jauh)."
  },
  {
    type: "pattern",
    p: "まだ",
    ex: "宿題は まだ 終わって いません。",
    ask: "Kalimat ini bermakna ...",
    options: ["PR belum selesai.", "PR sudah selesai.", "PR tidak ada.", "PR itu mudah."],
    answer: 0,
    note: "まだ + kata kerja negatif = 'belum'"
  },
  {
    type: "pattern",
    p: "もう",
    ex: "宿題は もう 終わりました。",
    ask: "Kalimat ini bermakna ...",
    options: ["PR sudah selesai.", "PR belum dimulai.", "PR itu belum ada.", "Saya akan mengerjakan PR."],
    answer: 0,
    note: "もう + kata kerja = 'sudah'"
  },
  {
    type: "pattern",
    p: "よく 〜ます",
    ex: "週末は よく 公園に 行きます。",
    ask: "Kalimat ini bermakna ...",
    options: ["Akhir pekan saya sering ke taman.", "Akhir pekan saya jarang ke taman.", "Akhir pekan saya tak pernah ke taman.", "Saya tidak suka taman."],
    answer: 0,
    note: "よく = sering"
  },
  {
    type: "pattern",
    p: "あまり 〜ません",
    ex: "あまり 食べません。",
    ask: "Kalimat ini bermakna ...",
    options: ["Saya tidak sering makan.", "Saya sering makan.", "Saya tidak pernah makan.", "Saya makan banyak sekali."],
    answer: 0,
    note: "あまり = tidak sering / jarang"
  },
  {
    type: "pattern",
    p: "どんな",
    ex: "それは どんな 物ですか。",
    ask: "Kalimat ini bermakna ...",
    options: ["Itu benda seperti apa?", "Itu nama apa?", "Di mana benda itu?", "Benda itu mahal?"],
    answer: 0,
    note: "どんな = tanya tentang jenis barang."
  },
  {
    type: "pattern",
    p: "いくら",
    ex: "この 鞄は いくらですか。",
    ask: "Kalimat ini bermakna ...",
    options: ["Berapa harga tas ini?", "Di mana tas ini?", "Apakah tas ini bagus?", "Saya ingin tas ini."],
    answer: 0,
    note: "いくら = tanya harga."
  },
  {
    type: "pattern",
    p: "いただきます",
    ex: "では、 いただきます。",
    ask: "Kalimat ini bermakna ...",
    options: ["Selamat makan (sebelum makan).", "Selamat makan (setelah makan).", "Selamat jalan.", "Sampai jumpa besok."],
    answer: 0,
    note: "いただきます dipakai sebelum makan; ごちそうさまでした setelah makan."
  },
  {
    type: "pattern",
    p: "ごちそうさまでした",
    ex: "ごちそうさまでした。",
    ask: "Kalimat ini bermakna ...",
    options: ["Selamat makan (setelah makan).", "Selamat makan (sebelum makan).", "Permisi saya pergi.", "Selamat pagi."],
    answer: 0,
    note: "Ungkapan setelah makan."
  },
  {
    type: "pattern",
    p: "はじめまして",
    ex: "はじめまして、 たなかです。",
    ask: "Kalimat ini bermakna ...",
    options: ["Senang berkenalan.", "Selamat tinggal.", "Permisi, saya telat.", "Apa kabar?"],
    answer: 0,
    note: "Dipakai saat bertemu orang pertama kali."
  },
  {
    type: "pattern",
    p: "おはようございます",
    ex: "おはようございます。",
    ask: "Kalimat ini bermakna ...",
    options: ["Selamat pagi.", "Selamat malam.", "Selamat makan.", "Sampai jumpa."],
    answer: 0,
    note: "Sapaan pagi."
  },
  {
    type: "pattern",
    p: "失礼します",
    ex: "すみません、 失礼します。",
    ask: "Kalimat ini bermakna ...",
    options: ["Permisi (pamit / meminta maaf).", "Selamat pagi.", "Terima kasih banyak.", "Apa kabar?"],
    answer: 0,
    note: "Dipakai saat pamit / meminta maaf."
  },
  {
    type: "pattern",
    p: "お願いします",
    ex: "コーヒーをお願いします。",
    ask: "Kalimat ini bermakna ...",
    options: ["Tolong secangkir kopi.", "Saya tidak mau kopi.", "Kopi itu mahal.", "Di mana kopi?"],
    answer: 0,
    note: "〜をお願いします = 'tolong (berikan / lakukan)'"
  },
  {
    type: "fill",
    p: "___ の 名前（なまえ） は たなかです。",
    ask: "Isi titik-titik dengan kata yang tepat.",
    options: ["わたし", "に", "を", "で"],
    answer: 0,
    note: "の menyatakan kepemilikan: 'nama saya'."
  },
  {
    type: "fill",
    p: "毎朝 ごはんを ___ 食べます。",
    ask: "Isi titik-titik dengan partikel yang tepat.",
    options: ["を", "に", "で", "へ"],
    answer: 0,
    note: "を menandai objek (benda yang dikenai aksi)."
  },
  {
    type: "fill",
    p: "電車 ___ 学校に 行きます。",
    ask: "Isi titik-titik dengan partikel yang tepat.",
    options: ["で", "を", "が", "も"],
    answer: 0,
    note: "で menyatakan cara / alat (perjalanan dengan kereta)."
  },
  {
    type: "fill",
    p: "この 電車は 東京まで ___ 。",
    ask: "Isi titik-titik dengan kata yang tepat.",
    options: ["行きます", "行きますか", "行きません", "行きたいです"],
    answer: 0,
    note: "Kalimat pernyataan memakai bentuk ます."
  },
  {
    type: "fill",
    p: "日曜日は どこへ ___ か。",
    ask: "Isi titik-titik dengan kata yang tepat.",
    options: ["行きます", "行きますか", "行きません", "行きました"],
    answer: 0,
    note: "へ menunjukkan tujuan; bentuk ます: 行きます."
  },
  {
    type: "fill",
    p: "今 何時 ___ か。",
    ask: "Isi titik-titik dengan partikel yang tepat.",
    options: ["です", "を", "に", "が"],
    answer: 0,
    note: "何時ですか = 'jam berapa?'"
  },
  {
    type: "fill",
    p: "毎朝 七時 ___ 起きます。",
    ask: "Isi titik-titik dengan partikel yang tepat.",
    options: ["に", "を", "で", "から"],
    answer: 0,
    note: "に dipakai setelah kata keterangan waktu (jam)."
  },
  {
    type: "fill",
    p: "昨日 映画を ___ 。",
    ask: "Isi titik-titik dengan kata yang tepat.",
    options: ["見ました", "見ます", "見ましたか", "見"],
    answer: 0,
    note: "Kalimat masa lalu memakai bentuk ました."
  }
]);
