'use strict'

async function indexJSON() {
  const requestURL = 'index.json';
  const request = new Request(requestURL);
  const response = await fetch(request);
  const jsonIndex = await response.text();

  const index = JSON.parse(jsonIndex);
  contentAll(index);
}

function contentAll(obj) {
  const list = document.querySelector('#contents');
  const items = obj.contents;

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

    list.appendChild(itemA);
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
        let targets = document.querySelectorAll("#contents a");
        for (let ii of targets) {
          //*** delete hidden ***
          ii.classList.remove('hidden');
          //*** check target every select ***
          let item_data = ii.getAttribute('class')
          //*** set hidden ***
          if (value && value !== 'all' && value !== item_data) {
            ii.classList.add('hidden');
          }
        }
      })
    }
  }
});
