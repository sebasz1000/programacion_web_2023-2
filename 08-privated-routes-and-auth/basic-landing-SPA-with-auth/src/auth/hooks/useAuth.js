import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('This component should be wrapped within AuthContextProvider')
  }

  const { isLogged, onLogin, onLogout } = context
  return {
    isLogged,
    onLogin,
    onLogout
  }
}
