import style from './Buttons.module.css';
import { selectIsCreating, selectInputValue } from '../../store';
import { useSelector } from 'react-redux';

export default function NewTodo() {
	const isCreating = useSelector(selectIsCreating);
	const inputValue = useSelector(selectInputValue);

	return (
		<button
			className={style.NewTodo}
			type="submit"
			disabled={isCreating || inputValue == ''}
		>
			{isCreating ? 'Добавление...' : 'Добавить новую задачу'}
		</button>
	);
}
