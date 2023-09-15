import './App.css'
import { useState, useEffect } from 'react'
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

  // * Permite ejecutar funciones asincrónicas
  useEffect(() => {
    setIsLoading(true)
    fetchGifs({ query, limit: 10 })
      .then(gifs => setGifs(gifs))
      .catch(e =>
        setError('Sorry, we had some issues over here!'))
      .finally(() => setIsLoading(false))
  }, [query])

  return (
    <>
      <Header title='Gif Search App' />
      <main>
        <Form onSubmit={handleFormSubmit} />
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
