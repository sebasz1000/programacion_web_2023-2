import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'
export function Menu ({ menu, color }) {
  const menuStyles = {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem'
  }

  return (
    <nav>
      <ul style={menuStyles}>
        {
                    menu.map((item) => {
                      return (<Dropdown key={item.id} item={item} />)
                    })
                }
      </ul>
    </nav>
  )
}

function Dropdown ({ item }) {
  // ! useState devuelve un arreglo
  const [showList, setShowList] = useState(false)
  const { id, text, options, path } = item

  // ! Ejemplo de setState recibiendo un valor
  const showDropdownList = (e) => setShowList(true)

  // ! Ejemplo de setState recibiendo un callback con el valor previo para manipularlo
  const toggleState = () => setShowList((prevState) => !prevState)

  // ! ClassName condicional para manejar estilos
  const btnClassName = showList ? 'is-hover' : ''

  const getIsCurrentPage = ({ isActive }) => {
    return isActive ? 'is-current-page' : ''
  }

  console.log('Me renderince Dropdown')
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
        onClick={toggleState}
      >
        <button
          type='button'
          className={btnClassName}
        >
          {text}
        </button>
      </NavLink>
      {/* ! Renderizado condicional segun el valor del estado */}
      {
        showList
          ? <DropdownList options={options} />
          : null
      }
    </li>
  )
}
function DropdownList ({ options }) {
  console.log('Me renderince DropDownList')
  const hasOpts = options?.length > 0
  const listStyle = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    top: '42px',
    width: '100%',
    backgroundColor: '#e4e4e4',
    padding: '0.8rem 0.3em'
  }
  return (
    hasOpts
      ? (
        <ul style={listStyle}>
          {
                    options?.map(({ id, text }) => {
                      return (<li key={id}>{text}</li>)
                    })

        }
        </ul>)
      : null

  )
}
