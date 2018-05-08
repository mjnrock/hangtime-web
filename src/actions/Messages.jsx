import ActionType from "../enums/ActionType";

export function GetMessages(arg) {
	return {
		type: ActionType.GET_MESSAGE_REQUEST,
		payload: arg
	};
}
