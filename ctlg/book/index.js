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
        const next = document.querySelector('#next');
        const pre = document.querySelector('#pre');

        ctlg.style.backgroundImage = `url(${obj.id}/${obj.imgAll[i]})`;

        if (obj.imgAll.length === 1) {
            next.remove()
            pre.remove()
        } else {
            next.addEventListener("click", function () {
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

            pre.addEventListener("click", function () {
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
    }

    if (obj.ctlg) {
        for (const ctlg of obj.ctlg) {
            const article = document.querySelector('article')
            const item = document.createElement('a')
            item.href = ctlg.url;
            item.textContent = ctlg.text;
            article.appendChild(item);
        }
    }

    if (obj.links) {
        const aside = document.createElement('aside')
        document.querySelector('#ctlg').appendChild(aside)
        for (const link of obj.links) {
            const items = document.createElement('a')
            items.href = link.url;
            items.textContent = link.text;
            items.setAttribute('target', link.target)
            aside.appendChild(items)
        }
    }
}
