import { Button } from '../'
import './List.css'
export function List ({ list, onToggle, onDelete }) {
  const handleToggle = (todo) => onToggle(todo)
  const handleDelete = (id) => onDelete(id)

  return (
    <ul className='list'>
      {
        list.map(item =>
          <ListItem
            onToggle={handleToggle}
            onDelete={handleDelete}
            key={item.id}
            todo={item}
          />)
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
        <h3>
          {title}
        </h3>
      </div>
      <Button
        labelText='Delete'
        type='delete'
        onClick={handleDelete}
      />
    </li>
  )
}
