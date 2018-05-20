import React, { Component } from 'react';

export class Pane extends Component {
	render() {
		const { ...rest } = this.props;
		return (
			<div
				stax="element element-pane"
				{ ...rest }
			>
			{
				this.props.children
			}
			</div>
		);
	}
}