import { useState } from 'react';
import useTodosList from './useTodosList';

export default function useAddTodos(refreshTodos) {
	const [isCreating, setIsCreating] = useState(false);
	const { todos, setTodos } = useTodosList();

	const addTodos = async (newTodo) => {
		setIsCreating(true);

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
			setTodos([...todos, createdTodo]);
			refreshTodos();
		} catch (error) {
			console.error(error);
		} finally {
			setIsCreating(false);
		}
	};

	return {
		isCreating,
		addTodos,
	};
}
