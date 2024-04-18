import styled from 'styled-components'

import { transitions } from '@assets/styles/variables'

interface StyledTaskProps {
  $isDeleted: boolean
}

export const StyledTask = styled.div<StyledTaskProps>`
  grid-template-columns: 3rem auto 3rem;
  display: grid;
  position: relative;
  align-items: center;
  width: 100%;
  padding: 0.75rem;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.08);
  transition: transform ${transitions.default.duration} ${transitions.default.easingFunction};
  transform: ${({ $isDeleted }) => $isDeleted && 'translateX(-100%)'};
`
