import React, { Component } from 'react';
import * as Shake from "shake.js";

import { Card } from "./Card";
import { call } from 'redux-saga/effects';

//	Access the attributes of the touched element
// console.log(+e.touches[0].target.attributes["ht-x"].value);

export class Deck extends Component {
	//	React Methods
//region
	constructor(props) {
		super(props);
		console.log(this);
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

		this.Grid = {
			Size: [],
			Rows: {
				H: 0.5,
				F: 1,
				E: 2
			},
			Position: {
				X: 0,
				Y: 0
			},
			Cards: [],
			References: {}
		};

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
		
		window.addEventListener('scroll', this.onScroll.bind(this), false);
		window.addEventListener('mousewheel', this.onScroll.bind(this), false);
		window.addEventListener("DOMMouseScroll", this.onScroll.bind(this), false);

		this.Grid.Size = this.Grid.Cards.map((v, j) => {
				return v.map((w, i) => {
					return w.props.calcSize(w);
				}
			)}
		);
		console.log(this.Grid);
	}

	render() {
		console.log(1);
		this.Grid.Cards = [0, 1, 2].map((v, j) => {
			return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => {
				let x = i,
					y = j;

				return (
					<Card
						key={ x + (x * y) }
						x={ x }
						y={ y }
						t="s"
						st={ j === 0 ? "h" : (j === 1 ? "f" : "e") }
						calcSize={ this.calcSize.bind(this) }
						calcPosition={ this.calcPosition.bind(this) }
						content={ <span>{ `${x},${y}` }</span> }
						init={ this.onCardMount.bind(this) }
					/>
				);
			});
		});

		return (
			<section
				ht="deck"
			>
				{
					this.Grid.Cards
				}
			</section>
		);
	}
//endregion


	//	Events
//region
	//		Scroll
	//region
	onScroll(e) {
		let card = this.Grid.References[this.resolveName(this.Grid.Position.X, this.Grid.Position.Y)];
		if(card.props.st === "e") {

		} else {
			e.preventDefault();
		}
	}
	//endregion

	//		Shake
	//region
	onShake(e) {
		this.Grid.Position.X = this.config.bounds.min.x;
		this.Grid.Position.Y = this.config.bounds.min.y;
		this.scrollTo((this.config.width + this.config.margin) * this.Grid.Position.X, (this.config.height + this.config.margin) * this.Grid.Position.Y, this.config.speed.shake);
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
					this.Grid.Position.X = this.clamp(this.Grid.Position.X + 1, this.config.bounds.min.x, this.config.bounds.max.x);
				} else {	//	Swipe Right
					this.Grid.Position.X = this.clamp(this.Grid.Position.X - 1, this.config.bounds.min.x, this.config.bounds.max.x);
				}
			} else {	
				if(dy > 0) {	//	Swipe Up
					this.Grid.Position.Y = this.clamp(this.Grid.Position.Y + 1, this.config.bounds.min.y, this.config.bounds.max.y);
				} else {	//	Swipe Down
					this.Grid.Position.Y = this.clamp(this.Grid.Position.Y - 1, this.config.bounds.min.y, this.config.bounds.max.y);
				}
			}
			let card = this.Grid.References[this.resolveName(this.Grid.Position.X, this.Grid.Position.Y)],
				// tneighbor = this.Grid.References[this.resolveName(this.Grid.Position.X, this.Grid.Position.Y - 1)],
				// bneighbor = this.Grid.References[this.resolveName(this.Grid.Position.X, this.Grid.Position.Y + 1)],
				pos = this.calcPosition(card);
			
			this.scrollTo(
				pos.left - this.config.margin,
				pos.top - this.config.margin,
				this.config.speed.swipe
			);
		}
		e.preventDefault();
	}
	//endregion
//endregion


	//	Deck
//region
	onCardMount(caller) {
		this.Grid.References[this.resolveName(caller.props.x, caller.props.y)] = caller;
	}
	resolveName(x, y = null) {
		if(typeof arguments[0] === "object") {	// Overload for convenience, `arguments` for aiding readability of the overload
			return `${arguments[0].x}.${arguments[0].y}`
		}

		return `${x}.${y}`
	}

	updateBounds() {
		this.Grid.Cards.forEach((v, i) => {
			v.forEach((v, j) => {
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
		});

		return this;
	}

	setDeck(cards) {
		this.Grid.Cards = cards;

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
				height *= this.Grid.Rows.H;
			} else if(caller.props.st === "e") {
				height *= this.Grid.Rows.E;
			}
		}

		return {
			width: width - this.config.margin * 2,
			height: height - this.config.margin * 2
		}
	}
	//! protected: should only be called by Card
	calcPosition(caller) {
		if(this.Grid.Size.length > 0) {
			let y0 = this.Grid.Size.reduce((a, v, i) => {
				console.log(v);

				return a + v;
			});
			console.log(`y0: ${y0}`);

			let width = this.config.width,
				height = this.config.height;

			let pos = {
				left: caller.props.x * (width + this.config.margin) + this.config.margin,
				top:caller.props.y * (height + this.config.margin)
			};

			if(caller.props.t === "s") {
				if(caller.props.st === "h") {
					return {
						left: pos.left,
						top: pos.top + this.config.margin * 2
					}
				}
				if(caller.props.st === "e") {
					return {
						left: pos.left,
						top: pos.top - this.config.margin
					}
				}
			}

			return pos;
		}

		return {
			left: 0,
			top: 0
		};
	}

	getCard(index) {
		return this.Grid.Cards[index];
	}
	addCard(card, index = -1) {
		if(index === -1) {
			this.Grid.Cards.push(card);
		} else {
			this.Grid.Cards.splice(index, 0, card);
		}

		return this;
	}	
	setCard(card, index) {
		if(index > -1) {
			this.Grid.Cards[index] = card;
		}

		return this;
	}
	removeCard(index) {
		if(index > -1) {
			this.Grid.Cards.splice(index, 1);
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


	//	Grid
//region
	getNeighbors(x, y) {
		let dirs = [
			[0, -1],	// North
			[1, 0],		// East
			[0, 1],		// South
			[-1, 0]		// West
		];

		return {
			N: this.Grid.References[this.resolveName(`${x + dirs[0][0]},${y + dirs[0][1]}`)],
			E: this.Grid.References[this.resolveName(`${x + dirs[1][0]},${y + dirs[1][1]}`)],
			S: this.Grid.References[this.resolveName(`${x + dirs[2][0]},${y + dirs[2][1]}`)],
			W: this.Grid.References[this.resolveName(`${x + dirs[3][0]},${y + dirs[3][1]}`)]
		};
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