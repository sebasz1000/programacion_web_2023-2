import { Link } from 'react-router-dom'

export function PageNotFound () {
  return (
    <>
      <h1>404 Page not found</h1>
      <p>Sorry this page is not available</p>
      <Link to='/'>Go back to landing page</Link>
    </>
  )
}
