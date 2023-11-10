import { useEffect, useState } from 'react'
import { useAuth } from '../../auth/hooks/useAuth'
import { useDb } from '../../db/hook/useDb'

const initFormState = {
  name: '',
  age: '',
  isCrazy: false
}

export function SecretPage () {
  const { auth } = useAuth()
  const {
    getFriends,
    friends,
    addFriend
  } = useDb()

  const [formState, setFormState] = useState(initFormState)

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: '2rem',
    borderTop: '1px solid gray',
    margin: '3rem 0',
    padding: '2rem 1rem'
  }
  const tableStyle = {
    margin: '0 auto',
    border: '1px solid gray'
  }

  const tdStyle = {
    border: '1px solid gray',
    padding: '1rem'
  }

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.4rem',
    margin: '1rem 2rem'
  }
  /*
  ? No required anymore to make a fetch request again thanks to firebase onSnapshot listener within DbContextProvider
  useEffect(() => {
    getFriends()
  }, [])
*/
  const handleOnChange = ({ target }) => {
    const { name, value, checked, type } = target
    setFormState({
      ...formState,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, age } = formState
    if (name.trim() === '' || age === null) {
      return
    }
    addFriend(formState)
    setFormState(initFormState)
  }

  const { name, age, isCrazy } = formState

  return (
    <>
      <h1>Secret Page</h1>
      <h3>{auth.currentUser.email}</h3>
      <p>Shhhh... this page is secret</p>
      <small>You must be logged to see me</small>
      <section style={sectionStyle}>
        <article>
          <h3>Add new Friend</h3>
          <form
            style={formStyle}
            onSubmit={handleSubmit}
          >
            <label htmlFor='name'>
              Name
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Pepito perezz...'
                onChange={handleOnChange}
                value={name}
              />
            </label>
            <label htmlFor='age'>
              Age
              <input
                type='number'
                name='age'
                id='age'
                placeholder='100'
                onChange={handleOnChange}
                value={age}
              />
            </label>
            <label htmlFor='isCrazy'>

              <input
                type='checkbox'
                name='isCrazy'
                id='isCrazy'
                onChange={handleOnChange}
                checked={isCrazy}
              />
              is Crazy?
            </label>
            <button type='submit'>
              Add friend
            </button>
          </form>
        </article>

        <article>
          <h2>List of Friends</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <td style={tdStyle}>Name</td>
                <td style={tdStyle}>age</td>
                <td style={tdStyle}>is Crazy?</td>
              </tr>
            </thead>
            <tbody>
              {
            friends.map(({ name, id, age, isCrazy }) => {
              return (
                <tr key={id}>
                  <td style={tdStyle}>{name}</td>
                  <td style={tdStyle}>{age}</td>
                  <td style={tdStyle}>{isCrazy ? 'Yes' : 'Nope'}</td>
                </tr>
              )
            })
          }
            </tbody>
          </table>
        </article>
      </section>
    </>
  )
}
