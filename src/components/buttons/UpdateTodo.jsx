import style from './Buttons.module.css';

export const EditingButton = ({ id, setEditingId }) => {
	return (
		<button onClick={() => setEditingId(id)} className={style.UpdateTodo}>
			Редактировать
		</button>
	);
};
