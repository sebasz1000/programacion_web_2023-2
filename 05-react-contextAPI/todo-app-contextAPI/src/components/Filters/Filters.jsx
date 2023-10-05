import './Filters.css'
import { useTodos } from '../../hooks/useTodos'
import { filters } from '../../const/filters'

export function Filters () {
  const {
    handleFilterChange,
    filter
  } = useTodos()

  const handleChange = ({ target }) => {
    handleFilterChange(target.value)
  }
  return (
    <ul className='filters'>
      {
            filters.map(({ id, value, label }) => {
              return (
                <li key={id}>
                  <input
                    type='radio'
                    id={id}
                    value={value}
                    onChange={handleChange}
                    checked={(filter === value)}
                  />
                  <label htmlFor={id}>
                    {label}
                  </label>
                </li>
              )
            })
        }
    </ul>
  )
}
