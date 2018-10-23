---

 layout: post
 title: "Common Pulse Midterm"
 category: "Live Web"
 
---

My idea for this midterm was to create a website that will play a soundfile once every second, synchronously across multiple devices to create a common pulse. I would like to leverage the device's own system clock for this, allowing the pulse to be driven by that. Once the total number of users have joined the page, the piece will begin. I will experiment with latency and clock drift, to see if this will have an impact on the performance. 

I ended up having a lot more problems maintaining sync than I had expected, so I never ended up being able to develop the secondary features. I experimented with setInterval and setTimeout, but it appears that both cause a bit of delay. While not an issue in some applications, any delay after 20ms for audio beging to become discernible. Here is the good I ended up using:

```
<!DOCTYPE html>

<html>

<body>

  <button onclick="disableMute()" type="button">Enable sound</button>

  <body bgcolor="#b29c84" onload="startTime()">
 
    <div>
      <audio id="click" type="audio/wav">
    <source src="/assets/Click.wav">
  </audio>
    </div>

    </div>
    <script>
      var pulse = document.getElementById("click");
      // aLeft.autoplay = true:
      // aLeft.volume = 0.5;
      // aRight.autoplay = true;
      // aRight.volume = 0.5;
      function disableMute() {
        pulse.play();
      }

    pulse.volume = 1;


    function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    console.log(s);
    if (s==0) {
      metronome();
    }

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// function metronome() {
//    pulse.play();
//    setInterval(metronome, 1000);
// }


function metronome() {
   setTimeout(function () {
     pulse.play();
     metronome();
   }, 1000);
 }



    </script>
<div id="txt"></div>
  </body>

</html>
```



