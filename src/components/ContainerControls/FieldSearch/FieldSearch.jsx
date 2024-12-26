import { debounce } from 'lodash';
import { useEffect, useMemo } from 'react';
import { FieldSearchLayout } from './FieldSearchLayout';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchValue, setSearchValue } from '../../../store';

export default function FieldSearch() {
	const dispatch = useDispatch();
	const searchValue = useSelector(selectSearchValue);

	const debouncedSetSearchValue = useMemo(
		() =>
			debounce((value) => {
				dispatch(setSearchValue(value));
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
		<FieldSearchLayout
			handleInputChange={handleInputChange}
			searchValue={searchValue}
		/>
	);
}
