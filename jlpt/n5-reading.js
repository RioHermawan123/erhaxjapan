// Data Teks Baca (読解) JLPT N5
// Kanji ditulis dengan ruby (furigana) supaya mudah dibaca pemula.
JLPTRegistry.addReading("n5", [
  {
    title: "お知らせ：日本語クラス",
    text: `<ruby>日本語<rt>にほんご</rt></ruby>クラスの<ruby>時間<rt>じかん</rt></ruby>です。
<ruby>高校<rt>こうこう</rt></ruby> 1年 A組: 毎週 <ruby>火曜日<rt>かようび</rt></ruby>と<ruby>木曜日<rt>もくようび</rt></ruby> 16:00〜17:30、<ruby>教室<rt>きょうしつ</rt></ruby> 201
<ruby>高校<rt>こうこう</rt></ruby> 1年 B組: 毎週 <ruby>月曜日<rt>げつようび</rt></ruby>と<ruby>金曜日<rt>きんようび</rt></ruby> 16:00〜17:30、<ruby>教室<rt>きょうしつ</rt></ruby> 202
<ruby>担当<rt>たんとう</rt></ruby>: <ruby>田中<rt>たなか</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>・<ruby>佐藤<rt>さとう</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>`,
    questions: [
      {
        q: "クラス Aは いつ ありますか。",
        options: ["毎週 火曜日と 木曜日", "毎週 月曜日と 金曜日", "毎日 16:00 から", "土曜日の み 9:00 から"],
        answer: 0,
        note: "A組: 毎週 火曜日と木曜日 16:00〜17:30。"
      },
      {
        q: "クラス Bの 教室は どこですか。",
        options: ["教室 201", "教室 202", "教室 203", "教室 301"],
        answer: 1,
        note: "B組の教室は 202 です。"
      },
      {
        q: "この クラスの 担当は 誰ですか。",
        options: ["田中先生だけ", "佐藤先生だけ", "田中先生と 佐藤先生", "この 文章には ありません"],
        answer: 2,
        note: "担当: 田中先生・佐藤先生。"
      }
    ]
  },
  {
    title: "ランチメニュー",
    text: `<ruby>ラーメン<rt>ラーメン</rt></ruby> 800<ruby>円<rt>えん</rt></ruby>
カレーライス 700<ruby>円<rt>えん</rt></ruby>
スパゲッティ 900<ruby>円<rt>えん</rt></ruby>
ドリンク 200<ruby>円<rt>えん</rt></ruby>
<ruby>時間<rt>じかん</rt></ruby>: 11:00〜15:00
<ruby>土曜日<rt>どようび</rt></ruby>は<ruby>休み<rt>やすみ</rt></ruby>です。`,
    questions: [
      {
        q: "カレーライスは いくらですか。",
        options: ["700円", "800円", "900円", "200円"],
        answer: 0,
        note: "カレーライス 700円。"
      },
      {
        q: "この 店は 土曜日も 開きますか。",
        options: ["いいえ、土曜日は 休みです", "はい、土曜日は 11:00 から 開きます", "土曜日は 15:00 まで 開きます", "この 文章には ありません"],
        answer: 0,
        note: "土曜日は休みです。"
      },
      {
        q: "ラーメンに ドリンクを 入れ ると いくらですか。",
        options: ["900円", "1000円", "1100円", "1200円"],
        answer: 1,
        note: "ラーメン 800円 + ドリンク 200円 = 1000円。"
      }
    ]
  },
  {
    title: "銀行の時間",
    text: `<ruby>銀行<rt>ぎんこう</rt></ruby>の<ruby>営業<rt>えいぎょう</rt></ruby><ruby>時間<rt>じかん</rt></ruby>
<ruby>月曜日<rt>げつようび</rt></ruby>〜<ruby>金曜日<rt>きんようび</rt></ruby>: 9:00〜15:00（<ruby>窓口<rt>まどぐち</rt></ruby>は 15:30 まで）
<ruby>土曜日<rt>どようび</rt></ruby>: 9:00〜12:00
<ruby>日曜日<rt>にちようび</rt></ruby>・<ruby>祝日<rt>しゅくじつ</rt></ruby>: <ruby>休み<rt>やすみ</rt></ruby>
ATMは 24<ruby>時間<rt>じかん</rt></ruby><ruby>使<rt>つか</rt></ruby>えます。`,
    questions: [
      {
        q: "金曜日に 銀行は 何時に 閉まりますか。",
        options: ["12:00", "15:00", "15:30", "9:00"],
        answer: 2,
        note: "窓口は 15:30 まで です。"
      },
      {
        q: "日曜日に ATMは 使えますか。",
        options: ["はい、24時間使えます", "いいえ、日曜日は 休みです", "はい、9:00 から だけです", "この 文章には ありません"],
        answer: 0,
        note: "ATMは 24時間使えます。"
      },
      {
        q: "土曜日に 銀行は 何時間 開きますか。",
        options: ["3時間", "4時間", "5時間", "6時間"],
        answer: 0,
        note: "9:00〜12:00 = 3時間。"
      }
    ]
  },
  {
    title: "忘れ物のお知らせ",
    text: `<ruby>昨日<rt>きのう</rt></ruby>、<ruby>図書館<rt>としょかん</rt></ruby>の<ruby>読書室<rt>どくしょしつ</rt></ruby>で <ruby>黒<rt>くろ</rt></ruby>い<ruby>傘<rt>かさ</rt></ruby>と <ruby>茶色<rt>ちゃいろ</rt></ruby>い<ruby>鞄<rt>かばん</rt></ruby>を <ruby>見<rt>み</rt></ruby>つけました。
<ruby>図書館<rt>としょかん</rt></ruby>の<ruby>窓口<rt>まどぐち</rt></ruby>まで <ruby>取<rt>と</rt></ruby>りに <ruby>来<rt>き</rt></ruby>てください。`,
    questions: [
      {
        q: "忘れ物を どこで 見つけましたか。",
        options: ["図書館の 読書室", "駅の 窓口", "学校の 教室", "病院の 受付"],
        answer: 0,
        note: "昨日、図書館の読書室で見つけました。"
      },
      {
        q: "忘れ物は いくつ ありますか。",
        options: ["1つ", "2つ", "3つ", "4つ"],
        answer: 1,
        note: "黒い傘と 茶色い鞄 の 2つ。"
      },
      {
        q: "忘れ物を 取りに 行くときは どう しますか。",
        options: ["図書館の 窓口に 行きます。", "家の 窓から 出ます。", "警察に 電話します。", "学校に 行きます。"],
        answer: 0,
        note: "図書館の窓口まで取りに来てください。"
      }
    ]
  },
  {
    title: "教室のルール",
    text: `<ruby>教室<rt>きょうしつ</rt></ruby>のルール
・<ruby>教室<rt>きょうしつ</rt></ruby>では <ruby>飲食<rt>いんしょく</rt></ruby>は <ruby>禁止<rt>きんし</rt></ruby>です。
・<ruby>写真<rt>しゃしん</rt></ruby><ruby>撮影<rt>さつえい</rt></ruby>は いいですが、ビデオ<ruby>撮影<rt>さつえい</rt></ruby>は だめです。
・<ruby>質問<rt>しつもん</rt></ruby>は <ruby>自由<rt>じゆう</rt></ruby>に できます。<ruby>先生<rt>せんせい</rt></ruby>を <ruby>呼<rt>よ</rt></ruby>んで ください。`,
    questions: [
      {
        q: "教室で しては いけないことは 何ですか。",
        options: ["飲食を すること", "写真を 撮る こと", "ビデオを 撮る こと", "質問を すること"],
        answer: 0,
        note: "教室では飲食は禁止です。"
      },
      {
        q: "写真の 撮影は どう ですか。",
        options: ["いいえ、禁止です", "いいえ、だめです", "はい、いいですが ビデオは だめです", "この 文章には ありません"],
        answer: 2,
        note: "写真撮影はいいですが、ビデオ撮影はだめです。"
      },
      {
        q: "質問したい ときは どう しますか。",
        options: ["先生を 呼びます。", "静かに 出ます。", "友だちに 聞きます。", "なにも しません。"],
        answer: 0,
        note: "先生を呼んでください。"
      }
    ]
  },
  {
    title: "観光バスの時刻表",
    text: `<ruby>観光<rt>かんこう</rt></ruby>バス（ルート A）
<ruby>駅前<rt>えきまえ</rt></ruby><ruby>発<rt>はっ</rt></ruby>: 9:00 / 10:00 / 11:00
<ruby>博物館<rt>はくぶつかん</rt></ruby><ruby>発<rt>はっ</rt></ruby>: 9:30 / 10:30 / 11:30
<ruby>公園<rt>こうえん</rt></ruby><ruby>発<rt>はっ</rt></ruby>: 10:00 / 11:00 / 12:00
<ruby>土曜日<rt>どようび</rt></ruby>と<ruby>日曜日<rt>にちようび</rt></ruby>だけ <ruby>運転<rt>うんてん</rt></ruby>します。`,
    questions: [
      {
        q: "最初の バスは どこで 発立ちますか。",
        options: ["駅前", "博物館", "公園", "この 文章には ありません"],
        answer: 0,
        note: "駅前発: 9:00 / 10:00 / 11:00。"
      },
      {
        q: "博物館を 10:30 に 出る バスは どこへ 行きますか。",
        options: ["駅前", "博物館", "公園", "どこへも 行かない"],
        answer: 2,
        note: "バスは駅前 → 博物館 → 公園 の順に走ります。"
      },
      {
        q: "バスは どの 日に 運転 しませんか。",
        options: ["月曜日", "水曜日", "金曜日", "土曜日と 日曜日"],
        answer: 3,
        note: "土曜日と日曜日だけ運転します。"
      }
    ]
  },
  {
    title: "明日の天気予報",
    text: `<ruby>明日<rt>あした</rt></ruby>の<ruby>天気<rt>てんき</rt></ruby><ruby>予報<rt>よほう</rt></ruby>
<ruby>東京<rt>とうきょう</rt></ruby>: <ruby>晴<rt>はれ</rt></ruby>れ、<ruby>最高<rt>さいこう</rt></ruby><ruby>気温<rt>きおん</rt></ruby> 22<ruby>度<rt>ど</rt></ruby>、<ruby>最低<rt>さいてい</rt></ruby><ruby>気温<rt>きおん</rt></ruby> 12<ruby>度<rt>ど</rt></ruby>
<ruby>大阪<rt>おおさか</rt></ruby>: <ruby>曇<rt>くもり</rt></ruby>り、<ruby>最高<rt>さいこう</rt></ruby><ruby>気温<rt>きおん</rt></ruby> 18<ruby>度<rt>ど</rt></ruby>、<ruby>午後<rt>ごご</rt></ruby>から <ruby>雨<rt>あめ</rt></ruby>が <ruby>降<rt>ふ</rt></ruby>るでしょう。`,
    questions: [
      {
        q: "大阪の 天気は どう ですか。",
        options: ["晴れ", "曇りで、 午後から 雨", "雪", "この 文章には ありません"],
        answer: 1,
        note: "大阪: 曇り、午後から雨が降るでしょう。"
      },
      {
        q: "東京の 最高気温は いくらですか。",
        options: ["12度", "18度", "22度", "24度"],
        answer: 2,
        note: "東京の最高気温は 22度 です。"
      },
      {
        q: "東京は 曇り ですか。",
        options: ["はい、曇りです", "いいえ、晴れです", "東京は 雨が 降るでしょう", "この 文章には ありません"],
        answer: 1,
        note: "東京は晴れの予定です。"
      }
    ]
  },
  {
    title: "週末の予定",
    text: `A: <ruby>週末<rt>しゅうまつ</rt></ruby>は どう しますか。
B: <ruby>土曜日<rt>どようび</rt></ruby>に <ruby>友達<rt>ともだち</rt></ruby>と <ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>ます。
A: <ruby>日曜日<rt>にちようび</rt></ruby>は どう ですか。
B: <ruby>日曜日<rt>にちようび</rt></ruby>に うちで <ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みます。ゆっくり <ruby>休<rt>やす</rt></ruby>みたいです。`,
    questions: [
      {
        q: "Bさんは 土曜日に 何をしますか。",
        options: ["家で 本を 読みます。", "友達と 映画を 見ます。", "家で 休みます。", "学校に 行きます。"],
        answer: 1,
        note: "土曜日に友達と映画を見ます。"
      },
      {
        q: "Bさんは 日曜日に どこで 何を しますか。",
        options: ["家で 本を 読みます。", "映画館に 行きます。", "友達の 家に います。", "どこにも 行きません。"],
        answer: 0,
        note: "日曜日にうちで本を読みます。"
      },
      {
        q: "Bさんは 日曜日も 友達と 映画を 見ますか。",
        options: ["いいえ、うちで 本を 読みます", "はい、映画を 見ます", "いいえ、寝ます", "この 文章には ありません"],
        answer: 0,
        note: "日曜日は家で本を読みます。"
      }
    ]
  }
]);
