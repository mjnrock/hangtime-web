import ActionType from "../enums/ActionType";

export function GetProximateGames(state = null, action) {
	if(action.type === ActionType.GET_PROXIMATE_GAMES_SUCCESS) {
		return action.payload;
	} else if(action.type === ActionType.GET_PROXIMATE_GAMES_FAILURE) {
		return null;
	}

	return state;
}
