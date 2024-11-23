import { useEffect, useState } from 'react';

export default function useTodosList(refreshTodosFlag) {
	const [isLoading, setIsLoading] = useState(false);
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		setIsLoading(true);

		fetch('http://localhost:3005/todos')
			.then((respons) => respons.json())
			.then((result) => {
				setTodos(result);
			})
			.finally(() => setIsLoading(false));
	}, [refreshTodosFlag]);

	return { todos, setTodos, isLoading };
}
