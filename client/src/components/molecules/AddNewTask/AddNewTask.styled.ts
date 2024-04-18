import { styled } from 'styled-components'

import { colors, transitions } from '@assets/styles/variables'

interface StyledFormProps {
  $isFocused: boolean
  $isHover: boolean
}

export const StyledAddNewTask = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
`

export const StyledForm = styled.form<StyledFormProps>`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border: 1px solid
    rgba(255, 255, 255, ${({ $isFocused, $isHover }) => ($isFocused ? '0.5' : $isHover ? '0.25' : '0.08')});
  border-radius: 9999px;
  background-color: ${colors.color6};
  transition: all ${transitions.default.duration} ${transitions.default.easingFunction};
`
