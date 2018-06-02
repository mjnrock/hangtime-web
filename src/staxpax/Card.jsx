import React, { Component } from "react";

export class Card extends Component {
	componentDidMount() {
	}

	componentDidUpdate() {

	}

	render() {
		return (
			<div
				className={ `sp-card ${!!this.props.className ? this.props.className : ""}`}
			>
				{ this.props.children }
			</div>
		);
	}
}