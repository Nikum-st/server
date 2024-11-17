import { useEffect, useState } from 'react';

export default function useTodosList() {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			fetch('https://jsonplaceholder.typicode.com/todos')
				.then((respons) => respons.json())
				.then((result) => {
					setTodos(result);
				})
				.finally(() => setIsLoading(false));
		}, 2000);
	}, []);

	return { todos, isLoading };
}
