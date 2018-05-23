import React, { Component } from 'react';

import Helper from "../../../../Helper";

import { Emblem } from "./Emblem";

export class SportIcon extends Component {
	render() {
		const { stax, pax, sport, text = true, ...rest } = this.props;
		return (
			<Emblem
				stax="sportIcon"
				pax={ `${!!pax ? pax : ""}` }
				{ ...rest }
			>
				<span stax="value">{ Helper.GenerateSportIcon(sport) }</span>
			</Emblem>
		);
	}
}