import { useState } from 'react'
import { TodosContext } from './TodosContext'

const initTodosState = JSON.parse(window.localStorage.getItem('todos')) ?? []

export function TodoContextProvider ({ children }) {
  const [todos, setTodos] = useState(initTodosState)
  const [filter, setFilter] = useState('all')

  return (
    <TodosContext.Provider value={{
      todos,
      setTodos,
      filter,
      setFilter
    }}
    >
      {children}
    </TodosContext.Provider>
  )
}
