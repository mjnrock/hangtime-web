import React from "react";

import Components from "../components";

export class Card {
	constructor(synopsis) {
		this.MountSynopsis(synopsis);
	}

	static Generate() {
		return (
			<Components.Card.Card>
				This is a Card
				<Components.Card.Segment.Synopsis>
					This is the Synopsis
				</Components.Card.Segment.Synopsis>
			</Components.Card.Card>
		)
	}

	MountSynopsis(tag) {
		this.Options = tag;

		return this;
	}
	UnmountSynopsis() {
		this.Options = null;

		return this;
	}
}