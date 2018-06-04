import React, { Component } from "react";
import { connect } from "react-redux";

import * as Games from "../../actions/Games";

import { Result } from "../../components/deck/mvp/Result";

class Search extends Component {
	render() {
		return (
			<div>
				<button
					onClick={ () => this.props.GetProximateGamesRequest }
				>
					Refresh
				</button>
				{
					!!this.props.ProximateGames ? this.props.ProximateGames.map((v, i) => {
						return (
							<Result
								key={ i }
								data={ this.props.ProximateGames }
							/>
						);
					}) : "Loading..."
				}
			</div>
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