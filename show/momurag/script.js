'use strict'

let select = document.querySelector('#week');
const optionAll = document.querySelectorAll("#week option");
select.addEventListener('change', function() {
  const index =  this.selectedIndex,
  valueOption = optionAll[index].value;

  const itemAll = document.querySelectorAll("ol li, article section");
  for (const items of itemAll) {
    items.style.display = "none"
    const selectAll = document.querySelectorAll(`.${optionAll[index].value}`);
    for (const selectEach of selectAll) {
      selectEach.style.display = "block"
    }
  }
});
