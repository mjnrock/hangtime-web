/* eslint-disable */
import React from "react";
import { Segment, Search as SUISearch, Header } from "semantic-ui-react";

export default function Search(props) {
    return (
        <Segment>
            <Header as="h2">Activity</Header>
            <SUISearch />

            <Segment>
                <div>{ props.children }</div>
            </Segment>
        </Segment>
    );
}