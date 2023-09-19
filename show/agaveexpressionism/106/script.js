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

openModal.addEventListener('click', function () {
  onModal()
});

const closeButton = document.querySelector('#closeButton');
closeButton.addEventListener('click', () => {
  dialogModal.close();
});
