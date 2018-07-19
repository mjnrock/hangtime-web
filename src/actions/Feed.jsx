import ActionType from "../enums/ActionType";

export function GetFeedMessagesRequest(id) {
	return {
		type: ActionType.GET_FEED_MESSAGES_REQUEST,
		payload: id
	};
}

export function ReceiveFeedMessage(message) {
	return {
		type: ActionType.RECEIVE_FEED_MESSAGE,
		payload: message
	};
}


export function PostFeedMessageRequest(id, message) {
	return {
		type: ActionType.POST_FEED_MESSAGE_REQUEST,
		payload: {
			ID: id,
			Message: message
		}
	};
}