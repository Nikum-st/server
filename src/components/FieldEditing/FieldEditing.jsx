import { useState } from 'react';
import style from './FieldEditing.module.css';
import { useContext } from 'react';
import { AppContext } from '../App/AppContext';
import { EditingControl } from '../index';

export const FieldEditing = ({ id, initialTitle }) => {
	const { requestUpdate, setEditingId } = useContext(AppContext);
	const [localValue, setLocalValue] = useState(initialTitle);

	const onEditingSubmit = async (event) => {
		event.preventDefault();
		await requestUpdate(id, localValue);
		setEditingId(null);
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
