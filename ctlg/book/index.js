'use strict'

// URLのパラメータを取得
let paramArray = [],
    urlParam = location.search.substring(1);

if (urlParam) {
    // ?name=名前
    let param = urlParam.split('&');
    for (let i = 0; i < param.length; i++) {
        let paramItem = param[i].split('=');
        paramArray[paramItem[0]] = paramItem[1];
    }
    indexJSON(`${paramArray.name}/index.json`)
} else {
    indexJSON('index.json')
}

async function indexJSON(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();
    const index = JSON.parse(jsonIndex);
    book(index);
}

function book(obj) {
    const ctlg = document.querySelector('#ctlg')
    document.querySelector('h1 ruby rb').textContent = obj.en;
    document.querySelector('h1 ruby rt').textContent = obj.ja;

    if (obj.imgAll) {
        let i = 0;

        ctlg.style.backgroundImage = `url(${obj.id}/${obj.imgAll[i]})`;
        document.querySelector('#next').addEventListener("click", function () {
            if (i == 0) {
                i++;
            } else if (i == 1) {
                i++;
            } else if (i < obj.imgAll.length - 1) {
                i++;
            } else if (i == obj.imgAll.length - 1) {
                i = 0;
            }
            document.querySelector('#ctlg').style.backgroundImage = `url(${obj.id}/${obj.imgAll[i]})`;
        }, false);

        document.querySelector('#pre').addEventListener("click", function () {
            if (i == 0) {
                i = obj.imgAll.length - 1;
            } else if (i == 1) {
                i--;
            } else if (i < obj.imgAll.length - 1) {
                i--;
            } else if (i == obj.imgAll.length - 1) {
                i--;
            }
            document.querySelector('#ctlg').style.backgroundImage = `url(${obj.id}/${obj.imgAll[i]})`;
        }, false);
    }

    if (obj.ctlg) {
        const section = document.createElement('section')
        document.querySelector('#ctlg').appendChild(section)
        for (const ctlg of obj.ctlg) {
            const section = document.querySelector('#ctlg section')
            const items = document.createElement('a')
            items.href = ctlg.url;
            items.textContent = ctlg.text;
            section.appendChild(items)
        }
    }

    if (obj.links) {
        for (const link of obj.links) {
            const links = document.querySelector('#links')
            const linkA = document.createElement('a')
            linkA.href = link.url;
            linkA.setAttribute('target', '_blank')
            linkA.textContent = link.text;
            links.appendChild(linkA);
        }
    }
}
