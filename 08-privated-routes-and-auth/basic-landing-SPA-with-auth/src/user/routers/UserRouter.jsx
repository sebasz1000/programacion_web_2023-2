import { Routes, Route } from 'react-router-dom'
import { HomePage, AboutUsPage, ContactUsPage, PageNotFound, ProjectsPage, ProjectDetail, SecretPage } from '../pages'
import { Header, Footer } from '../components'
import { ServicesRouter } from './ServicesRouter'

//* User Router defines every page route ay REGULAR USER can visit (private pages user can access to included)
export function UserRouter () {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/aboutus'
          element={<AboutUsPage />}
        />
        <Route
          path='/projects'
          element={<ProjectsPage />}
        />
        <Route
          path='/projects/project/:title'
          element={<ProjectDetail />}
        />
        <Route
          path='/services/*'
          element={<ServicesRouter />}
        />
        <Route
          path='/contactus'
          element={<ContactUsPage />}
        />
        <Route
          path='/secret-page'
          element={<SecretPage />}
        />
        <Route
          path='/*'
          element={<PageNotFound />}
        />
      </Routes>
      <Footer />
    </>
  )
}
