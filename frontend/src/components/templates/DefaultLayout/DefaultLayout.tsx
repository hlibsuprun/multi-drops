import { FC, memo } from 'react'
import { Outlet } from 'react-router-dom'

import { StyledMain, StyledWrapper } from './DefaultLayout.styled'

import { Header } from '@components/organisms/Header/Header'

export const DefaultLayout: FC = memo(() => {
  return (
    <StyledWrapper>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledWrapper>
  )
})
