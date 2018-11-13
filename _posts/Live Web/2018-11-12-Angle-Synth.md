---

 layout: post
 title: "Angle Synth"
 category: "Live Web"
 
---

For this week's assignment, I created a monophonic, theremin-like synth controlled via tilting one's phone. I initially tried using the Web Audio API, but ran into support issues on mobile browsers, so I switched back to p5.js for the time being. Rolling the phone controls the pitch, and tilting the phone controls the volume. A small ellipse is also drawn to help with visualization.

I tried to figure out a way to lock the device's orientation, but I wasn't able to get that working. I simply left instructions prompting the user to lock their device's orientation. Here is the code:

Server: 
```
// HTTP Portion
var http = require('http');
var fs = require('fs'); // Using the filesystem module
var httpServer = http.createServer(requestHandler);
var url = require('url');
httpServer.listen(8080);

function requestHandler(req, res) {

	var parsedUrl = url.parse(req.url);
	console.log("The Request is: " + parsedUrl.pathname);

	fs.readFile(__dirname + parsedUrl.pathname,
		// Callback function for reading
		function (err, data) {
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

  	/*
  	res.writeHead(200);
  	res.end("Life is wonderful");
  	*/
}

```

Client:
```<html>

<head>

	<script type="text/javascript">
	  var alpha;
		var beta;
		var gamma;
		var context;
		window.addEventListener('load', init, false);

		function init() {
			try {
				// Fix up for prefixing
				window.AudioContext = window.AudioContext || window.webkitAudioContext;
				context = new AudioContext();
				masterGainNode = audioContext.createGain();
				masterGainNode.connect(audioContext.destination);
				masterGainNode.gain.value = 1.0;
			} catch (e) {
				alert('Web Audio API is not supported in this browser');
			}
		}
	</script>


	<script type="text/javascript">
		function handleOrientation(event) {
			alpha = event.alpha;
			beta = event.beta;
			gamma = event.gamma;

			var elem = document.getElementById('map');

			elem.innerHTML = "alpha: " + Math.round(alpha) + "<br />";
			elem.innerHTML += "beta: " + Math.round(beta) + "<br />";
			elem.innerHTML += "gamma: " + Math.round(gamma);
		}
		window.addEventListener('deviceorientation', handleOrientation, true);

		var freq = ((gamma + 90) / 360) * 2000;
		playTone(freq);
	</script>

	<script type="text/javascript">

		function playTone(freq) {
			let osc = audioContext.createOscillator();
			osc.connect(masterGainNode);

			let type = sine;
			osc.frequency.value = freq;
			osc.start();

			return osc;
		}
	</script>




</head>

<body>
	<h1 style="text-align: center"> Hello. Please lock your device's orientation!</h1>
	<div id="map">This is a test.</div>
</body>

</html>

```



