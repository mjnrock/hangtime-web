import ActionType from "../enums/ActionType";

export function GetProfileRequest(username) {
	return {
		type: ActionType.GET_PROFILE_REQUEST,
		payload: username
	};
}

export function GetUserBasicRequest(username) {
	return {
		type: ActionType.GET_USER_BASIC_REQUEST,
		payload: username
	};
}

export function GetUserExtendedRequest(username) {
	return {
		type: ActionType.GET_USER_EXTENDED_REQUEST,
		payload: username
	};
}
