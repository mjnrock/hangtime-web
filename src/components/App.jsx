import React, { Component } from 'react';
import { connect } from "react-redux";

import * as Messages from "../actions/Messages";

class App extends Component {
	render() {
		return (
			<div className="App">
				<button className="btn" onClick={ () => this.props.GetMessages(Math.random()) }>Click Me</button>
				{
					this.props.messages.map((o, i) => (
						<p key={i}>{o}</p>
					))
				}
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