import { setTodos, setIsLoading, setIsServerError } from '../store';

const fetchTodos = () => async (dispatch) => {
	dispatch(setIsLoading(true));

	try {
		const response = await fetch('http://localhost:3001/todos');
		if (!response.ok) {
			throw new Error('Ошибка при получении данных');
		}
		const result = await response.json();
		dispatch(setTodos(result));
	} catch (error) {
		console.error(error);
		dispatch(setIsServerError(true));
	} finally {
		dispatch(setIsLoading(false));
	}
};
export default fetchTodos;
