'use strict'

const main = document.querySelector('#main'),
video = document.querySelector('#video'),
mp4 = document.querySelector('#mp4'),
download = document.querySelector('#download')

function playThis() {
  video.setAttribute('poster', '001.jpg');
  mp4.setAttribute('src', '000.mp4');
  download.setAttribute('href', '000.mp4');
  video.load();
}

window.addEventListener('load', function() {
  bgImage('001.jpg');
  playThis();
  video.play();
});

video.addEventListener('ended', () => {
  playThis();
  video.play();
}, false);

function bgImage(url = '') {
  document.body.style.backgroundImage = `url(${url})`;
}

const changeBGAll = document.querySelectorAll('footer div[data-img]');
changeBGAll.forEach(changeBG => {
  changeBG.addEventListener('mouseover', function() {
    bgImage(changeBG.dataset.img);
  }, false);
  changeBG.addEventListener('mouseleave', function() {
    bgImage('001.jpg');
  }, false);
})
