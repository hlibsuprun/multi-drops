import { FC, createRef, memo, useEffect, useState } from 'react'

import { StyledItem, StyledList, StyledNavbar, StyledNavbarActiveLink, StyledNavbarControls } from './Navbar.styled'

import { screens } from '@assets/styles/variables'

import useScreenSize from '@hooks/useScreenSize'

import { NavbarControlButton } from '@components/atoms/Buttons/NavbarControlButton/NavbarControlButton'
import { NavbarLink } from '@components/atoms/Links/NavbarLink/NavbarLink'

import { Logo } from '@components/molecules/Logo/Logo'

interface NavbarProps {
  handleControlButtonClick: () => void
  handleNavbarLinkClick: (link: string) => void
  links: string[]
  selectedLink: string
  isOpen: boolean
}

export const Navbar: FC<NavbarProps> = memo(
  ({ handleControlButtonClick, handleNavbarLinkClick, links, selectedLink, isOpen }) => {
    const screenSize = useScreenSize()
    const [offset, setOffset] = useState<number>(0)
    const [width, setWidth] = useState<number>(0)
    const [height, setHeight] = useState<number>(0)
    const activeLinkRef = createRef<HTMLAnchorElement>()
    const inactiveLinkRef = createRef<HTMLAnchorElement>()

    useEffect(() => {
      const activeButtonElement: HTMLAnchorElement | null = activeLinkRef.current

      setTimeout(() => {
        if (activeButtonElement && screenSize.width > screens.mobileL) {
          setOffset(activeButtonElement.offsetLeft)
          setWidth(activeButtonElement.clientWidth)
          setHeight(activeButtonElement.clientHeight)
        }
      }, 100)
    }, [activeLinkRef, screenSize.width])

    return (
      <StyledNavbar $isOpen={isOpen}>
        <StyledNavbarControls>
          <Logo />
          <NavbarControlButton iconName="hamburger" onClick={handleControlButtonClick} />
        </StyledNavbarControls>
        <StyledList>
          {links.map((link) => (
            <StyledItem key={link}>
              <NavbarLink
                ref={selectedLink === link ? activeLinkRef : inactiveLinkRef}
                name={link}
                onClick={() => handleNavbarLinkClick(link)}
              />
            </StyledItem>
          ))}
        </StyledList>
        <StyledNavbarActiveLink $width={width} $height={height} $offset={offset} />
      </StyledNavbar>
    )
  },
)
