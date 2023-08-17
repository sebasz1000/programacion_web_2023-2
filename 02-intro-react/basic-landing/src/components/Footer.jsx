import React from "react"

export function Footer(){
    const footerStyles = {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#f1f1f1",
        padding: "2rem 2em"
    }

    return(
        <footer style={footerStyles}>
            <small>Juan Sebastián Zapata</small>
            <small>Todos los derechos reservador</small> 
        </footer>
    )
}