function oscillator() {
  let ctx = new AudioContext()
  // オシレータ
  let osc = new OscillatorNode(ctx)
  osc.frequency.value = 440
  // 音量制御用のノード
  let gain = new GainNode(ctx)
  gain.gain.value = 0

  // 接続してオシレータを開始
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start()

  // テンポに従って音の鳴り始める(音量が0.3になる)時間と鳴り終わる(音量が0になる)時間を設定する
  let bpm = 80
  let note_length = 40 / bpm
  // 16回分のメトロノームの音を設定する
  for (let n = 0; n < 16; n++) {
    // 音の開始・終了時間を計算する
    let start_time = n * note_length;
    let end_time = start_time + 0.1
    // gain (音量)を時間指定で設定することで鳴らしたり止めたりする
    gain.gain.setValueAtTime(0.2, ctx.currentTime + start_time)
    gain.gain.setValueAtTime(0.0, ctx.currentTime + end_time)
    // 小節の最初の音だけ高くする
    if (n % 4 == 0) {
      osc.frequency.setValueAtTime(880, ctx.currentTime + start_time)
    } else {
      osc.frequency.setValueAtTime(440, ctx.currentTime + start_time)
    }
  }
}
