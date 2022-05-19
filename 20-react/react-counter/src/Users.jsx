import { useState, useEffect } from "react"

import { Loading } from "./Loading"
import { Header } from "./Header"

export function Users(){
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function asyncFunction(){
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const date = await res.json()
            setUsers(date)
            setLoading(false)
        }
        asyncFunction()
    },[])

    return (
        <ul>
            <Header title="Users"/>
            <Loading load={loading} />
            {
            users.map(user => {
                return (
                    <li key={user.id}>
                        Name: {user.name}
                        <ul>
                            <li>UserName: {user.username}</li>
                            <li>Email: {user.email}</li>
                            <li>Website: {user.website}</li>
                        </ul>
                    </li>
                )
            })
        }
        </ul>
    )
}