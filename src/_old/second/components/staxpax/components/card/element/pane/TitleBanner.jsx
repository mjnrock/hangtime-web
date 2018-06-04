import React, { Component } from 'react';

// import Helper from "../../../../Helper";

import { Pane } from "./Pane";
import { Emblem } from "../emblem/Emblem";

export class TitleBanner extends Component {
	render() {
		const { pax, title, desc, size, ...rest } = this.props;
		return (
			<Pane
				stax="pane titleBanner"
				pax="flex-1"
				noInherit={ true }
				{...rest}
			>
				<Emblem stax={ `titleBanner-text${ size === "s" ? " --small" : "" }` }>
					<span stax="sport-title">{ title }</span>
					<span stax="sport-description">{ desc }</span>
				</Emblem>
			</Pane>
		);
	}
}