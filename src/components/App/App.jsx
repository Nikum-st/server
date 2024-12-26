import { useDispatch, useSelector } from 'react-redux';
import {
	Loading,
	ContainerControls,
	TodoList,
	style,
	FieldNewTodos,
	useAppLogic,
	fetchTodos,
} from '../index';
import { selectIsServerError, selectIsLoading } from '../../store';
import { useEffect } from 'react';

const App = () => {
	const isLoading = useSelector(selectIsLoading);
	const { todos } = useAppLogic();
	const isServerError = useSelector(selectIsServerError);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	return (
		<div className={style.App}>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<ContainerControls />
					<FieldNewTodos />
					{todos.length > 0 ? (
						<TodoList />
					) : isServerError ? (
						<p className={style.serverError}>Подключитесь к серверу!</p>
					) : (
						<p>Задачи не найдены</p>
					)}
				</>
			)}
		</div>
	);
};

export default App;
