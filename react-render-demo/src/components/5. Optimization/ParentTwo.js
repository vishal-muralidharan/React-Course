import React, { useState } from 'react'
import { MemoisedChildTwo } from './ChildTwo'

export const ParentTwo = ({ children, newCount }) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Vishal')

    console.log('ParentTwo Render')

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Victopia')}>Name - {name}</button>
            <MemoisedChildTwo name={name}/>
        </div>
    )
}
