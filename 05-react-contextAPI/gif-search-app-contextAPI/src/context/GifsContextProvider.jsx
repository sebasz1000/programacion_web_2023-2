import { GifsContext } from './GifsContext'
import { useState, useRef } from 'react'

export function GifsContextProvider ({ children }) {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const isFirstTime = useRef(true)

  return (
    <GifsContext.Provider value={{
      query,
      setQuery,
      gifs,
      setGifs,
      error,
      setError,
      isLoading,
      setIsLoading,
      isFirstTime
    }}
    >
      {children}
    </GifsContext.Provider>
  )
}
