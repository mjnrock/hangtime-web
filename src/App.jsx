import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Routes from "./routes/package";
import WebSocketHelper from "./ws";

export default class App extends Component {
	constructor() {
		super();
		this.WebSocket = new WebSocketHelper(this);
	}

	OnMessage(payload) {
		console.log(payload);
		if(payload !== void 0 && payload !== null) {
			// this.props.ReceiveFeedMessage(payload);
			console.log(this);
		}
	}

	render() {
		return (
			<BrowserRouter>
				<div>					
					<Switch>
						<Route exact path="/" component={ Routes.Feed } />
						<Route path="/feed/:id" component={ Routes.Feed } />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}