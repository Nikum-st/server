import style from './Buttons.module.css';
import { deleteTodo } from '../index';
import { useDispatch } from 'react-redux';

export const DeleteTodo = ({ id }) => {
	const dispatch = useDispatch();
	const onDelete = () => {
		dispatch(deleteTodo(id));
	};

	return (
		<button onClick={onDelete} className={style.DeleteTodo}>
			Удалить
		</button>
	);
};
