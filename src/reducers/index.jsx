import { combineReducers } from "redux";

import { GetProfile } from "./User";
import { GetProximateGames } from "./Games";
import { onMovePosition } from "./Position";

export default function RootReducer() {
	return combineReducers({
		Position: onMovePosition,
		Profile: GetProfile,
		ProximateGames: GetProximateGames
	});
}
