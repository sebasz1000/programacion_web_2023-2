import { Routes, Route } from 'react-router-dom'
import { UserRouter } from './user/routers/UserRouter'

//* App Router defines where use should be sent (/login | /any-other-path)
export function AppRouter () {
  return (
    <main>
      <Routes>
        {
          //* /login should send to Login Page
        }
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
