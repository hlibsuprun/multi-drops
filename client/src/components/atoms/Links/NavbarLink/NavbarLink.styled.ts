import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors, font, screens, transitions } from '@assets/styles/variables'

interface StyledNavbarLinkProps {
  readonly $isActive: boolean
}

export const StyledNavbarLink = styled(Link)<StyledNavbarLinkProps>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0 0.75rem 0.75rem;
  border-radius: 9999px;
  color: ${({ $isActive }) => ($isActive ? colors.accent : colors.white)};
  font-size: ${font.text.base.size};
  line-height: ${font.text.base.height};
  text-transform: capitalize;
  user-select: none;
  transition: all ${transitions.default.duration} ${transitions.default.easingFunction};

  @media (min-width: ${screens.mobileL + 'px'}) {
    padding: 0.75rem 1.5rem;
    color: ${({ $isActive }) => ($isActive ? colors.accent : colors.white)};
    font-size: ${font.text.sm.size};
    line-height: ${font.text.sm.height};
    cursor: ${({ $isActive }) => ($isActive ? 'default' : 'pointer')};

    @media (hover: hover) {
      &:hover {
        color: ${({ $isActive }) => !$isActive && colors.accent};
      }
    }
  }
`
