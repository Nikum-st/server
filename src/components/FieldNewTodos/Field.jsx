import style from './Field.module.css';
import NewTodo from '../buttons/NewTodo';

export default function FieldNewTodo({
	addTodos,
	isCreating,
	inputValue,
	setInputValue,
}) {
	const onSubmit = (event) => {
		event.preventDefault();
		addTodos({ title: inputValue });
		setInputValue('');
	};

	return (
		<form onSubmit={onSubmit} className={style.Field}>
			<textarea
				className={style.inputField}
				type="text"
				value={inputValue}
				onChange={({ target }) => setInputValue(target.value)}
				placeholder="Новая задача"
			/>
			<NewTodo isCreating={isCreating} inputValue={inputValue} />
		</form>
	);
}
