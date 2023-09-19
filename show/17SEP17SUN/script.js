'use strict'

const sectionAll = document.querySelectorAll('section'),
uAll = document.querySelectorAll('nav u'),
enter = document.querySelector('#enter'),
close = document.querySelector('#close');

let n = 0;
function randomBG(arr, query = '') {
  if (n >= arr.length - 1) {
    n = 0;
  } else {
    n++;
  }
  document.querySelector(query).style.backgroundImage = `url('${arr[n]}')`;
};

let index = () => {
  for (const u of uAll) {
    u.style.display = "block"
  }
  enter.innerHTML = `
  <h3>#17SEP17SUN</h3>
  <p class="data" data-before="venue" data-after="会場">孔雀ハウス 右の3階</p>
  <p class="data" data-before="12:00" data-after="18:00">2017/9/17 (sun)</p>
  <p class="data" data-before="entrance fee" data-after="無料">free</p>
  `
};

function works(query = '') {
  for (const u of uAll) {
    u.style.display = "none"
  }
  sectionAll.forEach(section => {
    section.style.display = "none"
  })
  document.querySelector(query).style.display = "block"
  close.style.display = "block"
}

var count = 0;
close.addEventListener('click', function() {
  if (count == 0) {
    count++;
    sectionAll.forEach(section => {
      section.style.display = "none"
    })
    enter.style.display = "block"
    index()
    this.innerText = "×"
  } else {
    count--;
    for (const u of uAll) {
      u.style.display = "none"
    }
    sectionAll.forEach(section => {
      section.style.display = "none"
    })
    enter.style.display = "block"
    enter.innerHTML = `
    <h1>#17SEP17SUN</h1>
    <h2><a href="https://vg.pe.hu/ctlg/04/17SEP17SUN/">Enter</a></h2>
    <p>ID/Pass is included <a href="../../ctlg/04/">Very Gois #04</a></p>
    `
    this.innerText = "?"
  }
});
