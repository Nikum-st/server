import style from './Buttons.module.css';
import { useContext } from 'react';
import { AppContext } from '../App/AppContext';

export default function SortButton() {
	const { isSorted, toggleSort } = useContext(AppContext);

	return (
		<button onClick={() => toggleSort()} className={style.SortButton}>
			{isSorted ? 'Отключить сортировку' : 'Сортировать по колличеству символов'}
		</button>
	);
}
