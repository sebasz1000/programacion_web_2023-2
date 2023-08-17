import React from "react"

export function Menu(){
    const menuStyles = {
        display: "flex",
        listStyle: "none",
        gap: "2rem"
    }
    return(
    <ul style={menuStyles}>
        <li>
           <a href="">Link 1</a> 
        </li>
        <li>
            <a href="">Link 2</a> 
        </li>
        <li>
            <a href="">Link 3</a> 
        </li>
    </ul>
    )
}