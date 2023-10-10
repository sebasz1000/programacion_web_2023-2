import React from 'react'
import { Header, Footer } from './components'
import { Routes, Route } from 'react-router-dom'
import { HomePage, AboutUsPage, ContactUsPage, PageNotFound } from './pages'

function App () {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/aboutus' element={<AboutUsPage />} />
          <Route path='/contactus' element={<ContactUsPage />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
