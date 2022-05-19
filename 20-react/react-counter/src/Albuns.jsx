import { useState, useEffect } from "react"

import { Loading } from "./Loading"
import { Header } from "./Header"


export function Albuns(){
    const [albuns, setAlbuns] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect( () =>{
       fetch('https://jsonplaceholder.typicode.com/albums')
       .then(res => res.json())
       .then(date => setAlbuns(date))
       setLoading(false)
    },[])
    return (
       
        <ul>
            <Header title="Albuns"/>
            <Loading load={loading} />
            {
                albuns.map(el =>{
                    return <li key={el.id}>{el.title}</li>
                })
            }
        </ul>
    )
}