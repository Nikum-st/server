import style from './Buttons.module.css';

export default function NewTodo({ isCreating, inputValue }) {
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
