import { put, call } from 'redux-saga/effects';

import Config from "../config";

import ActionType from "../../enums/ActionType";

export async function FetchProfile(action) {
    const response = await fetch(`http://${Config.Server}:${Config.Port}/user/${action.payload}?s=1`);
    const json = await response.json();

    return await json;
}

export function* onGetProfile(action) {
    try {
        const response = yield call(FetchProfile, action);

        yield put.resolve({
            type: ActionType.GET_PROFILE_SUCCESS,
            payload: response
        });
    } catch (e) {
        yield put.resolve({type: ActionType.GET_PROFILE_FAILURE});
    }
}