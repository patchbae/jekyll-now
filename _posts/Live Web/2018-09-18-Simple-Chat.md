---

 layout: post
 title: "Simple Chat"
 category: "Live Web"
 
---

For this assignment, I just tried to make the front end a bit more readable. With the original code, every time a message was sent, an errant '0' was being added. I couldn't precisely figure out which line of code was making it do that, but I isolated the chunk of code causing that. I also wanted to have each message print to a new line, so I ended up having to modify that chunk any way. 

I moved the input to the bottom of the window, and created its own div that always floated right at the bottom. The div that contains the list elements is now contained to 98% of the window (so that a message won't print behind the input box) and it also creates a scroll bar as soon as it overflows. I tried to figure out how to automatically scroll to the bottom of the window, but was unsucessful.

I ended up using list elements in order to get the messages to print to a new line, as I coudln't figure out how to inject a linkbreak of newline character. I them styled them with no list style so that there were no bullet points. 

Here is the code:


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
	<script type="text/javascript" src="/socket.io/socket.io.js"></script>
	<script type="text/javascript">
		var socket = io.connect();

		socket.on('connect', function() {
			console.log("Connected");
		});

		// Receive from any event
		socket.on('chatmessage', function(data) {
			console.log(data);
      
			// var content = document.getElementById('messages'); // This is the original code
			// content.innerHTML += data; // This is the original code
      
			var node = document.createElement("LI"); // Create a <li> element
			var textnode = document.createTextNode(data); // Create a text node containing the chat data
			node.appendChild(textnode); // Add text to the <li> element
			document.getElementById("messages").appendChild(node); // Append <li> to <ul>
		});

		var sendmessage = function(message) {
			console.log("chatmessage: " + message);
			socket.emit('chatmessage', message);
		};
	</script>
</head>

<body>
	<div id="messages" style="position: relative; height: 98%; overflow: scroll; border-style: solid;">
		No Messages Yet
		<div id="inputs" style="position: fixed; bottom: 0">
			<input type="text" id="message" name="message" >
			<input type="submit"  value="submit" onclick="sendmessage(document.getElementById('message').value);">
	</div>
	</div>


</body>

</html>

```










