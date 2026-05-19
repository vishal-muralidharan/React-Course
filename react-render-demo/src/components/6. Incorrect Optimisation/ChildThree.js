import React from 'react'

export const ChildThree = ({children, name}) => {
    console.log('Child Render')

    return (
        <div>
            <h2>{children} {name}</h2>
        </div>
    )
}

export const MemoisedChildThree = React.memo(ChildThree)
