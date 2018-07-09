let ws = new WebSocket("ws://localhost:1337/ws");

ws.onopen = function() {
	
	// Web Socket is connected, send data using send()
	ws.send("Message to send");
	alert("Message is sent...");
};

ws.onmessage = function (evt) { 
	var received_msg = evt.data;
	alert("Message is received...");

	console.log(received_msg);
};

ws.onclose = function() { 
	
	// websocket is closed.
	alert("Connection is closed..."); 
};