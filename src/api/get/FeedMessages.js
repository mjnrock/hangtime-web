import { put, call } from 'redux-saga/effects';

import Config from "../config";

import ActionType from "../../enums/ActionType";

export async function FetchFeedMessages(action) {
    const response = await fetch(`http://${Config.Server}:${Config.Port}/feed/${action.payload}/r`);
    const json = await response.json();

    return await json;
}

export function* onGetFeedMessages(action) {
    try {
		const response = yield call(FetchFeedMessages, action);

        yield put.resolve({
            type: ActionType.GET_FEED_MESSAGES_SUCCESS,
            payload: response
        });
    } catch (e) {
        yield put.resolve({type: ActionType.GET_FEED_MESSAGES_FAILURE});
    }
}