import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('This component should be wrapped within AuthContextProvider')
  }

  const {
    isLogged,
    signIn,
    signInWithGoogle,
    logOut,
    passwordError,
    credentialsError,
    isLoading,
    auth
  } = context

  return {
    credentialsError,
    passwordError,
    isLogged,
    isLoading,
    auth,
    signIn,
    signInWithGoogle,
    logOut
  }
}
