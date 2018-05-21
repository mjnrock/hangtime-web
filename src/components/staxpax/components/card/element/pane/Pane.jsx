import React, { Component } from 'react';

export class Pane extends Component {
	render() {
		const { children, cols, type, ...rest } = this.props;
		
		return (
			<div
				stax="pane"
				pax={ `flex-${!!cols ? cols : 1} ${type === "f" ? "pane-f" : "pane-p"}` }
				{ ...rest }
			>
			{
				children !== void 0 && children !== null && children.length > 1 ? children.map((v, i) => {
					let base = 2,
						{ cols } = this.props;

					if(cols !== void 0 && cols !== null) {
						base = cols;
					}

					return React.cloneElement(
						v,
						{
							key: i,
							pax: `flex-${base}${!!v.props["pax"] ? ` ${v.props["pax"]}` : ""}`
						}
					);
				}) : children
			}
			</div>
		);
	}
}