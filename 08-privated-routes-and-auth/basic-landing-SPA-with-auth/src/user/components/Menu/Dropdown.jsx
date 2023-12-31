import './Dropdown.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Dropdown ({ item }) {
  const [showList, setShowList] = useState(false)
  const { id, text, options, path, disablePath } = item

  const showDropdownList = (e) => setShowList(true)

  const toggleState = () => setShowList((prevState) => !prevState)

  const handleClick = (e) => {
    if (disablePath) {
      e.preventDefault()
    }
    toggleState()
  }
  const getIsCurrentPage = ({ isActive }) => {
    return isActive ? 'is-current-page' : ''
  }

  return (
    <li
      key={id}
      onMouseLeave={toggleState}
      style={{ position: 'relative' }}
    >
      <NavLink
        to={path}
        className={getIsCurrentPage}
        onMouseEnter={showDropdownList}
        onClick={handleClick}
      >
        <button
          type='button'
          className='dropdown-btn'
        >
          {text}
        </button>
      </NavLink>
      {
        showList
          ? <DropdownList options={options} />
          : null
      }
    </li>
  )
}
function DropdownList ({ options }) {
  const hasOpts = options?.length > 0

  const listStyle = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: '42px',
    width: '100%',
    backgroundColor: '#e4e4e4',
    padding: '0'
  }

  return (
    hasOpts
      ? (
        <ul style={listStyle}>
          {
            options?.map(({ id, text, path }) => {
              return (
                <li
                  key={id}
                  className='dropdown-list-item'
                >
                  <NavLink to={path}>
                    {text}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>)
      : null

  )
}
