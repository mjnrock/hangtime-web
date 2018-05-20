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
					<StaxPax.Components.Card.Segment.Options>
						<StaxPax.Components.Card.Element.Pane type="f">
							<StaxPax.Components.Card.Element.Button.JoinRequest />
							<StaxPax.Components.Card.Element.Button.JoinRequest />
							<StaxPax.Components.Card.Element.Button.JoinRequest />
							<StaxPax.Components.Card.Element.Button.JoinRequest />
							<StaxPax.Components.Card.Element.Button.JoinRequest />
						</StaxPax.Components.Card.Element.Pane>
					</StaxPax.Components.Card.Segment.Options>
					
					<StaxPax.Components.Card.Segment.Synopsis>
						<StaxPax.Components.Card.Element.Pane type="p">
							<img src="/assets/images/map.png" alt="map" />
							
						</StaxPax.Components.Card.Element.Pane>
						<StaxPax.Components.Card.Element.Pane>
							
							<StaxPax.Components.Card.Element.Pane>
								<img src="/assets/images/map.png" alt="map" />
								
							</StaxPax.Components.Card.Element.Pane>
							
							<StaxPax.Components.Card.Element.Pane>
								<img src="/assets/images/map.png" alt="map" />
								
							</StaxPax.Components.Card.Element.Pane>
							
						</StaxPax.Components.Card.Element.Pane>
					</StaxPax.Components.Card.Segment.Synopsis>
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