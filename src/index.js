import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoApp from './components/jsonserver/TodoApp'
import { BrowserRouter } from 'react-router-dom'
// import Jsonplaceholder from './components/Jsonplaceholder/Jsonplaceholder'
// import Jsonserver from './components/jsonserver/Jsonserver'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			{/* <Jsonplaceholder /> */}
			{/* <Jsonserver /> */}
			<TodoApp />
		</BrowserRouter>
	</React.StrictMode>
)
