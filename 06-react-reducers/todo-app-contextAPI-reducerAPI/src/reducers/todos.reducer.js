// *Action object struture
/* const action = {
    type: "create todo" | "toggle todo" | "delete todo" | "clear all todos",
    payload: title | {} | id | null
}
*/
export const todosReducer = (todos, action) => {
  const { type, payload } = action
  switch (type) {
    case 'create todo': {
      const newTodo = {
        id: crypto.randomUUID(),
        title: payload,
        completed: false
      }
      return [...todos, newTodo]
    }
    case 'delete todo': {
      const newTodos = todos.filter((item) => item.id !== payload)
      return newTodos
    }
    case 'toggle todo': {
      const { id, completed } = payload
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
      return newTodos
    }
    case 'clear all todos': {
      const newTasks = todos.filter((item) => !item.completed)
      return newTasks
    }
    default: {
      return todos
    }
  }
}
