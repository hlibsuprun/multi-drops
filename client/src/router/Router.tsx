import { FC, memo } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Tasks } from '@components/pages/Tasks'
import { Drops } from '@components/pages/Drops'
import { Accounts } from '@components/pages/Accounts'
import { DefaultLayout } from '@components/templates/DefaultLayout/DefaultLayout'

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/drops" element={<Drops />} />
        <Route path="/accounts" element={<Accounts />} />
      </Route>
    </Routes>
  )
})
