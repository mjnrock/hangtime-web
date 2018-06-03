import React, { Component } from "react";

export class Viewer extends Component {
    constructor(props) {
        super(props);

        this.ViewPort = {
			Margin: 10,
            Width: window.innerWidth,
            Height: window.innerHeight,
            Position: {
                Top: 0,
                Left: 0
            },
            Scale: 1.0,
            Speed: {
                Swipe: 150,
                Shake: 500
            }
        };

        this.Touch = {
            Last: {
                Element: null,
                X: 0,
                Y: 0
            },
            Threshold: {
                X: 50,
                Y: 50
            }
        };

        this.InitializeEventListeners();
    }

	componentDidUpdate(props) {
        let pos = this.CalculatePosition(props.state.Position.X, props.state.Position.Y);
		this.scrollTo(pos.X, pos.Y, this.ViewPort.Speed.Swipe);
	}
    
	render() {
		return (
			<div
				className={ `sp-viewer ${!!this.props.className ? this.props.className : ""}`}
			>
				{ this.props.children }
			</div>
		);
	}

    InitializeEventListeners() {
		window.addEventListener('touchstart', this.onTouchStart.bind(this), false);
		window.addEventListener('touchend', this.onTouchEnd.bind(this), false);
    }

    GetDimensions() {
        this.ViewPort.Width = window.innerWidth;
        this.ViewPort.Height = window.innerHeight;
    }
    CalculatePosition(x, y) {
		return {
			X: x * (this.ViewPort.Width + this.ViewPort.Margin) + this.ViewPort.Margin,
			Y: y * (this.ViewPort.Height + this.ViewPort.Margin) + this.ViewPort.Margin
		};
	}

    //  Currently using the e.touches array to only capture 1 touch (i.e. the last touch)
    onTouchStart(e) {
        this.Touch.Last.X = e.touches[0].clientX;
        this.Touch.Last.Y = e.touches[0].clientY;

		e.preventDefault();
    }    
	onTouchEnd(e) {
		let te = {
			x: e.changedTouches[0].clientX,
			y: e.changedTouches[0].clientY
		};
		let dx = this.Touch.Last.X - te.x,
            dy = this.Touch.Last.Y - te.y;

		if(Math.abs(dx) > this.Touch.Threshold.X || Math.abs(dy) > this.Touch.Threshold.Y) {
			if(Math.abs(dx) > Math.abs(dy)) {	
				if(dx > 0) {	//	Swipe Left
                    this.props.state.MovePosition(
                        this.props.state.Position.X + 1,
                        this.props.state.Position.Y
                    );
				} else {	//	Swipe Right
                    this.props.state.MovePosition(
                        this.props.state.Position.X - 1,
                        this.props.state.Position.Y
                    );
				}
			} else {	
				if(dy > 0) {	//	Swipe Up
                    this.props.state.MovePosition(
                        this.props.state.Position.X,
                        this.props.state.Position.Y + 1
                    );
                } else {	//	Swipe Down
                    this.props.state.MovePosition(
                        this.props.state.Position.X,
                        this.props.state.Position.Y - 1
                    );
				}
			}
		}
		e.preventDefault();
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
}