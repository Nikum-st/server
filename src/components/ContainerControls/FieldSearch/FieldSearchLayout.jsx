import style from './FieldSearch.module.css';

export const FieldSearchLayout = ({ searchValue, handleInputChange }) => {
	return (
		<div className={style.searchField}>
			<input
				type="text"
				placeholder="Поиск задач..."
				defaultValue={searchValue}
				onChange={handleInputChange}
				className={style.inputField}
			/>
		</div>
	);
};
