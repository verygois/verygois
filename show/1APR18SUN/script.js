'use strict'

const directory = "https://arena-attachments.s3.amazonaws.com/"
let coverArr = [
  '27257417/5a485fb049c48d97e97a332bfb47ac36.mp4'
];

let weatherArr = [
  '27257958/79f45257a0fa9ffb56a88fc377a125b0.mp4'
];

let gakuArr = [
  '27257437/30a5eb3b8c7d6352a05fe4c7c1a47a26.mp4',
  '27257436/757eacdfc21597b4b1df92a997ba672d.mp4',
  '27257433/eba1485493aa1470cc1fd99dbc050877.mp4',
  '27257439/e8bac6301a03797167c8b06ec39fb9bb.mp4',
  '27257440/2186075fdedc54fa7c0f33a49c6275e9.mp4',
  '27257438/08ada325c5712f58bcc7a76707afdff6.mp4',
  '27257434/e096c053f01241e7f57d743da4b97ad4.mp4',
  '27257435/835bdbeb77645eba40575f3b8db15ec9.mp4'
];

let tamuraArr = [
  '27257914/54b1db76654393d6beaa864a549141a1.mp4',
  '27257908/fb95f0b32fd0caa3056b3891773e9cbe.mp4',
  '27257909/2b03900d1245fe5e7d4e03950498e18a.mp4',
  '27257910/fc588d7003b39d13a2b3df5006079a73.mp4'
];

let sosuiArr = [
  '27257454/ffcda7735999d4865e4c745ab8b2eb4f.mp4',
  '27257451/5f2c87ff80bf2aa72b074550973899c3.mp4',
  '27257452/f3f0ac954da13eca4377bb1cc08b7b17.mp4'
];

const video = document.querySelector('#video'),
  mp4 = document.querySelector('#mp4'),
  pehu = document.querySelector('#pehu');

// 配列シャッフル
function shuffle(array) {
  var n = array.length, t, i;
  while (n) {
    i = Math.floor(Math.random() * n--);
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }
  mp4.setAttribute('src', `${directory}${array[0]}`);
  video.load();
  video.play();
}

video.addEventListener('ended', () => {
  video.load();
  video.play();
}, false);

shuffle(coverArr)

function changeHidden() {
  const articleAll = document.querySelectorAll('article'),
    menu = document.querySelector('#menu');
  articleAll.forEach(article => {
    if (article.hidden == false) {
      article.hidden = true;
      article.style.display = "none";
      menu.innerText = "?";
      video.hidden = true;
    } else {
      article.hidden = false;
      article.style.display = "block";
      menu.innerText = "×";
      video.hidden = false;
    }
  })
}

function weather() {
  info.innerHTML = `
  <details>
  <summary>船川翔司 | Shoji Funakawa</summary>
  <p>
  1987年 鹿児島生まれ。<br/>展示やパフォーマンスを中心に活動。<br/>
  主に淀川河岸近辺の日常から断絶した異他なる場所案内『場所』<br/>
  2016年、元お欠き工場の廃工場、山本製菓にて『Poehum (poetory huming)』を発表。<br/>
  Yakaraやアキビンオオケストラに参加している。
  </p>
  </details>
  <p>
  <i>光・煙・ハウリングを使った行為と擬似世界旅行</i>
  </p>
  `;
  changeHidden()
  shuffle(weatherArr)
}

function gaku() {
  info.innerHTML = `
  <details>
  <summary>黒川岳 | Gaku Kurokawa</summary>
  <p>
  1994年、島根県生まれ。<br/>東京藝術大学音楽学部音楽環境創造科卒業。<br/>
  風や石、川など身の回りにある物質や環境、そして人の振る舞いに着目しながら作品制作を行う。<br/>
  2015年には、船に乗った鑑賞者同士を水上ですれ違わせる参加型のパフォーマンス『道を引く』を発表。
  </p>
  <p>
  <a href="https://gakukurokawa.com/" target="_blank">gakukurokawa.com</a>
  </p>
  </details>
  <p>
  <i>会場にあったもの・自作装置などを用いたパフォーマンス</i>
  </p>
  <p>
  <input type="button" onclick="shuffle(gakuArr)" value="他の動画を見る"/>
  </p>
  `;
  changeHidden()
  shuffle(gakuArr)
}

function tamura() {
  info.innerHTML = `
  <details>
  <summary>KeitaroTamura</summary>
  <p>
  <a href="https://soundcloud.com/keitarotamura" target="_blank">soundcloud</a>
  <a href="https://keitarotamura.bandcamp.com/" target="_blank">bandcamp</a>
  </p>
  </details>
  <p>
  <i>音のなるもの・会場内の音を使った即興演奏</i>
  </p>
  <p>
  <input type="button" onclick="shuffle(tamuraArr)" value="他の動画を見る"/>
  </p>
  `;
  changeHidden()
  shuffle(tamuraArr)
}

function sosui() {
  info.innerHTML = `
  <details>
  <summary>Aoi Hatsushiba</summary>
  <p>
  ブログ「素水」運営者
  </p>
  <p>
  <a href="https://soundcloud.com/aoihatsushiba" target="_blank">soundcloud</a>
  <a href="https://aoisosui.blogspot.jp/" target="_blank">blogspot</a>
  </p>
  </details>
  <p>
  <i>※会場不在。この日のためのBGMを制作</i>
  </p>
  <p>
  <input type="button" onclick="shuffle(sosuiArr)" value="他の動画を見る"/>
  </p>
  `;
  changeHidden()
  shuffle(sosuiArr)
}

function menu() {
  info.innerHTML = `
  <p><u>進行表</u></p>
  <p>5:00 pm : open/bgm 1</p>
  <p>
  5:15 pm : solo paformance around 10 min x 3<br/>
  出演者3名が約10分ずつ演奏<br/>
  <font color="red">出演者の名前をクリックすると記録映像が再生されます</font>
  </p>
  <p>6:00 pm : bgm 2</p>
  <p>
  6:15 pm : pseudo world tour by shoji funakawa<br/>
  疑似世界旅行
  </p>
  <p>7:00 pm : bgm 3</p>
  <p>
  7:15 pm : improvisation session with audience<br/>
  観客参加型即興セッション
  </p>
  <p>8:00 pm : end</p>
  `;
  changeHidden()
}

pehu.addEventListener('mouseover', function () {
  video.hidden = false;
});

pehu.addEventListener('mouseleave', function () {
  video.hidden = true;
});
