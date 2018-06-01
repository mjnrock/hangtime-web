import React, { Component } from 'react';

import { Button } from "./Button";

export class SendMessage extends Component {
	render() {
		const { ...rest } = this.props;
		return (
			<Button
				stax="element"
				pax="flex-2"
				icon="mail_outline"
				text="Send Message"
				onClick={ this.onClick }
				{ ...rest }
			/>
		);
	}

	onClick() {
		console.log("CLICKED");
	}
}