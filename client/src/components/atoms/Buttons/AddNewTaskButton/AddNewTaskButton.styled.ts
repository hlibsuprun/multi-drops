import styled from 'styled-components'

import { colors, transitions } from '@assets/styles/variables'

export const StyledAddNewTaskButton = styled.button`
  stroke: ${colors.white};
  display: flex;
  padding: 0.5rem;
  border: 0;
  border-radius: 100%;
  background-color: ${colors.color4};
  transition: all ${transitions.default.duration} ${transitions.default.easingFunction};

  @media (hover: hover) {
    cursor: pointer;

    &:hover {
      stroke: ${colors.accent};
    }
  }

  &:active {
    stroke: ${colors.accent};
    transform: scale(0.9);
  }
`
