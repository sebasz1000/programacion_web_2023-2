import { Routes, Route } from 'react-router-dom'
import { AuditPage, BrandingDesignPage, WebConsultingPage } from '../pages'
export function ServicesRouter () {
  return (
    <>
      <h1>Services</h1>
      <Routes>
        <Route
          path='/web-consulting'
          element={<WebConsultingPage />}
        />
        <Route
          path='/branding-design'
          element={<BrandingDesignPage />}
        />
        <Route
          path='/audit'
          element={<AuditPage />}
        />
      </Routes>
    </>
  )
}
