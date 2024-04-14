import { FC, createRef, memo, useEffect, useState } from 'react'

import {
  StyledActive,
  StyledBlur,
  StyledHeader,
  StyledItem,
  StyledList,
  StyledNav,
  StyledNavControls,
} from './Header.styled'

import { NavbarLink } from '@components/atoms/Links/NavbarLink/NavbarLink'
import { NavbarHamButton } from '@components/atoms/Buttons/NavbarHamButton/NavbarHamButton'
import { Logo } from '@components/molecules/Logo/Logo'

export const Header: FC = memo(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>('tasks')
  const [offset, setOffset] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const activeRef = createRef<HTMLLIElement>()
  const inactiveRef = createRef<HTMLLIElement>()
  const links: string[] = ['tasks', 'drops', 'accounts']

  useEffect(() => {
    const activeElement: HTMLLIElement | null = activeRef.current

    if (activeElement) {
      setOffset(activeElement.offsetLeft)
      setWidth(activeElement.clientWidth)
      setHeight(activeElement.clientHeight)
    }
  }, [selected, activeRef])

  const handleNavbarLinkClick = (link: string): void => {
    setIsOpen(false)
    setSelected(link)
  }

  return (
    <StyledHeader>
      <Logo />
      <StyledNav $isOpen={isOpen}>
        <StyledNavControls>
          <Logo />
          <NavbarHamButton name="close" onClick={() => setIsOpen(false)} />
        </StyledNavControls>
        <StyledActive $width={width} $height={height} $offset={offset} />
        <StyledList>
          {[
            links.map((link) => (
              <StyledItem key={link} ref={selected === link ? activeRef : inactiveRef}>
                <NavbarLink name={link} onClick={() => handleNavbarLinkClick(link)} />
              </StyledItem>
            )),
          ]}
        </StyledList>
      </StyledNav>
      <NavbarHamButton name="hamburger" onClick={() => setIsOpen(true)} />
      <StyledBlur onClick={() => setIsOpen(false)} $isOpen={isOpen} />
    </StyledHeader>
  )
})
