import style from './ContainerControls.module.css';
import SortButton from '../buttons/SortButton';
import FieldSearch from '../FieldSearch/FieldSearch';

export default function ContainerControls() {
	return (
		<div className={style.containerControls}>
			<SortButton />
			<FieldSearch />
		</div>
	);
}
