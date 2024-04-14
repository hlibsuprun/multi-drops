import styled from 'styled-components'

import { colors, screens } from '@assets/styles/variables'

export const StyledNavbarHamButton = styled.button`
  display: flex;
  padding: 0.5rem;
  border: 0;
  border-radius: 100%;
  background-color: transparent;

  @media (hover) {
    cursor: pointer;

    &:hover {
      background-color: ${colors.color3};
    }
  }

  @media (min-width: ${screens.mobileL}) {
    display: none;
  }
`
