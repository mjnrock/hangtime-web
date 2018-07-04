import ActionType from "../enums/ActionType";

export function GetProfile(state = null, action) {
	if(action.type === ActionType.GET_PROFILE_SUCCESS) {
		return action.payload[0];
	} else if(action.type === ActionType.GET_PROFILE_FAILURE) {
		return null;
	}

	return state;
}

export function GetUserBasic(state = null, action) {
	if(action.type === ActionType.GET_USER_BASIC_SUCCESS) {
		return action.payload[0];
	} else if(action.type === ActionType.GET_USER_BASIC_FAILURE) {
		return null;
	}

	return state;
}

export function GetUserExtended(state = null, action) {
	if(action.type === ActionType.GET_USER_EXTENDED_SUCCESS) {
		return action.payload[0];
	} else if(action.type === ActionType.GET_USER_EXTENDED_FAILURE) {
		return null;
	}

	return state;
}
