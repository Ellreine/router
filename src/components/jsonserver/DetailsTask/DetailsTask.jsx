import React from 'react'
import { useState } from 'react'
import { Row, Col, Button, FormControl } from 'react-bootstrap'
import s from './DetailsTask.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSave, faTrash, faSquare, faCheckSquare, faHome, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'

const DetailsTask = ({ todos, requestDeleteTodo, isDeleting, isUpdating, requestUpdateTodo }) => {
	const [value, setValue] = useState(null)
	const [edit, setEdit] = useState(null)
	const [deleteing, setDeleteing] = useState(null)

	const editTodo = (id, title) => {
		setEdit(id)
		setValue(title)
	}

	let detailsTask = {};
	const params = useParams()


	todos.forEach((e) => {
		if (e.id == params.id) {
			detailsTask = e;
		}
	})
	const { id, title, completed } = detailsTask
	return (
		<div className={s.contentItems}>
			<Link to="/" ><Button className={s.linkItem + ' ' + s.btn}> <FontAwesomeIcon icon={faHome} /></Button></Link>
			<div key={id} className={s.taskItem}>
				{edit === id ? (
					<Row className={s.row}>
						<Col className={s.listItems}>
							<FormControl onChange={e => setValue(e.target.value)} value={value} />
							<Button onClick={() => requestUpdateTodo(id, completed, value)} size='sm' className={s.btn}>
								<FontAwesomeIcon icon={faSave} />
							</Button>
						</Col>
					</Row>
				) : (
					<div className={s.listItems}>
						<div className={completed ? s.textTitle + ' ' + s.close : s.textTitle}>{title}</div>
						<div className={s.btnItems}>
							<Button onClick={() => requestUpdateTodo(id, !completed, title)} className={s.btn} disabled={isUpdating} size='sm'>
								{!completed ? <FontAwesomeIcon icon={faSquare} /> : <FontAwesomeIcon icon={faCheckSquare} />}
							</Button>
							<Button onClick={() => editTodo(id, title)} disabled={isUpdating} className={s.btn} size='sm'>
								<FontAwesomeIcon icon={faEdit} />
							</Button>
							<Button onClick={() => setDeleteing(id)
							} disabled={isDeleting} size='sm' className={s.btn}>
								<FontAwesomeIcon icon={faTrash} />
							</Button>


						</div>
					</div>
				)}
				{deleteing === id ?
					(<div className={s.blackBackground}>
						<div className={s.deleteing}>
							<h3>Удалить задачу?</h3>
							<div className={s.btnItems}>
								<Link to="/"> <Button onClick={() => requestDeleteTodo(id)} disabled={isDeleting} size='sm' className={s.btn}>
									<FontAwesomeIcon icon={faCheck} />
								</Button>
								</Link>
								<Button onClick={() => setDeleteing(null)
								} disabled={isDeleting} size='sm' className={s.btn}>
									<FontAwesomeIcon icon={faXmark} />
								</Button>
							</div>
						</div>
					</div>)
					: ""
				}
			</div>
		</div >
	)
}

export default DetailsTask
