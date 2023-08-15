import React from "react";

export function Header({ title, color }) {

    const componentStyle = {
        backgroundColor: color,
        color: 'white'
    }

    return (
        <>
            <h2 style={componentStyle} className="main-title">
                { title }
            </h2>
        </>
    )
}