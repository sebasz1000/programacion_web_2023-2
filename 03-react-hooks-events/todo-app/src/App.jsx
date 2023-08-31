import { useState } from 'react'
import { Form, List } from '../components'

export default function App () {
  const [todos, setTodos] = useState([])

  const createTodo = (title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      complete: false
    }
    setTodos(prevState =>
      [...prevState, newTodo])
  }

  const hasTodos = todos.length > 0
  return (
    <>
      <div className='container'>
        <h1>Todo List App</h1>
        <header className='header'>
          <Form onSubmit={createTodo} />
        </header>
        <main>
          {
           hasTodos
             ? <List list={todos} />
             : <p>No hay tareas para mostrar</p>
          }

        </main>
      </div>
    </>
  )
}
