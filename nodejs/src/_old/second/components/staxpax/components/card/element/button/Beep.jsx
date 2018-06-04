import React, { Component } from 'react';

import { Button } from "./Button";

export class Beep extends Component {
	render() {
		const { pax, ...rest } = this.props;
		return (
			<Button
				stax="element"
				pax={ `${pax}` }
				icon="priority_high"
				text="Beep"
				onClick={ this.onClick }
				{ ...rest }
			/>
		);
	}

	onClick() {
		console.log("CLICKED");
	}
}