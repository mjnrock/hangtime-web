import { all, takeLatest } from "redux-saga/effects";

import ActionType from "../enums/ActionType";

import * as Get from "../api/get/FeedMessages";
import * as Post from "../api/post/FeedMessages";

export default function* rootSaga() {
    yield all([
        takeLatest(ActionType.GET_FEED_MESSAGES_REQUEST, Get.onGetFeedMessages),
        takeLatest(ActionType.POST_FEED_MESSAGE_REQUEST, Post.onPostFeedMessages)
    ]);
}