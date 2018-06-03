import React, { Component } from "react";
import { connect } from "react-redux";

import * as User from "../actions/User";
import * as Games from "../actions/Games";
import * as Position from "../actions/Position"

import StaxPax from "../staxpax";
import Deck from "./deck/package";
console.log(Deck);

class App extends Component {
	componentDidMount() {
		this.props.GetProfileRequest("mrfancypants");
		this.props.GetProximateGamesRequest(
			"FD030E70-6DDC-4A0A-A92E-BCA90B233D8A",
			42.2411,
			-83.6130
		);
	}

	render() {
		return (
			<StaxPax.Viewer
				state={ this.props }
			>
				<Deck.MVP.MVP />
				<Deck.MVP.BroadcastBar />
			</StaxPax.Viewer>
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