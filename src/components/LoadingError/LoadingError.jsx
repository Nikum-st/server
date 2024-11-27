import style from './LoadingError.module.css';
import { Link } from 'react-router-dom';

export const LoadingError = () => {
	return (
		<div>
			<p className={style.LoadingError}>
				Превышен лимит ожидания, возможно нет связи с сервером!
			</p>
			<Link to="/">
				<p>Перезагрузить страницу</p>
			</Link>
		</div>
	);
};
