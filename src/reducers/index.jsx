import { combineReducers } from "redux";

import { GetMessages } from "./Messages";

export default function RootReducer() {
	return combineReducers({
		messages: GetMessages
	});
}
