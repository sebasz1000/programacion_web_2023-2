import './Filters.css'
export function Filters ({ onChange, currentValue, filters }) {
  const handleChange = ({ target }) => {
    onChange(target.value)
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
                    checked={(currentValue === value)}
                  />
                  <label htmlFor={id}>{label}</label>
                </li>
              )
            })
        }
    </ul>
  )
}
