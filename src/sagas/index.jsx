import { all, takeLatest } from "redux-saga/effects";

import ActionType from "../enums/ActionType";

import { onGetProfile } from "../api/get/Profile";
import { onGetUserBasic } from "../api/get/UserBasic";
import { onGetUserExtended } from "../api/get/UserExtended";

import { onGetProximateGames } from "../api/get/ProximateGames";

import { onMovePosition } from "../reducers/Position";

export default function* rootSaga() {
    yield all([
        takeLatest(ActionType.GET_PROFILE_REQUEST, onGetProfile),
        takeLatest(ActionType.GET_USER_BASIC_REQUEST, onGetUserBasic),
        takeLatest(ActionType.GET_USER_EXTENDED_REQUEST, onGetUserExtended),
        
        takeLatest(ActionType.GET_PROXIMATE_GAMES_REQUEST, onGetProximateGames),

        takeLatest(ActionType.POSITION_MOVE, onMovePosition),
    ]);
}