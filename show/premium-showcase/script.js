'use strict'

const dialogModal = document.querySelector('#modal');
const openModal = document.querySelector('#openModal');

function onModal() {
  if (typeof dialogModal.showModal === "function") {
    dialogModal.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
}

const closeButton = document.querySelector('#closeButton');
closeButton.addEventListener('click', () => {
  dialogModal.close();
});

const allItems = document.querySelectorAll('.list li');
for (const eachItem of allItems) {
  eachItem.addEventListener('click', function () {
    const who = document.querySelector("#modal h4");
    const about = document.querySelector("#modal small");
    who.textContent = eachItem.textContent;
    about.innerHTML = eachItem.dataset.info;
    onModal()
  });
}
