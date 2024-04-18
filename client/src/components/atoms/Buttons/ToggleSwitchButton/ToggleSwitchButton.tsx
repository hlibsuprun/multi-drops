import { forwardRef, memo } from 'react'

import { StyledToggleSwitchButton } from './ToggleSwitchButton.styled'

interface ToggleSwitchButtonProps {
  value: string
  selectedValue: string
  onClick: (value: string) => void
}

type Ref = HTMLButtonElement

export const ToggleSwitchButton = memo(
  forwardRef<Ref, ToggleSwitchButtonProps>(({ value, selectedValue, onClick }, ref) => {
    return (
      <StyledToggleSwitchButton
        key={value}
        ref={ref}
        onClick={() => onClick(value)}
        $isSelected={selectedValue === value}
      >
        {value}
      </StyledToggleSwitchButton>
    )
  }),
)
