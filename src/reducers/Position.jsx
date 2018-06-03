import ActionType from "../enums/ActionType";

export function onMovePosition(state, action) {
	if(!!action) {
		if(action.type === ActionType.POSITION_MOVE) {
			return {
				X: +action.payload.X,
				Y: +action.payload.Y
			};
		}
	}

	return {
		X: 0,
		Y: 0
	};
}

export function onSetGrid(state = [], action) {
	if(!!action) {
		if(action.type === ActionType.GRID_SET) {
			return action.payload;
		}
	}

	return state;
}
