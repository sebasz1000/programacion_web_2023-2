export function Form () {
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

  return (
    <form style={formStyle}>
      <input
        type='text'
        style={inputStyle}
        placeholder='pepito@gmail.com'
      />
      <input
        type='password'
        style={inputStyle}
        placeholder='******'
      />
    </form>
  )
}
