import { useEffect, useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

export const useTodos = (initTodosState) => {
  const todosContext = useContext(TodosContext)

  if (!todosContext) {
    throw new Error('useTodos hook component use should be within its context Provider <TodosContextProvider>')
  }

  const {
    todos,
    createTodo,
    deleteTodo,
    toggleTodo,
    clearAllTodos,
    // setTodos,
    filter,
    setFilter
  } = todosContext

  // saves current todos state within localStorage to ensure data persistence
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  /* const createTodo = (title) => {
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

  const clearAllCompleteTask = () => {
    const newTasks = todos.filter((item) => !item.completed)
    setTodos(newTasks)
  }
  */
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

  const completedTodosCount = todos.filter((item) => item.completed).length

  return {
    filter,
    todos,
    createTodo,
    toggleTodo,
    deleteTodo,
    clearAllTodos,
    handleFilterChange,
    filteredTodos,
    hasTodos,
    completedTodosCount
  }
}
