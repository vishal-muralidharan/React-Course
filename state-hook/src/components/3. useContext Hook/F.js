import React, { useContext } from 'react'
import UserContext from './UserContext'

const F = () => {
    const username = useContext(UserContext)
    return <div>Hello, {username}</div>
}

export default F