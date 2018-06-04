import React, { Component } from "react";

export class Host extends Component {
	render() {
		return (
			<div>
				Host 
				{ this.props.match.params.code }
				<i>{ this.props.icon }</i>
				<span>{ this.props.text }</span>
			</div>
		);
	}
}