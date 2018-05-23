import React, { Component } from 'react';

export class Emblem extends Component {
	render() {
		const { stax, pax, noInherit = false, ...rest } = this.props;
		return (
			<div
				stax={ `emblem ${stax}` }
				pax={ !noInherit ? `${!!pax ? pax : ""}` : `${!!pax ? pax : ""}` }
				{ ...rest }
			>
				{
					this.props.children
				}
			</div>
		);
	}
}