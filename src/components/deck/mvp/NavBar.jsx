import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
	render() {		
		return (
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/host'>Host Game</Link></li>
				<li><Link to='/search/nearby'>Search Game</Link></li>
			</ul>
		);
	}
}