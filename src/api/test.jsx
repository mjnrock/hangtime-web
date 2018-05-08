import { put, call } from 'redux-saga/effects';

import ActionType from "../enums/ActionType";

export async function getData(action) {
    const response = await fetch("http://po01aptbi02.po.trinity-health.org:1337/channel/sjmo-bi");
    const json = await response.json();
    
    return await {
        type: action.type,
        payload: json
    };
}

export function* TestCall(action) {
    try {
        const data = yield call(getData, action);

        yield put({
            type: ActionType.GET_MESSAGE_SUCCESS,
            payload: data.payload
        });
    } catch (e) {
        yield put({type: ActionType.GET_MESSAGE_FAILURE});
    }
}