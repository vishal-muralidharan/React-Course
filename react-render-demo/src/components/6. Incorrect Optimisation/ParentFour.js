import React, { useCallback, useMemo, useState } from 'react'
import { MemoisedChildThree } from './ChildThree'
import { MemoisedChildFive } from './ChildFive'

export const ParentFour = ({ children, newCount }) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Vishal')

    const person = {
        fn: 'Bruce', ln: 'Wayne'
    }

    const MemoisedPerson = useMemo(() => person, [])

    const handleClick = () => {}

    const MemoisedHandleClick = useCallback(handleClick, [])

    console.log('ParentFour Render')

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Victopia')}>Name - {name}</button>
            {/* <MemoisedChildThree name={name}>
                <strong>Hello</strong>
            </MemoisedChildThree> */}
            {/* <MemoisedChildFive name={name} person={MemoisedPerson}/> */}
            <MemoisedChildFive name={name} handleClick={MemoisedHandleClick}/>
        </div>
    )
}
