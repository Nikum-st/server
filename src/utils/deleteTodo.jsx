import { db } from '../data/firebase';
import { ref, remove } from 'firebase/database';

export default function deleteTodo() {
	const requestDelete = async (id) => {
		const deleteDBRef = ref(db, `todos/${id}`);
		try {
			await remove(deleteDBRef);
			console.log('Задача удалена!');
		} catch (error) {
			console.error('Ошибка при удалении задачи:', error);
		}
	};

	return {
		requestDelete,
	};
}
