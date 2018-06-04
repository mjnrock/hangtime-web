import { combineReducers } from "redux";

import { GetProfile } from "./User";
import { GetProximateGames } from "./Games";

export default function RootReducer() {
	return combineReducers({
		Profile: GetProfile,
		ProximateGames: GetProximateGames
	});
}
