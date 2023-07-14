import React from 'react'
import Home from '../Home/Home'
import AddTodo from '../AddTodo/AddTodo'

const TodoList = ({ todos, isCreating, requestAddTodo, handleSortOrderChange, setSearchValue }) => {



	return (
		<div>
			<AddTodo
				isCreating={isCreating}
				requestAddTodo={requestAddTodo}
				handleSortOrderChange={handleSortOrderChange}
				setSearchValue={setSearchValue}
			/>
			<Home todos={todos} />
		</div>
	)
}

export default TodoList
