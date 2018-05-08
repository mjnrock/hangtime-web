import { all, takeLatest } from "redux-saga/effects";

import ActionType from "../enums/ActionType";
import { TestCall } from "../api/test";

export default function* rootSaga() {
    yield all([
        takeLatest(ActionType.GET_MESSAGE_REQUEST, TestCall)
    ]);
}