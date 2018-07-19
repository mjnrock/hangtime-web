import ActionType from "../enums/ActionType";

export function GetFeedMessages(state = null, action) {
	if(action.type === ActionType.GET_FEED_MESSAGES_SUCCESS) {
		return action.payload;
	} else if(action.type === ActionType.GET_FEED_MESSAGES_FAILURE) {
		return null;
	}

	return state;
}

export function ReceiveFeedMessage(state = null, action) {
	console.log(action);
	if(action.type === ActionType.RECEIVE_FEED_MESSAGE) {
		return action.payload;
	}

	return state;
}

export function PostFeedMessages(state = null, action) {
	if(action.type === ActionType.POST_FEED_MESSAGE_SUCCESS) {
		return action.payload;
	} else if(action.type === ActionType.POST_FEED_MESSAGE_FAILURE) {
		return null;
	}

	return state;
}