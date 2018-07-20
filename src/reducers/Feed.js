import ActionType from "./../enum/ActionType";

export function onCreateFeed(state = [], action) {
	if(action.type === ActionType.CREATE_FEED) {
		return action.payload;
	}

	return state;
}
