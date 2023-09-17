'use strict'

let aside = document.querySelector('#map'),
one = document.querySelector('#one'),
ohta = document.querySelector('#ohta'),
neko = document.querySelector('#neko'),
miyuki = document.querySelector('#miyuki'),
ezaki = document.querySelector('#ezaki'),
mizuuchi = document.querySelector('#mizuuchi');

function map() {
  aside.innerHTML = `
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.2475836025853!2d135.503489586223!3d34.68019341447118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e71930370865%3A0xf83c38d6dab54ee9!2sHOPKEN!5e0!3m2!1sja!2sjp!4v1689143509361!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  `
}

function sunset() {
  aside.innerHTML = `
  <h3>日没後、<br/>催しを開始します</h3>
  `
  aside.style.backgroundImage = 'url("cover.png")'
}

one.addEventListener('click', function() {
  aside.innerHTML = `
  <h3>010001111000<br/>演奏</h3>
  `
  aside.style.backgroundImage = 'url("")'
});

ohta.addEventListener('click', function() {
  aside.innerHTML = `
  <h3>Takamitsu Ohta<br/>サウンドインスタレーション</h3>
  `
  aside.style.backgroundImage = 'url("")'
});

neko.addEventListener('click', function() {
  aside.innerHTML = `
  <h3>ねこっぱ<br/>詩の朗読</h3>
  `
  aside.style.backgroundImage = 'url("")'
});

miyuki.addEventListener('click', function() {
  aside.innerHTML = `
  <h3>みゆき<br/>選曲する</h3>
  `
  aside.style.backgroundImage = 'url("")'
});

ezaki.addEventListener('click', function() {
  aside.innerHTML = `
  <h3>江崎將史<br/>音を伴う行為、行為、作曲</h3>
  `
  aside.style.backgroundImage = 'url("")'
});

mizuuchi.addEventListener('click', function() {
  aside.innerHTML = `
  <h3>水内義人<br/>遠隔参加による催眠術</h3>
  `
  aside.style.backgroundImage = 'url("")'
});
