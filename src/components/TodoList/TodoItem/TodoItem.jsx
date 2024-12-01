import style from './TodoItem.module.css';
import { DeleteTodo } from '../../buttons/DeleteTodo';
import { EditingButton } from '../../buttons/UpdateTodo';
import { FieldEditing } from '../../FieldEditing/FieldEditing';
import { useContext } from 'react';
import { AppContext } from '../../../contextAPI/AppContext';

export default function TodoItem() {
	const { todos, editingId } = useContext(AppContext);

	return (
		<div>
			{todos.map(({ id, title }) => (
				<div className={style.TodoItem} key={id}>
					{editingId === id ? (
						<FieldEditing id={id} initialTitle={title} />
					) : (
						<div>
							<p className={style.title}>{title}</p>
							<DeleteTodo id={id} />
							<EditingButton id={id} />
						</div>
					)}
				</div>
			))}
		</div>
	);
}
