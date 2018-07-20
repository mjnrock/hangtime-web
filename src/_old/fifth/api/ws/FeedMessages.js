import { put, call } from 'redux-saga/effects';

import ActionType from "../../enums/ActionType";

export function* onReceiveFeedMessage(action) {
    try {
        yield put.resolve({
            type: ActionType.RECEIVE_FEED_MESSAGE_END,
            payload: action.payload
        });
    } catch (e) {
        yield put.resolve({type: ActionType.GET_FEED_MESSAGES_FAILURE});
    }
}