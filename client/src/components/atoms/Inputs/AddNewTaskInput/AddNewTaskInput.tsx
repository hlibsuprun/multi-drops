import { ChangeEvent, forwardRef, memo } from 'react'

import { StyledAddNewTaskInput } from './AddNewTaskInput.styled'

interface AddNewTaskInputProps {
  onFocus: () => void
  onBlur: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
}

type Ref = HTMLInputElement

export const AddNewTaskInput = memo(
  forwardRef<Ref, AddNewTaskInputProps>(({ onFocus, onBlur, onMouseEnter, onMouseLeave, onChange, value }, ref) => {
    return (
      <StyledAddNewTaskInput
        ref={ref}
        type="text"
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onChange={onChange}
        placeholder="Your next task..."
      />
    )
  }),
)
