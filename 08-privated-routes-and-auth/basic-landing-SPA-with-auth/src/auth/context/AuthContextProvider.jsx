import { useState, useEffect } from 'react'
import { AuthContext } from './AuthContext'
import { useNavigate } from 'react-router-dom'

const init = () => JSON.parse(window.localStorage.getItem('isLogged')) ?? false

export function AuthContextProvider ({ children }) {
  const [isLogged, setIsLogged] = useState(init)
  const navigate = useNavigate()

  useEffect(() => {
    window.localStorage.setItem('isLogged', JSON.stringify(isLogged))
  }, [isLogged])

  const onLogin = () => {
    setIsLogged(true)
  }

  const onLogout = () => {
    setIsLogged(false)
    navigate('/login')
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
