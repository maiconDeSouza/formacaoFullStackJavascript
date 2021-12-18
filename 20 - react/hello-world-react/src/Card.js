import React from 'react'
import './Card.css'

const Card = ({title, text, img}) =>{
   return (
       <div className="card">
        <img src={img} className="img"  alt="fotos" />
        <h3>{title}</h3>
        <p>{text}</p>
       </div>
   )
}

export default Card