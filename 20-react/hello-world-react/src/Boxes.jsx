import React from "react"
import Box from "./Box"
import './Boxes.css'


const Boxes = () => {
    return (
        <div className="boxes">
        <Box color="red" />
        <Box color="blue" />
        <Box color="orange" />
        </div>

    )
}

export default Boxes