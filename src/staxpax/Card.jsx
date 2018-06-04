import React, { Component } from "react";

export class Card extends Component {
	componentDidMount() {
	}

	componentDidUpdate() {

	}

	render() {
		let pos = this.props.calcPos(this.props["deck-x"], this.props["deck-y"]);

		return (
			<section
				className={ `sp-card ${!!this.props.className ? this.props.className : ""}`}
				style={{
					width: this.props.viewport.Width,
					height: this.props.viewport.Height,
					top: pos.Y,
					left: pos.X
				}}
				deck-x={ this.props["deck-x"] }
				deck-y={ this.props["deck-y"] }
			>
				{ this.props.children }
			</section>
		);
	}
}