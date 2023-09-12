import { Form, List, Filters, Footer } from './components'
import { filters } from './const/filters'
import { useTodos } from './hooks/useTodos'
const initTodosState = JSON.parse(window.localStorage.getItem('todos')) ?? []

export default function App () {
  const {
    filter,
    todos,
    createTodo,
    handleDelete,
    handleToggle,
    handleFilterChange,
    filteredTodos,
    hasTodos,
    completedTodosCount,
    clearAllCompleteTask
  } = useTodos(initTodosState)

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
          <List
            showList={hasTodos}
            list={filteredTodos}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </main>
        <Footer
          totalTodos={todos.length}
          completedTodosCount={completedTodosCount}
          onDelete={clearAllCompleteTask}
        />
      </div>
    </>
  )
}
