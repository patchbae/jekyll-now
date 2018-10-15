---

 layout: post
 title: "Recursive Photos"
 category: "Live Web"
 
---

This was the group project that Elizabeth and I worked on for the HTML5 Audio/Video assignment. We had originally wanted to capture live video from each user's webcam and draw that video onto a canvas at the location of the user's cursor. Essentially creating a space of talking heads where each user could control their own position, with  further goal of allowing the user to draw on their canvas. However, we ran into a lot of obstacles trying this method, and eventually came to the realization that this wasn't the best way to go about this. So we scaled our efforts back to simply capturing an image and printing it to a shared canvas. We got that running, but not to the desired effect. Instead of simply capturing an image from the webcam and printing that to canvas, it would capture the entire canvas already drawn in addition to an image from the webcam. This created a recursive effect, that got exponentially more chaotic as more users took pictures. 

We realized that we would need an additional canvas for each user that would not be drawn to the screen, but would simply hold the webcam information to sucessfully draw just the webcam image to a DATA URI, instead of drawing the canvas that is already on the screen. 

Here are the index.html and the server file:

```
<html>
  <head>
    <script src="/socket.io/socket.io.js"></script>
    <script type="text/javascript">

    let mouseX;
    let mouseY;
    // let windowWidth = window.innerWidth;
    // let windowHeight = window.innerHeight;

    window.addEventListener('load', function() {
      // The video element on the page to display the webcam
      var video = document.getElementById('thevideo');
      //var video = document.createElement('thevideo');
      // video.setAttribute('autoplay',true);


      // Constraints - what do we want?
      let constraints = { audio: false, video: true };

      // Prompt the user for permission, get the stream
      navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
      	/* Use the stream */

      	// Attach to our video object
      	video.srcObject = stream;

      	// Wait for the stream to load enough to play
      	video.onloadedmetadata = function(e) {
      		video.play();
          // draw();

      	};
      })
      .catch(function(err) {
      	/* Handle the error */
      	alert(err);
      });

      // Canvas element on the page
      var thecanvas = document.getElementById('thecanvas');
            thecanvas.width = window.innerWidth;
            thecanvas.height = window.innerHeight;
      console.log(thecanvas);

      console.log(video);

      // var draw = function() {
      //   // console.log("Drawing");
      //   thecontext.clearRect(0, 0, thecanvas.width, thecanvas.height);
      //   // console.log("It should be drawing!");
      // 	// Draw the video onto the canvas
      //
      //   dataUrl = thecanvas.toDataURL();
      //   // var dataUrl = video;
      //   // console.log(dataUrl);
      //
      //   socket.emit('dataurl', dataUrl, socket.id);
      //
      // 	// document.getElementById('imagefile').src = dataUrl;
      //   document.getElementById('thecanvas').src = dataUrl;
      //
      //
      //
      // 	// Draw again in 30 milliseconds
      // 	setTimeout(draw, 30);
      // };

        thebody.addEventListener('mousemove', function(e) {
        // console.log(e.x, e.y);
        socket.emit('coordinates', {x: e.x, y: e.y});
        // mouseX = e.x;
        // mouseY = e.y;
      });

      thebody.addEventListener('mousedown', function() {
        console.log("click");

        // var dataUrl = video;
        var video = document.getElementById('thevideo');
        var thecanvas = document.getElementById('thecanvas');
        var thecontext = thecanvas.getContext('2d');
        thecontext.drawImage(video,mouseX,mouseY,320,240);
        var dataUrl = thecanvas.toDataURL();
        socket.emit('dataurl', dataUrl);

      	// document.getElementById('imagefile').src = dataUrl;
        // document.getElementById('thecanvas').src = dataUrl;
        });

    });


    var socket = io.connect();

    socket.on('connect', function() {
      console.log("Connected");
      // socket.emit('createCanvas')
    });

    // socket.on('createCanvas', function(data) {
    //   console.log("Canvas created: " + socket.id);
    //   console.log(data + " Other person");
    //   var userCanvas = document.createElement("canvas");
    //   userCanvas.id = data;
    //   userCanvas.width = window.innerWidth;
    //   userCanvas.height = window.innerHeight;
    //   userCanvas.style.left = "0px";
    //   userCanvas.style.right = "0px";
    //   document.body.appendChild(userCanvas);
    // });

    socket.on('coordinates', function(data) {
      mouseX = data.x;
      mouseY = data.y
    });

    socket.on('dataurl', function(data) {
      console.log("Data URL Request");
      // console.log(id);

      // var video = document.getElementById('thevideo');
      // var thecontext = thecanvas.getContext('2d');
      // thecontext.drawImage(video,mouseX,mouseY,320,240);

      // console.log(data);
      // thecontext.drawImage(img,0,0,320,240);
      // img.src = data;

      var thecanvas = document.getElementById('thecanvas');

      var thecontext = thecanvas.getContext('2d');
      var img = new Image();
      console.log(img);
      img.onload = function() {
      thecontext.drawImage(img,mouseX,mouseY,320,240);
      console.log("We made it this far.")
      };
      img.src = data;

      //
      // var theimage = document.createElement("img");
      // theimage.src = data;
      // document.body.appendChild(theimage);
    });



  </script>
</head>
<body id="thebody">
  <video id="thevideo" height="0" width="0"></video>
  <canvas id="thecanvas"></canvas>
  <img id="theimage"></img>
  <!-- <div id="thediv">x</div> -->
</body>
</html>

```

```
//var http = require('http');
var https = require('https');

var fs = require('fs'); // Using the filesystem module

var options = {
  key: fs.readFileSync('my-key.pem'),
  cert: fs.readFileSync('my-cert.pem')
};

//var httpServer = http.createServer(requestHandler);

var httpServer = https.createServer(options, requestHandler);
httpServer.listen(8080);


var url = require('url');
// httpServer.listen(8080);
console.log('Server listening on port 8080');

function requestHandler(req, res) {

  var parsedUrl = url.parse(req.url);
  console.log("The Request is: " + parsedUrl.pathname);

  // Read in the file they requested
  fs.readFile(__dirname + parsedUrl.pathname,
    // Callback function, called when reading is complete
    function(err, data) {
      // if there is an error
      if (err) {
        res.writeHead(500);
        return res.end('Error loading ' + parsedUrl.pathname);
      }
      // Otherwise, send the data, the contents of the file
      res.writeHead(200);
      res.end(data);
    }
  );
}

// var numUsers = 0;
// var maxNumUsers = 2;

// WebSocket Portion
// WebSockets work with the HTTP server
var io = require('socket.io').listen(httpServer);

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection',
  // We are given a websocket object in our function
  function(socket) {

    // if (numUsers < maxNumUsers) {
    // numUsers++;
    console.log("We have a new client: " + socket.id);

    socket.on('coordinates', function(data) {
      io.sockets.emit('coordinates', data);
    });

    socket.on('dataurl', function(data) {
      io.sockets.emit('dataurl', data);
    });

    socket.on('connect', function(data) {
      console.log("New connection" + socket.id);
      // io.sockets.emit('createCanvas', socket.id);
      // console.log(data);
    });

    // socket.on('createCanvas', function(data) {
    //   console.log("Canvas Created: " + socket.id);
    //   io.sockets.emit('createCanvas', socket.id);
    //   // console.log(data);
    // });

    // When this user "send" from clientside javascript, we get a "message"
    // client side: socket.send("the message");  or socket.emit('message', "the message");
    socket.on('message',
      // Run this function when a message is sent
      function(data) {
        console.log("message: " + data);

        // Call "broadcast" to send it to all clients (except sender), this is equal to
        // socket.broadcast.emit('message', data);
        //socket.broadcast.send(data);

        // To all clients, on io.sockets instead
        io.sockets.emit('message', data);
      }
    );

    socket.on('draw',
      // Run this function when a message is sent
      function(data) {
        // console.log(data);

        // Call "broadcast" to send it to all clients (except sender), this is equal to
        // socket.broadcast.emit('message', data);
        //socket.broadcast.send(data);

        // To all clients, on io.sockets instead
        io.sockets.emit('draw', data);
      }
    );

    socket.on('blink',
      // Run this function when a message is sent
      function(data) {
        console.log(data);

        // Call "broadcast" to send it to all clients (except sender), this is equal to
        // socket.broadcast.emit('message', data);
        //socket.broadcast.send(data);

        // To all clients, on io.sockets instead
        io.sockets.emit('blink', data);
      }
    );

    // When this user emits, client side: socket.emit('otherevent',some data);
    socket.on('otherevent', function(data) {
      // Data comes in as whatever was sent, including objects
      console.log("Received: 'otherevent' " + data);
    });


    socket.on('disconnect', function() {
      console.log("Client has disconnected");
      // numUsers--;
    });
    // } else {
    //   socket.disconnect();
    //
    // }
  }
);
```

