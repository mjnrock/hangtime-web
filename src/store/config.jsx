import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

import RootReducer from "../reducers/index";

const sagaMiddleware = createSagaMiddleware();

export default function initStore() {
	let store = createStore(
		RootReducer(),	//	SUPER important that this funciton be INVOKED here e.g. (), otherwise the result is impossible to figure out what happened
		{
			messages: [1]
		},
		applyMiddleware(sagaMiddleware)
	);

	sagaMiddleware.run(rootSaga);

	return store;
}