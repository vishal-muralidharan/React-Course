import React from 'react'

export const ChildTwo = () => {
    console.log('Child Render')

    return (
        <div>
            <h2>ChildTwo Component</h2>
        </div>
    )
}

export const MemoisedChildTwo = React.memo(ChildTwo)
