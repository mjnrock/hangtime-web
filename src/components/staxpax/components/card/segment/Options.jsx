import React, { Component } from 'react';

export class Options extends Component {
	render() {
		const { ...rest } = this.props;
		return (
			<div
				stax="segment segment-options"
				{ ...rest }
			>
			{
				this.props.children
			}
			</div>
		);
	}
}