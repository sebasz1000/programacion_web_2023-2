import React from 'react'
import { Header, Footer } from './components'
import { AppRouter } from './AppRouter'

function App () {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  )
}

export default App
