import React, { Component } from "react";

import { Decal } from "./Decal";

export class DecalMetric extends Component {
	render() {
		return (
			<Decal ht-t="metric">
				<div ht="metric-content">
					<span ht="metric-value">{ this.props.value }</span>
					
					<div ht="metric-footer">
						<i ht="metric-icon" className="material-icons">{ this.props.icon }</i>
						<span ht="metric-unit">{ this.props.unit }</span>
					</div>
				</div>
			</Decal>
		);
	}
}