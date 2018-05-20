import React, { Component } from "react";
import { connect } from "react-redux";

import * as Messages from "../actions/Messages";
import StaxPax from "./staxpax";
console.log(StaxPax);

class App extends Component {
	render() {
		return (
			<main stax="container">
				<StaxPax.Components.Card.Card>
					This is a Card
					<StaxPax.Components.Card.Segment.Options>
						<StaxPax.Components.Card.Element.Button.JoinRequest />
						<StaxPax.Components.Card.Element.Button.JoinRequest />
						<StaxPax.Components.Card.Element.Button.JoinRequest />
						<StaxPax.Components.Card.Element.Button.JoinRequest />
						<StaxPax.Components.Card.Element.Button.JoinRequest />
						<StaxPax.Components.Card.Element.Button.JoinRequest />
					</StaxPax.Components.Card.Segment.Options>
				</StaxPax.Components.Card.Card>
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