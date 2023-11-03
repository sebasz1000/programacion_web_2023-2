import { useState } from 'react'
export function Form ({
  onSubmit
}) {
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const formStyle = {
    maxWidth: '300px',
    margin: '3rem auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }

  const inputStyle = {
    height: '20px',
    borderRadius: '0.4rem'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(state)
  }

  const handleOnChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value
    })
  }
  return (
    <form
      style={formStyle}
      onSubmit={handleSubmit}
    >
      <input
        type='email'
        name='email'
        style={inputStyle}
        placeholder='pepito@gmail.com'
        value={state.email}
        onChange={handleOnChange}
      />
      <input
        type='password'
        name='password'
        style={inputStyle}
        placeholder='******'
        value={state.password}
        onChange={handleOnChange}
      />
      <button type='submit'>
        Login
      </button>
    </form>
  )
}
