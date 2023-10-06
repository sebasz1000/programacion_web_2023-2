import { useReducer, useState } from 'react'
import { TodosContext } from './TodosContext'
import { todosReducer } from '../reducers/todos.reducer'

const initTodosState = JSON.parse(window.localStorage.getItem('todos')) ?? []

export function TodoContextProvider ({ children }) {
  // const [todos, setTodos] = useState(initTodosState)
  const [todos, dispatch] = useReducer(todosReducer, initTodosState)
  const [filter, setFilter] = useState('all')

  const createTodo = (title) => {
    // * dispatching action object
    const action = {
      type: 'create todo',
      payload: title
    }
    dispatch(action)
  }

  const deleteTodo = (id) => {
    dispatch({
      type: 'delete todo',
      payload: id
    })
  }

  const toggleTodo = (todo) => {
    dispatch({
      type: 'toggle todo',
      payload: todo
    })
  }

  const clearAllTodos = () => {
    dispatch({
      type: 'clear all todos'
    })
  }

  return (
    <TodosContext.Provider value={{
      todos,
      createTodo,
      deleteTodo,
      toggleTodo,
      clearAllTodos,
      // setTodos,
      filter,
      setFilter
    }}
    >
      {children}
    </TodosContext.Provider>
  )
}
