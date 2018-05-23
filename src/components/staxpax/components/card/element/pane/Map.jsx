import React, { Component } from 'react';

// import Helper from "../../../../Helper";
import { Pane } from "./Pane";

export class Map extends Component {
	render() {
		const { pax, url, sport, alt="Result Map", pos, offset, ...rest } = this.props;
		
		return (
			<Pane
				stax="pane map"
				pax="pane-p"
				noInherit={ true }
				{...rest}
			>
				<img stax="img-map" src={ url } alt={ alt } />
			</Pane>
		);
	}
}