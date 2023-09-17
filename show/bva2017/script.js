'use strict'

const allShow = document.querySelectorAll("nav h2");
for (const thisShow of allShow) {
  thisShow.addEventListener('click', function() {
    const itemAll = document.querySelectorAll("section aside");
    for (const items of itemAll) {
      items.hidden = true;
      const selectAll = document.querySelectorAll(`.${thisShow.getAttribute('id')}`),
      date = document.querySelector("#date"),
      act = document.querySelector("#with");
      for (const selectEach of selectAll) {
        date.textContent = thisShow.textContent;
        act.innerHTML = `w/ <b>${thisShow.dataset.with}</b>`;
        selectEach.hidden = false;
      }
    }
  });
}
