import React from "react"
import {Header, Body, Footer} from "./components"
function App(){

    const imgUrl = "https://www.icesi.edu.co/biblioteca/wp-content/uploads/2022/02/logo_icesi.png"
    return(
        <>
          <Header img={imgUrl} />
          <Body />
          <Footer />
        </>
    )
}

export default App

