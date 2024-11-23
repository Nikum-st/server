import style from './TodoList.module.css';
import TodoItem from './TodoItem/TodoItem';

export default function TodoList({
	todos,
	requestDelete,
	requestUpdate,
	setEditingId,
	editingId,
}) {
	return (
		<div className={style.TodoList}>
			<TodoItem
				requestUpdate={requestUpdate}
				todos={todos}
				setEditingId={setEditingId}
				editingId={editingId}
				requestDelete={requestDelete}
			/>
		</div>
	);
}
