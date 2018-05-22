import React, { Component } from 'react';

// import Helper from "../../../Helper";

export class Tag extends Component {
	render() {
		const { stax, pax, tag, ...rest } = this.props;
		return (
			<div
				stax="tag"
				pax={ `${!!pax ? pax : ""}` }
				{ ...rest }
			>
				<span pax="ts">{ tag }</span>
			</div>
		);
	}
}