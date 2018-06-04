import React, { Component } from 'react';

import Helper from "../../../../Helper";

export class Button extends Component {
	render() {
		const { stax, pax, icon, text, onClick, ...rest } = this.props;
		return (
			<button
				stax={ `button ${stax}` }
				pax={ `${pax}` }
				onClick={ onClick }
				{ ...rest }
			>
				<span>
					{ Helper.GenerateIcon(icon) }
					<span>{ text }</span>
				</span>
			</button>
		);
	}
}