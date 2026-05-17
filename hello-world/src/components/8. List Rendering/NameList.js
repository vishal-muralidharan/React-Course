import React from 'react'
import Person from './Person'

function NameList() {
    const Names = ['Bruce', 'Diana', 'Clark']

    const Persons = [
                    { id: 1, name: 'Bruce', age: 28, skill: 'Vue' },
                    { id: 2, name: 'Clark', age: 32, skill: 'React' },
                    { id: 3, name: 'Diana', age: 27, skill: 'Angular' }
                    ]

    const nameList = Names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

    return (
        <div>
            {
                nameList
            }
        </div>
    )
}

export default NameList