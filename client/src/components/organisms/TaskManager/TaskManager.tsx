import { FC, memo } from 'react'

import { StyledTaskManager } from './TaskManager.styled'

import { AddNewTaskForm } from '@components/molecules/AddNewTask/AddNewTask'
import { Task } from '@components/molecules/Task/Task'

export const TaskManager: FC = memo(() => {
  return (
    <StyledTaskManager>
      <AddNewTaskForm />
      <Task />
    </StyledTaskManager>
  )
})
