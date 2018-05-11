var Song = function(x) {
  var songlist = ['FracturesLevel2.wav', 'SJFX.wav', 'FracturesLevel2.wav', "DuBois.wav"];
  var rng = int(random(4));
  var thissong = songlist[rng];
  this.song = createAudio(thissong);
  // console.log(thissong);
  this.song.autoplay(true);
  // this.song.loop();
};