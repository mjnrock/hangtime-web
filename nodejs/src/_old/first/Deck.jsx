import React, { Component } from 'react';
import * as Shake from "shake.js";

import { Card } from "./Card";
import { call } from 'redux-saga/effects';

//	Access the attributes of the touched element
// console.log(+e.touches[0].target.attributes["ht-x"].value);

export class Deck extends Component {
	render() {
		return (
			<div
				ht="deck"
			>
				{
					this.props.children
				}
			</div>
		);
	}

	SortDeck(card) {
		let cards = {};
		this.props.children.forEach((card, i) => {
			if(cards[card.props.x] === null) {
				cards[card.props.x] = {};
			}

			cards[card.props.x][card.props.y] = card;
		});
	}
}