import React, { Component } from "react";

export class BroadcastBar extends Component {
	render() {		
		return (
			<div className="broadcast">
				<button>
					<span className="broadcast-value broadcast-remaining">
						59:59
					</span>
					<span className="broadcast-unit o-70">
						Remaining
					</span>
				</button>
				
				<button>
					<span className="broadcast-value">
						30m
					</span>
					<span className="broadcast-unit">
						Add
					</span>
				</button>
				
				<button>
					<span className="broadcast-value">
						1h
					</span>
					<span className="broadcast-unit">
						Add
					</span>
				</button>
				
				<button className="broadcast-startStop">
					<span className="broadcast-value">
						<i className="icon-broadcast-start"></i>
					</span>
					<span className="broadcast-unit">
						{ 1 === 0 ? "Start" : "Stop" }
					</span>
				</button>

				{/* <button className="broadcast-begin">
					<i className="icon-broadcast-start"></i>
					<span>Broadcast Game</span>
				</button> */}
			</div>
		);
	}
}