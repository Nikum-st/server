import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useTodosList(refreshTodosFlag) {
	const [isLoading, setIsLoading] = useState(false);
	const [todos, setTodos] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		setIsLoading(true);
		fetch('http://localhost:3005/todos')
			.then((respons) => respons.json())
			.then((result) => {
				setTodos(result);
			})
			.catch(() => navigate('/product-load-error'))
			.finally(() => setIsLoading(false));
	}, [refreshTodosFlag, navigate]);

	return { todos, setTodos, isLoading };
}
