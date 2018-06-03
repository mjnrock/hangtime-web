import React, { Component } from "react";

import { Card } from "../../../staxpax/Card";

export class Broadcast extends Component {
	render() {		
		return (
			<Card
				className="card-background-01"
				viewport={ this.props.viewport }
				calcPos={ this.props.calcPos }
				deck-x={ this.props["deck-x"] }
				deck-y={ this.props["deck-y"] }
			>
				<div className="card-header">
					<div className="mvp-broadcast-logo">
						Hangtime
					</div>
				</div>
				<div className="card-content">
					<div className="mvp-broadcast-title">
						<i>Basketball</i>
						<span>Broadcast</span>
					</div>
					<div className="mvp-broadcast-map">
						Map
					</div>
					<div className="mvp-broadcast-detail">
						<input
							className="mvp-broadcast-detail-title"
							placeholder="Game Title"
						/>
						<input
							className="mvp-broadcast-detail-content"
							placeholder="Comments"
						/>
						<textarea
							className="mvp-broadcast-detail-tags"
							placeholder="Game Tags!  Add rules, interest, or filters (e.g. '2v2 3v3 5v5 beer-league 21')"
						/>
					</div>
				</div>
				<div className="card-footer">
				
				</div>
			</Card>
		);
	}
}