import { ChangeEvent, FC, KeyboardEvent, memo, useEffect, useState } from 'react'

import { StyledTask } from './Task.styled'

import { TaskCheckboxButton } from '@components/atoms/Buttons/TaskCheckboxButton/TaskCheckboxButton'
import { DeleteTaskButton } from '@components/atoms/Buttons/DeleteTaskButton/DeleteTaskButton'
import { AutosizeTextArea } from '@components/atoms/TextAreas/AutosizeTextArea/AutosizeTextArea'

const text =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, alias blanditiis? Sint aspernatur quasi maxime repellendus magnam qui autem! Nihil voluptatem nisi earum rerum corporis tenetur rem exercitationem quidem deleniti.'

export const Task: FC = memo(() => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [isDeleted, setIsDeleted] = useState<boolean>(false)
  const [textAreaValue, setTextAreaValue] = useState<string>(text)

  useEffect(() => {
    if (!textAreaValue) {
      setIsDeleted(true)
    }
  }, [textAreaValue])

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked)
  }

  function handleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTextAreaValue(event.target.value)
  }

  function handleTextareaKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.code === 'Enter') {
      event.preventDefault()
    }
  }

  return (
    <StyledTask $isDeleted={isDeleted}>
      <TaskCheckboxButton onClick={handleCheckboxClick} isChecked={isChecked} />
      <AutosizeTextArea
        onKeyDown={handleTextareaKeyDown}
        onChange={handleTextareaChange}
        isChecked={isChecked}
        value={textAreaValue}
      />
      <DeleteTaskButton onClick={() => setIsDeleted(true)} isDeleted={isDeleted} />
    </StyledTask>
  )
})
