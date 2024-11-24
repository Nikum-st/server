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
} from './index';

export default function App() {
	const [inputValue, setInputValue] = useState('');
	const [editingId, setEditingId] = useState(null);
	const { todos, isLoading } = useTodosList();

	const todosArray = Object.entries(todos).map(([id, { title }]) => ({ id, title }));

	const { isCreating, addTodos } = useAddTodos();
	const { requestDelete } = deleteTodo();
	const { requestUpdate, setEditing } = editingTodo();

	return (
		<div className={style.App}>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<FieldNewTodo
						isCreating={isCreating}
						addTodos={addTodos}
						inputValue={inputValue}
						setInputValue={setInputValue}
					/>
					{todosArray.length > 0 ? (
						<TodoList
							todos={todosArray}
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
