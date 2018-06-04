import React, { Component } from 'react';

import { Button } from "./Button";

export class JoinRequest extends Component {
	render() {
		const { ...rest } = this.props;
		return (
			<Button
				stax="element"
				pax="flex-2"
				icon="add"
				text="Send Request"
				onClick={ this.onClick }
				{ ...rest }
			/>
		);
	}

	onClick() {
		console.log("CLICKED");
	}
}