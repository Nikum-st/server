import style from './Buttons.module.css';

export default function SortButton({ toggleSort, isSorted }) {
	return (
		<button onClick={() => toggleSort()} className={style.SortButton}>
			{isSorted ? 'Отключить сортировку' : 'Сортировать по колличеству символов'}
		</button>
	);
}
