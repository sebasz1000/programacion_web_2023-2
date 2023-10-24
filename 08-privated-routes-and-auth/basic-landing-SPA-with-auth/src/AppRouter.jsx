import { Routes, Route } from 'react-router-dom'
import { HomePage, AboutUsPage, ContactUsPage, PageNotFound, ProjectsPage } from './pages'
import { ServicesRouter } from './routers/ServicesRouter'
import { ProjectDetail } from './pages/ProjectDetail'

export function AppRouter () {
  return (
    <main>
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
          path='/*'
          element={<PageNotFound />}
        />
      </Routes>
    </main>
  )
}
