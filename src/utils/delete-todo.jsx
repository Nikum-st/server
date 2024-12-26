import { removeTodo } from '../store';

export const deleteTodo = (id) => async (dispatch) => {
	try {
		const response = await fetch(`http://localhost:3001/todos/${id}`, {
			method: 'DELETE',
		});
		if (!response.ok) {
			throw new Error('Ошибка при удалении задачи');
		}
		dispatch(removeTodo(id));
		console.log('Задача удалена!');
	} catch (error) {
		console.error('Ошибка:', error);
	}
};
