import { all, takeLatest } from "redux-saga/effects";

import ActionType from "../enums/ActionType";

import { onGetFeedMessages } from "../api/get/FeedMessages";

export default function* rootSaga() {
    yield all([
        takeLatest(ActionType.GET_FEED_MESSAGES_REQUEST, onGetFeedMessages)
    ]);
}