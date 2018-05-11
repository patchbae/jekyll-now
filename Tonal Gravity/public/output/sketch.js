// Open and connect output socket
let socket = io('/output');
// Keep track of users
let users = {};

let ps;
let repeller; 
// let song;

var flag = false;

// function preload() {
//   soundFormats('mp3', 'wav');
//   song = loadSound('cello.wav');
// }

// Create new user
function createNewUser(id) {
  var c = color(random(255), random(255), random(255));
  users[id] = {
    username: '',
    positions: [],
    note2: new p5.Oscillator(),
    note: new Song(),
    freq: 0.0,
    amp: 0.0,
    repeller: new Repeller(windowWidth/2 , windowHeight/2, c),
    particle: new Particle(windowWidth/2, windowHeight, c),
  }
  users[id].note.song.volume(0.0);
  users[id].note2.amp(0.0);
  users[id].note2.start();

  // ps.addParticle(windowWidth/2,windowHeight/2);
}

// function loaded(x){
//   users[x].note.play();
// }


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(8, 8, 8, 255);
  // ps = new ParticleSystem(createVector(windowWidth/2, 50));

    // Listen for updates to usernames
  socket.on('username', function (message) {
    let id = message.id;
    let username = message.username;

    // New user
    if (!(id in users)) {
      createNewUser(id);
        // users[id].note.song.play();
    }

    // Update username
    users[id].username = username;
  });

  // Receive message from server
  socket.on('message', function (message) {
    //console.log(message);
    let id = message.id;
    let pos = message.data;

    // New user
    if (!(id in users)) {
      createNewUser(id);
      users[id].note.song.play();

    }

    
    // Add position
    // Remove oldest position if > 50 positions
    let positions = users[id].positions;
    positions.push(pos);
    if (positions.length > 2) positions.shift();
  });

    // New Note
  //   socket.on('sound', function (message) {
  //   //console.log(message);
  //   let id = message.id;
  //   let sound = message.sound;

  //   users[id].freq = sound.x;
  //   users[id].amp = sound.y;
  // });

  // Remove disconnected users
  socket.on('disconnected', function(id){
    users[id].note.song.stop();
    users[id].note2.stop();

    delete users[id];
  });

}

// let smoothedFreq = 0;
// let smoothedAmp = 0;

// Draw the snake
// Change the background
function draw() {
  // let sz = frameCount%255;
  background(0, 0, 0, 25);
  fill(255);
  textSize(38);
  text("WiFi: ISSUE PROJECT ROOM | Password: project110", width/32, height/16 + 20);
  text("Go to this website and follow the instructions: 192.168.0.42:8000/input" , width/32, height/16 + 60);
  // fill(255);  
  // let gravity = createVector(0, 0.02);
  // ps.applyForce(gravity);
  for (let id in users) {
    let user = users[id];
    let username = user.username;
    let positions = user.positions;
    user.particle.run();
    let force = user.repeller.repel(user.particle);
    user.particle.applyForce(user.repeller.repel(user.particle));
    user.repeller.display();
    user.repeller.update(positions[0].x, positions[0].y, 0.05);

    // Normal
    // let maprate = map(user.particle.position.x, 0, windowWidth, 0.1, 1.2, true);
    // maprate = constrain(maprate, 0.1, 1.2);
    // user.note.song.speed(maprate);
    // let mapfreq = map(positions[0].x, 0, windowWidth, 80, 388, true);
    // mapfreq = constrain(mapfreq, 80, 388);
    // user.note2.freq(mapfreq);
    // let mapamp = map(user.particle.position.y, 0, windowHeight, 0.5, 0.0, true);
    // mapamp = constrain(mapamp, 0.0, 0.5);
    // user.note.song.volume(mapamp);
    // let mapamp2 = map(positions[0].y, 0, windowHeight, 0.1, 0.0, true);
    // mapamp2 = constrain(mapamp2, 0.0, 0.1);
    // user.note2.amp(mapamp2);

    //backwards
    let maprate = map(positions[0].x, 0, windowWidth, 0.1, 2.0, true);
    maprate = constrain(maprate, 0.1, 2.0);
    user.note.song.speed(maprate);
    let mapfreq = map(user.particle.position.x, 0, windowWidth, 80, 388, true);
    mapfreq = constrain(mapfreq, 80, 388);
    user.note2.freq(mapfreq);
    let mapamp = map(positions[0].y, 0, windowHeight, 0.5, 0.0, true);
    mapamp = constrain(mapamp, 0.0, 0.5);
    user.note.song.volume(mapamp);
    let mapamp2 = map(user.particle.position.y, 0, windowHeight, 0.01, 0.0, true);
    mapamp2 = constrain(mapamp2, 0.0, 0.01);
    user.note2.amp(mapamp2);
    // user.note2.amp(mapamp * 0.2);
    console.log(user.repeller.power);

    // smoothedFreq = lerp(smoothedFreq, user.freq, 0.5);
    // smoothedAmp = lerp(smoothedAmp, user.amp, 0.5);
    // console.log(smoothedFreq);

    // user.note.freq(smoothedFreq);
    // user.note.amp(smoothedAmp);



    var pY = positions[0].y;
    var pX = positions[0].x;
    // ps.addParticle(pX,pY);
    strokeWeight(1);

    fill(255, 255, 255, 255);
    // ellipse(posiX, posiY, 10, 10);
    // for (let p = 0; p < positions.length; p++) {
    //   let pos = positions[p];
    //   push();
    //   translate(pos.x, pos.y);
    //   noStroke();
    //   fill(255);
    //   ellipse(0, 0, 10, 10); 

    // //   // Draw username at the end of the snake
      // if(p == 0) {
        textSize(18);
        text(username, pX - 24, pY - 24);
      // }
    //   pop();
    // }
  }
}