import React from 'react'
import { Link } from 'react-router-dom'
import s from './Home.module.css'


const Home = ({ todos }) => {
	const TITLE_LENGTH = 20;

	const limitSrt = (str, n) => {
		if (str.length > n) {
			const newSrt = str.substring(0, n) + "..."
			return newSrt
		} else return str
	}

	return (
		<div>
			<ul>
				{todos.map(({ id, title, completed }) => (
					<li key={id}>
						<Link className={s.listItems} to={`task/${id}`}>
							<div className={s.textTitle}>{limitSrt(title, TITLE_LENGTH)}</div>
							<div className={completed ? s.statusTrue : s.statusFalse}>{completed ? 'Done' : "In progress"}</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Home
