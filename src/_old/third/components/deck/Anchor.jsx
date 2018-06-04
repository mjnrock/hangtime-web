import React, { Component } from "react";

import { Card } from "../../staxpax/Card";

export class Anchor extends Component {
	render() {
		return (
			<Card>
				<i>{ this.props.icon }</i>
				<span>{ this.props.text }</span>
			</Card>
		);
	}
}