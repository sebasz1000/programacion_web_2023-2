
export function Menu(){
    const menuStyles = {
        display: "flex",
        listStyle: "none",
        gap: "2rem"
    }
    
    const links = [
        {   
            id: 1,   
            href: 'https://www.google.com/?hl=es',
            literal: 'Google'
        }, 
        {   
            id: 2,
            href: 'https://www.google.com/?hl=es',
            literal: 'Bing'
        },
        {   
            id: 3,
            href: 'https://www.google.com/?hl=es',
            literal: 'Google'
        }
    ]

    return(
        <nav>
            <ul style={menuStyles}>
                {
                    links.map( ({href, literal, id}) => {
                        return(
                            <li key={id}>
                                  <a href={href}>{literal}</a> 
                            </li>
                        )
                    })
                }
         
            </ul>
        </nav>
    )
}