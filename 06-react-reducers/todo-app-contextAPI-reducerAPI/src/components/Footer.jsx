import { useTodos } from '../hooks/useTodos'
import { Button } from './'

export function Footer () {
  const {
    todos,
    completedTodosCount,
    clearAllTodos
  } = useTodos()

  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#efefef'
  }

  return (
    <footer style={footerStyle}>
      <small>
        <strong>
          {completedTodosCount} tareas completadas
        </strong>  de <strong> {todos.length}</strong>
      </small>
      <Button
        className='bg-transparent text-red text-small'
        type='delete'
        labelText='Clear all completed'
        onClick={clearAllTodos}
      />
    </footer>
  )
}
