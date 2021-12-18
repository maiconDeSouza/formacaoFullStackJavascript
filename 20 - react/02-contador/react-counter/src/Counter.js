import React, {useState} from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleOnClick = (e) => {
        const el = e.target.innerText

        if(el === '-'){
            setCount(count - 1)
        } else {
            setCount(count + 1)
        }
    }

    return (
        <div className="counter">
            <span>{count}</span>
            <button onClick={handleOnClick}>-</button>
            <button onClick={handleOnClick}>+</button>
        </div>
    )
}

export default Counter