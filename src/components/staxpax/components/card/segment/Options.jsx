import React, { Component } from 'react';

export class Options extends Component {
	render() {
		const { ...rest } = this.props;
		return (
			<div
				stax="segment segment-options"
				pax="segment"
				{ ...rest }
			>
			{
				this.props.children
			}
			</div>
		);
	}
}