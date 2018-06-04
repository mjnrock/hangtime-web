import React, { Component } from "react";
import { connect } from "react-redux";

import * as Games from "../../../../actions/Games";

import { Deck } from "../../../../staxpax/Deck";

import { Anchor } from "../../Anchor";
import { Result } from "./Result";

//  Assemble the Deck here and serve as the default call to this file
class Search extends Component {
	render() {
		return (
			<Deck>
				<Anchor
					icon="Deck"
					text="The Search Game Deck"
				/>
				{
					!!this.props.ProximateGames ? this.props.ProximateGames.map((v, i) => {
						return (
							<Result
								key={ i }
								data={ v }
							/>
						);
					}) : "Loading..."
				}
			</Deck>
		);
	}
}

export default connect(
	(state) => {
		return {
			ProximateGames: state.ProximateGames
		};
	},
	(dispatch) => {
		return {
			GetProximateGamesRequest: (activity, lat, long, r) => dispatch(Games.GetProximateGamesRequest(activity, lat, long, r))
		};
	}
)(Search);