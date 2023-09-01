import { Button } from '../'
import './List.css'
export function List ({ list, onToggle }) {
  const handleToggle = (todo) => onToggle(todo)

  return (
    <ul className='list'>
      {
        list.map(item =>
          <ListItem
            onToggle={handleToggle}
            key={item.id}
            todo={item}
          />)
      }

    </ul>
  )
}

function ListItem ({ todo, onToggle }) {
  const { id, title, completed } = todo

  const handleChange = ({ target }) => {
    onToggle(
      {
        completed: target.checked,
        id
      } // = data
    )
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
      />
    </li>
  )
}
