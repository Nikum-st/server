import { todosInitialState } from './todosInitialState';

export const todosReduсer = (state = todosInitialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_TODOS': {
			return {
				...state,
				todos: payload,
			};
		}
		case 'SET_NEW_TODO': {
			return {
				...state,
				todos: [...state.todos, payload],
			};
		}
		case 'SET_IS_LOADING': {
			return {
				...state,
				isLoading: payload,
			};
		}
		case 'SET_IS_SERVER_ERROR': {
			return {
				...state,
				isServerError: payload,
			};
		}
		case 'REMOVE_TODO': {
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== payload),
			};
		}
		case 'SET_NEW_TITLE_TODO': {
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === payload.id ? { ...todo, title: payload.title } : todo,
				),
			};
		}

		default:
			return state;
	}
};
