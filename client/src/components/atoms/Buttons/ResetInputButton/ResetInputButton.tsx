import { FC, memo } from 'react'

import { StyledResetInputButton } from './ResetInputButton.styled'

import { ResetIcon } from '@components/atoms/Icons/ResetIcon'

interface ResetInputButtonProps {
  onClick: () => void
  hasInputValue: boolean
}

export const ResetInputButton: FC<ResetInputButtonProps> = memo(({ onClick, hasInputValue }) => {
  return (
    <StyledResetInputButton type="reset" onClick={onClick} $hasInputValue={hasInputValue}>
      <ResetIcon size="20px" />
    </StyledResetInputButton>
  )
})
