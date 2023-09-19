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
    itemTitle.setAttribute("class", "info");

    org.appendChild(itemA);
    itemA.appendChild(itemDate);
    itemA.appendChild(itemTitle);
    itemA.appendChild(itemSpan);
  }
}

indexJSON();
