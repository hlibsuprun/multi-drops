import { FC, memo } from 'react'

import useDocumentTitle from '@hooks/useDocumentTitle'

export const Tasks: FC = memo(() => {
  useDocumentTitle('Tasks | Multi Drops')

  return <h1>Tasks</h1>
})
