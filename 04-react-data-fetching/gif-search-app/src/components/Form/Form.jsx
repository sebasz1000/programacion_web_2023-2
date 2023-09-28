import './Form.css'
import { useForm } from '../../hooks/useForm'

export function Form ({ onSubmit, onChange }) {
  const {
    handleSubmit,
    handleInputChange,
    query,
    inputRef
  } = useForm(onChange, onSubmit)

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
