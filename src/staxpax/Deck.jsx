import React, { Component } from "react";

export class Deck extends Component {
	componentDidUpdate(props) {
		let deck = [];
		this.props.children.forEach((v, i) => {
			if(Array.isArray(v)) {
				v.forEach((av, ai) => {
					if(!Array.isArray(deck[av.props["deck-y"]])) {
						deck[av.props["deck-y"]] = [];
					}

					deck[av.props["deck-y"]][av.props["deck-x"]] = true;
				});
			} else {
				if(typeof v === "object") {
					if(!Array.isArray(deck[v.props["deck-y"]])) {
						deck[v.props["deck-y"]] = [];
					}

					deck[v.props["deck-y"]][v.props["deck-x"]] = true;
				}
			}
		});
		
		if(JSON.stringify(deck) !== JSON.stringify(this.props.Grid)) {
			this.props.SetGrid(deck);
		}
	}
	
	render() {
		return (
			<div
				className={ `sp-deck ${!!this.props.className ? this.props.className : ""}`}
			>
				{ this.props.children }
			</div>
		);
	}
}