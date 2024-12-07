import style from './Buttons.module.css';
import { useContext } from 'react';
import { AppContext } from '../App/AppContext';

export default function NewTodo() {
	const { isCreating, inputValue } = useContext(AppContext);

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
