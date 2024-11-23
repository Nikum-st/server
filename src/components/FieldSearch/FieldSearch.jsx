import style from './FieldSearch.module.css';
import { debounce } from 'lodash';
import { useEffect, useMemo } from 'react';

export default function FieldSearch({ searchValue, setSearchValue }) {
	const debouncedSetSearchValue = useMemo(
		() =>
			debounce((value) => {
				setSearchValue(value);
			}, 300),
		[setSearchValue],
	);

	useEffect(() => {
		return () => debouncedSetSearchValue.cancel();
	}, [debouncedSetSearchValue]);

	const handleInputChange = (e) => {
		debouncedSetSearchValue(e.target.value);
	};

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
}
