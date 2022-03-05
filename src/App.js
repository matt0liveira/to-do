import React from 'react'
import { BoxContainer } from './AppStyle'
import AddTask from './components/AddTask/AddTask'
import Header from './components/Header/Header'
import TaskList from './components/TaskList/TaskList'

export default function() {
  return (
    <BoxContainer>
      <Header />
      <AddTask />
      <TaskList />
    </BoxContainer>
  )
}