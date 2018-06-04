import React, { Component } from "react";
import { connect } from "react-redux";

import * as Games from "../../../actions/Games";

import { Deck } from "../../../staxpax/Deck";

import { Broadcast } from "./Broadcast";
import { Result } from "./Result";

//  Assemble the Deck here and serve as the default call to this file
class MVP extends Component {
	render() {
		return (
			<Deck
				Grid={ this.props.Grid }
				SetGrid={ this.props.SetGrid }
			>
				<Broadcast/>
				{
					!!this.props.ProximateGames ? this.props.ProximateGames.map((v, i) => {						
						return (
							<Result
								key={ i }
								data={ v }
								
								viewport={ this.props.ViewPort }
								calcPos={ this.props.CalculatePosition }
								deck-x={ i + 1 }
								deck-y={ 0 }
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
)(MVP);