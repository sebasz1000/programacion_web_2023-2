import './App.css'
import { useState } from 'react'
import { gifsMock } from './mocks/gifs'
import { Form, Header, Gifs } from './components'

function App () {
  const [query, setQuery] = useState('')
  const handleFormSubmit = (query) => {
    setQuery(query)
  }

  return (
    <>
      <Header title='Gif Search App' />
      <main>
        <Form onSubmit={handleFormSubmit} />
        <Gifs gifs={gifsMock} />
      </main>
    </>
  )
}

export default App
