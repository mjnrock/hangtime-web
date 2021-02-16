/* eslint-disable */
import React from "react";
import { Segment, Header, Input } from "semantic-ui-react";

export default function DateTimePicker(props) {
    return (
        <Segment>
            <Header as="h2">Start</Header>
            <Input type="datetime-local" />

            <Header as="h2">End</Header>
            <Input type="datetime-local" />
        </Segment>
    );
}