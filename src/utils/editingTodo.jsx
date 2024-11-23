export default function edititngTodo(refreshTodos) {
	const requestUpdate = async (id, newValue) => {
		try {
			const response = await fetch(`http://localhost:3005/todos/${id}`, {
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

			refreshTodos();
		} catch (error) {
			console.error('Ошибка при отправке запроса:', error);
		}
	};

	return { requestUpdate };
}
