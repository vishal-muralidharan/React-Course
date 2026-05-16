import React from 'react'
import Person from './Person'

function NameList() {
    const Names = ['Bruce', 'Diana', 'Clark']
    const Persons = [
                    { id: 1, name: 'Bruce', age: 28, skill: 'Vue' },
                    { id: 2, name: 'Clark', age: 32, skill: 'React' },
                    { id: 3, name: 'Diana', age: 27, skill: 'Angular' }
                    ]
    const PersonsList = Persons.map(person => <Person key={person.id} person={person} />)
    return (
        <div>
            {
                PersonsList
            }
        </div>
    )
}

export default NameList