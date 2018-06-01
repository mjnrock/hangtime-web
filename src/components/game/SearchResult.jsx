import React, { Component } from "react";
import { connect } from "react-redux";

import * as Messages from "../actions/Messages";
import StaxPax from "./staxpax";

class App extends Component {
	render() {
		return (
			<main stax="container">
				
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