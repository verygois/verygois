'use strict'

async function indexJSON() {
  const requestURL = 'index.json';
  const request = new Request(requestURL);
  const response = await fetch(request);
  const jsonIndex = await response.text();

  const index = JSON.parse(jsonIndex);
  objORG(index);
}

function objORG(obj) {
  const org = document.querySelector('#org');
  const items = obj.org;

  for (const item of items) {
    const itemA = document.createElement('a');
    const itemDate = document.createElement('u');
    const itemTitle = document.createElement('b');
    const itemSpan = document.createElement('span');

    itemA.setAttribute("class", item.class);
    itemA.href = item.url;
    itemDate.textContent = item.date;
    itemDate.setAttribute("class", "date");
    itemTitle.textContent = item.name;
    itemTitle.setAttribute("class", "title");
    itemSpan.textContent = item.about;
    itemSpan.setAttribute("class", "info");

    org.appendChild(itemA);
    itemA.appendChild(itemDate);
    itemA.appendChild(itemTitle);
    itemA.appendChild(itemSpan);
  }
}

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    indexJSON();
  } else if (event.target.readyState === 'complete') {
    let filter = document.querySelectorAll('#org input[type="radio"]');
    //****** for all select ******
    for (let i of filter) {
      i.addEventListener('change', () => {
        let value = i.value;
        //*** for each target ***
        let targets = document.querySelectorAll("#org a");
        for (let ii of targets) {
          //*** delete hidden ***
          ii.style.opacity = "1";
          ii.style.pointerEvents = "auto";
          ii.style.userSelect = "auto";
          //*** check target every select ***
          let item_data = ii.getAttribute('class')
          //*** set hidden ***
          if (value && value !== 'all' && value !== item_data) {
            ii.style.opacity = "0";
            ii.style.pointerEvents = "none";
            ii.style.userSelect = "none";
          }
        }
      })
    }
  }
});
