import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Routes from "./routes/package";
import WebSocketHelper from "./ws/WebSocketHelper";

import { CreateFeed } from "./actions/Feed";

class App extends Component {
	componentWillMount() {
		this.WebSocketHelper = new WebSocketHelper(this.props);
	}

	OnMessage(payload) {
		if(payload !== void 0 && payload !== null) {
			//TODO Bring back the MessageManager and load like the WebSocketHelper above
			//TODO Use Actions/Reducers to send the server-return payload to the State, so components can connect to it
			
			//TODO Maybe rename messages that intend to be WebSocket messages, maybe Common/Client
			//TODO Use Actions/Reducers for internal messages
			return payload;
		}
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Switch>
						<Route exact path="/" render={ (props) => <Routes.Feed WebSocketHelper={ this.WebSocketHelper } /> } />
						<Route path="/feed/:id" component={ Routes.Feed } />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(
	null,
	(dispatch) => {
		return {
			CreateFeed: (feed) => dispatch(CreateFeed(feed))
		};
	}
)(App);