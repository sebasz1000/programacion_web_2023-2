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
  const { id, text, options } = item
  return (
    <li key={id}>
      <button>{text}</button>
      <DropdownList options={options} />
    </li>
  )
}
function DropdownList ({ options }) {
  return (
    <ul>
      {
         options?.map(({ id, text }) => {
           return (<li onClick={() => window.alert('Click')} key={id}>{text}</li>)
         })
     }
    </ul>
  )
}
