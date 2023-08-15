import React from 'react'
import { Header, Body } from './components'

export function App(){
    // La markup HTML
    return(
        <>
            { /* Este es el Header */}
            <Header title="Hello world" color="red"/>
            <Header title="other title" color="blue"/>

            { /* Este es el Body */}
            <Body />

        </>
    )
}