import { useState } from 'react'
import './Counter.css'

export function Counter(){
    const [contador, setContador] = useState(0)

 

    const handleOnclick = op =>{
        if(op === '+'){return setContador(contador + 1)}
        if(op === '-' && contador > 0){return setContador(contador - 1)}
    }
    return (
        <div className='counter'>
            <span>{contador}</span>
            <button onClick={() => handleOnclick('+')}>+</button>
            <button onClick={() => handleOnclick('-')}>-</button>
        </div>
    )
}