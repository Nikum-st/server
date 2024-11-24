import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../data/firebase';

export default function useTodosList() {
	const [isLoading, setIsLoading] = useState(true);
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const todosDBRef = ref(db, 'todos');

		return onValue(todosDBRef, (snapshot) => {
			const loadedTodos = snapshot.val() || {};

			setTodos(loadedTodos);
			setIsLoading(false);
		});
	}, []);

	return { todos, setTodos, isLoading };
}
