//! HINTS !!!
//* PrivateRoute is a HOC(Higher Order Component) that must WRAP the Page element that wants to be protected within

import { Navigate } from 'react-router-dom'
import { useAuth } from '../../auth/hooks/useAuth'

export function PrivateRoute ({ children }) {
  //! PrivateRoute should evaluate if isLogged (from AuthContext values) is true ir false
  //! if isLogged is true, should return the element PrivateRoute is wrapping within.
  //! if isLogged is false, should return a <Navigate /> component(from react-router-dom) that sends to LoginPage (/login)
  const { isLogged } = useAuth()
  return isLogged
    ? children
    : <Navigate to='/login' />
}
