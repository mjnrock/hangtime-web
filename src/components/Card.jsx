import React, { Component } from 'react';

export class Card extends Component {
	constructor(props) {
		super(props);

		this.ts = {
			x: 0,
			y: 0
		};
	}
	render() {
		return (
			<section
				className="container ht-card"
				ht-x={ this.props["ht-x"] }
				ht-y={ this.props["ht-y"] }
				onTouchStart={ e => this.onTouchStart(e) }
				onTouchEnd={ e => this.onTouchEnd(e) }
			>
				Content
			</section>
		);
	}

	onTouchStart(e) {
		this.ts.y = e.touches[0].clientY;
		this.ts.x = e.touches[0].clientX;
	}

	onTouchEnd(e) {
		let te = {
			x: e.changedTouches[0].clientX,
			y: e.changedTouches[0].clientY
		};
		let dx = this.ts.x - te.x,
			dy = this.ts.y - te.y;

		if(Math.abs(dx) >= Math.abs(dy)) {
			console.log(`X Dominant`);

			if(dx > 0) {
				console.log(`Swipe Left`);
			} else {
				console.log(`Swipe Right`);
			}
		} else {
			console.log(`Y Dominant`);

			if(dy > 0) {
				console.log(`Swipe Up`);
			} else {
				console.log(`Swipe Down`);
			}
		}
	}
}