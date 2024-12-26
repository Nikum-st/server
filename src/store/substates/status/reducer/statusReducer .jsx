import { statusInitialState } from './statusInitialState';

export const statusReducer = (state = statusInitialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_IS_CREATING': {
			return {
				...state,
				inputValue: payload,
			};
		}
		case 'SEARCH_VALUE': {
			return {
				...state,
				searchValue: payload,
			};
		}
		case 'SET_IS_SORTED': {
			return {
				...state,
				isSorted: payload,
			};
		}

		default:
			return state;
	}
};
