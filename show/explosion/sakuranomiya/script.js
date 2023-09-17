'use strict'

let mapBtn = document.querySelector('#access'),
actBtn = document.querySelector('#act'),
article = document.querySelector('#main'),
nav = document.querySelector('#main nav'),
section = document.querySelector('#main section'),
map = document.querySelector('#map img'),
main = document.querySelector('main'),
mainBtn = document.querySelector('main h1 button');


mapBtn.addEventListener('click', function() {
  map.style.opacity = "1";
  actBtn.style.display = "none"
  nav.style.display = "none"
  section.style.display = "none"
  window.setTimeout(function(){
    map.style.opacity = "0";
    actBtn.style.display = "block"
    nav.style.display = "block"
    section.style.display = "block"
  }, 5000);
});

actBtn.addEventListener('click', function() {
  article.style.display = "none"
  main.style.display = "block"
});

mainBtn.addEventListener('click', function() {
  article.style.display = "flex"
  main.style.display = "none"
});


let countdown = setInterval(function () {
  document.querySelectorAll('.countdown').forEach(function (CD) {
    const now = new Date()
    const targetTime = new Date(CD.getAttribute("data-target-time"))
    const realTime = targetTime - now

    if (realTime < 0) return true
    const day = Math.floor(realTime / 1000 / 60 / 60 / 24)
    const hour = Math.floor(realTime / 1000 / 60 / 60) % 24
    const min = Math.floor(realTime / 1000 / 60) % 60
    const sec = Math.floor(realTime / 1000) % 60
    const msec = Math.floor(realTime / 10) % 60

    CD.querySelector('#date').innerHTML = "まで"

    CD.querySelectorAll('.day')[0].innerHTML = day + "<small>日</small>";
    CD.querySelectorAll('.hour')[0].innerHTML = hour + "<small>時間</small>";
    CD.querySelectorAll('.min')[0].innerHTML = min + "<small>分</small>";
    CD.querySelectorAll('.sec')[0].textContent = sec;
    CD.querySelectorAll('.msec')[0].textContent = msec;
  });
}, 0)
