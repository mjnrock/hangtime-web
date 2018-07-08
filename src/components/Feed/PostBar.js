import React, { Component } from 'react';
import { connect } from "react-redux";

import * as ActionsFeed from "../../actions/Feed";

class PostBar extends Component {
	render() {
		return (
			<div>
				<hr />
				<textarea placeholder="Write a message..." onKeyUp={ this.onKeyUp.bind(this) }/>
			</div>
		);
	}

	onKeyUp(e) {
		if(e.keyCode === 13) {
			this.props.PostFeedMessageRequest(1, e.target.value.replace(/(\r\n\t|\n|\r\t)/gm, "").trimEnd().trimStart());
			e.target.value = null;
		}
		
		e.preventDefault();
	}
}

export default connect(
	null,
	(dispatch) => {
		return {
			PostFeedMessageRequest: (id, message) => dispatch(ActionsFeed.PostFeedMessageRequest(id, message))
		};
	}
)(PostBar);