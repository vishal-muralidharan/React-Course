import React, {useState} from 'react'

const InitState = {
    fname: 'Bruce',
    lname: 'Wayne'
}

export const ObjectUseState = () => {
    const [person, setPerson] = useState(InitState)

    const changePerson = () => {
        /* person.fname = 'Clark'
        person.lname = 'Kent'

        setPerson(person) */

        const newPerson = {...person}
        newPerson.fname = 'Clark'
        newPerson.lname = 'Kent'

        setPerson(newPerson)

    }

    return (
        <div>
            <button onClick={changePerson}>{person.fname} {person.lname}</button>
        </div>
    )
}
