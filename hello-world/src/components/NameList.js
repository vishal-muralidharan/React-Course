import React from 'react'

function NameList() {
    const Names = ['Bruce', 'Clark', 'Diana']
    const nameList = Names.map(name => <h2>{name}</h2>)
    return (
        <div>
            {
                nameList
            }
        </div>
    )
}

export default NameList