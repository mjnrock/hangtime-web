import React, { Component } from 'react';

export class Pane extends Component {
	render() {
		const { ...rest } = this.props;
		return (
			<div
				ht="pane"
				{ ...rest }
			>
			{
				this.props.children
			}
			</div>
		);
	}
}