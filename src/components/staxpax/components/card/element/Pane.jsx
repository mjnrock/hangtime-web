import React, { Component } from 'react';

export class Pane extends Component {
	componentDidMount() {
		console.log(this.props.children);
	}
	render() {
		const { type, ...rest } = this.props;
		return (
			<div
				stax="pane"
				pax={ type === "f" ? "pane-f" : "pane-p"}
				{ ...rest }
			>
			{
				this.props.children
				// this.props.children.map((v, i) => {
				// 	let cols = 3;
				// 	if(this.props["cols"] !== void 0 && this.props["cols"] !== null) {
				// 		cols = this.props["cols"];
				// 	}

				// 	return React.cloneElement(
				// 		v,
				// 		{
				// 			pax: `${v.props["pax"]} flex-${cols}`
				// 		}
				// 	);
				// })
			}
			</div>
		);
	}
}