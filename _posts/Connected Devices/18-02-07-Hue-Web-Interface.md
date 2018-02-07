---

 layout: post
 title: "Hue Web Interface"
 category: "Connected Devices"
 
---

For this second assignment, we were asked to create a web interface for a connected device. I decided to make one for Phillips Hue lighting system, as I already had this installed in my house. The documentation and debugger provided by Phillips was also really helpful in connecting to the hub and getting started. Once I was successfull connected to my hub, and given a username, I went through some of your hue examples and decided to use p5.js to build a simple, client-side interface for the hue lights in my room. 

I first went through the complete list of hue lights in my home (there are a lot as I live with 7 other people and we all have them) and isolated the ones in my room. Once I'd done that, I created simple commands that would affect the entire group. These are the commands I created and their functions:

Off - turns entire group off
On - turns entire group on
Sweep Down - turns the entire group to minimal brightness, but uses transitiontime to sweep the onset across the room
Sweep Up - turns the entire group to maxmimal brightness, but uses transitiontime to sweep the onset across the room
Full - turns the entire group to maximal brightness immediately
Alert Sweep - sweeps the alert message across the room, create a chase effect
Red Sweep - changes the entire group's hue to red, but uses transitiontime to sweep the onset across the room
Blue Sweep - changes the entire group's hue to blue, but uses transitiontime to sweep the onset across the room
Slider - changes the entires group's hue to the slider's value, action is on mouse press


Here is the p5.js code and a [link](http://alpha.editor.p5js.org/patchbae/sketches/r1KhjmdIf) to the sketch. 

```
var username = '-'; // fill in your Hub-given username
var url = '-'; // the hub IP address     
//var resultDiv;
var clr1, clr2, clr3;
var blbs = [25, 39, 33, 26, 36];



function setup() {
  frameRate(1);
  resultDiv = createDiv('Hub response');  // a div for the Hue hub's responses
  resultDiv.position(10, 90);             // position it
  off = createButton('Off');
  off.position(10, 10);
  off.mousePressed(offGo);
  on = createButton('On');
  on.position(50, 10);
  on.mousePressed(onGo);
  sineU = createButton('Sweep Down');
  sineU.position(90, 10);
  sineU.mousePressed(sinWaveDown);
  sineD = createButton('Sweep Up');
  sineD.position(180, 10);
  sineD.mousePressed(sinWaveUp);
  redS = createButton('Red Sweep');
  redS.position(90, 40);
  redS.mousePressed(redSweep);
  blueS = createButton('Blue Sweep');
  blueS.position(170, 40);
  blueS.mousePressed(blueSweep);
  alertS = createButton('Alert Sweep');
  alertS.position(10, 40);
  alertS.mousePressed(alertSweep);
  full = createButton('Full');
  full.position(255, 10);
  full.mousePressed(atFull);
  hslider = createSlider(0, 65280, 0);
  hslider.position(250, 40);
  connect(); // connect to Hue hub; it will show all light states
}


function connect() {
  url = "http://" + url + '/api/' + username + '/lights/';
  httpDo(url, 'GET', getLights);
}

function getLights(result) {
  resultDiv.html(result);
}

function offGo() {
  var state = {
    on: false
  }
  for (i = 0; i < 5; i++) {
    go(blbs[i], state);
  }
}

function onGo() {
  var state = {
    on: true
  }
  for (i = 0; i < 5; i++) {
    go(blbs[i], state);
  }
}

function sinWaveDown() {
  var dim = 0;
    for (i = 0; i < 5; i++) {
      var time = i*10 + 8;
      var state = {
        bri: dim,
        transitiontime: time
      }
      go(blbs[i], state);
    }
}

function sinWaveUp() {
  var dim = 255;
  for (i = 0; i < 5; i++) {
    var time = i*15 + 4;
    var state = {
      bri: dim,
      transitiontime: time
    }
    go(blbs[i], state);
  }
}

function redSweep() {
  var huey = 0;
  for (i = 0; i < 5; i++) {
    var time = i*2+1;
    var state = {
      hue: huey,
      transitiontime: time
    }
    go(blbs[i], state);
  }
}

function blueSweep() {
  var huey = 46920;
  for (i = 5; i >= 0; i--) {
    var time = i*2+1;
    var state = {
      hue: huey,
      transitiontime: time
    }
    go(blbs[i], state);
  }
}

function mousePressed() {
  var huey = hslider.value();
    for (i = 5; i >= 0; i--) {
    var time = i*2+1;
    var state = {
      hue: huey,
      transitiontime: time, 
      sat: 254
    }
    go(blbs[i], state);
  }
      }


function alertSweep() {
  for (i = 0; i < 5; i++) {
    var time = i*4+1;
    var state = {
      alert: "lselect",
      transitiontime: time
    }
    go(blbs[i], state);
  }
}

function atFull() {
  var dim = 255;
  for (i = 0; i < 5; i++) {
    var state = {
      bri: dim
    }
    go(blbs[i], state);
  }
}


function go(blb, msg) {
  var path = url + blb + '/state/';
  var fnc = JSON.stringify(msg);
  httpDo(path, 'PUT', fnc, 'text', getLights);
}
```
