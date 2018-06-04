import { combineReducers } from "redux";

import { GetProfile } from "./User";
import { GetProximateGames } from "./Games";
import { onMovePosition, onSetGrid } from "./Position";

export default function RootReducer() {
	return combineReducers({
		Grid: onSetGrid,
		Position: onMovePosition,
		Profile: GetProfile,
		ProximateGames: GetProximateGames
	});
}
