const video = document.querySelector('#video'),
playBtn = document.querySelector('[data-playing]');

//再生可能
video.addEventListener('canplay', function() {
  totalTime = Math.floor(video.duration);
  let res = null;
  if( 60 <= totalTime ) {
    res = Math.floor(totalTime / 60);
    res += ":" + Math.floor(totalTime % 60).toString().padStart( 2, '0');
  } else {
    res = "00:" + Math.floor(totalTime % 60).toString().padStart( 2, '0');
  }
  document.querySelector('#videoTime').textContent = res;

  playBtn.value = 'Play';
  playBtn.addEventListener('click', function() {
    video.play();
  })
})

video.addEventListener('timeupdate', function() {
  countTime = Math.floor(video.currentTime);
  let conut = null;
  if( 60 <= totalTime ) {
    conut = Math.floor(countTime / 60);
    conut += ":" + Math.floor(countTime % 60).toString().padStart( 2, '0');
  } else {
    conut = "00:" + Math.floor(countTime % 60).toString().padStart( 2, '0');
  }
  document.querySelector('#videoCount').textContent = conut;
})

//再生中
video.addEventListener('playing', function() {
  playBtn.value = 'Pause';
  playBtn.addEventListener('click', function() {
    video.pause();
  })
})

//一時停止
video.addEventListener('pause', function() {
  playBtn.value = 'Play';
  playBtn.addEventListener('click', function() {
    video.play();
  })
})
