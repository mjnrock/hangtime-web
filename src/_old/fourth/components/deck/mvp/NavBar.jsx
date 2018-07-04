import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
	render() {		
		return (
			<nav>
				<Link to='/host'>Host</Link>
				<Link to='/search/nearby'>Search</Link>
			</nav>
		);
	}
}