import { styled } from 'styled-components'

import { colors, font } from '@assets/styles/variables'

export const StyledAddNewTaskInput = styled.input`
  padding-inline: 0.75rem;
  width: 100%;
  padding-top: 0;
  border: 0;
  outline: none;
  color: ${colors.white};
  font-size: ${font.text.base.size};
  line-height: ${font.text.base.height};
  background: transparent;
`
