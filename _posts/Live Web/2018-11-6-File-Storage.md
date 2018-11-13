
---

 layout: post
 title: "File Storage"
 category: "Live Web"
 
---

For this assignment, I simply updated my previous work to storage each of the pictures that were taken. This is the updated code:

Server: 

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
      var searchFor = "data:image/png;base64,";
      var strippedImage = data.slice(data.indexOf(searchFor) + searchFor.length);
      var binaryImage = new Buffer(strippedImage, 'base64');
      fs.writeFileSync(__dirname + socket.id + Date.now() +".png", binaryImage);
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

Client:
```<html>
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



