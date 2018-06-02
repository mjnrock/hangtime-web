import React, { Component } from "react";

export class Deck extends Component {    
	componentDidMount() {
	}

	componentDidUpdate() {

	}

	render() {
		return (
			<div
				className={ `sp-deck ${!!this.props.className ? this.props.className : ""}`}
			>
				{ this.props.children }
			</div>
		);
	}
}