import React from 'react'

export const ChildFive = ({name}) => {
    console.log('Child Five Render')
    return (
        <div>
            Hello, {name}
        </div>
    )
}

export const MemoisedChildFive = React.memo(ChildFive)