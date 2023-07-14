import styles from './TodoApp.module.css'
import { useState } from 'react'
import Header from './Header/Header'
import TodoList from './TodoList/TodoList'
import { useRequestAddTodo, useRequestDeleteTodo, useRequestGetTodos, useRequestUpdateTodo } from './Hooks'
import { Container } from 'react-bootstrap'
import useDebouncedSortAndFilterTodos from './Utils.js/useSortAndFilterTodos'
import { Routes, Route } from 'react-router-dom'

import DetailsTask from './DetailsTask/DetailsTask'

function TodoApp() {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false)
	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag)

	const { isLoading, todos } = useRequestGetTodos(refreshTodosFlag)
	const { isCreating, requestAddTodo } = useRequestAddTodo(refreshTodos)
	const { isDeleting, requestDeleteTodo } = useRequestDeleteTodo(refreshTodos)
	const { isUpdating, requestUpdateTodo } = useRequestUpdateTodo(refreshTodos)
	const [sortOrder, setSortOrder] = useState('asc')
	const [searchValue, setSearchValue] = useState('')
	const debouncedSortAndFilteredTodos = useDebouncedSortAndFilterTodos(todos, sortOrder, searchValue, 700)

	const handleSortOrderChange = order => {
		setSortOrder(order)
	}

	return (
		<Container>
			<Header />
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<Routes>
					<Route
						path='/'
						element={
							<TodoList
								isCreating={isCreating}
								requestAddTodo={requestAddTodo}
								handleSortOrderChange={handleSortOrderChange}
								setSearchValue={setSearchValue}
								todos={debouncedSortAndFilteredTodos}
							/>
						}
					/>
					<Route
						path='task/:id'
						element={
							<DetailsTask
								todos={debouncedSortAndFilteredTodos}
								requestDeleteTodo={requestDeleteTodo}
								isDeleting={isDeleting}
								requestUpdateTodo={requestUpdateTodo}
								isUpdating={isUpdating}
							/>
						}
					/>
				</Routes>
			)}
		</Container>
	)
}
export default TodoApp
//  json-server --watch db.json --port 3004 --delay 2000
