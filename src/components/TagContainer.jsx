/* eslint-disable */
import React from "react";
import { Segment, Label, Icon, Header } from "semantic-ui-react";

export default function TagContainer(props) {
    return (
        <Segment>
            <Header as="h2">Tags</Header>

            <Label.Group color="blue">
                <Label as="a">
                    Fun
                    <Icon name="close" />
                </Label>
                <Label as="a">
                    Happy
                    <Label.Detail>22</Label.Detail>
                </Label>
                <Label as="a">Smart</Label>
                <Label as="a">Insane</Label>
                <Label as="a">Exciting</Label>
            </Label.Group>
        </Segment>
    );
}