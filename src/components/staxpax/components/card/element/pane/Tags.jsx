import React, { Component } from 'react';

// import Helper from "../../../../Helper";

import { Pane } from "./Pane";
import { Tag } from "../Tag";

export class Tags extends Component {
	render() {
		const { pax, tags, ...rest } = this.props;
		return (
			<Pane
				pax="flex-tags"
				noInherit={ true }
				{...rest}
			>
				{
					tags.split(" ").map(v => (
						<Tag pax="" tag={ v } />
					))
				}
			</Pane>
		);
	}
}