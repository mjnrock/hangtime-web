import React, { Component } from 'react';

export class Card extends Component {
	componentDidMount() {
		this.props.init(this);
	}

	render() {
		let size = this.props.calcSize(this),
			pos = this.props.calcPosition(this);

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
					this.props["content"]
				}
			</div>
		);
	}

	testFn() {
		return 4;
	}
}