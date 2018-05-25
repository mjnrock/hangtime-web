<StaxPax.Components.Card.Element.Pane.Pane cols="v">
	{
		[1,2,3,4].map((v, i) => (
			<StaxPax.Components.Card.Element.Emblem.UserIcon
				username="MrFancypants"
			/>
		))
	}
</StaxPax.Components.Card.Element.Pane.Pane>

<StaxPax.Components.Card.Segment.Options>
	<StaxPax.Components.Card.Element.Pane.Pane type="p" cols="2" style={{
	border: "none",
	boxShadow: "none",
	margin: 2
}}>
		<StaxPax.Components.Card.Element.Button.Beep pax="--red" />
		<StaxPax.Components.Card.Element.Button.SendMessage pax="--red" />
		<StaxPax.Components.Card.Element.Button.JoinRequest pax="--red" />
	</StaxPax.Components.Card.Element.Pane.Pane>
</StaxPax.Components.Card.Segment.Options>

<StaxPax.Components.Card.Element.Pane.Pane cols="1">
	<StaxPax.Components.Card.Element.Emblem.Rating
		value="2.5"
		label="Cooperation"
	/>
	<StaxPax.Components.Card.Element.Emblem.Rating
		value="4"
		label="Skill"
	/>
</StaxPax.Components.Card.Element.Pane.Pane>