import styled from 'styled-components'

import { colors, font, screens } from '@/assets/styles/variables'

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: ${font.text.lg.size};
  line-height: ${font.text.lg.height};
  letter-spacing: 0.25px;
  font-weight: 700;
  color: ${colors.white};
  user-select: none;

  @media (min-width: ${screens.mobileL}) {
    display: none;
  }
`
