import { createContext } from 'react';

export const AppContext = createContext({
	todos: [],
	isSorted: false,
	toggleSort: () => {},
	searchValue: '',
	setSearchValue: () => {},
	setEditingId: () => {},
	editingId: null,
	requestDelete: () => {},
	requestUpdate: () => {},
	isCreating: false,
	addTodos: () => {},
	inputValue: '',
	setInputValue: () => {},
});
