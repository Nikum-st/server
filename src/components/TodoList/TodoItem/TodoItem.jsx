import style from './TodoItem.module.css';
import { FieldEditing } from '../../FieldEditing/FieldEditing';
import TodoControls from './TodoControls/TodoControls';
import { useSelector } from 'react-redux';
import { selectEditingId } from '../../../store';
import { useAppLogic } from '../../../hooks/useAppLogic';

export default function TodoItem() {
	const { todos } = useAppLogic();
	const editingId = useSelector(selectEditingId);

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
