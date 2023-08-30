import { Form, List } from '../components'

export default function App () {
  return (
    <>
      <div className='container'>
        <h1>Todo List App</h1>
        <header className='header'>
          <Form />
        </header>
        <main>
          <List />
        </main>
      </div>
    </>
  )
}
