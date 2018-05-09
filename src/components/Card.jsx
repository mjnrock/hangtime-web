import React, { Component } from 'react';

export class Card extends Component {
	constructor(props) {
		super(props);

		this.config = {
			margin: this.props["ht-margin"],
			width: this.props["ht-width"],
			height: this.props["ht-height"]
		}
	}

	render() {
		let pos = this.props.calcPos(this.props["ht-x"], this.props["ht-y"]);

		return (
			<section
				ht-card="1"
				className="shadow-4"
				ht-x={ this.props["ht-x"] }
				ht-y={ this.props["ht-y"] }
				style={{
					width: this.config.width,
					height: this.config.height,
					top: pos.y,
					left: pos.x
				}}
			>
				<span ht-title="1">{ this.props["ht-title"] }</span>
			</section>
		);
	}
}