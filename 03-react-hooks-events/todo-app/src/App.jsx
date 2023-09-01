import { useState } from 'react'
import { Form, List } from './components'

export default function App () {
  const [todos, setTodos] = useState([])

  const createTodo = (title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    setTodos(prevState =>
      [...prevState, newTodo])
  }

  const handleToggle = (todo) => {
    const { id, completed } = todo
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        const newTodo = {
          ...todo,
          completed
        }
        return newTodo
      }
      return todo
    })
    setTodos(newTodos)
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
             ? <List list={todos} onToggle={handleToggle} />
             : <p>No hay tareas para mostrar</p>
          }

        </main>
      </div>
    </>
  )
}
