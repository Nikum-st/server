import { useState } from 'react';
import style from './FieldEditing.module.css';

export const FieldEditing = ({ id, initialTitle, requestUpdate, setEditingId }) => {
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
			<button className={style.saveButton} type="submit">
				Сохранить
			</button>
			<button
				type="button"
				className={style.cancelButton}
				onClick={() => setEditingId(null)}
			>
				Отмена
			</button>
		</form>
	);
};
