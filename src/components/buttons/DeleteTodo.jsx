import style from './Buttons.module.css';

export const DeleteTodo = ({ requestDelete, id }) => {
	return (
		<button onClick={() => requestDelete(id)} className={style.DeleteTodo}>
			Удалить
		</button>
	);
};
