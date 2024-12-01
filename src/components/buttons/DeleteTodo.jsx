import style from './Buttons.module.css';
import { useContext } from 'react';
import { AppContext } from '../../contextAPI/AppContext';

export const DeleteTodo = ({ id }) => {
	const { requestDelete } = useContext(AppContext);

	return (
		<button onClick={() => requestDelete(id)} className={style.DeleteTodo}>
			Удалить
		</button>
	);
};
