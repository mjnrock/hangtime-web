import React, { Component } from "react";

export class Deck extends Component {
	componentDidUpdate(props) {
		let deck = [];
		this.props.children.forEach((v, i) => {
			if(Array.isArray(v)) {
				v.forEach((av, ai) => {
					if(!Array.isArray(deck[av.props["deck-x"]])) {
						deck[av.props["deck-x"]] = [];
					}

					deck[av.props["deck-x"]][av.props["deck-y"]] = true;
				});
			} else {
				if(typeof v === "object") {
					if(!Array.isArray(deck[v.props["deck-x"]])) {
						deck[v.props["deck-x"]] = [];
					}

					deck[v.props["deck-x"]][v.props["deck-y"]] = true;
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