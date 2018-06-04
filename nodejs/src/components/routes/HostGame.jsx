import React, { Component } from "react";

export class HostGame extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				Game 
				{ this.props.match.params.uuid }
				<i>{ this.props.icon }</i>
				<span>{ this.props.text }</span>
			</div>
		);
	}
}