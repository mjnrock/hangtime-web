import React, { Component } from "react";
import { connect } from "react-redux";

import * as Messages from "../actions/Messages";
import Deck from "./deck";

console.log(Deck);

class App extends Component {
	render() {
		return (
			<main ht="container">
				<Deck.Pane>
					<Deck.DecalMetric
						value={ `8.5` }
						unit={ `mi` }
						icon={ `directions_car` }
					/>
					<Deck.DecalMetric
						value={ `5:30` }
						unit={ `pm` }
						icon={ `schedule` }
					/>
					<Deck.DecalMetric
						value={ `3` }
						unit={ `h` }
						icon={ `hourglass_empty` }
					/>
				</Deck.Pane>
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