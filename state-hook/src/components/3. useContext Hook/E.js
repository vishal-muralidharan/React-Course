import React, { useContext } from 'react'
import F from './F'
import UserContext from './UserContext'

const E = () => {
    const context = useContext(UserContext)

    return (
        <div>
            Component E Context: {context}
            <F />
        </div>
    )
}

export default E