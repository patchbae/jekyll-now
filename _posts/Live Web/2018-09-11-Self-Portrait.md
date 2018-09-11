---

 layout: post
 title: "Self Portrait"
 category: "Live Web"
 
---

I wanted to create something that reacted proportionally to the direction of input, so naturally I decided to use the arrow keys as the interactive element. I filmed two video segments, one of me panning my head back and forth, and the other of a laptop being opened and shut. I then edited these clips down, so that there was one movement in each clip (head goes from left to right, laptop goes from open to shut). I then set these video clips to start in the middle of their duration, so that my head was positioned looking relatively forward when they start. The arrow keys then scrub through the video, which in turn makes it seem like my head / the camera is moving in the direction of the arrow. I also added some filtered white noise and had the arrow keys affect the panning of the sound. 

Here is the code:
```

<!DOCTYPE html>

<html>

<body>
  <!-- <script>
  var s;
  var myVideo;
  var aLeft;
  var aRight;
  </script> -->

  <body bgcolor="#b29c84">


  <div style="text-align:center">
    <video id="video1" width="1080" height="720">
          <source src="video/Selfportrait_1.mp4" type="video/mp4">
        </video>
  </div>

  <div id="instructions" style="text-align:center">
    <font size='7' face="impact">Use the arrow keys. Listen with headphones. </font>
    <script type="text/javascript">
      var s = document.getElementById('instructions').style;
      s.opacity = 1;
      (function fade() {
        (s.opacity -= .005) < 0 ?
          s.display = "none" : setTimeout(fade, 40)
      })();
    </script>
  </div>

<div>
  <audio id="leftAudio" loop type="audio/wav">
    <source src="audio/LeftChannel.wav">
  </audio>
</div>

<div>
  <audio id="rightAudio" loop type="audio/wav">
    <source src="audio/RightChannel.wav">
  </audio>
</div>

<script>

var aLeft = document.getElementById("leftAudio");
aLeft.autoplay = true;
// aLeft.volume = 0.5;
var aRight = document.getElementById("rightAudio");
aRight.autoplay = true;
// aRight.volume = 0.5;

  var myVideo = document.getElementById("video1");
  var videoSelection = 1;

  myVideo.currentTime = 5;

  aRight.volume = 0.5;
  aLeft.volume = 0.5;

  document.onkeydown = checkKey;

  function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') { //up arrow
      if (videoSelection == 1) {
        myVideo.src = "video/selfportrait2.mp4";
        myVideo.currentTime = 6.5;
        videoSelection = 2;
        aRight.volume = 0.5;
        aLeft.volume = 0.5;
      } else {
        myVideo.currentTime -= 0.1;
        aRight.volume += 0.008;
        aLeft.volume += 0.008;
      }
    } else if (e.keyCode == '40') { //down arrow
      if (videoSelection == 1) {
        myVideo.src = "video/selfportrait2.mp4";
        myVideo.currentTime = 6.5;
        videoSelection = 2;
        aRight.volume = 0.5;
        aLeft.volume = 0.5;
      } else {
        myVideo.currentTime += 0.1;
        aRight.volume -= 0.008;
        aLeft.volume -= 0.008;
      }
    } else if (e.keyCode == '37') { //left arrow
      if (videoSelection == 2) {
        myVideo.src = "video/Selfportrait_1.mp4";
        myVideo.currentTime = 5;
        videoSelection = 1;
        aRight.volume = 0.5;
        aLeft.volume = 0.5;
      } else {
        myVideo.currentTime -= 0.1;
                aRight.volume -= 0.01;
                aLeft.volume += 0.01;
      }
    } else if (e.keyCode == '39') { //right arrow
      if (videoSelection == 2) {
        myVideo.src = "video/Selfportrait_1.mp4";
        myVideo.currentTime = 5;
        videoSelection = 1;
        aRight.volume = 0.5;
        aLeft.volume = 0.5;
      } else {
        myVideo.currentTime += 0.1;
        aRight.volume += 0.01;
        aLeft.volume -= 0.01;
      }
    }
  }
</script>

  </body>

</html>
```

And for my sychronous site, I wanted to discuss Twitch Plays Pokemon. Twitch is a streaming platform focused around gaming. Twitch Plays Pokemon was a gaming experiment that allowed multiple users to cast a vote for an input to the game by typing it in the chatroom. As it used an emulator to play the earliest version of the game (Pokemon Red), the controls were very simple (left, right, up, down, A, and B), allowing for the users to easily cast their vote and for the script to decode the most common vote. 

It was an immense success, averaging 80,000 concurrent viewers (with 10,000 participating at any given moment). It peaked at around 121,000 concurrent users, with over 55 million views total of the 16 day run. It holds the Guiness Book of World Records for "the most participants on a single-player online videogame" with 1,165,140.

Not only was this a very nostalgic experience for many (as it was primarily users who had played the original game), but it created this shared experience of a single playthrough (single character) with so many people. There were epic moments and terribly silly moments that we all experienced together while playing it, even such as to create miniature lores around the playthrough. 

Here is an example of what the gameplay looked like (a simple task as trying to walk through a door becomes hilarious difficult): https://www.youtube.com/watch?v=41K2bDHFhgo

You can find more information about it here: https://en.wikipedia.org/wiki/Twitch_Plays_Pok%C3%A9mon










