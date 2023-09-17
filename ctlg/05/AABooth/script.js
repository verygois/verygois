'use strict'

let directory = 'https://ia802703.us.archive.org/13/items/americanapparel/',
aa = [
  '80954336406.png',
  '80954352067.png',
  '81353136803.png',
  '81353151046.png',
  '81353309579.png',
  '81373573119.png',
  '81958309407.png',
  '82952975376.png',
  '101960592297.jpg',
  '102801714705.jpg',
  '112563953963.jpeg',
  '119230053428.jpg',
  '122158265337.jpg',
  '122158265338.jpg',
  '80794853219.jpeg',
  '80801263058.jpeg',
  '80810476464.jpeg',
  '80844444262.jpeg',
  '80954305028.jpeg',
  '80954308714.jpeg',
  '80954325572.jpeg',
  '80954329584.jpeg',
  '80954344210.jpeg',
  '80954348525.jpeg',
  '80954356467.jpeg',
  '80954372796.jpeg',
  '80954379894.jpeg',
  '80954386587.jpeg',
  '80954390618.jpeg',
  '80954393848.jpeg',
  '81094040435.jpeg',
  '81324441643.jpeg',
  '81346761752.jpeg',
  '81351888988.jpeg',
  '81353104460.jpeg',
  '81353119167.jpeg',
  '81353124068.jpeg',
  '81353162879.jpeg',
  '81353303105.jpeg',
  '81354288843.jpeg',
  '81373571253.jpeg',
  '81373575858.jpeg',
  '81373578155.jpeg',
  '81373580553.jpeg',
  '81373583287.jpeg',
  '81373586296.jpeg',
  '81440066162.jpeg',
  '81548068028.jpeg',
  '81566773784.jpeg',
  '81566776156.jpeg',
  '81566778285.jpeg',
  '81566780559.jpeg',
  '81566784261.jpeg',
  '81566789427.jpeg',
  '81640290265.jpeg',
  '81707033930.jpeg',
  '81744844531.jpeg',
  '81758413176.jpeg',
  '81922115199.jpeg',
  '81955462066.jpeg',
  '81958366277.jpeg',
  '81958372613.jpeg',
  '82012854823.jpeg',
  '82083518597.jpeg',
  '82083585588.jpeg',
  '82083602123.jpeg',
  '82509447620.jpeg',
  '82903295852.jpeg',
  '83526592028.jpeg',
  '83526865968.jpeg',
  '84552185784.jpeg',
  '84625730419.jpeg',
  '85746106931.jpeg',
  '85760983729.jpeg',
  '86430842265.jpeg',
  '86825268568.jpeg',
  '86825367218.jpeg',
  '87843942055.jpeg',
  '87932778501.jpeg',
  '91868061277.jpeg',
  '92548320397.jpeg'
];

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

function randomBG(arr, query = '') {
  arr = shuffle(arr);
  document.querySelector(query).style.backgroundImage = `url('${directory}${arr[n]}')`;
}

randomBG(aa, '#booth')

const aaAll = document.querySelector('#aa'),
booth = document.querySelector('#booth');

for (const aaEach of aa) {
  const aaLi = document.createElement('li');
  aaLi.style.backgroundImage = `url('${directory}${aaEach}')`;

  aaAll.appendChild(aaLi);
  aaLi.addEventListener('click', function(){
    booth.style.backgroundImage = `url('${directory}${aaEach}')`;
  })
}

booth.onmousedown = function(event) {
  let shiftX = event.clientX - booth.getBoundingClientRect().left;
  let shiftY = event.clientY - booth.getBoundingClientRect().top;

  booth.style.position = 'absolute';
  booth.style.zIndex = 1000;
  document.body.append(booth);

  moveAt(event.pageX, event.pageY);

  // ボールを（pageX、pageY）座標の中心に置く
  function moveAt(pageX, pageY) {
    booth.style.left = pageX - shiftX + 'px';
    booth.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (3) mousemove でボールを移動する
  document.addEventListener('mousemove', onMouseMove);

  // (4) ボールをドロップする。不要なハンドラを削除する
  booth.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    booth.onmouseup = null;
  };

};

booth.ondragstart = function() {
  return false;
};
