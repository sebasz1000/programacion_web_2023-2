import { useState } from 'react'
import { Form, List, Filters } from './components'

export default function App () {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  const filters = [
    {
      id: crypto.randomUUID(),
      label: 'All',
      value: 'all'
    },
    {
      id: crypto.randomUUID(),
      label: 'Completed',
      value: 'completed'
    },
    {
      id: crypto.randomUUID(),
      label: 'Pending',
      value: 'pending'
    }
  ]

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

  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
  }

  const handleFilterChange = (filterValue) => {
    console.log(filterValue)
    setFilter(filterValue)
  }

  const hasTodos = todos.length > 0
  return (
    <>
      <div className='container'>
        <h1>Todo List App</h1>
        <header className='header'>
          <Form onSubmit={createTodo} />
        </header>
        <Filters
          filters={filters}
          onChange={handleFilterChange}
          currentValue={filter}
        />
        <main>
          {
           hasTodos
             ? (<List
                 list={todos}
                 onToggle={handleToggle}
                 onDelete={handleDelete}
                />)
             : <p>No hay tareas para mostrar</p>
          }

        </main>
      </div>
    </>
  )
}
