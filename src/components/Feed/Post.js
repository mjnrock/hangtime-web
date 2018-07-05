import React, { Component } from 'react';

export class Post extends Component {
	render() {
		return (
			<div>
				[<span>{ this.props.Author }</span>]: <span>{ this.props.Payload }</span>
			</div>
		);
	}
}