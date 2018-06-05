import React, { Component } from "react";
import { connect } from "react-redux";

import * as Games from "../../actions/Games";

import { Result } from "../../components/deck/mvp/Result";

class Search extends Component {
	//TODO Move the "Time Remaining" timer off of the Result page and onto this container
	//TODO Pass the updated details via props or child function call

	componentDidMount() {
		navigator.geolocation.watchPosition(this.GetLocation);
	}

	GetLocation(position) {
		//TODO Call API from position
		//TODO Add Location into State and have this compare that, if different, PUT an update to the API
		//TODO Put a timeout on the API calls to prevent flooding
		try {
			console.log(position);
		} catch(e) {}
	}

	render() {
		return (
			<div>
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