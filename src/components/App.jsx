import React, { Component } from "react";
import { connect } from "react-redux";

import * as Messages from "../actions/Messages";
import { Card } from "./Card";

class App extends Component {
	render() {
		return (
			<div className="ht-container">
				<Card ht-x="0" ht-y="0" />
				<Card ht-x="1" ht-y="0" />
				<Card ht-x="2" ht-y="0" />
				<Card ht-x="3" ht-y="0" />
			</div>
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