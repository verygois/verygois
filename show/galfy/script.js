'use strict'

const aside = document.querySelector('aside'),
  kk = document.querySelector('#kk'),
  tamura = document.querySelector('#tamura'),
  take = document.querySelector('#take'),
  iiri = document.querySelector('#iiri'),
  woop = document.querySelector('#woop'),
  emcl = document.querySelector('#emcl'),
  kazquiz = document.querySelector('#kazquiz'),
  google = document.querySelector('#google');

kk.addEventListener('click', function () {
  aside.innerHTML = `
  <mark>2010年大阪で結成 2011年中断<br />半年後にバンド編成で活動再開<br />劇的に自分を変えるチャンスです。</mark>
  `
});

tamura.addEventListener('click', function () {
  aside.innerHTML = `
  <mark>通勤中に曲作っています。</mark>
  `
});

take.addEventListener('click', function () {
  aside.innerHTML = `
  <mark>🎶する😟</mark>
  `
});

iiri.addEventListener('click', function () {
  aside.innerHTML = `
  <mark>Keisuke Iiri<br />Osaka Japan 97'</mark>
  `
});

woop.addEventListener('click', function () {
  aside.innerHTML = `
  <mark>Hiroki Yamasaki<br />愛知県 安城市在住<br />三重県 四日市市出身</mark>
  `
});

emcl.addEventListener('click', function () {
  aside.innerHTML = `
  <mark>今後やりたいものは落語、サウンドオペラ、合唱隊、舞台、等。</mark>
  `
});

kazquiz.addEventListener('click', function () {
  aside.innerHTML = `
  <mark>
  Official Tee
  <small style="float: right;"><i>Out of Stock</i></small><br/>
  <img src="tee.jpeg" width="100%" />
  </mark>
  `
});

google.addEventListener('click', function () {
  aside.innerHTML = `
  <mark>
  住所: 〒531-0071 大阪府大阪市北区中津６丁目１３−３１<br/>
  <a href="https://goo.gl/maps/hsr4HS7QNGfbU3sZ9" rel="nofollow noreferrer">Google Map</a>
  </mark>
  `
});
