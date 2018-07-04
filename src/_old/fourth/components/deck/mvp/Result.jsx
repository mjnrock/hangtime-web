import React, { Component } from "react";
import moment from "moment";

export class Result extends Component {
	constructor(props) {
		super(props);

		this.intervals = [];
	}
	componentDidMount(props) {
		if(this.intervals.length === 0) {
			this.intervals.push(setInterval(this.UpdateTimeRemaining.bind(this), 500));
		}
	}
	componentWillUnmount() {
		this.intervals.forEach( v => clearInterval(v));
	}

	UpdateTimeRemaining() {
		if(!!this.props) {
			let seconds = moment(this.props.data.EndDateTimeUTC).diff(moment().utc(), "second"),
				minutes = Math.floor(seconds / 60);

			this.setState({
				...this.props.state,
				TimeRemaining: {
					Minutes: minutes,
					Seconds: seconds,
					Formatted: `${minutes}:${(seconds - (minutes * 60)).toString().padStart(2, "0")}`
				}
			});
		}
	}

	render() {
		let data = this.props.data;

		return (
			<div className="card">
				<div className="card-header">
				
				</div>
				<div className="card-content">
					<div className="bevel-top">

					</div>
					<div className="metrics segment">
						<div className="metric">
							<span className="value">
								14.8
							</span>
							<span className="label">
								mi
							</span>
						</div>
						<div className="metric">					
							<object
								className="icon-activity"
								data="/assets/images/basketball.svg"
								type="image/svg+xml"
							>Basketball Icon</object>
						</div>
						<div className="metric">
							<span className="value">
								{
									!!this.state ? this.state.TimeRemaining.Formatted : "N/A"
								}
							</span>
							<span className="label">
								remaining
							</span>
						</div>
					</div>
					<div className="panel segment">
						<div className="panel-inner">
							<h1>{ data.Title }</h1>
						</div>
					</div>
					<div className="panel panel-map segment">
						<img className="map" src="/assets/images/map.png" alt="map" />
					</div>
					<div className="text-generic segment">
						{ data.Description }
					</div>
					<div className="tags segment">
						{
							!!data.Tags ? data.Tags.split(",").map((v, i) => {
								return (
									<div
										key={ i }
										className="tag"
									>
										{ v.replace("-", " ") }
									</div>
								);
							}) : ""
						}
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