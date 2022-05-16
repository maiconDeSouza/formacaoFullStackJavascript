import React from "react"
import './Box.css'


function Box({color}){
    const divStyle = {
        background: color,
        
        
      }
    return (
        <div className="box"  style={divStyle}></div>
    )
}

export default Box