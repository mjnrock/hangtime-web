import React, { Component } from "react";

export class BroadcastBar extends Component {
	render() {		
		return (
			<div className="broadcastBar">
				<button className="broadcastBar-btnBroadcastGame">
					<i>Basketball</i>
					<span>Broadcast Game</span>
				</button>

				<div className="broadcastBar-remaining">
					<span className="broadcastBar-value">
						XX:XX
					</span>
					<span className="broadcastBar-label">
						Broadcasting
					</span>
				</div>
				<div className="broadcastBar-add30">
					<span className="broadcastBar-value">
						30m
					</span>
					<span className="broadcastBar-label">
						Add
					</span>
				</div>
				<div className="broadcastBar-add60">
					<span className="broadcastBar-value">
						1h
					</span>
					<span className="broadcastBar-label">
						Add
					</span>
				</div>
				<div className="broadcastBar-startStop">
					<span className="broadcastBar-value">
						{ 0 === 1 ? "StartIcon" : "StopIcon"}
					</span>
					<span className="broadcastBar-label broadcastBar-startStop-start broadcastBar-startStop-stop">
						{ 0 === 1 ? "Start" : "Stop"}
					</span>
				</div>
			</div>
		);
	}
}