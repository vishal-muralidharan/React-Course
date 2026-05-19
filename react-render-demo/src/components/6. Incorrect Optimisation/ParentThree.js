import React, { useState } from 'react'
import { MemoisedChildThree } from './ChildThree'

export const ParentThree = ({ children, newCount }) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Vishal')

    console.log('ParentThree Render')

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Victopia')}>Name - {name}</button>
            <MemoisedChildThree name={name}>
                <strong>Hello</strong>
            </MemoisedChildThree>
        </div>
    )
}
