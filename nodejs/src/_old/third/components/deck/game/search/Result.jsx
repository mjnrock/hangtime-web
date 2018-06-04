import React, { Component } from "react";
import moment from "moment";

import { Card } from "../../../../staxpax/Card";

export class Result extends Component {
	render() {
		let data = this.props.data;
		
		return (
			<Card
				className="card-background-01"
			>
				<div className="card-header">
					Pull Down to Join
				</div>
				<div className="card-content">
					<div className="game-search-result-metrics">
						<div className="game-search-result-metric">
							<div className="game-search-result-metric-value">
								{ data.DistanceMiles }
							</div>
							<div className="game-search-result-metric-unit">
								mi
							</div>
						</div>
						
						<div className="game-search-result-metric">
							<div className="game-search-result-metric-value">
								{ moment(data.StartDateTimeUTC).format("h:mm") }
							</div>
							<div className="game-search-result-metric-unit">
								{ moment(data.StartDateTimeUTC).format("a") }
							</div>
						</div>
					</div>
					<div className="game-search-result-title">
						<div>
							{ data.Title }
						</div>
					</div>
					<div className="game-search-result-map">
						<div>
							
						</div>
					</div>
					<div className="game-search-result-description">
						{ data.Description }
					</div>
					<div className="game-search-result-tags">
						{
							!!data.Tags ? data.Tags.split(",").map((v, i) => {
								return (
									<div className="game-search-result-tag" key={ i }>
									{
										v
									}
									</div>
								);
							}) : null
						}
					</div>
				</div>
				<div className="card-footer">
					Swipe Up for Details
				</div>
			</Card>
		);
	}
}