import style from './FieldNewTodos.module.css';
import NewTodo from '../buttons/NewTodo';
import { useContext } from 'react';
import { AppContext } from '../App/AppContext';

export default function FieldNewTodos() {
	const { addTodos, inputValue, setInputValue } = useContext(AppContext);

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
			<NewTodo />
		</form>
	);
}
