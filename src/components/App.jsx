import React, { Component } from "react";
import { connect } from "react-redux";

import * as Messages from "../actions/Messages";
import { Card } from "./Card";

class App extends Component {
	constructor(props) {
		super(props);

		this.position = {
			x: 0,
			y: 0
		};

		this.ts = {
			x: 0,
			y: 0,
			threshold: {
				x: 50,
				y: 50
			},
			element: {
				htx: 0,
				hty: 0
			}
		};
		
		this.config = {
			margin: 10
		};
		this.config.width = window.innerWidth - this.config.margin * 2;
		this.config.height = window.innerHeight - this.config.margin * 2;
	}

	calculatePosition(x, y) {
		return {
			x: x * (this.config.width + this.config.margin) + this.config.margin,
			y: y * (this.config.height + this.config.margin) + this.config.margin
		};
	}

	render() {
		return (
			<div
				className="ht-container"
				onTouchStart={ e => this.onTouchStart(e) }
				onTouchEnd={ e => this.onTouchEnd(e) }
			>
			{
				[0, 1, 2].map((v, i) => {
					return [0, 1, 2].map((u, j) => {
						return <Card key={ j + (i * j) } calcPos={ this.calculatePosition.bind(this) } ht-height={ this.config.height } ht-width={ this.config.width } ht-margin={ this.config.margin } ht-x={ i } ht-y={ j } ht-title={ `${i},${j}` } />
					})	
				})
			}
			</div>
		);
	}

	onTouchStart(e) {
		// console.log(+e.touches[0].target.attributes["ht-x"].value);
		// console.log(+e.touches[0].target.attributes["ht-y"].value);

		this.ts.y = e.touches[0].clientY;
		this.ts.x = e.touches[0].clientX;
		e.preventDefault();
	}

	clamp(number, min, max) {
		return Math.min(Math.max(number, min), max);
	}

	easeInOutQuad(t, b, c, d) {
		t /= d/2;
		if (t < 1) return c/2*t*t + b;
		t--;
		return -c/2 * (t*(t-2) - 1) + b;
	}

	scrollTo(x, y, duration) {
		let start = {
				x: window.scrollX,
				y: window.scrollY
			},
			change = {
				x: x - start.x,
				y: y - start.y
			},
			currentTime = 0,
			increment = 10;
			
		let animateScroll = function() {        
			currentTime += increment;

			let val = {
				x: this.easeInOutQuad(currentTime, start.x, change.x, duration),
				y: this.easeInOutQuad(currentTime, start.y, change.y, duration)
			}
			window.scrollTo(val.x, val.y);

			if(currentTime < duration) {
				setTimeout(animateScroll, increment);
			}
		}.bind(this);
		animateScroll();
	}

	onTouchEnd(e) {
		let te = {
			x: e.changedTouches[0].clientX,
			y: e.changedTouches[0].clientY
		};
		let dx = this.ts.x - te.x,
			dy = this.ts.y - te.y;

		if(Math.abs(dx) > this.ts.threshold.x || Math.abs(dy) > this.ts.threshold.y) {
			//	These position modifications needs to be clamped and moved to state
			if(Math.abs(dx) > Math.abs(dy)) {	
				if(dx > 0) {	//	Swipe Left
					this.position.x = this.clamp(this.position.x + 1, 0, 2);
				} else {	//	Swipe Right
					this.position.x = this.clamp(this.position.x - 1, 0, 2);
				}
			} else {	
				if(dy > 0) {	//	Swipe Up
					this.position.y = this.clamp(this.position.y + 1, 0, 2);
				} else {	//	Swipe Down
					this.position.y = this.clamp(this.position.y - 1, 0, 2);
				}
			}

			this.scrollTo((this.config.width + this.config.margin) * this.position.x, (this.config.height + this.config.margin) * this.position.y, 150);
		}
		e.preventDefault();
	}
}

export default connect(
	(state) => {
		return {
			messages: state.messages
		};
	},
	(dispatch) => {
		return {
			GetMessages: (arg) => dispatch(Messages.GetMessages(arg))
		};
	}
)(App);