'use strict'

async function indexJSON() {
  const requestURL = 'index.json';
  const request = new Request(requestURL);
  const response = await fetch(request);
  const jsonIndex = await response.text();

  const index = JSON.parse(jsonIndex);
  titleORG(index);
  objORG(index);
}

function titleORG(obj) {
  const head = document.querySelector('head');
  const titleORG = document.createElement('title');
  const ogTitle = document.createElement('meta');
  const twittetTitle = document.createElement('meta');
  titleORG.textContent = `${obj.title} | ${obj.author}`;
  ogTitle.setAttribute("property", "og:title");
  ogTitle.setAttribute("content", `${obj.title} | ${obj.author}`);
  twittetTitle.setAttribute("name", "twitter:title");
  twittetTitle.setAttribute("content", `${obj.title} | ${obj.author}`);
  head.appendChild(titleORG);
  head.appendChild(ogTitle);
  head.appendChild(twittetTitle);

  const descriptionORG = document.createElement( "meta" );
  const ogDescription = document.createElement('meta');
  const twitterDescription = document.createElement('meta');
  descriptionORG.setAttribute("name", "description");
  descriptionORG.setAttribute("content", obj.description);
  ogDescription.setAttribute("property", "og:description");
  ogDescription.setAttribute("content", obj.description);
  twitterDescription.setAttribute("name", "twitter:description");
  twitterDescription.setAttribute("content", obj.description);
  head.appendChild(descriptionORG);
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

function objORG(obj) {
  const org = document.querySelector('#org');
  const itemsORG = obj.org;

  for (const item of itemsORG) {
    const itemORG = document.createElement('a');
    const itemDate = document.createElement('u');
    const itemTitle = document.createElement('b');
    const itemSpan = document.createElement('span');

    itemORG.setAttribute("class", item.class);
    itemORG.href = item.url;
    itemDate.textContent = item.date;
    itemDate.setAttribute("class", "date");
    itemTitle.textContent = item.name;
    itemTitle.setAttribute("class", "title");
    itemSpan.textContent = item.about;

    itemORG.appendChild(itemDate);
    itemORG.appendChild(itemTitle);
    itemORG.appendChild(itemSpan);

    org.appendChild(itemORG);
  }
}

indexJSON();
