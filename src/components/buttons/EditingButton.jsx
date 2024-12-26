import { useDispatch } from 'react-redux';
import style from './Buttons.module.css';
import { setEditingId } from '../../store';

export const EditingButton = ({ id }) => {
	const dispatch = useDispatch();
	const onEditing = () => dispatch(setEditingId(id));

	return (
		<button onClick={onEditing} className={style.UpdateTodo}>
			Редактировать
		</button>
	);
};
