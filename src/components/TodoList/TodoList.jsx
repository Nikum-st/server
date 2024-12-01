import style from './TodoList.module.css';
import TodoItem from './TodoItem/TodoItem';

export default function TodoList() {
	return (
		<div className={style.TodoList}>
			<TodoItem />
		</div>
	);
}
