'use strict'

async function indexJSON() {
  const request = new Request(requestURL);
  const response = await fetch(request);
  const jsonIndex = await response.text();

  const index = JSON.parse(jsonIndex);
  headElem(index);
  bodyElem(index);
}

function headElem(obj) {
  const head = document.querySelector('head');
  const pageTitle = document.createElement('title');
  pageTitle.textContent = `${obj.this}`;
  head.appendChild(pageTitle);

  const pageDescription = document.createElement( "meta" );
  pageDescription.setAttribute("name", "description");
  pageDescription.setAttribute("content", obj.description);
  head.appendChild(pageDescription);
}

function bodyElem(obj) {
  const items = document.querySelector('#items'),
  video = document.querySelector('#video'),
  mp4 = document.querySelector('#mp4'),
  playBtn = document.querySelector('[data-playing]'),
  title = document.querySelector('#title strong');

  let n = 0;
  // 配列シャッフル
  function shuffle(array) {
    var n = array.length, t, i;
    while (n) {
      i = Math.floor(Math.random() * n--);
      t = array[n];
      array[n] = array[i];
      array[i] = t;
    }
    return array;
  }

  let itemsAll = obj.items;
  for (const item of shuffle(itemsAll)) {
    const itemLi = document.createElement('li');
    itemLi.style.backgroundImage = `url('${directory}${thumbs}${item.url}_000001.jpg')`
    items.appendChild(itemLi);

    itemLi.addEventListener('click', function() {
      video.setAttribute('poster', `${directory}${thumbs}${item.url}_000001.jpg`);
      mp4.setAttribute('src', `${directory}${item.url}.${item.type}`);
      title.textContent = item.title
      playBtn.hidden = false;
      video.hidden = false;
      video.load();
      video.play();
    })
  }
}

indexJSON();
