'use strict'

const buttonAll = document.querySelectorAll('nav ol li button'),
date = document.querySelector("#date"),
img = document.querySelector("#img"),
text = document.querySelector("#text");


for (const buttonEach of buttonAll) {
  buttonEach.addEventListener('click', function() {
    date.textContent = buttonEach.textContent;
    document.body.style.backgroundImage = `url('img/${buttonEach.getAttribute("datetime")}.jpg')`
  });
}
