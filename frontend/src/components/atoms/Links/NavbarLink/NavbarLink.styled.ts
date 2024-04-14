import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors, font, screens } from '@assets/styles/variables'

interface StyledNavbarLinkProps {
  readonly $isActive: boolean
}

export const StyledNavbarLink = styled(Link)<StyledNavbarLinkProps>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0 0.75rem 0.75rem;
  font-size: ${font.text.base.size};
  line-height: ${font.text.base.height};
  text-transform: capitalize;
  color: ${({ $isActive }) => ($isActive ? colors.accent : colors.white)};
  transition: all 0.5s ease;
  user-select: none;

  @media (min-width: ${screens.mobileL}) {
    padding: 0.75rem 1.5rem;
    font-size: ${font.text.sm.size};
    line-height: ${font.text.sm.height};
    color: ${({ $isActive }) => ($isActive ? colors.accent : colors.white)};
    cursor: ${({ $isActive }) => ($isActive ? 'default' : 'pointer')};

    @media (hover: hover) {
      &:hover {
        color: ${({ $isActive }) => !$isActive && colors.accent};
      }
    }
  }
`
