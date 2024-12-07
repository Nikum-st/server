import style from './TodoItem.module.css';
import { FieldEditing } from '../../FieldEditing/FieldEditing';
import { useContext } from 'react';
import { AppContext } from '../../App/AppContext';
import TodoControls from './TodoControls/TodoControls';

export default function TodoItem() {
	const { todos, editingId } = useContext(AppContext);

	return (
		<div>
			{todos.map(({ id, title }) => (
				<div className={style.TodoItem} key={id}>
					{editingId === id ? (
						<FieldEditing id={id} initialTitle={title} />
					) : (
						<TodoControls id={id} title={title} />
					)}
				</div>
			))}
		</div>
	);
}
