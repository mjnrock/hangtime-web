import React, { Component } from "react";
import { connect } from "react-redux";

import * as Messages from "../actions/Messages";
import StaxPax from "./staxpax";
// import Helper from "./staxpax/Helper";
console.log(StaxPax);

class App extends Component {
	render() {
		return (
			<main stax="container">
				<StaxPax.Components.Card.Card>
					{/* <StaxPax.Components.Card.Segment.Options>
						<StaxPax.Components.Card.Element.Pane.Pane type="p" cols="2" style={{
						border: "none",
						boxShadow: "none",
						margin: 2
					}}>
							<StaxPax.Components.Card.Element.Button.Beep pax="--red" />
							<StaxPax.Components.Card.Element.Button.SendMessage pax="--red" />
							<StaxPax.Components.Card.Element.Button.JoinRequest pax="--red" />
						</StaxPax.Components.Card.Element.Pane.Pane>
					</StaxPax.Components.Card.Segment.Options> */}
					
					<StaxPax.Components.Card.Segment.Synopsis>
						<StaxPax.Components.Card.Element.Pane.Map url="/assets/images/map.png" sport="bball" />
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

							<StaxPax.Components.Card.Element.Pane.Pane cols="1">
								<StaxPax.Components.Card.Element.Emblem.Rating
									value="2.5"
									label="Cooperation"
								/>
								<StaxPax.Components.Card.Element.Emblem.Rating
									value="4"
									label="Skill"
								/>
							</StaxPax.Components.Card.Element.Pane.Pane>

							<StaxPax.Components.Card.Element.Pane.Pane cols="v">
								<StaxPax.Components.Card.Element.Pane.Tags
									tags="men 21 2v2 3v3 beer-league"
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