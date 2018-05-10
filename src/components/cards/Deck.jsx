import React, { Component } from 'react';
import * as Shake from "shake.js";

import { Card } from "./Card";

//	Access the attributes of the touched element
// console.log(+e.touches[0].target.attributes["ht-x"].value);

export class Deck extends Component {
	//	React Methods
//region
	constructor(props) {
		super(props);

		this.config = {
			margin: 10,
			width: window.innerWidth,
			height: window.innerHeight,
			speed: {
				swipe: 150,
				shake: 500
			},
			bounds: {
				min: {
					x: 0,
					y: 0
				},
				max: {
					x: 0,
					y: 0
				}
			}
		};
		this.position = {
			x: 0,
			y: 0
		};
		this.events = {
			touch: {
				x: 0,
				y: 0,
				threshold: {
					x: 50,
					y: 50
				}
			}
		}

		this.References = {};
		this.Cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => {
			let x = i,
				y = 0;

			return (
				<Card
					key={ x + (x * y) }
					x={ x }
					y={ y }
					t="s"
					st="f"
					calcSize={ this.calcSize.bind(this) }
					calcPosition={ this.calcPosition.bind(this) }
					content={ <span>{ `${x},${y}` }</span> }
					init={ this.onCardMount.bind(this) }
				/>
			);
		});

		this.updateBounds();
	}

	componentDidMount() {
		let shakeEvent = new Shake({
			threshold: 15,
			timeout: 1000
		});
		shakeEvent.start();
		window.addEventListener('shake', this.onShake.bind(this), false);

		window.addEventListener('touchstart', this.onTouchStart.bind(this), false);
		window.addEventListener('touchend', this.onTouchEnd.bind(this), false);
	}

	render() {
		return (
			<section
				ht="deck"
			>
				{
					this.Cards
				}
			</section>
		);
	}
//endregion


	//	Events
//region
	//		Shake
	//region
	onShake(e) {
		this.position.x = this.config.bounds.min.x;
		this.position.y = this.config.bounds.min.y;
		this.scrollTo((this.config.width + this.config.margin) * this.position.x, (this.config.height + this.config.margin) * this.position.y, this.config.speed.shake);
		e.preventDefault();
	}
	//endregion

	//		Touch
	//region
	onTouchStart(e) {
		this.events.touch.y = e.touches[0].clientY;
		this.events.touch.x = e.touches[0].clientX;
		e.preventDefault();
	}
	onTouchEnd(e) {
		let te = {
			x: e.changedTouches[0].clientX,
			y: e.changedTouches[0].clientY
		};
		let dx = this.events.touch.x - te.x,
			dy = this.events.touch.y - te.y;

		if(Math.abs(dx) > this.events.touch.threshold.x || Math.abs(dy) > this.events.touch.threshold.y) {
			//TODO This code needs to be more robust to move according to Card size (e.g. don't full move if move is to a st=h)
			if(Math.abs(dx) > Math.abs(dy)) {	
				if(dx > 0) {	//	Swipe Left
					this.position.x = this.clamp(this.position.x + 1, this.config.bounds.min.x, this.config.bounds.max.x);
				} else {	//	Swipe Right
					this.position.x = this.clamp(this.position.x - 1, this.config.bounds.min.x, this.config.bounds.max.x);
				}
			} else {	
				if(dy > 0) {	//	Swipe Up
					this.position.y = this.clamp(this.position.y + 1, this.config.bounds.min.y, this.config.bounds.max.y);
				} else {	//	Swipe Down
					this.position.y = this.clamp(this.position.y - 1, this.config.bounds.min.y, this.config.bounds.max.y);
				}
			}

			this.scrollTo((this.config.width + this.config.margin) * this.position.x, (this.config.height + this.config.margin) * this.position.y, this.config.speed.swipe);
		}
		e.preventDefault();
	}
	//endregion
//endregion


	//	Deck
//region
	onCardMount(caller) {
		this.References[this.resolveName(caller.props.x, caller.props.y)] = caller;
	}
	resolveName(x, y = null) {
		if(typeof arguments[0] === "object") {	// Overload for convenience, `arguments` for readability
			return `${arguments[0].x}.${arguments[0].y}`
		}

		return `${x}.${y}`
	}

	updateBounds() {
		this.Cards.forEach((v, i) => {
			let x = v.props.x,
				y = v.props.y;

			if(x > this.config.bounds.max.x) {
				this.config.bounds.max.x = x;
			}
			if(x < this.config.bounds.min.x) {
				this.config.bounds.min.x = x;
			}
			if(y > this.config.bounds.max.y) {
				this.config.bounds.max.y = y;
			}
			if(y < this.config.bounds.min.y) {
				this.config.bounds.min.y = y;
			}
		});

		return this;
	}

	setDeck(cards) {
		this.Cards = cards;

		return this;
	}
//endregion


	//	Cards
//region
	//! protected: should only be called by Card
	calcSize(caller) {
		let width = this.config.width,
			height = this.config.height;

		if(caller.props.t === "s") {
			if(caller.props.st === "h") {
				height /= 2;
				height += (this.config.margin / 2);
			} else if(caller.props.st === "e") {
				height *= 2;
			}
		}

		return {
			width: width - this.config.margin * 2,
			height: height - this.config.margin * 2
		}
	}
	//! protected: should only be called by Card
	calcPosition(caller) {
		let pos = {
			left: caller.props.x * (this.config.width + this.config.margin) + this.config.margin,
			top: caller.props.y * (this.config.height + this.config.margin) + this.config.margin
		};

		if(caller.props.t === "s") {
			if(caller.props.st === "h" && caller.props.y % 2 !== 0) {
				return {
					left: pos.left,
					top: pos.top - this.config.margin
				}
			}
		}

		return pos;
	}

	getCard(index) {
		return this.Cards[index];
	}
	addCard(card, index = -1) {
		if(index === -1) {
			this.Cards.push(card);
		} else {
			this.Cards.splice(index, 0, card);
		}

		return this;
	}	
	setCard(card, index) {
		if(index > -1) {
			this.Cards[index] = card;
		}

		return this;
	}
	removeCard(index) {
		if(index > -1) {
			this.Cards.splice(index, 1);
		}

		return this;
	}
//endregion


	//	Viewport
//region
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
//endregion


	//	Helper
//region
	clamp(number, min, max) {
		return Math.min(Math.max(number, min), max);
	}
	easeInOutQuad(t, b, c, d) {
		t /= d / 2;
		if (t < 1) {
			return c / 2 * t * t + b;
		}
		--t;

		return -c / 2 * (t * (t - 2) - 1) + b;
	}
//endregion
}