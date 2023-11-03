import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { AuthContext } from './AuthContext'

// const init = () => JSON.parse(window.localStorage.getItem('isLogged')) ?? false
// ! for managing users in firebase https://firebase.google.com/docs/auth/web/manage-users
export function AuthContextProvider ({ children }) {
  const [isLogged, setIsLogged] = useState(false)
  const [passwordError, setPasswordError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)//* Starts in true to let auth initializes
  const [credentialsError, setCredentialsError] = useState(null)

  console.log('User is Logged:', isLogged)

  // * check Medim post about it https://medium.com/firebase-developers/why-is-my-currentuser-null-in-firebase-auth-4701791f74f0
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsLogged(!!user)
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signIn = async (userInfo) => {
    //* Resets errors
    setPasswordError(null)
    setCredentialsError(null)
    const { email, password } = userInfo

    //* userInfo email and password must have any character
    if (email.trim() === '' || password.trim() === '') {
      setCredentialsError('Please write a valid email or password')
      return
    }

    //* password must have at least 6 letters
    if (password.trim().length < 6) {
      setPasswordError('Password must contain at least 6 characters long')
      return
    }

    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .catch((e) => {
        // ** If user email is already in firebase **** //
        if (e.code === 'auth/email-already-in-use') {
          signInWithEmailAndPassword(auth, email, password)
            .catch(({ code }) => {
              if (code === 'auth/invalid-login-credentials') {
                setCredentialsError(`Wrong password for user ${email}`)
              }
              throw new Error(e)
            })
          return
        }
        setIsLoading(false)
        throw new Error(`Error authentication with Firebase: ${e}`)
      })
      .finally(() => setIsLoading(false))
  }

  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(res => console.log(res))
    // navigate('/login')
  }

  return (
    <AuthContext.Provider value={{
      isLogged,
      signIn,
      logOut,
      isLoading,
      passwordError,
      credentialsError,
      auth
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}
