import { Dropdown } from './Dropdown'
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
