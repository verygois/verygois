'use strict'

const help = document.querySelector("#help"),
buttonAll = document.querySelectorAll('nav ol li button'),
date = document.querySelector("#date"),
img = document.querySelector("#img"),
text = document.querySelector("#text");

for (const buttonEach of buttonAll) {
  buttonEach.addEventListener('click', function() {
    date.textContent = buttonEach.textContent;
    img.src = `img/${buttonEach.getAttribute("datetime")}.jpg`;
    img.alt = buttonEach.getAttribute("datetime");
    fetch(`txt/${buttonEach.getAttribute("datetime")}.txt`)
    .then(response => response.text())
    .then(innerText => {
      text.innerText = innerText
    })
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


help.addEventListener('click', function() {
  date.textContent = "ディナミシャイスケの秘蔵カセットを聴く会";
  img.src = "000.jpg";
  img.alt = "ディナミシャイスケの秘蔵カセットを聴く会";
  fetch(`about.txt`)
  .then(response => response.text())
  .then(innerText => {
    text.innerText = innerText
  })
});
