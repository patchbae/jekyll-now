---
 -layout: post
 -title: Color Mixing Lamp
---

I've been working as a lighting designer for the past few years, primarily in the context of live music events. But before that experience, I had never really interacted with RGB or CMY color spaces, much less had an understanding of these additive and subtractive models of color. 

So, I decided to make a color mixing lamp using an RGB LED strip that communicates with a p5.js sketch to help visualize the color mixing process. Here is the p5 sketch that is stripped down to just run in the browser:

<iframe width="600" height="400" src="https://alpha.editor.p5js.org/embed/Hksz0Fnab" scrolling="no"></iframe>

<iframe width="600" height="400" src="https://youtu.be/5olEyy52bp8" scrolling="no"></iframe>


And here is a link to a quick [video demo](https://youtu.be/5olEyy52bp8)!

I am working on the schematic since it may change after getting feedback during this week's class. 

Here is the Arduino code:


```
#define REDPIN 5
#define GREENPIN 6
#define BLUEPIN 3

void setup() {
  Serial.begin(9600);
  pinMode(REDPIN, OUTPUT);
  pinMode(GREENPIN, OUTPUT);
  pinMode(BLUEPIN, OUTPUT);
}


void loop() {
    analogWrite(GREENPIN,  map(analogRead(A1),0,1024,0,255));
    analogWrite(REDPIN,  map(analogRead(A0),0,1024,0,255));
    analogWrite(BLUEPIN,  map(analogRead(A2),0,1024,0,255));
   
   if (Serial.available() <= 0) {
   int R = analogRead(A0);
   int G = analogRead(A1);
   int B = analogRead(A2);

    Serial.println(
      String(R) + "," + String(G) + "," + String(B));
   }  
}
```


And here is the p5.js code:


```
var serial;          // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1411';  // fill in your serial port name here
var r, g, b;
var x = 45;
var x1 = 240;
var x2 = 440;

function setup() { 
  createCanvas(600, 400);
  serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('list', printList);  // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing
  serial.list();                      // list the serial ports
  serial.open(portName);              // open a serial port
  redslider = createSlider(0, 255, 0);
  greenslider = createSlider(0, 255, 0);
  blueslider = createSlider(0, 255, 0);
  redslider.position(30, 100);
  greenslider.position(220, 100);
  blueslider.position(430, 100);
 
  //noStroke();
} 

function draw() { 
	background(r, g, b);
  redslider.value(r);
  greenslider.value(g);
  blueslider.value(b);
  
  fill(0, g, b);
  rect(x, 150, 10, 88);
  
  fill(32, g, b);
  rect(x+10, 150, 10, 88);
  
  fill(64, g, b);
  rect(x+20, 150, 10, 88);
  
  fill(96, g, b);
  rect(x+30, 150, 10, 88);
  
  fill(128, g, b);
  rect(x+40, 150, 10, 88);
  
  fill(160, g, b);
  rect(x+50, 150, 10, 88);
  
  fill(192, g, b);
  rect(x+60, 150, 10, 88);
  
  fill(224, g, b);
  rect(x+70, 150, 10, 88);
  
  fill(255, g, b);
  rect(x+80, 150, 10, 88);
  
  //Green
  fill(r, 0, b);
  rect(x1, 150, 10, 88);
  
  fill(r, 32, b);
  rect(x1+10, 150, 10, 88);
  
  fill(r, 64, b);
  rect(x1+20, 150, 10, 88);
  
  fill(r, 96, b);
  rect(x1+30, 150, 10, 88);
  
  fill(r, 128, b);
  rect(x1+40, 150, 10, 88);
  
  fill(r, 160, b);
  rect(x1+50, 150, 10, 88);
  
  fill(r, 192, b);
  rect(x1+60, 150, 10, 88);
  
  fill(r, 224, b);
  rect(x1+70, 150, 10, 88);
  
  fill(r, 255, b);
  rect(x1+80, 150, 10, 88);
  
  //Blue
  fill(r, g, 0);
  rect(x2, 150, 10, 88);
  
  fill(r, g, 32);
  rect(x2+10, 150, 10, 88);
  
  fill(r, g, 64);
  rect(x2+20, 150, 10, 88);
  
  fill(r, g, 96);
  rect(x2+30, 150, 10, 88);
  
  fill(r, g, 128);
  rect(x2+40, 150, 10, 88);
  
  fill(r, g, 160);
  rect(x2+50, 150, 10, 88);
  
  fill(r, g, 192);
  rect(x2+60, 150, 10, 88);
  
  fill(r, g, 224);
  rect(x2+70, 150, 10, 88);
  
  fill(r, g, 255);
  rect(x2+80, 150, 10, 88);
  
  fill(0);
  rect(60, 285, 460, 20)
  fill(255);
  text("R: " + Math.round(r),80, 300); 
  fill(255);
  text("G: " + Math.round(g), 270, 300);
  fill(255);
  text("B: " + Math.round(b), 470, 300);
}


function serverConnected() {
  print('connected to server.');
}
 
function portOpen() {
  print('the serial port opened.')
}
 
function serialEvent() {

var inString = serial.readStringUntil('\r\n');
 
  //check to see that there's actually a string there:
  if (inString.length > 0 ) {
    var sensors = split(inString, ',');            // split the string on the commas
    if (sensors.length > 2) {                      // if there are three elements
      r = map(sensors[0], 0, 1024, 0, 255);   // element 0 is the locH
      g = map(sensors[1], 0, 1024, 0, 255); // element 1 is the locV
      b = map(sensors[2], 0, 1024, 0, 255)  // element 2 is the button
    }
  }
 
}
 
function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}
 
function portClose() {
  print('The serial port closed.');
}
// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 print(i + " " + portList[i]);
 }
}


```
