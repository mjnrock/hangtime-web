import React, { Component } from "react";
// import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";

// import Hangtime from "./components/package";
import * as ActionsFeed from "./actions/Feed";
import ActionType from "./enums/ActionType";

import Routes from "./routes/package";
import WebSocketHelper from "./ws";

class App extends Component {
	constructor() {
		super();
		this.WebSocket = new WebSocketHelper(this);
	}

	OnMessage(payload) {
		console.log(payload);
		if(payload !== void 0 && payload !== null) {
			this.props.ReceiveFeedMessage(payload);
			console.log(this.props);
		}
	}

	render() {
		return (
			<BrowserRouter>
				<div>					
					<Switch>
						<Route exact path="/" component={ Routes.Feed } />
						<Route path="/feed/:id" component={ Routes.Feed } />
			 			{/* <Route path="/host/" component={ Routes.Game.Host } />
			 			<Route path="/search/nearby/:code?" component={ Routes.Game.Search } /> */}
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

// export default App;
export default connect(
	(state) => {
		return {
			FeedMessages: state.FeedMessages
		};
	},
	(dispatch) => {
		return {
			ReceiveFeedMessage: (message) => dispatch(ActionsFeed.ReceiveFeedMessage(message))
		};
	}
)(App);