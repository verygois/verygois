'use strict'

const info = document.querySelector('#info');
async function index(url) {
  fetch(url)
  .then(response => response.text())
  .then(innerHTML => {
    info.innerHTML = innerHTML
  })
}

function left() {
  index("left.html")
  changeHidden()
  playMP4('https://ia902704.us.archive.org/33/items/20171008_1009/20171008.mp4')
}

function right() {
  index("right.html")
  changeHidden()
  playMP4('https://ia902704.us.archive.org/33/items/20171008_1009/20171009.mp4')
}

const video = document.querySelector('#video'),
mp4 = document.querySelector('#mp4');
function playMP4(src) {
  mp4.setAttribute('src', src);
  video.load();
  video.play();
  video.addEventListener("ended", function() {
    video.play();
  }, false);
}

function changeHidden() {
  const articleAll = document.querySelectorAll('article'),
  menu = document.querySelector('#menu');
  articleAll.forEach(article => {
    if (article.hidden == false) {
      article.hidden = true
      article.style.display = "none"
      menu.style.display = "none"
    } else {
      article.hidden = false
      article.style.display = "flex"
      menu.style.display = "block"
    }
    video.pause();
  })
}
