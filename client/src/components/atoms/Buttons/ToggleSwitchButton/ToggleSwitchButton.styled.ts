import styled from 'styled-components'

import { colors, font, transitions } from '@assets/styles/variables'

interface StyledToggleSwitchButtonProps {
  $isSelected: boolean
}

export const StyledToggleSwitchButton = styled.button<StyledToggleSwitchButtonProps>`
  height: 2rem;
  margin: 0;
  padding: 0;
  padding: 0.25rem 0.75rem;
  border: 0;
  outline: 0;
  color: ${({ $isSelected }) => ($isSelected ? colors.accent : colors.color5)};
  font-size: ${font.text.sm.size};
  line-height: ${font.text.sm.height};
  background-color: transparent;
  transition: all ${transitions.default.duration} ${transitions.default.easingFunction};

  @media (hover: hover) {
    cursor: ${({ $isSelected }) => (!$isSelected ? 'pointer' : 'default')};

    &:hover {
      opacity: ${({ $isSelected }) => !$isSelected && '0.5'};
    }
  }
`
