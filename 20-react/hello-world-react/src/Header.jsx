import React from "react"
import './Header.css'



function Header({ title }){
    return (
        <header className="header">
            [Logo]
            <p>{title}</p>
        </header>
    )
}


export default Header