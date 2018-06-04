import React, { Component } from "react";
import { connect } from "react-redux";

import * as User from "../../actions/User";

import MVP from "../../components/deck/mvp/package";

class Host extends Component {
	render() {
		return (
			<MVP.Broadcast />
		);
	}
}

export default connect(
	(state) => {
		return {
			Profile: state.Profile,
		};
	},
	(dispatch) => {
		return {
			GetProfileRequest: (username) => dispatch(User.GetProfileRequest(username)),
		};
	}
)(Host);