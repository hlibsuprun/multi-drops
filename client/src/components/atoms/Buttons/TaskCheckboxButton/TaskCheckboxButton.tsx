import { FC, memo } from 'react'

import { StyledSpan, StyledTaskCheckboxButton } from './TaskCheckboxButton.styled'

interface TaskCheckboxButtonProps {
  isChecked: boolean
  onClick: () => void
}

export const TaskCheckboxButton: FC<TaskCheckboxButtonProps> = memo(({ isChecked, onClick }) => {
  return (
    <StyledTaskCheckboxButton onClick={onClick} $isChecked={isChecked}>
      <StyledSpan $isChecked={isChecked} />
    </StyledTaskCheckboxButton>
  )
})
