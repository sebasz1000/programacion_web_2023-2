import { useState, useRef, useEffect, useCallback } from 'react'
import { fetchGifs } from '../services/fetchGifs'
import debounce from 'just-debounce-it'

// * Custom hook refactors component logic
export const useApp = () => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const isFirstTime = useRef(true)

  const handleUserSubmit = (query) => {
    setIsLoading(true)
    getGifs(query)
    setQuery(query)
  }

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = (query === '')
    }
  }, [query])

  // * useCallback memoize(cache) functions. Debouncer requires it
  // ? This instruction(comment) disables eslint check for next line
  // eslint-disable-next-line
  const getGifs = useCallback(
    debounce((query) => {
      fetchGifs({ query, limit: 20 })
        .then(gifs => setGifs(gifs))
        .catch(e =>
          setError('Sorry, we had some issues over here!'))
        .finally(() => setIsLoading(false))
    }, 300)
    , [])

  // * useEffect lets asyncronous function excecution (async & await)
  /* useEffect(() => {
      getGifs(query)
    }, [query]) */

  useEffect(() => {
    console.log('Get Gifs volvio a definirse')
  }, [getGifs])

  return {
    handleUserSubmit,
    gifs,
    error,
    isLoading,
    query,
    isFirstTime
  }
}
