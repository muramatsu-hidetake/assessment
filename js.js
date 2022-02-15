'use strict';
const userNameInput = document.getElementById('name');
const submitButton = document.getElementById('submit');
const resultDivided = document.getElementById('result-area');
const battlelog = document.getElementById('log');


// 職業リスト
const answers = [
  '{userName}は戦闘狂です',
  '{userName}は魔術師です',
  '{userName}はタコです',
  '{userName}はカタツムリ、もしくはナメクジです'
];

let jobnumber = 0;


// 名前ボタン＞結果表示
submitButton.onclick = () => {
  const userName = userNameInput.value;
  if (userName.length === 0) {
    return;
  }

  removeAllChildren(resultDivided);
  const header = document.createElement('h3');
  header.innerText = '結果';
  resultDivided.appendChild(header);

  const paragraph = document.createElement('p');
  const result = submit(userName);
  paragraph.innerText = result;
  resultDivided.appendChild(paragraph);
};

function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

  // 職業ランダム割り振り
function submit(userName) {
  let sumOfcharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
  }
  let index = sumOfcharCode % answers.length;
  let result = answers[index];
  result = result.replaceAll('{userName}', userName);
  
  jobnumber = index;
  alert(index);
  return result;
}




// 戦闘処理ここから
const battleButton = document.getElementById('battle');
battleButton.onclick = () => {
  if(jobnumber===0){mycard=jobA;}else if(jobnumber===1){mycard=jobB;}else if(jobnumber===2){mycard=jobC;}else if(jobnumber===3){mycard=jobD;}
  alert(jobnumber);
    // サイコロ処理
  let saikoro = Math.floor( Math.random() * 6);
  cardA = mycard[saikoro];

  let comment = "";
  if(jobnumber===0){comment=jobAtext;}else if(jobnumber===1){comment=jobBtext;}else if(jobnumber===2){comment=jobCtext;}else if(jobnumber===3){comment=jobDtext;}
  const logloglog = document.createElement('p');
  logloglog.innerText = (comment[saikoro]);
  log.appendChild(logloglog);


    // 相手への攻撃計算
  let resultA = Action(cardA[0],cardB[1]);
  const loglog = document.createElement('p');
  loglog.innerText = (`あいてに${resultA}のダメージ`);
  log.appendChild(loglog);

  HPB = HPB - resultA;
  const logtwo = document.createElement('p');
  logtwo.innerText = `相手の残り体力：${HPB}`;
  log.appendChild(logtwo);

  // 自分への攻撃計算
  let resultB = Action(cardB[0],cardA[1]);
  const logthree = document.createElement('p');
  logthree.innerText = `${resultB}のダメージをうけた`;
  log.appendChild(logthree);
  
  HPA = HPA - resultB;
  const logfour = document.createElement('p');
  logfour.innerText = `こちらの体力：${HPA}`;
  log.appendChild(logfour);

  if(HPA <=0){window.alert('負けてしまった・・・');}
  else if(HPB <=0){window.alert("相手を倒した！！");}

  const logfive = document.createElement('p');
  logfive.innerText = `-----------ターン経過-----------`;
  log.appendChild(logfive);
};
// ダメージ計算
const Action = function(atack,block){
  let result = atack - block ;
  if(result < 0){
    result = 0;
  }
  return result;
}


// ダメージリセット
const resetButton = document.getElementById('reset');
resetButton.onclick = () => {HPA = 100; HPB=100;}

// HPの初期値
let HPA = 100;
let HPB = 100;
// 攻撃力定義。Aはこちら、Bは相手の手札
let cardA = [60,30];
let cardB = [40,20];


let mycard = [
  [60,30],
  [10,10],
  [1,1],
  [5,5],
  [12,12],
  [14,14]
];

const jobA =[[99,10],
[99,10],
[99,10],
[99,10],
[99,10],
[99,10]];
const jobAtext =[
  'ヒーハー！',
  'なぐった',
  'けった',
  'パンチ',
  'キック',
  'クリティカル！'
  ];
const jobB =[[50,50],
[50,50],
[50,50],
[50,50],
[50,50],
[50,50]];
const jobBtext =[
  '私は医者だ',
  'この手が動けば・・',
  '2000通りの未来を見てきた',
  '唯一の方法だ',
  '私はドクターストレンジ',
  'タイムストーンを守っている'
  ];
const jobC =[[30,30],
[30,30],
[30,30],
[30,30],
[30,30],
[30,30]];
const jobCtext =[
  'なかよくしてね',
  'たこはメンダコだよ',
  'をどる？',
  'ぺちゃん',
  '深海にいるよ',
  '陸の生き物だよ'
  ];
const jobD =[[10,10],
[10,10],
[10,10],
[10,10],
[10,10],
[10,10]];
const jobDtext =[
  'ぬるぬるしたが無意味',
  'いろんなところにいるよ',
  'ねむい',
  '塩はまかないでね',
  'ゆっくり動いた！',
  'のろい！'
  ];