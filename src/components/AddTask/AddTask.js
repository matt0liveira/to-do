import React, { useState } from 'react'
import { Container } from './AddTaskStyle'
import AddIcon from '@mui/icons-material/Add'
import HeaderAddTask from '../HeaderAddTask/HeaderAddTask'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/reducers/taskReducer'
import { useAppSelector } from '../../redux/hooks/useAppSelector'

export default function() {
	const dispatch = useDispatch()
	const tasks = useAppSelector(item => item.task)

	let d = new Date()
	let day = d.getDate()
	let month = d.getMonth()
	day = day < 10 ? '0' + day : day
	month = month < 10 ? '0' + month : month
	let year = d.getFullYear()
	let	currentDate = `${year}-${month}-${day}`

	const [task, setTask] = useState({
		title: '',
		date: currentDate,
		favorite: false,
		status: 'pending'
	})

	function handleSubmit(e) {
		e.preventDefault()
		dispatch(addTask({
			title: task.title,
			date: task.date,
			favorite: task.favorite,
			status: task.status
		}))
		setTask({
			title: '',
			date: currentDate
		})
	}

  return(
		<Container>
			<HeaderAddTask />
			<form className="formAddTask" onSubmit={ handleSubmit }>
				<input 
					type="text"
					name="title"
					id="title"
					placeholder="Adicionar uma tarefa" 
					value={ task.title }
					onChange={ e => setTask({ title: e.target.value, date: task.date }) } 
					required />

				<div className="task--bottomLine">
					<div className="task--inputsOptionals">
						<input 
							type="date" 
							name="task--date" 
							id="task--date"
							value={ task.date }
							min={ currentDate }
							onChange={ e => setTask({ title: task.title, date: e.target.value }) } />
					</div>

					<button 
						className="btn-action btn--submit"
						disabled={!task.title ? true : false}>
							<AddIcon />
							Adicionar
					</button>
				</div>
			</form>
		</Container>
	)
}