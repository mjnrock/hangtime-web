class WebSocketHelper {
	constructor(app, url = "ws://localhost:1337/ws") {
		this.App = app;
		this.ws = new WebSocket(url);
		this.ws.onopen = (e) => this.OnOpen(e);
		this.ws.onmessage = (e) => this.OnMessage(e);
		this.ws.onclose = (e) => this.OnClose(e);
	}

	OnOpen(e) {
		console.log(e);
		this.ws.send("Hey!");
	}

	OnMessage(e) {
		console.log(e);
		this.App.OnMessage(e.data);
	}

	OnClose(e) {
		console.log(e);
	}
}

export default WebSocketHelper;