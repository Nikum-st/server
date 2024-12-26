import { useDispatch } from 'react-redux';
import style from './Buttons.module.css';
import { clearEditing } from '../../store';

export const CancelNewValue = () => {
	const dispatch = useDispatch();
	const onCancelNewValue = () => dispatch(clearEditing);
	return (
		<button className={style.CancelButton} onClick={onCancelNewValue}>
			Отмена
		</button>
	);
};
