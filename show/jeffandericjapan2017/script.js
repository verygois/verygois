'use strict'

function changeHidden() {
  const articleAll = document.querySelectorAll('article'),
    menu = document.querySelector('#menu');
  articleAll.forEach(article => {
    if (article.hidden == false) {
      article.hidden = true
      menu.textContent = "日本ツアー 2017"
    } else {
      article.hidden = false
      menu.textContent = "×"
    }
  })
}

const date = document.querySelector('#date'),
  name = document.querySelector('#name'),
  act = document.querySelector('#act'),
  venue = document.querySelector('#venue'),
  open = document.querySelector('#open'),
  door = document.querySelector('#door');

function about() {
  date.textContent = "2017年 9月30日 - 10月8日"
  name.style.display = "block"
  act.textContent = "日本ツアー 2017"
  venue.textContent = "Jeff Witscher / Eric Frye Japan Tour 2017"
  open.textContent = ""
  door.textContent = "東京・名古屋・京都・大阪・東京"
  changeHidden()
}

function jeff() {
  date.textContent = "Jeff Witscher"
  open.textContent = "ジェフ・ウィッチャー"
  name.style.display = "none"
  venue.innerHTML = `
  <img src="jeff.jpeg" style="float: left;" width="50%">
  1983年にカリフォルニア・ロングビーチで生まれました。現在はポートランドで自身の清掃会社「Vincent's Expert Cleaners」を管理しています。<br/>
  彼はこれまでに数多くの名義を使い分けて精力的に音楽作品を発表していました。おそらく最も知らている名義はRene Hellでしょう。<br/>
  また熱烈なチェスプレイヤーであり、近年は清掃業と読書とチェスを中心とした生活を送っているそうです。<br/>
  オーガニック・フィールド・レコーディングと電子音をハイブリットした彼の音楽が持つ最大の魅力は、飾り気の無い美しさ。<br/>
  ライブ・パフォーマンスでは、繊細かつ壮大な物語性のある表現を試みます。<br/>
  `
  act.innerHTML = `
  <small>ツアー限定販売</small><br/>
  Stockfish
  `
  door.innerHTML = `
  `
  changeHidden()
}

function eric() {
  date.textContent = "Eric Frye"
  open.textContent = "エリック・フライ"
  name.style.display = "none"
  venue.innerHTML = `
  <img src="eric.jpeg" style="float: left;" width="50%">
  アメリカを拠点とする作曲家、アーティスト、キュレーター。<br/>
  彼はこれまでに細分化され続けた実験音楽におけるジャンルの境界を超越した、数学や言語学に基づいた彼独自の哲学による音響の在り方を探求しています。<br/>
  マルチチャンネル音響を用いて複数のレイヤーを持った音を空間に配置する彼のライブ・パフォーマンスやインスタレーションは、聴覚で動きや物質を表現すると同時に、耳では感知できえない音の波形（コンピューター上に現れる音の形で描かれたドローイング）や、空白（無音を用いて目に見えない物体を創り上げるかのようなインスタレーション）などを主題とした従来の音楽的価値観では捉えきれない表現にも感じられるはずでしょう。<br/>
  `
  act.innerHTML = `
  <small>ツアー限定販売</small><br/>
  Perforation as Signature
  `
  door.innerHTML = `
  `
  changeHidden()
}

function www() {
  date.textContent = "2017年9月30日(土)-10月1日(日)"
  name.style.display = "block"
  act.innerHTML = `
  ゲンセイイチ 🇯🇵<br/>
  フォンヘッド 🇯🇵<br/>
  スライアングル 🇯🇵
  `
  venue.textContent = "東京・渋谷 WWWβ"
  open.textContent = "開場・開演 24:00"
  door.innerHTML = `
  予約 2000円 / 当日 2500円 / 25歳以下 1500円<br/>
  `
  changeHidden()
}

function rita() {
  date.textContent = "2017年10月3日(火)"
  name.style.display = "block"
  act.innerHTML = `
  Z.B.エイズ 🇫🇷<br/>
  Saada Abe 🇫🇷<br/>
  f​ri珍 🇯🇵<br/>
  woopheadclrms 🇯🇵
  `
  venue.textContent = "名古屋・栄 spazio rita"
  open.textContent = "開場・開演 19:00"
  door.innerHTML = `
  予約 2500円 / 当日 3000円 (別途ドリンク代)<br/>
  `
  changeHidden()
}

function soto() {
  date.textContent = "2017年10月4日(水)"
  name.style.display = "block"
  act.innerHTML = `
  ⼤⽥⾼充 🇯🇵<br/>
  小林椋 🇯🇵<br/>
  船川翔司 🇯🇵<br/>
  松延総司 🇯🇵
  `
  venue.textContent = "京都・錦林車庫前 外 soto"
  open.textContent = "開場・開演 19:00"
  door.innerHTML = `
  予約 2500円 / 当日 3000円<br/>
  `
  changeHidden()
}

function osaka() {
  date.textContent = "2017年10月6日(金)"
  name.style.display = "block"
  act.innerHTML = `
  マシュー・サリバン 🇺🇸<br/>
  Z.B.エイズ 🇫🇷<br/>
  半野田拓 🇯🇵
  `
  venue.textContent = "大阪・南堀江 ソーコアファクトリー"
  open.textContent = "開場・開演 19:00"
  door.innerHTML = `
  予約 3000円 / 当日 3500円 (別途ドリンク代)<br/>
  `
  changeHidden()
}

function pool() {
  date.textContent = "2017年10月8日(日)"
  name.style.display = "block"
  act.innerHTML = `
  マシュー・サリバン 🇺🇸<br/>
  松本望睦 + H. Takahashi 🇯🇵<br/>
  大田高充 🇯🇵<br/>
  010001111000 🇯🇵<br/>
  荒井優作 🇯🇵<br/>
  神田聡 🇯🇵
  `
  venue.textContent = "東京・桜台 pool"
  open.textContent = "開場・開演 17:00"
  door.innerHTML = `
  予約 3000円 / 当日 3500円 (翌10月9日の入場料を含む2日券 5000円)<br/>
  `
  changeHidden()
}

const dateAll = document.querySelectorAll('section ol li time');
for (const date of dateAll) {
  date.textContent = new Date(`${date.getAttribute("datetime")}`).toString('ja-JA');
}
