import { combineReducers } from "redux";

import { GetMessages } from "./Messages.js";

export default function RootReducer() {
	return combineReducers({
		messages: GetMessages
	});
}
