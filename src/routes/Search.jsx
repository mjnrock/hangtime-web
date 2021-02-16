/* eslint-disable */
import React from "react";
import { Segment, Header } from "semantic-ui-react";

import ActivityContainer from "./../components/ActivityContainer";
import Activity from "./../components/Activity";
import DateTimePicker from "../components/DateTimePicker";
import Location from "../components/Location";
import TagContainer from "../components/TagContainer";

export default function Search(props) {
    return (
        <Segment>
            <Header as="h1" textAlign="center">Search</Header>

            <ActivityContainer>
                <Activity activity="basketball" />
                <Activity activity="hockey" />
            </ActivityContainer>

            <DateTimePicker />

            <Location />

            <TagContainer />
        </Segment>
    );
}