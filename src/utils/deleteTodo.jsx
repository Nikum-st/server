export default function deleteTodo(refreshTodos) {
	const requestDelete = async (id) => {
		try {
			const response = await fetch(`http://localhost:3005/todos/${id}`, {
				method: 'DELETE',
			});
			if (!response.ok) {
				throw new Error('Ошибка при удалении задачи');
			}
			console.log('Задача удалена!');
			refreshTodos();
		} catch (error) {
			console.error('Ошибка:', error);
		}
	};

	return {
		requestDelete,
	};
}
