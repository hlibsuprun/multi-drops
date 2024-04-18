import { ChangeEvent, FC, KeyboardEvent, memo } from 'react'

import { StyledAutosizeTextArea } from './AutosizeTextArea.styled'

interface AutosizeTextAreaProps {
  onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  value: string
  isChecked: boolean
}

export const AutosizeTextArea: FC<AutosizeTextAreaProps> = memo(({ onKeyDown, onChange, value, isChecked }) => {
  return (
    <StyledAutosizeTextArea
      onKeyDown={onKeyDown}
      onChange={onChange}
      $isChecked={isChecked}
      disabled={isChecked}
      value={value}
    />
  )
})
