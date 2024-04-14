import { FC, memo } from 'react'

import { StyledLogo } from './Logo.styled'

import { RocketIcon } from '@components/atoms/Icons/RocketIcon'

export const Logo: FC = memo(() => {
  return (
    <StyledLogo>
      <RocketIcon size="2.5rem" />
      Multi Drops
    </StyledLogo>
  )
})
