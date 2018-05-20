import React, { Component } from 'react';

export class JoinRequest extends Component {
	render() {
		const { ...rest } = this.props;
		return (
			<button
				stax="element"
				pax="flex-3 bs-e"
				onClick={ this.onClick }
				{ ...rest }
			>
				Request to Join
			</button>
		);
	}

	onClick() {
		console.log("CLICKED");
	}
}