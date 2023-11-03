import { useAuth } from '../../auth/hooks/useAuth'

export function SecretPage () {
  const { auth } = useAuth()
  return (
    <>
      <h1>Secret Page</h1>
      <h3>{auth.currentUser.email}</h3>
      <p>Shhhh... this page is secret</p>
      <small>You must be logged to see me</small>
    </>
  )
}
