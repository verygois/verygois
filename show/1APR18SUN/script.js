'use strict'

const directory = "https://ia902704.us.archive.org/4/items/1APR18SUN/1APR18SUN/"
const thumbs = "https://archive.org/download/1APR18SUN/1APR18SUN.thumbs/1APR18SUN/"
let coverArr = [
  'cover'
];

let weatherArr = [
  'weather/001'
];

let gakuArr = [
  'gaku/001',
  'gaku/002',
  'gaku/003',
  'gaku/004',
  'gaku/005',
  'gaku/006',
  'gaku/007',
  'gaku/008'
];

let tamuraArr = [
  'tamura/001',
  'tamura/002',
  'tamura/003',
  'tamura/004'
];

let sosuiArr = [
  'sosui/001',
  'sosui/002',
  'sosui/003'
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
  video.setAttribute('poster', `${thumbs}${array[0]}_000001.jpg`);
  mp4.setAttribute('src', `${directory}${array[0]}.mp4`);
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
  <p>
  <input hidden type="button" onclick="location.assign('/ctlg/05/pseudo-world-tour/')" value="疑似世界旅行"/>
  </p>
  `
  video.setAttribute('poster', 'https://archive.org/download/1APR18SUN/1APR18SUN.thumbs/1APR18SUN/weather/001_000165.jpg');
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
  `
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
  `
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
  `
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
  <font color="red">出演者の名前をクリックすると演奏の動画が再生されます</font>
  </p>
  <p>6:00 pm : bgm 2</p>
  <p>
  6:15 pm : pseudo world tour by shoji funakawa<br/>
  <input hidden type="button" onclick="location.assign('/ctlg/05/pseudo-world-tour/')" value="疑似世界旅行"/>
  </p>
  <p>7:00 pm : bgm 3</p>
  <p>
  7:15 pm : improvisation session with audience<br/>
  <input hidden type="button" onclick="location.assign('/ctlg/05/1APR18SUN')" value="観客参加型即興セッション"/>
  </p>
  <p>8:00 pm : end</p>
  `
  changeHidden()
}

pehu.addEventListener('mouseover', function() {
  video.hidden = false;
});

pehu.addEventListener('mouseleave', function() {
  video.hidden = true;
});
