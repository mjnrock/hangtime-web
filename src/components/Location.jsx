/* eslint-disable */
import React from "react";
import { Segment, Placeholder, Header } from "semantic-ui-react";

export default function Location(props) {
    return (
        <Segment>
            <Header as="h2">Location</Header>

            <Placeholder style={ { height: 150, width: 150 } }>
                <Placeholder.Image />
            </Placeholder>
        </Segment>
    );
}