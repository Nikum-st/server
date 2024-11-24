import { db } from '../data/firebase';
import { ref, set } from 'firebase/database';

export default function editingTodo() {
	const requestUpdate = async (id, newValue) => {
		const editingDBRef = ref(db, `todos/${id}`);

		try {
			await set(editingDBRef, { title: newValue });
		} catch (error) {
			console.error('Ошибка при редактировании задачи:', error);
		}
	};

	return { requestUpdate };
}
