import { FC, memo } from 'react'

import { StyledNavbarHamButton } from './NavbarHamButton.styled'

import { CloseIcon } from '@components/atoms/Icons/CloseIcon'
import { HamburgerIcon } from '@components/atoms/Icons/HamburgerIcon'

interface NavbarHamButtonProps {
  name: string
  onClick: () => void
}

export const NavbarHamButton: FC<NavbarHamButtonProps> = memo(({ name, onClick }) => {
  return (
    <StyledNavbarHamButton onClick={onClick}>
      {name === 'close' ? <CloseIcon size="24px" /> : <HamburgerIcon size="24px" />}
    </StyledNavbarHamButton>
  )
})
