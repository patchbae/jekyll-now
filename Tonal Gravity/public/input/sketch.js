// Open and connect input socket
let socket = io('/input');

// Listen for confirmation of connection
socket.on('connect', function() {
  console.log("Connected");
});

// var c = color(random(255), random(255), random(255));

var freq = 0;
var amp = 0;
var posX = 0;
var posY = 0;
var sending = false;  
var opac = 255;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  //frameRate(30);

  // Select input and listen for changes
  select("#username").input(usernameChanged);
  // var rancolor = color(random(255), random(255), random(255));
}

function draw() {
  background(0);
  textSize(38);
  fill(opac);
  text("Touch to position your planet, your moon will orbit", width/16, height/16);
  text("You can set a username at the bottom", width/16, height/16 + 40);
  text("X-axis is rate", width/16, height/16 + 80);
  text("Y-axis is volume", width/16, height/16 + 120);
  text("Look up at the projection!", width/16, height/16 + 160);

  opac = opac - 0.5;
  // var posY = map(rotationX,-90.0, 90.0 , 0, windowHeight);
  // var posX = map(rotationY, -90.0, 90.0, 0, windowWidth);
  // freq = map(mouseX, 0, windowWidth, 88.0, 888.0, true);
  // amp = map(mouseY, 0, windowHeight, 0.0, 0.9, true);
  push();
  fill(255);
  // ellipse(posX, posY, 25, 25);
  ellipse(mouseX, mouseY,25, 25)
  posX = map(mouseX, 0.0, windowWidth, 0.0, 1000.0, true);
  posY = map(mouseY, 0.0, windowHeight, 0.0, 1000.0, true);
  // freq = map(mouseX, 0.0, windowWidth, 88.0, 888.0, true);
  // amp = map(mouseY, windowHeight, 0.0, 0.0, 0.9, true);
  text("Piano Composition by Ellen Hardcastle", width/16, height-80);

  pop();
  socket.emit('data', {x: posX, y: posY});



  // if (sending) {
    // socket.emit('sound', {x: freq, y: amp}); 
    // socket.emit('data', {x: rotationX, y: rotationY});

    // sending = false;
  // }



}

// function mouseMoved(){
// //   // Send mouse position
//   sending = true;
//   freq = map(mouseX, 0.0, windowWidth, 88.0, 888.0, true);
//   amp = map(mouseY, windowHeight, 0.0, 0.0, 0.9, true);

// //   socket.emit('sound', {x: freq, y: amp});
// // //   // Draw ellipse @mouse position
// // //   socket.emit('data', {x: mouseX, y: mouseY});
// //   fill(255);
// //   ellipse(mouseX, mouseY, 10, 10);
// }


// function touchMoved(){
// //   // Send mouse position
//   sending = true;
//   freq = map(mouseX, 0.0, windowWidth, 88.0, 888.0, true);
//   amp = map(mouseY, windowHeight, 0.0, 0.0, 0.9, true);

// //   socket.emit('sound', {x: freq, y: amp});
// // //   // Draw ellipse @mouse position
// // //   socket.emit('data', {x: mouseX, y: mouseY});
// //   fill(255);
// //   ellipse(mouseX, mouseY, 10, 10);
// }



// function deviceMoved() {   // change this so it only emits if the value has changed by 1 or more
//   sending = true;
//   freq = map(rotationX, -90.0, 90.0, 88.0, 888.0, true);
//   amp = map(rotationY, -90.0, 90.0, 0.0, 0.9, true);
// }

// Send username as it changes
function usernameChanged(){
  // flag = false;
  socket.emit('username', this.value());
}


