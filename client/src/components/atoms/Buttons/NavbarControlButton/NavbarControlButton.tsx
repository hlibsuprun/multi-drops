import { FC, memo } from 'react'

import { StyledNavbarControlButton } from './NavbarControlButton.styled'

import { HamburgerIcon } from '@components/atoms/Icons/HamburgerIcon'
import { CloseIcon } from '@components/atoms/Icons/CloseIcon'

interface NavbarControlButtonProps {
  onClick: () => void
  iconName: 'hamburger' | 'close'
}

export const NavbarControlButton: FC<NavbarControlButtonProps> = memo(({ onClick, iconName }) => {
  const iconSize = '24px'

  return (
    <StyledNavbarControlButton onClick={onClick}>
      {iconName === 'hamburger' && <HamburgerIcon size={iconSize} />}
      {iconName === 'close' && <CloseIcon size={iconSize} />}
    </StyledNavbarControlButton>
  )
})
