import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const slice = createSlice({
	name: 'task',
	initialState:  localStorage.taskList ? JSON.parse(localStorage.taskList) : [],
	reducers: {
		addTask: (state, action) => {
			if (action.payload?.title) {
				const newState = [...state]
				newState.push({
					id: uuidv4(),
					title: action.payload?.title,
					date: action.payload?.date,
					favorite: false,
					status: 'pending'
				})
				return newState
			}
		},

		removeTask: (state, action) => {
			if (action.payload?.id) {
				let newState = [...state]
				newState = newState.filter(item => item.id !== action.payload?.id)
				return newState
			}	
		},

		toggleFavorite: (state, action) => {
			if(action.payload?.id) {
				let newState = [...state]
				for(let i = 0; i < newState.length; i++) {
					if(newState[i].id === action.payload?.id) {
						newState[i].favorite = !newState[i].favorite
					}
				}
			}
		},

		toggleConclude: (state, action) => {
			if(action.payload?.id) {
				let newState = [...state]
				for(let i = 0; i < newState.length; i++) {
					if(newState[i].id === action.payload?.id) {
						newState[i].status === 'pending' ? newState[i].status = 'done' : newState[i].status = 'pending'
					}
				}
			}
		}
	}
})

export const { addTask, removeTask, toggleFavorite, toggleConclude } = slice.actions
export default slice.reducer