import { useEffect, useCallback, useContext } from 'react'
import { fetchGifs } from '../services/fetchGifs'
import debounce from 'just-debounce-it'
import { GifsContext } from '../context/GifsContext'

// * Custom hook refactors component logic
export const useApp = () => {
  const context = useContext(GifsContext)

  if (!context) {
    throw new Error('This component sould be within a GifsContextrovider Component')
  }

  const {
    query,
    setQuery,
    gifs,
    setGifs,
    error,
    setError,
    isLoading,
    setIsLoading,
    isFirstTime
  } = context

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

  return {
    handleUserSubmit,
    gifs,
    error,
    isLoading,
    query,
    isFirstTime
  }
}
