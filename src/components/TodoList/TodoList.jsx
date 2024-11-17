import style from './TodoList.module.css';
import TodoItem from './TodoItem/TodoItem';

export default function TodoList({ todos }) {
	return (
		<div className={style.TodoList}>
			<TodoItem todos={todos} />
		</div>
	);
}
