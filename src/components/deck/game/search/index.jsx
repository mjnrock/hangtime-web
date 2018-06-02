import React, { Component } from "react";
import { connect } from "react-redux";

import * as Games from "../../../../actions/Games";

import { Deck } from "../../../../staxpax/Deck";

import { Anchor } from "../../Anchor";
import { Result } from "./Result";

//  Assemble the Deck here and serve as the default call to this file
export class Search extends Component {
	componentDidMount() {
		this.props.GetProximateGamesRequest(
			"FD030E70-6DDC-4A0A-A92E-BCA90B233D8A",
			42.2411,
			-83.6130
		);
	}

	render() {
		return (
			<Deck>
				<Anchor
					icon="Deck"
					text="The Search Game Deck"
				/>
				{
					!!this.props.ProximateGames ? this.props.ProximateGames.map((v, i) => {
						return <Result
							data={ v }
						/>
					}) : "Loading..."
				}
			</Deck>
		);
	}
}