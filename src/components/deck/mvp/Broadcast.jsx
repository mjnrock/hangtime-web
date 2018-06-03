import React, { Component } from "react";

import { Card } from "../../../staxpax/Card";

export class Broadcast extends Component {
	render() {		
		return (
			<Card
				className="card-background-01"
				style={ this.props.style }
				deck-x={ this.props["deck-x"] }
				deck-y={ this.props["deck-y"] }
			>
				<div className="card-header">
				
				</div>
				<div className="card-content">
				
				</div>
				<div className="card-footer">
				
				</div>
			</Card>
		);
	}
}