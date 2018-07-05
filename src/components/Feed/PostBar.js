import React, { Component } from 'react';

export class PostBar extends Component {
	render() {
		return (
			<div>
				<hr />
				<textarea placeholder="Enter message...">
					lorem ipsum
				</textarea>
			</div>
		);
	}
}