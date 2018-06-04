import React, { Component } from 'react';

import Helper from "../../../../Helper";

import { Emblem } from "./Emblem";

export class UserIcon extends Component {
	render() {
		const { stax, pax, username, ...rest } = this.props;
		return (
			<Emblem
				stax="userIcon"
				pax={ `${!!pax ? pax : ""}` }
				{ ...rest }
			>
				{ Helper.GenerateUserIcon(username) }
			</Emblem>
		);
	}
}