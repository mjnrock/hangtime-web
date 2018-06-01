import React, { Component } from 'react';

import Helper from "../../../../Helper";

import { Emblem } from "./Emblem";

export class Rating extends Component {
	render() {
		const { stax, pax, value, label = "", min = 1, max = 5, set = Helper.Enum.RatingSet.STAR, ...rest } = this.props;
		console.log(pax);

		let rating = Math.round(+value * 2.0) / 2.0,
			ceiling = Math.ceil(rating),
			icons = [];

		for(let i = +min; i <= +max; i++) {
			let icon;
			if(i <= ceiling) {
				if(rating - i >= 0) {
					icon = Helper.GenerateIcon(set.Icons.Full);
				} else if(rating - i < 0) {
					icon = Helper.GenerateIcon(set.Icons.Half);
				}
			} else {
				icon = Helper.GenerateIcon(set.Icons.Empty);
			}

			icons.push(icon);
		}

		return (
			<Emblem
				stax="rating"
				pax={ `${!!pax ? pax : ""}` }
				{ ...rest }
			>
				<span stax="rating-label">{ label }</span>
				<div pax="flex-p">
				{
					icons.map((v, i) => React.cloneElement(
						v,
						{
							key: i,
							stax: "icon-rating"
						}
					))
				}
				</div>
				<span stax="rating-value">{ (+value).toFixed(1) }</span>
			</Emblem>
		);
	}
}