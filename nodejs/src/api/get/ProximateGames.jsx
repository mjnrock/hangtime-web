import { put, call } from 'redux-saga/effects';

import ActionType from "../../enums/ActionType";

export async function FetchProximateGames(action) {
    const response = await fetch(`http://localhost:3005/game/${action.payload.Activity}?p=${action.payload.Latitude}&l=${action.payload.Longitude}&r=${action.payload.Radius}`);
    const json = await response.json();

    return await json;
}

export function* onGetProximateGames(action) {
    try {
        const response = yield call(FetchProximateGames, action);

        yield put.resolve({
            type: ActionType.GET_PROXIMATE_GAMES_SUCCESS,
            payload: response
        });
    } catch (e) {
        yield put.resolve({type: ActionType.GET_PROXIMATE_GAMES_FAILURE});
    }
}