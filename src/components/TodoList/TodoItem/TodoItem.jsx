import style from './TodoItem.module.css';
import { DeleteTodo } from '../../buttons/DeleteTodo';
import { EditingButton } from '../../buttons/UpdateTodo';
import { FieldEditing } from '../../FieldEditing/FieldEditing';

export default function TodoItem({
	todos,
	requestDelete,
	requestUpdate,
	setEditingId,
	editingId,
}) {
	return (
		<div>
			{todos.map(({ id, title }) => (
				<div className={style.TodoItem} key={id}>
					{editingId === id ? (
						<FieldEditing
							requestUpdate={requestUpdate}
							id={id}
							initialTitle={title}
							setEditingId={setEditingId}
						/>
					) : (
						<div>
							<p className={style.title}>{title}</p>
							<DeleteTodo id={id} requestDelete={requestDelete} />
							<EditingButton id={id} setEditingId={setEditingId} />
						</div>
					)}
				</div>
			))}
		</div>
	);
}
