import { Button } from '../'
import './List.css'
export function List () {
  return (
    <ul className='list'>
      <li className='list-item'>
        <div>
          <input type='checkbox' />
          <h3>Tarea 1</h3>
        </div>
        <Button
          labelText='Delete'
          type='delete'
        />
      </li>

      <li className='list-item'>
        <div>
          <input type='checkbox' />
          <h3>Tarea 2</h3>
        </div>
        <Button
          labelText='Delete'
          type='delete'
        />
      </li>
    </ul>
  )
}
