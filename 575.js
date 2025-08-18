'use strict'
const five =[
  '鳴かぬなら',
  'ホトトギス',
  '古池や',
  '水の音',
  '柿くへば',
  '法隆寺',
  '菜の花や',
  '日は西に',
  '雪とけて',
  '子どもかな',
  '愛してる',
  'こんにちは',
  'さようなら',
  'ありがとう',
  'こんばんは',
  'すみません',
  '喜んで',
  '思います',
  'そうですね',
  'そうきたか',
  'そうなのか',
  '離さない',
  '話さない',
  '逃がさない',
  'お母さん',
  'お父さん',
  'おばあちゃん',
  'おじいちゃん',
  '男の子',
  '女の子',
  'オムライス',
  'ナポリタン',
  'メンチカツ',
  'エビフライ',
  'モンブラン',
  'おまんじゅう',
  'ところてん',
  '生卵',
  'ゆで卵',
  'タラバガニ',
  'ズワイガニ',
  '帆立貝',
  'ホッキ貝',
  '貝柱',
  'さくらんぼ',
  'マスカット',
  'モロヘイヤ',
  'さつまいも',
  'ちんすこう',
  '海ぶどう',
  '備蓄米',
  '古古古米',
  'カレーパン',
  'とろろかけ',
  'ケセラセラ',
  '素晴らしい',
  '新しい',
  'ややこしい',
  'やかましい',
  '恐ろしい',
  'ありえない',
  '難しい',
  '浅ましい',
  'はやすぎる',
  '遅すぎる',
  'あからさま',
  '知らんぷり',
  '夢の中',
  '膝の上',
  '鼻の穴',
  '耳の穴',
  '口の中',
  '喉の奥',
  '長脇毛',
  '力こぶ',
  'スニーカー',
  'ハイヒール',
  '長ズボン',
  '半ズボン',
  '伊達メガネ',
  'サングラス',
  'コンタクト',
  'イヤリング',
  'ネックレス',
  'ペンダント',
  'プレゼント',
  '待ち合わせ',
  '待ち侘びた',
  '待ってくれ',
  '交差点',
  'マンホール',
  'アスファルト',
  'ビリヤード',
  'クリケット',
  'ボウリング',
  'ボクシング',
  'フェンシング',
  'ラリアット',
  'パワーボム',
  '上手投げ',
  '背負い投げ',
  '巴投げ',
  '日曜日',
  '月曜日',
  '火曜日や',
  '水曜日',
  '木曜日',
  '金曜日',
  '土曜日や',
  '鬼ごっこ',
  'かくれんぼ',
  'すべり台',
  'ブランコや',
  '笑い合う',
  '笑えれば',
  '泣き出した'
];
const seven = [
  '鳴くまで待とう',
  '鳴かせてみよう',
  '殺してしまえ',
  '蛙飛び込む',
  '鐘が鳴るなり',
  '月は東に',
  '村いっぱいの',
  'ふりかけごはん',
  '流しそうめん',
  '苺大福',
  '古古古古古米',
  'おやすみなさい',
  '今日も唱える',
  '線香花火',
  '打ち上げ花火',
  '花火大会',
  '一都六県',
  '改札の前',
  '椅子取りゲーム',
  'ビーチサンダル',
  '一石二鳥',
  '快刀乱麻',
  '百戦錬磨',
  '捲土重来',
  '名誉挽回',
  '老いも若いも',
  'なんでもないよ',
  '良くも悪くも',
  '瞳に映る',
  'あの日見つけた',
  'あの日夢みた',
  'あの日のように',
  'あの日渡した',
  'あれからいつも',
  '震える指で',
  'あなたと私',
  '探しに行こう',
  '輝くだろう',
  'いつものように',
  '近い将来',
  '使い古した',
  '見よう見まねで',
  '待ちくたびれた',
  'つべこべ言わず',
  'やっちまったな',
  '力いっぱい',
  '忘れた頃に',
  'あっという間に',
  'ちょっと待ってよ',
  'それでいいのか',
  'そんなわけない',
  'それがどうした',
  'そんなことより',
  '今日も明日も',
  '明日はきっと',
  '心配ないさ',
  '一家団欒',
  '広いリビング',
  'スーツケースに',
  'リュックサックに',
  'カバンの中に',
  'ポケットの中',
  '私の心',
  'あなたの心',
  '心の中に',
  '心を込めて',
  'ホップステップ',
  'ティラノサウルス',
  'ステゴサウルス',
  'トリケラトプス',
  '電信柱',
  '横断歩道',
  'ドロップキック',
  'バックドロップ',
  '4の字固め',
  '腹筋割れた'
];

const Button = document.getElementById('haijin_button');
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
