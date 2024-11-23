import style from './FieldSearch.module.css';

export default function FieldSearch({ searchValue, setSearchValue }) {
	return (
		<div className={style.searchField}>
			<input
				type="text"
				placeholder="Поиск задач..."
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				className={style.inputField}
			/>
		</div>
	);
}
