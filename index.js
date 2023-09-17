'use strict'

function indexBody() {
  const thisTitle = document.querySelector('title').textContent
  document.querySelector('#title').textContent = thisTitle;

  const thisDescription = document.querySelector('meta[name="description"]').content;
  document.querySelector('#description').textContent = thisDescription;

  const lastModif = document.querySelector('#lastModified');
  lastModif.textContent = new Date(document.lastModified);
  lastModif.setAttribute("data-time", document.lastModified);

  lastModif.addEventListener('click', function (event) {
    let ago = new Date(document.lastModified);
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
  });
}

async function fetchHTML(url = '', query = '') {
  fetch(url)
    .then(response => response.text())
    .then(innerHTML => {
      document.querySelector(query).innerHTML = innerHTML
    });
};