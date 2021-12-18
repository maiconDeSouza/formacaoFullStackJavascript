import React from 'react'
import './Content.css'


const Content = ({title, children}) =>{
    return (
        <article className="article">
            <h2>{title}</h2>
            {children}
        </article>
    )
}

export default Content