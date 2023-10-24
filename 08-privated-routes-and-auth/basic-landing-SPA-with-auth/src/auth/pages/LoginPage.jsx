import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function LoginPage () {
  const { onLogin } = useAuth()
  const navigate = useNavigate()
  const login = () => {
    onLogin()
    navigate('/secret-page')
  }

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={login}>Login</button>
    </>
  )
}
