import ActionType from "../enums/ActionType";

export function SetGrid(grid) {
	return {
		type: ActionType.GRID_SET,
		payload: grid
	};
}

export function MovePosition(x, y) {
	return {
		type: ActionType.POSITION_MOVE,
		payload: {
			X: x,
			Y: y
		}
	};
}
