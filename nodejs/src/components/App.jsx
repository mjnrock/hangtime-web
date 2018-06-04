import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch } from 'react-router-dom';

import * as User from "../actions/User";
import * as Games from "../actions/Games";
import * as Position from "../actions/Position";

import Deck from "./deck/package";

import { Main } from "./Main";
import { HostGame } from "./routes/HostGame";

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
				</ul> 
				<Switch>
					<Route exact path="/" component={ Main } />
					<Route path="/game/host/:code" component={ HostGame } />
				</Switch>	  
			</div>
		);
	}
}

export default connect(
	(state) => {
		return {
			Grid: state.Grid,
			Position: state.Position,
			Profile: state.Profile,
			ProximateGames: state.ProximateGames
		};
	},
	(dispatch) => {
		return {
			SetGrid: (grid) => dispatch(Position.SetGrid(grid)),
			MovePosition: (x, y) => dispatch(Position.MovePosition(x, y)),
			GetProfileRequest: (username) => dispatch(User.GetProfileRequest(username)),
			GetProximateGamesRequest: (activity, lat, long, r) => dispatch(Games.GetProximateGamesRequest(activity, lat, long, r))
		};
	}
)(App);