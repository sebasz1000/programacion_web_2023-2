import React from "react"
import { Menu } from "./Menu"
import { MenuBrand } from "./MenuBrand"
export function Header({img}){
    const headerStyles = {
        display: "flex",
        justifyContent: "space-between",
        padding: "2rem"
    }
 
    return(
        <header style={headerStyles}>
           <MenuBrand img={img} />
           <Menu />          
        </header>
    )
}