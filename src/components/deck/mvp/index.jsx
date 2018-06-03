import React, { Component } from "react";
import { connect } from "react-redux";

import * as Games from "../../../actions/Games";
import * as Position from "../../../actions/Position"

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
				<Broadcast
					style={{
						width: "50px",
						height: "50px"
					}}
					deck-x={ 0 }
					deck-y={ 0 }
				/>
				{
					!!this.props.ProximateGames ? this.props.ProximateGames.map((v, i) => {
						let pos = this.props.CalculatePosition(i + 1, 0);
						console.log(pos);
						return (
							<Result
								key={ i }
								data={ v }
								style={{
									width: this.props.ViewPort.Width,
									height: this.props.ViewPort.Height,
									top: pos.Y,
									left: pos.X
								}}
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
			Grid: state.Grid,
			Position: state.Position,
			ProximateGames: state.ProximateGames
		};
	},
	(dispatch) => {
		return {
			SetGrid: (grid) => dispatch(Position.SetGrid(grid)),
			MovePosition: (x, y) => dispatch(Position.MovePosition(x, y)),
			GetProximateGamesRequest: (activity, lat, long, r) => dispatch(Games.GetProximateGamesRequest(activity, lat, long, r))
		};
	}
)(MVP);