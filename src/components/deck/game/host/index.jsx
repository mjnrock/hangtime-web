import React, { Component } from "react";

import { Anchor } from "../../Anchor";

//  Assemble the Deck here and serve as the default call to this file
export class Host extends Component {
	render() {
		return (
			<div>
				<Anchor
					icon="Deck"
					text="The Host Game Deck"
				/>
			</div>
		);
	}
}