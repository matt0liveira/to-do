import React, { useState } from 'react'
import { AddTaskContainer } from './AddTaskStyle'
import AddIcon from '@mui/icons-material/Add'
import HeaderAddTask from '../HeaderAddTask/HeaderAddTask'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/reducers/taskReducer'

export default function() {
	const dispatch = useDispatch()

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

	function formatDate(date) {
		let arrayDate = date.split('-')
		arrayDate[1]++
		arrayDate[1] = arrayDate[1] < 10 ? '0' + arrayDate[1] : arrayDate[1]
		return `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`
	}

	function handleSubmit(e) {
		e.preventDefault()
		dispatch(addTask({
			title: task.title,
			date: formatDate(task.date),
			favorite: task.favorite,
			status: task.status
		}))
		setTask({
			title: '',
			date: currentDate
		})
	}

  return(
		<AddTaskContainer>
			<HeaderAddTask />
			<form className="formAddTask" onSubmit={ handleSubmit }>
				<div className="formAddTask--field">
					<AddIcon style={{ color: '#999', marginLeft: '10px'}} />
					<input 
						type="text"
						name="task--title"
						id="task--title"
						placeholder="Adicionar uma tarefa" 
						value={ task.title }
						onChange={ e => setTask({ title: e.target.value, date: task.date }) } 
						autoComplete="off"
						required />
				</div>

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
						className="btn-submit"
						disabled={!task.title ? true : false}
						style={{backgroundColor: task.title ? '#007bff' : '#999', color: task.title ? '#fff' : ''}}>
							<AddIcon />
							Adicionar
					</button>
				</div>
			</form>
		</AddTaskContainer>
	)
}