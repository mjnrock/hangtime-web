import React, { Component } from 'react';
import { connect } from "react-redux";

import * as ActionsFeed from "../../actions/Feed";

import { PostContainer } from './../../components/Feed/PostContainer';
import { PostBar } from './../../components/Feed/PostBar';

class Feed extends Component {
	componentDidMount() {
		let id = +this.props.match.params.id;
		
		if(id !== null && id !== void 0) {
			this.props.GetFeedMessagesRequest(id);
		}
	}

	render() {
		return (
			<div>
				<PostContainer FeedMessages={ this.props.FeedMessages } />
				<PostBar />
			</div>
		);
	}
}

export default connect(
	(state) => {
		return {
			FeedMessages: state.FeedMessages
		};
	},
	(dispatch) => {
		return {
			GetFeedMessagesRequest: (feed) => dispatch(ActionsFeed.GetFeedMessagesRequest(feed))
		};
	}
)(Feed);