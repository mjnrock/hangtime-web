import React, { Component } from "react";

import { Card } from "../../../../staxpax/Card";

export class JoinRequest extends Component {
	render() {
		let data = this.props.data;
		
		return (
			<Card
				className="card-background-01"
			>
				<div className="card-header">
					
				</div>
				<div className="card-content">
					<div className="game-host-joinRequest-title">
						Request to Join
					</div>
					<div className="game-host-joinRequest-picture">
						<div>

						</div>
					</div>
					<div className="game-host-joinRequest-details">
						<div className="game-host-joinRequest-detail">
							<div className="game-host-joinRequest-detail-name">
								{ data.Name }
							</div>
							<div className="div game-host-joinRequest-detail-comment">
								{ data.Comment}
							</div>
						</div>
						<div className="game-host-joinRequest-distance">
							<div className="game-host-joinRequest-distance-value">
								{ data.DistanceMiles}
							</div>
							<div className="game-host-joinRequest-distance-unit">
								mi
							</div>
						</div>
					</div>
					<div className="game-host-joinRequest-buttons">
						<button className="game-host-joinRequest-buttons">Reject</button>
						<button className="game-host-joinRequest-buttons">Accept</button>
					</div>
				</div>
				<div className="card-footer">
					
				</div>
			</Card>
		);
	}
}