import styled from 'styled-components'

import { colors, transitions } from '@assets/styles/variables'

interface StyledDeleteTaskButtonProps {
  $isDeleted: boolean
}

export const StyledDeleteTaskButton = styled.button<StyledDeleteTaskButtonProps>`
  fill: ${({ $isDeleted }) => ($isDeleted ? colors.error : colors.white)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  margin: 0 0 0 auto;
  padding: 0;
  border: 0;
  background-color: transparent;
  transition: all ${transitions.default.duration} ${transitions.default.easingFunction};

  @media (hover: hover) {
    cursor: pointer;

    &:hover {
      fill: ${colors.error};
    }
  }
`
