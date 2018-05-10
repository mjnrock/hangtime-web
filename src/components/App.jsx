import React, { Component } from "react";
import { connect } from "react-redux";

import * as Messages from "../actions/Messages";
import { Deck } from "./cards/Deck";

class App extends Component {
	render() {
		return (
			<main ht="container">
				<Deck />
			</main>
		);
	}
}

export default connect(
	(state) => {
		return {
			messages: state.messages
		};
	},
	(dispatch) => {
		return {
			GetMessages: (arg) => dispatch(Messages.GetMessages(arg))
		};
	}
)(App);