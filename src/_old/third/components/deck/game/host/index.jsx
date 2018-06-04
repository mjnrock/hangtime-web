import React, { Component } from "react";

import { Anchor } from "../../Anchor";

import { JoinRequest } from "./JoinRequest";

//  Assemble the Deck here and serve as the default call to this file
export class Host extends Component {
	render() {
		return (
			<div>
				<Anchor
					icon="Deck"
					text="The Host Game Deck"
				/>
				{
					!!this.props.JoinRequests ? this.props.JoinRequests.map((v, i) => {
						return (
							<JoinRequest
								key={ i }
								data={ v }
							/>
						);
					}) : "Loading..."
				}
			</div>
		);
	}
}