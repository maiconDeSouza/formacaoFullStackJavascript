import React from 'react'

function Header({titulo, subtitulo}){
    return (
       
            <header>
                <h1>{titulo}</h1>
                <h2>{subtitulo}</h2>
            </header>
        
    )
}

export default Header