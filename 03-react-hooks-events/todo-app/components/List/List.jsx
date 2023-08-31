import { Button } from '../'
import './List.css'
export function List ({ list }) {
  return (
    <ul className='list'>
      {
        list.map(item =>
          <ListItem
            key={item.id}
            data={item}
          />)
      }

    </ul>
  )
}

function ListItem ({ data }) {
  const { id, title, complete } = data
  return (
    <li key={id} className='list-item'>
      <div>
        <input
          type='checkbox'
          checked={complete}
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
