import { FC, memo } from 'react'

import useDocumentTitle from '@hooks/useDocumentTitle'

export const Drops: FC = memo(() => {
  useDocumentTitle('Drops | Multi Drops')

  return <h1>Drops</h1>
})
