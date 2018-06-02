import React, { Component } from "react";
import { connect } from "react-redux";

import * as User from "../actions/User";
import * as Games from "../actions/Games";

import StaxPax from "../staxpax";
import Deck from "./deck/package";

class App extends Component {
	componentDidMount() {
		this.props.GetProfileRequest("mrfancypants");
		this.props.GetProximateGamesRequest(
			"8DE5FC08-052A-4D00-A0B4-57A560511230",
			42.2411,
			-83.6130
		);
	}

	componentDidUpdate() {
		
	}

	render() {
		console.log(this.props);
		return (
			<StaxPax.Viewer>
				<Deck.Game.Search
					ProximateGames={ this.props.ProximateGames }
					GetProximateGamesRequest={ this.props.GetProximateGamesRequest }
				/>
			</StaxPax.Viewer>
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