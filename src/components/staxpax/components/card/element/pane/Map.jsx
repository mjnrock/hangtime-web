import React, { Component } from 'react';

import Helper from "../../../../Helper";
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
				<div>
					<img stax="img-map" src={ url } alt={ alt } />
					<div>
						{ Helper.GenerateSportIcon(sport) }
						<div>
							<span stax="sport-title" pax="ts">This is a title</span>
							<span stax="sport-description" pax="ts">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, dicta?</span>
						</div>
					</div>
				</div>
			</Pane>
		);
	}
}