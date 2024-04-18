import styled from 'styled-components'

import { screens } from '@assets/styles/variables'

interface StyledBlurProps {
  $isOpen: boolean
}

export const StyledHeader = styled.header`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.25rem 0;

  @media (min-width: ${screens.mobileL + 'px'}) {
    padding: 2.5rem 0;
  }
`

export const StyledBlur = styled.div<StyledBlurProps>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  opacity: 0.5;
  z-index: 40;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: black;

  @media (min-width: ${screens.mobileL + 'px'}) {
    display: none;
  }
`
