import './App.css'
import { useState, useEffect, useCallback } from 'react'
import { fetchGifs } from './services/fetchGifs'
// import { gifsMock } from './mocks/gifs'
import { Form, Header, Gifs } from './components'

function App () {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const handleFormSubmit = (query) => {
    setQuery(query)
  }

  const handleOnChange = (query) => {
    setQuery(query)
  }

  const getGifs = useCallback(() => {
    setIsLoading(true)
    fetchGifs({ query, limit: 10 })
      .then(gifs => setGifs(gifs))
      .catch(e =>
        setError('Sorry, we had some issues over here!'))
      .finally(() => setIsLoading(false))
  }, [])

  // * Permite ejecutar funciones asincrónicas
  useEffect(() => {
    getGifs()
  }, [query])

  useEffect(() => {
    console.log('Get Gifs volvio a definirse')
  }, [getGifs])

  return (
    <>
      <Header title='Gif Search App' />
      <main>
        <Form
          onSubmit={handleFormSubmit}
          onChange={handleOnChange}
        />
        <Gifs
          gifs={gifs}
          error={error}
          isLoading={isLoading}
        />
      </main>
    </>
  )
}

export default App
