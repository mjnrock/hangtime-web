//	http://userinfo.io/
//	https://stackoverflow.com/questions/391979/how-to-get-clients-ip-address-using-javascript-only

import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import * as User from "./actions/User";
import * as Games from "./actions/Games";

import Routes from "./routes/package";
import MVP from "./components/deck/mvp/package";

class App extends Component {
	componentDidMount() {
		this.props.GetProfileRequest("mrfancypants");
		this.props.GetProximateGamesRequest(
			"basketball",
			42.2411,
			-83.6130
		);
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<MVP.NavBar />
					
					<Switch>
						<Route exact path="/" component={ Routes.Game.Host  } />
						<Route path="/host/" component={ Routes.Game.Host } />
						<Route path="/search/nearby/:code?" component={ Routes.Game.Search } />
					</Switch>
					
					<MVP.BroadcastBar />
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(
	(state) => {
		return {
			Profile: state.Profile,
			ProximateGames: state.ProximateGames
		};
	},
	(dispatch) => {
		return {
			GetProfileRequest: (username) => dispatch(User.GetProfileRequest(username)),
			GetProximateGamesRequest: (activity, lat, long, r) => dispatch(Games.GetProximateGamesRequest(activity, lat, long, r))
		};
	}
)(App);