import ActionType from "../enums/ActionType";

export function onMovePosition(state, action) {
	if(!!action) {
		if(action.type === ActionType.POSITION_MOVE) {
			console.log(state);
			return {
				X: +action.payload.X,
				Y: +action.payload.Y,
				Grid: state.Grid
			};
		}
	}

	return {
		X: 0,
		Y: 0,
		Grid: []
	};
}
