import { Form, List, Filters, Footer } from './components'
import { TodoContextProvider } from './context/TodosContextProvider'

export default function App () {
  return (
    <>
      <div className='container'>
        <TodoContextProvider>
          <h1>Todo List App</h1>
          <header className='header'>
            <Form />
          </header>
          <Filters />
          <main>
            <List />
          </main>
          <Footer />
        </TodoContextProvider>
      </div>
    </>
  )
}
