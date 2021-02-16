/* eslint-disable */
import React from "react";
import { Segment } from "semantic-ui-react";

const state = {};
export const Context = React.createContext(state);

export default function Host(props) {
    return (
        <Context.Provider value={ state }>
            <Segment>
                <div>Template</div>
            </Segment>
        </Context.Provider>
    );
}