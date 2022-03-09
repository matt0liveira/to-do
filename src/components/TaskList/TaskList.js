import React, { useEffect, useState } from 'react'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { useAppSelector } from '../../redux/hooks/useAppSelector'
import { useDispatch } from 'react-redux'
import { removeTask, toggleFavorite, toggleConclude } from '../../redux/reducers/taskReducer'
import { TaskListContainer } from './TaskListStyle'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import StarIcon from '@mui/icons-material/Star'

export default function() {
  let tasks = useAppSelector(state => state.task)
  const dispatch = useDispatch()
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    let sortTaskList = [...tasks]
    sortTaskList.sort(item => item.favorite ? -1 : 1)
    tasks = sortTaskList
    setTaskList(tasks)
  }, [tasks])

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList))
  }, [taskList])

  function handleRemoveTask(id) {
    dispatch(removeTask({
      id: id
    }))
  }

  function handleToggleFavorite(id) {
    dispatch(toggleFavorite({id: id}))
  }

  function handleToggleConclude(id) {
    dispatch(toggleConclude({id: id}))
  }

  let d = new Date()
	let day = d.getDate()
	let month = d.getMonth()
	day = day < 10 ? '0' + day : day
  month++
	month = month < 10 ? '0' + month : month
	let year = d.getFullYear()
	let	currentDateFormatted = `${day}/${month}/${year}`

  return (
		<TaskListContainer>
      {taskList.length === 0 && <h2 style={{ color: '#333' }}>Não há tarefas</h2>}
      {taskList.map((item, key) => (
        <div className="taskList--item" key={ key } style={{ backgroundColor: item.favorite ? '#ffffe0' : '', borderColor: item.favorite ? '#fdc308' : '', color: item.favorite ? '#fdc308' : '', textDecoration: item.status === 'done' ? 'line-through' : 'none' }}>
          <div className="taskList--info">
            <button className="btn--conclude" onClick={() => handleToggleConclude(item.id)}>
              {item.status === 'done' &&
                <CheckCircleIcon style={{ color: '#198754' }} />
              }

              {item.status === 'pending' &&
                <CheckCircleOutlineIcon style={{ color: '#198754' }} />
              }
            </button>
            <p>{ item.title }</p>
            <div className="divider" style={{ backgroundColor: item.favorite ? '#fdc308' : '' }} /> 
            { item.date ===  currentDateFormatted ? 'Hoje' : item.date  }
          </div>
        
          <div className="taskList--actions">
            <button className="btn--favorite" onClick={() => handleToggleFavorite(item.id)}>
              {item.favorite &&
                <StarIcon style={{ color: '#fdc308' }} />
              }

              {!item.favorite &&
                <StarOutlineIcon style={{ color: '#fdc308' }} />
              }
            </button>

            <button className="btn--remove" onClick={() => handleRemoveTask(item.id)}>
              <RemoveCircleOutlineIcon style={{ color: '#bb2d3b' }} />
            </button>
          </div>
        </div>
      ))}
		</TaskListContainer>
	)
}