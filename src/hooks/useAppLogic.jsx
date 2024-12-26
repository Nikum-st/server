import { useSelector } from 'react-redux';
import { selectTodos, selectSearchValue, selectIsSorted } from '../store';

export const useAppLogic = () => {
	const todos = useSelector(selectTodos);
	const searchValue = useSelector(selectSearchValue);
	const isSorted = useSelector(selectIsSorted);

	const filteredTodos = todos.filter((todo) =>
		todo.title?.toLowerCase().includes(searchValue.toLowerCase()),
	);

	const sortedAndFilteredTodos = isSorted
		? [...filteredTodos].sort((a, b) => a.title.length - b.title.length)
		: filteredTodos;

	return {
		todos: sortedAndFilteredTodos,
	};
};
