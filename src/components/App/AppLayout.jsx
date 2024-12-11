import {
	Loading,
	ContainerControls,
	TodoList,
	style,
	FieldNewTodos,
	AppContext,
} from '../index';
import { useContext } from 'react';

export const AppLayout = () => {
	const { isLoading, todos, isServerError } = useContext(AppContext);

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
