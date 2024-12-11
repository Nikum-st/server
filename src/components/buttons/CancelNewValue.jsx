import style from './Buttons.module.css';
import { useContext } from 'react';

export const CancelNewValue = () => {
	const { setEditingId } = useContext();

	return (
		<button
			type="button"
			className={style.cancelButton}
			onClick={() => setEditingId(null)}
		>
			Отмена
		</button>
	);
};
