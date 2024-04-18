import { FC, memo } from 'react'

import { StyledDeleteTaskButton } from './DeleteTaskButton.styled'

import { TrashIcon } from '@components/atoms/Icons/TrashIcon'

interface DeleteTaskButtonProps {
  onClick: () => void
  isDeleted: boolean
}

export const DeleteTaskButton: FC<DeleteTaskButtonProps> = memo(({ onClick, isDeleted }) => {
  return (
    <StyledDeleteTaskButton onClick={onClick} $isDeleted={isDeleted}>
      <TrashIcon size="16px" />
    </StyledDeleteTaskButton>
  )
})
