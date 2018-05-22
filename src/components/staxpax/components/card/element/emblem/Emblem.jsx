import React, { Component } from 'react';

export class Emblem extends Component {
	render() {
		const { stax, pax, ...rest } = this.props;
		return (
			<div
				stax={ `emblem ${stax}` }
				pax={ `b br bs-e ${!!pax ? pax : ""}` }
				{ ...rest }
			>
				{
					this.props.children
				}
			</div>
		);
	}
}