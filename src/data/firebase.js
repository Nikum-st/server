import { getDatabase } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyBZPja5XprrvpBWKzHah58bpjQCgVwDCfs',
	authDomain: 'todosproject-1d015.firebaseapp.com',
	projectId: 'todosproject-1d015',
	storageBucket: 'todosproject-1d015.firebasestorage.app',
	messagingSenderId: '231810536533',
	appId: '1:231810536533:web:936b5aec28d9d7a688f0dc',
	databaseURL:
		'https://todosproject-1d015-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
