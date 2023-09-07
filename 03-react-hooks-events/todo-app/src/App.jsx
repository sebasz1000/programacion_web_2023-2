import { useState } from 'react'
import { Form, List, Filters, Button } from './components'

export default function App () {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  const filters = [
    {
      id: 1,
      label: 'All',
      value: 'all'
    },
    {
      id: 2,
      label: 'Completed',
      value: 'completed'
    },
    {
      id: 3,
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
    setFilter(filterValue)
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') {
      return todo.completed
    }
    if (filter === 'pending') {
      return !todo.completed
    }
    return todo
  })

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
                 list={filteredTodos}
                 onToggle={handleToggle}
                 onDelete={handleDelete}
                />)
             : <p>No hay tareas para mostrar</p>
          }

        </main>
        <footer style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', backgroundColor: '#efefef' }}>
          <p><strong>3 tareas</strong> completadas de <strong>5</strong></p>
          <Button
            type='delete'
            labelText='Clear all completed'
            onClick={() => {}}
          />
        </footer>
      </div>
    </>
  )
}
