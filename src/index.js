import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import initStore from "./store/config.jsx";

import App from "./App";

const store = initStore();

let ws = new WebSocket("ws://localhost:1337/ws");

ws.onopen = function(conn) {
	console.log(conn);
	ws.send("Hey!");
};

ws.onmessage = function (conn) { 
	console.log(conn);
};

ws.onclose = function(conn) { 
	console.log(conn);
};

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
