'use strict'

async function indexJSON() {
  const requestURL = 'index.json';
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
  const ogTitle = document.createElement('meta');
  const twittetTitle = document.createElement('meta');
  pageTitle.textContent = `${obj.this}`;
  ogTitle.setAttribute("property", "og:title");
  ogTitle.setAttribute("content", `${obj.this}`);
  twittetTitle.setAttribute("name", "twitter:title");
  twittetTitle.setAttribute("content", `${obj.this}`);
  head.appendChild(pageTitle);
  head.appendChild(ogTitle);
  head.appendChild(twittetTitle);

  const pageDescription = document.createElement( "meta" );
  const ogDescription = document.createElement('meta');
  const twitterDescription = document.createElement('meta');
  pageDescription.setAttribute("name", "description");
  pageDescription.setAttribute("content", obj.description);
  ogDescription.setAttribute("property", "og:description");
  ogDescription.setAttribute("content", obj.description);
  twitterDescription.setAttribute("name", "twitter:description");
  twitterDescription.setAttribute("content", obj.description);
  head.appendChild(pageDescription);
  head.appendChild(ogDescription);
  head.appendChild(twitterDescription);

  const ogSite = document.createElement( "meta" );
  ogSite.setAttribute("property", "og:site_name");
  ogSite.setAttribute("content", location.hostname);
  head.appendChild(ogSite);

  const ogURL = document.createElement( "meta" );
  ogURL.setAttribute("property", "og:url");
  ogURL.setAttribute("content", location.href);
  head.appendChild(ogURL);

  const ogType = document.createElement( "meta" );
  ogType.setAttribute("property", "og:type");
  ogType.setAttribute("content", "website");
  head.appendChild(ogType);

  const ogIMG = document.createElement( "meta" );
  ogIMG.setAttribute("property", "og:image");
  ogIMG.setAttribute("content", obj.src);
  head.appendChild(ogIMG);

  const twitterCard = document.createElement( "meta" );
  twitterCard.setAttribute("name", "twitter:card");
  twitterCard.setAttribute("content", obj.card);
  head.appendChild(twitterCard);
}

function bodyElem(obj) {
  const desktop = document.querySelector('#desktop'),
  items = document.querySelector('#items'),
  thisTitle = document.querySelector('#title strong'),
  thisName = document.querySelector('#title em'),
  thisDate = document.querySelector('#title time'),
  thisWiki = document.querySelector('#title a');
  const itemsAll = obj.items;

  for (const item of itemsAll) {
    const itemLi = document.createElement('li');
    const itemIMG = document.createElement('img');
    const itemTitle = document.createElement('p');
    itemIMG.alt = item.title + ' ' + item.artist;
    itemIMG.src = item.url;
    itemTitle.textContent = item.title;

    itemLi.appendChild(itemIMG);
    itemLi.appendChild(itemTitle);
    items.appendChild(itemLi);

    itemLi.addEventListener('click', function(){
      desktop.style.backgroundImage = `url('${item.url}')`
      thisTitle.textContent = item.title;
      thisName.textContent = item.artist;
      thisDate.textContent = item.date;
      thisWiki.textContent = "Wikipedia";
      thisWiki.href = item.wiki;
    })
  }
}

indexJSON();
