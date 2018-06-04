import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

import RootReducer from "../reducers/index";

const sagaMiddleware = createSagaMiddleware();

export default function initStore() {
	let store = createStore(
		RootReducer(),
		applyMiddleware(sagaMiddleware)
	);

	sagaMiddleware.run(rootSaga);

	return store;
}