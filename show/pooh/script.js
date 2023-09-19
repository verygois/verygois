'use strict'

let num = 0;

const cover = document.querySelector("#cover");
cover.addEventListener("click", function () {
    cover.style.display = "none"
    nextBG(pooh, 'article')
    window.setInterval(function () {
        nextBG(pooh, 'article')
    }, 2000);
}, false);

function nextBG(imgArr, query = '') {
    if (num >= Object.entries(imgArr).length - 1) {
        num = 0;
    } else {
        num++;
    }

    let thisIMG = Object.entries(imgArr)[num];
    document.querySelector(query).style.backgroundImage = `url("${thisIMG[0]}")`
}

const book = document.querySelector("#book");
const show = document.querySelector("#show");

show.innerHTML = `
<strong>🎊写📷真📸展🎊</strong><br/>
<button type="button" onclick="window.location.replace('/show/pooh/party/')">プーのパーティ会場へようこそ</button>
<button type="button" onclick="window.location.replace('/show/pooh/dream/')">プーの見る夢 〜太陽と星〜</button>
<button type="button" onclick="window.location.replace('/show/pooh/flower/')">夢想花 ～プーと駆け抜けた19年間～</button>
`;

book.innerHTML = `
<button type="button" onclick="window.location.replace('/show/pooh/')">プーさん写真集 2008-2014</button>
<h2><del>価格1000円</del> <ins>売り切れ</ins></h2>
<p><small>2008年-2014年に、ディナミが撮影したプーの写真集</small></p>
<p>サイズB5、フルカラー</p>
`;