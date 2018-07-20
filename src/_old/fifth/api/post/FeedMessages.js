import { put, call } from "redux-saga/effects";

import Config from "../config";

import ActionType from "../../enums/ActionType";

export async function FetchFeedMessages(action) {
    const response = await fetch(`http://${Config.Server}:${Config.Port}/feed/${action.payload.ID}/w`, {
		method: "POST",
		headers: {
		  "Accept": "application/json",
		  "Content-Type": "application/json",
		},
		body: JSON.stringify({
			author: "ReactCall",
			payload: action.payload.Message
		})
	});
    const json = await response.json();

    return await json;
}

export function* onPostFeedMessages(action) {
    try {
		const response = yield call(FetchFeedMessages, action);

        yield put.resolve({
            type: ActionType.POST_FEED_MESSAGE_SUCCESS,
            payload: response
        });
    } catch (e) {
        yield put.resolve({type: ActionType.POST_FEED_MESSAGE_FAILURE});
    }
}