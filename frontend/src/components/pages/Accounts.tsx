import { FC, memo } from 'react'

import useDocumentTitle from '@hooks/useDocumentTitle'

export const Accounts: FC = memo(() => {
  useDocumentTitle('Accounts | Multi Drops')

  return <h1>Accounts</h1>
})
