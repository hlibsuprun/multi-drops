import { styled } from 'styled-components'

import { colors, transitions } from '@assets/styles/variables'

interface StyledTaskCheckboxButtonProps {
  $isChecked: boolean
}

interface StyledSpanProps {
  $isChecked: boolean
}

export const StyledTaskCheckboxButton = styled.button<StyledTaskCheckboxButtonProps>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 0;
  background-color: transparent;

  @media (hover: hover) {
    cursor: pointer;

    &:hover > span::before {
      background-color: ${colors.accent};
    }
  }

  &::before,
  &::after {
    translate: 0 50%;
    position: absolute;
    top: 50%;
    height: 2px;
    border-radius: 2px;
    content: '';
    background: ${colors.accent};
  }

  &::before {
    right: 50%;
    width: 0px;
    animation: ${({ $isChecked }) =>
      $isChecked ? `check-01 ${transitions.default.duration} ${transitions.default.easingFunction} forwards` : 'none'};
    transform-origin: right bottom;
  }

  &::after {
    left: 50%;
    width: 0px;
    animation: ${({ $isChecked }) =>
      $isChecked ? `check-02 ${transitions.default.duration} ${transitions.default.easingFunction} forwards` : 'none'};
    transform-origin: left bottom;
  }
`

export const StyledSpan = styled.span<StyledSpanProps>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &::before,
  &::after {
    position: absolute;
    content: '';
  }

  &::before {
    display: block;
    width: 15px;
    height: 2px;
    border-radius: 9999px;
    background-color: ${colors.white};
    transition:
      transform 0.1s ease,
      background-color ${transitions.default.duration} ${transitions.default.easingFunction};
    transform: scale(${({ $isChecked }) => ($isChecked ? '0%' : '100%')});
  }

  &::after {
    top: 12px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    animation: ${({ $isChecked }) =>
      $isChecked ? `firework 0.4s ${transitions.default.easingFunction} forwards` : 'none'};
  }
`
