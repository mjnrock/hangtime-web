import React, { Component } from "react";

export class Viewer extends Component {
    constructor(props) {
        super(props);

        this.ViewPort = {
            Width: window.innerWidth,
            Height: window.innerHeight,
            Position: {
                Top: 0,
                Left: 0
            },
            Scale: 1.0
        };

        this.Touch = {
            Last: {
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
        window.addEventListener("touchstart", this.onTouchStart.bind(this), false);
    }

    GetDimensions() {
        this.ViewPort.Width = window.innerWidth;
        this.ViewPort.Height = window.innerHeight;
    }

    //  Currently using the e.touches array to only capture 1 touch (i.e. the last touch)
    onTouchStart(e) {
        this.Touch.Last.X = e.touches[0].clientX;
        this.Touch.Last.Y = e.touches[0].clientY;
        console.log(this.Touch);

		e.preventDefault();
    }
}