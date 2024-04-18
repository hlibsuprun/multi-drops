import styled from 'styled-components'

import { transitions } from '@assets/styles/variables'

interface StyledResetInputButton {
  $hasInputValue: boolean
}

export const StyledResetInputButton = styled.button<StyledResetInputButton>`
  fill: rgba(255, 255, 255, 0.5);
  display: flex;
  opacity: ${({ $hasInputValue }) => ($hasInputValue ? '1' : '0')};
  padding: 0;
  border: 0;
  border-radius: 9999px;
  background-color: transparent;
  transition: fill ${transitions.default.duration} ${transitions.default.easingFunction};

  svg {
    border-radius: 9999px;
  }

  @media (hover: hover) {
    cursor: ${({ $hasInputValue }) => ($hasInputValue ? 'pointer' : 'default')};

    &:hover {
      fill: rgba(255, 255, 255, 1);
    }
  }
`
