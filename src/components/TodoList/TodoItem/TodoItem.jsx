import style from './TodoItem.module.css';

export default function TodoItem({ todos }) {
	return (
		<>
			{todos.map(({ id, title }) => (
				<div className={style.TodoItem} key={id}>
					{title}
				</div>
			))}
		</>
	);
}
