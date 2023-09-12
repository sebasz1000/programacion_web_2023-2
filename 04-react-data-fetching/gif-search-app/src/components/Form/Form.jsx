import './Form.css'
import { useState } from 'react'

export function Form ({ onSubmit }) {
  const [query, setQuery] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim() === '' || query.trim().length < 2) {
      return
    }
    onSubmit(query)
  }

  const handleInputChange = (e) => {
    const { target } = e
    const query = target.value
    setQuery(query)
  }

  return (
    <form
      id='search-box'
      onSubmit={handleSubmit}
    >
      <div id='input-box'>
        <label htmlFor='query-input'>
          Gif query word
        </label>
        <input
          type='text'
          id='query-input'
          placeholder='Messi, Colombia...'
          onChange={handleInputChange}
          value={query}
        />
      </div>
      <button type='submit'>
        Submit
      </button>
    </form>
  )
}
