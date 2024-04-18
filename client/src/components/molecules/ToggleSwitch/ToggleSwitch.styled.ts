import { styled } from 'styled-components'

import { colors, transitions } from '@assets/styles/variables'

interface StyledToggleSwitchActiveButtonProps {
  $width: number
  $height: number
  $offset: number
}

export const StyledToggleSwitch = styled.div`
  gap: 0.25rem;
  display: flex;
  position: relative;
  align-items: center;
`

export const StyledToggleSwitchActiveButton = styled.div<StyledToggleSwitchActiveButtonProps>`
  opacity: 0;
  z-index: -1;
  position: absolute;
  top: 50%;
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  border-radius: 9999px;
  background-color: ${colors.color6};
  box-shadow:
    0px 0px 5px 0px rgba(0, 0, 0, 0.05),
    0px 2px 10px 0px rgba(0, 0, 0, 0.2),
    inset 0px 0px 1px 0px rgba(255, 255, 255, 0.15);
  transition: all ${transitions.default.duration} cubic-bezier(0.15, 0.3, 0.25, 1);
  animation: 0s ease-in 0.3s opacity forwards;
  transform: translate(${({ $offset }) => `${$offset}px`}, -50%);
`
