import React, { Component } from "react";
import { connect } from "react-redux";

import * as User from "../../actions/User";
import * as Games from "../../actions/Games";

import { Result } from "../../components/deck/mvp/Result";

class Search extends Component {
	render() {
		this.props.ProximateGames;
		return (
			<div>
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
		console.log(state);
		return {
			Profile: state.Profile,
			ProximateGames: state.ProximateGames
		};
	},
	(dispatch) => {
		return {
			GetProfileRequest: (username) => dispatch(User.GetProfileRequest(username)),
			GetProximateGamesRequest: (activity, lat, long, r) => dispatch(Games.GetProximateGamesRequest(activity, lat, long, r))
		};
	}
)(Search);