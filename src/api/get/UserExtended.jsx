import { put, call } from 'redux-saga/effects';

import ActionType from "../../enums/ActionType";

export async function FetchUserExtended(action) {
    const response = await fetch(`http://localhost:3005/user/${action.payload}?s=1`);
    const json = await response.json();

    return await json;
}

export function* onGetUserExtended(action) {
    try {
        const response = yield call(FetchUserExtended, action);

        yield put.resolve({
            type: ActionType.GET_USER_EXTENDED_SUCCESS,
            payload: response
        });
    } catch (e) {
        yield put.resolve({type: ActionType.GET_USER_EXTENDED_FAILURE});
    }
}