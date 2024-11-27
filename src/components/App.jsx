import {
	useState,
	useTodosList,
	deleteTodo,
	useAddTodos,
	editingTodo,
	AppLayout,
} from './index';

export default function App() {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [editingId, setEditingId] = useState(null);
	const [searchValue, setSearchValue] = useState('');
	const [isSorted, setIsSorted] = useState(false);
	const { todos, isLoading } = useTodosList(refreshTodosFlag);

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);
	const toggleSort = () => setIsSorted(!isSorted);

	const { isCreating, addTodos } = useAddTodos(refreshTodos);
	const { requestDelete } = deleteTodo(refreshTodos);
	const { requestUpdate } = editingTodo(refreshTodos);

	const filteredTodos = todos.filter((todo) =>
		todo.title.toLowerCase().includes(searchValue.toLowerCase()),
	);

	const sortedAndFilteredTodos = isSorted
		? [...filteredTodos].sort((a, b) => a.title.length - b.title.length)
		: filteredTodos;

	return (
		<AppLayout
			isLoading={isLoading}
			inputValue={inputValue}
			isSorted={isSorted}
			toggleSort={toggleSort}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			isCreating={isCreating}
			addTodos={addTodos}
			setInputValue={setInputValue}
			sortedAndFilteredTodos={sortedAndFilteredTodos}
			requestUpdate={requestUpdate}
			setEditingId={setEditingId}
			editingId={editingId}
			requestDelete={requestDelete}
		/>
	);
}
