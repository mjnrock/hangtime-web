import React, { Component } from "react";
import moment from "moment";

import { Card } from "../../../staxpax/Card";

export class Result extends Component {
	render() {
		let data = this.props.data;
		
		return (
			<Card
				className="card-background-01"
				style={ this.props.style }
				deck-x={ this.props["deck-x"] }
				deck-y={ this.props["deck-y"] }
			>
				<div className="card-header">
					Pull Down to Join
				</div>
				<div className="card-content">
					<div className="mvp-result-metrics">
						<div className="mvp-result-metric">
							<div className="mvp-result-metric-value">
								{ data.DistanceMiles }
							</div>
							<div className="mvp-result-metric-unit">
								mi
							</div>
						</div>
						
						<div className="mvp-result-metric">
							<div className="mvp-result-metric-value">
								{ moment(data.StartDateTimeUTC).format("h:mm") }
							</div>
							<div className="mvp-result-metric-unit">
								{ moment(data.StartDateTimeUTC).format("a") }
							</div>
						</div>
					</div>
					<div className="mvp-result-title">
						<div>
							{ data.Title }
						</div>
					</div>
					<div className="mvp-result-map">
						<div>
							
						</div>
					</div>
					<div className="mvp-result-description">
						{ data.Description }
					</div>
					<div className="mvp-result-tags">
						{
							!!data.Tags ? data.Tags.split(",").map((v, i) => {
								return (
									<div className="mvp-result-tag" key={ i }>
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