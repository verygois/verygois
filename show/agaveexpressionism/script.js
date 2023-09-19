const sectionAll = document.querySelectorAll('#agave section');
for (const sectionThis of sectionAll) {
  sectionThis.style.display = "none"
}

let n = 1
document.querySelector(`#agave section:nth-of-type(${n})`).style.display = "block"

function nextSection() {
  if (n >= sectionAll.length) {
    n = 1;
  } else {
    n++;
  }

  for (const sectionThis of sectionAll) {
    sectionThis.style.display = "none"
  }
  document.querySelector(`#agave section:nth-of-type(${n})`).style.display = "block";

  const uttr = new SpeechSynthesisUtterance(),
    agave = document.querySelector(`#agave section:nth-of-type(${n}) h3`).dataset.ja;
  aside = document.querySelector(`#agave section:nth-of-type(${n}) aside`).dataset.ja;
  let rate = Math.random() * (1.5 - 0.75) + 0.75;
  pitch = Math.random() * 2.0;

  uttr.text = agave + '　' + aside;
  uttr.rate = rate; // 読み上げ速度 0.1-2 初期値:1
  uttr.pitch = pitch;　// 声の高さ 0-2 初期値:1
  uttr.volume = 0.75; // 音量 0-1 初期値:1
  uttr.lang = 'ja-JP'; // 言語コード (日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)

  speechSynthesis.cancel();
  speechSynthesis.speak(uttr);
};
