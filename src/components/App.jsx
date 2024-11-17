import useTodosList from '../hooks/useTodosList';
import style from './App.module.css';
import TodoList from './TodoList/TodoList';
import Loading from './Loading/Loading';

export default function App() {
	const { isLoading, todos } = useTodosList();

	return (
		<div className={style.App}>
			{isLoading ? <Loading /> : <TodoList todos={todos} />}
		</div>
	);
}
