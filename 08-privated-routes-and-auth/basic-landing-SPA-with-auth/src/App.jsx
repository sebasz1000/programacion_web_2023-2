import React from 'react'
import { AppRouter } from './AppRouter'
import { AuthContextProvider } from './auth/context/AuthContextProvider'
import { DbContextProvider } from './db/context/DbContextProvider'

//* App is pretty clean!!
function App () {
  return (
    <>
      <AuthContextProvider>
        <DbContextProvider>
          <AppRouter />
        </DbContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
