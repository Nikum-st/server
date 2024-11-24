import { useState } from 'react';
import useTodosList from './useTodosList';
import { ref, push } from 'firebase/database';
import { db } from '../data/firebase';

export default function useAddTodos() {
	const [isCreating, setIsCreating] = useState(false);
	const { todos, setTodos } = useTodosList();

	const addTodos = (newTodo) => {
		setIsCreating(true);

		const todosDBRef = ref(db, 'todos');

		push(todosDBRef, newTodo)
			.then((response) => {
				const newKey = response.key;

				setTodos({ [newKey]: newTodo });
				console.log(`todos`, newKey, `newTodo`, newTodo);
			})
			.catch((errorText) => {
				console.error('Ошибка ответа сервера:', errorText);
			})
			.finally(() => {
				setIsCreating(false);
			});
	};

	return {
		isCreating,
		addTodos,
	};
}
