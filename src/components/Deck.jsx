import React, { Component } from 'react';
import * as Shake from "shake.js";

import { Card } from "./Card";

//	Access the attributes of the touched element
// console.log(+e.touches[0].target.attributes["ht-x"].value);

export class Deck extends Component {
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
		this.c = {
			timestamp: 0,
			count: 0,
			threshold: 250
		};
		
		this.config = {
			speed: {
				swipe: 150,
				shake: 500
			},
			margin: 10
		};
		this.config.width = window.innerWidth - this.config.margin * 2;
		this.config.height = window.innerHeight - this.config.margin * 2;

		this.Deck = {
			bounds: {
				max: {
					x: 0,
					y: 0
				},
				min: {
					x: 0,
					y: 0
				},
			},
			Cards: null
		};
		this.Deck.Cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => {
			let x = i,
				y = 0;

			//	Find x & y maxima
			if(x > this.Deck.bounds.max.x) {
				this.Deck.bounds.max.x = x;
			}
			if(x < this.Deck.bounds.min.x) {
				this.Deck.bounds.min.x = x;
			}
			if(y > this.Deck.bounds.max.y) {
				this.Deck.bounds.max.y = y;
			}
			if(y < this.Deck.bounds.min.y) {
				this.Deck.bounds.min.y = y;
			}

			return (
				<Card
					key={ x + (x * y) }
					calcPos={ this.calculatePosition.bind(this) }
					ht-height={ this.config.height }
					ht-width={ this.config.width }
					ht-margin={ this.config.margin }
					ht-x={ x }
					ht-y={ y }
					ht-title={ `${x},${y}` }
				/>
			);
		});
	}

	componentDidMount() {
		let shakeEvent = new Shake({
			threshold: 15,
			timeout: 1000
		});
		shakeEvent.start();
		window.addEventListener('shake', this.onShake.bind(this), false);

		window.addEventListener('click', this.onClick.bind(this), false);

		window.addEventListener('scroll', this.onScroll.bind(this), false);
		window.addEventListener('mousewheel', this.onScroll.bind(this), false);
		window.addEventListener("DOMMouseScroll", this.onScroll.bind(this), false);
	}

	calculatePosition(x, y) {
		return {
			x: x * (this.config.width + this.config.margin) + this.config.margin,
			y: y * (this.config.height + this.config.margin) + this.config.margin
		};
	}

	render() {
		return (
			<section
				ht-deck="1"
				onTouchStart={ e => this.onTouchStart(e) }
				onTouchEnd={ e => this.onTouchEnd(e) }
			>
				{
					this.Deck.Cards
				}
			</section>
		);
	}

	onClick(e, pos = null) {
		if(pos !== null) {
			//?	Receive touch position from touch event
			//	By proxy, this scope block means the event was fired from a touch event, not a click event
			// let te = {
			// 	x: e.changedTouches[0].clientX,
			// 	y: e.changedTouches[0].clientY
			// };
			// console.log(te);
		}

		//TODO	Currently checks the total for threshold (original), but should check that the time delta between ANY two clicks is within a threshold
		//	Turn this into a time-gated combo (i.e. to continue "clicking up the count", each SUCCESSIVE click must be within the treshold, INSTEAD OF the whole sequence)
		//	This needs to be done because the high threshold allows for an inordinately long double-click window
		if(this.c.timestamp + this.c.threshold < Date.now()) {
			this.c.timestamp = Date.now();
			this.c.count = 0;
		}
		++this.c.count;

		if(this.c.count === 1) {
			console.log("Single Click");
		} else if(this.c.count === 2) {
			console.log("Double Click");
		} else if(this.c.count === 3) {
			console.log("Triple Click");
		}
		e.preventDefault();
	}

	onScroll(e) {
		e.preventDefault();
	}

	onShake(e) {
		this.position.x = this.Deck.bounds.min.x;
		this.position.y = this.Deck.bounds.min.y;
		this.scrollTo((this.config.width + this.config.margin) * this.position.x, (this.config.height + this.config.margin) * this.position.y, this.config.speed.shake);
		e.preventDefault();
	}

	onTouchStart(e) {
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
			
		//? Invoke the onClick handler
		//	this.onClick(e, te);

		if(Math.abs(dx) > this.ts.threshold.x || Math.abs(dy) > this.ts.threshold.y) {
			//TODO These position modifications needs to be clamped and moved to state
			if(Math.abs(dx) > Math.abs(dy)) {	
				if(dx > 0) {	//	Swipe Left
					this.position.x = this.clamp(this.position.x + 1, this.Deck.bounds.min.x, this.Deck.bounds.max.x);
				} else {	//	Swipe Right
					this.position.x = this.clamp(this.position.x - 1, this.Deck.bounds.min.x, this.Deck.bounds.max.x);
				}
			} else {	
				if(dy > 0) {	//	Swipe Up
					this.position.y = this.clamp(this.position.y + 1, this.Deck.bounds.min.y, this.Deck.bounds.max.y);
				} else {	//	Swipe Down
					this.position.y = this.clamp(this.position.y - 1, this.Deck.bounds.min.y, this.Deck.bounds.max.y);
				}
			}

			this.scrollTo((this.config.width + this.config.margin) * this.position.x, (this.config.height + this.config.margin) * this.position.y, this.config.speed.swipe);
		}
		e.preventDefault();
	}
}