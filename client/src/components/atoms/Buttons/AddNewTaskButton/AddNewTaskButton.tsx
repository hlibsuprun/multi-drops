import { FC, memo } from 'react'

import { StyledAddNewTaskButton } from './AddNewTaskButton.styled'

import { PlusIcon } from '@components/atoms/Icons/PlusIcon'

export const AddNewTaskButton: FC = memo(() => {
  return (
    <StyledAddNewTaskButton type="submit">
      <PlusIcon size="20px" />
    </StyledAddNewTaskButton>
  )
})
