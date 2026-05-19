import React from 'react'

function Child() {
    console.log('Child Render')

    return (
        <div>
            <h2>Child Component</h2>
        </div>
    )
}

export default React.memo(Child)
