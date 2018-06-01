import React, { Component } from 'react';

import Helper from "../../../../Helper";

import { Emblem } from "./Emblem";

export class Metric extends Component {
	render() {
		const { stax, pax, value, unit, icon, ...rest } = this.props;
		return (
			<Emblem
				stax="metric"
				pax={ `${!!pax ? pax : ""}` }
				{ ...rest }
			>
				<span stax="value" pax="ts">{ value }</span>
				{ Helper.GenerateIcon(icon) }
				<span stax="unit" pax="ts">{ unit }</span>
			</Emblem>
		);
	}
}