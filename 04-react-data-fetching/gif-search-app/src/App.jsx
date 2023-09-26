import './App.css'
import debounce from 'just-debounce-it'
import { useState, useEffect, useCallback, useRef } from 'react'
import { fetchGifs } from './services/fetchGifs'
// import { gifsMock } from './mocks/gifs'
import { Form, Header, Gifs } from './components'

function App () {
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

  console.log(isFirstTime)
  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = (query === '')
    }
  }, [query])

  const getGifs = useCallback(
    debounce((query) => {
      fetchGifs({ query, limit: 10 })
        .then(gifs => setGifs(gifs))
        .catch(e =>
          setError('Sorry, we had some issues over here!'))
        .finally(() => setIsLoading(false))
    }, 300)
    , [])

  // * Permite ejecutar funciones asincrónicas
  /* useEffect(() => {
    getGifs(query)
  }, [query]) */

  useEffect(() => {
    console.log('Get Gifs volvio a definirse')
  }, [getGifs])

  return (
    <>
      <Header title='Gif Search App' />
      <main>
        <Form
          onSubmit={handleUserSubmit}
          onChange={handleUserSubmit}
        />
        <Gifs
          gifs={gifs}
          error={error}
          isLoading={isLoading}
          query={query}
          isFirstTime={isFirstTime.current}
        />
      </main>
    </>
  )
}

export default App
