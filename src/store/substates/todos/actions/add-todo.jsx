import { setIsCreating, setNewTodo } from '../../../index';

export const addTodo = (newTodo) => async (dispatch) => {
	dispatch(setIsCreating(true));

	try {
		const response = await fetch('http://localhost:3001/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newTodo),
		});

		if (!response.ok) {
			throw new Error('Ошибка при добавлении данных');
		}

		const createdTodo = await response.json();
		dispatch(setNewTodo(createdTodo));
	} catch (error) {
		console.error('Ошибка:', error);
	} finally {
		dispatch(setIsCreating(false));
	}
};
