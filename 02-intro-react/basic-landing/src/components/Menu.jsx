import { useState } from "react"
import "./Menu.css"
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
  const { id, text, options } = item

  // ! Estilos condicionales
  const buttonStyle = {
    backgroundColor: (showList ? "blue" : "white"),
    color:  (showList ? "white" : "black")
  }

  // ! Ejemplo de setState recibiendo un valor
  const showDropdownList = (e) => setShowList(true)

  // ! Ejemplo de setState recibiendo un callback con el valor previo para manipularlo
  const toggleState = () => setShowList((prevState) => !prevState)

  // ! ClassName condicional para manejar estilos
  const btnClassName = showList ? "isActive" : "" 

  console.log("Me renderince Dropdown")
  return (
    <li key={id} 
        onMouseLeave={toggleState}>
      <button type="button" 
              onMouseEnter={showDropdownList} 
              onClick={toggleState} 
              className={btnClassName}
              //style={buttonStyle}
            >
        {text}
      </button>
      { /* ! Renderizado condicional segun el valor del estado */ }
      {
        showList 
          ? <DropdownList options={options} />
          : null
      }
    </li>
  )
}
function DropdownList ({ options }) {

  console.log("Me renderince DropDownList")

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
