import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Form } from '../components/Form'

export function LoginPage () {
  const {
    signIn,
    passwordError,
    isLoading,
    credentialsError,
    isLogged
  } = useAuth()

  const navigate = useNavigate()

  if (isLoading) {
    return <img src='https://i.gifer.com/ZKZg.gif' width='120px' height='120px' />
  }

  //* * This is important to avoid LoginPage if user is already logged in */
  if (isLogged) {
    return <Navigate to='/secret-page' />
  }

  const login = async (formInfo) => {
    try {
      await signIn(formInfo)
    } catch (e) {
      console.log(e)
    }
    navigate('/secret-page')
  }

  const gotoHomePage = () => navigate('/')

  return (
    <>
      <h1>Login Page</h1>
      <Form onSubmit={login} />
      {
        isLoading
          ? <img
              src='https://i.gifer.com/ZKZg.gif'
              width='80px'
              height='80px'
            />
          : null
      }
      {
        credentialsError
          ? <p>{credentialsError}</p>
          : null
      }
      {
        passwordError
          ? <p>{passwordError}</p>
          : null
      }
      <p>
        Go to <a href='' onClick={gotoHomePage}>Home Page</a>
      </p>
    </>
  )
}
