import React, { Component } from 'react';
import { connect } from "react-redux";

import { InitializeFeedMessage } from './../../ws/message/InitializeFeedMessage';

class Feed extends Component {
	render() {
		if(this.props.Feed.length === 0) {
			return (
				<button onClick={ () => this.props.WebSocketHelper.Send(new InitializeFeedMessage(1)) }>Load Feed</button>
			);
		}

		return (
			<div>
				{
					this.props.Feed.map((v, i) => (
						<div key={ i }>
							<span className="post-author">{ v.Values.Author }:&nbsp;</span><span className="post-payload">{ v.Values.Payload }</span>
						</div>
					))
				}
			</div>
		);
	}
}

export default connect(
	(state) => {
		return {
			Feed: state.Feed
		};
	},
	null
)(Feed);