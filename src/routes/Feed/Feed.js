import React, { Component } from 'react';
import { connect } from "react-redux";

import { InitializeFeedMessage } from './../../ws/message/InitializeFeedMessage';
import { WriteFeedMessage } from './../../ws/message/WriteFeedMessage';

class Feed extends Component {
	componentDidMount() {
		console.log(this.props.WebSocketHelper);
		this.props.WebSocketHelper.Send(new InitializeFeedMessage(1));
	}

	componentDidUpdate() {
		console.log(this);
	}

	OnPostSubmit(e) {
		if(e.key === "Enter") {
			e.preventDefault();

			if(e.target.value.length >= 0) {
				this.props.WebSocketHelper.Send(new WriteFeedMessage(1, "ReactAuthor", e.target.value));
				e.target.value = "";
			}
		}
	}

	render() {
		if(this.props.Feed.length === 0) {
			return (
				<div>Loading...</div>
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
				<textarea onKeyDown={ (e) => this.OnPostSubmit(e) }></textarea>
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