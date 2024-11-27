import style from './TodoItem.module.css';
import { DeleteTodo } from '../buttons/DeleteTodo';
import { EditingButton } from '../buttons/UpdateTodo';
import { FieldEditing } from '../FieldEditing/FieldEditing';
import { useParams, Link } from 'react-router-dom';

export default function TodoItem({
	todos,
	requestDelete,
	requestUpdate,
	setEditingId,
	editingId,
}) {
	const { id } = useParams();
	const todo = todos.find((item) => String(item.id) === id);

	if (!todo) {
		return (
			<div>
				<p className={style.notFound}>Задача не найдена!</p>
				<Link to="/">
					<p>Вернуться на главную</p>
				</Link>
			</div>
		);
	}

	return (
		<div className={style.TodoItem}>
			{editingId === todo.id ? (
				<FieldEditing
					requestUpdate={requestUpdate}
					id={todo.id}
					initialTitle={todo.title}
					setEditingId={setEditingId}
				/>
			) : (
				<div>
					<p className={style.title}>{todo.title}</p>
					<DeleteTodo id={todo.id} requestDelete={requestDelete} />
					<EditingButton id={todo.id} setEditingId={setEditingId} />
				</div>
			)}
		</div>
	);
}
