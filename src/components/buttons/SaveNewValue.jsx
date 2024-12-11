import style from './Buttons.module.css';

export const SaveNewValueButton = () => {
	return (
		<button className={style.saveButton} type="submit">
			Сохранить
		</button>
	);
};
