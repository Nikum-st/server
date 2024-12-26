import { editingInitialState } from './editingInitialState';

export const editingReducer = (state = editingInitialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_EDITING_ID': {
			return {
				...state,
				editingId: payload,
			};
		}
		case 'CLEAR_EDITING': {
			return editingInitialState;
		}
		default:
			return state;
	}
};
