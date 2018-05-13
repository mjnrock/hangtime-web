import React, { Component } from 'react';

export class Decal extends Component {
	render() {
		const { ...rest } = this.props;
		return (
			<div
				ht="decal"
				{ ...rest }
			>
			{
				this.props.children
			}
			</div>
		);
	}
}