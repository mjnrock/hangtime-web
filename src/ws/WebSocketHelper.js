import MessageManager from "./message/MessageManager";
import Config from "./../Config";

class WebSocketHelper {
	constructor(dispatchers, url = `ws://${Config.Server}:${Config.Port}/ws`) {
		this.Dispatchers = dispatchers;
		this.MessageManager = new MessageManager(this.Dispatchers);
		this.ws = new WebSocket(url);
		this.ws.onopen = (e) => this.OnOpen(e);
		this.ws.onmessage = (e) => this.OnMessage(e);
		this.ws.onclose = (e) => this.OnClose(e);
	}

	Send(message) {
		console.log("Sending message to the server...");
		try {
			this.ws.send(
				JSON.stringify(message)
			);

			return true;
		} catch (e) {
			return false;
		}
	}

	OnOpen(e) {
		console.log(e);
		// this.ws.send("Hey!");
	}

	OnMessage(e) {
		if(e.isTrusted) {
			console.log("Received trusted message...");
			this.MessageManager.OnMessage(e.data);
		}
	}

	OnClose(e) {
		console.log(e);
	}
}

export default WebSocketHelper;