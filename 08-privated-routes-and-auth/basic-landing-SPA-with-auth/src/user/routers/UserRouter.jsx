import { Routes, Route } from 'react-router-dom'
import { HomePage, AboutUsPage, ContactUsPage, PageNotFound, ProjectsPage, ProjectDetail, SecretPage } from '../pages'
import { Header, Footer } from '../components'
import { ServicesRouter } from './ServicesRouter'
import { PrivateRoute } from './PrivateRoute'
import { useAuth } from '../../auth/hooks/useAuth'

//! HINT for PrivateRoute below!!
//* User Router defines every page route ay REGULAR USER can visit (private pages user can access to included)
export function UserRouter () {
  const { isLogged } = useAuth()

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
          element={
            //* PrivateRoute wraps the Page element to be protected within as a children
            //* PrivateRoute must evaluate if isLogged is true/false
            //* if isLogged is true, should return the element that it is wrapping within
            <PrivateRoute>
              <SecretPage />
            </PrivateRoute>
        }
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
