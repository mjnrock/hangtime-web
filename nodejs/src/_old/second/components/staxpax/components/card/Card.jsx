import React, { Component } from 'react';

// import Helper from "../../Helper";

export class Card extends Component {
	render() {
		const { ...rest } = this.props;
		return (
			<div
				stax="card"
				onClick={ this.onClick.bind(this) }
				{ ...rest }
			/>
		);
	}

	onClick(e) {
		// Helper.ViewPort.ScrollTo(25, 25, 350);
		// this.props.children;
	}
}