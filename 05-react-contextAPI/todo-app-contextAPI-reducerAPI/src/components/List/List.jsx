import { useTodos } from '../../hooks/useTodos'
import './List.css'
import { Button } from '../'

export function List () {
  const {
    hasTodos,
    filteredTodos,
    handleToggle,
    handleDelete
  } = useTodos()

  return (
    <ul className='list'>
      {
        hasTodos
          ? filteredTodos.map(item =>
            <ListItem
              onToggle={handleToggle}
              onDelete={handleDelete}
              key={item.id}
              todo={item}
            />)
          : <p>No hay tareas para mostrar</p>
      }

    </ul>
  )
}

function ListItem ({ todo, onToggle, onDelete }) {
  const { id, title, completed } = todo

  const handleChange = ({ target }) => {
    onToggle(
      {
        completed: target.checked,
        id
      } // = data
    )
  }

  const handleDelete = () => {
    console.log(id)
    onDelete(id)
  }

  return (
    <li key={id} className='list-item'>
      <div>
        <input
          type='checkbox'
          checked={completed}
          onChange={handleChange}
        />
        <DashedTodo isCompleted={completed}>
          <h3>
            {title}
          </h3>
        </DashedTodo>
      </div>
      <Button
        labelText='Delete'
        type='delete'
        onClick={handleDelete}
      />
    </li>
  )
}

function DashedTodo ({ children, isCompleted }) {
  if (isCompleted) {
    return (
      <del>
        {children}
      </del>
    )
  }
  return children
}
