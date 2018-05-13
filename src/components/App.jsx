import React, { Component } from "react";
import { connect } from "react-redux";

import * as Messages from "../actions/Messages";
import Deck from "./deck";

console.log(Deck);

class App extends Component {
	render() {
		return (
			<main ht="container">
				<Deck.DecalMetric
					value={ 8.5 }
					unit={ `mi` }
					icon={ `tune` }
				/>
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