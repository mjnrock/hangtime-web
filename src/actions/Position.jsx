import ActionType from "../enums/ActionType";

export function MovePosition(x, y, grid) {
	return {
		type: ActionType.POSITION_MOVE,
		payload: {
			X: x,
			Y: y,
			Grid: grid
		}
	};
}
