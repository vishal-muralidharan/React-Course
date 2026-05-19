import React, { createContext, useState } from 'react'
import { ChildA } from './ContextChildren'

export const CountContext = createContext()
const CountProvider = CountContext.Provider

export const ContextParent = () => {
    const [count, setCount] = useState(0)

    console.log('ContextParent Render')

    return (
        <CountProvider value={count}>
            <div>
                <button onClick={() => setCount((currentCount) => currentCount + 1)}>
                    Parent Count - {count}
                </button>
                <ChildA />
            </div>
        </CountProvider>
    )
}