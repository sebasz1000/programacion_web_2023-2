import './Form.css'
import { useState } from 'react'

const initInputValue = ''

export function Form ({ onSubmit }) {
  const [inputValue, setInputValue] = useState(initInputValue)

  const disableBtn = inputValue.trim() === ''
  const handleChange = (e) =>
    setInputValue(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (disableBtn) {
      return
    }
    onSubmit(inputValue)
    setInputValue(initInputValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder='Hacer tareas...'
      />
      <button
        className='add-btn'
        type='submit'
        disabled={disableBtn}
      >
        Add task
      </button>
    </form>
  )
}
