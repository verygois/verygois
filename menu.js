'use strict'

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    const header = document.querySelector('#header');
    const button = document.createElement('button');
    button.setAttribute("type", "button");
    button.setAttribute("id", "button");
    button.innerHTML = "<b></b>";

    const menu = document.createElement('menu');
    menu.innerHTML = `
    <li><a href="/">Very Gois</a></li>
    <li><a href="/ctlg/">CTLG</a></li>
    <li><a href="/show/">SHOW</a></li>
    <li><a href="/up/">WWW</a></li>
    `;

    header.appendChild(button);
    header.appendChild(menu);
  } else if (event.target.readyState === 'complete') {
    const button = document.querySelector('#button');
    const menu = document.querySelector('#header menu');
    const body = document.body;

    button.addEventListener('click', function () {
      button.classList.toggle('active');
      menu.classList.toggle('active');
      body.classList.toggle('hidden');
    });
  }
});
