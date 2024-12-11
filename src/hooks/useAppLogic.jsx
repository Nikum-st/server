import { useState } from 'react';
import { useAddTodos, deleteTodo, editingTodo, useTodosList } from '../components/index';

export const useAppLogic = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [editingId, setEditingId] = useState(null);
	const [searchValue, setSearchValue] = useState('');
	const [isSorted, setIsSorted] = useState(false);

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);
	const toggleSort = () => setIsSorted(!isSorted);

	const { isCreating, addTodos } = useAddTodos(refreshTodos);
	const { requestDelete } = deleteTodo(refreshTodos);
	const { requestUpdate } = editingTodo(refreshTodos);
	const { todos, isLoading, isServerError } = useTodosList(refreshTodosFlag);

	const filteredTodos = todos.filter((todo) =>
		todo.title.toLowerCase().includes(searchValue.toLowerCase()),
	);

	const sortedAndFilteredTodos = isSorted
		? [...filteredTodos].sort((a, b) => a.title.length - b.title.length)
		: filteredTodos;

	return {
		todos: sortedAndFilteredTodos,
		isSorted,
		toggleSort,
		searchValue,
		setSearchValue,
		editingId,
		requestDelete,
		requestUpdate,
		isCreating,
		addTodos,
		inputValue,
		setInputValue,
		isLoading,
		isServerError,
	};
};
