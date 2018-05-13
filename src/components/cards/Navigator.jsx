import React, { Component } from 'react';

export class Navigator extends Component {
	constructor(props) {
		super(props);
		
		this.Config = {
			Width: window.innerWidth,
			Height: window.innerHeight,
			Scale: {
				Width: 1,
				Height: 1
			},
			Speed: {
				Swipe: {
					DEFAULT: 150
				},
				Shake: {
					DEFAULT: 500
				}
			}
		};
		
		this.Events = {
			Touch: {
				LastEvent: {
					X: 0,
					Y: 0
				},
				Threshold: {
					X: 50,
					Y: 50
				}
			}
		}

		this.Viewport = {
			Position: {
				X: 0,
				Y: 0
			},
			Margin: {
				Top: 10,
				Right: 10,
				Left: 10,
				Bottom: 0
			},
		}
	}

	render() {
		return (
			<div
				ht="navigator"
			>
				{
					this.props.children
				}
			</div>
		);
	}
}