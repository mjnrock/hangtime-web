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
						<StaxPax.Components.Card.Element.Pane.Pane type="p" cols="2" style={{
						border: "none",
						boxShadow: "none",
						margin: 2
					}}>
							<StaxPax.Components.Card.Element.Button.Beep pax="--red" />
							<StaxPax.Components.Card.Element.Button.SendMessage pax="--red" />
							<StaxPax.Components.Card.Element.Button.JoinRequest pax="--red" />
						</StaxPax.Components.Card.Element.Pane.Pane>
					</StaxPax.Components.Card.Segment.Options>
					
					<StaxPax.Components.Card.Segment.Synopsis>
						<StaxPax.Components.Card.Element.Pane.Pane type="p">
							<img src="/assets/images/map.png" alt="map" />
						</StaxPax.Components.Card.Element.Pane.Pane>
						<StaxPax.Components.Card.Element.Pane.Pane type="f" cols="1">							
							<StaxPax.Components.Card.Element.Pane.Pane>
								<StaxPax.Components.Card.Element.Emblem.Metric
									icon="directions_car"
									unit="mi"
									value="8.5"
								/>
								<StaxPax.Components.Card.Element.Emblem.Metric 
									icon="schedule"
									unit="pm"
									value="5:30"
								/>
							</StaxPax.Components.Card.Element.Pane.Pane>						
						</StaxPax.Components.Card.Element.Pane.Pane>
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