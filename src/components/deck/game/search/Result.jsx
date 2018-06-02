import React, { Component } from "react";

import { Card } from "../../../../staxpax/Card";

export class Result extends Component {
	render() {
		return (
			<Card
				className="card-background-01"
			>
				<div>
					<div>
						{ this.props.data.toString() }
					</div>
				</div>
			</Card>
		);
	}
}