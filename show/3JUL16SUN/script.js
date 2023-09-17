'use strict'

let aside = document.querySelector('#map'),
takahashi = document.querySelector('#takahashi'),
kawata = document.querySelector('#kawata'),
overscan = document.querySelector('#overscan'),
standard_grey = document.querySelector('#standard_grey'),
ootsusan = document.querySelector('#ootsusan'),
joe = document.querySelector('#joe');

function map() {
  aside.innerHTML = `
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.2475836025853!2d135.503489586223!3d34.68019341447118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e71930370865%3A0xf83c38d6dab54ee9!2sHOPKEN!5e0!3m2!1sja!2sjp!4v1689143509361!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  `
}

takahashi.addEventListener('click', function() {
  aside.innerHTML = `
  <h3>H.TAKAHASHI</h3>
  <p>
  最小限のシンプルなデザインで設計された美しい環境音楽・建築作品を制作する東京在住の音楽家・建築家。<br />
  2014年にSalvador Records（スペイン）からClaudel Sinclairとのスプリット、2015年にEntertainment Systems（アメリカ）、Where To Now?（イギリス）からソロカセット、2016年5月に3作目のソロ作品をConstellation Tatsu（アメリカ）からリリースと、世界をまたにかけ洗練された素晴らしい音楽作品を発表。<br />
  最新作では今までの落ち着いたサウンドとは少し異なるアプローチのユニークな楽曲もあり、今後どのように作風が変化するのか、どんなライブになるのかとても楽しみです！
  </p>
  `
  document.body.style.background = "blue"
});

kawata.addEventListener('click', function() {
  aside.innerHTML = `
  <h3>7FO</h3>
  <p>
  ギター音の音響加工をベースに、無機/電子を織り交ぜた箱庭的パラレルワールドミュージックを制作する日本人音楽家。<br />
  2作の単独アルバムでのQBDによる物欲をそそる素晴らしいパッケージデザイン、アートユニット「ヒミツ」・美術家「山下雅己」とのコラボレーションなど、自分が興味のあるアーティストたちと楽しみながら作品を制作するジャンルにとらわれない活動方法も魅力的です。<br />
  そこにあるもので自由に奏でられる童話のようにわかりやすくユーモラスな音楽は、古き良き辺境音楽・電子音楽愛好家から現行カセットリスナーまでをも魅了し、近々RVNG Intl（アメリカ）から新作カセットをリリース予定！
  </p>
  `
  document.body.style.background = "green"
});

overscan.addEventListener('click', function() {
  aside.innerHTML = `
  <h3>OverScan</h3>
  <p>
  オーストラリア人アーティストMarcus Millerの音楽プロジェクト。2015年にConstellation Tatsu（アメリカ）からカセットデビュー。鶴橋在住との情報を得て今回声をかけてみました。<br />
  水滴が人の顔に見えたり、窓の外の風景に反射した自分の姿が透けて映ったり、そんな日常に潜む不思議な瞬間を音楽で再現したような懐かしいようで斬新でハッとするサイケデリックで心地よい良質なアンビエントミュージックをサウンドクラウドを中心に発表しています。<br />
  また、自身のタンブラーやインスタグラム・ホームページでは、自身のアルバムアートワークにも使用されている音世界をビジュアルで再現したかのような不思議なバランスの風景写真、コラージュ作品を公開・販売中。
  </p>
  `
  document.body.style.background = "red"
});

standard_grey.addEventListener('click', function() {
  aside.innerHTML = `
  <h3>standard_grey</h3>
  <p>
  カナダ・ウィニペグに生まれ、バンクーバーの美術学校を卒業し、現在は奈良を拠点に活動する美術家Christopher Olsonの音楽プロジェクト。<br/>
  少ない音数だけど奥行きのある展開の読めない実験的な電子・環境音楽を制作しています。定期的に公開している新旧問わず素晴らしい音楽をセレクトしたMIXシリーズも素晴らしく、当日はライブ演奏ではなく選曲係としてご出演いただきます。
  </p>
  `
  document.body.style.background = "#808080"
});

ootsusan.addEventListener('click', function() {
  aside.innerHTML = `
  <h3>ootsusan</h3>
  <p>
  関西の素敵な音楽イベントに必ずいるといっても過言ではない素晴らしい音楽リスナーおおつさん。音楽イベントでよく見かける方が普段どんな音楽を聴いているのかが気になって、その中でも特によくお見かけするおおつさんにご出演をお願いしました。
  </p>
  `
  document.body.style.background = "yellow"
});

joe.addEventListener('click', function() {
  aside.innerHTML = `
  <h3>Joe Bastardo</h3>
  <p>
  Digitalis LimitedからBastian Void名義で2枚のアルバムを、Homeowner名義ではOrange Milk Recordsから、 Constellation TatsuそしてBeer On The Rugから所属する音楽ユニットLooks Realisticとして作品をリリースするなど多数の名義を使い分けインターネット地下音楽シーンを中心に実験的で独創的な音楽を精力的に発表する音楽家。<br />
  春に本名でPhineryからリリースされた美しく建築・構成された素晴らしい最新作の記憶も新しい彼が、アメリカツアーを終えて関西を観光中のところをOverScanが声をかけて、急遽スペシャルゲスト出演が決定しました！「誰もまだ聞いていない私の新しい音楽を聞くことになるでしょう」とのことです！こうご期待！！
  </p>
  `
  document.body.style.background = "#8b008b"
});
