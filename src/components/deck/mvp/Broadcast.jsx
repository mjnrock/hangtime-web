import React, { Component } from "react";

export class Broadcast extends Component {
	render() {		
		return (
			<div className="card">
				<div className="card-header">

				</div>
				<div className="card-content">
					<div className="card-title">
						<object
							className="icon-activity"
							data="./assets/images/basketball.svg"
							type="image/svg+xml"
						>Basketball Icon</object>
						<h1>Broadcast</h1>
					</div>
					<div className="panel panel-map">
						<img className="map" src="./assets/images/map.png" alt="map" />
					</div>
					<div className="ht-input-group">
						<input
							placeholder="Game Title"
						/>
						<input
							placeholder="Comments"
						/>
						<textarea
							placeholder="Game Tags!  Add rules, interest, or filters (e.g. '2v2 3v3 5v5 beer-league 21')"
						/>
					</div>
				</div>
				<div className="card-footer">
					<div className="bevel-bottom">
						<svg xmlns="http://www.w3.org/2000/svg">
							<path d="M10 0H220L230 10H0L10 0Z" transform="translate(10 10) scale(1 -1)" fill="#E74232"/>
							<path d="M0 0H250L245 5H5L0 0Z" fill="white"/>
						</svg>
					</div>
				</div> 
			</div>
		);
	}
}