import { ChangeEvent, FC, FormEvent, createRef, memo, useState } from 'react'

import { StyledAddNewTask, StyledForm } from './AddNewTask.styled'

import { AddNewTaskButton } from '@components/atoms/Buttons/AddNewTaskButton/AddNewTaskButton'
import { AddNewTaskInput } from '@components/atoms/Inputs/AddNewTaskInput/AddNewTaskInput'
import { ResetInputButton } from '@components/atoms/Buttons/ResetInputButton/ResetInputButton'

import { ToggleSwitch } from '@components/molecules/ToggleSwitch/ToggleSwitch'

export const AddNewTaskForm: FC = memo(() => {
  const taskTypes = ['R', 'D']
  const [isFocused, setIsFocused] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const [inputVlue, setInputValue] = useState<string>('')
  const [selectedTaskType, setSelectedTaskType] = useState<string>(taskTypes[0])
  const inputRef = createRef<HTMLInputElement>()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setInputValue('')
    inputRef.current?.blur()
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  function handleResetButtonClick() {
    setInputValue('')
  }

  function handleToggleButtonClick(taskType: string) {
    setSelectedTaskType(taskType)
  }

  return (
    <StyledAddNewTask>
      <StyledForm $isFocused={isFocused} $isHover={isHover} onSubmit={handleSubmit}>
        <AddNewTaskButton />
        <AddNewTaskInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onChange={handleInputChange}
          value={inputVlue}
          ref={inputRef}
        />
        <ResetInputButton hasInputValue={Boolean(inputVlue)} onClick={handleResetButtonClick} />
      </StyledForm>
      <ToggleSwitch values={taskTypes} selectedValue={selectedTaskType} onClick={handleToggleButtonClick} />
    </StyledAddNewTask>
  )
})
