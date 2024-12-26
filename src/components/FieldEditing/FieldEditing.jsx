import { useState } from 'react';
import style from './FieldEditing.module.css';
import { EditingControl } from '../index';
import { requestUpdate } from '../../utils/editingTodo';
import { useDispatch } from 'react-redux';

export const FieldEditing = ({ id, initialTitle }) => {
	const dispatch = useDispatch();

	const [localValue, setLocalValue] = useState(initialTitle);

	const onEditingSubmit = (event) => {
		event.preventDefault();
		dispatch(requestUpdate(id, localValue));
	};

	return (
		<form onSubmit={onEditingSubmit} className={style.FieldEditing}>
			<textarea
				className={style.inputField}
				value={localValue}
				onChange={({ target }) => setLocalValue(target.value)}
			/>
			<EditingControl />
		</form>
	);
};
