import {
	combineReducers,
	todosReduсer,
	inputReducer,
	editingReducer,
	statusReducer,
} from './index';

export const reducerApp = combineReducers({
	todos: todosReduсer,
	input: inputReducer,
	editing: editingReducer,
	status: statusReducer,
});
