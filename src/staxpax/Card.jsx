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
				style={ this.props.style }
				deck-x={ this.props["deck-x"] }
				deck-y={ this.props["deck-y"] }
			>
				{ this.props.children }
			</div>
		);
	}
}