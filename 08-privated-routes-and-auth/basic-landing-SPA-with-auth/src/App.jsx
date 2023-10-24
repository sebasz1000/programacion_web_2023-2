import React from 'react'
import { AppRouter } from './AppRouter'
import { AuthContextProvider } from './auth/context/AuthContextProvider'

//* App is pretty clean!!
function App () {
  return (
    <>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </>
  )
}

export default App
