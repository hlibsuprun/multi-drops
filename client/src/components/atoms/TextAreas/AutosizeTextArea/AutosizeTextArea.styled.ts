import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

import { colors, font } from '@assets/styles/variables'

interface StyledAutosizeTextAreaProps {
  $isChecked: boolean
}

export const StyledAutosizeTextArea = styled(TextareaAutosize)<StyledAutosizeTextAreaProps>`
  opacity: ${({ $isChecked }) => ($isChecked ? '0.5' : '1')};
  padding: 0;
  border: 0;
  outline: 0;
  overflow: hidden;
  color: ${({ $isChecked }) => ($isChecked ? colors.color8 : colors.white)};
  font-size: ${font.text.base.size};
  line-height: ${font.text.base.height};
  font-family: ${font.family};
  text-decoration: ${({ $isChecked }) => $isChecked && 'line-through'};
  cursor: ${({ $isChecked }) => ($isChecked ? 'default' : 'text')};
  resize: none;
  background-color: transparent;
`
