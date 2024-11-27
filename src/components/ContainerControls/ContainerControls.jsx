import style from './ContainerControls.module.css';
import SortButton from '../buttons/SortButton';
import FieldSearch from '../FieldSearch/FieldSearch';
import FieldNewTodo from '../FieldNewTodos/Field';

export default function ContainerControls({
	isSorted,
	toggleSort,
	searchValue,
	setSearchValue,
	isCreating,
	addTodos,
	inputValue,
	setInputValue,
}) {
	return (
		<div className={style.containerControls}>
			<SortButton isSorted={isSorted} toggleSort={toggleSort} />
			<FieldSearch searchValue={searchValue} setSearchValue={setSearchValue} />
			<FieldNewTodo
				isCreating={isCreating}
				addTodos={addTodos}
				inputValue={inputValue}
				setInputValue={setInputValue}
			/>
		</div>
	);
}
