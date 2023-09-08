import { Button } from './'

export function Footer ({ completedTodosCount, totalTodos, onDelete }) {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#efefef'
  }

  return (
    <footer style={footerStyle}>
      <p>
        <strong>{completedTodosCount} tareas completadas</strong>  de <strong> {totalTodos} </strong>
      </p>
      <Button
        type='delete'
        labelText='Clear all completed'
        onClick={onDelete}
      />
    </footer>
  )
}
