import { forwardRef, memo } from 'react'
import { useLocation } from 'react-router-dom'

import { StyledNavbarLink } from './NavbarLink.styled'

interface NavbarLinkProps {
  name: string
  onClick: () => void
}

type Ref = HTMLAnchorElement

export const NavbarLink = memo(
  forwardRef<Ref, NavbarLinkProps>(({ name, onClick }, ref) => {
    const { pathname } = useLocation()

    return (
      <StyledNavbarLink ref={ref} to={name} onClick={onClick} $isActive={pathname === `/${name}`}>
        {name}
      </StyledNavbarLink>
    )
  }),
)
