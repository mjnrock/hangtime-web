import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch } from 'react-router-dom';

import * as User from "./actions/User";
import * as Games from "./actions/Games";

import Routes from "./routes/package";

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
			<div>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/game/host'>Host Game</Link></li>
					<li><Link to='/game/search'>Search Game</Link></li>
				</ul>

				<Switch>
					<Route exact path="/" component={ Routes.Main } />
					<Route path="/game/host/" component={ Routes.Game.Host } />
					<Route path="/game/search/:code?" component={ Routes.Game.Search } />
				</Switch>	  
			</div>
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