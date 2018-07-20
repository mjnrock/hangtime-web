import React, { Component } from 'react';
import { Post } from "./Post";

export class PostContainer extends Component {
	render() {
		return (
			<div>
				{
					!!this.props.FeedMessages ? this.props.FeedMessages.map((v, i) => {
						return <Post key={ i } Author={ v.Values.Author } Payload={ v.Values.Payload } />;
					}) : "Loading..."
				}
			</div>
		);
	}
}