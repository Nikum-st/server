import style from './Buttons.module.css';
import { useContext } from 'react';
import { AppContext } from '../App/AppContext';

export const EditingButton = ({ id }) => {
	const { setEditingId } = useContext(AppContext);

	return (
		<button onClick={() => setEditingId(id)} className={style.UpdateTodo}>
			Редактировать
		</button>
	);
};
