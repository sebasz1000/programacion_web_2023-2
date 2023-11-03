import { useAuth } from '../../../auth/hooks/useAuth'
import { Dropdown } from './Dropdown'
export function Menu ({ menu, color }) {
  const { logOut, isLogged } = useAuth()
  const menuStyles = {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem'
  }

  const logoutBtnStyle = {
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold'
  }

  const getLogoutBtn = () => {
    return isLogged
      ? (
        <li>
          <button
            style={logoutBtnStyle}
            onClick={logout}
          >
            Logout
          </button>
        </li>)
      : null
  }

  const getMenuItems = () => {
    return menu.map((item) => {
      return (
        <Dropdown
          key={item.id}
          item={item}
        />
      )
    })
  }
  const logout = () => logOut()

  return (
    <nav>
      <ul style={menuStyles}>
        {getMenuItems()}
        {getLogoutBtn()}
      </ul>
    </nav>
  )
}
