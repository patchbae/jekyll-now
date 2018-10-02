---

 layout: post
 title: "Simple Draw"
 category: "Live Web"
 
---

I had a bit of trouble with this assignment, as such I wasn't able to get much done besides a basic modification of the original code. I updated the chat portion to match what I had for the previous assignment, then I modified the canvas to fit the entire chat window and draw rectangles on a click. I was having a lot of issues with scaling and getting the divs to fit correctly inside of each other, and as you can see the positioning of the rectangles varies slightly depending on where in the canvas you click. I believe it's just another issue with scaling the input to the correct canvas size. 

The server side remains the same. Here is the edited code: 

```
<!DOCTYPE html>

<html>
	<head>
		<style>
			ul {
		list-style: none;
			}
			li {
		list-style: none;
			}
			</style>
		<script src="socket.io.js"></script>
		<script>

			window.addEventListener('load', function() {
				document.getElementById('blinky').addEventListener('click', function() {
					console.log("hi");
					socket.emit('blink', "something");

				});

				var cnv = document.getElementById("thecanvas");
				var tryme =document.getElementById("canvas");
				cnv.width = parent.innerWidth;
				cnv.height = parent.innerHeight;
				tryme.addEventListener('mousedown', function(e) {
					console.log(e.x, e.y);
					var thedata = {x: e.x, y: e.y};
					socket.emit('draw', thedata);

				});

				var cnt = cnv.getContext("2d");
				cnt.fillStyle="#FF0000";
				cnt.fillRect(0,0,cnv.width,cnv.height);
			});


			var socket = io.connect();

			socket.on('draw', function(data) {
				var cnv = document.getElementById("thecanvas");
				var cnt = cnv.getContext("2d");
				cnt.rect(data.x, data.y, 20, 20);
				cnt.stroke();
			});

			socket.on('blink', function(data) {
				document.body.style.backgroundColor = "black";
				setTimeout(function() {
					document.body.style.backgroundColor = "red";
				}, 100);

			});

			socket.on('connect', function() {
				console.log("Connected");
			});

			// Receive a message
			socket.on('message', function(data) {
				console.log(data);
				// var content = document.getElementById('messages');
				// content.innerHTML += data;
				var node = document.createElement("LI"); // Create a <li> node
				var textnode = document.createTextNode(data); // Create a text node
				node.appendChild(textnode); // Append the text to <li>
				document.getElementById("messages").appendChild(node); // Append <li> to <ul> with id="myList"
			});

			// Receive from any event
			socket.on('news', function (data) {
				console.log(data);
			});

			var sendmessage = function() {
				var message = document.getElementById('message').value;
				console.log("Sending: " + message);

				// Send a messaage
				socket.send(message);
			};

			var sendother = function() {
				var othermessage = document.getElementById('message').value;
				console.log("sending: " + othermessage);

				// Send any kind of data with a custom event
				//socket.emit('otherevent',{ othermessage: othermessage });
				socket.emit('otherevent', othermessage);
			};
		</script>
	</head>
	<body>
			<div id="canvas">
				<canvas id="thecanvas" style="position: fixed; width: 99%; height: 96.75%; overflow: hidden"> </canvas>
				<div id="messages" style="position: relative; height: 98%; overflow: scroll; border-style: solid;">
					No Messages Yet <br />
			</div>
		</div>
		<div id="inputs" style="position: fixed; bottom: 0">
			<input type="text" id="message" name="message">
			<input type="button" value="message" onclick="sendmessage();">
			<input type="button" value="other" onclick="sendother();">
			<input type="button" value="Blinky" id="blinky">
		</div>
	</body>
</html>

```

