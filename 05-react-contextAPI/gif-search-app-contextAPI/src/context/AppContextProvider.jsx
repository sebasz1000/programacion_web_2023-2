import { useState, useRef } from 'react'
import { AppContext } from './AppContext'

export function AppContextProvider ({ children }) {
  const [query, setQuery] = useState('')
  const [gifs, setGifs] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const isFirstTime = useRef(true)
  return (
    <AppContext.Provider value={{
      gifs,
      setGifs,
      query,
      setQuery,
      error,
      isLoading,
      setError,
      setIsLoading,
      isFirstTime
    }}
    >
      {children}
    </AppContext.Provider>
  )
}
