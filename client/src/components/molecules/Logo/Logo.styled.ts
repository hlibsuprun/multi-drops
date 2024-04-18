import styled from 'styled-components'

import { colors, font, screens } from '@assets/styles/variables'

export const StyledLogo = styled.div`
  gap: 7px;
  display: flex;
  align-items: center;
  color: ${colors.white};
  font-weight: 700;
  font-size: ${font.text.lg.size};
  line-height: ${font.text.lg.height};
  letter-spacing: 0.25px;
  user-select: none;

  @media (min-width: ${screens.mobileL + 'px'}) {
    display: none;
  }
`
