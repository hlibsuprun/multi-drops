import styled from 'styled-components'

import { colors, screens } from '@assets/styles/variables'

interface StyledNavProps {
  $isOpen: boolean
}

interface StyledActiveProps {
  $width: number
  $height: number
  $offset: number
}

interface StyledBlurProps {
  $isOpen: boolean
}

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.25rem 0;

  @media (min-width: ${screens.mobileL}) {
    padding: 2.5rem 0;
  }
`

export const StyledNav = styled.nav<StyledNavProps>`
  z-index: 50;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 1.25rem;
  background-color: #18181b;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  transition: all 0.25s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0%)' : 'translateX(100%)')};

  @media (min-width: ${screens.mobileL}) {
    position: fixed;
    top: auto;
    right: 50%;
    transform: translateX(50%);
    width: auto;
    height: auto;
    padding: 0;
    border-radius: 9999px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background-color: rgba(255, 255, 255, 0.08);
    box-shadow: none;
  }
`

export const StyledList = styled.ul`
  margin: 2.5rem 0;

  @media (min-width: ${screens.mobileL}) {
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0.325rem 0.4rem;
  }
`

export const StyledItem = styled.li`
  &:not(:first-child) {
    border-top: 1px solid ${colors.color3};
  }

  @media (min-width: ${screens.mobileL}) {
    width: fit-content;
    &:not(:first-child) {
      border: 0;
    }
  }
`

export const StyledActive = styled.div<StyledActiveProps>`
  z-index: -1;
  position: absolute;
  bottom: 50%;
  transform: translate(${({ $offset }) => `${$offset}px`}, 50%);
  display: none;
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  border-radius: 9999px;
  background-color: ${colors.color4};
  transition: all 0.35s cubic-bezier(0.15, 0.3, 0.25, 1);

  @media (min-width: ${screens.mobileL}) {
    display: block;
  }
`

export const StyledNavControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${screens.mobileL}) {
    display: none;
  }
`

export const StyledBlur = styled.div<StyledBlurProps>`
  z-index: 40;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};

  @media (min-width: ${screens.mobileL}) {
    display: none;
  }
`
