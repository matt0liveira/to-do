import React, { useEffect, useState } from 'react'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { useAppSelector } from '../../redux/hooks/useAppSelector'
import { useDispatch } from 'react-redux'
import { removeTask, toggleFavorite, toggleConclude } from '../../redux/reducers/taskReducer'

export default function() {
  let tasks = useAppSelector(state => state.task)
  const dispatch = useDispatch()
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    const sortTaskList = [...tasks]
    sortTaskList.sort(item => item.favorite ? -1 : 1)
    tasks = [...sortTaskList]
    setTaskList(tasks)
    console.log(tasks)
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
    dispatch(toggleFavorite({
      id: id
    }))
  }

  function handleToggleConclude(id) {
    dispatch(toggleConclude({
      id: id
    }))
  }

  return (
		<div className="taskList">
      {taskList.map((item, key) => (
        <div className="taskList--item" key={ key }>
          <button className="btn--conclude" onClick={() => handleToggleConclude(item.id)}>
            <CheckCircleOutlineIcon />
          </button>

          <p>
            { item.title }
          </p>
        
          <button className="btn--favorite" onClick={() => handleToggleFavorite(item.id)}>
            <StarOutlineIcon />
          </button>

          <button className="btn--remove" onClick={() => handleRemoveTask(item.id)}>
           <RemoveCircleOutlineIcon />
          </button>
        </div>
      ))}
		</div>
	)
}