import { combineReducers } from "redux";

import { GetFeedMessages } from './Feed';

export default function RootReducer() {
	return combineReducers({
		FeedMessages: GetFeedMessages
	});
}
