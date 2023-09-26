import './Form.css'
import { useState, useRef } from 'react'

export function Form ({ onSubmit, onChange }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
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
    onChange(query)
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
          ref={inputRef}
        />
      </div>
      <button type='submit'>
        Submit
      </button>
    </form>
  )
}
