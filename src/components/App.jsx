import {
	useState,
	useTodosList,
	deleteTodo,
	useAddTodos,
	editingTodo,
	style,
	TodoList,
	Loading,
	FieldNewTodo,
	ContainerControls,
	AppContext,
} from './index';

export default function App() {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [editingId, setEditingId] = useState(null);
	const [searchValue, setSearchValue] = useState('');
	const [isSorted, setIsSorted] = useState(false);
	const { todos, isLoading, isServerError } = useTodosList(refreshTodosFlag);

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
		<AppContext.Provider
			value={{
				todos: sortedAndFilteredTodos,
				isSorted,
				toggleSort,
				searchValue,
				setSearchValue,
				editingId,
				setEditingId,
				requestDelete,
				requestUpdate,
				isCreating,
				addTodos,
				inputValue,
				setInputValue,
			}}
		>
			<div className={style.App}>
				{isLoading ? (
					<Loading />
				) : (
					<>
						<ContainerControls />
						<FieldNewTodo />
						{filteredTodos.length > 0 ? (
							<TodoList />
						) : isServerError ? (
							<p className={style.serverError}>Подключитесь к серверу!</p>
						) : (
							<p>Задачи не найдены</p>
						)}
					</>
				)}
			</div>
		</AppContext.Provider>
	);
}
