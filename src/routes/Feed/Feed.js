import React, { Component } from 'react';

import Main from "../Main";

export default class Feed extends Component {
	componentDidMount() {
		this.setState({
			a: 1
		});
	}

	render() {
		return (
			<div>
				<Main />
			</div>
		);
	}
}