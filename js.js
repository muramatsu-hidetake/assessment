'use strict';
const userNameInput = document.getElementById('name');
const submitButton = document.getElementById('submit');
const resultDivided = document.getElementById('result-area');
const battlelog = document.getElementById('log');
const start = document.getElementById('battle');
const reset = document.getElementById('reset');
const winner = document.getElementById('winner');
const loser = document.getElementById('loser');
const winnertwo = document.getElementById('winnertwo');
const losertwo = document.getElementById('losertwo');
const myname = document.getElementById('myname');
const enemyname = document.getElementById('enemyname');
const tyuui = document.getElementById('tyuui');
const skilla = document.getElementById('skilla');
const skillb = document.getElementById('skillb');
const skillc = document.getElementById('skillc');
const skilld = document.getElementById('skilld');

const animation = document.getElementById('animation');
const one = document.getElementById('logone');
const two = document.getElementById('logtwo');
const three = document.getElementById('logthree');
const four = document.getElementById('logfour');
const five = document.getElementById('logfive');
const six = document.getElementById('logsix');

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
  document.getElementById("battle").style.display = "inline-block";
  const userName = userNameInput.value;
  if (userName.length === 0) {
    return;
  }
  resetButton.onclick();
  removeAllChildren(resultDivided);
  const paragraph = document.createElement('p');
  const result = submit(userName);
  paragraph.innerText = result;
  resultDivided.appendChild(paragraph);
  
  namelog(userName);
  if(myname.className = 'none'){}{myname.className='none';}
  resultDivided.className='display';
  removeAllChildren(one);
  removeAllChildren(two);
  removeAllChildren(three);
  removeAllChildren(four);
  removeAllChildren(five);
  removeAllChildren(six);

  if(jobnumber===0){
  mymenu.style.display = 'block';
  mymenutwo.style.display = 'none';
  mymenuthree.style.display = 'none';
  mymenufour.style.display = 'none';}
  else if(jobnumber===1){
  mymenu.style.display = 'none';
  mymenuthree.style.display = 'none';
  mymenufour.style.display = 'none';
  mymenutwo.style.display = 'block';}
  else if(jobnumber===2){
  mymenu.style.display = 'none';
  mymenutwo.style.display = 'none';
  mymenufour.style.display = 'none';
  mymenuthree.style.display = 'block';}
  else if(jobnumber===3){
  mymenu.style.display = 'none';
  mymenutwo.style.display = 'none';
  mymenuthree.style.display = 'none';
  mymenufour.style.display = 'block';}
};


function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

  // 名前と職業を表示
function namelog(username){
  removeAllChildren(myname);
  const namelog = document.createElement('p');
  namelog.innerText = username + '　種族：' + jobname[jobnumber];
  myname.appendChild(namelog);
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
  return result;
}



// 戦闘処理ここから
const battleButton = document.getElementById('battle');
battleButton.onclick = () => {
  myname.className='myname';
  resultDivided.className='none';
  if(jobnumber===0){mycard=jobA;}
  else if(jobnumber===1){mycard=jobB;}
  else if(jobnumber===2){mycard=jobC;}
  else if(jobnumber===3){mycard=jobD;}
    // サイコロ処理

  let saikoro = Math.floor( Math.random() * 6);
  cardA = mycard[saikoro];


  const userName = userNameInput.value;
  let comment = "";
  if(jobnumber===0){comment=jobAtext;}
  else if(jobnumber===1){comment=jobBtext;}
  else if(jobnumber===2){comment=jobCtext;}
  else if(jobnumber===3){comment=jobDtext;}
  const logloglog = document.createElement('p');
  logloglog.innerText = (userName+' の '+comment[saikoro]);

    // 相手への攻撃計算
  let resultA = Action(cardA[0],cardB[1]);
  const loglog = document.createElement('p');
  loglog.innerText = (`あいてに${resultA}のダメージ`);

  HPB = HPB - resultA;
  const logtwo = document.createElement('p');
  logtwo.innerText = `相手の残り体力：${HPB}`;

  // 自分への攻撃計算
  let resultB = Action(cardB[0],cardA[1]);
  const logthree = document.createElement('p');
  logthree.innerText = `${resultB}のダメージをうけた`;
  
  HPA = HPA - resultB;
  const logfour = document.createElement('p');
  logfour.innerText = `こちらの体力：${HPA}`;

  const logfive = document.createElement('p');
  logfive.innerText = `-----------ターン終了-----------`;

  //勝ち負け
  lifeBar.style.width = HPA+"%";
  lifeBartwo.style.width = HPB+"%";
  if(HPA <= 0){
    HPA = 0;
    lifeBar.style.width = HPA+"%";
    removelog();
    document.getElementById("loserbig").style.display = "block";
    loser.className = 'notdefault';
    losertwo.className = 'notdefaulttwo';
    losertwo.appendChild(logthree);
    start.style.display='none';
    document.getElementById("reset").style.display = "inline-block";
    resetandfixbtn=1;
    return;
  }else if(HPB <=0){
    HPB = 0;
    lifeBartwo.style.width = HPB+"%";
    removelog();
    document.getElementById("winerbig").style.display = "block";
    winner.className = 'notdefault';
    winnertwo.className = 'notdefaulttwo';
    winnertwo.appendChild(loglog);
    start.style.display='none';
    document.getElementById("reset").style.display = "inline-block";
    resetandfixbtn=1;
    return;
  }else {
    removelog();
    one.appendChild(logfive);
    two.appendChild(logfour);
    three.appendChild(logthree);
    four.appendChild(logtwo);
    five.appendChild(loglog);
    six.appendChild(logloglog);

    const nextturn = document.createElement('p');
    nextturn.innerText = `次のターン`;
    start.appendChild(nextturn);
    set = 1;
    return;}
};
document.getElementById("loserbig").style.display = "none";
document.getElementById("winerbig").style.display = "none";

const starter = document.createElement('p');
starter.innerText = `はじめる`;
start.appendChild(starter);


// HPゲージ
const lifeBar = document.getElementById('life-bar');
lifeBar.style.width = "100%";
const lifeBartwo = document.getElementById('life-bartwo');
lifeBartwo.style.width = "100%";

// ログ整理の関数
const removelog = ()=>{
    removeAllChildren(one);
    removeAllChildren(two);
    removeAllChildren(three);
    removeAllChildren(four);
    removeAllChildren(five);
    removeAllChildren(six);
    removeAllChildren(start);
    removeAllChildren(winnertwo);
    removeAllChildren(losertwo);
    one.classList.remove('logone');
    two.classList.remove('logtwo');
    three.classList.remove('logthree');
    four.classList.remove('logfour');
    five.classList.remove('logfive');
    six.classList.remove('logsix');
    animation.classList.remove('animation');
    start.classList.remove('starts');
  }

let set = 0;
function setanime(){
  if(set = 1){
    one.className = 'logone';
    two.className = 'logtwo';
    three.className = 'logthree';
    four.className = 'logfour';
    five.className = 'logfive';
    six.className = 'logsix';
    animation.className = 'animation';
    start.className = 'starts';
    set = 0;
    return;
  }
}
setInterval("setanime()",1);

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
resetButton.onclick = () => {
  HPA = 100; HPB=100;
  lifeBar.style.width = HPA+"%";
  lifeBartwo.style.width = HPB+"%";
  document.getElementById("reset").style.display = "none";
  start.style.display='inline-block';
  removeAllChildren(start);
  start.appendChild(starter);
  document.getElementById("loserbig").style.display = "none";
  document.getElementById("winerbig").style.display = "none";
}

// HPの初期値
let HPA = 100;
let HPB = 100;
// 攻撃力定義。Aはこちら、Bは相手の手札
let cardA = [60,30];
let cardB = [40,20];

let jobname = ['盗賊','魔術師','たこ','カタツムリ'];
let mycard = [
  [60,30],
  [10,10],
  [1,1],
  [5,5],
  [12,12],
  [14,14]
];

let jobA =[
  [60,40],
  [40,15],
  [35,35],
  [0,100],
  [0,-10],
  [70,0]];
  let jobAset =[
    [60,40,3],
    [40,15,2],
    [35,35,3],
    [0,100,2],
    [0,-10,0],
    [70,0,5]];
    let jobAtext =[
      'ブラスター',
      'セイバー',
      '格闘術',
      '危険予測',
      '余裕を見せている',
      'グレネード'
      ];
        const jobAtextset =[
      'ブラスター',
      'セイバー',
      '格闘術',
      '危険予測',
      '余裕を見せている',
      'グレネード'
      ];
let jobB =[
    [50,50],
    [50,0],
    [20,50],
    [20,20],
    [10,10],
    [25,25]];
 let jobBset =[
    [60,60,6],
    [50,0,2],
    [20,50,1],
    [20,20,3],
    [10,10,0],
    [25,25,3]];
   let jobBtext =[
      'テレキネシス',
      '転移攻撃',
      '不意打ち',
      'パンチ',
      'ファイア',
      'スプリント'];
    const jobBtextset =[
        'テレキネシス',
        '転移攻撃',
        '不意打ち',
        'パンチ',
        'ファイア',
        'スプリント'
        ];
let jobC =[[0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0]];
    let jobCset =[[0,0,1],
    [15,15,1],
    [0,30,1],
    [0,20,1],
    [0,-5,1],
    [150,0,10]];
    let jobCtext =[
      'ふやける',
      '盆踊り',
      'メンダコダンス',
      'あまごい',
      'いっぷく',
      '核攻撃'];
          const jobCtextset =[
          'ふやける',
          '盆踊り',
          'メンダコダンス',
          'あまごい',
          'いっぷく',
          '核攻撃'
            ];
let jobD =[[10,10],
[10,10],
[10,10],
[10,10],
[10,10],
[10,10]];
let jobDset =[[10,10,1],
[10,10,1],
[10,10,1],
[10,10,1],
[10,10,1],
[10,10,1]];
let jobDtext =[
'ぬるぬる',
'あまごい',
'すいみん',
'らりるれろ',
'ゆっくり！',
'のろい！'
];const jobDtextset =[
'ぬるぬる',
'あまごい',
'すいみん',
'らりるれろ',
'ゆっくり！',
'のろい！'
];



/* メニュー選択⇒フィックスボタン⇒関数でmycardに入れ込み */
let menumath =0;
let skillpoint =0;
const confirm = document.getElementById('confirm');
confirm.onclick = () => {
  if(jobnumber === 0){
    const AA = document.getElementById('jobamenuaaa');
    let AAA = AA.value;
    const AB = document.getElementById('jobamenubbb');
    let AAB = AB.value;
    const AC = document.getElementById('jobamenuccc');
    let AAC = AC.value;
    const AD = document.getElementById('jobamenuddd');
    let AAD = AD.value;
    const AE = document.getElementById('jobamenueee');
    let AAE = AE.value;
    const AF = document.getElementById('jobamenufff');
    let AAF = AF.value;
    jobA[0] =  jobAset[AAA]; 
    jobA[1] =  jobAset[AAB];
    jobA[2] =  jobAset[AAC];
    jobA[3] =  jobAset[AAD];
    jobA[4] =  jobAset[AAE];
    jobA[5] =  jobAset[AAF];
    jobAtext[0] =  jobAtextset[AAA]; 
    jobAtext[1] =  jobAtextset[AAB];
    jobAtext[2] =  jobAtextset[AAC];
    jobAtext[3] =  jobAtextset[AAD];
    jobAtext[4] =  jobAtextset[AAE];
    jobAtext[5] =  jobAtextset[AAF];
    let mathone = jobA[0];
    let mathtwo = jobA[1];
    let maththree = jobA[2];
    let mathfour = jobA[3];
    let mathfive = jobA[4];
    let mathsix = jobA[5];
    if((mathone[2]+mathtwo[2]+maththree[2]+mathfour[2]+mathfive[2]+mathsix[2])>15){menumath=1;}else{menumath=0;}
    skillpoint = mathone[2]+mathtwo[2]+maththree[2]+mathfour[2]+mathfive[2]+mathsix[2];
    removeAllChildren(skilla);
    let skillpointlog = document.createElement('p');
    skillpointlog.innerText = `スキルポイント：${skillpoint}/15`;
    skilla.appendChild(skillpointlog);

    }else if(jobnumber === 1){
      const AA = document.getElementById('jobbmenuaaa');
      let AAA = AA.value;
      const AB = document.getElementById('jobbmenubbb');
      let AAB = AB.value;
      const AC = document.getElementById('jobbmenuccc');
      let AAC = AC.value;
      const AD = document.getElementById('jobbmenuddd');
      let AAD = AD.value;
      const AE = document.getElementById('jobbmenueee');
      let AAE = AE.value;
      const AF = document.getElementById('jobbmenufff');
      let AAF = AF.value;
      jobB[0] =  jobBset[AAA]; 
      jobB[1] =  jobBset[AAB];
      jobB[2] =  jobBset[AAC];
      jobB[3] =  jobBset[AAD];
      jobB[4] =  jobBset[AAE];
      jobB[5] =  jobBset[AAF];
      jobBtext[0] =  jobBtextset[AAA]; 
      jobBtext[1] =  jobBtextset[AAB];
      jobBtext[2] =  jobBtextset[AAC];
      jobBtext[3] =  jobBtextset[AAD];
      jobBtext[4] =  jobBtextset[AAE];
      jobBtext[5] =  jobBtextset[AAF];
      let mathone = jobB[0];
      let mathtwo = jobB[1];
      let maththree = jobB[2];
      let mathfour = jobB[3];
      let mathfive = jobB[4];
      let mathsix = jobB[5];
      if((mathone[2]+mathtwo[2]+maththree[2]+mathfour[2]+mathfive[2]+mathsix[2])>15){menumath=1;}else{menumath=0;}
      skillpoint = mathone[2]+mathtwo[2]+maththree[2]+mathfour[2]+mathfive[2]+mathsix[2];
      removeAllChildren(skillb);
      let skillpointlog = document.createElement('p');
      skillpointlog.innerText = `スキルポイント：${skillpoint}/15`;
      skillb.appendChild(skillpointlog);
      }else if(jobnumber === 2){
        const AA = document.getElementById('jobcmenuaaa');
        let AAA = AA.value;
        const AB = document.getElementById('jobcmenubbb');
        let AAB = AB.value;
        const AC = document.getElementById('jobcmenuccc');
        let AAC = AC.value;
        const AD = document.getElementById('jobcmenuddd');
        let AAD = AD.value;
        const AE = document.getElementById('jobcmenueee');
        let AAE = AE.value;
        const AF = document.getElementById('jobcmenufff');
        let AAF = AF.value;
        jobC[0] =  jobCset[AAA]; 
        jobC[1] =  jobCset[AAB];
        jobC[2] =  jobCset[AAC];
        jobC[3] =  jobCset[AAD];
        jobC[4] =  jobCset[AAE];
        jobC[5] =  jobCset[AAF];
        jobCtext[0] =  jobCtextset[AAA]; 
        jobCtext[1] =  jobCtextset[AAB];
        jobCtext[2] =  jobCtextset[AAC];
        jobCtext[3] =  jobCtextset[AAD];
        jobCtext[4] =  jobCtextset[AAE];
        jobCtext[5] =  jobCtextset[AAF];
        let mathone = jobC[0];
        let mathtwo = jobC[1];
        let maththree = jobC[2];
        let mathfour = jobC[3];
        let mathfive = jobC[4];
        let mathsix = jobC[5];
        if((mathone[2]+mathtwo[2]+maththree[2]+mathfour[2]+mathfive[2]+mathsix[2])>15){menumath=1;}else{menumath=0;}
        skillpoint = mathone[2]+mathtwo[2]+maththree[2]+mathfour[2]+mathfive[2]+mathsix[2];
        removeAllChildren(skillc);
        let skillpointlog = document.createElement('p');
        skillpointlog.innerText = `スキルポイント：${skillpoint}/15`;
        skillc.appendChild(skillpointlog);
      }else if(jobnumber === 3){
          const AA = document.getElementById('jobdmenuaaa');
          let AAA = AA.value;
          const AB = document.getElementById('jobdmenubbb');
          let AAB = AB.value;
          const AC = document.getElementById('jobdmenuccc');
          let AAC = AC.value;
          const AD = document.getElementById('jobdmenuddd');
          let AAD = AD.value;
          const AE = document.getElementById('jobdmenueee');
          let AAE = AE.value;
          const AF = document.getElementById('jobdmenufff');
          let AAF = AF.value;
          jobD[0] =  jobDset[AAA]; 
          jobD[1] =  jobDset[AAB];
          jobD[2] =  jobDset[AAC];
          jobD[3] =  jobDset[AAD];
          jobD[4] =  jobDset[AAE];
          jobD[5] =  jobDset[AAF];
          jobDtext[0] =  jobDtextset[AAA]; 
          jobDtext[1] =  jobDtextset[AAB];
          jobDtext[2] =  jobDtextset[AAC];
          jobDtext[3] =  jobDtextset[AAD];
          jobDtext[4] =  jobDtextset[AAE];
          jobDtext[5] =  jobDtextset[AAF];
          let mathone = jobD[0];
          let mathtwo = jobD[1];
          let maththree = jobD[2];
          let mathfour = jobD[3];
          let mathfive = jobD[4];
          let mathsix = jobD[5];
          if((mathone[2]+mathtwo[2]+maththree[2]+mathfour[2]+mathfive[2]+mathsix[2])>15){menumath=1;}else{menumath=0;}
          skillpoint = mathone[2]+mathtwo[2]+maththree[2]+mathfour[2]+mathfive[2]+mathsix[2];
          removeAllChildren(skilld);
          let skillpointlog = document.createElement('p');
          skillpointlog.innerText = `スキルポイント：${skillpoint}/15`;
          skilld.appendChild(skillpointlog);
        }
      
      
  if(menumath<1){
    tyuui.style.display='none';
    if(resetandfixbtn<1){
    start.style.display='inline-block';}
  }else{
    start.style.display='none';
    tyuui.style.display='inline-block';
  }}
let resetandfixbtn = 0;
