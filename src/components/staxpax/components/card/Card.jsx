import React, { Component } from 'react';

export class Card extends Component {
	render() {
		const { ...rest } = this.props;
		return (
			<div
				stax="card"
				{ ...rest }
			/>
		);
	}
}