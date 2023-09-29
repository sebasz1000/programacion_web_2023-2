import './Form.css'
import { useForm } from '../../hooks/useForm'
import { useApp } from '../../hooks/useApp'

export function Form () {
  const { handleUserSubmit } = useApp()

  const {
    handleSubmit,
    handleInputChange,
    query,
    inputRef
  } = useForm(handleUserSubmit)

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
