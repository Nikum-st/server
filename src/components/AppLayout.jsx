import { Routes, Route } from 'react-router-dom';
import {
	style,
	TodoList,
	Loading,
	NotFound,
	TodoItem,
	LoadingError,
	ContainerControls,
} from './index';

export default function AppLayout({
	isLoading,
	isSorted,
	toggleSort,
	searchValue,
	setSearchValue,
	isCreating,
	addTodos,
	inputValue,
	setInputValue,
	filteredTodos,
	sortedAndFilteredTodos,
	requestUpdate,
	setEditingId,
	editingId,
	requestDelete,
}) {
	return (
		<div className={style.App}>
			<Routes>
				<Route
					path="/"
					element={
						isLoading ? (
							<Loading />
						) : (
							<>
								<ContainerControls
									isSorted={isSorted}
									toggleSort={toggleSort}
									searchValue={searchValue}
									setSearchValue={setSearchValue}
									isCreating={isCreating}
									addTodos={addTodos}
									inputValue={inputValue}
									setInputValue={setInputValue}
								/>
								{sortedAndFilteredTodos.length > 0 ? (
									<TodoList todos={sortedAndFilteredTodos} />
								) : (
									<p>Задачи не найдены</p>
								)}
							</>
						)
					}
				/>
				<Route
					path="/todos/:id"
					element={
						<TodoItem
							requestUpdate={requestUpdate}
							todos={sortedAndFilteredTodos}
							setEditingId={setEditingId}
							editingId={editingId}
							requestDelete={requestDelete}
						/>
					}
				/>
				<Route path="/product-load-error" element={<LoadingError />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}
