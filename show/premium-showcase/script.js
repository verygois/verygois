'use strict'

const allItems = document.querySelectorAll('.list li'),
  date = document.querySelector("#date"),
  img = document.querySelector("#img"),
  text = document.querySelector("#text");


for (const eachItem of allItems) {
  eachItem.addEventListener('click', function () {
    eachItem.innerHTML = `<small class="log">${eachItem.dataset.info}</small>`;
  });
}
