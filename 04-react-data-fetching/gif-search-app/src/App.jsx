import './App.css'
import { useState, useEffect } from 'react'
import { gifsMock } from './mocks/gifs'
import { Form, Header, Gifs } from './components'

const API_KEY = 'SlOkIUGOy2HmwKE24rYj36FwbuN8uoop'
const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=messsi`

function App () {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const [gifs, setGifs] = useState(null)
  const handleFormSubmit = (query) => {
    setQuery(query)
  }

  // * Permite ejecutar funciones asincrónicas
  useEffect(() => {
    // * Hacemos fecthing de datos
    fetch(BASE_URL)
      .then(res => {
        if (!res.ok) {
          throw new Error('Error fetching data from API')
        }
        return res.json()
      })
      .then(({ data }) => {
        // seteamos el estado
        // TODO: Continuar con mapping & modeling
        console.log(data)
      })
      .catch((e) => {
        console.log(e)
        setError('Sorry, we had some issues over here!')
      })
  }, [query])

  return (
    <>
      <Header title='Gif Search App' />
      <main>
        <Form onSubmit={handleFormSubmit} />
        <Gifs gifs={gifsMock} error={error} />
      </main>
    </>
  )
}

export default App
