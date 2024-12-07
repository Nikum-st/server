import style from './TodoControls.module.css';
import { DeleteTodo } from '../../../buttons/DeleteTodo';
import { EditingButton } from '../../../buttons/EditingButton';

export default function TodoControls({ id, title }) {
	return (
		<div className={style.TodoControls}>
			<p className={style.title}>{title}</p>
			<DeleteTodo id={id} />
			<EditingButton id={id} />
		</div>
	);
}
