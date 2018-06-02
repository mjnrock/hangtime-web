import React, { Component } from "react";
import { connect } from "react-redux";

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