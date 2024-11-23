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
	SortButton,
	FieldSearch,
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
	const { requestUpdate, setEditing } = editingTodo(refreshTodos);

	const filteredTodos = todos.filter((todo) =>
		todo.title.toLowerCase().includes(searchValue.toLowerCase()),
	);

	const sortedAndFilteredTodos = isSorted
		? [...filteredTodos].sort((a, b) => a.title.length - b.title.length)
		: filteredTodos;

	return (
		<div className={style.App}>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<SortButton isSorted={isSorted} toggleSort={toggleSort} />
					<FieldSearch
						searchValue={searchValue}
						setSearchValue={setSearchValue}
					/>
					<FieldNewTodo
						isCreating={isCreating}
						addTodos={addTodos}
						inputValue={inputValue}
						setInputValue={setInputValue}
					/>
					{filteredTodos.length > 0 ? (
						<TodoList
							todos={sortedAndFilteredTodos}
							requestUpdate={requestUpdate}
							requestDelete={requestDelete}
							editingId={editingId}
							setEditing={setEditing}
							setEditingId={setEditingId}
						/>
					) : (
						<p>Задачи не найдены</p>
					)}
				</>
			)}
		</div>
	);
}
