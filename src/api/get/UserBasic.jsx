import { put, call } from 'redux-saga/effects';

import Config from "../config";

import ActionType from "../../enums/ActionType";

export async function FetchUserBasic(action) {
    const response = await fetch(`http://${Config.Server}:${Config.Port}/user/${action.payload}`);
    const json = await response.json();

    return await json;
}

export function* onGetUserBasic(action) {
    try {
        const response = yield call(FetchUserBasic, action);

        yield put.resolve({
            type: ActionType.GET_USER_BASIC_SUCCESS,
            payload: response
        });
    } catch (e) {
        yield put.resolve({type: ActionType.GET_USER_BASIC_FAILURE});
    }
}