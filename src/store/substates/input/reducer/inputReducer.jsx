import { inputInitialState } from './inputInitialState';

export const inputReducer = (state = inputInitialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_INPUT_VALUE': {
			return {
				...state,
				inputValue: payload,
			};
		}
		case 'CLEAR_INPUT_VALUE': {
			return inputInitialState;
		}

		default:
			return state;
	}
};
