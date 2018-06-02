import React, { Component } from "react";
import { connect } from "react-redux";

import * as User from "../actions/User";
import * as Games from "../actions/Games";

import StaxPax from "../staxpax";
import Deck from "./deck/package";

class App extends Component {
	constructor(props) {
		super(props);

		console.log(connect);
	}

	componentDidMount() {
		this.props.GetProfileRequest("mrfancypants");
		this.props.GetProximateGamesRequest(
			"FD030E70-6DDC-4A0A-A92E-BCA90B233D8A",
			42.2411,
			-83.6130
		);
	}

	componentDidUpdate() {
		
	}

	render() {
		return (
			<StaxPax.Viewer>
				<Deck.MVP.MVP />
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