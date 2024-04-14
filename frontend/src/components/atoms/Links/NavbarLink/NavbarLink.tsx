import { FC, memo } from 'react'
import { useLocation } from 'react-router-dom'

import { StyledNavbarLink } from './NavbarLink.styled'

interface NavbarLinkProps {
  name: string
  onClick: () => void
}

export const NavbarLink: FC<NavbarLinkProps> = memo(({ name, onClick }) => {
  const { pathname } = useLocation()

  return (
    <StyledNavbarLink to={name} onClick={onClick} $isActive={pathname === `/${name}`}>
      {name}
    </StyledNavbarLink>
  )
})
