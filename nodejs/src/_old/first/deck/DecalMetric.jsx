import React, { Component } from "react";

import { Decal } from "./Decal";

export class DecalMetric extends Component {
	render() {
		return (
			<Decal ht-this="metric">
				<span ht-this="value">{ this.props.value }</span>
				<i ht-this="icon" className="material-icons">{ this.props.icon }</i>
				<span ht-this="unit">{ this.props.unit }</span>
			</Decal>
		);
	}
}