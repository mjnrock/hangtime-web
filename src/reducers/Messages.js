import ActionType from "../enums/ActionType";

export function GetMessages(state = [], action) {
	if(action.type === ActionType.GET_MESSAGE_SUCCESS) {
		return action.payload;
	} else if(action.type === ActionType.GET_MESSAGE_FAILURE) {
		return [];
	}

	return state;
}
