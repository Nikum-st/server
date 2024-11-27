import style from './TodoList.module.css';
import { Link } from 'react-router-dom';

export default function TodoList({ todos }) {
	return (
		<div className={style.TodoList}>
			{todos.map(({ id, title }) => (
				<div className={style.TodoItem} key={id}>
					<div className={style.containerTitle}>
						<Link to={`/todos/${id}`}>
							{
								<p className={style.title}>
									{title.length > 50
										? `${title.slice(0, 50)}...`
										: title}
								</p>
							}
						</Link>
					</div>
				</div>
			))}
		</div>
	);
}
