import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Form } from '../components/Form'

export function LoginPage () {
  const { onLogin } = useAuth()
  const navigate = useNavigate()
  const login = () => {
    onLogin()
    navigate('/secret-page')
  }

  const gotoHomePage = () => navigate('/')

  return (
    <>
      <h1>Login Page</h1>
      <Form />
      <button onClick={login}>
        Login
      </button>
      <p>
        Go to <a href='' onClick={gotoHomePage}>Home Page</a>
      </p>
    </>
  )
}
