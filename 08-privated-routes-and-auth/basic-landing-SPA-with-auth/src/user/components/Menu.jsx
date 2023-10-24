import './Menu.css'
import { Dropdown } from './Menu/Dropdown'

export function Menu ({ menu }) {
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
            return (
              <Dropdown
                key={item.id}
                item={item}
              />
            )
          })
        }
      </ul>
    </nav>
  )
}
