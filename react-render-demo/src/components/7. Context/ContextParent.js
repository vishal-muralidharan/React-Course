import React, { createContext, useState } from 'react'
import { MemoisedChildA } from './ContextChildren'

export const CountContext = createContext()
const CountProvider = CountContext.Provider

export const ContextParent = ({children}) => {
    const [count, setCount] = useState(0)

    console.log('ContextParent Render')

    return (
        <CountProvider value={count}>
            <div>
                <button onClick={() => setCount((currentCount) => currentCount + 1)}>
                    Parent Count - {count}
                </button>
                {children}
            </div>
        </CountProvider>
    )
}