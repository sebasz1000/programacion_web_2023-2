import { useState, useEffect } from 'react'
import { AuthContext } from './AuthContext'

const init = () => JSON.parse(window.localStorage.getItem('isLogged')) ?? false

export function AuthContextProvider ({ children }) {
  const [isLogged, setIsLogged] = useState(init)

  useEffect(() => {
    window.localStorage.setItem('isLogged', JSON.stringify(isLogged))
  }, [isLogged])

  const onLogin = () => {
    setIsLogged(true)
  }

  const onLogout = () => {
    setIsLogged(false)
  }
  return (
    <AuthContext.Provider value={{
      isLogged,
      onLogin,
      onLogout
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}
