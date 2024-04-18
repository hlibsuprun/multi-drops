import { FC, memo, useState } from 'react'

import { StyledBlur, StyledHeader } from './Header.styled'

import { NavbarControlButton } from '@components/atoms/Buttons/NavbarControlButton/NavbarControlButton'
import { Logo } from '@components/molecules/Logo/Logo'
import { Navbar } from '@components/molecules/Navbar/Navbar'

export const Header: FC = memo(() => {
  const links: string[] = ['tasks', 'drops', 'accounts']
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedLink, setSelected] = useState<string>(links[0])

  const handleNavbarLinkClick = (link: string): void => {
    setIsOpen(false)
    setSelected(link)
  }

  return (
    <StyledHeader>
      <Logo />
      <Navbar
        handleControlButtonClick={() => setIsOpen(false)}
        handleNavbarLinkClick={handleNavbarLinkClick}
        links={links}
        selectedLink={selectedLink}
        isOpen={isOpen}
      />
      <NavbarControlButton iconName="hamburger" onClick={() => setIsOpen(true)} />
      <StyledBlur onClick={() => setIsOpen(false)} $isOpen={isOpen} />
    </StyledHeader>
  )
})
