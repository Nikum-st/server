import { clearEditing, setTitleTodo } from '../store';

export const requestUpdate = (id, newValue) => async (dispatch) => {
	try {
		const response = await fetch(`http://localhost:3001/todos/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ title: newValue }),
		});

		if (!response.ok) {
			const errorText = await response.text();
			console.error('Ошибка ответа сервера:', errorText);
			throw new Error(
				`Ошибка при редактировании задачи: ${response.status} ${response.statusText}`,
			);
		}
		dispatch(setTitleTodo(id, newValue));
		dispatch(clearEditing);
	} catch (error) {
		console.error('Ошибка при отправке запроса:', error);
	}
};
