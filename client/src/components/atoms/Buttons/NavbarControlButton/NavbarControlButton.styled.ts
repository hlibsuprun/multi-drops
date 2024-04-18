import styled from 'styled-components'

import { screens } from '@assets/styles/variables'

export const StyledNavbarControlButton = styled.button`
  display: flex;
  padding: 0.5rem;
  border: 0;
  border-radius: 100%;
  background-color: transparent;

  @media (min-width: ${screens.mobileL + 'px'}) {
    display: none;
  }
`
