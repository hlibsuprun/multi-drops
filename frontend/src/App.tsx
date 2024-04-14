import { FC, memo } from 'react'
import { Router } from '@router/Router'

import { GlobalStyle } from '@assets/styles/global.styled'

export const App: FC = memo(() => {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  )
})
