import styled from 'styled-components'

import { colors, screens, transitions } from '@assets/styles/variables'

interface StyledNavbarProps {
  $isOpen: boolean
}

interface StyledNavbarActiveLinkProps {
  $width: number
  $height: number
  $offset: number
}

export const StyledNavbar = styled.nav<StyledNavbarProps>`
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
  transition: all ${transitions.default.duration} ${transitions.default.easingFunction};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0%)' : 'translateX(100%)')};

  @media (min-width: ${screens.mobileL + 'px'}) {
    position: absolute;
    top: auto;
    right: 50%;
    width: auto;
    height: auto;
    padding: 0;
    border: 1px solid ${colors.color6};
    border-radius: 9999px;
    background-color: ${colors.color6};
    box-shadow: none;
    transform: translateX(50%);
  }
`

export const StyledList = styled.ul`
  margin: 2.5rem 0;

  @media (min-width: ${screens.mobileL + 'px'}) {
    gap: 1rem;
    display: flex;
    margin: 0;
    padding: 0.325rem 0.4rem;
  }
`

export const StyledItem = styled.li`
  &:not(:first-child) {
    border-top: 1px solid ${colors.color6};
  }

  @media (min-width: ${screens.mobileL + 'px'}) {
    width: fit-content;

    &:not(:first-child) {
      border: 0;
    }
  }
`

export const StyledNavbarControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${screens.mobileL + 'px'}) {
    display: none;
  }
`

export const StyledNavbarActiveLink = styled.div<StyledNavbarActiveLinkProps>`
  display: none;
  opacity: 0;
  z-index: -1;
  position: absolute;
  bottom: 50%;
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  border-radius: 9999px;
  background-color: ${colors.color4};
  transition: transform ${transitions.default.duration} cubic-bezier(0.15, 0.3, 0.25, 1);
  animation: 0s ease-in 0.3s opacity forwards;
  transform: translate(${({ $offset }) => `${$offset}px`}, 50%);

  @media (min-width: ${screens.mobileL + 'px'}) {
    display: block;
  }
`
