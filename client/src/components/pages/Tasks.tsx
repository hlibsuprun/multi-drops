import { FC, memo } from 'react'

import useDocumentTitle from '@hooks/useDocumentTitle'

import { TaskManager } from '@components/organisms/TaskManager/TaskManager'

export const Tasks: FC = memo(() => {
  useDocumentTitle('Tasks | Multi Drops')

  return <TaskManager />
})
