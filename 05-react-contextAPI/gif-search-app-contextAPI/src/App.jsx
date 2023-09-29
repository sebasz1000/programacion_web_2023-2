import './App.css'
// import { gifsMock } from './mocks/gifs'
import { Form, Header, Gifs, Footer } from './components'
import { GifsContextProvider } from './context/GifsContextProvider'

function App () {
  return (
    <>
      <Header title='Gif Search App with React Context API' />
      <GifsContextProvider>
        <main>
          <Form />
          <Gifs />
        </main>
        <Footer />
      </GifsContextProvider>
    </>
  )
}

export default App
