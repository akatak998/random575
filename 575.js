'use strict'
const five =[
 "愛してる", 
 "あからさま", 
 "アゲハ蝶",
 "アスファルト", 
 "新しい", 
 "アブラゼミ",
 "ありえない", 
 "ありがとう",
 "イヤリング", 
 "イリエワニ",
 "馬に乗る",
 "上手投げ",
 "お母さん", 
 "おじいちゃん", 
 "お父さん",
 "鬼ごっこ",
 "おばあちゃん",
 "おまんじゅう", 
 "オムライス", 
 "思います",
 "貝柱", 
 "柿くへば", 
 "かくれんぼ",
 "カブトムシ",
 "火曜日や",
 "カレーパン",
 "カレンダー",
 "キリンかな",
 "金曜日", 
 "口の中", 
 "クリケット", 
 "ケセラセラ", 
 "後頭部",
 "古古古米", 
 "子どもかな", 
 "こんにちは", 
 "こんばんは", 
 "サイの角",
 "さくらんぼ", 
 "さつまいも",
 "さようなら", 
 "サングラス", 
 "鹿の角",
 "知らんぷり", 
 "水曜日",
 "スニーカー", 
 "素晴らしい", 
 "すべり台",
 "すみません",
 "背負い投げ", 
 "ズワイガニ", 
 "世界一",
 "世界中",
 "そうきたか",
 "そうですね", 
 "そうなのか", 
 "ゾウに乗る",
 "伊達メガネ", 
 "タラバガニ", 
 "ちんすこう", 
 "どうしたの",
 "どうしよう",
 "ところてん",
 "土曜日や", 
 "とろろかけ", 
 "長ズボン", 
 "長脇毛", 
 "泣き出した", 
 "菜の花や", 
 "ナポリタン", 
 "生卵", 
 "日曜日", 
 "ネックレス", 
 "逃がさない", 
 "日本一",
 "日本中",
 "喉の奥", 
 "ハイヒール", 
 "話さない", 
 "離さない",
 "鼻の穴", 
 "はやすぎる", 
 "パワーボム",
 "半ズボン", 
 "膝の上", 
 "日は西に", 
 "ビリヤード",
 "フェンシング",
 "ふくらはぎ",
 "ブランコや", 
 "古池や",
 "プレゼント", 
 "ペンダント", 
 "ボウリング", 
 "ボクシング",
 "星見上げ",
 "帆立貝", 
 "ホッキ貝", 
 "マスカット",
 "待ち合わせ",
 "待ち侘びた",
 "待ってくれ",
 "マンホール",
 "水の音",
 "耳の穴",
 "メンチカツ",
 "モロヘイヤ",
 "モンブラン",
 "木曜日",
 "やかましい",
 "ややこしい",
 "雪とけて",
 "ゆで卵",
 "夢の中",
 "喜んで",
 "ラリアット",
 "分からない",
 "笑い合う",
 "笑えれば"
];
const seven = [
 "あっという間に",
 "明日はきっと",
 "あなたと私",
 "あなたの心",
 "あの日のように",
 "あの日見つけた",
 "あの日夢みた",
 "あの日渡した",
 "あれからいつも",
 "いいえ私は",
 "椅子取りゲーム",
 "苺大福",
 "一家団欒",
 "一石二鳥",
 "一都六県",
 "いつものように",
 "打ち上げ花火",
 "老いも若いも",
 "横断歩道",
 "おやすみなさい",
 "改札の前",
 "快刀乱麻",
 "輝くだろう",
 "鐘が鳴るなり",
 "カバンの中に",
 "脚立登って",
 "今日も明日も",
 "今日も唱える",
 "蛙飛び込む",
 "捲土重来",
 "古古古古古米",
 "心の中に",
 "心を込めて",
 "近い将来",
 "力いっぱい",
 "ちょっと待ってよ",
 "使い古した",
 "ツクツクボウシ",
 "つべこべ言わず",
 "探しに行こう",
 "スーツケースに",
 "ステゴサウルス",
 "線香花火",
 "そうよ私は",
 "それがどうした",
 "それでいいのか",
 "そんなことより",
 "そんなわけない",
 "心配ないさ",
 "月は東に",
 "ティラノサウルス",
 "電信柱",
 "ところ構わず",
 "ところどころに",
 "トリケラトプス",
 "ドロップキック",
 "鳴かせてみよう",
 "流しそうめん",
 "鳴くまで待とう",
 "なんでもないよ",
 "バックドロップ",
 "花火大会",
 "ビーチサンダル",
 "瞳に映る",
 "百戦錬磨",
 "広いリビング",
 "腹筋割れた",
 "ふりかけごはん",
 "ポケットの中",
 "ホップステップ",
 "待ちくたびれた",
 "見よう見まねで",
 "村いっぱいの",
 "名誉挽回",
 "やっちまったな",
 "良くも悪くも",
 "リュックサックに",
 "震える指で",
 "4の字固め",
 "忘れた頃に",
 "私の心"
];

const Button = document.getElementById('Button');
if (!Button) {
  console.error('Button element not found');
} else {
  console.log('Button element found');
}
Button.addEventListener(
  'click',
  () => {
    //　最初の5文字を決める
    const first_words = Math.floor( Math.random() * five.length);
    const first_wordsDivision = document.getElementById('first_words');
    first_wordsDivision.innerHTML = ''; // 既存の内容をクリア

    // 最初の5文字を表示する
    const first_words_text = five[first_words];
    const first_words_textDivision = document.getElementById('first_words_text');
    
    // h2要素を作成して追加
    const first_paragraph = document.createElement('h2');
    first_paragraph.innerText = first_words_text;
    first_wordsDivision.appendChild(first_paragraph);

    // 真ん中の7文字を決める
    const second_words = Math.floor( Math.random() * seven.length);
    const second_wordsDivision = document.getElementById('second_words');
    second_wordsDivision.innerHTML = ''; // 既存の内容をクリア

    // 真ん中の7文字を表示する
    const second_words_text = seven[second_words];
    const second_words_textDivision = document.getElementById('second_words_text');

    // h2要素を作成して追加
    const second_paragraph = document.createElement('h2');
    second_paragraph.innerText = second_words_text;
    second_wordsDivision.appendChild(second_paragraph);

    //　最後の5文字を決める
    const last_words = Math.floor( Math.random() * five.length);
    const last_wordsDivision = document.getElementById('last_words');
    last_wordsDivision.innerHTML = ''; // 既存の内容をクリア

    // 最初の5文字を表示する
    const last_words_text = five[last_words];
    const last_words_textDivision = document.getElementById('last_words_text');
    
    // h2要素を作成して追加
    const last_paragraph = document.createElement('h2');
    last_paragraph.innerText = last_words_text;
    last_wordsDivision.appendChild(last_paragraph);

    }
  
  
)
