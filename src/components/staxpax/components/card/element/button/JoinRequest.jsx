import React, { Component } from 'react';

export class JoinRequest extends Component {
	render() {
		return (
			<button stax="button" onClick={ () => this.onClick }>
				Request to Join
			</button>
		);
	}

	onClick() {
		console.log("CLICKED");
	}
}