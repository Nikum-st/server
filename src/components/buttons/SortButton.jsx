import style from './Buttons.module.css';
import { selectIsSorted, setIsSorted } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

export default function SortButton() {
	const dispatch = useDispatch();
	const toggleSort = (isSorted) => dispatch(setIsSorted(!isSorted));
	const isSorted = useSelector(selectIsSorted);

	return (
		<button onClick={() => toggleSort(isSorted)} className={style.SortButton}>
			{isSorted ? 'Отключить сортировку' : 'Сортировать по колличеству символов'}
		</button>
	);
}
