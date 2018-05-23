import React, { Component } from 'react';

import Helper from "../../../../Helper";

import { Emblem } from "./Emblem";

export class UserBadge extends Component {
	render() {
		const { stax, pax, username, status, ...rest } = this.props;
		return (
			<Emblem
				stax="userBadge"
				pax={ `${!!pax ? pax : ""}` }
				{ ...rest }
			>
				<span stax="value">
					{ Helper.GenerateUserIcon(username) }
				</span>
				<span stax="unit">@{ username }</span>
				<span stax={ `unit online-status online-status-${status}` }>
					<span>{ status.replace("-", " ") }</span>
				</span>
			</Emblem>
		);
	}
}