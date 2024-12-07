import { debounce } from 'lodash';
import { useEffect, useMemo } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../App/AppContext';
import { FieldSearchLayout } from './FieldSearchLayout';

export default function FieldSearch() {
	const { searchValue, setSearchValue } = useContext(AppContext);

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
		<FieldSearchLayout
			handleInputChange={handleInputChange}
			searchValue={searchValue}
		/>
	);
}
