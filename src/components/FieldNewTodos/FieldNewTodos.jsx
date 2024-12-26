import style from './FieldNewTodos.module.css';
import NewTodo from '../buttons/NewTodo';
import { addTodo, selectInputValue, setInputValue } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

export default function FieldNewTodos() {
	const dispatch = useDispatch();
	const inputValue = useSelector(selectInputValue);

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(addTodo({ title: inputValue }));
		dispatch(setInputValue(''));
	};

	return (
		<form onSubmit={onSubmit} className={style.Field}>
			<textarea
				className={style.inputField}
				type="text"
				value={inputValue}
				onChange={({ target }) => dispatch(setInputValue(target.value))}
				placeholder="Новая задача"
			/>
			<NewTodo />
		</form>
	);
}
