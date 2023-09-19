'use strict'

const close = document.querySelector('#close');

var count = 0;
close.addEventListener('click', function () {
  if (count == 0) {
    count++;
    fetchHTML('pocke.html', 'article section')
    this.innerText = "×";
  } else {
    count--;
    document.querySelector('article section').innerHTML = `
    <h1>#24JUN17SAT</h1>
    <h2><a href="https://vg.pe.hu/ctlg/04/24JUN17SAT/">Enter</a></h2>
    <p>ID/Pass is included <a href="../../ctlg/04/">Very Gois #04</a></p>
    `
    this.innerText = "?"
  }
});

async function fetchHTML(url = '', query = '') {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.querySelector(query).innerHTML = html
    });
}
