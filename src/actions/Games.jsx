import ActionType from "../enums/ActionType";

export function GetProximateGamesRequest(activity, lat, long, r = 16000) {
	return {
		type: ActionType.GET_PROXIMATE_GAMES_REQUEST,
		payload: {
			Activity: activity,
			Latitude: lat,
			Longitude: long,
			Radius: r
		}
	};
}
