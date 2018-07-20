import ActionType from "./../enum/ActionType";

export function CreateFeed(feed) {
	return {
		type: ActionType.CREATE_FEED,
		payload: feed
	};
}