import React from "react"
import './Content.css'

const Content = ({ children, title }) => {
    return (
        <article className="content">
            <h2>{title}</h2>
            {children}
        </article>
    )
}

export default Content