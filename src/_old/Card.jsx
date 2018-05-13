import React, { Component } from 'react';

export class Card extends Component {
	render() {
		let size = this.props.GetSize(this),
			pos = this.props.GetPosition(this);

		return (
			<div
				ht="card"
				className="shadow-3"
				ht-x={ this.props["x"] }
				ht-y={ this.props["y"] }
				ht-t={ this.props["t"] }
				ht-st={ this.props["st"] }
				style={{
					width: size.width,
					height: size.height,
					top: pos.top,
					left: pos.left
				}}
			>
				{
					this.props.children
				}
			</div>
		);
	}
}