'use strict'

let day1 = document.querySelector('.left button'),
  day2 = document.querySelector('.right button'),
  main = document.querySelector('main'),
  iframe = document.querySelector('#main'),
  nn = document.querySelector('header input[type="button"]'),
  h1 = document.querySelector('h1'),
  about = document.querySelector('header p');

nn.addEventListener('click', function () {
  h1.innerText = "聖なる菊んの儀";
  main.style.background = "50% 50% / contain";
  main.style.backgroundImage = "url('000.png')";
  iframe.src = "";
  about.innerHTML = "";
});

day1.addEventListener('click', function () {
  h1.innerText = "TEXT SEX";
  about.innerText = "エメラルドクリトリスによる即興サウンドノベル";
  iframe.src = "tex/index.html";
  ago('2014/03/29 13:00:00');
});

day2.addEventListener('click', function () {
  h1.innerText = "1 0 × 1 0 l i v e";
  about.innerText = "バッファローマッキーによる10分×10回ライブ";
  iframe.src = "https://player.vimeo.com/video/90674476?h=2ae0413e57&title=0&byline=0&portrait=0";
  iframe.setAttribute("allow","autoplay; fullscreen; picture-in-picture");
  iframe.setAttribute("allowfullscreen","true");
  ago('2014/03/30 21:00:00');
});

function ago(date = '') {
  let ago = new Date(date);
  let diff = new Date().getTime() - ago.getTime();

  let progress = new Date(diff);
  if (progress.getUTCFullYear() - 1970) {
    event.target.textContent = progress.getUTCFullYear() - 1970 + '年前';
  } else if (progress.getUTCMonth()) {
    event.target.textContent = progress.getUTCMonth() + 'ヶ月前';
  } else if (progress.getUTCDate() - 1) {
    event.target.textContent = progress.getUTCDate() - 1 + '日前';
  } else if (progress.getUTCHours()) {
    event.target.textContent = progress.getUTCHours() + '時間前';
  } else if (progress.getUTCMinutes()) {
    event.target.textContent = progress.getUTCMinutes() + '分前';
  } else {
    event.target.textContent = 'たった今';
  }
}
