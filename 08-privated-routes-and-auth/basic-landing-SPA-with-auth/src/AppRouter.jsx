import { Routes, Route } from 'react-router-dom'
import { UserRouter } from './user/routers/UserRouter'

//* App Router defines where use should be sent (/login | /any-other-path)
export function AppRouter () {
  return (
    <main>
      <Routes>
        <Route
          path='/login'
          element={<></>}
        />
        <Route
          path='/*'
          element={<UserRouter />}
        />
      </Routes>
    </main>
  )
}
