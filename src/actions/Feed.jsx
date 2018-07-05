import ActionType from "../enums/ActionType";

export function GetFeedMessagesRequest(id) {
	return {
		type: ActionType.GET_FEED_MESSAGES_REQUEST,
		payload: id
	};
}
