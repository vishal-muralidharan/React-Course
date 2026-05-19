import React, { useState } from 'react'
import useInput from '../../hooks/useInput'

function UserForm() {
    const [firstName, bindFirstName, resetFN] = useInput('')
    const [lastName, bindLastName, resetLN] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFN()
        resetLN()
    }
 
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First name</label>
                    <input
                        {...bindFirstName}
                        type='text'
                    />
                </div>
                <div>
                    <label>Last name</label>
                    <input 
                        {...bindLastName}
                        type='text' 
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
