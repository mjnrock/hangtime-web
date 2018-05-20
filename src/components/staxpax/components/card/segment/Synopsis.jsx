import React, { Component } from 'react';

export class Synopsis extends Component {
	render() {
		const { ...rest } = this.props;
		return (
			<div
				stax="segment segment-synopsis"
				{ ...rest }
			>
			{
				this.props.children
			}
			</div>
		);
	}
}