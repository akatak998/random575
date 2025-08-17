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
  'お母さん',
  'お父さん',
  'オムライス',
  'ナポリタン',
  'メンチカツ',
  'モンブラン',
  'ケセラセラ'
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
  'おやすみなさい',
  '今日も唱える'
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