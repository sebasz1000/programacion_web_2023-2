import './App.css'
// import { gifsMock } from './mocks/gifs'
import { Form, Header, Gifs, Footer } from './components'
import { useApp } from './hooks/useApp'

function App () {
  const {
    handleUserSubmit,
    gifs,
    error,
    isLoading,
    query,
    isFirstTime
  } = useApp()
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
      <Footer
        gifs={gifs}
        query={query}
      />
    </>
  )
}

export default App
